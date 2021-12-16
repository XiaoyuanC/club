<template>
  <div>
    <card-title-slot :title="'Joined clubs'">
      <div slot="content">
        <el-table :data="clubTableData" style="width: 100%">
          <el-table-column type="index" label="No.">
          </el-table-column>
          <el-table-column prop="clubName" label="Club Name">
          </el-table-column>
          <el-table-column prop="clubCode" label="Club Code">
          </el-table-column>
          <el-table-column prop="department" label="College">
          </el-table-column>
          <el-table-column prop="clubPeople" label="Number of members">
          </el-table-column>
          <el-table-column label="Position">
            <template slot-scope="scope">
              <el-tag type="warning" effect="plain">{{globalDict.post[scope.row.post]}}</el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="clubPrincipal" label="Club Manager">
          </el-table-column>
          <el-table-column label="Admission date">
            <template slot-scope="scope">
              {{scope.row.createDate | filterDate}}
            </template>
          </el-table-column>
          <el-table-column label="Operate">
            <template slot-scope="scope">
              <el-button type="danger" @click.stop="deleteClub(scope.row)">
                Quit
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <page :page="clubPage" @currentChange="clubCurrentChange"></page>
      </div>
    </card-title-slot>
    <blank :Color="'none'" :Height="10"></blank>
    <card-slot>
      <div class="content">
        <el-form class="form1" v-model="searchForm">
          <el-col :span="4">
            <el-input v-model="searchForm.clubName" placeholder="Club Name"></el-input>
          </el-col>
          <el-col :span="4">
            <el-input v-model="searchForm.clubCode" placeholder="Club Code"></el-input>
          </el-col>
          <el-col :span="4">
            <el-input v-model="searchForm.department" placeholder="College"></el-input>
          </el-col>
          <el-col :span="4">
            <el-input v-model="searchForm.clubPrincipal" placeholder="Club Manager"></el-input>
          </el-col>
          <el-col :span="4">
            <el-button type="primary" @click.stop="searchClubInfo()">Search</el-button>
          </el-col>
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
          <el-table-column prop="clubPeople" label="Number of members">
          </el-table-column>
          <el-table-column prop="clubPrincipal" label="Club Manager">
          </el-table-column>
          <el-table-column label="Operate">
            <template slot-scope="scope">
              <el-button type="success" @click.stop="addClub(scope.row)">
                Apply
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <page :page="searchPage" @currentChange="searchCurrentChange"></page>
      </div>
    </card-slot>
    <blank :Color="'none'" :Height="10"></blank>
    <card-title-slot :title="'Application Record'">
      <div slot="content">
        <el-table :data="historyTableData" style="width: 100%">
          <el-table-column type="index" label="No.">
          </el-table-column>
          <el-table-column prop="clubCode" label="Club Code">
          </el-table-column>
          <el-table-column prop="clubName" label="Club Name">
          </el-table-column>
          <el-table-column label="Type">
            <template slot-scope="scope">
              <el-tag type="success" effect="plain">{{scope.row.type}}</el-tag>
            </template>
          </el-table-column>
          <el-table-column label="Date of Application">
            <template slot-scope="scope">
              {{scope.row.createDate | filterDateTime2}}
            </template>
          </el-table-column>
          <el-table-column label="Processing Time">
            <template slot-scope="scope">
              {{scope.row.updateDate | filterDateTime2}}
            </template>
          </el-table-column>
          <el-table-column label="Status">
            <template slot-scope="scope">
              <el-tag type="warning">{{globalDict.status[scope.row.mark]}}</el-tag>
            </template>
          </el-table-column>
        </el-table>
        <page :page="historyPage" @currentChange="historyCurrentChange"></page>
      </div>
    </card-title-slot>
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
      clubTableData: [],
      clubPage: { current: 1, size: 10 },
      historyTableData: [],
      historyPage: { current: 1, size: 10 },
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
    };
  },
  watch: {},
  created() {
    this.init();
  },
  methods: {
    init() {
      this.getClubInfo();
      this.deleteAndClubHistory();
      this.searchClubInfo();
    },
    //Apply to join the club
    addClub(row) {
      this.get({
        url: "/api/member/temp/add/" + row.clubCode,
      }).then((result) => {
        this.$loading().close();
        if (result.code === "200") {
          this.deleteAndClubHistory();
          this.$message.success(result.msg);
          return;
        }
        this.$message.error(result.msg);
      });
    },
    //Get information about joined clubs
    getClubInfo() {
      this.$loading({ text: "Data loading" });
      this.post({
        url: "/api/member/club",
        data: {
          page: this.clubPage.current,
          size: this.clubPage.size,
        },
      }).then((result) => {
        this.clubTableData = result.data.records;
        this.clubPage = result.data;
        this.$loading().close();
      });
    },
    //Apply to quit the club
    deleteClub(row) {
      this.$loading({ text: "Data loading" });
      this.get({
        url: "/api/member/temp/delete/" + row.clubCode,
      }).then((result) => {
        this.$loading().close();
        if (result.code === "200") {
          this.deleteAndClubHistory();
          this.$message.success(result.msg);
          return;
        }
        this.$message.error(result.msg);
      });
    },
    //Application history
    deleteAndClubHistory() {
      this.$loading({ text: "Data loading" });
      this.post({
        url: "/api/member/temp/history",
        data: {
          page: this.historyPage.current,
          size: this.historyPage.size,
        },
      }).then((result) => {
        this.$loading().close();
        this.historyTableData = result.data.records;
        this.historyPage = result.data;
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
    //currentChange
    clubCurrentChange(e) {
      console.log(e);
      this.clubPage.size = e.size;
      this.clubPage.current = e.page;
      this.getClubInfo();
    },
    historyCurrentChange(e) {
      console.log(e);
      this.historyPage.size = e.size;
      this.historyPage.current = e.page;
      this.deleteAndClubHistory();
    },
    searchCurrentChange(e) {
      console.log(e);
      this.searchPage.size = e.size;
      this.searchPage.current = e.page;
      this.searchClubInfo();
    },
  },
};
</script>

<style scoped>
.form1 {
  display: flex;
  justify-content: space-between;
}
</style>