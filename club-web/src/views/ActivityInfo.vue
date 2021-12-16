<template>
  <div class="home-box">
    <div class="container">
      <blank :Color="'none'"></blank>
      <card-title-slot :title="info.actName">
        <div slot="content">
          <div class="top">
            {{info.createDate | filterDateTime}}
          </div>
          <div class="body">
            {{info.actContent}}
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
// @ is an alias to /src
import clubSwiper from "../components/clubSwiper.vue";
import Page from "../components/page.vue";
import Statement from "../components/statement.vue";
export default {
  name: "ActivityInfo",
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
      info: {},
    };
  },
  methods: {
    init() {
      this.getActInfo();
    },
    //Get activity information
    getActInfo() {
      const loading = this.$loading({
        text: "Data loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
      });
      this.get({
        url: "/api/common/act/info/" + this.info.id,
      }).then((result) => {
        console.log(result);
        this.info = result.data;
        loading.close();
      });
    },
  },
  created() {
    this.info = this.$route.query;
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
</style>
