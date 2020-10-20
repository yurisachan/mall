<!--  -->
<template>
  <div class="tab-control">
      <div v-for="(item, index) in titles" :key="index" class="tab-control-item" 
      :class="{active:curentIndex==index}"
      @click='itemClick(index)'>
          <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
  name:'TabControl',
  data () {
    return {
        curentIndex:0
    }
  },
  props:{
      titles:{
          type:Array,
          default(){
              return []
          }
      }
  },
  methods: {
      itemClick(index){
          this.curentIndex=index
          this.$emit('tabControlClick',index)
      }
  },
}
</script>

<style scoped>
.tab-control{
    display: flex;
    text-align: center;
    height: 50px;
    line-height: 50px;
    box-shadow: 0 1px 1px rgba(100,100,100,.1);
    /* position:sticky;
    top:44px;
    z-index:2; */
    background: #fff;

}
.tab-control-item{
    flex:1;
}
.active{
    color: var(--color-background)
}
.tab-control-item.active span{
    border-bottom: 2px solid var(--color-background)
}
.tab-control-item span{
    padding: 0 0 5px
}
</style>
