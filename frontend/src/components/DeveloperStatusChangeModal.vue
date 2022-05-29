<template>
  <div>
    <label for="developer_change_status_modal" class="btn modal-button">{{
      label
    }}</label>

    <input
      type="checkbox"
      id="developer_change_status_modal"
      class="modal-toggle"
    />
    <div class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-lg">你确定要执行这个操作吗</h3>
        <div class="modal-action">
          <label for="developer_change_status_modal" class="btn btn-success"
            >确定</label
          >
          <label for="developer_change_status_modal" class="btn">取消</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  label: String,
});
</script>
