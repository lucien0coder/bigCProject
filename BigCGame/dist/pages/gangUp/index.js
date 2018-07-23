'use strict';
var order = ['red', 'yellow', 'blue', 'green', 'red']
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {
    location: [
      {value:'1', title: '三水'},
      {value:'2', title: '禅城'},
      {value:'3', title: '三山'}
    ],
    isSubscribe: true,
    thisPeriod: {
      "key":"2",
      "date": "2018/07"
    }
  }
});
