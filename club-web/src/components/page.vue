<template>
  <div class="page-box">
    <el-pagination background layout="prev, pager, next,total,sizes" 
    @prev-click="currentChange" 
    @next-click="currentChange" 
    @size-change="sizeChange"
    @current-change="currentChange" :current-page="page.current" :page-size="page.size" :total="page.total">
    </el-pagination>
  </div>
</template>

<script>
export default {
  props: {
    page: {
      type: Object,
      default() {
        return {
          current: 1,
          size: 10,
          total: 0,
        };
      },
    },
  },
  methods: {
    //Current page switch
    currentChange(e) {
      this.$emit("currentChange", {
        size: this.page.size,
        page: e,
      });
    },
    //Data size switch
    sizeChange(e){
        this.$emit("currentChange", {
        size: e,
        page: this.page.current,
      });
    }
  },
};
</script>

<style scoped>
.page-box {
  position: relative;
}
</style>