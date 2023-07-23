import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})

//获取分类列表数据
import { getCategoryAPI } from '@/request/api.js'
export const getCategoryList = defineStore('category', () => {
  let categoryList = ref([])
  const getCategory = () => {
    getCategoryAPI().then((res) => {
      categoryList.value = res.result
    })
  }

  return { categoryList, getCategory }
})
