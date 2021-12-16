<template>
  <div>
    <card-title-slot :title="'Personal Information'">
      <div slot="content">
        <el-form :inline="true" v-model="info">
          <el-form-item label="Name">
            <el-tag type="success" effect="plain">{{info.name}}</el-tag>
          </el-form-item>
          <br />
          <el-form-item label="Gender">
            <el-tag type="success" effect="plain">{{globalDict.sex[info.sex]}}</el-tag>
          </el-form-item>
          <br />
          <el-form-item label="StudentID">
            <el-tag type="success" effect="plain">{{info.studentNo}}</el-tag>
          </el-form-item>
          <br />
          <el-form-item label="College">
            <el-tag type="success" effect="plain">{{info.college}}</el-tag>
          </el-form-item>
          <br />
          <el-form-item label="Major">
            <el-tag type="success" effect="plain">{{info.major}}</el-tag>
          </el-form-item>
          <br />
          <el-form-item label="Email">
            <el-tag type="success" effect="plain">{{info.email}}</el-tag><span>&emsp;</span>
            <el-button type="primary" icon="el-icon-edit" @click.stop="show=true" size="mini"></el-button>
          </el-form-item>
        </el-form>
      </div>
    </card-title-slot>
    <!-- Modify mail -->
    <el-dialog title="Mail Address Change" :visible.sync="show">
      <el-form inline ref="submitForm" :model="email" :rules="rules">
        <el-form-item label="Email" prop="email">
          <el-input v-model="email.email" placeholder="Please input the email address"></el-input>
        </el-form-item>
        <el-form-item label="Code" prop="code">
          <el-input v-model="email.code" placeholder="Please enter verification code"></el-input>
        </el-form-item>
        <email-code :target="email.email"></email-code>
        <el-form-item>
          <el-button type="primary" @click="submit()">Submit</el-button>
        </el-form-item>
      </el-form>

    </el-dialog>
  </div>
</template>

<script>
import Blank from "../../components/blank.vue";
import cardTitleSlot from "../../components/cardTitleSlot.vue";
import EmailCode from "../EmailCode.vue";
export default {
  components: { cardTitleSlot, Blank, EmailCode },
  props: {},
  data() {
    return {
      info: {
        studentNo: "",
        name: "",
        sex: "",
        college: "",
        major: "",
        email: "",
      },
      show: false,
      email: {
        email: "",
        code: "",
      },
      rules: {
        code: [
          {
            required: true,
            validator: (rule, value, callback) => {
              if (value === "") {
                this.$message.error("Verification cannot be blank");
                return;
              }
              callback();
            },
            trigger: "click",
          },
        ],
        email: [
          {
            required: true,
            validator: (rule, value, callback) => {
              if (value === "") {
                this.$message.error("Email address cannot be blank");
                return;
              }
              if (
                !/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]+)+)$/.test(
                  value
                )
              ) {
                this.$message.error("Email format is incorrect");
                return;
              }
              callback();
            },
            trigger: "click",
          },
        ],
      },
    };
  },
  watch: {},
  created() {
    this.getInfo();
  },
  methods: {
    //Get user information
    getInfo() {
      this.get({
        url: "/api/member/info/",
      }).then((result) => {
        if (result.data !== null) {
          this.info = result.data;
          let { email } = { ...this.info };
          let code = "";
          this.email = { email, code };
        }
      });
    },
    //
    submit() {
      console.log(this.email);
      this.$refs["submitForm"].validate((valid) => {
        if (!valid) {
          console.log(this.email);
          return;
        }
        this.post({
          url: "/api/member/info/update",
          data: this.email,
        }).then((result) => {
          this.$message.success(result.msg);
          this.getInfo();
        });
      });
    },
  },
};
</script>

<style>
</style>