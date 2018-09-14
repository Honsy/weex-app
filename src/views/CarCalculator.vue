<template>
    <div class="content">
        <wxc-cell label="车价" :has-arrow="false" @wxcCellClicked="wxcCellClicked" :has-margin="true">
            <input type="text" placeholder="输入价格">
        </wxc-cell>
        <wxc-cell label="首付" :has-arrow="false" @wxcCellClicked="wxcCellClicked" :has-margin="true">
            <input type="text" placeholder="输入价格">
        </wxc-cell>
        <wxc-cell label="贷款期限" :has-arrow="false" @wxcCellClicked="wxcCellClicked" :has-margin="true">
            <input type="text" placeholder="贷款期限">
        </wxc-cell>
        <wxc-cell label="年利率" :has-arrow="false" @wxcCellClicked="wxcCellClicked" :has-margin="true">
            <input type="text" placeholder="输入年利率">
        </wxc-cell>
        <wxc-button text="确定" @wxcButtonClicked="wxcButtonClicked"></wxc-button>
    </div>
</template>
<script>
import {
  WxcButton,
  WxcCell
} from 'weex-ui'

export default {
  components: {
    WxcButton,
    WxcCell
  },
  data: () => ({
    isShow: false
  }),
  methods: {
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
    .input {
        font-size: 45px;
        width: 600px;
        margin-top: 50px;
        margin-left: 75px;
        padding-top: 25px;
        padding-bottom: 25px;
        padding-left: 20px;
        padding-right: 20px;
        color: #666666;
        border-width: 2px;
        border-style: solid;
        border-color: #41B883;
  }
</style>
