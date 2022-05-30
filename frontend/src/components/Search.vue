<template>
  <div class="flex mt-5">
    <div class="form-control w-5/12">
      <label class="input-group">
        <span class="w-32">bug搜索</span>
        <input
          type="text"
          placeholder="请输入bug名模糊搜索"
          class="input input-bordered w-full"
          v-model="params.bugname"
          @input="keyChange(params.bugname)"
        />
      </label>
    </div>
    <div class="form-control w-4/12 ml-5">
      <div class="input-group">
        <button class="btn">分组</button>
        <select class="select select-bordered w-48" v-model="params.bugstatus" @change="statusChange(params.bugstatus)">
          <option v-for="item in busStatusList" :key="item.value" :value="item.value">{{item.label}}</option>
        </select>
      </div>
    </div>
    <add-bug />
  </div>
</template>

<script setup>
import AddBug from "../components/AddBug.vue"
import { ref,reactive } from "vue";

let busStatusList = reactive([{
  value:'',
  label:"全部",
},{
  value:"1",
  label:"待解决"
},{
  value:"2",
  label:"待验收"
},{
  value:"3",
  label:"待修复"
},{
  value:"4",
  label:"已解决"
}])

let params = reactive({
  bugstatus:"",
  bugname:'',
  showNum:5,
  pageIndex:1
})

//分类
let statusChange = (value)=>{
  params.bugstatus = value;
  params.pageIndex = 1;
}
//搜索
let keyChange = (value)=>{
  params.bugname = value;
  params.pageIndex = 1;
}
</script>

<style>
</style>