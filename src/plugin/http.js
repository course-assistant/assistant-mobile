import Fly from 'flyio/dist/npm/wx'

// const config = {

// }

const fly = new Fly;

// const flyHttp = {

//   get: (res) => {
//     console.log(res);
//   }

// };

// export default flyHttp;

const MyHttp = {};

fly.config.headers = {
  xx: 5,
  bb: 6,
  dd: 7
}

//设置超时
fly.config.timeout = 30000;

//设置请求基地址
fly.config.baseURL = "http://127.0.0.1:8866/"

//设置公共的Get参数
// fly.config.params = {
//   "token": "testtoken"
// };

MyHttp.install = (Vue) => {

  Vue.prototype.$get = (path, params) => {
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
    return new Promise((resolve, reject) => {
      fly.post(path, params).then(res => {
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

};

export default MyHttp
