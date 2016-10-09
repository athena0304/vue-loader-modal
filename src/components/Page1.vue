<template>
    <div>
        模态框1
        <input type="text" v-on:change = "inputChange($event)" v-model="obj.changeName">
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name:"",
                inputvalue:"",
                obj: {}
            }
        },
        methods: {
            inputChange(event) {
                console.log(this.obj.changeName + " 开始表单验证吧")
                this.$nextTick(() => {
                    // this.obj.changeName = this.inputvalue;

                    // this.$dispatch("input-value", this.obj);
                })
            }
        },
        events: {
          hahaha(obj) {
              // console.log(obj);
              this.obj = obj;
          }
        }
    }
</script>
