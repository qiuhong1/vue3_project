<script setup>
import { ref, onMounted } from 'vue'
import { getLlist } from '@/request/api.js'
import { useCounterStore } from '@/stores/counter.js'
import axios from 'axios'
const tableData = ref([
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
])
const init = () => {
  getLlist()
}
const storeNum = useCounterStore()
onMounted(() => init())
</script>
<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
    </el-table>
    <el-button @click="storeNum.increment()" type="primary"
      >按钮{{ storeNum.count }}</el-button
    >
  </div>
</template>
<style scoped></style>
