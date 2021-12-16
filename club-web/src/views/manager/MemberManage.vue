<template>
  <div>
    <card-title-slot :title="'Add new member'">
      <div slot="content">
        <el-form :inline="true" v-model="studentSearch" class="search-form">
          <el-input v-model="studentSearch.studentNo" placeholder="Student ID"></el-input>
          <el-input v-model="studentSearch.name" placeholder="Name"></el-input>
          <el-input v-model="studentSearch.college" placeholder="College"></el-input>
          <el-input v-model="studentSearch.major" placeholder="Major"></el-input>
          <el-select v-model="studentSearch.sex" placeholder="Gender">
            <el-option :label="value" :value="key" v-for="(value,key,index) in globalDict.sex" :key="index"></el-option>
          </el-select>
          <el-button type="primary" @click.stop="getStudentInfo()">Search</el-button>
        </el-form>
        <el-table :data="studentTableData" style="width: 100%">
          <el-table-column type="index" label="No.">
          </el-table-column>
          <el-table-column prop="studentNo" label="Student ID">
          </el-table-column>
          <el-table-column prop="name" label="Name">
          </el-table-column>
          <el-table-column label="Gender">
            <template slot-scope="scope">
              <el-tag type="success" v-if="scope.row.sex=='1'">{{globalDict.sex[scope.row.sex]}}</el-tag>
              <el-tag type="danger" v-else>{{globalDict.sex[scope.row.sex]}}</el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="college" label="College">
          </el-table-column>
          <el-table-column prop="major" label="Major">
          </el-table-column>
          <el-table-column>
            <template slot-scope="scope">
              <el-button type="success" icon="el-icon-plus" circle @click.stop="addMember(scope.row)"></el-button>
            </template>
          </el-table-column>
        </el-table>
        <page :page="studentPage" @currentChange="studentCurrentChange"></page>
      </div>
    </card-title-slot>
    <blank :Color="'none'" :Height="10"></blank>
    <card-title-slot :title="'Application for membership'">
      <div slot="content">
        <el-form :inline="true" v-model="tempSearch" class="demo-form-inline">
          <el-form-item label="Student ID">
            <el-input v-model="tempSearch.studentNo"></el-input>
          </el-form-item>
          <el-form-item label="Student Name">
            <el-input v-model="tempSearch.name"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click.stop="getWaitMemberInfo()">Search</el-button>
          </el-form-item>
        </el-form>
        <el-table :data="memberTempTableData" style="width: 100%">
          <el-table-column type="index" label="No." width="50px">
          </el-table-column>
          <el-table-column prop="clubName" label="Club">
          </el-table-column>
          <el-table-column prop="studentNo" label="StudentID">
          </el-table-column>
          <el-table-column prop="name" label="Name">
          </el-table-column>
          <el-table-column prop="college" label="College">
          </el-table-column>
          <el-table-column prop="major" label="Major">
          </el-table-column>
          <el-table-column label="Type">
            <template slot-scope="scope">
              <el-tag type="success" effect="plain">{{scope.row.type}}</el-tag>
            </template>
          </el-table-column>
          <el-table-column label="Date">
            <template slot-scope="scope">
              {{scope.row.createDate | filterDateTime2}}
            </template>
          </el-table-column>
          <el-table-column label="Operate" fixed="right" width="200">
            <template slot-scope="scope">
              <el-button type="success" effect="plain" @click.stop="pass(scope.row)">Agree</el-button>
              <el-button type="danger" effect="plain" @click.stop="forbid(scope.row)">Refuse</el-button>
            </template>
          </el-table-column>
        </el-table>
        <page :page="tempPage" @currentChange="tempCurrentChange"></page>
      </div>
    </card-title-slot>
    <blank :Color="'none'" :Height="10"></blank>
    <card-title-slot :title="'Club member information edit'">
      <div slot="content">
        <el-form :inline="true" v-model="memberSearch" class="demo-form-inline">
          <el-form-item label="StudentID">
            <el-input v-model="memberSearch.studentNo"></el-input>
          </el-form-item>
          <el-form-item label="Name">
            <el-input v-model="memberSearch.name"></el-input>
          </el-form-item>
          <el-form-item label="Gender">
            <el-select v-model="memberSearch.sex" placeholder="Please select gender">
              <el-option :label="value" :value="key" v-for="(value,key,index) in globalDict.sex" :key="index"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click.stop="getMemberInfo()">Search</el-button>
          </el-form-item>
        </el-form>
        <el-table :data="memberTableData" style="width: 100%">
          <el-table-column type="index" label="No.">
          </el-table-column>
          <el-table-column prop="studentNo" label="StudentID">
          </el-table-column>
          <el-table-column prop="name" label="Name">
          </el-table-column>
          <el-table-column label="Gender">
            <template slot-scope="scope">
              <el-tag type="success" v-if="scope.row.sex=='1'">{{globalDict.sex[scope.row.sex]}}</el-tag>
              <el-tag type="danger" v-else>{{globalDict.sex[scope.row.sex]}}</el-tag>
            </template>
          </el-table-column>
          <el-table-column label="Position">
            <template slot-scope="scope">
              <el-tag type="warning" effect="plain">{{globalDict.post[scope.row.post]}}</el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="college" label="College">
          </el-table-column>
          <el-table-column prop="major" label="Major">
          </el-table-column>
           <el-table-column label="Initiation time">
            <template slot-scope="scope">
              {{scope.row.createDate | filterDate}}
            </template>
          </el-table-column>
          <el-table-column fixed="right" width="200">
            <template slot-scope="scope">
              <el-button type="primary" icon="el-icon-edit" @click.stop="updateShow(scope.row)"></el-button>
              <el-button type="danger" icon="el-icon-delete" @click.stop="deleteMember(scope.row)"></el-button>
            </template>
          </el-table-column>
        </el-table>
        <page :page="memberPage" @currentChange="memberCurrentChange"></page>
      </div>
    </card-title-slot>
    <el-dialog :visible.sync="dialogFormVisible">
      <el-form :model="updateForm">
        <el-form-item label="post">
          <el-select v-model="updateForm.post" placeholder="Please select position">
            <el-option :label="value" :value="key" v-for="(value,key,index) in globalDict.post" :key="index"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="updateMember">Confirm</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Blank from "../../components/blank.vue";
import cardTitleSlot from "../../components/cardTitleSlot.vue";
import Page from "../../components/page.vue";
export default {
  components: { cardTitleSlot, Blank, Page },
  props: {
    club: {
      type: String,
      default() {
        return "";
      },
    },
  },
  data() {
    return {
      memberTableData: [],
      memberTempTableData: [],
      studentTableData: [],
      memberSearch: {
        studentNo: "",
        name: "",
        sex: "",
        clubCode: "",
        page: 1,
        size: 10,
      },
      studentSearch: {
        studentNo: "",
        name: "",
        sex: "",
        college: "",
        major: "",
        page: 1,
        size: 10,
      },
      tempSearch: {
        studentNo: "",
        name: "",
        sex: "",
        clubCode: "",
        page: 1,
        size: 10,
      },
      memberPage: {},
      studentPage: {},
      tempPage: {},
      addForm: { studentNo: "" },
      updateForm: { id: "", post: "" },
      dialogFormVisible: false,
    };
  },
  watch: {
    club(newVal, oldVal) {
      console.log(newVal, oldVal);
      this.getMemberInfo();
      this.getWaitMemberInfo();
    },
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.getMemberInfo();
      this.getWaitMemberInfo();
      this.getStudentInfo();
    },
    addMember(row) {
      let form = {
        studentNo: row.studentNo,
        clubCode: this.club,
      };
      this.post({
        url: "/api/manager/member/add",
        data: form,
      }).then((result) => {
        this.$loading().close();
        if (result.code === "200") {
          this.getMemberInfo();
          this.$message.success(result.msg);
          return;
        }
        this.$message.error(result.msg);
      });
    },
    //Get student information
    getStudentInfo() {
      this.studentSearch.page = this.studentPage.current;
      this.studentSearch.size = this.studentPage.size;
      this.$loading({ text: "Data loading" });
      this.post({
        url: "/api/manager/student/query",
        data: this.studentSearch,
      }).then((result) => {
        this.studentTableData = result.data.records;
        this.studentPage = result.data;
        this.$loading().close();
      });
    },
    //Get member information
    getMemberInfo() {
      this.memberSearch.clubCode = this.club;
      this.memberSearch.page = this.memberPage.current;
      this.memberSearch.size = this.memberPage.size;
      this.$loading({ text: "Data loading" });
      this.post({
        url: "/api/manager/member/query",
        data: this.memberSearch,
      }).then((result) => {
        this.memberTableData = result.data.records;
        this.memberPage = result.data;
        this.$loading().close();
      });
    },
    //Get the list of pending review information
    getWaitMemberInfo() {
      this.tempSearch.clubCode = this.club;
      this.tempSearch.page = this.memberPage.current;
      this.tempSearch.size = this.memberPage.size;
      this.$loading({ text: "Data loading" });
      this.post({
        url: "/api/manager/member/temp/get",
        data: this.tempSearch,
      }).then((result) => {
        this.memberTempTableData = result.data.records;
        this.tempPage = result.data;
        this.$loading().close();
      });
    },
    //delete member
    deleteMember(row) {
      this.$loading({ text: "Data loading" });
      this.get({
        url: "/api/manager/member/delete/" + row.id,
      }).then((result) => {
        this.$loading().close();
        if (result.code === "200") {
          this.getMemberInfo();
          this.$message.success(result.msg);
          return;
        }
        this.$message.error(result.msg);
      });
    },
    //Approved
    pass(row) {
      this.get({
        url: "/api/manager/member/temp/pass/" + row.id,
      }).then((result) => {
        this.$loading().close();
        if (result.code === "200") {
          this.getMemberInfo();
          this.$message.success(result.msg);
          return;
        }
        this.$message.error(result.msg);
      });
    },
    forbid(row) {
      this.get({
        url: "/api/manager/member/temp/forbid/" + row.id,
      }).then((result) => {
        this.$loading().close();
        if (result.code === "200") {
          this.getMemberInfo();
          this.$message.success(result.msg);
          return;
        }
        this.$message.error(result.msg);
      });
    },
    //Update member
    updateShow(row) {
      this.dialogFormVisible = true;
      this.updateForm.id = row.id;
      this.updateForm.post = row.post;
    },
    //Update membership
    updateMember() {
      this.$loading({ text: "Data loading" });
      this.post({
        url: "/api/manager/member/update",
        data: this.updateForm,
      }).then((result) => {
        this.$loading().close();
        if (result.code === "200") {
          this.getMemberInfo();
          this.$message.success(result.msg);
          //Close popup
          this.dialogFormVisible = false;
          return;
        }
        this.$message.error(result.msg);
      });
    },
    //currentChange
    memberCurrentChange(e) {
      console.log(e);
      this.memberPage.size = e.size;
      this.memberPage.current = e.page;
      this.getMemberInfo();
    },
    studentCurrentChange(e) {
      console.log(e);
      this.studentPage.size = e.size;
      this.studentPage.current = e.page;
      this.getStudentInfo();
    },
    tempCurrentChange(e) {
      console.log(e);
      this.tempPage.size = e.size;
      this.tempPage.current = e.page;
      this.getWaitMemberInfo();
    },
  },
};
</script>

<style scoped>
.search-form{
  display: flex;
  /* justify-content: space-between; */
}
.search-form .el-input{
  width: 200px;
  margin-right: 10px;
}
.search-form .el-select{
  width: 100px;
  margin-right: 10px;
}
</style>