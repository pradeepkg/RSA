"use strict";(self.webpackChunkdocku=self.webpackChunkdocku||[]).push([[3257],{43707:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>d,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"information/findAccounts","title":"Find Accounts","description":"Find accounts. The command uses the PV_ACCOUNT public view to find data. Any filters passed should be passed on this public view.","source":"@site/docs/information/findAccounts.mdx","sourceDirName":"information","slug":"/information/findAccounts","permalink":"/RSA/docs/information/findAccounts","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1715787065000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Information","permalink":"/RSA/docs/category/information"},"next":{"title":"Find Applications","permalink":"/RSA/docs/information/findApplications"}}');var t=r(74848),a=r(28453),i=r(98120),c=r(19365),l=r(41447);const d={sidebar_position:1},o="Find Accounts",u={},h=[{value:"Request",id:"request",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Columns",id:"columns",level:4},{value:"Headers",id:"headers",level:3},{value:"Response",id:"response",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Examples",id:"examples",level:2},{value:"Request",id:"request-1",level:3},{value:"Response",id:"response-1",level:3}];function m(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"find-accounts",children:"Find Accounts"})}),"\n","\n",(0,t.jsxs)(n.p,{children:["Find accounts. The command uses the ",(0,t.jsx)(n.strong,{children:"PV_ACCOUNT"})," public view to find data. Any filters passed should be passed on this public view."]}),"\n",(0,t.jsxs)("p",{children:[(0,t.jsx)("span",{class:"method-get",children:"GET "}),(0,t.jsx)("span",{class:"method-get-text",children:(0,t.jsx)(n.a,{href:"https://instance.securid.com/aveksa/command.submit?cmd=findAccounts",children:"https://instance.securid.com/aveksa/command.submit?cmd=findAccounts"})})]}),"\n",(0,t.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,t.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)("table",{class:"table-container",children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("label",{class:"required",children:"command"})}),(0,t.jsx)("td",{children:"findAccounts"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"format"}),(0,t.jsxs)("td",{children:[(0,t.jsxs)("p",{children:[(0,t.jsx)(n.code,{children:"properties"})," - (Default) ",(0,t.jsx)(n.code,{children:"key=value"}),". most useful when requesting a single object. If multiple objects are returned, values is a csv. ie ",(0,t.jsx)(n.code,{children:"key=value1,value2,value3"})," where value1 is the value for the first object, value2 is the value for the 2nd object, etc."]}),(0,t.jsxs)("p",{children:[(0,t.jsx)(n.code,{children:"json"})," - Useful format for parsing into javascript or other languages. See ",(0,t.jsx)(n.a,{href:"http://www.json.org",children:"www.json.org"})," for details."]}),(0,t.jsxs)("p",{children:[(0,t.jsx)(n.code,{children:"csv"})," - Comma separated values"]}),(0,t.jsxs)("p",{children:[(0,t.jsx)(n.code,{children:"tsv"})," - Tab separated values"]}),(0,t.jsx)(n.code,{children:"xml"})," - Extensible Markup Language"]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"delimiter"}),(0,t.jsxs)("td",{children:["The delimiter to use between values for ",(0,t.jsx)(n.code,{children:"csv, properties"})," formats"]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"returnColumns"}),(0,t.jsxs)("td",{children:[(0,t.jsx)("p",{children:"The names of the columns to return. returnColumns may be a CSV list of multiple column names. The returnColumns parameter may also be listed multiple times (ie returnColumns=col1,col2&returnColumns=col3,col4)"}),"Refer to Columns table below."]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"returnMaxRows"}),(0,t.jsx)("td",{children:"The maximum number of objects to return"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"distinct"}),(0,t.jsxs)("td",{children:[(0,t.jsx)(n.code,{children:"true, false"})," Returns only distinct values similar to the distinct keyword in SQL."]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"sortByColumns"}),(0,t.jsxs)("td",{children:[(0,t.jsx)("p",{children:"The results will be sorted based on the columns listed using comma as the delimiter if multiple columns are specified."}),"Refer to Columns table below."]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"sortDirection"}),(0,t.jsx)("td",{children:"This determines sorting order. When defined as 'asc' the sorting is in ascending order else in 'desc' descending order. If this parameter is not specified, the natural order of rows returned by database is used."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"includeHeaderRow"}),(0,t.jsxs)("td",{children:[(0,t.jsx)(n.code,{children:"true, false"})," To include column headers when the return format is ",(0,t.jsx)(n.code,{children:"csv, tsv"}),". (Default) ",(0,t.jsx)(n.code,{children:"true"})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"ignoreCase"}),(0,t.jsxs)("td",{children:[(0,t.jsx)(n.code,{children:"true, false"})," Returns case insensitive search result for specified filter parameters. (Default) ",(0,t.jsx)(n.code,{children:"false"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"columns",children:"Columns"}),"\n",(0,t.jsxs)("table",{class:"table-container",children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"id"}),(0,t.jsx)("td",{children:"[Primary Key] Unique account identifier"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"name"}),(0,t.jsx)("td",{children:"Account name"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"creation_date"}),(0,t.jsx)("td",{children:"Date stamp when this account was created."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"deletion_date"}),(0,t.jsx)("td",{children:"The date stamp when this account was removed."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"expiration_date"}),(0,t.jsx)("td",{children:"The date on which the account expires."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"application_id"}),(0,t.jsx)("td",{children:"[Foreign Key referencing APPLICATION.ID] Application/Directory id."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"adc_id"}),(0,t.jsx)("td",{children:"[Foreign Key referencing ACCOUNT_COLLECTOR.ID] Account collector id."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"adc_name"}),(0,t.jsx)("td",{children:"Account collector name"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"is_shared"}),(0,t.jsx)("td",{children:"Whether this account is shared by multiple users."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"last_login_date"}),(0,t.jsx)("td",{children:"Last time when a user logged in using this account."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"last_reviewed_date"}),(0,t.jsx)("td",{children:"Last reviewed date"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"is_locked"}),(0,t.jsxs)("td",{children:[(0,t.jsx)(n.code,{children:"True, False"}),"Indicates if the current account is locked."]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"is_disabled"}),(0,t.jsxs)("td",{children:[(0,t.jsx)(n.code,{children:"True, False"}),"Indicates if the current account is disabled."]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"is_shared"}),(0,t.jsxs)("td",{children:[(0,t.jsx)(n.code,{children:"True, False"}),"Whether this account is shared by multiple users."]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"expiration_date"}),(0,t.jsx)("td",{children:"The date on which the account expires."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"object_sid"}),(0,t.jsx)("td",{children:"Holds a unique string formatted value for an account created from Active Directory. This unique account value is used in resolving Active Directory 'Foreign Security Principles' group memberships."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"orphaned_date"}),(0,t.jsx)("td",{children:"Date an account became orphaned."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"orphaned_date"}),(0,t.jsx)("td",{children:"Date an account became orphaned."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"cau1"}),(0,t.jsx)("td",{children:"Value of custom user type attributes configured on the instance represented by their reference names"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"cad1"}),(0,t.jsx)("td",{children:"Value of custom date type attributes configured on the instance represented by their reference names"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"cas1"}),(0,t.jsx)("td",{children:"Value of custom string type attributes configured on the instance represented by their reference names"})]})]}),"\n",(0,t.jsx)(n.h3,{id:"headers",children:"Headers"}),"\n",(0,t.jsxs)("table",{class:"table-container",children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("label",{class:"required",children:"Authorization"})}),(0,t.jsxs)("td",{children:["Bearer ",(0,t.jsx)(n.code,{children:"token"})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Accept"}),(0,t.jsx)("td",{children:"application/json"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Content-Type"}),(0,t.jsx)("td",{children:"application/json"})]})]}),"\n",(0,t.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,t.jsx)(n.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:["The API returns the requested columns specified by ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"returnColumns"})})," as output. If ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"returnColumns"})})," is unspecified then all ",(0,t.jsx)(n.a,{href:"#columns",children:"columns"})," listed will be returned."]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.h3,{id:"request-1",children:"Request"}),"\n",(0,t.jsxs)(i.A,{className:"unique-tabs",children:[(0,t.jsx)(c.A,{value:"Curl",attributes:{className:l.A.curl},children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'curl -K -X GET  \\\r\n"https://instance.securid.com/aveksa/command.submit?cmd=findAccounts&format=json" \\\r\n"&returnColumns=id,name,application_id,last_login_date,cas9" \\\r\n-H "Authorization: Bearer <token>" \\\r\n-H "Content-Type: application/json"\n'})})}),(0,t.jsx)(c.A,{value:"Python",attributes:{className:l.A.python},children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import requests\r\n\r\nurl = "https://instance.securid.com/aveksa/command.submit"\r\n\r\nparams = {\r\n    "cmd": "findAccounts",\r\n    "format": "json",\r\n    "returnColumns": "id,name,application_id,last_login_date,cas9",\r\n    "returnMaxRows": "10",\r\n    "distinct": "true",\r\n    "sortDirection": "asc"\r\n}\r\n\r\nheaders = {\r\n    \'Authorization\': \'Bearer <token>\',\r\n    \'Content-Type\': \'application/json\'\r\n}\r\n\r\nresponse = requests.get(url, params=params, headers=headers)\r\n\r\nif response.status_code == 200:\r\n    data = response.json()\r\n    print(data)\r\nelse:\r\n    print(f"Request failed with status code {response.status_code}")\n'})})}),(0,t.jsx)(c.A,{value:"Node.js",attributes:{className:l.A.nodejs},children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'const axios = require(\'axios\');\r\n\r\nconst url = "https://instance.securid.com/aveksa/command.submit";\r\n\r\nconst params = {\r\n    cmd: "findAccounts",\r\n    format: "json",\r\n    returnColumns: "id,name,application_id,last_login_date,cas9",\r\n    returnMaxRows: "10",\r\n    distinct: "true",\r\n    sortDirection: "asc"\r\n};\r\n\r\nconst headers = {\r\n    \'Authorization\': \'Bearer <token>\',\r\n    \'Content-Type\': \'application/json\'\r\n};\r\n\r\naxios.get(url, { params, headers })\r\n    .then(response => {\r\n        if (response.status === 200) {\r\n            const data = response.data;\r\n            console.log(data);\r\n        } else {\r\n            console.log(`Request failed with status code ${response.status}`);\r\n        }\r\n    })\r\n    .catch(error => {\r\n        console.error(\'Error:\', error);\r\n    });\n'})})})]}),"\n",(0,t.jsx)(n.h3,{id:"response-1",children:"Response"}),"\n",(0,t.jsx)(i.A,{className:"unique-tabs",children:(0,t.jsx)(c.A,{value:"200",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\r\n    "findAccounts": [\r\n        {\r\n            "id": "267530",\r\n            "name": "106003",\r\n            "application_id": "1",\r\n            "last_login_date": "",\r\n            "cas9": "CN=106003,OU=dev,DC=company,DC=com"\r\n        },\r\n        {\r\n            "id": "267525",\r\n            "name": "107009",\r\n            "application_id": "1",\r\n            "last_login_date": "",\r\n            "cas9": ""\r\n        },\r\n        {\r\n            "id": "266229",\r\n            "name": "5b6c7b3afbc68529c6c47967",\r\n            "application_id": "244",\r\n            "last_login_date": "",\r\n            "cas9": ""\r\n        },\r\n        {\r\n            "id": "266220",\r\n            "name": "5cb4ae0e4b97ab11a18e00c7",\r\n            "application_id": "244",\r\n            "last_login_date": "",\r\n            "cas9": ""\r\n        }        \r\n    ]\r\n}\n'})})})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>i});r(96540);var s=r(34164);const t={tabItem:"tabItem_Ymn6"};var a=r(74848);function i(e){let{children:n,hidden:r,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(t.tabItem,i),hidden:r,children:n})}},98120:(e,n,r)=>{r.d(n,{A:()=>y});var s=r(96540),t=r(34164),a=r(86641),i=r(56347),c=r(205),l=r(38874);var d=r(82993);function o(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:r}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return o(e).map((e=>{let{props:{value:n,label:r,attributes:s,default:t}}=e;return{value:n,label:r,attributes:s,default:t}}))}(r);return function(e){const n=(void 0===(s=(e,n)=>e.value===n.value)&&(s=(e,n)=>e===n),(r=e).filter(((e,n)=>r.findIndex((n=>s(n,e)))!==n)));var r,s;if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function h(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const t=(0,i.W6)(),a=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,l.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(t.location.search);n.set(a,e),t.replace({...t.location,search:n.toString()})}),[a,t])]}function p(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,a=u(e),[i,l]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:a}))),[o,p]=m({queryString:r,groupId:t}),[x,j]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,a]=(0,d.Dv)(r);return[t,(0,s.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:t}),f=(()=>{const e=o??x;return h({value:e,tabValues:a})?e:null})();(0,c.A)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),j(e)}),[p,j,a]),tabValues:a}}var x=r(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=r(74848);function b(e){let{className:n,block:r,selectedValue:s,selectValue:i,tabValues:c}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.a_)(),o=e=>{const n=e.currentTarget,r=l.indexOf(n),t=c[r].value;t!==s&&(d(n),i(t))},u=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;n=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;n=l[r]??l[l.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":r},n),children:c.map((e=>{let{value:n,label:r,attributes:a}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>l.push(e),onKeyDown:u,onClick:o,...a,className:(0,t.A)("tabs__item",j.tabItem,a?.className,{"tabs__item--active":s===n}),children:r??n},n)}))})}function v(e){let{lazy:n,children:r,selectedValue:a}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function g(e){const n=p(e);return(0,f.jsxs)("div",{className:(0,t.A)("tabs-container",j.tabList),children:[(0,f.jsx)(b,{...n,...e}),(0,f.jsx)(v,{...n,...e})]})}function y(e){const n=(0,x.A)();return(0,f.jsx)(g,{...e,children:o(e.children)},String(n))}},41447:(e,n,r)=>{r.d(n,{A:()=>s});const s={curl:"curl_orwx",python:"python_uXgC",nodejs:"nodejs_ucMl",powershell:"powershell_BcVw"}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>c});var s=r(96540);const t={},a=s.createContext(t);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);