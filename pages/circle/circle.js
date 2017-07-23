// pages/cicle/cicle.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index1: 0,
    index2: 0,
    region:'武汉',
    jobs: ['网页设计','JAVA','后端研发'],
    ways:['允许所有人加入','需要管理员权限才能加入']
  },
  bindRegionChange(e){
    this.setData({
      region: e.detail.value
    })
  },
  bindJobChange(e){
    this.setData({
      index1: e.detail.value
    })
  },
  bindWayChange(e) {
    this.setData({
      index2: e.detail.value
    })
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