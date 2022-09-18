// pages/goods_list/goods_list.ts
import { request } from '../../request/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shoplist: [],
    oldlist: [],
    topall: ['综合', '价格'],
    acindex: 0
  },
  showl(e: any) {
    this.setData({
      acindex: e.currentTarget.dataset.index
    })
    if (this.data.acindex == 0) {
      this.setData({
        shoplist: this.data.oldlist
      })
    } else {
      let newlist: any = this.data.shoplist.goods
      newlist.sort((a: any,b: any) => a.goods_price - b.goods_price)
      this.setData({
        shoplist: this.data.shoplist
      })
    }
  },
  details(e: any){
    wx.navigateTo({
      url: "/pages/details/details?goods_id="+e.currentTarget.dataset.id
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.api(options)
  },
  api(options: any) {
    request('/goods/search?query=' + options.query).then((res: any) => {
      const data = res.data.message
      data.goods.forEach((e: any) => {
        e.goods_name = e.goods_name.length > 30 ? e.goods_name.slice(0, 30) + '...' : e.goods_name
      });
      this.setData({
        shoplist: res.data.message,
        oldlist: JSON.parse(JSON.stringify(res.data.message))
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