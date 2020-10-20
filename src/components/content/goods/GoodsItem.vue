<!--  -->
<template>
  <div class="goods-item" @click='itemClick(goodsItem.id)'>
      <img :src="goodsItem.download_url" alt="" @load="imgLoad">
      <div>
          <span>{{goodsItem.author}}</span>
      </div>
  </div>
</template>

<script>
export default {
  name:'GoodsItem',
  data () {
    return {
    }
  },
  props:{
      goodsItem:{
          type:Object,
          default(){
              return {}
          }
      }
  },
  methods: {
      imgLoad(){
          this.$bus.$emit('imgLoaded')
      },
      itemClick(id){
          this.$router.push({
              path:'/details',
              query:{
                'id':id
              }
          })
          this.$store.commit('idChange',this.goodsItem.id)
      }
  },
}
</script>

<style scoped>
.goods-item img{
    width: 48vw;
    border-radius: 5px;
}
.goods-item{
    padding-bottom: 10px;
}
</style>
