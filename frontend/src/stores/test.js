import { defineStore } from "pinia";
import { http, api } from "../utils/http.js"

const useTestStore = defineStore("testStore", {
  state: () => {
    return {
      testList: [],
      byFeatureidList:[],
    }
  },
  actions: {
    //获取所有测试列表
    async getTestList(payload) {
      let { data } = await http.get(api.getTestList,{
        headers: { authorization: localStorage.getItem("token") },
        params:payload
      })
      if (data.status) {
        this.testList = data.result
      }
    },
    //根据featureid 获取对应的测试
    async gettestByfeatureid(payload){
      let {data} = await http.get(api.gettestByfeatureid,{
        headers:{authorization:localStorage.getItem("token")},
        params:payload
      })
      if(data.status){
        this.byFeatureidList = data.result
      }
    },
    //新增测试
    async addTestItem(payload) { //testname ,featureid,name
      let { data } = await http.post(api.addTestItem, payload, {
        headers: { authorization: localStorage.getItem("token") }
      })
      if (data.status) {
        this.testList.push(data.result[0])
      }
    }
  }
})

export default useTestStore