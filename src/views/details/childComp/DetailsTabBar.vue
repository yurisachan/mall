<!--  -->
<template>
  <div class="details-tab-bar">
      <tab-bar>
          <div class="content">收藏</div>
      </tab-bar>
  </div>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
export default {
  name:'DetailsTabBar',
  data () {
    return {
    }
  },
  components:{
      TabBar
  }
}
</script>

<style scoped>
.content{
    height: 49px;
    line-height: 49px;
}
</style>
