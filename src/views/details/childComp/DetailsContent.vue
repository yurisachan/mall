<!--  -->
<template>
  <div class="details-content" :key="details.id">
    <img :src="details.download_url" alt="">
  </div>
</template>

<script>
export default {
  name:'DetailsContent',
  data () {
    return {
    }
  },
  props:{
      details:{
          type:Object,
          default(){
              return {}
          }
      }
  },
  destroyed() {
      console.log('0000')
  },
}
</script>

<style scoped>
.details-content img{
    width: 95vw;
    border-radius:5px; 
}
</style>
