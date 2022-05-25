<template>
  <div class="common-table">
    <el-table :data="tableData" heigth="90%" stripe>
      <el-table-column
        show-overflow-tooltip
        v-for="item in tableLabel"
        :key="item.prop"
        :label="item.label"
        :width="item.width ? item.width : 125"
      >
        <template slot-scope="scope">
          <!-- 通过slot传递scope.row给子组件template -->
          <span style="margin-left: 10px">{{ scope.row[item.prop] }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" min-width="180">
        <template v-slot:default="scope">
          <!-- 通过slot传递scope.row给子组件template -->
          <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="pager"
      layout="prev,pager,next"
      :total="config.total"
      :current-page.sync="localconfig.page"
      @current-change="changePage"
      :page-size="20"
    ></el-pagination>
  </div>
</template>
<script>
export default {
  name: "CommonTable",
  props: {
    tableData: Array,
    tableLabel: Array,
    config: Object,
  },
  data() {
    return {
      localconfig: this.config,
    };
  },
  watch: {
    config: function (newval) {
      // console.log(newval);
      this.localconfig = newval;
    },
  },
  methods: {
    handleEdit(row) {
      //console.log(row);
      this.$emit("edit", row);
    },
    handleDelete(row) {
      this.$emit("del", row);
    },
    changePage(page) {
      this.$emit("changePage", page);
    },
  },
};
</script>
<style lang="less" scoped>
.common-table {
  height: calc(100% - 62px);
  background-color: #fff;
  position: relative;
  .pager {
    position: absolute;
    bottom: -10px;
    right: 20px;
  }
}
</style>