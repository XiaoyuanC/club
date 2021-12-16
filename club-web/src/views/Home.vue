<template>
  <div class="home-box">
    <!-- <div class="home-top"></div> -->
    <div class="container">
      <div>
        <clubSwiper></clubSwiper>
      </div>
      <blank :Color="'none'"></blank>
      <card-title-slot :title="'Club List'" v-if="clubData.length!=0">
        <div slot="content">
          <el-tag class="tag" @click.stop="openClubInfo(item)" v-for="(item,index) in clubData" :key="index" type="">{{item.value}}</el-tag>
        </div>
      </card-title-slot>
      <blank :Color="'none'"></blank>
      <card-title-slot :title="'Activities List'" v-if="actData.length!=0">
        <div slot="content">
          <div class="activity">
            <div class="act-title act-content-title">
              Activity Name
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
          <div style="text-align:center;">
            <span class="act-more" @click.stop="goToActivity()">
              View more Activities
            </span>
          </div>

        </div>
      </card-title-slot>
    </div>
    <!-- <div class="home-bottom"></div> -->
  </div>
</template>

<script>
import Blank from "../components/blank.vue";
import CardTitleSlot from "../components/cardTitleSlot.vue";
// @ is an alias to /src
import clubSwiper from "../components/clubSwiper.vue";
import Statement from "../components/statement.vue";
export default {
  name: "Home",
  components: {
    clubSwiper,
    Blank,
    CardTitleSlot,
    Statement,
  },
  data() {
    return {
      clubData: [],
      actData: [],
    };
  },
  methods: {
    init() {
      this.getClub();
      this.getAct();
    },

    //Get club information
    getClub() {
      this.$loading();
      this.get({
        url: "/api/common/club",
      }).then((result) => {
        console.log(result);
        this.clubData = result.data;
        this.$loading().close();
      });
    },
    //Get activity information
    getAct() {
      this.$loading();
      this.get({
        url: "/api/common/act",
      }).then((result) => {
        console.log(result);
        this.actData = result.data.records;
        this.$loading().close();
      });
    },
    //View activity details
    openActInfo(item) {
      this.$router.push({
        path: "/actInfo",
        query: item,
      });
    },
    //View club details
    openClubInfo(item) {
      this.$router.push({
        path: "/clubinfo",
        query: item,
      });
    },
    //more activities
    goToActivity() {
      this.$router.push({
        path: "/activity",
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
.act-more {
  font-size: 14px;
  font-weight: 900;
  color: rgb(255, 0, 0);
  cursor: pointer;
}
.home-top{
  width: 100%;
  top: 0;
  position: fixed;
  height: 50px;
  background-color: burlywood;
  z-index: 999;
}
.home-bottom{
  width: 100%;
  bottom:  0;
  position: fixed;
  height: 50px;
  background-color: gold;
  z-index: 999;
}
.act-content-title{
  color: #000;
  text-decoration: none;
  cursor: pointer;
  font-weight: bold;
}
</style>
