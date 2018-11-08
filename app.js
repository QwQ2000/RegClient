//app.js
App({
  globalData: {
    token: "wxynb",
    tokenReady: false
  },
  onLaunch: function () {
    wx.login({
      success: res => {
        wx.request({
          url: 'http://www.endereyewxy.com/api/regserver',
          data: {
            code: res.code,
            method: "login"
          },
          method: "POST",
          success: res2 => {
            console.log(res2)
            this.globalData.token=res2.data.result.token
            this.globalData.tokenReady=true
          },
          fail: res3 => {
            console.log("Login failed")
          }
        })
      }
    })
  }
})