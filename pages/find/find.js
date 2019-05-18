//find.js
//获取应用实例
const app = getApp()

Page({
    data: {
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
  onLoad() {
    
  },
  abc(){
    wx.getUserInfo({
      success(res) {
        console.log(res.userInfo)
      }
    })
  },
    //打电话
    tell: function() {
        wx.makePhoneCall({
            phoneNumber: '13268770898' //仅为示例，并非真实的电话号码
        })
    },

   
})