<template>
  <div id="app">
    {{ count }}
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script>
import store from './store/index'
export default {
  name: "App",
  data() {
    return {};
  },
  computed:{
    count :function(){
      return store.state.count
    }
  },
  created() {

  },
  methods:{
    increment : function(){
      store.commit('increment');
    },
    decrement : function(){
      store.commit('decrement');
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
