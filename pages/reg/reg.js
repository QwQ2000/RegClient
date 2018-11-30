// pages/acc/acc.js
Page({

  /**
   * 页面的初始数据1
   */
  data: {
    isNight:true,
    time: null,
    sparetime: null,
    isDay:true,
  },
  onReg: function() {
    //...
    while (1) {
      if (getApp().globalData.tokenReady) {
        wx.request({
          url: 'http://www.endereyewxy.com/api/regserver',
          data: {
            token: getApp().globalData.token,
            method: 'wake'
          },
          method: 'POST',
          success: res => {
            console.log(res)
          },
          fail: res => {
            console.log(res)
          }
        })
        break
      }
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
    //虽然很丑，不过这段代码是实时更新时间用的emmmm
    var that = this
    var t0 = getApp().globalData.time;
    var m0 = t0.getMinutes()
    that.setData({
      time: t0.getHours() + ":" + t0.getMinutes()
    })
    setInterval(function () {
      var t = getApp().globalData.time
      that.setData({
        time: t.getHours() + ":" + t.getMinutes()
      })
    }, 1000*60);
    var h0 = t0.getHours();
    if (h0 >= 5 && h0 <= 17)
      that.setData({
        isNight: false
      })
    else
      that.setData({
        isNight: true
      }) 
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

  },

  toSleep: function () {
    wx.navigateTo({
      url: './sleep/sleep',
    })
  }
})