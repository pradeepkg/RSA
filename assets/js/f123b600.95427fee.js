"use strict";(self.webpackChunkdocku=self.webpackChunkdocku||[]).push([[4153],{5773:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>u,contentTitle:()=>d,default:()=>j,frontMatter:()=>o,metadata:()=>t,toc:()=>h});const t=JSON.parse('{"id":"admin/status","title":"Status","description":"Display current status for the system.","source":"@site/docs/admin/status.md","sourceDirName":"admin","slug":"/admin/status","permalink":"/RSA/docs/admin/status","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1715787065000,"sidebarPosition":13,"frontMatter":{"sidebar_position":13},"sidebar":"tutorialSidebar","previous":{"title":"Set User Image","permalink":"/RSA/docs/admin/setUserImage"},"next":{"title":"Import Workflow","permalink":"/RSA/docs/admin/importWorkflow"}}');var n=r(4848),a=r(8453),l=r(1470),i=r(9365),c=r(1447);const o={sidebar_position:13},d="Status",u={},h=[{value:"Request",id:"request",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Headers",id:"headers",level:3},{value:"Response",id:"response",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Examples",id:"examples",level:2},{value:"Request",id:"request-1",level:3},{value:"Response",id:"response-1",level:3}];function p(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"status",children:"Status"})}),"\n","\n",(0,n.jsx)(s.p,{children:"Display current status for the system."}),"\n",(0,n.jsxs)("p",{children:[(0,n.jsx)("span",{class:"method-get",children:"GET "}),(0,n.jsx)("span",{class:"method-get-text",children:(0,n.jsx)(s.a,{href:"https://instance.securid.com/aveksa/command.submit?cmd=status",children:"https://instance.securid.com/aveksa/command.submit?cmd=status"})})]}),"\n",(0,n.jsx)(s.h2,{id:"request",children:"Request"}),"\n",(0,n.jsx)(s.h3,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)("table",{class:"table-container",children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("label",{class:"required",children:"command"})}),(0,n.jsx)("td",{children:"status"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"format"}),(0,n.jsxs)("td",{children:[(0,n.jsxs)("p",{children:[(0,n.jsx)(s.code,{children:"properties"})," - (Default) ",(0,n.jsx)(s.code,{children:"key=value"}),". most useful when requesting a single object. If multiple objects are returned, values is a csv. ie ",(0,n.jsx)(s.code,{children:"key=value1,value2,value3"})," where value1 is the value for the first object, value2 is the value for the 2nd object, etc."]}),(0,n.jsxs)("p",{children:[(0,n.jsx)(s.code,{children:"json"})," - Useful format for parsing into javascript or other languages. See ",(0,n.jsx)("a",{href:"https://www.json.org",target:"_blank",children:(0,n.jsx)(s.a,{href:"http://www.json.org",children:"www.json.org"})})," for details."]})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"headers",children:"Headers"}),"\n",(0,n.jsxs)("table",{class:"table-container",children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Accept"}),(0,n.jsx)("td",{children:"application/json"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Content-Type"}),(0,n.jsx)("td",{children:"application/json"})]})]}),"\n",(0,n.jsx)(s.h2,{id:"response",children:"Response"}),"\n",(0,n.jsx)(s.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,n.jsxs)("table",{class:"table-container",children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(s.code,{children:"type"})}),(0,n.jsx)("td",{children:"Executed command name"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(s.code,{children:"DB-TEMP-total-space"})}),(0,n.jsx)("td",{children:"???"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(s.code,{children:"date"})}),(0,n.jsx)("td",{children:"Date of the status check"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(s.code,{children:"son-status"})}),(0,n.jsx)("td",{children:"Status of System Operations Node (SON)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(s.code,{children:"maintenance-mode"})}),(0,n.jsx)("td",{children:"Indicates if the server is in maintenance mode"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(s.code,{children:"DB-TEMP-free-space"})}),(0,n.jsx)("td",{children:"???"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(s.code,{children:"database-status"})}),(0,n.jsx)("td",{children:"The status of database used by the system."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(s.code,{children:"product-version"})}),(0,n.jsx)("td",{children:"Information on current product version with patch / hotfix"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(s.code,{children:"local-afx-status"})}),(0,n.jsx)("td",{children:"The status of local AFX server (if configured)."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(s.code,{children:"DB-TEMP-used-space"})}),(0,n.jsx)("td",{children:"???"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(s.code,{children:"root-logger-level"})}),(0,n.jsxs)("td",{children:["The root logger level. Possible values : ",(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"OFF"}),(0,n.jsx)("li",{children:"FATAL"}),(0,n.jsx)("li",{children:"ERROR"}),(0,n.jsx)("li",{children:"WARN"}),(0,n.jsx)("li",{children:"INFO"}),(0,n.jsx)("li",{children:"DEBUG"}),(0,n.jsx)("li",{children:"TRACE"}),(0,n.jsx)("li",{children:"ALL"})]})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(s.code,{children:"email-server-status"})}),(0,n.jsx)("td",{children:"The status of email server in the system(if configured)."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(s.code,{children:"overall-status"})}),(0,n.jsx)("td",{children:"???"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(s.code,{children:"jms-status"})}),(0,n.jsx)("td",{children:"The status of JMS module in the system."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(s.code,{children:"default-agent-status"})}),(0,n.jsx)("td",{children:"The status of default agent used by the system."})]})]}),"\n",(0,n.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(s.h3,{id:"request-1",children:"Request"}),"\n",(0,n.jsxs)(l.A,{className:"unique-tabs",children:[(0,n.jsx)(i.A,{value:"Curl",attributes:{className:c.A.curl},children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'curl -K -X GET  \\\r\n"https://instance.securid.com/aveksa/command.submit?cmd=status&format=json" \\\r\n-H "Authorization: Bearer <token>" \\\r\n-H "Content-Type: application/json"\n'})})}),(0,n.jsx)(i.A,{value:"Python",attributes:{className:c.A.python},children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-python",children:'import requests, json\r\n\r\nurl = "https://instance.securid.com/aveksa/command.submit"\r\n\r\nparams = {\r\n    "cmd": "status",\r\n    "format": "json"\r\n}\r\n\r\nheaders = {\r\n    \'Authorization\': \'Bearer <token>\',\r\n    \'Content-Type\': \'application/json\'\r\n}\r\n\r\nresponse = requests.get(url, params=params, headers=headers)\r\n\r\nif response.status_code == 200:\r\n    data = response.json()\r\n    print(data)\r\nelse:\r\n    print(f"Request failed with status code {response.status_code}")\n'})})}),(0,n.jsx)(i.A,{value:"Node.js",attributes:{className:c.A.nodejs},children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",children:"const axios = require('axios');\r\n\r\nconst url = \"https://instance.securid.com/aveksa/command.submit\";\r\n\r\nconst params = {\r\n    \"cmd\": \"status\",\r\n    \"format\": \"json\"\r\n};\r\n\r\nconst headers = {\r\n    'Authorization': 'Bearer <token>',\r\n    'Content-Type': 'application/json'\r\n};\r\n\r\naxios.get(url, { params, headers })\r\n    .then(response => {\r\n        if (response.status === 200) {\r\n            console.log(response.data);\r\n        } else {\r\n            console.log(`Request failed with status code ${response.status}`);\r\n        }\r\n    })\r\n    .catch(error => {\r\n        console.error('Error:', error);\r\n    });\n"})})})]}),"\n",(0,n.jsx)(s.h3,{id:"response-1",children:"Response"}),"\n",(0,n.jsx)(l.A,{className:"unique-tabs",children:(0,n.jsx)(i.A,{value:"200",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json",children:'{\r\n    "data": {\r\n        "type": "status",\r\n        "DB-TEMP-total-space": "571",\r\n        "date": "2023-08-27 16:58:23",\r\n        "son-status": "HEALTHY",\r\n        "maintenance-mode": "off",\r\n        "DB-TEMP-free-space": "552",\r\n        "database-status": "HEALTHY",\r\n        "product-version": "7.5.2.184537 P07_HF02",\r\n        "local-afx-status": "HEALTHY",\r\n        "DB-TEMP-used-space": "19",\r\n        "root-logger-level": "INFO",\r\n        "email-server-status": "UNHEALTHY",\r\n        "overall-status": "HEALTHY",\r\n        "jms-status": "HEALTHY",\r\n        "default-agent-status": "UNHEALTHY"\r\n    }\r\n}\n'})})})})]})}function j(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},9365:(e,s,r)=>{r.d(s,{A:()=>l});r(6540);var t=r(4164);const n={tabItem:"tabItem_Ymn6"};var a=r(4848);function l(e){let{children:s,hidden:r,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.A)(n.tabItem,l),hidden:r,children:s})}},1470:(e,s,r)=>{r.d(s,{A:()=>A});var t=r(6540),n=r(4164),a=r(3104),l=r(6347),i=r(205),c=r(7485),o=r(1682),d=r(679);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:s,children:r}=e;return(0,t.useMemo)((()=>{const e=s??function(e){return u(e).map((e=>{let{props:{value:s,label:r,attributes:t,default:n}}=e;return{value:s,label:r,attributes:t,default:n}}))}(r);return function(e){const s=(0,o.XI)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,r])}function p(e){let{value:s,tabValues:r}=e;return r.some((e=>e.value===s))}function j(e){let{queryString:s=!1,groupId:r}=e;const n=(0,l.W6)(),a=function(e){let{queryString:s=!1,groupId:r}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:s,groupId:r});return[(0,c.aZ)(a),(0,t.useCallback)((e=>{if(!a)return;const s=new URLSearchParams(n.location.search);s.set(a,e),n.replace({...n.location,search:s.toString()})}),[a,n])]}function m(e){const{defaultValue:s,queryString:r=!1,groupId:n}=e,a=h(e),[l,c]=(0,t.useState)((()=>function(e){let{defaultValue:s,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!p({value:s,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:s,tabValues:a}))),[o,u]=j({queryString:r,groupId:n}),[m,x]=function(e){let{groupId:s}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(s),[n,a]=(0,d.Dv)(r);return[n,(0,t.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:n}),f=(()=>{const e=o??m;return p({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{f&&c(f)}),[f]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),x(e)}),[u,x,a]),tabValues:a}}var x=r(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(4848);function b(e){let{className:s,block:r,selectedValue:t,selectValue:l,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,a.a_)(),d=e=>{const s=e.currentTarget,r=c.indexOf(s),n=i[r].value;n!==t&&(o(s),l(n))},u=e=>{let s=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;s=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;s=c[r]??c[c.length-1];break}}s?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":r},s),children:i.map((e=>{let{value:s,label:r,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:t===s?0:-1,"aria-selected":t===s,ref:e=>c.push(e),onKeyDown:u,onClick:d,...a,className:(0,n.A)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":t===s}),children:r??s},s)}))})}function g(e){let{lazy:s,children:r,selectedValue:a}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(s){const e=l.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:l.map(((e,s)=>(0,t.cloneElement)(e,{key:s,hidden:e.props.value!==a})))})}function y(e){const s=m(e);return(0,v.jsxs)("div",{className:(0,n.A)("tabs-container",f.tabList),children:[(0,v.jsx)(b,{...s,...e}),(0,v.jsx)(g,{...s,...e})]})}function A(e){const s=(0,x.A)();return(0,v.jsx)(y,{...e,children:u(e.children)},String(s))}},1447:(e,s,r)=>{r.d(s,{A:()=>t});const t={curl:"curl_orwx",python:"python_uXgC",nodejs:"nodejs_ucMl",powershell:"powershell_BcVw"}},8453:(e,s,r)=>{r.d(s,{R:()=>l,x:()=>i});var t=r(6540);const n={},a=t.createContext(n);function l(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);