<template>
  <div class="w-10/12 mx-auto">
    <div class=" my-8 bg-slate-400 rounded-md">
      <div class="navbar ">
        <div class="flex-none">
          <ul class="menu menu-horizontal p-0">
            <li>
              <router-link class="nav-btn" to="/manager/">PersonManage</router-link>
            </li>
            <li>
              <router-link class="nav-btn ml-5" to="/manager/feature">FeatureList</router-link>
            </li>
            <li>
              <router-link class="nav-btn ml-5" to="/manager/testlist">TestList</router-link>
            </li>
            <li>
             <router-link class="nav-btn ml-5" to="/manager/buglist">BugList</router-link>
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