//tealium universal tag - utag.sync ut4.0.201707120608, Copyright 2017 Tealium.com Inc. All Rights Reserved.
var isTestandLearn=true;if(isTestandLearn){var campaign_hashcode={};var globalHashes={};var globalPackages=[];var devHostnames=[];var mtTagPath;if(typeof utag_data!='undefined')
{if(typeof utag_data.app_id!=='undefined'||typeof utag_data.page_type!=='undefined')
{if(utag_data.app_id==='WWW'&&utag_data.page_type==='BROWSER'){if(matchPageUri())
{callTestAndLearn();}}else
{if(utag_data.app_id==='OSMP'){}}}}}
function matchPageUri(){try{var pathname=window.location.pathname;var include=['/financial-education/credit-management/improve-credit-score','/student','/jump/credit-cards/year-end','/student/collegiate-loans','/mortgage','/credit-cards','/mortgage/rates','/mortgage/buying-a-house/first-time-home-buyer','/mortgage/rates/calculator/purchase-results','/mortgage/rates/calculator/refinance-results','/mortgage/loan-programs/your-first-mortgage','/mortgage/buying-a-house/first-time-home-buyer','/jump/credit-cards/vacation-card-benefits','/credit-cards/find-a-credit-card','/credit-cards/find-a-credit-card/all','/credit-cards/find-a-credit-card/balance-transfer','/credit-cards/find-a-credit-card/build-credit','/credit-cards/find-a-credit-card/cash-back','/credit-cards/find-a-credit-card/no-annual-fee','/credit-cards/find-a-credit-card/rewards','/credit-cards/visa-wise','/the-private-bank','/help/questions-concerns','/jump/credit-cards/vacation-card-benefits','/mortgage/rates/calculator','/mortgage/buying-a-house','/mortgage/mortgage-refinance','/mortgage/loan-programs/low-down-payment','/mortgage/apply','/credit-cards/rewards','/biz/checking']
var exclude=['']
for(var i=0;i<include.length;i++){var url=include[i];if(url.match(/^\//i)){sRegExInput=new RegExp(url+'(\/|\/index|\/index\/|\/index.htm|)$',"i");}else{for(var j=0;j<exclude.length;j++){excludePath=new RegExp(exclude[j]+'(\/|\/index|\/index\/|\/index.htm|)$',"i");if(excludePath.test(pathname)===true)
return;}
sRegExInput=new RegExp('^/'+url,"i");}
if(sRegExInput.test(pathname)===true)
{return true;}}}
catch(e)
{}}
function callTestAndLearn()
{try{if(typeof utag_data.mt_tag_path!=='undefined')
mtTagPath=utag_data.mt_tag_path;{mtTagPath=mtTagPath+'tnl/';globalHashes={"Nr+xCx4hHOgyyK6BVEcSvts4vax0g99gaTePJqFK6Rk=":"NR_PROD_GN_ICS_CreditFinance_FinEd,0","ijdectYK7LUaXNxDsGM26ZLx76pzHKQ5E6sBSomkslA=":"NR_PROD_GN_ICS_CreditFinance_FinEd,1","xpmpCfXaGTtXrVPiBLZm5kXAzujoGFSsYEPt9yv3QA8=":"NR_PROD_ ISG11534778_WWW_Mortgage_FirstTimeHomeBuyer_Exp3,0","mvQeeImipaBnvSE+pr9HNtY1q2xWb95MXMZfRjSHsgI=":"NR_PROD_ ISG11534778_WWW_Mortgage_FirstTimeHomeBuyer_Exp3,1","Ed/2sSn1dUtmPwFTuZY5mHpRq2KJkbHn3C44meTMNVk=":"NR_PROD_ISG11749280_WWW_Mortgage_YourFirstMortgage,0","Y3kAmKW19NQz8c+4fDSwyEQHW+m0WV//jgua0wMSKo8=":"NR_PROD_ISG11749280_WWW_Mortgage_YourFirstMortgage,1","g9cNdRFyOR6RkxL+Stnfza5j6lwfXGxCTaApq9QPBCE=":"NR_PROD_ISG11358508_WWW_FIND_A_CREDIT_CARD,0","C+5AqyrcieFh3I36vQQhGBnMKI3XM63rrJRniyyhsPE=":"NR_PROD_ISG11358508_WWW_FIND_A_CREDIT_CARD,1","CqnQ9saIJiekiM8/M+sSl0xm/2ZXSxWcu58vgvhvyDM=":"NR_PROD_ISG11358508_WWW_FIND_A_CREDIT_CARD,2","+h/r/KKNjgPAea2XKEZdbrM26Jwq0pzhEy4waDR1qes=":"NR_PROD_ISG11358508_WWW_FIND_A_CREDIT_CARD,3","dKqQc+5qcfQm5kEgFl9nQ+8w4IR4fQbhjgAxlZXI2bg=":"NR_PROD_ISG11358508_WWW_FIND_A_CREDIT_CARD,4","5q319eMcRZl2A9t+JrjdifT+Mgm1o8aeRGzLvowfU+Q=":"NR_PROD_ISG11618643_WWW_CC_Vacation,0","C01HA6UhVerjQOwCofoxhyzWU6OeionCY5XirctcyxQ=":"NR_PROD_ISG11618643_WWW_CC_Vacation,1","Qy6JHRR3PFgLoB+iopC70FPI7agXkkrrR7xF9MxzCNE=":"NR_PROD_ISG11618643_WWW_CC_Vacation,2"};globalPackages=['mmpackage-1.12.js','//service.maxymiser.net/platform/us/api/utils/uh.js'];devHostnames=['www-ca.wellsfargo.com'];document
.write('<scr'
+'ipt type="text/javascript" src="'+mtTagPath+'mmapi-1.11.js"></scr'
+'ipt>');}}catch(e)
{}}
var CryptoJS=CryptoJS||function(h,s){var f={},t=f.lib={},g=function(){},j=t.Base={extend:function(a){g.prototype=this;var c=new g;a&&c.mixIn(a);c.hasOwnProperty("init")||(c.init=function(){c.$super.init.apply(this,arguments)});c.init.prototype=c;c.$super=this;return c},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var c in a)a.hasOwnProperty(c)&&(this[c]=a[c]);a.hasOwnProperty("toString")&&(this.toString=a.toString)},clone:function(){return this.init.prototype.extend(this)}},q=t.WordArray=j.extend({init:function(a,c){a=this.words=a||[];this.sigBytes=c!=s?c:4*a.length},toString:function(a){return(a||u).stringify(this)},concat:function(a){var c=this.words,d=a.words,b=this.sigBytes;a=a.sigBytes;this.clamp();if(b%4)for(var e=0;e<a;e++)c[b+e>>>2]|=(d[e>>>2]>>>24-8*(e%4)&255)<<24-8*((b+e)%4);else if(65535<d.length)for(e=0;e<a;e+=4)c[b+e>>>2]=d[e>>>2];else c.push.apply(c,d);this.sigBytes+=a;return this},clamp:function(){var a=this.words,c=this.sigBytes;a[c>>>2]&=4294967295<<32-8*(c%4);a.length=h.ceil(c/4)},clone:function(){var a=j.clone.call(this);a.words=this.words.slice(0);return a},random:function(a){for(var c=[],d=0;d<a;d+=4)c.push(4294967296*h.random()|0);return new q.init(c,a)}}),v=f.enc={},u=v.Hex={stringify:function(a){var c=a.words;a=a.sigBytes;for(var d=[],b=0;b<a;b++){var e=c[b>>>2]>>>24-8*(b%4)&255;d.push((e>>>4).toString(16));d.push((e&15).toString(16))}return d.join("")},parse:function(a){for(var c=a.length,d=[],b=0;b<c;b+=2)d[b>>>3]|=parseInt(a.substr(b,2),16)<<24-4*(b%8);return new q.init(d,c/2)}},k=v.Latin1={stringify:function(a){var c=a.words;a=a.sigBytes;for(var d=[],b=0;b<a;b++)d.push(String.fromCharCode(c[b>>>2]>>>24-8*(b%4)&255));return d.join("")},parse:function(a){for(var c=a.length,d=[],b=0;b<c;b++)d[b>>>2]|=(a.charCodeAt(b)&255)<<24-8*(b%4);return new q.init(d,c)}},l=v.Utf8={stringify:function(a){try{return decodeURIComponent(escape(k.stringify(a)))}catch(c){throw Error("Malformed UTF-8 data");}},parse:function(a){return k.parse(unescape(encodeURIComponent(a)))}},x=t.BufferedBlockAlgorithm=j.extend({reset:function(){this._data=new q.init;this._nDataBytes=0},_append:function(a){"string"==typeof a&&(a=l.parse(a));this._data.concat(a);this._nDataBytes+=a.sigBytes},_process:function(a){var c=this._data,d=c.words,b=c.sigBytes,e=this.blockSize,f=b/(4*e),f=a?h.ceil(f):h.max((f|0)-this._minBufferSize,0);a=f*e;b=h.min(4*a,b);if(a){for(var m=0;m<a;m+=e)this._doProcessBlock(d,m);m=d.splice(0,a);c.sigBytes-=b}return new q.init(m,b)},clone:function(){var a=j.clone.call(this);a._data=this._data.clone();return a},_minBufferSize:0});t.Hasher=x.extend({cfg:j.extend(),init:function(a){this.cfg=this.cfg.extend(a);this.reset()},reset:function(){x.reset.call(this);this._doReset()},update:function(a){this._append(a);this._process();return this},finalize:function(a){a&&this._append(a);return this._doFinalize()},blockSize:16,_createHelper:function(a){return function(c,d){return(new a.init(d)).finalize(c)}},_createHmacHelper:function(a){return function(c,d){return(new w.HMAC.init(a,d)).finalize(c)}}});var w=f.algo={};return f}(Math);(function(h){for(var s=CryptoJS,f=s.lib,t=f.WordArray,g=f.Hasher,f=s.algo,j=[],q=[],v=function(a){return 4294967296*(a-(a|0))|0},u=2,k=0;64>k;){var l;a:{l=u;for(var x=h.sqrt(l),w=2;w<=x;w++)if(!(l%w)){l=!1;break a}l=!0}l&&(8>k&&(j[k]=v(h.pow(u,0.5))),q[k]=v(h.pow(u,1/3)),k++);u++}var a=[],f=f.SHA256=g.extend({_doReset:function(){this._hash=new t.init(j.slice(0))},_doProcessBlock:function(c,d){for(var b=this._hash.words,e=b[0],f=b[1],m=b[2],h=b[3],p=b[4],j=b[5],k=b[6],l=b[7],n=0;64>n;n++){if(16>n)a[n]=c[d+n]|0;else{var r=a[n-15],g=a[n-2];a[n]=((r<<25|r>>>7)^(r<<14|r>>>18)^r>>>3)+a[n-7]+((g<<15|g>>>17)^(g<<13|g>>>19)^g>>>10)+a[n-16]}r=l+((p<<26|p>>>6)^(p<<21|p>>>11)^(p<<7|p>>>25))+(p&j^~p&k)+q[n]+a[n];g=((e<<30|e>>>2)^(e<<19|e>>>13)^(e<<10|e>>>22))+(e&f^e&m^f&m);l=k;k=j;j=p;p=h+r|0;h=m;m=f;f=e;e=r+g|0}b[0]=b[0]+e|0;b[1]=b[1]+f|0;b[2]=b[2]+m|0;b[3]=b[3]+h|0;b[4]=b[4]+p|0;b[5]=b[5]+j|0;b[6]=b[6]+k|0;b[7]=b[7]+l|0},_doFinalize:function(){var a=this._data,d=a.words,b=8*this._nDataBytes,e=8*a.sigBytes;d[e>>>5]|=128<<24-e%32;d[(e+64>>>9<<4)+14]=h.floor(b/4294967296);d[(e+64>>>9<<4)+15]=b;a.sigBytes=4*d.length;this._process();return this._hash},clone:function(){var a=g.clone.call(this);a._hash=this._hash.clone();return a}});s.SHA256=g._createHelper(f);s.HmacSHA256=g._createHmacHelper(f)})(Math);(function(){var C=CryptoJS;var C_lib=C.lib;var WordArray=C_lib.WordArray;var C_enc=C.enc;var Base64=C_enc.Base64={stringify:function(wordArray){var words=wordArray.words;var sigBytes=wordArray.sigBytes;var map=this._map;wordArray.clamp();var base64Chars=[];for(var i=0;i<sigBytes;i+=3){var byte1=(words[i>>>2]>>>(24-(i%4)*8))&0xff;var byte2=(words[(i+1)>>>2]>>>(24-((i+1)%4)*8))&0xff;var byte3=(words[(i+2)>>>2]>>>(24-((i+2)%4)*8))&0xff;var triplet=(byte1<<16)|(byte2<<8)|byte3;for(var j=0;(j<4)&&(i+j*0.75<sigBytes);j++){base64Chars.push(map.charAt((triplet>>>(6*(3-j)))&0x3f));}}
var paddingChar=map.charAt(64);if(paddingChar){while(base64Chars.length%4){base64Chars.push(paddingChar);}}
return base64Chars.join('');},parse:function(base64Str){var base64StrLength=base64Str.length;var map=this._map;var paddingChar=map.charAt(64);if(paddingChar){var paddingIndex=base64Str.indexOf(paddingChar);if(paddingIndex!=-1){base64StrLength=paddingIndex;}}
var words=[];var nBytes=0;for(var i=0;i<base64StrLength;i++){if(i%4){var bits1=map.indexOf(base64Str.charAt(i-1))<<((i%4)*2);var bits2=map.indexOf(base64Str.charAt(i))>>>(6-(i%4)*2);words[nBytes>>>2]|=(bits1|bits2)<<(24-(nBytes%4)*8);nBytes++;}}
return WordArray.create(words,nBytes);},_map:'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='};}());