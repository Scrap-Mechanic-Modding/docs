"use strict";(self.webpackChunksm_docs=self.webpackChunksm_docs||[]).push([[9115],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>s});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),p=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(u.Provider,{value:e},t.children)},m="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),m=p(n),k=r,s=m["".concat(u,".").concat(k)]||m[k]||d[k]||l;return n?a.createElement(s,i(i({ref:e},c),{},{components:n})):a.createElement(s,i({ref:e},c))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o[m]="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},9711:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={title:"09 - Character Info - WIP"},i="Character Info",o={unversionedId:"networking/packets/character-info",id:"networking/packets/character-info",title:"09 - Character Info - WIP",description:"Contains all information about a character.",source:"@site/docs/networking/packets/09-character-info.mdx",sourceDirName:"networking/packets",slug:"/networking/packets/character-info",permalink:"/docs/networking/packets/character-info",draft:!1,editUrl:"https://pr.new/github.com/Scrap-Mechanic-Modding/Scrap-Mechanic-Modding.github.io/blob/main/docs/networking/packets/09-character-info.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"09 - Character Info - WIP"},sidebar:"networkingSidebar",previous:{title:"08 - Checksums Denied",permalink:"/docs/networking/packets/checksums-denied"},next:{title:"10 - Join Confirmation",permalink:"/docs/networking/packets/join-confirmation"}},u={},p=[{value:"Structure",id:"structure",level:2}],c={toc:p},m="wrapper";function d(t){let{components:e,...n}=t;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"character-info"},"Character Info"),(0,r.kt)("p",null,"Contains all information about a character."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ID"),": 0x09"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Size"),": Variable"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"LZ4 Compressed"),": Yes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"State"),": Joining"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Bound To"),": Client <-> Server")),(0,r.kt)("h2",{id:"structure"},"Structure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"//------------------------------------------------\n//--- 010 Editor v12.0 Binary Template\n//\n//      File: SM_Packet_9\n//   Authors: ColdMeekly\n//   Version: 1.0.0\n//   Purpose: Yes\n//  Category: \n// File Mask: \n//  ID Bytes: 09 FA 7F\n//   History: \n//------------------------------------------------\n\ntypedef struct {\n    byte data[16];\n} uuid;\n\ntypedef struct {\n  \n  byte id;\n  char magic[2];\n  byte Hair; // A3 = leftmost hair, A7 = rightmost hair\n  byte name_len;\n  char name[name_len]; // TODO: Check how name affects packet\n  char magic_char[4]; // Check if magic is 00 00 00 02\n  byte is_male;\n  byte num_uuids;\n  uuid uuids[num_uuids];\n  BigEndian();\n  uint32 skin_id; // 0-4\n  LittleEndian();\n  char magic2[11];\n} SMPacket9 <optimize=false>;\n\n\nFSeek(0);\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Field Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Size"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ID"),(0,r.kt)("td",{parentName:"tr",align:null},"u8"),(0,r.kt)("td",{parentName:"tr",align:null},"1 byte"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Magic"),(0,r.kt)("td",{parentName:"tr",align:null},"u8","[2]"),(0,r.kt)("td",{parentName:"tr",align:null},"2 bytes"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Hair"),(0,r.kt)("td",{parentName:"tr",align:null},"u8"),(0,r.kt)("td",{parentName:"tr",align:null},"1 byte"),(0,r.kt)("td",{parentName:"tr",align:null},"0xA3 = leftmost hair, 0xA7 = rightmost hair")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Name Length"),(0,r.kt)("td",{parentName:"tr",align:null},"u8"),(0,r.kt)("td",{parentName:"tr",align:null},"1 byte"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Name"),(0,r.kt)("td",{parentName:"tr",align:null},"char","[Name Length]"),(0,r.kt)("td",{parentName:"tr",align:null},"Name Length bytes"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Magic 2"),(0,r.kt)("td",{parentName:"tr",align:null},"u16"),(0,r.kt)("td",{parentName:"tr",align:null},"2 bytes"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Is Male"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"1 byte"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UUID Count"),(0,r.kt)("td",{parentName:"tr",align:null},"u8"),(0,r.kt)("td",{parentName:"tr",align:null},"1 byte"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UUIDs"),(0,r.kt)("td",{parentName:"tr",align:null},"uuid[]"),(0,r.kt)("td",{parentName:"tr",align:null},"16 x UUID Count bytes"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Skin ID"),(0,r.kt)("td",{parentName:"tr",align:null},"u32"),(0,r.kt)("td",{parentName:"tr",align:null},"4 bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"0-4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Magic 3"),(0,r.kt)("td",{parentName:"tr",align:null},"u8","[11]"),(0,r.kt)("td",{parentName:"tr",align:null},"11 bytes"),(0,r.kt)("td",{parentName:"tr",align:null})))))}d.isMDXComponent=!0}}]);