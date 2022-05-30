import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:8000/api/v1",
});

const api = {
  feature: "/feature",
  auth: "/auth",
  user: "/user",
  userList:"/user/getall",
  FeatureList:"/feature"
};

export { http, api };
