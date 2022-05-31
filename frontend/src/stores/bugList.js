import { defineStore } from "pinia";
import { http, api } from "../utils/http.js"

const useBugStore = defineStore("bugStore", {
  state: () => {
    return {
      bugList: [],
      devList:[]
    }
  },
  actions: {
    //获取所有bug列表
    async getTestList() {
      let { data } = await http.get(api.getBugList,{
        headers: { authorization: localStorage.getItem("token") },
      })
      if (data.status) {
        this.bugList = data.data
      }
    },
    //新增bug
    async addBug(payload) { 
      let { data } = await http.post(api.addBug, payload, {
        headers: { authorization: localStorage.getItem("token") }
      })
      if (data.status) {
        this.bugList.push(data.data)
      }
    },
    //查询开发人员列表
    async getall(payload){
      let {data} = await http.get(api.getAll,{
        headers: { authorization: localStorage.getItem("token") },
      })
      if(data.status){
        this.devList = data.data.filter(item=>item.type == '2')
      }
    },
    //更改bug状态
    async changeBug(payload){
      let {data} = await http.patch(api.updateBug,payload,{
        headers:{authorization:localStorage.getItem("token")}
      })
      if(data.status){
        this.bugList = this.bugList.map(item=>{
          if(item._id == payload._id){
            item.bugstatus = payload.bugstatus;
            if(payload.bugstatus == 4){
              item.end = new Date().toISOString();
            }
          }
          return item;
        })
      }
    }
  }
})

export default useBugStore