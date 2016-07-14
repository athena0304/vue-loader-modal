<template>
   <div>
        模态框2
        <span>{{hahaha}}</span>
   </div>
    
</template>


<script>
    export default {
        data(){
            return {
                name:"",
                hahaha:""
            }
        },
        events: {
            'hahaha': function(obj) {
                this.hahaha = obj.name;
            }
        }
        
        
    }
</script>