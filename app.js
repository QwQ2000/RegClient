//app.js
const util = require('utils/util.js')
App({
  globalData: {
    token: "wxynb",
    contests: null,
    info: { schWake: 1543788000, schSleep: 1543845600},
    time: new Date(),
    ready: false
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
                    if (typeof res.data.result.schWake == typeof 1) {
                      var d = new Date(that.globalData.info.schWake * 1000)
                      that.globalData.info.schWake = util.formatNumber(d.getHours())+':'+util.formatNumber(d.getMinutes())
                    }
                    if (typeof res.data.result.schSleep == typeof 1) {
                      var d = new Date(that.globalData.info.schSleep * 1000)
                      that.globalData.info.schSleep = util.formatNumber(d.getHours()) + ':' + util.formatNumber(d.getMinutes())
                    }
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
                        this.globalData.ready = true
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