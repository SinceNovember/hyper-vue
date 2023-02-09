import axios from 'axios'
import store from '@/store'
import { getToken } from '@/utils/auth'
import { Message, Modal } from 'view-design'


let config = {
  baseURL: "/api",//配置生产环境路径和开发路径
  withCredentials: true, // 允许跨域
};
axios.defaults.baseURL = config.baseURL
//配置请求的参数
axios.interceptors.request.use(config => {
  //配置token
  config.headers['Hyper-Token'] = `Bearer ${getToken()}`

  return config
}, error => {
  console.log(error) // for debug
})
//配置响应的参数
axios.interceptors.response.use(response => {
  const res = response.data
  console.log(res)
  if (res.code != 200) {
    Message.error(res.msg)

    //当token过期或者不存在时，后台返回状态码401，此时页面跳转到登录页面  
    if (res.code === 401) {
      Modal.confirm({
        title: '会话过期',
        content: '<p>您的会话已过期，是否重新登陆？</p>',
        okText: '确认',
        cancelText: '取消',
        onOk: () => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        }
      });
      // //发送用户退出登陆得消息
      // sendLogoutMsg()
      // // to re-login
      // MessageBox.confirm('您的会话已过期，是否重新登陆？', '重新登陆', {
      //   confirmButtonText: '重新登陆',
      //   cancelButtonText: '取消',
      //   type: 'warning'
      // }).then(() => {
      // store.dispatch('user/resetToken').then(() => {
      //   location.reload()
      // })
      // })
    }
    return Promise.reject(new Error(res.msg || 'Error'))
  } else {
    return res
  }

}, error => {
  console.log('err' + error) // for debug
  this.$Message.error(error.message)

  // Message({
  //   message: error.message,
  //   type: 'error',
  //   duration: 5 * 1000
  // })
  return Promise.reject(error)
});

export default axios
