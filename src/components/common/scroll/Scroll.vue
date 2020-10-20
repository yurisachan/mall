<!--  -->
<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  data() {
    return {
      scroll: null
    };
  },
  props: {
    ProbeType: {
      type: Number,
      default: 1
    }
  },
  methods: {
    refresh(){
      this.scroll.refresh()
      console.log('----');
    }
  },
  mounted() {
    //创建scroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      pullup: true,
      probeType: this.ProbeType,
      click: true,
      refreshDelay:20
    });
    //console.log(this.scroll);

    //监听滚动位置
    this.scroll.on("scroll", position => {
      this.$emit("scroll", position);
    });

    //监听滚动到底部
    this.scroll.on("scrollEnd", () => {
      if (this.scroll.y <= this.scroll.maxScrollY) {
        this.$emit("scrollEnd");
      }
    });
  }
};
</script>

<style scoped>
.wrapper{
  position: relative;
}
</style>
