<template>
  <li>
    <label v-if="user.username" for="username" class="modal-button"
      ><font-awesome-icon icon="user" />{{ user.username }}</label
    >
    <router-link v-else to="/signin"
      ><font-awesome-icon icon="user" />登录</router-link
    >

    <input type="checkbox" id="username" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-lg">确定要退出登录吗</h3>
        <div class="modal-action">
          <label @click="handleClick" for="username" class="btn">确定</label>
          <label for="username" class="btn">取消</label>
        </div>
      </div>
    </div>
  </li>
</template>
<script setup>
import { computed, onMounted } from "vue";
import useBugfixStore from "../stores/bugfix";
import { useRouter } from "vue-router";
const router = useRouter();
const bugfixStore = useBugfixStore();
const user = computed(() => {
  return bugfixStore.user_info;
});

const handleClick = () => {
  bugfixStore.user_info = {
    username: "",
    type: "",
    _id: "",
  };
  localStorage.removeItem("token");
  router.replace("/signin");
};
</script>
