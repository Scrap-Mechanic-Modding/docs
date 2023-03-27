"use strict";(self.webpackChunksm_docs=self.webpackChunksm_docs||[]).push([[611],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),i=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=i(r),m=a,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||s;return r?n.createElement(k,p(p({ref:t},c),{},{components:r})):n.createElement(k,p({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,p=new Array(s);p[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:a,p[1]=o;for(var i=2;i<s;i++)p[i]=r[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8732:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>i});var n=r(7462),a=(r(7294),r(3905));const s={title:"04 - Respond Passphrase"},p="Respond Passphrase",o={unversionedId:"networking/packets/respond-passphrase",id:"networking/packets/respond-passphrase",title:"04 - Respond Passphrase",description:"The client sends this packet to the server to respond to the passphrase challenge.",source:"@site/docs/networking/packets/04-respond-passphrase.mdx",sourceDirName:"networking/packets",slug:"/networking/packets/respond-passphrase",permalink:"/docs/networking/packets/respond-passphrase",draft:!1,editUrl:"https://pr.new/github.com/Scrap-Mechanic-Modding/Scrap-Mechanic-Modding.github.io/blob/main/docs/networking/packets/04-respond-passphrase.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"04 - Respond Passphrase"},sidebar:"networkingSidebar",previous:{title:"03 - Request Passphrase",permalink:"/docs/networking/packets/request-passphrase"},next:{title:"05 - Client Accepted",permalink:"/docs/networking/packets/client-accepted"}},l={},i=[{value:"Structure",id:"structure",level:2}],c={toc:i},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"respond-passphrase"},"Respond Passphrase"),(0,a.kt)("p",null,"The client sends this packet to the server to respond to the passphrase challenge."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"ID"),": 0x04"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Size"),": Variable"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"LZ4 Compressed"),": No"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"State"),": Joining"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Bound To"),": Client -> Server")),(0,a.kt)("h2",{id:"structure"},"Structure"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Offset"),(0,a.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Field Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"0x0"),(0,a.kt)("td",{parentName:"tr",align:null},"Magic"),(0,a.kt)("td",{parentName:"tr",align:null},"Byte"),(0,a.kt)("td",{parentName:"tr",align:null},"Should be ",(0,a.kt)("inlineCode",{parentName:"td"},"$"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"0x1"),(0,a.kt)("td",{parentName:"tr",align:null},"Passphrase"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Until the end of packet")))))}d.isMDXComponent=!0}}]);