import { defineStore } from "pinia";
import { http, api } from "../utils/http.js";
import router from "./../router/index";
const useBugfixStore = defineStore("bugfix", {
  state: () => {
    return {
      user_info: {},
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
});
export default useBugfixStore;
