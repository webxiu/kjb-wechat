//find.js
//获取应用实例
const app = getApp()

Page({
  data: {
    currentTab: 0, //标题选项卡索引
    currentIndex: 0, //内容选项卡索引
    winHeight: '', //窗口高度
    toChildView:'',//点击关联
    toChildView2:'',//点击关联
    currentIndex2: 0, //内容选项卡索引
    keyword:'',//社区

    answer: [],
    topTitle: ['问答', '专题'],
    resData: {
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
    subData: {
      subjectTab: ['全部专题', '我关注的'],
      groups: [
        {
          image: 'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8wMS9tQmpjRWl3N2swdVlCNkhuOVhtU2JCR0cyR2RudWJLdDN2RXFNcjBVSmx5Q2R0alBVT0dVcTdyakl2cm9OY2dOLnBuZw==',
          title: '亚马逊',
          article: 85,
          member: 102,
        },
        {
          image: 'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8wMS9XTDRWYk9sUE1xTzRNV3kxdzlYSUF6Rk8yNHpTMWJBdnFFR0NScmZ4cFVmVFhXdk9KNHBTS3dXVlFkQTRFanJELnBuZw==',
          title: 'Ebay',
          article: 3,
          member: 36,
        },
        {
          image: 'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8wMS9kdFZSbUZlUVd2VVVlc1BkeG1zZllHRnhnMEtaZkNrakE5S0lqVGY1bnB6Zm9TTWJPMVl0TFNQeDkycU16RUd0LmpwZWc=',
          title: '速卖通',
          article: 48,
          member: 321,
        },
        {
          image: 'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8wMS9rVjRzMHpzWEFzNmhsUGJOM1NFTEU2cUZKY3lCN2Z0OWZNSmtvWWJ5dVdzWEdrWm0wZk10cFFwcjJFa3Yza2VSLnBuZw==',
          title: '自建站',
          article: 20,
          member: 6,
        },
        {
          image: 'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8wMS9JUlg4UW03OEpaUDBPRW5ybTZOYWRpNGhKOHBaaTgzYlpobUN5dTBlRG9zYVhPcElDVTczTnc4dmIwcGVTUjhYLnBuZw==',
          title: 'WISH',
          article: 20,
          member: 16,
        },
        {
          image: 'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8wMS8xZ3dJUVl4YVpxN1V3Wm1RNFRzczE0MjJZR0ZaN2JrcUNZeGsyeWUzTXQzUlBJbm1NRnFLRm1RbjBHRkFjUFFVLnBuZw==',
          title: 'Lazada',
          article: 0,
          member: 6,
        },
        {
          image: 'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8wMS96cE53V2tjTTBRck1ZcnFsN3lVYll1VlUxSTROZ3RpWTJrNUMxVHFUVGxRNjMyWDFGUDdtS2RHWjBSc3ZWQmM0LnBuZw==',
          title: 'Shopee',
          article: 1,
          member: 8,
        },
        {
          image: 'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8wMS9aOGlQU1J3U0FoNW1lZ0JzSHhDWWhaU1h1d0hzaGFZZWphRnZJMG9pM1lCUVI1RVZhaGdjWDBkbVA3Y3VjRXZTLnBuZw==',
          title: 'Joom',
          article: 96,
          member: 23,
        },
        {
          image: 'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8wMS8zWVJsQ3dHTUhpOVBOMXlXeGxSbEI4ZlJCc3ZoNlhVNmkwYzVhOGRFUGt0cnFUZXlYa3RxZ2dwM29XazJnZzd2LnBuZw==',
          title: 'Jumia',
          article: 45,
          member: 18,
        },
        {
          image: 'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8wMS9XYW1wSEJCakRRWGl4ZEZQSXU4Q1ZQTzZPcVo5RVFRclFoSHhiTVJRY2ZVeWNMS2dFUWxEMUJ6UGJka1dkUk55LnBuZw==',
          title: '其他平台',
          article: 1,
          member: 0,
        },
        {
          image: 'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8wMS9tbkE5bjhhNXBOZmVFUkVmRmh4UTFPUFp3VENnbzJ1N0JtbzI1NXpNMk9jdzBDR2tYb3J3c01zYnE3V1BoRG5xLnBuZw==',
          title: '企业管理',
          article: 2,
          member: 3,
        },
        {
          image: 'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8wMS81Y2c4cXR3SHoyNUNHN20xcTRadTFLVWVRMlBCY25mald4WUtJeEI3UllZQUc4QlhhWXU3djQ0eFkzOFl2bWJGLnBuZw==',
          title: '物流',
          article: 106,
          member: 46,
        },
        {
          image: 'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8wMS9UVDZVUkU2QUtySElQUWdkSEVDSHNvZTY1ckJhdktZMjBKTVRUc2ZvMEtpYXgzODQ4aklaemJnOHplOU9EcjIxLnBuZw==',
          title: '生活情感',
          article: 2023,
          member: 665,
        },
      ],
      myGroups: [
        {
          image: 'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8wMS9kdFZSbUZlUVd2VVVlc1BkeG1zZllHRnhnMEtaZkNrakE5S0lqVGY1bnB6Zm9TTWJPMVl0TFNQeDkycU16RUd0LmpwZWc=',
          title: '速卖通',
          article: 48,
          member: 321,
        },
        {
          image: 'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8wMS96cE53V2tjTTBRck1ZcnFsN3lVYll1VlUxSTROZ3RpWTJrNUMxVHFUVGxRNjMyWDFGUDdtS2RHWjBSc3ZWQmM0LnBuZw==',
          title: 'Shopee',
          article: 1,
          member: 8,
        },
        {
          image: 'http://www.kuajinghelp.com/storage/public:MjAxOS8wNS8wMS9UVDZVUkU2QUtySElQUWdkSEVDSHNvZTY1ckJhdktZMjBKTVRUc2ZvMEtpYXgzODQ4aklaemJnOHplOU9EcjIxLnBuZw==',
          title: '生活情感',
          article: 2023,
          member: 665,
        },
      ],
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
  //问答选项卡--click
  contentClick(e) {
    let cliIndex = e.target.dataset.current;
    this.setData({
      currentIndex: cliIndex,
      toChildView: cliIndex,
    })
    console.log('点击',e)
  },
  //问答选项卡--switch
  contentSwitch(e) {
    this.setData({
      currentIndex: e.detail.current,
      toChildView: e.detail.current
    })
  },



  //专题选项卡--click
  subjuctClick(e) {
    let cliIndex = e.target.dataset.current;
    this.setData({
      currentIndex2: cliIndex,
      toChildView2: cliIndex,
    })
    console.log('点击',e)
  },
  //专题选项卡--switch
  subjuctSwitch(e) {
    this.setData({
      currentIndex2: e.detail.current,
      toChildView2: e.detail.current
    })
  },
  // 搜索
  answerSearch(){
    wx.navigateTo({
      url: '/pages/search/search?keyword=' + this.data.keyword
    })
  },
  onLoad(options) {
    let _this = this;
    let title = options.title;
    // wx.showLoading({
    //   title: '加载中',
    // })
    // if (title == '问答') {
      //发送请求..
      _this.setData({
        answer: _this.data.resData,
        keyword: title,
      })
      console.log(_this.data.answer)
    // }

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