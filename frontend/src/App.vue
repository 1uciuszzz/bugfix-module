<template>
  <div class="h-screen">
    <NavBarVue />
    <router-view></router-view>
  </div>
</template>

<script setup>
import NavBarVue from "./components/NavBar.vue";
</script>
