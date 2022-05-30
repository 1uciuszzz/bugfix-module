<template>
  <div class="container mx-auto">
    <div class="bg-gray-500 mb-8">
      <div class="navbar bg-gray-500">
        <div class="flex-none">
          <ul class="menu menu-horizontal p-0">
            <li>
              <router-link class="nav-btn" to="/manager/person">PersonManager</router-link>
            </li>
            <li>
              <a>BugList</a>
            </li>
            <li>
              <a>TestList</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

};
</script>

<style>
</style>