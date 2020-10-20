<!--  -->
<template>
  <div class="tabBar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  data() {
    return {};
  }
};
</script>

<style scoped>
.tabBar{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background: #f6f6f6;
    box-shadow: 0 -1px 1px rgba(100,100,100,0.3);
    font-size: 14px;
}
</style>
