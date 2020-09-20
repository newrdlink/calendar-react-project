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
}

const api = new Api();

export default api;
