parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){var n=e.cloneNode(!1),o=r(e);o.sort(function(e,r){return t(r)-t(e)});for(var a=0;a<o.length;a++)n.append(o[a]);e.replaceWith(n)}function t(e){return parseFloat(e.dataset.salary.replace(/\$|,/g,""))}function r(e){for(var t=[],r=e.childNodes.length;r>=0;r--)e.childNodes[r]&&1===e.childNodes[r].nodeType&&t.push(e.childNodes[r]);return t}function n(e){for(var n=r(e),o=[],a=0;a<n.length;a++){var l={name:n[a].innerText,position:n[a].dataset.position,salary:t(n[a]),age:parseFloat(n[a].dataset.age)};o.push(l)}return o}e(document.querySelector("ul")),n(document.querySelector("ul"));
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.337b0995.js.map