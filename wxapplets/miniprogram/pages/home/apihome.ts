import { request } from '../../request/request'
const oneloding = (that: any) => {
  request('/home/swiperdata').then((res: any) => {
    that.setData({
      background: res.data.message
    })
  })
  request('/home/catitems').then((res: any) => {
    that.setData({
      backicon: res.data.message
    })
  })
  request('/home/floordata').then((res: any) => {
    that.setData({
      homebot: res.data.message
    })
  })
}
export {
  oneloding
}