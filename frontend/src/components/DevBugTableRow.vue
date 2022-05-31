<template>
  <tr class="hover">
    <th>{{ props.item.bugname }}</th>
    <td>{{ type }}</td>
    <td>
      {{ props.item.start }}
    </td>
    <td v-if="props.item.end">
      {{ props.item.end }}
    </td>
    <td v-else>
      <div class="badge badge-warning gap-2">
        <font-awesome-icon icon="spinner" />
        进行中
      </div>
    </td>
    <td>
      <div class="badge" :class="statusStyle">{{ status }}</div>
    </td>
    <td>
      <div class="badge badge-outline">{{ level }}</div>
    </td>
    <td>
      <DeveloperStatusChangeModalVue
        :bugstatus="props.item.bugstatus"
        :_id="props.item._id"
        :label="'已修复'"
      />
    </td>
  </tr>
</template>

<script setup>
import { computed } from "vue";
import DeveloperStatusChangeModalVue from "./DeveloperStatusChangeModal.vue";
const props = defineProps({
  item: Object,
});

const type = computed(() => {
  switch (props.item.bugtype) {
    case "1":
      return "代码错误";
    case "2":
      return "界面优化";
    case "3":
      return "性能问题";
    case "4":
      return "浏览器兼容";
  }
});
const status = computed(() => {
  switch (props.item.bugstatus) {
    case 1:
      return "待解决";
    case 2:
      return "待验收";
    case 3:
      return "待修复";
    case 4:
      return "已解决";
  }
});
const statusStyle = computed(() => {
  switch (props.item.bugstatus) {
    case 0:
      return "badge-warning";
    case 1:
      return "badge-info";
    case 2:
      return "badge-error";
    case 3:
      return "badge-success";
  }
});
const level = computed(() => {
  switch (props.item.level) {
    case 1:
      return "很严重";
    case 2:
      return "严重";
    case 3:
      return "一般";
  }
});
</script>
