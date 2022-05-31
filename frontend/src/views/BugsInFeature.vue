<template>
  <div class="w-10/12 mx-auto flex flex-col gap-4">
    <header class="flex gap-2 pt-4">
      <FeatureInfoVue />
    </header>
    <RefreshDataVue :handle-click="refreshData" />
    <main class="overflow-x-auto">
      <DevBugTableVue />
    </main>
  </div>
</template>

<script setup>
import FeatureInfoVue from "../components/FeatureInfo.vue";
import DevBugTableVue from "../components/DevBugTable.vue";
import RefreshDataVue from "../components/RefreshData.vue";
import { useRoute } from "vue-router";
import useBugfixStore from "../stores/bugfix";
const route = useRoute();
const { id } = route.params;
const bugfixStore = useBugfixStore();
bugfixStore.get_dev_bugs({ _id: id });
const refreshData = () => {
  bugfixStore.get_dev_bugs({ _id: id });
};
</script>
