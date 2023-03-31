"use strict";(self.webpackChunksm_docs=self.webpackChunksm_docs||[]).push([[8843],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>s});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),p=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(c.Provider,{value:e},t.children)},m="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,c=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),m=p(n),d=a,s=m["".concat(c,".").concat(d)]||m[d]||k[d]||l;return n?r.createElement(s,o(o({ref:e},u),{},{components:n})):r.createElement(s,o({ref:e},u))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i[m]="string"==typeof t?t:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},840:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={title:"44 - Connect WIP"},o="Connect",i={unversionedId:"networking/packets/connect",id:"networking/packets/connect",title:"44 - Connect WIP",description:"This packet is sent when the player changes a connection between 2 connection points with the connect tool.",source:"@site/docs/networking/packets/44-connect.mdx",sourceDirName:"networking/packets",slug:"/networking/packets/connect",permalink:"/docs/networking/packets/connect",draft:!1,editUrl:"https://pr.new/github.com/Scrap-Mechanic-Modding/Scrap-Mechanic-Modding.github.io/blob/main/docs/networking/packets/44-connect.mdx",tags:[],version:"current",sidebarPosition:44,frontMatter:{title:"44 - Connect WIP"},sidebar:"networkingSidebar",previous:{title:"34 - Remove WIP",permalink:"/docs/networking/packets/remove"},next:{title:"50 - Interact WIP",permalink:"/docs/networking/packets/interact"}},c={},p=[{value:"Structure",id:"structure",level:2},{value:"Connecting",id:"connecting",level:4},{value:"Rotating",id:"rotating",level:4}],u={toc:p},m="wrapper";function k(t){let{components:e,...n}=t;return(0,a.kt)(m,(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"connect"},"Connect"),(0,a.kt)("p",null,"This packet is sent when the player changes a connection between 2 connection points with the connect tool."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"ID"),": 0x2C (44)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Size"),": (0x0A | 10 bytes)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"LZ4 Compressed"),": No"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"State"),": Playing"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Bound To"),": Client -> Server")),(0,a.kt)("h2",{id:"structure"},"Structure"),(0,a.kt)("h4",{id:"connecting"},"Connecting"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Offset"),(0,a.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Field Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"0x00"),(0,a.kt)("td",{parentName:"tr",align:null},"Unknown"),(0,a.kt)("td",{parentName:"tr",align:null},"u8"),(0,a.kt)("td",{parentName:"tr",align:null},"0x90")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"0x04"),(0,a.kt)("td",{parentName:"tr",align:null},"shapeID1"),(0,a.kt)("td",{parentName:"tr",align:null},"be u32"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"0x01"),(0,a.kt)("td",{parentName:"tr",align:null},"shapeID2"),(0,a.kt)("td",{parentName:"tr",align:null},"be u32"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h4",{id:"rotating"},"Rotating"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Offset"),(0,a.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Field Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"0x00"),(0,a.kt)("td",{parentName:"tr",align:null},"Unknown"),(0,a.kt)("td",{parentName:"tr",align:null},"u8"),(0,a.kt)("td",{parentName:"tr",align:null},"0x90")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"0x04"),(0,a.kt)("td",{parentName:"tr",align:null},"ConnectIndex"),(0,a.kt)("td",{parentName:"tr",align:null},"be u32"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"0x01"),(0,a.kt)("td",{parentName:"tr",align:null},"ParentShapeId"),(0,a.kt)("td",{parentName:"tr",align:null},"be u32"),(0,a.kt)("td",{parentName:"tr",align:null})))))}k.isMDXComponent=!0}}]);