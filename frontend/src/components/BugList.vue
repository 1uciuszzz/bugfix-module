<template>
  <div class="overflow-x-auto mt-5 max-h-72">
    <table class="table w-full text-center p-0">
      <thead>
        <tr class="p-0">
          <th>功能名</th>
          <th>测试名</th>
          <th>Bug名</th>
          <th>Bug类型</th>
          <th>bug等级</th>
          <th>创建时间</th>
          <th>解决时间</th>
          <th>附件</th>
          <th>指定开发</th>
          <th>状态</th>
        </tr>
      </thead>
      <tbody>
        <tr class="hover " v-for="item in bugStore.bugList" :key="item._id">
          <th>{{ item.name }}</th>
          <th>{{ item.testname }}</th>
          <td>{{ item.bugname }}</td>
          <td>
            <button class="btn btn-success" v-if="item.bugtype == '1'">
              代码错误
            </button>
            <button class="btn btn-success" v-else-if="item.bugtype == '2'">
              界面优化
            </button>
            <button class="btn btn-success" v-else-if="item.bugtype == '3'">
              性能问题
            </button>
            <button class="btn btn-success" v-else>浏览器兼容</button>
          </td>
          <td>
            <button class="btn btn-error" v-if="item.level == '1'">
              很严重
            </button>
            <button class="btn btn-warning" v-else-if="item.level == '2'">
              严重
            </button>
            <button class="btn btn-info" v-else>一般</button>
          </td>
          <td>{{ item.start }}</td>
          <td>{{ item.end }}</td>
          <td>{{ item.fj }}</td>
          <td>{{ item.devname }}</td>
          <td>
            <button class="btn btn-error" v-if="item.bugstatus == '1'">
              待解决
            </button>
            <!-- <button
              class="btn btn-info"
              v-else-if="item.bugstatus == '2'"
              @click="changeShow()"
            >
              待验收
            </button> -->
            <div v-else-if="item.bugstatus == '2'">
              <label :for="item._id" class="btn modal-button">待验收</label>
              <input type="checkbox" :id="item._id" class="modal-toggle" />
              <div class="modal">
                <div class="modal-box">
                  <p class="py-4">验收通过？</p>
                  <div class="modal-action">
                    <label :for="item._id" class="btn" @click="changeStatus(item._id,4)">通过</label>
                    <label :for="item._id" class="btn" @click="changeStatus(item._id,3)">不通过</label>
                  </div>
                </div>
              </div>
            </div>
            <button
              class="btn btn-warning"
              v-else-if="item.bugstatus == '3'"
              @click="changeShow()"
            >
              待修复
            </button>
            <button class="btn btn-success" v-else>已解决</button>
            <button
              v-if="isShow"
              class="btn"
              @click="changeStatus(item._id, 4)"
            >
              通过
            </button>
            <button
              v-if="isShow"
              class="btn"
              @click="changeStatus(item._id, 3)"
            >
              驳回
            </button>
            
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import useBugStore from "../stores/bugList.js";

let bugStore = useBugStore();
let isShow = ref(false);

onMounted(() => {
  bugStore.getTestList();
});


let changeStatus = (_id, bugstatus) => {
  isShow.value = false;
  bugStore.changeBug({_id:_id, bugstatus:bugstatus});
};
</script>

<style>
</style>