<template>
  <div>
    <label
      :class="canClick"
      :for="'dev_change_status' + props._id"
      class="btn btn-outline modal-button"
      >{{ label }}</label
    >
    <input
      type="checkbox"
      :id="'dev_change_status' + props._id"
      class="modal-toggle"
    />
    <div class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-lg">你确定要执行这个操作吗</h3>
        <div class="modal-action">
          <label
            @click="handleClick"
            :for="'dev_change_status' + props._id"
            class="btn btn-success"
            >确定</label
          >
          <label :for="'dev_change_status' + props._id" class="btn">取消</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "@vue/runtime-core";
import useBugfixStore from "../stores/bugfix";
const bugfixStore = useBugfixStore();
const props = defineProps({
  label: String,
  _id: String,
  bugstatus: Number,
});

const handleClick = () => {
  console.log(props._id);
  bugfixStore.set_bug_status({ _id: props._id, bugstatus: 2 });
};
const canClick = computed(() => {
  if (props.bugstatus === 2 || props.bugstatus === 4) {
    return "btn-disabled";
  }
});
</script>
