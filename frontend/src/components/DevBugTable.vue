<template>
  <table class="table w-full">
    <thead>
      <tr>
        <th>Bug名</th>
        <th>类型</th>
        <th>创建时间</th>
        <th>解决时间</th>
        <th>状态</th>
        <th>严重等级</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <DevBugTableRowVue v-for="item in list" :key="item._id" :item="item" />
    </tbody>
  </table>
</template>

<script setup>
import DevBugTableRowVue from "./DevBugTableRow.vue";
import useBugfixStore from "../stores/bugfix";
import { computed } from "vue";
const bugfixStore = useBugfixStore();
const list = computed(() => {
  return bugfixStore.feature_detail.bugs;
});
</script>
