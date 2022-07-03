# vue-manage-bil


项目描述：
使用vuecli搭建的涵盖了大多数后台管理系统的常用功能的项目。实现了用户登入、菜单权限管理、用户列表等的增删改查功能、通过Element-ui和Echart做了面包屑、tag等功能以及通过折线图、饼状图等实现数据可视化等功能



技术栈: Vue2，VueRouter，Vuex，Element-ui，Echart，mock，axios


[项目学习参考地址](https://www.bilibili.com/video/BV1QU4y1E7qo?spm_id_from=333.1007.top_right_bar_window_custom_collection.content.click)
(参考视频做会遇到很多的错误修，不过总体来说还行)



使用了Element-ui，Echart，简单封装了可以复用的组件



通过mock模拟后端数据



二次封装了axios请求



### 先安装依赖
```
yarn install
```



### 然后启动

```
yarn serve || npm run serve
```



### 两个账户模拟不同用户的界面

|      | 账户 | 密码 |
| :--------: | :--: | :--: |
| 管理员账户 | admin | user |
| 普通用户账户 | admin | user |



