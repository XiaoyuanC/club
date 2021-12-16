<template>
  <div class="home-box">
    <div class="container">
      <blank :Color="'none'"></blank>
      <card-title-slot :title="info.clubName+'('+info.clubCode+')'">
        <div slot="content">
          <div class="top">
            <div class="top-item"><span class="span-title">Club Name</span><br/><br/>{{info.clubName}}</div>
            <div class="top-item"><span class="span-title">Club Code</span><br/><br/>{{info.clubCode}}</div>
            <div class="top-item"><span class="span-title">Club Manager</span><br/><br/>{{info.clubPrincipal}}</div>
            <div class="top-item"><span class="span-title">Number of members</span><br/><br/>{{info.clubPeople}}</div>
            <div class="top-item"><span class="span-title">College</span><br/><br/>{{info.department}}</div>
          </div>
          <div class="body">
            <span class="span-title">Club Introduction</span>
            <br/>{{info.clubDescribe}}
          </div>
        </div>
      </card-title-slot>
    </div>
  </div>
</template>

<script>
import Blank from "../components/blank.vue";
import CardSlot from "../components/cardSlot.vue";
import CardTitleSlot from "../components/cardTitleSlot.vue";
export default {
  name: "ClubInfo",
  components: {
    Blank,
    CardTitleSlot,
    CardSlot,
  },
  data() {
    return {
      info: {},
    };
  },
  methods: {
    init() {
      this.getClubInfo();
    },
    getClubInfo() {
      const loading = this.$loading({
        text: "Data loading",
        spinner: "el-icon-loading",
      });
      this.get({
        url: "/api/common/club/info/" + this.info.clubCode,
      }).then((result) => {
        console.log(result);
        this.info = result.data;
        loading.close();
      });
    },
  },
  created() {
    this.info['clubCode'] = this.$route.query.key;
    this.info['clubName'] = this.$route.query.value;
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
  width: 70%;
  height: 100%;
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
.top{
  display: flex;
  margin-bottom: 10px;
}
.top>.top-item{
  margin-right: 40px;
  margin-bottom: 10px;
  /* border:1px dotted #000; */
  padding: 10px;
  /* border-radius: 3px; */
}
.span-title{
  font-weight: 900;
}
.body{
  /* line-height: 21px; */
  word-break:break-all;
  white-space: pre-wrap;
  overflow: hidden;
}
</style>
