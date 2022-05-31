<template>
  <tr class="hover">
    <th @click="toDetail" class="cursor-pointer">{{ props.item.name }}</th>
    <td>{{ new Date(props.item.start).toLocaleString() }}</td>
    <td v-if="props.item.end">
      {{ new Date(props.item.end).toLocaleString() }}
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
      <div class="badge badge-outline">{{ props.item.level }}</div>
    </td>
  </tr>
</template>

<script setup>
import { computed } from "vue";
import DeveloperStatusChangeModalVue from "../components/DeveloperStatusChangeModal.vue";
import { useRouter } from "vue-router";
const router = useRouter();
const props = defineProps({
  item: Object,
});
const status = computed(() => {
  switch (props.item.status) {
    case "0":
      return "待完成";
    case "1":
      return "待测试";
    case "2":
      return "待修复";
    case "3":
      return "已完成";
  }
});
const statusStyle = computed(() => {
  switch (props.item.status) {
    case "0":
      return "badge-warning";
    case "1":
      return "badge-info";
    case "2":
      return "badge-error";
    case "3":
      return "badge-success";
  }
});
const toDetail = () => {
  router.push(`/developer/feature/${props.item._id}`);
};
</script>
