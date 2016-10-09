<template>
    <div class="modal-footer">
          <slot name="footer">
            default footer
            <button class="modal-default-button" @click="show()">
              OK
            </button>
            <span>{{wait}}</span>
          </slot>
        </div>
</template>


<script>

    export default {
        data() {
          return {
              a: "12345",
              wait: ""
          }
        },
        props: ["process"],
        methods: {
            show() {
                // this.process();
                console.log(this.process.changeName)
                this.wait = "ajax等待中...."
                setTimeout(function() {
                  this.wait = "";
                  this.$dispatch('child-show', false, this.process);
                }.bind(this), 2000)


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
