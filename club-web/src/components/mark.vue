<template>
  <div>
      <el-tag v-if="value=='1'" type="success">Pass</el-tag>
      <el-tag v-else-if="value=='0'" type="info">Under review</el-tag>
      <el-tag v-else-if="value=='-1'" type="danger">Fail</el-tag>
      <el-tag v-else type="warning">Unknown</el-tag>
  </div>
</template>

<script>
export default {
    props:{
        value:{
            type:String,
            default(){
                return "";
            }
        }
    }
}
</script>

<style>

</style>