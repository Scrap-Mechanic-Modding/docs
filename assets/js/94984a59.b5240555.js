"use strict";(self.webpackChunksm_docs=self.webpackChunksm_docs||[]).push([[5484],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>c});var a=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var m=a.createContext({}),p=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(m.Provider,{value:e},t.children)},k="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,m=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),k=p(n),u=l,c=k["".concat(m,".").concat(u)]||k[u]||s[u]||r;return n?a.createElement(c,i(i({ref:e},d),{},{components:n})):a.createElement(c,i({ref:e},d))}));function c(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=u;var o={};for(var m in e)hasOwnProperty.call(e,m)&&(o[m]=e[m]);o.originalType=t,o[k]="string"==typeof t?t:l,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2031:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(7462),l=(n(7294),n(3905));const r={title:"32 - Container Transaction WIP"},i="Container Transaction",o={unversionedId:"networking/packets/container-transaction",id:"networking/packets/container-transaction",title:"32 - Container Transaction WIP",description:"This packet is sent when the player interacts with items inside of containers.",source:"@site/docs/networking/packets/32-container-transaction.mdx",sourceDirName:"networking/packets",slug:"/networking/packets/container-transaction",permalink:"/docs/networking/packets/container-transaction",draft:!1,editUrl:"https://pr.new/github.com/Scrap-Mechanic-Modding/Scrap-Mechanic-Modding.github.io/blob/main/docs/networking/packets/32-container-transaction.mdx",tags:[],version:"current",sidebarPosition:32,frontMatter:{title:"32 - Container Transaction WIP"},sidebar:"networkingSidebar",previous:{title:"31 - Equipped Item Changed",permalink:"/docs/networking/packets/hotbar-item-changed"},next:{title:"33 - Drop Item Stack",permalink:"/docs/networking/packets/drop-item-stack"}},m={},p=[{value:"Structure",id:"structure",level:2},{value:"ItemStack",id:"itemstack",level:3},{value:"Transaction",id:"transaction",level:3},{value:"Action enum",id:"action-enum",level:4},{value:"Action 0 - Set Item",id:"action-0---set-item",level:4},{value:"Action 1 - Swap",id:"action-1---swap",level:4},{value:"Action 2 - Collect",id:"action-2---collect",level:4},{value:"Action 3 - Spend",id:"action-3---spend",level:4},{value:"Action 4 - Collect To Slot",id:"action-4---collect-to-slot",level:4},{value:"Action 5 - Collect To Slot Or Collect",id:"action-5---collect-to-slot-or-collect",level:4},{value:"Action 6 - Spend From Slot",id:"action-6---spend-from-slot",level:4},{value:"Action 7 - Move",id:"action-7---move",level:4},{value:"Action 8 - Move From Slot",id:"action-8---move-from-slot",level:4},{value:"Action 9 - Move All",id:"action-9---move-all",level:4},{value:"Default Action",id:"default-action",level:4}],d={toc:p},k="wrapper";function s(t){let{components:e,...n}=t;return(0,l.kt)(k,(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"container-transaction"},"Container Transaction"),(0,l.kt)("p",null,"This packet is sent when the player interacts with items inside of containers."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"ID"),": 0x20 (32)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Size"),": Variable"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"LZ4 Compressed"),": Yes"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"State"),": Playing"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Bound To"),": Client -> Server")),(0,l.kt)("h2",{id:"structure"},"Structure"),(0,l.kt)("p",null,"This structure has not been fully documented yet. The Transaction Count field might play a different part in this packet."),(0,l.kt)("p",null,"A Transaction Count of ",(0,l.kt)("inlineCode",{parentName:"p"},"0")," denotes there is no transaction at all. This can be reproduced by opening the inventory of a container, pickup up an item and releasing it in the same slot. This works for most items, but bearings and controllers sometimes trigger a Swap transaction with itself. No pattern has been found to predict which items trigger this behaviour."),(0,l.kt)("p",null,"A Transaction Count of ",(0,l.kt)("inlineCode",{parentName:"p"},"1")," denotes the packet contains one transaction. This is the most common case."),(0,l.kt)("p",null,"A Transaction Count of ",(0,l.kt)("inlineCode",{parentName:"p"},"2")," appears to show undefined behaviour. The first transaction works like normal, but the second transaction will have an Action ID that does not seem to be related to anything. This can be reproduced by opening the inventory of a Gas Container, picking up Gasoline from the hotbar and releasing it in the same hotbar slot, all while being in unlimited inventory mode. This will give a second transaction with Action ID ",(0,l.kt)("inlineCode",{parentName:"p"},"2"),". Doing the same with a Battery inside of a Battery Container results in ID ",(0,l.kt)("inlineCode",{parentName:"p"},"87"),". Water gives ID ",(0,l.kt)("inlineCode",{parentName:"p"},"20"),", Potato Ammo ",(0,l.kt)("inlineCode",{parentName:"p"},"65"),", Fertilizer ",(0,l.kt)("inlineCode",{parentName:"p"},"51"),", etc. A Transaction Count of ",(0,l.kt)("inlineCode",{parentName:"p"},"2")," seems to only be possible for containers that have a filter applied. The Action ID is deterministically resolved from the item. A container that accepts multiple item UUIDs has a different Action ID for each item."),(0,l.kt)("p",null,"Other values of Transaction Count have not been seen."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Offset"),(0,l.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Field Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0x00"),(0,l.kt)("td",{parentName:"tr",align:null},"Transaction Count"),(0,l.kt)("td",{parentName:"tr",align:null},"be u32"),(0,l.kt)("td",{parentName:"tr",align:null},"How many transactions are in the transaction array. Sizes ",(0,l.kt)("inlineCode",{parentName:"td"},"0")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"1")," are documented. Size ",(0,l.kt)("inlineCode",{parentName:"td"},"2")," seems to follow the same format, but no sense is made of the data.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0x04"),(0,l.kt)("td",{parentName:"tr",align:null},"Transactions"),(0,l.kt)("td",{parentName:"tr",align:null},"Transaction[]"),(0,l.kt)("td",{parentName:"tr",align:null},"The array of transactions.")))),(0,l.kt)("h3",{id:"itemstack"},"ItemStack"),(0,l.kt)("p",null,"This structure is used by most transactions. It contains all information about an item and where it is located in which container."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Offset"),(0,l.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Field Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0x00"),(0,l.kt)("td",{parentName:"tr",align:null},"Uuid"),(0,l.kt)("td",{parentName:"tr",align:null},"le u128"),(0,l.kt)("td",{parentName:"tr",align:null},"The UUID of the newly equiped item. ",(0,l.kt)("inlineCode",{parentName:"td"},"00000000-0000-0000-0000-000000000000")," when no item is equipped")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0x10"),(0,l.kt)("td",{parentName:"tr",align:null},"Tool Instance ID"),(0,l.kt)("td",{parentName:"tr",align:null},"be u32"),(0,l.kt)("td",{parentName:"tr",align:null},"The instance ID of the newly equiped tool. Always ",(0,l.kt)("inlineCode",{parentName:"td"},"0xFFFFFFFF")," for items that are not tools or when no item is equipped.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0x14"),(0,l.kt)("td",{parentName:"tr",align:null},"Quantity"),(0,l.kt)("td",{parentName:"tr",align:null},"be u16"),(0,l.kt)("td",{parentName:"tr",align:null},"The amount of items in the item stack.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0x16"),(0,l.kt)("td",{parentName:"tr",align:null},"Slot"),(0,l.kt)("td",{parentName:"tr",align:null},"be u16"),(0,l.kt)("td",{parentName:"tr",align:null},"The index of slot in the container the item stack is located in.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0x18"),(0,l.kt)("td",{parentName:"tr",align:null},"Container ID"),(0,l.kt)("td",{parentName:"tr",align:null},"be u32"),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of the container the item stack is in.")))),(0,l.kt)("h3",{id:"transaction"},"Transaction"),(0,l.kt)("p",null,"The transaction structure has a variable size. Every Action ID has its own structure."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Offset"),(0,l.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Field Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0x00"),(0,l.kt)("td",{parentName:"tr",align:null},"Action"),(0,l.kt)("td",{parentName:"tr",align:null},"enum Action : u8"),(0,l.kt)("td",{parentName:"tr",align:null},"The type of the transaction.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0x01"),(0,l.kt)("td",{parentName:"tr",align:null},"Action Data"),(0,l.kt)("td",{parentName:"tr",align:null},"..."),(0,l.kt)("td",{parentName:"tr",align:null},"The data of the action. This depends on the value of Action.")))),(0,l.kt)("h4",{id:"action-enum"},"Action enum"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"The Action field has been left out in all of the following Action structures. The offsets still include the byte containing the action's ID.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"ID"),(0,l.kt)("th",{parentName:"tr",align:null},"Action"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#action-0---set-item"},"Set Item"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#action-1---swap"},"Swap"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#action-2---collect"},"Collect"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#action-3---spend"},"Spend"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#action-4---collect-to-slot"},"Collect To Slot"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#action-5---collect-to-slot-or-collect"},"Collect To Slot Or Collect"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#action-6---spend-from-slot"},"Spend From Slot"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#action-7---move"},"Move"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#action-8---move-from-slot"},"Move From Slot"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"9"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#action-9---move-all"},"Move All"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Other"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#default-action"},"Default Action"))))),(0,l.kt)("h4",{id:"action-0---set-item"},"Action 0 - Set Item"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Description"),": Sets the item in the specified slot in the container to the item stack."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Occurs when"),": Adding an item from the unlimited inventory into the hotbar. Both dragging the item as well as holding shift while clicking on the item will use this Action.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Offset"),(0,l.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Field Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0x01"),(0,l.kt)("td",{parentName:"tr",align:null},"To"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#itemstack"},"ItemStack")),(0,l.kt)("td",{parentName:"tr",align:null},"The item stack to set the slot in the container to.")))),(0,l.kt)("h4",{id:"action-1---swap"},"Action 1 - Swap"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Description"),": Swaps two item stacks. The ",(0,l.kt)("inlineCode",{parentName:"li"},"From")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"To")," item stacks can be in two distinct containers."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Occurs when"),": Dragging an item onto another item. The containers of the ",(0,l.kt)("inlineCode",{parentName:"li"},"From")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"To")," item stacks must both be an unlimited inventory or both be a limited inventory. When one of the containers is an unlimited inventory and the other is a limited inventory, the ",(0,l.kt)("a",{parentName:"li",href:"#action-6---spend-from-slot"},"Spend From Slot")," action will be used instead.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Offset"),(0,l.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Field Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0x01"),(0,l.kt)("td",{parentName:"tr",align:null},"From"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#itemstack"},"ItemStack")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,"The item stack of the dragged item."),(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("strong",{parentName:"td"},"Uuid"),": Always ",(0,l.kt)("inlineCode",{parentName:"td"},"00000000-0000-0000-0000-000000000000")),(0,l.kt)("li",null,(0,l.kt)("strong",{parentName:"td"},"Tool Instance ID"),": Always ",(0,l.kt)("inlineCode",{parentName:"td"},"0xFFFFFFFF")),(0,l.kt)("li",null,(0,l.kt)("strong",{parentName:"td"},"Quantity"),": Always ",(0,l.kt)("inlineCode",{parentName:"td"},"0"))))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0x1D"),(0,l.kt)("td",{parentName:"tr",align:null},"To"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#itemstack"},"ItemStack")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,"The item stack the dragged item is dropped onto."),(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("strong",{parentName:"td"},"Uuid"),": Always ",(0,l.kt)("inlineCode",{parentName:"td"},"00000000-0000-0000-0000-000000000000")),(0,l.kt)("li",null,(0,l.kt)("strong",{parentName:"td"},"Tool Instance ID"),": Always ",(0,l.kt)("inlineCode",{parentName:"td"},"0xFFFFFFFF")),(0,l.kt)("li",null,(0,l.kt)("strong",{parentName:"td"},"Quantity"),": Always ",(0,l.kt)("inlineCode",{parentName:"td"},"456"))))))),(0,l.kt)("h4",{id:"action-2---collect"},"Action 2 - Collect"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Description"),": Add an item to the container."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Occurs when"),": Holding shift while clicking on an item in the player's unlimited inventory backpack.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Offset"),(0,l.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Field Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0x01"),(0,l.kt)("td",{parentName:"tr",align:null},"Uuid"),(0,l.kt)("td",{parentName:"tr",align:null},"le u128"),(0,l.kt)("td",{parentName:"tr",align:null},"The UUID of the item to add to the container.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0x11"),(0,l.kt)("td",{parentName:"tr",align:null},"Unknown"),(0,l.kt)("td",{parentName:"tr",align:null},"be u32"),(0,l.kt)("td",{parentName:"tr",align:null},"Most likely the tool instance ID, but it is always ",(0,l.kt)("inlineCode",{parentName:"td"},"0xFFFFFFFF"),", even for tools. The Lua API function ",(0,l.kt)("inlineCode",{parentName:"td"},"sm.container.collect")," does not take any parameter that could result into this value being ",(0,l.kt)("inlineCode",{parentName:"td"},"0xFFFFFFFF"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0x15"),(0,l.kt)("td",{parentName:"tr",align:null},"Quantity"),(0,l.kt)("td",{parentName:"tr",align:null},"be u16"),(0,l.kt)("td",{parentName:"tr",align:null},"The amount of items to add to the container.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0x17"),(0,l.kt)("td",{parentName:"tr",align:null},"Container ID"),(0,l.kt)("td",{parentName:"tr",align:null},"be u32"),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of the container to add the items to.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0x1B"),(0,l.kt)("td",{parentName:"tr",align:null},"Unknown"),(0,l.kt)("td",{parentName:"tr",align:null},"u8"),(0,l.kt)("td",{parentName:"tr",align:null},"Not known to be anything other than ",(0,l.kt)("inlineCode",{parentName:"td"},"0x80"),". Could possibly be related to the ",(0,l.kt)("inlineCode",{parentName:"td"},"mustCollectAll")," parameter of the ",(0,l.kt)("inlineCode",{parentName:"td"},"sm.container.collect")," Lua API function. Its description reads: ",(0,l.kt)("blockquote",null,"Must collect all items for the transaction to be valid. Defaults to true. (Optional)"))))),(0,l.kt)("h4",{id:"action-3---spend"},"Action 3 - Spend"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"This action calls ",(0,l.kt)("inlineCode",{parentName:"p"},"ContainerManager2.spend()")," under the hood, but no usage of this action has been recorded. The documentation for this action has been reverse engineered from the executable.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Description"),": Removes a quantity of a given item from a container."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Occurs when"),": Unknown.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Offset"),(0,l.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Field Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0x01"),(0,l.kt)("td",{parentName:"tr",align:null},"Uuid"),(0,l.kt)("td",{parentName:"tr",align:null},"le u128"),(0,l.kt)("td",{parentName:"tr",align:null},"The UUID of the item to remove from the container.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0x11"),(0,l.kt)("td",{parentName:"tr",align:null},"Unknown"),(0,l.kt)("td",{parentName:"tr",align:null},"be u32"),(0,l.kt)("td",{parentName:"tr",align:null},"Most likely the tool instance ID. The Lua API function ",(0,l.kt)("inlineCode",{parentName:"td"},"sm.container.spend")," does not take any other integer parameters, but after reverse engineering the executable we can assume this field is the same as the ",(0,l.kt)("a",{parentName:"td",href:"#action-2---collect"},"Collect")," action.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0x15"),(0,l.kt)("td",{parentName:"tr",align:null},"Quantity"),(0,l.kt)("td",{parentName:"tr",align:null},"be u16"),(0,l.kt)("td",{parentName:"tr",align:null},"The amount of items to remove from the container.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0x17"),(0,l.kt)("td",{parentName:"tr",align:null},"Container ID"),(0,l.kt)("td",{parentName:"tr",align:null},"be u32"),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of the container to remove the items to.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0x1B"),(0,l.kt)("td",{parentName:"tr",align:null},"Unknown"),(0,l.kt)("td",{parentName:"tr",align:null},"u8"),(0,l.kt)("td",{parentName:"tr",align:null},"Could possibly be related to the ",(0,l.kt)("inlineCode",{parentName:"td"},"mustSpendAll")," parameter of the ",(0,l.kt)("inlineCode",{parentName:"td"},"sm.container.spend")," Lua API function. Its description reads: ",(0,l.kt)("blockquote",null,"If true, only remove items if there are enough. If false, remove as many items as possible. Defaults to true. (Optional)"))))),(0,l.kt)("h4",{id:"action-4---collect-to-slot"},"Action 4 - Collect To Slot"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"This action calls ",(0,l.kt)("inlineCode",{parentName:"p"},"ContainerManager2.collectToSlot()")," under the hood, but no usage of this action has been recorded. The documentation for this action has been reverse engineered from the executable.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Description"),": Adds an item to the specified slot of the container, up to the maximum stack size. The remaining number of items does not overflow to other slots."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Occurs when"),": Unknown.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Offset"),(0,l.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Field Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0x01"),(0,l.kt)("td",{parentName:"tr",align:null},"To"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#itemstack"},"ItemStack")),(0,l.kt)("td",{parentName:"tr",align:null},"The item stack collected into the slot of the container.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0x1D"),(0,l.kt)("td",{parentName:"tr",align:null},"Unknown"),(0,l.kt)("td",{parentName:"tr",align:null},"u8"),(0,l.kt)("td",{parentName:"tr",align:null},"Could possibly be related to the ",(0,l.kt)("inlineCode",{parentName:"td"},"mustCollectAll")," parameter of the ",(0,l.kt)("inlineCode",{parentName:"td"},"sm.container.collectToSlot")," Lua API function. Its description reads: ",(0,l.kt)("blockquote",null,"If true, only add items if there is enough room. If false, add as many items as possible. Defaults to true. (Optional)"))))),(0,l.kt)("h4",{id:"action-5---collect-to-slot-or-collect"},"Action 5 - Collect To Slot Or Collect"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Description"),": Adds an item to the specified slot of the container. If the maximum stack size is reached, the remaining number of items will overflow into following slots when possible."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Occurs when"),": Dragging an item from the player's unlimited inventory backpack into a limited inventory container.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Offset"),(0,l.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Field Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0x01"),(0,l.kt)("td",{parentName:"tr",align:null},"To"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#itemstack"},"ItemStack")),(0,l.kt)("td",{parentName:"tr",align:null},"The item stack collected into the slot of the container.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0x1D"),(0,l.kt)("td",{parentName:"tr",align:null},"Unknown"),(0,l.kt)("td",{parentName:"tr",align:null},"u8"),(0,l.kt)("td",{parentName:"tr",align:null},"Not known to be anything other than ",(0,l.kt)("inlineCode",{parentName:"td"},"0x00"),". Could possibly be related to the ",(0,l.kt)("inlineCode",{parentName:"td"},"mustCollectAll")," parameter of the ",(0,l.kt)("inlineCode",{parentName:"td"},"sm.container.collectToSlot")," Lua API function. Its description reads: ",(0,l.kt)("blockquote",null,"If true, only add items if there is enough room. If false, add as many items as possible. Defaults to true. (Optional)"))))),(0,l.kt)("h4",{id:"action-6---spend-from-slot"},"Action 6 - Spend From Slot"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Description"),": Removes an item from the specified slot of the container."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Occurs when"),": Dragging an item from the limited inventory container into the player's unlimited inventory backpack.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Offset"),(0,l.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Field Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0x01"),(0,l.kt)("td",{parentName:"tr",align:null},"From"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#itemstack"},"ItemStack")),(0,l.kt)("td",{parentName:"tr",align:null},"The item stack removed from the slot of the container.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0x1D"),(0,l.kt)("td",{parentName:"tr",align:null},"Unknown"),(0,l.kt)("td",{parentName:"tr",align:null},"u8"),(0,l.kt)("td",{parentName:"tr",align:null},"Not known to be anything other than ",(0,l.kt)("inlineCode",{parentName:"td"},"0x00"),". Could possibly be related to the ",(0,l.kt)("inlineCode",{parentName:"td"},"mustSpendAll")," parameter of the ",(0,l.kt)("inlineCode",{parentName:"td"},"sm.container.spendFromSlot")," Lua API function. Its description reads: ",(0,l.kt)("blockquote",null,"If true, only remove items if there are enough. If false, remove as many items as possible. Defaults to true. (Optional)"))))),(0,l.kt)("h4",{id:"action-7---move"},"Action 7 - Move"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Description"),": Moves an item stack to an empty slot of a container. The ",(0,l.kt)("inlineCode",{parentName:"li"},"From")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"To")," item stacks can be in two distinct containers."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Occurs when"),": If the player has a limited inventory, dragging an item onto an empty slot of a container, or holding shift while clicking on an item to move the item between the hotbar and the backpack. ",(0,l.kt)("br",null)," If the player has an unlimited inventory container, the Move action is only used when moving items from the hotbar to another empty hotbar slot while the backpack is open. Opening the GUI of another container and then dragging an item from the hotbar to another empty hotbar slot will use the ",(0,l.kt)("a",{parentName:"li",href:"#action-6---spend-from-slot"},"Spend From Slot")," action instead.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Offset"),(0,l.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Field Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0x01"),(0,l.kt)("td",{parentName:"tr",align:null},"From"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#itemstack"},"ItemStack")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,"The item stack of the moved item."),(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("strong",{parentName:"td"},"Uuid"),": Always ",(0,l.kt)("inlineCode",{parentName:"td"},"00000000-0000-0000-0000-000000000000")),(0,l.kt)("li",null,(0,l.kt)("strong",{parentName:"td"},"Tool Instance ID"),": Always ",(0,l.kt)("inlineCode",{parentName:"td"},"0xFFFFFFFF")),(0,l.kt)("li",null,(0,l.kt)("strong",{parentName:"td"},"Quantity"),": The amount of items moved. Can be less than the total amount of items an item stack contains.")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0x1D"),(0,l.kt)("td",{parentName:"tr",align:null},"To"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#itemstack"},"ItemStack")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,"The empty slot the moved item is moved to."),(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("strong",{parentName:"td"},"Uuid"),": Always ",(0,l.kt)("inlineCode",{parentName:"td"},"00000000-0000-0000-0000-000000000000")),(0,l.kt)("li",null,(0,l.kt)("strong",{parentName:"td"},"Tool Instance ID"),": Always ",(0,l.kt)("inlineCode",{parentName:"td"},"0xFFFFFFFF")),(0,l.kt)("li",null,(0,l.kt)("strong",{parentName:"td"},"Quantity"),": Always ",(0,l.kt)("inlineCode",{parentName:"td"},"337"))))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0x39"),(0,l.kt)("td",{parentName:"tr",align:null},"Unknown"),(0,l.kt)("td",{parentName:"tr",align:null},"u8"),(0,l.kt)("td",{parentName:"tr",align:null},"Not known to be anything other than ",(0,l.kt)("inlineCode",{parentName:"td"},"0x00"),".")))),(0,l.kt)("h4",{id:"action-8---move-from-slot"},"Action 8 - Move From Slot"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Description"),": Moves an item stack in the specified slot to another container."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Occurs when"),": Holding shift while clicking on an item. Both containers must be limited inventory containers.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Offset"),(0,l.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Field Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0x01"),(0,l.kt)("td",{parentName:"tr",align:null},"From Slot"),(0,l.kt)("td",{parentName:"tr",align:null},"be u16"),(0,l.kt)("td",{parentName:"tr",align:null},"The index of the slot to be moved to the other container.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0x03"),(0,l.kt)("td",{parentName:"tr",align:null},"From Container ID"),(0,l.kt)("td",{parentName:"tr",align:null},"be u32"),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of the container of the slot to be moved.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0x07"),(0,l.kt)("td",{parentName:"tr",align:null},"To Container ID"),(0,l.kt)("td",{parentName:"tr",align:null},"be u32"),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of the container to move the slot to.")))),(0,l.kt)("h4",{id:"action-9---move-all"},"Action 9 - Move All"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Description"),": Moves all items from one container to another container."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Occurs when"),': Pressing the "TAKE ALL" button in the GUI of the bag a player leaves behind when respawning after death.')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Offset"),(0,l.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Field Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0x01"),(0,l.kt)("td",{parentName:"tr",align:null},"From Container ID"),(0,l.kt)("td",{parentName:"tr",align:null},"be u32"),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of the container to move all items from.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0x05"),(0,l.kt)("td",{parentName:"tr",align:null},"To Container ID"),(0,l.kt)("td",{parentName:"tr",align:null},"be u32"),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of the container to move all items to.")))),(0,l.kt)("h4",{id:"default-action"},"Default Action"),(0,l.kt)("p",null,"In some cases a transaction with an action outside of the 0 to 9 range is created. The game treats these actions the same as ",(0,l.kt)("a",{parentName:"p",href:"#action-7---move"},"Action 7 - Move"),"."))}s.isMDXComponent=!0}}]);