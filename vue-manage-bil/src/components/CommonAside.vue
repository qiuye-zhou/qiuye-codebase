<template>
  <el-menu
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
  >
    <h3>{{ isCollapse ? "后台" : "通用后台管理系统" }}</h3>
    <el-menu-item
      @click="clickMenu(item)"
      v-for="item in noChildren"
      :index="JSON.stringify(item.path)"
      :key="item.path"
    >
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
    <el-submenu
      v-for="item in hasChildren"
      :index="JSON.stringify(item.label)"
      :key="item.path"
    >
      <template slot="title">
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </template>
      <el-menu-item-group
        v-for="(subitem, subindex) in item.children"
        :key="subitem.path"
      >
        <el-menu-item
          :index="JSON.stringify(subindex)"
          @click="clickMenu(subitem)"
          >{{ subitem.label }}</el-menu-item
        >
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>
<style lang="less" scope>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu {
  height: 100%;
  border: none;
  h3 {
    color: #fff;
    text-align: center;
    line-height: 48px;
  }
}
</style>

<script>
export default {
  data() {
    return {
      meun: [
        // {
        //   path: "/",
        //   name: "home-",
        //   label: "首页",
        //   icon: "s-home",
        //   url: "Home/Home",
        // },
        // {
        //   path: "/mall",
        //   name: "mall-",
        //   label: "商品管理",
        //   icon: "video-play",
        //   url: "MallManage/MallManage",
        // },
        // {
        //   path: "/user",
        //   name: "user-",
        //   label: "用户管理",
        //   icon: "user",
        //   url: "UserManage/UserManage",
        // },
        // {
        //   label: "其他",
        //   icon: "location",
        //   children: [
        //     {
        //       path: "/page1",
        //       name: "page-1",
        //       label: "页面1",
        //       icon: "setting",
        //       url: "Other/PageOne",
        //     },
        //     {
        //       path: "/page2",
        //       name: "page-2",
        //       label: "页面2",
        //       icon: "setting",
        //       url: "Other/PageTwo",
        //     },
        //   ],
        // },
      ],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickMenu(item) {
      if (this.$route.name !== item.name) {//当 当前路径不是点击要跳转的路由路径则进行跳转
        this.$router.push({
          name: item.name,
        });
      }
      this.$store.commit("selectMenu", item);
    },
  },
  computed: {
    noChildren() {
      // return this.meun.filter((item) => !item.children);
      return this.asyncMenu.filter((item) => !item.children);
    },
    hasChildren() {
      // return this.meun.filter((item) => item.children);
      return this.asyncMenu.filter((item) => item.children);
    },
    isCollapse() {
      return this.$store.state.tab.isCollapse;
    },
    asyncMenu() {
      return this.$store.state.tab.menu;
    },
  },
};
</script>