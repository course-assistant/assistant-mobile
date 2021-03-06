import Fly from 'flyio/dist/npm/wx'
import qs from 'qs';


const fly = new Fly;

const MyHttp = {};

// fly.config.headers = {
//   token: wx.getStorageSync('hncj_assistant_wx_user_token'),
// }

//设置超时
fly.config.timeout = 30000;

//设置请求基地址
// fly.config.baseURL = "http://127.0.0.1:8686/"
fly.config.baseURL = "http://123.56.156.212:8686/"


MyHttp.install = (Vue) => {

  Vue.prototype.$get = (path, params) => {

    // 获取token
    let token = wx.getStorageSync('hncj_assistant_wx_user_token');

    fly.config.headers = {
      token: token
    }

    return new Promise((resolve, reject) => {
      fly.get(path, params).then(res => {
        if (res.data.code === 200) {
          resolve(res.data);
        } else if (res.data.code === 400) {
          reject(res.data.msg);
        }
      }).catch(err => {
        reject('服务器异常');
      });
    });
  }


  Vue.prototype.$post = (path, params) => {
    // 获取token
    let token = wx.getStorageSync('hncj_assistant_wx_user_token');

    fly.config.headers = {
      token: token
    }

    return new Promise((resolve, reject) => {
      fly.post(path, qs.stringify(params)).then(res => {
        if (res.data.code === 200) {
          resolve(res.data);
        } else if (res.data.code === 400) {
          reject(res.data.msg);
        }
      }).catch(err => {
        reject('服务器异常');
      });
    });
  }


  // async/await 错误处理
  Vue.prototype.$awaitWrap = (promise) => {
    return promise
      .then(data => [data, null])
      .catch(err => [null, err]);
  }

};

export default MyHttp
