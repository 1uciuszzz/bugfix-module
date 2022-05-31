<template>
  <div>
    <button class="btn btn-success" @click="props.handleClick">刷新数据</button>
  </div>
</template>

<script setup>
const props = defineProps({
  handleClick: Function,
});
</script>
