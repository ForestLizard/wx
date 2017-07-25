//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    logs: [],
    array: ['p00', 'p01-03', 'p02-04', 'p05', 'p06-07', 'p08', 'p09-10', 'p11', 'p12-15', 'p13', 'p14', 'p16', 'p17-18-19', 'p20', 'p21', 'p22-23', 'p24-29-30-33', 'p25', 'p26-27', 'p28', 'p31-34-35-37', 'p32', 'p38-39-40', 'p45-46-47', 'p48-49', 'p50-51', 'p52-53-54', 'p55-56', 'p57-58-59', 'p60-61-62', 'p62', 'p67-68', 'p69', 'p70-73-74', 'p71', 'p72', 'p75', 'p76-77-81', 'p77', 'p78', 'p79', 'p80', 'p82', 'p83', 'p84', 'p85', 'p86-87-88', 'p89', 'p90', 'p91', 'p92', 'p93'],

  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  },
  bindButtonTap: function(e){
    if(e.target.id){
      var index = e.target.id.substring(2);
      var url = '../' + this.data.array[index] + '/' + this.data.array[index];
      wx.navigateTo({
        url: url
      })
    }
    
  }
})
