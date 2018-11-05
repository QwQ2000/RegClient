// pages/acc/acc.js

const app=getApp()

Page({

  /**
   * 页面的初始数据1
   */
  data: {
    waketime:'06:00',
    name:'你的名字',
    bedtime:'21:30',
    userInfo:null
  },

changewaketime:function(e){
  console.log(e)
  this.setData({
    waketime:e.detail.value
  })
},
changebedtime: function (e) { 
  console.log(e)
  this.setData({
    bedtime:e.detail.value
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