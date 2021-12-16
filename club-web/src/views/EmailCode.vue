<template>
  <div class="code-box">
    <el-button class="btn" type="primary" v-if="codeShow" @click.native.stop="getCode">Get code</el-button>
    <el-button class="btn" type="primary" v-if="!codeShow">Retry in {{ count }} seconds</el-button>
  </div>
</template>
<script>
export default {
  name: "Code",
  props: {
    target: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      codeShow: true, 
      count: "", //Text content when displayed
      timer: null,
      code: "",
    };
  },
  methods: {
    getCode() {
      //Check whether the data is blank
      if (this.target === "") {
        this.$message.error("Email address cannot be blank!");
        return;
      }
      //Verify email address
      if (
        !/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]+)+)$/.test(this.target)
      ) {
        this.$message.error("Email format is incorrect");
        return;
      }
      //Click for authentication code
      const TIME_COUNT = 60; //倒计时60秒
      if (!this.timer) {
        //Get code
        this.$emit("getCode", null);
        this.count = TIME_COUNT;
        this.codeShow = false;
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--;
          } else {
            this.codeShow = true;
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);
      }

      this.get({
        url: "/api/member/email/" + this.target,
      }).then((result) => {
        this.$message.success(result.msg);
      });
    },
  },
};
</script>

<style scoped>
.code-box {
  position: static;
  display: inline;
  box-sizing: border-box;
  margin-right: 10px;
}
.btn {
  margin-left: 20px;
}
</style>