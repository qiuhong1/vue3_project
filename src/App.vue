<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useCounterStore } from '@/stores/counter.js'
const storeObj = useCounterStore()
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
