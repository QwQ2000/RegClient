//app.js
App({
  globalData: {
    token: "wxynb",
    tokenReady: false,
    contests: null,
    info: null
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
            this.globalData.token = res2.data.result.token
            this.globalData.tokenReady = true
            var that = this
            wx.request({
              url: 'http://www.endereyewxy.com/api/regserver',
              data: {
                token: getApp().globalData.token,
                method: 'contest-list'
              },
              method: 'POST',
              success: res => {
                console.log(res)
                that.globalData.contests = res.data.result
                wx.request({
                  url: 'http://www.endereyewxy.com/api/regserver',
                  data: {
                    token: getApp().globalData.token,
                    method: 'info'
                  },
                  method: 'POST',
                  success: res => {
                    console.log(res)
                    this.globalData.info = res.data.result
                  },
                  fail: res => {
                    console.log(res)
                  }
                })
              },
              fail: res => {
                console.log(res)
              }
            })
          },
          fail: res3 => {
            console.log("Login failed")
          }
        })
      }
    })
    
  }
})