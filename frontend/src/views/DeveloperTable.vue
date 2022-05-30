<template>
  <table class="table w-full">
    <thead>
      <tr>
        <th>序号</th>
        <th>功能</th>
        <th>描述</th>
        <th>状态</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr class="hover">
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
        <td>
          <div>
            <DeveloperStatusChangeModalVue :label="'完成'" />
          </div>
        </td>
      </tr>
      <tr class="hover">
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
        <td>
          <div>
            <DeveloperStatusChangeModalVue :label="'完成'" />
          </div>
        </td>
      </tr>
      <tr class="hover">
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
        <td>
          <div>
            <DeveloperStatusChangeModalVue :label="'完成'" />
          </div>
        </td>
      </tr>
      <tr class="hover">
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
        <td>
          <div>
            <DeveloperStatusChangeModalVue :label="'完成'" />
          </div>
        </td>
      </tr>
      <tr class="hover">
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
        <td>
          <div>
            <DeveloperStatusChangeModalVue :label="'完成'" />
          </div>
        </td>
      </tr>
      <tr class="hover">
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
        <td>
          <div>
            <DeveloperStatusChangeModalVue :label="'完成'" />
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import DeveloperStatusChangeModalVue from "../components/DeveloperStatusChangeModal.vue";
</script>
