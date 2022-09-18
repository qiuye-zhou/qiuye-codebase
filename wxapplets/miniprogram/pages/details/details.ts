// pages/details/details.ts
import { request } from '../../request/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    details: [],
    iconlist: [
      {
        url: '../../image/detail01.png',
        text: '客服'
      },
      {
        url: '../../image/detail02.png',
        text: '分享'
      },
      {
        url: '../../image/detail03.png',
        text: '购物车'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options: any) {
    request('/goods/detail?goods_id=' + options.goods_id).then((res: any) => {
      this.setData({
        details: res.data.message
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