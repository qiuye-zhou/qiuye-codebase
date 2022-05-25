<template>
  <el-form ref="form" label-width="100px" :model="form" :inline="inline">
    <el-form-item
      v-for="item in formLabel"
      :key="item.label"
      :label="item.label"
    >
      <el-input
        v-if="item.type === 'input'"
        :placeholder="'请输入' + item.label"
        v-model="localForm[item.model]"
      ></el-input>
      <el-switch
        v-if="item.type === 'switch'"
        v-model="localForm[item.model]"
      ></el-switch>
      <el-date-picker
        v-if="item.type === 'date'"
        type="date"
        value-format="yyyy-MM-dd"
        placeholder="选择日期"
        v-model="localForm[item.model]"
      ></el-date-picker>
      <el-select
        v-if="item.type === 'select'"
        placeholder="请选择"
        v-model="localForm[item.model]"
      >
        <el-option
          v-for="itemm in item.opts"
          :key="itemm.value"
          :label="itemm.label"
          :value="itemm.value"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item><slot></slot></el-form-item>
  </el-form>
</template>
<script>
export default {
  name: "CommonForm",
  props: {
    formLabel: Array,
    form: Object,
    inline: Boolean,
  },
  data() {
    return {
      localForm: this.form,
    };
  },
  watch: {
    form: function (newval) {
      //console.log(newval);
      this.localForm = newval;
    },
    // form: {
    //   handler(val) {
    //     console.log(val);
    //     this.localForm =val
    //   },
    //   immediate: true,
    //   deep: true,
    // },
  },
};
</script>