<template>
  <div>
    <div class="flex mt-5 mb-5">
      <div class="form-control w-7/12">
        <label class="input-group">
          <span class="w-32">测试搜索</span>
          <input
            type="text"
            placeholder="请输入测试名模糊搜索"
            class="input input-bordered w-full"
            v-model="parmas.key"
          />
        </label>
      </div>
      <add-test />
    </div>
    <div class="overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr>
            <th>功能名</th>
            <th>测试名</th>
            <th>测试人员</th>
            <th>测试开始时间</th>
            <th>测试结束时间</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="active"
            v-for="item in testStore.$state.testList"
            :key="item._id"
          >
            <th>{{ item.name }}</th>
            <td>{{ item.testname }}</td>
            <td>{{ item.username }}</td>
            <td>{{ item.start}}</td>
            <td>{{ item.end }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import AddTest from "../components/AddTest.vue"
import {onMounted,reactive, watch} from "vue"
import useTestStore from '../stores/test.js'

//防抖封装
let debounceFn = (callback, delay)=>{
  let timer = null;
  return function (...list) {
    clearTimeout(timer);
    let that = this;
    timer = setTimeout(function () {
      callback.apply(that, list)
    }, delay);
  }
}

let testStore = useTestStore();
let parmas = reactive({
  key:''
})

watch(()=>parmas.key,debounceFn(()=>{
  testStore.getTestList({testname:parmas.key})
},500))


onMounted(()=>{
  testStore.getTestList();
})

</script>

<style>
</style>