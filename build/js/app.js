(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Haiku = exports.Haiku = function () {
  function Haiku(lineOne, lineTwo, lineThree) {
    _classCallCheck(this, Haiku);

    this.lineOne = lineOne;
    this.lineTwo = lineTwo;
    this.lineThree = lineThree;
  }

  _createClass(Haiku, [{
    key: "readingHaiku",
    value: function readingHaiku() {
      debugger;
      var vowels = ["a", "e", "i", "o", "u"];
      var diphthong = ["ai", "au", "ay", "ee", "ea", "ie", "ei", "oo", "ow", "oe", "oa", "oi", "ou", "ue"];

      console.log("something");
      console.log(lineTwo);

      var lineOneSplit = this.lineOne.split(" ");
      var lineTwoSplit = this.lineTwo.split(" ");
      var lineThreeSplit = this.lineThree.split(" ");
      // let lineTwoSplit = lineTwo.split(" ");
      // let lineThreeSplit = lineThree.split(" ");
      var splitWords = [];

      console.log(lineOneSplit[1]);

      for (var i = 0; i < lineOneSplit.length; i++) {
        var charOne = lineOneSplit[i].split('');
        console.log(charOne);
      }

      for (var i = 0; i < lineTwoSplit.length; i++) {
        var charTwo = lineTwoSplit[i].split('');
        console.log(charTwo);
      }

      for (var i = 0; i < lineThreeSplit.length; i++) {
        var charThree = lineThreeSplit[i].split('');
        console.log(charThree);
      }
    }
  }]);

  return Haiku;
}();

;

},{}],2:[function(require,module,exports){
"use strict";

var _haiku = require("./../js/haiku.js");

$(document).ready(function () {
  $("#haikuForm").submit(function (event) {
    event.preventDefault();

    var lineOne = $("#lineOne").val();
    var lineTwo = $("#lineTwo").val();
    var lineThree = $("#lineThree").val();
    debugger;
    var readHaiku = new _haiku.Haiku(lineOne, lineTwo, lineThree);
    readHaiku.readingHaiku();
    $("#result").append(readHaiku);
  });
});

$(document).ready(function () {
  $("#nameForm").submit(function (event) {
    event.preventDefault();
    var name = $('#name').val();
    $('#nameForm').hide();
    $('#nameResult').prepend('<p>Thank you, ' + name + ' , now enter your Haiku to see if it checks out!!</p>');
  });
});

},{"./../js/haiku.js":1}]},{},[2]);
