// pages/p45-46-47/p45-46-47.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    viewToggle: [true, false]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: ' ',
    });
    wx.setNavigationBarColor({
      frontColor: '#000000',
      backgroundColor: '#f0f0f0',
      animation: {
        duration: 400,
        timingFunc: 'easeIn'
      }
    })
  },
  toggleView(e) {
    const itemName = e.currentTarget.dataset.item;
    switch (itemName) {
      case 'account':
        this.setData({
          viewToggle: [true, false]
        });
        break;
      case 'tel':
        this.setData({
          viewToggle: [false, true]
        });
        break;
      default:

    }
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