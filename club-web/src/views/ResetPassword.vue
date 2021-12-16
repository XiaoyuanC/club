<template>
  <div class="register-container">
    <div class="form-box">
      <el-form class="formData" :model="formData" :label-position="'right'" label-width="150px" :rules="rules" ref="formData">
        <div class="title">Member account reset password</div>
        <el-form-item label="Username" prop="username">
          <el-input v-model="formData.username">
          </el-input>
        </el-form-item>
        <el-form-item label="email" prop="email">
          <el-input v-model="formData.email">
          </el-input>
        </el-form-item>
        <el-form-item label-width="0" align="center">
          <el-button type="primary" @click.stop="submitForm()">submit</el-button>
          <el-button @click="cancel()">cancel</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import cardSlot from "../components/cardSlot.vue";
export default {
  components: { cardSlot},
  name: "ResetPassword",
  data() {
    const username = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("please enter username"));
        return;
      } else {
        callback();
      }
    };
    const email = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("please enter email"));
        return;
      }
      if (
        !/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]+)+)$/.test(value)
      ) {
        this.$message.error("Email format is incorrect");
        return;
      }
      else {
        callback();
      }
    };
    return {
      formData: {
        username: "",
        email: "",
      },
      rules: {
        username: [{ validator: username, trigger: "click" }],
        email: [{ validator: email, trigger: "click" }],
      },
    };
  },
  methods: {
    submitForm() {
      this.$refs["formData"].validate((valid) => {
        if (!valid) {
          return;
        }
        //submit data
        this.post({
          url: "/api/common/reset",
          data: this.formData,
        }).then((result) => {
          if (result.code === "200") {
            this.$message.success(result.msg);
            return;
          }
          this.$message.error(result.msg);
        });
      });
    },
    cancel() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
@import "../assets/css/commons.css";
.register-container {
  position: fixed;
  width: 100%;
  height: 100%;
  background: url("../assets/regis.jpeg") repeat #2877ff center center;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}
.form-box {
  width: 400px;
  /* height: 400px; */
  background: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 50px 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}
.formData {
  /* background: rosybrown; */
}
.title {
  width: 100%;
  text-align: center;
  margin-bottom: 30px;
  font-size: 20px;
}
</style>