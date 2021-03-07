/**
 * 把微信的toast封装成插件
 */

const MyUtil = {};

MyUtil.install = (Vue) => {

  // toast
  Vue.prototype.$toast = (msg) => {
    wx.showToast({
      title: msg,
      icon: 'none',
      duration: 1500,
      mask: true
    });
  }

  // 退出登录
  Vue.prototype.$logout = () => {
    // 清空本地的缓存，并跳转到登录页面
    wx.redirectTo({
      url: '/pages/login/main'
    });
  }
};

export default MyUtil
