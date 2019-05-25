//my.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo:null,
    showTip:false,//授权提示框
    hasUserInfo: false,
    canIUse:wx.canIUse('button.open-type.getUserInfo'),
    person: [
      { 
        pic: 'https://avatar.csdn.net/0/B/E/3_qq_38705926.jpg',
        user: '未登录',
        info: '点击编辑个人中心' 
      },
    ],
    info: [
      { num: 200, desc: '粉丝' },
      { num: 100, desc: '关注' },
      { num: 100, desc: '好友' },
    ],
    collect: [
      { num: 507, desc: '金币' },
      { num: '¥0', desc: '钱包' },
      { num: 1, desc: '收藏' },
    ],
    
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

  },
  //确认授权
  getUserInfo(e){
    let _this = this;
    app.globalData.userInfo = e.detail.userInfo;//获取用户信息,全局设置
    if (app.globalData.userInfo){
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true,
        showTip:false,
      })
      wx.showToast({
        title: '授权成功!',
        icon: 'success',
        duration: 1000
      })
    }else {
      wx.showToast({
        title: '授权失败!',
        icon:'loading',
        duration: 1000
      })
    }
  },
  //取消授权
  cancel(){
    this.setData({
      showTip:false,
    })
  },
  onShow(){//打开页面就执行--刷新功能
    if (app.globalData.userInfo){
      this.setData({
        userInfo: app.globalData.userInfo,
        showTip:false,
      })
    }else{//未授权 显示授权窗口
      this.setData({
        showTip: true,
      })
    }
  },
  onLoad:function(){
    if (app.globalData.userInfo){//已经授权
      this.setData({
        userInfo:app.globalData.userInfo,
        showTip:false,
      })
    } else if (this.data.canIUse){
      this.userInfoReadyCallback = res => {
        this.setData({
          userInfo:res.userInfo,
          hasUserInfo: false
        })
      }
    }else{
      wx.getUserInfo({
        success:function(res){
          app.globalData.userInfo = res.userInfo;
          this.setData({
            userInfo:res.userInfo,
            hasUserInfo:true,
            showTip: false
          })
        }
      })
    }
  }
})