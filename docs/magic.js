(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function b(a){return l(a)||c(a)||j()}function c(a){if(Symbol.iterator in Object(a)||Object.prototype.toString.call(a)==="[object Arguments]")return Array.from(a)}function e(a){for(var b=1;b<arguments.length;b++){var c=arguments[b]==null?{}:arguments[b];var d=Object.keys(c);typeof Object.getOwnPropertySymbols==="function"&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){f(a,b,c[b])})}return a}function f(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function g(a,b){return l(a)||k(a,b)||j()}function j(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function k(a,b){var c=[];var d=!0;var e=!1;var f=undefined;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{!d&&h["return"]!=null&&h["return"]()}finally{if(e)throw f}}return c}function l(a){if(Array.isArray(a))return a}function m(a,b){if(a==null)return{};var c=n(a,b);var d,e;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(e=0;e<f.length;e++)d=f[e],!(b.indexOf(d)>=0)&&Object.prototype.propertyIsEnumerable.call(a,d)&&(c[d]=a[d])}return c}function n(a,b){if(a==null)return{};var c={};var d=Object.keys(a);var e,f;for(f=0;f<d.length;f++)e=d[f],!(b.indexOf(e)>=0)&&(c[e]=a[e]);return c}function o(a){return o=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function o(a){return typeof a}:function o(a){return a&&typeof Symbol==="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},o(a)}var q=require("hyperapp"),r=q.app,s=q.h;var h=function(a){return function(){var b=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var d=!!(arguments.length>1&&arguments[1]!==undefined)&&arguments[1];var e=function is(a){for(var b=arguments.length,c=Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return c.some(function(b){return b===o(a)})};return!d&&(e(b,"string","number","function")||Array.isArray(b)?(d=b,b={}):e(b.View,"function")&&(d=b.View,b={})),s(a,b,d)}};var t=h("a");var a=h("text");var u=function Link(a,b){var c=a.to,d=m(a,["to"]);return function(a,f){var g=d.href,h=d.text,i=d.nofollow,j=d.noreferrer,k=d.onclick,l=m(d,["href","text","nofollow","noreferrer","onclick"]);return c=c||g||"",l.href=c,c&&c.startsWith("/")&&!c.startsWith("//")?l.onclick=function(a){k&&k({e:a,to:c}),f.go({e:a,to:c})}:(l.target="_blank",l.rel="noopener",i&&(l.rel+=" nofollow"),j&&(l.rel+=" noreferrer")),t(l,[h,b])}};var v=h("code");var w=h("i");var x=h("span");var y=h("tr");var i=h("div");var z=h("h2");var A=h("h3");var B=h("p");var p=h("button");var C=h("pre");var D=function Pre(a){var b=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"";return function(c,d){return i({"class":"Pre ".concat(b||c.pre.theme)},[i({"class":"menu"},[!b&&p({onclick:d.pre.changeTheme},c.pre.theme==="dark"?"light":"dark"),p({onclick:function onclick(){return d.pre.clip(a)}},"copy")]),C(LIB.PRE.format(a))])}};var E=h("img");var F=function Img(a){return function(){if(typeof a==="string"&&(a={src:a}),!!a.src)return!a.alt&&(a.title?a.alt=a.title:(a.role="presentation",a.alt="")),E(a)}};var G=h("li");var H=h("ul");var I=function GitBadges(a){if(typeof a==="string")a={project:a};else if(!a.project)return;var b=a,c=b.project,d=c!==void 0&&c,e=b.branch,f=e===void 0?"master":e;var h=[["npm",function(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:d;return a&&{to:"https://www.npmjs.com/package/@".concat(a),src:"https://img.shields.io/npm/v/@".concat(a,".svg")}}],["travis",function(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:d;return a&&{to:"https://travis-ci.com/".concat(a),src:"https://travis-ci.com/".concat(a,".svg?branch=").concat(f)}}],["appveyor",function(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:d;if(a){var b=a.split("/"),c=g(b,2),e=c[0],h=c[1];return e=e.replace(/-/g,""),{to:"https://ci.appveyor.com/project/".concat(e,"/").concat(h,"/branch/").concat(f),src:"https://img.shields.io/appveyor/ci/".concat(e,"/").concat(h,"/").concat(f,".svg")}}}],["coveralls",function(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:d;return a&&{to:"https://coveralls.io/github/".concat(a),src:"https://coveralls.io/repos/github/".concat(a,"/badge.svg")}}],["greenkeeper",function(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:d;return a&&{to:"https://greenkeeper.io",src:"https://badges.greenkeeper.io/".concat(a,".svg")}}],["snyk",function(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:d;return a&&{to:"https://snyk.io/test/github/".concat(a),src:"https://snyk.io/test/github/".concat(a,"/badge.svg")}}]].map(function(b){var c=g(b,2),d=c[0],e=c[1];return e(a[d])}).filter(function(b){return b.to&&b.src});return h.length?H({"class":"GitBadges"},h.map(function(a){var b=a.to,c=a.src;return G([u({to:b},F({src:c}))])})):void 0};var J={View:function View(){return K({"class":"main"},[i({"class":"wrapper"},["made with a few bits of ",u({to:"https://github.com/magic/core",target:"_blank",rel:"noopener"},"magic")])])}};var K=h("footer");var L={View:function View(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"menu";return function(b){typeof a==="string"&&(a={name:a});var c=a,d=c.name,f=d===void 0?"menu":d,g=c["class"],h=g===void 0?"Menu":g,i=c.items,j=i===void 0?[]:i,k=c.collapse;var m=b.url,n=b[f],o=n===void 0?[]:n;if(j=j.length?j:o,!!j.length)return b.hash&&(m+="#".concat(b.hash)),N({"class":h.includes("Menu")?h:"Menu ".concat(h)},H(j.map(function(a){return M(e({},a,{url:m,collapse:k===void 0||k}))})))}}};var M=function MenuItem(a){var b=a.url,c=a.text,d=a.items,f=d===void 0?[]:d,g=a.collapse,h=m(a,["url","text","items","collapse"]);if(h.to||c){var i={};h.to===b&&(i["class"]="active");var j=[];return f&&(b.startsWith(h.to)||!g)&&(j=H(f.map(function(a){return M(e({url:b,collapse:g},a))}))),G(i,[h.to?u(h,c):x(h,c),j])}};var N=h("nav");var O=h("header");var P=function PageHead(a){return(a.logo||a.menu||a.tagline)&&O({"class":"main"},[(a.logo||a.logotext)&&u({to:"/json/","class":"logo-wrapper"},[a.logo&&F({"class":"logo",src:a.logo}),a.logotext&&x({"class":"logo-text"},a.logotext)]),L.View])};var Q={};(function(){var a="\nlet this long package float\ngoto private class if short\nwhile protected with debugger case\ncontinue volatile interface\n\ninstanceof super synchronized throw\nextends final export throws\ntry import double enum\n\nboolean abstract function\nimplements typeof transient break\ndefault do static void\n\nint new async native switch\nelse delete null public var\nawait byte finally catch\nin return for get const char\nmodule exports require\n".trim().split(/\b/g).map(function(a){return a.trim()});var c="\nArray Object String Number RegExp Null Symbol\nSet WeakSet Map WeakMap\nsetInterval setTimeout\nPromise\nJSON\nInt8Array Uint8Array Uint8ClampedArray\nInt16Array Uint16Array\nInt32Array Uint32Array\nFloat32Array Float64Array\n".trim().split(/\b/g).map(function(a){return a.trim()});var d=["true","false"];var e=function wrapWords(b){if(typeof b!=="string")return b;var e=b.split(/\b/);return b=e.map(function(b,f){if(b!==""){var g="";return b==="state"?g="state":b==="actions"?g="actions":e[f+1]&&e[f+1].includes(":")?g="colon":a.includes(b)?g="keyword":c.includes(b)?g="builtin":d.includes(b)?g="boolean":e[f-1]==="."?g="property":e[f+1]==="."&&(g="object"),g&&(b=x({"class":g},b)),b}}),b};var f=/([a-zA-Z0-9:+._-]+@[a-zA-Z0-9._-]+)/g;var g=function wrapEmails(a){return a.split(f).map(function(a){if(f.test(a)){var b=a.startsWith("mailto:")?a:"mailto:".concat(a);var c=a.replace("mailto:","");return u({"class":"email",to:b},c)}return e(a)})};var h=function wrapComments(a,b){return[l(a.substring(0,b)),l(a.substring(b))]};var i=function wrapLinks(a){return a.split(/(?= )/).map(function(a){return a.includes("://")?u({to:a},a):l(a)})};var j=function wrapUrls(a){return a.includes("://")&&!a.includes("@")?i(a):g(a)};var k=function wrapStrings(a){var c=a.replace(/"/g,"'");var d=c.split("'"),f=b(d),g=f[0],h=f[1],i=f.slice(2);var k=i;k.length===1?k=l(k[0]):k.length>1&&(k=l(k.join("'")));var m=[];return m=typeof h==="undefined"?e(a):[e(g),x({"class":"string"},["'",j(h),"'"]),k],m};var l=function wordsByLine(a){var b=a.indexOf("//");var c=a.trim();if(c.startsWith("//")){var d=a.search(/\S|$/);var e="";for(var f=0;f<d;f++)e+=" ";return!c.startsWith("// ")&&(a="".concat(e,"// ").concat(c.substr(2))),x({"class":"comment"},[e,"// ",l(c.substring(3))])}return b>-1&&a[b-1]!==":"?h(a,b):a.indexOf("://")>2?i(a):a.indexOf("@")&&a.includes(".")&&!a.trim().includes(" ")?g(a):k(a)};var m=function wrapLine(a){return v({"class":"line"},l(a))};Q.PRE={keywords:a,builtins:c,format:function format(a){return a.trim().split("\n").map(m)},wordsByLine:l,wrapWords:e}})(),function(){var a=function tryCatch(a){return function(){try{var b=a.apply(void 0,arguments);if(b==="[]"&&Object.keys(arguments.length<=0?undefined:arguments[0]).length)throw new Error("Serialization error");return b}catch(a){return a}}};Q.JSON={parse:a(JSON.parse),stringify:a(JSON.stringify)}}(),window.LIB=Q;var R={"/json/":function json(){return[z("@magic-client/json"),B(["this is the ",u({to:"https://github.com/magic-client"},"@magic-client")," json library. it returns errors instead of throwing them"," and catches (some) malformed objects when stringifying."]),I({project:"magic-client/json",appveyor:"jaeh/json"}),A({id:"installation"},"installation:"),B(["installation is done using npm. "," for now, all magic modules are living on github and not on npm."]),B("note the missing @ before magic-client."),B("this is how we install npm modules from github."),D("npm install magic-client/json"),A({id:"require"},"require:"),B("first add the client lib to the app.lib, note that we do not actually require the library."),D("\n// /app.js\nmodule.exports = {\n  //...other app exports\n  lib: {\n    JSON: '@magic-client/json',\n  },\n}"),A({id:"usage"},"usage:"),B("in a page/component, just use the LIB.JSON functions"),D("module.exports = () => Pre(LIB.JSON.stringify({ some: { object: ['with', 'values'] } }))"),B("renders"),D(LIB.JSON.stringify({some:{object:["with","values"]}})),A({id:"caveat"},"caveat"),B(["only use this library without checking it's return value"," if you know that your input json is not malformed."," in all other cases the following pattern should be employed (and enhanced with custom error messages)."]),D("\nmodule.exports = {\n  ViewStringify: unsafe => {\n    const result = LIB.JSON.stringify(unsafe)\n    return div([result.message ? result.message : result])\n  },\n  ViewParse: unsafe => {\n    const result = LIB.JSON.parse(unsafe)\n    // in this case we can not check for .message,\n    // since unsafe might have a .message key after parsing\n    div([result instanceof Error ? result.message : result])\n  },\n}\n"),A({id:"source"},"source"),B(["the source for this page is in the ",u({to:"https://github.com/magic-client/json/tree/master/example"},"example directory")," and gets built and published to github using ",u({to:"https://github.com/magic/core"},"@magic/core")])]},"/404/":function _(){return i("404 - not found")}};var S={"url":"/json/","root":"/json/",logo:"/json/img/logo.png","logotext":"json","menu":[{to:"/json/#installation","text":"installation"},{to:"/json/#require","text":"require"},{to:"/json/#usage","text":"usage"},{to:"/json/#caveat","text":"caveat"},{to:"/json/#source","text":"source"}],"pre":{"theme":"light"}};S.url=window.location.pathname,S.root="/json/";var T={"go":function go(a){return function(b){if(typeof window==="undefined"||!window.history)return!0;var c=a.to;var d=a.e?a.e:a;d.preventDefault();var e=b.url;var f=e.split("#"),h=g(f,2),i=h[0],j=h[1],k=j===void 0?"":j;if(c){e=c.replace(window.location.origin,"");var l=e.split("#"),m=g(l,2),n=m[0],o=m[1],p=o===void 0?"":o;i=n,k=p&&p!=="/"?p:"";var q=b.hash?"#".concat(b.hash):window.location.hash;var r=b.url+q;(e!==r||k!==q)&&(window.history&&window.history.pushState({uri:i},"",e),!k&&window.scrollTo(0,0))}else i=d.state?d.state.uri:"/";if(window.location&&k){var s=document.getElementById(k);if(s){var t=s.offsetTop;window.scrollTo(0,t),window.location.hash=k}}return{url:i,hash:k,prev:b.url}}},"pre":{"changeTheme":function changeTheme(){return function(a){return{theme:a.theme==="dark"?"light":"dark"}}},"clip":function clip(a){if(typeof document!=="undefined"&&typeof document.execCommand==="function"){var b=document.createElement("textarea");b.id="copy",b.innerHTML=a,document.body.appendChild(b);var c=document.getElementById("copy");c.select(),document.execCommand("copy"),document.body.removeChild(c)}}}};var U=function view(a,b){var c=R[a.url]?a.url:"/404/";var d=R[c];if(a.pages){var e=a.pages[c];for(var f in e)a[f]=e[f]}if(b.pages){var g=b.pages[c];for(var h in g)b[h]=g[h]}return i({"class":"wrapper",oncreate:function oncreate(){typeof window!=="undefined"&&b.go&&window.addEventListener("popstate",b.go)}},[P,d?i({"class":"page"},d(a,b)):i({"class":"page"},"404 - not found"),J.View])};var V=document;var d=V.getElementById("magic");!d&&(d=V.createElement("div"),d.id="magic",V.body.appendChild(d)),r(S,T,U,d);
},{"hyperapp":2}],2:[function(require,module,exports){
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(e.hyperapp={})}(this,function(e){"use strict";e.h=function(e,n){for(var t=[],r=[],o=arguments.length;2<o--;)t.push(arguments[o]);for(;t.length;){var l=t.pop();if(l&&l.pop)for(o=l.length;o--;)t.push(l[o]);else null!=l&&!0!==l&&!1!==l&&r.push(l)}return"function"==typeof e?e(n||{},r):{nodeName:e,attributes:n||{},children:r,key:n&&n.key}},e.app=function(e,n,t,r){var o,l=[].map,u=r&&r.children[0]||null,i=u&&function n(e){return{nodeName:e.nodeName.toLowerCase(),attributes:{},children:l.call(e.childNodes,function(e){return 3===e.nodeType?e.nodeValue:n(e)})}}(u),f=[],m=!0,a=v(e),c=function e(r,o,l){for(var n in l)"function"==typeof l[n]?function(e,t){l[e]=function(e){var n=t(e);return"function"==typeof n&&(n=n(h(r,a),l)),n&&n!==(o=h(r,a))&&!n.then&&d(a=p(r,v(o,n),a)),n}}(n,l[n]):e(r.concat(n),o[n]=v(o[n]),l[n]=v(l[n]));return l}([],a,v(n));return d(),c;function g(e){return"function"==typeof e?g(e(a,c)):null!=e?e:""}function s(){o=!o;var e=g(t);for(r&&!o&&(u=function e(n,t,r,o,l){if(o===r);else if(null==r||r.nodeName!==o.nodeName){var u=k(o,l);n.insertBefore(u,t),null!=r&&T(n,t,r),t=u}else if(null==r.nodeName)t.nodeValue=o;else{x(t,r.attributes,o.attributes,l=l||"svg"===o.nodeName);for(var i={},f={},a=[],c=r.children,s=o.children,d=0;d<c.length;d++){a[d]=t.childNodes[d];var v=N(c[d]);null!=v&&(i[v]=[a[d],c[d]])}for(var d=0,p=0;p<s.length;){var v=N(c[d]),h=N(s[p]=g(s[p]));if(f[v])d++;else if(null==h||h!==N(c[d+1]))if(null==h||m)null==v&&(e(t,a[d],c[d],s[p],l),p++),d++;else{var y=i[h]||[];v===h?(e(t,y[0],y[1],s[p],l),d++):y[0]?e(t,t.insertBefore(y[0],a[d]),y[1],s[p],l):e(t,a[d],null,s[p],l),f[h]=s[p],p++}else null==v&&T(t,a[d],c[d]),d++}for(;d<c.length;)null==N(c[d])&&T(t,a[d],c[d]),d++;for(var d in i)f[d]||T(t,i[d][0],i[d][1])}return t}(r,u,i,i=e)),m=!1;f.length;)f.pop()()}function d(){o||(o=!0,setTimeout(s))}function v(e,n){var t={};for(var r in e)t[r]=e[r];for(var r in n)t[r]=n[r];return t}function p(e,n,t){var r={};return e.length?(r[e[0]]=1<e.length?p(e.slice(1),n,t[e[0]]):n,v(t,r)):n}function h(e,n){for(var t=0;t<e.length;)n=n[e[t++]];return n}function N(e){return e?e.key:null}function y(e){return e.currentTarget.events[e.type](e)}function b(e,n,t,r,o){if("key"===n);else if("style"===n)if("string"==typeof t)e.style.cssText=t;else for(var l in"string"==typeof r&&(r=e.style.cssText=""),v(r,t)){var u=null==t||null==t[l]?"":t[l];"-"===l[0]?e.style.setProperty(l,u):e.style[l]=u}else"o"===n[0]&&"n"===n[1]?(n=n.slice(2),e.events?r||(r=e.events[n]):e.events={},(e.events[n]=t)?r||e.addEventListener(n,y):e.removeEventListener(n,y)):n in e&&"list"!==n&&"type"!==n&&"draggable"!==n&&"spellcheck"!==n&&"translate"!==n&&!o?e[n]=null==t?"":t:null!=t&&!1!==t&&e.setAttribute(n,t),null!=t&&!1!==t||e.removeAttribute(n)}function k(e,n){var t="string"==typeof e||"number"==typeof e?document.createTextNode(e):(n=n||"svg"===e.nodeName)?document.createElementNS("http://www.w3.org/2000/svg",e.nodeName):document.createElement(e.nodeName),r=e.attributes;if(r){r.oncreate&&f.push(function(){r.oncreate(t)});for(var o=0;o<e.children.length;o++)t.appendChild(k(e.children[o]=g(e.children[o]),n));for(var l in r)b(t,l,r[l],null,n)}return t}function x(e,n,t,r){for(var o in v(n,t))t[o]!==("value"===o||"checked"===o?e[o]:n[o])&&b(e,o,t[o],n[o],r);var l=m?t.oncreate:t.onupdate;l&&f.push(function(){l(e,n)})}function T(e,n,t){function r(){e.removeChild(function e(n,t){var r=t.attributes;if(r){for(var o=0;o<t.children.length;o++)e(n.childNodes[o],t.children[o]);r.ondestroy&&r.ondestroy(n)}return n}(n,t))}var o=t.attributes&&t.attributes.onremove;o?o(n,r):r()}}});

},{}]},{},[1]);
