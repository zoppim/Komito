(function(c,p,r){function M(d,a){var b=d.protocol[t](0,-1),e=d[u],c=d.hostname,g=/^https?$/.test(b),q=N[c.replace("www.","")],D=(e.match(O)||[""]).pop()[C](),w=D?~",mp3,mp4,wma,mov,avi,wmv,mkv,eot,woff,ttf,txt,csv,tsv,pdf,doc,docx,xls,xlsx,ppt,pptx,zip,tar,tgz,bz2,gz,rar,dmg,pkg,7z,ida,exe,sh,bat,"[v](","+D+","):0;f.trackOutbound&&g&&!~c[v](r.hostname)&&n(d,E,function(){l(0,"outbound",c,e,a);q&&l(1,q,"outbound",e)});f.trackDownloads&&w&&n(d,E,function(){l(0,"download",D,e)});f.trackActions&&!g&&n(d,
E,function(){l(0,"cta:"+b,e[t](b[m]+1).split("?")[0],r[u])})}function P(d,a){n(d,"submit",function(){for(var b=d.elements,e=0,c;e<b[m];)c=b[e++],c.name&&l(0,"form",d[F]("name")||d[F]("id")||"form "+a,c.name+":"+(c.type||c.tagName))})}function x(){x.a=x.a||0;var d={click:0,message:0},a,b;9>x.a++&&(c.twttr&&c.twttr.ready?c.__twitterIntentHandler||(n(c,A,function(e){try{"twitter.com"===e.origin[G](-11)&&e.data&&(b=c.JSON&&c.JSON.parse(e.data))&&"trigger"===b.method&&b.params&&(a=b.params[0],a in d||
l(1,"Twitter",a,r[u]))}catch(h){}}),c.twttr.ready(function(b){for(a in d)b.events.bind(a,function(){})}),c.__twitterIntentHandler=!0):setTimeout(x,5E3))}function y(){function d(a){l(1,"Facebook",a,r[u])}y.a=y.a||0;if(9>y.a++){var a=c.FB;if(a=a&&a.Event&&a.Event.subscribe)try{a("edge.create",function(){d("like")}),a("edge.remove",function(){d("unlike")}),a(A+".send",function(){d(A)})}catch(b){}else setTimeout(y,5E3)}}function Q(){function d(a,b){var d=["cb_onsuccess",b,+new Date].join("_");a.onsuccess=
(a.onsuccess?a.onsuccess+",":"")+d;c[d]=function(){l(1,"LinkedIn",b,r[u])}}for(var a=z("SCRIPT"),b=a[m],e=0,h,g;e<b;)h=a[e++],g=(h[F]("type")||"")[C](),!g[v]("in/")&&d(h,g[G](3))}function R(){function d(a,b){n(a,"load",function(){l(1,b,"status","logged in")});a.src=I[b]}function a(a){a(function(a){a&&"unknown"!==a.status&&!e++&&l(1,"Facebook","status","logged in");J("FB:",a)})}function b(){var d=c.FB&&c.FB.getLoginStatus;d?(a(d),n(c,A,function(b){try{"facebook.com"==b.origin[G](-12)&&b.data&&~b.data[v]("xd_action=proxy_ready")&&
a(d)}catch(c){}})):--h&&setTimeout(b,2E3)}var e=0,h=5,g;for(g in I)d(new Image(1,1),g);b()}function S(){function d(){l(0,"print",p.title,r[u])}var a=c.matchMedia;(a=a&&a("print"))&&a.addListener(d);n(c,"afterprint",d)}function T(){function d(a){q=a.target||a.srcElement;f=q.currentSrc||q.src;k=q.tagName[C]();w=a.type;~w[v]("fullscreen")?(p.fullScreen||p.mozFullScreen||p.webkitIsFullScreen)&&l(0,k+":html5","fullscreen",f):l(0,k+":html5",w,f)}for(var a="ended pause play webkitfullscreenchange mozfullscreenchange fullscreenchange".split(" "),
b=U("AUDIO","VIDEO"),c=b[m]>>>0,h=0,g,q,f,w,k;h<c;)for(q=b[h++],g=0;6>g;)n(q,a[g++],d);V()}function V(){function d(a){k=a.target||a.srcElement;l(0,"video:youtube",f[a.data],k.getVideoUrl())}for(var a=z("IFRAME"),b=a[m],e=0,h=/(https?:)?(www\.)?youtube\.com\/embed/,g=[],f=["finish","play","pause"],k;e<b;)k=a[e++],h.test(k.src)&&g.push(k);if(b=g[m])c.onYouTubePlayerAPIReady=function(){for(e=0;e<b;)new c.YT.Player(g[e++],{events:{onStateChange:d},playerVars:{enablejsapi:1}})},c.YT||(z("HEAD")[0].appendChild(p.createElement("SCRIPT")).src=
"//www.youtube.com/iframe_api")}function W(){var d={25:0,50:0,75:0,100:0},a=p.documentElement,b;n(c,"scroll",function(){(b=25*~~((a.scrollTop+p.body.scrollTop)/(a.scrollHeight-a.clientHeight)*100/25))&&!d[b]&&(d[b]=1,l(0,"scroll","depth",b+"%"))})}function n(d,a,b){d[K]?d[K](a,b,!1):d.attachEvent("on"+a,b)}function l(d){var a=Array.prototype[t].call(arguments,0),b;a[0]=a[0]?H:"event";c[B]&&"function"===typeof c[B]&&(b=c[B].getAll&&c[B].getAll())&&k(b,"send",a);b=a;var e=c.TagLoader,h=c.s,g=[],f=1;
if(e&&h&&h instanceof e){for(;f<b[m];f++)e="prop"+f,g.push(e),h[e]=b[f];h.linkTrackEvents="None";h.linkTrackVars=g.join(",");k([h],"tl",[h,"download"===b[1]?"d":"o",b[0]])}b=[].concat(a);H==b[0]&&(b[1]=H+":"+b.splice(2,1,b[1])[0]);b=b[t](1);k([c],"ClickTaleEvent",[b.join(":")]);k([c],"__utmTrackEvent",b);c._hmt&&k([c._hmt],"push",[["_trackEvent"].concat(b)]);if(c._gat||c._gaq)b=c._gat&&c._gat._getTrackers&&c._gat._getTrackers(),a[0]={social:"_trackSocial",event:"_trackEvent"}[a[0]],b?k(b,a[0],a[t](1)):
c._gaq&&k([c._gaq],"push",[a])}function k(d,a,b){var c=d[m]>>>0,f=0,g;for(J(a,b);f<c;)g=d[f++],g[a]&&"function"===typeof g[a]&&g[a].apply(g,b)}function J(d){var a=c.console;f.debugMode&&a&&a.log.apply(a,arguments)}function U(d){for(var a=[],b=Array.prototype[t].call(arguments,0),c=0,c=0;c<b[m];)a.push.apply(a,z(b[c++]));return a}function z(c){return p.getElementsByTagName(c)}var L={trackTwitter:1,trackFacebook:1,trackLinkedIn:1,trackDownloads:1,trackOutbound:1,trackForms:1,trackUsers:1,trackActions:1,
trackPrint:1,trackMedia:1,trackScroll:1,debugMode:0},N={"plus.google.com":"Google+","plus.url.google.com":"Google+","blogspot.com":"Blogger","facebook.com":"Facebook","on.fb.me":"Facebook","fb.me":"Facebook","fb.com":"Facebook","twitter.com":"Twitter","t.co":"Twitter","linkedin.com":"LinkedIn","myspace.com":"MySpace","vk.com":"VKontakte","odnoklassniki.ru":"Odnoklassniki","xing.com":"Xing","youtube.com":"YouTube","youtu.be":"YouTube","twoo.com":"Twoo","reddit.com":"Reddit","pinterest.com":"Pinterest",
"digg.com":"Digg","4sq.com":"Foursquare","foursquare.com":"Foursquare","hi.baidu.com":"Baidu Space"},I={Google:"https://accounts.google.com/CheckCookie?continue=https%3A%2F%2Fwww.google.com%2Fintl%2Fen%2Fimages%2Flogos%2Faccounts_logo.png&amp;followup=https%3A%2F%2Fwww.google.com%2Fintl%2Fen%2Fimages%2Flogos%2Faccounts_logo.png&amp;chtml=LoginDoneHtml&amp;checkedDomains=youtube&amp;checkConnection=youtube%3A291%3A1","Google+":"//plus.google.com/up/?continue=https%3A%2F%2Fwww.google.com%2Fintl%2Fen%2Fimages%2Flogos%2Faccounts_logo.png",
Twitter:"//twitter.com/login?redirect_after_login=https%3A%2F%2Fplatform.twitter.com%2Fwidgets%2Fimages%2Fbtn.png"},O=/\.([0-9a-z]+)(?:[\?#]|$)/i,B=c.GoogleAnalyticsObject||"ga",f=c._ega||c._komito||{},m="length",t="slice",u="href",F="getAttribute",v="indexOf",G="substr",C="toLowerCase",K="addEventListener",A="message",E="mousedown",H="social";(function(){var c=0,a=z("A"),b=a[m],e;for(e in L)e in f||(f[e]=L[e]);for(;c<b;)M(a[c++],c);if(f.trackForms)for(a=p.forms,b=a[m],c=0;c<b;)P(a[c++],c);f.trackTwitter&&
x();f.trackFacebook&&y();f.trackLinkedIn&&Q();f.trackUsers&&R();f.trackPrint&&S();f.trackMedia&&T();f.trackScroll&&W()})()})(window,document,location);
