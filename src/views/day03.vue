<template>
  <div id="app">
    <!-- {{ count }} - {{ store.state.count }} -->
    {{ count }} - {{ storeVM.state.count }}
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script>
import store from "../store/index";

export default {
  data() {
    return {};
  },
  computed: {
    count: function() {
      return store.state.count;
    },
    // 可以跟import同名不會影響上面的印刷
    // store : function(){
    storeVM: function() {
      return this.$store;
    }
  },
  created() {},
  methods: {
    increment: function() {
      store.commit("increment");
    },
    decrement: function() {
      store.commit("decrement");
    }
  }
};
</script>