//find.js
//获取应用实例
const app = getApp()
let searchArray = [];


Page({
  data: {
    keyWord:'',//搜索页面来源关键词
    showHistory: false, //是否显示默认的搜索历史
    searchTxt: [], //搜索文本
    aotofocus: true, //获取焦点
    clearShow: false,
    history: ['亚马逊', '跨境', '电商']
  },


  input_txt(e) {
    let val = e.detail.value.trim();
    this.setData({
      searchTxt: val
    })
    if (val.length > 0) {
      this.setData({
        clearShow: true,
      })
    } else {
      this.setData({
        clearShow: false,
      })
    }
  },
  btn_search(e) {
    if (this.data.searchTxt == "") {
      wx.showToast({
        title: '请输入内容',
        // image: '/images/error.png',
        duration: 1000
      })
      return;
    }
    //调用
    this.buildHistory(this.data.searchTxt)
    this.formSubmit(e);//提交数据

  },
  formSubmit(e) {
    console.log('表单提交数据,请求服务器', e,this.data.keyWord)
    //****************请求服务器**************
    // wx.request({
    //   url: '',
    // })
  },
  //建立搜索记录
  buildHistory: function(e) {
    if (wx.getStorageSync("history").length > 0 && wx.getStorageSync("history").length < 8) { //小于指定数量之内
      let index = wx.getStorageSync("history").indexOf(e)
      if (index < 0) { //数据不存在时直接追加
        searchArray = wx.getStorageSync("history").concat(e)
        wx.setStorageSync("history", searchArray)
      } else { //数据已存在时调到头部
        searchArray = wx.getStorageSync("history")
        searchArray.splice(index, 1)
        searchArray = searchArray.concat(e);
        wx.setStorageSync("history", searchArray)
      }
    } else if (wx.getStorageSync("history").length >= 8) { //大于指定数量
      let index1 = wx.getStorageSync("history").indexOf(e)
      if (index1 > -1) { //数据已存在时掉到头部
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
    } else { //无数据时候直接追加
      searchArray = searchArray.concat(e)
      wx.setStorageSync("history", searchArray)
    }
    this.getHistory(); //获取搜索历史记录
  },
  //获取搜索历史记录
  getHistory() {
    if (wx.getStorageSync('history').length > 0) {
      this.setData({
        history: wx.getStorageSync('history').reverse(),
        showHistory: true, //有记录就显示
      })
    } else {
      this.setData({
        history: this.data.history,
      })
    }
  },
  //清空输入框
  clear() {
    this.setData({
      searchTxt: '',
      aotofocus: true,
      clearShow: false,
    })
  },
  //清除搜索记录
  deleteHistory() {
    let _this = this;
    wx.showModal({
      title: '操作提示',
      content: '是否清空历史记录?',
      success: function(res) {
        console.log(895, wx.getStorageSync('history'))
        wx.removeStorageSync('history');
        console.log(996, wx.getStorageSync('history'))
        if (res.confirm) {
          _this.setData({
            history: [], //不设置就显示默认搜索记录
            showHistory: false, //不显示历史记录
            searchTxt: '', //清空输入框
            aotofocus: true, //聚焦
            clearShow: false, //
          })
        }
      }
    })
    // wx.setStorageSync('history', null)
  },
  onLoad(options) {
    console.log('搜索关键词', options)
    this.setData({
      keyWord: options.keyword
    })


  },
  onShow() {
    this.getHistory(); //获取搜索历史记录
    this.setData({
      aotofocus: true, //聚焦
    })

  }



})