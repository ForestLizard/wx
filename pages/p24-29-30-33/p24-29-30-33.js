// pages/p24-29-30-33/p24-29-30-33.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shareVisible: false,
    myCommentVisible: false
  },

  myCommentShow(){
    this.setData({
      myCommentVisible: true
    })
  },
  myCommentHide(){
    this.setData({
      myCommentVisible: false
    })
  },
  shareShow(){
    this.setData({
      shareVisible: true
    })
  },
  shareHide(){
    this.setData({
      shareVisible: false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#444444',
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
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    this.shareShow();
  }
})