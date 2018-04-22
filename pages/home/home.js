// pages/home/home.js
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../../images/home/swiper/img1.jpg',
      '../../images/home/swiper/img2.jpg',
      '../../images/home/swiper/img3.jpg',
      '../../images/home/swiper/img4.jpg',
      '../../images/home/swiper/img5.jpg'
    ],
    isLogin: true,
    name: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options['name']) {
      app.globalData.loginName = options['name'];
      this.setData({
        name: options['name'],
        isLogin: false,
      })
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * 跳转到location.wxml
   */
  enterLocation: function () {
    wx.navigateTo({
      url: '../location/location',
      success: function () {
      }
    })
  },
  register: function () {
    wx.navigateTo({
      url: '../login/login',
    })
  },
  goOrder: function (event) {
    if (app.globalData.loginName) {
      wx.navigateTo({
        url: '../cart/cart',
      })
    } else {
      wx.showToast({
        title: '请登录',
        image: '../../images/icon/warn.svg'
      })
    }
  },
  goShopping: function (event) {
    if (app.globalData.loginName) {
      wx.navigateTo({
        url: '../menu/menu',
      })
    } else {
      wx.showToast({
        title: '请登录',
        image: '../../images/icon/warn.svg'
      })
    }
  },
  goCard: function (event) {
    wx.showToast({
      title: '该功能暂不开放',
      image: '../../images/icon/warn.svg'
    })
  },
  exit: function(event) {
    app.globalData.loginName = '';
    wx.showToast({
      title: '已经退出登录',
    })
    this.setData({
      isLogin: true,
    })
  }
})