import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
const a = import.meta.glob('./views/**/page-*.vue')
Object.entries(a).map(([key, value]) => {
  // app.component(key.replace(/^\.\//, '').replace(/\.vue$/, ''), value)
  // key 为 page-xxx.vue 的字符串, 请用用正则匹配 xxx 部分
  // value 为页面组件
  // 以上代码为什么要用 key.replace(/^\.\//, '').replace(/\.vue$/, '') 来替换?

  const name = key.replace(/(.*?)page-(\w+?)\.vue/, '$2')
  router.addRoute({
    path: '/' + name,
    component: value
  })
  //   console.log(name)
})
// console.log(a)
