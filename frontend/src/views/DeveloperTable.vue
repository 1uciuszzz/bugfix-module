<template>
  <table class="table w-full">
    <thead>
      <tr>
        <th>功能名称</th>
        <th>开始时间</th>
        <th>结束时间</th>
        <th>当前状态</th>
        <th>重要等级</th>
      </tr>
    </thead>
    <tbody>
      <DevTableRowVue v-for="item in list" :key="item._id" :item="item" />
    </tbody>
  </table>
</template>

<script setup>
import DevTableRowVue from "./DevTableRow.vue";
import useBugfixStore from "../stores/bugfix";
import { computed } from "vue";
const bugfixStore = useBugfixStore();
const list = computed(() => {
  return bugfixStore.dev_features;
});
</script>
