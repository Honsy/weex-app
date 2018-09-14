<template>
    <div class="content">
        <wxc-cell label="车价" :has-arrow="false" @wxcCellClicked="wxcCellClicked" :has-margin="true">
            <input class="js_input"  type="text" placeholder="输入价格">
        </wxc-cell>
        <wxc-cell label="首付" :has-arrow="false" @wxcCellClicked="wxcCellClicked" :has-margin="true">
            <input class="js_input"  type="text" placeholder="输入价格">
        </wxc-cell>
        <wxc-cell label="贷款期限" :has-arrow="false" @wxcCellClicked="wxcCellClicked" :has-margin="true">
            <text class="button" @click="pickTime">Pisk Time</text>
        </wxc-cell>
        <wxc-cell label="年利率" :has-arrow="false" @wxcCellClicked="wxcCellClicked" :has-margin="true">
            <input class="js_input" type="text" placeholder="输入年利率">
        </wxc-cell>
        <wxc-button text="确定" @wxcButtonClicked="wxcButtonClicked"></wxc-button>
    </div>
</template>
<script>
// 购车计算
import {
  WxcButton,
  WxcCell
} from 'weex-ui'

const picker = weex.requireModule('picker')

export default {
  name: 'gcjs',
  components: {
    WxcButton,
    WxcCell
  },
  data: () => ({
    isShow: false
  }),
  methods: {
    pickTime () {
      picker.pickTime({
        value: this.value
      }, event => {
        if (event.result === 'success') {
          this.value = event.data
        }
      })
    },
    wxcButtonClicked () {
      this.isShow = true
    },
    overlayClicked () {
      this.isShow = false
    }
  }
}
</script>
<style>
    body>.weex-div {
        justify-content: flex-start !important;
    }

    .content {
        justify-content: flex-start;
    }

    .js_input {
    width: 250px;
    margin-right: 10px;
    font-size: 30px;
    padding: 20px;
    color: #666666;
    text-align: right;
    }
</style>
