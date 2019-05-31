// pages/friend/friend.js
let app = getApp();
Page({
  data: {
    city:'中国',//显示城市
    searchData: '',
    clickIndex: 0,//点击索引
    scrollHeight:'',//计算动态滚动高度
    scrollBottom:false,//是否滚动到底部
    lowerThreshold:80,//距离底部多远加载
    isShowLayer:false,//是否显示搜索弹层
    titleList: ['热门', '最新', '推荐', '附近'],
    friendList: [
      {
        friends:[
          {
            id: 91,
            name: "发哦是发",
            imgUrl: 'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8xNS9PUmQxM2xEQkdoejQyN2JtWnZySVlEc2Q5aXdLWjMybEY4Zml2SzdRdm9LS3duMnIwRlRaVUptTGtKUEFVeGRGLmpwZw=='
          },
          {
            id: 92,
            name: "用户1jxxqk",
            imgUrl: 'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8xNS9PUmQxM2xEQkdoejQyN2JtWnZySVlEc2Q5aXdLWjMybEY4Zml2SzdRdm9LS3duMnIwRlRaVUptTGtKUEFVeGRGLmpwZw=='
          },
          {
            id: 93,
            name: "哈哈哈",
            imgUrl: 'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8wOS8yN1c4WWUzdVlxRjhzZ3QxZ2MxaHZyc1hIczJtcDhMTlJMRFRoekNwRnpSWDNidzVzQXVxWDJCenpQVHFSVXNVLmpwZWc='
          },
          {
            id: 95,
            name: "huwenyong123J",
            imgUrl: 'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8xNS9PUmQxM2xEQkdoejQyN2JtWnZySVlEc2Q5aXdLWjMybEY4Zml2SzdRdm9LS3duMnIwRlRaVUptTGtKUEFVeGRGLmpwZw=='
          },
          {
            id: 100,
            name: "落花人独立",
            imgUrl: 'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8wOS8yN1c4WWUzdVlxRjhzZ3QxZ2MxaHZyc1hIczJtcDhMTlJMRFRoekNwRnpSWDNidzVzQXVxWDJCenpQVHFSVXNVLmpwZWc='
          },
          {
            id: 101,
            name: "Stop",
            imgUrl: 'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8xNS9PUmQxM2xEQkdoejQyN2JtWnZySVlEc2Q5aXdLWjMybEY4Zml2SzdRdm9LS3duMnIwRlRaVUptTGtKUEFVeGRGLmpwZw=='
          },
          {
            id: 108,
            name: "恩赐",
            imgUrl: 'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8xNS9PUmQxM2xEQkdoejQyN2JtWnZySVlEc2Q5aXdLWjMybEY4Zml2SzdRdm9LS3duMnIwRlRaVUptTGtKUEFVeGRGLmpwZw=='
          },
          {
            id: 109,
            name: "carrot",
            imgUrl: 'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8xNS9PUmQxM2xEQkdoejQyN2JtWnZySVlEc2Q5aXdLWjMybEY4Zml2SzdRdm9LS3duMnIwRlRaVUptTGtKUEFVeGRGLmpwZw=='
          },
          {
            id: 110,
            name: "最后一条数据",
            imgUrl: 'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8wOS8yN1c4WWUzdVlxRjhzZ3QxZ2MxaHZyc1hIczJtcDhMTlJMRFRoekNwRnpSWDNidzVzQXVxWDJCenpQVHFSVXNVLmpwZWc='
          },
        ],
      },
      {
        friends: [
          {
            id: 91,
            name: "发发",
            imgUrl: 'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8xNS9PUmQxM2xEQkdoejQyN2JtWnZySVlEc2Q5aXdLWjMybEY4Zml2SzdRdm9LS3duMnIwRlRaVUptTGtKUEFVeGRGLmpwZw=='
          },
          {
            id: 92,
            name: "阿罗汉果",
            imgUrl: 'http://www.kuajinghelp.com/spa/img/pic_default_secret.1ac08eca.png'
          },
          {
            id: 93,
            name: "卡夫卡",
            imgUrl: 'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8xNS9PUmQxM2xEQkdoejQyN2JtWnZySVlEc2Q5aXdLWjMybEY4Zml2SzdRdm9LS3duMnIwRlRaVUptTGtKUEFVeGRGLmpwZw=='
          },
          {
            id: 95,
            name: "放假啦",
            imgUrl: 'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8xNS9PUmQxM2xEQkdoejQyN2JtWnZySVlEc2Q5aXdLWjMybEY4Zml2SzdRdm9LS3duMnIwRlRaVUptTGtKUEFVeGRGLmpwZw=='
          },
          {
            id: 100,
            name: "福建阿里",
            imgUrl: 'http://www.kuajinghelp.com/spa/img/pic_default_secret.1ac08eca.png'
          },
          
        ],
      },
      {
        friends: [
          {
            id: 91,
            name: "发发",
            imgUrl: 'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8xNS9PUmQxM2xEQkdoejQyN2JtWnZySVlEc2Q5aXdLWjMybEY4Zml2SzdRdm9LS3duMnIwRlRaVUptTGtKUEFVeGRGLmpwZw=='
          },
          {
            id: 92,
            name: "法厄同",
            imgUrl: 'http://www.kuajinghelp.com/spa/img/pic_default_secret.1ac08eca.png'
          },
          {
            id: 93,
            name: "发疯",
            imgUrl: 'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8xNS9PUmQxM2xEQkdoejQyN2JtWnZySVlEc2Q5aXdLWjMybEY4Zml2SzdRdm9LS3duMnIwRlRaVUptTGtKUEFVeGRGLmpwZw=='
          },
          {
            id: 95,
            name: "fae",
            imgUrl: 'http://www.kuajinghelp.com/spa/img/pic_default_secret.1ac08eca.png'
          },
          {
            id: 100,
            name: "欺负",
            imgUrl: 'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8xNS9PUmQxM2xEQkdoejQyN2JtWnZySVlEc2Q5aXdLWjMybEY4Zml2SzdRdm9LS3duMnIwRlRaVUptTGtKUEFVeGRGLmpwZw=='
          },

        ],
      },
      {
        friends: [
          {
            id: 91,
            name: "明白",
            imgUrl: 'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8xNS9PUmQxM2xEQkdoejQyN2JtWnZySVlEc2Q5aXdLWjMybEY4Zml2SzdRdm9LS3duMnIwRlRaVUptTGtKUEFVeGRGLmpwZw=='
          },
          {
            id: 92,
            name: "发了附近",
            imgUrl: 'http://www.kuajinghelp.com/spa/img/pic_default_secret.1ac08eca.png'
          },
          {
            id: 93,
            name: "捡垃圾",
            imgUrl: 'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8xNS9PUmQxM2xEQkdoejQyN2JtWnZySVlEc2Q5aXdLWjMybEY4Zml2SzdRdm9LS3duMnIwRlRaVUptTGtKUEFVeGRGLmpwZw=='
          },
          {
            id: 95,
            name: "kjljl",
            imgUrl: 'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8xNS9PUmQxM2xEQkdoejQyN2JtWnZySVlEc2Q5aXdLWjMybEY4Zml2SzdRdm9LS3duMnIwRlRaVUptTGtKUEFVeGRGLmpwZw=='
          },
          {
            id: 100,
            name: "发疯",
            imgUrl: 'http://www.kuajinghelp.com/spa/img/pic_default_secret.1ac08eca.png'
          },
          {
            id: 100,
            name: "阿发",
            imgUrl: 'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8xNS9PUmQxM2xEQkdoejQyN2JtWnZySVlEc2Q5aXdLWjMybEY4Zml2SzdRdm9LS3duMnIwRlRaVUptTGtKUEFVeGRGLmpwZw=='
          },
          {
            id: 100,
            name: "最后一条的",
            imgUrl: 'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8xNS9PUmQxM2xEQkdoejQyN2JtWnZySVlEc2Q5aXdLWjMybEY4Zml2SzdRdm9LS3duMnIwRlRaVUptTGtKUEFVeGRGLmpwZw=='
          },

        ],
      },
    ],
    searchFriends:[]//搜索好友获得的数据

  },
  //输入框获取焦点时候
  onFocus(e) {
    this.setData({
      isShowLayer: true,//显示搜索弹层
    })
  },
  //点击返回
  goBack(){
    this.setData({
      isShowLayer: false,//隐藏搜索弹层
    })
  },
  //获取输入框内容
  searchInput(e) {
    let _this = this;
    let selectData = e.detail.value;
    this.setData({
      searchData: e.detail.value
    })
    // 1秒触发
    setTimeout(function(){
      _this.getFriends(selectData);//调用方法
    },1000)
  },
  //清空输入
  searchClear() {
    this.setData({ 
      searchData: '' 
      })
  },
  // 点击完成触发&点击搜索按钮触发
  searchConfirm(e) {
    let selectData = e.detail.value || this.data.searchData;
    this.getFriends(selectData);//调用方法
  },
  // 搜索好友方法抽离
  getFriends(selectData){
    let tempArray = [];
    // console.log('提交搜索', selectData)
    this.data.friendList.forEach((val, key) => {
      let result = val.friends.find((data) => {
        return data.name == selectData
      })
      console.log(123, result)
      if (result) {//符合调节间的push数组中
        tempArray.push(result)
      }
    })
    this.setData({
      searchFriends: tempArray
    })
  },
  //添加好友
  addFriend(e){
    console.log(e)
    let friend = e.target.dataset.friend;
    wx.showModal({
      title: '提示',
      content: '添加成功 ' + friend,
      showCancel:false,
     
    })
  },
  //选项卡标题切换
  switchFriendTab(e) {
    this.getScreenHeight();//获取屏幕高度
  
    this.setData({
      clickIndex: e.currentTarget.dataset.index,
      scrollBottom: false,
    })

  },
  //滚动底部触发
  scrollBottom(e){
    console.log('滚动到了底部',e)

    this.setData({
      scrollBottom:true,
    })

  },
  //获取屏幕高度
  getScreenHeight(){
    let _this = this;
    wx.getSystemInfo({
      success: function (res) {
        let winHeight = res.windowHeight;
        console.log(winHeight)
        _this.setData({
          scrollHeight: (winHeight - 105) * 2
        })
        console.log(_this.data.scrollBottom)
      }
    })
  },
  onLoad: function(options) {
    this.getScreenHeight();//获取屏幕高度
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    
    //获取地理位置
    this.setData({
      city: app.globalData.cityInfo,
    })

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})