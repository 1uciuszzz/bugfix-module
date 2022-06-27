import axios from "axios";

const base = "http://localhost:8000/api/v1";

const http = axios.create({
  baseURL: base,
});

const api = {
  feature: "/feature",
  auth: "/auth",
  user: "/user",
  setBugStatus: "/bug/setstatus",
  getBugsByFeature: "/bug/getbugsbyfeature",
  extend: "/upload/extend",

  userList: "/user/getall",
  featureList: "/feature",
  searchUser: "/user/search",

  //测试相关
  getTestList: "/test/showtest", //获取所有测试
  addTestItem: "/test/addtest", //新增测试

  //bug相关
  getBugList: "/bug/getallbug", //获取bug列表
  gettestByfeatureid: "/test/gettestByfeatureid", //根据featureid 获取对应的测试
  getAll: "/user/getall", //获取开发人员
  addBug: "/bug/addbug",
  updateBug: "/bug/updatebug",
};

export { http, api, base };
