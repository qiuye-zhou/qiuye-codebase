// pages/home/home.ts
import { oneloding } from './apihome'
Page({
  wxNavAction(e: any) {
    // console.log("/pages/goods_list/goods_list"+e.target.dataset.src.slice(17));
    wx.navigateTo({
      url: "/pages/goods_list/goods_list"+e.target.dataset.src.slice(17)
    })
  },
  atabr() {
    wx.switchTab({
      url: '/pages/cate/cate'
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    background: [],
    backicon: [],
    homebot: [],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    oneloding(this)
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
    return {
      title: '首页',
      path: 'pages/home/home'
    }
  },
})