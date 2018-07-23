'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {
    cards: [{
      type: '优惠券',
      name: '经典柠檬茶 特价券',
      number: 'xxxxssssaaa',
      date:'2018-07-31'
    },{
      type: '奖品',
      name: 'iPhone x',
      number: 'xxxxssssaaa',
      date: '2018-12-31'
    },{
      type: '优惠券',
      name: '经典柠檬茶 特价券',
      number: 'xxxxssssaaa',
      date: '2018-08-31'
    },{
      type: '优惠券',
      name: '经典柠檬茶 特价券',
      number: 'xxxxssssaaa',
      date: '2018-08-15'
    },{
      type: '优惠券',
      name: '经典柠檬茶 特价券',
      number: 'xxxxssssaaa',
      date: '2018-07-31'
    }],
    cardName: '',
    cardDate: '',
    cardNO: '',
    maskStatus: 'hide'
  },
  check: function(e) {
    let CN = e.currentTarget.dataset.name;
    let CD = e.currentTarget.dataset.date;
    let CNO = e.currentTarget.dataset.number;
    this.setData({
      maskStatus: 'show',
      cardName: CN,
      cardDate: CD,
      cardNO: CNO
    })
  },
  close: function(e) {
    this.setData({
      maskStatus: 'hide'
    })
  }
});