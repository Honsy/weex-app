<template>
  <div class="div">
    <text class="text" onclick="onItemClick">click me! {{message}}</text>
  </div>
</template>
<script>
var navigator = require('@weex-module/navigator')
var nextUrl = 'http://dotwe.org/raw/dist/6cd1703a45d7b2752cf05303069ce881.js'
module.exports = {
  data: {
    message: ''
  },
  methods: {
    onItemClick: function (e) {
      var params = {'url': nextUrl, 'animated': 'true'}
      navigator.push(params, function (e) {
        console.log('i am the callback.')
      })
    }
  }
}
</script>
<style>
  .div {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 750;
    height: 90;
    padding-left:30;
    padding-right:30;
    border-bottom-width: 1;
    border-style: solid;
    border-color: #dddddd;
  }
  .text{
    width: 750;
    height: 90;
  }
</style>
