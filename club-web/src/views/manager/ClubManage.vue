<template>
  <div>
    <card-title-slot :title="'Club Information'">
      <div slot="content">
        <el-form :inline="true" v-model="info" class="demo-form-inline">
          <el-form-item label="Club Name">
            <el-input disabled v-model="info.clubName"></el-input>
          </el-form-item>
          <el-form-item label="Club Code">
            <el-input disabled v-model="info.clubCode"></el-input>
          </el-form-item>
          <el-form-item label="Club Manager">
            <el-input :disabled="!show" v-model="info.clubPrincipal"></el-input>
          </el-form-item>
          <el-form-item label="College">
            <el-input disabled v-model="info.department"></el-input>
          </el-form-item>
          <el-form-item label="Club Member">
            <el-input disabled v-model="info.clubPeople"></el-input>
          </el-form-item>
          <br />
          <el-input :disabled="!show" type="textarea" rows="5" placeholder="Please enter content" v-model="info.clubDescribe" maxlength="800" show-word-limit>
          </el-input>
          <br />
          <br />
          <el-form-item>
            <el-button type="primary" v-show="!show" @click.stop="show = !show">Modify</el-button>
            <el-button type="primary" v-show="show" @click.stop="submitForm()">Submit</el-button>
          </el-form-item>
        </el-form>
      </div>
    </card-title-slot>
    <blank :Color="'none'" :Height="10"></blank>
    <card-title-slot :title="'Operation record'">
      <div slot="content">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column type="index" label="No.">
          </el-table-column>
          <el-table-column prop="createDate" label="Date of Application">
              <template slot-scope="scope">
              {{scope.row.createDate | filterDateTime2}}
            </template>
          </el-table-column>
          <el-table-column prop="createDate" label="Date of review">
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
        <page :page="page" @currentChange="currentChange"></page>
      </div>
    </card-title-slot>
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
      show: false,
      tableData: [],
      info: {},
      page: {},
    };
  },
  watch: {
    club(newVal, oldVal) {
      this.init();
    },
  },
  created() {
    this.init();
  },
  methods: {
    init(){
      this.getClubInfo();
      this.getClubTempInfo();
    },
    submitForm() {
      let form = {
        clubCode: this.info.clubCode,
        clubPrincipal: this.info.clubPrincipal,
        clubDescribe: this.info.clubDescribe,
      };
      this.post({
        url: "/api/manager/club/temp/add",
        data: form,
      }).then((result) => {
        this.show = !this.show;
        this.$loading().close();
        this.$message.success(result.msg);
        this.getClubTempInfo();
      });
    },
    //Get activity information
    getClubInfo() {
      this.info["clubCode"] = this.club;
      this.$loading({
        text: "Data loading",
        spinner: "el-icon-loading",
      });
      this.get({
        url: "/api/common/club/info/" + this.info.clubCode,
      }).then((result) => {
        console.log(result);
        if (result.data != null) {
          this.info = result.data;
        }
        this.$loading().close();
      });
    },
    //Get activity submission record information
    getClubTempInfo() {
      let form = {
        clubCode: this.club,
        page: this.page.current,
        size: this.page.size,
      };
      form["page"] = this.page.current;
      this.$loading({ text: "Data loading" });
      this.post({
        url: "/api/manager/club/temp/query",
        data: form,
      }).then((result) => {
        this.tableData = result.data.records;
        this.page = result.data;
        this.$loading().close();
      });
    },
    //currentChange
    currentChange(e) {
      this.page.size = e.size;
      this.page.current = e.page;
      this.getClubTempInfo();
    },
  },
};
</script>

<style>
</style>