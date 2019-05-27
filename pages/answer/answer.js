//find.js
//获取应用实例
const app = getApp()

Page({
  data: {
    currentTab: 0, //标题选项卡索引
    currentIndex: 0, //内容选项卡索引
    winHeight: '', //窗口高度
    toChildView:'',//点击关联

    answer: [],
    resData: {
      title: ['问答', '选项'],
      answerTab: ['热门', '精选', '悬赏', '最新', '全部', '热门', '精选', '悬赏', '最新', '全部'],
      content: [
        {
          userPic: 'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8xNS9PUmQxM2xEQkdoejQyN2JtWnZySVlEc2Q5aXdLWjMybEY4Zml2SzdRdm9LS3duMnIwRlRaVUptTGtKUEFVeGRGLmpwZw==',
          user: 'kkkkdda',
          info: '回答高手',
          time: '2019/5/19',
          title: '在2019年下半年的旺季即将来临，大卖小白们是如何布局的？',
          content: '电信网络电脑经常无法进入后台 不要说处理订单了 正常的运营都很难开展 大家有遇到同样情况的吗？',
          comment: [{
            comUser: 'Maliya',
            comContent: '小白，沙发已经搬好，坐等大神分享',
            count: 9,
            comTime: '2019/05/19'
          }, ]
        },
        {
          userPic: 'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8xNS9PUmQxM2xEQkdoejQyN2JtWnZySVlEc2Q5aXdLWjMybEY4Zml2SzdRdm9LS3duMnIwRlRaVUptTGtKUEFVeGRGLmpwZw==',
          user: 'kkkkdda',
          info: '回答高手',
          time: '2019/5/19',
          title: '有人做法国Cdiscount这个平台吗？目前发现的各种问题来交流?',
          content: "有小伙伴跟小编反馈到： 刚开始接手，上传产品要一个个来，没有子父体，产品修改优化图片都需要通过表格填写上传； 任何问题都要开case， 没有在线聊天功能，等回复都要几天，几天之后CD回复的毫无营养呢敷衍了事； 存在纠纷，永远是机器回复你要你两天内给客户退货退款，只能提供法国当地退货地址，别的地址都不认，问题没及时处理，平台直接退款给客户了； 客户骗子超多超奇葩，我产品是全网最低价，买了之后说别人家的更便宜，要我退30多欧的差价；我不退，结果收到产品就把产品故意摔坏，要我们退全款，结果Cdiscount评定这case，直接就把钱退。。。。。了。。。。； 账号的考核退款退货率过了标准，直接就把你账户进入审核期，你无法提现出来，它还会继续扣你的信用卡！ 你呢？",
          comment: [{
            comUser: 'Maliya',
            comContent: '小白，沙发已经搬好，坐等大神分享',
            count: 9,
            comTime: '2019/05/19'
          },]
        },
        {
          userPic: 'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8xNS9PUmQxM2xEQkdoejQyN2JtWnZySVlEc2Q5aXdLWjMybEY4Zml2SzdRdm9LS3duMnIwRlRaVUptTGtKUEFVeGRGLmpwZw==',
          user: 'kkkkdda',
          info: '回答高手',
          time: '2019/5/19',
          title: '电信网络 最近为何进不去亚马逊后台？有没有解决方法 都快烦死了?',
          content: '最近一段时间以来 电信网络电脑经常无法进入后台 不要说处理订单了 正常的运营都很难开展 大家有遇到同样情况的吗？',
          comment: [{
            comUser: 'Tom cook',
            comContent: '有同样情况的，近期由于贸易战等因素，导致GFW加强了监管。所以导致经常进不去，只能多刷新尝试了！',
            count: 9,
            comTime: '2019/05/19'
          },]
        },
      ]
    },

  },
  clickTab(e) {
    this.setData({
      currentTab: e.target.dataset.current
    })
  },
  switchTab(e) {
    this.setData({
      currentTab: e.detail.current,
    })

  },
  //内容选项卡--click
  contentClick(e) {
    let cliIndex = e.target.dataset.current;
    this.setData({
      currentIndex: cliIndex,
      toChildView: cliIndex,
    })
    console.log('点击',e)
  },
  //内容选项卡--switch
  contentSwitch(e) {
    this.setData({
      currentIndex: e.detail.current,
      toChildView: e.detail.current
    })
  },
  onLoad(options) {
    let _this = this;
    let title = options.title;
    // wx.showLoading({
    //   title: '加载中',
    // })
    if (title == '问答') {
      //发送请求..
      _this.setData({
        answer: _this.data.resData,
      })
      console.log(_this.data.answer)
    }

    //高度自适应
    wx.getSystemInfo({
      success: function(res) {
        console.log('swiper高度', res)
        _this.setData({
          winHeight: res.windowHeight * 2 - 110
        })
      }
    })

  },

})