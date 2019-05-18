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

    windowWidth: 0, //窗口宽度
    getX: 0, //点击X坐标

    tabBar: ['热点资讯', '政策法规', '大咖观点', '管理通道', '境外头条', '热点资讯', '政策法规', '大咖观点'],
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
    let curB = e.target.dataset.current; //点击索引
    let windowWidth = wx.getSystemInfoSync().windowWidth; //窗口宽度
    let pos = e.detail.x || e.changedTouches[0].clientX || e.changedTouches[0].pageX; //点击的坐标
    let getX = parseInt(pos);
    // console.log('坐标', getX, '窗口宽度', windowWidth)

    if (this.data.currentBar == curB) {
      return false;
    } else {
      this.setData({
        currentBar: curB, //设置索引
        windowWidth: windowWidth,
        getX: getX
      })
    }
  },
  // tabBar滑动
  swichBarCont: function(e) {
    console.log('滑动元素索引:', e.detail.current)
    this.setData({
      currentBar: e.detail.current
    });
    this.checkCor();
  },


  //判断当前滚动超过一屏时，设置tab标题滚动条。
  checkCor: function() {
    let sLeft = this.data.scrollLeft; //移动距离
    let winWidth = this.data.windowWidth; //窗口宽度
    let hitX = this.data.getX; //X坐标
    let idx = this.data.currentBar; //索引

    console.log(hitX, winWidth / 2, idx)

    if ((idx <= 3) && hitX < (winWidth / 2)) {
      this.setData({
        scrollLeft: 0
      })

    } else if ((idx > 3)) {
      if (hitX > (winWidth / 2)) {
        this.setData({
          scrollLeft: sLeft += (winWidth / 2) + 20
        })
      } else {
        this.setData({
          scrollLeft: sLeft -= (winWidth / 2) - 20
        })
      }
    } else {
      this.setData({
        scrollLeft: 0
      })
    }



    // if (this.data.currentBar >= 3) {
    //   this.setData({
    //     scrollLeft: 300
    //   })
    // } else {
    //   this.setData({
    //     scrollLeft: 0
    //   })
    // }
  },
  onLoad: function() {
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