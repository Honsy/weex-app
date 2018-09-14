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
// 购车计算
import {
  WxcButton,
  WxcCell
} from 'weex-ui'

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
    font-size: 60px;
    height: 80px;
    width: 750px;
  }
</style>
