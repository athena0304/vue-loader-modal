<template>
  <div class="app">
   ddd
   
    <component-b>
<!--
        <p>This is some original content</p>
        <p>This is some more original content</p>
-->
        
        <p slot="one">One</p>
        <p slot="two">Two</p>
        <p>Default A</p>
    </component-b>
  </div>
  <p>Messages:{{ messages | json }}</p>
    <component-a v-on:child-msg="handleIt"></component-a>
</template>

<script>
import ComponentA from './ComponentA.vue'
import ComponentB from './ComponentB.vue'

export default {
    components: {
        ComponentA,
        ComponentB
    },
    data(){
        return {
            messages: []
        }
        
    },
    methods: {
        handleIt: function(msg) {
            this.messages.push(msg)
        }
    }
}
</script>


<style>
/* global styles */
	.app{
		background: yellow;
	}

</style>

<style lang="less">
/* global styles */
	.app{
		background: green;
	}

</style>

<style scoped>
/* local styles */
.app{
		background: #fff;
	}
</style>