"use strict";(self.webpackChunksm_docs=self.webpackChunksm_docs||[]).push([[132],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=c(n),m=a,h=s["".concat(p,".").concat(m)]||s[m]||d[m]||i;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1685:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={title:"31 - Equipped Item Changed"},l="Equipped Item Changed",o={unversionedId:"networking/packets/hotbar-item-changed",id:"networking/packets/hotbar-item-changed",title:"31 - Equipped Item Changed",description:"This packet is sent when the player equips a different item. No packet is sent when both the UUID and the Tool Instance ID are the same as the previous equipped item.",source:"@site/docs/networking/packets/31-hotbar-item-changed.mdx",sourceDirName:"networking/packets",slug:"/networking/packets/hotbar-item-changed",permalink:"/docs/networking/packets/hotbar-item-changed",draft:!1,editUrl:"https://pr.new/github.com/Scrap-Mechanic-Modding/Scrap-Mechanic-Modding.github.io/blob/main/docs/networking/packets/31-hotbar-item-changed.mdx",tags:[],version:"current",sidebarPosition:31,frontMatter:{title:"31 - Equipped Item Changed"},sidebar:"networkingSidebar",previous:{title:"30 - Player Movement",permalink:"/docs/networking/packets/player-movement"},next:{title:"50 - Interact",permalink:"/docs/networking/packets/interact"}},p={},c=[{value:"Structure",id:"structure",level:2}],u={toc:c},s="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"equipped-item-changed"},"Equipped Item Changed"),(0,a.kt)("p",null,"This packet is sent when the player equips a different item. No packet is sent when both the UUID and the Tool Instance ID are the same as the previous equipped item."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"ID"),": 0x1F (31)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Size"),": 24 bytes"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"LZ4 Compressed"),": Yes"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"State"),": Playing"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Bound To"),": Client -> Server")),(0,a.kt)("h2",{id:"structure"},"Structure"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Offset"),(0,a.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Field Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"0x00"),(0,a.kt)("td",{parentName:"tr",align:null},"Character ID"),(0,a.kt)("td",{parentName:"tr",align:null},"be u32"),(0,a.kt)("td",{parentName:"tr",align:null},"The character ID of the player sending the packet.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"0x04"),(0,a.kt)("td",{parentName:"tr",align:null},"Uuid"),(0,a.kt)("td",{parentName:"tr",align:null},"le u128"),(0,a.kt)("td",{parentName:"tr",align:null},"The UUID of the newly equiped item. ",(0,a.kt)("inlineCode",{parentName:"td"},"00000000-0000-0000-0000-000000000000")," when no item is equipped")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"0x14"),(0,a.kt)("td",{parentName:"tr",align:null},"Tool Instance ID"),(0,a.kt)("td",{parentName:"tr",align:null},"be u32"),(0,a.kt)("td",{parentName:"tr",align:null},"The instance id of the newly equiped tool. Always ",(0,a.kt)("inlineCode",{parentName:"td"},"0xFFFFFFFF")," for items that are not tools or when no item is equipped.")))))}d.isMDXComponent=!0}}]);