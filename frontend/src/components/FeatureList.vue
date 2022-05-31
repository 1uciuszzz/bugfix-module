<template>
  <div class>
    <div class="mb-6">
      <div class="form-control flex-row">
        <div class="input-group">
          <input type="text" placeholder="Search…" class="input input-bordered" />
          <button class="btn btn-square">
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
          <select class="select select-bordered mx-6">
            <option disabled selected>Pick Job</option>
            <option>Star Wars</option>
            <option>Harry Potter</option>
            <option>Lord of the Rings</option>
            <option>Planet of the Apes</option>
            <option>Star Trek</option>
          </select>
        </div>
        <label for="my-modal-5" class="btn modal-button">ADDFEATURE</label>

        <!-- Put this part before </body> tag -->
        <input type="checkbox" id="my-modal-5" class="modal-toggle" />
        <div class="modal">
          <div class="modal-box w-5/12 max-w-5xl">
            <label for="my-modal-5" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h2 class="text-center text-3xl mb-8">新增人员</h2>
            <div class="form-control">
              <label class="input-group flex-1 text-center ">
                <span class="w-4/12">Level</span>
                <input
                  type="text"
                  placeholder="please enter Level"
                  class="input input-bordered w-8/12"
                  v-model="level"
                />
              </label>
              <label class="input-group flex-1 text-center my-3">
                <span class="w-4/12">FeatureName</span>
                <input
                  type="text"
                  placeholder="please enter featurename"
                  class="input input-bordered w-8/12"
                  v-model="featurename"
                />
              </label>
              
              <label class="input-group flex-1 text-center mb-3">
                <span class="w-4/12">DevName</span>
                <select class="select select-bordered w-8/12" v-model="devname">
                  <option disabled selected value>Select Developer</option>
                  <option :value="item.username" v-for="(item,index) in devList" :key="index">{{item.username}}</option>
                </select>
              </label>
              <label class="input-group flex-1 text-center">
                <span class="w-4/12">DevId</span>
                <select class="select select-bordered w-8/12" v-model="devId" disabled>
                  <option disabled selected value>Select DeveloperId</option>
                  <option :value="item._id" v-for="(item,index) in devList" :key="index">{{item._id}}</option>
                </select>
              </label>
            </div>
            <div class="modal-action">
              <label for="my-modal-5" class="btn" @click="addFeature">添加</label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="overflow-x-auto w-full">
      <table class="table w-full text-center">
        <!-- head -->
        <thead>
          <tr>
            <th>Level</th>
            <th>Name</th>
            <th>DevName</th>
            <th>Start</th>
            <th>End</th>
            <th>Status</th>
            <th>Operate</th>
          </tr>
        </thead>
        <tbody class="">
          <!-- row 1 -->
          <tr v-for="(item,index) in featureStore.featureList" :key="index">
            <td>
              <div class="font-bold">{{item.level}}</div>
            </td>
            <td>{{item.name}}</td>
            <td>{{item.devname}}</td>
            <td>{{item.start}}</td>
            <td>{{item.end}}</td>
             <td>{{item.status}}</td>
            <th>
              <button class="btn btn-ghost btn-xs">delete</button>
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
import { ref, onMounted ,reactive ,watch } from "vue";
import usefeatureStore from "../stores/featureList";
import userListStore from "../stores/userList";
const userStore = userListStore();
const featureStore = usefeatureStore();
let featurename = ref();
let level =ref();
let devname = ref();
let devId=ref();
let devList=reactive([]);
onMounted(async () => {
  await featureStore.initFeatureList();
  await userStore.initUserList();
  devList.push(...(userStore.userList.filter(item=>item.type==2)))
});
let addFeature = async()=>{
  if(featurename.value&&level.value&&devname.value){
    await featureStore.addFeature({
    name:featurename.value,
    devid:devId.value,
    level:level.value})
    devId.value=""
    featurename.value=""
    level.value=""
    devname.value=""

  }else{
    alert("请传入完整参数")
  }
}
watch(devname,(newValue)=>{
  if(!newValue) return false;
  devId.value=devList.filter(item=>item.username==newValue)[0]._id
})


</script>

<style>
</style>    