const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const schConvert = function(s) {
  var t = new Date(getApp().globalData.time)
  t.setHours(parseInt(s.split(':')[0]))
  t.setMinutes(parseInt(s.split(':')[1]))
  t.setSeconds(0)
  return (t.getTime() / 1000) + 86400
}

const ediv = function(a,b) {
  return Math.floor(a/b)+1
}

const sendSch = function(w,s) {
  console.log(w)
  console.log(s)
  if (getApp().globalData.ready)
    wx.request({
      url: 'http://www.endereyewxy.com/api/regserver',
      data: {
        token: getApp().globalData.token,
        method: 'schedule',
        wake: schConvert(w),
        sleep: schConvert(s)
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

const getInfTime2 = function() {
  var t = new Date(getApp().globalData.time)
  var w2 = new Date(schConvert(getApp().globalData.info.schWake) * 1000), s2 = new Date(schConvert(getApp().globalData.info.schSleep) * 1000)
  var w1 = new Date(Number(w2) - 60 * 60 * 24 * 1000), s1 = new Date(Number(s2) - 60 * 60 * 24 * 1000)
  const hour=60*60*1000,min=60*1000;
  if (Math.abs(w1-t)<=hour/2)
    return {
      inf:"起床打卡通道关闭还剩：",
      time2:'00:'+formatNumber(ediv((w1-t+hour/2),min))
    }
  else if (Math.abs(s1 - t) <= hour / 2)
    return {
      inf: "睡眠打卡通道关闭还剩：",
      time2: '00:' + formatNumber(ediv((s1 - t + hour/2),min))
    }
  else if (t < w1)
    return {
      inf:"距离起床打卡通道开启还有：",
      time2: formatNumber(ediv((w1 - t),hour)) + ':' + formatNumber(ediv((w1 - t - hour/2) % hour,min))
    }
  else if (t > s1) 
    return {
      inf: "距离起床打卡通道开启还有：",
      time2: formatNumber(ediv((w2 - t),hour)) + ':' + formatNumber(ediv((w2 - t - hour/2) % hour,min))
    }
  else 
    return {
      inf: "距离睡眠打卡通道开启还有：",
      time2: formatNumber(ediv((s1 - t),hour)) + ':' + formatNumber(ediv((s1 - t - hour/2) % hour,min))
    }
}

module.exports = {
  formatTime: formatTime,
  formatNumber: formatNumber,
  schConvert: schConvert,
  getInfTime2: getInfTime2,
  sendSch: sendSch
}
