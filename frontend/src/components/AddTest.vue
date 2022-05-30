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
              <select class="select select-bordered w-8/12" v-model="name" required>
                <option disabled selected value="0">请选择项目名</option>
                <option value="1">T-shirts</option>
                <option value="2">Mugs</option>
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
            <!-- <label class="input-group mt-1">
              <span class="w-4/12 text-center">测试人员</span>
              <input
                type="text"
                placeholder="请输入测试员工名"
                class="input input-bordered w-8/12"
              />
            </label> -->
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
import {ref, watch,onMounted} from "vue"
import useTestStore from "../stores/test.js"

let testStore = useTestStore();
let name = ref("0")
let testname = ref("")

let add = ()=>{
  testStore.addTestItem({name:name.value,testname:testname.value})
  name.value='0',
  testname.value=""
}
</script>

<style>
</style>