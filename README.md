# Buffet-meal

仿网上自助点餐的微信小程序

## 代码

**pages/home**

    该界面是刚进入小程序的页面，点击自助点餐可以进入page/location 页面，该页面可以选择城市以及城市相应的同类型的餐厅

**pages/location**

    该界面是点击自助点餐进入的界面，该界面地图是使用的腾讯的地图,key值输入即可使用，可选择相应城市的餐馆，默认是根据当前经纬度定位的城市，点击进入菜单可进入pages/menu 界面，也可实现登录后在进入，有兴趣的可自行进行添加

**pages/menu**

    该界面是商品菜单界面，点击随意菜单可进入详情页面 pages/foodDetail 界面。

**pages/foodDetail**

    该界面是是某一商品的详情界面，可点击 + 进行添加进入菜单，当添加后pages/menu 界面会出现购物车标志，点击即可进入pages/cart 界面。

**pages/cart**

    该界面是购物订单页面可以点击(+ - )进行商品的添加和移除！

**pages/login**

    该页面点击pages/home 右上角的注册登录即可进入，登录后再次点击就会取消登录。

## 图片

**images/home**

    几张swiper的图片

**images/icon**

    页面所用到的icon，皆使用svg。