"use strict";(self.webpackChunksm_docs=self.webpackChunksm_docs||[]).push([[668],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>f});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),u=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},d=function(e){var r=u(e.components);return n.createElement(i.Provider,{value:r},e.children)},p="mdxType",l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,f=p["".concat(i,".").concat(m)]||p[m]||l[m]||o;return t?n.createElement(f,c(c({ref:r},d),{},{components:t})):n.createElement(f,c({ref:r},d))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=m;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s[p]="string"==typeof e?e:a,c[1]=s;for(var u=2;u<o;u++)c[u]=t[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9929:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=t(7462),a=(t(7294),t(3905));const o={title:"Generic"},c=void 0,s={unversionedId:"structures/docs/imhex-patterns/genericdata",id:"structures/docs/imhex-patterns/genericdata",title:"Generic",description:"",source:"@site/docs/structures/docs/imhex-patterns/genericdata.mdx",sourceDirName:"structures/docs/imhex-patterns",slug:"/structures/docs/imhex-patterns/genericdata",permalink:"/docs/structures/docs/imhex-patterns/genericdata",draft:!1,editUrl:"https://pr.new/github.com/Scrap-Mechanic-Modding/Scrap-Mechanic-Modding.github.io/blob/main/docs/structures/docs/imhex-patterns/genericdata.mdx",tags:[],version:"current",frontMatter:{title:"Generic"},sidebar:"structuresSidebar",previous:{title:"Container",permalink:"/docs/structures/docs/imhex-patterns/container"},next:{title:"Mods",permalink:"/docs/structures/docs/imhex-patterns/mods"}},i={},u=[],d={toc:u},p="wrapper";function l(e){let{components:r,...t}=e;return(0,a.kt)(p,(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"struct DynamicDataHeader {\n    u128 uid;\n    u16 channel; // found in savegameversion 26 for player data\n    u32 key;\n    be u16 worldId;\n    u32 flags;\n    u8 compressedSize;\n};\n\nstruct Body {\n    padding[1];\n    float z;\n    float y;\n    float x;\n};\n\nstruct Trailer {\n    be u64 steamId64;\n    be u32 container;\n    be u32 unknown;\n    be u32 unknown;\n};\n\nstruct Player {\n    DynamicDataHeader header;\n    Body body;\n    Trailer trailer @ addressof(body) + header.compressedSize - 0x14;\n    u8 compressed[header.compressedSize] @ addressof(body);\n};\n\nPlayer player @ 0x00;\n")))}l.isMDXComponent=!0}}]);