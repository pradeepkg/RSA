"use strict";(self.webpackChunkdocku=self.webpackChunkdocku||[]).push([[161],{51425:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=n(74848),a=n(28453),o=n(28647);n(11470),n(19365);const s={slug:"hubspot",title:"HubSpot",date:new Date("2024-05-14T00:00:00.000Z"),authors:"pradeepkg",tags:["Provisioning","REST","SaaS","HubSpot","CRM","Marketing"],keywords:["Provisioning","REST","SaaS","HubSpot","CRM","Marketing"],draft:!1},l=void 0,i={permalink:"/RSA/connectors/hubspot",source:"@site/connectors/hubspot/hubspot.mdx",title:"HubSpot",description:"HubSpot is a leading CRM platform that offers marketing, sales, and customer",date:"2024-05-14T00:00:00.000Z",tags:[{label:"Provisioning",permalink:"/RSA/connectors/tags/provisioning"},{label:"REST",permalink:"/RSA/connectors/tags/rest"},{label:"SaaS",permalink:"/RSA/connectors/tags/saa-s"},{label:"HubSpot",permalink:"/RSA/connectors/tags/hub-spot"},{label:"CRM",permalink:"/RSA/connectors/tags/crm"},{label:"Marketing",permalink:"/RSA/connectors/tags/marketing"}],readingTime:37.03333333333333,hasTruncateMarker:!0,authors:[{name:"Pradeep Kadambar",title:"Creator",url:"https://www.linkedin.com/in/pradeepkg/",imageURL:"https://github.com/pradeepkg.png",key:"pradeepkg"}],frontMatter:{slug:"hubspot",title:"HubSpot",date:"2024-05-14T00:00:00.000Z",authors:"pradeepkg",tags:["Provisioning","REST","SaaS","HubSpot","CRM","Marketing"],keywords:["Provisioning","REST","SaaS","HubSpot","CRM","Marketing"],draft:!1},unlisted:!1,lastUpdatedAt:1715729236e3,prevItem:{title:"Notion",permalink:"/RSA/connectors/notion"},nextItem:{title:"TalentLMS",permalink:"/RSA/connectors/talent-lms"}},u={authorsImageUrls:[void 0]},c=[];function d(e){const t={code:"code",p:"p",...(0,a.R)(),...e.components};return(0,r.jsx)("table",{children:(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{width:"180",class:"image-cell",children:[(0,r.jsx)("img",{src:o.A,width:"180",height:"180"}),(0,r.jsxs)(t.p,{children:["HubSpot is a leading CRM platform that offers marketing, sales, and customer\r\nservice tools to help businesses grow. It provides solutions for email marketing,\r\nlead generation, social media management, and more, all integrated into one\r\nplatform. HubSpot's user-friendly interface and robust analytics make it a\r\npopular choice for companies seeking to streamline their customer relationship\r\nmanagement efforts.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"Versions: ",(0,r.jsx)(t.code,{children:"8.0.0 P2"})]})]})})})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var r=n(34164);const a={tabItem:"tabItem_Ymn6"};var o=n(74848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>x});var r=n(96540),a=n(34164),o=n(23104),s=n(56347),l=n(205),i=n(57485),u=n(31682),c=n(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[u,d]=b({queryString:n,groupId:a}),[f,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),g=(()=>{const e=u??f;return m({value:e,tabValues:o})?e:null})();(0,l.A)((()=>{g&&i(g)}),[g]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),h(e)}),[d,h,o]),tabValues:o}}var h=n(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(74848);function S(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),c=e=>{const t=e.currentTarget,n=i.indexOf(t),a=l[n].value;a!==r&&(u(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...o,className:(0,a.A)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function k(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function w(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,v.jsx)(S,{...t,...e}),(0,v.jsx)(k,{...t,...e})]})}function x(e){const t=(0,h.A)();return(0,v.jsx)(w,{...e,children:d(e.children)},String(t))}},28647:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/HubSpot - 180x180-15d5755a503f6821511baa928176344d.jpg"},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var r=n(96540);const a={},o=r.createContext(a);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);