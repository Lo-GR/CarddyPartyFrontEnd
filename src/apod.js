export default class APIReturn{
  static testAPI (){
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      const api = `http://localhost:5003/`;
      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", api, true);
      request.send();
    });
  }
}