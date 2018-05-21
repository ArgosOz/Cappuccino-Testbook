var ObjectiveJ={};
(function(_1,_2){
if(!Object.create){
Object.create=function(o){
if(arguments.length>1){
throw new Error("Object.create implementation only accepts the first parameter.");
}
function F(){
};
F.prototype=o;
return new F();
};
}
if(!Object.keys){
Object.keys=(function(){
var _3=Object.prototype.hasOwnProperty,_4=!{toString:null}.propertyIsEnumerable("toString"),_5=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],_6=_5.length;
return function(_7){
if(typeof _7!=="object"&&typeof _7!=="function"||_7===null){
throw new TypeError("Object.keys called on non-object");
}
var _8=[];
for(var _9 in _7){
if(_3.call(_7,_9)){
_8.push(_9);
}
}
if(_4){
for(var i=0;i<_6;i++){
if(_3.call(_7,_5[i])){
_8.push(_5[i]);
}
}
}
return _8;
};
})();
}
if(!Array.prototype.indexOf){
Array.prototype.indexOf=function(_a){
"use strict";
if(this===null){
throw new TypeError();
}
var t=new Object(this),_b=t.length>>>0;
if(_b===0){
return -1;
}
var n=0;
if(arguments.length>1){
n=Number(arguments[1]);
if(n!=n){
n=0;
}else{
if(n!==0&&n!=Infinity&&n!=-Infinity){
n=(n>0||-1)*Math.floor(Math.abs(n));
}
}
}
if(n>=_b){
return -1;
}
var k=n>=0?n:Math.max(_b-Math.abs(n),0);
for(;k<_b;k++){
if(k in t&&t[k]===_a){
return k;
}
}
return -1;
};
}
if(!String.prototype.startsWith){
String.prototype.startsWith=function(_c,_d){
_d=_d||0;
return this.substr(_d,_c.length)===_c;
};
}
if(!String.prototype.endsWith){
String.prototype.endsWith=function(_e,_f){
var _10=this.toString();
if(typeof _f!=="number"||!isFinite(_f)||Math.floor(_f)!==_f||_f>_10.length){
_f=_10.length;
}
_f-=_e.length;
var _11=_10.indexOf(_e,_f);
return _11!==-1&&_11===_f;
};
}
if(!this.JSON){
JSON={};
}
(function(){
function f(n){
return n<10?"0"+n:n;
};
if(typeof Date.prototype.toJSON!=="function"){
Date.prototype.toJSON=function(key){
return this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z";
};
String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){
return this.valueOf();
};
}
var cx=new RegExp("[\\u0000\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]","g");
var _12=new RegExp("[\\\\\\\"\\x00-\\x1f\\x7f-\\x9f\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]","g");
var gap,_13,_14={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r","\"":"\\\"","\\":"\\\\"},rep;
function _15(_16){
_12.lastIndex=0;
return _12.test(_16)?"\""+_16.replace(_12,function(a){
var c=_14[a];
return typeof c==="string"?c:"\\u"+("0000"+(a.charCodeAt(0)).toString(16)).slice(-4);
})+"\"":"\""+_16+"\"";
};
function str(key,_17){
var i,k,v,_18,_19=gap,_1a,_1b=_17[key];
if(_1b&&typeof _1b==="object"&&typeof _1b.toJSON==="function"){
_1b=_1b.toJSON(key);
}
if(typeof rep==="function"){
_1b=rep.call(_17,key,_1b);
}
switch(typeof _1b){
case "string":
return _15(_1b);
case "number":
return isFinite(_1b)?String(_1b):"null";
case "boolean":
case "null":
return String(_1b);
case "object":
if(!_1b){
return "null";
}
gap+=_13;
_1a=[];
if(Object.prototype.toString.apply(_1b)==="[object Array]"){
_18=_1b.length;
for(i=0;i<_18;i+=1){
_1a[i]=str(i,_1b)||"null";
}
v=_1a.length===0?"[]":gap?"[\n"+gap+_1a.join(",\n"+gap)+"\n"+_19+"]":"["+_1a.join(",")+"]";
gap=_19;
return v;
}
if(rep&&typeof rep==="object"){
_18=rep.length;
for(i=0;i<_18;i+=1){
k=rep[i];
if(typeof k==="string"){
v=str(k,_1b);
if(v){
_1a.push(_15(k)+(gap?": ":":")+v);
}
}
}
}else{
for(k in _1b){
if(Object.hasOwnProperty.call(_1b,k)){
v=str(k,_1b);
if(v){
_1a.push(_15(k)+(gap?": ":":")+v);
}
}
}
}
v=_1a.length===0?"{}":gap?"{\n"+gap+_1a.join(",\n"+gap)+"\n"+_19+"}":"{"+_1a.join(",")+"}";
gap=_19;
return v;
}
};
if(typeof JSON.stringify!=="function"){
JSON.stringify=function(_1c,_1d,_1e){
var i;
gap="";
_13="";
if(typeof _1e==="number"){
for(i=0;i<_1e;i+=1){
_13+=" ";
}
}else{
if(typeof _1e==="string"){
_13=_1e;
}
}
rep=_1d;
if(_1d&&typeof _1d!=="function"&&(typeof _1d!=="object"||typeof _1d.length!=="number")){
throw new Error("JSON.stringify");
}
return str("",{"":_1c});
};
}
if(typeof JSON.parse!=="function"){
JSON.parse=function(_1f,_20){
var j;
function _21(_22,key){
var k,v,_23=_22[key];
if(_23&&typeof _23==="object"){
for(k in _23){
if(Object.hasOwnProperty.call(_23,k)){
v=_21(_23,k);
if(v!==_32){
_23[k]=v;
}else{
delete _23[k];
}
}
}
}
return _20.call(_22,key,_23);
};
cx.lastIndex=0;
if(cx.test(_1f)){
_1f=_1f.replace(cx,function(a){
return "\\u"+("0000"+(a.charCodeAt(0)).toString(16)).slice(-4);
});
}
if(/^[\],:{}\s]*$/.test(((_1f.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@")).replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]")).replace(/(?:^|:|,)(?:\s*\[)+/g,""))){
j=eval("("+_1f+")");
return typeof _20==="function"?_21({"":j},""):j;
}
throw new SyntaxError("JSON.parse");
};
}
})();
var _24=/([^%]+|%(?:\d+\$)?[\+\-\ \#0]*[0-9\*]*(.[0-9\*]+)?[hlL]?[cbBdieEfgGosuxXpn%@])/g,_25=/(%)(?:(\d+)\$)?([\+\-\ \#0]*)([0-9\*]*)((?:.[0-9\*]+)?)([hlL]?)([cbBdieEfgGosuxXpn%@])/;
_2.sprintf=function(_26){
var _26=arguments[0],_27=_26.match(_24),_28=0,_29="",arg=1;
for(var i=0;i<_27.length;i++){
var t=_27[i];
if(_26.substring(_28,_28+t.length)!==t){
return _29;
}
_28+=t.length;
if(t.charAt(0)!=="%"){
_29+=t;
}else{
if(t==="%%"){
_29+="%";
}else{
var _2a=t.match(_25);
if(_2a.length!==8||_2a[0]!==t){
return _29;
}
var _2b=_2a[1],_2c=_2a[2],_2d=_2a[3],_2e=_2a[4],_2f=_2a[5],_30=_2a[6],_31=_2a[7];
if(_2c===_32||_2c===null||_2c===""){
_2c=arg++;
}else{
_2c=Number(_2c);
}
var _33=null;
if(_2e=="*"){
_33=arguments[_2c];
}else{
if(_2e!==""){
_33=Number(_2e);
}
}
var _34=null;
if(_2f===".*"){
_34=arguments[_2c];
}else{
if(_2f!==""){
_34=Number(_2f.substring(1));
}
}
var _35=_2d.indexOf("-")>=0,_36=_2d.indexOf("0")>=0,_37="";
if(/[bBdiufeExXo]/.test(_31)){
var num=Number(arguments[_2c]),_38="";
if(num<0){
_38="-";
}else{
if(_2d.indexOf("+")>=0){
_38="+";
}else{
if(_2d.indexOf(" ")>=0){
_38=" ";
}
}
}
if(_31==="d"||_31==="i"||_31==="u"){
var _39=String(Math.abs(Math.floor(num)));
_37=_3a(_38,"",_39,"",_33,_35,_36);
}
if(_31=="f"){
var _39=String(_34!==null?(Math.abs(num)).toFixed(_34):Math.abs(num)),_3b=_2d.indexOf("#")>=0&&_39.indexOf(".")<0?".":"";
_37=_3a(_38,"",_39,_3b,_33,_35,_36);
}
if(_31==="e"||_31==="E"){
var _39=String((Math.abs(num)).toExponential(_34!==null?_34:21)),_3b=_2d.indexOf("#")>=0&&_39.indexOf(".")<0?".":"";
_37=_3a(_38,"",_39,_3b,_33,_35,_36);
}
if(_31=="x"||_31=="X"){
var _39=String((Math.abs(num)).toString(16));
var _3c=_2d.indexOf("#")>=0&&num!=0?"0x":"";
_37=_3a(_38,_3c,_39,"",_33,_35,_36);
}
if(_31=="b"||_31=="B"){
var _39=String((Math.abs(num)).toString(2));
var _3c=_2d.indexOf("#")>=0&&num!=0?"0b":"";
_37=_3a(_38,_3c,_39,"",_33,_35,_36);
}
if(_31=="o"){
var _39=String((Math.abs(num)).toString(8));
var _3c=_2d.indexOf("#")>=0&&num!=0?"0":"";
_37=_3a(_38,_3c,_39,"",_33,_35,_36);
}
if(/[A-Z]/.test(_31)){
_37=_37.toUpperCase();
}else{
_37=_37.toLowerCase();
}
}else{
var _37="";
if(_31==="%"){
_37="%";
}else{
if(_31==="c"){
_37=(String(arguments[_2c])).charAt(0);
}else{
if(_31==="s"||_31==="@"){
_37=String(arguments[_2c]);
}else{
if(_31==="p"||_31==="n"){
_37="";
}
}
}
}
_37=_3a("","",_37,"",_33,_35,false);
}
_29+=_37;
}
}
}
return _29;
};
function _3a(_3d,_3e,_3f,_40,_41,_42,_43){
var _44=_3d.length+_3e.length+_3f.length+_40.length;
if(_42){
return _3d+_3e+_3f+_40+pad(_41-_44," ");
}else{
if(_43){
return _3d+_3e+pad(_41-_44,"0")+_3f+_40;
}else{
return pad(_41-_44," ")+_3d+_3e+_3f+_40;
}
}
};
function pad(n,ch){
return (Array(MAX(0,n)+1)).join(ch);
};
CPLogDisable=false;
var _45="Cappuccino";
var _46=["fatal","error","warn","info","debug","trace"];
var _47=_46[3];
var _48={};
for(var i=0;i<_46.length;i++){
_48[_46[i]]=i;
}
var _49={};
CPLogRegister=function(_4a,_4b,_4c){
CPLogRegisterRange(_4a,_46[0],_4b||_46[_46.length-1],_4c);
};
CPLogRegisterRange=function(_4d,_4e,_4f,_50){
var min=_48[_4e];
var max=_48[_4f];
if(min!==_32&&max!==_32&&min<=max){
for(var i=min;i<=max;i++){
CPLogRegisterSingle(_4d,_46[i],_50);
}
}
};
CPLogRegisterSingle=function(_51,_52,_53){
if(!_49[_52]){
_49[_52]=[];
}
for(var i=0;i<_49[_52].length;i++){
if(_49[_52][i][0]===_51){
_49[_52][i][1]=_53;
return;
}
}
_49[_52].push([_51,_53]);
};
CPLogUnregister=function(_54){
for(var _55 in _49){
for(var i=0;i<_49[_55].length;i++){
if(_49[_55][i][0]===_54){
_49[_55].splice(i--,1);
}
}
}
};
function _56(_57,_58,_59){
if(_59==_32){
_59=_45;
}
if(_58==_32){
_58=_47;
}
var _5a=typeof _57[0]=="string"&&_57.length>1?_2.sprintf.apply(null,_57):String(_57[0]);
if(_49[_58]){
for(var i=0;i<_49[_58].length;i++){
var _5b=_49[_58][i];
_5b[0](_5a,_58,_59,_5b[1]);
}
}
};
CPLog=function(){
_56(arguments);
};
for(var i=0;i<_46.length;i++){
CPLog[_46[i]]=(function(_5c){
return function(){
_56(arguments,_5c);
};
})(_46[i]);
}
var _5d=function(_5e,_5f,_60){
var now=new Date(),_61;
if(_5f===null){
_5f="";
}else{
_5f=_5f||"info";
_5f="["+CPLogColorize(_5f,_5f)+"]";
}
_60=_60||"";
if(_60&&_5f){
_60+=" ";
}
_61=_60+_5f;
if(_61){
_61+=": ";
}
if(typeof _2.sprintf=="function"){
return _2.sprintf("%4d-%02d-%02d %02d:%02d:%02d.%03d %s%s",now.getFullYear(),now.getMonth()+1,now.getDate(),now.getHours(),now.getMinutes(),now.getSeconds(),now.getMilliseconds(),_61,_5e);
}else{
return now+" "+_61+": "+_5e;
}
};
CPLogConsole=function(_62,_63,_64,_65){
if(typeof console!="undefined"){
var _66=(_65||_5d)(_62,_63,_64),_67={"fatal":"error","error":"error","warn":"warn","info":"info","debug":"debug","trace":"debug"}[_63];
if(_67&&console[_67]){
console[_67](_66);
}else{
if(console.log){
console.log(_66);
}
}
}
};
CPLogColorize=function(_68,_69){
return _68;
};
CPLogAlert=function(_6a,_6b,_6c,_6d){
if(typeof alert!="undefined"&&!CPLogDisable){
var _6e=(_6d||_5d)(_6a,_6b,_6c);
CPLogDisable=!confirm(_6e+"\n\n(Click cancel to stop log alerts)");
}
};
var _6f=null;
CPLogPopup=function(_70,_71,_72,_73){
try{
if(CPLogDisable||window.open==_32){
return;
}
if(!_6f||!_6f.document){
_6f=window.open("","_blank","width=600,height=400,status=no,resizable=yes,scrollbars=yes");
if(!_6f){
CPLogDisable=!confirm(_70+"\n\n(Disable pop-up blocking for CPLog window; Click cancel to stop log alerts)");
return;
}
_74(_6f);
}
var _75=_6f.document.createElement("div");
_75.setAttribute("class",_71||"fatal");
var _76=(_73||_5d)(_70,_73?_71:null,_72);
_75.appendChild(_6f.document.createTextNode(_76));
_6f.log.appendChild(_75);
if(_6f.focusEnabled.checked){
_6f.focus();
}
if(_6f.blockEnabled.checked){
_6f.blockEnabled.checked=_6f.confirm(_76+"\nContinue blocking?");
}
if(_6f.scrollEnabled.checked){
_6f.scrollToBottom();
}
}
catch(e){
}
};
var _77="<style type=\"text/css\" media=\"screen\"> body{font:10px Monaco,Courier,\"Courier New\",monospace,mono;padding-top:15px;} div > .fatal,div > .error,div > .warn,div > .info,div > .debug,div > .trace{display:none;overflow:hidden;white-space:pre;padding:0px 5px 0px 5px;margin-top:2px;-moz-border-radius:5px;-webkit-border-radius:5px;} div[wrap=\"yes\"] > div{white-space:normal;} .fatal{background-color:#ffb2b3;} .error{background-color:#ffe2b2;} .warn{background-color:#fdffb2;} .info{background-color:#e4ffb2;} .debug{background-color:#a0e5a0;} .trace{background-color:#99b9ff;} .enfatal .fatal,.enerror .error,.enwarn .warn,.eninfo .info,.endebug .debug,.entrace .trace{display:block;} div#header{background-color:rgba(240,240,240,0.82);position:fixed;top:0px;left:0px;width:100%;border-bottom:1px solid rgba(0,0,0,0.33);text-align:center;} ul#enablers{display:inline-block;margin:1px 15px 0 15px;padding:2px 0 2px 0;} ul#enablers li{display:inline;padding:0px 5px 0px 5px;margin-left:4px;-moz-border-radius:5px;-webkit-border-radius:5px;} [enabled=\"no\"]{opacity:0.25;} ul#options{display:inline-block;margin:0 15px 0px 15px;padding:0 0px;} ul#options li{margin:0 0 0 0;padding:0 0 0 0;display:inline;} </style>";
function _74(_78){
var doc=_78.document;
doc.writeln("<html><head><title></title>"+_77+"</head><body></body></html>");
doc.title=_45+" Run Log";
var _79=(doc.getElementsByTagName("head"))[0];
var _7a=(doc.getElementsByTagName("body"))[0];
var _7b=window.location.protocol+"//"+window.location.host+window.location.pathname;
_7b=_7b.substring(0,_7b.lastIndexOf("/")+1);
var div=doc.createElement("div");
div.setAttribute("id","header");
_7a.appendChild(div);
var ul=doc.createElement("ul");
ul.setAttribute("id","enablers");
div.appendChild(ul);
for(var i=0;i<_46.length;i++){
var li=doc.createElement("li");
li.setAttribute("id","en"+_46[i]);
li.setAttribute("class",_46[i]);
li.setAttribute("onclick","toggle(this);");
li.setAttribute("enabled","yes");
li.appendChild(doc.createTextNode(_46[i]));
ul.appendChild(li);
}
var ul=doc.createElement("ul");
ul.setAttribute("id","options");
div.appendChild(ul);
var _7c={"focus":["Focus",false],"block":["Block",false],"wrap":["Wrap",false],"scroll":["Scroll",true],"close":["Close",true]};
for(o in _7c){
var li=doc.createElement("li");
ul.appendChild(li);
_78[o+"Enabled"]=doc.createElement("input");
_78[o+"Enabled"].setAttribute("id",o);
_78[o+"Enabled"].setAttribute("type","checkbox");
if(_7c[o][1]){
_78[o+"Enabled"].setAttribute("checked","checked");
}
li.appendChild(_78[o+"Enabled"]);
var _7d=doc.createElement("label");
_7d.setAttribute("for",o);
_7d.appendChild(doc.createTextNode(_7c[o][0]));
li.appendChild(_7d);
}
_78.log=doc.createElement("div");
_78.log.setAttribute("class","enerror endebug enwarn eninfo enfatal entrace");
_7a.appendChild(_78.log);
_78.toggle=function(_7e){
var _7f=_7e.getAttribute("enabled")=="yes"?"no":"yes";
_7e.setAttribute("enabled",_7f);
if(_7f=="yes"){
_78.log.className+=" "+_7e.id;
}else{
_78.log.className=_78.log.className.replace(new RegExp("[\\s]*"+_7e.id,"g"),"");
}
};
_78.scrollToBottom=function(){
_78.scrollTo(0,_7a.offsetHeight);
};
_78.wrapEnabled.addEventListener("click",function(){
_78.log.setAttribute("wrap",_78.wrapEnabled.checked?"yes":"no");
},false);
_78.addEventListener("keydown",function(e){
var e=e||_78.event;
if(e.keyCode==75&&(e.ctrlKey||e.metaKey)){
while(_78.log.firstChild){
_78.log.removeChild(_78.log.firstChild);
}
e.preventDefault();
}
},"false");
window.addEventListener("unload",function(){
if(_78&&_78.closeEnabled&&_78.closeEnabled.checked){
CPLogDisable=true;
_78.close();
}
},false);
_78.addEventListener("unload",function(){
if(!CPLogDisable){
CPLogDisable=!confirm("Click cancel to stop logging");
}
},false);
};
CPLogDefault=typeof window==="object"&&window.console?CPLogConsole:CPLogPopup;
var _32;
if(typeof window!=="undefined"){
window.setNativeTimeout=window.setTimeout;
window.clearNativeTimeout=window.clearTimeout;
window.setNativeInterval=window.setInterval;
window.clearNativeInterval=window.clearInterval;
}
NO=false;
YES=true;
nil=null;
Nil=null;
NULL=null;
ABS=Math.abs;
ASIN=Math.asin;
ACOS=Math.acos;
ATAN=Math.atan;
ATAN2=Math.atan2;
SIN=Math.sin;
COS=Math.cos;
TAN=Math.tan;
EXP=Math.exp;
POW=Math.pow;
CEIL=Math.ceil;
FLOOR=Math.floor;
ROUND=Math.round;
MIN=Math.min;
MAX=Math.max;
RAND=Math.random;
SQRT=Math.sqrt;
E=Math.E;
LN2=Math.LN2;
LN10=Math.LN10;
LOG=Math.log;
LOG2E=Math.LOG2E;
LOG10E=Math.LOG10E;
PI=Math.PI;
PI2=Math.PI*2;
PI_2=Math.PI/2;
SQRT1_2=Math.SQRT1_2;
SQRT2=Math.SQRT2;
function _80(_81){
this._eventListenersForEventNames={};
this._owner=_81;
};
_80.prototype.addEventListener=function(_82,_83){
var _84=this._eventListenersForEventNames;
if(!_85.call(_84,_82)){
var _86=[];
_84[_82]=_86;
}else{
var _86=_84[_82];
}
var _87=_86.length;
while(_87--){
if(_86[_87]===_83){
return;
}
}
_86.push(_83);
};
_80.prototype.removeEventListener=function(_88,_89){
var _8a=this._eventListenersForEventNames;
if(!_85.call(_8a,_88)){
return;
}
var _8b=_8a[_88],_8c=_8b.length;
while(_8c--){
if(_8b[_8c]===_89){
return _8b.splice(_8c,1);
}
}
};
_80.prototype.dispatchEvent=function(_8d){
var _8e=_8d.type,_8f=this._eventListenersForEventNames;
if(_85.call(_8f,_8e)){
var _90=this._eventListenersForEventNames[_8e],_91=0,_92=_90.length;
for(;_91<_92;++_91){
_90[_91](_8d);
}
}
var _93=(this._owner||this)["on"+_8e];
if(_93){
_93(_8d);
}
};
var _94=0,_95=null,_96=[];
function _97(_98){
var _99=_94;
if(_95===null){
window.setNativeTimeout(function(){
var _9a=_96,_9b=0,_9c=_96.length;
++_94;
_95=null;
_96=[];
for(;_9b<_9c;++_9b){
_9a[_9b]();
}
},0);
}
return function(){
var _9d=arguments;
if(_94>_99){
_98.apply(this,_9d);
}else{
_96.push(function(){
_98.apply(this,_9d);
});
}
};
};
var _9e=null;
if(window.XMLHttpRequest){
_9e=window.XMLHttpRequest;
}else{
if(window.ActiveXObject!==_32){
var _9f=["Msxml2.XMLHTTP.3.0","Msxml2.XMLHTTP.6.0"],_a0=_9f.length;
while(_a0--){
try{
var _a1=_9f[_a0];
new ActiveXObject(_a1);
_9e=function(){
return new ActiveXObject(_a1);
};
break;
}
catch(anException){
}
}
}
}
CFHTTPRequest=function(){
this._isOpen=false;
this._requestHeaders={};
this._mimeType=null;
this._eventDispatcher=new _80(this);
this._nativeRequest=new _9e();
this._withCredentials=false;
this._timeout=60000;
var _a2=this;
this._stateChangeHandler=function(){
_bb(_a2);
};
this._timeoutHandler=function(){
_b9(_a2);
};
this._nativeRequest.onreadystatechange=this._stateChangeHandler;
this._nativeRequest.ontimeout=this._timeoutHandler;
if(CFHTTPRequest.AuthenticationDelegate!==nil){
this._eventDispatcher.addEventListener("HTTP403",function(){
CFHTTPRequest.AuthenticationDelegate(_a2);
});
}
};
CFHTTPRequest.UninitializedState=0;
CFHTTPRequest.LoadingState=1;
CFHTTPRequest.LoadedState=2;
CFHTTPRequest.InteractiveState=3;
CFHTTPRequest.CompleteState=4;
CFHTTPRequest.AuthenticationDelegate=nil;
CFHTTPRequest.prototype.status=function(){
try{
return this._nativeRequest.status||0;
}
catch(anException){
return 0;
}
};
CFHTTPRequest.prototype.statusText=function(){
try{
return this._nativeRequest.statusText||"";
}
catch(anException){
return "";
}
};
CFHTTPRequest.prototype.readyState=function(){
return this._nativeRequest.readyState;
};
CFHTTPRequest.prototype.success=function(){
var _a3=this.status();
if(_a3>=200&&_a3<300){
return YES;
}
return _a3===0&&this.responseText()&&(this.responseText()).length;
};
CFHTTPRequest.prototype.responseXML=function(){
var _a4=this._nativeRequest.responseXML;
if(_a4&&_9e===window.XMLHttpRequest&&_a4.documentRoot){
return _a4;
}
return _a5(this.responseText());
};
CFHTTPRequest.prototype.responsePropertyList=function(){
var _a6=this.responseText();
if(CFPropertyList.sniffedFormatOfString(_a6)===CFPropertyList.FormatXML_v1_0){
return CFPropertyList.propertyListFromXML(this.responseXML());
}
return CFPropertyList.propertyListFromString(_a6);
};
CFHTTPRequest.prototype.responseText=function(){
return this._nativeRequest.responseText;
};
CFHTTPRequest.prototype.setRequestHeader=function(_a7,_a8){
this._requestHeaders[_a7]=_a8;
};
CFHTTPRequest.prototype.getResponseHeader=function(_a9){
return this._nativeRequest.getResponseHeader(_a9);
};
CFHTTPRequest.prototype.setTimeout=function(_aa){
this._timeout=_aa;
if(this._isOpen){
this._nativeRequest.timeout=_aa;
}
};
CFHTTPRequest.prototype.getTimeout=function(_ab){
return this._timeout;
};
CFHTTPRequest.prototype.getAllResponseHeaders=function(){
return this._nativeRequest.getAllResponseHeaders();
};
CFHTTPRequest.prototype.overrideMimeType=function(_ac){
this._mimeType=_ac;
};
CFHTTPRequest.prototype.open=function(_ad,_ae,_af,_b0,_b1){
var _b2;
this._isOpen=true;
this._URL=_ae;
this._async=_af;
this._method=_ad;
this._user=_b0;
this._password=_b1;
requestReturnValue=this._nativeRequest.open(_ad,_ae,_af,_b0,_b1);
if(this._async){
this._nativeRequest.withCredentials=this._withCredentials;
this._nativeRequest.timeout=this._timeout;
}
return requestReturnValue;
};
CFHTTPRequest.prototype.send=function(_b3){
if(!this._isOpen){
delete this._nativeRequest.onreadystatechange;
delete this._nativeRequest.ontimeout;
this._nativeRequest.open(this._method,this._URL,this._async,this._user,this._password);
this._nativeRequest.ontimeout=this._timeoutHandler;
this._nativeRequest.onreadystatechange=this._stateChangeHandler;
}
for(var i in this._requestHeaders){
if(this._requestHeaders.hasOwnProperty(i)){
this._nativeRequest.setRequestHeader(i,this._requestHeaders[i]);
}
}
if(this._mimeType&&"overrideMimeType" in this._nativeRequest){
this._nativeRequest.overrideMimeType(this._mimeType);
}
this._isOpen=false;
try{
return this._nativeRequest.send(_b3);
}
catch(anException){
this._eventDispatcher.dispatchEvent({type:"failure",request:this});
}
};
CFHTTPRequest.prototype.abort=function(){
this._isOpen=false;
return this._nativeRequest.abort();
};
CFHTTPRequest.prototype.addEventListener=function(_b4,_b5){
this._eventDispatcher.addEventListener(_b4,_b5);
};
CFHTTPRequest.prototype.removeEventListener=function(_b6,_b7){
this._eventDispatcher.removeEventListener(_b6,_b7);
};
CFHTTPRequest.prototype.setWithCredentials=function(_b8){
this._withCredentials=_b8;
if(this._isOpen&&this._async){
this._nativeRequest.withCredentials=_b8;
}
};
CFHTTPRequest.prototype.withCredentials=function(){
return this._withCredentials;
};
CFHTTPRequest.prototype.isTimeoutRequest=function(){
return !this.success()&&!this._nativeRequest.response&&!this._nativeRequest.responseText&&!this._nativeRequest.responseType&&!this._nativeRequest.responseURL&&!this._nativeRequest.responseXML;
};
function _b9(_ba){
_ba._eventDispatcher.dispatchEvent({type:"timeout",request:_ba});
};
function _bb(_bc){
var _bd=_bc._eventDispatcher,_be=["uninitialized","loading","loaded","interactive","complete"];
_bd.dispatchEvent({type:"readystatechange",request:_bc});
if(_be[_bc.readyState()]==="complete"){
var _bf="HTTP"+_bc.status();
_bd.dispatchEvent({type:_bf,request:_bc});
var _c0=_bc.success()?"success":"failure";
_bd.dispatchEvent({type:_c0,request:_bc});
_bd.dispatchEvent({type:_be[_bc.readyState()],request:_bc});
}else{
_bd.dispatchEvent({type:_be[_bc.readyState()],request:_bc});
}
};
function _c1(_c2,_c3,_c4,_c5){
var _c6=new CFHTTPRequest();
if(_c2.pathExtension()==="plist"){
_c6.overrideMimeType("text/xml");
}
var _c7=0,_c8=null;
function _c9(_ca){
_c5(_ca.loaded-_c7);
_c7=_ca.loaded;
};
function _cb(_cc){
if(_c5&&_c8===null){
_c5((_cc.request.responseText()).length);
}
_c3(_cc);
};
if(_2.asyncLoader){
_c6.onsuccess=_97(_cb);
_c6.onfailure=_97(_c4);
}else{
_c6.onsuccess=_cb;
_c6.onfailure=_c4;
}
if(_c5){
var _cd=true;
if(document.all){
_cd=!!window.atob;
}
if(_cd){
try{
_c8=_2.asyncLoader?_97(_c9):_c9;
_c6._nativeRequest.onprogress=_c8;
}
catch(anException){
_c8=null;
}
}
}
_c6.open("GET",_c2.absoluteString(),_2.asyncLoader);
_c6.send("");
};
_2.asyncLoader=YES;
_2.Asynchronous=_97;
_2.determineAndDispatchHTTPRequestEvents=_bb;
var _ce=0;
objj_generateObjectUID=function(){
return _ce++;
};
CFPropertyList=function(){
this._UID=objj_generateObjectUID();
};
CFPropertyList.DTDRE=/^\s*(?:<\?\s*xml\s+version\s*=\s*\"1.0\"[^>]*\?>\s*)?(?:<\!DOCTYPE[^>]*>\s*)?/i;
CFPropertyList.XMLRE=/^\s*(?:<\?\s*xml\s+version\s*=\s*\"1.0\"[^>]*\?>\s*)?(?:<\!DOCTYPE[^>]*>\s*)?<\s*plist[^>]*\>/i;
CFPropertyList.FormatXMLDTD="<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE plist PUBLIC \"-//Apple//DTD PLIST 1.0//EN\" \"http://www.apple.com/DTDs/PropertyList-1.0.dtd\">";
CFPropertyList.Format280NorthMagicNumber="280NPLIST";
(CFPropertyList.FormatOpenStep=1,CFPropertyList.FormatXML_v1_0=100,CFPropertyList.FormatBinary_v1_0=200,CFPropertyList.Format280North_v1_0=-1000);
CFPropertyList.sniffedFormatOfString=function(_cf){
if(_cf.match(CFPropertyList.XMLRE)){
return CFPropertyList.FormatXML_v1_0;
}
if(_cf.substr(0,CFPropertyList.Format280NorthMagicNumber.length)===CFPropertyList.Format280NorthMagicNumber){
return CFPropertyList.Format280North_v1_0;
}
return NULL;
};
CFPropertyList.dataFromPropertyList=function(_d0,_d1){
var _d2=new CFMutableData();
_d2.setRawString(CFPropertyList.stringFromPropertyList(_d0,_d1));
return _d2;
};
CFPropertyList.stringFromPropertyList=function(_d3,_d4){
if(!_d4){
_d4=CFPropertyList.Format280North_v1_0;
}
var _d5=_d6[_d4];
return _d5["start"]()+_d7(_d3,_d5)+_d5["finish"]();
};
function _d7(_d8,_d9){
var _da=typeof _d8,_db=_d8.valueOf(),_dc=typeof _db;
if(_da!==_dc){
_da=_dc;
_d8=_db;
}
if(_d8===YES||_d8===NO){
_da="boolean";
}else{
if(_da==="number"){
if(FLOOR(_d8)===_d8&&(""+_d8).indexOf("e")==-1){
_da="integer";
}else{
_da="real";
}
}else{
if(_da!=="string"){
if(_d8.slice){
_da="array";
}else{
_da="dictionary";
}
}
}
}
return _d9[_da](_d8,_d9);
};
var _d6={};
_d6[CFPropertyList.FormatXML_v1_0]={"start":function(){
return CFPropertyList.FormatXMLDTD+"<plist version = \"1.0\">";
},"finish":function(){
return "</plist>";
},"string":function(_dd){
return "<string>"+_de(_dd)+"</string>";
},"boolean":function(_df){
return _df?"<true/>":"<false/>";
},"integer":function(_e0){
return "<integer>"+_e0+"</integer>";
},"real":function(_e1){
return "<real>"+_e1+"</real>";
},"array":function(_e2,_e3){
var _e4=0,_e5=_e2.length,_e6="<array>";
for(;_e4<_e5;++_e4){
_e6+=_d7(_e2[_e4],_e3);
}
return _e6+"</array>";
},"dictionary":function(_e7,_e8){
var _e9=_e7._keys,_a0=0,_ea=_e9.length,_eb="<dict>";
for(;_a0<_ea;++_a0){
var key=_e9[_a0];
_eb+="<key>"+key+"</key>";
_eb+=_d7(_e7.valueForKey(key),_e8);
}
return _eb+"</dict>";
}};
var _ec="A",_ed="D",_ee="f",_ef="d",_f0="S",_f1="T",_f2="F",_f3="K",_f4="E";
_d6[CFPropertyList.Format280North_v1_0]={"start":function(){
return CFPropertyList.Format280NorthMagicNumber+";1.0;";
},"finish":function(){
return "";
},"string":function(_f5){
return _f0+";"+_f5.length+";"+_f5;
},"boolean":function(_f6){
return (_f6?_f1:_f2)+";";
},"integer":function(_f7){
var _f8=""+_f7;
return _ef+";"+_f8.length+";"+_f8;
},"real":function(_f9){
var _fa=""+_f9;
return _ee+";"+_fa.length+";"+_fa;
},"array":function(_fb,_fc){
var _fd=0,_fe=_fb.length,_ff=_ec+";";
for(;_fd<_fe;++_fd){
_ff+=_d7(_fb[_fd],_fc);
}
return _ff+_f4+";";
},"dictionary":function(_100,_101){
var keys=_100._keys,_a0=0,_102=keys.length,_103=_ed+";";
for(;_a0<_102;++_a0){
var key=keys[_a0];
_103+=_f3+";"+key.length+";"+key;
_103+=_d7(_100.valueForKey(key),_101);
}
return _103+_f4+";";
}};
var _104="xml",_105="#document",_106="plist",_107="key",_108="dict",_109="array",_10a="string",_10b="date",_10c="true",_10d="false",_10e="real",_10f="integer",_110="data";
var _111=function(_112){
var text="",_a0=0,_113=_112.length;
for(;_a0<_113;++_a0){
var node=_112[_a0];
if(node.nodeType===3||node.nodeType===4){
text+=node.nodeValue;
}else{
if(node.nodeType!==8){
text+=_111(node.childNodes);
}
}
}
return text;
};
var _114=function(_115,_116,_117){
var node=_115;
node=node.firstChild;
if(node!=NULL&&(node.nodeType===8||node.nodeType===3||node.nodeType===7)){
while((node=node.nextSibling)&&(node.nodeType===8||node.nodeType===3||node.nodeType===7)){
}
}
if(node){
return node;
}
if(String(_115.nodeName)===_109||String(_115.nodeName)===_108){
_117.pop();
}else{
if(node===_116){
return NULL;
}
node=_115;
while((node=node.nextSibling)&&(node.nodeType===8||node.nodeType===3||node.nodeType===7)){
}
if(node){
return node;
}
}
node=_115;
while(node){
var next=node;
while((next=next.nextSibling)&&(next.nodeType===8||next.nodeType===3||next.nodeType===7)){
}
if(next){
return next;
}
var node=node.parentNode;
if(_116&&node===_116){
return NULL;
}
_117.pop();
}
return NULL;
};
CFPropertyList.propertyListFromData=function(_118,_119){
return CFPropertyList.propertyListFromString(_118.rawString(),_119);
};
CFPropertyList.propertyListFromString=function(_11a,_11b){
if(!_11b){
_11b=CFPropertyList.sniffedFormatOfString(_11a);
}
if(_11b===CFPropertyList.FormatXML_v1_0){
return CFPropertyList.propertyListFromXML(_11a);
}
if(_11b===CFPropertyList.Format280North_v1_0){
return _11c(_11a);
}
return NULL;
};
var _ec="A",_ed="D",_ee="f",_ef="d",_f0="S",_f1="T",_f2="F",_f3="K",_f4="E";
function _11c(_11d){
var _11e=new _11f(_11d),_120=NULL,key="",_121=NULL,_122=NULL,_123=[],_124=NULL;
while(_120=_11e.getMarker()){
if(_120===_f4){
_123.pop();
continue;
}
var _125=_123.length;
if(_125){
_124=_123[_125-1];
}
if(_120===_f3){
key=_11e.getString();
_120=_11e.getMarker();
}
switch(_120){
case _ec:
_121=[];
_123.push(_121);
break;
case _ed:
_121=new CFMutableDictionary();
_123.push(_121);
break;
case _ee:
_121=parseFloat(_11e.getString());
break;
case _ef:
_121=parseInt(_11e.getString(),10);
break;
case _f0:
_121=_11e.getString();
break;
case _f1:
_121=YES;
break;
case _f2:
_121=NO;
break;
default:
throw new Error("*** "+_120+" marker not recognized in Plist.");
}
if(!_122){
_122=_121;
}else{
if(_124){
if(_124.slice){
_124.push(_121);
}else{
_124.setValueForKey(key,_121);
}
}
}
}
return _122;
};
function _de(_126){
return ((((_126.replace(/&/g,"&amp;")).replace(/"/g,"&quot;")).replace(/'/g,"&apos;")).replace(/</g,"&lt;")).replace(/>/g,"&gt;");
};
function _127(_128){
return ((((_128.replace(/&quot;/g,"\"")).replace(/&apos;/g,"'")).replace(/&lt;/g,"<")).replace(/&gt;/g,">")).replace(/&amp;/g,"&");
};
function _a5(_129){
if(window.DOMParser){
return (new window.DOMParser()).parseFromString(_129,"text/xml")&&((new window.DOMParser()).parseFromString(_129,"text/xml")).documentElement;
}else{
if(window.ActiveXObject){
XMLNode=new ActiveXObject("Microsoft.XMLDOM");
var _12a=_129.match(CFPropertyList.DTDRE);
if(_12a){
_129=_129.substr(_12a[0].length);
}
XMLNode.loadXML(_129);
return XMLNode;
}
}
return NULL;
};
CFPropertyList.propertyListFromXML=function(_12b){
var _12c=_12b;
if(_12b.valueOf&&typeof _12b.valueOf()==="string"){
_12c=_a5(_12b);
}
while(_12c&&(String(_12c.nodeName)===_105||String(_12c.nodeName)===_104)){
_12c=_12c.firstChild;
if(_12c!=NULL&&(_12c.nodeType===8||_12c.nodeType===3||_12c.nodeType===7)){
while((_12c=_12c.nextSibling)&&(_12c.nodeType===8||_12c.nodeType===3||_12c.nodeType===7)){
}
}
}
if(_12c&&_12c.nodeType===10){
while((_12c=_12c.nextSibling)&&(_12c.nodeType===8||_12c.nodeType===3||_12c.nodeType===7)){
}
}
if(!_12c||!(String(_12c.nodeName)===_106)){
return NULL;
}
var key="",_12d=NULL,_12e=NULL,_12f=_12c,_130=[],_131=NULL;
while(_12c=_114(_12c,_12f,_130)){
var _132=_130.length;
if(_132){
_131=_130[_132-1];
}
if(String(_12c.nodeName)===_107){
key=_12c.textContent||_12c.textContent!==""&&_111([_12c]);
while((_12c=_12c.nextSibling)&&(_12c.nodeType===8||_12c.nodeType===3||_12c.nodeType===7)){
}
}
switch(String(String(_12c.nodeName))){
case _109:
_12d=[];
_130.push(_12d);
break;
case _108:
_12d=new CFMutableDictionary();
_130.push(_12d);
break;
case _10e:
_12d=parseFloat(_12c.textContent||_12c.textContent!==""&&_111([_12c]));
break;
case _10f:
_12d=parseInt(_12c.textContent||_12c.textContent!==""&&_111([_12c]),10);
break;
case _10a:
if(_12c.getAttribute("type")==="base64"){
_12d=_12c.firstChild?CFData.decodeBase64ToString(_12c.textContent||_12c.textContent!==""&&_111([_12c])):"";
}else{
_12d=_127(_12c.firstChild?_12c.textContent||_12c.textContent!==""&&_111([_12c]):"");
}
break;
case _10b:
var _133=Date.parseISO8601(_12c.textContent||_12c.textContent!==""&&_111([_12c]));
_12d=isNaN(_133)?new Date():new Date(_133);
break;
case _10c:
_12d=YES;
break;
case _10d:
_12d=NO;
break;
case _110:
_12d=new CFMutableData();
var _134=_12c.firstChild?CFData.decodeBase64ToArray(_12c.textContent||_12c.textContent!==""&&_111([_12c]),YES):[];
_12d.setBytes(_134);
break;
default:
throw new Error("*** "+String(_12c.nodeName)+" tag not recognized in Plist.");
}
if(!_12e){
_12e=_12d;
}else{
if(_131){
if(_131.slice){
_131.push(_12d);
}else{
_131.setValueForKey(key,_12d);
}
}
}
}
return _12e;
};
kCFPropertyListOpenStepFormat=CFPropertyList.FormatOpenStep;
kCFPropertyListXMLFormat_v1_0=CFPropertyList.FormatXML_v1_0;
kCFPropertyListBinaryFormat_v1_0=CFPropertyList.FormatBinary_v1_0;
kCFPropertyList280NorthFormat_v1_0=CFPropertyList.Format280North_v1_0;
CFPropertyListCreate=function(){
return new CFPropertyList();
};
CFPropertyListCreateFromXMLData=function(data){
return CFPropertyList.propertyListFromData(data,CFPropertyList.FormatXML_v1_0);
};
CFPropertyListCreateXMLData=function(_135){
return CFPropertyList.dataFromPropertyList(_135,CFPropertyList.FormatXML_v1_0);
};
CFPropertyListCreateFrom280NorthData=function(data){
return CFPropertyList.propertyListFromData(data,CFPropertyList.Format280North_v1_0);
};
CFPropertyListCreate280NorthData=function(_136){
return CFPropertyList.dataFromPropertyList(_136,CFPropertyList.Format280North_v1_0);
};
CPPropertyListCreateFromData=function(data,_137){
return CFPropertyList.propertyListFromData(data,_137);
};
CPPropertyListCreateData=function(_138,_139){
return CFPropertyList.dataFromPropertyList(_138,_139);
};
CFDictionary=function(_13a){
this._keys=[];
this._count=0;
this._buckets={};
this._UID=objj_generateObjectUID();
};
var _13b=Array.prototype.indexOf,_85=Object.prototype.hasOwnProperty;
CFDictionary.prototype.copy=function(){
return this;
};
CFDictionary.prototype.mutableCopy=function(){
var _13c=new CFMutableDictionary(),keys=this._keys,_13d=this._count;
_13c._keys=keys.slice();
_13c._count=_13d;
var _13e=0,_13f=this._buckets,_140=_13c._buckets;
for(;_13e<_13d;++_13e){
var key=keys[_13e];
_140[key]=_13f[key];
}
return _13c;
};
CFDictionary.prototype.containsKey=function(aKey){
return _85.apply(this._buckets,[aKey]);
};
CFDictionary.prototype.containsValue=function(_141){
var keys=this._keys,_142=this._buckets,_a0=0,_143=keys.length;
for(;_a0<_143;++_a0){
if(_142[keys[_a0]]===_141){
return YES;
}
}
return NO;
};
CFDictionary.prototype.count=function(){
return this._count;
};
CFDictionary.prototype.countOfKey=function(aKey){
return this.containsKey(aKey)?1:0;
};
CFDictionary.prototype.countOfValue=function(_144){
var keys=this._keys,_145=this._buckets,_a0=0,_146=keys.length,_147=0;
for(;_a0<_146;++_a0){
if(_145[keys[_a0]]===_144){
++_147;
}
}
return _147;
};
CFDictionary.prototype.keys=function(){
return this._keys.slice();
};
CFDictionary.prototype.valueForKey=function(aKey){
var _148=this._buckets;
if(!_85.apply(_148,[aKey])){
return nil;
}
return _148[aKey];
};
CFDictionary.prototype.toString=function(){
var _149="{\n",keys=this._keys,_a0=0,_14a=this._count;
for(;_a0<_14a;++_a0){
var key=keys[_a0];
_149+="\t"+key+" = \""+((String(this.valueForKey(key))).split("\n")).join("\n\t")+"\"\n";
}
return _149+"}";
};
CFMutableDictionary=function(_14b){
CFDictionary.apply(this,[]);
};
CFMutableDictionary.prototype=new CFDictionary();
CFMutableDictionary.prototype.copy=function(){
return this.mutableCopy();
};
CFMutableDictionary.prototype.addValueForKey=function(aKey,_14c){
if(this.containsKey(aKey)){
return;
}
++this._count;
this._keys.push(aKey);
this._buckets[aKey]=_14c;
};
CFMutableDictionary.prototype.removeValueForKey=function(aKey){
var _14d=-1;
if(_13b){
_14d=_13b.call(this._keys,aKey);
}else{
var keys=this._keys,_a0=0,_14e=keys.length;
for(;_a0<_14e;++_a0){
if(keys[_a0]===aKey){
_14d=_a0;
break;
}
}
}
if(_14d===-1){
return;
}
--this._count;
this._keys.splice(_14d,1);
delete this._buckets[aKey];
};
CFMutableDictionary.prototype.removeAllValues=function(){
this._count=0;
this._keys=[];
this._buckets={};
};
CFMutableDictionary.prototype.replaceValueForKey=function(aKey,_14f){
if(!this.containsKey(aKey)){
return;
}
this._buckets[aKey]=_14f;
};
CFMutableDictionary.prototype.setValueForKey=function(aKey,_150){
if(_150===nil||_150===_32){
this.removeValueForKey(aKey);
}else{
if(this.containsKey(aKey)){
this.replaceValueForKey(aKey,_150);
}else{
this.addValueForKey(aKey,_150);
}
}
};
kCFErrorLocalizedDescriptionKey="CPLocalizedDescription";
kCFErrorLocalizedFailureReasonKey="CPLocalizedFailureReason";
kCFErrorLocalizedRecoverySuggestionKey="CPLocalizedRecoverySuggestion";
kCFErrorDescriptionKey="CPDescription";
kCFErrorUnderlyingErrorKey="CPUnderlyingError";
kCFErrorURLKey="CPURL";
kCFErrorFilePathKey="CPFilePath";
kCFErrorDomainCappuccino="CPCappuccinoErrorDomain";
kCFErrorDomainCocoa=kCFErrorDomainCappuccino;
CFError=function(_151,code,_152){
this._domain=_151||NULL;
this._code=code||0;
this._userInfo=_152||new CFDictionary();
this._UID=objj_generateObjectUID();
};
CFError.prototype.domain=function(){
return this._domain;
};
CFError.prototype.code=function(){
return this._code;
};
CFError.prototype.description=function(){
var _153=this._userInfo.valueForKey(kCFErrorLocalizedDescriptionKey);
if(_153){
return _153;
}
var _154=this._userInfo.valueForKey(kCFErrorLocalizedFailureReasonKey);
if(_154){
var _155="The operation couldn’t be completed. "+_154;
return _155;
}
var _156="",desc=this._userInfo.valueForKey(kCFErrorDescriptionKey);
if(desc){
var _156="The operation couldn’t be completed. (error "+this._code+" - "+desc+")";
}else{
var _156="The operation couldn’t be completed. (error "+this._code+")";
}
return _156;
};
CFError.prototype.failureReason=function(){
return this._userInfo.valueForKey(kCFErrorLocalizedFailureReasonKey);
};
CFError.prototype.recoverySuggestion=function(){
return this._userInfo.valueForKey(kCFErrorLocalizedRecoverySuggestionKey);
};
CFError.prototype.userInfo=function(){
return this._userInfo;
};
CFErrorCreate=function(_157,code,_158){
return new CFError(_157,code,_158);
};
CFErrorCreateWithUserInfoKeysAndValues=function(_159,code,_15a,_15b,_15c){
var _15d=new CFMutableDictionary();
while(_15c--){
_15d.setValueForKey(_15a[_15c],_15b[_15c]);
}
return new CFError(_159,code,_15d);
};
CFErrorGetCode=function(err){
return err.code();
};
CFErrorGetDomain=function(err){
return err.domain();
};
CFErrorCopyDescription=function(err){
return err.description();
};
CFErrorCopyUserInfo=function(err){
return err.userInfo();
};
CFErrorCopyFailureReason=function(err){
return err.failureReason();
};
CFErrorCopyRecoverySuggestion=function(err){
return err.recoverySuggestion();
};
kCFURLErrorUnknown=-998;
kCFURLErrorCancelled=-999;
kCFURLErrorBadURL=-1000;
kCFURLErrorTimedOut=-1001;
kCFURLErrorUnsupportedURL=-1002;
kCFURLErrorCannotFindHost=-1003;
kCFURLErrorCannotConnectToHost=-1004;
kCFURLErrorNetworkConnectionLost=-1005;
kCFURLErrorDNSLookupFailed=-1006;
kCFURLErrorHTTPTooManyRedirects=-1007;
kCFURLErrorResourceUnavailable=-1008;
kCFURLErrorNotConnectedToInternet=-1009;
kCFURLErrorRedirectToNonExistentLocation=-1010;
kCFURLErrorBadServerResponse=-1011;
kCFURLErrorUserCancelledAuthentication=-1012;
kCFURLErrorUserAuthenticationRequired=-1013;
kCFURLErrorZeroByteResource=-1014;
kCFURLErrorCannotDecodeRawData=-1015;
kCFURLErrorCannotDecodeContentData=-1016;
kCFURLErrorCannotParseResponse=-1017;
kCFURLErrorRequestBodyStreamExhausted=-1021;
kCFURLErrorFileDoesNotExist=-1100;
kCFURLErrorFileIsDirectory=-1101;
kCFURLErrorNoPermissionsToReadFile=-1102;
kCFURLErrorDataLengthExceedsMaximum=-1103;
CFData=function(){
this._rawString=NULL;
this._propertyList=NULL;
this._propertyListFormat=NULL;
this._JSONObject=NULL;
this._bytes=NULL;
this._base64=NULL;
};
CFData.prototype.propertyList=function(){
if(!this._propertyList){
this._propertyList=CFPropertyList.propertyListFromString(this.rawString());
}
return this._propertyList;
};
CFData.prototype.JSONObject=function(){
if(!this._JSONObject){
try{
this._JSONObject=JSON.parse(this.rawString());
}
catch(anException){
}
}
return this._JSONObject;
};
CFData.prototype.rawString=function(){
if(this._rawString===NULL){
if(this._propertyList){
this._rawString=CFPropertyList.stringFromPropertyList(this._propertyList,this._propertyListFormat);
}else{
if(this._JSONObject){
this._rawString=JSON.stringify(this._JSONObject);
}else{
if(this._bytes){
this._rawString=CFData.bytesToString(this._bytes);
}else{
if(this._base64){
this._rawString=CFData.decodeBase64ToString(this._base64,true);
}else{
throw new Error("Can't convert data to string.");
}
}
}
}
}
return this._rawString;
};
CFData.prototype.bytes=function(){
if(this._bytes===NULL){
var _15e=CFData.stringToBytes(this.rawString());
this.setBytes(_15e);
}
return this._bytes;
};
CFData.prototype.base64=function(){
if(this._base64===NULL){
var _15f;
if(this._bytes){
_15f=CFData.encodeBase64Array(this._bytes);
}else{
_15f=CFData.encodeBase64String(this.rawString());
}
this.setBase64String(_15f);
}
return this._base64;
};
CFMutableData=function(){
CFData.call(this);
};
CFMutableData.prototype=new CFData();
function _160(_161){
this._rawString=NULL;
this._propertyList=NULL;
this._propertyListFormat=NULL;
this._JSONObject=NULL;
this._bytes=NULL;
this._base64=NULL;
};
CFMutableData.prototype.setPropertyList=function(_162,_163){
_160(this);
this._propertyList=_162;
this._propertyListFormat=_163;
};
CFMutableData.prototype.setJSONObject=function(_164){
_160(this);
this._JSONObject=_164;
};
CFMutableData.prototype.setRawString=function(_165){
_160(this);
this._rawString=_165;
};
CFMutableData.prototype.setBytes=function(_166){
_160(this);
this._bytes=_166;
};
CFMutableData.prototype.setBase64String=function(_167){
_160(this);
this._base64=_167;
};
var _168=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","+","/","="],_169=[];
for(var i=0;i<_168.length;i++){
_169[_168[i].charCodeAt(0)]=i;
}
CFData.decodeBase64ToArray=function(_16a,_16b){
if(_16b){
_16a=_16a.replace(/[^A-Za-z0-9\+\/\=]/g,"");
}
var pad=(_16a[_16a.length-1]=="="?1:0)+(_16a[_16a.length-2]=="="?1:0),_16c=_16a.length,_16d=[];
var i=0;
while(i<_16c){
var bits=_169[_16a.charCodeAt(i++)]<<18|_169[_16a.charCodeAt(i++)]<<12|_169[_16a.charCodeAt(i++)]<<6|_169[_16a.charCodeAt(i++)];
_16d.push((bits&16711680)>>16);
_16d.push((bits&65280)>>8);
_16d.push(bits&255);
}
if(pad>0){
return _16d.slice(0,-1*pad);
}
return _16d;
};
CFData.encodeBase64Array=function(_16e){
var pad=(3-_16e.length%3)%3,_16f=_16e.length+pad,_170=[];
if(pad>0){
_16e.push(0);
}
if(pad>1){
_16e.push(0);
}
var i=0;
while(i<_16f){
var bits=_16e[i++]<<16|_16e[i++]<<8|_16e[i++];
_170.push(_168[(bits&16515072)>>18]);
_170.push(_168[(bits&258048)>>12]);
_170.push(_168[(bits&4032)>>6]);
_170.push(_168[bits&63]);
}
if(pad>0){
_170[_170.length-1]="=";
_16e.pop();
}
if(pad>1){
_170[_170.length-2]="=";
_16e.pop();
}
return _170.join("");
};
CFData.decodeBase64ToString=function(_171,_172){
return CFData.bytesToString(CFData.decodeBase64ToArray(_171,_172));
};
CFData.decodeBase64ToUtf16String=function(_173,_174){
return CFData.bytesToUtf16String(CFData.decodeBase64ToArray(_173,_174));
};
CFData.bytesToString=function(_175){
return String.fromCharCode.apply(NULL,_175);
};
CFData.stringToBytes=function(_176){
var temp=[];
for(var i=0;i<_176.length;i++){
temp.push(_176.charCodeAt(i));
}
return temp;
};
CFData.encodeBase64String=function(_177){
var temp=[];
for(var i=0;i<_177.length;i++){
temp.push(_177.charCodeAt(i));
}
return CFData.encodeBase64Array(temp);
};
CFData.bytesToUtf16String=function(_178){
var temp=[];
for(var i=0;i<_178.length;i+=2){
temp.push(_178[i+1]<<8|_178[i]);
}
return String.fromCharCode.apply(NULL,temp);
};
CFData.encodeBase64Utf16String=function(_179){
var temp=[];
for(var i=0;i<_179.length;i++){
var c=_179.charCodeAt(i);
temp.push(c&255);
temp.push((c&65280)>>8);
}
return CFData.encodeBase64Array(temp);
};
var _17a,_17b,_17c=0;
function _17d(){
if(++_17c!==1){
return;
}
_17a={};
_17b={};
};
function _17e(){
_17c=MAX(_17c-1,0);
if(_17c!==0){
return;
}
delete _17a;
delete _17b;
};
var _17f=new RegExp("^"+"(?:"+"([^:/?#]+):"+")?"+"(?:"+"(//)"+"("+"(?:"+"("+"([^:@]*)"+":?"+"([^:@]*)"+")?"+"@"+")?"+"([^:/?#]*)"+"(?::(\\d*))?"+")"+")?"+"([^?#]*)"+"(?:\\?([^#]*))?"+"(?:#(.*))?");
var _180=["url","scheme","authorityRoot","authority","userInfo","user","password","domain","portNumber","path","queryString","fragment"];
function _181(aURL){
if(aURL._parts){
return aURL._parts;
}
var _182=aURL.string(),_183=_182.match(/^mhtml:/);
if(_183){
_182=_182.substr("mhtml:".length);
}
if(_17c>0&&_85.call(_17b,_182)){
aURL._parts=_17b[_182];
return aURL._parts;
}
aURL._parts={};
var _184=aURL._parts,_185=_17f.exec(_182),_a0=_185.length;
while(_a0--){
_184[_180[_a0]]=_185[_a0]||NULL;
}
_184.portNumber=parseInt(_184.portNumber,10);
if(isNaN(_184.portNumber)){
_184.portNumber=-1;
}
_184.pathComponents=[];
if(_184.path){
var _186=_184.path.split("/"),_187=_184.pathComponents,_188=_186.length;
for(_a0=0;_a0<_188;++_a0){
var _189=_186[_a0];
if(_189){
_187.push(_189);
}else{
if(_a0===0){
_187.push("/");
}
}
}
_184.pathComponents=_187;
}
if(_183){
_184.url="mhtml:"+_184.url;
_184.scheme="mhtml:"+_184.scheme;
}
if(_17c>0){
_17b[_182]=_184;
}
return _184;
};
CFURL=function(aURL,_18a){
aURL=aURL||"";
if(aURL instanceof CFURL){
if(!_18a){
return new CFURL(aURL.absoluteString());
}
var _18b=aURL.baseURL();
if(_18b){
_18a=new CFURL(_18b.absoluteURL(),_18a);
}
aURL=aURL.string();
}
if(_17c>0){
var _18c=aURL+" "+(_18a&&_18a.UID()||"");
if(_85.call(_17a,_18c)){
return _17a[_18c];
}
_17a[_18c]=this;
}
if(aURL.match(/^data:/)){
var _18d={},_a0=_180.length;
while(_a0--){
_18d[_180[_a0]]="";
}
_18d.url=aURL;
_18d.scheme="data";
_18d.pathComponents=[];
this._parts=_18d;
this._standardizedURL=this;
this._absoluteURL=this;
}
this._UID=objj_generateObjectUID();
this._string=aURL;
this._baseURL=_18a;
};
CFURL.prototype.UID=function(){
return this._UID;
};
var _18e={};
CFURL.prototype.mappedURL=function(){
return _18e[this.absoluteString()]||this;
};
CFURL.setMappedURLForURL=function(_18f,_190){
_18e[_18f.absoluteString()]=_190;
};
CFURL.prototype.schemeAndAuthority=function(){
var _191="",_192=this.scheme();
if(_192){
_191+=_192+":";
}
var _193=this.authority();
if(_193){
_191+="//"+_193;
}
return _191;
};
CFURL.prototype.absoluteString=function(){
if(this._absoluteString===_32){
this._absoluteString=(this.absoluteURL()).string();
}
return this._absoluteString;
};
CFURL.prototype.toString=function(){
return this.absoluteString();
};
function _194(aURL){
aURL=aURL.standardizedURL();
var _195=aURL.baseURL();
if(!_195){
return aURL;
}
var _196=aURL._parts||_181(aURL),_197,_198=_195.absoluteURL(),_199=_198._parts||_181(_198);
if(!_196.scheme&&_196.authorityRoot){
_197=_19a(_196);
_197.scheme=_195.scheme();
}else{
if(_196.scheme||_196.authority){
_197=_196;
}else{
_197={};
_197.scheme=_199.scheme;
_197.authority=_199.authority;
_197.userInfo=_199.userInfo;
_197.user=_199.user;
_197.password=_199.password;
_197.domain=_199.domain;
_197.portNumber=_199.portNumber;
_197.queryString=_196.queryString;
_197.fragment=_196.fragment;
var _19b=_196.pathComponents;
if(_19b.length&&_19b[0]==="/"){
_197.path=_196.path;
_197.pathComponents=_19b;
}else{
var _19c=_199.pathComponents,_19d=_19c.concat(_19b);
if(!_195.hasDirectoryPath()&&_19c.length){
_19d.splice(_19c.length-1,1);
}
if(_19b.length&&(_19b[0]===".."||_19b[0]===".")){
_19e(_19d,YES);
}
_197.pathComponents=_19d;
_197.path=_19f(_19d,_19b.length<=0||aURL.hasDirectoryPath());
}
}
}
var _1a0=_1a1(_197),_1a2=new CFURL(_1a0);
_1a2._parts=_197;
_1a2._standardizedURL=_1a2;
_1a2._standardizedString=_1a0;
_1a2._absoluteURL=_1a2;
_1a2._absoluteString=_1a0;
return _1a2;
};
function _19f(_1a3,_1a4){
var path=_1a3.join("/");
if(path.length&&path.charAt(0)==="/"){
path=path.substr(1);
}
if(_1a4){
path+="/";
}
return path;
};
function _19e(_1a5,_1a6){
var _1a7=0,_1a8=0,_1a9=_1a5.length,_1aa=_1a6?_1a5:[],_1ab=NO;
for(;_1a7<_1a9;++_1a7){
var _1ac=_1a5[_1a7];
if(_1ac===""){
continue;
}
if(_1ac==="."){
_1ab=_1a8===0;
continue;
}
if(_1ac!==".."||_1a8===0||_1aa[_1a8-1]===".."){
_1aa[_1a8]=_1ac;
_1a8++;
continue;
}
if(_1a8>0&&_1aa[_1a8-1]!=="/"){
--_1a8;
}
}
if(_1ab&&_1a8===0){
_1aa[_1a8++]=".";
}
_1aa.length=_1a8;
return _1aa;
};
function _1a1(_1ad){
var _1ae="",_1af=_1ad.scheme;
if(_1af){
_1ae+=_1af+":";
}
var _1b0=_1ad.authority;
if(_1b0){
_1ae+="//"+_1b0;
}
_1ae+=_1ad.path;
var _1b1=_1ad.queryString;
if(_1b1){
_1ae+="?"+_1b1;
}
var _1b2=_1ad.fragment;
if(_1b2){
_1ae+="#"+_1b2;
}
return _1ae;
};
CFURL.prototype.absoluteURL=function(){
if(this._absoluteURL===_32){
this._absoluteURL=_194(this);
}
return this._absoluteURL;
};
CFURL.prototype.standardizedURL=function(){
if(this._standardizedURL===_32){
var _1b3=this._parts||_181(this),_1b4=_1b3.pathComponents,_1b5=_19e(_1b4,NO);
var _1b6=_19f(_1b5,this.hasDirectoryPath());
if(_1b3.path===_1b6){
this._standardizedURL=this;
}else{
var _1b7=_19a(_1b3);
_1b7.pathComponents=_1b5;
_1b7.path=_1b6;
var _1b8=new CFURL(_1a1(_1b7),this.baseURL());
_1b8._parts=_1b7;
_1b8._standardizedURL=_1b8;
this._standardizedURL=_1b8;
}
}
return this._standardizedURL;
};
function _19a(_1b9){
var _1ba={},_1bb=_180.length;
while(_1bb--){
var _1bc=_180[_1bb];
_1ba[_1bc]=_1b9[_1bc];
}
return _1ba;
};
CFURL.prototype.string=function(){
return this._string;
};
CFURL.prototype.authority=function(){
var _1bd=(this._parts||_181(this)).authority;
if(_1bd){
return _1bd;
}
var _1be=this.baseURL();
return _1be&&_1be.authority()||"";
};
CFURL.prototype.hasDirectoryPath=function(){
var _1bf=this._hasDirectoryPath;
if(_1bf===_32){
var path=this.path();
if(!path){
return NO;
}
if(path.charAt(path.length-1)==="/"){
return YES;
}
var _1c0=this.lastPathComponent();
_1bf=_1c0==="."||_1c0==="..";
this._hasDirectoryPath=_1bf;
}
return _1bf;
};
CFURL.prototype.hostName=function(){
return this.authority();
};
CFURL.prototype.fragment=function(){
return (this._parts||_181(this)).fragment;
};
CFURL.prototype.lastPathComponent=function(){
if(this._lastPathComponent===_32){
var _1c1=this.pathComponents(),_1c2=_1c1.length;
if(!_1c2){
this._lastPathComponent="";
}else{
this._lastPathComponent=_1c1[_1c2-1];
}
}
return this._lastPathComponent;
};
CFURL.prototype.path=function(){
return (this._parts||_181(this)).path;
};
CFURL.prototype.createCopyDeletingLastPathComponent=function(){
var _1c3=this._parts||_181(this),_1c4=_19e(_1c3.pathComponents,NO);
if(_1c4.length>0){
if(_1c4.length>1||_1c4[0]!=="/"){
_1c4.pop();
}
}
var _1c5=_1c4.length===1&&_1c4[0]==="/";
_1c3.pathComponents=_1c4;
_1c3.path=_1c5?"/":_19f(_1c4,NO);
return new CFURL(_1a1(_1c3));
};
CFURL.prototype.pathComponents=function(){
return (this._parts||_181(this)).pathComponents;
};
CFURL.prototype.pathExtension=function(){
var _1c6=this.lastPathComponent();
if(!_1c6){
return NULL;
}
_1c6=_1c6.replace(/^\.*/,"");
var _1c7=_1c6.lastIndexOf(".");
return _1c7<=0?"":_1c6.substring(_1c7+1);
};
CFURL.prototype.queryString=function(){
return (this._parts||_181(this)).queryString;
};
CFURL.prototype.scheme=function(){
var _1c8=this._scheme;
if(_1c8===_32){
_1c8=(this._parts||_181(this)).scheme;
if(!_1c8){
var _1c9=this.baseURL();
_1c8=_1c9&&_1c9.scheme();
}
this._scheme=_1c8;
}
return _1c8;
};
CFURL.prototype.user=function(){
return (this._parts||_181(this)).user;
};
CFURL.prototype.password=function(){
return (this._parts||_181(this)).password;
};
CFURL.prototype.portNumber=function(){
return (this._parts||_181(this)).portNumber;
};
CFURL.prototype.domain=function(){
return (this._parts||_181(this)).domain;
};
CFURL.prototype.baseURL=function(){
return this._baseURL;
};
CFURL.prototype.asDirectoryPathURL=function(){
if(this.hasDirectoryPath()){
return this;
}
var _1ca=this.lastPathComponent();
if(_1ca!=="/"){
_1ca="./"+_1ca;
}
return new CFURL(_1ca+"/",this);
};
function _1cb(aURL){
if(!aURL._resourcePropertiesForKeys){
aURL._resourcePropertiesForKeys=new CFMutableDictionary();
}
return aURL._resourcePropertiesForKeys;
};
CFURL.prototype.resourcePropertyForKey=function(aKey){
return (_1cb(this)).valueForKey(aKey);
};
CFURL.prototype.setResourcePropertyForKey=function(aKey,_1cc){
(_1cb(this)).setValueForKey(aKey,_1cc);
};
CFURL.prototype.staticResourceData=function(){
var data=new CFMutableData();
data.setRawString((_1cd.resourceAtURL(this)).contents());
return data;
};
function _11f(_1ce){
this._string=_1ce;
var _1cf=_1ce.indexOf(";");
this._magicNumber=_1ce.substr(0,_1cf);
this._location=_1ce.indexOf(";",++_1cf);
this._version=_1ce.substring(_1cf,this._location++);
};
_11f.prototype.magicNumber=function(){
return this._magicNumber;
};
_11f.prototype.version=function(){
return this._version;
};
_11f.prototype.getMarker=function(){
var _1d0=this._string,_1d1=this._location;
if(_1d1>=_1d0.length){
return null;
}
var next=_1d0.indexOf(";",_1d1);
if(next<0){
return null;
}
var _1d2=_1d0.substring(_1d1,next);
if(_1d2==="e"){
return null;
}
this._location=next+1;
return _1d2;
};
_11f.prototype.getString=function(){
var _1d3=this._string,_1d4=this._location;
if(_1d4>=_1d3.length){
return null;
}
var next=_1d3.indexOf(";",_1d4);
if(next<0){
return null;
}
var size=parseInt(_1d3.substring(_1d4,next),10),text=_1d3.substr(next+1,size);
this._location=next+1+size;
return text;
};
var _1d5=0,_1d6=1<<0,_1d7=1<<1,_1d8=1<<2,_1d9=1<<3,_1da=1<<4,_1db=1<<5;
var _1dc={},_1dd={},_1de={},_1df=(new Date()).getTime(),_1e0=0,_1e1=0;
var _1e2="CPBundleDefaultBrowserLanguage",_1e3="CPBundleDefaultLanguage";
CFBundle=function(aURL){
aURL=(_1e4(aURL)).asDirectoryPathURL();
var _1e5=aURL.absoluteString(),_1e6=_1dc[_1e5];
if(_1e6){
return _1e6;
}
_1dc[_1e5]=this;
this._bundleURL=aURL;
this._resourcesDirectoryURL=new CFURL("Resources/",aURL);
this._staticResource=NULL;
this._isValid=NO;
this._loadStatus=_1d5;
this._loadRequests=[];
this._infoDictionary=new CFDictionary();
this._eventDispatcher=new _80(this);
this._localizableStrings=[];
this._loadedLanguage=NULL;
};
CFBundle.environments=function(){
return ["Browser","ObjJ"];
};
CFBundle.bundleContainingURL=function(aURL){
aURL=new CFURL(".",_1e4(aURL));
var _1e7,_1e8=aURL.absoluteString();
while(!_1e7||_1e7!==_1e8){
var _1e9=_1dc[_1e8];
if(_1e9&&_1e9._isValid){
return _1e9;
}
aURL=new CFURL("..",aURL);
_1e7=_1e8;
_1e8=aURL.absoluteString();
}
return NULL;
};
CFBundle.mainBundle=function(){
return new CFBundle(_1ea);
};
function _1eb(_1ec,_1ed){
if(_1ed){
_1dd[_1ec.name]=_1ed;
}
};
function _1ee(){
_1dc={};
_1dd={};
_1de={};
_1e0=0;
_1e1=0;
};
CFBundle.bundleForClass=function(_1ef){
return _1dd[_1ef.name]||CFBundle.mainBundle();
};
CFBundle.bundleWithIdentifier=function(_1f0){
return _1de[_1f0]||NULL;
};
CFBundle.prototype.bundleURL=function(){
return this._bundleURL.absoluteURL();
};
CFBundle.prototype.resourcesDirectoryURL=function(){
return this._resourcesDirectoryURL;
};
CFBundle.prototype.resourceURL=function(_1f1,_1f2,_1f3,_1f4){
if(_1f2){
_1f1=_1f1+"."+_1f2;
}
if(_1f4){
_1f1=_1f4+_1f1;
}
if(_1f3){
_1f1=_1f3+"/"+_1f1;
}
var _1f5=(new CFURL(_1f1,this.resourcesDirectoryURL())).mappedURL();
return _1f5.absoluteURL();
};
CFBundle.prototype.mostEligibleEnvironmentURL=function(){
if(this._mostEligibleEnvironmentURL===_32){
this._mostEligibleEnvironmentURL=new CFURL(this.mostEligibleEnvironment()+".environment/",this.bundleURL());
}
return this._mostEligibleEnvironmentURL;
};
CFBundle.prototype.executableURL=function(){
if(this._executableURL===_32){
var _1f6=this.valueForInfoDictionaryKey("CPBundleExecutable");
if(!_1f6){
this._executableURL=NULL;
}else{
this._executableURL=new CFURL(_1f6,this.mostEligibleEnvironmentURL());
}
}
return this._executableURL;
};
CFBundle.prototype.infoDictionary=function(){
return this._infoDictionary;
};
CFBundle.prototype.loadedLanguage=function(){
return this._loadedLanguage;
};
CFBundle.prototype.valueForInfoDictionaryKey=function(aKey){
return this._infoDictionary.valueForKey(aKey);
};
CFBundle.prototype.identifier=function(){
return this._infoDictionary.valueForKey("CPBundleIdentifier");
};
CFBundle.prototype.hasSpritedImages=function(){
var _1f7=this._infoDictionary.valueForKey("CPBundleEnvironmentsWithImageSprites")||[],_a0=_1f7.length,_1f8=this.mostEligibleEnvironment();
while(_a0--){
if(_1f7[_a0]===_1f8){
return YES;
}
}
return NO;
};
CFBundle.prototype.environments=function(){
return this._infoDictionary.valueForKey("CPBundleEnvironments")||["ObjJ"];
};
CFBundle.prototype.mostEligibleEnvironment=function(_1f9){
_1f9=_1f9||this.environments();
var _1fa=CFBundle.environments(),_a0=0,_1fb=_1fa.length,_1fc=_1f9.length;
for(;_a0<_1fb;++_a0){
var _1fd=0,_1fe=_1fa[_a0];
for(;_1fd<_1fc;++_1fd){
if(_1fe===_1f9[_1fd]){
return _1fe;
}
}
}
return NULL;
};
CFBundle.prototype.isLoading=function(){
return this._loadStatus&_1d6;
};
CFBundle.prototype.isLoaded=function(){
return !!(this._loadStatus&_1db);
};
CFBundle.prototype.load=function(_1ff){
if(this._loadStatus!==_1d5){
return;
}
this._loadStatus=_1d6|_1d7;
var self=this,_200=this.bundleURL(),_201=new CFURL("..",_200);
if(_201.absoluteString()===_200.absoluteString()){
_201=_201.schemeAndAuthority();
}
_1cd.resolveResourceAtURL(_201,YES,function(_202){
var _203=_200.lastPathComponent();
self._staticResource=_202._children[_203]||new _1cd(_200,_202,YES,NO);
function _204(_205){
self._loadStatus&=~_1d7;
var _206=_205.request.responsePropertyList();
self._isValid=!!_206||CFBundle.mainBundle()===self;
if(_206){
self._infoDictionary=_206;
var _207=self._infoDictionary.valueForKey("CPBundleIdentifier");
if(_207){
_1de[_207]=self;
}
}
if(!self._infoDictionary){
_209(self,new Error("Could not load bundle at \""+path+"\""));
return;
}
if(self===CFBundle.mainBundle()&&self.valueForInfoDictionaryKey("CPApplicationSize")){
_1e1=(self.valueForInfoDictionaryKey("CPApplicationSize")).valueForKey("executable")||0;
}
_24a(self);
_20d(self,_1ff);
};
function _208(){
self._isValid=CFBundle.mainBundle()===self;
self._loadStatus=_1d5;
_209(self,new Error("Could not load bundle at \""+self.bundleURL()+"\""));
};
new _c1(new CFURL("Info.plist",self.bundleURL()),_204,_208);
});
};
function _209(_20a,_20b){
_20c(_20a._staticResource);
_20a._eventDispatcher.dispatchEvent({type:"error",error:_20b,bundle:_20a});
};
function _20d(_20e,_20f){
if(!_20e.mostEligibleEnvironment()){
return _210();
}
_211(_20e,_212,_210,_213);
_214(_20e,_212,_210,_213);
_215(_20e,_212,_210,_213);
if(_20e._loadStatus===_1d6){
return _212();
}
function _210(_216){
var _217=_20e._loadRequests,_218=_217.length;
while(_218--){
_217[_218].abort();
}
this._loadRequests=[];
_20e._loadStatus=_1d5;
_209(_20e,_216||new Error("Could not recognize executable code format in Bundle "+_20e));
};
function _213(_219){
if((typeof CPApp==="undefined"||!CPApp||!CPApp._finishedLaunching)&&typeof OBJJ_PROGRESS_CALLBACK==="function"){
_1e0+=_219;
var _21a=_1e1?MAX(MIN(1,_1e0/_1e1),0):0;
OBJJ_PROGRESS_CALLBACK(_21a,_1e1,_20e.bundlePath());
}
};
function _212(){
if(_20e._loadStatus===_1d6){
_20e._loadStatus=_1db;
}else{
return;
}
_20c(_20e._staticResource);
function _21b(){
_20e._eventDispatcher.dispatchEvent({type:"load",bundle:_20e});
};
if(_20f){
_21c(_20e,_21b);
}else{
_21b();
}
};
};
function _211(_21d,_21e,_21f,_220){
var _221=_21d.executableURL();
if(!_221){
return;
}
_21d._loadStatus|=_1d8;
new _c1(_221,function(_222){
try{
_223(_21d,_222.request.responseText(),_221);
_21d._loadStatus&=~_1d8;
_21e();
}
catch(anException){
_21f(anException);
}
},_21f,_220);
};
function _224(_225){
return "mhtml:"+new CFURL("MHTMLTest.txt",_225.mostEligibleEnvironmentURL());
};
function _226(_227){
if(_228===_229){
return new CFURL("dataURLs.txt",_227.mostEligibleEnvironmentURL());
}
if(_228===_22a||_228===_22b){
return new CFURL("MHTMLPaths.txt",_227.mostEligibleEnvironmentURL());
}
return NULL;
};
function _214(_22c,_22d,_22e,_22f){
if(!_22c.hasSpritedImages()){
return;
}
_22c._loadStatus|=_1d9;
if(!_230()){
return _231(_224(_22c),function(){
_214(_22c,_22d,_22e,_22f);
});
}
var _232=_226(_22c);
if(!_232){
_22c._loadStatus&=~_1d9;
return _22d();
}
new _c1(_232,function(_233){
try{
_223(_22c,_233.request.responseText(),_232);
_22c._loadStatus&=~_1d9;
_22d();
}
catch(anException){
_22e(anException);
}
},_22e,_22f);
};
function _215(_234,_235,_236,_237){
var _238=_234._loadedLanguage;
if(!_238){
return;
}
var _239=_234.valueForInfoDictionaryKey("CPBundleLocalizableStrings");
if(!_239){
return;
}
var self=_234,_23a=_239.length,_23b=new CFURL(_238+".lproj/",self.resourcesDirectoryURL()),_23c=0;
for(var i=0;i<_23a;i++){
var _23d=_239[i];
function _23e(_23f){
var _240=_23f.request.responseText(),_241=(new CFURL(_23f.request._URL)).lastPathComponent();
try{
_242(self,_240,_241);
if(++_23c==_23a){
_234._loadStatus&=~_1da;
_235();
}
}
catch(e){
_236(new Error("Error when parsing the localizable file "+_241));
}
};
_234._loadStatus|=_1da;
new _c1(new CFURL(_23d,_23b),_23e,_236,_237);
}
};
function _242(_243,_244,_245){
var _246={},_247=_244.split("\n"),_248;
_243._localizableStrings[_245]=_246;
for(var i=0;i<_247.length;i++){
var line=_247[i];
if(line[0]=="/"){
_248=(line.substring(2,line.length-2)).trim();
continue;
}
if(line[0]=="\""){
var _249=line.split("\"");
var key=_249[1];
if(!(key in _246)){
_246[key]=_249[3];
}
key+=_248;
if(!(key in _246)){
_246[key]=_249[3];
}
continue;
}
}
};
function _24a(_24b){
if(_24b._loadedLanguage){
return;
}
var _24c=_24b.valueForInfoDictionaryKey(_1e3);
if(_24c!=_1e2&&_24c){
_24b._loadedLanguage=_24c;
return;
}
if(typeof navigator=="undefined"){
return;
}
var _24d=typeof navigator.language!=="undefined"?navigator.language:navigator.userLanguage;
if(!_24d){
return;
}
_24b._loadedLanguage=_24d.substring(0,2);
};
var _24e=[],_228=-1,_24f=0,_229=1,_22a=2,_22b=3;
function _230(){
return _228!==-1;
};
function _231(_250,_251){
if(_230()){
return;
}
_24e.push(_251);
if(_24e.length>1){
return;
}
_24e.push(function(){
var size=0,_252=(CFBundle.mainBundle()).valueForInfoDictionaryKey("CPApplicationSize");
if(!_252){
return;
}
switch(_228){
case _229:
size=_252.valueForKey("data");
break;
case _22a:
case _22b:
size=_252.valueForKey("mhtml");
break;
}
_1e1+=size;
});
_253([_229,"data:image/gif;base64,R0lGODlhAQABAIAAAMc9BQAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",_22a,_250+"!test",_22b,_250+"?"+_1df+"!test"]);
};
function _254(){
var _255=_24e.length;
while(_255--){
_24e[_255]();
}
};
function _253(_256){
if(!("Image" in _1)||_256.length<2){
_228=_24f;
_254();
return;
}
var _257=new Image();
_257.onload=function(){
if(_257.width===1&&_257.height===1){
_228=_256[0];
_254();
}else{
_257.onerror();
}
};
_257.onerror=function(){
_253(_256.slice(2));
};
_257.src=_256[1];
};
function _21c(_258,_259){
var _25a=[_258._staticResource];
function _25b(_25c){
for(;_25c<_25a.length;++_25c){
var _25d=_25a[_25c];
if(_25d.isNotFound()){
continue;
}
if(_25d.isFile()){
var _25e=new _979(_25d.URL());
if(_25e.hasLoadedFileDependencies()){
_25e.execute();
}else{
_25e.loadFileDependencies(function(){
_25b(_25c);
});
return;
}
}else{
if((_25d.URL()).absoluteString()===(_258.resourcesDirectoryURL()).absoluteString()){
continue;
}
var _25f=_25d.children();
for(var name in _25f){
if(_85.call(_25f,name)){
_25a.push(_25f[name]);
}
}
}
}
_259();
};
_25b(0);
};
var _260="@STATIC",_261="p",_262="u",_263="c",_264="t",_265="I",_266="i";
MARKER_SOURCE_MAP="S";
function _223(_267,_268,_269){
var _26a=new _11f(_268);
if(_26a.magicNumber()!==_260){
throw new Error("Could not read static file: "+_269);
}
if(_26a.version()!=="1.0"){
throw new Error("Could not read static file: "+_269);
}
var _26b,_26c=_267.bundleURL(),file=NULL;
while(_26b=_26a.getMarker()){
var text=_26a.getString();
if(_26b===_261){
var _26d=new CFURL(text,_26c),_26e=_1cd.resourceAtURL(new CFURL(".",_26d),YES);
file=new _1cd(_26d,_26e,NO,YES);
}else{
if(_26b===_262){
var URL=new CFURL(text,_26c),_26f=_26a.getString();
if(_26f.indexOf("mhtml:")===0){
_26f="mhtml:"+new CFURL(_26f.substr("mhtml:".length),_26c);
if(_228===_22b){
var _270=_26f.indexOf("!"),_271=_26f.substring(0,_270),_272=_26f.substring(_270);
_26f=_271+"?"+_1df+_272;
}
}
CFURL.setMappedURLForURL(URL,new CFURL(_26f));
var _26e=_1cd.resourceAtURL(new CFURL(".",URL),YES);
new _1cd(URL,_26e,NO,YES);
}else{
if(_26b===_264){
file.write(text);
}
}
}
}
};
CFBundle.prototype.addEventListener=function(_273,_274){
this._eventDispatcher.addEventListener(_273,_274);
};
CFBundle.prototype.removeEventListener=function(_275,_276){
this._eventDispatcher.removeEventListener(_275,_276);
};
CFBundle.prototype.onerror=function(_277){
throw _277.error;
};
CFBundle.prototype.bundlePath=function(){
return (this.bundleURL()).path();
};
CFBundle.prototype.path=function(){
CPLog.warn("CFBundle.prototype.path is deprecated, use CFBundle.prototype.bundlePath instead.");
return this.bundlePath.apply(this,arguments);
};
CFBundle.prototype.pathForResource=function(_278,_279,_27a,_27b){
return (this.resourceURL(_278,_279,_27a,_27b)).absoluteString();
};
CFBundleCopyLocalizedString=function(_27c,key,_27d,_27e){
return CFCopyLocalizedStringWithDefaultValue(key,_27e,_27c,_27d,"");
};
CFBundleCopyBundleLocalizations=function(_27f){
return [this._loadedLanguage];
};
CFCopyLocalizedString=function(key,_280){
return CFCopyLocalizedStringFromTable(key,"Localizable",_280);
};
CFCopyLocalizedStringFromTable=function(key,_281,_282){
return CFCopyLocalizedStringFromTableInBundle(key,_281,CFBundleGetMainBundle(),_282);
};
CFCopyLocalizedStringFromTableInBundle=function(key,_283,_284,_285){
return CFCopyLocalizedStringWithDefaultValue(key,_283,_284,null,_285);
};
CFCopyLocalizedStringWithDefaultValue=function(key,_286,_287,_288,_289){
var _28a;
if(!_286){
_286="Localizable";
}
_286+=".strings";
var _28b=_287._localizableStrings[_286];
_28a=_28b?_28b[key+_289]:null;
return _28a||(_288||key);
};
CFBundleGetMainBundle=function(){
return CFBundle.mainBundle();
};
var _28c={};
function _1cd(aURL,_28d,_28e,_28f,_290){
this._parent=_28d;
this._eventDispatcher=new _80(this);
var name=(aURL.absoluteURL()).lastPathComponent()||aURL.schemeAndAuthority();
this._name=name;
this._URL=aURL;
this._isResolved=!!_28f;
this._filenameTranslateDictionary=_290;
if(_28e){
this._URL=this._URL.asDirectoryPathURL();
}
if(!_28d){
_28c[name]=this;
}
this._isDirectory=!!_28e;
this._isNotFound=NO;
if(_28d){
_28d._children[name]=this;
}
if(_28e){
this._children={};
}else{
this._contents="";
}
};
_1cd.rootResources=function(){
return _28c;
};
function _291(x){
var _292=0;
for(var k in x){
if(x.hasOwnProperty(k)){
++_292;
}
}
return _292;
};
_1cd.resetRootResources=function(){
_28c={};
};
_1cd.prototype.filenameTranslateDictionary=function(){
return this._filenameTranslateDictionary||{};
};
_2.StaticResource=_1cd;
function _20c(_293){
_293._isResolved=YES;
_293._eventDispatcher.dispatchEvent({type:"resolve",staticResource:_293});
};
_1cd.prototype.resolve=function(){
if(this.isDirectory()){
var _294=new CFBundle(this.URL());
_294.onerror=function(){
};
_294.load(NO);
}else{
var self=this;
function _295(_296){
self._contents=_296.request.responseText();
_20c(self);
};
function _297(){
self._isNotFound=YES;
_20c(self);
};
var url=this.URL(),_298=this.filenameTranslateDictionary();
if(_298){
var _299=url.toString(),_29a=url.lastPathComponent(),_29b=_299.substring(0,_299.length-_29a.length),_29c=_298[_29a];
if(_29c&&_299.slice(-_29c.length)!==_29c){
url=new CFURL(_29b+_29c);
}
}
new _c1(url,_295,_297);
}
};
_1cd.prototype.name=function(){
return this._name;
};
_1cd.prototype.URL=function(){
return this._URL;
};
_1cd.prototype.contents=function(){
return this._contents;
};
_1cd.prototype.children=function(){
return this._children;
};
_1cd.prototype.parent=function(){
return this._parent;
};
_1cd.prototype.isResolved=function(){
return this._isResolved;
};
_1cd.prototype.write=function(_29d){
this._contents+=_29d;
};
function _29e(_29f){
var _2a0=_29f.schemeAndAuthority(),_2a1=_28c[_2a0];
if(!_2a1){
_2a1=new _1cd(new CFURL(_2a0),NULL,YES,YES);
}
return _2a1;
};
_1cd.resourceAtURL=function(aURL,_2a2){
aURL=(_1e4(aURL)).absoluteURL();
var _2a3=_29e(aURL),_2a4=aURL.pathComponents(),_a0=0,_2a5=_2a4.length;
for(;_a0<_2a5;++_a0){
var name=_2a4[_a0];
if(_85.call(_2a3._children,name)){
_2a3=_2a3._children[name];
}else{
if(_2a2){
if(name!=="/"){
name="./"+name;
}
_2a3=new _1cd(new CFURL(name,_2a3.URL()),_2a3,YES,YES);
}else{
throw new Error("Static Resource at "+aURL+" is not resolved (\""+name+"\")");
}
}
}
return _2a3;
};
_1cd.prototype.resourceAtURL=function(aURL,_2a6){
return _1cd.resourceAtURL(new CFURL(aURL,this.URL()),_2a6);
};
_1cd.resolveResourcesAtURLs=function(URLs,_2a7){
var _2a8=URLs.length,_2a9={};
for(var i=0,size=_2a8;i<size;i++){
var url=URLs[i];
_1cd.resolveResourceAtURL(url,NO,function(_2aa){
_2a9[url]=_2aa;
if(--_2a8===0){
_2a7(_2a9);
}
});
}
};
_1cd.resolveResourceAtURL=function(aURL,_2ab,_2ac,_2ad){
aURL=(_1e4(aURL)).absoluteURL();
_2ae(_29e(aURL),_2ab,aURL.pathComponents(),0,_2ac,_2ad);
};
_1cd.prototype.resolveResourceAtURL=function(aURL,_2af,_2b0){
_1cd.resolveResourceAtURL((new CFURL(aURL,this.URL())).absoluteURL(),_2af,_2b0);
};
function _2ae(_2b1,_2b2,_2b3,_2b4,_2b5,_2b6){
var _2b7=_2b3.length;
for(;_2b4<_2b7;++_2b4){
var name=_2b3[_2b4],_2b8=_85.call(_2b1._children,name)&&_2b1._children[name];
if(!_2b8){
_2b8=new _1cd(new CFURL(name,_2b1.URL()),_2b1,_2b4+1<_2b7||_2b2,NO,_2b6);
_2b8.resolve();
}
if(!_2b8.isResolved()){
return _2b8.addEventListener("resolve",function(){
_2ae(_2b1,_2b2,_2b3,_2b4,_2b5,_2b6);
});
}
if(_2b8.isNotFound()){
return _2b5(null,new Error("File not found: "+_2b3.join("/")));
}
if(_2b4+1<_2b7&&_2b8.isFile()){
return _2b5(null,new Error("File is not a directory: "+_2b3.join("/")));
}
_2b1=_2b8;
}
_2b5(_2b1);
};
function _2b9(aURL,_2ba,_2bb){
var _2bc=_1cd.includeURLs(),_2bd=(new CFURL(aURL,_2bc[_2ba])).absoluteURL();
_1cd.resolveResourceAtURL(_2bd,NO,function(_2be){
if(!_2be){
if(_2ba+1<_2bc.length){
_2b9(aURL,_2ba+1,_2bb);
}else{
_2bb(NULL);
}
return;
}
_2bb(_2be);
});
};
_1cd.resolveResourceAtURLSearchingIncludeURLs=function(aURL,_2bf){
_2b9(aURL,0,_2bf);
};
_1cd.prototype.addEventListener=function(_2c0,_2c1){
this._eventDispatcher.addEventListener(_2c0,_2c1);
};
_1cd.prototype.removeEventListener=function(_2c2,_2c3){
this._eventDispatcher.removeEventListener(_2c2,_2c3);
};
_1cd.prototype.isNotFound=function(){
return this._isNotFound;
};
_1cd.prototype.isFile=function(){
return !this._isDirectory;
};
_1cd.prototype.isDirectory=function(){
return this._isDirectory;
};
_1cd.prototype.toString=function(_2c4){
if(this.isNotFound()){
return "<file not found: "+this.name()+">";
}
var _2c5=this.name();
if(this.isDirectory()){
var _2c6=this._children;
for(var name in _2c6){
if(_2c6.hasOwnProperty(name)){
var _2c7=_2c6[name];
if(_2c4||!_2c7.isNotFound()){
_2c5+="\n\t"+((_2c6[name].toString(_2c4)).split("\n")).join("\n\t");
}
}
}
}
return _2c5;
};
var _2c8=NULL;
_1cd.includeURLs=function(){
if(_2c8!==NULL){
return _2c8;
}
_2c8=[];
if(!_1.OBJJ_INCLUDE_PATHS&&!_1.OBJJ_INCLUDE_URLS){
_2c8=["Frameworks","Frameworks/Debug"];
}else{
_2c8=(_1.OBJJ_INCLUDE_PATHS||[]).concat(_1.OBJJ_INCLUDE_URLS||[]);
}
var _2c9=_2c8.length;
while(_2c9--){
_2c8[_2c9]=(new CFURL(_2c8[_2c9])).asDirectoryPathURL();
}
return _2c8;
};
var _2ca="accessors",_2cb="class",_2cc="end",_2cd="function",_2ce="implementation",_2cf="import",_2d0="each",_2d1="outlet",_2d2="action",_2d3="new",_2d4="selector",_2d5="super",_2d6="var",_2d7="in",_2d8="pragma",_2d9="mark",_2da="=",_2db="+",_2dc="-",_2dd=":",_2de=",",_2df=".",_2e0="*",_2e1=";",_2e2="<",_2e3="{",_2e4="}",_2e5=">",_2e6="[",_2e7="\"",_2e8="@",_2e9="#",_2ea="]",_2eb="?",_2ec="(",_2ed=")",_2ee=/^(?:(?:\s+$)|(?:\/(?:\/|\*)))/,_2ef=/^[+-]?\d+(([.]\d+)*([eE][+-]?\d+))?$/,_2f0=/^[a-zA-Z_$](\w|$)*$/;
function _2f1(_2f2){
this._index=-1;
this._tokens=(_2f2+"\n").match(/\/\/.*(\r|\n)?|\/\*(?:.|\n|\r)*?\*\/|\w+\b|[+-]?\d+(([.]\d+)*([eE][+-]?\d+))?|"[^"\\]*(\\[\s\S][^"\\]*)*"|'[^'\\]*(\\[\s\S][^'\\]*)*'|\s+|./g);
this._context=[];
return this;
};
_2f1.prototype.push=function(){
this._context.push(this._index);
};
_2f1.prototype.pop=function(){
this._index=this._context.pop();
};
_2f1.prototype.peek=function(_2f3){
if(_2f3){
this.push();
var _2f4=this.skip_whitespace();
this.pop();
return _2f4;
}
return this._tokens[this._index+1];
};
_2f1.prototype.next=function(){
return this._tokens[++this._index];
};
_2f1.prototype.previous=function(){
return this._tokens[--this._index];
};
_2f1.prototype.last=function(){
if(this._index<0){
return NULL;
}
return this._tokens[this._index-1];
};
_2f1.prototype.skip_whitespace=function(_2f5){
var _2f6;
if(_2f5){
while((_2f6=this.previous())&&_2ee.test(_2f6)){
}
}else{
while((_2f6=this.next())&&_2ee.test(_2f6)){
}
}
return _2f6;
};
_2.Lexer=_2f1;
function _2f7(){
this.atoms=[];
};
_2f7.prototype.toString=function(){
return this.atoms.join("");
};
_2.preprocess=function(_2f8,aURL,_2f9){
return (new _2fa(_2f8,aURL,_2f9)).executable();
};
_2.eval=function(_2fb){
return eval((_2.preprocess(_2fb)).code());
};
var _2fa=function(_2fc,aURL,_2fd){
this._URL=new CFURL(aURL);
_2fc=_2fc.replace(/^#[^\n]+\n/,"\n");
this._currentSelector="";
this._currentClass="";
this._currentSuperClass="";
this._currentSuperMetaClass="";
this._buffer=new _2f7();
this._preprocessed=NULL;
this._dependencies=[];
this._tokens=new _2f1(_2fc);
this._flags=_2fd;
this._classMethod=false;
this._executable=NULL;
this._classLookupTable={};
this._classVars={};
var _2fe=new objj_class();
for(var i in _2fe){
this._classVars[i]=1;
}
this.preprocess(this._tokens,this._buffer);
};
_2fa.prototype.setClassInfo=function(_2ff,_300,_301){
this._classLookupTable[_2ff]={superClassName:_300,ivars:_301};
};
_2fa.prototype.getClassInfo=function(_302){
return this._classLookupTable[_302];
};
_2fa.prototype.allIvarNamesForClassName=function(_303){
var _304={},_305=this.getClassInfo(_303);
while(_305){
for(var i in _305.ivars){
_304[i]=1;
}
_305=this.getClassInfo(_305.superClassName);
}
return _304;
};
_2.Preprocessor=_2fa;
_2fa.Flags={};
_2fa.Flags.IncludeDebugSymbols=1<<0;
_2fa.Flags.IncludeTypeSignatures=1<<1;
_2fa.prototype.executable=function(){
if(!this._executable){
this._executable=new _306(this._buffer.toString(),this._dependencies,this._URL);
}
return this._executable;
};
_2fa.prototype.accessors=function(_307){
var _308=_307.skip_whitespace(),_309={};
if(_308!=_2ec){
_307.previous();
return _309;
}
while((_308=_307.skip_whitespace())!=_2ed){
var name=_308,_30a=true;
if(!/^ w+$/.test(name)){
throw new SyntaxError(this.error_message("*** @accessors attribute name not valid."));
}
if((_308=_307.skip_whitespace())==_2da){
_30a=_307.skip_whitespace();
if(!/^ w+$/.test(_30a)){
throw new SyntaxError(this.error_message("*** @accessors attribute value not valid."));
}
if(name=="setter"){
if((_308=_307.next())!=_2dd){
throw new SyntaxError(this.error_message("*** @accessors setter attribute requires argument with \":\" at end of selector name."));
}
_30a+=":";
}
_308=_307.skip_whitespace();
}
_309[name]=_30a;
if(_308==_2ed){
break;
}
if(_308!=_2de){
throw new SyntaxError(this.error_message("*** Expected ',' or ')' in @accessors attribute list."));
}
}
return _309;
};
_2fa.prototype.brackets=function(_30b,_30c){
var _30d=[];
while(this.preprocess(_30b,NULL,NULL,NULL,_30d[_30d.length]=[])){
}
if(_30d[0].length===1){
_30c.atoms[_30c.atoms.length]="[";
_30c.atoms[_30c.atoms.length]=_30d[0][0];
_30c.atoms[_30c.atoms.length]="]";
}else{
var _30e=new _2f7();
if(_30d[0][0].atoms[0]==_2d5){
_30c.atoms[_30c.atoms.length]="objj_msgSendSuper(";
_30c.atoms[_30c.atoms.length]="{ receiver:self, super_class:"+(this._classMethod?this._currentSuperMetaClass:this._currentSuperClass)+" }";
}else{
_30c.atoms[_30c.atoms.length]="objj_msgSend(";
_30c.atoms[_30c.atoms.length]=_30d[0][0];
}
_30e.atoms[_30e.atoms.length]=_30d[0][1];
var _30f=1,_310=_30d.length,_311=new _2f7();
for(;_30f<_310;++_30f){
var pair=_30d[_30f];
_30e.atoms[_30e.atoms.length]=pair[1];
_311.atoms[_311.atoms.length]=", "+pair[0];
}
_30c.atoms[_30c.atoms.length]=", \"";
_30c.atoms[_30c.atoms.length]=_30e;
_30c.atoms[_30c.atoms.length]="\"";
_30c.atoms[_30c.atoms.length]=_311;
_30c.atoms[_30c.atoms.length]=")";
}
};
_2fa.prototype.directive=function(_312,_313,_314){
var _315=_313?_313:new _2f7(),_316=_312.next();
if(_316.charAt(0)==_2e7){
_315.atoms[_315.atoms.length]=_316;
}else{
if(_316===_2cb){
_312.skip_whitespace();
return;
}else{
if(_316===_2ce){
this.implementation(_312,_315);
}else{
if(_316===_2cf){
this._import(_312);
}else{
if(_316===_2d4){
this.selector(_312,_315);
}
}
}
}
}
if(!_313){
return _315;
}
};
_2fa.prototype.hash=function(_317,_318){
var _319=_318?_318:new _2f7(),_31a=_317.next();
if(_31a===_2d8){
_31a=_317.skip_whitespace();
if(_31a===_2d9){
while((_31a=_317.next()).indexOf("\n")<0){
}
}
}else{
throw new SyntaxError(this.error_message("*** Expected \"pragma\" to follow # but instead saw \""+_31a+"\"."));
}
};
_2fa.prototype.implementation=function(_31b,_31c){
var _31d=_31c,_31e="",_31f=NO,_320=_31b.skip_whitespace(),_321="Nil",_322=new _2f7(),_323=new _2f7();
if(!/^\w/.test(_320)){
throw new Error(this.error_message("*** Expected class name, found \""+_320+"\"."));
}
this._currentSuperClass="objj_getClass(\""+_320+"\").super_class";
this._currentSuperMetaClass="objj_getMetaClass(\""+_320+"\").super_class";
this._currentClass=_320;
this._currentSelector="";
if((_31e=_31b.skip_whitespace())==_2ec){
_31e=_31b.skip_whitespace();
if(_31e==_2ed){
throw new SyntaxError(this.error_message("*** Can't Have Empty Category Name for class \""+_320+"\"."));
}
if(_31b.skip_whitespace()!=_2ed){
throw new SyntaxError(this.error_message("*** Improper Category Definition for class \""+_320+"\"."));
}
_31d.atoms[_31d.atoms.length]="{\nvar the_class = objj_getClass(\""+_320+"\")\n";
_31d.atoms[_31d.atoms.length]="if(!the_class) throw new SyntaxError(\"*** Could not find definition for class \\\""+_320+"\\\"\");\n";
_31d.atoms[_31d.atoms.length]="var meta_class = the_class.isa;";
}else{
if(_31e==_2dd){
_31e=_31b.skip_whitespace();
if(!_2f0.test(_31e)){
throw new SyntaxError(this.error_message("*** Expected class name, found \""+_31e+"\"."));
}
_321=_31e;
_31e=_31b.skip_whitespace();
}
_31d.atoms[_31d.atoms.length]="{var the_class = objj_allocateClassPair("+_321+", \""+_320+"\"),\nmeta_class = the_class.isa;";
if(_31e==_2e3){
var _324={},_325=0,_326=[],_327,_328={},_329=[];
while((_31e=_31b.skip_whitespace())&&_31e!=_2e4){
if(_31e===_2e8){
_31e=_31b.next();
if(_31e===_2ca){
_327=this.accessors(_31b);
}else{
if(_31e!==_2d1){
throw new SyntaxError(this.error_message("*** Unexpected '@' token in ivar declaration ('@"+_31e+"')."));
}else{
_329.push("@"+_31e);
}
}
}else{
if(_31e==_2e1){
if(_325++===0){
_31d.atoms[_31d.atoms.length]="class_addIvars(the_class, [";
}else{
_31d.atoms[_31d.atoms.length]=", ";
}
var name=_326[_326.length-1];
if(this._flags&_2fa.Flags.IncludeTypeSignatures){
_31d.atoms[_31d.atoms.length]="new objj_ivar(\""+name+"\", \""+(_329.slice(0,_329.length-1)).join(" ")+"\")";
}else{
_31d.atoms[_31d.atoms.length]="new objj_ivar(\""+name+"\")";
}
_324[name]=1;
_326=[];
_329=[];
if(_327){
_328[name]=_327;
_327=NULL;
}
}else{
_326.push(_31e);
_329.push(_31e);
}
}
}
if(_326.length){
throw new SyntaxError(this.error_message("*** Expected ';' in ivar declaration, found '}'."));
}
if(_325){
_31d.atoms[_31d.atoms.length]="]);\n";
}
if(!_31e){
throw new SyntaxError(this.error_message("*** Expected '}'"));
}
this.setClassInfo(_320,_321==="Nil"?null:_321,_324);
var _324=this.allIvarNamesForClassName(_320);
for(ivar_name in _328){
var _32a=_328[ivar_name],_32b=_32a["property"]||ivar_name;
var _32c=_32a["getter"]||_32b,_32d="(id)"+_32c+"\n{\nreturn "+ivar_name+";\n}";
if(_322.atoms.length!==0){
_322.atoms[_322.atoms.length]=",\n";
}
_322.atoms[_322.atoms.length]=this.method(new _2f1(_32d),_324);
if(_32a["readonly"]){
continue;
}
var _32e=_32a["setter"];
if(!_32e){
var _32f=_32b.charAt(0)=="_"?1:0;
_32e=(_32f?"_":"")+"set"+(_32b.substr(_32f,1)).toUpperCase()+_32b.substring(_32f+1)+":";
}
var _330="(void)"+_32e+"(id)newValue\n{\n";
if(_32a["copy"]){
_330+="if ("+ivar_name+" !== newValue)\n"+ivar_name+" = [newValue copy];\n}";
}else{
_330+=ivar_name+" = newValue;\n}";
}
if(_322.atoms.length!==0){
_322.atoms[_322.atoms.length]=",\n";
}
_322.atoms[_322.atoms.length]=this.method(new _2f1(_330),_324);
}
}else{
_31b.previous();
}
_31d.atoms[_31d.atoms.length]="objj_registerClassPair(the_class);\n";
}
if(!_324){
var _324=this.allIvarNamesForClassName(_320);
}
while(_31e=_31b.skip_whitespace()){
if(_31e==_2db){
this._classMethod=true;
if(_323.atoms.length!==0){
_323.atoms[_323.atoms.length]=", ";
}
_323.atoms[_323.atoms.length]=this.method(_31b,this._classVars);
}else{
if(_31e==_2dc){
this._classMethod=false;
if(_322.atoms.length!==0){
_322.atoms[_322.atoms.length]=", ";
}
_322.atoms[_322.atoms.length]=this.method(_31b,_324);
}else{
if(_31e==_2e9){
this.hash(_31b,_31d);
}else{
if(_31e==_2e8){
if((_31e=_31b.next())==_2cc){
break;
}else{
throw new SyntaxError(this.error_message("*** Expected \"@end\", found \"@"+_31e+"\"."));
}
}
}
}
}
}
if(_322.atoms.length!==0){
_31d.atoms[_31d.atoms.length]="class_addMethods(the_class, [";
_31d.atoms[_31d.atoms.length]=_322;
_31d.atoms[_31d.atoms.length]="]);\n";
}
if(_323.atoms.length!==0){
_31d.atoms[_31d.atoms.length]="class_addMethods(meta_class, [";
_31d.atoms[_31d.atoms.length]=_323;
_31d.atoms[_31d.atoms.length]="]);\n";
}
_31d.atoms[_31d.atoms.length]="}";
this._currentClass="";
};
_2fa.prototype._import=function(_331){
var _332="",_333=_331.skip_whitespace(),_334=_333!==_2e2;
if(_333===_2e2){
while((_333=_331.next())&&_333!==_2e5){
_332+=_333;
}
if(!_333){
throw new SyntaxError(this.error_message("*** Unterminated import statement."));
}
}else{
if(_333.charAt(0)===_2e7){
_332=_333.substr(1,_333.length-2);
}else{
throw new SyntaxError(this.error_message("*** Expecting '<' or '\"', found \""+_333+"\"."));
}
}
this._buffer.atoms[this._buffer.atoms.length]="objj_executeFile(\"";
this._buffer.atoms[this._buffer.atoms.length]=_332;
this._buffer.atoms[this._buffer.atoms.length]=_334?"\", YES);":"\", NO);";
this._dependencies.push(new _335(new CFURL(_332),_334));
};
_2fa.prototype.method=function(_336,_337){
var _338=new _2f7(),_339,_33a="",_33b=[],_33c=[null];
_337=_337||{};
while((_339=_336.skip_whitespace())&&_339!==_2e3&&_339!==_2e1){
if(_339==_2dd){
var type="";
_33a+=_339;
_339=_336.skip_whitespace();
if(_339==_2ec){
while((_339=_336.skip_whitespace())&&_339!=_2ed){
type+=_339;
}
_339=_336.skip_whitespace();
}
_33c[_33b.length+1]=type||null;
_33b[_33b.length]=_339;
if(_339 in _337){
CPLog.warn(this.error_message("*** Warning: Method ( "+_33a+" ) uses a parameter name that is already in use ( "+_339+" )"));
}
}else{
if(_339==_2ec){
var type="";
while((_339=_336.skip_whitespace())&&_339!=_2ed){
type+=_339;
}
_33c[0]=type||null;
}else{
if(_339==_2de){
if((_339=_336.skip_whitespace())!=_2df||_336.next()!=_2df||_336.next()!=_2df){
throw new SyntaxError(this.error_message("*** Argument list expected after ','."));
}
}else{
_33a+=_339;
}
}
}
}
if(_339===_2e1){
_339=_336.skip_whitespace();
if(_339!==_2e3){
throw new SyntaxError(this.error_message("Invalid semi-colon in method declaration. "+"Semi-colons are allowed only to terminate the method signature, before the open brace."));
}
}
var _33d=0,_33e=_33b.length;
_338.atoms[_338.atoms.length]="new objj_method(sel_getUid(\"";
_338.atoms[_338.atoms.length]=_33a;
_338.atoms[_338.atoms.length]="\"), function";
this._currentSelector=_33a;
if(this._flags&_2fa.Flags.IncludeDebugSymbols){
_338.atoms[_338.atoms.length]=" $"+this._currentClass+"__"+_33a.replace(/:/g,"_");
}
_338.atoms[_338.atoms.length]="(self, _cmd";
for(;_33d<_33e;++_33d){
_338.atoms[_338.atoms.length]=", ";
_338.atoms[_338.atoms.length]=_33b[_33d];
}
_338.atoms[_338.atoms.length]=")\n{ with(self)\n{";
_338.atoms[_338.atoms.length]=this.preprocess(_336,NULL,_2e4,_2e3);
_338.atoms[_338.atoms.length]="}\n}";
if(this._flags&_2fa.Flags.IncludeDebugSymbols){
_338.atoms[_338.atoms.length]=","+JSON.stringify(_33c);
}
_338.atoms[_338.atoms.length]=")";
this._currentSelector="";
return _338;
};
_2fa.prototype.preprocess=function(_33f,_340,_341,_342,_343){
var _344=_340?_340:new _2f7(),_345=0,_346="";
if(_343){
_343[0]=_344;
var _347=false,_348=[0,0,0];
}
while((_346=_33f.next())&&(_346!==_341||_345)){
if(_343){
if(_346===_2eb){
++_348[2];
}else{
if(_346===_2e3){
++_348[0];
}else{
if(_346===_2e4){
--_348[0];
}else{
if(_346===_2ec){
++_348[1];
}else{
if(_346===_2ed){
--_348[1];
}else{
if((_346===_2dd&&_348[2]--===0||(_347=_346===_2ea))&&_348[0]===0&&_348[1]===0){
_33f.push();
var _349=_347?_33f.skip_whitespace(true):_33f.previous(),_34a=_2ee.test(_349);
if(_34a||_2f0.test(_349)&&_2ee.test(_33f.previous())){
_33f.push();
var last=_33f.skip_whitespace(true),_34b=true,_34c=false;
if(last==="+"||last==="-"){
if(_33f.previous()!==last){
_34b=false;
}else{
last=_33f.skip_whitespace(true);
_34c=true;
}
}
_33f.pop();
_33f.pop();
if(_34b&&(!_34c&&last===_2e4||last===_2ed||last===_2ea||last===_2df||_2ef.test(last)||last.charAt(last.length-1)==="\""||last.charAt(last.length-1)==="'"||_2f0.test(last)&&!/^(new|return|case|var)$/.test(last))){
if(_34a){
_343[1]=":";
}else{
_343[1]=_349;
if(!_347){
_343[1]+=":";
}
var _345=_344.atoms.length;
while(_344.atoms[_345--]!==_349){
}
_344.atoms.length=_345;
}
return !_347;
}
if(_347){
return NO;
}
}
_33f.pop();
if(_347){
return NO;
}
}
}
}
}
}
}
_348[2]=MAX(_348[2],0);
}
if(_342){
if(_346===_342){
++_345;
}else{
if(_346===_341){
--_345;
}
}
}
if(_346===_2cd){
var _34d="";
while((_346=_33f.next())&&_346!==_2ec&&!/^\w/.test(_346)){
_34d+=_346;
}
if(_346===_2ec){
if(_342===_2ec){
++_345;
}
_344.atoms[_344.atoms.length]="function"+_34d+"(";
if(_343){
++_348[1];
}
}else{
_344.atoms[_344.atoms.length]=_346+" = function";
}
}else{
if(_346==_2e8){
this.directive(_33f,_344);
}else{
if(_346==_2e9){
this.hash(_33f,_344);
}else{
if(_346==_2e6){
this.brackets(_33f,_344);
}else{
_344.atoms[_344.atoms.length]=_346;
}
}
}
}
}
if(_343){
throw new SyntaxError(this.error_message("*** Expected ']' - Unterminated message send or array."));
}
if(!_340){
return _344;
}
};
_2fa.prototype.selector=function(_34e,_34f){
var _350=_34f?_34f:new _2f7();
_350.atoms[_350.atoms.length]="sel_getUid(\"";
if(_34e.skip_whitespace()!=_2ec){
throw new SyntaxError(this.error_message("*** Expected '('"));
}
var _351=_34e.skip_whitespace();
if(_351==_2ed){
throw new SyntaxError(this.error_message("*** Unexpected ')', can't have empty @selector()"));
}
_34f.atoms[_34f.atoms.length]=_351;
var _352,_353=true;
while((_352=_34e.next())&&_352!=_2ed){
if(_353&&/^\d+$/.test(_352)||!/^(\w|$|\:)/.test(_352)){
if(!/\S/.test(_352)){
if(_34e.skip_whitespace()==_2ed){
break;
}else{
throw new SyntaxError(this.error_message("*** Unexpected whitespace in @selector()."));
}
}else{
throw new SyntaxError(this.error_message("*** Illegal character '"+_352+"' in @selector()."));
}
}
_350.atoms[_350.atoms.length]=_352;
_353=_352==_2dd;
}
_350.atoms[_350.atoms.length]="\")";
if(!_34f){
return _350;
}
};
_2fa.prototype.error_message=function(_354){
return _354+" <Context File: "+this._URL+(this._currentClass?" Class: "+this._currentClass:"")+(this._currentSelector?" Method: "+this._currentSelector:"")+">";
};
(function webpackUniversalModuleDefinition(root,_355){
function _356(_357,_358){
if(_357===nil){
return "nil";
}
if(_357===_32){
return "undefined";
}
if(_357===window){
return "window";
}
if(_358===0){
return "...";
}
if(typeof _357!=="object"){
return String(_357);
}
var _359=[],desc;
for(var _35a in _357){
if(_357.hasOwnProperty(_35a)){
_359.push(_35a);
}
}
_359.sort();
desc="{";
for(var i=0;i<_359.length;++i){
if(i===0){
desc+="\n";
}
var _35b=_357[_359[i]],_35c=((_356(_35b,_358!==_32?_358-1:_358)).split("\n")).join("\n    ");
desc+="    "+_359[i]+": "+_35c;
if(i<_359.length-1){
desc+=",\n";
}else{
desc+="\n";
}
}
desc+="}";
return desc;
};
if(typeof _2==="object"&&typeof module==="object"){
module.exports=_355();
}else{
if(typeof define==="function"&&define.amd){
define([],_355);
}else{
if(typeof _2==="object"){
_2["sourceMap"]=_355();
}else{
root["sourceMap"]=_355();
}
}
}
})(this,function(){
return (function(_35d){
var _35e={};
function _35f(_360){
if(_35e[_360]){
return _35e[_360].exports;
}
var _361=_35e[_360]={exports:{},id:_360,loaded:false};
_35d[_360].call(_361.exports,_361,_361.exports,_35f);
_361.loaded=true;
return _361.exports;
};
_35f.m=_35d;
_35f.c=_35e;
_35f.p="";
return _35f(0);
})([function(_362,_363,_364){
_363.SourceMapGenerator=(_364(1)).SourceMapGenerator;
_363.SourceMapConsumer=(_364(7)).SourceMapConsumer;
_363.SourceNode=(_364(10)).SourceNode;
},function(_365,_366,_367){
var _368=_367(2);
var util=_367(4);
var _369=(_367(5)).ArraySet;
var _36a=(_367(6)).MappingList;
function _36b(_36c){
if(!_36c){
_36c={};
}
this._file=util.getArg(_36c,"file",null);
this._sourceRoot=util.getArg(_36c,"sourceRoot",null);
this._skipValidation=util.getArg(_36c,"skipValidation",false);
this._sources=new _369();
this._names=new _369();
this._mappings=new _36a();
this._sourcesContents=null;
};
_36b.prototype._version=3;
_36b.fromSourceMap=function SourceMapGenerator_fromSourceMap(_36d){
var _36e=_36d.sourceRoot;
var _36f=new _36b({file:_36d.file,sourceRoot:_36e});
_36d.eachMapping(function(_370){
var _371={generated:{line:_370.generatedLine,column:_370.generatedColumn}};
if(_370.source!=null){
_371.source=_370.source;
if(_36e!=null){
_371.source=util.relative(_36e,_371.source);
}
_371.original={line:_370.originalLine,column:_370.originalColumn};
if(_370.name!=null){
_371.name=_370.name;
}
}
_36f.addMapping(_371);
});
_36d.sources.forEach(function(_372){
var _373=_36d.sourceContentFor(_372);
if(_373!=null){
_36f.setSourceContent(_372,_373);
}
});
return _36f;
};
_36b.prototype.addMapping=function SourceMapGenerator_addMapping(_374){
var _375=util.getArg(_374,"generated");
var _376=util.getArg(_374,"original",null);
var _377=util.getArg(_374,"source",null);
var name=util.getArg(_374,"name",null);
if(!this._skipValidation){
this._validateMapping(_375,_376,_377,name);
}
if(_377!=null){
_377=String(_377);
if(!this._sources.has(_377)){
this._sources.add(_377);
}
}
if(name!=null){
name=String(name);
if(!this._names.has(name)){
this._names.add(name);
}
}
this._mappings.add({generatedLine:_375.line,generatedColumn:_375.column,originalLine:_376!=null&&_376.line,originalColumn:_376!=null&&_376.column,source:_377,name:name});
};
_36b.prototype.setSourceContent=function SourceMapGenerator_setSourceContent(_378,_379){
var _37a=_378;
if(this._sourceRoot!=null){
_37a=util.relative(this._sourceRoot,_37a);
}
if(_379!=null){
if(!this._sourcesContents){
this._sourcesContents=Object.create(null);
}
this._sourcesContents[util.toSetString(_37a)]=_379;
}else{
if(this._sourcesContents){
delete this._sourcesContents[util.toSetString(_37a)];
if((Object.keys(this._sourcesContents)).length===0){
this._sourcesContents=null;
}
}
}
};
_36b.prototype.applySourceMap=function SourceMapGenerator_applySourceMap(_37b,_37c,_37d){
var _37e=_37c;
if(_37c==null){
if(_37b.file==null){
throw new Error("SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, "+"or the source map's \"file\" property. Both were omitted.");
}
_37e=_37b.file;
}
var _37f=this._sourceRoot;
if(_37f!=null){
_37e=util.relative(_37f,_37e);
}
var _380=new _369();
var _381=new _369();
this._mappings.unsortedForEach(function(_382){
if(_382.source===_37e&&_382.originalLine!=null){
var _383=_37b.originalPositionFor({line:_382.originalLine,column:_382.originalColumn});
if(_383.source!=null){
_382.source=_383.source;
if(_37d!=null){
_382.source=util.join(_37d,_382.source);
}
if(_37f!=null){
_382.source=util.relative(_37f,_382.source);
}
_382.originalLine=_383.line;
_382.originalColumn=_383.column;
if(_383.name!=null){
_382.name=_383.name;
}
}
}
var _384=_382.source;
if(_384!=null&&!_380.has(_384)){
_380.add(_384);
}
var name=_382.name;
if(name!=null&&!_381.has(name)){
_381.add(name);
}
},this);
this._sources=_380;
this._names=_381;
_37b.sources.forEach(function(_385){
var _386=_37b.sourceContentFor(_385);
if(_386!=null){
if(_37d!=null){
_385=util.join(_37d,_385);
}
if(_37f!=null){
_385=util.relative(_37f,_385);
}
this.setSourceContent(_385,_386);
}
},this);
};
_36b.prototype._validateMapping=function SourceMapGenerator_validateMapping(_387,_388,_389,_38a){
if(_387&&"line" in _387&&"column" in _387&&_387.line>0&&_387.column>=0&&!_388&&!_389&&!_38a){
return;
}else{
if(_387&&"line" in _387&&"column" in _387&&_388&&"line" in _388&&"column" in _388&&_387.line>0&&_387.column>=0&&_388.line>0&&_388.column>=0&&_389){
return;
}else{
throw new Error("Invalid mapping: "+JSON.stringify({generated:_387,source:_389,original:_388,name:_38a}));
}
}
};
_36b.prototype._serializeMappings=function SourceMapGenerator_serializeMappings(){
var _38b=0;
var _38c=1;
var _38d=0;
var _38e=0;
var _38f=0;
var _390=0;
var _391="";
var next;
var _392;
var _393;
var _394;
var _395=this._mappings.toArray();
for(var i=0,len=_395.length;i<len;i++){
_392=_395[i];
next="";
if(_392.generatedLine!==_38c){
_38b=0;
while(_392.generatedLine!==_38c){
next+=";";
_38c++;
}
}else{
if(i>0){
if(!util.compareByGeneratedPositionsInflated(_392,_395[i-1])){
continue;
}
next+=",";
}
}
next+=_368.encode(_392.generatedColumn-_38b);
_38b=_392.generatedColumn;
if(_392.source!=null){
_394=this._sources.indexOf(_392.source);
next+=_368.encode(_394-_390);
_390=_394;
next+=_368.encode(_392.originalLine-1-_38e);
_38e=_392.originalLine-1;
next+=_368.encode(_392.originalColumn-_38d);
_38d=_392.originalColumn;
if(_392.name!=null){
_393=this._names.indexOf(_392.name);
next+=_368.encode(_393-_38f);
_38f=_393;
}
}
_391+=next;
}
return _391;
};
_36b.prototype._generateSourcesContent=function SourceMapGenerator_generateSourcesContent(_396,_397){
return _396.map(function(_398){
if(!this._sourcesContents){
return null;
}
if(_397!=null){
_398=util.relative(_397,_398);
}
var key=util.toSetString(_398);
return Object.prototype.hasOwnProperty.call(this._sourcesContents,key)?this._sourcesContents[key]:null;
},this);
};
_36b.prototype.toJSON=function SourceMapGenerator_toJSON(){
var map={version:this._version,sources:this._sources.toArray(),names:this._names.toArray(),mappings:this._serializeMappings()};
if(this._file!=null){
map.file=this._file;
}
if(this._sourceRoot!=null){
map.sourceRoot=this._sourceRoot;
}
if(this._sourcesContents){
map.sourcesContent=this._generateSourcesContent(map.sources,map.sourceRoot);
}
return map;
};
_36b.prototype.toString=function SourceMapGenerator_toString(){
return JSON.stringify(this.toJSON());
};
_366.SourceMapGenerator=_36b;
},function(_399,_39a,_39b){
var _39c=_39b(3);
var _39d=5;
var _39e=1<<_39d;
var _39f=_39e-1;
var _3a0=_39e;
function _3a1(_3a2){
return _3a2<0?(-_3a2<<1)+1:(_3a2<<1)+0;
};
function _3a3(_3a4){
var _3a5=(_3a4&1)===1;
var _3a6=_3a4>>1;
return _3a5?-_3a6:_3a6;
};
_39a.encode=function base64VLQ_encode(_3a7){
var _3a8="";
var _3a9;
var vlq=_3a1(_3a7);
do{
_3a9=vlq&_39f;
vlq>>>=_39d;
if(vlq>0){
_3a9|=_3a0;
}
_3a8+=_39c.encode(_3a9);
}while(vlq>0);
return _3a8;
};
_39a.decode=function base64VLQ_decode(aStr,_3aa,_3ab){
var _3ac=aStr.length;
var _3ad=0;
var _3ae=0;
var _3af,_3b0;
do{
if(_3aa>=_3ac){
throw new Error("Expected more digits in base 64 VLQ value.");
}
_3b0=_39c.decode(aStr.charCodeAt(_3aa++));
if(_3b0===-1){
throw new Error("Invalid base64 digit: "+aStr.charAt(_3aa-1));
}
_3af=!!(_3b0&_3a0);
_3b0&=_39f;
_3ad=_3ad+(_3b0<<_3ae);
_3ae+=_39d;
}while(_3af);
_3ab.value=_3a3(_3ad);
_3ab.rest=_3aa;
};
},function(_3b1,_3b2){
var _3b3="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
_3b2.encode=function(_3b4){
if(0<=_3b4&&_3b4<_3b3.length){
return _3b3[_3b4];
}
throw new TypeError("Must be between 0 and 63: "+_3b4);
};
_3b2.decode=function(_3b5){
var bigA=65;
var bigZ=90;
var _3b6=97;
var _3b7=122;
var zero=48;
var nine=57;
var plus=43;
var _3b8=47;
var _3b9=26;
var _3ba=52;
if(bigA<=_3b5&&_3b5<=bigZ){
return _3b5-bigA;
}
if(_3b6<=_3b5&&_3b5<=_3b7){
return _3b5-_3b6+_3b9;
}
if(zero<=_3b5&&_3b5<=nine){
return _3b5-zero+_3ba;
}
if(_3b5==plus){
return 62;
}
if(_3b5==_3b8){
return 63;
}
return -1;
};
},function(_3bb,_3bc){
function _3bd(_3be,_3bf,_3c0){
if(_3bf in _3be){
return _3be[_3bf];
}else{
if(arguments.length===3){
return _3c0;
}else{
throw new Error("\""+_3bf+"\" is a required argument.");
}
}
};
_3bc.getArg=_3bd;
var _3c1=/^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.]*)(?::(\d+))?(\S*)$/;
var _3c2=/^data:.+\,.+$/;
function _3c3(aUrl){
var _3c4=aUrl.match(_3c1);
if(!_3c4){
return null;
}
return {scheme:_3c4[1],auth:_3c4[2],host:_3c4[3],port:_3c4[4],path:_3c4[5]};
};
_3bc.urlParse=_3c3;
function _3c5(_3c6){
var url="";
if(_3c6.scheme){
url+=_3c6.scheme+":";
}
url+="//";
if(_3c6.auth){
url+=_3c6.auth+"@";
}
if(_3c6.host){
url+=_3c6.host;
}
if(_3c6.port){
url+=":"+_3c6.port;
}
if(_3c6.path){
url+=_3c6.path;
}
return url;
};
_3bc.urlGenerate=_3c5;
function _3c7(_3c8){
var path=_3c8;
var url=_3c3(_3c8);
if(url){
if(!url.path){
return _3c8;
}
path=url.path;
}
var _3c9=_3bc.isAbsolute(path);
var _3ca=path.split(/\/+/);
for(var part,up=0,i=_3ca.length-1;i>=0;i--){
part=_3ca[i];
if(part==="."){
_3ca.splice(i,1);
}else{
if(part===".."){
up++;
}else{
if(up>0){
if(part===""){
_3ca.splice(i+1,up);
up=0;
}else{
_3ca.splice(i,2);
up--;
}
}
}
}
}
path=_3ca.join("/");
if(path===""){
path=_3c9?"/":".";
}
if(url){
url.path=path;
return _3c5(url);
}
return path;
};
_3bc.normalize=_3c7;
function join(_3cb,_3cc){
if(_3cb===""){
_3cb=".";
}
if(_3cc===""){
_3cc=".";
}
var _3cd=_3c3(_3cc);
var _3ce=_3c3(_3cb);
if(_3ce){
_3cb=_3ce.path||"/";
}
if(_3cd&&!_3cd.scheme){
if(_3ce){
_3cd.scheme=_3ce.scheme;
}
return _3c5(_3cd);
}
if(_3cd||_3cc.match(_3c2)){
return _3cc;
}
if(_3ce&&!_3ce.host&&!_3ce.path){
_3ce.host=_3cc;
return _3c5(_3ce);
}
var _3cf=_3cc.charAt(0)==="/"?_3cc:_3c7(_3cb.replace(/\/+$/,"")+"/"+_3cc);
if(_3ce){
_3ce.path=_3cf;
return _3c5(_3ce);
}
return _3cf;
};
_3bc.join=join;
_3bc.isAbsolute=function(_3d0){
return _3d0.charAt(0)==="/"||!!_3d0.match(_3c1);
};
function _3d1(_3d2,_3d3){
if(_3d2===""){
_3d2=".";
}
_3d2=_3d2.replace(/\/$/,"");
var _3d4=0;
while(_3d3.indexOf(_3d2+"/")!==0){
var _3d5=_3d2.lastIndexOf("/");
if(_3d5<0){
return _3d3;
}
_3d2=_3d2.slice(0,_3d5);
if(_3d2.match(/^([^\/]+:\/)?\/*$/)){
return _3d3;
}
++_3d4;
}
return (Array(_3d4+1)).join("../")+_3d3.substr(_3d2.length+1);
};
_3bc.relative=_3d1;
var _3d6=(function(){
var obj=Object.create(null);
return !("__proto__" in obj);
})();
function _3d7(s){
return s;
};
function _3d8(aStr){
if(_3d9(aStr)){
return "$"+aStr;
}
return aStr;
};
_3bc.toSetString=_3d6?_3d7:_3d8;
function _3da(aStr){
if(_3d9(aStr)){
return aStr.slice(1);
}
return aStr;
};
_3bc.fromSetString=_3d6?_3d7:_3da;
function _3d9(s){
if(!s){
return false;
}
var _3db=s.length;
if(_3db<9){
return false;
}
if(s.charCodeAt(_3db-1)!==95||s.charCodeAt(_3db-2)!==95||s.charCodeAt(_3db-3)!==111||s.charCodeAt(_3db-4)!==116||s.charCodeAt(_3db-5)!==111||s.charCodeAt(_3db-6)!==114||s.charCodeAt(_3db-7)!==112||s.charCodeAt(_3db-8)!==95||s.charCodeAt(_3db-9)!==95){
return false;
}
for(var i=_3db-10;i>=0;i--){
if(s.charCodeAt(i)!==36){
return false;
}
}
return true;
};
function _3dc(_3dd,_3de,_3df){
var cmp=_3dd.source-_3de.source;
if(cmp!==0){
return cmp;
}
cmp=_3dd.originalLine-_3de.originalLine;
if(cmp!==0){
return cmp;
}
cmp=_3dd.originalColumn-_3de.originalColumn;
if(cmp!==0||_3df){
return cmp;
}
cmp=_3dd.generatedColumn-_3de.generatedColumn;
if(cmp!==0){
return cmp;
}
cmp=_3dd.generatedLine-_3de.generatedLine;
if(cmp!==0){
return cmp;
}
return _3dd.name-_3de.name;
};
_3bc.compareByOriginalPositions=_3dc;
function _3e0(_3e1,_3e2,_3e3){
var cmp=_3e1.generatedLine-_3e2.generatedLine;
if(cmp!==0){
return cmp;
}
cmp=_3e1.generatedColumn-_3e2.generatedColumn;
if(cmp!==0||_3e3){
return cmp;
}
cmp=_3e1.source-_3e2.source;
if(cmp!==0){
return cmp;
}
cmp=_3e1.originalLine-_3e2.originalLine;
if(cmp!==0){
return cmp;
}
cmp=_3e1.originalColumn-_3e2.originalColumn;
if(cmp!==0){
return cmp;
}
return _3e1.name-_3e2.name;
};
_3bc.compareByGeneratedPositionsDeflated=_3e0;
function _3e4(_3e5,_3e6){
if(_3e5===_3e6){
return 0;
}
if(_3e5>_3e6){
return 1;
}
return -1;
};
function _3e7(_3e8,_3e9){
var cmp=_3e8.generatedLine-_3e9.generatedLine;
if(cmp!==0){
return cmp;
}
cmp=_3e8.generatedColumn-_3e9.generatedColumn;
if(cmp!==0){
return cmp;
}
cmp=_3e4(_3e8.source,_3e9.source);
if(cmp!==0){
return cmp;
}
cmp=_3e8.originalLine-_3e9.originalLine;
if(cmp!==0){
return cmp;
}
cmp=_3e8.originalColumn-_3e9.originalColumn;
if(cmp!==0){
return cmp;
}
return _3e4(_3e8.name,_3e9.name);
};
_3bc.compareByGeneratedPositionsInflated=_3e7;
},function(_3ea,_3eb,_3ec){
var util=_3ec(4);
var has=Object.prototype.hasOwnProperty;
function _3ed(){
this._array=[];
this._set=Object.create(null);
};
_3ed.fromArray=function ArraySet_fromArray(_3ee,_3ef){
var set=new _3ed();
for(var i=0,len=_3ee.length;i<len;i++){
set.add(_3ee[i],_3ef);
}
return set;
};
_3ed.prototype.size=function ArraySet_size(){
return (Object.getOwnPropertyNames(this._set)).length;
};
_3ed.prototype.add=function ArraySet_add(aStr,_3f0){
var sStr=util.toSetString(aStr);
var _3f1=has.call(this._set,sStr);
var idx=this._array.length;
if(!_3f1||_3f0){
this._array.push(aStr);
}
if(!_3f1){
this._set[sStr]=idx;
}
};
_3ed.prototype.has=function ArraySet_has(aStr){
var sStr=util.toSetString(aStr);
return has.call(this._set,sStr);
};
_3ed.prototype.indexOf=function ArraySet_indexOf(aStr){
var sStr=util.toSetString(aStr);
if(has.call(this._set,sStr)){
return this._set[sStr];
}
throw new Error("\""+aStr+"\" is not in the set.");
};
_3ed.prototype.at=function ArraySet_at(aIdx){
if(aIdx>=0&&aIdx<this._array.length){
return this._array[aIdx];
}
throw new Error("No element indexed by "+aIdx);
};
_3ed.prototype.toArray=function ArraySet_toArray(){
return this._array.slice();
};
_3eb.ArraySet=_3ed;
},function(_3f2,_3f3,_3f4){
var util=_3f4(4);
function _3f5(_3f6,_3f7){
var _3f8=_3f6.generatedLine;
var _3f9=_3f7.generatedLine;
var _3fa=_3f6.generatedColumn;
var _3fb=_3f7.generatedColumn;
return _3f9>_3f8||_3f9==_3f8&&_3fb>=_3fa||util.compareByGeneratedPositionsInflated(_3f6,_3f7)<=0;
};
function _3fc(){
this._array=[];
this._sorted=true;
this._last={generatedLine:-1,generatedColumn:0};
};
_3fc.prototype.unsortedForEach=function MappingList_forEach(_3fd,_3fe){
this._array.forEach(_3fd,_3fe);
};
_3fc.prototype.add=function MappingList_add(_3ff){
if(_3f5(this._last,_3ff)){
this._last=_3ff;
this._array.push(_3ff);
}else{
this._sorted=false;
this._array.push(_3ff);
}
};
_3fc.prototype.toArray=function MappingList_toArray(){
if(!this._sorted){
this._array.sort(util.compareByGeneratedPositionsInflated);
this._sorted=true;
}
return this._array;
};
_3f3.MappingList=_3fc;
},function(_400,_401,_402){
var util=_402(4);
var _403=_402(8);
var _404=(_402(5)).ArraySet;
var _405=_402(2);
var _406=(_402(9)).quickSort;
function _407(_408){
var _409=_408;
if(typeof _408==="string"){
_409=JSON.parse(_408.replace(/^\)\]\}'/,""));
}
return _409.sections!=null?new _40a(_409):new _40b(_409);
};
_407.fromSourceMap=function(_40c){
return _40b.fromSourceMap(_40c);
};
_407.prototype._version=3;
_407.prototype.__generatedMappings=null;
Object.defineProperty(_407.prototype,"_generatedMappings",{get:function(){
if(!this.__generatedMappings){
this._parseMappings(this._mappings,this.sourceRoot);
}
return this.__generatedMappings;
}});
_407.prototype.__originalMappings=null;
Object.defineProperty(_407.prototype,"_originalMappings",{get:function(){
if(!this.__originalMappings){
this._parseMappings(this._mappings,this.sourceRoot);
}
return this.__originalMappings;
}});
_407.prototype._charIsMappingSeparator=function SourceMapConsumer_charIsMappingSeparator(aStr,_40d){
var c=aStr.charAt(_40d);
return c===";"||c===",";
};
_407.prototype._parseMappings=function SourceMapConsumer_parseMappings(aStr,_40e){
throw new Error("Subclasses must implement _parseMappings");
};
_407.GENERATED_ORDER=1;
_407.ORIGINAL_ORDER=2;
_407.GREATEST_LOWER_BOUND=1;
_407.LEAST_UPPER_BOUND=2;
_407.prototype.eachMapping=function SourceMapConsumer_eachMapping(_40f,_410,_411){
var _412=_410||null;
var _413=_411||_407.GENERATED_ORDER;
var _414;
switch(_413){
case _407.GENERATED_ORDER:
_414=this._generatedMappings;
break;
case _407.ORIGINAL_ORDER:
_414=this._originalMappings;
break;
default:
throw new Error("Unknown order of iteration.");
}
var _415=this.sourceRoot;
(_414.map(function(_416){
var _417=_416.source===null?null:this._sources.at(_416.source);
if(_417!=null&&_415!=null){
_417=util.join(_415,_417);
}
return {source:_417,generatedLine:_416.generatedLine,generatedColumn:_416.generatedColumn,originalLine:_416.originalLine,originalColumn:_416.originalColumn,name:_416.name===null?null:this._names.at(_416.name)};
},this)).forEach(_40f,_412);
};
_407.prototype.allGeneratedPositionsFor=function SourceMapConsumer_allGeneratedPositionsFor(_418){
var line=util.getArg(_418,"line");
var _419={source:util.getArg(_418,"source"),originalLine:line,originalColumn:util.getArg(_418,"column",0)};
if(this.sourceRoot!=null){
_419.source=util.relative(this.sourceRoot,_419.source);
}
if(!this._sources.has(_419.source)){
return [];
}
_419.source=this._sources.indexOf(_419.source);
var _41a=[];
var _41b=this._findMapping(_419,this._originalMappings,"originalLine","originalColumn",util.compareByOriginalPositions,_403.LEAST_UPPER_BOUND);
if(_41b>=0){
var _41c=this._originalMappings[_41b];
if(_418.column===_32){
var _41d=_41c.originalLine;
while(_41c&&_41c.originalLine===_41d){
_41a.push({line:util.getArg(_41c,"generatedLine",null),column:util.getArg(_41c,"generatedColumn",null),lastColumn:util.getArg(_41c,"lastGeneratedColumn",null)});
_41c=this._originalMappings[++_41b];
}
}else{
var _41e=_41c.originalColumn;
while(_41c&&_41c.originalLine===line&&_41c.originalColumn==_41e){
_41a.push({line:util.getArg(_41c,"generatedLine",null),column:util.getArg(_41c,"generatedColumn",null),lastColumn:util.getArg(_41c,"lastGeneratedColumn",null)});
_41c=this._originalMappings[++_41b];
}
}
}
return _41a;
};
_401.SourceMapConsumer=_407;
function _40b(_41f){
var _420=_41f;
if(typeof _41f==="string"){
_420=JSON.parse(_41f.replace(/^\)\]\}'/,""));
}
var _421=util.getArg(_420,"version");
var _422=util.getArg(_420,"sources");
var _423=util.getArg(_420,"names",[]);
var _424=util.getArg(_420,"sourceRoot",null);
var _425=util.getArg(_420,"sourcesContent",null);
var _426=util.getArg(_420,"mappings");
var file=util.getArg(_420,"file",null);
if(_421!=this._version){
throw new Error("Unsupported version: "+_421);
}
_422=((_422.map(String)).map(util.normalize)).map(function(_427){
return _424&&util.isAbsolute(_424)&&util.isAbsolute(_427)?util.relative(_424,_427):_427;
});
this._names=_404.fromArray(_423.map(String),true);
this._sources=_404.fromArray(_422,true);
this.sourceRoot=_424;
this.sourcesContent=_425;
this._mappings=_426;
this.file=file;
};
_40b.prototype=Object.create(_407.prototype);
_40b.prototype.consumer=_407;
_40b.fromSourceMap=function SourceMapConsumer_fromSourceMap(_428){
var smc=Object.create(_40b.prototype);
var _429=smc._names=_404.fromArray(_428._names.toArray(),true);
var _42a=smc._sources=_404.fromArray(_428._sources.toArray(),true);
smc.sourceRoot=_428._sourceRoot;
smc.sourcesContent=_428._generateSourcesContent(smc._sources.toArray(),smc.sourceRoot);
smc.file=_428._file;
var _42b=(_428._mappings.toArray()).slice();
var _42c=smc.__generatedMappings=[];
var _42d=smc.__originalMappings=[];
for(var i=0,_42e=_42b.length;i<_42e;i++){
var _42f=_42b[i];
var _430=new _431();
_430.generatedLine=_42f.generatedLine;
_430.generatedColumn=_42f.generatedColumn;
if(_42f.source){
_430.source=_42a.indexOf(_42f.source);
_430.originalLine=_42f.originalLine;
_430.originalColumn=_42f.originalColumn;
if(_42f.name){
_430.name=_429.indexOf(_42f.name);
}
_42d.push(_430);
}
_42c.push(_430);
}
_406(smc.__originalMappings,util.compareByOriginalPositions);
return smc;
};
_40b.prototype._version=3;
Object.defineProperty(_40b.prototype,"sources",{get:function(){
return (this._sources.toArray()).map(function(s){
return this.sourceRoot!=null?util.join(this.sourceRoot,s):s;
},this);
}});
function _431(){
this.generatedLine=0;
this.generatedColumn=0;
this.source=null;
this.originalLine=null;
this.originalColumn=null;
this.name=null;
};
_40b.prototype._parseMappings=function SourceMapConsumer_parseMappings(aStr,_432){
var _433=1;
var _434=0;
var _435=0;
var _436=0;
var _437=0;
var _438=0;
var _439=aStr.length;
var _43a=0;
var _43b={};
var temp={};
var _43c=[];
var _43d=[];
var _43e,str,_43f,end,_440;
while(_43a<_439){
if(aStr.charAt(_43a)===";"){
_433++;
_43a++;
_434=0;
}else{
if(aStr.charAt(_43a)===","){
_43a++;
}else{
_43e=new _431();
_43e.generatedLine=_433;
for(end=_43a;end<_439;end++){
if(this._charIsMappingSeparator(aStr,end)){
break;
}
}
str=aStr.slice(_43a,end);
_43f=_43b[str];
if(_43f){
_43a+=str.length;
}else{
_43f=[];
while(_43a<end){
_405.decode(aStr,_43a,temp);
_440=temp.value;
_43a=temp.rest;
_43f.push(_440);
}
if(_43f.length===2){
throw new Error("Found a source, but no line and column");
}
if(_43f.length===3){
throw new Error("Found a source and line, but no column");
}
_43b[str]=_43f;
}
_43e.generatedColumn=_434+_43f[0];
_434=_43e.generatedColumn;
if(_43f.length>1){
_43e.source=_437+_43f[1];
_437+=_43f[1];
_43e.originalLine=_435+_43f[2];
_435=_43e.originalLine;
_43e.originalLine+=1;
_43e.originalColumn=_436+_43f[3];
_436=_43e.originalColumn;
if(_43f.length>4){
_43e.name=_438+_43f[4];
_438+=_43f[4];
}
}
_43d.push(_43e);
if(typeof _43e.originalLine==="number"){
_43c.push(_43e);
}
}
}
}
_406(_43d,util.compareByGeneratedPositionsDeflated);
this.__generatedMappings=_43d;
_406(_43c,util.compareByOriginalPositions);
this.__originalMappings=_43c;
};
_40b.prototype._findMapping=function SourceMapConsumer_findMapping(_441,_442,_443,_444,_445,_446){
if(_441[_443]<=0){
throw new TypeError("Line must be greater than or equal to 1, got "+_441[_443]);
}
if(_441[_444]<0){
throw new TypeError("Column must be greater than or equal to 0, got "+_441[_444]);
}
return _403.search(_441,_442,_445,_446);
};
_40b.prototype.computeColumnSpans=function SourceMapConsumer_computeColumnSpans(){
for(var _447=0;_447<this._generatedMappings.length;++_447){
var _448=this._generatedMappings[_447];
if(_447+1<this._generatedMappings.length){
var _449=this._generatedMappings[_447+1];
if(_448.generatedLine===_449.generatedLine){
_448.lastGeneratedColumn=_449.generatedColumn-1;
continue;
}
}
_448.lastGeneratedColumn=Infinity;
}
};
_40b.prototype.originalPositionFor=function SourceMapConsumer_originalPositionFor(_44a){
var _44b={generatedLine:util.getArg(_44a,"line"),generatedColumn:util.getArg(_44a,"column")};
var _44c=this._findMapping(_44b,this._generatedMappings,"generatedLine","generatedColumn",util.compareByGeneratedPositionsDeflated,util.getArg(_44a,"bias",_407.GREATEST_LOWER_BOUND));
if(_44c>=0){
var _44d=this._generatedMappings[_44c];
if(_44d.generatedLine===_44b.generatedLine){
var _44e=util.getArg(_44d,"source",null);
if(_44e!==null){
_44e=this._sources.at(_44e);
if(this.sourceRoot!=null){
_44e=util.join(this.sourceRoot,_44e);
}
}
var name=util.getArg(_44d,"name",null);
if(name!==null){
name=this._names.at(name);
}
return {source:_44e,line:util.getArg(_44d,"originalLine",null),column:util.getArg(_44d,"originalColumn",null),name:name};
}
}
return {source:null,line:null,column:null,name:null};
};
_40b.prototype.hasContentsOfAllSources=function BasicSourceMapConsumer_hasContentsOfAllSources(){
if(!this.sourcesContent){
return false;
}
return this.sourcesContent.length>=this._sources.size()&&!this.sourcesContent.some(function(sc){
return sc==null;
});
};
_40b.prototype.sourceContentFor=function SourceMapConsumer_sourceContentFor(_44f,_450){
if(!this.sourcesContent){
return null;
}
if(this.sourceRoot!=null){
_44f=util.relative(this.sourceRoot,_44f);
}
if(this._sources.has(_44f)){
return this.sourcesContent[this._sources.indexOf(_44f)];
}
var url;
if(this.sourceRoot!=null&&(url=util.urlParse(this.sourceRoot))){
var _451=_44f.replace(/^file:\/\//,"");
if(url.scheme=="file"&&this._sources.has(_451)){
return this.sourcesContent[this._sources.indexOf(_451)];
}
if((!url.path||url.path=="/")&&this._sources.has("/"+_44f)){
return this.sourcesContent[this._sources.indexOf("/"+_44f)];
}
}
if(_450){
return null;
}else{
throw new Error("\""+_44f+"\" is not in the SourceMap.");
}
};
_40b.prototype.generatedPositionFor=function SourceMapConsumer_generatedPositionFor(_452){
var _453=util.getArg(_452,"source");
if(this.sourceRoot!=null){
_453=util.relative(this.sourceRoot,_453);
}
if(!this._sources.has(_453)){
return {line:null,column:null,lastColumn:null};
}
_453=this._sources.indexOf(_453);
var _454={source:_453,originalLine:util.getArg(_452,"line"),originalColumn:util.getArg(_452,"column")};
var _455=this._findMapping(_454,this._originalMappings,"originalLine","originalColumn",util.compareByOriginalPositions,util.getArg(_452,"bias",_407.GREATEST_LOWER_BOUND));
if(_455>=0){
var _456=this._originalMappings[_455];
if(_456.source===_454.source){
return {line:util.getArg(_456,"generatedLine",null),column:util.getArg(_456,"generatedColumn",null),lastColumn:util.getArg(_456,"lastGeneratedColumn",null)};
}
}
return {line:null,column:null,lastColumn:null};
};
_401.BasicSourceMapConsumer=_40b;
function _40a(_457){
var _458=_457;
if(typeof _457==="string"){
_458=JSON.parse(_457.replace(/^\)\]\}'/,""));
}
var _459=util.getArg(_458,"version");
var _45a=util.getArg(_458,"sections");
if(_459!=this._version){
throw new Error("Unsupported version: "+_459);
}
this._sources=new _404();
this._names=new _404();
var _45b={line:-1,column:0};
this._sections=_45a.map(function(s){
if(s.url){
throw new Error("Support for url field in sections not implemented.");
}
var _45c=util.getArg(s,"offset");
var _45d=util.getArg(_45c,"line");
var _45e=util.getArg(_45c,"column");
if(_45d<_45b.line||_45d===_45b.line&&_45e<_45b.column){
throw new Error("Section offsets must be ordered and non-overlapping.");
}
_45b=_45c;
return {generatedOffset:{generatedLine:_45d+1,generatedColumn:_45e+1},consumer:new _407(util.getArg(s,"map"))};
});
};
_40a.prototype=Object.create(_407.prototype);
_40a.prototype.constructor=_407;
_40a.prototype._version=3;
Object.defineProperty(_40a.prototype,"sources",{get:function(){
var _45f=[];
for(var i=0;i<this._sections.length;i++){
for(var j=0;j<this._sections[i].consumer.sources.length;j++){
_45f.push(this._sections[i].consumer.sources[j]);
}
}
return _45f;
}});
_40a.prototype.originalPositionFor=function IndexedSourceMapConsumer_originalPositionFor(_460){
var _461={generatedLine:util.getArg(_460,"line"),generatedColumn:util.getArg(_460,"column")};
var _462=_403.search(_461,this._sections,function(_463,_464){
var cmp=_463.generatedLine-_464.generatedOffset.generatedLine;
if(cmp){
return cmp;
}
return _463.generatedColumn-_464.generatedOffset.generatedColumn;
});
var _465=this._sections[_462];
if(!_465){
return {source:null,line:null,column:null,name:null};
}
return _465.consumer.originalPositionFor({line:_461.generatedLine-(_465.generatedOffset.generatedLine-1),column:_461.generatedColumn-(_465.generatedOffset.generatedLine===_461.generatedLine?_465.generatedOffset.generatedColumn-1:0),bias:_460.bias});
};
_40a.prototype.hasContentsOfAllSources=function IndexedSourceMapConsumer_hasContentsOfAllSources(){
return this._sections.every(function(s){
return s.consumer.hasContentsOfAllSources();
});
};
_40a.prototype.sourceContentFor=function IndexedSourceMapConsumer_sourceContentFor(_466,_467){
for(var i=0;i<this._sections.length;i++){
var _468=this._sections[i];
var _469=_468.consumer.sourceContentFor(_466,true);
if(_469){
return _469;
}
}
if(_467){
return null;
}else{
throw new Error("\""+_466+"\" is not in the SourceMap.");
}
};
_40a.prototype.generatedPositionFor=function IndexedSourceMapConsumer_generatedPositionFor(_46a){
for(var i=0;i<this._sections.length;i++){
var _46b=this._sections[i];
if(_46b.consumer.sources.indexOf(util.getArg(_46a,"source"))===-1){
continue;
}
var _46c=_46b.consumer.generatedPositionFor(_46a);
if(_46c){
var ret={line:_46c.line+(_46b.generatedOffset.generatedLine-1),column:_46c.column+(_46b.generatedOffset.generatedLine===_46c.line?_46b.generatedOffset.generatedColumn-1:0)};
return ret;
}
}
return {line:null,column:null};
};
_40a.prototype._parseMappings=function IndexedSourceMapConsumer_parseMappings(aStr,_46d){
this.__generatedMappings=[];
this.__originalMappings=[];
for(var i=0;i<this._sections.length;i++){
var _46e=this._sections[i];
var _46f=_46e.consumer._generatedMappings;
for(var j=0;j<_46f.length;j++){
var _470=_46f[j];
var _471=_46e.consumer._sources.at(_470.source);
if(_46e.consumer.sourceRoot!==null){
_471=util.join(_46e.consumer.sourceRoot,_471);
}
this._sources.add(_471);
_471=this._sources.indexOf(_471);
var name=_46e.consumer._names.at(_470.name);
this._names.add(name);
name=this._names.indexOf(name);
var _472={source:_471,generatedLine:_470.generatedLine+(_46e.generatedOffset.generatedLine-1),generatedColumn:_470.generatedColumn+(_46e.generatedOffset.generatedLine===_470.generatedLine?_46e.generatedOffset.generatedColumn-1:0),originalLine:_470.originalLine,originalColumn:_470.originalColumn,name:name};
this.__generatedMappings.push(_472);
if(typeof _472.originalLine==="number"){
this.__originalMappings.push(_472);
}
}
}
_406(this.__generatedMappings,util.compareByGeneratedPositionsDeflated);
_406(this.__originalMappings,util.compareByOriginalPositions);
};
_401.IndexedSourceMapConsumer=_40a;
},function(_473,_474){
_474.GREATEST_LOWER_BOUND=1;
_474.LEAST_UPPER_BOUND=2;
function _475(aLow,_476,_477,_478,_479,_47a){
var mid=Math.floor((_476-aLow)/2)+aLow;
var cmp=_479(_477,_478[mid],true);
if(cmp===0){
return mid;
}else{
if(cmp>0){
if(_476-mid>1){
return _475(mid,_476,_477,_478,_479,_47a);
}
if(_47a==_474.LEAST_UPPER_BOUND){
return _476<_478.length?_476:-1;
}else{
return mid;
}
}else{
if(mid-aLow>1){
return _475(aLow,mid,_477,_478,_479,_47a);
}
if(_47a==_474.LEAST_UPPER_BOUND){
return mid;
}else{
return aLow<0?-1:aLow;
}
}
}
};
_474.search=function search(_47b,_47c,_47d,_47e){
if(_47c.length===0){
return -1;
}
var _47f=_475(-1,_47c.length,_47b,_47c,_47d,_47e||_474.GREATEST_LOWER_BOUND);
if(_47f<0){
return -1;
}
while(_47f-1>=0){
if(_47d(_47c[_47f],_47c[_47f-1],true)!==0){
break;
}
--_47f;
}
return _47f;
};
},function(_480,_481){
function swap(ary,x,y){
var temp=ary[x];
ary[x]=ary[y];
ary[y]=temp;
};
function _482(low,high){
return Math.round(low+Math.random()*(high-low));
};
function _483(ary,_484,p,r){
if(p<r){
var _485=_482(p,r);
var i=p-1;
swap(ary,_485,r);
var _486=ary[r];
for(var j=p;j<r;j++){
if(_484(ary[j],_486)<=0){
i+=1;
swap(ary,i,j);
}
}
swap(ary,i+1,j);
var q=i+1;
_483(ary,_484,p,q-1);
_483(ary,_484,q+1,r);
}
};
_481.quickSort=function(ary,_487){
_483(ary,_487,0,ary.length-1);
};
},function(_488,_489,_48a){
var _48b=(_48a(1)).SourceMapGenerator;
var util=_48a(4);
var _48c=/(\r?\n)/;
var _48d=10;
var _48e="$$$isSourceNode$$$";
function _48f(_490,_491,_492,_493,_494){
this.children=[];
this.sourceContents={};
this.line=_490==null?null:_490;
this.column=_491==null?null:_491;
this.source=_492==null?null:_492;
this.name=_494==null?null:_494;
this[_48e]=true;
if(_493!=null){
this.add(_493);
}
};
_48f.fromStringWithSourceMap=function SourceNode_fromStringWithSourceMap(_495,_496,_497){
var node=new _48f();
var _498=_495.split(_48c);
var _499=function(){
var _49a=_498.shift();
var _49b=_498.shift()||"";
return _49a+_49b;
};
var _49c=1,_49d=0;
var _49e=null;
_496.eachMapping(function(_49f){
if(_49e!==null){
if(_49c<_49f.generatedLine){
_4a0(_49e,_499());
_49c++;
_49d=0;
}else{
var _4a1=_498[0];
var code=_4a1.substr(0,_49f.generatedColumn-_49d);
_498[0]=_4a1.substr(_49f.generatedColumn-_49d);
_49d=_49f.generatedColumn;
_4a0(_49e,code);
_49e=_49f;
return;
}
}
while(_49c<_49f.generatedLine){
node.add(_499());
_49c++;
}
if(_49d<_49f.generatedColumn){
var _4a1=_498[0];
node.add(_4a1.substr(0,_49f.generatedColumn));
_498[0]=_4a1.substr(_49f.generatedColumn);
_49d=_49f.generatedColumn;
}
_49e=_49f;
},this);
if(_498.length>0){
if(_49e){
_4a0(_49e,_499());
}
node.add(_498.join(""));
}
_496.sources.forEach(function(_4a2){
var _4a3=_496.sourceContentFor(_4a2);
if(_4a3!=null){
if(_497!=null){
_4a2=util.join(_497,_4a2);
}
node.setSourceContent(_4a2,_4a3);
}
});
return node;
function _4a0(_4a4,code){
if(_4a4===null||_4a4.source===_32){
node.add(code);
}else{
var _4a5=_497?util.join(_497,_4a4.source):_4a4.source;
node.add(new _48f(_4a4.originalLine,_4a4.originalColumn,_4a5,code,_4a4.name));
}
};
};
_48f.prototype.add=function SourceNode_add(_4a6){
if(Array.isArray(_4a6)){
_4a6.forEach(function(_4a7){
this.add(_4a7);
},this);
}else{
if(_4a6[_48e]||typeof _4a6==="string"){
if(_4a6){
this.children.push(_4a6);
}
}else{
throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+_4a6);
}
}
return this;
};
_48f.prototype.prepend=function SourceNode_prepend(_4a8){
if(Array.isArray(_4a8)){
for(var i=_4a8.length-1;i>=0;i--){
this.prepend(_4a8[i]);
}
}else{
if(_4a8[_48e]||typeof _4a8==="string"){
this.children.unshift(_4a8);
}else{
throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+_4a8);
}
}
return this;
};
_48f.prototype.walk=function SourceNode_walk(aFn){
var _4a9;
for(var i=0,len=this.children.length;i<len;i++){
_4a9=this.children[i];
if(_4a9[_48e]){
_4a9.walk(aFn);
}else{
if(_4a9!==""){
aFn(_4a9,{source:this.source,line:this.line,column:this.column,name:this.name});
}
}
}
};
_48f.prototype.join=function SourceNode_join(aSep){
var _4aa;
var i;
var len=this.children.length;
if(len>0){
_4aa=[];
for(i=0;i<len-1;i++){
_4aa.push(this.children[i]);
_4aa.push(aSep);
}
_4aa.push(this.children[i]);
this.children=_4aa;
}
return this;
};
_48f.prototype.replaceRight=function SourceNode_replaceRight(_4ab,_4ac){
var _4ad=this.children[this.children.length-1];
if(_4ad[_48e]){
_4ad.replaceRight(_4ab,_4ac);
}else{
if(typeof _4ad==="string"){
this.children[this.children.length-1]=_4ad.replace(_4ab,_4ac);
}else{
this.children.push("".replace(_4ab,_4ac));
}
}
return this;
};
_48f.prototype.setSourceContent=function SourceNode_setSourceContent(_4ae,_4af){
this.sourceContents[util.toSetString(_4ae)]=_4af;
};
_48f.prototype.walkSourceContents=function SourceNode_walkSourceContents(aFn){
for(var i=0,len=this.children.length;i<len;i++){
if(this.children[i][_48e]){
this.children[i].walkSourceContents(aFn);
}
}
var _4b0=Object.keys(this.sourceContents);
for(var i=0,len=_4b0.length;i<len;i++){
aFn(util.fromSetString(_4b0[i]),this.sourceContents[_4b0[i]]);
}
};
_48f.prototype.toString=function SourceNode_toString(){
var str="";
this.walk(function(_4b1){
str+=_4b1;
});
return str;
};
_48f.prototype.toStringWithSourceMap=function SourceNode_toStringWithSourceMap(_4b2){
var _4b3={code:"",line:1,column:0};
var map=new _48b(_4b2);
var _4b4=false;
var _4b5=null;
var _4b6=null;
var _4b7=null;
var _4b8=null;
this.walk(function(_4b9,_4ba){
_4b3.code+=_4b9;
if(_4ba.source!==null&&_4ba.line!==null&&_4ba.column!==null){
if(_4b5!==_4ba.source||_4b6!==_4ba.line||_4b7!==_4ba.column||_4b8!==_4ba.name){
map.addMapping({source:_4ba.source,original:{line:_4ba.line,column:_4ba.column},generated:{line:_4b3.line,column:_4b3.column},name:_4ba.name});
}
_4b5=_4ba.source;
_4b6=_4ba.line;
_4b7=_4ba.column;
_4b8=_4ba.name;
_4b4=true;
}else{
if(_4b4){
map.addMapping({generated:{line:_4b3.line,column:_4b3.column}});
_4b5=null;
_4b4=false;
}
}
for(var idx=0,_4bb=_4b9.length;idx<_4bb;idx++){
if(_4b9.charCodeAt(idx)===_48d){
_4b3.line++;
_4b3.column=0;
if(idx+1===_4bb){
_4b5=null;
_4b4=false;
}else{
if(_4b4){
map.addMapping({source:_4ba.source,original:{line:_4ba.line,column:_4ba.column},generated:{line:_4b3.line,column:_4b3.column},name:_4ba.name});
}
}
}else{
_4b3.column++;
}
}
});
this.walkSourceContents(function(_4bc,_4bd){
map.setSourceContent(_4bc,_4bd);
});
return {code:_4b3.code,map:map};
};
_489.SourceNode=_48f;
}]);
});
(function(_4be,walk){
"use strict";
_4be.version="0.3.3-objj-3";
var _4bf,_4c0,_4c1,_4c2;
_4be.parse=function(inpt,opts){
_4c0=String(inpt);
_4c1=_4c0.length;
_4c3(opts);
_4c4();
if(_4bf.macros){
_4c5(_4bf.macros);
}
_4c6();
return _4c7(_4bf.program);
};
var _4c8=_4be.defaultOptions={ecmaVersion:5,strictSemicolons:false,allowTrailingCommas:true,forbidReserved:false,trackComments:false,trackCommentsIncludeLineBreak:false,trackSpaces:false,locations:false,onComment:null,ranges:false,program:null,sourceFile:null,objj:true,preprocess:true,preprocessGetIncludeFile:_4c9,preprocessAddMacro:_4ca,preprocessGetMacro:_4cb,preprocessUndefineMacro:_4cc,preprocessIsMacro:_4cd,macros:null,lineNoInErrorMessage:true,preIncludeFiles:null};
function _4c3(opts){
_4bf=opts||{};
for(var opt in _4c8){
if(!Object.prototype.hasOwnProperty.call(_4bf,opt)){
_4bf[opt]=_4c8[opt];
}
}
_4c2=_4bf.sourceFile||null;
};
var _4ce;
var _4cf;
var _4d0=function(name,_4d1,_4d2){
return new _4d3(name,_4d1,null,_4d2-name.length);
};
var _4d4={1:function(){
return _4d0("__OBJJ__",_4bf.objj?"1":null,_4d5);
}};
_4d4["__"+"BROWSER"+"__"]=function(){
return _4d0("__BROWSER__",typeof window!=="undefined"?"1":null,_4d5);
};
_4d4["__"+"LINE"+"__"]=function(){
return _4d0("__LINE__",String(_4bf.locations?_4d6:(_4d7(_4c0,_4d5)).line),_4d5);
};
_4d4["__"+"DATE"+"__"]=function(){
var date,day;
return _4d0("__DATE__",(date=new Date(),day=String(date.getDate()),["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][date.getMonth()]+(day.length>1?" ":"  ")+day+" "+date.getFullYear()),_4d5);
};
_4d4["__"+"TIME"+"__"]=function(){
var date;
return _4d0("__TIME__",(date=new Date(),("0"+date.getHours()).slice(-2)+":"+("0"+date.getMinutes()).slice(-2)+":"+("0"+date.getSeconds()).slice(-2)),_4d5);
};
function _4c9(_4d8){
return {include:"#define FOO(x) x\n",sourceFile:_4d8};
};
function _4ca(_4d9){
_4ce[_4d9.identifier]=_4d9;
_4cf=null;
};
function _4cb(_4da){
return _4ce[_4da];
};
function _4cc(_4db){
delete _4ce[_4db];
_4cf=null;
};
function _4cd(_4dc){
return (_4cf||(_4cf=_4dd(((Object.keys(_4ce)).concat((Object.keys(_4d4)).filter(function(key){
return (this[key]()).macro!=null;
},_4d4))).join(" "))))(_4dc);
};
function _4de(_4df){
var _4e0=_4d4[_4df];
return _4e0?_4e0():null;
};
function _4c5(_4e1){
for(var i=0,size=_4e1.length;i<size;i++){
var _4e2=_4c0;
var _4e3=_4e1[i].trim();
var pos=_4e3.indexOf("=");
if(pos===0){
_4e4(0,"Invalid macro definition: '"+_4e3+"'");
}
var name,body;
if(pos>0){
name=_4e3.slice(0,pos);
body=_4e3.slice(pos+1);
}else{
name=_4e3;
}
if(_4d4.hasOwnProperty(name)){
_4e4(0,"'"+name+"' is a predefined macro name");
}
_4c0=name+(body!=null?" "+body:"");
_4c1=_4c0.length;
_4c6();
_4e5();
_4c0=_4e2;
_4c1=_4c0.length;
}
};
var _4d7=_4be.getLineInfo=function(_4e6,_4e7){
for(var line=1,cur=0;;){
_4e8.lastIndex=cur;
var _4e9=_4e8.exec(_4e6);
if(_4e9&&_4e9.index<_4e7){
++line;
cur=_4e9.index+_4e9[0].length;
}else{
break;
}
}
return {line:line,column:_4e7-cur,lineStart:cur,lineEnd:_4e9?_4e9.index+_4e9[0].length:_4e6.length};
};
_4be.tokenize=function(inpt,opts){
_4c0=String(inpt);
_4c1=_4c0.length;
_4c3(opts);
_4c6();
_4c4();
var t={};
function _4ea(_4eb){
_5c0(_4eb);
t.start=_4f3;
t.end=_4f4;
t.startLoc=_4fb;
t.endLoc=_4fc;
t.type=_4fd;
t.value=_4fe;
return t;
};
_4ea.jumpTo=function(pos,_4ec){
_4d5=pos;
if(_4bf.locations){
_4d6=1;
_4ed=_4e8.lastIndex=0;
var _4ee;
while((_4ee=_4e8.exec(_4c0))&&_4ee.index<pos){
++_4d6;
_4ed=_4ee.index+_4ee[0].length;
}
}
_4ef=_4ec;
_4f0();
};
return _4ea;
};
var _4d5;
var _4f1,_4f2,_4f3,_4f4,_4f5,_4f6,_4f7;
var _4f8;
var _4f9,_4fa;
var _4fb,_4fc;
var _4fd,_4fe;
var _4ff,_500,_501;
var _502,_503,_504;
var _4ef,_505,_506;
var _4d6,_4ed;
var _507,_508,_509;
var _50a,_50b,_50c;
var _50d;
var _50e,_50f,_510;
var _511,_512,_513,_514,_515;
var _516,_517;
var _518;
var _519;
var _51a;
var _51b;
var _51c;
var _51d;
var _51e;
var _51f;
var _520;
var _521;
var _522;
var _523;
function _4e4(pos,_524){
if(typeof pos=="number"){
pos=_4d7(_4c0,pos);
}
if(_4bf.lineNoInErrorMessage){
_524+=" ("+pos.line+":"+pos.column+")";
}
var _525=new SyntaxError(_524);
_525.messageOnLine=pos.line;
_525.messageOnColumn=pos.column;
_525.lineStart=pos.lineStart;
_525.lineEnd=pos.lineEnd;
_525.fileName=_4c2;
throw _525;
};
var _526=[];
var _527={type:"num"},_528={type:"regexp"},_529={type:"string"};
var _52a={type:"name"},_52b={type:"eof"},_52c={type:"eol"};
var _52d={keyword:"break"},_52e={keyword:"case",beforeExpr:true},_52f={keyword:"catch"};
var _530={keyword:"continue"},_531={keyword:"debugger"},_532={keyword:"default"};
var _533={keyword:"do",isLoop:true},_534={keyword:"else",beforeExpr:true};
var _535={keyword:"finally"},_536={keyword:"for",isLoop:true},_537={keyword:"function"};
var _538={keyword:"if"},_539={keyword:"return",beforeExpr:true},_53a={keyword:"switch"};
var _53b={keyword:"throw",beforeExpr:true},_53c={keyword:"try"},_53d={keyword:"var"};
var _53e={keyword:"while",isLoop:true},_53f={keyword:"with"},_540={keyword:"new",beforeExpr:true};
var _541={keyword:"this"};
var _542={keyword:"void",prefix:true,beforeExpr:true};
var _543={keyword:"null",atomValue:null},_544={keyword:"true",atomValue:true};
var _545={keyword:"false",atomValue:false};
var _546={keyword:"in",binop:7,beforeExpr:true};
var _547={keyword:"implementation"},_548={keyword:"outlet"},_549={keyword:"accessors"};
var _54a={keyword:"end"},_54b={keyword:"import"};
var _54c={keyword:"action"},_54d={keyword:"selector"},_54e={keyword:"class"},_54f={keyword:"global"};
var _550={keyword:"{"},_551={keyword:"["};
var _552={keyword:"ref"},_553={keyword:"deref"};
var _554={keyword:"protocol"},_555={keyword:"optional"},_556={keyword:"required"};
var _557={keyword:"interface"};
var _558={keyword:"typedef"};
var _559={keyword:"filename"},_55a={keyword:"unsigned",okAsIdent:true},_55b={keyword:"signed",okAsIdent:true};
var _55c={keyword:"byte",okAsIdent:true},_55d={keyword:"char",okAsIdent:true},_55e={keyword:"short",okAsIdent:true};
var _55f={keyword:"int",okAsIdent:true},_560={keyword:"long",okAsIdent:true},_561={keyword:"id",okAsIdent:true};
var _562={keyword:"BOOL",okAsIdent:true},_563={keyword:"SEL",okAsIdent:true},_564={keyword:"float",okAsIdent:true};
var _565={keyword:"double",okAsIdent:true};
var _566={keyword:"#"};
var _567={keyword:"define"};
var _568={keyword:"undef"};
var _569={keyword:"ifdef"};
var _56a={keyword:"ifndef"};
var _56b={keyword:"if"};
var _56c={keyword:"else"};
var _56d={keyword:"endif"};
var _56e={keyword:"elif"};
var _56f={keyword:"elif (True)"};
var _570={keyword:"elif (false)"};
var _571={keyword:"pragma"};
var _572={keyword:"defined"};
var _573={keyword:"\\"};
var _574={keyword:"error"};
var _575={keyword:"warning"};
var _576={type:"preprocessParamItem"};
var _577={type:"skipLine"};
var _578={keyword:"include"};
var _579={"break":_52d,"case":_52e,"catch":_52f,"continue":_530,"debugger":_531,"default":_532,"do":_533,"else":_534,"finally":_535,"for":_536,"function":_537,"if":_538,"return":_539,"switch":_53a,"throw":_53b,"try":_53c,"var":_53d,"while":_53e,"with":_53f,"null":_543,"true":_544,"false":_545,"new":_540,"in":_546,"instanceof":{keyword:"instanceof",binop:7,beforeExpr:true},"this":_541,"typeof":{keyword:"typeof",prefix:true,beforeExpr:true},"void":_542,"delete":{keyword:"delete",prefix:true,beforeExpr:true}};
var _57a={"IBAction":_54c,"IBOutlet":_548,"unsigned":_55a,"signed":_55b,"byte":_55c,"char":_55d,"short":_55e,"int":_55f,"long":_560,"id":_561,"float":_564,"BOOL":_562,"SEL":_563,"double":_565};
var _57b={"implementation":_547,"outlet":_548,"accessors":_549,"end":_54a,"import":_54b,"action":_54c,"selector":_54d,"class":_54e,"global":_54f,"ref":_552,"deref":_553,"protocol":_554,"optional":_555,"required":_556,"interface":_557,"typedef":_558};
var _57c={"define":_567,"pragma":_571,"ifdef":_569,"ifndef":_56a,"undef":_568,"if":_56b,"endif":_56d,"else":_56c,"elif":_56e,"defined":_572,"warning":_575,"error":_574,"include":_578};
var _57d={type:"[",beforeExpr:true},_57e={type:"]"},_57f={type:"{",beforeExpr:true};
var _580={type:"}"},_581={type:"(",beforeExpr:true},_582={type:")"};
var _583={type:",",beforeExpr:true},_584={type:";",beforeExpr:true};
var _585={type:":",beforeExpr:true},_586={type:"."},_587={type:"?",beforeExpr:true};
var _588={type:"@"},_589={type:"..."},_58a={type:"#"};
var _58b={binop:10,beforeExpr:true,preprocess:true},_58c={isAssign:true,beforeExpr:true,preprocess:true};
var _58d={isAssign:true,beforeExpr:true},_58e={binop:9,prefix:true,beforeExpr:true,preprocess:true};
var _58f={postfix:true,prefix:true,isUpdate:true},_590={prefix:true,beforeExpr:true,preprocess:true};
var _591={binop:1,beforeExpr:true,preprocess:true},_592={binop:2,beforeExpr:true,preprocess:true};
var _593={binop:3,beforeExpr:true,preprocess:true},_594={binop:4,beforeExpr:true,preprocess:true};
var _595={binop:5,beforeExpr:true,preprocess:true},_596={binop:6,beforeExpr:true,preprocess:true};
var _597={binop:7,beforeExpr:true,preprocess:true},_598={binop:8,beforeExpr:true,preprocess:true};
var _599={binop:10,beforeExpr:true,preprocess:true};
_4be.tokTypes={bracketL:_57d,bracketR:_57e,braceL:_57f,braceR:_580,parenL:_581,parenR:_582,comma:_583,semi:_584,colon:_585,dot:_586,question:_587,slash:_58b,eq:_58c,name:_52a,eof:_52b,num:_527,regexp:_528,string:_529};
for(var kw in _579){
_4be.tokTypes["_"+kw]=_579[kw];
}
function _4dd(_59a){
_59a=_59a.split(" ");
var f="",cats=[];
out:
for(var i=0;i<_59a.length;++i){
for(var j=0;j<cats.length;++j){
if(cats[j][0].length==_59a[i].length){
cats[j].push(_59a[i]);
continue out;
}
}
cats.push([_59a[i]]);
}
function _59b(arr){
if(arr.length==1){
return f+="return str === "+JSON.stringify(arr[0])+";";
}
f+="switch(str){";
for(var i=0;i<arr.length;++i){
f+="case "+JSON.stringify(arr[i])+":";
}
f+="return true}return false;";
};
if(cats.length>3){
cats.sort(function(a,b){
return b.length-a.length;
});
f+="switch(str.length){";
for(var i=0;i<cats.length;++i){
var cat=cats[i];
f+="case "+cat[0].length+":";
_59b(cat);
}
f+="}";
}else{
_59b(_59a);
}
return new Function("str",f);
};
_4be.makePredicate=_4dd;
var _59c=_4dd("abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile");
var _59d=_4dd("class enum extends super const export import");
var _59e=_4dd("implements interface let package private protected public static yield");
var _59f=_4dd("eval arguments");
var _5a0=_4dd("break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this");
var _5a1=_4dd("IBAction IBOutlet byte char short int long float unsigned signed id BOOL SEL double");
var _5a2=_4dd("define undef pragma if ifdef ifndef else elif endif defined error warning include");
var _5a3=/[\u1680\u180e\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]/;
var _5a4=/[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/;
var _5a5="ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛰᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々-〇〡-〩〱-〵〸-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ";
var _5a6="̀-ͯ҃-֑҇-ׇֽֿׁׂׅׄؐ-ؚؠ-ىٲ-ۓۧ-ۨۻ-ۼܰ-݊ࠀ-ࠔࠛ-ࠣࠥ-ࠧࠩ-࠭ࡀ-ࡗࣤ-ࣾऀ-ःऺ-़ा-ॏ॑-ॗॢ-ॣ०-९ঁ-ঃ়া-ৄেৈৗয়-ৠਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢ-ૣ૦-૯ଁ-ଃ଼ା-ୄେୈୋ-୍ୖୗୟ-ୠ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఁ-ఃె-ైొ-్ౕౖౢ-ౣ౦-౯ಂಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢ-ೣ೦-೯ംഃെ-ൈൗൢ-ൣ൦-൯ංඃ්ා-ුූෘ-ෟෲෳิ-ฺเ-ๅ๐-๙ິ-ູ່-ໍ໐-໙༘༙༠-༩༹༵༷ཁ-ཇཱ-྄྆-྇ྍ-ྗྙ-ྼ࿆က-ဩ၀-၉ၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟ᜎ-ᜐᜠ-ᜰᝀ-ᝐᝲᝳក-ឲ៝០-៩᠋-᠍᠐-᠙ᤠ-ᤫᤰ-᤻ᥑ-ᥭᦰ-ᧀᧈ-ᧉ᧐-᧙ᨀ-ᨕᨠ-ᩓ᩠-᩿᩼-᪉᪐-᪙ᭆ-ᭋ᭐-᭙᭫-᭳᮰-᮹᯦-᯳ᰀ-ᰢ᱀-᱉ᱛ-ᱽ᳐-᳒ᴀ-ᶾḁ-ἕ‌‍‿⁀⁔⃐-⃥⃜⃡-⃰ⶁ-ⶖⷠ-ⷿ〡-〨゙゚Ꙁ-ꙭꙴ-꙽ꚟ꛰-꛱ꟸ-ꠀ꠆ꠋꠣ-ꠧꢀ-ꢁꢴ-꣄꣐-꣙ꣳ-ꣷ꤀-꤉ꤦ-꤭ꤰ-ꥅꦀ-ꦃ꦳-꧀ꨀ-ꨧꩀ-ꩁꩌ-ꩍ꩐-꩙ꩻꫠ-ꫩꫲ-ꫳꯀ-ꯡ꯬꯭꯰-꯹ﬠ-ﬨ︀-️︠-︦︳︴﹍-﹏０-９＿";
var _5a7=new RegExp("["+_5a5+"]");
var _5a8=new RegExp("["+_5a5+_5a6+"]");
var _5a9=/[\n\r\u2028\u2029]/;
var _4e8=/\r\n|[\n\r\u2028\u2029]/g;
var _5aa=_4be.isIdentifierStart=function(code){
if(code<65){
return code===36;
}
if(code<91){
return true;
}
if(code<97){
return code===95;
}
if(code<123){
return true;
}
return code>=170&&_5a7.test(String.fromCharCode(code));
};
var _5ab=_4be.isIdentifierChar=function(code){
if(code<48){
return code===36;
}
if(code<58){
return true;
}
if(code<65){
return false;
}
if(code<91){
return true;
}
if(code<97){
return code===95;
}
if(code<123){
return true;
}
return code>=170&&_5a8.test(String.fromCharCode(code));
};
function _5ac(){
this.line=_4d6;
this.column=_4d5-_4ed;
if(_519){
var _5ad=_519.macro;
var _5ae=_5ad.locationOffset;
if(_5ae){
var _5af=_5ae.line;
if(_5af){
this.line+=_5af;
}
var _5b0=_5ae.column;
if(_5b0){
this.column+=_4f6-(_4d6===1?_5b0:0);
}
}
}
};
function _5b1(line,_5b2){
this.line=line-1;
this.column=_5b2;
if(_519){
var _5b3=_519.macro;
var _5b4=_5b3.locationOffset;
if(_5b4){
var _5b5=_5b4.line;
if(_5b5){
this.line+=_5b5;
}
var _5b6=_5b4.column;
if(_5b6){
this.column+=_5b6;
}
}
}
};
function _4c6(){
_4d6=1;
_4d5=_4ed=_4f7=_4f5=_4f6=0;
_4ef=true;
_505=null;
_506=null;
_4f0();
};
function _4c4(){
_4ce=Object.create(null);
_4cf=null;
_51d=null;
_51e=null;
_51b=false;
_51c=false;
_518=[];
_519=null;
_51a=null;
_520=false;
_522=true;
_521=false;
_523=[];
};
function _5b7(type,val,_5b8){
if(_5b8){
_4f2=_4f4=_5b8;
if(_4bf.locations){
_4fc=preprocessOverrideTokLoc;
}
}else{
_4f2=_4f4=_4d5;
if(_4bf.locations){
_4fc=new _5ac();
}
}
_4fd=type;
var ch=_4f0();
if(ch===35&&_4bf.preprocess&&_4c0.charCodeAt(_4d5+1)===35){
var val1=val!=null?val:type.keyword||type.type;
_4d5+=2;
if(val1!=null){
var _5b9=_4bf.locations&&new _5b1(_4d6,_4ed);
var _5ba=_507,_5bb=_4f4,_5bc=_4f3,_5bd=_4f3+_4f5,_5be=_519&&_519.macro&&_519.macro.variadicName;
_4f0();
if(_5be&&_5be===_4c0.slice(_4d5,_4d5+_5be.length)){
var _5bf=true;
}
_521=true;
_5c0(null,2);
_521=false;
var val2=_4fe!=null?_4fe:_4fd.keyword||_4fd.type;
if(val2!=null){
if(_5bf&&val1===","&&val2===""){
return _5c0();
}
var _5c1=""+val1+val2,_5c2=_4f3+_4f6;
var _5c3=new _4d3(null,_5c1,null,_5bd,false,null,false,_5b9);
var r=_5c4(_5c3,_4f6,_519?_519.parameterDict:null,null,_4d5,next,null);
if(_519&&_519.macro===_5c3){
_4fd=type;
_4f3=_5bc;
_4f4=_5bb;
_507=_5ba;
_4f6=_5c2-val1.length;
if(!_5bf){
console.log("Warning: pasting formed '"+_5c1+"', an invalid preprocessing token");
}
}else{
return r;
}
}
}
}
_4fe=val;
_501=_500;
_504=_503;
_500=_505;
_503=_506;
_4ef=type.beforeExpr;
};
function _5c5(_5c6,_5c7){
var _5c8=_4bf.onComment&&_4bf.locations&&new _5ac();
var _5c9=_4d5,end=_4c0.indexOf("*/",_4d5+=2);
if(end===-1){
_4e4(_4d5-2,"Unterminated comment");
}
_4d5=end+2;
if(_4bf.locations){
_4e8.lastIndex=_5c9;
var _5ca;
while((_5ca=_4e8.exec(_4c0))&&_5ca.index<_4d5){
++_4d6;
_4ed=_5ca.index+_5ca[0].length;
}
}
if(!_5c7){
if(_4bf.onComment){
_4bf.onComment(true,_4c0.slice(_5c9+2,end),_5c9,_4d5,_5c8,_4bf.locations&&new _5ac());
}
if(_4bf.trackComments){
(_505||(_505=[])).push(_4c0.slice(_5c6!=null&&_4bf.trackCommentsIncludeLineBreak?_5c6:_5c9,_4d5));
}
}
};
function _5cb(_5cc,_5cd){
var _5ce=_4d5;
var _5cf=_4bf.onComment&&_4bf.locations&&new _5ac();
var ch=_4c0.charCodeAt(_4d5+=2);
while(_4d5<_4c1&&ch!==10&&ch!==13&&ch!==8232&&ch!==8233){
++_4d5;
ch=_4c0.charCodeAt(_4d5);
}
if(!_5cd){
if(_4bf.onComment){
_4bf.onComment(false,_4c0.slice(_5ce+2,_4d5),_5ce,_4d5,_5cf,_4bf.locations&&new _5ac());
}
if(_4bf.trackComments){
(_505||(_505=[])).push(_4c0.slice(_5cc!=null&&_4bf.trackCommentsIncludeLineBreak?_5cc:_5ce,_4d5));
}
}
};
function _5d0(){
var ch=_4c0.charCodeAt(_4d5);
var last;
while(_4d5<_4c1&&(ch!==10&&ch!==13&&ch!==8232&&ch!==8233||last===92)){
if(ch!=32&&ch!=9&&ch!=160&&(ch<5760||!_5a4.test(String.fromCharCode(ch)))){
last=ch;
}
ch=_4c0.charCodeAt(++_4d5);
}
};
function _4f0(){
_505=null;
_506=null;
return _5d1();
};
function _5d1(_5d2,_5d3,_5d4){
var _5d5=_4d5,_5d6,ch;
for(;;){
ch=_4c0.charCodeAt(_4d5);
if(ch===32){
++_4d5;
}else{
if(ch===13){
if(_5d2){
break;
}
_5d6=_4d5;
++_4d5;
var next=_4c0.charCodeAt(_4d5);
if(next===10){
++_4d5;
}
if(_4bf.locations){
++_4d6;
_4ed=_4d5;
}
}else{
if(ch===10){
if(_5d2){
break;
}
_5d6=_4d5;
++_4d5;
if(_4bf.locations){
++_4d6;
_4ed=_4d5;
}
}else{
if(ch===9){
++_4d5;
}else{
if(ch===47){
if(_5d4){
break;
}
var next=_4c0.charCodeAt(_4d5+1);
if(next===42){
if(_4bf.trackSpaces){
(_506||(_506=[])).push(_4c0.slice(_5d5,_4d5));
}
_5c5(_5d6);
_5d5=_4d5;
}else{
if(next===47){
if(_4bf.trackSpaces){
(_506||(_506=[])).push(_4c0.slice(_5d5,_4d5));
}
_5cb(_5d6);
_5d5=_4d5;
}else{
break;
}
}
}else{
if(ch===160||ch===11||ch===12||ch>=5760&&_5a3.test(String.fromCharCode(ch))){
++_4d5;
}else{
if(_4d5>=_4c1){
if(_4bf.preprocess){
if(_5d3){
return true;
}
if(!_518.length){
break;
}
if(_4f9==null){
_4f9=_4d5;
}
var _5d7=_518.pop();
var _5d8=_4c0;
var _5d9=_4c2;
_4d5=_5d7.end;
_4c0=_5d7.input;
_4c1=_5d7.inputLen;
_4d6=_5d7.currentLine;
_4ed=_5d7.currentLineStart;
_51a=_5d7.onlyTransformArgumentsForLastToken;
_51d=_5d7.parameterScope;
_4f6=_5d7.macroOffset;
_4c2=_5d7.sourceFile;
_4f2=_5d7.lastEnd;
var _5da=_518.length;
_519=_5da?_518[_5da-1]:null;
return _5d1(_5d2);
}else{
break;
}
}else{
if(ch===92){
if(!_4bf.preprocess){
break;
}
var pos=_4d5+1;
ch=_4c0.charCodeAt(pos);
while(pos<_4c1&&(ch===32||ch===9||ch===11||ch===12||ch>=5760&&_5a4.test(String.fromCharCode(ch)))){
ch=_4c0.charCodeAt(++pos);
}
_4e8.lastIndex=0;
var _5db=_4e8.exec(_4c0.slice(pos,pos+2));
if(_5db&&_5db.index===0){
_4d5=pos+_5db[0].length;
if(_4bf.locations){
++_4d6;
_4ed=_4d5;
}
}else{
break;
}
}else{
break;
}
}
}
}
}
}
}
}
}
return ch;
};
function _5dc(code,_5dd){
var next=_4c0.charCodeAt(_4d5+1);
if(next>=48&&next<=57){
return _5de(String.fromCharCode(code),_5dd);
}
if(next===46&&_4bf.objj&&_4c0.charCodeAt(_4d5+2)===46){
_4d5+=3;
return _5dd(_589);
}
++_4d5;
return _5dd(_586);
};
function _5df(_5e0){
var next=_4c0.charCodeAt(_4d5+1);
if(_4ef){
++_4d5;
return _5e1();
}
if(next===61){
return _5e2(_58d,2,_5e0);
}
return _5e2(_58b,1,_5e0);
};
function _5e3(_5e4){
var next=_4c0.charCodeAt(_4d5+1);
if(next===61){
return _5e2(_58d,2,_5e4);
}
return _5e2(_599,1,_5e4);
};
function _5e5(code,_5e6){
var next=_4c0.charCodeAt(_4d5+1);
if(next===code){
return _5e2(code===124?_591:_592,2,_5e6);
}
if(next===61){
return _5e2(_58d,2,_5e6);
}
return _5e2(code===124?_593:_595,1,_5e6);
};
function _5e7(_5e8){
var next=_4c0.charCodeAt(_4d5+1);
if(next===61){
return _5e2(_58d,2,_5e8);
}
return _5e2(_594,1,_5e8);
};
function _5e9(code,_5ea){
var next=_4c0.charCodeAt(_4d5+1);
if(next===code){
return _5e2(_58f,2,_5ea);
}
if(next===61){
return _5e2(_58d,2,_5ea);
}
return _5e2(_58e,1,_5ea);
};
function _5eb(code,_5ec){
if(code===60&&(_4fd===_54b||_512===_578)&&_4bf.objj){
for(var _5ed=_4d5+1;;){
var ch=_4c0.charCodeAt(++_4d5);
if(ch===62){
return _5ec(_559,_4c0.slice(_5ed,_4d5++));
}
if(_4d5>=_4c1||ch===13||ch===10||ch===8232||ch===8233){
_4e4(_4f3,"Unterminated import statement");
}
}
}
var next=_4c0.charCodeAt(_4d5+1);
var size=1;
if(next===code){
size=code===62&&_4c0.charCodeAt(_4d5+2)===62?3:2;
if(_4c0.charCodeAt(_4d5+size)===61){
return _5e2(_58d,size+1,_5ec);
}
return _5e2(_598,size,_5ec);
}
if(next===61){
size=_4c0.charCodeAt(_4d5+2)===61?3:2;
}
return _5e2(_597,size,_5ec);
};
function _5ee(code,_5ef){
var next=_4c0.charCodeAt(_4d5+1);
if(next===61){
return _5e2(_596,_4c0.charCodeAt(_4d5+2)===61?3:2,_5ef);
}
return _5e2(code===61?_58c:_590,1,_5ef);
};
function _5f0(code,_5f1){
var next=_4c0.charCodeAt(++_4d5);
if(next===34||next===39){
return _5f2(next,_5f1);
}
if(next===123){
return _5f1(_550);
}
if(next===91){
return _5f1(_551);
}
var word=_5f3(),_5f4=_57b[word];
if(!_5f4){
_4e4(_4f3,"Unrecognized Objective-J keyword '@"+word+"'");
}
return _5f1(_5f4);
};
function _5f5(_5f6){
++_4d5;
_5f7();
_5f8(false,true);
switch(_512){
case _567:
if(_522){
_4e5();
}else{
return _5f6(_567);
}
break;
case _568:
_5f8();
_4bf.preprocessUndefineMacro(_5f9());
break;
case _56b:
if(_522){
var _5fa=_4ef;
_4ef=false;
_523.push(_56b);
_5f8(false,false,true);
var expr=_5fb(true);
var test=_5fc(expr);
if(!test){
_522=false;
_5fd();
}
_4ef=_5fa;
}else{
return _5f6(_56b);
}
break;
case _569:
if(_522){
_523.push(_56b);
_5f8();
var _5fe=_5f9();
var test=_4bf.preprocessIsMacro(_5fe);
if(!test){
_522=false;
_5fd();
}
}else{
return _5f6(_569);
}
break;
case _56a:
if(_522){
_523.push(_56b);
_5f8();
var _5fe=_5f9();
var test=_4bf.preprocessIsMacro(_5fe);
if(test){
_522=false;
_5fd();
}
}else{
return _5f6(_56a);
}
break;
case _56c:
if(_523.length){
if(_522){
if(_523[_523.length-1]===_56b){
_523[_523.length-1]=_56c;
_522=false;
_5f6(_56c);
_5f8();
_5fd(true);
}else{
_4e4(_514,"#else after #else");
}
}else{
_523[_523.length-1]=_56c;
return _5f6(_56c);
}
}else{
_4e4(_514,"#else without #if");
}
break;
case _56e:
if(_523.length){
if(_522){
if(_523[_523.length-1]===_56b){
_522=false;
_5f6(_56e);
_5f8();
_5fd(true);
}else{
_4e4(_514,"#elsif after #else");
}
}else{
var _5fa=_4ef;
_4ef=false;
_522=true;
_5f8(false,false,true);
var expr=_5fb(true);
_522=false;
_4ef=_5fa;
var test=_5fc(expr);
return _5f6(test?_56f:_570);
}
}else{
_4e4(_514,"#elif without #if");
}
break;
case _56d:
if(_523.length){
if(_522){
_523.pop();
break;
}
}else{
_4e4(_514,"#endif without #if");
}
return _5f6(_56d);
break;
case _571:
_5d0();
break;
case _590:
_5d0();
break;
case _575:
_5f8(false,false,true);
var expr=_5fb();
console.log("Warning: "+String(_5fc(expr)));
break;
case _574:
var _5ff=_514;
_5f8(false,false,true);
var expr=_5fb();
_4e4(_5ff,"Error: "+String(_5fc(expr)));
break;
case _578:
if(!_522){
return _5f6(_578);
}
_5f8();
if(_512===_529){
var _600=true;
}else{
if(_512===_559){
var _600=false;
}else{
_4e4(_514,"Expected \"FILENAME\" or <FILENAME>: "+(_512.keyword||_512.type));
}
}
var _601=_513;
var _602=_4bf.preprocessGetIncludeFile(_513,_600)||_4e4(_514,"'"+_601+"' file not found");
var _603=_602.include;
var _604=new _4d3(null,_603,null,0,false,null,false,null,_602.sourceFile);
_605(_566,null,null,true);
_606(_604,_604.macro,_4f6,null,null,_4d5,null,true);
_4f0();
_5c0(null,null,true);
return;
break;
default:
if(_519){
if(_519.parameterDict&&_519.macro.isParameterFunction()(_513)){
var _607=_519.parameterDict[_513];
if(_607){
return _5b7(_529,_607.macro);
}
}
}
_4e4(_514,"Invalid preprocessing directive");
_5d0();
return _5f6(_566);
}
if(_512===_52c&&_4bf.trackSpaces){
if(_506&&_506.length){
_506.push("\n"+_506.pop());
}else{
_506=["\n"];
}
}
_605(_512,null,null,true);
return next(true);
};
function _4e5(){
_51c=true;
_5f8();
var _608=_515;
_520=true;
var _609=_4bf.locations&&new _5b1(_4d6,_4ed);
var _60a=_5f9();
if(_4c0.charCodeAt(_608)===40){
_60b(_581);
var _60c=[];
var _60d=false;
var _60e=true;
while(!_60f(_582)){
if(_60d){
_4e4(_514,"Variadic parameter must be last");
}
if(!_60e){
_60b(_583,"Expected ',' between macro parameters");
}else{
_60e=false;
}
_60c.push(_60f(_589)?_60d=true&&"__VA_ARGS__":_5f9());
if(_60f(_589)){
_60d=true;
}
_609=_4bf.locations&&new _5b1(_4d6,_4ed);
}
}
var _610=_514;
while(_512!==_52c&&_512!==_52b){
_5f8();
}
_520=false;
var _611=_508.slice(_610,_514);
_611=_611.replace(/\\/g," ");
_4bf.preprocessAddMacro(new _4d3(_60a,_611,_60c,_610,false,null,_60d&&_60c[_60c.length-1],_609));
_51c=false;
};
function _5fc(expr){
return walk.recursive(expr,{},{LogicalExpression:function(node,st,c){
var left=node.left,_612=node.right;
switch(node.operator){
case "||":
return c(left,st)||c(_612,st);
case "&&":
return c(left,st)&&c(_612,st);
}
},BinaryExpression:function(node,st,c){
var left=node.left,_613=node.right;
switch(node.operator){
case "+":
return c(left,st)+c(_613,st);
case "-":
return c(left,st)-c(_613,st);
case "*":
return c(left,st)*c(_613,st);
case "/":
return c(left,st)/c(_613,st);
case "%":
return c(left,st)%c(_613,st);
case "<":
return c(left,st)<c(_613,st);
case ">":
return c(left,st)>c(_613,st);
case "^":
return c(left,st)^c(_613,st);
case "&":
return c(left,st)&c(_613,st);
case "|":
return c(left,st)|c(_613,st);
case "==":
return c(left,st)==c(_613,st);
case "===":
return c(left,st)===c(_613,st);
case "!=":
return c(left,st)!=c(_613,st);
case "!==":
return c(left,st)!==c(_613,st);
case "<=":
return c(left,st)<=c(_613,st);
case ">=":
return c(left,st)>=c(_613,st);
case ">>":
return c(left,st)>>c(_613,st);
case ">>>":
return c(left,st)>>>c(_613,st);
case "<<":
return c(left,st)<<c(_613,st);
}
},UnaryExpression:function(node,st,c){
var arg=node.argument;
switch(node.operator){
case "-":
return -c(arg,st);
case "+":
return +c(arg,st);
case "!":
return !c(arg,st);
case "~":
return ~c(arg,st);
}
},Literal:function(node,st,c){
return node.value;
},Identifier:function(node,st,c){
return 0;
},DefinedExpression:function(node,st,c){
var _614=node.object;
if(_614.type==="Identifier"){
var name=_614.name,_615=_4bf.preprocessGetMacro(name)||_4de(name);
return _615||0;
}else{
return c(_614,st);
}
}},{});
};
function _616(code,_617,_618){
switch(code){
case 46:
return _5dc(code,_617);
case 40:
++_4d5;
return _617(_581);
case 41:
++_4d5;
return _617(_582);
case 59:
++_4d5;
return _617(_584);
case 44:
++_4d5;
return _617(_583);
case 91:
++_4d5;
return _617(_57d);
case 93:
++_4d5;
return _617(_57e);
case 123:
++_4d5;
return _617(_57f);
case 125:
++_4d5;
return _617(_580);
case 58:
++_4d5;
return _617(_585);
case 63:
++_4d5;
return _617(_587);
case 48:
var next=_4c0.charCodeAt(_4d5+1);
if(next===120||next===88){
return _619(_617);
}
case 49:
case 50:
case 51:
case 52:
case 53:
case 54:
case 55:
case 56:
case 57:
return _5de(false,_617);
case 34:
case 39:
return _5f2(code,_617);
case 47:
return _5df(_617);
case 37:
case 42:
return _5e3(_617);
case 124:
case 38:
return _5e5(code,_617);
case 94:
return _5e7(_617);
case 43:
case 45:
return _5e9(code,_617);
case 60:
case 62:
return _5eb(code,_617);
case 61:
case 33:
return _5ee(code,_617);
case 126:
return _5e2(_590,1,_617);
case 64:
if(_4bf.objj){
return _5f0(code,_617);
}
return false;
case 35:
if(_4bf.preprocess){
if(_51c){
++_4d5;
return _617(_566);
}
_4e8.lastIndex=0;
var _61a=_4e8.exec(_4c0.slice(_4f8,_4d5));
if(_50b!==0&&_50b!==_4d5&&!_61a&&(_519&&!_519.isIncludeFile||_4d5!==0)){
if(_519){
return _61b();
}else{
_4e4(_4d5,"Preprocessor directives may only be used at the beginning of a line");
}
}
return _5f5(_617);
}
return false;
case 92:
if(_4bf.preprocess){
return _5e2(_573,1,_617);
}
return false;
}
if(_618){
var r;
if(code===13||code===10||code===8232||code===8233){
if(_4bf.locations){
++_4d6;
_4ed=_4d5;
}
return _5e2(_52c,code===13&&_4c0.charCodeAt(_4d5+1)===10?2:1,_617);
}
}
return false;
};
function _61b(){
var _61c=_518.length,_61d=_519;
_4d5++;
_521=true;
next(false,2);
_521=false;
var _61e=_4f3+_4f5;
var _61f=_4bf.locations&&new _5b1(_4d6,_4ed);
var _620;
if(_4fd===_529){
var _621=_507.slice(_4f3,_4f3+1);
var _622=_621==="\""?"\\\"":"'";
_620=_622;
_620+=_623(_4fe);
_620+=_622;
}else{
_620=_4fe!=null?_4fe:_4fd.keyword||_4fd.type;
}
while(_518.length>_61c&&_61d===_518[_61c-1]){
_521=true;
next(false,2);
_521=false;
if(_50b!==_4f3){
_620+=" ";
}
if(_4fd===_529){
var _621=_507.slice(_4f3,_4f3+1);
var _622=_621==="\""?"\\\"":"'";
_620+=_622;
_620+=_623(_4fe);
_620+=_622;
}else{
_620+=_4fe!=null?_4fe:_4fd.keyword||_4fd.type;
}
}
var _624=new _4d3(null,"\""+_620+"\"",null,_61e,false,null,false,_61f);
return _5c4(_624,_4f6,null,null,_4d5,next);
};
function _623(_625){
for(var _626="",pos=0,size=_625.length,ch=_625.charCodeAt(pos);pos<size;ch=_625.charCodeAt(++pos)){
switch(ch){
case 34:
_626+="\\\\\\\"";
break;
case 10:
_626+="\\\\n";
break;
case 13:
_626+="\\\\r";
break;
case 9:
_626+="\\\\t";
break;
case 8:
_626+="\\\\b";
break;
case 11:
_626+="\\\\v";
break;
case 160:
_626+="\\\\u00A0";
break;
case 8232:
_626+="\\\\u2028";
break;
case 8233:
_626+="\\\\u2029";
break;
case 92:
_626+="\\\\";
break;
default:
_626+=_625.charAt(pos);
break;
}
}
return _626;
};
function _5f7(_627,_628){
var ch=_5d1(!_628,false,_627);
return ch;
};
function _5fd(_629){
var _62a=[];
while(_62a.length>0||_512!==_56d&&(_512!==_56c&&_512!==_56f||_629)){
switch(_512){
case _56b:
case _569:
case _56a:
_62a.push(_56b);
break;
case _56c:
if(_62a[_62a.length-1]!==_56b){
_4e4(_514,"#else after #else");
}else{
_62a[_62a.length-1]=_56c;
}
break;
case _56e:
if(_62a[_62a.length-1]!==_56b){
_4e4(_514,"#elif after #else");
}
break;
case _56d:
_62a.pop();
break;
case _52b:
_522=true;
_4e4(_514,"Missing #endif");
}
_5f8(true);
}
_522=true;
if(_512===_56d){
_523.pop();
}
};
function _5f8(_62b,_62c,_62d,_62e){
_514=_4d5;
_508=_4c0;
_51e=_51d;
if(_4d5>=_4c1){
return _605(_52b);
}
var code=_4c0.charCodeAt(_4d5);
if(!_62c&&!_522&&code!==35){
_5d0();
_605(_577,_4c0.slice(_514,_4d5));
_5f7(true,true);
return;
}else{
if(_51b&&code!==41&&code!==44){
var _62f=0;
while(_4d5<_4c1&&(_62f||code!==41&&code!==44)){
if(code===40){
_62f++;
}
if(code===41){
_62f--;
}
if(code===34||code===39){
var _630=code;
code=_4c0.charCodeAt(++_4d5);
while(_4d5<_4c1&&code!==_630){
if(code===92){
code=_4c0.charCodeAt(++_4d5);
if(code!==_630){
continue;
}
}
code=_4c0.charCodeAt(++_4d5);
}
}
code=_4c0.charCodeAt(++_4d5);
}
return _605(_576,_4c0.slice(_514,_4d5));
}
}
if(_5aa(code)||code===92&&_4c0.charCodeAt(_4d5+1)===117){
return _631(_62d);
}
if(_616(code,_62b?_632:_605,true)===false){
var ch=String.fromCharCode(code);
if(ch==="\\"||_5a7.test(ch)){
return _631(_62d);
}
_4e4(_4d5,"Unexpected character '"+ch+"'");
}
};
function _631(_633,_634){
var word=_5f3();
var type=_52a;
if(_633&&_4bf.preprocess){
var _635=_636(word,_637,_634);
if(_635===true){
return true;
}
}
if(!_638&&_5a2(word)){
type=_57c[word];
}
_605(type,word,_635,false,_633);
};
function _605(type,val,_639,_63a,_63b){
_512=type;
_513=val;
_515=_639||_4d5;
if(type!==_52c){
_4f2=_515;
}
var ch=_5f7(false,_63a);
if(ch===35&&_4bf.preprocess&&!_520&&_4c0.charCodeAt(_4d5+1)===35){
var val1=val!=null?val:type.keyword||type.type;
_4d5+=2;
if(val1!=null){
var _63c=_4bf.locations&&new _5b1(_4d6,_4ed);
var _63d=_507,_63e=_515,_63f=_514,_640=_514+_4f5,_641=_519&&_519.macro&&_519.macro.variadicName;
_4f0();
if(_641&&_641===_4c0.slice(_4d5,_4d5+_641.length)){
var _642=true;
}
_521=true;
_5f8(null,null,_63b,2);
_521=false;
var val2=_513!=null?_513:_512.keyword||_512.type;
if(val2!=null){
if(_642&&val1===","&&val2===""){
return _5f8();
}
var _643=""+val1+val2,_644=_514+_4f6;
var _645=new _4d3(null,_643,null,_640,false,null,false,_63c);
var r=_5c4(_645,_4f6,_519?_519.parameterDict:null,null,_4d5,_637,null);
if(_519&&_519.macro===_645){
_512=type;
_514=_63f;
_515=_63e;
_507=_63d;
_4f6=_644-val1.length;
if(!_642){
console.log("Warning: pasting formed '"+_643+"', an invalid preprocessing token");
}
}else{
return r;
}
}
}
}
};
function _632(type,val){
_512=type;
_513=val;
_4f2=_515=_4d5;
_5f7(true);
};
function _637(_646,_647,_648,_649){
if(!_646){
_516=_514;
_517=_515;
}
_4f8=_4f2;
return _5f8(false,false,_649,_647);
};
function _60f(type,_64a){
if(_512===type){
_637(false,false,null,_64a);
return true;
}
};
function _60b(type,_64b,_64c){
if(_512===type){
_637(false,_32,null,_64c);
}else{
_4e4(_514,_64b||"Unexpected token");
}
};
function _64d(){
};
function _5f9(_64e){
var _64f=_512===_52a?_513:(!_4bf.forbidReserved||_512.okAsIdent)&&_512.keyword||_64d();
_637(false,false,null,_64e);
return _64f;
};
function _650(_651){
var node=_652();
node.name=_5f9(_651);
return _653(node,"Identifier");
};
function _5fb(_654){
return _655(_654);
};
function _655(_656){
return _657(_658(_656),-1,_656);
};
function _657(left,_659,_65a){
var prec=_512.binop;
if(prec){
if(!_512.preprocess){
_4e4(_514,"Unsupported macro operator");
}
if(prec>_659){
var node=_65b(left);
node.left=left;
node.operator=_513;
_637(false,false,null,_65a);
node.right=_657(_658(_65a),prec,_65a);
var node=_653(node,/&&|\|\|/.test(node.operator)?"LogicalExpression":"BinaryExpression");
return _657(node,_659,_65a);
}
}
return left;
};
function _658(_65c){
if(_512.preprocess&&_512.prefix){
var node=_652();
node.operator=_513;
node.prefix=true;
_637(false,false,null,_65c);
node.argument=_658(_65c);
return _653(node,"UnaryExpression");
}
return _65d(_65c);
};
function _65d(_65e){
switch(_512){
case _52a:
return _650(_65e);
case _527:
case _529:
return _65f(_65e);
case _581:
var _660=_514;
_637(false,false,null,_65e);
var val=_5fb(_65e);
val.start=_660;
val.end=_515;
_60b(_582,"Expected closing ')' in macro expression",_65e);
return val;
case _572:
var node=_652();
_637(false,false,null,_65e);
node.object=_661(_65e);
return _653(node,"DefinedExpression");
default:
_662();
}
};
function _661(_663){
switch(_512){
case _52a:
return _650(_663);
case _527:
case _529:
return _65f(_663);
case _581:
var _664=_514;
_637(false,false,null,_663);
var val=_661(_663);
val.start=_664;
val.end=_515;
_60b(_582,"Expected closing ')' in macro expression",_663);
return val;
default:
_662();
}
};
function _65f(_665){
var node=_652();
node.value=_513;
node.raw=_508.slice(_514,_515);
_637(false,false,null,_665);
return _653(node,"Literal");
};
function _653(node,type){
node.type=type;
node.end=_517;
return node;
};
function _5c0(_666,_667,_668){
_4ff=_505;
_502=_506;
if(!_666){
_4f3=_4d5;
}else{
_4d5=_4f3+1;
}
if(!_668){
_4f1=_4f3;
}
_507=_4c0;
_4f5=_4f6;
_51e=_51d;
if(_4bf.locations){
_4fb=new _5ac();
}
if(_666){
return _5e1();
}
if(_4d5>=_4c1){
return _5b7(_52b);
}
var code=_4c0.charCodeAt(_4d5);
if(_5aa(code)||code===92){
return _669(null,_667,_666);
}
var tok=_616(code,_5b7);
if(tok===false){
var ch=String.fromCharCode(code);
if(ch==="\\"||_5a7.test(ch)){
return _669(null,_667,_666);
}
_4e4(_4d5,"Unexpected character '"+ch+"'");
}
return tok;
};
function _5e2(type,size,_66a){
var str=_4c0.slice(_4d5,_4d5+size);
_4d5+=size;
_66a(type,str);
};
function _5e1(){
var _66b="",_66c,_66d,_66e=_4d5;
for(;;){
if(_4d5>=_4c1){
_4e4(_66e,"Unterminated regular expression");
}
var ch=_4c0.charAt(_4d5);
if(_5a9.test(ch)){
_4e4(_66e,"Unterminated regular expression");
}
if(!_66c){
if(ch==="["){
_66d=true;
}else{
if(ch==="]"&&_66d){
_66d=false;
}else{
if(ch==="/"&&!_66d){
break;
}
}
}
_66c=ch==="\\";
}else{
_66c=false;
}
++_4d5;
}
var _66b=_4c0.slice(_66e,_4d5);
++_4d5;
var mods=_5f3();
if(mods&&!/^[gmsiy]*$/.test(mods)){
_4e4(_66e,"Invalid regexp flag");
}
return _5b7(_528,new RegExp(_66b,mods));
};
function _66f(_670,len){
var _671=_4d5,_672=0;
for(var i=0,e=len==null?Infinity:len;i<e;++i){
var code=_4c0.charCodeAt(_4d5),val;
if(code>=97){
val=code-97+10;
}else{
if(code>=65){
val=code-65+10;
}else{
if(code>=48&&code<=57){
val=code-48;
}else{
val=Infinity;
}
}
}
if(val>=_670){
break;
}
++_4d5;
_672=_672*_670+val;
}
if(_4d5===_671||len!=null&&_4d5-_671!==len){
return null;
}
return _672;
};
function _619(_673){
_4d5+=2;
var val=_66f(16);
if(val==null){
_4e4(_4f3+2,"Expected hexadecimal number");
}
if(_5aa(_4c0.charCodeAt(_4d5))){
_4e4(_4d5,"Identifier directly after number");
}
return _673(_527,val);
};
function _5de(_674,_675){
var _676=_4d5,_677=false,_678=_4c0.charCodeAt(_4d5)===48;
if(!_674&&_66f(10)===null){
_4e4(_676,"Invalid number");
}
if(_4c0.charCodeAt(_4d5)===46){
++_4d5;
_66f(10);
_677=true;
}
var next=_4c0.charCodeAt(_4d5);
if(next===69||next===101){
next=_4c0.charCodeAt(++_4d5);
if(next===43||next===45){
++_4d5;
}
if(_66f(10)===null){
_4e4(_676,"Invalid number");
}
_677=true;
}
if(_5aa(_4c0.charCodeAt(_4d5))){
_4e4(_4d5,"Identifier directly after number");
}
var str=_4c0.slice(_676,_4d5),val;
if(_677){
val=parseFloat(str);
}else{
if(!_678||str.length===1){
val=parseInt(str,10);
}else{
if(/[89]/.test(str)||_510){
_4e4(_676,"Invalid number");
}else{
val=parseInt(str,8);
}
}
}
return _675(_527,val);
};
function _5f2(_679,_67a){
_4d5++;
var out="";
for(;;){
if(_4d5>=_4c1){
_4e4(_4f3,"Unterminated string constant");
}
var ch=_4c0.charCodeAt(_4d5);
if(ch===_679){
++_4d5;
return _67a(_529,out);
}
if(ch===92){
ch=_4c0.charCodeAt(++_4d5);
var _67b=/^[0-7]+/.exec(_4c0.slice(_4d5,_4d5+3));
if(_67b){
_67b=_67b[0];
}
while(_67b&&parseInt(_67b,8)>255){
_67b=_67b.slice(0,_67b.length-1);
}
if(_67b==="0"){
_67b=null;
}
++_4d5;
if(_67b){
if(_510){
_4e4(_4d5-2,"Octal literal in strict mode");
}
out+=String.fromCharCode(parseInt(_67b,8));
_4d5+=_67b.length-1;
}else{
switch(ch){
case 110:
out+="\n";
break;
case 114:
out+="\r";
break;
case 120:
out+=String.fromCharCode(_67c(2));
break;
case 117:
out+=String.fromCharCode(_67c(4));
break;
case 85:
out+=String.fromCharCode(_67c(8));
break;
case 116:
out+="\t";
break;
case 98:
out+="\b";
break;
case 118:
out+="\v";
break;
case 102:
out+="\f";
break;
case 48:
out+="\x00";
break;
case 13:
if(_4c0.charCodeAt(_4d5)===10){
++_4d5;
}
case 10:
if(_4bf.locations){
_4ed=_4d5;
++_4d6;
}
break;
default:
out+=String.fromCharCode(ch);
break;
}
}
}else{
if(ch===13||ch===10||ch===8232||ch===8233){
_4e4(_4f3,"Unterminated string constant");
}
out+=String.fromCharCode(ch);
++_4d5;
}
}
};
function _67c(len){
var n=_66f(16,len);
if(n===null){
_4e4(_4f3,"Bad character escape sequence");
}
return n;
};
var _638;
function _5f3(){
_638=false;
var word,_67d=true,_67e=_4d5;
for(;;){
var ch=_4c0.charCodeAt(_4d5);
if(_5ab(ch)){
if(_638){
word+=_4c0.charAt(_4d5);
}
++_4d5;
}else{
if(ch===92){
if(!_638){
word=_4c0.slice(_67e,_4d5);
}
_638=true;
if(_4c0.charCodeAt(++_4d5)!=117){
_4e4(_4d5,"Expecting Unicode escape sequence \\uXXXX");
}
++_4d5;
var esc=_67c(4);
var _67f=String.fromCharCode(esc);
if(!_67f){
_4e4(_4d5-1,"Invalid Unicode escape");
}
if(!(_67d?_5aa(esc):_5ab(esc))){
_4e4(_4d5-4,"Invalid Unicode escape");
}
word+=_67f;
}else{
break;
}
}
_67d=false;
}
return _638?word:_4c0.slice(_67e,_4d5);
};
function _669(_680,_681,_682){
var word=_680||_5f3();
var type=_52a;
if(_4bf.preprocess){
var _683=_636(word,next,_681,_682);
if(_683===true){
return true;
}
}
if(!_638){
if(_5a0(word)){
type=_579[word];
}else{
if(_4bf.objj&&_5a1(word)){
type=_57a[word];
}else{
if(_4bf.forbidReserved&&(_4bf.ecmaVersion===3?_59c:_59d)(word)||_510&&_59e(word)){
_4e4(_4f3,"The keyword '"+word+"' is reserved");
}
}
}
}
return _5b7(type,word,_683);
};
function _636(word,_684,_685,_686){
var _687,_688=_519,_689=_51d;
if(_688){
var _68a=_51e||_519;
if(_68a.parameterDict&&_68a.macro.isParameterFunction()(word)){
_687=_68a.parameterDict[word];
if(!_687&&_68a.macro.variadicName===word){
if(_521){
_5b7(_52a,"");
return true;
}else{
_5d1();
_684(true,_685,_686,true);
}
return true;
}
if(_5d1(true,true)===true){
if(_68b(35,35)){
_685=2;
}
}else{
if(_4c0.charCodeAt(_4d5)===35&&_4c0.charCodeAt(_4d5+1)===35){
_685=2;
}
}
_51d=_687&&_687.parameterScope;
_685--;
}
}
if(!_687&&(!_685&&!_51a||_4d5<_4c1)&&_4bf.preprocessIsMacro(word)){
_51d=null;
_687=_4bf.preprocessGetMacro(word);
if(_687){
if(!_519||!_519.macro.isArgument){
var i=_518.length,_68c;
while(i>0){
var item=_518[--i],_68d=item.macro;
if(_68d.identifier===word&&!(_68c&&_68c.isArgument)){
_687=null;
}
_68c=_68d;
}
}
}else{
_687=_4de(word);
}
}
if(_687){
var _68e=_4f3;
var _68f;
var _690=_687.parameters;
var _691;
if(_690){
var pos=_4d5;
var loc;
if(_4bf.locations){
loc=new _5ac();
}
if(_5d1(true,true)===true&&_68b(40)||_4c0.charCodeAt(_4d5)===40){
_691=true;
}else{
_51f=loc;
return pos;
}
}
if(!_690||_691){
var _692=_687.macro;
if(_691){
var _693=_687.variadicName;
var _694=true;
var _695=0;
_68f=Object.create(null);
_5d1(true);
if(_4c0.charCodeAt(_4d5++)!==40){
_4e4(_4d5-1,"Expected '(' before macro prarameters");
}
_5d1(true,true,true);
var code=_4c0.charCodeAt(_4d5++);
while(_4d5<_4c1&&code!==41){
if(_694){
_694=false;
}else{
if(code===44){
_5d1(true,true,true);
code=_4c0.charCodeAt(_4d5++);
}else{
_4e4(_4d5-1,"Expected ',' between macro parameters");
}
}
var _696=_690[_695++];
var _697=_693&&_690.length===_695;
var _698=_4d5-1,_699=0;
var _69a=_4bf.locations&&new _5b1(_4d6,_4ed);
while(_4d5<_4c1&&(_699||code!==41&&(code!==44||_697))){
if(code===40){
_699++;
}
if(code===41){
_699--;
}
if(code===34||code===39){
var _69b=code;
code=_4c0.charCodeAt(_4d5++);
while(_4d5<_4c1&&code!==_69b){
if(code===92){
code=_4c0.charCodeAt(_4d5++);
if(code!==_69b){
continue;
}
}
code=_4c0.charCodeAt(_4d5++);
}
}
code=_4c0.charCodeAt(_4d5++);
}
var val=_4c0.slice(_698,_4d5-1);
_68f[_696]=new _4d3(_696,val,null,_698+_4f5,true,_51e||_519,false,_69a);
}
if(code!==41){
_4e4(_4d5,"Expected ')' after macro prarameters");
}
_5d1(true,true);
}
return _5c4(_687,_4f6,_68f,_689,_4d5,_684,_685,_686);
}
}
};
function _68b(_69c,_69d){
var i=_518.length;
stackloop:
while(i-->0){
var _69e=_518[i],_69f=_69e.end,_6a0=_69e.input,_6a1=_69e.inputLen;
for(;;){
var ch=_6a0.charCodeAt(_69f);
if(ch===32){
++_69f;
}else{
if(ch===13){
++_69f;
var next=_6a0.charCodeAt(_69f);
if(next===10){
++_69f;
}
}else{
if(ch===10){
++_69f;
}else{
if(ch===9){
++_69f;
}else{
if(ch===47){
var next=_6a0.charCodeAt(_69f+1);
if(next===42){
var end=_6a0.indexOf("*/",_69f+=2);
if(end===-1){
_4e4(_69f-2,"Unterminated comment");
}
_69f=end+2;
}else{
if(next===47){
ch=_6a0.charCodeAt(_69f+=2);
while(_69f<_4c1&&ch!==10&&ch!==13&&ch!==8232&&ch!==8233){
++_69f;
ch=_6a0.charCodeAt(_69f);
}
}else{
break stackloop;
}
}
}else{
if(ch===160||ch===11||ch===12||ch>=5760&&_5a3.test(String.fromCharCode(ch))){
++_69f;
}else{
if(_69f>=_6a1){
continue stackloop;
}else{
if(ch===92){
var pos=_69f+1;
ch=_6a0.charCodeAt(pos);
while(pos<_6a1&&(ch===32||ch===9||ch===11||ch===12||ch>=5760&&_5a4.test(String.fromCharCode(ch)))){
ch=_6a0.charCodeAt(++pos);
}
_4e8.lastIndex=0;
var _6a2=_4e8.exec(_6a0.slice(pos,pos+2));
if(_6a2&&_6a2.index===0){
_69f=pos+_6a2[0].length;
}else{
break stackloop;
}
}else{
break stackloop;
}
}
}
}
}
}
}
}
}
}
return _6a0&&_6a0.charCodeAt(_69f)===_69c&&(_69d==null||_6a0.charCodeAt(_69f+1)===_69d);
};
function _5c4(_6a3,_6a4,_6a5,_6a6,end,_6a7,_6a8,_6a9){
var _6aa=_6a3.macro;
if(!_6aa&&_6a7===_637){
_6aa="1";
}
if(_6aa){
_606(_6a3,_6aa,_6a4,_6a5,_6a6,end,_6a8);
}else{
if(_521){
(_6a7===next?_5b7:_605)(_52a,"");
return true;
}
}
_5d1();
_6a7(true,_6a8,_6a9,true);
return true;
};
function _606(_6ab,_6ac,_6ad,_6ae,_6af,end,_6b0,_6b1){
_519={macro:_6ab,macroOffset:_6ad,parameterDict:_6ae,end:end,lastEnd:_4f8,inputLen:_4c1,tokStart:_4f3,onlyTransformArgumentsForLastToken:_51a,currentLine:_4d6,currentLineStart:_4ed,sourceFile:_4c2};
if(_6af){
_519.parameterScope=_6af;
}
if(_6b1){
_519.isIncludeFile=_6b1;
}
_519.input=_4c0;
_518.push(_519);
_51a=_6b0;
_4c0=_6ac;
_4c1=_6ac.length;
_4f6=_6ab.start;
_4d5=0;
_4d6=1;
_4ed=0;
_4f2=0;
_4f8=0;
if(_6ab.sourceFile){
_4c2=_6ab.sourceFile;
}
};
var _4d3=_4be.Macro=function _4d3(_6b2,_6b3,_6b4,_6b5,_6b6,_6b7,_6b8,_6b9,_6ba){
this.identifier=_6b2;
if(_6b3!=null){
this.macro=_6b3;
}
if(_6b4){
this.parameters=_6b4;
}
if(_6b5!=null){
this.start=_6b5;
}
if(_6b6){
this.isArgument=true;
}
if(_6b7){
this.parameterScope=_6b7;
}
if(_6b8){
this.variadicName=_6b8;
}
if(_6b9){
this.locationOffset=_6b9;
}
if(_6ba){
this.sourceFile=_6ba;
}
};
_4d3.prototype.isParameterFunction=function(){
return this.isParameterFunctionVar||(this.isParameterFunctionVar=_4dd((this.parameters||[]).join(" ")));
};
function next(_6bb,_6bc,_6bd){
if(!_6bb){
_50a=_4f3;
_50b=_4f4;
_509=_507;
_4fa=_4f9;
_50c=_4fc;
_4f7=_4f5;
}
_4f8=_4f2;
_4f9=_50d=null;
return _5c0(_6bd,_6bc,_6bb);
};
function _6be(_6bf){
_510=_6bf;
_4d5=_50b;
while(_4d5<_4ed){
_4ed=_4c0.lastIndexOf("\n",_4ed-2)+1;
--_4d6;
}
_4f0();
_5c0();
};
function _6c0(){
this.type=null;
this.start=_4f3+_4f5;
this.end=null;
};
function _6c1(){
this.start=_4fb;
this.end=null;
if(_4c2!=null){
this.source=_4c2;
}
};
function _652(){
var node=new _6c0();
if(_4bf.trackComments&&_4ff){
node.commentsBefore=_4ff;
_4ff=null;
}
if(_4bf.trackSpaces&&_502){
node.spacesBefore=_502;
_502=null;
}
if(_4bf.locations){
node.loc=new _6c1();
}
if(_4bf.ranges){
node.range=[_4f3,0];
}
return node;
};
function _65b(_6c2){
var node=new _6c0();
node.start=_6c2.start;
if(_6c2.commentsBefore){
node.commentsBefore=_6c2.commentsBefore;
delete _6c2.commentsBefore;
}
if(_6c2.spacesBefore){
node.spacesBefore=_6c2.spacesBefore;
delete _6c2.spacesBefore;
}
if(_4bf.locations){
node.loc=new _6c1();
node.loc.start=_6c2.loc.start;
}
if(_4bf.ranges){
node.range=[_6c2.range[0],0];
}
return node;
};
var _6c3;
function _6c4(node,type){
var _6c5=_50b+_4f7;
node.type=type;
node.end=_6c5;
if(_4bf.trackComments){
if(_501){
node.commentsAfter=_501;
_501=null;
}else{
if(_6c3&&_6c3.end===_50b&&_6c3.commentsAfter){
node.commentsAfter=_6c3.commentsAfter;
delete _6c3.commentsAfter;
}
}
if(!_4bf.trackSpaces){
_6c3=node;
}
}
if(_4bf.trackSpaces){
if(_504){
node.spacesAfter=_504;
_504=null;
}else{
if(_6c3&&_6c3.end===_50b&&_6c3.spacesAfter){
node.spacesAfter=_6c3.spacesAfter;
delete _6c3.spacesAfter;
}
}
_6c3=node;
}
if(_4bf.locations){
node.loc.end=_50c;
}
if(_4bf.ranges){
node.range[1]=_6c5;
}
return node;
};
function _6c6(stmt){
return _4bf.ecmaVersion>=5&&stmt.type==="ExpressionStatement"&&stmt.expression.type==="Literal"&&stmt.expression.value==="use strict";
};
function eat(type){
if(_4fd===type){
next();
return true;
}
};
function _6c7(){
return !_4bf.strictSemicolons&&(_4fd===_52b||_4fd===_580||_5a9.test(_509.slice(_50b,_4fa||_4f1))||_50d&&_4bf.objj||_4fa!=null);
};
function _6c8(){
if(!eat(_584)&&!_6c7()){
_4e4(_4f3,"Expected a semicolon");
}
};
function _6c9(type,_6ca){
if(_4fd===type){
next();
}else{
_6ca?_4e4(_4f3,_6ca):_662();
}
};
function _662(){
_4e4(_4f3,"Unexpected token");
};
function _6cb(expr){
if(expr.type!=="Identifier"&&expr.type!=="MemberExpression"&&expr.type!=="Dereference"){
_4e4(expr.start,"Assigning to rvalue");
}
if(_510&&expr.type==="Identifier"&&_59f(expr.name)){
_4e4(expr.start,"Assigning to "+expr.name+" in strict mode");
}
};
function _4c7(_6cc){
_50a=_4f8=_50b=0;
if(_4bf.preprocess){
var _6cd=_4bf.preIncludeFiles;
if(_6cd&&_6cd.length){
for(var i=_6cd.length-1;i>=0;i--){
var _6ce=_6cd[i];
var _6cf=new _4d3(null,_6ce.include,null,0,false,null,false,null,_6ce.sourceFile);
_606(_6cf,_6cf.macro,0,null,null,_4d5,null,true);
_4f0();
}
}
}
if(_4bf.locations){
_50c=new _5ac();
}
_50e=_510=null;
_50f=[];
_5c0();
var node=_6cc||_652(),_6d0=true;
if(!_6cc){
node.body=[];
}
while(_4fd!==_52b){
var stmt=_6d1();
node.body.push(stmt);
if(_6d0&&_6c6(stmt)){
_6be(true);
}
_6d0=false;
}
return _6c4(node,"Program");
};
var _6d2={kind:"loop"},_6d3={kind:"switch"};
function _6d1(){
if(_4fd===_58b||_4fd===_58d&&_4fe=="/="){
_5c0(true);
}
var _6d4=_4fd,node=_652();
if(_50d){
node.expression=_6d5(_50d,_50d.object);
_6c8();
return _6c4(node,"ExpressionStatement");
}
switch(_6d4){
case _52d:
case _530:
next();
var _6d6=_6d4===_52d;
if(eat(_584)||_6c7()){
node.label=null;
}else{
if(_4fd!==_52a){
_662();
}else{
node.label=_6d7();
_6c8();
}
}
for(var i=0;i<_50f.length;++i){
var lab=_50f[i];
if(node.label==null||lab.name===node.label.name){
if(lab.kind!=null&&(_6d6||lab.kind==="loop")){
break;
}
if(node.label&&_6d6){
break;
}
}
}
if(i===_50f.length){
_4e4(node.start,"Unsyntactic "+_6d4.keyword);
}
return _6c4(node,_6d6?"BreakStatement":"ContinueStatement");
case _531:
next();
_6c8();
return _6c4(node,"DebuggerStatement");
case _533:
next();
_50f.push(_6d2);
node.body=_6d1();
_50f.pop();
_6c9(_53e,"Expected 'while' at end of do statement");
node.test=_6d8();
_6c8();
return _6c4(node,"DoWhileStatement");
case _536:
next();
_50f.push(_6d2);
_6c9(_581,"Expected '(' after 'for'");
if(_4fd===_584){
return _6d9(node,null);
}
if(_4fd===_53d){
var init=_652();
next();
_6da(init,true);
if(init.declarations.length===1&&eat(_546)){
return _6db(node,init);
}
return _6d9(node,init);
}
var init=_6dc(false,true);
if(eat(_546)){
_6cb(init);
return _6db(node,init);
}
return _6d9(node,init);
case _537:
next();
return _6dd(node,true);
case _538:
next();
node.test=_6d8();
node.consequent=_6d1();
node.alternate=eat(_534)?_6d1():null;
return _6c4(node,"IfStatement");
case _539:
if(!_50e){
_4e4(_4f3,"'return' outside of function");
}
next();
if(eat(_584)||_6c7()){
node.argument=null;
}else{
node.argument=_6dc();
_6c8();
}
return _6c4(node,"ReturnStatement");
case _53a:
next();
node.discriminant=_6d8();
node.cases=[];
_6c9(_57f,"Expected '{' in switch statement");
_50f.push(_6d3);
for(var cur,_6de;_4fd!=_580;){
if(_4fd===_52e||_4fd===_532){
var _6df=_4fd===_52e;
if(cur){
_6c4(cur,"SwitchCase");
}
node.cases.push(cur=_652());
cur.consequent=[];
next();
if(_6df){
cur.test=_6dc();
}else{
if(_6de){
_4e4(_50a,"Multiple default clauses");
}
_6de=true;
cur.test=null;
}
_6c9(_585,"Expected ':' after case clause");
}else{
if(!cur){
_662();
}
cur.consequent.push(_6d1());
}
}
if(cur){
_6c4(cur,"SwitchCase");
}
next();
_50f.pop();
return _6c4(node,"SwitchStatement");
case _53b:
next();
if(_5a9.test(_507.slice(_50b,_4f3))){
_4e4(_50b,"Illegal newline after throw");
}
node.argument=_6dc();
_6c8();
return _6c4(node,"ThrowStatement");
case _53c:
next();
node.block=_6e0();
node.handler=null;
if(_4fd===_52f){
var _6e1=_652();
next();
_6c9(_581,"Expected '(' after 'catch'");
_6e1.param=_6d7();
if(_510&&_59f(_6e1.param.name)){
_4e4(_6e1.param.start,"Binding "+_6e1.param.name+" in strict mode");
}
_6c9(_582,"Expected closing ')' after catch");
_6e1.guard=null;
_6e1.body=_6e0();
node.handler=_6c4(_6e1,"CatchClause");
}
node.guardedHandlers=_526;
node.finalizer=eat(_535)?_6e0():null;
if(!node.handler&&!node.finalizer){
_4e4(node.start,"Missing catch or finally clause");
}
return _6c4(node,"TryStatement");
case _53d:
next();
node=_6da(node);
_6c8();
return node;
case _53e:
next();
node.test=_6d8();
_50f.push(_6d2);
node.body=_6d1();
_50f.pop();
return _6c4(node,"WhileStatement");
case _53f:
if(_510){
_4e4(_4f3,"'with' in strict mode");
}
next();
node.object=_6d8();
node.body=_6d1();
return _6c4(node,"WithStatement");
case _57f:
return _6e0();
case _584:
next();
return _6c4(node,"EmptyStatement");
case _557:
if(_4bf.objj){
next();
node.classname=_6d7(true);
if(eat(_585)){
node.superclassname=_6d7(true);
}else{
if(eat(_581)){
node.categoryname=_6d7(true);
_6c9(_582,"Expected closing ')' after category name");
}
}
if(_4fe==="<"){
next();
var _6e2=[],_6e3=true;
node.protocols=_6e2;
while(_4fe!==">"){
if(!_6e3){
_6c9(_583,"Expected ',' between protocol names");
}else{
_6e3=false;
}
_6e2.push(_6d7(true));
}
next();
}
if(eat(_57f)){
node.ivardeclarations=[];
for(;;){
if(eat(_580)){
break;
}
_6e4(node);
}
node.endOfIvars=_4f3;
}
node.body=[];
while(!eat(_54a)){
if(_4fd===_52b){
_4e4(_4d5,"Expected '@end' after '@interface'");
}
node.body.push(_6e5());
}
return _6c4(node,"InterfaceDeclarationStatement");
}
break;
case _547:
if(_4bf.objj){
next();
node.classname=_6d7(true);
if(eat(_585)){
node.superclassname=_6d7(true);
}else{
if(eat(_581)){
node.categoryname=_6d7(true);
_6c9(_582,"Expected closing ')' after category name");
}
}
if(_4fe==="<"){
next();
var _6e2=[],_6e3=true;
node.protocols=_6e2;
while(_4fe!==">"){
if(!_6e3){
_6c9(_583,"Expected ',' between protocol names");
}else{
_6e3=false;
}
_6e2.push(_6d7(true));
}
next();
}
if(eat(_57f)){
node.ivardeclarations=[];
for(;;){
if(eat(_580)){
break;
}
_6e4(node);
}
node.endOfIvars=_4f3;
}
node.body=[];
while(!eat(_54a)){
if(_4fd===_52b){
_4e4(_4d5,"Expected '@end' after '@implementation'");
}
node.body.push(_6e5());
}
return _6c4(node,"ClassDeclarationStatement");
}
break;
case _554:
if(_4bf.objj&&_4c0.charCodeAt(_4d5)!==40){
next();
node.protocolname=_6d7(true);
if(_4fe==="<"){
next();
var _6e2=[],_6e3=true;
node.protocols=_6e2;
while(_4fe!==">"){
if(!_6e3){
_6c9(_583,"Expected ',' between protocol names");
}else{
_6e3=false;
}
_6e2.push(_6d7(true));
}
next();
}
while(!eat(_54a)){
if(_4fd===_52b){
_4e4(_4d5,"Expected '@end' after '@protocol'");
}
if(eat(_556)){
continue;
}
if(eat(_555)){
while(!eat(_556)&&_4fd!==_54a){
(node.optional||(node.optional=[])).push(_6e6());
}
}else{
(node.required||(node.required=[])).push(_6e6());
}
}
return _6c4(node,"ProtocolDeclarationStatement");
}
break;
case _54b:
if(_4bf.objj){
next();
if(_4fd===_529){
node.localfilepath=true;
}else{
if(_4fd===_559){
node.localfilepath=false;
}else{
_662();
}
}
node.filename=_6e7();
return _6c4(node,"ImportStatement");
}
break;
case _566:
if(_4bf.objj){
next();
return _6c4(node,"PreprocessStatement");
}
break;
case _54e:
if(_4bf.objj){
next();
node.id=_6d7(false);
return _6c4(node,"ClassStatement");
}
break;
case _54f:
if(_4bf.objj){
next();
node.id=_6d7(false);
return _6c4(node,"GlobalStatement");
}
break;
case _558:
if(_4bf.objj){
next();
node.typedefname=_6d7(true);
return _6c4(node,"TypeDefStatement");
}
break;
}
var _6e8=_4fe,expr=_6dc();
if(_6d4===_52a&&expr.type==="Identifier"&&eat(_585)){
for(var i=0;i<_50f.length;++i){
if(_50f[i].name===_6e8){
_4e4(expr.start,"Label '"+_6e8+"' is already declared");
}
}
var kind=_4fd.isLoop?"loop":_4fd===_53a?"switch":null;
_50f.push({name:_6e8,kind:kind});
node.body=_6d1();
_50f.pop();
node.label=expr;
return _6c4(node,"LabeledStatement");
}else{
node.expression=expr;
_6c8();
return _6c4(node,"ExpressionStatement");
}
};
function _6e4(node){
var _6e9;
if(eat(_548)){
_6e9=true;
}
var type=_6ea();
if(_510&&_59f(type.name)){
_4e4(type.start,"Binding "+type.name+" in strict mode");
}
for(;;){
var decl=_652();
if(_6e9){
decl.outlet=_6e9;
}
decl.ivartype=type;
decl.id=_6d7();
if(_510&&_59f(decl.id.name)){
_4e4(decl.id.start,"Binding "+decl.id.name+" in strict mode");
}
if(eat(_549)){
decl.accessors={};
if(eat(_581)){
if(!eat(_582)){
for(;;){
var _6eb=_6d7(true);
switch(_6eb.name){
case "property":
case "getter":
_6c9(_58c,"Expected '=' after 'getter' accessor attribute");
decl.accessors[_6eb.name]=_6d7(true);
break;
case "setter":
_6c9(_58c,"Expected '=' after 'setter' accessor attribute");
var _6ec=_6d7(true);
decl.accessors[_6eb.name]=_6ec;
if(eat(_585)){
_6ec.end=_4f3;
}
_6ec.name+=":";
break;
case "readwrite":
case "readonly":
case "copy":
decl.accessors[_6eb.name]=true;
break;
default:
_4e4(_6eb.start,"Unknown accessors attribute '"+_6eb.name+"'");
}
if(!eat(_583)){
break;
}
}
_6c9(_582,"Expected closing ')' after accessor attributes");
}
}
}
_6c4(decl,"IvarDeclaration");
node.ivardeclarations.push(decl);
if(!eat(_583)){
break;
}
}
_6c8();
};
function _6ed(node){
node.methodtype=_4fe;
_6c9(_58e,"Method declaration must start with '+' or '-'");
if(eat(_581)){
var _6ee=_652();
if(eat(_54c)){
node.action=_6c4(_6ee,"ObjectiveJActionType");
_6ee=_652();
}
if(!eat(_582)){
node.returntype=_6ea(_6ee);
_6c9(_582,"Expected closing ')' after method return type");
}
}
var _6ef=true,_6f0=[],args=[];
node.selectors=_6f0;
node.arguments=args;
for(;;){
if(_4fd!==_585){
_6f0.push(_6d7(true));
if(_6ef&&_4fd!==_585){
break;
}
}else{
_6f0.push(null);
}
_6c9(_585,"Expected ':' in selector");
var _6f1={};
args.push(_6f1);
if(eat(_581)){
_6f1.type=_6ea();
_6c9(_582,"Expected closing ')' after method argument type");
}
_6f1.identifier=_6d7(false);
if(_4fd===_57f||_4fd===_584){
break;
}
if(eat(_583)){
_6c9(_589,"Expected '...' after ',' in method declaration");
node.parameters=true;
break;
}
_6ef=false;
}
};
function _6e5(){
var _6f2=_652();
if(_4fe==="+"||_4fe==="-"){
_6ed(_6f2);
eat(_584);
_6f2.startOfBody=_50b;
var _6f3=_50e,_6f4=_50f;
_50e=true;
_50f=[];
_6f2.body=_6e0(true);
_50e=_6f3;
_50f=_6f4;
return _6c4(_6f2,"MethodDeclarationStatement");
}else{
return _6d1();
}
};
function _6e6(){
var _6f5=_652();
_6ed(_6f5);
_6c8();
return _6c4(_6f5,"MethodDeclarationStatement");
};
function _6d8(){
_6c9(_581,"Expected '(' before expression");
var val=_6dc();
_6c9(_582,"Expected closing ')' after expression");
return val;
};
function _6e0(_6f6){
var node=_652(),_6f7=true,_510=false,_6f8;
node.body=[];
_6c9(_57f,"Expected '{' before block");
while(!eat(_580)){
var stmt=_6d1();
node.body.push(stmt);
if(_6f7&&_6f6&&_6c6(stmt)){
_6f8=_510;
_6be(_510=true);
}
_6f7=false;
}
if(_510&&!_6f8){
_6be(false);
}
return _6c4(node,"BlockStatement");
};
function _6d9(node,init){
node.init=init;
_6c9(_584,"Expected ';' in for statement");
node.test=_4fd===_584?null:_6dc();
_6c9(_584,"Expected ';' in for statement");
node.update=_4fd===_582?null:_6dc();
_6c9(_582,"Expected closing ')' in for statement");
node.body=_6d1();
_50f.pop();
return _6c4(node,"ForStatement");
};
function _6db(node,init){
node.left=init;
node.right=_6dc();
_6c9(_582,"Expected closing ')' in for statement");
node.body=_6d1();
_50f.pop();
return _6c4(node,"ForInStatement");
};
function _6da(node,noIn){
node.declarations=[];
node.kind="var";
for(;;){
var decl=_652();
decl.id=_6d7();
if(_510&&_59f(decl.id.name)){
_4e4(decl.id.start,"Binding "+decl.id.name+" in strict mode");
}
decl.init=eat(_58c)?_6dc(true,noIn):null;
node.declarations.push(_6c4(decl,"VariableDeclarator"));
if(!eat(_583)){
break;
}
}
return _6c4(node,"VariableDeclaration");
};
function _6dc(_6f9,noIn){
var expr=_6fa(noIn);
if(!_6f9&&_4fd===_583){
var node=_65b(expr);
node.expressions=[expr];
while(eat(_583)){
node.expressions.push(_6fa(noIn));
}
return _6c4(node,"SequenceExpression");
}
return expr;
};
function _6fa(noIn){
var left=_6fb(noIn);
if(_4fd.isAssign){
var node=_65b(left);
node.operator=_4fe;
node.left=left;
next();
node.right=_6fa(noIn);
_6cb(left);
return _6c4(node,"AssignmentExpression");
}
return left;
};
function _6fb(noIn){
var expr=_6fc(noIn);
if(eat(_587)){
var node=_65b(expr);
node.test=expr;
node.consequent=_6dc(true);
_6c9(_585,"Expected ':' in conditional expression");
node.alternate=_6dc(true,noIn);
return _6c4(node,"ConditionalExpression");
}
return expr;
};
function _6fc(noIn){
return _6fd(_6fe(),-1,noIn);
};
function _6fd(left,_6ff,noIn){
var prec=_4fd.binop;
if(prec!=null&&(!noIn||_4fd!==_546)){
if(prec>_6ff){
var node=_65b(left);
node.left=left;
node.operator=_4fe;
next();
node.right=_6fd(_6fe(),prec,noIn);
var node=_6c4(node,/&&|\|\|/.test(node.operator)?"LogicalExpression":"BinaryExpression");
return _6fd(node,_6ff,noIn);
}
}
return left;
};
function _6fe(){
if(_4fd.prefix){
var node=_652(),_700=_4fd.isUpdate;
node.operator=_4fe;
node.prefix=true;
_4ef=true;
next();
node.argument=_6fe();
if(_700){
_6cb(node.argument);
}else{
if(_510&&node.operator==="delete"&&node.argument.type==="Identifier"){
_4e4(node.start,"Deleting local variable in strict mode");
}
}
return _6c4(node,_700?"UpdateExpression":"UnaryExpression");
}
var expr=_701();
while(_4fd.postfix&&!_6c7()){
var node=_65b(expr);
node.operator=_4fe;
node.prefix=false;
node.argument=expr;
_6cb(expr);
next();
expr=_6c4(node,"UpdateExpression");
}
return expr;
};
function _701(){
return _702(_703());
};
function _702(base,_704){
if(eat(_586)){
var node=_65b(base);
node.object=base;
node.property=_6d7(true);
node.computed=false;
return _702(_6c4(node,"MemberExpression"),_704);
}else{
if(_4bf.objj){
var _705=_652();
}
if(eat(_57d)){
var expr=_6dc();
if(_4bf.objj&&_4fd!==_57e){
_705.object=expr;
_50d=_705;
return base;
}
var node=_65b(base);
node.object=base;
node.property=expr;
node.computed=true;
_6c9(_57e,"Expected closing ']' in subscript");
return _702(_6c4(node,"MemberExpression"),_704);
}else{
if(!_704&&eat(_581)){
var node=_65b(base);
node.callee=base;
node.arguments=_706(_582,_4fd===_582?null:_6dc(true),false);
return _702(_6c4(node,"CallExpression"),_704);
}
}
}
return base;
};
function _703(){
switch(_4fd){
case _541:
var node=_652();
next();
return _6c4(node,"ThisExpression");
case _52a:
return _6d7();
case _527:
case _529:
case _528:
return _6e7();
case _543:
case _544:
case _545:
var node=_652();
node.value=_4fd.atomValue;
node.raw=_4fd.keyword;
next();
return _6c4(node,"Literal");
case _581:
var _707=_4fb,_708=_4f5,_709=_4f3+_708;
next();
var val=_6dc();
val.start=_709;
val.end=_4f4+_708;
if(_4bf.locations){
val.loc.start=_707;
val.loc.end=_4fc;
}
if(_4bf.ranges){
val.range=[_709,_4f4+_4f7];
}
_6c9(_582,"Expected closing ')' in expression");
return val;
case _551:
var node=_652(),_70a=null;
next();
_6c9(_57d,"Expected '[' at beginning of array literal");
if(_4fd!==_57e){
_70a=_6dc(true,true);
}
node.elements=_706(_57e,_70a,true,true);
return _6c4(node,"ArrayLiteral");
case _57d:
var node=_652(),_70a=null;
next();
if(_4fd!==_583&&_4fd!==_57e){
_70a=_6dc(true,true);
if(_4fd!==_583&&_4fd!==_57e){
return _6d5(node,_70a);
}
}
node.elements=_706(_57e,_70a,true,true);
return _6c4(node,"ArrayExpression");
case _550:
var node=_652();
next();
var r=_70b();
node.keys=r[0];
node.values=r[1];
return _6c4(node,"DictionaryLiteral");
case _57f:
return _70c();
case _537:
var node=_652();
next();
return _6dd(node,false);
case _540:
return _70d();
case _54d:
var node=_652();
next();
_6c9(_581,"Expected '(' after '@selector'");
_70e(node,_582);
_6c9(_582,"Expected closing ')' after selector");
return _6c4(node,"SelectorLiteralExpression");
case _554:
var node=_652();
next();
_6c9(_581,"Expected '(' after '@protocol'");
node.id=_6d7(true);
_6c9(_582,"Expected closing ')' after protocol name");
return _6c4(node,"ProtocolLiteralExpression");
case _552:
var node=_652();
next();
_6c9(_581,"Expected '(' after '@ref'");
node.element=_6d7(node,_582);
_6c9(_582,"Expected closing ')' after ref");
return _6c4(node,"Reference");
case _553:
var node=_652();
next();
_6c9(_581,"Expected '(' after '@deref'");
node.expr=_6dc(true,true);
_6c9(_582,"Expected closing ')' after deref");
return _6c4(node,"Dereference");
default:
if(_4fd.okAsIdent){
return _6d7();
}
_662();
}
};
function _6d5(node,_70f){
_710(node,_57e);
if(_70f.type==="Identifier"&&_70f.name==="super"){
node.superObject=true;
}else{
node.object=_70f;
}
return _6c4(node,"MessageSendExpression");
};
function _70e(node,_711){
var _712=true,_713=[];
for(;;){
if(_4fd!==_585){
_713.push((_6d7(true)).name);
if(_712&&_4fd===_711){
break;
}
}
_6c9(_585,"Expected ':' in selector");
_713.push(":");
if(_4fd===_711){
break;
}
_712=false;
}
node.selector=_713.join("");
};
function _710(node,_714){
var _715=true,_716=[],args=[],_717=[];
node.selectors=_716;
node.arguments=args;
for(;;){
if(_4fd!==_585){
_716.push(_6d7(true));
if(_715&&eat(_714)){
break;
}
}else{
_716.push(null);
}
_6c9(_585,"Expected ':' in selector");
args.push(_6dc(true,true));
if(eat(_714)){
break;
}
if(_4fd===_583){
node.parameters=[];
while(eat(_583)){
node.parameters.push(_6dc(true,true));
}
eat(_714);
break;
}
_715=false;
}
};
function _70d(){
var node=_652();
next();
node.callee=_702(_703(false),true);
if(eat(_581)){
node.arguments=_706(_582,_4fd===_582?null:_6dc(true),false);
}else{
node.arguments=_526;
}
return _6c4(node,"NewExpression");
};
function _70c(){
var node=_652(),_718=true,_719=false;
node.properties=[];
next();
while(!eat(_580)){
if(!_718){
_6c9(_583,"Expected ',' in object literal");
if(_4bf.allowTrailingCommas&&eat(_580)){
break;
}
}else{
_718=false;
}
var prop={key:_71a()},_71b=false,kind;
if(eat(_585)){
prop.value=_6dc(true);
kind=prop.kind="init";
}else{
if(_4bf.ecmaVersion>=5&&prop.key.type==="Identifier"&&(prop.key.name==="get"||prop.key.name==="set")){
_71b=_719=true;
kind=prop.kind=prop.key.name;
prop.key=_71a();
if(_4fd!==_581){
_662();
}
prop.value=_6dd(_652(),false);
}else{
_662();
}
}
if(prop.key.type==="Identifier"&&(_510||_719)){
for(var i=0;i<node.properties.length;++i){
var _71c=node.properties[i];
if(_71c.key.name===prop.key.name){
var _71d=kind==_71c.kind||_71b&&_71c.kind==="init"||kind==="init"&&(_71c.kind==="get"||_71c.kind==="set");
if(_71d&&!_510&&kind==="init"&&_71c.kind==="init"){
_71d=false;
}
if(_71d){
_4e4(prop.key.start,"Redefinition of property");
}
}
}
}
node.properties.push(prop);
}
return _6c4(node,"ObjectExpression");
};
function _71a(){
if(_4fd===_527||_4fd===_529){
return _703();
}
return _6d7(true);
};
function _6dd(node,_71e){
if(_4fd===_52a){
node.id=_6d7();
}else{
if(_71e){
_662();
}else{
node.id=null;
}
}
node.params=[];
var _71f=true;
_6c9(_581,"Expected '(' before function parameters");
while(!eat(_582)){
if(!_71f){
_6c9(_583,"Expected ',' between function parameters");
}else{
_71f=false;
}
node.params.push(_6d7());
}
var _720=_50e,_721=_50f;
_50e=true;
_50f=[];
node.body=_6e0(true);
_50e=_720;
_50f=_721;
if(_510||node.body.body.length&&_6c6(node.body.body[0])){
for(var i=node.id?-1:0;i<node.params.length;++i){
var id=i<0?node.id:node.params[i];
if(_59e(id.name)||_59f(id.name)){
_4e4(id.start,"Defining '"+id.name+"' in strict mode");
}
if(i>=0){
for(var j=0;j<i;++j){
if(id.name===node.params[j].name){
_4e4(id.start,"Argument name clash in strict mode");
}
}
}
}
}
return _6c4(node,_71e?"FunctionDeclaration":"FunctionExpression");
};
function _706(_722,_723,_724,_725){
if(_723&&eat(_722)){
return [_723];
}
var elts=[],_726=true;
while(!eat(_722)){
if(_726){
_726=false;
if(_725&&_4fd===_583&&!_723){
elts.push(null);
}else{
elts.push(_723);
}
}else{
_6c9(_583,"Expected ',' between expressions");
if(_724&&_4bf.allowTrailingCommas&&eat(_722)){
break;
}
if(_725&&_4fd===_583){
elts.push(null);
}else{
elts.push(_6dc(true));
}
}
}
return elts;
};
function _70b(){
_6c9(_57f,"Expected '{' before dictionary");
var keys=[],_727=[],_728=true;
while(!eat(_580)){
if(!_728){
_6c9(_583,"Expected ',' between expressions");
if(_4bf.allowTrailingCommas&&eat(_580)){
break;
}
}
keys.push(_6dc(true,true));
_6c9(_585,"Expected ':' between dictionary key and value");
_727.push(_6dc(true,true));
_728=false;
}
return [keys,_727];
};
function _6d7(_729){
var node=_652();
node.name=_4fd===_52a?_4fe:(_729&&!_4bf.forbidReserved||_4fd.okAsIdent)&&_4fd.keyword||_662();
_4ef=false;
next();
return _6c4(node,"Identifier");
};
function _6e7(){
var node=_652();
node.value=_4fe;
node.raw=_507.slice(_4f3,_4f4);
next();
return _6c4(node,"Literal");
};
function _6ea(_72a){
var node=_72a?_65b(_72a):_652(),_72b=false;
if(_4fd===_52a){
node.name=_4fe;
node.typeisclass=true;
_72b=true;
next();
}else{
node.typeisclass=false;
node.name=_4fd.keyword;
if(!eat(_542)){
if(eat(_561)){
_72b=true;
}else{
var _72c;
if(eat(_564)||eat(_562)||eat(_563)||eat(_565)){
_72c=_4fd.keyword;
}else{
if(eat(_55b)||eat(_55a)){
_72c=_4fd.keyword||true;
}
if(eat(_55d)||eat(_55c)||eat(_55e)){
if(_72c){
node.name+=" "+_72c;
}
_72c=_4fd.keyword||true;
}else{
if(eat(_55f)){
if(_72c){
node.name+=" "+_72c;
}
_72c=_4fd.keyword||true;
}
if(eat(_560)){
if(_72c){
node.name+=" "+_72c;
}
_72c=_4fd.keyword||true;
if(eat(_560)){
node.name+=" "+_72c;
}
}
}
if(!_72c){
node.name=!_4bf.forbidReserved&&_4fd.keyword||_662();
node.typeisclass=true;
_72b=true;
next();
}
}
}
}
}
if(_72b){
if(_4fe==="<"){
var _72d=true,_72e=[];
node.protocols=_72e;
do{
next();
if(_72d){
_72d=false;
}else{
eat(_583);
}
_72e.push(_6d7(true));
}while(_4fe!==">");
next();
}
}
return _6c4(node,"ObjectiveJType");
};
})(_2.acorn||(_2.acorn={}),_2.acorn.walk||(_2.acorn.walk=typeof acorn!=="undefined"&&acorn.walk)||(_2.acorn.walk={}));
if(!_2.acorn){
_2.acorn={};
_2.acorn.walk={};
}
(function(_72f){
"use strict";
_72f.simple=function(node,_730,base,_731){
if(!base){
base=_72f;
}
function c(node,st,_732){
var type=_732||node.type,_733=_730[type];
if(_733){
_733(node,st);
}
base[type](node,st,c);
};
c(node,_731);
};
_72f.recursive=function(node,_734,_735,base){
var _736=_72f.make(_735,base);
function c(node,st,_737){
return _736[_737||node.type](node,st,c);
};
return c(node,_734);
};
_72f.make=function(_738,base){
if(!base){
base=_72f;
}
var _739={};
for(var type in base){
_739[type]=base[type];
}
for(var type in _738){
_739[type]=_738[type];
}
return _739;
};
function _73a(node,st,c){
c(node,st);
};
function _73b(node,st,c){
};
_72f.Program=_72f.BlockStatement=function(node,st,c){
for(var i=0;i<node.body.length;++i){
c(node.body[i],st,"Statement");
}
};
_72f.Statement=_73a;
_72f.EmptyStatement=_73b;
_72f.ExpressionStatement=function(node,st,c){
c(node.expression,st,"Expression");
};
_72f.IfStatement=function(node,st,c){
c(node.test,st,"Expression");
c(node.consequent,st,"Statement");
if(node.alternate){
c(node.alternate,st,"Statement");
}
};
_72f.LabeledStatement=function(node,st,c){
c(node.body,st,"Statement");
};
_72f.BreakStatement=_72f.ContinueStatement=_73b;
_72f.WithStatement=function(node,st,c){
c(node.object,st,"Expression");
c(node.body,st,"Statement");
};
_72f.SwitchStatement=function(node,st,c){
c(node.discriminant,st,"Expression");
for(var i=0;i<node.cases.length;++i){
var cs=node.cases[i];
if(cs.test){
c(cs.test,st,"Expression");
}
for(var j=0;j<cs.consequent.length;++j){
c(cs.consequent[j],st,"Statement");
}
}
};
_72f.ReturnStatement=function(node,st,c){
if(node.argument){
c(node.argument,st,"Expression");
}
};
_72f.ThrowStatement=function(node,st,c){
c(node.argument,st,"Expression");
};
_72f.TryStatement=function(node,st,c){
c(node.block,st,"Statement");
if(node.handler){
c(node.handler.body,st,"ScopeBody");
}
if(node.finalizer){
c(node.finalizer,st,"Statement");
}
};
_72f.WhileStatement=function(node,st,c){
c(node.test,st,"Expression");
c(node.body,st,"Statement");
};
_72f.DoWhileStatement=function(node,st,c){
c(node.body,st,"Statement");
c(node.test,st,"Expression");
};
_72f.ForStatement=function(node,st,c){
if(node.init){
c(node.init,st,"ForInit");
}
if(node.test){
c(node.test,st,"Expression");
}
if(node.update){
c(node.update,st,"Expression");
}
c(node.body,st,"Statement");
};
_72f.ForInStatement=function(node,st,c){
c(node.left,st,"ForInit");
c(node.right,st,"Expression");
c(node.body,st,"Statement");
};
_72f.ForInit=function(node,st,c){
if(node.type=="VariableDeclaration"){
c(node,st);
}else{
c(node,st,"Expression");
}
};
_72f.DebuggerStatement=_73b;
_72f.FunctionDeclaration=function(node,st,c){
c(node,st,"Function");
};
_72f.VariableDeclaration=function(node,st,c){
for(var i=0;i<node.declarations.length;++i){
var decl=node.declarations[i];
if(decl.init){
c(decl.init,st,"Expression");
}
}
};
_72f.Function=function(node,st,c){
c(node.body,st,"ScopeBody");
};
_72f.ScopeBody=function(node,st,c){
c(node,st,"Statement");
};
_72f.Expression=_73a;
_72f.ThisExpression=_73b;
_72f.ArrayExpression=_72f.ArrayLiteral=function(node,st,c){
for(var i=0;i<node.elements.length;++i){
var elt=node.elements[i];
if(elt){
c(elt,st,"Expression");
}
}
};
_72f.DictionaryLiteral=function(node,st,c){
for(var i=0;i<node.keys.length;i++){
var key=node.keys[i];
c(key,st,"Expression");
var _73c=node.values[i];
c(_73c,st,"Expression");
}
};
_72f.ObjectExpression=function(node,st,c){
for(var i=0;i<node.properties.length;++i){
c(node.properties[i].value,st,"Expression");
}
};
_72f.FunctionExpression=_72f.FunctionDeclaration;
_72f.SequenceExpression=function(node,st,c){
for(var i=0;i<node.expressions.length;++i){
c(node.expressions[i],st,"Expression");
}
};
_72f.UnaryExpression=_72f.UpdateExpression=function(node,st,c){
c(node.argument,st,"Expression");
};
_72f.BinaryExpression=_72f.AssignmentExpression=_72f.LogicalExpression=function(node,st,c){
c(node.left,st,"Expression");
c(node.right,st,"Expression");
};
_72f.ConditionalExpression=function(node,st,c){
c(node.test,st,"Expression");
c(node.consequent,st,"Expression");
c(node.alternate,st,"Expression");
};
_72f.NewExpression=_72f.CallExpression=function(node,st,c){
c(node.callee,st,"Expression");
if(node.arguments){
for(var i=0;i<node.arguments.length;++i){
c(node.arguments[i],st,"Expression");
}
}
};
_72f.MemberExpression=function(node,st,c){
c(node.object,st,"Expression");
if(node.computed){
c(node.property,st,"Expression");
}
};
_72f.Identifier=_72f.Literal=_73b;
_72f.ClassDeclarationStatement=function(node,st,c){
if(node.ivardeclarations){
for(var i=0;i<node.ivardeclarations.length;++i){
c(node.ivardeclarations[i],st,"IvarDeclaration");
}
}
for(var i=0;i<node.body.length;++i){
c(node.body[i],st,"Statement");
}
};
_72f.ImportStatement=_73b;
_72f.IvarDeclaration=_73b;
_72f.PreprocessStatement=_73b;
_72f.ClassStatement=_73b;
_72f.GlobalStatement=_73b;
_72f.ProtocolDeclarationStatement=function(node,st,c){
if(node.required){
for(var i=0;i<node.required.length;++i){
c(node.required[i],st,"Statement");
}
}
if(node.optional){
for(var i=0;i<node.optional.length;++i){
c(node.optional[i],st,"Statement");
}
}
};
_72f.TypeDefStatement=_73b;
_72f.MethodDeclarationStatement=function(node,st,c){
var body=node.body;
if(body){
c(body,st,"Statement");
}
};
_72f.MessageSendExpression=function(node,st,c){
if(!node.superObject){
c(node.object,st,"Expression");
}
if(node.arguments){
for(var i=0;i<node.arguments.length;++i){
c(node.arguments[i],st,"Expression");
}
}
if(node.parameters){
for(var i=0;i<node.parameters.length;++i){
c(node.parameters[i],st,"Expression");
}
}
};
_72f.SelectorLiteralExpression=_73b;
_72f.ProtocolLiteralExpression=_73b;
_72f.Reference=function(node,st,c){
c(node.element,st,"Identifier");
};
_72f.Dereference=function(node,st,c){
c(node.expr,st,"Expression");
};
function _73d(prev){
return {vars:Object.create(null),prev:prev};
};
_72f.scopeVisitor=_72f.make({Function:function(node,_73e,c){
var _73f=_73d(_73e);
for(var i=0;i<node.params.length;++i){
_73f.vars[node.params[i].name]={type:"argument",node:node.params[i]};
}
if(node.id){
var decl=node.type=="FunctionDeclaration";
(decl?_73e:_73f).vars[node.id.name]={type:decl?"function":"function name",node:node.id};
}
c(node.body,_73f,"ScopeBody");
},TryStatement:function(node,_740,c){
c(node.block,_740,"Statement");
if(node.handler){
var _741=_73d(_740);
_741.vars[node.handler.param.name]={type:"catch clause",node:node.handler.param};
c(node.handler.body,_741,"ScopeBody");
}
if(node.finalizer){
c(node.finalizer,_740,"Statement");
}
},VariableDeclaration:function(node,_742,c){
for(var i=0;i<node.declarations.length;++i){
var decl=node.declarations[i];
_742.vars[decl.id.name]={type:"var",node:decl.id};
if(decl.init){
c(decl.init,_742,"Expression");
}
}
}});
})(typeof _2=="undefined"?acorn.walk={}:_2.acorn.walk);
(function(mod){
mod(_2.ObjJCompiler||(_2.ObjJCompiler={}),_2.acorn||acorn,(_2.acorn||acorn).walk,typeof _2.sourceMap!="undefined"?_2.sourceMap:typeof module!="undefined"&&typeof module.exports==="object"?module.exports:null);
})(function(_743,_744,walk,_745){
"use strict";
_743.version="0.3.7";
var _746=function(prev,base){
this.vars=Object.create(null);
if(base){
for(var key in base){
this[key]=base[key];
}
}
this.prev=prev;
if(prev){
this.compiler=prev.compiler;
this.nodeStack=prev.nodeStack.slice(0);
this.nodePriorStack=prev.nodePriorStack.slice(0);
this.nodeStackOverrideType=prev.nodeStackOverrideType.slice(0);
}else{
this.nodeStack=[];
this.nodePriorStack=[];
this.nodeStackOverrideType=[];
}
};
_746.prototype.toString=function(){
return this.ivars?"ivars: "+JSON.stringify(this.ivars):"<No ivars>";
};
_746.prototype.compiler=function(){
return this.compiler;
};
_746.prototype.rootScope=function(){
return this.prev?this.prev.rootScope():this;
};
_746.prototype.isRootScope=function(){
return !this.prev;
};
_746.prototype.currentClassName=function(){
return this.classDef?this.classDef.name:this.prev?this.prev.currentClassName():null;
};
_746.prototype.currentProtocolName=function(){
return this.protocolDef?this.protocolDef.name:this.prev?this.prev.currentProtocolName():null;
};
_746.prototype.getIvarForCurrentClass=function(_747){
if(this.ivars){
var ivar=this.ivars[_747];
if(ivar){
return ivar;
}
}
var prev=this.prev;
if(prev&&!this.classDef){
return prev.getIvarForCurrentClass(_747);
}
return null;
};
_746.prototype.getLvar=function(_748,_749){
if(this.vars){
var lvar=this.vars[_748];
if(lvar){
return lvar;
}
}
var prev=this.prev;
if(prev&&(!_749||!this.methodType)){
return prev.getLvar(_748,_749);
}
return null;
};
_746.prototype.currentMethodType=function(){
return this.methodType?this.methodType:this.prev?this.prev.currentMethodType():null;
};
_746.prototype.copyAddedSelfToIvarsToParent=function(){
if(this.prev&&this.addedSelfToIvars){
for(var key in this.addedSelfToIvars){
var _74a=this.addedSelfToIvars[key],_74b=(this.prev.addedSelfToIvars||(this.prev.addedSelfToIvars=Object.create(null)))[key]||(this.prev.addedSelfToIvars[key]=[]);
_74b.push.apply(_74b,_74a);
}
}
};
_746.prototype.addMaybeWarning=function(_74c){
var _74d=this.rootScope(),_74e=_74d._maybeWarnings;
if(!_74e){
_74d._maybeWarnings=_74e=[_74c];
}else{
var _74f=_74e[_74e.length-1];
if(!_74f.isEqualTo(_74c)){
_74e.push(_74c);
}
}
};
_746.prototype.maybeWarnings=function(){
return (this.rootScope())._maybeWarnings;
};
_746.prototype.pushNode=function(node,_750){
var _751=this.nodePriorStack,_752=_751.length,_753=_752?_751[_752-1]:null,_754=_752?this.nodeStack[_752-1]:null;
if(_753){
if(_754!==node){
_753.push(node);
}
}
_751.push(_754===node?_753:[]);
this.nodeStack.push(node);
this.nodeStackOverrideType.push(_750);
};
_746.prototype.popNode=function(){
this.nodeStackOverrideType.pop();
this.nodePriorStack.pop();
return this.nodeStack.pop();
};
_746.prototype.currentNode=function(){
var _755=this.nodeStack;
return _755[_755.length-1];
};
_746.prototype.currentOverrideType=function(){
var _756=this.nodeStackOverrideType;
return _756[_756.length-1];
};
_746.prototype.priorNode=function(){
var _757=this.nodePriorStack,_758=_757.length;
if(_758>1){
var _759=_757[_758-2],l=_759.length;
return _759[l-2]||null;
}
return null;
};
_746.prototype.formatDescription=function(_75a,_75b,_75c){
var _75d=this.nodeStack,_75e=_75d.length;
_75a=_75a||0;
if(_75a>=_75e){
return null;
}
var i=_75e-_75a-1;
var _75f=_75d[i];
var _760=_75b||this.compiler.formatDescription;
var _761=_75b?_75b.parent:_760;
var _762;
if(_761){
var _763=_75c===_75f?this.nodeStackOverrideType[i]:_75f.type;
_762=_761[_763];
if(_75c===_75f&&!_762){
return null;
}
}
if(_762){
return this.formatDescription(_75a+1,_762);
}else{
_762=this.formatDescription(_75a+1,_75b,_75f);
if(_762){
return _762;
}else{
var _764=_760.prior;
if(_764){
var _765=this.priorNode(),_766=_764[_765?_765.type:"None"];
if(_766){
return _766;
}
}
return _760;
}
}
};
var _767=function(_768,node,code){
this.message=_769(_768,node,code);
this.node=node;
};
_767.prototype.checkIfWarning=function(st){
var _76a=this.node.name;
return !st.getLvar(_76a)&&typeof _1[_76a]==="undefined"&&(typeof window==="undefined"||typeof window[_76a]==="undefined")&&!st.compiler.getClassDef(_76a);
};
_767.prototype.isEqualTo=function(_76b){
if(this.message.message!==_76b.message.message){
return false;
}
if(this.node.start!==_76b.node.start){
return false;
}
if(this.node.end!==_76b.node.end){
return false;
}
return true;
};
function _2f7(_76c,file,_76d){
if(_76c){
this.rootNode=new _745.SourceNode();
this.concat=this.concatSourceNode;
this.toString=this.toStringSourceNode;
this.isEmpty=this.isEmptySourceNode;
this.appendStringBuffer=this.appendStringBufferSourceNode;
this.length=this.lengthSourceNode;
if(file){
var _76e=file.toString(),_76f=_76e.substr(_76e.lastIndexOf("/")+1),_770=_76e.substr(0,_76e.lastIndexOf("/")+1);
this.filename=_76f;
if(_770.length>0){
this.sourceRoot=_770;
}
if(_76d!=null){
this.rootNode.setSourceContent(_76f,_76d);
}
}
if(_76d!=null){
this.sourceContent=_76d;
}
}else{
this.atoms=[];
this.concat=this.concatString;
this.toString=this.toStringString;
this.isEmpty=this.isEmptyString;
this.appendStringBuffer=this.appendStringBufferString;
this.length=this.lengthString;
}
};
_2f7.prototype.toStringString=function(){
return this.atoms.join("");
};
_2f7.prototype.toStringSourceNode=function(){
return this.rootNode.toStringWithSourceMap({file:this.filename+"s",sourceRoot:this.sourceRoot});
};
_2f7.prototype.concatString=function(_771){
this.atoms.push(_771);
};
_2f7.prototype.concatSourceNode=function(_772,node,_773){
if(node){
this.rootNode.add(new _745.SourceNode(node.loc.start.line,node.loc.start.column,node.loc.source,_772,_773));
}else{
this.rootNode.add(_772);
}
if(!this.notEmpty){
this.notEmpty=true;
}
};
_2f7.prototype.concatFormat=function(_774){
if(!_774){
return;
}
var _775=_774.split("\n"),size=_775.length;
if(size>1){
this.concat(_775[0]);
for(var i=1;i<size;i++){
var line=_775[i];
this.concat("\n");
if(line.slice(0,1)==="\\"){
var _776=1;
var _777=line.slice(1,1+_776);
if(_777==="-"){
_776=2;
_777=line.slice(1,1+_776);
}
var _778=parseInt(_777);
if(_778){
this.concat(_778>0?_779+(Array(_778*_77a+1)).join(_77b):_779.substring(_77c*-_778));
}
line=line.slice(1+_776);
}else{
if(line||i===size-1){
this.concat(_779);
}
}
if(line){
this.concat(line);
}
}
}else{
this.concat(_774);
}
};
_2f7.prototype.isEmptyString=function(){
return this.atoms.length!==0;
};
_2f7.prototype.isEmptySourceNode=function(){
return this.notEmpty;
};
_2f7.prototype.appendStringBufferString=function(_77d){
this.atoms.push.apply(this.atoms,_77d.atoms);
};
_2f7.prototype.appendStringBufferSourceNode=function(_77e){
this.rootNode.add(_77e.rootNode);
};
_2f7.prototype.lengthString=function(){
return this.atoms.length;
};
_2f7.prototype.lengthSourceNode=function(){
return this.rootNode.children.length;
};
var _77f=function(_780,name,_781,_782,_783,_784,_785){
this.name=name;
if(_781){
this.superClass=_781;
}
if(_782){
this.ivars=_782;
}
if(_780){
this.instanceMethods=_783||Object.create(null);
this.classMethods=_784||Object.create(null);
}
if(_785){
this.protocols=_785;
}
};
_77f.prototype.addInstanceMethod=function(_786){
this.instanceMethods[_786.name]=_786;
};
_77f.prototype.addClassMethod=function(_787){
this.classMethods[_787.name]=_787;
};
_77f.prototype.listOfNotImplementedMethodsForProtocols=function(_788){
var _789=[],_78a=this.getInstanceMethods(),_78b=this.getClassMethods();
for(var i=0,size=_788.length;i<size;i++){
var _78c=_788[i],_78d=_78c.requiredInstanceMethods,_78e=_78c.requiredClassMethods,_78f=_78c.protocols;
if(_78d){
for(var _790 in _78d){
var _791=_78d[_790];
if(!_78a[_790]){
_789.push({"methodDef":_791,"protocolDef":_78c});
}
}
}
if(_78e){
for(var _790 in _78e){
var _791=_78e[_790];
if(!_78b[_790]){
_789.push({"methodDef":_791,"protocolDef":_78c});
}
}
}
if(_78f){
_789=_789.concat(this.listOfNotImplementedMethodsForProtocols(_78f));
}
}
return _789;
};
_77f.prototype.getInstanceMethod=function(name){
var _792=this.instanceMethods;
if(_792){
var _793=_792[name];
if(_793){
return _793;
}
}
var _794=this.superClass;
if(_794){
return _794.getInstanceMethod(name);
}
return null;
};
_77f.prototype.getClassMethod=function(name){
var _795=this.classMethods;
if(_795){
var _796=_795[name];
if(_796){
return _796;
}
}
var _797=this.superClass;
if(_797){
return _797.getClassMethod(name);
}
return null;
};
_77f.prototype.getInstanceMethods=function(){
var _798=this.instanceMethods;
if(_798){
var _799=this.superClass,_79a=Object.create(null);
if(_799){
var _79b=_799.getInstanceMethods();
for(var _79c in _79b){
_79a[_79c]=_79b[_79c];
}
}
for(var _79c in _798){
_79a[_79c]=_798[_79c];
}
return _79a;
}
return [];
};
_77f.prototype.getClassMethods=function(){
var _79d=this.classMethods;
if(_79d){
var _79e=this.superClass,_79f=Object.create(null);
if(_79e){
var _7a0=_79e.getClassMethods();
for(var _7a1 in _7a0){
_79f[_7a1]=_7a0[_7a1];
}
}
for(var _7a1 in _79d){
_79f[_7a1]=_79d[_7a1];
}
return _79f;
}
return [];
};
var _7a2=function(name,_7a3,_7a4,_7a5){
this.name=name;
this.protocols=_7a3;
if(_7a4){
this.requiredInstanceMethods=_7a4;
}
if(_7a5){
this.requiredClassMethods=_7a5;
}
};
_7a2.prototype.addInstanceMethod=function(_7a6){
(this.requiredInstanceMethods||(this.requiredInstanceMethods=Object.create(null)))[_7a6.name]=_7a6;
};
_7a2.prototype.addClassMethod=function(_7a7){
(this.requiredClassMethods||(this.requiredClassMethods=Object.create(null)))[_7a7.name]=_7a7;
};
_7a2.prototype.getInstanceMethod=function(name){
var _7a8=this.requiredInstanceMethods;
if(_7a8){
var _7a9=_7a8[name];
if(_7a9){
return _7a9;
}
}
var _7aa=this.protocols;
for(var i=0,size=_7aa.length;i<size;i++){
var _7ab=_7aa[i],_7a9=_7ab.getInstanceMethod(name);
if(_7a9){
return _7a9;
}
}
return null;
};
_7a2.prototype.getClassMethod=function(name){
var _7ac=this.requiredClassMethods;
if(_7ac){
var _7ad=_7ac[name];
if(_7ad){
return _7ad;
}
}
var _7ae=this.protocols;
for(var i=0,size=_7ae.length;i<size;i++){
var _7af=_7ae[i],_7ad=_7af.getClassMethod(name);
if(_7ad){
return _7ad;
}
}
return null;
};
var _7b0=function(name){
this.name=name;
};
var _7b1=function(name,_7b2){
this.name=name;
this.types=_7b2;
};
var _7b3=_744.makePredicate("self _cmd undefined localStorage arguments");
var _7b4=_744.makePredicate("delete in instanceof new typeof void");
var _7b5=_744.makePredicate("LogicalExpression BinaryExpression");
var _7b6=_744.makePredicate("in instanceof");
var _7b7={acornOptions:function(){
return Object.create(null);
},sourceMap:false,sourceMapIncludeSource:false,pass:2,classDefs:function(){
return Object.create(null);
},protocolDefs:function(){
return Object.create(null);
},typeDefs:function(){
return Object.create(null);
},generate:true,generateObjJ:false,formatDescription:null,indentationSpaces:4,indentationType:" ",includeComments:false,transformNamedFunctionDeclarationToAssignment:false,includeMethodFunctionNames:true,includeMethodArgumentTypeSignatures:true,includeIvarTypeSignatures:true,inlineMsgSendFunctions:true,macros:null};
function _7b8(opts){
var _7b9=Object.create(null);
for(var opt in _7b7){
if(opts&&Object.prototype.hasOwnProperty.call(opts,opt)){
var _7ba=opts[opt];
_7b9[opt]=typeof _7ba==="function"?_7ba():_7ba;
}else{
if(_7b7.hasOwnProperty(opt)){
var _7bb=_7b7[opt];
_7b9[opt]=typeof _7bb==="function"?_7bb():_7bb;
}
}
}
return _7b9;
};
var _7bc=function(_7bd,aURL,_7be){
this.source=_7bd;
this.URL=aURL&&aURL.toString();
_7be=_7b8(_7be);
this.options=_7be;
this.pass=_7be.pass;
this.classDefs=_7be.classDefs;
this.protocolDefs=_7be.protocolDefs;
this.typeDefs=_7be.typeDefs;
this.generate=_7be.generate;
this.createSourceMap=_7be.sourceMap;
this.formatDescription=_7be.formatDescription;
this.includeComments=_7be.includeComments;
this.transformNamedFunctionDeclarationToAssignment=_7be.transformNamedFunctionDeclarationToAssignment;
this.jsBuffer=new _2f7(this.createSourceMap,aURL,_7be.sourceMap&&_7be.sourceMapIncludeSource?this.source:null);
this.imBuffer=null;
this.cmBuffer=null;
this.dependencies=[];
this.warningsAndErrors=[];
this.lastPos=0;
var _7bf=_7be.acornOptions;
if(_7bf){
if(this.URL){
_7bf.sourceFile=this.URL.substr(this.URL.lastIndexOf("/")+1);
}
if(_7be.sourceMap&&!_7bf.locations){
_7bf.locations=true;
}
}else{
_7bf=_7be.acornOptions=this.URL&&{sourceFile:this.URL.substr(this.URL.lastIndexOf("/")+1)};
if(_7be.sourceMap){
_7bf.locations=true;
}
}
if(_7be.macros){
if(_7bf.macros){
_7bf.macros.concat(_7be.macros);
}else{
_7bf.macros=_7be.macros;
}
}
try{
this.tokens=_744.parse(_7bd,_7be.acornOptions);
(this.pass===2&&(_7be.includeComments||_7be.formatDescription)?_7c0:_7c1)(this.tokens,new _746(null,{compiler:this}),this.pass===2?_7c2:_7c3);
}
catch(e){
if(e.lineStart!=null){
e.messageForLine=_7bd.substring(e.lineStart,e.lineEnd);
}
this.addWarning(e);
return;
}
this.setCompiledCode(this.jsBuffer);
};
_7bc.prototype.setCompiledCode=function(_7c4){
if(this.createSourceMap){
var s=_7c4.toString();
this.compiledCode=s.code;
this.sourceMap=s.map;
}else{
this.compiledCode=_7c4.toString();
}
};
_743.compileToExecutable=function(_7c5,aURL,_7c6){
_743.currentCompileFile=aURL;
return (new _7bc(_7c5,aURL,_7c6)).executable();
};
_743.compileToIMBuffer=function(_7c7,aURL,_7c8){
return (new _7bc(_7c7,aURL,_7c8)).IMBuffer();
};
_743.compile=function(_7c9,aURL,_7ca){
return new _7bc(_7c9,aURL,_7ca);
};
_743.compileFileDependencies=function(_7cb,aURL,_7cc){
_743.currentCompileFile=aURL;
(_7cc||(_7cc={})).pass=1;
return new _7bc(_7cb,aURL,_7cc);
};
_743.numberOfLinesAtTopOfFunction=function(){
var f=new Function("x","return x;");
var _7cd=f.toString();
var _7ce=_7cd.indexOf("return x;");
var _7cf=_7cd.substring(0,_7ce);
var _7d0=(_7cf.match(/\n/g)||[]).length;
_7bc.numberOfLinesAtTopOfFunction=function(){
return _7d0;
};
return _7d0;
};
_7bc.prototype.compilePass2=function(){
var _7d1=this.options;
_743.currentCompileFile=this.URL;
this.pass=_7d1.pass=2;
this.jsBuffer=new _2f7(this.createSourceMap,this.URL,_7d1.sourceMap&&_7d1.sourceMapIncludeSource?this.source:null);
if(this.createSourceMap){
this.jsBuffer.concat("\n\n");
}
this.warningsAndErrors=[];
try{
_7c1(this.tokens,new _746(null,{compiler:this}),_7c2);
}
catch(e){
this.addWarning(e);
return null;
}
this.setCompiledCode(this.jsBuffer);
return this.compiledCode;
};
_7bc.prototype.addWarning=function(_7d2){
if(_7d2.path==null){
_7d2.path=this.URL;
}
this.warningsAndErrors.push(_7d2);
};
_7bc.prototype.getIvarForClass=function(_7d3,_7d4){
var ivar=_7d4.getIvarForCurrentClass(_7d3);
if(ivar){
return ivar;
}
var c=this.getClassDef(_7d4.currentClassName());
while(c){
var _7d5=c.ivars;
if(_7d5){
var _7d6=_7d5[_7d3];
if(_7d6){
return _7d6;
}
}
c=c.superClass;
}
};
_7bc.prototype.getClassDef=function(_7d7){
if(!_7d7){
return null;
}
var c=this.classDefs[_7d7];
if(c){
return c;
}
if(typeof objj_getClass==="function"){
var _7d8=objj_getClass(_7d7);
if(_7d8){
var _7d9=class_copyIvarList(_7d8),_7da=_7d9.length,_7db=Object.create(null),_7dc=class_copyProtocolList(_7d8),_7dd=_7dc.length,_7de=Object.create(null),_7df=_7bc.methodDefsFromMethodList(class_copyMethodList(_7d8)),_7e0=_7bc.methodDefsFromMethodList(class_copyMethodList(_7d8.isa)),_7e1=class_getSuperclass(_7d8);
for(var i=0;i<_7da;i++){
var ivar=_7d9[i];
_7db[ivar.name]={"type":ivar.type,"name":ivar.name};
}
for(var i=0;i<_7dd;i++){
var _7e2=_7dc[i],_7e3=protocol_getName(_7e2),_7e4=this.getProtocolDef(_7e3);
_7de[_7e3]=_7e4;
}
c=new _77f(true,_7d7,_7e1?this.getClassDef(_7e1.name):null,_7db,_7df,_7e0,_7de);
this.classDefs[_7d7]=c;
return c;
}
}
return null;
};
_7bc.prototype.getProtocolDef=function(_7e5){
if(!_7e5){
return null;
}
var p=this.protocolDefs[_7e5];
if(p){
return p;
}
if(typeof objj_getProtocol==="function"){
var _7e6=objj_getProtocol(_7e5);
if(_7e6){
var _7e7=protocol_getName(_7e6),_7e8=protocol_copyMethodDescriptionList(_7e6,true,true),_7e9=_7bc.methodDefsFromMethodList(_7e8),_7ea=protocol_copyMethodDescriptionList(_7e6,true,false),_7eb=_7bc.methodDefsFromMethodList(_7ea),_7ec=_7e6.protocols,_7ed=[];
if(_7ec){
for(var i=0,size=_7ec.length;i<size;i++){
_7ed.push(compiler.getProtocolDef(_7ec[i].name));
}
}
p=new _7a2(_7e7,_7ed,_7e9,_7eb);
this.protocolDefs[_7e5]=p;
return p;
}
}
return null;
};
_7bc.prototype.getTypeDef=function(_7ee){
if(!_7ee){
return null;
}
var t=this.typeDefs[_7ee];
if(t){
return t;
}
if(typeof objj_getTypeDef==="function"){
var _7ef=objj_getTypeDef(_7ee);
if(_7ef){
var _7f0=typeDef_getName(_7ef);
t=new _7b0(_7f0);
this.typeDefs[_7f0]=t;
return t;
}
}
return null;
};
_743.parseGccCompilerFlags=function(_7f1){
var args=(_7f1||"").split(" "),_7f2=args.length,_7f3={};
for(var _7f4=0;_7f4<_7f2;++_7f4){
var _7f5=args[_7f4];
if(_7f5.indexOf("-g")===0){
_7f3.includeMethodFunctionNames=true;
}else{
if(_7f5.indexOf("-O")===0){
_7f3.compress=true;
if(_7f5.length>2){
_7f3.inlineMsgSendFunctions=true;
}
}else{
if(_7f5.indexOf("-T")===0){
_7f3.includeIvarTypeSignatures=false;
_7f3.includeMethodArgumentTypeSignatures=false;
}else{
if(_7f5.indexOf("-S")===0){
_7f3.sourceMap=true;
_7f3.sourceMapIncludeSource=true;
}else{
if(_7f5.indexOf("--include")===0){
var _7f6=args[++_7f4],_7f7=_7f6&&_7f6.charCodeAt(0);
if(_7f7===34||_7f7===39){
_7f6=_7f6.substring(1,_7f6.length-1);
}
(_7f3.includeFiles||(_7f3.includeFiles=[])).push(_7f6);
}else{
if(_7f5.indexOf("--inline-msg-send")===0){
_7f3.inlineMsgSendFunctions=true;
}else{
if(_7f5.indexOf("-D")===0){
var _7f8=_7f5.substring(2);
(_7f3.macros||(_7f3.macros=[])).push(_7f8);
}
}
}
}
}
}
}
}
return _7f3;
};
_7bc.methodDefsFromMethodList=function(_7f9){
var _7fa=_7f9.length,_7fb=Object.create(null);
for(var i=0;i<_7fa;i++){
var _7fc=_7f9[i],_7fd=method_getName(_7fc);
_7fb[_7fd]=new _7b1(_7fd,_7fc.types);
}
return _7fb;
};
_7bc.prototype.executable=function(){
if(!this._executable){
this._executable=new _306(this.jsBuffer?this.jsBuffer.toString():null,this.dependencies,this.URL,null,this);
}
return this._executable;
};
_7bc.prototype.IMBuffer=function(){
return this.imBuffer;
};
_7bc.prototype.code=function(){
return this.compiledCode;
};
_7bc.prototype.ast=function(){
return JSON.stringify(this.tokens,null,_77a);
};
_7bc.prototype.map=function(){
return JSON.stringify(this.sourceMap);
};
_7bc.prototype.prettifyMessage=function(_7fe){
var line=_7fe.messageForLine,_7ff="\n"+(line||"");
_7ff+=(new Array((_7fe.messageOnColumn||0)+1)).join(" ");
if(line){
_7ff+=(new Array(Math.min(1,line.length||1)+1)).join("^")+"\n";
}
_7ff+=_7fe.messageType+" line "+_7fe.messageOnLine+" in "+this.URL+": "+_7fe.message;
return _7ff;
};
_7bc.prototype.error_message=function(_800,node){
var pos=_744.getLineInfo(this.source,node.start),_801=new SyntaxError(_800);
_801.messageOnLine=pos.line;
_801.messageOnColumn=pos.column;
_801.path=this.URL;
_801.messageForNode=node;
_801.messageType="ERROR";
_801.messageForLine=this.source.substring(pos.lineStart,pos.lineEnd);
return _801;
};
_7bc.prototype.pushImport=function(url){
if(!_7bc.importStack){
_7bc.importStack=[];
}
_7bc.importStack.push(url);
};
_7bc.prototype.popImport=function(){
_7bc.importStack.pop();
};
function _769(_802,node,code){
var _803=_744.getLineInfo(code,node.start);
_803.message=_802;
_803.messageOnLine=_803.line;
_803.messageOnColumn=_803.column;
_803.messageForNode=node;
_803.messageType="WARNING";
_803.messageForLine=code.substring(_803.lineStart,_803.lineEnd);
return _803;
};
function _7c1(node,_804,_805){
function c(node,st,_806){
_805[_806||node.type](node,st,c);
};
c(node,_804);
};
function _7c0(node,_807,_808){
var _809,_80a;
function c(node,st,_80b){
var _80c=st.compiler,_80d=_80c.includeComments,_80e=st.currentNode(),_80f=_809,_810=_80f===node;
_809=node;
if(_80d&&!_810&&node.commentsBefore&&node.commentsBefore!==_80a){
for(var i=0;i<node.commentsBefore.length;i++){
_80c.jsBuffer.concat(node.commentsBefore[i]);
}
}
st.pushNode(node,_80b);
var _811=st.formatDescription();
if(!_810&&_811&&_811.before){
_80c.jsBuffer.concatFormat(_811.before);
}
_808[_80b||node.type](node,st,c,_811);
if(!_810&&_811&&_811.after){
_80c.jsBuffer.concatFormat(_811.after);
}
st.popNode();
if(_80d&&!_810&&node.commentsAfter){
for(var i=0;i<node.commentsAfter.length;i++){
_80c.jsBuffer.concat(node.commentsAfter[i]);
}
_80a=node.commentsAfter;
}else{
_80a=null;
}
};
c(node,_807);
};
function _812(node){
switch(node.type){
case "Literal":
case "Identifier":
return true;
case "ArrayExpression":
for(var i=0;i<node.elements.length;++i){
if(!_812(node.elements[i])){
return false;
}
}
return true;
case "DictionaryLiteral":
for(var i=0;i<node.keys.length;++i){
if(!_812(node.keys[i])){
return false;
}
if(!_812(node.values[i])){
return false;
}
}
return true;
case "ObjectExpression":
for(var i=0;i<node.properties.length;++i){
if(!_812(node.properties[i].value)){
return false;
}
}
return true;
case "FunctionExpression":
for(var i=0;i<node.params.length;++i){
if(!_812(node.params[i])){
return false;
}
}
return true;
case "SequenceExpression":
for(var i=0;i<node.expressions.length;++i){
if(!_812(node.expressions[i])){
return false;
}
}
return true;
case "UnaryExpression":
return _812(node.argument);
case "BinaryExpression":
return _812(node.left)&&_812(node.right);
case "ConditionalExpression":
return _812(node.test)&&_812(node.consequent)&&_812(node.alternate);
case "MemberExpression":
return _812(node.object)&&(!node.computed||_812(node.property));
case "Dereference":
return _812(node.expr);
case "Reference":
return _812(node.element);
default:
return false;
}
};
function _813(st,node){
if(!_812(node)){
throw st.compiler.error_message("Dereference of expression with side effects",node);
}
};
function _814(c){
return function(node,st,_815,_816){
st.compiler.jsBuffer.concat("(");
c(node,st,_815,_816);
st.compiler.jsBuffer.concat(")");
};
};
var _817={"*":3,"/":3,"%":3,"+":4,"-":4,"<<":5,">>":5,">>>":5,"<":6,"<=":6,">":6,">=":6,"in":6,"instanceof":6,"==":7,"!=":7,"===":7,"!==":7,"&":8,"^":9,"|":10,"&&":11,"||":12};
var _818={MemberExpression:0,CallExpression:1,NewExpression:2,FunctionExpression:3,UnaryExpression:4,UpdateExpression:4,BinaryExpression:5,LogicalExpression:6,ConditionalExpression:7,AssignmentExpression:8};
function _819(node,_81a,_81b){
var _81c=node.type,_819=_818[_81c]||-1,_81d=_818[_81a.type]||-1,_81e,_81f;
return _819<_81d||_819===_81d&&_7b5(_81c)&&((_81e=_817[node.operator])<(_81f=_817[_81a.operator])||_81b&&_81e===_81f);
};
var _7c3=walk.make({ImportStatement:function(node,st,c){
var _820=node.filename.value;
st.compiler.dependencies.push({url:_820,isLocal:node.localfilepath});
}});
var _77b=" ";
var _77a=4;
var _77c=_77a*_77b.length;
var _821=(Array(_77a+1)).join(_77b);
var _779="";
var _7c2=walk.make({Program:function(node,st,c){
var _822=st.compiler,_823=_822.generate;
_77b=_822.options.indentationType;
_77a=_822.options.indentationSpaces;
_77c=_77a*_77b.length;
_821=(Array(_77a+1)).join(_77b);
_779="";
for(var i=0;i<node.body.length;++i){
c(node.body[i],st,"Statement");
}
if(!_823){
_822.jsBuffer.concat(_822.source.substring(_822.lastPos,node.end));
}
var _824=st.maybeWarnings();
if(_824){
for(var i=0;i<_824.length;i++){
var _825=_824[i];
if(_825.checkIfWarning(st)){
_822.addWarning(_825.message);
}
}
}
},BlockStatement:function(node,st,c,_826){
var _827=st.compiler,_828=_827.generate,_829=st.endOfScopeBody,_82a;
if(_829){
delete st.endOfScopeBody;
}
if(_828){
var _82b=st.skipIndentation;
_82a=_827.jsBuffer;
if(_826){
_82a.concat("{",node);
_82a.concatFormat(_826.afterLeftBrace);
}else{
if(_82b){
delete st.skipIndentation;
}else{
_82a.concat(_779.substring(_77c));
}
_82a.concat("{\n",node);
}
}
for(var i=0;i<node.body.length;++i){
c(node.body[i],st,"Statement");
}
if(_828){
var _82c=st.maxReceiverLevel;
if(_829&&_82c){
_82a.concat(_779);
_82a.concat("var ");
for(var i=0;i<_82c;i++){
if(i){
_82a.concat(", ");
}
_82a.concat("___r");
_82a.concat(i+1+"");
}
_82a.concat(";\n");
}
if(_826){
_82a.concatFormat(_826.beforeRightBrace);
_82a.concat("}",node);
}else{
_82a.concat(_779.substring(_77c));
_82a.concat("}",node);
if(!_82b&&st.isDecl!==false){
_82a.concat("\n");
}
st.indentBlockLevel--;
}
}
},ExpressionStatement:function(node,st,c,_82d){
var _82e=st.compiler,_82f=_82e.generate&&!_82d;
if(_82f){
_82e.jsBuffer.concat(_779);
}
c(node.expression,st,"Expression");
if(_82f){
_82e.jsBuffer.concat(";\n",node);
}
},IfStatement:function(node,st,c,_830){
var _831=st.compiler,_832=_831.generate,_833;
if(_832){
_833=_831.jsBuffer;
if(_830){
_833.concat("if",node);
_833.concatFormat(_830.beforeLeftParenthesis);
_833.concat("(");
}else{
if(!st.superNodeIsElse){
_833.concat(_779);
}else{
delete st.superNodeIsElse;
}
_833.concat("if (",node);
}
}
c(node.test,st,"Expression");
if(_832){
if(_830){
_833.concat(")",node);
_833.concatFormat(_830.afterRightParenthesis);
}else{
_833.concat(node.consequent.type==="EmptyStatement"?");\n":")\n",node);
}
}
_779+=_821;
c(node.consequent,st,"Statement");
_779=_779.substring(_77c);
var _834=node.alternate;
if(_834){
var _835=_834.type!=="IfStatement";
if(_832){
if(_830){
_833.concatFormat(_830.beforeElse);
_833.concat("else",node);
_833.concatFormat(_830.afterElse);
}else{
var _836=_834.type==="EmptyStatement";
_833.concat(_779);
_833.concat(_835?_836?"else;\n":"else\n":"else ",node);
}
}
if(_835){
_779+=_821;
}else{
st.superNodeIsElse=true;
}
c(_834,st,"Statement");
if(_835){
_779=_779.substring(_77c);
}
}
},LabeledStatement:function(node,st,c,_837){
var _838=st.compiler;
if(_838.generate){
var _839=_838.jsBuffer;
if(!_837){
_839.concat(_779);
}
c(node.label,st,"IdentifierName");
if(_837){
_839.concat(":",node);
_839.concatFormat(_837.afterColon);
}else{
_839.concat(": ",node);
}
}
c(node.body,st,"Statement");
},BreakStatement:function(node,st,c,_83a){
var _83b=st.compiler;
if(_83b.generate){
var _83c=node.label,_83d=_83b.jsBuffer;
if(!_83a){
_83d.concat(_779);
}
if(_83c){
if(_83a){
_83d.concat("break",node);
_83d.concatFormat(_83a.beforeLabel);
}else{
_83d.concat("break ",node);
}
c(_83c,st,"IdentifierName");
if(!_83a){
_83d.concat(";\n");
}
}else{
_83d.concat(_83a?"break":"break;\n",node);
}
}
},ContinueStatement:function(node,st,c,_83e){
var _83f=st.compiler;
if(_83f.generate){
var _840=node.label,_841=_83f.jsBuffer;
if(!_83e){
_841.concat(_779);
}
if(_840){
if(_83e){
_841.concat("continue",node);
_841.concatFormat(_83e.beforeLabel);
}else{
_841.concat("continue ",node);
}
c(_840,st,"IdentifierName");
if(!_83e){
_841.concat(";\n");
}
}else{
_841.concat(_83e?"continue":"continue;\n",node);
}
}
},WithStatement:function(node,st,c,_842){
var _843=st.compiler,_844=_843.generate,_845;
if(_844){
_845=_843.jsBuffer;
if(_842){
_845.concat("with",node);
_845.concatFormat(_842.beforeLeftParenthesis);
_845.concat("(");
}else{
_845.concat(_779);
_845.concat("with(",node);
}
}
c(node.object,st,"Expression");
if(_844){
if(_842){
_845.concat(")",node);
_845.concatFormat(_842.afterRightParenthesis);
}else{
_845.concat(")\n",node);
}
}
_779+=_821;
c(node.body,st,"Statement");
_779=_779.substring(_77c);
},SwitchStatement:function(node,st,c,_846){
var _847=st.compiler,_848=_847.generate,_849;
if(_848){
_849=_847.jsBuffer;
if(_846){
_849.concat("switch",node);
_849.concatFormat(_846.beforeLeftParenthesis);
_849.concat("(",node);
}else{
_849.concat(_779);
_849.concat("switch(",node);
}
}
c(node.discriminant,st,"Expression");
if(_848){
if(_846){
_849.concat(")");
_849.concatFormat(_846.afterRightParenthesis);
_849.concat("{");
_849.concatFormat(_846.afterLeftBrace);
}else{
_849.concat(") {\n");
}
}
_779+=_821;
for(var i=0;i<node.cases.length;++i){
var cs=node.cases[i];
if(cs.test){
if(_848){
if(_846){
_849.concatFormat(_846.beforeCase);
_849.concat("case",node);
_849.concatFormat(_846.afterCase);
}else{
_849.concat(_779);
_849.concat("case ");
}
}
c(cs.test,st,"Expression");
if(_848){
if(_846){
_849.concat(":");
_849.concatFormat(_846.afterColon);
}else{
_849.concat(":\n");
}
}
}else{
if(_848){
if(_846){
_849.concatFormat(_846.beforeCase);
_849.concat("default");
_849.concatFormat(_846.afterCase);
_849.concat(":");
_849.concatFormat(_846.afterColon);
}else{
_849.concat("default:\n");
}
}
}
_779+=_821;
for(var j=0;j<cs.consequent.length;++j){
c(cs.consequent[j],st,"Statement");
}
_779=_779.substring(_77c);
}
_779=_779.substring(_77c);
if(_848){
if(_846){
_849.concatFormat(_846.beforeRightBrace);
_849.concat("}");
}else{
_849.concat(_779);
_849.concat("}\n");
}
}
},ReturnStatement:function(node,st,c,_84a){
var _84b=st.compiler,_84c=_84b.generate,_84d;
if(_84c){
_84d=_84b.jsBuffer;
if(!_84a){
_84d.concat(_779);
}
_84d.concat("return",node);
}
if(node.argument){
if(_84c){
_84d.concatFormat(_84a?_84a.beforeExpression:" ");
}
c(node.argument,st,"Expression");
}
if(_84c&&!_84a){
_84d.concat(";\n");
}
},ThrowStatement:function(node,st,c,_84e){
var _84f=st.compiler,_850=_84f.generate,_851;
if(_850){
_851=_84f.jsBuffer;
if(!_84e){
_851.concat(_779);
}
_851.concat("throw",node);
_851.concatFormat(_84e?_84e.beforeExpression:" ");
}
c(node.argument,st,"Expression");
if(_850&&!_84e){
_851.concat(";\n");
}
},TryStatement:function(node,st,c,_852){
var _853=st.compiler,_854=_853.generate,_855;
if(_854){
_855=_853.jsBuffer;
if(!_852){
_855.concat(_779);
}
_855.concat("try",node);
_855.concatFormat(_852?_852.beforeStatement:" ");
}
_779+=_821;
if(!_852){
st.skipIndentation=true;
}
c(node.block,st,"Statement");
_779=_779.substring(_77c);
if(node.handler){
var _856=node.handler,_857=new _746(st),_858=_856.param,name=_858.name;
_857.vars[name]={type:"catch clause",node:_858};
if(_854){
if(_852){
_855.concatFormat(_852.beforeCatch);
_855.concat("catch");
_855.concatFormat(_852.afterCatch);
_855.concat("(");
c(_858,st,"IdentifierName");
_855.concat(")");
_855.concatFormat(_852.beforeCatchStatement);
}else{
_855.concat("\n");
_855.concat(_779);
_855.concat("catch(");
_855.concat(name);
_855.concat(") ");
}
}
_779+=_821;
_857.skipIndentation=true;
_857.endOfScopeBody=true;
c(_856.body,_857,"ScopeBody");
_779=_779.substring(_77c);
_857.copyAddedSelfToIvarsToParent();
}
if(node.finalizer){
if(_854){
if(_852){
_855.concatFormat(_852.beforeCatch);
_855.concat("finally");
_855.concatFormat(_852.beforeCatchStatement);
}else{
_855.concat("\n");
_855.concat(_779);
_855.concat("finally ");
}
}
_779+=_821;
st.skipIndentation=true;
c(node.finalizer,st,"Statement");
_779=_779.substring(_77c);
}
if(_854&&!_852){
_855.concat("\n");
}
},WhileStatement:function(node,st,c,_859){
var _85a=st.compiler,_85b=_85a.generate,body=node.body,_85c;
if(_85b){
_85c=_85a.jsBuffer;
if(_859){
_85c.concat("while",node);
_85c.concatFormat(_859.beforeLeftParenthesis);
_85c.concat("(");
}else{
_85c.concat(_779);
_85c.concat("while (",node);
}
}
c(node.test,st,"Expression");
if(_85b){
if(_859){
_85c.concat(")");
_85c.concatFormat(_859.afterRightParenthesis);
}else{
_85c.concat(body.type==="EmptyStatement"?");\n":")\n");
}
}
_779+=_821;
c(body,st,"Statement");
_779=_779.substring(_77c);
},DoWhileStatement:function(node,st,c,_85d){
var _85e=st.compiler,_85f=_85e.generate,_860;
if(_85f){
_860=_85e.jsBuffer;
if(_85d){
_860.concat("do",node);
_860.concatFormat(_85d.beforeStatement);
}else{
_860.concat(_779);
_860.concat("do\n",node);
}
}
_779+=_821;
c(node.body,st,"Statement");
_779=_779.substring(_77c);
if(_85f){
if(_85d){
_860.concat("while");
_860.concatFormat(_85d.beforeLeftParenthesis);
_860.concat("(");
}else{
_860.concat(_779);
_860.concat("while (");
}
}
c(node.test,st,"Expression");
if(_85f){
_860.concatFormat(_85d?")":");\n");
}
},ForStatement:function(node,st,c,_861){
var _862=st.compiler,_863=_862.generate,body=node.body,_864;
if(_863){
_864=_862.jsBuffer;
if(_861){
_864.concat("for",node);
_864.concatFormat(_861.beforeLeftParenthesis);
_864.concat("(");
}else{
_864.concat(_779);
_864.concat("for (",node);
}
}
if(node.init){
c(node.init,st,"ForInit");
}
if(_863){
_864.concat(_861?";":"; ");
}
if(node.test){
c(node.test,st,"Expression");
}
if(_863){
_864.concat(_861?";":"; ");
}
if(node.update){
c(node.update,st,"Expression");
}
if(_863){
if(_861){
_864.concat(")");
_864.concatFormat(_861.afterRightParenthesis);
}else{
_864.concat(body.type==="EmptyStatement"?");\n":")\n");
}
}
_779+=_821;
c(body,st,"Statement");
_779=_779.substring(_77c);
},ForInStatement:function(node,st,c,_865){
var _866=st.compiler,_867=_866.generate,body=node.body,_868;
if(_867){
_868=_866.jsBuffer;
if(_865){
_868.concat("for",node);
_868.concatFormat(_865.beforeLeftParenthesis);
_868.concat("(");
}else{
_868.concat(_779);
_868.concat("for (",node);
}
}
c(node.left,st,"ForInit");
if(_867){
if(_865){
_868.concatFormat(_865.beforeIn);
_868.concat("in");
_868.concatFormat(_865.afterIn);
}else{
_868.concat(" in ");
}
}
c(node.right,st,"Expression");
if(_867){
if(_865){
_868.concat(")");
_868.concatFormat(_865.afterRightParenthesis);
}else{
_868.concat(body.type==="EmptyStatement"?");\n":")\n");
}
}
_779+=_821;
c(body,st,"Statement");
_779=_779.substring(_77c);
},ForInit:function(node,st,c){
var _869=st.compiler,_86a=_869.generate;
if(node.type==="VariableDeclaration"){
st.isFor=true;
c(node,st);
delete st.isFor;
}else{
c(node,st,"Expression");
}
},DebuggerStatement:function(node,st,c,_86b){
var _86c=st.compiler;
if(_86c.generate){
var _86d=_86c.jsBuffer;
if(_86b){
_86d.concat("debugger",node);
}else{
_86d.concat(_779);
_86d.concat("debugger;\n",node);
}
}
},Function:function(node,st,c,_86e){
var _86f=st.compiler,_870=_86f.generate,_871=_86f.jsBuffer,_872=new _746(st),decl=node.type=="FunctionDeclaration",id=node.id;
_872.isDecl=decl;
for(var i=0;i<node.params.length;++i){
_872.vars[node.params[i].name]={type:"argument",node:node.params[i]};
}
if(_870&&!_86e){
_871.concat(_779);
}
if(id){
var name=id.name;
(decl?st:_872).vars[name]={type:decl?"function":"function name",node:id};
if(_86f.transformNamedFunctionDeclarationToAssignment){
if(_870){
_871.concat(name);
_871.concat(" = ");
}else{
_871.concat(_86f.source.substring(_86f.lastPos,node.start));
_871.concat(name);
_871.concat(" = function");
_86f.lastPos=id.end;
}
}
}
if(_870){
_871.concat("function",node);
if(!_86f.transformNamedFunctionDeclarationToAssignment&&id){
if(!_86e){
_871.concat(" ");
}
c(id,st,"IdentifierName");
}
if(_86e){
_871.concatFormat(_86e.beforeLeftParenthesis);
}
_871.concat("(");
for(var i=0;i<node.params.length;++i){
if(i){
_871.concat(_86e?",":", ");
}
c(node.params[i],st,"IdentifierName");
}
if(_86e){
_871.concat(")");
_871.concatFormat(_86e.afterRightParenthesis);
}else{
_871.concat(")\n");
}
}
_779+=_821;
_872.endOfScopeBody=true;
c(node.body,_872,"ScopeBody");
_779=_779.substring(_77c);
_872.copyAddedSelfToIvarsToParent();
},VariableDeclaration:function(node,st,c,_873){
var _874=st.compiler,_875=_874.generate,_876;
if(_875){
_876=_874.jsBuffer;
if(!st.isFor&&!_873){
_876.concat(_779);
}
_876.concat(_873?"var":"var ",node);
}
for(var i=0;i<node.declarations.length;++i){
var decl=node.declarations[i],_877=decl.id.name;
if(i){
if(_875){
if(_873){
_876.concat(",");
}else{
if(st.isFor){
_876.concat(", ");
}else{
_876.concat(",\n");
_876.concat(_779);
_876.concat("    ");
}
}
}
}
st.vars[_877]={type:"var",node:decl.id};
c(decl.id,st,"IdentifierName");
if(decl.init){
if(_875){
if(_873){
_876.concatFormat(_873.beforeEqual);
_876.concat("=");
_876.concatFormat(_873.afterEqual);
}else{
_876.concat(" = ");
}
}
c(decl.init,st,"Expression");
}
if(st.addedSelfToIvars){
var _878=st.addedSelfToIvars[_877];
if(_878){
var _879=st.compiler.jsBuffer.atoms;
for(var i=0,size=_878.length;i<size;i++){
var dict=_878[i];
_879[dict.index]="";
_874.addWarning(_769("Local declaration of '"+_877+"' hides instance variable",dict.node,_874.source));
}
st.addedSelfToIvars[_877]=[];
}
}
}
if(_875&&!_873&&!st.isFor){
_876.concat(";\n",node);
}
},ThisExpression:function(node,st,c){
var _87a=st.compiler;
if(_87a.generate){
_87a.jsBuffer.concat("this",node);
}
},ArrayExpression:function(node,st,c,_87b){
var _87c=st.compiler,_87d=_87c.generate,_87e;
if(_87d){
_87e=_87c.jsBuffer;
_87e.concat("[",node);
}
for(var i=0;i<node.elements.length;++i){
var elt=node.elements[i];
if(_87d&&i!==0){
if(_87b){
_87e.concatFormat(_87b.beforeComma);
_87e.concat(",");
_87e.concatFormat(_87b.afterComma);
}else{
_87e.concat(", ");
}
}
if(elt){
c(elt,st,"Expression");
}
}
if(_87d){
_87e.concat("]");
}
},ObjectExpression:function(node,st,c,_87f){
var _880=st.compiler,_881=_880.generate,_882=node.properties,_883=_880.jsBuffer;
if(_881){
_883.concat("{",node);
}
for(var i=0,size=_882.length;i<size;++i){
var prop=_882[i];
if(_881){
if(i){
if(_87f){
_883.concatFormat(_87f.beforeComma);
_883.concat(",");
_883.concatFormat(_87f.afterComma);
}else{
_883.concat(", ");
}
}
st.isPropertyKey=true;
c(prop.key,st,"Expression");
delete st.isPropertyKey;
if(_87f){
_883.concatFormat(_87f.beforeColon);
_883.concat(":");
_883.concatFormat(_87f.afterColon);
}else{
_883.concat(": ");
}
}else{
if(prop.key.raw&&prop.key.raw.charAt(0)==="@"){
_883.concat(_880.source.substring(_880.lastPos,prop.key.start));
_880.lastPos=prop.key.start+1;
}
}
c(prop.value,st,"Expression");
}
if(_881){
_883.concat("}");
}
},SequenceExpression:function(node,st,c,_884){
var _885=st.compiler,_886=_885.generate,_887;
if(_886){
_887=_885.jsBuffer;
_887.concat("(",node);
}
for(var i=0;i<node.expressions.length;++i){
if(_886&&i!==0){
if(_884){
_887.concatFormat(_884.beforeComma);
_887.concat(",");
_887.concatFormat(_884.afterComma);
}else{
_887.concat(", ");
}
}
c(node.expressions[i],st,"Expression");
}
if(_886){
_887.concat(")");
}
},UnaryExpression:function(node,st,c){
var _888=st.compiler,_889=_888.generate,_88a=node.argument;
if(_889){
var _88b=_888.jsBuffer;
if(node.prefix){
_88b.concat(node.operator,node);
if(_7b4(node.operator)){
_88b.concat(" ");
}
(_819(node,_88a)?_814(c):c)(_88a,st,"Expression");
}else{
(_819(node,_88a)?_814(c):c)(_88a,st,"Expression");
_88b.concat(node.operator);
}
}else{
c(_88a,st,"Expression");
}
},UpdateExpression:function(node,st,c){
var _88c=st.compiler,_88d=_88c.generate,_88e=_88c.jsBuffer;
if(node.argument.type==="Dereference"){
_813(st,node.argument);
if(!_88d){
_88e.concat(_88c.source.substring(_88c.lastPos,node.start));
}
_88e.concat((node.prefix?"":"(")+"(");
if(!_88d){
_88c.lastPos=node.argument.expr.start;
}
c(node.argument.expr,st,"Expression");
if(!_88d){
_88e.concat(_88c.source.substring(_88c.lastPos,node.argument.expr.end));
}
_88e.concat(")(");
if(!_88d){
_88c.lastPos=node.argument.start;
}
c(node.argument,st,"Expression");
if(!_88d){
_88e.concat(_88c.source.substring(_88c.lastPos,node.argument.end));
}
_88e.concat(" "+node.operator.substring(0,1)+" 1)"+(node.prefix?"":node.operator=="++"?" - 1)":" + 1)"));
if(!_88d){
_88c.lastPos=node.end;
}
return;
}
if(node.prefix){
if(_88d){
_88e.concat(node.operator,node);
if(_7b4(node.operator)){
_88e.concat(" ");
}
}
(_88d&&_819(node,node.argument)?_814(c):c)(node.argument,st,"Expression");
}else{
(_88d&&_819(node,node.argument)?_814(c):c)(node.argument,st,"Expression");
if(_88d){
_88e.concat(node.operator);
}
}
},BinaryExpression:function(node,st,c,_88f){
var _890=st.compiler,_891=_890.generate,_892=_7b6(node.operator);
(_891&&_819(node,node.left)?_814(c):c)(node.left,st,"Expression");
if(_891){
var _893=_890.jsBuffer;
_893.concatFormat(_88f?_88f.beforeOperator:" ");
_893.concat(node.operator,node);
_893.concatFormat(_88f?_88f.afterOperator:" ");
}
(_891&&_819(node,node.right,true)?_814(c):c)(node.right,st,"Expression");
},LogicalExpression:function(node,st,c,_894){
var _895=st.compiler,_896=_895.generate;
(_896&&_819(node,node.left)?_814(c):c)(node.left,st,"Expression");
if(_896){
var _897=_895.jsBuffer;
_897.concatFormat(_894?_894.beforeOperator:" ");
_897.concat(node.operator);
_897.concatFormat(_894?_894.afterOperator:" ");
}
(_896&&_819(node,node.right,true)?_814(c):c)(node.right,st,"Expression");
},AssignmentExpression:function(node,st,c,_898){
var _899=st.compiler,_89a=_899.generate,_89b=st.assignment,_89c=_899.jsBuffer;
if(node.left.type==="Dereference"){
_813(st,node.left);
if(!_89a){
_89c.concat(_899.source.substring(_899.lastPos,node.start));
}
_89c.concat("(",node);
if(!_89a){
_899.lastPos=node.left.expr.start;
}
c(node.left.expr,st,"Expression");
if(!_89a){
_89c.concat(_899.source.substring(_899.lastPos,node.left.expr.end));
}
_89c.concat(")(");
if(node.operator!=="="){
if(!_89a){
_899.lastPos=node.left.start;
}
c(node.left,st,"Expression");
if(!_89a){
_89c.concat(_899.source.substring(_899.lastPos,node.left.end));
}
_89c.concat(" "+node.operator.substring(0,1)+" ");
}
if(!_89a){
_899.lastPos=node.right.start;
}
c(node.right,st,"Expression");
if(!_89a){
_89c.concat(_899.source.substring(_899.lastPos,node.right.end));
}
_89c.concat(")");
if(!_89a){
_899.lastPos=node.end;
}
return;
}
var _89b=st.assignment,_89d=node.left;
st.assignment=true;
if(_89d.type==="Identifier"&&_89d.name==="self"){
var lVar=st.getLvar("self",true);
if(lVar){
var _89e=lVar.scope;
if(_89e){
_89e.assignmentToSelf=true;
}
}
}
(_89a&&_819(node,_89d)?_814(c):c)(_89d,st,"Expression");
if(_89a){
_89c.concatFormat(_898?_898.beforeOperator:" ");
_89c.concat(node.operator);
_89c.concatFormat(_898?_898.afterOperator:" ");
}
st.assignment=_89b;
(_89a&&_819(node,node.right,true)?_814(c):c)(node.right,st,"Expression");
if(st.isRootScope()&&_89d.type==="Identifier"&&!st.getLvar(_89d.name)){
st.vars[_89d.name]={type:"global",node:_89d};
}
},ConditionalExpression:function(node,st,c,_89f){
var _8a0=st.compiler,_8a1=_8a0.generate,_8a2;
(_8a1&&_819(node,node.test)?_814(c):c)(node.test,st,"Expression");
if(_8a1){
_8a2=_8a0.jsBuffer;
if(_89f){
_8a2.concatFormat(_89f.beforeOperator);
_8a2.concat("?");
_8a2.concatFormat(_89f.afterOperator);
}else{
_8a2.concat(" ? ");
}
}
c(node.consequent,st,"Expression");
if(_8a1){
if(_89f){
_8a2.concatFormat(_89f.beforeOperator);
_8a2.concat(":");
_8a2.concatFormat(_89f.afterOperator);
}else{
_8a2.concat(" : ");
}
}
c(node.alternate,st,"Expression");
},NewExpression:function(node,st,c,_8a3){
var _8a4=st.compiler,_8a5=node.arguments,_8a6=_8a4.generate,_8a7;
if(_8a6){
_8a7=_8a4.jsBuffer;
_8a7.concat("new ",node);
}
(_8a6&&_819(node,node.callee)?_814(c):c)(node.callee,st,"Expression");
if(_8a6){
_8a7.concat("(");
}
if(_8a5){
for(var i=0,size=_8a5.length;i<size;++i){
if(i&&_8a6){
_8a7.concatFormat(_8a3?",":", ");
}
c(_8a5[i],st,"Expression");
}
}
if(_8a6){
_8a7.concat(")");
}
},CallExpression:function(node,st,c,_8a8){
var _8a9=st.compiler,_8aa=node.arguments,_8ab=_8a9.generate,_8ac=node.callee,_8ad;
if(_8ac.type==="Identifier"&&_8ac.name==="eval"){
var _8ae=st.getLvar("self",true);
if(_8ae){
var _8af=_8ae.scope;
if(_8af){
_8af.assignmentToSelf=true;
}
}
}
(_8ab&&_819(node,_8ac)?_814(c):c)(_8ac,st,"Expression");
if(_8ab){
_8ad=_8a9.jsBuffer;
_8ad.concat("(");
}
if(_8aa){
for(var i=0,size=_8aa.length;i<size;++i){
if(i&&_8ab){
_8ad.concat(_8a8?",":", ");
}
c(_8aa[i],st,"Expression");
}
}
if(_8ab){
_8ad.concat(")");
}
},MemberExpression:function(node,st,c){
var _8b0=st.compiler,_8b1=_8b0.generate,_8b2=node.computed;
(_8b1&&_819(node,node.object)?_814(c):c)(node.object,st,"Expression");
if(_8b1){
_8b0.jsBuffer.concat(_8b2?"[":".",node);
}
st.secondMemberExpression=!_8b2;
(_8b1&&!_8b2&&_819(node,node.property)?_814(c):c)(node.property,st,"Expression");
st.secondMemberExpression=false;
if(_8b1&&_8b2){
_8b0.jsBuffer.concat("]");
}
},Identifier:function(node,st,c){
var _8b3=st.compiler,_8b4=_8b3.generate,_8b5=node.name;
if(st.currentMethodType()==="-"&&!st.secondMemberExpression&&!st.isPropertyKey){
var lvar=st.getLvar(_8b5,true),ivar=_8b3.getIvarForClass(_8b5,st);
if(ivar){
if(lvar){
_8b3.addWarning(_769("Local declaration of '"+_8b5+"' hides instance variable",node,_8b3.source));
}else{
var _8b6=node.start;
if(!_8b4){
do{
_8b3.jsBuffer.concat(_8b3.source.substring(_8b3.lastPos,_8b6));
_8b3.lastPos=_8b6;
}while(_8b3.source.substr(_8b6++,1)==="(");
}
((st.addedSelfToIvars||(st.addedSelfToIvars=Object.create(null)))[_8b5]||(st.addedSelfToIvars[_8b5]=[])).push({node:node,index:_8b3.jsBuffer.length()});
_8b3.jsBuffer.concat("self.",node);
}
}else{
if(!_7b3(_8b5)){
var _8b7,_8b8=typeof _1[_8b5]!=="undefined"||typeof window!=="undefined"&&typeof window[_8b5]!=="undefined"||_8b3.getClassDef(_8b5),_8b9=st.getLvar(_8b5);
if(_8b8&&(!_8b9||_8b9.type!=="class")){
}else{
if(!_8b9){
if(st.assignment){
_8b7=new _767("Creating global variable inside function or method '"+_8b5+"'",node,_8b3.source);
st.vars[_8b5]={type:"remove global warning",node:node};
}else{
_8b7=new _767("Using unknown class or uninitialized global variable '"+_8b5+"'",node,_8b3.source);
}
}
}
if(_8b7){
st.addMaybeWarning(_8b7);
}
}
}
}
if(_8b4){
_8b3.jsBuffer.concat(_8b5,node,_8b5==="self"?"self":null);
}
},IdentifierName:function(node,st,c){
var _8ba=st.compiler;
if(_8ba.generate){
_8ba.jsBuffer.concat(node.name,node);
}
},Literal:function(node,st,c){
var _8bb=st.compiler,_8bc=_8bb.generate;
if(_8bc){
if(node.raw){
if(node.raw.charAt(0)==="@"){
_8bb.jsBuffer.concat(node.raw.substring(1),node);
}else{
_8bb.jsBuffer.concat(node.raw,node);
}
}else{
var _8bd=node.value,_8be=_8bd.indexOf("\"")!==-1;
_8bb.jsBuffer.concat(_8be?"'":"\"",node);
_8bb.jsBuffer.concat(_8bd);
_8bb.jsBuffer.concat(_8be?"'":"\"");
}
}else{
if(node.raw.charAt(0)==="@"){
_8bb.jsBuffer.concat(_8bb.source.substring(_8bb.lastPos,node.start));
_8bb.lastPos=node.start+1;
}
}
},ArrayLiteral:function(node,st,c){
var _8bf=st.compiler,_8c0=_8bf.generate,_8c1=_8bf.jsBuffer,_8c2=_8bf.options.generateObjJ,_8c3=node.elements.length;
if(!_8c0){
_8c1.concat(_8bf.source.substring(_8bf.lastPos,node.start));
_8bf.lastPos=node.start;
}
if(!_8c0){
_8c1.concat(" ");
}
if(!st.receiverLevel){
st.receiverLevel=0;
}
if(_8c2){
_8c1.concat("@[");
}else{
if(!_8c3){
if(_8bf.options.inlineMsgSendFunctions){
_8c1.concat("(___r",node);
_8c1.concat(++st.receiverLevel+"");
_8c1.concat(" = (CPArray.isa.method_msgSend[\"alloc\"] || _objj_forward)(CPArray, \"alloc\"), ___r");
_8c1.concat(st.receiverLevel+"");
_8c1.concat(" == null ? null : (___r");
_8c1.concat(st.receiverLevel+"");
_8c1.concat(".isa.method_msgSend[\"init\"] || _objj_forward)(___r");
_8c1.concat(st.receiverLevel+"");
_8c1.concat(", \"init\"))");
}else{
_8c1.concat("(___r");
_8c1.concat(++st.receiverLevel+"");
_8c1.concat(" = CPArray.isa.objj_msgSend0(CPArray, \"alloc\"), ___r");
_8c1.concat(st.receiverLevel+"");
_8c1.concat(" == null ? null : ___r");
_8c1.concat(st.receiverLevel+"");
_8c1.concat(".isa.objj_msgSend0(___r");
_8c1.concat(st.receiverLevel+"");
_8c1.concat(", \"init\"))");
}
if(!(st.maxReceiverLevel>=st.receiverLevel)){
st.maxReceiverLevel=st.receiverLevel;
}
}else{
if(_8bf.options.inlineMsgSendFunctions){
_8c1.concat("(___r",node);
_8c1.concat(++st.receiverLevel+"");
_8c1.concat(" = (CPArray.isa.method_msgSend[\"alloc\"] || _objj_forward)(CPArray, \"alloc\"), ___r");
_8c1.concat(st.receiverLevel+"");
_8c1.concat(" == null ? null : (___r");
_8c1.concat(st.receiverLevel+"");
_8c1.concat(".isa.method_msgSend[\"initWithObjects:count:\"] || _objj_forward)(___r");
_8c1.concat(st.receiverLevel+"");
_8c1.concat(", \"initWithObjects:count:\", [");
}else{
_8c1.concat("(___r",node);
_8c1.concat(++st.receiverLevel+"");
_8c1.concat(" = CPArray.isa.objj_msgSend0(CPArray, \"alloc\"), ___r");
_8c1.concat(st.receiverLevel+"");
_8c1.concat(" == null ? null : ___r");
_8c1.concat(st.receiverLevel+"");
_8c1.concat(".isa.objj_msgSend2(___r");
_8c1.concat(st.receiverLevel+"");
_8c1.concat(", \"initWithObjects:count:\", [");
}
if(!(st.maxReceiverLevel>=st.receiverLevel)){
st.maxReceiverLevel=st.receiverLevel;
}
}
}
if(_8c3){
for(var i=0;i<_8c3;i++){
var elt=node.elements[i];
if(i){
_8c1.concat(", ");
}
if(!_8c0){
_8bf.lastPos=elt.start;
}
c(elt,st,"Expression");
if(!_8c0){
_8c1.concat(_8bf.source.substring(_8bf.lastPos,elt.end));
}
}
if(!_8c2){
_8c1.concat("], "+_8c3+"))");
}
}
if(_8c2){
_8c1.concat("]");
}else{
st.receiverLevel--;
}
if(!_8c0){
_8bf.lastPos=node.end;
}
},DictionaryLiteral:function(node,st,c){
var _8c4=st.compiler,_8c5=_8c4.generate,_8c6=_8c4.jsBuffer,_8c7=_8c4.options.generateObjJ,_8c8=node.keys.length;
if(!_8c5){
_8c6.concat(_8c4.source.substring(_8c4.lastPos,node.start));
_8c4.lastPos=node.start;
}
if(!_8c5){
_8c6.concat(" ");
}
if(!st.receiverLevel){
st.receiverLevel=0;
}
if(_8c7){
_8c6.concat("@{");
for(var i=0;i<_8c8;i++){
if(i!==0){
_8c6.concat(",");
}
c(node.keys[i],st,"Expression");
_8c6.concat(":");
c(node.values[i],st,"Expression");
}
_8c6.concat("}");
}else{
if(!_8c8){
if(_8c4.options.inlineMsgSendFunctions){
_8c6.concat("(___r",node);
_8c6.concat(++st.receiverLevel+"");
_8c6.concat(" = (CPDictionary.isa.method_msgSend[\"alloc\"] || _objj_forward)(CPDictionary, \"alloc\"), ___r");
_8c6.concat(st.receiverLevel+"");
_8c6.concat(" == null ? null : (___r");
_8c6.concat(st.receiverLevel+"");
_8c6.concat(".isa.method_msgSend[\"init\"] || _objj_forward)(___r");
_8c6.concat(st.receiverLevel+"");
_8c6.concat(", \"init\"))");
}else{
_8c6.concat("(___r");
_8c6.concat(++st.receiverLevel+"");
_8c6.concat(" = CPDictionary.isa.objj_msgSend0(CPDictionary, \"alloc\"), ___r");
_8c6.concat(st.receiverLevel+"");
_8c6.concat(" == null ? null : ___r");
_8c6.concat(st.receiverLevel+"");
_8c6.concat(".isa.objj_msgSend0(___r");
_8c6.concat(st.receiverLevel+"");
_8c6.concat(", \"init\"))");
}
if(!(st.maxReceiverLevel>=st.receiverLevel)){
st.maxReceiverLevel=st.receiverLevel;
}
}else{
if(_8c4.options.inlineMsgSendFunctions){
_8c6.concat("(___r",node);
_8c6.concat(++st.receiverLevel+"");
_8c6.concat(" = (CPDictionary.isa.method_msgSend[\"alloc\"] || _objj_forward)(CPDictionary, \"alloc\"), ___r");
_8c6.concat(st.receiverLevel+"");
_8c6.concat(" == null ? null : (___r");
_8c6.concat(st.receiverLevel+"");
_8c6.concat(".isa.method_msgSend[\"initWithObjects:forKeys:\"] || _objj_forward)(___r");
_8c6.concat(st.receiverLevel+"");
_8c6.concat(", \"initWithObjects:forKeys:\", [");
}else{
_8c6.concat("(___r",node);
_8c6.concat(++st.receiverLevel+"");
_8c6.concat(" = CPDictionary.isa.objj_msgSend0(CPDictionary, \"alloc\"), ___r");
_8c6.concat(st.receiverLevel+"");
_8c6.concat(" == null ? null : ___r");
_8c6.concat(st.receiverLevel+"");
_8c6.concat(".isa.objj_msgSend2(___r");
_8c6.concat(st.receiverLevel+"");
_8c6.concat(", \"initWithObjects:forKeys:\", [");
}
if(!(st.maxReceiverLevel>=st.receiverLevel)){
st.maxReceiverLevel=st.receiverLevel;
}
for(var i=0;i<_8c8;i++){
var _8c9=node.values[i];
if(i){
_8c6.concat(", ");
}
if(!_8c5){
_8c4.lastPos=_8c9.start;
}
c(_8c9,st,"Expression");
if(!_8c5){
_8c6.concat(_8c4.source.substring(_8c4.lastPos,_8c9.end));
}
}
_8c6.concat("], [");
for(var i=0;i<_8c8;i++){
var key=node.keys[i];
if(i){
_8c6.concat(", ");
}
if(!_8c5){
_8c4.lastPos=key.start;
}
c(key,st,"Expression");
if(!_8c5){
_8c6.concat(_8c4.source.substring(_8c4.lastPos,key.end));
}
}
_8c6.concat("]))");
}
}
if(!_8c7){
st.receiverLevel--;
}
if(!_8c5){
_8c4.lastPos=node.end;
}
},ImportStatement:function(node,st,c){
var _8ca=st.compiler,_8cb=_8ca.generate,_8cc=_8ca.jsBuffer,_8cd=node.localfilepath,_8ce=_8ca.options.generateObjJ;
if(!_8cb){
_8cc.concat(_8ca.source.substring(_8ca.lastPos,node.start));
}
if(_8ce){
_8cc.concat("@import ");
_8cc.concat(_8cd?"\"":"<");
_8cc.concat(node.filename.value);
_8cc.concat(_8cd?"\"":">");
}else{
_8cc.concat("objj_executeFile(\"",node);
_8cc.concat(node.filename.value);
_8cc.concat(_8cd?"\", YES);":"\", NO);");
}
if(!_8cb){
_8ca.lastPos=node.end;
}
},ClassDeclarationStatement:function(node,st,c,_8cf){
var _8d0=st.compiler,_8d1=_8d0.generate,_8d2=_8d0.jsBuffer,_8d3=node.classname.name,_8d4=_8d0.getClassDef(_8d3),_8d5=new _746(st),_8d6=node.type==="InterfaceDeclarationStatement",_8d7=node.protocols,_8d8=_8d0.options,_8d9=_8d8.generateObjJ;
_8d0.imBuffer=new _2f7(_8d0.createSourceMap,_8d0.URL,_8d8.sourceMap&&_8d8.sourceMapIncludeSource?_8d0.source:null);
_8d0.cmBuffer=new _2f7(_8d0.createSourceMap,_8d0.URL);
_8d0.classBodyBuffer=new _2f7(_8d0.createSourceMap,_8d0.URL);
if(_8d0.getTypeDef(_8d3)){
throw _8d0.error_message(_8d3+" is already declared as a type",node.classname);
}
if(!_8d1){
_8d2.concat(_8d0.source.substring(_8d0.lastPos,node.start));
}
if(node.superclassname){
if(_8d4&&_8d4.ivars){
throw _8d0.error_message("Duplicate class "+_8d3,node.classname);
}
if(_8d6&&_8d4&&_8d4.instanceMethods&&_8d4.classMethods){
throw _8d0.error_message("Duplicate interface definition for class "+_8d3,node.classname);
}
var _8da=_8d0.getClassDef(node.superclassname.name);
if(!_8da){
var _8db="Can't find superclass "+node.superclassname.name;
if(_7bc.importStack){
for(var i=_7bc.importStack.length;--i>=0;){
_8db+="\n"+(Array((_7bc.importStack.length-i)*2+1)).join(" ")+"Imported by: "+_7bc.importStack[i];
}
}
throw _8d0.error_message(_8db,node.superclassname);
}
_8d4=new _77f(!_8d6,_8d3,_8da,Object.create(null));
if(!_8d9){
_8d2.concat("\n{var the_class = objj_allocateClassPair("+node.superclassname.name+", \""+_8d3+"\"),\nmeta_class = the_class.isa;",node);
}
}else{
if(node.categoryname){
_8d4=_8d0.getClassDef(_8d3);
if(!_8d4){
throw _8d0.error_message("Class "+_8d3+" not found ",node.classname);
}
if(!_8d9){
_8d2.concat("{\nvar the_class = objj_getClass(\""+_8d3+"\")\n",node);
_8d2.concat("if(!the_class) throw new SyntaxError(\"*** Could not find definition for class \\\""+_8d3+"\\\"\");\n");
_8d2.concat("var meta_class = the_class.isa;");
}
}else{
_8d4=new _77f(!_8d6,_8d3,null,Object.create(null));
if(!_8d9){
_8d2.concat("{var the_class = objj_allocateClassPair(Nil, \""+_8d3+"\"),\nmeta_class = the_class.isa;",node);
}
}
}
if(_8d9){
_8d2.concat(_8d6?"@interface ":"@implementation ");
_8d2.concat(_8d3);
if(node.superclassname){
_8d2.concat(" : ");
c(node.superclassname,st,"IdentifierName");
}else{
if(node.categoryname){
_8d2.concat(" (");
c(node.categoryname,st,"IdentifierName");
_8d2.concat(")");
}
}
}
if(_8d7){
for(var i=0,size=_8d7.length;i<size;i++){
if(_8d9){
if(i){
_8d2.concat(", ");
}else{
_8d2.concat(" <");
}
c(_8d7[i],st,"IdentifierName");
if(i===size-1){
_8d2.concat(">");
}
}else{
_8d2.concat("\nvar aProtocol = objj_getProtocol(\""+_8d7[i].name+"\");",_8d7[i]);
_8d2.concat("\nif (!aProtocol) throw new SyntaxError(\"*** Could not find definition for protocol \\\""+_8d7[i].name+"\\\"\");");
_8d2.concat("\nclass_addProtocol(the_class, aProtocol);");
}
}
}
_8d5.classDef=_8d4;
_8d0.currentSuperClass="objj_getClass(\""+_8d3+"\").super_class";
_8d0.currentSuperMetaClass="objj_getMetaClass(\""+_8d3+"\").super_class";
var _8dc=true,_8dd=_8d4.ivars,_8de=[],_8df=false;
if(node.ivardeclarations){
if(_8d9){
_8d2.concat("{");
_779+=_821;
}
for(var i=0;i<node.ivardeclarations.length;++i){
var _8e0=node.ivardeclarations[i],_8e1=_8e0.ivartype?_8e0.ivartype.name:null,_8e2=_8e0.ivartype?_8e0.ivartype.typeisclass:false,_8e3=_8e0.id,_8e4=_8e3.name,ivar={"type":_8e1,"name":_8e4},_8e5=_8e0.accessors;
var _8e6=function(_8e7,_8e8){
if(_8e7.ivars[_8e4]){
throw _8d0.error_message("Instance variable '"+_8e4+"' is already declared for class "+_8d3+(_8e7.name!==_8d3?" in superclass "+_8e7.name:""),_8e0.id);
}
if(_8e7.superClass){
_8e8(_8e7.superClass,_8e8);
}
};
_8e6(_8d4,_8e6);
var _8e9=!_8e2||typeof _1[_8e1]!=="undefined"||typeof window[_8e1]!=="undefined"||_8d0.getClassDef(_8e1)||_8d0.getTypeDef(_8e1)||_8e1==_8d4.name;
if(!_8e9){
_8d0.addWarning(_769("Unknown type '"+_8e1+"' for ivar '"+_8e4+"'",_8e0.ivartype,_8d0.source));
}
if(_8d9){
c(_8e0,st,"IvarDeclaration");
}else{
if(_8dc){
_8dc=false;
_8d2.concat("class_addIvars(the_class, [");
}else{
_8d2.concat(", ");
}
if(_8d8.includeIvarTypeSignatures){
_8d2.concat("new objj_ivar(\""+_8e4+"\", \""+_8e1+"\")",node);
}else{
_8d2.concat("new objj_ivar(\""+_8e4+"\")",node);
}
}
if(_8e0.outlet){
ivar.outlet=true;
}
_8de.push(ivar);
if(!_8d5.ivars){
_8d5.ivars=Object.create(null);
}
_8d5.ivars[_8e4]={type:"ivar",name:_8e4,node:_8e3,ivar:ivar};
if(_8e5){
var _8ea=_8e5.property&&_8e5.property.name||_8e4,_8eb=_8e5.getter&&_8e5.getter.name||_8ea;
_8d4.addInstanceMethod(new _7b1(_8eb,[_8e1]));
if(!_8e5.readonly){
var _8ec=_8e5.setter?_8e5.setter.name:null;
if(!_8ec){
var _8ed=_8ea.charAt(0)=="_"?1:0;
_8ec=(_8ed?"_":"")+"set"+(_8ea.substr(_8ed,1)).toUpperCase()+_8ea.substring(_8ed+1)+":";
}
_8d4.addInstanceMethod(new _7b1(_8ec,["void",_8e1]));
}
_8df=true;
}
}
}
if(_8d9){
_779=_779.substring(_77c);
_8d2.concatFormat("\n}");
}else{
if(!_8dc){
_8d2.concat("]);");
}
}
if(!_8d9&&!_8d6&&_8df){
var _8ee=new _2f7(false);
_8ee.concat((_8d0.source.substring(node.start,node.endOfIvars)).replace(/<.*>/g,""));
_8ee.concat("\n");
for(var i=0;i<node.ivardeclarations.length;++i){
var _8e0=node.ivardeclarations[i],_8e1=_8e0.ivartype?_8e0.ivartype.name:null,_8e4=_8e0.id.name,_8e5=_8e0.accessors;
if(!_8e5){
continue;
}
var _8ea=_8e5.property&&_8e5.property.name||_8e4,_8eb=_8e5.getter&&_8e5.getter.name||_8ea,_8ef="- ("+(_8e1?_8e1:"id")+")"+_8eb+"\n{\n    return "+_8e4+";\n}\n";
_8ee.concat(_8ef);
if(_8e5.readonly){
continue;
}
var _8ec=_8e5.setter?_8e5.setter.name:null;
if(!_8ec){
var _8ed=_8ea.charAt(0)=="_"?1:0;
_8ec=(_8ed?"_":"")+"set"+(_8ea.substr(_8ed,1)).toUpperCase()+_8ea.substring(_8ed+1)+":";
}
var _8f0="- (void)"+_8ec+"("+(_8e1?_8e1:"id")+")newValue\n{\n    ";
if(_8e5.copy){
_8f0+="if ("+_8e4+" !== newValue)\n        "+_8e4+" = [newValue copy];\n}\n";
}else{
_8f0+=_8e4+" = newValue;\n}\n";
}
_8ee.concat(_8f0);
}
_8ee.concat("\n@end");
var b=(_8ee.toString()).replace(/@accessors(\(.*\))?/g,"");
var _8f1=_7b8(_8d8);
_8f1.sourceMapIncludeSource=true;
var url=_8d0.url;
var _8f2=url&&_8d0.URL.substr(_8d0.URL.lastIndexOf("/")+1);
var _8f3=_8f2&&_8f2.lastIndexOf(".");
var _8f4=_8f2&&_8f2.substr(0,_8f3===-1?_8f2.length:_8f3);
var _8f5=_8f2&&_8f2.substr(_8f3===-1?_8f2.length:_8f3);
var _8f6=node.categoryname&&node.categoryname.id;
var _8f7=_743.compileToIMBuffer(b,_8f4+"_"+_8d3+(_8f6?"_"+_8f6:"")+"_Accessors"+(_8f5||""),_8f1);
var _8f8=_8f7.toString();
if(_8d0.createSourceMap){
_8d0.imBuffer.concat(_745.SourceNode.fromStringWithSourceMap(_8f8.code,_745.SourceMapConsumer(_8f8.map.toString())));
}else{
_8d0.imBuffer.concat(_8f8);
}
}
for(var _8f9=_8de.length,i=0;i<_8f9;i++){
var ivar=_8de[i],_8e4=ivar.name;
_8dd[_8e4]=ivar;
}
_8d0.classDefs[_8d3]=_8d4;
var _8fa=node.body,_8fb=_8fa.length;
if(_8fb>0){
if(!_8d1){
_8d0.lastPos=_8fa[0].start;
}
for(var i=0;i<_8fb;++i){
var body=_8fa[i];
c(body,_8d5,"Statement");
}
if(!_8d1){
_8d2.concat(_8d0.source.substring(_8d0.lastPos,body.end));
}
}
if(!_8d9&&!_8d6&&!node.categoryname){
_8d2.concat("objj_registerClassPair(the_class);\n");
}
if(!_8d9&&_8d0.imBuffer.isEmpty()){
_8d2.concat("class_addMethods(the_class, [");
_8d2.appendStringBuffer(_8d0.imBuffer);
_8d2.concat("]);\n");
}
if(!_8d9&&_8d0.cmBuffer.isEmpty()){
_8d2.concat("class_addMethods(meta_class, [");
_8d2.appendStringBuffer(_8d0.cmBuffer);
_8d2.concat("]);\n");
}
if(!_8d9){
_8d2.concat("}\n");
}
_8d0.jsBuffer=_8d2;
if(!_8d1){
_8d0.lastPos=node.end;
}
if(_8d9){
_8d2.concat("\n@end");
}
if(_8d7){
var _8fc=[];
for(var i=0,size=_8d7.length;i<size;i++){
var _8fd=_8d7[i],_8fe=_8d0.getProtocolDef(_8fd.name);
if(!_8fe){
throw _8d0.error_message("Cannot find protocol declaration for '"+_8fd.name+"'",_8fd);
}
_8fc.push(_8fe);
}
var _8ff=_8d4.listOfNotImplementedMethodsForProtocols(_8fc);
if(_8ff&&_8ff.length>0){
for(var j=0,_900=_8ff.length;j<_900;j++){
var _901=_8ff[j],_902=_901.methodDef,_8fe=_901.protocolDef;
_8d0.addWarning(_769("Method '"+_902.name+"' in protocol '"+_8fe.name+"' is not implemented",node.classname,_8d0.source));
}
}
}
},ProtocolDeclarationStatement:function(node,st,c){
var _903=st.compiler,_904=_903.generate,_905=_903.jsBuffer,_906=node.protocolname.name,_907=_903.getProtocolDef(_906),_908=node.protocols,_909=new _746(st),_90a=[],_90b=_903.options.generateObjJ;
if(_907){
throw _903.error_message("Duplicate protocol "+_906,node.protocolname);
}
_903.imBuffer=new _2f7(_903.createSourceMap,_903.URL);
_903.cmBuffer=new _2f7(_903.createSourceMap,_903.URL);
if(!_904){
_905.concat(_903.source.substring(_903.lastPos,node.start));
}
if(_90b){
_905.concat("@protocol ");
c(node.protocolname,st,"IdentifierName");
}else{
_905.concat("{var the_protocol = objj_allocateProtocol(\""+_906+"\");",node);
}
if(_908){
if(_90b){
_905.concat(" <");
}
for(var i=0,size=_908.length;i<size;i++){
var _90c=_908[i],_90d=_90c.name,_90e=_903.getProtocolDef(_90d);
if(!_90e){
throw _903.error_message("Can't find protocol "+_90d,_90c);
}
if(_90b){
if(i){
_905.concat(", ");
}
c(_90c,st,"IdentifierName");
}else{
_905.concat("\nvar aProtocol = objj_getProtocol(\""+_90d+"\");",node);
_905.concat("\nif (!aProtocol) throw new SyntaxError(\"*** Could not find definition for protocol \\\""+_906+"\\\"\");",node);
_905.concat("\nprotocol_addProtocol(the_protocol, aProtocol);",node);
}
_90a.push(_90e);
}
if(_90b){
_905.concat(">");
}
}
_907=new _7a2(_906,_90a);
_903.protocolDefs[_906]=_907;
_909.protocolDef=_907;
var _90f=node.required;
if(_90f){
var _910=_90f.length;
if(_910>0){
for(var i=0;i<_910;++i){
var _911=_90f[i];
if(!_904){
_903.lastPos=_911.start;
}
c(_911,_909,"Statement");
}
if(!_904){
_905.concat(_903.source.substring(_903.lastPos,_911.end));
}
}
}
if(_90b){
_905.concatFormat("\n@end");
}else{
_905.concat("\nobjj_registerProtocol(the_protocol);\n");
if(_903.imBuffer.isEmpty()){
_905.concat("protocol_addMethodDescriptions(the_protocol, [");
_905.appendStringBuffer(_903.imBuffer);
_905.concat("], true, true);\n");
}
if(_903.cmBuffer.isEmpty()){
_905.concat("protocol_addMethodDescriptions(the_protocol, [");
_905.appendStringBuffer(_903.cmBuffer);
_905.concat("], true, false);\n");
}
_905.concat("}");
}
_903.jsBuffer=_905;
if(!_904){
_903.lastPos=node.end;
}
},IvarDeclaration:function(node,st,c,_912){
var _913=st.compiler,_914=_913.jsBuffer;
if(node.outlet){
_914.concat("@outlet ");
}
c(node.ivartype,st,"IdentifierName");
_914.concat(" ");
c(node.id,st,"IdentifierName");
if(node.accessors){
_914.concat(" @accessors");
}
},MethodDeclarationStatement:function(node,st,c){
var _915=st.compiler,_916=_915.generate,_917=_915.jsBuffer,_918=new _746(st),_919=node.methodtype==="-",_91a=node.selectors,_91b=node.arguments,_91c=node.returntype,_91d=[_91c?_91c.name:node.action?"void":"id"],_91e=_91c?_91c.protocols:null,_91f=_91a[0].name,_920=_915.options.generateObjJ;
if(_91e){
for(var i=0,size=_91e.length;i<size;i++){
var _921=_91e[i];
if(!_915.getProtocolDef(_921.name)){
_915.addWarning(_769("Cannot find protocol declaration for '"+_921.name+"'",_921,_915.source));
}
}
}
if(!_916){
_917.concat(_915.source.substring(_915.lastPos,node.start));
}
if(_920){
_915.jsBuffer.concat(_919?"- (":"+ (");
_915.jsBuffer.concat(_91d[0]);
_915.jsBuffer.concat(")");
}else{
_915.jsBuffer=_919?_915.imBuffer:_915.cmBuffer;
}
var size=_91b.length;
if(size>0){
for(var i=0;i<_91b.length;i++){
var _922=_91b[i],_923=_922.type,_924=_923?_923.name:"id",_925=_923?_923.protocols:null;
_91d.push(_924);
if(i===0){
_91f+=":";
}else{
_91f+=(_91a[i]?_91a[i].name:"")+":";
}
if(_925){
for(var j=0,size=_925.length;j<size;j++){
var _926=_925[j];
if(!_915.getProtocolDef(_926.name)){
_915.addWarning(_769("Cannot find protocol declaration for '"+_926.name+"'",_926,_915.source));
}
}
}
if(_920){
var _927=_91a[i];
if(i){
_915.jsBuffer.concat(" ");
}
_915.jsBuffer.concat((_927?_927.name:"")+":");
_915.jsBuffer.concat("(");
_915.jsBuffer.concat(_924);
if(_925){
_915.jsBuffer.concat(" <");
for(var j=0,size=_925.length;j<size;j++){
var _926=_925[j];
if(j){
_915.jsBuffer.concat(", ");
}
_915.jsBuffer.concat(_926.name);
}
_915.jsBuffer.concat(">");
}
_915.jsBuffer.concat(")");
c(_922.identifier,st,"IdentifierName");
}
}
}else{
if(_920){
var _928=_91a[0];
_915.jsBuffer.concat(_928.name,_928);
}
}
if(_920){
if(node.parameters){
_915.jsBuffer.concat(", ...");
}
}else{
if(_915.jsBuffer.isEmpty()){
_915.jsBuffer.concat(", ");
}
_915.jsBuffer.concat("new objj_method(sel_getUid(\"",node);
_915.jsBuffer.concat(_91f);
_915.jsBuffer.concat("\"), ");
}
if(node.body){
if(!_920){
_915.jsBuffer.concat("function");
if(_915.options.includeMethodFunctionNames){
_915.jsBuffer.concat(" $"+st.currentClassName()+"__"+_91f.replace(/:/g,"_"));
}
_915.jsBuffer.concat("(self, _cmd");
}
_918.methodType=node.methodtype;
_918.vars["self"]={type:"method base",scope:_918};
_918.vars["_cmd"]={type:"method base",scope:_918};
if(_91b){
for(var i=0;i<_91b.length;i++){
var _922=_91b[i],_929=_922.identifier.name;
if(!_920){
_915.jsBuffer.concat(", ");
_915.jsBuffer.concat(_929,_922.identifier);
}
_918.vars[_929]={type:"method argument",node:_922};
}
}
if(!_920){
_915.jsBuffer.concat(")\n");
}
if(!_916){
_915.lastPos=node.startOfBody;
}
_779+=_821;
_918.endOfScopeBody=true;
c(node.body,_918,"Statement");
_779=_779.substring(_77c);
if(!_916){
_915.jsBuffer.concat(_915.source.substring(_915.lastPos,node.body.end));
}
if(!_920){
_915.jsBuffer.concat("\n");
}
}else{
if(_920){
_915.jsBuffer.concat(";");
}else{
_915.jsBuffer.concat("Nil\n");
}
}
if(!_920){
if(_915.options.includeMethodArgumentTypeSignatures){
_915.jsBuffer.concat(","+JSON.stringify(_91d));
}
_915.jsBuffer.concat(")");
_915.jsBuffer=_917;
}
if(!_916){
_915.lastPos=node.end;
}
var def=st.classDef,_92a;
if(def){
_92a=_919?def.getInstanceMethod(_91f):def.getClassMethod(_91f);
}else{
def=st.protocolDef;
}
if(!def){
throw "InternalError: MethodDeclaration without ClassDeclaration or ProtocolDeclaration at line: "+(_744.getLineInfo(_915.source,node.start)).line;
}
if(!_92a){
var _92b=def.protocols;
if(_92b){
for(var i=0,size=_92b.length;i<size;i++){
var _92c=_92b[i],_92a=_919?_92c.getInstanceMethod(_91f):_92c.getClassMethod(_91f);
if(_92a){
break;
}
}
}
}
if(_92a){
var _92d=_92a.types;
if(_92d){
var _92e=_92d.length;
if(_92e>0){
var _92f=_92d[0];
if(_92f!==_91d[0]&&!(_92f==="id"&&_91c&&_91c.typeisclass)){
_915.addWarning(_769("Conflicting return type in implementation of '"+_91f+"': '"+_92f+"' vs '"+_91d[0]+"'",_91c||node.action||_91a[0],_915.source));
}
for(var i=1;i<_92e;i++){
var _930=_92d[i];
if(_930!==_91d[i]&&!(_930==="id"&&_91b[i-1].type.typeisclass)){
_915.addWarning(_769("Conflicting parameter types in implementation of '"+_91f+"': '"+_930+"' vs '"+_91d[i]+"'",_91b[i-1].type||_91b[i-1].identifier,_915.source));
}
}
}
}
}
var _931=new _7b1(_91f,_91d);
if(_919){
def.addInstanceMethod(_931);
}else{
def.addClassMethod(_931);
}
},MessageSendExpression:function(node,st,c){
var _932=st.compiler,_933=_932.generate,_934=_932.options.inlineMsgSendFunctions,_935=_932.jsBuffer,_936=node.object,_937=node.selectors,_938=node.arguments,_939=_938.length,_93a=_937[0],_93b=_93a?_93a.name:"",_93c=node.parameters,_93d=_932.options,_93e=_93d.generateObjJ;
for(var i=0;i<_939;i++){
if(i!==0){
var _93f=_937[i];
if(_93f){
_93b+=_93f.name;
}
}
_93b+=":";
}
if(!_933){
_935.concat(_932.source.substring(_932.lastPos,node.start));
_932.lastPos=_936?_936.start:node.arguments.length?node.arguments[0].start:node.end;
}else{
if(!_934){
var _940=_939;
if(_93c){
_940+=_93c.length;
}
}
}
if(node.superObject){
if(!_933){
_935.concat(" ");
}
if(_93e){
_935.concat("[super ");
}else{
if(_934){
_935.concat("(",node);
_935.concat(st.currentMethodType()==="+"?_932.currentSuperMetaClass:_932.currentSuperClass);
_935.concat(".method_dtable[\"",node);
_935.concat(_93b);
_935.concat("\"] || _objj_forward)(self",node);
}else{
_935.concat("objj_msgSendSuper",node);
if(_940<4){
_935.concat(""+_940);
}
_935.concat("({ receiver:self, super_class:"+(st.currentMethodType()==="+"?_932.currentSuperMetaClass:_932.currentSuperClass)+" }",node);
}
}
}else{
if(_933){
var _941=_936.type==="Identifier"&&!(st.currentMethodType()==="-"&&_932.getIvarForClass(_936.name,st)&&!st.getLvar(_936.name,true)),_942,_943;
if(_941){
var name=_936.name,_942=st.getLvar(name);
if(name==="self"){
_943=!_942||!_942.scope||_942.scope.assignmentToSelf;
}else{
_943=!!_942||!_932.getClassDef(name);
}
if(_943){
_935.concat("(",node);
c(_936,st,"Expression");
_935.concat(" == null ? null : ",node);
}
if(_934){
_935.concat("(",node);
}
c(_936,st,"Expression");
}else{
_943=true;
if(!st.receiverLevel){
st.receiverLevel=0;
}
_935.concat("((___r"+ ++st.receiverLevel,node);
_935.concat(" = ",node);
c(_936,st,"Expression");
_935.concat(")",node);
_935.concat(", ___r"+st.receiverLevel,node);
_935.concat(" == null ? null : ",node);
if(_934){
_935.concat("(",node);
}
_935.concat("___r"+st.receiverLevel,node);
if(!(st.maxReceiverLevel>=st.receiverLevel)){
st.maxReceiverLevel=st.receiverLevel;
}
}
if(_934){
_935.concat(".isa.method_msgSend[\"",node);
_935.concat(_93b,node);
_935.concat("\"] || _objj_forward)",node);
}else{
_935.concat(".isa.objj_msgSend",node);
}
}else{
_935.concat(" ");
_935.concat("objj_msgSend(");
_935.concat(_932.source.substring(_932.lastPos,_936.end));
}
}
if(_93e){
for(var i=0;i<_939||_939===0&&i===0;i++){
var _93b=_937[i];
_935.concat(" ");
_935.concat(_93b?_93b.name:"");
if(_939>0){
var _944=_938[i];
_935.concat(":");
c(_944,st,"Expression");
}
}
if(_93c){
for(var i=0,size=_93c.length;i<size;++i){
var _945=_93c[i];
_935.concat(", ");
c(_945,st,"Expression");
}
}
_935.concat("]");
}else{
var _946;
if(_933&&!node.superObject){
if(!_934){
if(_940<4){
_935.concat(""+_940,node);
}
}
if(_941){
_935.concat("(",node);
c(_936,st,"Expression");
}else{
_935.concat("(___r"+st.receiverLevel,node);
}
if(_93d.sourceMap&&_936.type==="Identifier"){
_932.jsBuffer=new _2f7();
c(_936,st,"Expression");
var _947=_932.jsBuffer.toString();
_946=_947+".isa.method_dtable[\""+_93b+"\"]";
_932.jsBuffer=_935;
}
}
_935.concat(", ",node);
if(_946){
_935.concat("(",node);
for(var i=0;i<_937.length;i++){
var _93f=_937[i];
if(_93f){
_935.concat(_946,_93f);
_935.concat(", ",node);
}
}
}
_935.concat("\"",node);
_935.concat(_93b,node);
_935.concat(_946?"\")":"\"",node);
if(_938){
for(var i=0;i<_938.length;i++){
var _944=_938[i];
_935.concat(", ",node);
if(!_933){
_932.lastPos=_944.start;
}
c(_944,st,"Expression");
if(!_933){
_935.concat(_932.source.substring(_932.lastPos,_944.end));
_932.lastPos=_944.end;
}
}
}
if(_93c){
for(var i=0;i<_93c.length;++i){
var _945=_93c[i];
_935.concat(", ",node);
if(!_933){
_932.lastPos=_945.start;
}
c(_945,st,"Expression");
if(!_933){
_935.concat(_932.source.substring(_932.lastPos,_945.end));
_932.lastPos=_945.end;
}
}
}
if(_933&&!node.superObject){
if(_943){
_935.concat(")",node);
}
if(!_941){
st.receiverLevel--;
}
}
_935.concat(")",node);
}
if(!_933){
_932.lastPos=node.end;
}
},SelectorLiteralExpression:function(node,st,c){
var _948=st.compiler,_949=_948.jsBuffer,_94a=_948.generate,_94b=_948.options.generateObjJ;
if(!_94a){
_949.concat(_948.source.substring(_948.lastPos,node.start));
_949.concat(" ");
}
_949.concat(_94b?"@selector(":"sel_getUid(\"",node);
_949.concat(node.selector);
_949.concat(_94b?")":"\")");
if(!_94a){
_948.lastPos=node.end;
}
},ProtocolLiteralExpression:function(node,st,c){
var _94c=st.compiler,_94d=_94c.jsBuffer,_94e=_94c.generate,_94f=_94c.options.generateObjJ;
if(!_94e){
_94d.concat(_94c.source.substring(_94c.lastPos,node.start));
_94d.concat(" ");
}
_94d.concat(_94f?"@protocol(":"objj_getProtocol(\"",node);
c(node.id,st,"IdentifierName");
_94d.concat(_94f?")":"\")");
if(!_94e){
_94c.lastPos=node.end;
}
},Reference:function(node,st,c){
var _950=st.compiler,_951=_950.jsBuffer,_952=_950.generate,_953=_950.options.generateObjJ;
if(!_952){
_951.concat(_950.source.substring(_950.lastPos,node.start));
_951.concat(" ");
}
if(_953){
_951.concat("@ref(",node);
_951.concat(node.element.name,node.element);
_951.concat(")",node);
}else{
_951.concat("function(__input) { if (arguments.length) return ",node);
c(node.element,st,"Expression");
_951.concat(" = __input; return ");
c(node.element,st,"Expression");
_951.concat("; }");
}
if(!_952){
_950.lastPos=node.end;
}
},Dereference:function(node,st,c){
var _954=st.compiler,_955=_954.jsBuffer,_956=_954.generate,_957=_954.options.generateObjJ;
_813(st,node.expr);
if(!_956){
_955.concat(_954.source.substring(_954.lastPos,node.start));
_954.lastPos=node.expr.start;
}
if(_957){
_955.concat("@deref(");
}
c(node.expr,st,"Expression");
if(!_956){
_955.concat(_954.source.substring(_954.lastPos,node.expr.end));
}
if(_957){
_955.concat(")");
}else{
_955.concat("()");
}
if(!_956){
_954.lastPos=node.end;
}
},ClassStatement:function(node,st,c){
var _958=st.compiler,_959=_958.jsBuffer,_95a=_958.options.generateObjJ;
if(!_958.generate){
_959.concat(_958.source.substring(_958.lastPos,node.start));
_958.lastPos=node.start;
_959.concat("//");
}
if(_95a){
_959.concat("@class ");
c(node.id,st,"IdentifierName");
}
var _95b=node.id.name;
if(_958.getTypeDef(_95b)){
throw _958.error_message(_95b+" is already declared as a type",node.id);
}
if(!_958.getClassDef(_95b)){
_958.classDefs[_95b]=new _77f(false,_95b);
}
st.vars[node.id.name]={type:"class",node:node.id};
},GlobalStatement:function(node,st,c){
var _95c=st.compiler,_95d=_95c.jsBuffer,_95e=_95c.options.generateObjJ;
if(!_95c.generate){
_95d.concat(_95c.source.substring(_95c.lastPos,node.start));
_95c.lastPos=node.start;
_95d.concat("//");
}
if(_95e){
_95d.concat("@global ");
c(node.id,st,"IdentifierName");
}
(st.rootScope()).vars[node.id.name]={type:"global",node:node.id};
},PreprocessStatement:function(node,st,c){
var _95f=st.compiler;
if(!_95f.generate){
_95f.jsBuffer.concat(_95f.source.substring(_95f.lastPos,node.start));
_95f.lastPos=node.start;
_95f.jsBuffer.concat("//");
}
},TypeDefStatement:function(node,st,c){
var _960=st.compiler,_961=_960.generate,_962=_960.jsBuffer,_963=node.typedefname.name,_964=_960.getTypeDef(_963),_965=new _746(st);
if(_964){
throw _960.error_message("Duplicate type definition "+_963,node.typedefname);
}
if(_960.getClassDef(_963)){
throw _960.error_message(_963+" is already declared as class",node.typedefname);
}
if(!_961){
_962.concat(_960.source.substring(_960.lastPos,node.start));
}
_962.concat("{var the_typedef = objj_allocateTypeDef(\""+_963+"\");",node);
_964=new _7b0(_963);
_960.typeDefs[_963]=_964;
_965.typeDef=_964;
_962.concat("\nobjj_registerTypeDef(the_typedef);\n");
_962.concat("}");
if(!_961){
_960.lastPos=node.end;
}
}});
});
function _335(aURL,_966){
this._URL=aURL;
this._isLocal=_966;
};
_2.FileDependency=_335;
_335.prototype.URL=function(){
return this._URL;
};
_335.prototype.isLocal=function(){
return this._isLocal;
};
_335.prototype.toMarkedString=function(){
var _967=(this.URL()).absoluteString();
return (this.isLocal()?_266:_265)+";"+_967.length+";"+_967;
};
_335.prototype.toString=function(){
return (this.isLocal()?"LOCAL: ":"STD: ")+this.URL();
};
var _968=0,_969=1,_96a=2,_96b=3,_96c=0;
function _306(_96d,_96e,aURL,_96f,_970,_971,_972){
if(arguments.length===0){
return this;
}
this._code=_96d;
this._function=_96f||null;
this._URL=_1e4(aURL||new CFURL("(Anonymous"+_96c++ +")"));
this._compiler=_970||null;
this._fileDependencies=_96e;
this._filenameTranslateDictionary=_971;
if(_972){
this._base64EncodedSourceMap=_972;
}
if(!_96e){
this._fileDependencyStatus=_96b;
this._fileDependencyCallbacks=[];
}else{
if(_96e.length){
this._fileDependencyStatus=_968;
this._fileDependencyCallbacks=[];
}else{
this._fileDependencyStatus=_96a;
}
}
if(this._function){
return;
}
if(!_970){
this.setCode(_96d);
}
};
_2.Executable=_306;
_306.prototype.path=function(){
return (this.URL()).path();
};
_306.prototype.URL=function(){
return this._URL;
};
_306.prototype.functionParameters=function(){
var _973=["global","objj_executeFile","objj_importFile"];
return _973;
};
_306.prototype.functionArguments=function(){
var _974=[_1,this.fileExecuter(),this.fileImporter()];
return _974;
};
_306.prototype.execute=function(){
if(this._compiler){
var _975=this.fileDependencies(),_a0=0,_976=_975.length;
this._compiler.pushImport((this.URL()).lastPathComponent());
for(;_a0<_976;++_a0){
var _977=_975[_a0],_978=_977.isLocal(),URL=_977.URL();
this.fileExecuter()(URL,_978);
}
this._compiler.popImport();
this.setCode(this._compiler.compilePass2(),this._compiler.map());
if(_979.printWarningsAndErrors(this._compiler,_2.messageOutputFormatInXML)){
throw "Compilation error";
}
this._compiler=null;
}
var _97a=_97b;
_97b=CFBundle.bundleContainingURL(this.URL());
var _97c=this._function.apply(_1,this.functionArguments());
_97b=_97a;
return _97c;
};
_306.prototype.code=function(){
return this._code;
};
_306.prototype.setCode=function(code,_97d){
this._code=code;
var _97e=(this.functionParameters()).join(",");
var _97f;
this._function=new Function(_97e,code);
};
_306.prototype.fileDependencies=function(){
return this._fileDependencies;
};
_306.prototype.setFileDependencies=function(_980){
this._fileDependencies=_980;
};
_306.prototype.hasLoadedFileDependencies=function(){
return this._fileDependencyStatus===_96a;
};
var _981=0,_982=[],_983={};
_306.prototype.loadFileDependencies=function(_984){
var _985=this._fileDependencyStatus;
if(_984){
if(_985===_96a){
return _984();
}
this._fileDependencyCallbacks.push(_984);
}
if(_985===_968){
if(_981){
throw "Can't load";
}
_986(this);
}
};
_306.prototype.setExecutableUnloadedFileDependencies=function(){
if(this._fileDependencyStatus===_96b){
this._fileDependencyStatus=_968;
}
};
_306.prototype.isExecutableCantStartLoadYetFileDependencies=function(){
return this._fileDependencyStatus===_96b;
};
function _986(_987){
_982.push(_987);
_987._fileDependencyStatus=_969;
var _988=_987.fileDependencies(),_a0=0,_989=_988.length,_98a=_987.referenceURL(),_98b=_98a.absoluteString(),_98c=_987.fileExecutableSearcher();
_981+=_989;
for(;_a0<_989;++_a0){
var _98d=_988[_a0],_98e=_98d.isLocal(),URL=_98d.URL(),_98f=(_98e&&_98b+" "||"")+URL;
if(_983[_98f]){
if(--_981===0){
_990();
}
continue;
}
_983[_98f]=YES;
_98c(URL,_98e,_991);
}
};
function _991(_992){
--_981;
if(_992._fileDependencyStatus===_968){
_986(_992);
}else{
if(_981===0){
_990();
}
}
};
function _990(){
var _993=_982,_a0=0,_994=_993.length;
_982=[];
for(;_a0<_994;++_a0){
_993[_a0]._fileDependencyStatus=_96a;
}
for(_a0=0;_a0<_994;++_a0){
var _995=_993[_a0],_996=_995._fileDependencyCallbacks,_997=0,_998=_996.length;
for(;_997<_998;++_997){
_996[_997]();
}
_995._fileDependencyCallbacks=[];
}
};
_306.prototype.referenceURL=function(){
if(this._referenceURL===_32){
this._referenceURL=new CFURL(".",this.URL());
}
return this._referenceURL;
};
_306.prototype.fileImporter=function(){
return _306.fileImporterForURL(this.referenceURL());
};
_306.prototype.fileExecuter=function(){
return _306.fileExecuterForURL(this.referenceURL());
};
_306.prototype.fileExecutableSearcher=function(){
return _306.fileExecutableSearcherForURL(this.referenceURL());
};
var _999={};
_306.fileExecuterForURL=function(aURL){
var _99a=_1e4(aURL),_99b=_99a.absoluteString(),_99c=_999[_99b];
if(!_99c){
_99c=function(aURL,_99d,_99e){
_306.fileExecutableSearcherForURL(_99a)(aURL,_99d,function(_99f){
if(!_99f.hasLoadedFileDependencies()){
throw "No executable loaded for file at URL "+aURL;
}
_99f.execute(_99e);
});
};
_999[_99b]=_99c;
}
return _99c;
};
var _9a0={};
_306.fileImporterForURL=function(aURL){
var _9a1=_1e4(aURL),_9a2=_9a1.absoluteString(),_9a3=_9a0[_9a2];
if(!_9a3){
_9a3=function(aURL,_9a4,_9a5){
_17d();
_306.fileExecutableSearcherForURL(_9a1)(aURL,_9a4,function(_9a6){
_9a6.loadFileDependencies(function(){
_9a6.execute();
_17e();
if(_9a5){
_9a5();
}
});
});
};
_9a0[_9a2]=_9a3;
}
return _9a3;
};
var _9a7={},_9a8={};
function _291(x){
var _9a9=0;
for(var k in x){
if(x.hasOwnProperty(k)){
++_9a9;
}
}
return _9a9;
};
_306.resetCachedFileExecutableSearchers=function(){
_9a7={};
_9a8={};
_9a0={};
_999={};
_983={};
};
_306.fileExecutableSearcherForURL=function(_9aa){
var _9ab=_9aa.absoluteString(),_9ac=_9a7[_9ab];
if(!_9ac){
var _9ad=_306.filenameTranslateDictionary?_306.filenameTranslateDictionary():null;
_9ac=function(aURL,_9ae,_9af){
var _9b0=(_9ae&&_9aa||"")+aURL,_9b1=_9a8[_9b0];
if(_9b1){
return _9b2(_9b1);
}
var _9b3=aURL instanceof CFURL&&aURL.scheme();
if(_9ae||_9b3){
if(!_9b3){
aURL=new CFURL(aURL,_9aa);
}
_1cd.resolveResourceAtURL(aURL,NO,_9b2,_9ad);
}else{
_1cd.resolveResourceAtURLSearchingIncludeURLs(aURL,_9b2);
}
function _9b2(_9b4){
if(!_9b4){
var _9b5=_2.ObjJCompiler?_2.ObjJCompiler.currentCompileFile:null;
throw new Error("Could not load file at "+aURL+(_9b5?" when compiling "+_9b5:"")+"\nwith includeURLs: "+_1cd.includeURLs());
}
_9a8[_9b0]=_9b4;
_9af(new _979(_9b4.URL(),_9ad));
};
};
_9a7[_9ab]=_9ac;
}
return _9ac;
};
var _9b6=55296;
var _9b7=56319;
var _9b8=56320;
var _9b9=57343;
var _9ba=65533;
var _9bb=[0,192,224,240,248,252];
function _9bc(_9bd){
var _9be="";
var _9bf=0;
for(var i=0;i<_9bd.length;i++){
var c=_9bd.charCodeAt(i);
if(c<128){
continue;
}
if(i>_9bf){
_9be+=_9bd.substring(_9bf,i);
}
if(c>=_9b6&&c<=_9b7){
i++;
if(i<_9bd.length){
var c2=_9bd.charCodeAt(i);
if(c2>=_9b8&&c2<=_9b9){
c=(c-_9b6<<10)+(c2-_9b8)+65536;
}else{
return null;
}
}else{
return null;
}
}else{
if(c>=_9b8&&c<=_9b9){
return null;
}
}
_9bf=i+1;
enc=[];
var cc=c;
if(cc>=1114112){
cc=2048;
c=_9ba;
}
if(cc>=65536){
enc.unshift(String.fromCharCode((c|128)&191));
c>>=6;
}
if(cc>=2048){
enc.unshift(String.fromCharCode((c|128)&191));
c>>=6;
}
if(cc>=128){
enc.unshift(String.fromCharCode((c|128)&191));
c>>=6;
}
enc.unshift(String.fromCharCode(c|_9bb[enc.length]));
_9be+=enc.join("");
}
if(_9bf===0){
return _9bd;
}
if(i>_9bf){
_9be+=_9bd.substring(_9bf,i);
}
return _9be;
};
var _9c0={};
var _9c1={};
var _9c2="";
function _979(aURL,_9c3){
aURL=_1e4(aURL);
var _9c4=aURL.absoluteString(),_9c5=_9c0[_9c4];
if(_9c5){
return _9c5;
}
_9c0[_9c4]=this;
var _9c6=(_1cd.resourceAtURL(aURL)).contents(),_9c7=NULL,_9c8=(aURL.pathExtension()).toLowerCase();
this._hasExecuted=NO;
if(_9c6.match(/^@STATIC;/)){
_9c7=_9c9(_9c6,aURL);
}else{
if((_9c8==="j"||!_9c8)&&!_9c6.match(/^{/)){
var _9ca=_9c1||{};
this.cachedIncludeFileSearchResultsContent={};
this.cachedIncludeFileSearchResultsURL={};
_9cb(this,_9c6,aURL,_9ca,_9c3);
return;
}else{
_9c7=new _306(_9c6,[],aURL);
}
}
_306.apply(this,[_9c7.code(),_9c7.fileDependencies(),aURL,_9c7._function,_9c7._compiler,_9c3]);
};
_2.FileExecutable=_979;
_979.prototype=new _306();
var _9cb=function(self,_9cc,aURL,_9cd,_9ce){
var _9cf=_9cd.acornOptions||(_9cd.acornOptions={});
_9cf.preprocessGetIncludeFile=function(_9d0,_9d1){
var _9d2=new CFURL(".",aURL),_9d3=new CFURL(_9d0);
var _9d4=(_9d1&&_9d2||"")+_9d3,_9d5=self.cachedIncludeFileSearchResultsContent[_9d4];
if(!_9d5){
var _9d6=_9d3 instanceof CFURL&&_9d3.scheme(),_9d7=NO;
function _9d8(_9d9){
var _9da=_9d9&&_9d9.contents(),_9db=_9da&&_9da.charCodeAt(_9da.length-1);
if(_9da==null){
throw new Error("Can't load file "+_9d3);
}
if(_9db!==10&&_9db!==13&&_9db!==8232&&_9db!==8233){
_9da+="\n";
}
self.cachedIncludeFileSearchResultsContent[_9d4]=_9da;
self.cachedIncludeFileSearchResultsURL[_9d4]=_9d9.URL();
if(_9d7){
_9cb(self,_9cc,aURL,_9cd,_9ce);
}
};
if(_9d1||_9d6){
if(!_9d6){
_9d3=new CFURL(_9d3,new CFURL(_9ce[aURL.lastPathComponent()]||".",_9d2));
}
_1cd.resolveResourceAtURL(_9d3,NO,_9d8);
}else{
_1cd.resolveResourceAtURLSearchingIncludeURLs(_9d3,_9d8);
}
_9d5=self.cachedIncludeFileSearchResultsContent[_9d4];
}
if(_9d5){
return {include:_9d5,sourceFile:self.cachedIncludeFileSearchResultsURL[_9d4]};
}else{
_9d7=YES;
return null;
}
};
var _9dc=_9c1&&_9c1.includeFiles,_9dd=true;
_9cf.preIncludeFiles=[];
if(_9dc){
for(var i=0,size=_9dc.length;i<size;i++){
var _9de=_1e4(_9dc[i]);
try{
var _9df=_1cd.resourceAtURL(_1e4(_9de));
}
catch(e){
_1cd.resolveResourcesAtURLs(_9dc.map(function(u){
return _1e4(u);
}),function(){
_9cb(self,_9cc,aURL,_9cd,_9ce);
});
_9dd=false;
break;
}
if(_9df){
if(_9df.isNotFound()){
throw new Error("--include file not found "+includeUrl);
}
var _9e0=_9df.contents();
var _9e1=_9e0.charCodeAt(_9e0.length-1);
if(_9e1!==10&&_9e1!==13&&_9e1!==8232&&_9e1!==8233){
_9e0+="\n";
}
_9cf.preIncludeFiles.push({include:_9e0,sourceFile:_9de.toString()});
}
}
}
if(_9dd){
var _9e2=_2.ObjJCompiler.compileFileDependencies(_9cc,aURL,_9cd);
var _9e3=_9e2.warningsAndErrors;
if(_9e3&&_9e3.length===1&&_9e3[0].message.indexOf("file not found")>-1){
return;
}
if(_979.printWarningsAndErrors(_9e2,_2.messageOutputFormatInXML)){
throw "Compilation error";
}
var _9e4=_9e2.dependencies.map(function(_9e5){
return new _335(new CFURL(_9e5.url),_9e5.isLocal);
});
}
if(self.isExecutableCantStartLoadYetFileDependencies()){
self.setFileDependencies(_9e4);
self.setExecutableUnloadedFileDependencies();
self.loadFileDependencies();
}else{
if(self._fileDependencyStatus==null){
executable=new _306(_9e2&&_9e2.jsBuffer?_9e2.jsBuffer.toString():null,_9e4,aURL,null,_9e2);
_306.apply(self,[executable.code(),executable.fileDependencies(),aURL,executable._function,executable._compiler,_9ce]);
}
}
};
_979.resetFileExecutables=function(){
_9c0={};
_9e6={};
};
_979.prototype.execute=function(_9e7){
if(this._hasExecuted&&!_9e7){
return;
}
this._hasExecuted=YES;
_306.prototype.execute.call(this);
};
_979.prototype.hasExecuted=function(){
return this._hasExecuted;
};
function _9c9(_9e8,aURL){
var _9e9=new _11f(_9e8);
var _9ea=NULL,code="",_9eb=[],_9ec;
while(_9ea=_9e9.getMarker()){
var text=_9e9.getString();
if(_9ea===_264){
code+=text;
}else{
if(_9ea===_265){
_9eb.push(new _335(new CFURL(text),NO));
}else{
if(_9ea===_266){
_9eb.push(new _335(new CFURL(text),YES));
}else{
if(_9ea===MARKER_SOURCE_MAP){
_9ec=text;
}
}
}
}
}
var fn=_979._lookupCachedFunction(aURL);
if(fn){
return new _306(code,_9eb,aURL,fn,null,null,_9ec);
}
return new _306(code,_9eb,aURL,null,null,null,_9ec);
};
var _9e6={};
_979._cacheFunction=function(aURL,fn){
aURL=typeof aURL==="string"?aURL:aURL.absoluteString();
_9e6[aURL]=fn;
};
_979._lookupCachedFunction=function(aURL){
aURL=typeof aURL==="string"?aURL:aURL.absoluteString();
return _9e6[aURL];
};
_979.setCurrentGccCompilerFlags=function(_9ed){
if(_9c2===_9ed){
return;
}
_9c2=_9ed;
var _9ee=_2.ObjJCompiler.parseGccCompilerFlags(_9ed);
_979.setCurrentCompilerFlags(_9ee);
};
_979.currentGccCompilerFlags=function(_9ef){
return _9c2;
};
_979.setCurrentCompilerFlags=function(_9f0){
_9c1=_9f0;
if(_9c1.transformNamedFunctionDeclarationToAssignment==null){
_9c1.transformNamedFunctionDeclarationToAssignment=true;
}
if(_9c1.sourceMap==null){
_9c1.sourceMap=false;
}
if(_9c1.inlineMsgSendFunctions==null){
_9c1.inlineMsgSendFunctions=false;
}
};
_979.currentCompilerFlags=function(_9f1){
return _9c1;
};
_979.printWarningsAndErrors=function(_9f2,_9f3){
var _9f4=[],_9f5=false;
for(var i=0;i<_9f2.warningsAndErrors.length;i++){
var _9f6=_9f2.warningsAndErrors[i],_9f7=_9f2.prettifyMessage(_9f6);
_9f5=_9f5||_9f6.messageType==="ERROR";
console.log(_9f7);
}
return _9f5;
};
_979.setCurrentCompilerFlags({});
var _9f8=1,_9f9=2,_9fa=4,_9fb=8;
objj_ivar=function(_9fc,_9fd){
this.name=_9fc;
this.type=_9fd;
};
objj_method=function(_9fe,_9ff,_a00){
var _a01=_9ff||function(_a02,_a03){
CPException.isa.objj_msgSend2(CPException,"raise:reason:",CPInternalInconsistencyException,_a02.isa.method_msgSend0(self,"className")+" does not have an implementation for selector '"+_a03+"'");
};
_a01.method_name=_9fe;
_a01.method_imp=_9ff;
_a01.method_types=_a00;
return _a01;
};
objj_class=function(_a04){
this.isa=NULL;
this.version=0;
this.super_class=NULL;
this.name=NULL;
this.info=0;
this.ivar_list=[];
this.ivar_store=function(){
};
this.ivar_dtable=this.ivar_store.prototype;
this.method_list=[];
this.method_store=function(){
};
this.method_dtable=this.method_store.prototype;
this.protocol_list=[];
this.allocator=function(){
};
this._UID=-1;
};
objj_protocol=function(_a05){
this.name=_a05;
this.instance_methods={};
this.class_methods={};
};
objj_object=function(){
this.isa=NULL;
this._UID=-1;
};
objj_typeDef=function(_a06){
this.name=_a06;
};
class_getName=function(_a07){
if(_a07==Nil){
return "";
}
return _a07.name;
};
class_isMetaClass=function(_a08){
if(!_a08){
return NO;
}
return _a08.info&_9f9;
};
class_getSuperclass=function(_a09){
if(_a09==Nil){
return Nil;
}
return _a09.super_class;
};
class_setSuperclass=function(_a0a,_a0b){
_a0a.super_class=_a0b;
_a0a.isa.super_class=_a0b.isa;
};
class_addIvar=function(_a0c,_a0d,_a0e){
var _a0f=_a0c.allocator.prototype;
if(typeof _a0f[_a0d]!="undefined"){
return NO;
}
var ivar=new objj_ivar(_a0d,_a0e);
_a0c.ivar_list.push(ivar);
_a0c.ivar_dtable[_a0d]=ivar;
_a0f[_a0d]=NULL;
return YES;
};
class_addIvars=function(_a10,_a11){
var _a12=0,_a13=_a11.length,_a14=_a10.allocator.prototype;
for(;_a12<_a13;++_a12){
var ivar=_a11[_a12],name=ivar.name;
if(typeof _a14[name]==="undefined"){
_a10.ivar_list.push(ivar);
_a10.ivar_dtable[name]=ivar;
_a14[name]=NULL;
}
}
};
class_copyIvarList=function(_a15){
return _a15.ivar_list.slice(0);
};
class_addMethod=function(_a16,_a17,_a18,_a19){
var _a1a=new objj_method(_a17,_a18,_a19);
_a16.method_list.push(_a1a);
_a16.method_dtable[_a17]=_a1a;
if(!(_a16.info&_9f9)&&(_a16.info&_9f9?_a16:_a16.isa).isa===(_a16.info&_9f9?_a16:_a16.isa)){
class_addMethod(_a16.info&_9f9?_a16:_a16.isa,_a17,_a18,_a19);
}
return YES;
};
class_addMethods=function(_a1b,_a1c){
var _a1d=0,_a1e=_a1c.length,_a1f=_a1b.method_list,_a20=_a1b.method_dtable;
for(;_a1d<_a1e;++_a1d){
var _a21=_a1c[_a1d];
_a1f.push(_a21);
_a20[_a21.method_name]=_a21;
}
if(!(_a1b.info&_9f9)&&(_a1b.info&_9f9?_a1b:_a1b.isa).isa===(_a1b.info&_9f9?_a1b:_a1b.isa)){
class_addMethods(_a1b.info&_9f9?_a1b:_a1b.isa,_a1c);
}
};
class_getInstanceMethod=function(_a22,_a23){
if(!_a22||!_a23){
return NULL;
}
var _a24=_a22.method_dtable[_a23];
return _a24?_a24:NULL;
};
class_getInstanceVariable=function(_a25,_a26){
if(!_a25||!_a26){
return NULL;
}
var _a27=_a25.ivar_dtable[_a26];
return _a27;
};
class_getClassMethod=function(_a28,_a29){
if(!_a28||!_a29){
return NULL;
}
var _a2a=(_a28.info&_9f9?_a28:_a28.isa).method_dtable[_a29];
return _a2a?_a2a:NULL;
};
class_respondsToSelector=function(_a2b,_a2c){
return class_getClassMethod(_a2b,_a2c)!=NULL;
};
class_copyMethodList=function(_a2d){
return _a2d.method_list.slice(0);
};
class_getVersion=function(_a2e){
return _a2e.version;
};
class_setVersion=function(_a2f,_a30){
_a2f.version=parseInt(_a30,10);
};
class_replaceMethod=function(_a31,_a32,_a33){
if(!_a31||!_a32){
return NULL;
}
var _a34=_a31.method_dtable[_a32],_a35=_a34.method_imp,_a36=new objj_method(_a34.method_name,_a33,_a34.method_types);
_a36.displayName=_a34.displayName;
_a31.method_dtable[_a32]=_a36;
var _a37=_a31.method_list.indexOf(_a34);
if(_a37!==-1){
_a31.method_list[_a37]=_a36;
}else{
_a31.method_list.push(_a36);
}
return _a35;
};
class_addProtocol=function(_a38,_a39){
if(!_a39||class_conformsToProtocol(_a38,_a39)){
return;
}
(_a38.protocol_list||(_a38.protocol_list=[])).push(_a39);
return true;
};
class_conformsToProtocol=function(_a3a,_a3b){
if(!_a3b){
return false;
}
while(_a3a){
var _a3c=_a3a.protocol_list,size=_a3c?_a3c.length:0;
for(var i=0;i<size;i++){
var p=_a3c[i];
if(p.name===_a3b.name){
return true;
}
if(protocol_conformsToProtocol(p,_a3b)){
return true;
}
}
_a3a=class_getSuperclass(_a3a);
}
return false;
};
class_copyProtocolList=function(_a3d){
var _a3e=_a3d.protocol_list;
return _a3e?_a3e.slice(0):[];
};
protocol_conformsToProtocol=function(p1,p2){
if(!p1||!p2){
return false;
}
if(p1.name===p2.name){
return true;
}
var _a3f=p1.protocol_list,size=_a3f?_a3f.length:0;
for(var i=0;i<size;i++){
var p=_a3f[i];
if(p.name===p2.name){
return true;
}
if(protocol_conformsToProtocol(p,p2)){
return true;
}
}
return false;
};
var _a40=Object.create(null);
objj_allocateProtocol=function(_a41){
var _a42=new objj_protocol(_a41);
return _a42;
};
objj_registerProtocol=function(_a43){
_a40[_a43.name]=_a43;
};
protocol_getName=function(_a44){
return _a44.name;
};
protocol_addMethodDescription=function(_a45,_a46,_a47,_a48,_a49){
if(!_a45||!_a46){
return;
}
if(_a48){
(_a49?_a45.instance_methods:_a45.class_methods)[_a46]=new objj_method(_a46,null,_a47);
}
};
protocol_addMethodDescriptions=function(_a4a,_a4b,_a4c,_a4d){
if(!_a4c){
return;
}
var _a4e=0,_a4f=_a4b.length,_a50=_a4d?_a4a.instance_methods:_a4a.class_methods;
for(;_a4e<_a4f;++_a4e){
var _a51=_a4b[_a4e];
_a50[_a51.method_name]=_a51;
}
};
protocol_copyMethodDescriptionList=function(_a52,_a53,_a54){
if(!_a53){
return [];
}
var _a55=_a54?_a52.instance_methods:_a52.class_methods,_a56=[];
for(var _a57 in _a55){
if(_a55.hasOwnProperty(_a57)){
_a56.push(_a55[_a57]);
}
}
return _a56;
};
protocol_addProtocol=function(_a58,_a59){
if(!_a58||!_a59){
return;
}
(_a58.protocol_list||(_a58.protocol_list=[])).push(_a59);
};
var _a5a=Object.create(null);
objj_allocateTypeDef=function(_a5b){
var _a5c=new objj_typeDef(_a5b);
return _a5c;
};
objj_registerTypeDef=function(_a5d){
_a5a[_a5d.name]=_a5d;
};
typeDef_getName=function(_a5e){
return _a5e.name;
};
var _a5f=function(_a60){
var meta=_a60.info&_9f9?_a60:_a60.isa;
if(_a60.info&_9f9){
_a60=objj_getClass(_a60.name);
}
if(_a60.super_class&&!((_a60.super_class.info&_9f9?_a60.super_class:_a60.super_class.isa).info&_9fa)){
_a5f(_a60.super_class);
}
if(!(meta.info&_9fa)&&!(meta.info&_9fb)){
meta.info=(meta.info|_9fb)&~0;
_a60.objj_msgSend=objj_msgSendFast;
_a60.objj_msgSend0=objj_msgSendFast0;
_a60.objj_msgSend1=objj_msgSendFast1;
_a60.objj_msgSend2=objj_msgSendFast2;
_a60.objj_msgSend3=objj_msgSendFast3;
meta.objj_msgSend=objj_msgSendFast;
meta.objj_msgSend0=objj_msgSendFast0;
meta.objj_msgSend1=objj_msgSendFast1;
meta.objj_msgSend2=objj_msgSendFast2;
meta.objj_msgSend3=objj_msgSendFast3;
_a60.method_msgSend=_a60.method_dtable;
meta.method_msgSend=meta.method_dtable;
meta.objj_msgSend0(_a60,"initialize");
meta.info=(meta.info|_9fa)&~_9fb;
}
};
_objj_forward=function(self,_a61){
var isa=self.isa,meta=isa.info&_9f9?isa:isa.isa;
if(!(meta.info&_9fa)&&!(meta.info&_9fb)){
_a5f(isa);
}
var _a62=isa.method_msgSend[_a61];
if(_a62){
return _a62.apply(isa,arguments);
}
_a62=isa.method_dtable[_a63];
if(_a62){
var _a64=_a62(self,_a63,_a61);
if(_a64&&_a64!==self){
arguments[0]=_a64;
return _a64.isa.objj_msgSend.apply(_a64.isa,arguments);
}
}
_a62=isa.method_dtable[_a65];
if(_a62){
var _a66=isa.method_dtable[_a67];
if(_a66){
var _a68=_a62(self,_a65,_a61);
if(_a68){
var _a69=objj_lookUpClass("CPInvocation");
if(_a69){
var _a6a=_a69.isa.objj_msgSend1(_a69,_a6b,_a68),_a0=0,_a6c=arguments.length;
if(_a6a!=null){
var _a6d=_a6a.isa;
for(;_a0<_a6c;++_a0){
_a6d.objj_msgSend2(_a6a,_a6e,arguments[_a0],_a0);
}
}
_a66(self,_a67,_a6a);
return _a6a==null?null:_a6d.objj_msgSend0(_a6a,_a6f);
}
}
}
}
_a62=isa.method_dtable[_a70];
if(_a62){
return _a62(self,_a70,_a61);
}
throw class_getName(isa)+" does not implement doesNotRecognizeSelector:. Did you forget a superclass for "+class_getName(isa)+"?";
};
class_getMethodImplementation=function(_a71,_a72){
if(!((_a71.info&_9f9?_a71:_a71.isa).info&_9fa)){
_a5f(_a71);
}
var _a73=_a71.method_dtable[_a72]||_objj_forward;
return _a73;
};
var _a74=Object.create(null);
objj_enumerateClassesUsingBlock=function(_a75){
for(var key in _a74){
_a75(_a74[key]);
}
};
objj_allocateClassPair=function(_a76,_a77){
var _a78=new objj_class(_a77),_a79=new objj_class(_a77),_a7a=_a78;
if(_a76){
_a7a=_a76;
while(_a7a.superclass){
_a7a=_a7a.superclass;
}
_a78.allocator.prototype=new _a76.allocator();
_a78.ivar_dtable=_a78.ivar_store.prototype=new _a76.ivar_store();
_a78.method_dtable=_a78.method_store.prototype=new _a76.method_store();
_a79.method_dtable=_a79.method_store.prototype=new _a76.isa.method_store();
_a78.super_class=_a76;
_a79.super_class=_a76.isa;
}else{
_a78.allocator.prototype=new objj_object();
}
_a78.isa=_a79;
_a78.name=_a77;
_a78.info=_9f8;
_a78._UID=objj_generateObjectUID();
_a78.init=true;
_a79.isa=_a7a.isa;
_a79.name=_a77;
_a79.info=_9f9;
_a79._UID=objj_generateObjectUID();
_a79.init=true;
return _a78;
};
var _97b=nil;
objj_registerClassPair=function(_a7b){
_1[_a7b.name]=_a7b;
_a74[_a7b.name]=_a7b;
_1eb(_a7b,_97b);
};
objj_resetRegisterClasses=function(){
for(var key in _a74){
delete _1[key];
}
_a74=Object.create(null);
_a40=Object.create(null);
_a5a=Object.create(null);
_1ee();
};
class_createInstance=function(_a7c){
if(!_a7c){
throw new Error("*** Attempting to create object with Nil class.");
}
var _a7d=new _a7c.allocator();
_a7d.isa=_a7c;
_a7d._UID=objj_generateObjectUID();
return _a7d;
};
var _a7e=function(){
};
_a7e.prototype.member=false;
with(new _a7e()){
member=true;
}
if((new _a7e()).member){
var _a7f=class_createInstance;
class_createInstance=function(_a80){
var _a81=_a7f(_a80);
if(_a81){
var _a82=_a81.isa,_a83=_a82;
while(_a82){
var _a84=_a82.ivar_list,_a85=_a84.length;
while(_a85--){
_a81[_a84[_a85].name]=NULL;
}
_a82=_a82.super_class;
}
_a81.isa=_a83;
}
return _a81;
};
}
object_getClassName=function(_a86){
if(!_a86){
return "";
}
var _a87=_a86.isa;
return _a87?class_getName(_a87):"";
};
objj_lookUpClass=function(_a88){
var _a89=_a74[_a88];
return _a89?_a89:Nil;
};
objj_getClass=function(_a8a){
var _a8b=_a74[_a8a];
if(!_a8b){
}
return _a8b?_a8b:Nil;
};
objj_getClassList=function(_a8c,_a8d){
for(var _a8e in _a74){
_a8c.push(_a74[_a8e]);
if(_a8d&&--_a8d===0){
break;
}
}
return _a8c.length;
};
objj_getMetaClass=function(_a8f){
var _a90=objj_getClass(_a8f);
return _a90.info&_9f9?_a90:_a90.isa;
};
objj_getProtocol=function(_a91){
return _a40[_a91];
};
objj_getTypeDef=function(_a92){
return _a5a[_a92];
};
ivar_getName=function(_a93){
return _a93.name;
};
ivar_getTypeEncoding=function(_a94){
return _a94.type;
};
objj_msgSend=function(_a95,_a96){
if(_a95==nil){
return nil;
}
var isa=_a95.isa;
if(isa.init){
_a5f(isa);
}
var _a97=isa.method_dtable[_a96];
var _a98=_a97?_a97.method_imp:_objj_forward;
switch(arguments.length){
case 2:
return _a98(_a95,_a96);
case 3:
return _a98(_a95,_a96,arguments[2]);
case 4:
return _a98(_a95,_a96,arguments[2],arguments[3]);
case 5:
return _a98(_a95,_a96,arguments[2],arguments[3],arguments[4]);
case 6:
return _a98(_a95,_a96,arguments[2],arguments[3],arguments[4],arguments[5]);
case 7:
return _a98(_a95,_a96,arguments[2],arguments[3],arguments[4],arguments[5],arguments[6]);
}
return _a98.apply(_a95,arguments);
};
objj_msgSendSuper=function(_a99,_a9a){
var _a9b=_a99.super_class;
arguments[0]=_a99.receiver;
if(!((_a9b.info&_9f9?_a9b:_a9b.isa).info&_9fa)){
_a5f(_a9b);
}
var _a9c=_a9b.method_dtable[_a9a]||_objj_forward;
return _a9c.apply(_a99.receiver,arguments);
};
objj_msgSendSuper0=function(_a9d,_a9e){
return (_a9d.super_class.method_dtable[_a9e]||_objj_forward)(_a9d.receiver,_a9e);
};
objj_msgSendSuper1=function(_a9f,_aa0,arg0){
return (_a9f.super_class.method_dtable[_aa0]||_objj_forward)(_a9f.receiver,_aa0,arg0);
};
objj_msgSendSuper2=function(_aa1,_aa2,arg0,arg1){
return (_aa1.super_class.method_dtable[_aa2]||_objj_forward)(_aa1.receiver,_aa2,arg0,arg1);
};
objj_msgSendSuper3=function(_aa3,_aa4,arg0,arg1,arg2){
return (_aa3.super_class.method_dtable[_aa4]||_objj_forward)(_aa3.receiver,_aa4,arg0,arg1,arg2);
};
objj_msgSendFast=function(_aa5,_aa6){
return (this.method_dtable[_aa6]||_objj_forward).apply(_aa5,arguments);
};
var _aa7=function(_aa8,_aa9){
_a5f(this);
return this.objj_msgSend.apply(this,arguments);
};
objj_msgSendFast0=function(_aaa,_aab){
return (this.method_dtable[_aab]||_objj_forward)(_aaa,_aab);
};
var _aac=function(_aad,_aae){
_a5f(this);
return this.objj_msgSend0(_aad,_aae);
};
objj_msgSendFast1=function(_aaf,_ab0,arg0){
return (this.method_dtable[_ab0]||_objj_forward)(_aaf,_ab0,arg0);
};
var _ab1=function(_ab2,_ab3,arg0){
_a5f(this);
return this.objj_msgSend1(_ab2,_ab3,arg0);
};
objj_msgSendFast2=function(_ab4,_ab5,arg0,arg1){
return (this.method_dtable[_ab5]||_objj_forward)(_ab4,_ab5,arg0,arg1);
};
var _ab6=function(_ab7,_ab8,arg0,arg1){
_a5f(this);
return this.objj_msgSend2(_ab7,_ab8,arg0,arg1);
};
objj_msgSendFast3=function(_ab9,_aba,arg0,arg1,arg2){
return (this.method_dtable[_aba]||_objj_forward)(_ab9,_aba,arg0,arg1,arg2);
};
var _abb=function(_abc,_abd,arg0,arg1,arg2){
_a5f(this);
return this.objj_msgSend3(_abc,_abd,arg0,arg1,arg2);
};
method_getName=function(_abe){
return _abe.method_name;
};
method_copyReturnType=function(_abf){
var _ac0=_abf.method_types;
if(_ac0){
var _ac1=_ac0[0];
return _ac1!=NULL?_ac1:NULL;
}else{
return NULL;
}
};
method_copyArgumentType=function(_ac2,_ac3){
switch(_ac3){
case 0:
return "id";
case 1:
return "SEL";
default:
var _ac4=_ac2.method_types;
if(_ac4){
var _ac5=_ac4[_ac3-1];
return _ac5!=NULL?_ac5:NULL;
}else{
return NULL;
}
}
};
method_getNumberOfArguments=function(_ac6){
var _ac7=_ac6.method_types;
return _ac7?_ac7.length+1:(_ac6.method_name.match(/:/g)||[]).length+2;
};
method_getImplementation=function(_ac8){
return _ac8.method_imp;
};
method_setImplementation=function(_ac9,_aca){
var _acb=_ac9.method_imp;
_ac9.method_imp=_aca;
return _acb;
};
method_exchangeImplementations=function(lhs,rhs){
var _acc=method_getImplementation(lhs),_acd=method_getImplementation(rhs);
method_setImplementation(lhs,_acd);
method_setImplementation(rhs,_acc);
};
sel_getName=function(_ace){
return _ace?_ace:"<null selector>";
};
sel_getUid=function(_acf){
return _acf;
};
sel_isEqual=function(lhs,rhs){
return lhs===rhs;
};
sel_registerName=function(_ad0){
return _ad0;
};
objj_class.prototype.toString=objj_object.prototype.toString=function(){
var isa=this.isa;
if(class_getInstanceMethod(isa,_ad1)){
return isa.objj_msgSend0(this,_ad1);
}
if(class_isMetaClass(isa)){
return this.name;
}
return "["+isa.name+" Object](-description not implemented)";
};
objj_class.prototype.objj_msgSend=_aa7;
objj_class.prototype.objj_msgSend0=_aac;
objj_class.prototype.objj_msgSend1=_ab1;
objj_class.prototype.objj_msgSend2=_ab6;
objj_class.prototype.objj_msgSend3=_abb;
objj_class.prototype.method_msgSend=Object.create(null);
var _ad1=sel_getUid("description"),_a63=sel_getUid("forwardingTargetForSelector:"),_a65=sel_getUid("methodSignatureForSelector:"),_a67=sel_getUid("forwardInvocation:"),_a70=sel_getUid("doesNotRecognizeSelector:"),_a6b=sel_getUid("invocationWithMethodSignature:"),_ad2=sel_getUid("setTarget:"),_ad3=sel_getUid("setSelector:"),_a6e=sel_getUid("setArgument:atIndex:"),_a6f=sel_getUid("returnValue");
objj_eval=function(_ad4){
var url=_2.pageURL;
var _ad5=_2.asyncLoader;
_2.asyncLoader=NO;
var _ad6=_2.preprocess(_ad4,url,0);
if(!_ad6.hasLoadedFileDependencies()){
_ad6.loadFileDependencies();
}
_1._objj_eval_scope={};
_1._objj_eval_scope.objj_executeFile=_306.fileExecuterForURL(url);
_1._objj_eval_scope.objj_importFile=_306.fileImporterForURL(url);
var code="with(_objj_eval_scope){"+_ad6._code+"\n//*/\n}";
var _ad7;
_ad7=eval(code);
_2.asyncLoader=_ad5;
return _ad7;
};
_2.objj_eval=objj_eval;
_17d();
var _ad8=new CFURL(window.location.href),_ad9=document.getElementsByTagName("base"),_ada=_ad9.length;
if(_ada>0){
var _adb=_ad9[_ada-1],_adc=_adb&&_adb.getAttribute("href");
if(_adc){
_ad8=new CFURL(_adc,_ad8);
}
}
if(typeof OBJJ_COMPILER_FLAGS!=="undefined"){
var _add={};
for(var i=0;i<OBJJ_COMPILER_FLAGS.length;i++){
switch(OBJJ_COMPILER_FLAGS[i]){
case "IncludeDebugSymbols":
_add.includeMethodFunctionNames=true;
break;
case "IncludeTypeSignatures":
_add.includeIvarTypeSignatures=true;
_add.includeMethodArgumentTypeSignatures=true;
break;
case "InlineMsgSend":
_add.inlineMsgSendFunctions=true;
break;
case "SourceMap":
_add.sourceMap=true;
break;
}
}
_979.setCurrentCompilerFlags(_add);
}
var _ade=new CFURL(window.OBJJ_MAIN_FILE||"main.j"),_1ea=(new CFURL(".",new CFURL(_ade,_ad8))).absoluteURL(),_adf=(new CFURL("..",_1ea)).absoluteURL();
if(_1ea===_adf){
_adf=new CFURL(_adf.schemeAndAuthority());
}
_1cd.resourceAtURL(_adf,YES);
_2.pageURL=_ad8;
_2.bootstrap=function(){
_ae0();
};
function _ae0(){
_1cd.resolveResourceAtURL(_1ea,YES,function(_ae1){
var _ae2=_1cd.includeURLs(),_a0=0,_ae3=_ae2.length;
for(;_a0<_ae3;++_a0){
_ae1.resourceAtURL(_ae2[_a0],YES);
}
_306.fileImporterForURL(_1ea)(_ade.lastPathComponent(),YES,function(){
_17e();
_ae9(function(){
var _ae4=window.location.hash.substring(1),args=[];
if(_ae4.length){
args=_ae4.split("/");
for(var i=0,_ae3=args.length;i<_ae3;i++){
args[i]=decodeURIComponent(args[i]);
}
}
var _ae5=(window.location.search.substring(1)).split("&"),_ae6=new CFMutableDictionary();
for(var i=0,_ae3=_ae5.length;i<_ae3;i++){
var _ae7=_ae5[i].split("=");
if(!_ae7[0]){
continue;
}
if(_ae7[1]==null){
_ae7[1]=true;
}
_ae6.setValueForKey(decodeURIComponent(_ae7[0]),decodeURIComponent(_ae7[1]));
}
main(args,_ae6);
});
});
});
};
var _ae8=NO;
function _ae9(_aea){
if(_ae8||document.readyState==="complete"){
return _aea();
}
if(window.addEventListener){
window.addEventListener("load",_aea,NO);
}else{
if(window.attachEvent){
window.attachEvent("onload",_aea);
}
}
};
_ae9(function(){
_ae8=YES;
});
if(typeof OBJJ_AUTO_BOOTSTRAP==="undefined"||OBJJ_AUTO_BOOTSTRAP){
_2.bootstrap();
}
function _1e4(aURL){
if(aURL instanceof CFURL&&aURL.scheme()){
return aURL;
}
return new CFURL(aURL,_1ea);
};
objj_importFile=_306.fileImporterForURL(_1ea);
objj_executeFile=_306.fileExecuterForURL(_1ea);
objj_import=function(){
CPLog.warn("objj_import is deprecated, use objj_importFile instead");
objj_importFile.apply(this,arguments);
};
})(window,ObjectiveJ);
