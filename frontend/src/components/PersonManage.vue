<template>
  <div class>
    <div class="mb-6">
      <div class="form-control flex-row">
        <div class="input-group">
          <input type="text" placeholder="Search…" class="input input-bordered"  v-model="keyword"/>
          <button class="btn btn-square" @click="search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>


          <select class="select select-bordered mx-6" v-model="jobtype">
            <option disabled selected>Pick Job</option>
            <option value="0">Manager</option>
            <option value="1">Test</option>
            <option value="2">Developer</option>

          </select>
        </div>
        <label for="my-modal-5" class="btn modal-button">ADDPERSON</label>

        <!-- Put this part before </body> tag -->
        <input type="checkbox" id="my-modal-5" class="modal-toggle" />
        <div class="modal">
          <div class="modal-box w-5/12 max-w-5xl">
            <label for="my-modal-5" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h2 class="text-center text-3xl mb-8">新增人员</h2>
            <div class="form-control">
              <label class="input-group flex-1 text-center">
                <span class="w-4/12">Name</span>
                <input
                  type="text"
                  placeholder="please enter name"
                  class="input input-bordered w-8/12"
                  v-model="username"
                />
              </label>
              <label class="input-group flex-1 text-center my-3">
                <span class="w-4/12">PassWord</span>
                <input
                  type="text"
                  placeholder="please enter passworld"
                  class="input input-bordered w-8/12"
                  v-model="password"
                />
              </label>
              <label class="input-group flex-1 text-center">
                <span class="w-4/12">Job</span>
                <select class="select select-bordered w-8/12" v-model="type">
                  <option disabled selected value>select role</option>
                  <option value="0">Manager</option>
                  <option value="1">Test</option>
                  <option value="2">Developer</option>
                </select>
              </label>
            </div>
            <div class="modal-action">
              <label for="my-modal-5" class="btn" @click="adduser">添加</label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="overflow-x-auto w-full">
      <table class="table w-full text-center">

        <thead>
          <tr>
            <th>NAME</th>
            <th>JOB</th>

            <th>Operate</th>
          </tr>
        </thead>
        <tbody>
 
          <tr v-for="(item,index) in userStore.userList" :key="index">
            <th>{{item.username}}</th>
            <th>
              <button class="btn btn-error" v-if="item.type==1">TEST</button>
              <button class="btn btn-ghost" v-else-if="item.type==2">DEVELOPER</button>
              <button class="btn btn-accent" v-else>Manager</button>
            </th>
            <th>
              <button class="btn btn-ghost">DELETE</button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="btn-group justify-center mt-5">
      <button class="btn btn-outline">Prev</button>
      <button class="btn">1</button>
      <button class="btn btn-active">2</button>
      <button class="btn">3</button>
      <button class="btn">4</button>
      <button class="btn btn-outline">Next</button>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted, ref } from "vue";
import userListStore from "../stores/userList";
const userStore = userListStore();

let username = ref();
let password = ref();
let type = ref("");
let keyword = ref("");
let jobtype=ref("")
onMounted(async () => {
  userStore.initUserList();
});
let adduser =async () => {
  if(username.value&&password.value&&type.value){
    userStore.addUser({
    username:username.value,
    password:password.value,
    type:type.value
  })
  }else{
    alert("请输入完整参数")
  }
};
let search = async () =>{
 await userStore.searchUser({keyword:keyword.value,jobtype:jobtype.value})
}
</script>

<style>
</style>