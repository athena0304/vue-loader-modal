<template>
    <div class="modal-body" >
        <div :is="currentView" :hahaha="hahaha" :inputvalue.sync="inputvalue">
            
        </div>
    </div>
</template>

<script>
    import Page1 from '../../components/Page1.vue'
    import Page2 from '../../components/Page2.vue'
    
    export default {
        data() {
            return {
                currentView: '',
                hahaha:'',
                inputvalue:''
            }
        },
        
        components: {
            page1 : Page1,
            page2 : Page2
          },
        events: {
            'body-name': function(val){
                this.currentView = val;
            },
            'hahah': function(val) {
                console.log(val);
                this.hahaha = val.name;
            }
        }
        
    }
</script>
