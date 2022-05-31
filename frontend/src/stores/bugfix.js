import { defineStore } from "pinia";
import { http, api } from "../utils/http.js";

import userStore from "../stores/userList";
import featureStore from "../stores/featureList";

import router from "./../router/index";

const useBugfixStore = defineStore("bugfix", {
  state: () => {
    return {
      user_info: {},
      dev_features: [],
      feature_detail: {
        feature: {
          devid: "",
          devname: "",
          end: "",
          level: "",
          name: "",
          start: "",
          status: "",
          _id: "",
        },
        bugs: [],
      },
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
      const params = {};
      for (const key in payload) {
        if (payload[key]) {
          params[key] = payload[key];
        }
      }
      const { data } = await http.get(api.feature, {
        params,
      });
      this.dev_features = data.data;
    },
    async set_feature_status(payload) {
      const { data } = await http.patch(
        `${api.feature}/${payload._id}`,
        payload
      );
      this.dev_features.forEach((f) => {
        if (f._id === data.data._id) {
          f.status = data.data.status;
        }
      });
    },
    async set_bug_status(payload) {
      const { data } = await http.patch(`${api.setBugStatus}/${payload._id}`, {
        bugstatus: payload.bugstatus,
      });
      console.log(data.data);
      this.feature_detail.bugs = this.feature_detail.bugs.map((b) => {
        if (b._id === data.data._id) {
          return data.data;
        }
        return b;
      });
    },
    async get_dev_bugs(payload) {
      const { data } = await http.get(
        `${api.getBugsByFeature}/${payload._id}`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      this.feature_detail = data;
    },
  },
  // modules: {
  //   userStore,
  //   featureStore,
  // },
});
export default useBugfixStore;
