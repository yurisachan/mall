<!--  -->
<template>
  <div>
    <div>首页{{count}}</div>
    <button @click="sub">sub</button>
    <button @click="add">add</button>
    <button @click="addCount(10)">add 10</button>
    <button @click="arrPush">push</button>
    <button @click="submit(0)">异步提交信息</button>
    <div>{{$store.getters.arrf(3)}}</div>
    <hr />
    <div>{{$store.state.module1.name}}</div>
    <button @click="changeName('chan')">修改名字</button>
    <div>{{$store.getters.wholeName}}</div>
    <button @click="asyncChangeName('kong')">异步修改名字</button>
  </div>
</template>

<script>
export default {
  name: "HomeBeta",
  data() {
    return {};
  },
  computed: {
    count() {
      return this.$store.state.couter;
    }
  },
  methods: {
    sub() {
      this.$store.commit("decrement");
    },
    add() {
      this.$store.commit("increment");
    },
    addCount(num) {
      this.$store.commit("addCount", num);
    },
    //另一种提交方式
    // addCount(num) {
    //   this.$store.commit({
    //     type:'addCount',
    //     num
    //   });
    // }
    arrPush() {
      this.$store.commit("arrPush");
    },
    submit(newNum) {
      this.$store.dispatch("submit", newNum).then(value => {
        console.log(value);
      });
    },
    changeName(newName) {
      this.$store.commit("changeName", newName);
    },
    asyncChangeName(newName){
      this.$store.dispatch("asyncChangeName",newName)
      .then(value=>console.log(value))
    }
  }
};
</script>

<style scoped>
</style>
