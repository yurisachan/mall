<!--  -->
<template>
  <div class="tabBarItem" @click="itemClick">
      <div v-if="isActive"><slot name="item-icon"></slot></div>
      <div v-else><slot name="item-icon-active"></slot></div>
      <div :style='activeStyle'><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name:'TabBarItem',
  data () {
    return {
    }
  },
  props:{
      path:String,
      activeColor:{
          type:String,
          default:'#1296db'
      }
  },
  computed: {
      isActive(){
          return this.$route.path.indexOf(this.path)==-1
      },
      activeStyle(){
          return this.isActive ? {}:{color:this.activeColor}
      }
  },
  methods: {
      itemClick(){
          this.$router.replace(this.path).catch(err=>err)
      }

  },
}
</script>

<style scoped>
.tabBarItem{
    flex: 1;
    height: 49px;
    padding-top:5px;
    vertical-align: middle ;
}
.tabBarItem img{
    width: 24px;
    height: 24px;
}
</style>
