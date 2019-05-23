var app = getApp();
Page({
  data: {
    winHeight: 0,
    navbar: ['资讯', '实操'],
    currentTab: 0,
    banner: ['http://www.kuajinghelp.com/api/v2/files/1738?&w=769.42&h=400&token=', 'http://www.kuajinghelp.com/api/v2/files/1682?&w=747.06&h=400&token=', 'http://www.kuajinghelp.com/api/v2/files/1041?&w=643.61&h=400&token='],

    winHeight2: 0,
    indicatorDots: false,
    autoplay: false,
    interval: 3000,
    duration: 1000,
    // 分类
    indicatorColor: '#f0f',
    indicatorActiveColor: '#f00',
    currentIndex: 0,
    toChildView:'',

    winWidth:0,//屏幕宽度
    tabBar: ['热点资讯', '政策法规', '大咖观点', '管理通道', '境外头条', '热点资讯', '政策法规', '大咖观点', '热点资讯'],
    tabContent:[
      {
        artImage: 'http://www.kuajinghelp.com/api/v2/files/974?&w=341.92&h=163&token=',
        artContent: 'Joom开放“网红营销”功能，跨境电商将迎来社交时代 最新获悉，跨境电商平台JOOM已于今年2月向卖家开放博主营销',
        artTime: 3,
        artUser: '辛巴达电子商务',
        artScan: 300
      },
      {
        artImage: 'http://www.kuajinghelp.com/api/v2/files/1312?&w=285.36&h=163&token=',
        artContent: '外媒:eBay中国卖家勒索英国买家删除差评',
        artTime: 20,
        artUser: '跨境资讯',
        artScan: 100
      },
      {
        artImage: 'http://www.kuajinghelp.com/api/v2/files/925?&w=299.43&h=163&token=',
        artContent: '解密ASO：App Store与Google Play 2019最新推广区别',
        artTime: 20,
        artUser: '原创',
        artScan: 5
      },
      {
        artImage: 'http://www.kuajinghelp.com/api/v2/files/974?&w=341.92&h=163&token=',
        artContent: 'Joom开放“网红营销”功能，跨境电商将迎来社交时代 最新获悉，跨境电商平台JOOM已于今年2月向卖家开放博主营销',
        artTime: 3,
        artUser: '辛巴达电子商务',
        artScan: 300
      },
      {
        artImage: 'http://www.kuajinghelp.com/api/v2/files/1312?&w=285.36&h=163&token=',
        artContent: '外媒:eBay中国卖家勒索英国买家删除差评',
        artTime: 20,
        artUser: '跨境资讯',
        artScan: 100
      },
      {
        artImage: 'http://www.kuajinghelp.com/api/v2/files/925?&w=299.43&h=163&token=',
        artContent: '解密ASO：App Store与Google Play 2019最新推广区别',
        artTime: 20,
        artUser: '原创',
        artScan: 5
      }, {
        artImage: 'http://www.kuajinghelp.com/api/v2/files/974?&w=341.92&h=163&token=',
        artContent: 'Joom开放“网红营销”功能，跨境电商将迎来社交时代 最新获悉，跨境电商平台JOOM已于今年2月向卖家开放博主营销',
        artTime: 3,
        artUser: '辛巴达电子商务',
        artScan: 300
      },
      {
        artImage: 'http://www.kuajinghelp.com/api/v2/files/1312?&w=285.36&h=163&token=',
        artContent: '外媒:eBay中国卖家勒索英国买家删除差评',
        artTime: 20,
        artUser: '跨境资讯',
        artScan: 100
      },
      {
        artImage: 'http://www.kuajinghelp.com/api/v2/files/925?&w=299.43&h=163&token=',
        artContent: '解密ASO：App Store与Google Play 2019最新推广区别',
        artTime: 20,
        artUser: '原创',
        artScan: 5
      }
    ]
  },
  // 顶部点击标题
  swichNav: function(e) {
    let cur = e.target.dataset.current;
    this.setData({
      currentTab: cur
    })
  },
  // 顶部滑动内容
  switchTab: function(e) {
    this.setData({
      currentTab: e.detail.current
    });
  },

  // 分类标题点击
  switchItem: function(e) {
    let clickIndex = e.target.dataset.current; //点击索引
    this.setData({
      currentIndex: clickIndex,
      toChildView: clickIndex
    });
  },
  // 分类内容滑动
  swiperChange: function(e) {
    let changeIndex = e.detail.current;//滑动索引
    this.setData({
      currentIndex: changeIndex,
      toChildView: changeIndex
    });
  },
 
  onLoad: function() {
    //页面加载获取屏幕宽度
    this.setData({
      winWidth:wx.getSystemInfoSync().windowWidth
    })
    
    var that = this;
    //  高度自适应
    wx.getSystemInfo({
      success: function(res) {
        var clientHeight = res.windowHeight,
          clientWidth = res.windowWidth,
          rpxR = 750 / clientWidth;
        var calc = clientHeight * rpxR;
        console.log(calc)
        that.setData({
          winHeight: calc,
          winHeight2: calc
        });
      }
    });
  },
  footerTap: app.footerTap
})