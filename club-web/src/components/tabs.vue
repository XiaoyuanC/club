<template>
  <div class="tabs">
    <span
    :style="{marginLeft:left+'px',marginRight:right+'px'}"
      :class="{ active: item.show }"
      v-for="(item, index) in tabs"
      :key="index"
      v-text="item.label"
      @click.stop="click(index)"
    ></span>
  </div>
</template>
<script>
export default {
  props:{
    tabs:{
      type:Array,
      default(){
        return [];
      }
    },
    Left:{
      type:Number,
      default(){
        return 0;
      }
    },
    Right:{
      type:Number,
      default(){
        return 0;
      }
    }
  },
  watch: {
    Left(newValue) {
      this.left = newValue;
    },
    Right(newValue){
      this.right = newValue;
    }
  },
  data() {
    return {
      left: 0,
      right:0
    };
  },
  methods: {
    click(index) {
      this.$emit('change', index);
    },
  },
};
</script>

<style scoped>
.tabs {
  padding: 10px 0px;
  display: flex;
  justify-content: flex-end;
  box-sizing: border-box;
}
.tabs > span {
  padding: 0px 10px;
  cursor:pointer;
}
.tabs > .active {
  color: red;
  border-bottom: 2px red solid;
}
</style>