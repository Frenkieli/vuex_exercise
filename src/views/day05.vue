<template>
  <div>
    <div>{{ doneTodos }}</div>
    <div>{{ doneTodosCount }}</div>
    <div>{{ getTodoById }}</div>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'

export default {
  data() {
    return {
    };
  },
  computed: {
    doneTodos : function (){
      return this.$store.getters.doneTodos;
    },
    doneTodosCount : function (){
      return this.$store.getters.doneTodosCount;
    },
    getTodoById : function (){
      return this.$store.getters.getTodoById(2);
    },
  },
  // computed: mapGetters([
  //   'doneTodos',
  //   'doneTodosCount',
  //   'getTodoById'
  // ]),

  // 似乎是不能使用函式的方式調用getters的樣子
  // computed: mapGetters({
  //   doneTodos : 'doneTodos',
  //   doneTodosCount : getters => getters.doneTodosCount ,
  //   getTodoById(getters){
  //     return getters.getTodoById(2)
  //   },
  // }),
};
</script>