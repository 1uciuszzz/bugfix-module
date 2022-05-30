<template>
  <div class="flex">
    <div class="form-control w-5/12">
      <label class="input-group">
        <span class="w-32">bug搜索</span>
        <input
          type="text"
          placeholder="请输入bug名模糊搜索"
          class="input input-bordered w-full"
        />
      </label>
    </div>
    <div class="form-control w-4/12 ml-5">
      <div class="input-group">
        <button class="btn">分组</button>
        <select class="select select-bordered w-48">
          <option selected>全部</option>
          <option>待解决</option>
          <option>待验收</option>
          <option>待修复</option>
          <option>已解决</option>
        </select>
      </div>
    </div>
    <label for="my-modal" class="btn modal-button">新增bug</label>

    <!-- Put this part before </body> tag -->
    <input type="checkbox" id="my-modal" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-lg text-center">新增bug</h3>
        <p class="py-4">
          
        </p>
        <div class="modal-action">
          <label for="my-modal" class="btn">Yay!</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

let showAdd = ref(false);
</script>

<style>
</style>