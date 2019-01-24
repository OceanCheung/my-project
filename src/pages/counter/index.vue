<template>
  <div class="counter-warp">
    <p>Vuex counter：{{ count }}</p>
    <p>{{ ifTrue }}</p>
    <p>用户id:{{userId}}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <button @click="test">测试</button>
      <button @click="changeUserId">修改userId</button>
    </p>

    <a href="/pages/index/main" class="home">去往首页</a>
  </div>
</template>

<script>
// Use Vuex
import store from "./store";

export default {
  computed: {
    count() {
      return store.state.count;
    },
    ifTrue() {
      return this.$store.state.ifTrue;
    },
    userId() {
      return this.$store.state.userId;
    }
  },
  methods: {
    increment() {
      store.commit("increment");
    },
    decrement() {
      store.commit("decrement");
    },
    test() {
      this.$store.commit("changeIfTrue");
    },
    changeUserId() {
      this.$store.dispatch("getUserInfo");
    }
  }
};
</script>

<style>
.counter-warp {
  text-align: center;
  margin-top: 100px;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
