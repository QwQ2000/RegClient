// pages/acc/acc.js

const app=getApp()
const util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据1
   */
  data: {
<<<<<<< HEAD
    waketime:'06:00',
    name:'你的名字',
    bedtime:'21:30',
    userInfo:null,
    userInfo:null,
    credit:100,
    rating:1000,
=======
    wake:'06:00',
    sleep:'21:30',
    userInfo:null
>>>>>>> e78398b8dae93afc41866bd169269a9a6e44417b
  },

onChangeWakeTime:function(e){
  console.log(e)
  this.setData({
    wake:e.detail.value
  })
  while (1) {
    if (app.globalData.tokenReady) {
      wx.request({
        url: 'http://www.endereyewxy.com/api/regserver',
        data: {
          token: app.globalData.token,
          method: 'schedule',
          wake: util.schConvert(this.data.wake),
          sleep: util.schConvert(this.data.sleep)
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
onChangeSleepTime: function (e) { 
  console.log(e)
  this.setData({
    sleep:e.detail.value
  })
  while (1) {
    if (app.globalData.tokenReady) {
      wx.request({
        url: 'http://www.endereyewxy.com/api/regserver',
        data: {
          token: app.globalData.token,
          method: 'schedule',
          wake: util.schConvert(this.data.wake),
          sleep: util.schConvert(this.data.sleep)
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
      wake: app.globalData.info.schWake ? app.globalData.info.schWake: '06:00',
      sleep: app.globalData.info.schWake ? app.globalData.info.schWake : '21:30'
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