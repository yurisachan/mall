<!--  -->
<template>
  <div>
      <div v-for="(item, index) in items" :key="index">
          <img :src="item.download_url" alt="">
          <span>{{item.author}}</span>
          <span>{{item.num}}</span>
      </div>
  </div>
</template>

<script>
export default {
  name:'CollectItem',
  data () {
    return {
    }
  },
  computed: {
      items(){
          return this.$store.state.itemDetails
      },
  },
}
</script>

<style scoped>
img{
    height: 64px;
}
</style>
