<template>
  <div>
    <label for="my-modal" class="btn modal-button ml-5">新增测试</label>
    <input type="checkbox" id="my-modal" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-lg text-center">新增测试</h3>
        <form>
          <div class="form-control">
            <div class="input-group mt-1">
              <span class="w-4/12 text-center">项目名</span>
              <select class="select select-bordered w-8/12" v-model="featureid" required>
                <option disabled selected value="0">请选择项目名</option>
                <option :value="item._id" v-for="item in featrueStore.featureList" :key="item.id">{{item.name}}</option>
              </select>
            </div>
            <label class="input-group mt-1">
              <span class="w-4/12 text-center">测试名</span>
              <input
                type="text"
                placeholder="请输入测试名"
                class="input input-bordered w-8/12"
                v-model="testname"
                required
              />
            </label>
          </div>
          <div class="flex justify-evenly">
            <div class="confirm modal-action">
              <label for="my-modal" class="btn" @click="add">确认</label>
            </div>
            <div class="modal-action">
              <label for="my-modal" class="btn">返回</label>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
//需要合并后获得 查询所有项目名称的store
import {ref,onMounted} from "vue"
import useTestStore from "../stores/test.js";
import featureListStore from "../stores/FeatureList.js"
import { http,api } from "../utils/http.js";

let testStore = useTestStore();
let featrueStore = featureListStore();
let featureid = ref("0")
let testname = ref("")


let add = ()=>{
  let name = featrueStore.featureList.filter(item  => item._id == featureid.value)[0].name
  testStore.addTestItem({name:name,testname:testname.value,featureid:featureid.value})
  featureid.value='0',
  testname.value=""
}

onMounted(async()=>{
  featrueStore.initFeatureList()
})
</script>

<style>
</style>