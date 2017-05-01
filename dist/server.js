!function(e){function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=31)}([function(e,t){e.exports=require("react")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){return e.sort(function(){return.5-Math.random()})},r=function(e){var t=Math.floor(e/3600),n=""+Math.floor(e%3600/60),a="0"+Math.floor(e%60);return n=n.substr(n.length-2),a=a.substr(a.length-2),isNaN(a)?"0:00":t?t+":"+n+":"+a:n+":"+a},l=function(e){return e[0]},o=function(e){return parseInt(e,10)},i=function(e){var t=document.createElement("textarea");t.style.position="fixed",t.style.top=0,t.style.left=0,t.style.width="2em",t.style.height="2em",t.style.padding=0,t.style.border="none",t.style.outline="none",t.style.boxShadow="none",t.style.background="transparent",t.value=e,document.body.appendChild(t),t.select();try{var n=document.execCommand("copy"),a=n?"successful":"unsuccessful";console.log("Copying text command was "+a)}catch(e){console.log("Oops, unable to copy")}document.body.removeChild(t)},u=function(e,t){var n=function(t){return o(t.id)===o(e)};return l(t.filter(n))},s=function(e){return/^\d+$/.test(e)},c=function(e,t){var n=function(e){return function(t){return t.toLowerCase().search(e)!==-1}},a=n(e.filter);return{sounds:t.sounds.filter(function(e){return a(e.info.opis)||a(e.info.author)||a(e.userName)||a(e.title)||a(e.info.gear)})}};t.randomizeList=a,t.prettyTime=r,t.takeFirst=l,t.asNumber=o,t.copyTextToClipboard=i,t.getSoundById=u,t.isDigitOnly=s,t.filterList=c},function(e,t){e.exports=require("react-router-dom")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["/","/:id/info","/:id/map","/:id/photos"]},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),l=a(r),o={padding:"16px",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'};t.default=function(e){e.message;return l.default.createElement("div",{style:o},l.default.createElement("h1",null,"This request does NOT match any resource!"),l.default.createElement("a",{href:"/"},"home"))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return t.status(200).send({message:"hello there ;)"})}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),l=a(r),o=n(26),i=a(o),u=n(27),s=n(30),c=n(12),f=a(c),d=n(14),m=a(d),p=n(4),h=a(p),b=n(3),y=a(b);t.default=function(e,t,n){var a=function(t){return t.filter(function(t){return(0,s.matchPath)(e.url,{path:t,exact:!0})})},r=0!==a(y.default).length,o=function(t){var n=(0,u.renderToString)(l.default.createElement(s.StaticRouter,{context:{},location:e.url},l.default.createElement(f.default,{sounds:t}))),a=JSON.stringify(t);return(0,i.default)("./dist/index.html","utf-8").then(function(e){return e.replace("{{APP}}",n)}).then(function(e){return e.replace("{{DATA}}","window.__sounds__ = "+a)})};r?(0,i.default)("./src/shared/assets/tracks.json","utf-8").then(JSON.parse).then(o).then(function(e){return t.status(200).send(e)}).catch(function(){return t.status(500).send((0,u.renderToString)(l.default.createElement(m.default,null)))}):t.status(404).send((0,u.renderToString)(l.default.createElement(h.default,null)))}},function(e,t){e.exports=require("compression")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("helmet")},function(e,t){e.exports=require("morgan")},function(e,t){e.exports=require("source-map-support")},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=n(0),s=a(u),c=n(2),f=n(17),d=a(f),m=n(16),p=a(m),h=n(18),b=a(h),y=n(23),v=a(y),g=n(21),E=a(g),w=n(22),k=a(w),_=n(19),x=a(_),P=n(15),N=a(P),S=n(4),C=a(S),O=n(1);n(25),n(24);var j=function(e){function t(){r(this,t);var e=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={isPlaying:!1,filter:"",reset:!1,sounds:[],redirectPath:""},e.playClick=e.playClick.bind(e),e.listClick=e.listClick.bind(e),e.markerClick=e.markerClick.bind(e),e.onEnded=e.onEnded.bind(e),e.searchChange=e.searchChange.bind(e),e.searchSubmit=e.searchSubmit.bind(e),e.searchReset=e.searchReset.bind(e),e}return o(t,e),i(t,[{key:"onEnded",value:function(e){this.setState({isPlaying:!1})}},{key:"playClick",value:function(e){var t=this.Sound.Player.audioEl;this.state.isPlaying?t.pause():t.play(),this.setState(function(e){return{isPlaying:!e.isPlaying}})}},{key:"markerClick",value:function(e){this.setState({isPlaying:!1}),this.setState({redirectPath:""}),document.getElementById("snd"+e).scrollIntoView();var t="/"+this.state.sounds[e].id+"/map";this.setState({redirectPath:t})}},{key:"listClick",value:function(e){this.setState({isPlaying:!1})}},{key:"searchChange",value:function(e){this.setState({reset:!0}),this.setState({filter:e.target.value.toLowerCase()}),this.setState(O.filterList)}},{key:"searchSubmit",value:function(e){e.preventDefault(),this.setState({reset:!0}),this.setState({filter:""}),this.setState(function(e){return{sounds:e.sounds}})}},{key:"searchReset",value:function(e){this.setState({reset:!1}),this.setState(O.filterList)}},{key:"componentDidMount",value:function(){fetch("/api").then(function(e){return e.json()}).then(function(e){return console.log(e)}).catch(function(e){return console.log(e)}),this.setState(function(e,t){return{sounds:t.sounds}})}},{key:"render",value:function(){var e=this;return s.default.createElement("div",null,s.default.createElement(c.Switch,null,s.default.createElement(c.Route,{exact:!0,path:"/",component:v.default}),s.default.createElement(c.Route,{exact:!0,path:"/:id/:sub",render:function(t){var n=t.match,a=(0,O.getSoundById)(n.params.id,e.props.sounds);return s.default.createElement("div",{className:"App flex flex-column flex-row-ns f5 f4-l black-80 bg-white"},e.state.redirectPath?s.default.createElement(c.Redirect,{to:e.state.redirectPath}):null,s.default.createElement(E.default,{filter:e.state.filter,handleSubmit:e.searchSubmit,handleChange:e.searchChange,handleReset:e.searchReset,reset:e.state.reset}),s.default.createElement(b.default,{id:n.params.id}),"photos"===n.params.sub?s.default.createElement(x.default,{id:n.params.id,defaultPic:a.artwork_url||a.userPic,images:a.images}):null,"info"===n.params.sub?s.default.createElement(N.default,{currentSound:a}):null,"map"===n.params.sub?s.default.createElement(d.default,{onClick:e.markerClick,sounds:e.state.sounds,currentSound:a}):null,s.default.createElement("div",{className:"flex flex-column sideBar vh-60 vh-100-ns w-100 mw6-ns ph1 bl-m bl-l fadeIn animated"},s.default.createElement(k.default,{ref:function(t){return e.Sound=t},currentSound:a,onEnded:e.onEnded,playClick:e.playClick,isPlaying:e.state.isPlaying}),s.default.createElement(p.default,{onClick:e.listClick,sounds:e.state.sounds,currentId:n.params.id,linkTo:n.params.sub})))}}),s.default.createElement(c.Route,{path:"*",component:C.default})))}}]),t}(u.Component);t.default=j},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),l=a(r),o=function(e){var t=e.selectedSound;return l.default.createElement("div",{className:"flex flex-row justify-start items-start dn-sh mt1 bg-near-white"},l.default.createElement("img",{className:"br2",style:{maxWidth:"80px",maxHeight:"80px",minWidth:"80px",minHeight:"80px"},src:t.artwork_url||t.userPic,alt:"artwork"}),l.default.createElement("div",{className:"overflow-auto pl2"},l.default.createElement("p",{className:"infoHeight lh-title f5"},t.info.opis)))};t.default=o},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),l=a(r),o={fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',padding:"16px"};t.default=function(){return l.default.createElement("div",{style:o},l.default.createElement("h1",null,"this id does Not match any of our sounds"),l.default.createElement("h2",null,"try ",l.default.createElement("a",{href:"/88640153/info"},"this")))}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),l=a(r);t.default=function(e){var t=e.currentSound;return l.default.createElement("div",{className:"center pa2 pa4-m pa5-l vh-100-ns vh-40 mw7-m mw8-l bg-near-white overflow-auto"},l.default.createElement("div",{className:"flex mb2 w-90 w-100-ns"},l.default.createElement("img",{title:"user avatar",className:"br-100 h3 w3 h4-l w4-l dib ba b--black-05 pa1",src:t.userPic}),l.default.createElement("div",{className:"flex flex-column pt4-l pl4-l pt2 pl2"},l.default.createElement("h2",{className:"f3-ns f4 mb1"},t.userName),l.default.createElement("h3",{className:"f5 f4-l fw4 gray mt0"},t.title))),l.default.createElement("div",{className:"flex flex-column measure lh-copy w-90 w-100-l"},l.default.createElement("p",null,l.default.createElement("b",null,"autor nagrania: "),t.info.author),l.default.createElement("p",null,l.default.createElement("b",null,"lokalizacja: "),t.info.localization),l.default.createElement("p",null,l.default.createElement("b",null,"gps: "),t.info.gps.lat+" - "+t.info.gps.lng),l.default.createElement("p",null,l.default.createElement("b",null,"sprzęt: "),t.info.gear),l.default.createElement("p",null,l.default.createElement("b",null,"data: "),t.info.date),l.default.createElement("p",null,l.default.createElement("b",null,"czas: "),t.info.time),l.default.createElement("p",null,l.default.createElement("b",null,"opis: "),t.info.opis)))}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),l=a(r),o=n(2),i=n(1),u=function(e){var t=e.currentId,n=e.sounds,a=e.onClick,r=e.linkTo;return l.default.createElement("ul",{className:"bg-near-white overflow-auto mt1 z-1"},n.map(function(e,n){return l.default.createElement(o.Link,{className:"link",key:n,to:"/"+e.id+"/"+(r||"info")},l.default.createElement("li",{id:"snd"+n,onClick:a,className:(0,i.asNumber)(t)===(0,i.asNumber)(e.id)?"white bg-black-60 truncate pl1 pv1":"black-80 hover-near-white bg-animate hover-bg-black-60 truncate pl1 pv1"},l.default.createElement("span",null,e.title)))}))};t.default=u},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=n(0),s=a(u),c=n(28),f={v:"3",key:"AIzaSyB7GQAjLtFuxLYjfSQq3PLX3o0mX6qT-CU",language:"pl",region:"PL"},d=function(e){function t(){return r(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),i(t,[{key:"onMapCreated",value:function(e){e.setOptions({disableDefaultUI:!1,mapTypeId:"satellite",mapTypeControl:!1,fullscreenControl:!1,streetViewControl:!0,tilt:0,zoom:15})}},{key:"onMarkerClick",value:function(e){this.props.onClick(e)}},{key:"render",value:function(){var e=this,t=this.props.currentSound;return s.default.createElement(c.Gmaps,{ref:"mapa",width:"100%",className:"flex justify-end-ns w-100 vh-40 vh-100-ns fadeIn animated ph1 pt1 fadeIn animated",lat:t.info.gps.lat,lng:t.info.gps.lng,params:f,onMapCreated:this.onMapCreated},this.props.sounds.map(function(n,a){return s.default.createElement(c.Marker,{animation:t.id===n.id?1:0,lat:n.info.gps.lat,lng:n.info.gps.lng,onClick:e.onMarkerClick.bind(e,a),key:a})}))}}]),t}(u.Component);t.default=d},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),l=a(r),o=n(2),i=function(e){var t=e.id;return l.default.createElement("div",{className:"onTop menuPosition"},l.default.createElement("div",{className:"flex flex-column content-end animated fadeIn"},l.default.createElement(o.Link,{to:"/",title:"Home",className:"f5 w1-8 no-underline black bg-white bg-animate hover-bg-black hover-white inline-flex items-center pa1 ba border-box mb1 mr1"},l.default.createElement("svg",{className:"w1-8",viewBox:"0 0 32 32",fill:"currentcolor"},l.default.createElement("title",null,"Home icon"),l.default.createElement("path",{d:"M16 0 L32 16 L28 16 L28 30 L20 30 L20 20 L12 20 L12 30 L4 30 L4 16 L0 16 Z"}))),l.default.createElement(o.Link,{to:"/"+t+"/map",title:"Mapa",className:"f5 w1-8 no-underline black bg-white bg-animate hover-bg-black hover-white inline-flex items-center pa1 ba border-box mb1 mr1"},l.default.createElement("svg",{className:"w1-8",viewBox:"0 0 24 24",fill:"currentcolor"},l.default.createElement("path",{d:"M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"}))),l.default.createElement(o.Link,{to:"/"+t+"/info",title:"Info",className:"f5 w1-8 no-underline black bg-white bg-animate hover-bg-black hover-white inline-flex items-center pa1 ba border-box mb1 mr1"},l.default.createElement("svg",{className:"w1-8",viewBox:"0 0 24 24",fill:"currentcolor"},l.default.createElement("path",{d:"M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"}))),l.default.createElement(o.Link,{to:"/"+t+"/photos",title:"Zdjęcia",className:"f5 w1-8 no-underline black bg-white bg-animate hover-bg-black hover-white inline-flex items-center pa1 ba border-box mb1 mr1"},l.default.createElement("svg",{className:"w1-8",viewBox:"0 0 24 24",fill:"currentcolor"},l.default.createElement("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"})))))};t.default=i},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=n(0),s=a(u),c=n(29),f=a(c),d=n(1),m=function(){return s.default.createElement("div",null,"Pobieram obrazek...")},p=function(){return s.default.createElement("div",null," * ")},h=function(e){function t(e){r(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={selected:0},n.imageClick=n.imageClick.bind(n),n}return o(t,e),i(t,[{key:"imageClick",value:function(e){this.setState({selected:(0,d.asNumber)(e.target.id)})}},{key:"componentWillReceiveProps",value:function(){this.setState({selected:0})}},{key:"render",value:function(){var e=this;return s.default.createElement("div",{className:"center ph3 pt1 ph4-m pt3-m pa5-l w-100 vh-100-ns vh-40 mw7-m mw8-l bg-near-white overflow-auto"},this.props.images[0]?s.default.createElement("div",{className:"flex flex-wrap",onClick:this.imageClick},this.props.images.map(function(t,n){return s.default.createElement(f.default,{key:n,id:n,loader:s.default.createElement(p,null),className:e.state.selected===n?"mr2 mb2 w2 h2 w3-l h3-l dim ba bw2 b--green":"mr2 mb2 w2 h2 h2 w3-l h3-l dim",src:"https://res.cloudinary.com/endziu/image/upload/w_64,h_64,c_thumb,c_fill/mapa/"+t,alt:"image"+n})})):s.default.createElement("div",{className:"flex flex-wrap",onClick:this.imageClick},s.default.createElement(f.default,{loader:s.default.createElement(p,null),id:"avatar",className:"mr2 mb2 w2 h2 w3-l h3-l dim ba bw2 b--green",src:this.props.defaultPic,alt:"avatar"})),this.props.images[this.state.selected]?s.default.createElement(f.default,{loader:s.default.createElement(m,null),className:"w-90 w-100-l",src:"https://res.cloudinary.com/endziu/image/upload/mapa/"+this.props.images[this.state.selected],alt:"big picture"}):s.default.createElement(f.default,{loader:s.default.createElement(m,null),src:this.props.defaultPic.substring(0,this.props.defaultPic.indexOf("-large.jpg")).concat("-t500x500.jpg"),alt:"artwork"}))}}]),t}(s.default.Component);t.default=h},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=n(0),s=a(u),c=n(1),f=function(e){function t(){r(this,t);var e=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={duration:0,currentTime:0,percentPlayed:0},e.onTimeUpdate=e.onTimeUpdate.bind(e),e.setPosition=e.setPosition.bind(e),e.onEnded=e.onEnded.bind(e),e.recReady=e.recReady.bind(e),e}return o(t,e),i(t,[{key:"componentDidMount",value:function(){var e=this;this.audioEl.addEventListener("onTimeUpdate",function(t){return e.props.onTimeUpdate&&e.props.onTimeUpdate(t)}),this.audioEl.addEventListener("onEnded",function(t){return e.onEnded(t)})}},{key:"recReady",value:function(){this.setState({duration:this.audioEl.duration})}},{key:"onEnded",value:function(e){this.props.onEnded(e)}},{key:"onTimeUpdate",value:function(e){this.setState({duration:this.audioEl.duration||0,currentTime:this.audioEl.currentTime||0,percentPlayed:100*(this.audioEl.currentTime/this.audioEl.duration).toFixed(3)||0})}},{key:"setPosition",value:function(e){var t=(e.clientX-e.target.x)/e.target.width*100;this.audioEl.currentTime=parseFloat(.01*t*this.audioEl.duration),this.setState({percentPlayed:t})}},{key:"render",value:function(){var e=this,t=this.props,n=t.isPlaying,a=t.selectedSound;return s.default.createElement("div",{className:"App-Player bg-near-white pt1"},s.default.createElement("audio",{onTimeUpdate:this.onTimeUpdate,onEnded:this.onEnded,onLoadedMetadata:this.recReady,ref:function(t){return e.audioEl=t},preload:"metadata",src:a.stream_url+"?client_id=33c73dacce84dddddbc15117e071b6ce"}),s.default.createElement("div",{className:"flex flex-row"},s.default.createElement("div",{className:"PlayButton grow black bg-white w3 h3 ba br-100",onClick:this.props.playClick},s.default.createElement("svg",{viewBox:"0 0 32 32",className:"h3 w3"},n?s.default.createElement("g",null,s.default.createElement("polygon",{points:"9,8 9,24 13,24 13,8",fill:"#000"}),s.default.createElement("polygon",{points:"17,8 17,24 21,24 21,8",fill:"#000"})):s.default.createElement("polygon",{points:"10,8 10,24 24,16",fill:"#000"}))),s.default.createElement("div",{className:"h3 pl2 w-100",onClick:this.setPosition},s.default.createElement("div",{className:"h3",style:{width:this.state.percentPlayed+"%",background:"#000"}}),s.default.createElement("img",{className:"relative bottom-4 h3 w-100 bg-black-20",src:a.waveform_url,alt:"waveform"}))),s.default.createElement("div",{className:"flex flex-row justify-between"},s.default.createElement("span",{className:"link black truncate pointer pv1 pr1 f5 fw6"},""+a.title),s.default.createElement("span",{className:"black br1 f5 pv1"},(0,c.prettyTime)(this.state.currentTime)+"/"+(0,c.prettyTime)(this.state.duration))))}}]),t}(u.Component);t.default=f},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),l=a(r),o=function(e){var t=e.handleSubmit,n=e.handleChange,a=e.handleReset,r=e.filter,o=e.reset;return l.default.createElement("form",{onSubmit:t,className:"ml1 mt1 ma0-ns ba f6 flex pointer searchPos"},l.default.createElement("input",{value:r,onChange:n,onClick:a,className:"input-reset bn",id:"search",placeholder:o?"❌  Pokaż wszystkie":"🔎  Szukaj dźwięków",type:"text"}))};t.default=o},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=n(0),s=a(u),c=n(20),f=a(c),d=n(13),m=a(d),p=function(e){function t(){return r(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),i(t,[{key:"render",value:function(){var e=this,t=this.props.currentSound;return t?s.default.createElement("div",{className:"fadeIn animated pt1"},s.default.createElement(f.default,{ref:function(t){return e.Player=t},playClick:this.props.playClick,onEnded:this.props.onEnded,selectedSound:t,isPlaying:this.props.isPlaying}),s.default.createElement(m.default,{selectedSound:t})):null}}]),t}(u.Component);t.default=p},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),l=a(r),o=n(2),i="https://images.unsplash.com/photo-1470326032834-47d8a3054bb4",u="?dpr=1&auto=compress,format&fit=crop&w=1920&h=1080&q=60&cs=tinysrgb&crop=&bg=",s=""+i+u,c=function(){return l.default.createElement("header",{className:"vh-100 w-100"},l.default.createElement("div",{className:"bg-near-white h-100",style:{backgroundImage:"url("+s+")",backgroundSize:"cover",backgroundPosition:"left",backgroundRepeat:"no-repeat"}},l.default.createElement("div",{className:"pa3"},l.default.createElement("h1",{className:"f2 f1-m f-headline-l fw2 black-80 mt2 mb3 lh-title"},l.default.createElement("a",{className:"link"},"dźwiękowa mapa Wrocławia")),l.default.createElement("h2",{className:"fw1 f2-l f3 black-60 mv3"},"kolekcja nagrań audiosfery miasta"),l.default.createElement(o.Link,{to:"/313303431/map",className:"v-mid f5 no-underline black bg-white bg-animate hover-bg-black hover-white inline-flex items-center pa2 ba border-box mv3"},l.default.createElement("svg",{className:"w1",viewBox:"0 0 24 24",style:{fill:"currentcolor"}},l.default.createElement("title",null,"Map icon"),l.default.createElement("path",{d:"M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"})),l.default.createElement("span",{className:"pl1"},"Posłuchaj")),l.default.createElement("footer",{className:"absolute bottom-0 right-0 left-0 f6 pa2 white",style:{background:"linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8) )"}},l.default.createElement("span",{className:"fr"},"built with ❤️️ by: ",l.default.createElement("a",{href:"https://endziu.xyz",className:"link white hover-bg-white hover-black"},"endziu.xyz"))))))};t.default=c},function(e,t){},function(e,t){},function(e,t){e.exports=require("fs-readfile-promise")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("react-gmaps")},function(e,t){e.exports=require("react-image")},function(e,t){e.exports=require("react-router")},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var r=n(8),l=a(r),o=n(10),i=a(o),u=n(9),s=a(u),c=n(7),f=a(c),d=n(11),m=a(d),p=n(5),h=a(p),b=n(3),y=a(b),v=n(6),g=a(v);m.default.install();var E=process.env.PORT||3e3,w=(0,l.default)();w.use((0,s.default)()),w.use((0,f.default)()),w.use((0,i.default)(":status :method :url")),w.use("/api",h.default),w.use("/static",l.default.static("./dist")),w.use("/favicon.ico",l.default.static("public/favicon.ico")),w.use(y.default,g.default),w.listen(E,function(){return console.log("dzwiekowa-mapa is listening on port "+E)})}]);
//# sourceMappingURL=server.js.map