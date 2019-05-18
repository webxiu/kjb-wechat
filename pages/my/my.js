//my.js
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
    cateList: [{//主页图标
        iconImg: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t26635/320/1832919204/11533/a2f9878a/5bee366dN1627d554.png',
        title: '主页'
      },
      {
        iconImg: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/17169/3/4127/4611/5c2f35cfEd87b0dd5/65c0cdc1362635fc.png',
        title: '活动'
      },
      {
        iconImg: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t18454/342/2607665324/6406/273daced/5b03b74eN3541598d.png',
        title: '团队'
      },
      {
        iconImg: 'http://www.wannengwatch.com/wn_source/duopinPage/images/category/nav3.png',
        title: '投稿'
      }
    ],
    myList:[
      {title: '推荐给好友', tip: '推荐好友送金币'},
      {title: '我的认证', tip: '已认证'},
      {title: '我的回答', tip: ''},
      {title: '草稿箱', tip: ''},
      {title: '设置', tip: ''}
    ]

    // 循环数据
  },

  // wx:wx.showLoading({
  //   title: '加载中',
  //   mask: true                                    

  // }),
  onLoad:function(){
    wx:wx.navigateTo({
      url: '',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})