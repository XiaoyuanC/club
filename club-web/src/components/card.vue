<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span
          style="font-weight: bold; font-size: 20px"
          v-text="info.title"
        ></span>
      </div>
      <div v-text="info.content"></div>
    </el-card>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      default() {
        return {
          title: "",
          content: "",
        };
      },
    },
  },
};
</script>

<style>
</style>