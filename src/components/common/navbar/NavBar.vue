<!--  -->
<template>
  <div class="navbar">
    <div class="navbar-left">
      <slot name="left"></slot>
    </div>
    <div class="navbar-center">
      <slot name="center"></slot>
    </div>
    <div class="navbar-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {};
  }
};
</script>

<style scoped>
.navbar {
  display: flex;
  height: 44px;
  width: 100vw;
  line-height: 44px;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.3);
  text-align: center;
  position: fixed;
  z-index: 2;
}
.navbar-left,
.navbar-right {
  width: 60px;
  height: 44px;
}
.navbar-center {
  flex: 1;
}
</style>
