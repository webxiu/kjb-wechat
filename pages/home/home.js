//home.js
//获取应用实例
const app = getApp()
// 引用百度地图微信小程序JSAPI模块 
let bmap = require('../../utils/bmap-wx/bmap-wx.js'); 
let wxMarkerData = []; 

Page({
  data: {
    // latitude: '',//纬度
    // longitude: '',//经度
    cityInfo:'',//城市
    ak:'IRBjqkxwTfdjMxrxQ8YpW4AQalWj16xp',//app-key
    canIUse: wx.canIUse('button.open-type.openSetting'),
    showTip: false,//授权弹窗,默认不显示



    navbar: ['推荐', '动态'],
    currentTab: 0, //预设当前项的值
    scrollLeft: 0, //tab标题的滚动条位置  
    maskLayer: false, //添加动态遮罩层
    isEject: false, //是否弹出
    animMove: {}, //平移,透明还原

    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    indicatorColor: '#f0f',
    indicatorActiveColor: '#f00',

    productData: [ //轮播
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
    friendList: [{
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
    articleList: [{
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
    activity: [{
        userPic: 'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8xNS9PUmQxM2xEQkdoejQyN2JtWnZySVlEc2Q5aXdLWjMybEY4Zml2SzdRdm9LS3duMnIwRlRaVUptTGtKUEFVeGRGLmpwZw==',
        user: 'ellimy',
        time: '1小时前',
        title: '99人类文明的「蝇王」式困境看了黄渤的《一出好戏》，无端地想起了《蝇王》，虽然这不是他剧本的原型，美剧《迷失》和特稿《太平洋逃杀记》更接近于他对于故事的想象。但《一出好戏》的剧本结构能与《蝇王》相互参照。一群人因遭厄运流落到孤岛，被困在前文明的环境里。两个故事中的人们，起初协力劳作，荜路蓝蒌，以处草莽。可是脱离人类社会愈久，内心的道德感和约束力量也就愈弱，人的动物性的那面开始浮现',
        img: [
          'http://kuajingbang.oss-cn-shenzhen.aliyuncs.com/2019/05/09/0616/NqgMg8lqfszIC6RdYQKEIQiepBA7nMqxhEdZXVYL.png?x-oss-process=image%2Fquality%2Cq_40%2Fauto-orient%2C1',
          'http://kuajingbang.oss-cn-shenzhen.aliyuncs.com/2019/05/16/0832/0apMpK2bodbb6ctgkKdV0qc55CGvNZgXJl1bWfum.png?x-oss-process=image%2Fquality%2Cq_40%2Fauto-orient%2C1',
          'http://kuajingbang.oss-cn-shenzhen.aliyuncs.com/2019/05/09/0616/NqgMg8lqfszIC6RdYQKEIQiepBA7nMqxhEdZXVYL.png?x-oss-process=image%2Fquality%2Cq_40%2Fauto-orient%2C1',
        ]
      },
      {
        userPic: 'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8xNS9PUmQxM2xEQkdoejQyN2JtWnZySVlEc2Q5aXdLWjMybEY4Zml2SzdRdm9LS3duMnIwRlRaVUptTGtKUEFVeGRGLmpwZw==',
        user: 'ellimy',
        time: '2小时前',
        title: '99人类文明的「蝇王」式困境看了黄渤的《一出好戏》，无端地想起了《蝇王》，虽然这不是他剧本的原型，美剧《迷失》和特稿《太平洋逃杀记》更接近于他对于故事的想象。但《一出好戏》的剧本结构能与《蝇王》相互参照。一群人因遭厄运流落到孤岛，被困在前文明的环境里。两个故事中的人们，起初协力劳作，荜路蓝蒌，以处草莽。可是脱离人类社会愈久，内心的道德感和约束力量也就愈弱，人的动物性的那面开始浮现',
        img: [
          'http://kuajingbang.oss-cn-shenzhen.aliyuncs.com/2019/05/16/0832/0Mo4fNBAZ8OPhhO0GRDUnyCqygYPwrNthigRy1MV.png?x-oss-process=image%2Fquality%2Cq_40%2Fauto-orient%2C1',
        ]
      },
      {
        userPic: 'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8xNS9PUmQxM2xEQkdoejQyN2JtWnZySVlEc2Q5aXdLWjMybEY4Zml2SzdRdm9LS3duMnIwRlRaVUptTGtKUEFVeGRGLmpwZw==',
        user: 'ellimy',
        time: '3小时前',
        title: '99人类文明的「蝇王」式困境看了黄渤的《一出好戏》，无端地想起了《蝇王》，虽然这不是他剧本的原型，美剧《迷失》和特稿《太平洋逃杀记》更接近于他对于故事的想象。但《一出好戏》的剧本结构能与《蝇王》相互参照。一群人因遭厄运流落到孤岛，被困在前文明的环境里。两个故事中的人们，起初协力劳作，荜路蓝蒌，以处草莽。可是脱离人类社会愈久，内心的道德感和约束力量也就愈弱，人的动物性的那面开始浮现',
        img: [
          'http://kuajingbang.oss-cn-shenzhen.aliyuncs.com/2019/05/16/0832/s0XegmbIlbdUNL523Voz3YYpOs51gGLpfo670ZCu.png?x-oss-process=image%2Fquality%2Cq_40%2Fauto-orient%2C1',
          'http://kuajingbang.oss-cn-shenzhen.aliyuncs.com/2019/05/16/0829/yLnnGPM1zUo3beJim6YrH6bFoHJuRmc086pX5GGz.png?x-oss-process=image%2Fquality%2Cq_40%2Fauto-orient%2C1',
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
      },
      {
        userPic: 'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8xNS9PUmQxM2xEQkdoejQyN2JtWnZySVlEc2Q5aXdLWjMybEY4Zml2SzdRdm9LS3duMnIwRlRaVUptTGtKUEFVeGRGLmpwZw==',
        user: 'ellimy',
        time: '5小时前',
        title: '99人类文明的「蝇王」式困境看了黄渤的《一出好戏》，无端地想起了《蝇王》，虽然这不是他剧本的原型，美剧《迷失》和特稿《太平洋逃杀记》更接近于他对于故事的想象。但《一出好戏》的剧本结构能与《蝇王》相互参照。一群人因遭厄运流落到孤岛，被困在前文明的环境里。两个故事中的人们，起初协力劳作，荜路蓝蒌，以处草莽。可是脱离人类社会愈久，内心的道德感和约束力量也就愈弱，人的动物性的那面开始浮现',
        img: [
          'http://kuajingbang.oss-cn-shenzhen.aliyuncs.com/2019/05/16/0832/s0XegmbIlbdUNL523Voz3YYpOs51gGLpfo670ZCu.png?x-oss-process=image%2Fquality%2Cq_40%2Fauto-orient%2C1',
          'http://kuajingbang.oss-cn-shenzhen.aliyuncs.com/2019/05/16/0829/yLnnGPM1zUo3beJim6YrH6bFoHJuRmc086pX5GGz.png?x-oss-process=image%2Fquality%2Cq_40%2Fauto-orient%2C1',
        ]
      },
      {
        userPic: 'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8xNS9PUmQxM2xEQkdoejQyN2JtWnZySVlEc2Q5aXdLWjMybEY4Zml2SzdRdm9LS3duMnIwRlRaVUptTGtKUEFVeGRGLmpwZw==',
        user: 'ellimy',
        time: '6小时前',
        title: '99人类文明的「蝇王」式困境看了黄渤的《一出好戏》，无端地想起了《蝇王》，虽然这不是他剧本的原型，美剧《迷失》和特稿《太平洋逃杀记》更接近于他对于故事的想象。但《一出好戏》的剧本结构能与《蝇王》相互参照。一群人因遭厄运流落到孤岛，被困在前文明的环境里。两个故事中的人们，起初协力劳作，荜路蓝蒌，以处草莽。可是脱离人类社会愈久，内心的道德感和约束力量也就愈弱，人的动物性的那面开始浮现',
        img: [
          'http://kuajingbang.oss-cn-shenzhen.aliyuncs.com/2019/05/16/0832/s0XegmbIlbdUNL523Voz3YYpOs51gGLpfo670ZCu.png?x-oss-process=image%2Fquality%2Cq_40%2Fauto-orient%2C1',
          'http://kuajingbang.oss-cn-shenzhen.aliyuncs.com/2019/05/16/0829/yLnnGPM1zUo3beJim6YrH6bFoHJuRmc086pX5GGz.png?x-oss-process=image%2Fquality%2Cq_40%2Fauto-orient%2C1',
        ]
      }
    ]

  },

  //********************************方法**************************
  //获取地理位置


  // 顶部点击标题切换
  switchTab: function(e) {
    var cur = e.target.dataset.current;
    this.setData({
      currentTab: cur
    })
  },
  // 顶部滑动内容切换
  swiperChange: function(e) {
    this.setData({
      currentTab: e.detail.current
    });
  },


  // 首页动态点击图片放大
  previewImage(e) {
    let currentImg = e.currentTarget.dataset.link // 获取被点击图片的连接
    let outer = e.currentTarget.dataset.outer // 外层循环索引
    // let inner = e.currentTarget.dataset.inner// 内层循环索引
    // console.log('外层数据:' + outer, '内层数据:' + inner)

    wx.previewImage({
      current: currentImg, // 当前显示图片的http链接  
      urls: this.data.activity[outer].img, // 需要预览的图片http数组
    })
  },
  //添加按钮
  homeAddButton() {
    console.log(this.data.isEject)
    if (!this.data.isEject) {
      //弹出动画
      this.poping();
      this.setData({
        isEject: true
      })
    } else {
      //缩回动画
      this.takeback();
      this.setData({
        isEject: false
      })
    }
    this.setData({
      maskLayer: !this.data.maskLayer,
      isEject: false
    })

  },
  //弹出动画
  poping() {
    let animationAddItem = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease-out',
      transformOrigin: '50% 50% 0',
    })
    animationAddItem.translateY(160).opacity(1).step();
    this.setData({
      animMove: animationAddItem.export(),
    })
  },
  //缩回动画
  takeback() {
    let animationAddItem = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease-out',
      transformOrigin: '50% 50% 0',
    })
    animationAddItem.translateY(-160).opacity(0).step();
    this.setData({
      animMove: animationAddItem.export(),
    })
  },
  //点击遮罩
  hideMask() {
    this.setData({
      maskLayer: false,
    })
    this.takeback()
  },
  //文本框
  getText(){
    wx.navigateTo({
      url: '/pages/publish/publish'
    })
  },
  //获取图片
  getImage() {
    let _this = this;
    wx.showModal({
      title: '提示信息',
      content: '最多只能上传9张图片',
      showCancel: true,
      cancelText: '取消',
      cancelColor: '#000000',
      confirmText: '确定',
      confirmColor: '#576B95',
      success: function(res) {
        if (res.confirm) {
          wx.chooseImage({
            count: 9,
            sourceType: ['album', 'camera'],
            success: function(res) { //成功
              console.log('获取相册成功:', res.tempFilePaths.length);
               //隐藏遮罩
              _this.setData({
                maskLayer: false
              })
              //收起发布
              _this.takeback()
              wx.navigateTo({
                url: '/pages/publish/publish?picture=' + res.tempFilePaths,
              })
            },
            fail: function(err) { //失败执行
              wx.showModal({
                title: '提示信息',
                content: '获取相册失败',
                confirmText: '确定',
                confirmColor: '#f00',
              })
              //隐藏遮罩
              _this.setData({
                maskLayer: false
              })
              //收起发布
              _this.takeback()

            },
            complete: function() { //成功失败都执行

            }
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
          _this.setData({
            maskLayer: false
          })
          //收起发布
          _this.takeback()
        }
      },
      fail: function(res) {},
      complete: function(res) {},
    })

  },
  //获取视频
  getVideo() {
    let _this = this;
    wx.showModal({
      title: '提示信息',
      content: '视频拍摄限时3分钟',
      showCancel: true,
      cancelText: '取消',
      cancelColor: '#000',
      confirmText: '现在就去',
      confirmColor: '#576B95',
      success: function(res) {
        console.log('成功')
        if (res.confirm) {
          wx.chooseVideo({
            sourceType: ['album', 'camera'],
            compressed: true, //压缩视频
            maxDuration: 3000, //拍摄时长5分钟
            camera: 'back', //后置摄像头
            success: function(res) {
              //隐藏遮罩
              _this.setData({
                maskLayer: false
              })
              //收起发布
              _this.takeback()
              console.log('视频', res)
              wx.navigateTo({
                url: '/pages/publish/publish?video=' + JSON.stringify(res),
              })
            },
            fail: function() {
              wx.showModal({
                title: '提示信息',
                content: 'surprise! 获取视频失败了',
                confirmText: '确定',
                confirmColor: '#f00',
              })
              //隐藏遮罩
              _this.setData({
                maskLayer: false
              })
              //收起发布
              _this.takeback()
            }

          })

        } else {
          console.log('用户点击取消')
          _this.setData({
            maskLayer: false
          })
          //收起发布
          _this.takeback()
        }

      },
      //用户取消
      fail: function(res) {
        console.log('用户取消')

      },
      complete: function(res) {},
    })

  },
  //地图API
  coord_Map(){
    var _this = this;
    // 获取地理位置,/新建bmap
    var BMap = new bmap.BMapWX({
      ak: _this.data.ak
    });
    var fail = function (data) {
      // wx.showToast({
      //   title: '获取位置失败',
      //   icon: 'none',
      //   duration: 1000
      // })
      console.log('失败数据', data);
      //显示授权确认框
      _this.setData({
        showTip: true,
      })
    }
    var success = function (data) {
      console.log('成功数据', data);//返回数据内，已经包含经纬度
      wxMarkerData = data.wxMarkerData;//使用wxMarkerData获取数据

      // 全局设置经城市
      app.globalData.cityInfo = data.originalData.result.addressComponent.city

      _this.setData({
        // markers: wxMarkerData,
        // latitude: wxMarkerData[0].latitude,
        // longitude: wxMarkerData[0].longitude,
        // address: wxMarkerData[0].address,
        cityInfo: data.originalData.result.addressComponent.city,
        showTip: false,
      });
    }

    BMap.regeocoding({
      fail: fail,
      success: success
    });
  },
  // 取消 位置授权
  cancel() {
    this.setData({
      showTip: false,
    });
  },
  // 确定 位置授权
  getLocation(){
    let _this = this;
    wx.getLocation({
      type: 'wgs84',//wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success(res) {
        wx.showToast({
          title: '授权成功!',
          icon: 'success',
          duration: 1000
        })
        _this.coord_Map();
        // const latitude = res.latitude//纬度
        // const longitude = res.longitude//经度
        // console.log('授权成功,经纬度:', latitude, longitude)
        // //全局设置坐标
        // app.globalData.latitude = latitude;
        // app.globalData.longitude = longitude;
        _this.setData({
          // latitude: latitude,
          // longitude: longitude,
          showTip:false,
        })

      },
      fail: function (err) {
        console.log('拒绝授权',err)
        wx.showToast({
          title: '拒绝授权',
          icon: 'none',
          duration: 1000
        })
      }

    })
  },
  onShow:function(){
    this.coord_Map();//调用 地址获取方法
  },
  onLoad: function() {
    let _this = this;
    //  高度自适应
    wx.getSystemInfo({
      success: function(res) {
        let clientHeight = res.windowHeight,
          clientWidth = res.windowWidth,
          rpxR = 750 / clientWidth;
        // let calc = clientHeight * rpxR - 160;
        let calc = clientHeight * rpxR;
        console.log(calc)
        _this.setData({
          winHeight: calc
        });
      }
    })

    //获取位置
    wx.getSetting({
      success:function(res){
        if (res.authSetting['scope.userLocation'] != undefined || res.authSetting['scope.userLocation'] != true){
          _this.coord_Map();// 调用 地址获取方法
          console.log('授权成功2',res)
        }else{
          // console.log('授权失败', res)
          wx.showToast({
            title: '授权失败了哦',
            icon: 'none',
            duration: 1000
          })
        }
      }
    })

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