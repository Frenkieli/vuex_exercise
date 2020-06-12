<template>
  <div>
    <div>{{ count }}</div>
    <!--
      <div>{{ countAlias }}</div>
      <div>{{ countPlusLocalState }}</div>
    -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      localCount: 2
    };
  },
  // computed: mapState({
  //   // count: state => state.count,
  //   countAlias: 'count',
  //   countPlusLocalState(state) {
  //     return state.count + this.localCount
  //   }
  // }),
  computed: mapState(['count']),
  created() {},
  methods: {
  }
};
</script>