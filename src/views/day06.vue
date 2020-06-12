<template>
  <div>
    <div>{{count}}</div>
    <div>{{countAlias}}</div>
    <div>{{countPlusLocalState}}</div>
    <div>{{doneTodos}}</div>
    <div>{{doneTodosAlias}}</div>
    <div>{{doneTodosCount}}</div>
    <div>{{getTodoById}}</div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      localCount: 2
    };
  },
  computed: {
    getTodoById : function (){
      return this.$store.getters.getTodoById(2);
    },
    ...mapState(["count"]),
    ...mapState({
      countAlias: "count",
      countPlusLocalState(state) {
        return state.count + this.localCount;
      }
    }),
    ...mapGetters(['doneTodos', 'doneTodosCount']),
    ...mapGetters({
      doneTodosAlias: 'doneTodos'
    })
  }
};
</script>