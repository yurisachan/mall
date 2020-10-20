<!--  -->
<template>
  <div class="goods">
      <goods-item v-for="(item, index) in goods.list" :key="index" :goodsItem='item' class="goods-item"></goods-item>
  </div>
</template>

<script>
import GoodsItem from 'components/content/goods/GoodsItem'

export default {
  name:'Goods',
  data () {
    return {
    }
  },
  props:{
      goods:{
        type:Object,
        default(){
            return []
        }
      }
  },
  components:{
      GoodsItem
  }
}
</script>

<style scoped>
.goods{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.goods-item{
  width: 48%;
}
</style>
