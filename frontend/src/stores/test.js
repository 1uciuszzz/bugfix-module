import { defineStore } from "pinia";
import { http, api } from "../utils/http.js"

const useTestStore = defineStore("testStore", {
  state: () => {
    return {
      testList: [],
    }
  },
  actions: {
    //获取所有测试列表
    async getTestList(payload = {}) {
      let { data } = await http.get(api.getTestList, {
        headers: { Authorization: localStorage.getItem("token") },
      },payload)
      if (data.status) {
        this.testList = data.result
      }
    },
    //新增测试
    async addTestItem(payload){ //testname ,featureid,name
      let {data} = await http.post(api.addTestItem,payload,{
        headers:{Authorization:localStorage.getItem("token")}
      })
      if(data.status){
        this.testList.push(data.result)
      }
    }
  }
})

export default useTestStore