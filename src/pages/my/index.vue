<template>
  <div>
    <p v-for="item in userList" :key="item.id">{{item.name}}</p>
    <button @click="add">新增</button>
  </div>
</template>
<script>
import { mapGetters, mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      userList() {
        return this._store.state.UserModule.users;
      }
    })
  },
  methods: {
    add() {
      const user = {
        id: Math.random().toFixed(2),
        name: `张三${Math.random().toFixed(2)}`
      };
      this._store.dispatch("UserModule/addUser", user);
    }
  }
};
</script>
<style scoped>
</style>



