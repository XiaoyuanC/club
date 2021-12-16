<template>
  <div class="register-container">
    <div class="form-box">
      <el-form class="formData" :model="formData" :label-position="'right'" label-width="80px" :rules="rules" ref="formData">
        <el-form-item label="Username" prop="username">
          <el-input v-model="formData.username">
          </el-input>
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <el-input type="password" v-model="formData.password"></el-input>
        </el-form-item>
        <el-form-item label="Type" prop="type">
          <el-select v-model="formData.type" placeholder="Please select the type">
            <el-option label="club member" value="0"></el-option>
            <el-option label="club manager" value="1"></el-option>
            <el-option label="system administrator " value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click.stop="submitForm()">Login</el-button>
          <el-button @click="resetForm()">Reset</el-button>
        </el-form-item>
        <div class="register">
          <span @click.stop="goToRegister('register')">Register</span>
          <span @click.stop="goToRegister('reset')">forget password?</span>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import cardSlot from "../components/cardSlot.vue";
export default {
  components: { cardSlot },
  name: "Register",
  data() {
    const username = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("please enter username"));
        return;
      } else {
        callback();
      }
    };
    const password = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("please enter password"));
        return;
      }
      callback();
    };
    const type = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please select the type"));
        return;
      }
      callback();
    };
    return {
      formData: {
        username: "",
        password: "",
        type: "",
      },
      rules: {
        username: [{ validator: username, trigger: "click" }],
        password: [{ validator: password, trigger: "click" }],
        type: [{ validator: type, trigger: "click" }],
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
          url: "/api/common/login",
          data: this.formData,
        }).then((result) => {
          if (result.code === "200") {
            localStorage.setItem("token", result.data.token);
            console.log(localStorage.getItem("token"));
            this.$router.replace(result.data.path);
            this.$message.success(result.msg);
            return;
          }
          this.$message.error(result.msg);
        });
      });
    },
    resetForm() {
      this.$refs["formData"].resetFields();
    },
    goToRegister(path){
      this.$router.push(path);
    }
  },
};
</script>

<style scoped>
@import "../assets/css/commons.css";
.register-container {
  position: fixed;
  width: 100%;
  height: 100%;
  background: url("../assets/lol.jpeg") repeat #2877ff center center;
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
.register{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.register > span{
  cursor:pointer;
}
</style>