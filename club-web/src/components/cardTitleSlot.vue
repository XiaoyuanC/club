<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <div class="box-card-title" style="font-weight: bold; font-size: 20px" v-text="title"></div>
      </div>
      <div>
          <slot name="content"></slot>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
    props:{
        title:{
            type:String,
            default(){
                return "";
            }
        }
    }
};
</script>

<style scoped>
.box-card-title{
  /* line-height: 21px; */
  word-break:break-all;
  white-space: pre-wrap;
  overflow: hidden;
}
</style>