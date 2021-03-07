/**
 * 把微信的toast封装成插件
 */

const MyToast = {};

MyToast.install = (Vue) => {

  Vue.prototype.$toast = (msg) => {
    wx.showToast({
      title: msg,
      icon: 'none',
      duration: 1500,
      mask: true
    });
  }

};

export default MyToast
