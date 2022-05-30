<template>
  <div class="w-10/12 mx-auto flex flex-col gap-4">
    <header class="flex gap-2 pt-4">
      <div class="form-control">
        <label class="input-group input-group-md">
          <span>Bug搜索</span>
          <input
            type="text"
            placeholder="输入Bug名"
            class="input input-bordered input-md"
          />
        </label>
      </div>
      <div class="form-control">
        <label class="input-group input-group-md">
          <span>筛选</span>
          <select v-model="status" class="select select-bordered">
            <option disabled selected>全部</option>
            <option value="0">待完成</option>
            <option value="1">待测试</option>
            <option value="2">待修复</option>
            <option value="3">已完成</option>
          </select>
        </label>
      </div>
    </header>
    <main class="overflow-x-auto">
      <DeveloperTable />
    </main>
    <footer class="grid place-items-center p-2">
      <div class="btn-group">
        <button class="btn btn-outline">上一页</button>
        <button class="btn">1</button>
        <button class="btn">2</button>
        <button class="btn">3</button>
        <button class="btn">4</button>
        <button class="btn btn-outline">下一页</button>
      </div>
    </footer>
  </div>
</template>

<script setup>
import DeveloperTable from "./DeveloperTable.vue";
import useBugfixStore from "../stores/bugfix";
import { useRouter } from "vue-router";
import { ref } from "@vue/reactivity";
const bugfixStore = useBugfixStore();
const router = useRouter();
const status = ref("");
const list = () => {
  return bugfixStore.dev_features;
};
</script>
