<template>
    <div>
        <input :value="increment_num" @blur="updateInput">
        <button @click='updateData'>Increment</button>
    </div>
</template>


<script>

import { incrementCounter } from './vuex/actions'
export default {
    vuex: {
        actions: {
            increment: incrementCounter
        }
    },
    data() {
      return {
        increment_num: 1
      }
    },
    methods: {
      updateInput(e) {
        this.increment_num = e.target.value;
      },
      updateData(e) {
        this.increment(parseInt(this.increment_num));
      }
    }
}
</script>
