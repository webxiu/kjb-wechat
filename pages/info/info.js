//find.js
//获取应用实例
const app = getApp()

Page({
  data: {
    currentTab: 0, //标题选项卡索引
    currentIndex: 0, //内容选项卡索引
    winHeight: '', //窗口高度
    toChildView: '', //点击关联
    //轮播
    indicatorDots: true,//指示灯
    autoplay: true,//自动轮播
    interval: 3000,//轮播时间
    duration: 500,//过渡动画时长
    indicatorColor: '#f0f',//指示灯颜色
    indicatorActiveColor: '#f00',//指示灯选中颜色
    banner: ['http://www.kuajinghelp.com/api/v2/files/1738?&w=769.42&h=400&token=', 'http://www.kuajinghelp.com/api/v2/files/1682?&w=747.06&h=400&token=', 'http://www.kuajinghelp.com/api/v2/files/1041?&w=643.61&h=400&token='],
    theme: ['资讯', '实操'],
    infoFast: ['跨境快讯', '数据报告', '政策法规', '物流资讯', '跨境闲聊'],
    optActual: ['亚马逊', 'EBAY', '独立站', 'Others', '更多'],
    tabContent: [
      {
        infos: [{
            artImage: 'http://www.kuajinghelp.com/api/v2/files/974?&w=341.92&h=163&token=',
            artContent: 'Joom开放“网红营销”功能，跨境电商将迎来社交时代 最新获悉，跨境电商平台JOOM已于今年2月向卖家开放博主营销',
            artTime: 3,
            artUser: '辛巴达电子商务',
            artScan: 11
          },
          {
            artImage: 'http://www.kuajinghelp.com/api/v2/files/1312?&w=285.36&h=163&token=',
            artContent: '外媒:eBay中国卖家勒索英国买家删除差评',
            artTime: 20,
            artUser: '跨境资讯',
            artScan: 21
          },
          {
            artImage: 'http://www.kuajinghelp.com/api/v2/files/925?&w=299.43&h=163&token=',
            artContent: '解密ASO：App Store与Google Play 2019最新推广区别',
            artTime: 20,
            artUser: '原创',
            artScan: 31
          },
          {
            artImage: 'http://www.kuajinghelp.com/api/v2/files/974?&w=341.92&h=163&token=',
            artContent: 'Joom开放“网红营销”功能，跨境电商将迎来社交时代 最新获悉，跨境电商平台JOOM已于今年2月向卖家开放博主营销',
            artTime: 3,
            artUser: '辛巴达电子商务',
            artScan: 41
          },
          {
            artImage: 'http://www.kuajinghelp.com/api/v2/files/1312?&w=285.36&h=163&token=',
            artContent: '外媒:eBay中国卖家勒索英国买家删除差评',
            artTime: 20,
            artUser: '跨境资讯',
            artScan: 51
          },
          {
            artImage: 'http://www.kuajinghelp.com/api/v2/files/925?&w=299.43&h=163&token=',
            artContent: '解密ASO：App Store与Google Play 2019最新推广区别',
            artTime: 20,
            artUser: '原创',
            artScan: 61
          },
          {
            artImage: 'http://www.kuajinghelp.com/api/v2/files/974?&w=341.92&h=163&token=',
            artContent: 'Joom开放“网红营销”功能，跨境电商将迎来社交时代 最新获悉，跨境电商平台JOOM已于今年2月向卖家开放博主营销',
            artTime: 3,
            artUser: '辛巴达电子商务',
            artScan: 71
          },
          {
            artImage: 'http://www.kuajinghelp.com/api/v2/files/1312?&w=285.36&h=163&token=',
            artContent: '外媒:eBay中国卖家勒索英国买家删除差评',
            artTime: 20,
            artUser: '跨境资讯',
            artScan: 81
          },
          {
            artImage: 'http://www.kuajinghelp.com/api/v2/files/925?&w=299.43&h=163&token=',
            artContent: '解密ASO：App Store与Google Play 2019最新推广区别',
            artTime: 20,
            artUser: '原创',
            artScan: 91
          }
        ]
      },
      {
        infos: [{
            artImage: 'http://www.kuajinghelp.com/api/v2/files/925?&w=299.43&h=163&token=',
            artContent: '解密ASO：App Store与Google Play 2019最新推广区别',
            artTime: 20,
            artUser: '原创',
            artScan: 21
          },
          {
            artImage: 'http://www.kuajinghelp.com/api/v2/files/974?&w=341.92&h=163&token=',
            artContent: 'Joom开放“网红营销”功能，跨境电商将迎来社交时代 最新获悉，跨境电商平台JOOM已于今年2月向卖家开放博主营销',
            artTime: 3,
            artUser: '辛巴达电子商务',
            artScan: 22
          },
          {
            artImage: 'http://www.kuajinghelp.com/api/v2/files/1312?&w=285.36&h=163&token=',
            artContent: '外媒:eBay中国卖家勒索英国买家删除差评',
            artTime: 20,
            artUser: '跨境资讯',
            artScan: 23
          },
          {
            artImage: 'http://www.kuajinghelp.com/api/v2/files/925?&w=299.43&h=163&token=',
            artContent: '解密ASO：App Store与Google Play 2019最新推广区别',
            artTime: 20,
            artUser: '原创',
            artScan: 24
          },
          {
            artImage: 'http://www.kuajinghelp.com/api/v2/files/974?&w=341.92&h=163&token=',
            artContent: 'Joom开放“网红营销”功能，跨境电商将迎来社交时代 最新获悉，跨境电商平台JOOM已于今年2月向卖家开放博主营销',
            artTime: 3,
            artUser: '辛巴达电子商务',
            artScan: 25
          },
          {
            artImage: 'http://www.kuajinghelp.com/api/v2/files/1312?&w=285.36&h=163&token=',
            artContent: '外媒:eBay中国卖家勒索英国买家删除差评',
            artTime: 20,
            artUser: '跨境资讯',
            artScan: 26
          },
          {
            artImage: 'http://www.kuajinghelp.com/api/v2/files/925?&w=299.43&h=163&token=',
            artContent: '解密ASO：App Store与Google Play 2019最新推广区别',
            artTime: 20,
            artUser: '最后一个',
            artScan: 27
          }
        ]
      },
      {
        infos: [{
            artImage: 'http://www.kuajinghelp.com/api/v2/files/974?&w=341.92&h=163&token=',
            artContent: 'Joom开放“网红营销”功能，跨境电商将迎来社交时代 最新获悉，跨境电商平台JOOM已于今年2月向卖家开放博主营销',
            artTime: 3,
            artUser: '辛巴达电子商务',
            artScan: 11
          },
          {
            artImage: 'http://www.kuajinghelp.com/api/v2/files/1312?&w=285.36&h=163&token=',
            artContent: '外媒:eBay中国卖家勒索英国买家删除差评',
            artTime: 20,
            artUser: '跨境资讯',
            artScan: 21
          },
          {
            artImage: 'http://www.kuajinghelp.com/api/v2/files/925?&w=299.43&h=163&token=',
            artContent: '解密ASO：App Store与Google Play 2019最新推广区别',
            artTime: 20,
            artUser: '原创',
            artScan: 31
          },
          {
            artImage: 'http://www.kuajinghelp.com/api/v2/files/974?&w=341.92&h=163&token=',
            artContent: 'Joom开放“网红营销”功能，跨境电商将迎来社交时代 最新获悉，跨境电商平台JOOM已于今年2月向卖家开放博主营销',
            artTime: 3,
            artUser: '辛巴达电子商务',
            artScan: 41
          },
          {
            artImage: 'http://www.kuajinghelp.com/api/v2/files/1312?&w=285.36&h=163&token=',
            artContent: '外媒:eBay中国卖家勒索英国买家删除差评',
            artTime: 20,
            artUser: '跨境资讯',
            artScan: 51
          },
          {
            artImage: 'http://www.kuajinghelp.com/api/v2/files/925?&w=299.43&h=163&token=',
            artContent: '解密ASO：App Store与Google Play 2019最新推广区别',
            artTime: 20,
            artUser: '原创',
            artScan: 61
          },
          {
            artImage: 'http://www.kuajinghelp.com/api/v2/files/974?&w=341.92&h=163&token=',
            artContent: 'Joom开放“网红营销”功能，跨境电商将迎来社交时代 最新获悉，跨境电商平台JOOM已于今年2月向卖家开放博主营销',
            artTime: 3,
            artUser: '辛巴达电子商务',
            artScan: 71
          },
          {
            artImage: 'http://www.kuajinghelp.com/api/v2/files/1312?&w=285.36&h=163&token=',
            artContent: '外媒:eBay中国卖家勒索英国买家删除差评',
            artTime: 20,
            artUser: '跨境资讯',
            artScan: 81
          },
          {
            artImage: 'http://www.kuajinghelp.com/api/v2/files/925?&w=299.43&h=163&token=',
            artContent: '解密ASO：App Store与Google Play 2019最新推广区别',
            artTime: 20,
            artUser: '原创',
            artScan: 91
          }
        ]
      },
      {
        infos: [{
            artImage: 'http://www.kuajinghelp.com/api/v2/files/925?&w=299.43&h=163&token=',
            artContent: '解密ASO：App Store与Google Play 2019最新推广区别',
            artTime: 20,
            artUser: '原创',
            artScan: 21
          },
          {
            artImage: 'http://www.kuajinghelp.com/api/v2/files/974?&w=341.92&h=163&token=',
            artContent: 'Joom开放“网红营销”功能，跨境电商将迎来社交时代 最新获悉，跨境电商平台JOOM已于今年2月向卖家开放博主营销',
            artTime: 3,
            artUser: '辛巴达电子商务',
            artScan: 22
          },
          {
            artImage: 'http://www.kuajinghelp.com/api/v2/files/1312?&w=285.36&h=163&token=',
            artContent: '外媒:eBay中国卖家勒索英国买家删除差评',
            artTime: 20,
            artUser: '跨境资讯',
            artScan: 23
          },
          {
            artImage: 'http://www.kuajinghelp.com/api/v2/files/925?&w=299.43&h=163&token=',
            artContent: '解密ASO：App Store与Google Play 2019最新推广区别',
            artTime: 20,
            artUser: '原创',
            artScan: 24
          },
          {
            artImage: 'http://www.kuajinghelp.com/api/v2/files/974?&w=341.92&h=163&token=',
            artContent: 'Joom开放“网红营销”功能，跨境电商将迎来社交时代 最新获悉，跨境电商平台JOOM已于今年2月向卖家开放博主营销',
            artTime: 3,
            artUser: '辛巴达电子商务',
            artScan: 25
          },
          {
            artImage: 'http://www.kuajinghelp.com/api/v2/files/1312?&w=285.36&h=163&token=',
            artContent: '外媒:eBay中国卖家勒索英国买家删除差评',
            artTime: 20,
            artUser: '跨境资讯',
            artScan: 26
          },
          {
            artImage: 'http://www.kuajinghelp.com/api/v2/files/925?&w=299.43&h=163&token=',
            artContent: '解密ASO：App Store与Google Play 2019最新推广区别',
            artTime: 20,
            artUser: '最后一个',
            artScan: 27
          }
        ]
      },
      {
        infos: [{
            artImage: 'http://www.kuajinghelp.com/api/v2/files/1312?&w=285.36&h=163&token=',
            artContent: '外媒:eBay中国卖家勒索英国买家删除差评',
            artTime: 20,
            artUser: '跨境资讯',
            artScan: 31
          },
          {
            artImage: 'http://www.kuajinghelp.com/api/v2/files/925?&w=299.43&h=163&token=',
            artContent: '解密ASO：App Store与Google Play 2019最新推广区别',
            artTime: 20,
            artUser: '原创',
            artScan: 32
          },
          {
            artImage: 'http://www.kuajinghelp.com/api/v2/files/974?&w=341.92&h=163&token=',
            artContent: 'Joom开放“网红营销”功能，跨境电商将迎来社交时代 最新获悉，跨境电商平台JOOM已于今年2月向卖家开放博主营销',
            artTime: 3,
            artUser: '辛巴达电子商务',
            artScan: 33
          },
          {
            artImage: 'http://www.kuajinghelp.com/api/v2/files/1312?&w=285.36&h=163&token=',
            artContent: '外媒:eBay中国卖家勒索英国买家删除差评',
            artTime: 20,
            artUser: '最后2个',
            artScan: 34
          },
          {
            artImage: 'http://www.kuajinghelp.com/api/v2/files/925?&w=299.43&h=163&token=',
            artContent: '解密ASO：App Store与Google Play 2019最新推广区别',
            artTime: 20,
            artUser: '最后一个',
            artScan: 35
          }
        ]
      }
    ]

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
    console.log('点击', e)
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
          winHeight: res.windowHeight * 2 - 110-340
        })
      }
    })

  },

})