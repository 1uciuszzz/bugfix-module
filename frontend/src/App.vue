<template>
  <div class="h-screen flex flex-col">
    <NavBarVue />
    <router-view class="flex-1 overflow-auto"></router-view>
  </div>
</template>

<script setup>
import NavBarVue from "./components/NavBar.vue";
</script>
