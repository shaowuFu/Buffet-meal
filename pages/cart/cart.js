// pages/crat/cart.js
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orders: [],
    allPrice: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let allPrice = 0;
    app.globalData.orders.forEach(order => {
      allPrice += (+order.price);
    });
    this.setData({
      orders: app.globalData.orders,
      allPrice: (+allPrice).toFixed(2),
    });
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
  
  },

  commitOrder: function(event) {
    wx.requestPayment({
      timeStamp: 'new Date().getTime()',
      nonceStr: '123456789',
      package: '123456789',
      signType: 'MD5',
      paySign: '',
      success: function(res) {
        console.log('支付成功');
      },
      fail: function(err) {
        console.log('支付失败');
      },
      complete: function() {
        console.log('交易完成');
      }
    })
  }
})