(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-230620c3"],{"26a9":function(t,e,a){"use strict";var i=a("819c"),s=a.n(i);s.a},"819c":function(t,e,a){},ed3a:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"common-style",class:t.classData},[a("div",{staticClass:"header"},[a("div",{staticClass:"header-menu"},[a("div",{staticClass:"date"}),a("ul",t._l(t.menus,(function(e,i){return a("li",{key:i,class:e.active?"active":""},[a("router-link",{key:e.id,attrs:{to:e.path},nativeOn:{click:function(a){return t.tabClick(e)}}},[t._v(t._s(e.name))])],1)})),0),a("div",{staticClass:"header-date-info"},[a("span",{staticClass:"time"},[t._v(t._s(t.time))]),a("i",{staticClass:"line"}),a("div",{staticStyle:{display:"inline-block"}},[a("span",{staticClass:"rq"},[t._v(t._s(t.date.split("-").join(".")))]),a("span",{staticClass:"day"},[t._v(t._s(t.day))])])])])]),a("div",{staticClass:"main-pages-style"},[a("router-view")],1)])},s=[],n=(a("7f7f"),a("ac4d"),a("8a81"),a("ac6a"),{name:"layout",data:function(){return{menus:[{name:"远程工作站监控",path:"/remoteWorkMonitoring",logoImg:"static/img/ycgzzjk.png",active:!0,id:"1"},{name:"服务质量过程监控",path:"/serviceQualityProcess",logoImg:"static/img/fwzlgcjk.png",active:!1,id:"2"},{name:"服务指标管控",path:"/serviceIndexControl",logoImg:"static/img/fwzbgk.png",active:!1,id:"3"}],menuImg:"static/img/fwzlgcjk.png",tabTitle:"服务质量过程监控",router:"",date:"",dates:"",dateMonths:"",dateMonth:"",time:"",day:"",tabId:"1",interval:null}},computed:{classData:function(){var t="main-style";return window.console.log(this.tabId,"this.tabId"),"1"===this.tabId?t="control-style":"2"===this.tabId?t="main-style":"3"===this.tabId&&(t="remote-style"),t}},watch:{},created:function(){var t=this;this.getDqDate(),this.interval=setInterval((function(){t.getDqDate()}),1e4)},mounted:function(){this.router=this.$route.fullPath,this.csInit()},methods:{csInit:function(){var t=!0,e=!1,a=void 0;try{for(var i,s=this.menus[Symbol.iterator]();!(t=(i=s.next()).done);t=!0){var n=i.value;n.path===this.router?(n.active=!0,this.tabId=n.id,this.tabTitle=n.tabTitle,this.menuImg=n.logoImg):n.active=!1}}catch(o){e=!0,a=o}finally{try{t||null==s.return||s.return()}finally{if(e)throw a}}"/"===this.router&&(this.menus[0].active=!0,this.tabId=this.menus[0].id,this.tabTitle=this.menus[0].tabTitle,this.menuImg=this.menus[0].logoImg,this.$router.push({path:this.menus[0].path}))},tabClick:function(t){this.tabTitle=t.name,this.tabId=t.id,t.active=!0,this.menuImg=t.logoImg;var e=!0,a=!1,i=void 0;try{for(var s,n=this.menus[Symbol.iterator]();!(e=(s=n.next()).done);e=!0){var o=s.value;o.id!==t.id&&(o.active=!1)}}catch(l){a=!0,i=l}finally{try{e||null==n.return||n.return()}finally{if(a)throw i}}},getDqDate:function(){var t=new Date,e={1:"星期一",2:"星期二",3:"星期三",4:"星期四",5:"星期五",6:"星期六",7:"星期天"};this.date=t.getFullYear()+"-"+(t.getMonth()<9?"0"+(t.getMonth()+1):t.getMonth()+1)+"-"+(t.getDate()<10?"0"+t.getDate():t.getDate()),this.dateMonth=t.getFullYear()+"-"+(t.getMonth()<9?"0"+(t.getMonth()+1):t.getMonth()+1),this.time=(t.getHours()<10?"0"+t.getHours():t.getHours())+":"+(t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes()),this.day=e[t.getDay()+""],this.dates=t.getFullYear()+"-"+(t.getMonth()<10?"0"+t.getMonth():t.getMonth())+"-"+(t.getDate()<10?"0"+t.getDate():t.getDate()),this.dateMonths=t.getFullYear()+"-"+(t.getMonth()<10?"0"+t.getMonth():t.getMonth())}},destroyed:function(){window.clearInterval(this.interval)}}),o=n,l=(a("26a9"),a("2877")),r=Object(l["a"])(o,i,s,!1,null,"339cd08f",null);e["default"]=r.exports}}]);
//# sourceMappingURL=chunk-230620c3.379fbcb1.js.map