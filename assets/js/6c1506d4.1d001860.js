"use strict";(self.webpackChunkdocku=self.webpackChunkdocku||[]).push([[6878],{71179:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var n=r(74848),s=r(28453),a=r(11470),l=r(19365);const o={sidebar_position:4},i="Get Request Items",u={id:"request/getRequestItems",title:"Get Request Items",description:"Get information about the changes encompassed by a particular change request or approval. The user specified by the token must have access to the change request or approval.",source:"@site/docs/request/getRequestItems.md",sourceDirName:"request",slug:"/request/getRequestItems",permalink:"/RSA/docs/request/getRequestItems",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1714157031e3,sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Get Approvals for User",permalink:"/RSA/docs/request/getApprovalsForUser"},next:{title:"Get Form Token * * *",permalink:"/RSA/docs/request/getFormToken"}},c={},d=[{value:"Request Parameters",id:"request-parameters",level:3},{value:"Request Headers",id:"request-headers",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Examples",id:"response-examples",level:3}];function m(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"get-request-items",children:"Get Request Items"}),"\n",(0,n.jsx)(t.p,{children:"Get information about the changes encompassed by a particular change request or approval. The user specified by the token must have access to the change request or approval."}),"\n",(0,n.jsxs)("p",{children:[(0,n.jsx)("span",{class:"method-get",children:"GET "}),(0,n.jsx)("span",{class:"method-get-text",children:(0,n.jsx)(t.a,{href:"https://instance.securid.com/aveksa/command.submit?cmd=getRequestItems",children:"https://instance.securid.com/aveksa/command.submit?cmd=getRequestItems"})})]}),"\n",(0,n.jsx)(t.h3,{id:"request-parameters",children:"Request Parameters"}),"\n",(0,n.jsxs)("table",{class:"table-container",children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("label",{class:"required",children:"command"})}),(0,n.jsx)("td",{children:"getRequestItems"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"format"}),(0,n.jsxs)("td",{children:[(0,n.jsx)(t.code,{children:"properties"})," - (Default) ",(0,n.jsx)(t.code,{children:"key=value"}),". most useful when requesting a single object. If multiple objects are returned, values is a csv. ie ",(0,n.jsx)(t.code,{children:"key=value1,value2,value3"})," where value1 is the value for the first object, value2 is the value for the 2nd object, etc.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(t.code,{children:"json"})," - Useful format for parsing into javascript or other languages. See ",(0,n.jsx)("a",{href:"https://www.json.org",target:"_blank",children:(0,n.jsx)(t.a,{href:"http://www.json.org",children:"www.json.org"})})," for details."]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("label",{class:"required",children:"approval-id"})}),(0,n.jsx)("td",{children:"The id of the approval work item, retrieved from getApprovalsForUser. Either approval-id or request-id must be provided."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("label",{class:"required",children:"request-id"})}),(0,n.jsx)("td",{children:"The id of the change request, retrieved from createChangeRequest. Either approval-id or request-id must be provided."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"page-size"}),(0,n.jsxs)("td",{children:["The number of request items to return for this page. ",(0,n.jsx)(t.code,{children:"(Default 20)"})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"start-page"}),(0,n.jsxs)("td",{children:["The page number to start from. ",(0,n.jsx)(t.code,{children:"(Default 1)"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"request-headers",children:"Request Headers"}),"\n",(0,n.jsxs)("table",{class:"table-container",children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("label",{class:"required",children:"Authorization"})}),(0,n.jsxs)("td",{children:["Bearer ",(0,n.jsx)(t.code,{children:"&lt;token&gt;"})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Accept"}),(0,n.jsx)("td",{children:"application/json"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Content-Type"}),(0,n.jsx)("td",{children:"application/json"})]})]}),"\n",(0,n.jsx)(t.h3,{id:"response-parameters",children:"Response Parameters"}),"\n",(0,n.jsx)(t.p,{children:"The command returns detailed information about the approval in XML format."}),"\n",(0,n.jsx)(t.h3,{id:"request-example",children:"Request Example"}),"\n",(0,n.jsx)(a.A,{className:"unique-tabs",children:(0,n.jsx)(l.A,{value:"Curl",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:'curl -K -X GET  \\\n"https://instance.securid.com/aveksa/command.submit?cmd=getRequestItems&format=json&approval-id=id" \\\n-H "Authorization: Bearer <token>" \\\n-H "Content-Type: application/json"\n'})})})}),"\n",(0,n.jsx)(t.h3,{id:"response-examples",children:"Response Examples"}),"\n",(0,n.jsxs)(a.A,{className:"unique-tabs",children:[(0,n.jsx)(l.A,{value:"200",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-xml",children:'<?xml version="1.0" encoding="UTF-8"?>\n<getRequestItems>\n    <NumRequestItems>2</NumRequestItems>\n    <WorkItemId>2585:WPDS:1</WorkItemId>\n    <RequestId>324</RequestId>\n    <RequestStatus>Approvals Phase</RequestStatus>\n    <RequestItems>\n        <RequestItem>\n            <ItemId>773</ItemId>\n            <TypeDescription>Add user to group</TypeDescription>\n            <Operation>Add</Operation>\n            <OperandType>User</OperandType>\n            <ValueType>UserGroup</ValueType>\n            <EntitlementType>Group</EntitlementType>\n            <EntitlementName>Fredwin Cycling Product</EntitlementName>\n            <EntitlementRawName>Fredwin Cycling Product</EntitlementRawName>\n            <BusinessSource>Aha!</BusinessSource>\n            <BusinessSourceAltName>Aha!</BusinessSourceAltName>\n            <State>Pending Approval</State>\n            <ItemDescription/>\n            <DerivedType>Direct</DerivedType>\n            <IsChangeToApprove>true</IsChangeToApprove>\n            <UserName>Wayne, Bruce</UserName>\n            <UserId>225142</UserId>\n            <ApplicationRoleName/>\n            <UserGroupName/>\n            <GlobalRoleName/>\n            <GlobalRoleSetName/>\n            <Data_Resource_Name/>\n            <AccountName/>\n        </RequestItem>\n        <RequestItem>\n            <ItemId>775</ItemId>\n            <TypeDescription>code.ChangeItemOperation.RequestForm</TypeDescription>\n            <Operation>Create</Operation>\n            <OperandType>RequestForm</OperandType>\n            <ValueType>User</ValueType>\n            <EntitlementType>Owner</EntitlementType>\n            <EntitlementName>Wayne, Bruce</EntitlementName>\n            <EntitlementRawName>Wayne, Bruce</EntitlementRawName>\n            <BusinessSource/>\n            <BusinessSourceAltName/>\n            <State>Pending Approval</State>\n            <ItemDescription/>\n            <DerivedType>Direct</DerivedType>\n            <IsChangeToApprove>false</IsChangeToApprove>\n            <UserName/>\n            <ApplicationRoleName/>\n            <UserGroupName/>\n            <GlobalRoleName/>\n            <GlobalRoleSetName/>\n            <Data_Resource_Name/>\n            <AccountName/>\n        </RequestItem>\n    </RequestItems>\n</getRequestItems>\n'})})}),(0,n.jsx)(l.A,{value:"401",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",children:"<html>\n    <head>\n        <title>Error</title>\n    </head>\n    <body>The token is not valid for the command 'getRequestItems'. Token is invalid or expired</body>\n</html>\n"})})}),(0,n.jsx)(l.A,{value:"412 Missing Parameter",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",children:"<html>\n  <head>\n    <title>Error</title>\n  </head>\n  <body>Either the 'approval-id' or the 'request-id' parameter must be provided. \n          Query String=cmd=getRequestItems&amp;format=json</body>\n</html>\n"})})}),(0,n.jsx)(l.A,{value:"412 Invalid CR",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",children:"<html>\n  <head>\n    <title>Error</title>\n  </head>\n  <body>The change request could not be retrieved \n        Query String=cmd=getRequestItems&amp;format=json&amp;request-id=325</body>\n</html>\n"})})}),(0,n.jsx)(l.A,{value:"412 Invalid Approval",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",children:"<html>\n  <head>\n    <title>Error</title>\n  </head>\n  <body>The work item could not be retrieved \n        Query String=cmd=getRequestItems&amp;format=json&amp;approval-id=304</body>\n</html>\n"})})})]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>l});r(96540);var n=r(34164);const s={tabItem:"tabItem_Ymn6"};var a=r(74848);function l(e){let{children:t,hidden:r,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,l),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>y});var n=r(96540),s=r(34164),a=r(23104),l=r(56347),o=r(205),i=r(57485),u=r(31682),c=r(89466);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}(r);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const s=(0,l.W6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function v(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,a=m(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[u,d]=h({queryString:r,groupId:s}),[v,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,c.Dv)(r);return[s,(0,n.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:s}),x=(()=>{const e=u??v;return p({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{x&&i(x)}),[x]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,a]),tabValues:a}}var b=r(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=r(74848);function j(e){let{className:t,block:r,selectedValue:n,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.a_)(),c=e=>{const t=e.currentTarget,r=i.indexOf(t),s=o[r].value;s!==n&&(u(t),l(s))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;t=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;t=i[r]??i[i.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},t),children:o.map((e=>{let{value:t,label:r,attributes:a}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...a,className:(0,s.A)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function g(e){let{lazy:t,children:r,selectedValue:s}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function q(e){const t=v(e);return(0,f.jsxs)("div",{className:(0,s.A)("tabs-container",x.tabList),children:[(0,f.jsx)(j,{...t,...e}),(0,f.jsx)(g,{...t,...e})]})}function y(e){const t=(0,b.A)();return(0,f.jsx)(q,{...e,children:d(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>o});var n=r(96540);const s={},a=n.createContext(s);function l(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);