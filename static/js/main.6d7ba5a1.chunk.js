(this["webpackJsonptone-test"]=this["webpackJsonptone-test"]||[]).push([[0],{65:function(e,t,n){},697:function(e,t,n){e.exports=n(711)},711:function(e,t,n){"use strict";n.r(t);var a=n(10),l=n.n(a),r=n(536),c=n.n(r),u=(n(65),n(13)),o=n(56),i=function(e){e.frequency;var t=e.digit,n=e.active;return l.a.createElement("span",{className:n?"active":null},t)},m=function(){var e=function(e,t){for(var n=[],a=0;a<10;a++)0===a?n.push(e):n.push(n[a-1]+t);return n}(432,48),t={pi:Math.PI,phi:1.618033988749895},n=Object(a.useState)([]),r=Object(u.a)(n,2),c=r[0],m=r[1],s=Object(a.useState)("pi"),f=Object(u.a)(s,2),p=f[0],E=f[1],b=Object(a.useState)(!1),h=Object(u.a)(b,2),g=h[0],y=h[1],d=Object(a.useState)(),v=Object(u.a)(d,2),j=v[0],O=v[1],k=Object(a.useState)(null),S=Object(u.a)(k,2),q=S[0],w=S[1],I=(Object(a.useRef)(),(new o.b).toDestination());Object(a.useEffect)((function(){w((function(e){return null===e?0:e+1}))}),[g]),Object(a.useEffect)((function(){m(H(t[p]))}),[p]);var z=function(e){y(e)},A=function(){o.c.stop(),j&&j.clear(),D()},D=function(){w(null)},H=function(t){return t?t.toString().replace(/[.,-]/,"").split("").map((function(t){return{digit:t,frequency:e[t]}})):void 0},x=function(e,t){if(e&&t){var n=e.length;return(t%n+n)%n}return!1};return l.a.createElement("div",null,l.a.createElement("h3",null,"DIGIT MAP"),l.a.createElement("p",null,"Base frequency : ",432,"Hz"),l.a.createElement("p",null,"Interval : +",48,"Hz (",432,"Hz / 9)"),l.a.createElement("table",{style:{textAlign:"left",margin:"0 auto"}},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Digit"),l.a.createElement("th",null,"Frequency (Hz)"))),l.a.createElement("tbody",null,e.map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,t),l.a.createElement("td",null,e))})))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("select",{name:"play-me",id:"select-play-me",onChange:function(e){A(),D(),E(e.target.value)}},Object.keys(t).map((function(e,t){return l.a.createElement("option",{value:e,key:t},e)}))),l.a.createElement("button",{onClick:function(){var e=c.map((function(e){return e.frequency}));O(new o.a((function(e,t){z((new Date).toISOString()),I.triggerAttackRelease(t,.1)}),e).start()),o.c.start()}},"Play"),l.a.createElement("button",{onClick:A},"Stop"),l.a.createElement("h2",null,"Now playing:"),l.a.createElement("p",null,"".concat(p," : ").concat(t[p])),l.a.createElement("h2",null,"Tones"),c.length>0?c.map((function(e,t){return l.a.createElement(i,{frequency:e.frequency,digit:e.digit,key:t,active:x(c,q)===t})})):"no tones yet")};var s=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(m,null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("p",{style:{fontWeight:"normal",fontSize:"14px"}},"Background image by"," ",l.a.createElement("a",{href:"https://unsplash.com/photos/uhjiu8FjnsQ",target:"_blank",rel:"noopener noreferrer"},"Unsplash")))};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(s,null)),document.getElementById("root"))}},[[697,1,2]]]);
//# sourceMappingURL=main.6d7ba5a1.chunk.js.map