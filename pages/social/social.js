//find.js
//获取应用实例
const app = getApp()

Page({
  data: {
      groups: [
        {
          image: 'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8xNS9PUmQxM2xEQkdoejQyN2JtWnZySVlEc2Q5aXdLWjMybEY4Zml2SzdRdm9LS3duMnIwRlRaVUptTGtKUEFVeGRGLmpwZw==',
          title: '跨境房帮',
          article: 85,
          member:102,
        },
        {
          image: 'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8xNS9PUmQxM2xEQkdoejQyN2JtWnZySVlEc2Q5aXdLWjMybEY4Zml2SzdRdm9LS3duMnIwRlRaVUptTGtKUEFVeGRGLmpwZw==',
          title: '天马行空',
          article: 3,
          member:36,
        },
        {
          image: 'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8xNS9PUmQxM2xEQkdoejQyN2JtWnZySVlEc2Q5aXdLWjMybEY4Zml2SzdRdm9LS3duMnIwRlRaVUptTGtKUEFVeGRGLmpwZw==',
          title: '跨境爱宠帮',
          article: 48,
          member:321,
        },
        {
          image: 'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8xNS9PUmQxM2xEQkdoejQyN2JtWnZySVlEc2Q5aXdLWjMybEY4Zml2SzdRdm9LS3duMnIwRlRaVUptTGtKUEFVeGRGLmpwZw==',
          title: '跨境职场帮',
          article: 20,
          member:6,
        },
      ]
  },

  groupDetail(){
    wx.showToast({
      title: '打开社区详情',
      icon: 'success',
      duration: 500,
      mask: true,
    })
  },
  joinGroup(){
    wx.showToast({
      title: '加入成功',
      icon: 'success',
      duration: 500,
      mask: true,
    })
  },
  onLoad:function(){
    
  },
  onShow:function(){

  },

})