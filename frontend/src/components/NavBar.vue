<template>
  <div class="navbar shadow-md">
    <div class="flex-1">
      <font-awesome-icon icon="wrench" />
      <router-link to="/" class="btn btn-ghost normal-case text-xl"
        >Bugfix - Module</router-link
      >
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal p-0">
        <li>
          <router-link to="/">
            <font-awesome-icon icon="house" />
            首页</router-link
          >
        </li>

        <li>
          <router-link to="/about">
            <font-awesome-icon icon="circle-info" />
            关于</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup></script>
