
Page({
  data: {
    showTip:false,//显示授权弹窗
    
    //视频控制按钮
    controls: true,//播放控制按钮
    enablePlayGesture: true, //是否开启双击切换播放/暂停
    showMuteBtn: true,//静音按钮
    autoplay: false,
    winWidth: 0,//屏幕宽度


    isPopping: false,//是否已经弹出
    animPlus: {},//旋转动画
    animCollect: {},//item位移,透明度
    animTranspond: {},//item位移,透明度
    animInput: {},//item位移,透明度
    activity: [{
      isImage: true,
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
      isImage: false,
      userPic: 'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8xNS9PUmQxM2xEQkdoejQyN2JtWnZySVlEc2Q5aXdLWjMybEY4Zml2SzdRdm9LS3duMnIwRlRaVUptTGtKUEFVeGRGLmpwZw==',
      user: 'ellimy',
      time: 'false小时前',
      title: '99人类文明的「蝇王」式困境看了黄渤的《一出好戏》，无端地想起了《蝇王》，虽然这不是他剧本的原型，美剧《迷失》和特稿《太平洋逃杀记》更接近于他对于故事的想象。但《一出好戏》的剧本结构能与《蝇王》相互参照。一群人因遭厄运流落到孤岛，被困在前文明的环境里。两个故事中的人们，起初协力劳作，荜路蓝蒌，以处草莽。可是脱离人类社会愈久，内心的道德感和约束力量也就愈弱，人的动物性的那面开始浮现',
      vdo: [
        {
          poster: 'https://img.pconline.com.cn/images/autovideo/autovideo/20195/24/15586690127635880.jpg',
          video: 'https://online.pcvideo.com.cn/pconline/vpconline/2019/05/24/1558669040109-vpconline-78409-1_1.mp4',

        },
      ]
    },
    {
      isImage: true,
      userPic: 'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8xNS9PUmQxM2xEQkdoejQyN2JtWnZySVlEc2Q5aXdLWjMybEY4Zml2SzdRdm9LS3duMnIwRlRaVUptTGtKUEFVeGRGLmpwZw==',
      user: 'ellimy',
      time: '2小时前',
      title: '99人类文明的「蝇王」式困境看了黄渤的《一出好戏》，无端地想起了《蝇王》，虽然这不是他剧本的原型，美剧《迷失》和特稿《太平洋逃杀记》更接近于他对于故事的想象。但《一出好戏》的剧本结构能与《蝇王》相互参照。一群人因遭厄运流落到孤岛，被困在前文明的环境里。两个故事中的人们，起初协力劳作，荜路蓝蒌，以处草莽。可是脱离人类社会愈久，内心的道德感和约束力量也就愈弱，人的动物性的那面开始浮现',
      img: [
        'http://kuajingbang.oss-cn-shenzhen.aliyuncs.com/2019/05/16/0832/0Mo4fNBAZ8OPhhO0GRDUnyCqygYPwrNthigRy1MV.png?x-oss-process=image%2Fquality%2Cq_40%2Fauto-orient%2C1',
      ]
    },
    {
      isImage: false,
      userPic: 'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8xNS9PUmQxM2xEQkdoejQyN2JtWnZySVlEc2Q5aXdLWjMybEY4Zml2SzdRdm9LS3duMnIwRlRaVUptTGtKUEFVeGRGLmpwZw==',
      user: 'ellimy',
      time: '2小时前',
      title: '99人类文明的「蝇王」式困境看了黄渤的《一出好戏》，无端地想起了《蝇王》，虽然这不是他剧本的原型，美剧《迷失》和特稿《太平洋逃杀记》更接近于他对于故事的想象。但《一出好戏》的剧本结构能与《蝇王》相互参照。一群人因遭厄运流落到孤岛，被困在前文明的环境里。两个故事中的人们，起初协力劳作，荜路蓝蒌，以处草莽。可是脱离人类社会愈久，内心的道德感和约束力量也就愈弱，人的动物性的那面开始浮现',
      vdo: [
        {
          poster: 'https://img.pconline.com.cn/images/autovideo/autovideo/20195/24/15586690127635880.jpg',
          video: 'https://online.pcvideo.com.cn/pconline/vpconline/2019/05/24/1558669040109-vpconline-78409-1_1.mp4',

        },
        {
          poster: 'https://img.pconline.com.cn/images/autovideo/autovideo/20195/24/15586690127635880.jpg',
          video: 'https://online.pcvideo.com.cn/pconline/vpconline/2019/05/24/1558669040109-vpconline-78409-1_1.mp4',

        },
      ]
    },
    {
      isImage: false,
      userPic: 'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8xNS9PUmQxM2xEQkdoejQyN2JtWnZySVlEc2Q5aXdLWjMybEY4Zml2SzdRdm9LS3duMnIwRlRaVUptTGtKUEFVeGRGLmpwZw==',
      user: 'ellimy',
      time: '2小时前',
      title: '99人类文明的「蝇王」式困境看了黄渤的《一出好戏》，无端地想起了《蝇王》，虽然这不是他剧本的原型，美剧《迷失》和特稿《太平洋逃杀记》更接近于他对于故事的想象。但《一出好戏》的剧本结构能与《蝇王》相互参照。一群人因遭厄运流落到孤岛，被困在前文明的环境里。两个故事中的人们，起初协力劳作，荜路蓝蒌，以处草莽。可是脱离人类社会愈久，内心的道德感和约束力量也就愈弱，人的动物性的那面开始浮现',
      vdo: [
        {
          poster: 'https://img.pconline.com.cn/images/autovideo/autovideo/20195/24/15586690127635880.jpg',
          video: 'https://online.pcvideo.com.cn/pconline/vpconline/2019/05/24/1558669040109-vpconline-78409-1_1.mp4',

        },
        {
          poster: 'https://img.pconline.com.cn/images/autovideo/autovideo/20195/24/15586690127635880.jpg',
          video: 'https://online.pcvideo.com.cn/pconline/vpconline/2019/05/24/1558669040109-vpconline-78409-1_1.mp4',

        },
        {
          poster: 'https://img.pconline.com.cn/images/autovideo/autovideo/20195/24/15586690127635880.jpg',
          video: 'https://online.pcvideo.com.cn/pconline/vpconline/2019/05/24/1558669040109-vpconline-78409-1_1.mp4',

        },
      ]
    },
    {
      isImage: true,
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
      isImage: true,
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
      isImage: true,
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
      isImage: true,
      userPic: 'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8xNS9PUmQxM2xEQkdoejQyN2JtWnZySVlEc2Q5aXdLWjMybEY4Zml2SzdRdm9LS3duMnIwRlRaVUptTGtKUEFVeGRGLmpwZw==',
      user: 'ellimy',
      time: 'end小时前',
      title: '99人类文明的「蝇王」式困境看了黄渤的《一出好戏》，无端地想起了《蝇王》，虽然这不是他剧本的原型，美剧《迷失》和特稿《太平洋逃杀记》更接近于他对于故事的想象。但《一出好戏》的剧本结构能与《蝇王》相互参照。一群人因遭厄运流落到孤岛，被困在前文明的环境里。两个故事中的人们，起初协力劳作，荜路蓝蒌，以处草莽。可是脱离人类社会愈久，内心的道德感和约束力量也就愈弱，人的动物性的那面开始浮现',
      img: [
        'http://kuajingbang.oss-cn-shenzhen.aliyuncs.com/2019/05/16/0832/s0XegmbIlbdUNL523Voz3YYpOs51gGLpfo670ZCu.png?x-oss-process=image%2Fquality%2Cq_40%2Fauto-orient%2C1',
        'http://kuajingbang.oss-cn-shenzhen.aliyuncs.com/2019/05/16/0829/yLnnGPM1zUo3beJim6YrH6bFoHJuRmc086pX5GGz.png?x-oss-process=image%2Fquality%2Cq_40%2Fauto-orient%2C1',
      ]
    }
    ]

  },
  //点击弹出
  plus: function () {
    if (this.data.isPopping) {
      //缩回动画
      this.popp();
      this.setData({
        isPopping: false
      })
    } else if (!this.data.isPopping) {
      //弹出动画
      this.takeback();
      this.setData({
        isPopping: true
      })
    }
  },
  input: function () {
    console.log("input")
  },
  transpond: function () {
    console.log("transpond")
  },
  collect: function () {
    console.log("collect")
  },

  //弹出动画
  popp: function () {
    //plus顺时针旋转
    var animationPlus = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease-out'
    })
    var animationcollect = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease-out'
    })
    var animationTranspond = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease-out'
    })
    var animationInput = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease-out'
    })
    animationPlus.rotateZ(360).step();
    animationcollect.translate(-100, -100).rotateZ(360).opacity(1).step();
    animationTranspond.translate(-140, 0).rotateZ(360).opacity(1).step();
    animationInput.translate(-100, 100).rotateZ(360).opacity(1).step();
    this.setData({
      animPlus: animationPlus.export(),
      animCollect: animationcollect.export(),
      animTranspond: animationTranspond.export(),
      animInput: animationInput.export(),
    })
  },
  //收回动画
  takeback: function () {
    //plus逆时针旋转
    var animationPlus = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease-out'
    })
    var animationcollect = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease-out'
    })
    var animationTranspond = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease-out'
    })
    var animationInput = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease-out'
    })
    animationPlus.rotateZ(0).step();
    animationcollect.translate(0, 0).rotateZ(0).opacity(0).step();
    animationTranspond.translate(0, 0).rotateZ(0).opacity(0).step();
    animationInput.translate(0, 0).rotateZ(0).opacity(0).step();
    this.setData({
      animPlus: animationPlus.export(),
      animCollect: animationcollect.export(),
      animTranspond: animationTranspond.export(),
      animInput: animationInput.export(),
    })
  },
  handleSetting: function (e) {
    let that = this;
    // 对用户的设置进行判断，如果没有授权，即使用户返回到保存页面，显示的也是“去授权”按钮；同意授权之后才显示保存按钮
    if (!e.detail.authSetting['scope.writePhotosAlbum']) {
      wx.showModal({
        title: '警告',
        content: '若不打开授权，则无法将图片保存在相册中！',
        showCancel: false
      })
      that.setData({
        saveImgBtnHidden: false,
        openSettingBtnHidden: true
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '您已授权，赶紧将图片保存在相册中吧！',
        showCancel: false
      })
      that.setData({
        saveImgBtnHidden: true,
        openSettingBtnHidden: false
      })
    }
  },
  //打开相机
  takePhoto() {
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        console.log('相机',res)
        this.setData({
          src: res.tempImagePath
        })
      }
    })
  },
  error(e) {
    console.log(e.detail)
  },
  onLoad: function (options) {
    // 生命周期函数--监听页面加载
    let _this = this;
    //  高度自适应
    wx.getSystemInfo({
      success: function (res) {
        let clientHeight = res.windowHeight,
          clientWidth = res.windowWidth,
          rpxR = 750 / clientWidth;
        // let calc = clientHeight * rpxR - 160;
        let calc = clientHeight * rpxR;
        console.log('屏幕宽度', clientWidth)

        _this.setData({
          winHeight: calc,
          winWidth: clientWidth
        });
      }
    })

  },
  onReady: function () {
    // 生命周期函数--监听页面初次渲染完成
  },
  onShow: function () {
    // 生命周期函数--监听页面显示
  },
  onHide: function () {
    // 生命周期函数--监听页面隐藏
  },
  onUnload: function () {
    // 生命周期函数--监听页面卸载
  },
  onPullDownRefresh: function () {
    // 页面相关事件处理函数--监听用户下拉动作
  },
  onReachBottom: function () {
    // 页面上拉触底事件的处理函数
  },
  onShareAppMessage: function () {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  }
})