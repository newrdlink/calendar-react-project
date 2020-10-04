import React from "react";

class Api extends React.Component {
  //   constructor() {
  //     super();
  //   }
  getAppStartInfo() {
    return Promise.all([this.getUserData()]);
  }

  getUserData() {
    return fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Извините, ошибка: ${res.status}`);
    });
  }
  getNasaData() {
    return fetch(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=s1oWanfmfBm7knYE9gFtcB7PjliOiATRtCGVOb6H",
      {
        method: "GET",
      }
    ).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Извините, ошибка: ${res.status}`);
    });
  }
}

const api = new Api();

export default api;
