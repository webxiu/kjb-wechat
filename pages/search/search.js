//find.js
//获取应用实例
const app = getApp()
let searchArray = [];


Page({
    data: {
      showHistory:true,//搜索历史
      searchTxt:[],//搜索文本
      history:['亚马逊','跨境','电商']
    },
  onLoad(options) {
    console.log('搜索关键词',options)
  },

  input_txt(e){
    this.setData({
      searchTxt: e.detail.value.trim()
    })
  },
  btn_search(e){
    if(this.data.searchTxt == ""){
      wx.showToast({
        title: '请输入内容',
        // image: '/images/error.png',
        duration: 1000
      })
      return;
    }
    this.buildHistory(this.data.searchTxt)

  },
  //建立搜索记录
  buildHistory: function (e) {
    if (wx.getStorageSync("history").length > 0 && wx.getStorageSync("history").length < 8) {//小于指定数量之内
      let index = wx.getStorageSync("history").indexOf(e)
      if (index < 0) {//数据不存在时直接追加
        searchArray = wx.getStorageSync("history").concat(e)
        wx.setStorageSync("history", searchArray)
      } else {//数据已存在时调到头部
        searchArray = wx.getStorageSync("history")
        searchArray.splice(index, 1)
        searchArray = searchArray.concat(e);
        wx.setStorageSync("history", searchArray)
      }
    } else if (wx.getStorageSync("history").length >= 8) {//大于指定数量
      let index1 = wx.getStorageSync("history").indexOf(e)
      if (index1 > -1) {//数据已存在时掉到头部
        searchArray = wx.getStorageSync("history")
        searchArray.splice(index1, 1)
        searchArray = searchArray.concat(e);
        wx.setStorageSync("history", searchArray)
        return;
      }
      //数据不存在时删除第一个后追加
      searchArray = wx.getStorageSync("history")
      searchArray.splice(0, 1)
      searchArray = searchArray.concat(e);
      wx.setStorageSync("history", searchArray)
    } else {//无数据时候直接追加
      searchArray = searchArray.concat(e)
      wx.setStorageSync("history", searchArray)
    }
    this.getHistory();//获取搜索历史记录
  },
  //获取搜索历史记录
  getHistory(){
    if (wx.getStorageSync('history').length > 0) {
      this.setData({
        history: wx.getStorageSync('history').reverse(),
      })
    } else {
      this.setData({
        history: this.data.history,
      })
    }
  },
  //清除
  deleteHistory(){
    wx.showModal({
      title: '操作提示',
      content: '是否清空历史记录?',
      success:function(res){
        
      }
    })
    // wx.setStorageSync('history', null)
  },
  onShow(){
    this.getHistory();//获取搜索历史记录

  }


   
})