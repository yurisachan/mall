<!--  -->
<template>
  <div class="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>遇见img</div>
      </template>
    </nav-bar>
    <scroll class="scroll-content" ref="scroll" @scroll="backTop" :ProbeType='3' @scrollEnd="getMoreGoods">
      <home-swiper :banners="banners" class="home-swiper"></home-swiper>
      <home-recommends :recommends="recommends"></home-recommends>
      <tab-control :titles="['人文','艺术','精选']" @tabControlClick='tabControlClick' ref='tabControl' class="tab-control"></tab-control>
      <goods :goods='goods[curentType]' :key="curentType"></goods>
    </scroll>
    <back-top @click.native='backTopClick' v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'
import HomeRecommends from './childComps/HomeRecommends'
import TabControl from 'components/content/TabControl'
import Goods from 'components/content/goods/Goods'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/BackTop'

import {getHomeMultidata,getHomeGoods} from 'network/home.js'
import {debounce} from 'common/utils'

export default {
  name:'Home',
  data () {
    return {
        banners:null,
				recommends:null,
        data:null,
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]}
        },
        curentType:'pop',
        isShowBackTop:false
    }
  },
  components:{
      NavBar,
			HomeSwiper,
			HomeRecommends,
      TabControl,
      Goods,
      Scroll,
      BackTop
  },
  created() {
      this.getHomeMultidata()
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
     
  },
  mounted() {
     //监听goods图片加载完成
      const refresh= debounce(this.$refs.scroll.refresh,500) 
      this.$bus.$on('imgLoaded',()=>{
        refresh() 
      })  
  },
  updated() {

    
  },
  methods: {

    //网络请求
      getHomeMultidata(){
           getHomeMultidata().then(res=>{
				  //   console.log(res); 
            this.banners=res.data.data.banner.list
            this.recommends=res.data.data.recommend.list
            this.data=res.data.data
          })
      },

      getHomeGoods(type){
        const page=this.goods[type].page+1
        getHomeGoods(type,page).then(res=>{
          this.goods[type].list.push(...res.data)
          this.goods[type].page++
        })
      },

      //事件监听
      tabControlClick(index){
        switch (index){
          case 0:
            this.curentType='pop'
            break
          case 1:
            this.curentType='new'
            break
          case 2:
            this.curentType='sell'
            break
        }
        // this.$refs.scroll.scroll.refresh()
      },
      backTopClick(){
        this.$refs.scroll.scroll&&this.$refs.scroll.scroll.scrollTo(0,0,500)
      },
      backTop(position){
        this.isShowBackTop=(-position.y)>1000
      },
      getMoreGoods(){
        this.getHomeGoods(this.curentType)
        //this.$refs.scroll.scroll.refresh()
      },
      getOffsetTop(){
        this.$refs.tabControl.$el.offsetTop
      }
  },
}
</script>

<style scoped>
.home{
  position: relative;
  height: 100vh;
}
.home-nav {
  color: #fff;
  background: var(--color-background);
}
/* .home-swiper{
   padding-top:44px
}
.tab-control{
} */
.scroll-content{
  overflow: hidden;
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 54px;
}
</style>
