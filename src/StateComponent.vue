<template lang="html">
  <div class="">
    {{count + 10}}
  </div>

</template>

<script>
export default {
  vuex: {
    getters: {
      count: state => state.stateCount
    }
  }
};
</script>

<style lang="css">
</style>
