// pages/comm/comm.js
var app = getApp();
Page({
  data: {
    winHeight: '', //窗口高度
    currentTab: 0, //预设当前项的值
    scrollLeft: 0, //tab标题的滚动条位置

    navbar: ['消息', '好友', '群组'],
    //------------产品整页数据-------------
    groupData: [{
      message: {
        content: [
          {
            head_pic: 'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8xNS9PUmQxM2xEQkdoejQyN2JtWnZySVlEc2Q5aXdLWjMybEY4Zml2SzdRdm9LS3duMnIwRlRaVUptTGtKUEFVeGRGLmpwZw==?rule=w_50',
            username: 'power',
            contents: '小助手在线,点击告诉我们你的需求,即可获取最新资讯'
          },
          {
            head_pic: 'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8xNS9PUmQxM2xEQkdoejQyN2JtWnZySVlEc2Q5aXdLWjMybEY4Zml2SzdRdm9LS3duMnIwRlRaVUptTGtKUEFVeGRGLmpwZw==?rule=w_50',
            username: '通知消息',
            contents: '暂无消息'
          },
          {
            head_pic: 'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8xNS9PUmQxM2xEQkdoejQyN2JtWnZySVlEc2Q5aXdLWjMybEY4Zml2SzdRdm9LS3duMnIwRlRaVUptTGtKUEFVeGRGLmpwZw==?rule=w_50',
            username: 'power',
            contents: '小助手在线,点击告诉我们你的需求,即可获取最新资讯'
          },
          {
            head_pic: 'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8xNS9PUmQxM2xEQkdoejQyN2JtWnZySVlEc2Q5aXdLWjMybEY4Zml2SzdRdm9LS3duMnIwRlRaVUptTGtKUEFVeGRGLmpwZw==?rule=w_50',
            username: '通知消息',
            contents: '暂无消息'
          },
          {
            head_pic: 'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8xNS9PUmQxM2xEQkdoejQyN2JtWnZySVlEc2Q5aXdLWjMybEY4Zml2SzdRdm9LS3duMnIwRlRaVUptTGtKUEFVeGRGLmpwZw==?rule=w_50',
            username: 'power',
            contents: '小助手在线,点击告诉我们你的需求,即可获取最新资讯'
          },
          {
            head_pic: 'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8xNS9PUmQxM2xEQkdoejQyN2JtWnZySVlEc2Q5aXdLWjMybEY4Zml2SzdRdm9LS3duMnIwRlRaVUptTGtKUEFVeGRGLmpwZw==?rule=w_50',
            username: '通知消息',
            contents: '暂无消息'
          }


        ]
      },
      friend: {
        myfriends: '我的好友',
        number: 205,
        content: [{
          head_pic: 'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8xNS9PUmQxM2xEQkdoejQyN2JtWnZySVlEc2Q5aXdLWjMybEY4Zml2SzdRdm9LS3duMnIwRlRaVUptTGtKUEFVeGRGLmpwZw==?rule=w_50',
          username: '新朋友',
        },
        {
          head_pic: 'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8xNS9PUmQxM2xEQkdoejQyN2JtWnZySVlEc2Q5aXdLWjMybEY4Zml2SzdRdm9LS3duMnIwRlRaVUptTGtKUEFVeGRGLmpwZw==?rule=w_50',
          username: '人脉',
        },
        {
          head_pic: 'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8xNS9PUmQxM2xEQkdoejQyN2JtWnZySVlEc2Q5aXdLWjMybEY4Zml2SzdRdm9LS3duMnIwRlRaVUptTGtKUEFVeGRGLmpwZw==?rule=w_50',
          username: '通讯录好友',
        },
        {
          head_pic: 'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8xNS9PUmQxM2xEQkdoejQyN2JtWnZySVlEc2Q5aXdLWjMybEY4Zml2SzdRdm9LS3duMnIwRlRaVUptTGtKUEFVeGRGLmpwZw==?rule=w_50',
          username: '添加分组',
        }
        ]
      },
      group: {
        tips: '没有更多数据了',
        content: [
          {
            head_pic: 'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8xNS9PUmQxM2xEQkdoejQyN2JtWnZySVlEc2Q5aXdLWjMybEY4Zml2SzdRdm9LS3duMnIwRlRaVUptTGtKUEFVeGRGLmpwZw==?rule=w_50',
            member: ['Rosanna', 'Salman', 'Konrad', 'Kalie', 'Margo', 'Jessy', '尤里', 'Hakeem', 'Alecia'],
          },
          {
            head_pic: 'http://www.kuajinghelp.com/assets/pc/images/logo.png',
            member: ['科尔比', 'Salman', 'Konrad', 'Jessy', '尤里', 'Hakeem', 'Alecia'],
          },
          {
            head_pic: 'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8xNS9PUmQxM2xEQkdoejQyN2JtWnZySVlEc2Q5aXdLWjMybEY4Zml2SzdRdm9LS3duMnIwRlRaVUptTGtKUEFVeGRGLmpwZw==?rule=w_50',
            member: ['Konrad', 'Jessy', '尤里', 'Hakeem', 'Alecia', 'power', 'Abner', 'Berger', 'Colbie'],
          },
          {
            head_pic: 'http://www.kuajinghelp.com/assets/pc/images/logo.png',
            member: ['科尔比', 'Salman', 'Konrad', 'Kalie', 'Margo', 'Jessy', '尤里', 'Hakeem', 'Alecia'],
          },
          {
            head_pic: 'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8xNS9PUmQxM2xEQkdoejQyN2JtWnZySVlEc2Q5aXdLWjMybEY4Zml2SzdRdm9LS3duMnIwRlRaVUptTGtKUEFVeGRGLmpwZw==?rule=w_50',
            member: ['Federico', 'Salman', 'Konrad', 'Kalie', 'Margo', 'Jessy', '尤里', 'Hakeem', 'Alecia'],
          },
          {
            head_pic: 'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8xNS9PUmQxM2xEQkdoejQyN2JtWnZySVlEc2Q5aXdLWjMybEY4Zml2SzdRdm9LS3duMnIwRlRaVUptTGtKUEFVeGRGLmpwZw==?rule=w_50',
            member: ['Federico', 'Salman', 'Konrad', 'Kalie', 'Margo', 'Jessy', '尤里', 'Hakeem', 'Alecia'],
          },
          {
            head_pic: 'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8xNS9PUmQxM2xEQkdoejQyN2JtWnZySVlEc2Q5aXdLWjMybEY4Zml2SzdRdm9LS3duMnIwRlRaVUptTGtKUEFVeGRGLmpwZw==?rule=w_50',
            member: ['Federico', 'Salman', 'Konrad', 'Kalie', 'Margo', 'Jessy', '尤里', 'Hakeem', 'Alecia'],
          },
          {
            head_pic: 'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8xNS9PUmQxM2xEQkdoejQyN2JtWnZySVlEc2Q5aXdLWjMybEY4Zml2SzdRdm9LS3duMnIwRlRaVUptTGtKUEFVeGRGLmpwZw==?rule=w_50',
            member: ['Federico', 'Salman', 'Konrad', 'Kalie', 'Margo', 'Jessy', '尤里', 'Hakeem', 'Alecia'],
          },

        ]
      },
    }]
  },
  onReady: function (e) {
    var context = wx.createContext(); //创建并返回绘图上下文context对象。
    context.beginPath(); //开始一个新的路径
    context.moveTo(30, 40); //路径的起点
    context.lineTo(260, 40); //路径的终点
    context.stroke(); //对当前路径进行描边
    context.closePath(); //关闭当前路径
    wx.drawCanvas({ //
      canvasId: 'canvasLine', //画布标识，对应的cavas-id
      actions: context.getActions() //导出context绘制的直线并显示到页面
    });
  },

  // 循环标题
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.data.current
    })
  },
  // 滚动切换标签样式
  switchTab: function (e) {
    this.setData({
      currentTab: e.detail.current
    });
    this.checkCor();
  },
  // 点击标题切换当前页时改变样式
  swichNav: function (e) {
    var cur = e.target.dataset.current;
    if (this.data.currentTaB == cur) {
      return false;
    } else {
      this.setData({
        currentTab: cur
      })
    }
  },
  //判断当前滚动超过一屏时，设置tab标题滚动条。
  checkCor: function () {
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
  onLoad: function () {
    app.userInfoReadyCallback = function () {
      console.log(app.globalData)

    }
    app.userInfoReadyCallback()
    var that = this;
    //  高度自适应
    wx.getSystemInfo({
      success: function (res) {
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
    });
  },
  footerTap: app.footerTap
})