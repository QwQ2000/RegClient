const util = require('../../utils/util.js')
const app=getApp()
Page({

  /**
   * 页面的初始数据1
   */
  data: {
    isNight:false,
    time: new Date(),
    sparetime: null,
    time2:null,
    inf: ""
  },
  onReg: function() {
    //...
      var that = this
      if (getApp().globalData.ready) {
        wx.request({
          url: 'http://www.endereyewxy.com/api/regserver',
          data: {
            token: getApp().globalData.token,
            method: that.data.isNight?'sleep':'wake'
          },
          method: 'POST',
          success: res => {
            console.log(res)
          },
          fail: res => {
            console.log(res)
          }
        })
      }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (!app.globalData.info.schWake || typeof app.globalData.info.schWake!="string")
      app.globalData.info.schWake='06:00'
    if (!app.globalData.info.schSleep || typeof app.globalData.info.schSleep != "string")
      app.globalData.info.schSleep = '22:00'
    //虽然很丑，不过这段代码是实时更新时间用的emmmm
    var that = this
    var t0 = getApp().globalData.time;
    var m0 = t0.getMinutes()
    var h0 = t0.getHours();
    if (h0 >= 5 && h0 <= 17)
      that.setData({
        isNight: false
      })
    else
      that.setData({
        isNight: true
      }) 
    that.setData({
      time: util.formatNumber(t0.getHours()) + ":" + util.formatNumber(t0.getMinutes())
    })
    var ret = util.getInfTime2()
    that.setData({
      time2:ret.time2,
      inf:ret.inf
    })
    setInterval(function () {
      var t = getApp().globalData.time
      that.setData({
        time: util.formatNumber(t.getHours()) + ":" + util.formatNumber(t.getMinutes())
      })
      ret = util.getInfTime2()
      that.setData({
        time2: ret.time2,
        inf: ret.inf
      })
    }, 1000*60);
    setInterval(function () {
      var t = getApp().globalData.time
      var h = t.getHours()
      if (h >=5 && h<=17)
        that.setData({
          isNight: false
        })
      else
        that.setData({
          isNight: true
        }) 
    },1000*60*30)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})