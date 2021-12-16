<template>
  <div class="home-box">
    <div class="container">
      <card-slot>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="Activity Name">
            <el-input v-model="formInline.actName" placeholder="Please enter activity name"></el-input>
          </el-form-item>
          <el-form-item label="Club">
            <el-select v-model="formInline.clubCode" placeholder="Please select a club">
              <el-option :label="item.value" :value="item.key" v-for="(item,index) in clubData" :key="index"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">Search</el-button>
          </el-form-item>
        </el-form>
      </card-slot>
      <blank :Color="'none'"></blank>
      <card-title-slot :title="'Activities List'">
        <div slot="content">
          <div class="activity">
            <div class="act-title act-content-title">
              Activity Title
            </div>
            <div class="act-content-title">
              Post Date
            </div>
          </div>
          <div v-for="(item,index) in actData" class="activity" :key="index">
            <div class="act-title" @click.stop="openActInfo(item)">
              {{item.actName}}
            </div>
            <div>
              {{item.createDate | filterDateTime}}
            </div>
          </div>
          <page :page="page" @currentChange="currentChange"></page>
        </div>
      </card-title-slot>
    </div>
  </div>
</template>

<script>
import Blank from "../components/blank.vue";
import CardSlot from "../components/cardSlot.vue";
import CardTitleSlot from "../components/cardTitleSlot.vue";
// @ is an alias to /src
import clubSwiper from "../components/clubSwiper.vue";
import Page from "../components/page.vue";
import Statement from "../components/statement.vue";
export default {
  name: "Activity",
  components: {
    clubSwiper,
    Blank,
    CardTitleSlot,
    Statement,
    CardSlot,
    Page,
  },
  data() {
    return {
      formInline: {
        actName: "",
        clubCode: "",
      },
      actData: [],
      clubData: [],
      page: {},
    };
  },
  methods: {
    init() {
      this.getClub();
      this.onSubmit();
    },
    //Get club information
    getClub() {
      this.get({
        url: "/api/common/club",
      }).then((result) => {
        console.log(result);
        const t = { key: "", value: "All" };
        this.clubData = result.data;
        this.clubData.unshift(t);
      });
    },
    //currentChange
    currentChange(e) {
      console.log(e);
      this.formInline["size"] = e.size;
      this.formInline["page"] = e.page;
      this.sendData();
    },
    sendData() {
      const loading = this.$loading({
        text: "Data loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
      });
      this.get({
        url: "/api/common/act",
        params: this.formInline,
      }).then((result) => {
        console.log(result);
        this.actData = result.data.records;
        this.page = result.data;
        loading.close();
      });
    },
    onSubmit() {
      this.formInline["size"] = 10;
      this.formInline["page"] = 1;
      this.sendData();
    },
    //View activity details
    openActInfo(item) {
      this.$router.push({
        path: "/actinfo",
        query: item,
      });
    },
  },
  created() {
    this.init();
  },
};
</script>

<style scoped>
.home-box {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  box-sizing: border-box;
  padding-bottom: 1px;
  padding-top: 1px;
}
.container {
  position: relative;
  width: 55%;
  height: 100%;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  padding: 10px;
  /* padding-bottom: 100px; */
  box-sizing: border-box;
}
.tag {
  margin-right: 5px;
  margin-bottom: 5px;
  cursor: pointer;
}
.activity {
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
}
.act-title {
  width: 80%;
  box-sizing: border-box;
  margin-right: 20px;
  text-overflow: ellipsis;
  color: blue;
  text-decoration: underline;
  cursor: pointer;
  /* line-height: 21px; */
  word-break: keep-all;
  white-space: nowrap;
  overflow: hidden;
}
.act-content-title{
  color: #000;
  text-decoration: none;
  cursor: pointer;
  font-weight: bold;
}
</style>
