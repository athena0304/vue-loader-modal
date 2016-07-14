<template>
  <div class="first-line">第一行啦啦啦啦啦啦啦啦{{inputValue}}</div>
  <div class="second-line">{{secondLine}}</div>
   <div>
      <button id="show-modal" @click="initModal($event, btns[0])" bodyname="page1" headername="header1">按钮1</button>
      <!-- use the modal component, pass in the prop -->
      
      <button id="show-modal" @click="initModal($event, btns[1])" bodyname="page2" headername="header2">按钮2</button>
      <!-- use the modal component, pass in the prop -->
      <modal :show.sync="showModal" :headername="headername" :process.sync="processFun" :modalBody="modalBodyObj">
      
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
                processFun: function() {},
                modalBodyObj: {},
                secondLine: "第二行啦啦啦啦啦啦啦啦",
                inputValue:'',
                btns: [
                    {
                        btn:"按钮1",
                        process: function () {
                           
                        }
                        
                    },{
                        btn:"按钮2",
                        process: function () {
                            alert("222222")
                        },
                        modalBodyObj:{
                            name:""
                        }
                        
                    }
                ]
            }
        },
        events: {
            'child-show' : function(msg) {
                this.showModal = false;
            },
            'input-value' : function(val) {
                this.inputValue = val;
            }
        },
        methods: {
            initModal: function(event, btnObj) {
                this.headername = event.target.getAttribute("headername");
                this.showModal = true;
                
                this.processFun = btnObj.process;
                
                
                //dom异步更新，动态组件数据传播
                this.$nextTick(function () {
                    if(btnObj.modalBodyObj && btnObj.modalBodyObj.name!==undefined) {
                        btnObj.modalBodyObj.name = this.secondLine;
                        this.modalBodyObj = btnObj.modalBodyObj;
                        this.$broadcast("hahaha",this.modalBodyObj);
                    }
                })
                
                this.$broadcast('body-name', event.target.getAttribute("bodyname"));
                
//                console.log(event.target.getAttribute("bodyname"));
            }
            
        }
    }
    
</script>