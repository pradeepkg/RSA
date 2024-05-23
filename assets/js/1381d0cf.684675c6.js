"use strict";(self.webpackChunkdocku=self.webpackChunkdocku||[]).push([[2313],{59503:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>u,contentTitle:()=>d,default:()=>x,frontMatter:()=>c,metadata:()=>o,toc:()=>h});var t=s(74848),r=s(28453),i=s(11470),a=s(19365),l=s(41447);s(20431);const c={sidebar_position:2},d="Find Applications",o={id:"information/findApplications",title:"Find Applications",description:"Find applications. The command uses the PV_APPLICATION public view to find data. Any filters passed should be passed on this public view.",source:"@site/docs/information/findApplications.md",sourceDirName:"information",slug:"/information/findApplications",permalink:"/RSA/docs/information/findApplications",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1715787065e3,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Find Accounts",permalink:"/RSA/docs/information/findAccounts"},next:{title:"Find Business Units",permalink:"/RSA/docs/information/findBusinessUnits"}},u={},h=[{value:"Request",id:"request",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Columns",id:"columns",level:4},{value:"Headers",id:"headers",level:3},{value:"Response",id:"response",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Examples",id:"examples",level:2},{value:"Request",id:"request-1",level:3},{value:"Response",id:"response-1",level:3}];function p(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"find-applications",children:"Find Applications"}),"\n","\n",(0,t.jsxs)(n.p,{children:["Find applications. The command uses the ",(0,t.jsx)(n.strong,{children:"PV_APPLICATION"})," public view to find data. Any filters passed should be passed on this public view."]}),"\n",(0,t.jsxs)("p",{children:[(0,t.jsx)("span",{class:"method-get",children:"GET "}),(0,t.jsx)("span",{class:"method-get-text",children:(0,t.jsx)(n.a,{href:"https://instance.securid.com/aveksa/command.submit?cmd=findApplications",children:"https://instance.securid.com/aveksa/command.submit?cmd=findApplications"})})]}),"\n",(0,t.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,t.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)("table",{class:"table-container",children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("label",{class:"required",children:"command"})}),(0,t.jsx)("td",{children:"findApplications"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"format"}),(0,t.jsxs)("td",{children:[(0,t.jsxs)("p",{children:[(0,t.jsx)(n.code,{children:"properties"})," - (Default) ",(0,t.jsx)(n.code,{children:"key=value"}),". most useful when requesting a single object. If multiple objects are returned, values is a csv. ie ",(0,t.jsx)(n.code,{children:"key=value1,value2,value3"})," where value1 is the value for the first object, value2 is the value for the 2nd object, etc."]}),(0,t.jsxs)("p",{children:[(0,t.jsx)(n.code,{children:"json"})," - Useful format for parsing into javascript or other languages. See ",(0,t.jsx)(n.a,{href:"http://www.json.org",children:"www.json.org"})," for details."]}),(0,t.jsxs)("p",{children:[(0,t.jsx)(n.code,{children:"csv"})," - Comma separated values"]}),(0,t.jsxs)("p",{children:[(0,t.jsx)(n.code,{children:"tsv"})," - Tab separated values"]}),(0,t.jsx)(n.code,{children:"xml"})," - Extensible Markup Language"]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"delimiter"}),(0,t.jsxs)("td",{children:["The delimiter to use between values for ",(0,t.jsx)(n.code,{children:"csv, properties"})," formats"]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"returnColumns"}),(0,t.jsxs)("td",{children:[(0,t.jsx)("p",{children:"The names of the columns to return. returnColumns may be a CSV list of multiple column names. The returnColumns parameter may also be listed multiple times (ie returnColumns=col1,col2&returnColumns=col3,col4)"}),"Refer to Columns table below."]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"returnMaxRows"}),(0,t.jsx)("td",{children:"The maximum number of objects to return"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"distinct"}),(0,t.jsxs)("td",{children:[(0,t.jsx)(n.code,{children:"true, false"})," Returns only distinct values similar to the distinct keyword in SQL."]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"sortByColumns"}),(0,t.jsxs)("td",{children:[(0,t.jsx)("p",{children:"The results will be sorted based on the columns listed using comma as the delimiter if multiple columns are specified."}),"Refer to Columns table below."]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"sortDirection"}),(0,t.jsx)("td",{children:"This determines sorting order. When defined as 'asc' the sorting is in ascending order else in 'desc' descending order. If this parameter is not specified, the natural order of rows returned by database is used."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"includeHeaderRow"}),(0,t.jsxs)("td",{children:[(0,t.jsx)(n.code,{children:"true, false"})," To include column headers when the return format is ",(0,t.jsx)(n.code,{children:"csv, tsv"}),". (Default) ",(0,t.jsx)(n.code,{children:"true"})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"ignoreCase"}),(0,t.jsxs)("td",{children:[(0,t.jsx)(n.code,{children:"true, false"})," Returns case insensitive search result for specified filter parameters. (Default) ",(0,t.jsx)(n.code,{children:"false"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"columns",children:"Columns"}),"\n",(0,t.jsxs)("table",{class:"table-container",children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"id"}),(0,t.jsx)("td",{children:"[Primary Key] Unique application identifier"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"name"}),(0,t.jsx)("td",{children:"Application name"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"created_by"}),(0,t.jsx)("td",{children:"[Foreign Key referencing USERS.ID] User id that created this application"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"creation_date"}),(0,t.jsx)("td",{children:"Date stamp when this application was created"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"description"}),(0,t.jsx)("td",{children:"Description associated with this application"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"sensitivity"}),(0,t.jsx)("td",{children:"Sensitivity"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"ownership"}),(0,t.jsx)("td",{children:"Ownership"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"locality"}),(0,t.jsx)("td",{children:"Locality"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"business_owner"}),(0,t.jsx)("td",{children:"[Foreign Key referencing USERS.ID] Business owner user id"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"technical_owner"}),(0,t.jsx)("td",{children:"[Foreign Key referencing USERS.ID] Technical owner user id"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"exception_manager"}),(0,t.jsx)("td",{children:"[Foreign Key referencing USERS.ID] Exception manager user"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"business_unit_id"}),(0,t.jsx)("td",{children:"[Foreign Key referencing BUSINESS_UNIT.ID] Related business unit id"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"alt_name"}),(0,t.jsx)("td",{children:"Alternate name for this entry"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"short_desc"}),(0,t.jsx)("td",{children:"Short description for this entry"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"long_desc"}),(0,t.jsx)("td",{children:"Long description for this entry"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"url_ref"}),(0,t.jsx)("td",{children:"URL reference for this entry"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"user_count"}),(0,t.jsx)("td",{children:"Total number of collected users for this application"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"account_count"}),(0,t.jsx)("td",{children:"Total number of collected accounts for this application"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"orphaned_account_count"}),(0,t.jsx)("td",{children:"Total number of collected accounts for this application that do not map to any user"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"entitlement_count"}),(0,t.jsx)("td",{children:"Total number of collected entitlements for this application"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"category"}),(0,t.jsx)("td",{children:"Category"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"exclude_from_normal_add_access"}),(0,t.jsx)("td",{children:"Exclude application from normal add access"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"allow_create_entitlement"}),(0,t.jsx)("td",{children:"Allow create entitlement"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"allow_manual_activity"}),(0,t.jsx)("td",{children:"Allow manual activity"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"ents_require_account"}),(0,t.jsx)("td",{children:"Stores true and false and signifies whether entitlements added to the users have to come from an account"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"directory_for_accounts"}),(0,t.jsx)("td",{children:"Stores the directory of the accounts for the application"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"rules_account_template_id"}),(0,t.jsx)("td",{children:"Signifies the account template to be used when a change request is created from Rules to add entitlements to this application"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"attr_sync_enabled"}),(0,t.jsx)("td",{children:"Stores true and false and signifies whether attribute sync feature is enabled"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"allow_disabled_accounts"}),(0,t.jsx)("td",{children:"Stores true and false and signifies whether the disabled accounts are allowed to be collected"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"allow_locked_accounts"}),(0,t.jsx)("td",{children:"Stores true and false and signifies whether the locked accounts are allowed to be collected"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"roles_account_template_id"}),(0,t.jsx)("td",{children:"Signifies the account template to be used when a change request is created from Roles to add entitlements to this application"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"business_owner_name"}),(0,t.jsx)("td",{children:"Business owner display name"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"technical_owner_name"}),(0,t.jsx)("td",{children:"Technical owner display name"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"exception_manager_name"}),(0,t.jsx)("td",{children:"Exception manager display name"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"editable"}),(0,t.jsxs)("td",{children:[(0,t.jsx)(n.code,{children:"TRUE, FALSE"}),"If the application  is editable."]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"backup_business_owner"}),(0,t.jsx)("td",{children:"[Foreign Key referencing USERS.ID] Backup business owner"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"backup_technical_owner"}),(0,t.jsx)("td",{children:"[Foreign Key referencing USERS.ID] Backup technical owner"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"business_criticality"}),(0,t.jsx)("td",{children:"Specifies the level of criticality for the business source"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"privileged_flag"}),(0,t.jsx)("td",{children:"Specifies that the business source manages and controls privileged access"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"cau1"}),(0,t.jsx)("td",{children:"Value of custom user type attributes configured on the instance represented by their reference names"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"cad1"}),(0,t.jsx)("td",{children:"Value of custom date type attributes configured on the instance represented by their reference names"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"cas1"}),(0,t.jsx)("td",{children:"Value of custom string type attributes configured on the instance represented by their reference names"})]})]}),"\n",(0,t.jsx)(n.h3,{id:"headers",children:"Headers"}),"\n",(0,t.jsxs)("table",{class:"table-container",children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("label",{class:"required",children:"Authorization"})}),(0,t.jsxs)("td",{children:["Bearer ",(0,t.jsx)(n.code,{children:"token"})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Accept"}),(0,t.jsx)("td",{children:"application/json"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Content-Type"}),(0,t.jsx)("td",{children:"application/json"})]})]}),"\n",(0,t.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,t.jsx)(n.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:["The API returns the requested columns specified by ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"returnColumns"})})," as output. If ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"returnColumns"})})," is unspecified then all ",(0,t.jsx)(n.a,{href:"#columns",children:"columns"})," listed will be returned."]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.h3,{id:"request-1",children:"Request"}),"\n",(0,t.jsxs)(i.A,{className:"unique-tabs",children:[(0,t.jsx)(a.A,{value:"Curl",attributes:{className:l.A.curl},children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'curl -K -X GET  \\\n"https://instance.securid.com/aveksa/command.submit?cmd=findApplications&format=json" \\\n"&returnColumns=id%2Cname%2Cdescription&category=DEV" \\\n-H "Authorization: Bearer <token>" \\\n-H "Content-Type: application/json"\n'})})}),(0,t.jsx)(a.A,{value:"Python",attributes:{className:l.A.python},children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import requests\n\nurl = "https://instance.securid.com/aveksa/command.submit"\n\nparams = {\n    "cmd": "findApplications",\n    "format": "json",\n    "returnColumns": "id,name,description",\n    "returnMaxRows": "50",\n    "distinct": "true"\n}\n\nheaders = {\n    \'Authorization\': \'Bearer <token>\',\n    \'Content-Type\': \'application/json\'\n}\n\nresponse = requests.get(url, params=params, headers=headers)\n\nif response.status_code == 200:\n    data = response.json()\n    print(data)\nelse:\n    print(f"Request failed with status code {response.status_code}")\n'})})}),(0,t.jsx)(a.A,{value:"Node.js",attributes:{className:l.A.nodejs},children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const axios = require('axios');\n\nconst url = \"https://instance.securid.com/aveksa/command.submit\";\n\nconst params = {\n    cmd: \"findApplications\",\n    format: \"json\",\n    returnColumns: \"id,name,description\",\n    returnMaxRows: \"50\",\n    distinct: \"true\"\n};\n\nconst headers = {\n    'Authorization': 'Bearer <token>',\n    'Content-Type': 'application/json'\n};\n\naxios.get(url, { params, headers })\n    .then(response => {\n        if (response.status === 200) {\n            const data = response.data;\n            console.log(data);\n        } else {\n            console.log(`Request failed with status code ${response.status}`);\n        }\n    })\n    .catch(error => {\n        console.error('Error:', error);\n    });\n"})})})]}),"\n",(0,t.jsx)(n.h3,{id:"response-1",children:"Response"}),"\n",(0,t.jsx)(i.A,{className:"unique-tabs",children:(0,t.jsx)(a.A,{value:"200",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n "findApplications": [{\n   "id": "70",\n   "name": "Cherwell",\n   "description": "Cherwell Service Management is a cloud-based IT service management solution that helps IT teams in organizations to implement, automate and upgrade service and support processes."\n  },\n  {\n   "id": "71",\n   "name": "DataReach AWS",\n   "description": "This application will contain the AWS accounts and permission and will be used for recertification purpose."\n  },\n  {\n   "id": "72",\n   "name": "Deltek Costpoint",\n   "description": "Deltek CostPoint is an ERP software solution designed for government contractors. It enables users to manage project accounting, labor management, manufacturing, and business intelligence. Modules include payroll, budgeting and planning, reporting, human resources and benefits, manufacturing and compliance, subcontractor management, time and expense, contract management, and enterprise insights for planning and forecasting."\n  },\n  {\n   "id": "73",\n   "name": "Dropbox Business",\n   "description": "Share, sync, and collaborate on files securely with Dropbox Business, a file sharing and cloud storage solution that employees love and IT admins trust."\n  },\n  {\n   "id": "74",\n   "name": "Generic SecurID Tokens",\n   "description": "Represents generic requestable tokens meant to allow the system to request the \u201cnext available\u201d token"\n  }\n ]\n}\n'})})})})]})}function x(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},19365:(e,n,s)=>{s.d(n,{A:()=>a});s(96540);var t=s(34164);const r={tabItem:"tabItem_Ymn6"};var i=s(74848);function a(e){let{children:n,hidden:s,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,a),hidden:s,children:n})}},11470:(e,n,s)=>{s.d(n,{A:()=>y});var t=s(96540),r=s(34164),i=s(23104),a=s(56347),l=s(205),c=s(57485),d=s(31682),o=s(89466);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:s}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:s,attributes:t,default:r}}=e;return{value:n,label:s,attributes:t,default:r}}))}(s);return function(e){const n=(0,d.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function p(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:s}=e;const r=(0,a.W6)(),i=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,c.aZ)(i),(0,t.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function m(e){const{defaultValue:n,queryString:s=!1,groupId:r}=e,i=h(e),[a,c]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:i}))),[d,u]=x({queryString:s,groupId:r}),[m,j]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,o.Dv)(s);return[r,(0,t.useCallback)((e=>{s&&i.set(e)}),[s,i])]}({groupId:r}),f=(()=>{const e=d??m;return p({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{f&&c(f)}),[f]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),j(e)}),[u,j,i]),tabValues:i}}var j=s(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=s(74848);function g(e){let{className:n,block:s,selectedValue:t,selectValue:a,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),o=e=>{const n=e.currentTarget,s=c.indexOf(n),r=l[s].value;r!==t&&(d(n),a(r))},u=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const s=c.indexOf(e.currentTarget)+1;n=c[s]??c[0];break}case"ArrowLeft":{const s=c.indexOf(e.currentTarget)-1;n=c[s]??c[c.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":s},n),children:l.map((e=>{let{value:n,label:s,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>c.push(e),onKeyDown:u,onClick:o,...i,className:(0,r.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":t===n}),children:s??n},n)}))})}function v(e){let{lazy:n,children:s,selectedValue:r}=e;const i=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function w(e){const n=m(e);return(0,b.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,b.jsx)(g,{...n,...e}),(0,b.jsx)(v,{...n,...e})]})}function y(e){const n=(0,j.A)();return(0,b.jsx)(w,{...e,children:u(e.children)},String(n))}},41447:(e,n,s)=>{s.d(n,{A:()=>t});const t={curl:"curl_orwx",python:"python_uXgC",nodejs:"nodejs_ucMl",powershell:"powershell_BcVw"}},20431:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/draft-ab117e6de584b2dc7bd3d9f0bbfe0dd1.png"},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>l});var t=s(96540);const r={},i=t.createContext(r);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);