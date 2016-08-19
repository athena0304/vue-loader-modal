<template>

  <!-- <div class="second-line">{{secondLine}}</div> -->


   <div>
     <div class="" v-for= "(index, item) in btns">
       <span class="first-line">第{{index}}行啦啦啦啦啦啦啦啦  {{item.modalBodyObj.name}}</span>
       <button id="show-modal" @click="initModal($event, btns[index])">按钮{{index}}</button>
     </div>

      <!-- use the modal component, pass in the prop -->

      <!-- <button id="show-modal" @click="initModal($event, btns[1])">按钮2</button> -->
      <!-- use the modal component, pass in the prop -->
      <modal :show.sync="showModal" :headername="headername" v-on:child-show="handleit" :process.sync="process" :modalBody="modalBodyObj">

      </modal>
   </div>
</template>


<script>
    import Modal from './components/Modal.vue'

    export default {
        components: {
            modal: Modal
        },
        data() {
            return {
                showModal: false,
                headername: '',
                process: {},
                modalBodyObj: {},
                secondLine: "第二行啦啦啦啦啦啦啦啦",
                aaaaa:'',
                btns: [
                    {
                        btn:"确定",
                        headerName: "编辑",
                        // inputValue: "初始化的值1",
                        componentName: "page1",
                        process() {
                          console.log(this.a)
                        },
                        modalBodyObj:{
                            name:"初始化的值1",
                            changeName: "初始化的值1"
                        }
                    },{
                        btn:"按钮2",
                        headerName: "header2",
                        componentName: "page1",
                        // inputValue: "初始化的值2",
                        process: function () {

                        },
                        modalBodyObj:{
                            name:"初始化的值2",
                            changeName: "初始化的值2"
                        }

                    }
                ]
            }
        },
        events: {
            // [ 'child-show' ](msg) {
            //   this.showModal = msg;
            // },
            // [ 'input-value' ](val, currentobj) {
            //   currentobj.changeName = val;
            // }
        },
        methods: {
            handleit: function(msg, obj) {
              this.showModal = msg;
              obj.name = obj.changeName;
            },
            initModal(event, btnObj) {
              this.headername = btnObj.headerName;
              this.showModal = true;


              this.processFun = btnObj.process;
              this.process = btnObj.modalBodyObj;
              // dom异步更新，动态组件数据传播
              this.$nextTick(() => {
                  if(btnObj.modalBodyObj && btnObj.modalBodyObj.name!==undefined) {
                      // btnObj.modalBodyObj.name = btnObj.inputValue;
                      this.modalBodyObj = btnObj.modalBodyObj;


                      this.$broadcast("hahaha",this.modalBodyObj);
                  }
              })

              this.$broadcast('component-name', btnObj.componentName);
            }
        }
    }

</script>
