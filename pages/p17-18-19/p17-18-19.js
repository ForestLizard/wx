// pages/p17-18-19/p17-18-19.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    viewToggle: [true, false, false]
  },

  toggleView: function(e){
  
    var navItemName = e.currentTarget.dataset.navItemName;
    switch (navItemName){
      case 'index' :
        this.setData({
          viewToggle: [true, false, false]
        });
        break;
      case 'job':
        this.setData({
          viewToggle: [false, true, false]
        });
        break;
      case 'friend':
        this.setData({
          viewToggle: [false, false, true]
        });
        break;
      default :
        this.setData({
          viewToggle: [true, false, false]
        });
        break;
    }
   
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
  
  }
})