"use strict";(self.webpackChunkdocku=self.webpackChunkdocku||[]).push([[8209],{69546:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});a(96540);var s=a(34164),r=a(21312);const l=()=>(0,r.T)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var n=a(39723),c=a(66578),i=a(28027),g=a(56133),o=a(51107);const u={tag:"tag_Nnez"};var h=a(74848);function d(e){let{letterEntry:t}=e;return(0,h.jsxs)("article",{children:[(0,h.jsx)(o.A,{as:"h2",id:t.letter,children:t.letter}),(0,h.jsx)("ul",{className:"padding--none",children:t.tags.map((e=>(0,h.jsx)("li",{className:u.tag,children:(0,h.jsx)(g.A,{...e})},e.permalink)))}),(0,h.jsx)("hr",{})]})}function p(e){let{tags:t}=e;const a=function(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);t[a]??=[],t[a].push(e)})),Object.entries(t).sort(((e,t)=>{let[a]=e,[s]=t;return a.localeCompare(s)})).map((e=>{let[t,a]=e;return{letter:t,tags:a.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}(t);return(0,h.jsx)("section",{className:"margin-vert--lg",children:a.map((e=>(0,h.jsx)(d,{letterEntry:e},e.letter)))})}var j=a(41463);function m(e){let{tags:t,sidebar:a}=e;const r=l();return(0,h.jsxs)(n.e3,{className:(0,s.A)(c.G.wrapper.blogPages,c.G.page.blogTagsListPage),children:[(0,h.jsx)(n.be,{title:r}),(0,h.jsx)(j.A,{tag:"blog_tags_list"}),(0,h.jsxs)(i.A,{sidebar:a,children:[(0,h.jsx)(o.A,{as:"h1",children:r}),(0,h.jsx)(p,{tags:t})]})]})}},56133:(e,t,a)=>{a.d(t,{A:()=>c});a(96540);var s=a(34164),r=a(28774);const l={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var n=a(74848);function c(e){let{permalink:t,label:a,count:c,description:i}=e;return(0,n.jsxs)(r.A,{href:t,title:i,className:(0,s.A)(l.tag,c?l.tagWithCount:l.tagRegular),children:[a,c&&(0,n.jsx)("span",{children:c})]})}}}]);