export default {
  plugins: ['umi-plugin-dva'],
}


// ref: https://umijs.org/config/
// export default {
//   plugins: [
//     // ref: https://umijs.org/plugin/umi-plugin-react.html
//     ['umi-plugin-react', {

//       // 基于 umi-plugin-dva 实现，功能详见 和 dva 一起用。
//       dva: {
//         // 是否启用 dva-immer   [关于immer https://segmentfault.com/a/1190000013088373]   
//         immer: true,

//         // dynamicImport，是否启用按需加载，配置项同 #dynamicImport，并且如果在 #dynamicImport 有配置，配置项会继承到 dva 中
//         // hmr，是否启用 dva 的 hmr
//       },

//       // 启用后自动配置 babel-plugin-import 实现 antd 和 antd-mobile 的按需编译，并且内置 antd 和 antd-mobile 依赖，无需手动在项目中安装。
//       antd: true,

//       //基于 umi-plugin-routes 实现，用于批量修改路由。
//       routes: {
//         // 用于忽略某些路由，比如使用 dva 后，通常需要忽略 models、components、services 等目录
//         exclude: [/models\//],

//         // update, 值为 Function，用于更新路由
//       },

//       // 基于 umi-plugin-polyfills 实现，用于加各种补丁。实现一键兼容
//       polyfills: ['ie9', 'ie10', 'ie11'],

//       // 基于 umi-plugin-locale 和 react-intl 实现，用于解决 i18n 问题。
//       locale: {
//         default: 'zh-CN',

//         // default true, when it is true, will use navigator.language overwrite default
//         baseNavigator: true,

//         // use antd, default is true
//         antd: true
//       },

//       // 可能切换底层库为 preact 或 react
//       library: 'react',

//       // 实现路由级的动态加载（code splitting），可按需指定哪一级的按需加载。
//       // dynamicImport: {
//       //   // 是否通过 webpackChunkName 实现有意义的异步文件名
//       //   webpackChunkName: true,

//       //   // 指定加载时的组件路径
//       //   loadingComponent: './components/Loading.js',

//       //   // level，指定按需加载的路由等级
//       // },

//       // 通过 webpack 的 dll 插件预打包一份 dll 文件来达到二次启动提速的目的。 https://www.webpackjs.com
//       dll: {
//         include: ["dva", "dva/router", "dva/saga", "dva/fetch", "antd/es"],
//         exclude: [],
//       },

//       // 通过 hard-source-webpack-plugin 开启 webpack 缓存，二次启动时间减少 80%。推荐非 windows 电脑使用，windows 下由于大文件 IO 比较慢，可自行决定是否启用。
//       hardSource: true,

//       // Progressive Web App，即渐进式WEB应用 https://segmentfault.com/a/1190000012353473
//       pwa: true,

//       // 开启高清方案
//       hd: true,

//       // 启用 fastClick。https://majing.io/posts/10000007721218
//       fastClick: true,

//       // 开启 title 插件，设置 HTML title：
//       title: 'default title',
//       /**
//        * defaultTitle: '默认标题', // 必填，当配置项为 String 时直接配置项作为 defaultTitle
//        * format: '{parent}{separator}{current}', // default {parent}{separator}{current}, title format
//        * separator: ' - ', // default ' - '
//        */
//       // title: {
//       //   defaultTitle: '默认标题',
//       //   format: '{parent}{separator}{current}',
//       //   separator: ' - '
//       // }
//     }],
//   ],

// }
