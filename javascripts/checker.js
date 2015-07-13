// checker.js
// this file will run in newly opened page.
console.log("checker loaded");
window.myChecker = {
  listeners: [],

  done: function (callback) {
    if (this.result) callback(this.result);
    else this.listeners.push(callback);
  },

  start: function () {
  	var href = [window.location.protocol, '//', window.location.host, window.location.pathname].join('');
    this.result = {url: href, title: document.title, host: window.location.host, prev: document.referrer};
    this.listeners.forEach(function (fn) { fn(this.result); });
  }
};

myChecker.start();