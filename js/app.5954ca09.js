(function(t){function e(e){for(var i,a,o=e[0],s=e[1],l=e[2],p=0,d=[];p<o.length;p++)a=o[p],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&d.push(c[a][0]),c[a]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,o=1;o<n.length;o++){var s=n[o];0!==c[s]&&(i=!1)}i&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},c={app:0},r=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1229:function(t,e,n){t.exports=n.p+"img/XRX_2.50257af5.jpg"},1507:function(t,e,n){t.exports=n.p+"img/XRX_7.50919f62.jpg"},"33ef":function(t,e,n){t.exports=n.p+"img/XRX_3.c028945b.jpg"},"3d3e":function(t,e,n){t.exports=n.p+"img/XRX_4.06a1b4a6.jpg"},"473a":function(t,e,n){t.exports=n.p+"img/XRX_6.48e10b6b.jpg"},"4e2e":function(t,e,n){t.exports=n.p+"img/XRX_1.bb461111.jpg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("7a23"),c={key:0,class:"intro"},r=Object(i["d"])(" 横向卡片最大平铺排数 "),a=Object(i["d"])(" 纵向卡片最大平铺排数 "),o=Object(i["d"])(" 卡片最大堆叠层数 "),s=Object(i["d"])(" 卡片密度 "),l=Object(i["d"])(" 最大卡片种类 "),u=Object(i["e"])("br",null,null,-1),p={key:1,class:"intro"},d={key:2,class:"box"},f={class:"card-tips"},h={class:"tools"},b=Object(i["d"])(" 道具： ");function j(t,e,j,g,m,y){return 0===m.step?(Object(i["f"])(),Object(i["c"])("div",c,[Object(i["e"])("div",null,[r,Object(i["j"])(Object(i["e"])("input",{"onUpdate:modelValue":e[1]||(e[1]=function(t){return m.option.x=t}),min:"2",max:"10",type:"range"},null,512),[[i["i"],m.option.x]]),Object(i["d"])(" "+Object(i["h"])(m.option.x),1)]),Object(i["e"])("div",null,[a,Object(i["j"])(Object(i["e"])("input",{"onUpdate:modelValue":e[2]||(e[2]=function(t){return m.option.y=t}),min:"2",max:"10",type:"range"},null,512),[[i["i"],m.option.y]]),Object(i["d"])(" "+Object(i["h"])(m.option.y),1)]),Object(i["e"])("div",null,[o,Object(i["j"])(Object(i["e"])("input",{"onUpdate:modelValue":e[3]||(e[3]=function(t){return m.option.z=t}),min:"2",max:"10",type:"range"},null,512),[[i["i"],m.option.z]]),Object(i["d"])(" "+Object(i["h"])(m.option.z),1)]),Object(i["e"])("div",null,[s,Object(i["j"])(Object(i["e"])("input",{"onUpdate:modelValue":e[4]||(e[4]=function(t){return m.option.cardRandom=t}),min:"0",max:"1",step:"0.1",type:"range"},null,512),[[i["i"],m.option.cardRandom]]),Object(i["d"])(" "+Object(i["h"])(m.option.cardRandom),1)]),Object(i["e"])("div",null,[l,Object(i["j"])(Object(i["e"])("input",{"onUpdate:modelValue":e[5]||(e[5]=function(t){return m.option.maxCardType=t}),min:"3",max:"14",step:"1",type:"range"},null,512),[[i["i"],m.option.maxCardType]]),Object(i["d"])(" "+Object(i["h"])(m.option.maxCardType),1)]),u,Object(i["e"])("button",{onClick:e[6]||(e[6]=function(){return y.startGame.apply(y,arguments)})},"开始游戏")])):2===m.step?(Object(i["f"])(),Object(i["c"])("div",p,[Object(i["e"])("h1",null,Object(i["h"])(t.result?"You Win！🎉":"You Lose!😢"),1),Object(i["e"])("button",{onClick:e[7]||(e[7]=function(){return y.rePlay.apply(y,arguments)})},"再来一轮"),Object(i["e"])("button",{onClick:e[8]||(e[8]=function(){return y.setGame.apply(y,arguments)})},"难度调节")])):(Object(i["f"])(),Object(i["c"])("div",d,[Object(i["e"])("div",{class:"card-wrap",style:y.cardWrapStyle},[(Object(i["f"])(!0),Object(i["c"])(i["a"],null,Object(i["g"])(m.cardItemList,(function(t){return Object(i["f"])(),Object(i["c"])("div",{key:t.key,class:[{"item-cover":t.cover},"card-item"],style:t.style,onClick:function(e){return y.clickCard(t)}},[Object(i["e"])("img",{src:n("aa50")("./XRX_"+t.content+".jpg")},null,8,["src"])],14,["onClick"])})),128)),(Object(i["f"])(!0),Object(i["c"])(i["a"],null,Object(i["g"])(m.penddingList,(function(t){return Object(i["f"])(),Object(i["c"])("div",{key:t.key,class:"card-item",style:t.style},[Object(i["e"])("img",{src:n("aa50")("./XRX_"+t.content+".jpg")},null,8,["src"])],4)})),128)),(Object(i["f"])(!0),Object(i["c"])(i["a"],null,Object(i["g"])(m.clearList,(function(t){return Object(i["f"])(),Object(i["c"])("div",{key:t.key,class:"card-item clear-item",style:t.style},[Object(i["e"])("img",{src:n("aa50")("./XRX_"+t.content+".jpg")},null,8,["src"])],4)})),128)),(Object(i["f"])(!0),Object(i["c"])(i["a"],null,Object(i["g"])(m.saveList,(function(t){return Object(i["f"])(),Object(i["c"])("div",{key:t.key,class:"card-item",style:t.style,onClick:function(e){return y.clickSaveCard(t)}},[Object(i["e"])("img",{src:n("aa50")("./XRX_"+t.content+".jpg")},null,8,["src"])],12,["onClick"])})),128)),Object(i["e"])("p",f," 剩余空位:"+Object(i["h"])(7-m.penddingList.length)+"/7；已消除:"+Object(i["h"])(m.clearList.length)+"/"+Object(i["h"])(m.cardItemList.length+m.penddingList.length+m.saveList.length+m.clearList.length),1)],4),Object(i["e"])("div",h,[b,Object(i["e"])("button",{disabled:!m.tools.save,onClick:e[9]||(e[9]=function(){return y.saveCard.apply(y,arguments)})}," 取出3个卡片 ",8,["disabled"]),Object(i["e"])("button",{disabled:!m.tools.rand,onClick:e[10]||(e[10]=function(){return y.randCard.apply(y,arguments)})},"随机",8,["disabled"]),Object(i["e"])("button",{onClick:e[11]||(e[11]=function(){return y.rePlay.apply(y,arguments)})},"再来一轮")])]))}n("99af"),n("cb29"),n("4de4"),n("4160"),n("c975"),n("fb6a"),n("45fc"),n("a9e3"),n("159b");var g=n("d4ec"),m=n("bee2"),y=n("ade3"),v=function(){function t(e){var n=e.x,i=e.y,c=e.z,r=e.key;Object(g["a"])(this,t),this.x=n,this.y=i,this.z=c,this.key=r;var a=0*c;this.val=r,this.style={top:i*t.y+a+"px",left:n*t.x+a+"px",width:2*t.x-2+"px",height:2*t.y-8+"px"}}return Object(m["a"])(t,[{key:"setValue",value:function(e){this.val=e,this.content=t.contentType[e],Object.assign(this.style,t.colorType[e])}}]),t}();Object(y["a"])(v,"x",20),Object(y["a"])(v,"y",21),Object(y["a"])(v,"colorType",{1:{background:"#FFB7DD"},2:{background:"#FFCCCC"},3:{background:"#FFC8B4"},4:{background:"#FFDDAA"},5:{background:"#FFEE99"},6:{background:"#FFFFBB"},7:{background:"#EEFFBB"},8:{background:"#CCFF99"},9:{background:"#99FF99"},10:{background:"#BBFFEE"},11:{background:"#AAFFEE"},12:{background:"#99FFFF"},13:{background:"#CCEEFF"},14:{background:"#CCDDFF"}}),Object(y["a"])(v,"contentType",{1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",10:"10",11:"11",12:"12",13:"13",14:"14"});var O={data:function(){return{option:{x:7,y:4,z:8,cardRandom:.2,maxCardType:10},step:0,win:!1,cardMap:[],cardItemList:[],penddingList:[],clearList:[],saveList:[],calcValueList:[],maxWidth:0,maxHeight:0,tools:{save:!0,rand:!0},timer:0}},computed:{cardWrapStyle:function(){return{width:(this.maxWidth+2)*v.x+"px",height:(this.maxHeight+1)*v.y+"px"}},leftOffset:function(){var t=(this.maxWidth+2)*v.x;return(t-7*v.x*2)/2}},methods:{randCard:function(){var t=this;if(this.tools.rand){this.tools.rand=!1;var e=this.cardItemList.length;this.cardItemList.forEach((function(n){var i,c=Math.floor(e*Math.random()),r=t.cardItemList[c];i=n.style.left,n.style.left=r.style.left,r.style.left=i,i=n.style.top,n.style.top=r.style.top,r.style.top=i,i=n.x,n.x=r.x,r.x=i,i=n.y,n.y=r.y,r.y=i,i=n.z,n.z=r.z,r.z=i})),this.cardItemList.sort((function(t,e){return t.z-e.z})),this.calcCover()}},saveCard:function(){var t=this;if(!this.tools.save)return!1;this.tools.save=!1,this.saveList=this.penddingList.slice(0,3),setTimeout((function(){t.saveList.forEach((function(e,n){e.style.top="110%",e.style.left=t.leftOffset+n*v.x*2+"px",t.calcValueList[e.val]--}))}),0),this.penddingList=this.penddingList.slice(3),this.penddingList.forEach((function(e,n){e.style.top="160%",e.style.left=t.leftOffset+n*v.x*2+"px"}))},initGame:function(){this.step=1,this.getMap(this.option),this.penddingList=[],this.clearList=[],this.saveList=[],this.tools.save=!0,this.tools.rand=!0,this.setCardValue({maxCardType:Number(this.option.maxCardType)}),this.calcCover()},getMap:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.x,n=t.y,i=t.z,c=t.cardRandom;this.maxWidth=2*(e-1),this.maxHeight=2*(n-1)+1;for(var r=new Array(i),a=[],o=0,s=0;s<i;s++){r[s]=new Array(this.maxHeight);for(var l=0;l<=this.maxHeight;l++)r[s][l]=new Array(this.maxWidth).fill(0)}for(var u=0;u<i;u++)for(var p=Math.floor((i-u)/3),d=p;d<this.maxHeight-p;d++)for(var f=Math.ceil((this.maxWidth-p)/2),h=p;h<=f;h++){var b=!0;if((h>0&&r[u][d][h-1]||d>0&&r[u][d-1][h]||d>0&&h>0&&r[u][d-1][h-1]||d>0&&r[u][d-1][h+1]||u>0&&r[u-1][d][h]||Math.random()>=c)&&(b=!1),b){o++;var j=new v({x:h,y:d,z:u,key:o});if(r[u][d][h]=j,a.push(j),h<f){o++;var g=new v({x:this.maxWidth-h,y:d,z:u,key:o});r[u][d][h]=g,a.push(g)}}}a.reverse();for(var m=1;m<=o%3;m++){var y=a.pop();r[y.z][y.y][y.x]=0}a.reverse(),this.cardMap=r,this.cardItemList=a},setCardValue:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.maxCardType,n=new Array(e);this.calcValueList=new Array(e+1).fill(0),this.cardItemList.forEach((function(t){var i=Math.ceil(Math.random()*e);n[i]?(n[i].push(t),3===n[i].length&&(n[i].forEach((function(t){t.setValue(i)})),n[i]=null)):n[i]=[t]}));var i=2;n.forEach((function(t){t&&t.forEach((function(t){i++,t.setValue(Math.floor(i/3))}))}))},calcCover:function(){for(var t=new Array(this.maxHeight),e=0;e<=this.maxHeight;e++)t[e]=new Array(this.maxWidth).fill(!1);for(var n=this.cardItemList.length-1;n>=0;n--){var i=this.cardItemList[n],c=i.x,r=i.y;t[r][c]||t[r][c+1]||t[r+1][c]||t[r+1][c+1]?i.cover=!0:i.cover=!1,t[r][c]=!0,t[r+1][c]=!0,t[r][c+1]=!0,t[r+1][c+1]=!0}},clickSaveCard:function(t){this.cardItemList.push(t);var e=this.saveList.indexOf(t);this.saveList=this.saveList.slice(0,e).concat(this.saveList.slice(e+1)),this.clickCard(t)},removeThree:function(){var t=this;this.penddingList.some((function(e){3===t.calcValueList[e.val]&&(t.penddingList.forEach((function(n){n.val===e.val&&t.clearList.push(n)})),setTimeout((function(){t.clearList.forEach((function(e){e.style.left=t.leftOffset-60+"px"}))}),300),t.penddingList=t.penddingList.filter((function(t){return t.val!==e.val})),t.penddingList.forEach((function(e,n){e.style.top="160%",e.style.left=t.leftOffset+n*v.x*2+"px"})),t.calcValueList[e.val]=0,0===t.cardItemList.length&&(t.step=2,t.result=!0))})),this.penddingList.length>=7&&(this.step=2,this.result=!1)},clickCard:function(t){var e=this;clearTimeout(this.timer),this.removeThree(),this.penddingList.push(t);var n=this.cardItemList.indexOf(t);this.cardItemList=this.cardItemList.slice(0,n).concat(this.cardItemList.slice(n+1)),this.calcCover(),this.calcValueList[t.val]++,setTimeout((function(){t.style.top="160%",t.style.left=e.leftOffset+(e.penddingList.length-1)*v.x*2+"px"}),0),this.timer=setTimeout((function(){e.removeThree()}),500)},startGame:function(){this.initGame()},setGame:function(){this.step=0},rePlay:function(){this.initGame()}}};n("64be");O.render=j;var x=O;Object(i["b"])(x).mount("#app")},"64be":function(t,e,n){"use strict";n("c894")},"65b6":function(t,e,n){t.exports=n.p+"img/XRX_14.f0e28d60.jpg"},"6b9b":function(t,e,n){t.exports=n.p+"img/XRX_12.dfa508e9.jpg"},8067:function(t,e,n){t.exports=n.p+"img/XRX_13.df46ac69.jpg"},"810c":function(t,e,n){t.exports=n.p+"img/XRX_5.e68077bb.jpg"},"946e":function(t,e,n){t.exports=n.p+"img/XRX_11.2aedfb75.jpg"},aa50:function(t,e,n){var i={"./XRX_1.jpg":"4e2e","./XRX_10.jpg":"f9df","./XRX_11.jpg":"946e","./XRX_12.jpg":"6b9b","./XRX_13.jpg":"8067","./XRX_14.jpg":"65b6","./XRX_2.jpg":"1229","./XRX_3.jpg":"33ef","./XRX_4.jpg":"3d3e","./XRX_5.jpg":"810c","./XRX_6.jpg":"473a","./XRX_7.jpg":"1507","./XRX_8.jpg":"d833","./XRX_9.jpg":"ecc3"};function c(t){var e=r(t);return n(e)}function r(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}c.keys=function(){return Object.keys(i)},c.resolve=r,t.exports=c,c.id="aa50"},c894:function(t,e,n){},d833:function(t,e,n){t.exports=n.p+"img/XRX_8.8feadec1.jpg"},ecc3:function(t,e,n){t.exports=n.p+"img/XRX_9.f994d66b.jpg"},f9df:function(t,e,n){t.exports=n.p+"img/XRX_10.0bb36fdd.jpg"}});
//# sourceMappingURL=app.5954ca09.js.map