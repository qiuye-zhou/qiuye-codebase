<template>
  <div class="tabs">
    <el-tag
      v-for="(tag, index) in tags"
      :key="tag.name"
      :closable="tag.name !== 'home-'"
      :effect="$route.name === tag.name ? 'dark' : 'plain'"
      @click="changeMenu(tag)"
      @close="handleclose(tag, index)"
      size="small"
    >
      {{ tag.label }}
    </el-tag>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "CommonTag",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      tags: (state) => state.tab.tabslist,
    }),
  },
  methods: {
    ...mapMutations({
      //解构   将state 的Mutations 注入的当前页面中来
      close1: "CloseTag", //close  别名   在当前页面调用this.close 相当于 调用 vuex 中的closeTag
    }),
    changeMenu(item) {
      // console.log(this.$route.name , item.name);
      if (this.$route.name !== item.name) {//当 当前路径不是点击要跳转的路由路径则进行跳转
        this.$router.push({ name: item.name });
      }
    },
    handleclose(tag, index) {
      const length = this.tags.length - 1;
      this.close1(tag);
      if (tag.name !== this.$route.name) {
        return;
      }
      if (index === length) {
        this.$router.push({
          name: this.tags[index - 1].name,
        });
      } else {
        this.$router.push({
          name: this.tags[index].name,
        });
      }
    },
  },
};
</script>
<style lang="less" scoped>
.tabs {
  padding: 20px;
  .el-tag {
    margin-right: 15px;
    cursor: pointer; //移入显示小手
  }
}
</style>