"use strict";(self.webpackChunkdocku=self.webpackChunkdocku||[]).push([[8944],{96247:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>h});var s=t(74848),n=t(28453),a=t(11470),l=t(19365),o=t(20431);const i={sidebar_position:3},c="Get Approvals for User",d={id:"request/getApprovalsForUser",title:"Get Approvals for User",description:"Get approvals for the user specified by the token.",source:"@site/docs/request/getApprovalsForUser.md",sourceDirName:"request",slug:"/request/getApprovalsForUser",permalink:"/RSA/docs/request/getApprovalsForUser",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1715787065e3,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Get Approval Details",permalink:"/RSA/docs/request/getApprovalDetails"},next:{title:"Get Request Items",permalink:"/RSA/docs/request/getRequestItems"}},u={},h=[{value:"Request",id:"request",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Headers",id:"headers",level:3},{value:"Response",id:"response",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Examples",id:"examples",level:2},{value:"Request",id:"request-1",level:3},{value:"Response",id:"response-1",level:3}];function p(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"get-approvals-for-user",children:"Get Approvals for User"})}),"\n",(0,s.jsx)("img",{src:o.A,width:"80"}),"\n",(0,s.jsx)(r.p,{children:"Get approvals for the user specified by the token."}),"\n",(0,s.jsxs)("p",{children:[(0,s.jsx)("span",{class:"method-get",children:"GET "}),(0,s.jsx)("span",{class:"method-get-text",children:(0,s.jsx)(r.a,{href:"https://instance.securid.com/aveksa/command.submit?cmd=getApprovalsForUser",children:"https://instance.securid.com/aveksa/command.submit?cmd=getApprovalsForUser"})})]}),"\n",(0,s.jsx)(r.admonition,{type:"caution",children:(0,s.jsxs)(r.p,{children:["This web service has been replaced with the command ",(0,s.jsx)(r.a,{href:"getWorkItemsForUser",children:"Get Work Items for User"}),". Future releases may remove the deprecated web service command."]})}),"\n",(0,s.jsx)(r.h2,{id:"request",children:"Request"}),"\n",(0,s.jsx)(r.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)("table",{class:"table-container",children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("label",{class:"required",children:"command"})}),(0,s.jsx)("td",{children:"getApprovalsForUser "})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"format"}),(0,s.jsxs)("td",{children:[(0,s.jsx)(r.code,{children:"properties"})," - (Default) ",(0,s.jsx)(r.code,{children:"key=value"}),". most useful when requesting a single object. If multiple objects are returned, values is a csv. ie ",(0,s.jsx)(r.code,{children:"key=value1,value2,value3"})," where value1 is the value for the first object, value2 is the value for the 2nd object, etc.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)(r.code,{children:"json"})," - Useful format for parsing into javascript or other languages. See ",(0,s.jsx)("a",{href:"https://www.json.org",target:"_blank",children:(0,s.jsx)(r.a,{href:"http://www.json.org",children:"www.json.org"})})," for details."]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"page-size"}),(0,s.jsxs)("td",{children:["The number of approvals to return for this page. ",(0,s.jsx)(r.code,{children:"(Default 20)"})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"sort"}),(0,s.jsxs)("td",{children:["Sort the approvals by due date (asc | desc). ",(0,s.jsx)(r.code,{children:"(Default asc)"})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"start-page"}),(0,s.jsxs)("td",{children:["The page number to start from. ",(0,s.jsx)(r.code,{children:"(Default 1)"})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"state"}),(0,s.jsxs)("td",{children:["The state of the approvals to retrieve (pending | completed | all). ",(0,s.jsx)(r.code,{children:"(Default pending)"})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"headers",children:"Headers"}),"\n",(0,s.jsxs)("table",{class:"table-container",children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("label",{class:"required",children:"Authorization"})}),(0,s.jsxs)("td",{children:["Bearer ",(0,s.jsx)(r.code,{children:"token"})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Accept"}),(0,s.jsx)("td",{children:"application/json"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Content-Type"}),(0,s.jsx)("td",{children:"application/json"})]})]}),"\n",(0,s.jsx)(r.h2,{id:"response",children:"Response"}),"\n",(0,s.jsx)(r.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,s.jsx)(r.p,{children:"The command returns detailed information about the approval in XML format."}),"\n",(0,s.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(r.h3,{id:"request-1",children:"Request"}),"\n",(0,s.jsx)(a.A,{className:"unique-tabs",children:(0,s.jsx)(l.A,{value:"Curl",children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",children:'curl -K -X GET  \\\n"https://instance.securid.com/aveksa/command.submit?cmd=getApprovalsForUser&format=json" \\\n-H "Authorization: Bearer <token>" \\\n-H "Content-Type: application/json"\n'})})})}),"\n",(0,s.jsx)(r.h3,{id:"response-1",children:"Response"}),"\n",(0,s.jsxs)(a.A,{className:"unique-tabs",children:[(0,s.jsx)(l.A,{value:"200",children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-xml",children:'<?xml version="1.0" encoding="UTF-8"?>\n<getApprovalsForUser>\n    <NumApprovals>0</NumApprovals>\n</getApprovalsForUser>\n'})})}),(0,s.jsx)(l.A,{value:"401",children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-html",children:"<html>\n    <head>\n        <title>Error</title>\n    </head>\n    <body>The token is not valid for the command 'getApprovalsForUser'. Token is invalid or expired</body>\n</html>\n"})})})]})]})}function m(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>l});t(96540);var s=t(34164);const n={tabItem:"tabItem_Ymn6"};var a=t(74848);function l(e){let{children:r,hidden:t,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(n.tabItem,l),hidden:t,children:r})}},11470:(e,r,t)=>{t.d(r,{A:()=>w});var s=t(96540),n=t(34164),a=t(23104),l=t(56347),o=t(205),i=t(57485),c=t(31682),d=t(70679);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:t}=e;return(0,s.useMemo)((()=>{const e=r??function(e){return u(e).map((e=>{let{props:{value:r,label:t,attributes:s,default:n}}=e;return{value:r,label:t,attributes:s,default:n}}))}(t);return function(e){const r=(0,c.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function p(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function m(e){let{queryString:r=!1,groupId:t}=e;const n=(0,l.W6)(),a=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,i.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const r=new URLSearchParams(n.location.search);r.set(a,e),n.replace({...n.location,search:r.toString()})}),[a,n])]}function v(e){const{defaultValue:r,queryString:t=!1,groupId:n}=e,a=h(e),[l,i]=(0,s.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:r,tabValues:a}))),[c,u]=m({queryString:t,groupId:n}),[v,f]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,a]=(0,d.Dv)(t);return[n,(0,s.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:n}),x=(()=>{const e=c??v;return p({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{x&&i(x)}),[x]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,a]),tabValues:a}}var f=t(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(74848);function b(e){let{className:r,block:t,selectedValue:s,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const r=e.currentTarget,t=i.indexOf(r),n=o[t].value;n!==s&&(c(r),l(n))},u=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;r=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;r=i[t]??i[i.length-1];break}}r?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":t},r),children:o.map((e=>{let{value:r,label:t,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:s===r?0:-1,"aria-selected":s===r,ref:e=>i.push(e),onKeyDown:u,onClick:d,...a,className:(0,n.A)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":s===r}),children:t??r},r)}))})}function g(e){let{lazy:r,children:t,selectedValue:a}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=l.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:l.map(((e,r)=>(0,s.cloneElement)(e,{key:r,hidden:e.props.value!==a})))})}function A(e){const r=v(e);return(0,j.jsxs)("div",{className:(0,n.A)("tabs-container",x.tabList),children:[(0,j.jsx)(b,{...r,...e}),(0,j.jsx)(g,{...r,...e})]})}function w(e){const r=(0,f.A)();return(0,j.jsx)(A,{...e,children:u(e.children)},String(r))}},20431:(e,r,t)=>{t.d(r,{A:()=>s});const s=t.p+"assets/images/draft-ab117e6de584b2dc7bd3d9f0bbfe0dd1.png"},28453:(e,r,t)=>{t.d(r,{R:()=>l,x:()=>o});var s=t(96540);const n={},a=s.createContext(n);function l(e){const r=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),s.createElement(a.Provider,{value:r},e.children)}}}]);