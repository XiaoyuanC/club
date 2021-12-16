<template>
  <div class="box">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.box {
  position: relative;
  width: 100%;
  text-align: center;
  color: #000000;
  font-size: 10px;
  box-sizing: border-box;
  background-color: cornflowerblue;
  margin-bottom: 10px;
}
</style>