import Vue from 'vue'
import App from './App.vue'
import {
  Button,
  Container,
  Aside,
  Header,
  Main,
  Menu,
  Submenu,
  MenuItemGroup,
  MenuItem,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Row,
  Col,
  Card,
  Table,
  TableColumn,
  Breadcrumb,
  BreadcrumbItem,
  Tag,
  Form,
  FormItem,
  Input,
  Select,
  Option,
  Switch,
  DatePicker,
  Dialog,
  Pagination,
  MessageBox,
  Message,
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/less/index.less'

import router from './router'
import store from './store'
import http from 'axios'
import '../api/mock.js'

Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Header)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Tag)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.use(Switch)
Vue.use(DatePicker)
Vue.use(Dialog)
Vue.use(Pagination)
// Vue.use(MessageBox)//这里use会出现刷新页面出现空白提示框
// Vue.use(Message)

Vue.prototype.$http = http
Vue.prototype.$confim = MessageBox.confirm
Vue.prototype.$message = Message

router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.

  store.commit('getToken')
  const token = store.state.user.token
  if (!token && to.name !== 'login-') {//没有token且当前页不是longin- 则返回登录页
    next({ name: 'login-' })
  } else if (token && to.name === 'login-') {
    next({ name: 'home-' })
  } else {
    next()
  }
})

new Vue({
  store,
  router,
  render: h => h(App),
  created() {
    store.commit("addMenu", router);
  },
}).$mount('#app')
