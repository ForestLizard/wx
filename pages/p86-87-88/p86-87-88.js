// pages/p86-87-88/p86-87-88.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scroll: 0
  },
  scroll(e){
    const iconIndex = e.currentTarget.dataset.iconIndex;
    switch (iconIndex) {
      case '0':
        this.setData({
          scroll: 0
        });
        break;
      case '1':
        this.setData({
          scroll: -750
        });
        break;
      case '2':
        this.setData({
          scroll: -1500
        });
        break;
      default:
        break;
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: ''
    });
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#56c0b0',
      animation: {
        duration: 400,
        timingFunc: 'easeIn'
      }
    })
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

  }
})