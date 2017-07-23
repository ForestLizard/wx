// pages/p31-34-35-37/p31-34-35-37.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    reportVisibility: false,
    shareVisibility: false
  },
  report(){
   this.setData({
     reportVisibility: true
   })
  },
  cancelReport() {
    this.setData({
      reportVisibility: false
    })
  },
  collect(){
    wx.showToast({
      title: '收藏成功',
      icon:"success"
    })
  },
  share(){
    this.setData({
      shareVisibility: true
    })
  },
  cancelShare(){
    this.setData({
      shareVisibility: false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '职位详情',
    });
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
  
  }
})