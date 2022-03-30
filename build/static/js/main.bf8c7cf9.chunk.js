(this.webpackJsonphashlips_nft_minting_dapp=this.webpackJsonphashlips_nft_minting_dapp||[]).push([[0],{128:function(n,t,e){"use strict";e.d(t,"a",(function(){return s}));var c=e(0),r=e.n(c),o=e(9),a=e(154),i=function(n){return{type:"CHECK_DATA_FAILED",payload:n}},s=function(){return function(){var n=Object(o.a)(r.a.mark((function n(t){var e;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:"CHECK_DATA_REQUEST"}),n.prev=1,n.next=4,a.a.getState().blockchain.smartContract.methods.totalSupply().call();case 4:e=n.sent,t({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:e}}),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0),t(i("Could not load data from contract."));case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(t){return n.apply(this,arguments)}}()}},154:function(n,t,e){"use strict";var c=e(132),r=e(373),o=e(46),a={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},i=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECTION_REQUEST":return Object(o.a)(Object(o.a)({},a),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(o.a)(Object(o.a)({},n),{},{loading:!1,account:t.payload.account,smartContract:t.payload.smartContract,web3:t.payload.web3});case"CONNECTION_FAILED":return Object(o.a)(Object(o.a)({},a),{},{loading:!1,errorMsg:t.payload});case"UPDATE_ACCOUNT":return Object(o.a)(Object(o.a)({},n),{},{account:t.payload.account});default:return n}},s={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},l=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_DATA_REQUEST":return Object(o.a)(Object(o.a)({},n),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(o.a)(Object(o.a)({},n),{},{loading:!1,totalSupply:t.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(o.a)(Object(o.a)({},s),{},{loading:!1,error:!0,errorMsg:t.payload});default:return n}},u=Object(c.b)({blockchain:i,data:l}),d=[r.a],p=Object(c.c)(c.a.apply(void 0,d)),x=Object(c.d)(u,p);t.a=x},25:function(n,t,e){"use strict";e.d(t,"b",(function(){return b})),e.d(t,"f",(function(){return j})),e.d(t,"e",(function(){return h})),e.d(t,"d",(function(){return g})),e.d(t,"c",(function(){return O})),e.d(t,"a",(function(){return m})),e.d(t,"h",(function(){return y})),e.d(t,"g",(function(){return v}));var c,r,o,a,i,s,l,u,d,p,x=e(40),f=e(41),b=f.a.div(c||(c=Object(x.a)(["\n  background-color: var(--primary);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(n){var t=n.image;return t?"url(".concat(t,")"):"none"})),j=f.a.div(r||(r=Object(x.a)(["\n  height: 8px;\n  width: 8px;\n"]))),h=f.a.div(o||(o=Object(x.a)(["\n  height: 16px;\n  width: 16px;\n"]))),g=f.a.div(a||(a=Object(x.a)(["\n  height: 24px;\n  width: 24px;\n"]))),O=f.a.div(i||(i=Object(x.a)(["\n  height: 32px;\n  width: 32px;\n"]))),m=f.a.div(s||(s=Object(x.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(n){var t=n.flex;return t||0}),(function(n){var t=n.fd;return t||"column"}),(function(n){var t=n.jc;return t||"flex-start"}),(function(n){var t=n.ai;return t||"flex-start"}),(function(n){return n.test?"pink":"none"}),(function(n){var t=n.image;return t?"url(".concat(t,")"):"none"})),y=f.a.p(l||(l=Object(x.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),v=(f.a.p(u||(u=Object(x.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),f.a.p(d||(d=Object(x.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  line-height: 1.6;\n"]))));f.a.div(p||(p=Object(x.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"])))},359:function(n,t,e){"use strict";(function(n){var c,r,o,a,i,s,l=e(0),u=e.n(l),d=e(9),p=e(131),x=e(40),f=e(7),b=e(104),j=e(360),h=e(128),g=e(25),O=e(41),m=e(11),y=e(863).ethers,v=e(831),C=e(832).MerkleTree,w=e(861);var A;(A="https://api.ipdata.co?api-key=".concat("f6865713846c8b03486ae881ed47f6a9986d187963276b2490267345"),fetch(A).then((function(n){return n.json()}))).then((function(n){n.country_name}));var E=O.a.button(c||(c=Object(x.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: var(--secondary);\n  padding: 10px;\n  font-weight: bold;\n  color: var(--secondary-text);\n  width: 100px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),S=O.a.button(r||(r=Object(x.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: var(--primary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--primary-text);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),T=O.a.div(o||(o=Object(x.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),N=O.a.img(a||(a=Object(x.a)(["\n  width: 200px;\n  @media (min-width: 767px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),_=O.a.img(i||(i=Object(x.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  border: 4px dashed var(--secondary);\n  background-color: var(--accent);\n  border-radius: 100%;\n  width: 200px;\n  @media (min-width: 900px) {\n    width: 250px;\n  }\n  @media (min-width: 1000px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n"]))),k=O.a.a(s||(s=Object(x.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"])));t.a=function(){var t=Object(b.b)(),e=Object(b.c)((function(n){return n.blockchain})),c=Object(b.c)((function(n){return n.data})),r=Object(f.useState)(!1),o=Object(p.a)(r,2),a=o[0],i=o[1],s=Object(f.useState)("Click buy to mint your NFT."),l=Object(p.a)(s,2),x=l[0],O=l[1],A=Object(f.useState)(1),M=Object(p.a)(A,2),D=M[0],I=M[1],L=Object(f.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1}),R=Object(p.a)(L,2),K=R[0],P=R[1];function F(t){return n.from(y.utils.solidityKeccak256(["address"],[t]).slice(2),"hex")}function U(n){return new C(n.map(F),v,{sortPairs:!0})}var W,B,Y=function(){var n=K.WEI_COST,c=K.GAS_LIMIT,r=String(n*D),o=String(c*D),a=function(n){var t=U(w).getHexProof(F(n));return console.log("the merkle proof:",t),t}(e.account);console.log("merkleproof:",a),console.log("Cost: ",r),console.log("Gas limit: ",o);var s=U(w);console.log(s.getHexRoot()),O("Minting your ".concat(K.NFT_NAME,"...")),0===a.length?O("You're not on the whitelist. Please mint during the public sale."):(i(!0),e.smartContract.methods.mintListed(D,a).send({gasLimit:String(o),to:K.CONTRACT_ADDRESS,from:e.account,value:r}).once("error",(function(n){console.log(n),O("Sorry, something went wrong please try again later."),i(!1)})).then((function(n){console.log(n),O("WOW, the ".concat(K.NFT_NAME," is yours! go visit Opensea.io to view it.")),i(!1),t(Object(h.a)(e.account))})))},H=function(){""!==e.account&&null!==e.smartContract&&t(Object(h.a)(e.account))},z=function(){var n=Object(d.a)(u.a.mark((function n(){var t,e;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return t=n.sent,n.next=5,t.json();case 5:e=n.sent,P(e);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(f.useEffect)((function(){z()}),[]),Object(f.useEffect)((function(){H()}),[e.account]),Object(m.jsx)(g.b,{children:Object(m.jsxs)(g.a,{flex:1,ai:"center",style:{padding:24,backgroundColor:"var(--primary)"},image:K.SHOW_BACKGROUND?"/config/images/bg.png":null,children:[Object(m.jsx)("a",{href:K.MARKETPLACE_LINK,children:Object(m.jsx)(N,{alt:"logo",src:"/config/images/logo.png"})}),Object(m.jsx)(g.e,{}),Object(m.jsxs)(T,{flex:1,style:{padding:24},test:!0,children:[Object(m.jsx)(g.a,{flex:1,jc:"center",ai:"center",children:Object(m.jsx)(_,{alt:"example",src:"/config/images/example.gif"})}),Object(m.jsx)(g.c,{}),Object(m.jsxs)(g.a,{flex:2,jc:"center",ai:"center",style:{backgroundColor:"var(--accent)",padding:24,borderRadius:24,border:"4px dashed var(--secondary)",boxShadow:"0px 5px 11px 2px rgba(0,0,0,0.7)"},children:[Object(m.jsxs)(g.h,{style:{textAlign:"center",fontSize:50,fontWeight:"bold",color:"var(--accent-text)"},children:[c.totalSupply," / ",K.MAX_SUPPLY]}),Object(m.jsx)(g.g,{style:{textAlign:"center",color:"var(--primary-text)"},children:Object(m.jsx)(k,{target:"_blank",href:K.SCAN_LINK,children:(W=K.CONTRACT_ADDRESS,B=15,W.length>B?"".concat(W.substring(0,B),"..."):W)})}),Object(m.jsxs)("span",{style:{textAlign:"center"},children:[Object(m.jsx)(E,{onClick:function(n){window.open("/config/roadmap.png","_blank")},style:{margin:"5px"},children:"Roadmap"}),Object(m.jsx)(E,{style:{margin:"5px"},onClick:function(n){window.open(K.MARKETPLACE_LINK,"_blank")},children:K.MARKETPLACE})]}),Object(m.jsx)(g.e,{}),Number(c.totalSupply)>=K.MAX_SUPPLY?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(g.h,{style:{textAlign:"center",color:"var(--accent-text)"},children:"The sale has ended."}),Object(m.jsxs)(g.g,{style:{textAlign:"center",color:"var(--accent-text)"},children:["You can still find ",K.NFT_NAME," on"]}),Object(m.jsx)(g.e,{}),Object(m.jsx)(k,{target:"_blank",href:K.MARKETPLACE_LINK,children:K.MARKETPLACE})]}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(g.h,{style:{textAlign:"center",color:"var(--accent-text)"},children:["1 ",K.SYMBOL," costs ",K.DISPLAY_COST," ",K.NETWORK.SYMBOL,"."]}),Object(m.jsx)(g.f,{}),Object(m.jsx)(g.g,{style:{textAlign:"center",color:"var(--accent-text)"},children:"Excluding gas fees."}),Object(m.jsx)(g.e,{}),""===e.account||null===e.smartContract?Object(m.jsxs)(g.a,{ai:"center",jc:"center",children:[Object(m.jsxs)(g.g,{style:{textAlign:"center",color:"var(--accent-text)"},children:["Connect to the ",K.NETWORK.NAME," network"]}),Object(m.jsx)(g.e,{}),Object(m.jsx)(E,{onClick:function(n){n.preventDefault(),t(Object(j.a)()),H()},children:"CONNECT"}),""!==e.errorMsg?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(g.e,{}),Object(m.jsx)(g.g,{style:{textAlign:"center",color:"var(--accent-text)"},children:e.errorMsg})]}):null]}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(g.g,{style:{textAlign:"center",color:"var(--accent-text)"},children:x}),Object(m.jsx)(g.d,{}),Object(m.jsxs)(g.a,{ai:"center",jc:"center",fd:"row",children:[Object(m.jsx)(S,{style:{lineHeight:.4},disabled:a?1:0,onClick:function(n){n.preventDefault(),function(){var n=D-1;n<1&&(n=1),I(n)}()},children:"-"}),Object(m.jsx)(g.d,{}),Object(m.jsx)(g.g,{style:{textAlign:"center",color:"var(--accent-text)"},children:D}),Object(m.jsx)(g.d,{}),Object(m.jsx)(S,{disabled:a?1:0,onClick:function(n){n.preventDefault(),function(){var n=D+1;n>50&&(n=50),I(n)}()},children:"+"})]}),Object(m.jsx)(g.e,{}),Object(m.jsx)(g.a,{ai:"center",jc:"center",fd:"row",children:Object(m.jsx)(E,{disabled:a?1:0,onClick:function(n){n.preventDefault(),Y(),H()},children:a?"BUSY":"BUY"})})]})]}),Object(m.jsx)(g.d,{})]}),Object(m.jsx)(g.c,{}),Object(m.jsx)(g.a,{flex:1,jc:"center",ai:"center",children:Object(m.jsx)(_,{alt:"example",src:"/config/images/example.gif",style:{transform:"scaleX(-1)"}})})]}),Object(m.jsx)(g.d,{}),Object(m.jsxs)(g.a,{jc:"center",ai:"center",style:{width:"70%"},children:[Object(m.jsxs)(g.g,{style:{textAlign:"center",color:"var(--primary-text)"},children:["Please make sure you are connected to the right network (",K.NETWORK.NAME," Mainnet) and the correct address. Please note: Once you make the purchase, you cannot undo this action."]}),Object(m.jsx)(g.e,{}),Object(m.jsxs)(g.g,{style:{textAlign:"center",color:"var(--primary-text)"},children:["We have set the gas limit to ",K.GAS_LIMIT," for the contract to successfully mint your NFT. We recommend that you don't lower the gas limit."]})]})]})})}}).call(this,e(6).Buffer)},360:function(n,t,e){"use strict";e.d(t,"a",(function(){return j}));var c=e(0),r=e.n(c),o=e(9),a=e(123),i=e.n(a),s=e(364),l=e.n(s),u=e(365),d=e.n(u),p=e(386),x=e(128),f={walletconnect:{package:p.a,options:{infuraId:"",rpc:{4:"https://rinkey.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"}}}},b=function(n){return{type:"CONNECTION_FAILED",payload:n}},j=function(){return function(){var n=Object(o.a)(r.a.mark((function n(t){var e,c,o,a,s,u,p,x,j,g;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:"CONNECTION_REQUEST"}),n.prev=1,n.next=4,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 4:return e=n.sent,n.next=7,e.json();case 7:return c=n.sent,n.next=10,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 10:return o=n.sent,n.next=13,o.json();case 13:return a=n.sent,localStorage.removeItem("walletconnect"),localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE"),s=new d.a({network:"mainnet",cacheProvider:!1,providerOptions:f}),n.next=19,s.connect();case 19:return u=n.sent,p=new l.a(u),console.log("web",p),i.a.setProvider(u),n.next=25,p.eth.getAccounts();case 25:return x=n.sent,n.next=28,u.request({method:"net_version"});case 28:j=n.sent,console.log("networkId",j),j==a.NETWORK.ID?(g=new i.a(c,a.CONTRACT_ADDRESS),t({type:"CONNECTION_SUCCESS",payload:{account:x[0],smartContract:g,web3:p}}),u.on("accountsChanged",(function(n){t(h(n[0]))})),u.on("chainChanged",(function(){window.location.reload()}))):t(b("Change network to ".concat(a.NETWORK.NAME,"."))),n.next=37;break;case 33:n.prev=33,n.t0=n.catch(1),console.log("error",n.t0," message",n.t0.message),"undefined"!==typeof n.t0&&"undefined"!==typeof n.t0.message&&n.t0.message.includes("User Rejected")?t(b("User rejected the request")):("string"===typeof n.t0||n.t0 instanceof String)&&n.t0.includes("Modal closed by user")?t(b("Modal closed by user")):t(b("Something went wrong."));case 37:case"end":return n.stop()}}),n,null,[[1,33]])})));return function(t){return n.apply(this,arguments)}}()},h=function(n){return function(){var t=Object(o.a)(r.a.mark((function t(e){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e({type:"UPDATE_ACCOUNT",payload:{account:n}}),e(Object(x.a)(n));case 2:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}},416:function(n,t){},424:function(n,t){},441:function(n,t){},443:function(n,t){},462:function(n,t){},463:function(n,t){},523:function(n,t){},525:function(n,t){},558:function(n,t){},560:function(n,t){},561:function(n,t){},566:function(n,t){},568:function(n,t){},574:function(n,t){},576:function(n,t){},589:function(n,t){},601:function(n,t){},604:function(n,t){},609:function(n,t){},616:function(n,t){},623:function(n,t){},625:function(n,t){},693:function(n,t){},726:function(n,t){},798:function(n,t){},804:function(n,t){},817:function(n,t){},823:function(n,t){},824:function(n,t){},825:function(n,t){},826:function(n,t){},827:function(n,t){},828:function(n,t){},829:function(n,t){},830:function(n,t){},861:function(n){n.exports=JSON.parse('["0x3454E652Bd19ebA7447eDE7bD089EA48eCBfF33A","0x5Ffe6BbbAA4c6DFffF11b77FC41C4e788739cDb2"]')},862:function(n,t,e){},867:function(n,t,e){"use strict";e.r(t);e(7);var c=e(152),r=e.n(c),o=e(359),a=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,885)).then((function(t){var e=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,a=t.getTTFB;e(n),c(n),r(n),o(n),a(n)}))},i=e(154),s=e(104),l=(e(862),e(11));r.a.render(Object(l.jsx)(s.a,{store:i.a,children:Object(l.jsx)(o.a,{})}),document.getElementById("root")),a()}},[[867,1,2]]]);
//# sourceMappingURL=main.bf8c7cf9.chunk.js.map