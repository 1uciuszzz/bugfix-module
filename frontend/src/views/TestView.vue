<template>
  <div class="container mx-auto w-10/12 hh p-5">
    <search />
    <bug-list />
  </div>
</template>

<script setup>
import {ref} from 'vue'
import Search from "../components/Search.vue"
import BugList from "../components/BugList.vue"
</script>

<style>
</style>