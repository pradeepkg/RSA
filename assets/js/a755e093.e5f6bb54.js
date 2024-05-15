"use strict";(self.webpackChunkdocku=self.webpackChunkdocku||[]).push([[1686],{67171:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>h});var t=n(74848),s=n(28453),a=n(11470),o=n(19365),l=n(41447);const i={sidebar_position:1},c="About",u={id:"admin/about",title:"About",description:"Display information about the server.",source:"@site/docs/admin/about.md",sourceDirName:"admin",slug:"/admin/about",permalink:"/RSA/docs/admin/about",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1715787065e3,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Admin",permalink:"/RSA/docs/category/admin"},next:{title:"Check Access",permalink:"/RSA/docs/admin/checkAccess"}},d={},h=[{value:"Request",id:"request",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Headers",id:"headers",level:3},{value:"Response",id:"response",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Examples",id:"examples",level:2},{value:"Request",id:"request-1",level:3},{value:"Response",id:"response-1",level:3}];function p(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"about",children:"About"}),"\n",(0,t.jsx)(r.p,{children:"Display information about the server."}),"\n",(0,t.jsxs)("p",{children:[(0,t.jsx)("span",{class:"method-get",children:"GET "}),(0,t.jsxs)("span",{class:"method-get-text",children:[(0,t.jsx)(r.a,{href:"https://instance.securid.com/aveksa/command.submit?cmd=about",children:"https://instance.securid.com/aveksa/command.submit?cmd=about"})," "]})]}),"\n",(0,t.jsx)(r.h2,{id:"request",children:"Request"}),"\n",(0,t.jsx)(r.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)("label",{class:"required",children:"command"})}),(0,t.jsx)(r.td,{children:"about"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"format"}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.code,{children:"properties"})," - (Default) ",(0,t.jsx)(r.code,{children:"key=value"}),". most useful when requesting a single object. If multiple objects are returned, values is a csv. ie ",(0,t.jsx)(r.code,{children:"key=value1,value2,value3"})," where value1 is the value for the first object, value2 is the value for the 2nd object, etc.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)(r.code,{children:"json"})," - Useful format for parsing into javascript or other languages. See ",(0,t.jsx)(r.a,{href:"http://www.json.org",children:"www.json.org"})," for details."]})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"headers",children:"Headers"}),"\n",(0,t.jsxs)("table",{class:"table-container",children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("label",{class:"required",children:"Authorization"})}),(0,t.jsxs)("td",{children:["Bearer ",(0,t.jsx)(r.code,{children:"token"})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Accept"}),(0,t.jsx)("td",{children:"application/json"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Content-Type"}),(0,t.jsx)("td",{children:"application/json"})]})]}),"\n",(0,t.jsx)(r.h2,{id:"response",children:"Response"}),"\n",(0,t.jsx)(r.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,t.jsxs)("table",{class:"table-container",children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(r.code,{children:"type"})}),(0,t.jsx)("td",{children:"Executed command name"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(r.code,{children:"server-version"})}),(0,t.jsx)("td",{children:"The version of server code running on the server."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(r.code,{children:"database-version"})}),(0,t.jsx)("td",{children:"The version of database code running on the server."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(r.code,{children:"patches "})}),(0,t.jsx)("td",{children:"The list of patches (if any) installed on the server."})]})]}),"\n",(0,t.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(r.h3,{id:"request-1",children:"Request"}),"\n",(0,t.jsxs)(a.A,{className:"unique-tabs",children:[(0,t.jsx)(o.A,{value:"Curl",attributes:{className:l.A.curl},children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:'curl -K -X GET  \\\r\n"https://instance.securid.com/aveksa/command.submit?cmd=about&format=json" \\\r\n-H "Authorization: Bearer <token>" \\\r\n-H "Content-Type: application/json"\n'})})}),(0,t.jsx)(o.A,{value:"Python",attributes:{className:l.A.python},children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-py",metastring:"showLineNumbers",children:'import requests, json\r\n\r\nurl = "https://instance.securid.com/aveksa/command.submit"\r\n\r\nparams = {\r\n    "cmd": "about",\r\n    "format": "json"\r\n}\r\n\r\nheaders = {\r\n    \'Authorization\': \'Bearer <token>\',\r\n    \'Content-Type\': \'application/json\'\r\n}\r\n\r\nresponse = requests.get(url, params=params, headers=headers)\r\n\r\nif response.status_code == 200:\r\n    data = response.json()\r\n    print(data)\r\nelse:\r\n    print(f"Request failed with status code {response.status_code}")\n'})})}),(0,t.jsx)(o.A,{value:"Node.js",attributes:{className:l.A.nodejs},children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",metastring:"showLineNumbers",children:"const axios = require('axios');\r\n\r\nconst url = \"https://instance.securid.com/aveksa/command.submit\";\r\n\r\nconst params = {\r\n    cmd: \"about\",\r\n    format: \"json\"\r\n};\r\n\r\nconst headers = {\r\n    'Authorization': 'Bearer <token>',\r\n    'Content-Type': 'application/json'\r\n};\r\n\r\naxios.get(url, { params, headers })\r\n    .then(response => {\r\n        if (response.status === 200) {\r\n            const data = response.data;\r\n            console.log(data);\r\n        } else {\r\n            console.log(`Request failed with status code ${response.status}`);\r\n        }\r\n    })\r\n    .catch(error => {\r\n        console.error('Error:', error);\r\n    });\n"})})})]}),"\n",(0,t.jsx)(r.h3,{id:"response-1",children:"Response"}),"\n",(0,t.jsxs)(a.A,{className:"unique-tabs",children:[(0,t.jsx)(o.A,{value:"200",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-json",children:'{\r\n    "data": {\r\n        "type": "about",\r\n        "database-version": "7.5.2.181918",\r\n        "server-version": "7.5.2.181918",\r\n        "patches": "P07_HF02"\r\n    }\r\n}\n'})})}),(0,t.jsx)(o.A,{value:"401",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-html",children:"<html>\r\n    <head>\r\n        <title>Error</title>\r\n    </head>\r\n    <body>The token is not valid for the command 'about'. </body>\r\n</html>\n"})})})]})]})}function m(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},19365:(e,r,n)=>{n.d(r,{A:()=>o});n(96540);var t=n(34164);const s={tabItem:"tabItem_Ymn6"};var a=n(74848);function o(e){let{children:r,hidden:n,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,o),hidden:n,children:r})}},11470:(e,r,n)=>{n.d(r,{A:()=>A});var t=n(96540),s=n(34164),a=n(23104),o=n(56347),l=n(205),i=n(57485),c=n(31682),u=n(89466);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:n}=e;return(0,t.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:n,attributes:t,default:s}}=e;return{value:r,label:n,attributes:t,default:s}}))}(n);return function(e){const r=(0,c.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function p(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function m(e){let{queryString:r=!1,groupId:n}=e;const s=(0,o.W6)(),a=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,i.aZ)(a),(0,t.useCallback)((e=>{if(!a)return;const r=new URLSearchParams(s.location.search);r.set(a,e),s.replace({...s.location,search:r.toString()})}),[a,s])]}function b(e){const{defaultValue:r,queryString:n=!1,groupId:s}=e,a=h(e),[o,i]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:a}))),[c,d]=m({queryString:n,groupId:s}),[b,j]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[s,a]=(0,u.Dv)(n);return[s,(0,t.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:s}),x=(()=>{const e=c??b;return p({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{x&&i(x)}),[x]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),j(e)}),[d,j,a]),tabValues:a}}var j=n(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(74848);function v(e){let{className:r,block:n,selectedValue:t,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const r=e.currentTarget,n=i.indexOf(r),s=l[n].value;s!==t&&(c(r),o(s))},d=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;r=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;r=i[n]??i[i.length-1];break}}r?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},r),children:l.map((e=>{let{value:r,label:n,attributes:a}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>i.push(e),onKeyDown:d,onClick:u,...a,className:(0,s.A)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":t===r}),children:n??r},r)}))})}function g(e){let{lazy:r,children:n,selectedValue:s}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=a.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:a.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function y(e){const r=b(e);return(0,f.jsxs)("div",{className:(0,s.A)("tabs-container",x.tabList),children:[(0,f.jsx)(v,{...r,...e}),(0,f.jsx)(g,{...r,...e})]})}function A(e){const r=(0,j.A)();return(0,f.jsx)(y,{...e,children:d(e.children)},String(r))}},41447:(e,r,n)=>{n.d(r,{A:()=>t});const t={curl:"curl_orwx",python:"python_uXgC",nodejs:"nodejs_ucMl",powershell:"powershell_BcVw"}},28453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>l});var t=n(96540);const s={},a=t.createContext(s);function o(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);