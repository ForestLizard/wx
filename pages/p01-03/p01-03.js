// pages/p01-03/p01-03.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    viewToggle: [true, false]
  },
  toggleView(e) {
    const navItemName = e.currentTarget.dataset.navItemName;
    switch (navItemName) {
      case 'topic':
        this.setData({
          viewToggle: [true, false]
        });
        break;
      case 'job':
        this.setData({
          viewToggle: [false, true]
        });
        break;
      default:

    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: ' ',
    });
    wx.setNavigationBarColor({
      frontColor: '#000',
      backgroundColor: '#fff',
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