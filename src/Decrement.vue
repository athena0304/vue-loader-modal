<template>
    <div>
        <input :value="decrement_num" @blur="updateInput">
        <button @click='updateData'>Decrement</button>
    </div>
</template>


<script>

import { decrementCounter } from './vuex/actions'
export default {
    vuex: {
        actions: {
            decrement: decrementCounter
        }
    },
    data() {
      return {
        decrement_num: 1
      }
    },
    methods: {
      updateInput(e) {
        this.decrement_num = e.target.value;
      },
      updateData(e) {
        this.decrement(parseInt(this.decrement_num));
      }
    }
}
</script>
