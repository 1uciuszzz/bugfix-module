import { defineStore } from "pinia";
import { http, api } from "../utils/http.js";
const featureListStore = defineStore("featureList", {
  state: () => {
    return {
    featureList:[]
    };
  },
  actions: {
    async initFeatureList(payload){
       let {data} = await http.get(api.featureList,{headers: { Authorization: localStorage.getItem("token") }})
       this.featureList = data.data
    },


  },

});
export default featureListStore ;
