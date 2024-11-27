"use strict";(self.webpackChunkdocku=self.webpackChunkdocku||[]).push([[4563],{4707:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"id":"collection/delete-collector","title":"Delete Collector","description":"Delete a collector.","source":"@site/docs/collection/delete-collector.md","sourceDirName":"collection","slug":"/collection/delete-collector","permalink":"/RSA/docs/collection/delete-collector","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1715787065000,"sidebarPosition":8,"frontMatter":{"sidebar_position":8},"sidebar":"tutorialSidebar","previous":{"title":"Collect Roles","permalink":"/RSA/docs/collection/collect-roles"},"next":{"title":"Delete Pending Collections","permalink":"/RSA/docs/collection/delete-pending-collections"}}');var l=t(4848),s=t(8453),a=t(1470),o=t(9365);const c={sidebar_position:8},i="Delete Collector",d={},u=[{value:"Request",id:"request",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Headers",id:"headers",level:3},{value:"Response",id:"response",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Examples",id:"examples",level:2},{value:"Request",id:"request-1",level:3},{value:"Response",id:"response-1",level:3}];function h(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.header,{children:(0,l.jsx)(r.h1,{id:"delete-collector",children:"Delete Collector"})}),"\n","\n",(0,l.jsx)(r.p,{children:"Delete a collector."}),"\n",(0,l.jsxs)("p",{children:[(0,l.jsx)("span",{class:"method-post",children:"POST "}),(0,l.jsx)("span",{class:"method-post-text",children:(0,l.jsx)(r.a,{href:"https://instance.securid.com/aveksa/command.submit?cmd=deleteCollector",children:"https://instance.securid.com/aveksa/command.submit?cmd=deleteCollector"})})]}),"\n",(0,l.jsx)(r.h2,{id:"request",children:"Request"}),"\n",(0,l.jsx)(r.h3,{id:"parameters",children:"Parameters"}),"\n",(0,l.jsxs)("table",{class:"table-container",children:[(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)("label",{class:"required",children:"command"})}),(0,l.jsx)("td",{children:"deleteCollector"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"format"}),(0,l.jsxs)("td",{children:[(0,l.jsxs)("p",{children:[(0,l.jsx)(r.code,{children:"properties"})," - (Default) ",(0,l.jsx)(r.code,{children:"key=value"}),". most useful when requesting a single object. If multiple objects are returned, values is a csv. ie ",(0,l.jsx)(r.code,{children:"key=value1,value2,value3"})," where value1 is the value for the first object, value2 is the value for the 2nd object, etc."]}),(0,l.jsxs)("p",{children:[(0,l.jsx)(r.code,{children:"json"})," - Useful format for parsing into javascript or other languages. See ",(0,l.jsx)("a",{href:"https://www.json.org",target:"_blank",children:(0,l.jsx)(r.a,{href:"http://www.json.org",children:"www.json.org"})})," for details."]})]})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)("label",{class:"required",children:"name"})}),(0,l.jsx)("td",{children:"The friendly name of the collector."})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)("label",{class:"required",children:"type"})}),(0,l.jsxs)("td",{children:["The type of the collector. Valid values : ",(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:"Identity"}),(0,l.jsx)("li",{children:"Activity"}),(0,l.jsx)("li",{children:"Account"}),(0,l.jsx)("li",{children:"Entitlement"}),(0,l.jsx)("li",{children:"Role"}),(0,l.jsx)("li",{children:"Metadata"}),(0,l.jsx)("li",{children:"MAEDC"})]})]})]})]}),"\n",(0,l.jsx)(r.h3,{id:"headers",children:"Headers"}),"\n",(0,l.jsxs)("table",{class:"table-container",children:[(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)("label",{class:"required",children:"Authorization"})}),(0,l.jsxs)("td",{children:["Bearer ",(0,l.jsx)(r.code,{children:"token"})]})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Accept"}),(0,l.jsx)("td",{children:"application/json"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Content-Type"}),(0,l.jsx)("td",{children:"application/json"})]})]}),"\n",(0,l.jsx)(r.h2,{id:"response",children:"Response"}),"\n",(0,l.jsx)(r.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,l.jsx)("table",{class:"table-container",children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)(r.code,{children:"type"})}),(0,l.jsx)("td",{children:"Executed command name"})]})}),"\n",(0,l.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(r.h3,{id:"request-1",children:"Request"}),"\n",(0,l.jsxs)(a.A,{className:"unique-tabs",children:[(0,l.jsx)(o.A,{value:"Curl",children:(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-js",children:'curl -K -X POST  \\\r\n"https://instance.securid.com/aveksa/command.submit?cmd=deleteCollector&name=myIDC&type=Identity" \\\r\n-H "Authorization: Bearer <token>" \\\r\n-H "Content-Type: application/json"\n'})})}),(0,l.jsx)(o.A,{value:"Python",children:(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-python",children:'import requests, json\r\n\r\nurl = "https://instance.securid.com/aveksa/command.submit"\r\n\r\nparams = {\r\n    "cmd": "deleteCollector",\r\n    "format": "json",\r\n    "name": "DELETE",\r\n    "type": "Entitlement"\r\n}\r\n\r\nheaders = {\r\n    \'Authorization\': \'Bearer <token>\',\r\n    \'Content-Type\': \'application/json\'\r\n}\r\n\r\nresponse = requests.post(url, params=params, headers=headers)\r\n\r\nif response.status_code == 200:\r\n    data = response.json()\r\n    print(data)\r\nelse:\r\n    print(f"Request failed with status code {response.status_code}")\n'})})})]}),"\n",(0,l.jsx)(r.h3,{id:"response-1",children:"Response"}),"\n",(0,l.jsxs)(a.A,{className:"unique-tabs",children:[(0,l.jsx)(o.A,{value:"200",children:(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-json",children:'{\r\n    "data": {\r\n        "type": "deleteCollector"\r\n    }\r\n}\n'})})}),(0,l.jsx)(o.A,{value:"500 Internal Error",children:(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-html",children:"<html>\r\n  <head>\r\n    <title>Error</title>\r\n  </head>\r\n  <body>com.aveksa.server.message.MessengerServiceException: Test request failed with response: \r\n    com.aveksa.server.db.PersistenceException: n/a Query \r\n    String=cmd=deleteCollector&amp;format=json&amp;name=DELETE&amp;type=Entitlement</body>\r\n</html>\n"})})}),(0,l.jsx)(o.A,{value:"412 Missing Parameter",children:(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-html",children:"<html>\r\n  <head>\r\n    <title>Error</title>\r\n  </head>\r\n  <body>The parameter name is required. Query String=cmd=deleteCollector&amp;format=json</body>\r\n</html>\n"})})})]})]})}function p(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,l.jsx)(r,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},9365:(e,r,t)=>{t.d(r,{A:()=>a});t(6540);var n=t(4164);const l={tabItem:"tabItem_Ymn6"};var s=t(4848);function a(e){let{children:r,hidden:t,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(l.tabItem,a),hidden:t,children:r})}},1470:(e,r,t)=>{t.d(r,{A:()=>w});var n=t(6540),l=t(4164),s=t(3104),a=t(6347),o=t(205),c=t(7485),i=t(1682),d=t(679);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??function(e){return u(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:l}}=e;return{value:r,label:t,attributes:n,default:l}}))}(t);return function(e){const r=(0,i.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function p(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function m(e){let{queryString:r=!1,groupId:t}=e;const l=(0,a.W6)(),s=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,c.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const r=new URLSearchParams(l.location.search);r.set(s,e),l.replace({...l.location,search:r.toString()})}),[s,l])]}function j(e){const{defaultValue:r,queryString:t=!1,groupId:l}=e,s=h(e),[a,c]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:s}))),[i,u]=m({queryString:t,groupId:l}),[j,x]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[l,s]=(0,d.Dv)(t);return[l,(0,n.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:l}),f=(()=>{const e=i??j;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{f&&c(f)}),[f]);return{selectedValue:a,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),x(e)}),[u,x,s]),tabValues:s}}var x=t(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(4848);function v(e){let{className:r,block:t,selectedValue:n,selectValue:a,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:i}=(0,s.a_)(),d=e=>{const r=e.currentTarget,t=c.indexOf(r),l=o[t].value;l!==n&&(i(r),a(l))},u=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;r=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;r=c[t]??c[c.length-1];break}}r?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":t},r),children:o.map((e=>{let{value:r,label:t,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>c.push(e),onKeyDown:u,onClick:d,...s,className:(0,l.A)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":n===r}),children:t??r},r)}))})}function g(e){let{lazy:r,children:t,selectedValue:s}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=a.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function y(e){const r=j(e);return(0,b.jsxs)("div",{className:(0,l.A)("tabs-container",f.tabList),children:[(0,b.jsx)(v,{...r,...e}),(0,b.jsx)(g,{...r,...e})]})}function w(e){const r=(0,x.A)();return(0,b.jsx)(y,{...e,children:u(e.children)},String(r))}},8453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>o});var n=t(6540);const l={},s=n.createContext(l);function a(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);