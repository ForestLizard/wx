// pages/p06-07/p06-07.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    joinCircleVisible: false,
    quitCircleVisible: false,
    searchVisibility: true,
    searchContent: '',
    region: ['武汉', '广州市', '海珠区']//长度必须为3，用于存放省市区
  },
  joinCircleShow(){
    this.setData({
      joinCircleVisible:true
    })
  },
  joinCircleHide(){
    this.setData({
      joinCircleVisible: false
    })
  },
  quitCircleShow() {
    this.setData({
      quitCircleVisible: true
    })
  },
  quitCircleHide() {
    this.setData({
      quitCircleVisible: false
    })
  },
  getVal(e){
    //同步input数据到store
    this.setData({
      searchContent: e.detail.value
    });
  },
  hideSearch() {
    this.setData({
      searchVisibility: false
    });
  },
  showSearch(e) {
    this.setData({
      searchVisibility: true
    });
  },
  handleInputTap(){
    this.hideSearch();
  },
  handleInputBlur(){
    const val = this.data.searchContent;
    if(!val){
      this.showSearch();
    }
  },
  handleCenterTap(){
    this.hideSearch();

  },
  bindRegionChange(e){ 
    const currentRegion = e.detail.value;
    this.setData({
      region: currentRegion
    });

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