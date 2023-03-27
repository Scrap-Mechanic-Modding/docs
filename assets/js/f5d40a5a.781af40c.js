"use strict";(self.webpackChunksm_docs=self.webpackChunksm_docs||[]).push([[762],{3905:(t,e,n)=>{n.d(e,{Zo:()=>o,kt:()=>g});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),u=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},o=function(t){var e=u(t.components);return a.createElement(p.Provider,{value:e},t.children)},m="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,o=d(t,["components","mdxType","originalType","parentName"]),m=u(n),s=r,g=m["".concat(p,".").concat(s)]||m[s]||k[s]||l;return n?a.createElement(g,i(i({ref:e},o),{},{components:n})):a.createElement(g,i({ref:e},o))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=t,d[m]="string"==typeof t?t:r,i[1]=d;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},499:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const l={title:"02 - Server Info"},i="Server Info",d={unversionedId:"networking/packets/server-info",id:"networking/packets/server-info",title:"02 - Server Info",description:"This is sent by the client after being accepted by the server. It contains information about the server, such as the world seed, the current game tick, and the enabled mods.",source:"@site/docs/networking/packets/02-server-info.mdx",sourceDirName:"networking/packets",slug:"/networking/packets/server-info",permalink:"/docs/networking/packets/server-info",draft:!1,editUrl:"https://pr.new/github.com/Scrap-Mechanic-Modding/Scrap-Mechanic-Modding.github.io/blob/main/docs/networking/packets/02-server-info.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"02 - Server Info"},sidebar:"networkingSidebar",previous:{title:"01 - Hello",permalink:"/docs/networking/packets/hello"},next:{title:"03 - Request Passphrase",permalink:"/docs/networking/packets/request-passphrase"}},p={},u=[{value:"Structure",id:"structure",level:2},{value:"Server Info",id:"server-info-1",level:3},{value:"Gamemode enum",id:"gamemode-enum",level:3},{value:"ModData",id:"moddata",level:3},{value:"GenericData",id:"genericdata",level:3},{value:"Flags bitfield",id:"flags-bitfield",level:3}],o={toc:u},m="wrapper";function k(t){let{components:e,...n}=t;return(0,r.kt)(m,(0,a.Z)({},o,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"server-info"},"Server Info"),(0,r.kt)("p",null,"This is sent by the client after being accepted by the server. It contains information about the server, such as the world seed, the current game tick, and the enabled mods."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ID"),": 0x02"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Size"),": Variable"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"LZ4 Compressed"),": Yes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"State"),": Joining"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Bound To"),": Server -> Client")),(0,r.kt)("h2",{id:"structure"},"Structure"),(0,r.kt)("h3",{id:"server-info-1"},"Server Info"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Field Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Size"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Version"),(0,r.kt)("td",{parentName:"tr",align:null},"u32"),(0,r.kt)("td",{parentName:"tr",align:null},"4 bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"The protocol version")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Gamemode"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#gamemode-enum"},"enum u32")),(0,r.kt)("td",{parentName:"tr",align:null},"4 bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"Definition")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Seed"),(0,r.kt)("td",{parentName:"tr",align:null},"u32"),(0,r.kt)("td",{parentName:"tr",align:null},"4 bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"World seed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Gametick"),(0,r.kt)("td",{parentName:"tr",align:null},"u32"),(0,r.kt)("td",{parentName:"tr",align:null},"4 bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"Current game tick")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mod Count"),(0,r.kt)("td",{parentName:"tr",align:null},"u32"),(0,r.kt)("td",{parentName:"tr",align:null},"4 bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"Amount of enabled mods")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mod Data"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#moddata"},"ModData[]")),(0,r.kt)("td",{parentName:"tr",align:null},"24 x Mod Count bytes"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Unknown Length"),(0,r.kt)("td",{parentName:"tr",align:null},"u16"),(0,r.kt)("td",{parentName:"tr",align:null},"2 bytes"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Unknown Data"),(0,r.kt)("td",{parentName:"tr",align:null},"byte[]"),(0,r.kt)("td",{parentName:"tr",align:null},"Unknown Length bytes"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Script Key Count"),(0,r.kt)("td",{parentName:"tr",align:null},"u32"),(0,r.kt)("td",{parentName:"tr",align:null},"4 bytes"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Script Data"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#genericdata"},"GenericData[]")),(0,r.kt)("td",{parentName:"tr",align:null},"20 x Script Key Count bytes"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Generic Key Count"),(0,r.kt)("td",{parentName:"tr",align:null},"u32"),(0,r.kt)("td",{parentName:"tr",align:null},"4 bytes"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Generic Data"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#genericdata"},"GenericData[]")),(0,r.kt)("td",{parentName:"tr",align:null},"20 x Generic Key Count bytes"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Flags"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#flags-bitfield"},"bitfield")),(0,r.kt)("td",{parentName:"tr",align:null},"1 byte"),(0,r.kt)("td",{parentName:"tr",align:null},"Developer mode")))),(0,r.kt)("h3",{id:"gamemode-enum"},"Gamemode enum"),(0,r.kt)("p",null,"Entry size: 4 bytes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"AlphaTerrain")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"FlatTerrain")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"ClassicTerrain")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"CreatedTerrain_Test")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"CreatedTerrain")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"Challenge")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"ChallengeBuilder")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null},"Terrain")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"Menu Creation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"14"),(0,r.kt)("td",{parentName:"tr",align:null},"Survival")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"15"),(0,r.kt)("td",{parentName:"tr",align:null},"Custom")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"16"),(0,r.kt)("td",{parentName:"tr",align:null},"Development")))),(0,r.kt)("h3",{id:"moddata"},"ModData"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Field Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Size"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"File ID"),(0,r.kt)("td",{parentName:"tr",align:null},"u64"),(0,r.kt)("td",{parentName:"tr",align:null},"8 bytes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UUID"),(0,r.kt)("td",{parentName:"tr",align:null},"byte","[16]"),(0,r.kt)("td",{parentName:"tr",align:null},"16 bytes")))),(0,r.kt)("h3",{id:"genericdata"},"GenericData"),(0,r.kt)("p",null,"Purpose is not fully known."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Channel")," field name is a guess. It is unconfirmed what this field is used for.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Field Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Size"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UUID"),(0,r.kt)("td",{parentName:"tr",align:null},"byte","[16]"),(0,r.kt)("td",{parentName:"tr",align:null},"16 bytes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Channel?"),(0,r.kt)("td",{parentName:"tr",align:null},"u16"),(0,r.kt)("td",{parentName:"tr",align:null},"2 bytes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Key"),(0,r.kt)("td",{parentName:"tr",align:null},"u32"),(0,r.kt)("td",{parentName:"tr",align:null},"4 bytes")))),(0,r.kt)("h3",{id:"flags-bitfield"},"Flags bitfield"),(0,r.kt)("p",null,"Contains information about which movement keys are pressed. All bits are always low while the player's character is seated or tumbling."),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Bits"),(0,r.kt)("th",null,"Field name"),(0,r.kt)("th",null,"Notes"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"7"),(0,r.kt)("td",null,"Developer Mode"),(0,r.kt)("td",null,"High when the Developer Mode is enabled. This is a server-side setting that can be toggled by launching with the ",(0,r.kt)("code",null,"-dev")," command line argument.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"6"),(0,r.kt)("td",{rowspan:"7"},"Unknown"),(0,r.kt)("td",{rowspan:"7"},"Not known to be anything other than low.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"5")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"4")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"3")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"2")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"1")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"0")))))}k.isMDXComponent=!0}}]);