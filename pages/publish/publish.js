// pages/publish/publish.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checkbox:false,
    imgUrl:[],
    video:[],


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    console.log(options,app.globalData.userInfo);
    if (options.picture){
      console.log('图片跳转')
      let picStr = options.picture;//获取图片
      let linkArr = picStr.split(',');//转为数组
      this.setData({
        imgUrl: linkArr
      })
    }else{
      console.log('视频跳转')
      if (options.video){
        let videoObj = JSON.parse(options.video);
        let tempArr = [];
        tempArr.push(videoObj);

        let videoArr = [...this.data.video,...tempArr]

        this.setData({
          video: videoArr 
        })

        console.log('视频', this.data.video)
      }
    }
  },
  //删除图片
  delPicture(e){
    let _this = this;
    wx.showModal({
      title: '操作提示',
      content: '请确认是否删除?',
      success:function(res){
        if(res.confirm){
          let curIndex = e.target.dataset.current;
          console.log('当前', curIndex)
          _this.data.imgUrl.splice(curIndex, 1)
          console.log('删除后', _this.data.imgUrl)
          _this.setData({
            imgUrl: _this.data.imgUrl,
          })

        }else if(res.cancel){
          return false;
        }
      },
    })
   
  },
  //删除视频
  delVideo(e){
    let _this = this;
    wx.showModal({
      title: '操作提示',
      content: '请确认是否删除?',
      success:function(res){
        if(res.confirm){
          let curIndex = e.target.dataset.current;
          console.log('当前视频', curIndex)
          _this.data.video.splice(curIndex, 1)
          console.log('删除后', _this.data.video)
          _this.setData({
            video: _this.data.video,
          })

        }else if(res.cancel){
          return false;
        }
      },
    })
   
  },
  // 添加图片
  addImg(){
    let _this = this;
    // 获取当前图片数量
    let curImgNum = this.data.imgUrl.length;
    // console.log('图片长度',curImgNum);//9
    let newNum = 9 - curImgNum;//还可以添加的数量
    if (curImgNum>=9){
      wx.showModal({
        title: '提示信息',
        content: '图片发表数量不能超过9个哦!',
      })
    }else{
      wx.showModal({
        title: '提示信息',
        content: '您还可以添加' + newNum+'张',
        success:function(res){
          console.log(res);
          if(res.confirm){
            wx.chooseImage({
              count: newNum,
              sourceType: ['album', 'camera'],
              success: function (res) { //成功
                console.log('获取相册成功:', res);
                let originArr = _this.data.imgUrl;
                let onceArr = res.tempFilePaths;
                let newArr = [...originArr,...onceArr];
                _this.setData({
                  imgUrl: newArr
                })
              },
              fail: function (err) { //失败
                wx.showModal({
                  title: '错误提示',
                  content: '添加图片失败',
                })
              },
            })
          }else if(res.cancel){
            return;
          }
        },
        
      })
      
    }
  },
  // 添加视频
  addVideo(){
    let _this = this;
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      compressed: true, //压缩视频
      maxDuration: 3000, //拍摄时长3分钟
      camera: 'back', //后置摄像头
      success: function (res) {
        console.log('视频', res)
        let tempArr = [];
        tempArr.push(res);
        let videoArr = [..._this.data.video, ...tempArr];
        _this.setData({
          video: videoArr,
        })
      },
      fail: function () {
        wx.showModal({
          title: '提示信息',
          content: 'surprise! 获取视频失败',
          confirmText: '确定',
          confirmColor: '#f00',
        })
      }

    })
      
  },

  //选择框改变
  checkboxChange(e){
    // console.log('获取选择框值', e.detail.value)
    let checked = this.data.checkbox;
    this.setData({
      checkbox: !checked,
      checkVal: e.detail.value,
    })

  },
  // 发布
  submitForm(e){
    console.log(11, e.detail.value)
    let txt = e.detail.value;
    this.uploadData(txt);
  },
  uploadData(txt){
    // 获取用户
    console.log('获取用户', app.globalData.userInfo)
    let userInfo = app.globalData.userInfo;
    if (!userInfo){
      wx.showToast({
        title: '请先登录',
      })
      //跳转去登录页面
      return;
    }
    let userName = app.globalData.userInfo.nickName;//用户名
    let checkVal =this.data.checkVal;//选择框(安全协议)
    if (!checkVal) {
      wx.showToast({
        title: '未同意用户协议',
      })
      return;
    }
    console.log(userName)
    if (!userName) return;
    if (checkVal) return;
    let img = this.data.imgUrl;   //图片
    let video = this.data.video;   //视频
    let param = {
      text: txt,//发布内容
      img: img,//获取上传的图片链接数组
      video: video,//获取上传的图片链接数组
      userName: userName,
      checkVal: checkVal
    }
    console.log('上传图片集合:', param)
    wx.uploadFile({
      url: 'https://www.abc.com/publish',
      filePath: '',
      name: '',
      header: {},
      formData: {},
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
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