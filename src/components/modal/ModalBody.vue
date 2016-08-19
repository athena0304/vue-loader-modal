<template>
    <div class="modal-body" >
        <div :is="currentView" :inputvalue.sync="inputvalue">

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
            'component-name': function(val){
                this.currentView = val;
            }
        }

    }
</script>
