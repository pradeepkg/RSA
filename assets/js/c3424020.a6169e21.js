"use strict";(self.webpackChunkdocku=self.webpackChunkdocku||[]).push([[3257],{15512:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>d,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>h});var s=r(74848),t=r(28453),i=r(11470),a=r(19365),c=r(41447);const l={sidebar_position:1},d="Find Accounts",o={id:"information/findAccounts",title:"Find Accounts",description:"Find accounts. The command uses the PV_ACCOUNT public view to find data. Any filters passed should be passed on this public view.",source:"@site/docs/information/findAccounts.mdx",sourceDirName:"information",slug:"/information/findAccounts",permalink:"/RSA/docs/information/findAccounts",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1715787065e3,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Information",permalink:"/RSA/docs/category/information"},next:{title:"Find Applications",permalink:"/RSA/docs/information/findApplications"}},u={},h=[{value:"Request",id:"request",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Columns",id:"columns",level:4},{value:"Headers",id:"headers",level:3},{value:"Response",id:"response",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Examples",id:"examples",level:2},{value:"Request",id:"request-1",level:3},{value:"Response",id:"response-1",level:3}];function m(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"find-accounts",children:"Find Accounts"}),"\n","\n",(0,s.jsxs)(n.p,{children:["Find accounts. The command uses the ",(0,s.jsx)(n.strong,{children:"PV_ACCOUNT"})," public view to find data. Any filters passed should be passed on this public view."]}),"\n",(0,s.jsxs)("p",{children:[(0,s.jsx)("span",{class:"method-get",children:"GET "}),(0,s.jsx)("span",{class:"method-get-text",children:(0,s.jsx)(n.a,{href:"https://instance.securid.com/aveksa/command.submit?cmd=findAccounts",children:"https://instance.securid.com/aveksa/command.submit?cmd=findAccounts"})})]}),"\n",(0,s.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,s.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)("table",{class:"table-container",children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("label",{class:"required",children:"command"})}),(0,s.jsx)("td",{children:"findAccounts"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"format"}),(0,s.jsxs)("td",{children:[(0,s.jsxs)("p",{children:[(0,s.jsx)(n.code,{children:"properties"})," - (Default) ",(0,s.jsx)(n.code,{children:"key=value"}),". most useful when requesting a single object. If multiple objects are returned, values is a csv. ie ",(0,s.jsx)(n.code,{children:"key=value1,value2,value3"})," where value1 is the value for the first object, value2 is the value for the 2nd object, etc."]}),(0,s.jsxs)("p",{children:[(0,s.jsx)(n.code,{children:"json"})," - Useful format for parsing into javascript or other languages. See ",(0,s.jsx)(n.a,{href:"http://www.json.org",children:"www.json.org"})," for details."]}),(0,s.jsxs)("p",{children:[(0,s.jsx)(n.code,{children:"csv"})," - Comma separated values"]}),(0,s.jsxs)("p",{children:[(0,s.jsx)(n.code,{children:"tsv"})," - Tab separated values"]}),(0,s.jsx)(n.code,{children:"xml"})," - Extensible Markup Language"]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"delimiter"}),(0,s.jsxs)("td",{children:["The delimiter to use between values for ",(0,s.jsx)(n.code,{children:"csv, properties"})," formats"]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"returnColumns"}),(0,s.jsxs)("td",{children:[(0,s.jsx)("p",{children:"The names of the columns to return. returnColumns may be a CSV list of multiple column names. The returnColumns parameter may also be listed multiple times (ie returnColumns=col1,col2&returnColumns=col3,col4)"}),"Refer to Columns table below."]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"returnMaxRows"}),(0,s.jsx)("td",{children:"The maximum number of objects to return"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"distinct"}),(0,s.jsxs)("td",{children:[(0,s.jsx)(n.code,{children:"true, false"})," Returns only distinct values similar to the distinct keyword in SQL."]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"sortByColumns"}),(0,s.jsxs)("td",{children:[(0,s.jsx)("p",{children:"The results will be sorted based on the columns listed using comma as the delimiter if multiple columns are specified."}),"Refer to Columns table below."]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"sortDirection"}),(0,s.jsx)("td",{children:"This determines sorting order. When defined as 'asc' the sorting is in ascending order else in 'desc' descending order. If this parameter is not specified, the natural order of rows returned by database is used."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"includeHeaderRow"}),(0,s.jsxs)("td",{children:[(0,s.jsx)(n.code,{children:"true, false"})," To include column headers when the return format is ",(0,s.jsx)(n.code,{children:"csv, tsv"}),". (Default) ",(0,s.jsx)(n.code,{children:"true"})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"ignoreCase"}),(0,s.jsxs)("td",{children:[(0,s.jsx)(n.code,{children:"true, false"})," Returns case insensitive search result for specified filter parameters. (Default) ",(0,s.jsx)(n.code,{children:"false"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"columns",children:"Columns"}),"\n",(0,s.jsxs)("table",{class:"table-container",children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"id"}),(0,s.jsx)("td",{children:"[Primary Key] Unique account identifier"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"name"}),(0,s.jsx)("td",{children:"Account name"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"creation_date"}),(0,s.jsx)("td",{children:"Date stamp when this account was created."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"deletion_date"}),(0,s.jsx)("td",{children:"The date stamp when this account was removed."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"expiration_date"}),(0,s.jsx)("td",{children:"The date on which the account expires."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"application_id"}),(0,s.jsx)("td",{children:"[Foreign Key referencing APPLICATION.ID] Application/Directory id."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"adc_id"}),(0,s.jsx)("td",{children:"[Foreign Key referencing ACCOUNT_COLLECTOR.ID] Account collector id."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"adc_name"}),(0,s.jsx)("td",{children:"Account collector name"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"is_shared"}),(0,s.jsx)("td",{children:"Whether this account is shared by multiple users."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"last_login_date"}),(0,s.jsx)("td",{children:"Last time when a user logged in using this account."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"last_reviewed_date"}),(0,s.jsx)("td",{children:"Last reviewed date"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"is_locked"}),(0,s.jsxs)("td",{children:[(0,s.jsx)(n.code,{children:"True, False"}),"Indicates if the current account is locked."]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"is_disabled"}),(0,s.jsxs)("td",{children:[(0,s.jsx)(n.code,{children:"True, False"}),"Indicates if the current account is disabled."]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"is_shared"}),(0,s.jsxs)("td",{children:[(0,s.jsx)(n.code,{children:"True, False"}),"Whether this account is shared by multiple users."]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"expiration_date"}),(0,s.jsx)("td",{children:"The date on which the account expires."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"object_sid"}),(0,s.jsx)("td",{children:"Holds a unique string formatted value for an account created from Active Directory. This unique account value is used in resolving Active Directory 'Foreign Security Principles' group memberships."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"orphaned_date"}),(0,s.jsx)("td",{children:"Date an account became orphaned."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"orphaned_date"}),(0,s.jsx)("td",{children:"Date an account became orphaned."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"cau1"}),(0,s.jsx)("td",{children:"Value of custom user type attributes configured on the instance represented by their reference names"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"cad1"}),(0,s.jsx)("td",{children:"Value of custom date type attributes configured on the instance represented by their reference names"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"cas1"}),(0,s.jsx)("td",{children:"Value of custom string type attributes configured on the instance represented by their reference names"})]})]}),"\n",(0,s.jsx)(n.h3,{id:"headers",children:"Headers"}),"\n",(0,s.jsxs)("table",{class:"table-container",children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("label",{class:"required",children:"Authorization"})}),(0,s.jsxs)("td",{children:["Bearer ",(0,s.jsx)(n.code,{children:"token"})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Accept"}),(0,s.jsx)("td",{children:"application/json"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Content-Type"}),(0,s.jsx)("td",{children:"application/json"})]})]}),"\n",(0,s.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,s.jsx)(n.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:["The API returns the requested columns specified by ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"returnColumns"})})," as output. If ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"returnColumns"})})," is unspecified then all ",(0,s.jsx)(n.a,{href:"#columns",children:"columns"})," listed will be returned."]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.h3,{id:"request-1",children:"Request"}),"\n",(0,s.jsxs)(i.A,{className:"unique-tabs",children:[(0,s.jsx)(a.A,{value:"Curl",attributes:{className:c.A.curl},children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'curl -K -X GET  \\\r\n"https://instance.securid.com/aveksa/command.submit?cmd=findAccounts&format=json" \\\r\n"&returnColumns=id,name,application_id,last_login_date,cas9" \\\r\n-H "Authorization: Bearer <token>" \\\r\n-H "Content-Type: application/json"\n'})})}),(0,s.jsx)(a.A,{value:"Python",attributes:{className:c.A.python},children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import requests\r\n\r\nurl = "https://instance.securid.com/aveksa/command.submit"\r\n\r\nparams = {\r\n    "cmd": "findAccounts",\r\n    "format": "json",\r\n    "returnColumns": "id,name,application_id,last_login_date,cas9",\r\n    "returnMaxRows": "10",\r\n    "distinct": "true",\r\n    "sortDirection": "asc"\r\n}\r\n\r\nheaders = {\r\n    \'Authorization\': \'Bearer <token>\',\r\n    \'Content-Type\': \'application/json\'\r\n}\r\n\r\nresponse = requests.get(url, params=params, headers=headers)\r\n\r\nif response.status_code == 200:\r\n    data = response.json()\r\n    print(data)\r\nelse:\r\n    print(f"Request failed with status code {response.status_code}")\n'})})}),(0,s.jsx)(a.A,{value:"Node.js",attributes:{className:c.A.nodejs},children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const axios = require(\'axios\');\r\n\r\nconst url = "https://instance.securid.com/aveksa/command.submit";\r\n\r\nconst params = {\r\n    cmd: "findAccounts",\r\n    format: "json",\r\n    returnColumns: "id,name,application_id,last_login_date,cas9",\r\n    returnMaxRows: "10",\r\n    distinct: "true",\r\n    sortDirection: "asc"\r\n};\r\n\r\nconst headers = {\r\n    \'Authorization\': \'Bearer <token>\',\r\n    \'Content-Type\': \'application/json\'\r\n};\r\n\r\naxios.get(url, { params, headers })\r\n    .then(response => {\r\n        if (response.status === 200) {\r\n            const data = response.data;\r\n            console.log(data);\r\n        } else {\r\n            console.log(`Request failed with status code ${response.status}`);\r\n        }\r\n    })\r\n    .catch(error => {\r\n        console.error(\'Error:\', error);\r\n    });\n'})})})]}),"\n",(0,s.jsx)(n.h3,{id:"response-1",children:"Response"}),"\n",(0,s.jsx)(i.A,{className:"unique-tabs",children:(0,s.jsx)(a.A,{value:"200",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\r\n    "findAccounts": [\r\n        {\r\n            "id": "267530",\r\n            "name": "106003",\r\n            "application_id": "1",\r\n            "last_login_date": "",\r\n            "cas9": "CN=106003,OU=dev,DC=company,DC=com"\r\n        },\r\n        {\r\n            "id": "267525",\r\n            "name": "107009",\r\n            "application_id": "1",\r\n            "last_login_date": "",\r\n            "cas9": ""\r\n        },\r\n        {\r\n            "id": "266229",\r\n            "name": "5b6c7b3afbc68529c6c47967",\r\n            "application_id": "244",\r\n            "last_login_date": "",\r\n            "cas9": ""\r\n        },\r\n        {\r\n            "id": "266220",\r\n            "name": "5cb4ae0e4b97ab11a18e00c7",\r\n            "application_id": "244",\r\n            "last_login_date": "",\r\n            "cas9": ""\r\n        }        \r\n    ]\r\n}\n'})})})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>a});r(96540);var s=r(34164);const t={tabItem:"tabItem_Ymn6"};var i=r(74848);function a(e){let{children:n,hidden:r,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.A)(t.tabItem,a),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>A});var s=r(96540),t=r(34164),i=r(23104),a=r(56347),c=r(205),l=r(57485),d=r(31682),o=r(89466);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:s,default:t}}=e;return{value:n,label:r,attributes:s,default:t}}))}(r);return function(e){const n=(0,d.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function m(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:r}=e;const t=(0,a.W6)(),i=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,l.aZ)(i),(0,s.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(t.location.search);n.set(i,e),t.replace({...t.location,search:n.toString()})}),[i,t])]}function x(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,i=h(e),[a,l]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:i}))),[d,u]=p({queryString:r,groupId:t}),[x,j]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,i]=(0,o.Dv)(r);return[t,(0,s.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:t}),f=(()=>{const e=d??x;return m({value:e,tabValues:i})?e:null})();(0,c.A)((()=>{f&&l(f)}),[f]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),j(e)}),[u,j,i]),tabValues:i}}var j=r(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(74848);function v(e){let{className:n,block:r,selectedValue:s,selectValue:a,tabValues:c}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),o=e=>{const n=e.currentTarget,r=l.indexOf(n),t=c[r].value;t!==s&&(d(n),a(t))},u=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;n=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;n=l[r]??l[l.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":r},n),children:c.map((e=>{let{value:n,label:r,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>l.push(e),onKeyDown:u,onClick:o,...i,className:(0,t.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":s===n}),children:r??n},n)}))})}function g(e){let{lazy:n,children:r,selectedValue:t}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===t));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function y(e){const n=x(e);return(0,b.jsxs)("div",{className:(0,t.A)("tabs-container",f.tabList),children:[(0,b.jsx)(v,{...n,...e}),(0,b.jsx)(g,{...n,...e})]})}function A(e){const n=(0,j.A)();return(0,b.jsx)(y,{...e,children:u(e.children)},String(n))}},41447:(e,n,r)=>{r.d(n,{A:()=>s});const s={curl:"curl_orwx",python:"python_uXgC",nodejs:"nodejs_ucMl",powershell:"powershell_BcVw"}},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>c});var s=r(96540);const t={},i=s.createContext(t);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);