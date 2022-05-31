<template>
  <div class="card shadow-md w-full">
    <div class="card-body">
      <h2 class="card-title">功能名称:{{ feature.name }}</h2>
      <div class="grid grid-cols-3 gap-2">
        <p>
          <span class="badge badge-outline">功能ID</span>
          <span class="font-mono">{{ feature._id }}</span>
        </p>
        <p>
          <span class="badge badge-outline">开始时间</span>
          <span class="font-mono">{{
            new Date(feature.start).toLocaleString()
          }}</span>
        </p>
        <p v-if="feature.end">
          <span class="badge badge-outline">结束时间</span
          ><span class="font-mono">{{
            new Date(feature.end).toLocaleString()
          }}</span>
        </p>
        <p v-else>
          <span class="badge badge-outline">结束时间:</span>
          <span class="badge badge-warning">进行中</span>
        </p>
        <p>
          <span class="badge badge-outline">开发者ID</span
          ><span class="font-mono">{{ feature.devid }}</span>
        </p>
        <p>
          <span class="badge badge-outline">开发者姓名</span
          ><span class="font-mono">{{ feature.devname }}</span>
        </p>
        <p>
          <span class="badge badge-outline">功能优先级</span
          ><span class="font-mono">{{ feature.level }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import useBugfixStore from "../stores/bugfix";
const bugfixStore = useBugfixStore();
const feature = computed(() => {
  const { feature } = bugfixStore.feature_detail;
  if (feature) {
    return feature;
  }
});
</script>
