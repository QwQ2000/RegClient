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
  var t = getApp().globalData.time
  t.setHours(parseInt(s.split(':')[0]))
  t.setMinutes(parseInt(s.split(':')[1]))
  t.setSeconds(0)
  return (t.getTime() / 1000) + 86400
}

module.exports = {
  formatTime: formatTime,
  formatNumber: formatNumber,
  schConvert: schConvert
}
