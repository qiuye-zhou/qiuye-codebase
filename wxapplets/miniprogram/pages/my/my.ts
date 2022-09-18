// pages/my/my.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    numlist: [{
      num: 0,
      name: '收藏的店铺'
    },
    {
      num: 0,
      name: '收藏的商品'
    },
    {
      num: 0,
      name: '关注的商品'
    },
    {
      num: 0,
      name: '我的足迹'
    }],
    orderimg: [{
      url: '../../image/twoList01.png',
      name: '全部订单'
    },
    {
      url: '../../image/twoList02.png',
      name: '待付款'
    },
    {
      url: '../../image/twoList03.png',
      name: '待收货'
    },
    {
      url: '../../image/twoList04.png',
      name: '退货/退款'
    }],
    btm: [
      '联系客服',
      '意见反馈',
      '关于我们',
      '设置'
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})