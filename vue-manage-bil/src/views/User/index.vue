<template>
  <div class="manage">
    <el-dialog
      :title="operateType === 'add' ? '新增用户' : '更新用户'"
      :visible.sync="isShow"
    >
      <common-form
        :formLabel="operateFormLabel"
        :form="operateForm"
        :inline="true"
        ref="form"
      ></common-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isShow = false">取消</el-button>
        <el-button type="primary" @click="confirm">确定</el-button>
      </div>
    </el-dialog>
    <div class="manage-header">
      <el-button type="primary" @click="addUser">新增</el-button>
      <common-form
        :formLabel="formLabel"
        :form="searchForm"
        :inline="true"
        ref="form"
      >
        <el-button type="primary" @click="getList(searchForm.keyword)"
          >搜索</el-button
        >
      </common-form>
    </div>
    <common-table
      :tableData="tableData"
      :tableLabel="tableLabel"
      :config="config"
      @changePage="getList()"
      @edit="editUser"
      @del="delUser"
    ></common-table>
    <!-- <h1>user页面</h1> -->
  </div>
</template>

<script>
import CommonForm from "../../components/CommonForm.vue";
import CommonTable from "../../components/CommonTable.vue";
import { getUser } from "../../../api/data";
// import { Message } from "element-ui";//单独引入 Message
export default {
  name: "User-",
  components: {
    CommonForm,
    CommonTable,
  },
  data() {
    return {
      operateType: "add",
      isShow: false,
      operateFormLabel: [
        {
          model: "name",
          label: "姓名",
          type: "input",
        },
        {
          model: "age",
          label: "年龄",
          type: "input",
        },
        {
          model: "sex",
          label: "性别",
          type: "select",
          opts: [
            {
              label: "男",
              value: 1,
            },
            {
              label: "女",
              value: 0,
            },
          ],
        },
        {
          model: "birth",
          label: "出生日期",
          type: "date",
        },
        {
          model: "addr",
          label: "地址",
          type: "input",
        },
      ],
      operateForm: {
        name: "",
        addr: "",
        age: "",
        birth: "",
        sex: "",
      },
      formLabel: [
        {
          model: "keyword",
          label: "",
          type: "input",
        },
      ],
      searchForm: {
        keyword: "",
      },
      tableData: [],
      tableLabel: [
        {
          prop: "name",
          label: "姓名",
        },
        {
          prop: "age",
          label: "年龄",
        },
        {
          prop: "sexLabel",
          label: "性别",
        },
        {
          prop: "birth",
          label: "出生日期",
          width: 200,
        },
        {
          prop: "addr",
          label: "地址",
          width: 320,
        },
      ],
      config: {
        page: 1,
        total: 30,
      },
    };
  },
  methods: {
    confirm() {
      if (this.operateType === "edit") {
        this.$http.post("/user/edit", this.operateForm).then((res) => {
          this.isShow = false;
          console.log(res);
          this.getList(1);
        });
      } else {
        this.$http.post("/user/add", this.operateForm).then((res) => {
          this.isShow = false;
          console.log(res);
          this.getList(1); //传入1  即更新数据后显示第一页
        });
      }
    },
    addUser() {
      this.isShow = true;
      this.operateType = "add";
      this.operateForm = {
        name: "",
        addr: "",
        age: "",
        birth: "",
        sex: "",
      };
    },
    getList(name = "") {
      //console.log(name);
      this.config.loading = true;
      // if (typeof name === "number") {
      //   this.config.page = name;
      //   //console.log("cs");
      // }
      if (name.length === 0) {
        name = this.config.page;
        //console.log("cs");
      }
      //name ? (this.config.page = 1) : "";
      //console.log(name, this.config.page);
      getUser({
        name: name,
        page: this.config.page,
      }).then((res) => {
        //console.log(res, "getList,getUser.then");
        this.tableData = res.list.map((item) => {
          item.sexLabel = item.sex === 0 ? "女" : "男";
          return item;
        });
        this.config.total = Math.ceil(this.tableData.length / 7) * 20; //显示最大页面数
        console.log(this.config, name);
        if (typeof name === "number") {
          const pagex = (this.config.page - 1) * 7;
          console.log(pagex);
          this.tableData = this.tableData.slice(pagex, pagex + 7);
        } else {
          this.tableData = this.tableData.filter((user) => {
            if (
              name &&
              user.name.indexOf(name) === -1 &&
              user.addr.indexOf(name) === -1
            )
              return false;
            return true;
          });
        }
        //this.config.total = res.count;
        this.config.loading = false;
        //console.log(this.tableData);
      });
    },
    editUser(row) {
      console.log(row);
      this.operateType = "edit";
      this.isShow = true;
      this.operateForm = { ...row }; //因为是双向绑定的数据所以改后取消还是改变了,解决方法 = {...row}(潜拷贝)防止取消后还是修改了数据
    }, //确定后传递数据进行改变
    delUser(row) {
      this.$confim("此操作将永久删除该组件，是否继续？", "提示", {
        confirmButtonText: "确认",
        cancelBUttonTExt: "取消",
        type: "warning",
      }).then(() => {
        const id = row.id;
        this.$http
          .post("/user/del", {
            parms: { id },
          })
          .then((res) => {
            console.log(res);
            this.$message({
              type: "success",
              message: "删除成功",
            });
            // Message({
            //   type: "success",
            //   message: "删除成功",
            // });// import { Message } from "element-ui";//单独引入 Message
            this.getList();
          });
      });
    },
  },
  created() {
    this.getList(1);
  },
};
</script>
<style lang="less" scoped>
.manage-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>