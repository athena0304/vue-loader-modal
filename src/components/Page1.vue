<template>
    <div>
        模态框1
        <input type="text" v-on:change = "inputChange($event)" v-model="inputvalue">
    </div>
</template>

<script>
    export default {
        data(){
            return {
                name:"",
                inputvalue:""
            }
        },
        methods: {
            inputChange: function(event) {
                this.$nextTick(function () {
                    this.$dispatch("input-value", this.inputvalue);
                })
            }
        }
        
        
    }
</script>
