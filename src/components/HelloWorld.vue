<template>
<div>
    <text class="message">Now, let's use Vue.js to build your Weex app.</text>
      <text class="text" @click="onItemClick">click me!</text>
</div>

</template>
<script>
export default {
  data () {
    return {
      logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png'
    }
  },
  methods: {
    onItemClick: function (e) {
      console.log(this.$router)
      this.$router.push('/CarCalculator')
    }
  }
}
</script>
