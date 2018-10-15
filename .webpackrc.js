export default {
  "publicPath": "/static/",
  "proxy": {
    "/api": {
      "target": "http://jsonplaceholder.typicode.com/",
      // "target": "http://socket3.hiredchina.cn/",
      "changeOrigin": true,
      "pathRewrite": { "^/api" : "" }
    }
  },
}