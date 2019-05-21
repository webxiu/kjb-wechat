var app = getApp();
Page({
  data: {
    winHeight: 0,
    navbar: ['资讯', '实操'],
    currentTab: 0,
    banner: ['http://www.kuajinghelp.com/api/v2/files/1738?&w=769.42&h=400&token=', 'http://www.kuajinghelp.com/api/v2/files/1682?&w=747.06&h=400&token=', 'http://www.kuajinghelp.com/api/v2/files/1041?&w=643.61&h=400&token='],

    winHeight2: 0,
    scrollLeft: 0, //tab标题的滚动条位置
    indicatorDots: false,
    autoplay: false,
    interval: 3000,
    duration: 1000,
    currentBar: 0,
    currentBarTab: 0,
    indicatorColor: '#f0f',
    indicatorActiveColor: '#f00',

    winWidth:0,//屏幕宽度
    isScrollLeft: false, //滑动方向
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
  // 点击标题
  swichNav: function(e) {
    let cur = e.target.dataset.current;
    if (this.data.currentTab == cur) {
      return false;
    } else {
      this.setData({
        currentTab: cur
      })
    }
  },
  // 内容滑动
  switchTab: function(e) {
    this.setData({
      currentTab: e.detail.current
    });
  },

  // tabBar点击
  swichBar: function(e) {
    let sLeft = this.data.scrollLeft; //移动距离
    let cliCur = e.target.dataset.current; //点击索引

    console.log('点击:', cliCur, '当前', this.data.currentBar,'移动距离:',sLeft)
    if (cliCur < 3) {
      this.setData({
        scrollLeft: 0
      })

    }else if (cliCur >= 3 && cliCur < this.data.currentBar) {
      console.log('左点')
      this.setData({
        scrollLeft: sLeft - 100
      })
    } else {
      console.log('右点')
      this.setData({
        scrollLeft: sLeft + 100
      })
    }
    this.setData({
      currentBar: e.target.dataset.current
    });
    

    // if (this.data.currentBar == cliCur) {
    //   return false;
    // } else if (this.data.currentBar <= cliCur && cliCur>3){
    //     this.setData({
    //       scrollLeft: sLeft-100,
    //       currentBar: cliCur, //设置索引
    //       isScrollLeft: true
    //     })
    //   }
  },
  // tabBar滑动
  swichBarCont: function(e) {
    if (e.detail.current > this.data.currentBar) {
      console.log('左滑')
      // this.setData({
      //   isScrollLeft: false
      // })

    } else {
      console.log('右滑')
      // this.setData({
      //   isScrollLeft: true,
      // })
    }

    this.setData({
      currentBar: e.detail.current
    });
    this.checkCor();
  },
  //判断当前滚动超过一屏时，设置tab标题滚动条。
  checkCor: function() {
    let sLeft = this.data.scrollLeft; //移动距离
    let idx = this.data.currentBar; //索引
    let point = this.data.isScrollLeft; //滑动方向
    let winW = this.data.winWidth; //屏幕宽度
    console.log('当前索引', idx,'滑动距离', sLeft,  point == true);

    if (idx < 3) {
      this.setData({
        scrollLeft: 0
      })
    } else{
      if (point == true) {
        this.setData({
          scrollLeft: sLeft - 100
        })
      } else {
        this.setData({
          scrollLeft: sLeft + 100
        })
      }
    }

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