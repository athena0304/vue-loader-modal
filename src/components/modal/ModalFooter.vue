<template>
    <div class="modal-footer">
          <slot name="footer">
            default footer
            <button class="modal-default-button" @click="show()">
              OK
            </button>
          </slot>
        </div>
</template>


<script>

    export default {
        props: ["process"],
        methods: {
            show: function() {
                this.process();
                this.$dispatch('child-show', false);
                
            }
//            processFun: function() {
//                $.ajax({
//                    url: "http://10.16.77.117:3000/test",
//                    dataType: "json",
//                    type: "GET",
//                    success: function(data) {
//                      console.log(data);
//                    }
//                })
//            }
        }
        
    }
</script>