//app.js
App({
  globalData: {
    token: "wxynb",
    contests: null,
    info: null,
    time: new Date(),
    tokenReady: false
  },
  onLaunch: function () {
    var ready = false
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
                token: that.globalData.token,
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
                    that.globalData.info = res.data.result
                    wx.request({
                      url: 'http://www.endereyewxy.com/api/regserver',
                      data: {
                        token: getApp().globalData.token,
                        method: 'time'
                      },
                      method: 'POST',
                      success: res => {
                        that.globalData.time = new Date(res.data.result.time * 1000)
                        console.log(res)
                        setInterval(function () {
                          that.globalData.time = new Date(Number(that.globalData.time) + 1000)
                        }, 1000)
                        console.log(that.globalData)
                        wx.switchTab({
                          url: '../reg/reg'
                        })
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