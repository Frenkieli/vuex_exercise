<template>
  <div>
    <!-- {{ count }} - {{ store.state.count }} -->
    {{ count }}
    <button @click="increment">+</button>
    <button @click="incrementNumber">++</button>
    <button @click="actionB">a</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    count: function() {
      return this.$store.state.count;
    },
    // 可以跟import同名不會影響上面的印刷
    // store : function(){
  },
  created() {},
  // methods: {
  //   increment: function() {
  //     this.$store.dispatch("increment");
  //   },
  //   incrementNumber: function() {
  //     this.$store.dispatch({
  //       type: "incrementNumber",
  //       add: 30
  //     });
  //   }
  // }
  methods: {
    ...mapActions(['increment', 'actionB']),
    // ...mapActions({
    //     incrementNumber:'incrementNumber'
    //   }),
    ...mapActions({
        incrementNumber: function(dispatch){
          return dispatch('incrementNumber', {add:100})
        }
      }),
  }
};
</script>