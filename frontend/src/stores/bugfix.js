import { defineStore } from "pinia";
import { http, api } from "../utils/http.js";
const useBugfixStore = defineStore("bugfix", {
  state: () => {
    return {
      feature_by_dev: [],
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
      if (data.status) {
        this.user_info = data.data;
      }
    },
    async get_features_by_dev(payload) {
      const { data } = await http.get(api.feature, {
        params: { devid: payload.devid },
      });
      if (data.status) {
        this.feature_by_dev = data.data;
      }
    },
  },
});
export default useBugfixStore;
