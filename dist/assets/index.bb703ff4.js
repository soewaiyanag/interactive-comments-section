var j=Object.defineProperty;var k=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var S=(e,r,n)=>r in e?j(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,H=(e,r)=>{for(var n in r||(r={}))O.call(r,n)&&S(e,n,r[n]);if(k)for(var n of k(r))L.call(r,n)&&S(e,n,r[n]);return e};import{j as B,r as i,u as V,l as U,R as w,a as W}from"./vendor.9617ed68.js";const A=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}};A();var M="/assets/icon-reply.b32cf4fa.svg";const t=B.exports.jsx,d=B.exports.jsxs,P=e=>d("div",{onClick:e.clickHandler,className:"\r flex items-center\r space-x-1.5\r select-none active:opacity-75\r transition-opacity",children:[t("img",{className:"inline-block h-fit",src:M,alt:"reply_icon"}),t("span",{className:"font-bold text-modrateBlue",children:"Reply"})]});var q="/assets/icon-edit.be86deeb.svg";const J=e=>d("div",{onClick:e.clickHandler,className:"\r flex items-center\r space-x-1.5\r select-none active:opacity-75\r transition-opacity",children:[t("img",{className:"inline-block h-fit",src:q,alt:"reply_icon"}),t("span",{className:"font-bold text-modrateBlue",children:"Edit"})]});var G="/assets/icon-delete.a955972c.svg";const T=e=>d("div",{onClick:e.clickHandler,className:"\r flex items-center\r space-x-1.5\r select-none active:opacity-75\r transition-opacity",children:[t("img",{className:"inline-block h-fit",src:G,alt:"reply_icon"}),t("span",{className:"font-bold text-softRed",children:"Delete"})]}),Z=e=>t("svg",{className:"cursor-pointer group",width:"11",height:"11",onClick:e.clickHandler,xmlns:"http://www.w3.org/2000/svg",children:t("path",{d:"M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z",className:`transition-colors group-hover:fill-modrateBlue ${e.checked?"fill-modrateBlue":"fill-lightGrayishBlue"}`})}),$=e=>t("svg",{className:"cursor-pointer group",width:"11",height:"3",onClick:e.clickHandler,xmlns:"http://www.w3.org/2000/svg",children:t("path",{d:"M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z",className:`transition-colors group-hover:fill-modrateBlue ${e.checked?"fill-modrateBlue":"fill-lightGrayishBlue"}`})}),z=e=>{var g;const[r,n]=i.exports.useState((g=e.score)!=null?g:0),[o,s]=i.exports.useState(!1),[a,l]=i.exports.useState(!1),c=()=>{n(r-1),s(!1)},m=()=>{n(r+1),l(!1)},p=v=>{n(r+v),s(!0)},f=v=>{n(r-v),l(!0)};return d("div",{className:"\r bg-veryLightGray\r flex items-center justify-center\r gap-4 w-24 h-10\r md:flex-col md:gap-3 md:h-24 md:w-10\r rounded-md select-none\r col-start-1 row-start-3\r md:row-span-3 ",children:[t(Z,{checked:o,clickHandler:()=>{if(o){c();return}if(a){m(),p(2);return}p(1)}}),t("span",{className:"text-modrateBlue text-lg font-medium",children:r}),t($,{checked:a,clickHandler:()=>{if(a){m();return}if(o){c(),f(2);return}f(1)}})]})},N=i.exports.createContext(),F=e=>{const{currentUser:r}=i.exports.useContext(N),n=r.username===e.username;return d("div",{className:"\r flex flex-wrap gap-4 items-center\r col-span-2 md:col-start-2 md:row-start-1\r ",children:[t("img",{className:"h-8",src:e.avatar,alt:"profile picture"}),d("h1",{className:"text-[1.05rem] text-darkBlue font-semibold\r flex items-center gap-2",children:[e.username,t("span",{style:{display:n?null:"none"},className:"bg-modrateBlue text-white\r text-xs text-center px-2",children:"you"})]}),t("span",{className:"text-grayishBlue font-normal text-base",children:e.createdAt})]})},D=(e,r,n)=>({id:e,content:r,user:n,createdAt:"0 second ago",replies:[],score:0}),K=e=>{const[r,n]=i.exports.useState(""),{comments:o,setComments:s,currentUser:a}=i.exports.useContext(N),l=o.map(m=>Object.assign({},m)),c=(m,p,f)=>{m.forEach(x=>{U.exports._.isEqual(x.id,p)?(x.replies.push(f),s(l),e.setShowWriteReply(!1)):c(x.replies,p,f)})};return d("div",{className:"WriteBox",children:[t("img",{className:"h-10",src:a.image.png,alt:"avator"}),t("textarea",{className:"WriteBox__textarea",placeholder:"Add a comment...",onChange:m=>{n(m.target.value)}}),t("button",{className:"WriteBox__btn",onClick:()=>{if(!r)return;let m=D(V(),r,a);c(l,e.id,m)},children:e.btnValue})]})},Y=e=>t("div",{className:"fixed inset-0 h-full bg-black bg-opacity-10\r grid place-items-center animate-fade-in-up",children:d("div",{className:"bg-white py-6 rounded-lg space-y-4\r w-96 p-6",children:[t("h1",{className:"text-darkBlue text-xl font-medium",children:"Delete Comment"}),t("p",{className:"text-darkBlue",children:"Are you sure you want to delete this comment? This will remove the comment and can't be undone"}),d("div",{className:"flex text-center gap-4",children:[t("button",{className:"\r px-5 py-2 rounded-md active:opacity-80 w-1/2\r uppercase bg-grayishBlue text-white font-medium",onClick:e.cancelHandler,children:"no, cancel"}),t("button",{className:"\r px-5 py-2 rounded-md active:opacity-80 w-1/2\r uppercase bg-softRed text-white font-medium",onClick:e.deleteHandler,children:"yes, delete"})]})]})}),I=e=>{const[r,n]=i.exports.useState(!1),[o,s]=i.exports.useState(!1),[a,l]=i.exports.useState(!1),[c,m]=i.exports.useState(e.children),{comments:p,setComments:f,currentUser:x}=i.exports.useContext(N),b=x.username===e.data.user.username,g=p.map(u=>Object.assign({},u)),v=(u,y)=>{u.forEach(h=>{U.exports._.isEqual(h.id,y)?(h.content=c,f(g)):v(h.replies,y)})},C=(u,y)=>u.map(h=>H({},h)).filter(h=>("replies"in h&&(h.replies=C(h.replies,y)),h.id!==y)),E=()=>{n(!r)},R=()=>{l(!a)};return d("div",{children:[o?t(Y,{deleteHandler:()=>{f(C(g,e.data.id))},cancelHandler:()=>{s(!1)}}):null,d("div",{className:"\r p-4 my-4 bg-white rounded-md shadow-sm\r gap-y-6 grid grid-cols-[auto_auto] \r md:grid-cols-[auto_1fr_auto] md:gap-x-6",children:[t(z,{score:e.data.score}),t(F,{avatar:e.data.user.image.png,username:e.data.user.username,createdAt:e.data.createdAt}),t("div",{className:"cursor-pointer ml-auto\r col-start-2 row-start-3 self-center\r md:row-start-1",children:b?d("div",{className:"flex gap-5",children:[t(T,{clickHandler:()=>{s(!0)}}),t(J,{clickHandler:R})]}):t(P,{clickHandler:E})}),t("div",{className:"\r text-grayishBlue text-base font-normal\r col-span-2 md:col-span-2 md:col-start-2\r md:row-span-2",children:a?d("div",{className:"flex flex-col gap-4",children:[t("textarea",{className:"\r w-full\r rounded px-5 py-2 min-h-[8rem]\r resize-none text-base border-2",value:c,onChange:u=>{m(u.target.value)}}),t("button",{className:"py-2 px-5 bg-modrateBlue\r text-white h-fit max-w-fit rounded \r active:bg-opacity-75 self-end",onClick:()=>{v(g,e.data.id),l(!1)},children:"UPDATE"})]}):t("p",{children:c})})]}),t("div",{children:r?t(K,{id:e.data.id,setShowWriteReply:n,btnValue:"REPLY"}):null}),t("div",{className:"border-l-2 pl-5 md:ml-8 md:pl-8",children:e.data.replies.length?e.data.replies.map(u=>t(I,{data:u,children:u.content},u.id)):null})]})},Q=e=>{const[r,n]=i.exports.useState(""),{comments:o,setComments:s,currentUser:a}=i.exports.useContext(N),l=o.map(c=>Object.assign({},c));return d("div",{className:"WriteBox",children:[t("img",{className:"h-10",src:a.image.png,alt:"avator"}),t("textarea",{className:"WriteBox__textarea",placeholder:"Add a comment...",value:r,onChange:c=>{n(c.target.value)}}),t("button",{className:"WriteBox__btn",onClick:()=>{if(!r)return;let c=D(V(),r,a);l.push(c),s(l),n("")},children:e.btnValue})]})};function _(e,r){const[n,o]=w.useState(()=>{const s=window.localStorage.getItem(r);return s!==null?JSON.parse(s):e});return w.useEffect(()=>{window.localStorage.setItem(r,JSON.stringify(n))},[r,n]),[n,o]}const X=()=>{const[e,r]=_(null,"currentUser"),[n,o]=_(null,"comments"),[s,a]=i.exports.useState(!1);return i.exports.useEffect(()=>{fetch("../data.json").then(c=>c.json()).then(c=>{const m=JSON.parse(localStorage.getItem("currentUser")),p=JSON.parse(localStorage.getItem("comments"));(m===null||p===null)&&(r(c.currentUser),o(c.comments)),a(!0)})},[e,n]),t(N.Provider,{value:{comments:n,setComments:o,currentUser:e},children:d("div",{className:"min-h-screen max-w-[44rem] my-10 mx-auto",children:[s?n.map(l=>t(I,{data:l,children:l.content},l.id)):null,t("div",{className:"my-6",children:s?t(Q,{btnValue:"SEND"}):null})]})})};W.render(t(w.StrictMode,{children:t(X,{})}),document.getElementById("root"));
