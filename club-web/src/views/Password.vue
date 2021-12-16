<template>
  <div class="password-box">
    <card-title-slot :title="'Change Password'">
      <div slot="content">
        <el-form class="formData" :model="formData" :label-position="'right'" label-width="200px" :rules="rules" ref="formData">
          <el-form-item label="Original Password" prop="oldPassword">
            <el-input type="password" v-model="formData.oldPassword"></el-input>
          </el-form-item>
          <el-form-item label="New Password" prop="newPassword">
            <el-input type="password" v-model="formData.newPassword"></el-input>
          </el-form-item>
          <el-form-item label="Confirm Password" prop="checkPass">
            <el-input type="password" v-model="formData.checkPass"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm">Reset</el-button>
          </el-form-item>
        </el-form>
      </div>
    </card-title-slot>
  </div>
</template>

<script>
import Blank from "../components/blank.vue";
import cardTitleSlot from "../components/cardTitleSlot.vue";
export default {
  components: { cardTitleSlot, Blank },
  props: {
    club: {
      type: String,
      default() {
        return "";
      },
    },
  },
  data() {
    const oldPassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("please enter password"));
        return;
      }
      callback();
    };
    const newPassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("please enter password"));
        return;
      }
      callback();
    };
    const checkPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("please enter password"));
        return;
      }
      if (value !== this.formData.newPassword) {
        callback(new Error("The two passwords entered are inconsistent"));
        return;
      }
      callback();
    };
    return {
      formData: {
        oldPassword: "",
        newPassword: "",
        checkPass: "",
      },
      rules: {
        oldPassword: [{ validator: oldPassword, trigger: "click" }],
        newPassword: [{ validator: newPassword, trigger: "click" }],
        checkPass: [{ validator: checkPass, trigger: "click" }],
      },
    };
  },
  watch: {
    club(newVal, oldVal) {},
  },
  created() {},
  methods: {
    submitForm() {
      this.$refs["formData"].validate((valid) => {
        if (!valid) {
          return;
        }
        //submit data
        this.post({
          url: "/api/user/password",
          data: this.formData,
        }).then((result) => {
          if (result.code === "200") {
            this.$message.success(result.msg);
            this.$router.replace("/login");
            return;
          }
          this.$message.error(result.msg);
        });
      });
    },
  },
};
</script>

<style scoped>
.password-box {
  padding: 0 25%;
  box-sizing: border-box;
}
</style>