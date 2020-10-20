<!--  -->
<template>
  <div class="details-nav-bar">
    <nav-bar>
      <template v-slot:left>
        <div @click='back' class="back">&lt;</div>
      </template>
      <template v-slot:center>
        <div>详情</div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue' 

export default {
  name: "DetailsNavBar",
  data() {
    return {};
  },
  components:{
    NavBar
  },
  methods: {
      back(){
          this.$router.back()
      }
  },
};
</script>

<style scoped>
.back{
    font-size: 24px
}
</style>
