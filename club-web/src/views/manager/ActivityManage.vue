<template>
  <div>
    <card-title-slot :title="'Activity Information'">
      <div slot="content">
        <el-form :inline="true" v-model="info" class="demo-form-inline">
          <el-form-item label="Activity Name">
            <el-input v-model="info.actName"></el-input>
          </el-form-item>
          <br />
          <el-form-item label="Activity Introduction">
          </el-form-item>
          <br />
          <el-input type="textarea" rows="5" placeholder="Please enter content" v-model="info.actContent" maxlength="800" show-word-limit>
          </el-input>
          <br />
          <br />
          <el-form-item>
            <el-button type="primary" @click.stop="submitForm()">Add</el-button>
          </el-form-item>
        </el-form>
      </div>
    </card-title-slot>
    <blank :Color="'none'" :Height="10"></blank>
    <card-title-slot :title="'Operation Record'">
      <div slot="content">
        <el-form :inline="true" v-model="info" class="demo-form-inline">
          <el-form-item label="Activity Name">
            <el-input v-model="actName"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click.stop="getClubTempInfo()">Search</el-button>
          </el-form-item>
        </el-form>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column type="index" label="No.">
          </el-table-column>
          <el-table-column label="Date">
            <template slot-scope="scope">
              {{scope.row.createDate | filterDateTime2}}
            </template>
          </el-table-column>
          <el-table-column prop="actName" label="Activity Name">
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
      actName:'',
      tableData: [],
      info: { actName: "", actContent: "", clubCode: "" },
      page: {},
    };
  },
  watch: {
    club(newVal, oldVal) {
      this.getClubTempInfo();
    },
  },
  created() {
    this.getClubTempInfo();
  },
  methods: {
    submitForm() {
      if (this.info.actName.trim() === "") {
        this.$message.error("Activity name can not be blank");
        return;
      }
      if (this.info.actContent.trim() === "") {
        this.$message.error("Activity content can not be blank");
        return;
      }
      this.info["clubCode"] = this.club;
      this.post({
        url: "/api/manager/act/temp/add",
        data: this.info,
      }).then((result) => {
        this.$loading().close();
        this.$message.success(result.msg);
        this.getClubTempInfo();
      });
    },
    //Get activity submission record information
    getClubTempInfo() {
      let form = {
        actName:this.actName,
        clubCode: this.club,
        page: this.page.current,
        size: this.page.size,
      };
      form["page"] = this.page.current;
      this.$loading({ text: "Data loading" });
      this.post({
        url: "/api/manager/act/temp/query",
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