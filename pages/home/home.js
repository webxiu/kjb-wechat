//home.js
//获取应用实例
const app = getApp()

/*Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})*/
Page({
  data: {
    navbar: ['推荐', '动态'],
    currentTab: 0, //预设当前项的值
    scrollLeft: 0, //tab标题的滚动条位置

    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    indicatorColor: '#f0f',
    indicatorActiveColor: '#f00',

    productData: [//轮播
      {
        cateTitle: '可能认识的人',
        buyImgs: 'http://www.kuajinghelp.com/assets/pc/images/default_cover.jpg',
      },
      {
        cateTitle: '可能认识的人',
        buyImgs: 'http://www.kuajinghelp.com/assets/pc/images/default_cover.jpg',
      },
      // {
      //   cateTitle: '可能认识的人',
      //   buyImgs: 'http://www.kuajinghelp.com/assets/pc/images/default_cover.jpg',
      // },
      // {
      //   cateTitle: '可能认识的人',
      //   buyImgs: 'http://www.kuajinghelp.com/assets/pc/images/default_cover.jpg',
      // }
    ],
    friendList:[
      {
        url: 'http://www.kuajinghelp.com/assets/pc/images/pic_default_secret.png',
        name: '马可波罗的海',
        friend: 'salin'
      },
      {
        url: 'http://www.kuajinghelp.com/assets/pc/images/pic_default_secret.png',
        name: '马可波罗的海',
        friend: 'sumyli'
      },
      {
        url: 'http://www.kuajinghelp.com/assets/pc/images/pic_default_secret.png',
        name: '马可波罗的海',
        friend: 'dely'
      },
      {
        url: 'http://www.kuajinghelp.com/assets/pc/images/pic_default_secret.png',
        name: '马可波罗的海',
        friend: 'mayamio'
      }
    ],
    articleList:[
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
      }
    ],
    homeBanner: [
      'https://aecpm.alicdn.com/simba/img/TB14ab1KpXXXXclXFXXSutbFXXX.jpg_q50.jpg',
      'https://img.alicdn.com/imgextra/i3/84/O1CN01GTgwRW1CUVnSP5LI4_!!84-0-luban.jpg',
      'https://gw.alicdn.com/imgextra/i2/7/O1CN019pJSIO1BvFIRVBG9Q_!!7-0-lubanu.jpg',
      'https://gw.alicdn.com/imgextra/i4/3/O1CN01C30Xn11BtPiMnhAs0_!!3-0-lubanu.jpg'
    ],
    activity:[
      {
        userPic:'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8xNS9PUmQxM2xEQkdoejQyN2JtWnZySVlEc2Q5aXdLWjMybEY4Zml2SzdRdm9LS3duMnIwRlRaVUptTGtKUEFVeGRGLmpwZw==',
        user:'ellimy',
        time:'4小时前',
        title: '99人类文明的「蝇王」式困境看了黄渤的《一出好戏》，无端地想起了《蝇王》，虽然这不是他剧本的原型，美剧《迷失》和特稿《太平洋逃杀记》更接近于他对于故事的想象。但《一出好戏》的剧本结构能与《蝇王》相互参照。一群人因遭厄运流落到孤岛，被困在前文明的环境里。两个故事中的人们，起初协力劳作，荜路蓝蒌，以处草莽。可是脱离人类社会愈久，内心的道德感和约束力量也就愈弱，人的动物性的那面开始浮现',
        img:[
          'http://kuajingbang.oss-cn-shenzhen.aliyuncs.com/2019/05/09/0616/NqgMg8lqfszIC6RdYQKEIQiepBA7nMqxhEdZXVYL.png?x-oss-process=image%2Fquality%2Cq_40%2Fauto-orient%2C1',
          'http://kuajingbang.oss-cn-shenzhen.aliyuncs.com/2019/05/16/0832/0apMpK2bodbb6ctgkKdV0qc55CGvNZgXJl1bWfum.png?x-oss-process=image%2Fquality%2Cq_40%2Fauto-orient%2C1',
          'http://kuajingbang.oss-cn-shenzhen.aliyuncs.com/2019/05/09/0616/NqgMg8lqfszIC6RdYQKEIQiepBA7nMqxhEdZXVYL.png?x-oss-process=image%2Fquality%2Cq_40%2Fauto-orient%2C1',
        ]
      },
      {
        userPic: 'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8xNS9PUmQxM2xEQkdoejQyN2JtWnZySVlEc2Q5aXdLWjMybEY4Zml2SzdRdm9LS3duMnIwRlRaVUptTGtKUEFVeGRGLmpwZw==',
        user: 'ellimy',
        time: '4小时前',
        title: '99人类文明的「蝇王」式困境看了黄渤的《一出好戏》，无端地想起了《蝇王》，虽然这不是他剧本的原型，美剧《迷失》和特稿《太平洋逃杀记》更接近于他对于故事的想象。但《一出好戏》的剧本结构能与《蝇王》相互参照。一群人因遭厄运流落到孤岛，被困在前文明的环境里。两个故事中的人们，起初协力劳作，荜路蓝蒌，以处草莽。可是脱离人类社会愈久，内心的道德感和约束力量也就愈弱，人的动物性的那面开始浮现',
        img: [
          'http://kuajingbang.oss-cn-shenzhen.aliyuncs.com/2019/05/16/0832/0Mo4fNBAZ8OPhhO0GRDUnyCqygYPwrNthigRy1MV.png?x-oss-process=image%2Fquality%2Cq_40%2Fauto-orient%2C1',
        ]
      },
      {
        userPic: 'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8xNS9PUmQxM2xEQkdoejQyN2JtWnZySVlEc2Q5aXdLWjMybEY4Zml2SzdRdm9LS3duMnIwRlRaVUptTGtKUEFVeGRGLmpwZw==',
        user: 'ellimy',
        time: '4小时前',
        title: '99人类文明的「蝇王」式困境看了黄渤的《一出好戏》，无端地想起了《蝇王》，虽然这不是他剧本的原型，美剧《迷失》和特稿《太平洋逃杀记》更接近于他对于故事的想象。但《一出好戏》的剧本结构能与《蝇王》相互参照。一群人因遭厄运流落到孤岛，被困在前文明的环境里。两个故事中的人们，起初协力劳作，荜路蓝蒌，以处草莽。可是脱离人类社会愈久，内心的道德感和约束力量也就愈弱，人的动物性的那面开始浮现',
        img: [
          'http://kuajingbang.oss-cn-shenzhen.aliyuncs.com/2019/05/16/0832/s0XegmbIlbdUNL523Voz3YYpOs51gGLpfo670ZCu.png?x-oss-process=image%2Fquality%2Cq_40%2Fauto-orient%2C1',
          'http://kuajingbang.oss-cn-shenzhen.aliyuncs.com/2019/05/16/0829/yLnnGPM1zUo3beJim6YrH6bFoHJuRmc086pX5GGz.png?x-oss-process=image%2Fquality%2Cq_40%2Fauto-orient%2C1',
        ]
      }
    ]
   
  },
  // 循环标题
  navbarTap: function(e) {
    this.setData({
      currentTab: e.currentTarget.data.current
    })
  },
  // 滚动切换标签样式
  switchTab: function(e) {
    this.setData({
      currentTab: e.detail.current
    });
    this.checkCor();
  },
  // 点击标题切换当前页时改变样式
  swichNav: function(e) {
    var cur = e.target.dataset.current;
    if (this.data.currentTaB == cur) {
      return false;
    } else {
      this.setData({
        currentTab: cur
      })
    }
  },
  //判断当前滚动超过一屏时，设置tab标题滚动条。(此处只有两个navbar,不需移动)
  checkCor: function() {
    // console.log(77, this.data.navbar.length)
    if (this.data.currentTab > 4) {
      this.setData({
        scrollLeft: 300
      })
    } else {
      this.setData({
        scrollLeft: 0
      })
    }
  },
  // 首页动态点击图片放大
  previewImage(e){
    let currentImg = e.currentTarget.dataset.link// 获取被点击图片的连接
    let outer = e.currentTarget.dataset.outer// 外层循环索引
    // let inner = e.currentTarget.dataset.inner// 内层循环索引
    // console.log('外层数据:' + outer, '内层数据:' + inner)
    
    wx.previewImage({
      current: currentImg,// 当前显示图片的http链接  
      urls: this.data.activity[outer].img,// 需要预览的图片http数组
    })
  },
  onLoad: function() {
    var that = this;
    //  高度自适应
    wx.getSystemInfo({
      success: function(res) {
        var clientHeight = res.windowHeight,
          clientWidth = res.windowWidth,
          rpxR = 750 / clientWidth;
        // var calc = clientHeight * rpxR - 160;
        var calc = clientHeight * rpxR;
        console.log(calc)
        that.setData({
          winHeight: calc
        });
      }
    })

    // function getImgNum(param){
    //   let className = '';
    //   if (param >2 ) {
    //       className = 'item-img2'
    //   }else if(param == 1){
    //     className = 'item-img1'
    //   }else{
    //     className = 'item-img'
    //   }
    //   return className;
    // }
  },

  //打电话
  tell: function() {
    wx.makePhoneCall({
      phoneNumber: '13268770898' //仅为示例，并非真实的电话号码
    })
  },

  changeIndicatorDots: function(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function(e) {
    this.setData({
      duration: e.detail.value
    })
  }
})