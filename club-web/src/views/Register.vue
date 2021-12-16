<template>
  <div class="register-container">
    <div class="form-box">
      <el-form class="formData" :model="formData" :label-position="'right'" label-width="150px" :rules="rules" ref="formData">
        <el-form-item label="Username" prop="username">
          <el-input v-model="formData.username">
          </el-input>
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <el-input type="password" v-model="formData.password"></el-input>
        </el-form-item>
        <el-form-item label="Confirm password" prop="checkPass">
          <el-input type="password" v-model="formData.checkPass"></el-input>
        </el-form-item>
        <el-form-item label-width="0" align="center">
          <el-button type="primary" @click.stop="submitForm()">Register</el-button>
          <el-button @click="resetForm()">Reset</el-button>
          <el-button @click="cancel()">cancel</el-button>
        </el-form-item>
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
      }else {
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
    const checkPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("please enter password"));
        return;
      }
      if(value !== this.formData.password){
        callback(new Error("The two passwords entered are inconsistent"));
        return;
      }
      callback();
    };
    return {
      formData: {
        username: "",
        password: "",
        checkPass: "",
      },
      rules: {
        username: [{ validator: username, trigger: "click" }],
        password: [{ validator: password, trigger: "click" }],
        checkPass: [{ validator: checkPass, trigger: "click" }],
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
        this.post(
          {
            url:'/api/common/register',
            data:this.formData
          }).then((result)=>{
            if(result.code==="200"){
              this.$message.success(result.msg);
              return;
            }
            this.$message.error(result.msg);
          })
      });
    },
    resetForm() {
      this.$refs["formData"].resetFields();
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
.formData{
  /* background: rosybrown; */
    
}
</style>