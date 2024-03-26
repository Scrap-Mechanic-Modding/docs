"use strict";(self.webpackChunksm_docs=self.webpackChunksm_docs||[]).push([[3086],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),s=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),k=a,d=p["".concat(o,".").concat(k)]||p[k]||m[k]||l;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=k;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},8742:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const l={title:"06 - File Checksums"},i="File Checksums",c={unversionedId:"networking/packets/file-checksums",id:"networking/packets/file-checksums",title:"06 - File Checksums",description:"Send the checksums of the files that the client has.",source:"@site/docs/networking/packets/06-file-checksums.mdx",sourceDirName:"networking/packets",slug:"/networking/packets/file-checksums",permalink:"/docs/networking/packets/file-checksums",draft:!1,editUrl:"https://pr.new/github.com/Scrap-Mods/docs/blob/main/docs/networking/packets/06-file-checksums.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"06 - File Checksums"},sidebar:"networkingSidebar",previous:{title:"05 - Client Accepted",permalink:"/docs/networking/packets/client-accepted"},next:{title:"07 - Checksums Accepted",permalink:"/docs/networking/packets/checksums-accepted"}},o={},s=[{value:"Structure",id:"structure",level:2}],u={toc:s},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"file-checksums"},"File Checksums"),(0,a.kt)("p",null,"Send the checksums of the files that the client has."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"ID"),": 0x06"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Size"),": variable"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"LZ4 Compressed"),": Yes"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"State"),": Joining"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Bound To"),": Client -> Server")),(0,a.kt)("h2",{id:"structure"},"Structure"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Offset"),(0,a.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Field Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"size"),(0,a.kt)("td",{parentName:"tr",align:null},"uint32"),(0,a.kt)("td",{parentName:"tr",align:null},"The size of the checksum array")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"4"),(0,a.kt)("td",{parentName:"tr",align:null},"checksum"),(0,a.kt)("td",{parentName:"tr",align:null},"uint32","[size]"),(0,a.kt)("td",{parentName:"tr",align:null},"The checksum array")))))}m.isMDXComponent=!0}}]);