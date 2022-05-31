<template>
  <div class="grid place-items-center singin_bg">
    <div class="card bg-base-100 shadow-md">
      <div class="card-body">
        <form @submit.prevent="handle_signin" class="flex flex-col gap-4">
          <h1 class="text-lg">登录</h1>
          <div class="form-control">
            <label class="input-group input-group-md">
              <span>姓名</span>
              <input
                v-model="username"
                type="text"
                placeholder="username"
                class="input input-bordered input-md"
              />
            </label>
          </div>
          <div class="form-control">
            <label class="input-group input-group-md">
              <span>密码</span>
              <input
                v-model="password"
                type="password"
                placeholder="password"
                class="input input-bordered input-md"
              />
            </label>
          </div>
          <div class="flex gap-4">
            <button type="submit" class="btn btn-outline flex-1">登录</button>
            <button type="reset" class="btn btn-outline flex-1">重置</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import useBugfixStore from "../stores/bugfix";
const bugfixStore = useBugfixStore();
const router = useRouter();
const username = ref("");
const password = ref("");
const handle_signin = async () => {
  const result = await bugfixStore.signin({
    username: username.value,
    password: password.value,
  });
  if (result.status) {
    localStorage.setItem("token", result.token);
    switch (result.type) {
      case "0":
        router.replace("/manager");
        return;
      case "1":
        router.replace("/test");
        return;
      case "2":
        router.replace("/developer");
        return;
    }
  } else {
    alert(result.msg);
  }
};
</script>
