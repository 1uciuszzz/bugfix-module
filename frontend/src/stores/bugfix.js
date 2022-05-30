import { defineStore } from "pinia";
import { http, api } from "../utils/http.js";

import userStore from "../stores/userList"
import featureStore from "../stores/featureList"

import router from "./../router/index";

const useBugfixStore = defineStore("bugfix", {
  state: () => {
    return {
      user_info: {},
      dev_features: [],
    };
  },
  actions: {
    async signin(payload) {
      const { data } = await http.post(api.auth, payload);
      return data;
    },
    async get_user_info() {
      const { data } = await http.get(api.user, {
        headers: { Authorization: localStorage.getItem("token") },
      });
      if (!data.status) {
        router.replace("/signin");
      }
      this.user_info = data.data;
    },
    async get_features_by_filter(payload) {
      const { data } = await http.get(api.feature, {
        params: payload,
      });
      return data;
    },
  },
  modules:{
    userStore,
    featureStore
  }
});
export default useBugfixStore;
