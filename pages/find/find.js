//find.js
//获取应用实例
const app = getApp()

Page({
    data: {
      userInfo:'',
      hasUserInfo:false,
      canIUse: wx.canIUse('button.open-type.getUserInfo'),
      findList: [
        { title: '问答', tip: '热门问题' },
        { title: '人脉', tip: '' },
        { title: '社区', tip: '聊一聊' },
      ],
      findList2: [
        { title: '排行榜', tip: 'Top100' },
        { title: '附近的人', tip: '' },
      ]
    },
  onLoad(options) {
    console.log('faxian',options)
    if (app.globalData.userInfo){
      this.setData({
        userInfo: app.globalData.userInfo,
      })
    }else if(this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回,
      //所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res =>{
        this.setData({
          userInfo:res.userInfo,
          hasUserInfo:true
        })
      }
    }else{
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success:res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo:true
          })
        }
      })
    }
    
  },
  getUserInfo(e){
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo;//获取用户信息,全局设置
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true,
    })

    // wx.getUserInfo({
    //   success(res) {
    //     console.log(res.userInfo)
    //   }
    // })
    // let userOpenId = wx.getStorageSync('openId')
    // console.log('OpenId:'+userOpenId)
  },
    //打电话
    tell: function() {
        wx.makePhoneCall({
            phoneNumber: '13268770898' //仅为示例，并非真实的电话号码
        })
    },

   
})