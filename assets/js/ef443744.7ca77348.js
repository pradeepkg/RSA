"use strict";(self.webpackChunkdocku=self.webpackChunkdocku||[]).push([[5084],{46002:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>h});var r=n(74848),t=n(28453),i=n(11470),l=n(19365),d=n(41447);const a={sidebar_position:17},c="Find Users",o={id:"information/findUsers",title:"Find Users",description:"Find users. The command uses the PV_USERS public view to find data.",source:"@site/docs/information/findUsers.md",sourceDirName:"information",slug:"/information/findUsers",permalink:"/RSA/docs/information/findUsers",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1715787065e3,sidebarPosition:17,frontMatter:{sidebar_position:17},sidebar:"tutorialSidebar",previous:{title:"Find User Groups",permalink:"/RSA/docs/information/findUserGroups"},next:{title:"Collection",permalink:"/RSA/docs/category/collection"}},u={},h=[{value:"Request",id:"request",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Columns",id:"columns",level:4},{value:"Headers",id:"headers",level:3},{value:"Response",id:"response",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Examples",id:"examples",level:2},{value:"Request",id:"request-1",level:3},{value:"Response",id:"response-1",level:3}];function j(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"find-users",children:"Find Users"}),"\n","\n",(0,r.jsxs)(s.p,{children:["Find users. The command uses the ",(0,r.jsx)(s.strong,{children:"PV_USERS public"})," view to find data."]}),"\n",(0,r.jsxs)("p",{children:[(0,r.jsx)("span",{class:"method-get",children:"GET "}),(0,r.jsx)("span",{class:"method-get-text",children:(0,r.jsx)(s.a,{href:"https://instance.securid.com/aveksa/command.submit?cmd=findUsers",children:"https://instance.securid.com/aveksa/command.submit?cmd=findUsers"})})]}),"\n",(0,r.jsx)(s.h2,{id:"request",children:"Request"}),"\n",(0,r.jsx)(s.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)("table",{class:"table-container",children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("label",{class:"required",children:"command"})}),(0,r.jsx)("td",{children:"findUsers"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"format"}),(0,r.jsxs)("td",{children:[(0,r.jsxs)("p",{children:[(0,r.jsx)(s.code,{children:"properties"})," - (Default) ",(0,r.jsx)(s.code,{children:"key=value"}),". most useful when requesting a single object. If multiple objects are returned, values is a csv. ie ",(0,r.jsx)(s.code,{children:"key=value1,value2,value3"})," where value1 is the value for the first object, value2 is the value for the 2nd object, etc."]}),(0,r.jsxs)("p",{children:[(0,r.jsx)(s.code,{children:"json"})," - Useful format for parsing into javascript or other languages. See ",(0,r.jsx)(s.a,{href:"http://www.json.org",children:"www.json.org"})," for details."]}),(0,r.jsxs)("p",{children:[(0,r.jsx)(s.code,{children:"csv"})," - Comma separated values"]}),(0,r.jsxs)("p",{children:[(0,r.jsx)(s.code,{children:"tsv"})," - Tab separated values"]}),(0,r.jsx)(s.code,{children:"xml"})," - Extensible Markup Language"]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"delimiter"}),(0,r.jsxs)("td",{children:["The delimiter to use between values for ",(0,r.jsx)(s.code,{children:"csv, properties"})," formats"]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"returnColumns"}),(0,r.jsxs)("td",{children:[(0,r.jsx)("p",{children:"The names of the columns to return. returnColumns may be a CSV list of multiple column names. The returnColumns parameter may also be listed multiple times (ie returnColumns=col1,col2&returnColumns=col3,col4)"}),"Refer to Columns table below."]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"returnMaxRows"}),(0,r.jsx)("td",{children:"The maximum number of objects to return"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"distinct"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(s.code,{children:"true, false"})," Returns only distinct values similar to the distinct keyword in SQL."]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"sortByColumns"}),(0,r.jsxs)("td",{children:[(0,r.jsx)("p",{children:"The results will be sorted based on the columns listed using comma as the delimiter if multiple columns are specified."}),"Refer to Columns table below."]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"sortDirection"}),(0,r.jsx)("td",{children:"This determines sorting order. When defined as 'asc' the sorting is in ascending order else in 'desc' descending order. If this parameter is not specified, the natural order of rows returned by database is used."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"includeHeaderRow"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(s.code,{children:"true, false"})," To include column headers when the return format is ",(0,r.jsx)(s.code,{children:"csv, tsv"}),". (Default) ",(0,r.jsx)(s.code,{children:"true"})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"ignoreCase"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(s.code,{children:"true, false"})," Returns case insensitive search result for specified filter parameters. (Default) ",(0,r.jsx)(s.code,{children:"false"})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"columns",children:"Columns"}),"\n",(0,r.jsxs)("table",{class:"table-container",children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"id"}),(0,r.jsx)("td",{children:"[Primary Key] Unique user identifier"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"idc_id"}),(0,r.jsx)("td",{children:"[Foreign Key referencing IDENTITY_COLLECTOR.ID] Identity collector id"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"add_state"}),(0,r.jsxs)("td",{children:["Has the following values:",(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"0 - no pending add"}),(0,r.jsx)("li",{children:"30 - pending CR creation"}),(0,r.jsx)("li",{children:"50 - pending approval"}),(0,r.jsx)("li",{children:"60 - pending delayed fulfillment"}),(0,r.jsx)("li",{children:"70 - pending fulfillment"}),(0,r.jsx)("li",{children:"80 - pending verification"})]})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"remove_state"}),(0,r.jsxs)("td",{children:["Has the following values:",(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"0 - no pending remove"}),(0,r.jsx)("li",{children:"30 - pending CR creation"}),(0,r.jsx)("li",{children:"50 - pending approval"}),(0,r.jsx)("li",{children:"60 - pending delayed fulfillment"}),(0,r.jsx)("li",{children:"70 - pending fulfillment"}),(0,r.jsx)("li",{children:"80 - pending verification"})]})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"backup_supervisor_name"}),(0,r.jsx)("td",{children:"Backup supervisor name"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"supervisor_id_name"}),(0,r.jsx)("td",{children:"Supervisor's name"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"supervisor_id"}),(0,r.jsx)("td",{children:"[Foreign Key referencing USERS.ID] Supervisor user id"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"availability_status"}),(0,r.jsx)("td",{children:"Used for Out of Office functionality"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"backup_supervisor"}),(0,r.jsx)("td",{children:"Backup supervisor"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"business_unit_id"}),(0,r.jsx)("td",{children:"[Foreign Key referencing BUSINESS_UNIT.ID] Business unit id"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"creation_date"}),(0,r.jsx)("td",{children:"Date stamp when this user record was created"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"deletion_date"}),(0,r.jsx)("td",{children:"Date stamp when this user record was removed"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"user_id"}),(0,r.jsx)("td",{children:"User's external identifier"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"unique_id"}),(0,r.jsx)("td",{children:"User's external unique identifier"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"first_name"}),(0,r.jsx)("td",{children:"User's first name"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"last_name"}),(0,r.jsx)("td",{children:"User's last name"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"title"}),(0,r.jsx)("td",{children:"User's title in the organization"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"department"}),(0,r.jsx)("td",{children:"User's department name"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"email_address"}),(0,r.jsx)("td",{children:"User email address"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"job_status"}),(0,r.jsx)("td",{children:"User job status"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"is_terminated"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(s.code,{children:"true, false"}),"Indicates the termination state for the user."]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"termination_date"}),(0,r.jsx)("td",{children:"Termination date"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"jml_status"}),(0,r.jsx)("td",{children:"Joiner, mover, and leaver status used internally."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"exception_count"}),(0,r.jsx)("td",{children:"Exception count"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"violation_count"}),(0,r.jsx)("td",{children:"Violation count"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"cau1"}),(0,r.jsx)("td",{children:"Value of custom user type attributes configured on the instance represented by their reference names"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"cad1"}),(0,r.jsx)("td",{children:"Value of custom date type attributes configured on the instance represented by their reference names"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"cas1"}),(0,r.jsx)("td",{children:"Value of custom string type attributes configured on the instance represented by their reference names"})]})]}),"\n",(0,r.jsx)(s.h3,{id:"headers",children:"Headers"}),"\n",(0,r.jsxs)("table",{class:"table-container",children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("label",{class:"required",children:"Authorization"})}),(0,r.jsxs)("td",{children:["Bearer ",(0,r.jsx)(s.code,{children:"token"})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Accept"}),(0,r.jsx)("td",{children:"application/json"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Content-Type"}),(0,r.jsx)("td",{children:"application/json"})]})]}),"\n",(0,r.jsx)(s.h2,{id:"response",children:"Response"}),"\n",(0,r.jsx)(s.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,r.jsxs)(s.p,{children:["The API returns the requested columns specified by ",(0,r.jsx)(s.em,{children:(0,r.jsx)(s.strong,{children:"returnColumns"})})," as output. If ",(0,r.jsx)(s.em,{children:(0,r.jsx)(s.strong,{children:"returnColumns"})})," is unspecified then all ",(0,r.jsx)(s.a,{href:"#columns",children:"columns"})," listed will be returned."]}),"\n",(0,r.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(s.h3,{id:"request-1",children:"Request"}),"\n",(0,r.jsxs)(i.A,{className:"unique-tabs",children:[(0,r.jsx)(l.A,{value:"Curl",attributes:{className:d.A.curl},children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:'curl -K -X GET  \\\n"https://instance.securid.com/aveksa/command.submit?cmd=findUsers&format=json" \\\n"&returnColumns=id%2Cuser_id%2Cfirst_name%2Clast_name%2Cemail_address%2Cis_terminated" \\\n-H "Authorization: Bearer <token>" \\\n-H "Content-Type: application/json"\n'})})}),(0,r.jsx)(l.A,{value:"Python",attributes:{className:d.A.python},children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-python",children:'import requests\n\nurl = "https://instance.securid.com/aveksa/command.submit"\n\nparams = {\n    "cmd": "findUsers",\n    "format": "json",\n    "returnColumns": "id,user_id,first_name,last_name,email_address,is_terminated",\n    "returnMaxRows": "50",\n    "distinct": "true",\n    "sortDirection": "asc"\n}\n\nheaders = {\n    \'Authorization\': \'Bearer <token>\',\n    \'Content-Type\': \'application/json\'\n}\n\nresponse = requests.get(url, params=params, headers=headers)\n\nif response.status_code == 200:\n    data = response.json()\n    print(data)\nelse:\n    print(f"Request failed with status code {response.status_code}")\n'})})}),(0,r.jsx)(l.A,{value:"Node.js",attributes:{className:d.A.nodejs},children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js"})})})]}),"\n",(0,r.jsx)(s.h3,{id:"response-1",children:"Response"}),"\n",(0,r.jsx)(i.A,{className:"unique-tabs",children:(0,r.jsx)(l.A,{value:"200",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\n    "findUsers": [\n        {\n            "id": "247852",\n            "user_id": "103307",\n            "first_name": "Kara",\n            "last_name": "Leary",\n            "email_address": "14jun@today.com",\n            "is_terminated": "False"\n        },\n        {\n            "id": "247853",\n            "user_id": "16026562681",\n            "first_name": "Runscope1",\n            "last_name": "Alan1",\n            "email_address": "New1602656268B@aquera.com",\n            "is_terminated": "False"\n        },\n        {\n            "id": "247854",\n            "user_id": "hind1",\n            "first_name": "",\n            "last_name": "",\n            "email_address": "",\n            "is_terminated": "False"\n        }\n    ]\n}        \n'})})})})]})}function m(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(j,{...e})}):j(e)}},19365:(e,s,n)=>{n.d(s,{A:()=>l});n(96540);var r=n(34164);const t={tabItem:"tabItem_Ymn6"};var i=n(74848);function l(e){let{children:s,hidden:n,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(t.tabItem,l),hidden:n,children:s})}},11470:(e,s,n)=>{n.d(s,{A:()=>y});var r=n(96540),t=n(34164),i=n(23104),l=n(56347),d=n(205),a=n(57485),c=n(31682),o=n(89466);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:s,children:n}=e;return(0,r.useMemo)((()=>{const e=s??function(e){return u(e).map((e=>{let{props:{value:s,label:n,attributes:r,default:t}}=e;return{value:s,label:n,attributes:r,default:t}}))}(n);return function(e){const s=(0,c.X)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,n])}function j(e){let{value:s,tabValues:n}=e;return n.some((e=>e.value===s))}function m(e){let{queryString:s=!1,groupId:n}=e;const t=(0,l.W6)(),i=function(e){let{queryString:s=!1,groupId:n}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:s,groupId:n});return[(0,a.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const s=new URLSearchParams(t.location.search);s.set(i,e),t.replace({...t.location,search:s.toString()})}),[i,t])]}function x(e){const{defaultValue:s,queryString:n=!1,groupId:t}=e,i=h(e),[l,a]=(0,r.useState)((()=>function(e){let{defaultValue:s,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!j({value:s,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:s,tabValues:i}))),[c,u]=m({queryString:n,groupId:t}),[x,p]=function(e){let{groupId:s}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(s),[t,i]=(0,o.Dv)(n);return[t,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:t}),f=(()=>{const e=c??x;return j({value:e,tabValues:i})?e:null})();(0,d.A)((()=>{f&&a(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!j({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);a(e),u(e),p(e)}),[u,p,i]),tabValues:i}}var p=n(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(74848);function v(e){let{className:s,block:n,selectedValue:r,selectValue:l,tabValues:d}=e;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),o=e=>{const s=e.currentTarget,n=a.indexOf(s),t=d[n].value;t!==r&&(c(s),l(t))},u=e=>{let s=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const n=a.indexOf(e.currentTarget)+1;s=a[n]??a[0];break}case"ArrowLeft":{const n=a.indexOf(e.currentTarget)-1;s=a[n]??a[a.length-1];break}}s?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":n},s),children:d.map((e=>{let{value:s,label:n,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===s?0:-1,"aria-selected":r===s,ref:e=>a.push(e),onKeyDown:u,onClick:o,...i,className:(0,t.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":r===s}),children:n??s},s)}))})}function g(e){let{lazy:s,children:n,selectedValue:t}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(s){const e=i.find((e=>e.props.value===t));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,s)=>(0,r.cloneElement)(e,{key:s,hidden:e.props.value!==t})))})}function _(e){const s=x(e);return(0,b.jsxs)("div",{className:(0,t.A)("tabs-container",f.tabList),children:[(0,b.jsx)(v,{...s,...e}),(0,b.jsx)(g,{...s,...e})]})}function y(e){const s=(0,p.A)();return(0,b.jsx)(_,{...e,children:u(e.children)},String(s))}},41447:(e,s,n)=>{n.d(s,{A:()=>r});const r={curl:"curl_orwx",python:"python_uXgC",nodejs:"nodejs_ucMl",powershell:"powershell_BcVw"}},28453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>d});var r=n(96540);const t={},i=r.createContext(t);function l(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);