parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var n="https://mate-academy.github.io/phone-catalogue-static/api/phones.json",t="https://mate-academy.github.io/phone-catalogue-static/api/phones/";function o(n){return fetch("".concat(n)).then(function(n){return n.ok?n.json():setTimeout(function(){return Promise.reject(new Error("".concat(n.status," - ").concat(n.statusText)))},5e3)}).catch(function(n){return window.console.warn(n)})}function e(n){return Promise.all(n.map(function(n){return o("".concat(t).concat(n,".json"))}))}o(n).then(function(n){window.console.log("Phones: ",n);var t=document.createElement("ul");t.innerHTML="\n      ".concat(n.map(function(n){return"\n      <li>\n        ".concat(n.id,"\n      </li>\n      ")}).join(""),"\n    "),document.body.append(t)}),o(n).then(function(n){return n.map(function(n){return n.id})}).then(function(n){return e(n)}).then(function(n){return window.console.log("Details: ",n)});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.f0caef45.js.map