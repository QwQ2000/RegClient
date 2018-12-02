// pages/acc/acc.js

const app=getApp()
const util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据1
   */
  data: {
    userInfo:null,
    credit:114514,
    rank:-1,
    wake:'06:00',
    sleep:'22:00',
  },

onChangeWakeTime:function(e){
  console.log(e)
  this.setData({
    wake:e.detail.value
  })
  app.globalData.info.schWake = e.detail.value
  util.sendSch(this.data.wake,this.data.sleep)
},
onChangeSleepTime: function (e) { 
  console.log(e)
  this.setData({
    sleep: e.detail.value
  })
  app.globalData.info.schSleep = e.detail.value
  util.sendSch(this.data.wake, this.data.sleep)
},
  onScore: function() {
    wx.navigateTo({
      url: './score/score',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
   
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
    this.setData({
      wake: app.globalData.info.schWake,
      sleep: app.globalData.info.schSleep,
      credit: app.globalData.info.credit ? app.globalData.info.credit : 114514,
      rank: app.globalData.info.rank ? app.globalData.info.rank : -1,
    })
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

  onVersion: function () {
    wx.navigateTo({
      url: './ver/ver',
    })
  }
})