// pages/homepage/homepage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    articleInfo:[],
    personInfo:{
        image: 'http://www.kuajinghelp.com/spa/img/pic_default_secret.1ac08eca.png', 
        real_name: '无',
        myArticle:[],
        myInfo: [
        { number: 0, desc: '动态' },
        { number: 5, desc: '粉丝' },
        { number: 2, desc: '关注' },
        { number: 9, desc: '收藏' },
      ]
    },
    addressInfo: [
      { name: '公司', content: '无' },
      { name: '职位', content: '职位' },
      { name: '行业', content: '广东省深圳市福田区兴旺小区108栋204号蓝景丽家' },
      { name: '职业', content: '职业' },
      { name: '学校', content: '学校' },
      { name: '地址', content: '广东省深圳市福田区兴旺小区108栋204号' },
    ],
    dynamicArticle: [
      { time: '2019-03-05 10:26:48', article: '关于路附近啊垃圾弗拉基的文章关于路附近啊垃圾弗拉基的文章' },
      { time: '2019-04-05 15:26:36', article: '2019年上半年还有一个月就快要结束' },
      { time: '2019-06-04 10:43:00', article: '电信网络 最近为何进不去亚马逊后台有没有解决方法 都快烦死了' },
      { time: '2019-05-05 14:06:30', article: '版权归作者所有，任何形式转载请联系作者。' },
      { time: '2019-02-05 10:26:30', article: '广东省深圳市福田区兴旺小区108栋204号' },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
  },

  myArticle:function(){
    this.data.dynamicArticle.map((val,idx)=>{
      return val.time = this.getDateDistance(val.time);
    })
    console.log(this.data.dynamicArticle)
    this.setData({
      articleInfo: this.data.dynamicArticle,
    })
  },
  getDateDistance:function(time) {
    //把年月日,时分秒 转换为 毫秒数
    var minute = 1000 * 60;//1分钟是多少秒
    var hour = minute * 60;//1小时是多少秒...依此类推
    var day = hour * 24;
    var week = day * 7;
    var halfmonth = day * 15;
    var month = day * 30;
    var year = month * 12;
    var halfyear = month * 12 / 2;
    var year5 = month * 12 * 5;

    var date = new Date()
    var end = new Date(time)
    //两个时间差的毫秒数
    var dis = date.getTime() - end.getTime();
    if(dis < 0) { return '未来' };

    //时间差的毫秒数
    var minD = dis / minute;
    var hourD = dis / hour;
    var dayD = dis / day;
    var weekD = dis / week;
    var halfmonth = dis / halfmonth;
    var monthD = dis / month;
    var yearD = dis / year;
    var halfyear = dis / halfyear;
    var year5D = dis / year5;

    if(year5D > 1) {
      return '5年前';//5年
    } else if (yearD >= 1 && yearD <= 5) {
      return parseInt(yearD) + '年前';
    } else if (halfyear >= 1 && halfyear <= 2) {
      return '半年前';//半年前
    } else if (monthD >= 1 && monthD <= 6) {
      return parseInt(monthD) + '个月前';
    } else if (halfmonth >= 1 && monthD <= 2) {
      return '半个月前';
    } else if (weekD >= 1 && weekD <= 3) {
      return parseInt(weekD) + '周前';
    } else if (dayD >= 1 && dayD <= 6) {
      return parseInt(dayD) + '天前';
    } else if (hourD >= 1 && hourD <= 24) {
      return parseInt(hourD) + '小时前';
    } else if (minD >= 1 && minD <= 59) {
      return parseInt(minD) + '分钟前';
    } else if (dis > 0 && dis <= minute) {
      return '刚刚';
    }
},
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.myArticle();

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})