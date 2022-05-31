<template>
  <div class="form-control">
    <label class="input-group input-group-md">
      <span>筛选</span>
      <select
        @change="setFilter"
        v-model="status"
        class="select select-bordered"
      >
        <option selected value="">全部</option>
        <option value="0">待完成</option>
        <option value="1">待测试</option>
        <option value="2">待修复</option>
        <option value="3">已完成</option>
      </select>
    </label>
  </div>
</template>

<script setup>
import { ref } from "vue";
import useBugfixStore from "../stores/bugfix";
const bugfixStore = useBugfixStore();
const status = ref("");
const setFilter = () => {
  bugfixStore.get_features_by_filter({
    status: status.value,
    devid: bugfixStore.user_info._id,
  });
};
</script>
