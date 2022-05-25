<template>
  <div>
    <el-form
      :model="form"
      status-icon
      :rules="rules"
      ref="form"
      label-width="100px"
      class="login-container"
    >
      <h3 class="login_title">系统登录</h3>
      <el-form-item
        label="用户名"
        label-width="80px"
        prop="username"
        class="username"
      >
        <el-input
          type="input"
          v-model="form.username"
          aria-autocomplete="off"
          aria-placeholder="请输入账号"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" label-width="80px" prop="password">
        <el-input
          type="password"
          v-model="form.password"
          aria-autocomplete="off"
          aria-placeholder="请输入密码"
        ></el-input
      ></el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login" class="login_submit"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import Mock from "mockjs";
import { getMenu } from "../../../api/data";
export default {
  name: "login-",
  data() {
    return {
      form: {},
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            message: "用户名长度不能小于3位",
            trigger: "blur",
          },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    login() {
      getMenu(this.form).then((res) => {
          // console.log(res);
        if (res.code === 20000) {
          this.$store.commit("clearMenu");
          //console.log(res.data.menu);
          this.$store.commit("setMenu", res.data.menu);
          this.$store.commit("setToken", res.data.token);
          // console.log(this.$router);
          this.$store.commit("addMenu", this.$router);
          this.$router.push({ name: "home-" });
          // console.log(this.$router,"cs");
        } else {
          this.$message.warning(res.data.message);
        }
      });
      //   const token = Mock.random.guid();
      //   this.$store.commit("setToken", token);
      //   this.$router.push({ name: "home-" });
    },
  },
};
</script>
<style lang="less" scoped>
.login-container {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background-color: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
.login_title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}
.login_submit {
  margin: 10px auto 0px auto;
}
</style>