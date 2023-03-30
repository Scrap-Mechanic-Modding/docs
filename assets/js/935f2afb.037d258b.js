"use strict";(self.webpackChunksm_docs=self.webpackChunksm_docs||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"miscSidebar":[{"type":"category","label":"Misc","collapsible":true,"collapsed":true,"items":[{"type":"category","label":"SMT Bindings","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Chat","href":"/docs/misc/docs/smt-bindings/chat","docId":"misc/docs/smt-bindings/chat"}],"href":"/docs/category/smt-bindings"}],"href":"/docs/category/misc"}],"luaSidebar":[{"type":"category","label":"Lua","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"lua api","href":"/docs/lua/docs/lua api","docId":"lua/docs/lua api"}],"href":"/docs/category/lua"}],"networkingSidebar":[{"type":"category","label":"Packets","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"01 - Hello","href":"/docs/networking/packets/hello","docId":"networking/packets/hello"},{"type":"link","label":"02 - Server Info","href":"/docs/networking/packets/server-info","docId":"networking/packets/server-info"},{"type":"link","label":"03 - Request Passphrase","href":"/docs/networking/packets/request-passphrase","docId":"networking/packets/request-passphrase"},{"type":"link","label":"04 - Respond Passphrase","href":"/docs/networking/packets/respond-passphrase","docId":"networking/packets/respond-passphrase"},{"type":"link","label":"05 - Client Accepted","href":"/docs/networking/packets/client-accepted","docId":"networking/packets/client-accepted"},{"type":"link","label":"06 - File Checksums","href":"/docs/networking/packets/file-checksums","docId":"networking/packets/file-checksums"},{"type":"link","label":"07 - Checksums Accepted","href":"/docs/networking/packets/checksums-accepted","docId":"networking/packets/checksums-accepted"},{"type":"link","label":"08 - Checksums Denied","href":"/docs/networking/packets/checksums-denied","docId":"networking/packets/checksums-denied"},{"type":"link","label":"09 - Character Info - WIP","href":"/docs/networking/packets/character-info","docId":"networking/packets/character-info"},{"type":"link","label":"10 - Join Confirmation","href":"/docs/networking/packets/join-confirmation","docId":"networking/packets/join-confirmation"},{"type":"link","label":"13 - World Info - WIP","href":"/docs/networking/packets/world-info","docId":"networking/packets/world-info"},{"type":"link","label":"30 - Player Movement","href":"/docs/networking/packets/player-movement","docId":"networking/packets/player-movement"},{"type":"link","label":"31 - Equipped Item Changed","href":"/docs/networking/packets/hotbar-item-changed","docId":"networking/packets/hotbar-item-changed"},{"type":"link","label":"50 - Interact","href":"/docs/networking/packets/interact","docId":"networking/packets/interact"}],"href":"/docs/category/packets"},{"type":"category","label":"Protocol","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Format","href":"/docs/networking/protocol/format","docId":"networking/protocol/format"},{"type":"link","label":"Joining","href":"/docs/networking/protocol/joining","docId":"networking/protocol/joining"},{"type":"link","label":"Playing - WIP","href":"/docs/networking/protocol/playing","docId":"networking/protocol/playing"}],"href":"/docs/category/protocol"}],"structuresSidebar":[{"type":"category","label":"Structures","collapsible":true,"collapsed":true,"items":[{"type":"category","label":"ImHex Patterns","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Character","href":"/docs/structures/docs/imhex-patterns/character","docId":"structures/docs/imhex-patterns/character"},{"type":"link","label":"Container","href":"/docs/structures/docs/imhex-patterns/container","docId":"structures/docs/imhex-patterns/container"},{"type":"link","label":"Generic","href":"/docs/structures/docs/imhex-patterns/genericdata","docId":"structures/docs/imhex-patterns/genericdata"},{"type":"link","label":"Mods","href":"/docs/structures/docs/imhex-patterns/mods","docId":"structures/docs/imhex-patterns/mods"},{"type":"link","label":"Player","href":"/docs/structures/docs/imhex-patterns/playerdata","docId":"structures/docs/imhex-patterns/playerdata"},{"type":"link","label":"Generic","href":"/docs/structures/docs/imhex-patterns/worlddata","docId":"structures/docs/imhex-patterns/worlddata"}],"href":"/docs/category/imhex-patterns"},{"type":"link","label":"UUID v4","href":"/docs/structures/docs/uuid","docId":"structures/docs/uuid"}],"href":"/docs/category/structures"}]},"docs":{"lua/docs/lua api":{"id":"lua/docs/lua api","title":"lua api","description":"idk?","sidebar":"luaSidebar"},"misc/docs/smt-bindings/chat":{"id":"misc/docs/smt-bindings/chat","title":"Chat","description":"","sidebar":"miscSidebar"},"networking/packets/character-info":{"id":"networking/packets/character-info","title":"09 - Character Info - WIP","description":"Contains all information about a character.","sidebar":"networkingSidebar"},"networking/packets/checksums-accepted":{"id":"networking/packets/checksums-accepted","title":"07 - Checksums Accepted","description":"If the checksums sent by File Checksums are valid, this packet is sent.","sidebar":"networkingSidebar"},"networking/packets/checksums-denied":{"id":"networking/packets/checksums-denied","title":"08 - Checksums Denied","description":"If a checksum sent by File Checksums is invalid, this packet is sent.","sidebar":"networkingSidebar"},"networking/packets/client-accepted":{"id":"networking/packets/client-accepted","title":"05 - Client Accepted","description":"The client sends this packet to the server to initiate the connection. The server responds with the same packet.","sidebar":"networkingSidebar"},"networking/packets/file-checksums":{"id":"networking/packets/file-checksums","title":"06 - File Checksums","description":"Send the checksums of the files that the client has.","sidebar":"networkingSidebar"},"networking/packets/hello":{"id":"networking/packets/hello","title":"01 - Hello","description":"The client sends this packet to the server to initiate the connection. The server responds with the same packet.","sidebar":"networkingSidebar"},"networking/packets/hotbar-item-changed":{"id":"networking/packets/hotbar-item-changed","title":"31 - Equipped Item Changed","description":"This packet is sent when the player equips a different item. No packet is sent when both the UUID and the Tool Instance ID are the same as the previous equipped item.","sidebar":"networkingSidebar"},"networking/packets/interact":{"id":"networking/packets/interact","title":"50 - Interact","description":"This packet is sent when the player interacts with an interactable (pressing, unpressing, interacting).","sidebar":"networkingSidebar"},"networking/packets/join-confirmation":{"id":"networking/packets/join-confirmation","title":"10 - Join Confirmation","description":"If all the check are done, this packet is sent.","sidebar":"networkingSidebar"},"networking/packets/player-movement":{"id":"networking/packets/player-movement","title":"30 - Player Movement","description":"This packet contains pressed movement keys and the player\'s look direction. It does not contain any position coordinates.","sidebar":"networkingSidebar"},"networking/packets/request-passphrase":{"id":"networking/packets/request-passphrase","title":"03 - Request Passphrase","description":"The server sends this packet to the client when the client is joining the server and the server requires a passphrase to join.","sidebar":"networkingSidebar"},"networking/packets/respond-passphrase":{"id":"networking/packets/respond-passphrase","title":"04 - Respond Passphrase","description":"The client sends this packet to the server to respond to the passphrase challenge.","sidebar":"networkingSidebar"},"networking/packets/server-info":{"id":"networking/packets/server-info","title":"02 - Server Info","description":"This is sent by the client after being accepted by the server. It contains information about the server, such as the world seed, the current game tick, and the enabled mods.","sidebar":"networkingSidebar"},"networking/packets/world-info":{"id":"networking/packets/world-info","title":"13 - World Info - WIP","description":"The client sends this packet to the server to respond to the passphrase challenge.","sidebar":"networkingSidebar"},"networking/protocol/format":{"id":"networking/protocol/format","title":"Format","description":"All data sent over the network is Little-Endian.","sidebar":"networkingSidebar"},"networking/protocol/joining":{"id":"networking/protocol/joining","title":"Joining","description":"Joining is the process of establishing a connection between two peers. It is a critical part of the protocol, as it is the only way to verify that the peer you are connected to is the peer you intended to connect to. It is also the only way to verify that the peer you are connected to is running the correct version of the protocol.","sidebar":"networkingSidebar"},"networking/protocol/playing":{"id":"networking/protocol/playing","title":"Playing - WIP","description":"The connection state of the player. After being accepted into the server.","sidebar":"networkingSidebar"},"structures/docs/imhex-patterns/character":{"id":"structures/docs/imhex-patterns/character","title":"Character","description":"","sidebar":"structuresSidebar"},"structures/docs/imhex-patterns/container":{"id":"structures/docs/imhex-patterns/container","title":"Container","description":"","sidebar":"structuresSidebar"},"structures/docs/imhex-patterns/genericdata":{"id":"structures/docs/imhex-patterns/genericdata","title":"Generic","description":"","sidebar":"structuresSidebar"},"structures/docs/imhex-patterns/mods":{"id":"structures/docs/imhex-patterns/mods","title":"Mods","description":"","sidebar":"structuresSidebar"},"structures/docs/imhex-patterns/playerdata":{"id":"structures/docs/imhex-patterns/playerdata","title":"Player","description":"","sidebar":"structuresSidebar"},"structures/docs/imhex-patterns/worlddata":{"id":"structures/docs/imhex-patterns/worlddata","title":"Generic","description":"","sidebar":"structuresSidebar"},"structures/docs/uuid":{"id":"structures/docs/uuid","title":"UUID v4","description":"UUID v4 is a universally unique identifier that is generated using random numbers. It is typically used to uniquely identify items without requiring a central registration authority, such as when generating random account numbers for customers in an online store.","sidebar":"structuresSidebar"}}}')}}]);