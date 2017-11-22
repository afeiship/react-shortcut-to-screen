!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("classnames"),require("noop"),require("object-assign"),require("prop-types"),require("react")):"function"==typeof define&&define.amd?define(["classnames","noop","object-assign","prop-types","react"],t):"object"==typeof exports?exports.ReactShortcutToScreen=t(require("classnames"),require("noop"),require("object-assign"),require("prop-types"),require("react")):e.ReactShortcutToScreen=t(e.classnames,e.noop,e["object-assign"],e["prop-types"],e.react)}(this,function(e,t,r,n,o){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="/",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),i=n(o);t.default=i.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c,u,p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();r(5);var f=r(10),d=n(f),h=r(9),v=n(h),b=r(6),m=n(b),g=r(7),x=(n(g),r(8)),y=(n(x),u=c=function(e){function t(e){i(this,t);var r=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r._onCLoseClick=function(e){r.setState({visible:!1})},r.state={visible:e.visible},r}return a(t,e),l(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.visible;this.setState({visible:t})}},{key:"render",value:function(){var e=this.props,t=e.className,r=(e.visible,o(e,["className","visible"]));return d.default.createElement("div",p({},r,{hidden:!this.state.visible,className:(0,m.default)("react-shortcut-to-screen",t)}),d.default.createElement("div",{className:"con"},d.default.createElement("div",{className:"ic-bg ic-closebtn",onClick:this._onCLoseClick}),d.default.createElement("div",{className:"tip"},d.default.createElement("img",{src:"//3gimg.qq.com/wap30/infoapp/touch/itravel/images/sc/home.png"}),d.default.createElement("p",null,"先点击",d.default.createElement("span",{className:"ic-bg ic-add"}),d.default.createElement("br",null),'再"添加到主屏幕"')),d.default.createElement("div",{className:"ic-bg ic-arrow"})))}}]),t}(f.PureComponent),c.propTypes={className:v.default.string,visible:v.default.bool},c.defaultProps={visible:!0},u);t.default=y},function(e,t,r){t=e.exports=r(3)(),t.push([e.id,".react-shortcut-to-screen{z-index:100;position:fixed;width:186px;height:76px;bottom:10px;background-color:#666;opacity:.9;border-radius:3px}.react-shortcut-to-screen .con{position:relative;height:76px}.react-shortcut-to-screen .ic-bg{background:transparent url(https://3gimg.qq.com/wap30/infoapp/touch/itravel/images/img/bg-ic.png) no-repeat scroll;background-size:20px auto}.react-shortcut-to-screen .ic-closebtn{position:absolute;right:10px;top:10px;z-index:3;width:11px;height:11px;background-position:0 0}.react-shortcut-to-screen .tip{padding:15px 10px}.react-shortcut-to-screen .tip img{width:45px;height:45px;border-radius:3px;float:left;margin-right:10px}.react-shortcut-to-screen .tip p{color:#fff;position:relative;top:-3px;font-size:14px}.react-shortcut-to-screen .ic-add{display:inline-block;width:16px;height:20px;background-position:left -19px;position:relative;top:3px;margin-left:5px}.react-shortcut-to-screen .ic-arrow{position:absolute;width:20px;height:10px;bottom:-10px;left:83px;background-position:left -44px}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var r=this[t];r[2]?e.push("@media "+r[2]+"{"+r[1]+"}"):e.push(r[1])}return e.join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(n[i]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&n[s[0]]||(r&&!s[2]?s[2]=r:r&&(s[2]="("+s[2]+") and ("+r+")"),e.push(s))}},e}},function(e,t,r){function n(e,t){for(var r=0;r<e.length;r++){var n=e[r],o=d[n.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](n.parts[i]);for(;i<n.parts.length;i++)o.parts.push(u(n.parts[i],t))}else{for(var s=[],i=0;i<n.parts.length;i++)s.push(u(n.parts[i],t));d[n.id]={id:n.id,refs:1,parts:s}}}}function o(e){for(var t=[],r={},n=0;n<e.length;n++){var o=e[n],i=o[0],s=o[1],a=o[2],c=o[3],u={css:s,media:a,sourceMap:c};r[i]?r[i].parts.push(u):t.push(r[i]={id:i,parts:[u]})}return t}function i(e,t){var r=b(),n=x[x.length-1];if("top"===e.insertAt)n?n.nextSibling?r.insertBefore(t,n.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),x.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");r.appendChild(t)}}function s(e){e.parentNode.removeChild(e);var t=x.indexOf(e);t>=0&&x.splice(t,1)}function a(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function c(e){var t=document.createElement("link");return t.rel="stylesheet",i(e,t),t}function u(e,t){var r,n,o;if(t.singleton){var i=g++;r=m||(m=a(t)),n=p.bind(null,r,i,!1),o=p.bind(null,r,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=c(t),n=f.bind(null,r),o=function(){s(r),r.href&&URL.revokeObjectURL(r.href)}):(r=a(t),n=l.bind(null,r),o=function(){s(r)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}function p(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=y(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function l(e,t){var r=t.css,n=t.media;if(n&&e.setAttribute("media",n),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}function f(e,t){var r=t.css,n=t.sourceMap;n&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var o=new Blob([r],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(o),i&&URL.revokeObjectURL(i)}var d={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},v=h(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),b=h(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,g=0,x=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=v()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var r=o(e);return n(r,t),function(e){for(var i=[],s=0;s<r.length;s++){var a=r[s],c=d[a.id];c.refs--,i.push(c)}if(e){var u=o(e);n(u,t)}for(var s=0;s<i.length;s++){var c=i[s];if(0===c.refs){for(var p=0;p<c.parts.length;p++)c.parts[p]();delete d[c.id]}}}};var y=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},function(e,t,r){var n=r(2);"string"==typeof n&&(n=[[e.id,n,""]]);r(4)(n,{});n.locals&&(e.exports=n.locals)},function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=n},function(e,t){e.exports=o}])});
//# sourceMappingURL=react-shortcut-to-screen.js.map