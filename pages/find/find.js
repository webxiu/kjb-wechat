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
  onLoad(options) {
    console.log('faxian',options)
  },
  toAnswer(e){
    let txt = e.target.dataset.txt;
    wx.navigateTo({
      url: '/pages/answer/answer?title=' + txt
    })
  }

   
})