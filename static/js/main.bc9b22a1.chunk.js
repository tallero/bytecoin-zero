(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports={receiveForm:"ReceiveForm_receiveForm__3S8Rf",address:"ReceiveForm_address__3gtEd",addressIcon:"ReceiveForm_addressIcon__3oUN-",addressText:"ReceiveForm_addressText__RdNp7"}},21:function(e,t,a){e.exports={sendForm:"SendForm_sendForm__1ZDqj",addressGroup:"SendForm_addressGroup__3yNWl",amountGroup:"SendForm_amountGroup__1Wz5t",controls:"SendForm_controls__dTO2_"}},28:function(e,t,a){e.exports={app:"App_app__31x5q",footer:"App_footer__2CXQ2",warning:"App_warning__20zto"}},33:function(e,t,a){e.exports={avatar:"Avatar_avatar__1VVPr"}},36:function(e,t,a){e.exports=a.p+"static/media/logo.5575295b.svg"},43:function(e,t,a){e.exports=a(59)},44:function(e,t,a){},45:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);a(44),a(45);var n=a(2),r=a.n(n),c=a(23),s=a.n(c),o=a(5),i=a(9),l=a.n(i),u=a(10),d=a(24),m=a(25),f=a(11),p=a(60),_=function(){function e(t){Object(d.a)(this,e),this.n=0,cn_walletd_start(["--bytecoind-remote-address=".concat(t)])}return Object(m.a)(e,[{key:"close",value:function(){var e=Object(f.a)(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.closeWallet());case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"createWallet",value:function(e){return this.rpc("ext_create_wallet",e)}},{key:"closeWallet",value:function(){return this.rpc("ext_close_wallet",{})}},{key:"getStatus",value:function(e){return this.rpc("get_status",e)}},{key:"getBalance",value:function(e){return this.rpc("get_balance",e)}},{key:"getWalletRecords",value:function(e){return this.rpc("get_wallet_records",e)}},{key:"getTransfers",value:function(e){return this.rpc("get_transfers",e)}},{key:"createSendproof",value:function(e){return this.rpc("create_sendproof",e)}},{key:"createTransaction",value:function(e){return this.rpc("create_transaction",e)}},{key:"sendTransaction",value:function(e){return this.rpc("send_transaction",e)}},{key:"rpc",value:function(t,a){var n=this;return new Promise(function(r,c){var s={jsonrpc:"2.0",id:"0",method:t,params:a},o="RPC ".concat(t," #").concat(n.n);n.n++,console.time(o),e.postJSON("/json_rpc",s,function(e){if(console.timeEnd(o),e.hasOwnProperty("error")){var t="JSON-RPC error #".concat(e.error.code,": ").concat(e.error.message);console.warn(t),c(new Error(t))}else r(e.result)},c)})}}],[{key:"create",value:function(){var t=Object(f.a)(l.a.mark(function t(a,n,r){var c;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return c=new e(a),t.next=3,c.createWallet({mnemonic:n,creation_timestamp:r});case 3:return t.abrupt("return",c);case 4:case"end":return t.stop()}},t)}));return function(e,a,n){return t.apply(this,arguments)}}()},{key:"postJSON",value:function(e,t,a,n){var r=JSON.stringify(t),c=cn_http_server_call("POST",e,r,function(e,t){if(200===e)try{var r=JSON.parse(t);a(r)}catch(s){console.warn("JSON-RPC reply parsing failed",s),n(s)}else{var c="JSON-RPC HTTP status ".concat(e);console.warn(c),n(new Error(c))}});return function(){cn_http_server_cancel(c)}}}]),e}(),h=a(61),v=a(31),b=a(22);function g(e){return e.then(function(e){return[e,null]}).catch(function(e){return[void 0,e]})}function y(e,t){var a=new Map;return e.forEach(function(e){var n=t(e),r=a.get(n);r?r.push(e):a.set(n,[e])}),a}function k(e,t){return new Promise(function(a){var n=void 0!==t?Date.now()-t:0,r=Math.max(e-n,1);setTimeout(function(){return a(Date.now())},r)})}function E(){var e=navigator.language.replace("-",""),t=e.slice(0,2);return v[e]||v[t]||b.a}function O(e){return Object(h.a)(e,Date.now(),{addSuffix:!0,locale:E()})}function w(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return e>=Number.MAX_SAFE_INTEGER&&console.warn("amount ".concat(e," too big to be exactly represented in JavaScript")),(e/1e8).toLocaleString(navigator.language,{style:"currency",currency:"BCN",currencyDisplay:"code",minimumFractionDigits:t})}var x,S,j=r.a.createContext(null);function N(e){return H.apply(this,arguments)}function H(){return(H=Object(f.a)(l.a.mark(function e(t){var a,n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=new TextEncoder,n=a.encode(t),e.abrupt("return",window.crypto.subtle.digest("SHA-256",n));case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}function R(e,t,a){return D.apply(this,arguments)}function D(){return(D=Object(f.a)(l.a.mark(function e(t,a,n){var r,c,s,i,u,d,m,f,p,_,h,v,b,y,k,E;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=window.PublicKeyCredential){e.next=4;break}return console.log("skipping authentication for ".concat(a,"@").concat(t," due to lacking platform support (public key credentials)")),e.abrupt("return",!0);case 4:return e.next=6,r.isUserVerifyingPlatformAuthenticatorAvailable();case 6:if(e.sent){e.next=10;break}return console.log("skipping authentication for ".concat(a,"@").concat(t," due to lacking platform support (user verification)")),e.abrupt("return",!0);case 10:if(c="bio-approve ".concat(a,"@").concat(t),s=3e4,i=window.localStorage.getItem(c)||"",u=window.navigator.credentials,d=new Uint8Array(32),window.crypto.getRandomValues(d),!i){e.next=31;break}return m={challenge:d,timeout:s,userVerification:"required",allowCredentials:[{type:"public-key",id:(O=i,new Uint8Array((O.match(/[\da-f]{2}/gi)||[]).map(function(e){return parseInt(e,16)})))}]},e.next=20,g(u.get({publicKey:m}));case 20:if(f=e.sent,p=Object(o.a)(f,2),_=p[0],null===(h=p[1])){e.next=27;break}return console.warn("authentication for ".concat(a,"@").concat(t," failed: ").concat(h)),e.abrupt("return",!1);case 27:return console.log("successfully authenticated ".concat(a,"@").concat(t," with ").concat(_.id)),e.abrupt("return",!0);case 31:return e.t0={name:t},e.next=34,N("".concat(a,"@").concat(t));case 34:return e.t1=e.sent,e.t2=a,e.t3=n,e.t4={id:e.t1,name:e.t2,displayName:e.t3},e.t5=d,e.t6=s,e.t7=[{type:"public-key",alg:-7}],e.t8={authenticatorAttachment:"platform",requireResidentKey:!0,userVerification:"required"},v={rp:e.t0,user:e.t4,challenge:e.t5,timeout:e.t6,userVerification:"required",pubKeyCredParams:e.t7,authenticatorSelection:e.t8},e.next=45,g(u.create({publicKey:v}));case 45:if(b=e.sent,y=Object(o.a)(b,2),k=y[0],null===(E=y[1])){e.next=52;break}return console.warn("first authentication for ".concat(a,"@").concat(t," failed: ").concat(E)),e.abrupt("return",!1);case 52:return window.localStorage.setItem(c,(l=k.rawId,Array.from(new Uint8Array(l)).map(function(e){return e.toString(16).padStart(2,"0")}).join(""))),console.log("successfully authenticated ".concat(a,"@").concat(t," for the first time with ").concat(k.id)),e.abrupt("return",!0);case 55:case"end":return e.stop()}var l,O},e)}))).apply(this,arguments)}!function(e){e[e.Send=0]="Send",e[e.Receive=1]="Receive",e[e.Redistribute=2]="Redistribute"}(x||(x={})),function(e){e[e.Spend=0]="Spend",e[e.Send=1]="Send",e[e.Receive=2]="Receive",e[e.Change=3]="Change"}(S||(S={}));function B(){return(B=Object(f.a)(l.a.mark(function e(t,a,n,r,c){var s,i,u,d,m,f,p,h,v,b,y,E,O,w,x,S,j,N,H,R,D,B,F,J,K,Q,W,q,V,Z,z,G,X,Y,$,ee,te,ae,ne;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.create(A,T,0);case 2:s=e.sent,e.prev=3,t(s),i=Date.now(),u={},d=new M,m=0,f=[];case 10:if(!(m>=0)){e.next=106;break}return e.next=13,k(U,i);case 13:return i=e.sent,e.next=16,g(s.getStatus(u));case 16:if(p=e.sent,h=Object(o.a)(p,2),v=h[0],b=h[1],void 0!==v){e.next=25;break}return console.warn("failed to get status",u,b),e.abrupt("continue",10);case 25:if(0!==v.top_known_block_height){e.next=27;break}return e.abrupt("continue",10);case 27:return u={top_block_hash:v.top_block_hash,transaction_pool_version:v.transaction_pool_version,lower_level_error:v.lower_level_error},a({topBlockHeight:v.top_block_height,topBlockTime:new Date(1e3*v.top_block_timestamp),topBlockHash:v.top_block_hash,topKnownBlockHeight:v.top_known_block_height,lowerLevelError:v.lower_level_error}),y={height_or_depth:C},e.next=32,g(s.getBalance(y));case 32:if(E=e.sent,O=Object(o.a)(E,2),w=O[0],x=O[1],void 0!==w){e.next=39;break}return console.warn("failed to get balance",y,x),e.abrupt("continue",10);case 39:if(n({spendable:w.spendable,lockedOrUnconfirmed:w.locked_or_unconfirmed}),S=L(v.top_block_height),0!==m||0===S){e.next=56;break}return j={from_height:m,to_height:S,forward:!1,desired_transaction_count:P},e.next=45,g(s.getTransfers(j));case 45:if(N=e.sent,H=Object(o.a)(N,2),R=H[0],D=H[1],void 0!==R){e.next=52;break}return console.warn("failed to get history transfers",j,D),e.abrupt("continue",10);case 52:d.mergeConfirmedFuture((R.blocks||[]).reverse()),m=S,e.next=89;break;case 56:if(!(m<S)){e.next=71;break}return B={from_height:m,to_height:S,forward:!0,desired_transaction_count:I},e.next=60,g(s.getTransfers(B));case 60:if(F=e.sent,J=Object(o.a)(F,2),K=J[0],Q=J[1],void 0!==K){e.next=67;break}return console.warn("failed to get transfers",B,Q),e.abrupt("continue",10);case 67:d.mergeConfirmedFuture(K.blocks||[]),m=K.next_from_height,e.next=56;break;case 71:d.resetUnconfirmedFuture(),W=v.top_block_height+1,q=m;case 74:if(!(q<W)){e.next=89;break}return V={from_height:q,to_height:W,forward:!0,desired_transaction_count:I},e.next=78,g(s.getTransfers(V));case 78:if(Z=e.sent,z=Object(o.a)(Z,2),G=z[0],X=z[1],void 0!==G){e.next=85;break}return console.warn("failed to get future transfers",V,X),e.abrupt("continue",10);case 85:d.mergeUnconfirmedFuture(G.blocks||[]),q=G.next_from_height,e.next=74;break;case 89:if((Y=d.mergeUnconfirmed())===f){e.next=104;break}return c(f=Y),e.next=95,g(s.getWalletRecords({}));case 95:if($=e.sent,ee=Object(o.a)($,2),te=ee[0],ae=ee[1],void 0!==te){e.next=102;break}return console.warn("failed to get wallet records",ae),e.abrupt("continue",10);case 102:ne=te.records.map(function(e){return{address:e.address,label:e.label}}),r(ne);case 104:e.next=10;break;case 106:e.next=111;break;case 108:e.prev=108,e.t0=e.catch(3),alert("Unexpected error: ".concat(e.t0,"\n\nPlease try reloading this page."));case 111:return e.prev=111,e.next=114,s.close();case 114:return e.finish(111);case 115:case"end":return e.stop()}},e,null,[[3,108,111,115]])}))).apply(this,arguments)}var T="autumn actor sleep rebel fee scissors garage try claim miss maple ribbon alarm size above kite mass gain render grow dice decrease subway calm",A="https://node03.bytecoin.org:8091",U=100,F=3,C=-F-1,P=1e3,I=100;function L(e){return Math.max(e-F,0)}var M=function(){function e(){Object(d.a)(this,e),this.confirmedDays=[],this.unconfirmedDays=[]}return Object(m.a)(e,[{key:"mergeConfirmedFuture",value:function(t){this.confirmedDays=e.mergeFuture(this.confirmedDays,t,!0)}},{key:"resetUnconfirmedFuture",value:function(){this.unconfirmedDays=[]}},{key:"mergeUnconfirmedFuture",value:function(t){this.unconfirmedDays=e.mergeFuture(this.unconfirmedDays,t,!1)}},{key:"mergeUnconfirmed",value:function(){return e.mergeDays(this.confirmedDays,this.unconfirmedDays)}}],[{key:"mergeFuture",value:function(t,a,n){var r=y(a.map(function(t){return e.transformBlock(t,n)}).reverse(),function(e){return e.header.date.valueOf()}),c=[],s=!0,i=!1,l=void 0;try{for(var u,d=r[Symbol.iterator]();!(s=(u=d.next()).done);s=!0){var m=u.value,f=Object(o.a)(m,2),p=f[0],_=f[1];c.push({date:new Date(p),blocks:_})}}catch(h){i=!0,l=h}finally{try{s||null==d.return||d.return()}finally{if(i)throw l}}return e.mergeDays(t,c)}},{key:"mergeDays",value:function(e,t){if(0===t.length)return e;if(e.length>0&&t[t.length-1].date.valueOf()===e[0].date.valueOf()){var a={date:t[t.length-1].date,blocks:[].concat(Object(u.a)(t[t.length-1].blocks),Object(u.a)(e[0].blocks))};return[].concat(Object(u.a)(t.slice(0,t.length-1)),[a],Object(u.a)(e.slice(1)))}return[].concat(Object(u.a)(t),Object(u.a)(e))}},{key:"transformBlock",value:function(e,t){var a=(e.transactions||[]).map(function(e){var t=function(e){var t=e.every(function(e){return e.ours||!1});if(!t)return x.Send;var a=e.every(function(e){return e.amount>=0});if(t&&a)return x.Receive;return x.Redistribute}(e.transfers||[]),a=(e.transfers||[]).map(function(e){return{kind:J(e.amount,e.ours||!1,t),address:e.address,amount:e.amount,message:e.message||"",ours:e.ours||!1,locked:e.locked||!1,unlockBlockOrTimestamp:e.unlock_block_or_timestamp||0,transactionHash:e.transaction_hash||""}}),n={spend:a.filter(function(e){return e.kind===S.Spend}),send:a.filter(function(e){return e.kind===S.Send}),receive:a.filter(function(e){return e.kind===S.Receive}),change:a.filter(function(e){return e.kind===S.Change})},r=[];switch(t){case x.Send:r=n.send;break;case x.Receive:r=n.receive;break;case x.Redistribute:r=Object(u.a)(y(a,function(e){return e.address})).map(function(t){var a=Object(o.a)(t,2),n=a[0],r=a[1],c=r.reduce(function(e,t){return e+t.amount},0);return{kind:c<0?S.Spend:S.Receive,address:n,amount:c,message:r.map(function(e){return e.message}).filter(function(e){return e.length>0}).join(" | "),ours:!0,locked:r.some(function(e){return e.locked}),unlockBlockOrTimestamp:0,transactionHash:e.hash}}).sort(function(e,t){return e.kind-t.kind})}return{time:new Date(1e3*e.timestamp),kind:t,hash:e.hash,fee:e.fee,summary:r,transfers:n}}),n=(e.unlocked_transfers||[]).map(function(e){return{kind:J(e.amount,e.ours||!1,x.Receive),address:e.address,amount:e.amount,message:e.message||"",ours:e.ours||!1,locked:!1,unlockBlockOrTimestamp:0,transactionHash:e.transaction_hash||""}}),r=e.header.timestamp_median>0?new Date(1e3*e.header.timestamp_median):a.length>0?a[0].time:new Date;return{header:{confirmed:t,hash:e.header.hash,height:e.header.height,time:new Date(1e3*e.header.timestamp),date:Object(p.a)(r)},transactions:a.reverse(),unlockedTransfers:n.reverse()}}}]),e}();function J(e,t,a){return t?e<0?S.Spend:a===x.Send?S.Change:S.Receive:S.Send}var K=a(63);function Q(){return(Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function W(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var q=r.a.createElement("defs",{id:"defs2874"}),V=r.a.createElement("g",{transform:"matrix(-0.9526244,0.9526244,-0.9526244,-0.9526244,1074.1836,-92.790252)",id:"Ebene_1"},r.a.createElement("polygon",{points:"902.25049,222.98633 233.17773,222.98633 233.17773,364.71875 0,182.35938 233.17773,0 233.17773,141.73242 902.25049,141.73242 902.25049,222.98633 ",id:"path2050"})),Z=function(e){var t=e.svgRef,a=W(e,["svgRef"]);return r.a.createElement("svg",Q({width:800,height:800,viewBox:"0 0 902.25049 364.71875",id:"svg2868",xmlSpace:"preserve",ref:t},a),q,V)},z=r.a.forwardRef(function(e,t){return r.a.createElement(Z,Q({svgRef:t},e))});a.p;function G(){return(G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function X(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var Y,$=r.a.createElement("defs",{id:"defs2874"}),ee=r.a.createElement("g",{transform:"matrix(-0.9526244,-0.9526244,0.9526244,-0.9526244,726.74361,805.41781)",id:"Ebene_1"},r.a.createElement("polygon",{points:"902.25049,222.98633 233.17773,222.98633 233.17773,364.71875 0,182.35938 233.17773,0 233.17773,141.73242 902.25049,141.73242 902.25049,222.98633 ",id:"path2050"})),te=function(e){var t=e.svgRef,a=X(e,["svgRef"]);return r.a.createElement("svg",G({width:800,height:800,viewBox:"0 0 902.25049 364.71875",id:"svg2868",xmlSpace:"preserve",ref:t},a),$,ee)},ae=r.a.forwardRef(function(e,t){return r.a.createElement(te,G({svgRef:t},e))}),ne=(a.p,a(20)),re=a.n(ne),ce=a(33),se=a.n(ce),oe=a(34),ie=r.a.memo(function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],s=a[1];return Object(n.useEffect)(function(){N(e.message.trim()).then(function(e){var t=new Uint8Array(e),a=7&t[0],n=7&t[1],r=7&t[2],c=7&t[3],o=7&t[4],i=7&t[5],l=['<svg xmlns="http://www.w3.org/2000/svg" style="isolation:isolate" viewBox="0 0 24 24" version="1.1">',Object(oe.a)("".concat(a).concat(n).concat(r).concat(c).concat(o).concat(i)),"</svg>"].join("");s(l)})},[e.message]),r.a.createElement("div",{className:se.a.avatar,dangerouslySetInnerHTML:{__html:c}})}),le=r.a.memo(function(e){return r.a.createElement("div",{className:re.a.receiveForm},e.addresses.map(function(e){return r.a.createElement("div",{key:e.address,className:re.a.address},r.a.createElement("div",{className:re.a.addressIcon,title:e.address},r.a.createElement(ie,{message:e.address})),r.a.createElement("div",{className:re.a.addressText},e.address))}))}),ue=a(35),de=a(21),me=a.n(de),fe=r.a.memo(function(e){var t=Object(n.useContext)(j),a=Object(n.useState)(""),c=Object(o.a)(a,2),s=c[0],i=c[1],u=Object(n.useState)(0),d=Object(o.a)(u,2),m=d[0],p=d[1],_=Object(n.useState)(!1),h=Object(o.a)(_,2),v=h[0],b=h[1],y=Object(n.useState)(!1),k=Object(o.a)(y,2),E=k[0],O=k[1],w=function(){var a=Object(f.a)(l.a.mark(function a(){var n,r,c,i,u,d,f,p;return l.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,R("Bytecoin Zero","bytecoin-zero-user","Bytecoin Zero User");case 2:if(a.sent&&t){a.next=5;break}return a.abrupt("return");case 5:return a.next=7,g(t.createTransaction({transaction:{transfers:[{address:s,amount:m}]},any_spend_address:!0,change_address:"",confirmed_height_or_depth:C}));case 7:if(n=a.sent,r=Object(o.a)(n,2),c=r[0],i=r[1],void 0!==c){a.next=14;break}return alert("Failed to create transaction: ".concat(i)),a.abrupt("return");case 14:return a.next=16,g(t.sendTransaction({binary_transaction:c.binary_transaction}));case 16:if(u=a.sent,d=Object(o.a)(u,2),f=d[0],p=d[1],void 0!==f){a.next=23;break}return alert("Failed to send transaction: ".concat(p)),a.abrupt("return");case 23:e.cancel();case 24:case"end":return a.stop()}},a)}));return function(){return a.apply(this,arguments)}}();return r.a.createElement("div",{className:me.a.sendForm},r.a.createElement("div",{className:me.a.addressGroup},r.a.createElement("label",{htmlFor:"toAddress"},"Address"),r.a.createElement("input",{type:"text",id:"toAddress",placeholder:"Bytecoin address",onChange:function(e){var t=e.target.value,a=Object(ue.checkAddress)(t);b(a),a&&i(t)}})),r.a.createElement("div",{className:me.a.amountGroup},r.a.createElement("label",{htmlFor:"toAmount"},"Amount"),r.a.createElement("input",{type:"number",id:"toAmount",min:"0.01",step:"0.01",onChange:function(e){var t=1e8*parseFloat(e.target.value),a=t>0;O(a),a&&p(t)}})),r.a.createElement("div",{className:me.a.controls},r.a.createElement("button",{onClick:e.cancel},"Cancel"),r.a.createElement("button",{onClick:w,disabled:!v||!E},"Send")))}),pe=a(36),_e=a.n(pe),he=a(8),ve=a.n(he),be=r.a.memo(function(e){var t=""===e.topBlockHash,a=e.topBlockHeight!==e.topKnownBlockHeight,c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15e3,a=Object(n.useState)(O(e)),r=Object(o.a)(a,2),c=r[0],s=r[1];return Object(n.useEffect)(function(){s(O(e));var a=setInterval(function(){s(O(e))},t);return function(){clearInterval(a)}},[e,t]),c}(e.topBlockTime);return r.a.createElement("div",{className:ve.a.status},r.a.createElement("div",{className:ve.a.statusIcon},r.a.createElement("img",{src:_e.a,alt:"Bytecoin"})),r.a.createElement("div",{className:ve.a.syncStatusSummary},r.a.createElement("div",{className:ve.a.syncStatus},t?"Initializing wallet\u2026":r.a.createElement("button",{className:"".concat(ve.a.settings," link-like")},a?r.a.createElement("span",{className:ve.a.ellipsis},"Syncing"):"Synced")),e.lowerLevelError?r.a.createElement("div",{className:ve.a.syncStatusError},r.a.createElement("code",null,e.lowerLevelError," ")):r.a.createElement("div",{className:ve.a.syncStatusBlock,hidden:0===e.topBlockHeight},r.a.createElement("a",{href:"https://explorer.bytecoin.org/block?hash=".concat(e.topBlockHash),target:"_blank",rel:"noreferrer noopener"},e.topBlockHeight.toLocaleString(navigator.language))," ",r.a.createElement("span",{className:ve.a.syncStatusTimestamp},c))))});!function(e){e[e.None=0]="None",e[e.Receive=1]="Receive",e[e.Send=2]="Send"}(Y||(Y={}));var ge=r.a.memo(function(e){var t=""===e.topBlockHash,a=e.topBlockHeight!==e.topKnownBlockHeight,c=Object(n.useState)(Y.None),s=Object(o.a)(c,2),i=s[0],l=s[1],u=Object(n.useState)(Y.None),d=Object(o.a)(u,2),m=d[0],f=d[1],p=function(e){i===Y.None?l(e):i===e?l(Y.None):(l(Y.None),f(e))},_=function(){m!==Y.None&&(l(m),f(Y.None))};return r.a.createElement("div",{className:ve.a.controls},r.a.createElement("div",{className:ve.a.main},r.a.createElement("div",{className:ve.a.balance},r.a.createElement("div",{className:ve.a.balanceAvailable},w(e.spendable)),r.a.createElement("div",{className:ve.a.balancePending},!a&&e.lockedOrUnconfirmed>0&&"".concat(w(e.lockedOrUnconfirmed)," locked or unconfirmed"))),r.a.createElement("div",{className:ve.a.recv,hidden:t},r.a.createElement("button",{className:"link-like ".concat(i===Y.Receive?"active":""),onClick:function(){return p(Y.Receive)}},r.a.createElement(ae,null)," Receive")),r.a.createElement("div",{className:ve.a.send,hidden:t},r.a.createElement("button",{className:"link-like ".concat(i===Y.Send?"active":""),onClick:function(){return p(Y.Send)},disabled:a},r.a.createElement(z,null)," Send"))),r.a.createElement(K.a,{in:i===Y.Receive,onExited:_,unmountOnExit:!0,timeout:300,classNames:"balance-drawer-form"},r.a.createElement("div",{className:ve.a.drawer},r.a.createElement(le,{addresses:e.addresses,cancel:function(){return l(Y.None)}}))),r.a.createElement(K.a,{in:i===Y.Send,onExited:_,unmountOnExit:!0,timeout:300,classNames:"balance-drawer-form"},r.a.createElement("div",{className:ve.a.drawer},r.a.createElement(fe,{cancel:function(){return l(Y.None)}}))))}),ye=a(62),ke=a(39);function Ee(){return(Ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function Oe(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var we=r.a.createElement("defs",{id:"defs2874"}),xe=r.a.createElement("g",{transform:"matrix(0.9526244,-0.9526244,0.9526244,0.9526244,-171.46445,457.97782)",id:"Ebene_1"},r.a.createElement("polygon",{points:"902.25049,222.98633 233.17773,222.98633 233.17773,364.71875 0,182.35938 233.17773,0 233.17773,141.73242 902.25049,141.73242 902.25049,222.98633 ",id:"path2050"})),Se=function(e){var t=e.svgRef,a=Oe(e,["svgRef"]);return r.a.createElement("svg",Ee({width:800,height:800,viewBox:"0 0 902.25049 364.71875",id:"svg2868",xmlSpace:"preserve",ref:t},a),we,xe)},je=r.a.forwardRef(function(e,t){return r.a.createElement(Se,Ee({svgRef:t},e))}),Ne=(a.p,a(6)),He=a.n(Ne),Re=r.a.memo(function(e){var t=e.history;return r.a.createElement("div",{className:He.a.history},r.a.createElement(ye.a,{component:null},t.map(function(e){return r.a.createElement(K.a,{key:e.date.valueOf(),timeout:1e3,classNames:"history-day"},r.a.createElement(De,e))})))}),De=r.a.memo(function(e){return r.a.createElement("div",{className:He.a.historyDay},r.a.createElement("div",{className:He.a.historyDayHeader},r.a.createElement("div",{className:He.a.historyDayDate},e.date.toLocaleDateString(navigator.language,{weekday:"short",day:"numeric",month:"short",year:"numeric"}))),r.a.createElement("div",{className:He.a.historyDayRows},r.a.createElement(ye.a,{component:null,appear:!0},Object(ke.flatMap)(e.blocks,function(e){var t=e.transactions.map(function(t){return r.a.createElement(K.a,{key:t.hash,timeout:1e3,classNames:"history-row"},r.a.createElement(Be,Object.assign({},t,{confirmed:e.header.confirmed})))}),a=e.unlockedTransfers.map(function(e){return r.a.createElement(K.a,{key:"".concat(e.amount,"#").concat(e.address,"@").concat(e.transactionHash),timeout:1e3,classNames:"history-row"},r.a.createElement("div",{className:He.a.unlockedTransferContainer},r.a.createElement(Te,Object.assign({},e,{isUnlock:!0}))))});return[].concat(Object(u.a)(t),Object(u.a)(a))}))))}),Be=r.a.memo(function(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),c=a[0],s=a[1],i=Object(n.useState)(!1),l=Object(o.a)(i,2),u=l[0],d=l[1],m=x[e.kind];return r.a.createElement("div",{className:"".concat(He.a.tx," ").concat(m)},r.a.createElement("div",{className:"".concat(He.a.txBody," ").concat(c?"expanded":""," ").concat(u?"details-animating":""," ").concat(e.confirmed?"confirmed":"unconfirmed"),onClick:function(){return s(!c)}},e.summary.map(function(t){return r.a.createElement(Te,Object.assign({key:t.address},t,{unconfirmed:!e.confirmed}))})),r.a.createElement(K.a,{in:c,unmountOnExit:!0,timeout:300,classNames:"history-tx-details",onExit:function(){return d(!0)},onExited:function(){return d(!1)}},r.a.createElement("div",{className:He.a.txDetails},r.a.createElement("div",{className:He.a.txMetadata},r.a.createElement("span",{className:He.a.txBlockTime},e.time.toLocaleTimeString(navigator.language,{hour:"numeric",minute:"numeric"})),r.a.createElement("a",{className:He.a.txHash,href:"https://explorer.bytecoin.org/tx?hash=".concat(e.hash),title:e.hash,target:"_blank",rel:"noreferrer noopener"},e.hash),r.a.createElement("span",{className:He.a.txFee},"Fee ",w(e.fee,3))),e.transfers.spend.map(function(e){return r.a.createElement(Te,Object.assign({key:"spend-".concat(e.address),detailed:!0},e))}),e.transfers.send.map(function(e){return r.a.createElement(Te,Object.assign({key:"send-".concat(e.address),detailed:!0,genSendproof:!0},e))}),e.transfers.receive.map(function(e){return r.a.createElement(Te,Object.assign({key:"receive-".concat(e.address),detailed:!0},e))}),e.transfers.change.map(function(e){return r.a.createElement(Te,Object.assign({key:"change-".concat(e.address),detailed:!0},e))}))))}),Te=r.a.memo(function(e){var t=e.kind===S.Spend,a=e.kind===S.Send,c=e.kind===S.Receive,s=e.unlockBlockOrTimestamp>0?e.unlockBlockOrTimestamp>5e8?"Locked until ".concat(new Date(1e3*e.unlockBlockOrTimestamp).toLocaleString(navigator.language,{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"})):"Locked until block #".concat(e.unlockBlockOrTimestamp):"",i=Object(n.useState)(""),l=Object(o.a)(i,2),u=l[0],d=l[1],m=Object(n.useContext)(j),f=e.isUnlock?"Unlocked transfer":c?"Received to":a?"Sent to":t?"Sent from":"Change";e.locked&&(f+=" (locked)");var p=e.isUnlock?"Unlocked":e.locked?"Locked":"";return Object(n.useEffect)(function(){e.genSendproof&&m&&m.createSendproof({transaction_hash:e.transactionHash,address:e.address}).then(function(e){d(e.sendproof)})},[m,e.genSendproof,e.transactionHash,e.address]),r.a.createElement("div",{className:He.a.transfer},r.a.createElement("div",{className:He.a.transferLeft},r.a.createElement("div",{className:He.a.transferKind},c?r.a.createElement(ae,null):a?r.a.createElement(z,null):t?r.a.createElement(je,null):r.a.createElement(ae,null)),r.a.createElement("div",{className:He.a.transferDetails},r.a.createElement("div",{className:He.a.transferIcon},r.a.createElement(Ae,{address:e.address})),r.a.createElement("div",{className:He.a.transferDescription},r.a.createElement("div",{className:He.a.transferHelp},f),r.a.createElement("div",{className:He.a.transferAddress},e.ours&&r.a.createElement("span",{className:He.a.transferAddressOurs,role:"img","aria-label":"wallet address"},"\ud83d\udc5b")," ",e.address),r.a.createElement("div",{className:He.a.transferMessage},e.message&&r.a.createElement("q",null,e.message))))),r.a.createElement("div",{className:He.a.transferRight},e.detailed&&e.locked&&r.a.createElement("div",{className:He.a.transferUnlockTime},s),r.a.createElement("div",{className:"".concat(He.a.transferAmount," ").concat(p)},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,a=e>0?"+":e<0?"\u2212":"";return(arguments.length>2&&void 0!==arguments[2]&&arguments[2]&&""!==a?a+"\u202f":"")+w(Math.abs(e),t)}(e.amount,e.detailed?3:2,e.ours),e.locked&&r.a.createElement("span",{className:He.a.transferAmountLocked},"\ud83d\udd12"),e.isUnlock&&r.a.createElement("span",{className:He.a.transferAmountUnlocked},"\ud83d\udd13"),e.unconfirmed&&r.a.createElement("span",{className:He.a.transferUnconfirmed},"\u23f3")),u&&r.a.createElement("div",{className:He.a.transferSendproof},r.a.createElement("a",{href:"https://explorer.bytecoin.org/search?search=".concat(u),title:"See sendproof in Bytecoin Explorer",target:"_blank",rel:"noreferrer noopener"},"Sendproof"))))}),Ae=r.a.memo(function(e){return r.a.createElement("div",{className:He.a.addressIcon,title:e.address},r.a.createElement(ie,{message:e.address}))}),Ue=Re,Fe=a(28),Ce=a.n(Fe),Pe={topBlockHeight:0,topBlockTime:new Date(0),topBlockHash:"",topKnownBlockHeight:0,lowerLevelError:""},Ie={spendable:0,lockedOrUnconfirmed:0},Le=r.a.memo(function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(Pe),i=Object(o.a)(s,2),l=i[0],u=i[1],d=Object(n.useState)(Ie),m=Object(o.a)(d,2),f=m[0],p=m[1],_=Object(n.useState)([]),h=Object(o.a)(_,2),v=h[0],b=h[1],g=Object(n.useState)([]),y=Object(o.a)(g,2),k=y[0],E=y[1];return Object(n.useEffect)(function(){(function(e,t,a,n,r){return B.apply(this,arguments)})(c,u,p,b,E).then(function(){console.error("THE END")})},[]),r.a.createElement("div",{className:Ce.a.app},r.a.createElement(j.Provider,{value:a},r.a.createElement(be,l),r.a.createElement(ge,Object.assign({},l,f,{addresses:v})),r.a.createElement(Ue,{history:k}),r.a.createElement("div",{className:Ce.a.footer},"\xa9 2019 The Bytecoin developers \xb7 ",r.a.createElement("a",{href:"https://github.com/bcndev/bytecoin-zero/blob/master/doc/index.md",target:"_blank",rel:"noreferrer noopener"},"Documentation")),r.a.createElement("div",{className:Ce.a.warning},"Unstable development version. For testing only.")))});s.a.render(r.a.createElement(Le,null),document.getElementById("root"))},6:function(e,t,a){e.exports={history:"History_history__3m48Z",historyDay:"History_historyDay__MS_O1",historyDayHeader:"History_historyDayHeader__QQ7e6",historyDayDate:"History_historyDayDate__3yrV-",historyDayRows:"History_historyDayRows__16fnV",tx:"History_tx__2fPJs",txBody:"History_txBody__2Agvz",transfer:"History_transfer__2KCQp",transferLeft:"History_transferLeft__1M3ZX",transferRight:"History_transferRight__291Rd",transferKind:"History_transferKind__2_rsq",transferDetails:"History_transferDetails__2--cR",transferIcon:"History_transferIcon__3CLzM",transferDescription:"History_transferDescription__1nIrR",transferAddress:"History_transferAddress__13N9Z",transferAddressOurs:"History_transferAddressOurs__2QuZW",transferHelp:"History_transferHelp__QlVmn",transferMessage:"History_transferMessage__3wR4k",transferUnlockTime:"History_transferUnlockTime__12h5U",transferAmount:"History_transferAmount__3HBML",unlockedTransferContainer:"History_unlockedTransferContainer__1xP2t",transferAmountLocked:"History_transferAmountLocked__iubWj",transferAmountUnlocked:"History_transferAmountUnlocked__2IThK",transferUnconfirmed:"History_transferUnconfirmed__2QYx5",transferSendproof:"History_transferSendproof__3t8ZJ",addressIcon:"History_addressIcon__3IPXL",txDetails:"History_txDetails__2fFz9",txMetadata:"History_txMetadata__26edo",txBlockTime:"History_txBlockTime__34qQ0",txHash:"History_txHash__3VJ4U",txFee:"History_txFee__2frgk"}},8:function(e,t,a){e.exports={status:"Header_status__3GdbX",statusIcon:"Header_statusIcon__3l5kg",syncStatusSummary:"Header_syncStatusSummary__13R4E",syncStatus:"Header_syncStatus__2bShQ",settings:"Header_settings__fwyj8",syncStatusBlock:"Header_syncStatusBlock__QGm0w",syncStatusTimestamp:"Header_syncStatusTimestamp__3CIJb",syncStatusError:"Header_syncStatusError__D0k4Z",ellipsis:"Header_ellipsis__18Dt5",controls:"Header_controls__c8U9c",main:"Header_main__3Ub_W",balance:"Header_balance__1vbiD",recv:"Header_recv__2kAPq",send:"Header_send__vE6ox",balanceAvailable:"Header_balanceAvailable__3OcSq",balancePending:"Header_balancePending__OPnZB",settingsIcon:"Header_settingsIcon__WaNwf",drawer:"Header_drawer__6QQ6R"}}},[[43,1,2]]]);
//# sourceMappingURL=main.bc9b22a1.chunk.js.map