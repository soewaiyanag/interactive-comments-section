var R=Object.defineProperty;var C=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var k=(e,s,r)=>s in e?R(e,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[s]=r,S=(e,s)=>{for(var r in s||(s={}))D.call(s,r)&&k(e,r,s[r]);if(C)for(var r of C(s))O.call(s,r)&&k(e,r,s[r]);return e};import{j as V,r as d,u as H,l as U,R as b,a as L}from"./vendor.4c42126c.js";const _=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function r(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerpolicy&&(a.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?a.credentials="include":n.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(n){if(n.ep)return;n.ep=!0;const a=r(n);fetch(n.href,a)}};_();var A="/assets/icon-reply.b32cf4fa.svg";const t=V.exports.jsx,m=V.exports.jsxs,M=e=>m("div",{onClick:e.clickHandler,className:"\r flex items-center\r space-x-1.5\r select-none active:opacity-75\r transition-opacity",children:[t("img",{className:"inline-block h-fit",src:A,alt:"reply_icon"}),t("span",{className:"font-bold text-modrateBlue",children:"Reply"})]});var P="/assets/icon-edit.be86deeb.svg";const W=e=>m("div",{onClick:e.clickHandler,className:"\r flex items-center\r space-x-1.5\r select-none active:opacity-75\r transition-opacity",children:[t("img",{className:"inline-block h-fit",src:P,alt:"reply_icon"}),t("span",{className:"font-bold text-modrateBlue",children:"Edit"})]});var q="/assets/icon-delete.a955972c.svg";const J=e=>m("div",{onClick:e.clickHandler,className:"\r flex items-center\r space-x-1.5\r select-none active:opacity-75\r transition-opacity",children:[t("img",{className:"inline-block h-fit",src:q,alt:"reply_icon"}),t("span",{className:"font-bold text-softRed",children:"Delete"})]}),z=e=>t("svg",{className:"cursor-pointer group",width:"11",height:"11",onClick:e.clickHandler,xmlns:"http://www.w3.org/2000/svg",children:t("path",{d:"M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z",className:`transition-colors group-hover:fill-modrateBlue ${e.checked?"fill-modrateBlue":"fill-lightGrayishBlue"}`})}),G=e=>t("svg",{className:"cursor-pointer group",width:"11",height:"3",onClick:e.clickHandler,xmlns:"http://www.w3.org/2000/svg",children:t("path",{d:"M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z",className:`transition-colors group-hover:fill-modrateBlue ${e.checked?"fill-modrateBlue":"fill-lightGrayishBlue"}`})}),Z=e=>{var x;const[s,r]=d.exports.useState((x=e.score)!=null?x:0),[c,n]=d.exports.useState(!1),[a,o]=d.exports.useState(!1),l=()=>{r(s-1),n(!1)},i=()=>{r(s+1),o(!1)},h=w=>{r(s+w),n(!0)},g=w=>{r(s-w),o(!0)};return m("div",{className:"\r bg-veryLightGray\r flex items-center justify-center\r gap-4 w-24 h-10\r sm:flex-col sm:gap-3 sm:h-24 sm:w-10\r rounded-md select-none\r col-start-1 row-start-3\r sm:row-span-3 ",children:[t(z,{checked:c,clickHandler:()=>{if(c){l();return}if(a){i(),h(2);return}h(1)}}),t("span",{className:"text-modrateBlue text-lg font-medium",children:s}),t(G,{checked:a,clickHandler:()=>{if(a){i();return}if(c){l(),g(2);return}g(1)}})]})},y=d.exports.createContext(),$=e=>{const{currentUser:s}=d.exports.useContext(y),r=s.username===e.username;return m("div",{className:"\r flex flex-wrap gap-4 items-center\r col-span-2 sm:col-start-2 sm:row-start-1\r ",children:[t("img",{className:"h-8",src:e.avatar,alt:"profile picture"}),m("h1",{className:"text-[1.05rem] text-darkBlue font-semibold\r flex items-center gap-2",children:[e.username,t("span",{style:{display:r?null:"none"},className:"bg-modrateBlue text-white\r text-xs text-center px-2",children:"you"})]}),t("span",{className:"text-grayishBlue font-normal text-base",children:e.createdAt})]})},B=(e,s,r)=>({id:e,content:s,user:r,createdAt:"0 second ago",replies:[],score:0}),F=e=>{const[s,r]=d.exports.useState(""),{comments:c,setComments:n,currentUser:a}=d.exports.useContext(y),o=c.map(l=>Object.assign({},l));return m("div",{className:"my-4 grid gap-4 grid-cols-2\r bg-white shadow-sm -mt-2 p-4\r sm:grid-cols-[auto_1fr_auto]",children:[t("img",{className:"h-10",src:a.image.png,alt:"avator"}),t("textarea",{className:"rounded px-5 py-2 min-h-[5rem]\r resize-none text-base border-2\r col-span-2 row-start-1\r sm:col-span-1 sm:col-start-2 sm:row-start-1",value:s,onChange:l=>{r(l.target.value)}}),t("button",{className:"py-2 px-5 bg-modrateBlue \r text-white h-fit max-w-fit rounded \r active:bg-opacity-75 justify-self-end",onClick:()=>{if(!s)return;let l=B(H(),s,a);o.push(l),n(o),r("")},children:e.btnValue})]})},K=e=>{const[s,r]=d.exports.useState(""),{comments:c,setComments:n,currentUser:a}=d.exports.useContext(y),o=c.map(i=>Object.assign({},i)),l=(i,h,g)=>{i.forEach(f=>{U.exports._.isEqual(f.id,h)?(f.replies.push(g),n(o),e.setShowWriteReply(!1)):l(f.replies,h,g)})};return m("div",{className:"my-4 grid gap-4 grid-cols-2\r bg-white shadow-sm -mt-2 p-4\r sm:grid-cols-[auto_1fr_auto]",children:[t("img",{className:"h-10",src:a.image.png,alt:"avator"}),t("textarea",{className:"rounded px-5 py-2 min-h-[5rem]\r resize-none text-base border-2\r col-span-2 row-start-1\r sm:col-span-1 sm:col-start-2 sm:row-start-1",onChange:i=>{r(i.target.value)}}),t("button",{className:"py-2 px-5 bg-modrateBlue \r text-white h-fit max-w-fit rounded \r active:bg-opacity-75 justify-self-end",onClick:()=>{if(!s)return;let i=B(H(),s,a);l(o,e.id,i)},children:e.btnValue})]})},I=e=>{const[s,r]=d.exports.useState(!1),[c,n]=d.exports.useState(!1),[a,o]=d.exports.useState(e.children),{comments:l,setComments:i,currentUser:h}=d.exports.useContext(y),g=h.username===e.data.user.username,f=l.map(u=>Object.assign({},u)),N=(u,v)=>{u.forEach(p=>{U.exports._.isEqual(p.id,v)?(p.content=a,i(f)):N(p.replies,v)})},x=(u,v)=>u.map(p=>S({},p)).filter(p=>("replies"in p&&(p.replies=x(p.replies,v)),p.id!==v)),w=()=>{r(!s)},E=()=>{n(!c)};return m("div",{children:[m("section",{className:"\r p-4 my-4 bg-white rounded-md shadow-sm\r gap-6 grid grid-cols-2 \r sm:grid-cols-[auto_1fr_auto]",children:[t(Z,{score:e.data.score}),t($,{avatar:e.data.user.image.png,username:e.data.user.username,createdAt:e.data.createdAt}),t("section",{className:"cursor-pointer ml-auto\r col-start-2 row-start-3 self-center\r sm:row-start-1",children:g?m("div",{className:"flex gap-5",children:[t(J,{clickHandler:()=>{i(x(f,e.data.id))}}),t(W,{clickHandler:E})]}):t(M,{clickHandler:w})}),t("section",{className:"\r text-grayishBlue text-base font-normal\r col-span-2 sm:col-span-2 sm:col-start-2\r sm:row-span-2",children:c?m("div",{className:"flex flex-col gap-4",children:[t("textarea",{className:"\r w-full\r rounded px-5 py-2 min-h-[8rem]\r resize-none text-base border-2",value:a,onChange:u=>{o(u.target.value)}}),t("button",{className:"py-2 px-5 bg-modrateBlue\r text-white h-fit max-w-fit rounded \r active:bg-opacity-75 self-end",onClick:()=>{N(f,e.data.id),n(!1)},children:"UPDATE"})]}):t("p",{children:a})})]}),t("section",{children:s?t(K,{id:e.data.id,setShowWriteReply:r,btnValue:"REPLY"}):null}),t("section",{className:"border-l-2 pl-5 sm:ml-8 sm:pl-7",children:e.data.replies.length?e.data.replies.map(u=>t(I,{data:u,children:u.content},u.id)):null})]})};function j(e,s){const[r,c]=b.useState(()=>{const n=window.localStorage.getItem(s);return n!==null?JSON.parse(n):e});return b.useEffect(()=>{window.localStorage.setItem(s,JSON.stringify(r))},[s,r]),[r,c]}const T=()=>{const[e,s]=j(null,"currentUser"),[r,c]=j(null,"comments"),[n,a]=d.exports.useState(!1);return d.exports.useEffect(()=>{fetch("../data.json").then(l=>l.json()).then(l=>{const i=JSON.parse(localStorage.getItem("currentUser")),h=JSON.parse(localStorage.getItem("comments"));(i===null||h===null)&&(s(l.currentUser),c(l.comments)),a(!0)})},[e,r]),t(y.Provider,{value:{comments:r,setComments:c,currentUser:e},children:m("div",{className:"min-h-screen max-w-3xl mx-auto",children:[n?r.map(o=>t(I,{data:o,children:o.content},o.id)):null,t("div",{className:"my-6",children:n?t(F,{btnValue:"SEND"}):null})]})})};L.render(t(b.StrictMode,{children:t(T,{})}),document.getElementById("root"));
