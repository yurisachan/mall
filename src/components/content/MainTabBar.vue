<!--  -->
<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home">
        <template v-slot:item-icon>
          <img src="~a-img-tb/home.svg" />
        </template>
        <template v-slot:item-icon-active>
          <img src="~a-img-tb/home-active.svg" />
        </template>
        <template v-slot:item-text>
          <div>首页</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/sort">
        <template v-slot:item-icon>
          <img src="~a-img-tb/sort.svg" />
        </template>
        <template v-slot:item-icon-active>
          <img src="~a-img-tb/sort-active.svg" />
        </template>
        <template v-slot:item-text>
          <div>分类</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/collect">
        <template v-slot:item-icon>
          <img src="~a-img-tb/cart.svg" />
        </template>
        <template v-slot:item-icon-active>
          <img src="~a-img-tb/cart-active.svg" />
        </template>
        <template v-slot:item-text>
          <div>收藏</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <template v-slot:item-icon>
          <img src="~a-img-tb/profile.svg" />
        </template>
        <template v-slot:item-icon-active>
          <img src="~a-img-tb/profile-active.svg" />
        </template>
        <template v-slot:item-text>
          <div>我的</div>
        </template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  data() {
    return {};
  },
  components:{
    TabBar,
    TabBarItem 
  }
};
</script>

<style scoped>
</style>
