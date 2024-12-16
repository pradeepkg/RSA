"use strict";(self.webpackChunkdocku=self.webpackChunkdocku||[]).push([[6346],{22637:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>u});const a=JSON.parse('{"id":"request/getApprovalDetails","title":"Get Approval Details","description":"Get the details of a particular approval. The user specified by the token must have access to the requested approval.","source":"@site/docs/request/getApprovalDetails.md","sourceDirName":"request","slug":"/request/getApprovalDetails","permalink":"/RSA/docs/request/getApprovalDetails","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1715787065000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Find Approvals","permalink":"/RSA/docs/request/findApprovals"},"next":{"title":"Get Approvals for User","permalink":"/RSA/docs/request/getApprovalsForUser"}}');var n=r(74848),s=r(28453),l=r(98120),o=r(19365);const i={sidebar_position:2},c="Get Approval Details",d={},u=[{value:"Request",id:"request",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Headers",id:"headers",level:3},{value:"Response",id:"response",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Examples",id:"examples",level:2},{value:"Request",id:"request-1",level:3},{value:"Response",id:"response-1",level:3}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"get-approval-details",children:"Get Approval Details"})}),"\n",(0,n.jsx)(t.p,{children:"Get the details of a particular approval. The user specified by the token must have access to the requested approval."}),"\n",(0,n.jsxs)("p",{children:[(0,n.jsx)("span",{class:"method-get",children:"GET "}),(0,n.jsx)("span",{class:"method-get-text",children:(0,n.jsx)(t.a,{href:"https://instance.securid.com/aveksa/command.submit?cmd=getApprovalDetails",children:"https://instance.securid.com/aveksa/command.submit?cmd=getApprovalDetails"})})]}),"\n",(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsxs)(t.p,{children:["This web service has been replaced with the command ",(0,n.jsx)(t.a,{href:"getWorkItemDetails",children:"Get Work Items for User"}),". Future releases may remove the deprecated web service command."]})}),"\n",(0,n.jsx)(t.h2,{id:"request",children:"Request"}),"\n",(0,n.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)("table",{class:"table-container",children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("label",{class:"required",children:"command"})}),(0,n.jsx)("td",{children:"getApprovalDetails "})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"format"}),(0,n.jsxs)("td",{children:[(0,n.jsx)(t.code,{children:"properties"})," - (Default) ",(0,n.jsx)(t.code,{children:"key=value"}),". most useful when requesting a single object. If multiple objects are returned, values is a csv. ie ",(0,n.jsx)(t.code,{children:"key=value1,value2,value3"})," where value1 is the value for the first object, value2 is the value for the 2nd object, etc.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(t.code,{children:"json"})," - Useful format for parsing into javascript or other languages. See ",(0,n.jsx)("a",{href:"https://www.json.org",target:"_blank",children:(0,n.jsx)(t.a,{href:"http://www.json.org",children:"www.json.org"})})," for details."]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("label",{class:"required",children:"approval-id"})}),(0,n.jsxs)("td",{children:["The id of the approval work item, retrieved from ",(0,n.jsx)("a",{href:"./getApprovalsForUser",children:"Get Approvals for User"}),"."]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"headers",children:"Headers"}),"\n",(0,n.jsxs)("table",{class:"table-container",children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("label",{class:"required",children:"Authorization"})}),(0,n.jsxs)("td",{children:["Bearer ",(0,n.jsx)(t.code,{children:"token"})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Accept"}),(0,n.jsx)("td",{children:"application/json"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Content-Type"}),(0,n.jsx)("td",{children:"application/json"})]})]}),"\n",(0,n.jsx)(t.h2,{id:"response",children:"Response"}),"\n",(0,n.jsx)(t.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,n.jsx)(t.p,{children:"The command returns detailed information about the approval in XML format."}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.h3,{id:"request-1",children:"Request"}),"\n",(0,n.jsx)(l.A,{className:"unique-tabs",children:(0,n.jsx)(o.A,{value:"Curl",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:'curl -K -X GET  \\\n"https://instance.securid.com/aveksa/command.submit?cmd=getApprovalDetails&format=json&approval-id=id" \\\n-H "Authorization: Bearer <token>" \\\n-H "Content-Type: application/json"\n'})})})}),"\n",(0,n.jsx)(t.h3,{id:"response-1",children:"Response"}),"\n",(0,n.jsxs)(l.A,{className:"unique-tabs",children:[(0,n.jsx)(o.A,{value:"200 XML",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-xml",children:'<?xml version="1.0" encoding="UTF-8"?>\n<getApprovalDetails>\n    <Approval>\n        <EmailApprovalEnabled>false</EmailApprovalEnabled>\n        <LineItemApprovalEnabled>true</LineItemApprovalEnabled>\n        <ExtraFields/>\n        <WorkItemId>11:WPDS:1</WorkItemId>\n        <WorkItemName>Supervisor Approval</WorkItemName>\n        <WorkItemDueDate>2022-04-07 14:30:31.0</WorkItemDueDate>\n        <WorkItemCompletedDate>2022-04-04 14:30:34.0</WorkItemCompletedDate>\n        <WorkItemCompletedByName>System,</WorkItemCompletedByName>\n        <WorkItemReassignDisabled>false</WorkItemReassignDisabled>\n        <WorkItemState>Accepted</WorkItemState>\n        <RequestId>1</RequestId>\n        <RequestName>00001</RequestName>\n        <RequestedByName>Aishwarya Rao</RequestedByName>\n        <RequestDescription>System Admin Role - Bhagat</RequestDescription>\n        <RequestNotes/>\n        <RequestHasAttachments>false</RequestHasAttachments>\n        <Actions>\n            <ActionName>Accepted</ActionName>\n        </Actions>\n    </Approval>\n</getApprovalDetails>\n'})})}),(0,n.jsx)(o.A,{value:"200 JSON",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n    "getApprovalDetails": {\n        "Approval": {\n            "WorkItemCompletedByName": "",\n            "RequestId": 443,\n            "Actions": {\n                "ActionName": [\n                    "Rejected",\n                    "Accepted"\n                ]\n            },\n            "RequestHasAttachments": false,\n            "ExtraFields": "",\n            "RequestName": "UAR-5",\n            "RequestDescription": "",\n            "WorkItemCompletedDate": "",\n            "LineItemApprovalEnabled": true,\n            "WorkItemState": "Available",\n            "RequestedByName": "AveksaAdmin,",\n            "EmailApprovalEnabled": true,\n            "WorkItemDueDate": "2024-01-22 17:00:00.0",\n            "WorkItemName": "Asset Business Owner Approval",\n            "WorkItemId": "3377:WPDS:1",\n            "RequestNotes": "",\n            "WorkItemReassignDisabled": false\n        }\n    }\n}\n'})})}),(0,n.jsx)(o.A,{value:"401",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",children:"<html>\n  <head>\n    <title>Error</title>\n  </head>\n  <body>The token is not valid for the command 'getApprovalDetails'. Token is invalid or expired</body>\n</html>\n"})})}),(0,n.jsx)(o.A,{value:"412 Missing Parameter",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",children:"<html>\n  <head>\n    <title>Error</title>\n  </head>\n  <body>The approval-id parameter is required. \n        Query String=cmd=getApprovalDetails&amp;format=json&amp;approval-id=</body>\n</html>\n"})})}),(0,n.jsx)(o.A,{value:"412 Invalid ID",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",children:"<html>\n  <head>\n    <title>Error</title>\n  </head>\n  <body>The work item could not be retrieved \n          Query String=cmd=getApprovalDetails&amp;format=json&amp;approval-id=123</body>\n</html>\n"})})})]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>l});r(96540);var a=r(34164);const n={tabItem:"tabItem_Ymn6"};var s=r(74848);function l(e){let{children:t,hidden:r,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(n.tabItem,l),hidden:r,children:t})}},98120:(e,t,r)=>{r.d(t,{A:()=>g});var a=r(96540),n=r(34164),s=r(86641),l=r(56347),o=r(205),i=r(38874);var c=r(82993);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}(r);return function(e){const t=(void 0===(a=(e,t)=>e.value===t.value)&&(a=(e,t)=>e===t),(r=e).filter(((e,t)=>r.findIndex((t=>a(t,e)))!==t)));var r,a;if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const n=(0,l.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,s=u(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[d,m]=h({queryString:r,groupId:n}),[v,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,c.Dv)(r);return[n,(0,a.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:n}),b=(()=>{const e=d??v;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),m(e),f(e)}),[m,f,s]),tabValues:s}}var v=r(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(74848);function x(e){let{className:t,block:r,selectedValue:a,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const t=e.currentTarget,r=i.indexOf(t),n=o[r].value;n!==a&&(c(t),l(n))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;t=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;t=i[r]??i[i.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":r},t),children:o.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>i.push(e),onKeyDown:u,onClick:d,...s,className:(0,n.A)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":a===t}),children:r??t},t)}))})}function j(e){let{lazy:t,children:r,selectedValue:s}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function A(e){const t=m(e);return(0,b.jsxs)("div",{className:(0,n.A)("tabs-container",f.tabList),children:[(0,b.jsx)(x,{...t,...e}),(0,b.jsx)(j,{...t,...e})]})}function g(e){const t=(0,v.A)();return(0,b.jsx)(A,{...e,children:d(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>o});var a=r(96540);const n={},s=a.createContext(n);function l(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);