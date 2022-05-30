<template>
  <div class="overflow-x-auto mt-5">
    <table class="table w-full text-center">
      <thead>
        <tr>
          <th>项目名</th>
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
        <tr>
          <th>1</th>
          <td>Cy Ganderton</td>
          <td>浏览器兼容</td>
          <td>严重</td>
          <td>Blue</td>
          <td>Cy Ganderton</td>
          <td>Quality Control Specialist</td>
          <td>Blue</td>
          <td>
            <button class="btn btn-error" v-if="status=='1'">待解决</button>
            <button class="btn btn-warning" v-else-if="status=='3'">待修复</button>
            <button class="btn btn-info" v-else-if="status=='2'">待验收</button>
            <button class="btn btn-success" v-else>已解决</button>
          </td>
        </tr>
        <tr class="hover">
          <th>2</th>
          <td>Hart Hagerty</td>
          <td>浏览器兼容</td>
          <td>一般</td>
          <td>Purple</td>
          <td>Cy Ganderton</td>
          <td>Quality Control Specialist</td>
          <td>Blue</td>
            <td>
            <button class="btn btn-error" v-if="status=='1'">待解决</button>
            <button class="btn btn-warning" v-else-if="status=='3'">待修复</button>
            <button class="btn btn-info" v-else-if="status=='2'">待验收</button>
            <button class="btn btn-success" v-else>已解决</button>
          </td>
        </tr>
        <tr>
          <th>3</th>
          <td>Brice Swyre</td>
          <td>浏览器兼容</td>
          <td>特别严重</td>
          <td>Red</td>
          <td>Cy Ganderton</td>
          <td>Quality Control Specialist</td>
          <td>Blue</td>
            <td>
            <button class="btn btn-error" v-if="status=='1'">待解决</button>
            <button class="btn btn-warning" v-else-if="status=='3'">待修复</button>
            <button class="btn btn-info" v-else-if="status=='2'">待验收</button>
            <button class="btn btn-success" v-else>已解决</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import {ref} from "vue"
let status = ref("1")
</script>

<style>
</style>