<template>
  <div>
    <!-- {{getHello}} -->
    {{getHello2}}
    <button @click="addName">add: lee</button>
    <button @click="addName2">add2: lee</button>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'

import { createNamespacedHelpers } from "vuex";
let { mapGetters } = createNamespacedHelpers('hello2/');

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      // getHello: 'getTitle',
      getHello2: 'getTitle',
    })
  },
  created() {
  },
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
    addName(){
      this.$store.commit({
        type: 'addName',
        str: 'lee'})
    },
    addName2(){
      this.$store.commit({
        type: 'addName',
        str: 'lee'})
    }
  }
};
</script>