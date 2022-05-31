<template>
  <div class="w-10/12 mx-auto flex flex-col gap-4">
    <header class="flex gap-2 pt-4">
      <SearchFeature />
      <FilterFeatureVue />
      <RefreshDataVue :handle-click="refreshData" />
    </header>
    <main class="overflow-x-auto">
      <DeveloperTable />
    </main>
    <footer class="grid place-items-center p-2">
      <!-- <DevPaginationVue /> -->
    </footer>
  </div>
</template>

<script setup>
import DeveloperTable from "./DeveloperTable.vue";
import SearchFeature from "../components/SearchFeature.vue";
import FilterFeatureVue from "../components/FilterFeature.vue";
import DevPaginationVue from "../components/DevPagination.vue";
import RefreshDataVue from "../components/RefreshData.vue";
import useBugfixStore from "../stores/bugfix";
const bugfixStore = useBugfixStore();
bugfixStore.get_features_by_filter({ devid: bugfixStore.user_info._id });
const refreshData = () => {
  bugfixStore.get_features_by_filter({ devid: bugfixStore.user_info._id });
};
</script>
