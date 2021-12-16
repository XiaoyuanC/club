<template>
  <div>
    <card-title-slot :title="'Club information management'">
      <div slot="content">
        <el-form class="form1" v-model="searchForm">
          <el-input v-model="searchForm.clubName" placeholder="Club Name"></el-input>
          <el-input v-model="searchForm.clubCode" placeholder="Club Code"></el-input>
          <el-input v-model="searchForm.department" placeholder="College"></el-input>
          <el-input v-model="searchForm.clubPrincipal" placeholder="Club Manager"></el-input>
          <el-button type="primary" @click.stop="searchClubInfo()">Search</el-button>
          <el-button type="primary" @click.stop="addDialogShow()">Add</el-button>
        </el-form>
        <el-table :data="searchClubTableData" style="width: 100%">
          <el-table-column type="index" label="No.">
          </el-table-column>
          <el-table-column prop="clubName" label="Club Name">
          </el-table-column>
          <el-table-column prop="clubCode" label="Club Code">
          </el-table-column>
          <el-table-column prop="department" label="College">
          </el-table-column>
          <el-table-column prop="clubPeople" label="Total Members">
          </el-table-column>
          <el-table-column prop="clubPrincipal" label="Club Manager">
          </el-table-column>
          <el-table-column fixed="right" width="300">
            <template slot-scope="scope">
              <el-button type="warning" icon="el-icon-zoom-in" @click.stop="look(scope.row)" circle size="mini"></el-button>
              <el-button type="primary" icon="el-icon-edit" @click.stop="updateDialogShow(scope.row)" circle size="mini"></el-button>
              <el-button type="danger" icon="el-icon-delete" @click.stop="deleteClub(scope.row)" circle size="mini"></el-button>
              <el-button type="primary" icon="el-icon-plus" @click.stop="managerDialogShow(scope.row)" circle size="mini"></el-button>
            </template>
          </el-table-column>
        </el-table>
        <page :page="searchPage" @currentChange="searchCurrentChange"></page>
      </div>
    </card-title-slot>
    <blank :Color="'none'" :Height="10"></blank>
    <card-title-slot :title="'Club information review'">
      <div slot="content">
        <el-form class="form1" v-model="clubTempForm">
          <el-input v-model="clubTempForm.clubName" placeholder="Club Name"></el-input>
          <el-input v-model="clubTempForm.clubCode" placeholder="Club Code"></el-input>
          <el-input v-model="clubTempForm.department" placeholder="College"></el-input>
          <el-input v-model="clubTempForm.clubPrincipal" placeholder="Club Manager"></el-input>
          <el-button type="primary" @click.stop="searchClubInfoTemp()">Search</el-button>
        </el-form>
        <el-table :data="clubTempTableData" style="width: 100%">
          <el-table-column type="index" label="No.">
          </el-table-column>
          <el-table-column prop="clubName" label="Club Name">
          </el-table-column>
          <el-table-column prop="clubCode" label="Club Code">
          </el-table-column>
          <el-table-column prop="department" label="College">
          </el-table-column>
          <el-table-column label="Date">
            <template slot-scope="scope">
              {{scope.row.createDate | filterDateTime2}}
            </template>
          </el-table-column>
          <el-table-column fixed="right" width="300">
            <template slot-scope="scope">
              <el-button type="warning" icon="el-icon-zoom-in" @click.stop="look(scope.row)" circle size="mini"></el-button>
              <el-button type="danger" icon="el-icon-success" @click.stop="passClubInfo(scope.row)" circle size="mini"></el-button>
              <el-button type="primary" icon="el-icon-error" @click.stop="forbidClubInfo(scope.row)" circle size="mini"></el-button>
            </template>
          </el-table-column>
        </el-table>
        <page :page="clubTempPage" @currentChange="clubTempCurrentChange"></page>
      </div>
    </card-title-slot>
    <blank :Color="'none'" :Height="10"></blank>
    <card-title-slot :title="'Club manager account management'">
      <div slot="content">
        <el-form class="form1" v-model="searchManagerForm">
          <el-input v-model="searchManagerForm.clubName" placeholder="Club Name"></el-input>
          <el-input v-model="searchManagerForm.clubCode" placeholder="Club Code"></el-input>
          <el-input v-model="searchManagerForm.userId" placeholder="Manager Username"></el-input>
          <el-button type="primary" @click.stop="searchManagerInfo()">Search</el-button>
        </el-form>
        <el-table :data="searchManagerTableData" style="width: 100%">
          <el-table-column type="index" label="No.">
          </el-table-column>
          <el-table-column prop="clubName" label="Club Name">
          </el-table-column>
          <el-table-column prop="clubCode" label="Club Code">
          </el-table-column>
          <el-table-column prop="userId" label="Manager Username">
          </el-table-column>
          <el-table-column prop="createDate" label="Date">
          </el-table-column>
          <el-table-column fixed="right" width="200">
            <template slot-scope="scope">
              <el-button type="info" icon="el-icon-key" @click.stop="resetManager(scope.row)" circle size="mini"></el-button>
              <el-button type="danger" icon="el-icon-delete" @click.stop="deleteManager(scope.row)" circle size="mini"></el-button>
            </template>
          </el-table-column>
        </el-table>
        <page :page="managerPage" @currentChange="managerCurrentChange"></page>
      </div>
    </card-title-slot>
    <!-- Add/modify community information -->
    <el-dialog :title="clubAdd?'Add club':'Club modification'" :visible.sync="clubDialogFormVisible">
      <el-form ref="clubForm" :model="clubForm" :inline="true">
        <el-form-item label="Club Code">
          <el-input :disabled="!clubAdd" v-model="clubForm.clubCode" placeholder="Club Code"></el-input>
        </el-form-item>
        <el-form-item label="Club Name">
          <el-input v-model="clubForm.clubName" placeholder="Club Name"></el-input>
        </el-form-item>
        <el-form-item label="Club Manager">
          <el-input v-model="clubForm.clubPrincipal" placeholder="Club Manager"></el-input>
        </el-form-item>
        <el-form-item label="College">
          <el-input v-model="clubForm.department" placeholder="College"></el-input>
        </el-form-item>
        <br />
        <el-form-item label="Club Introduction">
        </el-form-item>
        <br />
        <el-input type="textarea" rows="5" placeholder="Please enter content" v-model="clubForm.clubDescribe" maxlength="800" show-word-limit>
        </el-input>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click.stop="clubDialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click.stop="submitForm()">Confirm</el-button>
      </div>
    </el-dialog>
    <!-- Manager account -->
    <el-dialog :visible.sync="managerDialogFormVisible">
      <el-form ref="managerForm" :model="managerForm">
        <el-input v-model="managerForm.userId" placeholder="Manager Username"></el-input>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click.stop="managerDialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click.stop="addManager()">Confirm</el-button>
      </div>
    </el-dialog>
    <!-- View club information -->
    <el-dialog title="Club information" :visible.sync="clubInfoVisible">
      <el-form :inline="true" v-model="info">
        <el-form-item label="Name">
          <el-tag type="success" effect="plain">{{info.clubName}}</el-tag>
        </el-form-item>
        <br />
        <el-form-item label="Code">
          <el-tag type="success" effect="plain">{{info.clubCode}}</el-tag>
        </el-form-item>
        <br />
        <el-form-item label="NumberOfMembers">
          <el-tag type="success" effect="plain">{{info.clubPeople}}</el-tag>
        </el-form-item>
        <br />
        <el-form-item label="College">
          <el-tag type="success" effect="plain">{{info.department}}</el-tag>
        </el-form-item>
        <br />
        <el-form-item label="Manager">
          <el-tag type="success" effect="plain">{{info.clubPrincipal}}</el-tag>
        </el-form-item>
        <br />
        <el-form-item label="Introduction">
        </el-form-item>
        <el-input  type="textarea" rows="5" v-model="info.clubDescribe">
          </el-input>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import Blank from "../../components/blank.vue";
import CardSlot from "../../components/cardSlot.vue";
import cardTitleSlot from "../../components/cardTitleSlot.vue";
import Page from "../../components/page.vue";
export default {
  components: { cardTitleSlot, Blank, Page, CardSlot },
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
      clubDialogFormVisible: false,
      clubForm: {},
      clubAdd: true,
      clubUpdateUrl: "/api/admin/club/update",
      clubAddUrl: "/api/admin/club/add",
      clubDeleteUrl: "/api/admin/club/delete/",
      managerDialogFormVisible: false,
      managerForm: {
        userId: "",
        clubCode: "",
      },
      clubTableData: [],
      clubPage: { current: 1, size: 10 },
      managerQueryUrl: "/api/admin/manager/query",

      searchManagerTableData: [],
      managerPage: { current: 1, size: 10 },
      searchManagerForm: { page: 0, size: 10 },

      searchClubTableData: [],
      searchPage: { current: 1, size: 10 },
      searchForm: {
        clubName: "",
        clubCode: "",
        department: "",
        clubPrincipal: "",
        page: 0,
        size: 10,
      },

      //Review information
      clubTempQueryUrl: "/api/admin/club/temp/query",
      clubTempTableData: [],
      clubTempForm: { page: 0, size: 10 },
      clubTempPage: {},
      //View club information
      clubInfoVisible: false,
      info: {},
    };
  },
  watch: {},
  created() {
    this.init();
  },
  methods: {
    init() {
      this.searchClubInfo();
      this.searchManagerInfo();
      this.searchClubInfoTemp();
    },
    searchClubInfoTemp() {
      this.clubTempForm["page"] = this.clubTempPage.current;
      this.clubTempForm["size"] = this.clubTempPage.size;
      this.$loading({ text: "Data loading" });
      this.post({
        url: this.clubTempQueryUrl,
        data: this.clubTempForm,
      }).then((result) => {
        this.$loading().close();
        this.clubTempTableData = result.data.records;
        this.clubTempPage = result.data;
      });
    },
    //View club information
    look(row) {
      this.info = row;
      this.clubInfoVisible = true;
    },
    //Approval of club information
    passClubInfo(row){
      this.get({
        url: "/api/admin/club/temp/pass/"+row.id,
      }).then((result) => {
        if (result.code === "200") {
          this.$message.success(result.msg);
          this.managerDialogFormVisible = false;
          this.searchClubInfoTemp();
          return;
        }
        this.$message.error(result.msg);
      });
    },
    //Failed to review club information
    forbidClubInfo(row){
      this.get({
        url: '/api/admin/club/temp/forbid/'+row.id,
      }).then((result) => {
        if (result.code === "200") {
          this.$message.success(result.msg);
          this.searchClubInfoTemp();
          return;
        }
        this.$message.error(result.msg);
      });
    },
    //Query the information of the manager
    searchManagerInfo() {
      this.searchManagerForm["page"] = this.managerPage.current;
      this.searchManagerForm["size"] = this.managerPage.size;
      this.post({
        url: this.managerQueryUrl,
        data: this.searchManagerForm,
      }).then((result) => {
        if (result.code === "200") {
          this.searchManagerTableData = result.data.records;
          this.managerPage = result.data;
          return;
        }
        this.$message.error(result.msg);
      });
    },
    //Delete club information
    deleteClub(row) {
      this.get({
        url: this.clubDeleteUrl + row.clubCode,
      }).then((result) => {
        if (result.code === "200") {
          this.$message.success(result.msg);
          this.searchClubInfo();
          return;
        }
        this.$message.error(result.msg);
      });
    },
    //Club information submission
    submitForm() {
      if (this.clubAdd) {
        this.post({
          url: this.clubAddUrl,
          data: this.clubForm,
        }).then((result) => {
          if (result.code === "200") {
            this.$message.success(result.msg);
            this.clubDialogFormVisible = false;
            this.searchClubInfo();
            return;
          }
          this.$message.error(result.msg);
        });
      } else {
        this.post({
          url: this.clubUpdateUrl,
          data: this.clubForm,
        }).then((result) => {
          if (result.code === "200") {
            this.$message.success(result.msg);
            this.clubDialogFormVisible = false;
            this.searchClubInfo();
            return;
          }
          this.$message.error(result.msg);
        });
      }
    },
    //Add and modify pop-ups for clubs
    updateDialogShow(row) {
      this.clubAdd = false;
      this.clubDialogFormVisible = true;
      this.clubForm = row;
      this.$nextTick(() => {
        this.$refs["clubForm"].resetFields();
      });
    },
    //Add an manager account pop-up window
    managerDialogShow(row) {
      this.managerDialogFormVisible = true;
      this.managerForm["clubCode"] = row.clubCode;
      this.$nextTick(() => {
        this.$refs["managerForm"].resetFields();
      });
    },
    //Add an manager account
    addManager() {
      this.post({
        url: "/api/admin/manager/add",
        data: this.managerForm,
      }).then((result) => {
        if (result.code === "200") {
          this.$message.success(result.msg);
          this.managerDialogFormVisible = false;
          return;
        }
        this.$message.error(result.msg);
      });
    },
    //Reset the manager account
    resetManager(row){
      this.get({
        url: "/api/admin/manager/reset/" + row.userId,
      }).then((result) => {
        if (result.code === "200") {
          this.$message.success(result.msg);
          return;
        }
        this.$message.error(result.msg);
      });
    },
    //delete the manager account
    deleteManager(row) {
      this.get({
        url: "/api/admin/manager/delete/" + row.id,
      }).then((result) => {
        if (result.code === "200") {
          this.$message.success(result.msg);
          this.searchManagerInfo();
          return;
        }
        this.$message.error(result.msg);
      });
    },
    //New popup
    addDialogShow() {
      this.clubAdd = true;
      this.clubDialogFormVisible = true;
      this.$nextTick(() => {
        this.$refs["clubForm"].resetFields();
      });
    },
    //Find club information
    searchClubInfo() {
      this.searchForm["page"] = this.searchPage.current;
      this.searchForm["size"] = this.searchPage.size;
      this.$loading({ text: "Data loading" });
      this.post({
        url: "/api/common/club/query",
        data: this.searchForm,
      }).then((result) => {
        this.$loading().close();
        this.searchClubTableData = result.data.records;
        this.searchPage = result.data;
      });
    },
    managerCurrentChange(e) {
      console.log(e);
      this.managerPage.size = e.size;
      this.managerPage.current = e.page;
      this.searchManagerInfo();
    },
    //Club search page
    searchCurrentChange(e) {
      console.log(e);
      this.searchPage.size = e.size;
      this.searchPage.current = e.page;
      this.searchClubInfo();
    },
    //Club information review
    clubTempCurrentChange(e) {
      this.clubTempPage.size = e.size;
      this.clubTempPage.current = e.page;
      this.searchClubInfoTemp();
    },
  },
};
</script>

<style scoped>
.form1 {
  display: flex;
}
.form1 .el-input {
  width: 180px;
  margin-right: 10px;
}
</style>