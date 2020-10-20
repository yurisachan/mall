<!--  -->
<template>
  <div class="recommends">
      <div v-for="(item, index) in recommends" :key="index" class="recommends-item">
          <a :href="item.link">
              <img :src="item.image" alt="" class="recommends-img">
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
  name:'HomeRecommends',
  data () {
    return {
    }
  },
  props:{
      recommends:{
          type:Array,
          defalut(){
              return []
          }
      }
  }
}
</script>

<style scoped>
.recommends{
    display: flex;
    text-align: center;
    font-size: 12px;
    width: 100%;
    border-bottom: 5px solid #ccc;
}
.recommends-item{
   flex: 1;
   padding: 10px 0 20px;
}
.recommends-img{
    width: 70px;
    height: 70px;
}
</style>
