"use strict";(self.webpackChunksm_docs=self.webpackChunksm_docs||[]).push([[8100],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>k});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},m="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),m=d(n),s=r,k=m["".concat(p,".").concat(s)]||m[s]||c[s]||l;return n?a.createElement(k,i(i({ref:e},u),{},{components:n})):a.createElement(k,i({ref:e},u))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[m]="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2924:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const l={title:"13 - World Info - WIP"},i="World Info",o={unversionedId:"networking/packets/world-info",id:"networking/packets/world-info",title:"13 - World Info - WIP",description:"The client sends this packet to the server to respond to the passphrase challenge.",source:"@site/docs/networking/packets/13-world-info.mdx",sourceDirName:"networking/packets",slug:"/networking/packets/world-info",permalink:"/docs/networking/packets/world-info",draft:!1,editUrl:"https://pr.new/github.com/Scrap-Mechanic-Modding/Scrap-Mechanic-Modding.github.io/blob/main/docs/networking/packets/13-world-info.mdx",tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"13 - World Info - WIP"},sidebar:"networkingSidebar",previous:{title:"10 - Join Confirmation",permalink:"/docs/networking/packets/join-confirmation"},next:{title:"18 - Display Message",permalink:"/docs/networking/packets/display-message"}},p={},d=[{value:"Structure",id:"structure",level:2},{value:"BlobData",id:"blobdata",level:3},{value:"GenericData",id:"genericdata",level:3}],u={toc:d},m="wrapper";function c(t){let{components:e,...n}=t;return(0,r.kt)(m,(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"world-info"},"World Info"),(0,r.kt)("p",null,"The client sends this packet to the server to respond to the passphrase challenge."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ID"),": 0x0D (13)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Size"),": Variable"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"LZ4 Compressed"),": Yes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"State"),": Joining"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Bound To"),": Server -> Client")),(0,r.kt)("h2",{id:"structure"},"Structure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"typedef struct {\n    byte uuid[16];\n    uint16 size;\n\n    // Check EOF instead\n    if (size < 200) {\n        byte value[size];\n    }\n    \n} GenericData <optimize=false>;\n\ntypedef struct {\n    GenericData generic;\n    uint16 worldId;\n    unsigned byte flags;\n    uint32 compressedSize;\n    if (compressedSize > 0) {\n        byte compData[compressedSize];\n    }\n} BlobData;\n\ntypedef struct {\n    uint32  gameTick;\n    BlobData blob[3]<optimize=false>;\n    \n} Packet13;\n\n\nPacket13 packet ;\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Field Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Game Tick"),(0,r.kt)("td",{parentName:"tr",align:null},"u32"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Blobs"),(0,r.kt)("td",{parentName:"tr",align:null},"BlobData[]"),(0,r.kt)("td",{parentName:"tr",align:null},"From ",(0,r.kt)("inlineCode",{parentName:"td"},"GenericData")," table in save.  Read until end of file.")))),(0,r.kt)("h3",{id:"blobdata"},"BlobData"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Field Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Data"),(0,r.kt)("td",{parentName:"tr",align:null},"GenericData"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"World ID"),(0,r.kt)("td",{parentName:"tr",align:null},"u16"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Flags"),(0,r.kt)("td",{parentName:"tr",align:null},"u8"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Compressed Size"),(0,r.kt)("td",{parentName:"tr",align:null},"u32"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Compressed Data"),(0,r.kt)("td",{parentName:"tr",align:null},"u8[]"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"genericdata"},"GenericData"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Field Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UUID"),(0,r.kt)("td",{parentName:"tr",align:null},"u8","[16]"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Size"),(0,r.kt)("td",{parentName:"tr",align:null},"u16"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Value"),(0,r.kt)("td",{parentName:"tr",align:null},"u8","[Size]"),(0,r.kt)("td",{parentName:"tr",align:null})))))}c.isMDXComponent=!0}}]);