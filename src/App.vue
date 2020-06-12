<template>
  <div id="app">
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="day03">day03</router-link>
    <router-link to="day04">day04</router-link>
    <router-link to="day05">day05</router-link>
  </div>
    <router-view>Z</router-view>
  </div>
</template>

<script>
export default {
  name: "App",
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
    padding: 2px;
    margin: 2px;
    border: 1px solid #000;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
