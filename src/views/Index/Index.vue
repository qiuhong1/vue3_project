<script setup>
import { onMounted, ref } from 'vue'
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import NavFixed from './components/NavFixed.vue'

import { getCategoryList } from '@/stores/counter.js'
const storeObj = getCategoryList()
onMounted(() => {
  storeObj.getCategory()
})

//控制是否吸顶
let isShowNav = ref(false)
window.addEventListener('scroll', () => {
  let height = parseInt(document.documentElement.scrollTop)
  if (height > 78) {
    isShowNav.value = true
  } else {
    isShowNav.value = false
  }
})
</script>
<template>
  <NavFixed :categoryList="storeObj.categoryList" :isShowNav="isShowNav" />
  <LayoutNav />
  <LayoutHeader :categoryList="storeObj.categoryList" />
  <RouterView />
  <LayoutFooter />
</template>
<style lang="scss" scoped>
.flexNav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
</style>
