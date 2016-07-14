// main.js
var Vue = require('vue')
// require a *.vue component
//var App = require('./src/components/App.vue')
var App = require('./src/App.vue')

// mount a root Vue instance
new Vue({
  el: 'body',
  components: {
    app: App
  }
})

