<template>
  <div class="container mx-auto w-10/12 hh p-5">
    <div class="navbar bg-base-100 bg-cyan-200">
      <router-link class="btn btn-ghost normal-case text-xl" to='/test'>addTest</router-link>
      <router-link class="btn btn-ghost normal-case text-xl" to='/test/addbug'>addBug</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { ref,getCurrentInstance} from "vue";
</script>

<style>
.router-link-active{
  color: #fff;
}
</style>