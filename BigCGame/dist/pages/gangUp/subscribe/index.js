// pages/gangUp/subscribe/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    locations: [
      '三水','三山','平洲'
    ],
    selectedLocalID: "0",
    times: [
      '10点','10点半','11点','11点半','3点'
    ],
    selectedTimeID: "0"
  },
  selectLocation: function(e) {
    let a = e.target.dataset.index
    console.log(a)
    this.setData({
      selectedLocalID : a
    })
  },
  selectTime: function(e) {
    let a = e.target.dataset.index
    console.log(a)
    this.setData({
      selectedTimeID: a
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