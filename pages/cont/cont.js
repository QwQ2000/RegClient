const app=getApp()
const util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据1
   */
  data: {
    month1:1,
    day1:1,
    month2:1,
    day2:1,
    newMoney:"0",
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
    if (app.globalData.ready) {
      var t = new Date(app.globalData.time)
      this.setData({
        month1:t.getMonth()+1,
        day1:t.getDate()
      })
      t=new Date(Number(t)+60*24*60*1000)
      this.setData({
        month2: t.getMonth()+1,
        day2: t.getDate()
      })
    }
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
  onToday: function() {
    util.sendSch(getApp().globalData.info.schWake, getApp().globalData.info.schSleep)
  }
})