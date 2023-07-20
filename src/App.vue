<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useCounterStore } from '@/stores/counter.js'
const storeObj = useCounterStore()
</script>

<template>
  <header>
    <div class="wrapper">我是具体内容{{ storeObj.count }}</div>
  </header>
  <RouterView />
</template>

<style scoped></style>
