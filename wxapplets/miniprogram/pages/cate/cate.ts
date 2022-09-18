// pages/cate/cate.ts
import { request } from '../../request/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    leftlist: [],
    rightlist: [],
    active: 0
  },
  tog(e: any) {
    this.setData({
      active: e.currentTarget.dataset.index
    })
    this.setData({
      rightlist: (this.data.leftlist[this.data.active] as string[]).children
    })
  },
  clicklist(e: any) {
    wx.navigateTo({
      url: "/pages/goods_list/goods_list?query="+e.currentTarget.dataset.name
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    request('/categories').then((res: any) => {
      this.setData({
        leftlist: res.data.message,
        rightlist: res.data.message[0].children
      })
    })
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