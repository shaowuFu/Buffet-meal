// pages/login/login.js
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isPhone: true,
    isCode: false,
    isDisable: true,
    isConfrim: true,
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

  },

  /**
   * 是否显示验证码
   */
  showCode: function () {
    this.setData({
      isCode: true,
    })
  },
  /**
   * 判断手机号是否准确
   */
  getPhone: function (event) {
    let phone = event.detail.value;
    let isPhone = /^1[3|5|7|8|4]\d{9}$/;
    if (isPhone.test(phone)) {
      this.setData({
        isDisable: false,
      })
    } else {
      wx.showToast({
        title: '输入错误',
        image: '../../images/icon/warn.svg',
      })
    }
  },
  /**
   * 登录验证
   */
  loginConfig: function (event) {
    wx.login({
      timeout: 5000,
      success: function(res) {
        if(res.code) {
          wx.getUserInfo({
            lang: 'zh-CN',
            timeout: 5000,
            success: function(res) {
              let name = res.userInfo.nickName;
              app.globalData.loginName = name;
              wx.redirectTo({
                url: '../home/home?name='+name,
              });
              wx.showToast({
                title: '登录成功',
              })
            }
          })
        } else {
          wx.redirectTo({
            url: '../home/home',
          })
        }
      }
    })
  },
  /**
   * 密码验证
   */
  getPassword: function (event) {
    let isPassword = /^\d{6}$/;
    let password = event.detail.value;
    if (isPassword.test(password)) {
      this.setData({
        isConfrim: false,
      })
    } else {
      wx.showToast({
        title: '输入错误',
        image: '../../images/icon/warn.svg',
      })
    }
  }

})