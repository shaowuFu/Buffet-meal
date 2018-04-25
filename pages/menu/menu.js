// pages/menu/menu.js
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menuName: '',
    color: '#E0E0E0',
    height: 900,
    isCart: false,
    imgUrls: [
      '../../images/home/swiper/img1.jpg',
      '../../images/home/swiper/img2.jpg',
      '../../images/home/swiper/img3.jpg',
      '../../images/home/swiper/img4.jpg',
      '../../images/home/swiper/img5.jpg'
    ],
    menus: [{
      "type": "人气明星餐",
      id: "A",
      'iconUrl': "../../images/icon/package.svg",
      "foods": [{
        "imgUrl": "../../images/home/menu/menu1.jpg",
        "name": "新奥尔良烤鸡腿堡人气餐",
        "price": "￥49.9",
        "description": "六块香辣鸡翅+4快新奥尔良烤翅"
      }, {
        "imgUrl": "../../images/home/menu/menu2.jpg",
        "name": "人气明星餐",
        "price": "￥45.9",
        "description": "六块香辣鸡翅+4快新奥尔良烤翅"
      }]
    }, {
      "type": "炸鸡",
      id: "B",
      "iconUrl": "../../images/icon/fried-chicken.svg",
      "foods": [{
        "imgUrl": "../../images/home/menu/menu1.jpg",
        "name": "吮指原味鸡套餐A1",
        "price": "￥16.9",
        "description": "六块香辣鸡翅+4快新奥尔良烤翅"
      }, {
        "imgUrl": "../../images/home/menu/menu2.jpg",
        "name": "吮指原味鸡(一块)",
        "price": "￥12.9",
        "description": "六块香辣鸡翅+4快新奥尔良烤翅"
      }]
    }, {
      "type": "汉堡",
      id: "C",
      'iconUrl': "../../images/icon/hamburger.svg",
      "foods": [{
        "imgUrl": "../../images/home/menu/menu1.jpg",
        "name": "新奥尔良烤鸡腿堡",
        "price": "￥16.9",
        "description": "六块香辣鸡翅+4快新奥尔良烤翅"
      }]
    }, {
      "type": "饮料",
      id: "D",
      "iconUrl": "../../images/icon/drink.svg",
      "foods": [{
        "imgUrl": "../../images/home/menu/menu1.jpg",
        "name": "萌泡泡牛奶",
        "price": "￥15.9",
        "description": "六块香辣鸡翅+4快新奥尔良烤翅"
      }, {
        "imgUrl": "../../images/home/menu/menu2.jpg",
        "name": "九珍果汁饮料",
        "price": "￥9.9",
        "description": "六块香辣鸡翅+4快新奥尔良烤翅"
      }, {
        "imgUrl": "../../images/home/menu/menu3.jpg",
        "name": "百事可乐",
        "price": "￥9.9",
        "description": "六块香辣鸡翅+4快新奥尔良烤翅"
      }, {
        "imgUrl": "../../images/home/menu/menu4.jpg",
        "name": "百事可乐无糖",
        "price": "￥5.9",
        "description": "六块香辣鸡翅+4快新奥尔良烤翅"
      },]
    }, {
      "type": "咖啡",
      id: "E",
      'iconUrl': "../../images/icon/coffee.svg",
      "foods": [{
        "imgUrl": "../../images/home/menu/menu1.jpg",
        "name": "摩卡",
        "price": "￥20.9",
        "description": "六块香辣鸡翅+4快新奥尔良烤翅"
      }, {
        "imgUrl": "../../images/home/menu/menu2.jpg",
        "name": "拿铁",
        "price": "￥9.9",
        "description": "六块香辣鸡翅+4快新奥尔良烤翅"
      }, {
        "imgUrl": "../../images/home/menu/menu3.jpg",
        "name": "冰拿铁",
        "price": "￥9.9",
        "description": "六块香辣鸡翅+4快新奥尔良烤翅"
      }, {
        "imgUrl": "../../images/home/menu/menu4.jpg",
        "name": "卡布奇诺",
        "price": "￥15.5",
        "description": "六块香辣鸡翅+4快新奥尔良烤翅"
      },]
    }, {
      "type": "甜点",
      id: "F",
      "iconUrl": "../../images/icon/ice-cream.svg",
      "foods": [{
        "imgUrl": "../../images/home/menu/menu1.jpg",
        "name": "抹茶双旋原味花筒",
        "price": "￥12.5",
        "description": "六块香辣鸡翅+4快新奥尔良烤翅"
      }, {
        "imgUrl": "../../images/home/menu/menu2.jpg",
        "name": "抹茶双旋冰淇淋花筒",
        "price": "￥10.0",
        "description": "六块香辣鸡翅+4快新奥尔良烤翅"
      }, {
        "imgUrl": "../../images/home/menu/menu3.jpg",
        "name": "抹茶圣代",
        "price": "￥13.5",
        "description": "六块香辣鸡翅+4快新奥尔良烤翅"
      }, {
        "imgUrl": "../../images/home/menu/menu4.jpg",
        "name": "抹茶冰淇淋花筒",
        "price": "￥9.9",
        "description": "六块香辣鸡翅+4快新奥尔良烤翅"
      },]
    }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      menuName: this.data.menus[0].type,
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
    if (app.globalData.orders.length > 0) {
      this.setData({
        height: 800,
        isCart: true,
      })
    }
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
   * 获取点击列表的数据
   */
  getType: function (event) {
    this.setData({
      menuName: event.currentTarget.dataset.type,
    });
  },
  /**
   * 前往详情页面
   */
  goDetail(event) {
    let name = event.currentTarget.dataset.name;
    app.globalData.foodName = name;
    wx.navigateTo({
      url: '../foodDetail/foodDetail',
    })
  },
  /**
   * 前往订单页面
   */
  goCart: function(event) {
    wx.navigateTo({
      url: '../cart/cart',
    })
  },
  /**
   * 前往卡包页面
   */
  goCard: function(event) {
    wx.showToast({
      title: '该功能暂不开放',
      image: '../../images/icon/warn.svg'
    })
  }
})