# Backend

## 通过 nodemon 启动项目

```sh
npm i
npm start
```

## 接口文档

- /api/v1/user
  - GET 获取用户信息，需要 token
  - POST 注册单个用户，数据格式{username:"string",password:"string",type:"string"}，type 说明：0 为项目经理，1 为测试人员，2 为开发人员
- /api/v1/auth
  - POST 用户登录，数据格式{username:"string",password:"string"}，返回{status:true|false,token:"string",type:"string"}
