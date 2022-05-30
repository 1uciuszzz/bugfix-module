import { defineStore } from "pinia";
import { http, api } from "../utils/http.js";
const userListStore = defineStore("userList", {
  state: () => {
    return {
     userList:[],
    };
  },
  actions: {
    async initUserList(payload){
       let {data} = await http.get(api.userList,{headers: { Authorization: localStorage.getItem("token") }})
       this.userList = data.data
    },
    async addUser(payload){
        let {data} = await http.post(api.user,payload)
        this.userList.push(data.data)
    }

  },

});
export default userListStore ;
