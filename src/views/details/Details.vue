<!--  -->
<template>
  <div class="details">
   <details-nav-bar></details-nav-bar>
   <details-content class="details-content" :details="details"></details-content>
   <details-tab-bar class="details-tab-bar" @click.native='collect'></details-tab-bar>
  </div>
</template>

<script>
import DetailsNavBar from './childComp/DetailsNavBar'
import DetailsContent from './childComp/DetailsContent'
import DetailsTabBar from './childComp/DetailsTabBar'

import {getDetails} from 'network/details'

export default {
  name:'Details',
  data () {
    return {
      details:{}
    }
  },
  components:{
    DetailsNavBar,
    DetailsContent,
    DetailsTabBar
  },
  computed: {
  },
  created() {
    //console.log(this.$route.query.id)
    
    this.getDetails(this.$route.query.id)
     
  },
  methods: {
    getDetails(id){
      getDetails(id).then(res=>{
        this.details=res.data
      }).catch(err=>err)
    },
    collect(){
        this.$store.commit('addItem',this.details)
    }
  },

}
</script>

<style scoped>
.details-content{
  padding-top: 44px;
  text-align: center;
}
.details{
  position: relative;
  z-index: 3;
  background: #fff;
  height: 100vh;
}
</style>
