<template>
  <div
    class="blank-box"
    :style="{ paddingLeft: padding + 'px', paddingRight: padding + 'px',
    marginTop:Top+'px',marginBottom:Bottom+'px' }"
  >
    <div :style="{ background: Color, height: Height + 'px' }"></div>
  </div>
</template>
<script>
export default {
  props: {
    Height: {
      type: Number,
      default() {
        return 5;
      },
    },
    padding: {
      type: Number,
      default() {
        return 10;
      },
    },
    Top: {
      type: Number,
      default() {
        return 0;
      },
    },
    Bottom: {
      type: Number,
      default() {
        return 0;
      },
    },
    Color: {
      type: String,
      default() {
        return "#cccccc";
      },
    },
  },
};
</script>
<style scoped>
.blank-box {
  position: relative;
  width: 100%;
  box-sizing: border-box;
}
.blank-box > div {
  position: relative;
  width: 100%;
}
</style>