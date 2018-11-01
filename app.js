//app.js
App({
  loginRequestCallback: function(c) {
    wx.request({
      url: 'http://www.endereyewxy.com/api/login',
      data: {
        code: c
      },
      method: "POST",
      success: res2 => {
        this.globalData.userIds = res2.data
      },
      fail: res3 => {
        loginRequestCallback(c)
      },
      dataType: "sb"
    })
  },
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        wx.request({
          url: 'http://www.endereyewxy.com/api/login',
          data: {
            code: res.code
          },
          method: "POST",
          success: res2 => {
            console.log(res2)
            this.globalData.userIds = res2.data
          },
          fail: res3 => {
            loginRequestCallback(res.code)
          },
          dataType: "sb"
        })
      }
    })
  },
  globalData: {
    userInfo: null,
    userIds: {}
  }
})