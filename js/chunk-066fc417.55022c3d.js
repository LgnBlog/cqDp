(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-066fc417"],{"1e89":function(t,e,a){"use strict";var i=a("4e84"),s=a.n(i);s.a},"4e84":function(t,e,a){},5668:function(t,e,a){"use strict";var i=a("b18c"),s=a.n(i);s.a},"99d4":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"barCharts-style"},[a("div",{staticClass:"charts-main",attrs:{id:t.id}})])},s=[],n=(a("ac4d"),a("8a81"),a("ac6a"),a("7f7f"),a("28a5"),a("c5f6"),a("313e")),r=a.n(n),o={name:"bda-3d-barCharts",props:{chartsConfig:{type:Object,default:function(){return{}}},barType:{type:String,default:function(){return"stack"}},barWidth:{type:Number,default:function(){return 3}},customizedStyle:{type:Number,default:function(){return 1}},legendStatus:{type:Boolean,default:function(){return!0}},yAxiosDw:{type:String,default:function(){return""}},changeAxios:{type:Boolean,default:function(){return!1}},xVertical:{type:Boolean,default:function(){return!1}},showType:{type:Boolean,default:function(){return!1}},isDiffColor:{type:Boolean,default:function(){return!1}},percentRange:{type:Array,default:function(){return[]}},isScroll:{type:Boolean,default:function(){return!1}},isSmallText:{type:Boolean,default:function(){return!1}},fontSizeShow:{type:Number,default:function(){return 0}}},data:function(){return{id:Math.random()+"_",legend:[],dataDetails:[],xData:[],series:[],drp:3,fontSize:0!==this.fontSizeShow?this.fontSizeShow:15}},watch:{},created:function(){},mounted:function(){var t=this;this.xData=this.chartsConfig.dimension?this.chartsConfig.dimension:[];var e=document.body.clientWidth;e>1700?this.xData.length<=10?this.drp=this.barWidth:this.drp=.5*this.barWidth:e<=1700&&e>=1400?this.xData.length<=10?(this.fontSize=14,this.drp=.4*this.barWidth):(this.fontSize=14,this.drp=.3*this.barWidth):this.xData.length<=10?(this.fontSize=14,this.drp=.3*this.barWidth):(this.fontSize=12,this.drp=.2*this.barWidth),this.isSmallText&&this.xData.length>10&&(this.fontSize=10),this.filterData(this.barType,this.chartsConfig.quotaMap,this.chartsConfig.colorMap),this.$nextTick((function(){t.init()}))},methods:{filterData:function(t,e,a){var i=this,s=[],n=-1,o=this.drp,l=this;if(e){window.console.log(e,"chartsConfig");var c=function(c){i.dataDetails.push(e[c]),i.legend.push(c);var f=a[c];n++;var d={type:"bar",name:c,barWidth:8*o,itemStyle:{normal:{color:new r.a.graphic.LinearGradient(0,0,0,1,[{offset:0,color:f[0]},{offset:1,color:f[1]}]),barBorderRadius:[0,0,0,0]}},data:i.dataDetails[n]};l.isDiffColor&&(d.itemStyle.normal.color=function(t){if(l.isDiffColor){var e=f,a=e[t.dataIndex];return new r.a.graphic.LinearGradient(0,0,0,1,[{offset:0,color:a[0]},{offset:.5,color:a[1]},{offset:1,color:a[1]}],!1)}});var h={name:c,tooltip:{show:!1},type:"bar",barWidth:2*o,itemStyle:{normal:{color:f[1],barBorderRadius:[0,0,0,0]}},data:i.dataDetails[n],legendHoverLink:!1};"stack"===t&&(d.stack="stack",i.showType&&(h.stack="stack2"),i.showType&&(h.barGap=0)),s.push(d),i.showType&&s.push(h)};for(var f in e)c(f)}this.series=s},init:function(){var t=this,e=document.getElementById(this.id),a=r.a.init(e),i=this.xData,s=this,n={data:i,axisLabel:{interval:0,show:!0,fontSize:this.fontSize+2,fontFamily:"Noto Sans SC",formatter:function(t){if(i.length>10||s.xVertical)return t.split("").join("\n");if(s.changeAxios)return t.length>4?t.substring(0,4)+"...":t;var e="",a=t.length,n=2;s.barWidth>4&&(n=4);var r=Math.ceil(a/n);if(a>n)for(var o=0;o<r;o++){var l="",c=o*n,f=c+n;l=o==r-1?t.substring(c,a):t.substring(c,f)+"\n",e+=l}else e=t;return e}},splitLine:{show:!1,lineStyle:{color:"rgba(255,255,255,.1)"}},axisLine:{lineStyle:{color:"#fff",fontSize:this.fontSize}}},o=document.body.clientWidth;o<=1700&&o>=1400&&(i.length>8&&i.length<=10?n.axisLabel.fontSize=.9*this.fontSize:i.length>10&&(n.axisLabel.fontSize=.8*this.fontSize),1!==this.customizedStyle&&(n.axisLabel.fontSize=.74*this.fontSize));var l=this.yAxiosDw,c={tooltip:{formatter:function(t){return t.name+"<br>"+t.seriesName+"："+t.value+l}},grid:{top:this.legendStatus?30:10,left:50,right:"5%",bottom:this.isScroll?"30%":"25%"},legend:{show:this.legendStatus,data:this.legend,textStyle:{color:"#fff",fontFamily:"Noto Sans SC",fontSize:this.fontSize},right:20,top:0},dataZoom:this.isScroll?[{xAxisIndex:0,show:!1,type:"slider",startValue:0,endValue:9}]:[],xAxis:n,yAxis:{type:"value",splitLine:{show:!0,lineStyle:{color:"rgba(255,255,255,.1)"}},axisLine:{lineStyle:{color:"#fff"}},axisLabel:{show:!0,fontSize:this.fontSize,formatter:function(t){return t+l},interval:0,rotate:0}},series:this.series};if(this.percentRange&&(c.yAxis.max=this.percentRange[1]),this.percentRange&&(c.yAxis.min=this.percentRange[0]),!0===this.changeAxios){c.xAxis=c.yAxis,c.yAxis=n;var f=0;if(i){var d=!0,h=!1,u=void 0;try{for(var g,p=i[Symbol.iterator]();!(d=(g=p.next()).done);d=!0){var m=g.value;m.length>=f&&(f=m.length)}}catch(y){h=!0,u=y}finally{try{d||null==p.return||p.return()}finally{if(h)throw u}}}c.grid.left=f>=4?80:50,!1===this.legendStatus&&(c.grid.top=10)}if(a.setOption(c),window.console.log(c,"options222"),this.isScroll){var v=0,b=9;setInterval((function(){b<=t.dataDetails[0].length?a.setOption({dataZoom:{startValue:v++,endValue:b++}}):(v=0,b=9)}),2e3)}}}},l=o,c=(a("5668"),a("2877")),f=Object(c["a"])(l,i,s,!1,null,"3bff5b06",null);e["a"]=f.exports},a730:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dispath-style"},[a("div",{staticClass:"bottom-left"},[a("div",{staticClass:"bottom-left-left border-style2"},[a("div",{staticClass:"title"},[t._v("业务量/超时派发量")]),a("div",{directives:[{name:"loading",rawName:"v-loading",value:!t.leftRes,expression:"!leftRes"}],staticClass:"charts-style",attrs:{"element-loading-background":"rgba(0, 0, 0, 0.2)","element-loading-text":"加载中"}},[a("div",{staticClass:"right"},[t.barRes?a("bda-bar-charts",{attrs:{barType:t.barType,chartsConfig:t.chartsConfig,barWidth:4,legendStatus:!0,yAxiosDw:""}}):t._e()],1),a("div",{staticClass:"left"},[a("div",{staticClass:"left-main"},t._l(t.dataMap,(function(e,i,s){return a("div",{key:s,staticClass:"kb-style-main"},[a("div",{staticClass:"kb-title"},[t._v(t._s(i))]),a("div",{staticClass:"kb-value"},[a("span",[t._v(t._s(parseInt(e))+"件")])])])})),0)])])]),a("div",{staticClass:"bottom-left-right border-style2"},[a("div",{staticClass:"title"},[t._v("主城渝西派单及时率")]),a("div",{directives:[{name:"loading",rawName:"v-loading",value:!t.fgsRes,expression:"!fgsRes"}],staticClass:"charts-style",attrs:{"element-loading-background":"rgba(0, 0, 0, 0.2)","element-loading-text":"加载中"}},[t.fgsRes?a("bda-bar-charts",{attrs:{chartsConfig:t.fgsData,barWidth:6,legendStatus:!1,yAxiosDw:t.dw,xVertical:!0,percentRange:[99,100]}}):t._e()],1)])]),a("div",{staticClass:"bottom-right border-style2"},[a("div",{staticClass:"title"},[t._v("渝东南北派单及时率")]),a("div",{directives:[{name:"loading",rawName:"v-loading",value:!t.zrgsRes,expression:"!zrgsRes"}],staticClass:"charts-style",attrs:{"element-loading-background":"rgba(0, 0, 0, 0.2)","element-loading-text":"加载中"}},[t.zrgsRes?a("bda-bar-charts",{attrs:{chartsConfig:t.zrgsData,barWidth:6,legendStatus:!1,yAxiosDw:t.dw,percentRange:[99,100],xVertical:!0}}):t._e()],1)])])},s=[],n=(a("ac4d"),a("8a81"),a("ac6a"),a("6277")),r=a("4328"),o=a.n(r),l=a("99d4"),c={name:"dispathBottom",mixins:[n["a"]],components:{bdaBarCharts:l["a"]},data:function(){return{dataMap:{"业务总量":0,"超时派发量":0},barRes:!1,barType:"stack",chartsConfig:{},countMap:{},fgsRes:!1,zrgsRes:!1,fgsData:{},zrgsData:{},dw:"%",leftRes:!1}},watch:{},created:function(){},mounted:function(){var t=this,e=this;this.getSendOrdersBusinessAndOvertime(o.a.stringify({dimensionality:this.$parent.dateType,timeStr:this.$parent.dateParams})).then((function(a){t.leftRes=!0,window.console.log(a,"sendOrdersBussinessAndOvertimeData"),e.sendOrdersBussinessAndOvertimeData(a),t.barRes=!0})).catch((function(){t.leftRes=!0})),this.getSendOrdersForFiliale(o.a.stringify({dimensionality:this.$parent.dateType,timeStr:this.$parent.dateParams})).then((function(e){t.sendOdersForData(e,"1")})).catch((function(){t.fgsRes=!0})),this.getSendOrdersForLlc(o.a.stringify({dimensionality:this.$parent.dateType,timeStr:this.$parent.dateParams})).then((function(e){t.sendOdersForData(e,"2")})).catch((function(){t.zrgsRes=!0}))},methods:{sendOrdersBussinessAndOvertimeData:function(t){if(t&&(t.total&&(this.dataMap["业务总量"]=void 0!==t.total.ccsum?t.total.ccsum:0,this.dataMap["超时派发量"]=void 0!==t.total.ccovertimesum?t.total.ccovertimesum:0),t.type)){var e=[],a={"超时派发量":[],"各业务总量":[]};t.type.forEach((function(t){e.push(t.busisubtype),a["各业务总量"].push(t.ccsum),a["超时派发量"].push(t.ccovertimesum)})),this.chartsConfig={colorMap:{"超时派发量":["#00FEBB","#00BDFA"],"各业务总量":["#00E2FF","#0074FF"]},dimension:e,quotaMap:a}}},sendOdersForData:function(t,e){var a=this,i=[],s=[];if(t){var n=!0,r=!1,o=void 0;try{for(var l,c=t[Symbol.iterator]();!(n=(l=c.next()).done);n=!0){var f=l.value;s.push(null!==f.per?f.per:0),i.push(f.orgname)}}catch(d){r=!0,o=d}finally{try{n||null==c.return||c.return()}finally{if(r)throw o}}}"1"===e?(this.fgsRes=!1,this.fgsData={dimension:i,quotaMap:{"供电分公司派单及时率":s},colorMap:{"供电分公司派单及时率":["#00E2FF","#0074FF"]}},this.$nextTick((function(){a.fgsRes=!0}))):"2"===e&&(this.zrgsRes=!1,this.zrgsData={dimension:i,quotaMap:{"供电有限责任公司派单及时率":s},colorMap:{"供电有限责任公司派单及时率":["#00FEBB","#00BDFA"]}},window.console.log(this.fgsData," this.fgsData"),this.$nextTick((function(){a.zrgsRes=!0})))}}},f=c,d=(a("1e89"),a("2877")),h=Object(d["a"])(f,i,s,!1,null,"69a680dc",null);e["default"]=h.exports},aa77:function(t,e,a){var i=a("5ca1"),s=a("be13"),n=a("79e5"),r=a("fdef"),o="["+r+"]",l="​",c=RegExp("^"+o+o+"*"),f=RegExp(o+o+"*$"),d=function(t,e,a){var s={},o=n((function(){return!!r[t]()||l[t]()!=l})),c=s[t]=o?e(h):r[t];a&&(s[a]=c),i(i.P+i.F*o,"String",s)},h=d.trim=function(t,e){return t=String(s(t)),1&e&&(t=t.replace(c,"")),2&e&&(t=t.replace(f,"")),t};t.exports=d},b18c:function(t,e,a){},c5f6:function(t,e,a){"use strict";var i=a("7726"),s=a("69a8"),n=a("2d95"),r=a("5dbc"),o=a("6a99"),l=a("79e5"),c=a("9093").f,f=a("11e9").f,d=a("86cc").f,h=a("aa77").trim,u="Number",g=i[u],p=g,m=g.prototype,v=n(a("2aeb")(m))==u,b="trim"in String.prototype,y=function(t){var e=o(t,!1);if("string"==typeof e&&e.length>2){e=b?e.trim():h(e,3);var a,i,s,n=e.charCodeAt(0);if(43===n||45===n){if(a=e.charCodeAt(2),88===a||120===a)return NaN}else if(48===n){switch(e.charCodeAt(1)){case 66:case 98:i=2,s=49;break;case 79:case 111:i=8,s=55;break;default:return+e}for(var r,l=e.slice(2),c=0,f=l.length;c<f;c++)if(r=l.charCodeAt(c),r<48||r>s)return NaN;return parseInt(l,i)}}return+e};if(!g(" 0o1")||!g("0b1")||g("+0x1")){g=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof g&&(v?l((function(){m.valueOf.call(a)})):n(a)!=u)?r(new p(y(e)),a,g):y(e)};for(var S,x=a("9e1e")?c(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;x.length>w;w++)s(p,S=x[w])&&!s(g,S)&&d(g,S,f(p,S));g.prototype=m,m.constructor=g,a("2aba")(i,u,g)}},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-066fc417.55022c3d.js.map