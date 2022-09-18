const baseUrl = 'https://api-hmugo-web.itheima.net/api/public/v1'
let num = 0
const request = (data: any) => {
  num++;
  return new Promise((resolve, reject) => {
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: baseUrl + data,
      success(res: any) {
        num--;
        resolve(res)
        if (num == 0) {
          wx.hideLoading()
        }
      },
      fial(err: any) {
        reject(err)
      }
    })
  })
}
export {
  request
}