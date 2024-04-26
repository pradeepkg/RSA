"use strict";(self.webpackChunkdocku=self.webpackChunkdocku||[]).push([[12553],{18671:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>x,frontMatter:()=>d,metadata:()=>c,toc:()=>h});var s=r(74848),t=r(28453),i=r(11470),l=r(19365),a=r(41447);const d={sidebar_position:16},o="Find User Groups",c={id:"information/findUserGroups",title:"Find User Groups",description:"Find user groups. The command uses the PV_USER_GROUP public view to find data.",source:"@site/docs/information/findUserGroups.md",sourceDirName:"information",slug:"/information/findUserGroups",permalink:"/RSA/docs/information/findUserGroups",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1714157031e3,sidebarPosition:16,frontMatter:{sidebar_position:16},sidebar:"tutorialSidebar",previous:{title:"Find Change Requests",permalink:"/RSA/docs/information/findChangeRequests"},next:{title:"Find Users",permalink:"/RSA/docs/information/findUsers"}},u={},h=[{value:"Request Parameters",id:"request-parameters",level:3},{value:"Columns",id:"columns",level:4},{value:"Request Headers",id:"request-headers",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Examples",id:"response-examples",level:3}];function p(e){const n={a:"a",code:"code",em:"em",h1:"h1",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"find-user-groups",children:"Find User Groups"}),"\n","\n",(0,s.jsxs)(n.p,{children:["Find user groups. The command uses the ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"PV_USER_GROUP"})})," public view to find data."]}),"\n",(0,s.jsxs)("p",{children:[(0,s.jsx)("span",{class:"method-get",children:"GET "}),(0,s.jsx)("span",{class:"method-get-text",children:(0,s.jsx)(n.a,{href:"https://instance.securid.com/aveksa/command.submit?cmd=findUserGroups",children:"https://instance.securid.com/aveksa/command.submit?cmd=findUserGroups"})})]}),"\n",(0,s.jsx)(n.h3,{id:"request-parameters",children:"Request Parameters"}),"\n",(0,s.jsxs)("table",{class:"table-container",children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("label",{class:"required",children:"command"})}),(0,s.jsx)("td",{children:"findUserGroups"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"format"}),(0,s.jsxs)("td",{children:[(0,s.jsxs)("p",{children:[(0,s.jsx)(n.code,{children:"properties"})," - (Default) ",(0,s.jsx)(n.code,{children:"key=value"}),". most useful when requesting a single object. If multiple objects are returned, values is a csv. ie ",(0,s.jsx)(n.code,{children:"key=value1,value2,value3"})," where value1 is the value for the first object, value2 is the value for the 2nd object, etc."]}),(0,s.jsxs)("p",{children:[(0,s.jsx)(n.code,{children:"json"})," - Useful format for parsing into javascript or other languages. See ",(0,s.jsx)(n.a,{href:"http://www.json.org",children:"www.json.org"})," for details."]}),(0,s.jsxs)("p",{children:[(0,s.jsx)(n.code,{children:"csv"})," - Comma separated values"]}),(0,s.jsxs)("p",{children:[(0,s.jsx)(n.code,{children:"tsv"})," - Tab separated values"]}),(0,s.jsx)(n.code,{children:"xml"})," - Extensible Markup Language"]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"delimiter"}),(0,s.jsxs)("td",{children:["The delimiter to use between values for ",(0,s.jsx)(n.code,{children:"csv, properties"})," formats"]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"returnColumns"}),(0,s.jsxs)("td",{children:[(0,s.jsx)("p",{children:"The names of the columns to return. returnColumns may be a CSV list of multiple column names. The returnColumns parameter may also be listed multiple times (ie returnColumns=col1,col2&returnColumns=col3,col4)"}),"Refer to Columns table below."]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"returnMaxRows"}),(0,s.jsx)("td",{children:"The maximum number of objects to return"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"distinct"}),(0,s.jsxs)("td",{children:[(0,s.jsx)(n.code,{children:"true, false"})," Returns only distinct values similar to the distinct keyword in SQL."]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"sortByColumns"}),(0,s.jsxs)("td",{children:[(0,s.jsx)("p",{children:"The results will be sorted based on the columns listed using comma as the delimiter if multiple columns are specified."}),"Refer to Columns table below."]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"sortDirection"}),(0,s.jsx)("td",{children:"This determines sorting order. When defined as 'asc' the sorting is in ascending order else in 'desc' descending order. If this parameter is not specified, the natural order of rows returned by database is used."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"includeHeaderRow"}),(0,s.jsxs)("td",{children:[(0,s.jsx)(n.code,{children:"true, false"})," To include column headers when the return format is ",(0,s.jsx)(n.code,{children:"csv, tsv"}),". (Default) ",(0,s.jsx)(n.code,{children:"true"})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"ignoreCase"}),(0,s.jsxs)("td",{children:[(0,s.jsx)(n.code,{children:"true, false"})," Returns case insensitive search result for specified filter parameters. (Default) ",(0,s.jsx)(n.code,{children:"false"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"columns",children:"Columns"}),"\n",(0,s.jsxs)("table",{class:"table-container",children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"id"}),(0,s.jsx)("td",{children:"[Primary Key] Unique user identifier"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"name"}),(0,s.jsx)("td",{children:"Group name"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"idc_id"}),(0,s.jsx)("td",{children:"[Foreign Key referencing IDENTITY_COLLECTOR.ID] Identity collector id"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"guid"}),(0,s.jsx)("td",{children:"Identity of this group in Active Directory"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"creation_date"}),(0,s.jsx)("td",{children:"Date stamp when this group record was created"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"deletion_date"}),(0,s.jsx)("td",{children:"Date stamp when this group record was removed"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"application_id"}),(0,s.jsx)("td",{children:"Application id"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"add_state"}),(0,s.jsxs)("td",{children:["Has the following values:",(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"0 - no pending add"}),(0,s.jsx)("li",{children:"30 - pending CR creation"}),(0,s.jsx)("li",{children:"50 - pending approval"}),(0,s.jsx)("li",{children:"60 - pending delayed fulfillment"}),(0,s.jsx)("li",{children:"70 - pending fulfillment"}),(0,s.jsx)("li",{children:"80 - pending verification"})]})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"remove_state"}),(0,s.jsxs)("td",{children:["Has the following values:",(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"0 - no pending remove"}),(0,s.jsx)("li",{children:"30 - pending CR creation"}),(0,s.jsx)("li",{children:"50 - pending approval"}),(0,s.jsx)("li",{children:"60 - pending delayed fulfillment"}),(0,s.jsx)("li",{children:"70 - pending fulfillment"}),(0,s.jsx)("li",{children:"80 - pending verification"})]})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"object_sid"}),(0,s.jsx)("td",{children:"Holds a unique string formatted value for an account created from Active Directory. This unique account value is used in resolving Active Directory Foreign Security Principles (FSP) group memberships."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"businessname"}),(0,s.jsx)("td",{children:"???"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"available_for_request"}),(0,s.jsx)("td",{children:"Same as CANREQUEST"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"backup_owner"}),(0,s.jsx)("td",{children:"Backup owner"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"long_description"}),(0,s.jsx)("td",{children:"Long description for this entry"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"long_desc"}),(0,s.jsx)("td",{children:"Long description for this entry"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"owner"}),(0,s.jsx)("td",{children:"Same as Owner_ID"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"owner_id"}),(0,s.jsx)("td",{children:"[Foreign Key referencing USERS.ID] Owner user id"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"short_description"}),(0,s.jsx)("td",{children:"Same as SHORT_DESC"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"short_desc"}),(0,s.jsx)("td",{children:"Short description for this entry"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"help_link"}),(0,s.jsx)("td",{children:"Same as URL_REF"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"url_ref"}),(0,s.jsx)("td",{children:"URL reference for this entry"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"alt_name"}),(0,s.jsx)("td",{children:"Alternate name for this entry"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"last_reviewed_date"}),(0,s.jsx)("td",{children:"Last reviewed date"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"cau1"}),(0,s.jsx)("td",{children:"Value of custom user type attributes configured on the instance represented by their reference names"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"cad1"}),(0,s.jsx)("td",{children:"Value of custom date type attributes configured on the instance represented by their reference names"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"cas1"}),(0,s.jsx)("td",{children:"Value of custom string type attributes configured on the instance represented by their reference names"})]})]}),"\n",(0,s.jsx)(n.h3,{id:"request-headers",children:"Request Headers"}),"\n",(0,s.jsxs)("table",{class:"table-container",children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("label",{class:"required",children:"Authorization"})}),(0,s.jsxs)("td",{children:["Bearer ",(0,s.jsx)(n.code,{children:"&lt;token&gt;"})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Accept"}),(0,s.jsx)("td",{children:"application/json"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Content-Type"}),(0,s.jsx)("td",{children:"application/json"})]})]}),"\n",(0,s.jsx)(n.h3,{id:"response-parameters",children:"Response Parameters"}),"\n",(0,s.jsxs)(n.p,{children:["The API returns the requested columns specified by ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"returnColumns"})})," as output. If ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"returnColumns"})})," is unspecified then all ",(0,s.jsx)(n.a,{href:"#columns",children:"columns"})," listed will be returned."]}),"\n",(0,s.jsx)(n.h3,{id:"request-example",children:"Request Example"}),"\n",(0,s.jsxs)(i.A,{className:"unique-tabs",children:[(0,s.jsx)(l.A,{value:"Curl",attributes:{className:a.A.curl},children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'curl -K -X GET  \\\n"https://instance.securid.com/aveksa/command.submit?cmd=findUserGroups&format=json" \\\n"&returnColumns=id%2Cname%2Cdescription%2Cowner%2Cexternal_id&returnMaxRows=5" \\\n-H "Authorization: Bearer <token>" \\\n-H "Content-Type: application/json"\n'})})}),(0,s.jsx)(l.A,{value:"Python",attributes:{className:a.A.python},children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import requests\n\nurl = "https://instance.securid.com/aveksa/command.submit"\n\nparams = {\n    "cmd": "findUserGroups",\n    "format": "json",\n    "returnColumns": "id,name,description,owner,external_id",\n    "returnMaxRows": "5",\n    "distinct": "true",\n    "sortDirection": "asc"\n}\n\nheaders = {\n    \'Authorization\': \'Bearer <token>\',\n    \'Content-Type\': \'application/json\'\n}\n\nresponse = requests.get(url, params=params, headers=headers)\n\nif response.status_code == 200:\n    data = response.json()\n    print(data)\nelse:\n    print(f"Request failed with status code {response.status_code}")\n\n'})})}),(0,s.jsx)(l.A,{value:"Node.js",attributes:{className:a.A.nodejs},children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const axios = require(\'axios\');\n\nconst url = "https://instance.securid.com/aveksa/command.submit";\n\nconst params = {\n    cmd: "findUserGroups",\n    format: "json",\n    returnColumns: "id,name,description,owner,external_id",\n    returnMaxRows: "5",\n    distinct: "true",\n    sortDirection: "asc"\n};\n\nconst headers = {\n    \'Authorization\': \'Bearer <token>\',\n    \'Content-Type\': \'application/json\'\n};\n\naxios.get(url, { params, headers })\n    .then(response => {\n        if (response.status === 200) {\n            const data = response.data;\n            console.log(data);\n        } else {\n            console.log(`Request failed with status code ${response.status}`);\n        }\n    })\n    .catch(error => {\n        console.error(\'Error:\', error);\n    });\n'})})})]}),"\n",(0,s.jsx)(n.h3,{id:"response-examples",children:"Response Examples"}),"\n",(0,s.jsx)(i.A,{className:"unique-tabs",children:(0,s.jsx)(l.A,{value:"200",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "findUserGroups": [\n        {\n            "id": "10",\n            "name": "Cloud-Users",\n            "description": "",\n            "owner": "",\n            "external_id": "CN=Users,OU=ServiceGroups,OU=Users,OU=ops,DC=ops,DC=company,DC=com"\n        },\n        {\n            "id": "35",\n            "name": "Cbr-Gl",\n            "description": "Access to G1 Servers",\n            "owner": "",\n            "external_id": "352"\n        },\n        {\n            "id": "64",\n            "name": "PSMMaster",\n            "description": "",\n            "owner": "",\n            "external_id": "26"\n        },\n        {\n            "id": "67",\n            "name": "PVWAAppUsers",\n            "description": "",\n            "owner": "",\n            "external_id": "17"\n        },\n        {\n            "id": "86",\n            "name": "Auditors",\n            "description": "Auditors group",\n            "owner": "",\n            "external_id": "8"\n        }\n    ]\n}\n'})})})})]})}function x(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>l});r(96540);var s=r(34164);const t={tabItem:"tabItem_Ymn6"};var i=r(74848);function l(e){let{children:n,hidden:r,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.A)(t.tabItem,l),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>y});var s=r(96540),t=r(34164),i=r(23104),l=r(56347),a=r(205),d=r(57485),o=r(31682),c=r(89466);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:s,default:t}}=e;return{value:n,label:r,attributes:s,default:t}}))}(r);return function(e){const n=(0,o.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:r}=e;const t=(0,l.W6)(),i=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,d.aZ)(i),(0,s.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(t.location.search);n.set(i,e),t.replace({...t.location,search:n.toString()})}),[i,t])]}function m(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,i=h(e),[l,d]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:i}))),[o,u]=x({queryString:r,groupId:t}),[m,j]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,i]=(0,c.Dv)(r);return[t,(0,s.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:t}),f=(()=>{const e=o??m;return p({value:e,tabValues:i})?e:null})();(0,a.A)((()=>{f&&d(f)}),[f]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),j(e)}),[u,j,i]),tabValues:i}}var j=r(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(74848);function v(e){let{className:n,block:r,selectedValue:s,selectValue:l,tabValues:a}=e;const d=[],{blockElementScrollPositionUntilNextRender:o}=(0,i.a_)(),c=e=>{const n=e.currentTarget,r=d.indexOf(n),t=a[r].value;t!==s&&(o(n),l(t))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=d.indexOf(e.currentTarget)+1;n=d[r]??d[0];break}case"ArrowLeft":{const r=d.indexOf(e.currentTarget)-1;n=d[r]??d[d.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":r},n),children:a.map((e=>{let{value:n,label:r,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>d.push(e),onKeyDown:u,onClick:c,...i,className:(0,t.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":s===n}),children:r??n},n)}))})}function g(e){let{lazy:n,children:r,selectedValue:t}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===t));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function w(e){const n=m(e);return(0,b.jsxs)("div",{className:(0,t.A)("tabs-container",f.tabList),children:[(0,b.jsx)(v,{...e,...n}),(0,b.jsx)(g,{...e,...n})]})}function y(e){const n=(0,j.A)();return(0,b.jsx)(w,{...e,children:u(e.children)},String(n))}},41447:(e,n,r)=>{r.d(n,{A:()=>s});const s={curl:"curl_orwx",python:"python_uXgC",nodejs:"nodejs_ucMl",powershell:"powershell_BcVw"}},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>a});var s=r(96540);const t={},i=s.createContext(t);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);