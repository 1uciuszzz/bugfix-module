import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:8000/api/v1",
});

const api = {
  feature: "/feature",
  auth: "/auth",
  user: "/user",

  userList:"/user/getall",
  featureList:"/feature",
  searchUser:"/user/search",

  getTestList:"/test/showtest", //获取所有测试
  addTestItem:"/test/addtest" //新增测试

};

export { http, api };
