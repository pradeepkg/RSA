"use strict";(self.webpackChunkdocku=self.webpackChunkdocku||[]).push([[49777],{7559:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var t=n(74848),a=n(28453),s=n(11470),l=n(19365),i=n(41447);const o={sidebar_position:3},c="Create Admin Error",d={id:"admin/createAdminError",title:"Create Admin Error",description:"Create a new admin error.",source:"@site/docs/admin/createAdminError.md",sourceDirName:"admin",slug:"/admin/createAdminError",permalink:"/RSA/docs/admin/createAdminError",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1708638966e3,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"About",permalink:"/RSA/docs/admin/about"},next:{title:"Get Help Link",permalink:"/RSA/docs/admin/getHelpLink"}},u={},h=[{value:"Request Parameters",id:"request-parameters",level:3},{value:"Request Headers",id:"request-headers",level:3},{value:"Request Body",id:"request-body",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Examples",id:"response-examples",level:3}];function m(e){const r={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"create-admin-error",children:"Create Admin Error"}),"\n","\n",(0,t.jsx)(r.p,{children:"Create a new admin error."}),"\n",(0,t.jsxs)("p",{children:[(0,t.jsx)("span",{class:"method-post",children:"POST "}),(0,t.jsx)("span",{class:"method-post-text",children:(0,t.jsx)(r.a,{href:"https://instance.securid.com:443/aveksa/command.submit?cmd=createAdminError",children:"https://instance.securid.com:443/aveksa/command.submit?cmd=createAdminError"})})]}),"\n",(0,t.jsx)(r.h3,{id:"request-parameters",children:"Request Parameters"}),"\n",(0,t.jsxs)("table",{class:"table-container",children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("label",{class:"required",children:"command"})}),(0,t.jsx)("td",{children:"createAdminError"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"format"}),(0,t.jsxs)("td",{children:[(0,t.jsxs)("p",{children:[(0,t.jsx)("code",{children:"properties"})," - (Default) ",(0,t.jsx)("code",{children:"key=value"}),". most useful when requesting a single object. If multiple objects are returned, values is a csv. ie ",(0,t.jsx)("code",{children:"key=value1,value2,value3"})," where value1 is the value for the first object, value2 is the value for the 2nd object, etc."]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("code",{children:"json"})," - Useful format for parsing into javascript or other languages. See ",(0,t.jsx)("a",{href:"https://www.json.org",target:"_blank",children:(0,t.jsx)(r.a,{href:"http://www.json.org",children:"www.json.org"})})," for details."]})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("label",{class:"required",children:"desc"})}),(0,t.jsx)("td",{children:"The high level description for the error"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"type"}),(0,t.jsxs)("td",{children:["Optional type that defaults to user defined if not specified. Valid values : ",(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"System"}),(0,t.jsx)("li",{children:"Workflow"}),(0,t.jsx)("li",{children:"Data_Collection"}),(0,t.jsx)("li",{children:"Identity_Data_Load"}),(0,t.jsx)("li",{children:"Entitlement_Data_Load"}),(0,t.jsx)("li",{children:"Reference_Resolution"}),(0,t.jsx)("li",{children:"Role_Data_Load"}),(0,t.jsx)("li",{children:"Account_Data_Load"}),(0,t.jsx)("li",{children:"Identity_Unification"}),(0,t.jsx)("li",{children:"Rule_Execution"}),(0,t.jsx)("li",{children:"User_Defined_Action"}),(0,t.jsx)("li",{children:"EntitlementReview"}),(0,t.jsx)("li",{children:"Delete_Users"}),(0,t.jsx)("li",{children:"Activity_Handler"}),(0,t.jsx)("li",{children:"Metadata_Load"}),(0,t.jsx)("li",{children:"Data_Access_Data_Load"}),(0,t.jsx)("li",{children:"Security"}),(0,t.jsx)("li",{children:"User_Lockout"})]})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"priority"}),(0,t.jsxs)("td",{children:["The priority for the admin error. Valid values : ",(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"Low"}),(0,t.jsx)("li",{children:"Medium"}),(0,t.jsx)("li",{children:"High"})]})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"request-headers",children:"Request Headers"}),"\n",(0,t.jsxs)("table",{class:"table-container",children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("label",{class:"required",children:"Authorization"})}),(0,t.jsxs)("td",{children:["Bearer ",(0,t.jsx)("code",{children:"<token>"})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Accept"}),(0,t.jsx)("td",{children:"application/json"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Content-Type"}),(0,t.jsx)("td",{children:"text/plain"})]})]}),"\n",(0,t.jsx)(r.h3,{id:"request-body",children:"Request Body"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-text",children:"Error details in text format\n"})}),"\n",(0,t.jsx)(r.h3,{id:"response-parameters",children:"Response Parameters"}),"\n",(0,t.jsxs)("table",{class:"table-container",children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"type"})}),(0,t.jsx)("td",{children:"Executed command name"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"id"})}),(0,t.jsx)("td",{children:"The id of the error that was created"})]})]}),"\n",(0,t.jsx)(r.h3,{id:"request-example",children:"Request Example"}),"\n",(0,t.jsxs)(s.A,{className:"unique-tabs",children:[(0,t.jsx)(l.A,{value:"Curl",attributes:{className:i.A.curl},children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:'curl -K -X POST  \\\r\n"https://instance.securid.com:443/aveksa/command.submit?cmd=createAdminError&desc=ExampleError&priority=Low" \\\r\n-H "Authorization: Bearer <token>" \\\r\n-H "Content-Type: application/json"\n'})})}),(0,t.jsx)(l.A,{value:"Python",attributes:{className:i.A.python},children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:'import requests, json\r\n\r\nurl = "https://instance.securid.com:443/aveksa/command.submit"\r\n\r\nparams = {\r\n    "cmd": "createAdminError",\r\n    "format": "json",\r\n    "desc": "Admin error created using REST API",\r\n    "priority": "Medium",\r\n    "type": "System"\r\n}\r\n\r\nheaders = {\r\n    \'Authorization\': \'Bearer <token>\',\r\n    \'Content-Type\': \'application/json\'\r\n}\r\n\r\npayload = "Sample error details"\r\n\r\nresponse = requests.post(url, data=payload, params=params, headers=headers)\r\n\r\nif response.status_code == 200:\r\n    data = response.json()\r\n    print(data)\r\nelse:\r\n    print(f"Request failed with status code {response.status_code}")\n'})})}),(0,t.jsx)(l.A,{value:"Node.js",attributes:{className:i.A.nodejs},children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:'const axios = require(\'axios\');\r\n\r\nconst url = "https://instance.securid.com:443/aveksa/command.submit";\r\n\r\nconst params = {\r\n    cmd: "createAdminError",\r\n    format: "json",\r\n    desc: "Admin error created using REST API",\r\n    priority: "Medium",\r\n    type: "System"\r\n};\r\n\r\nconst headers = {\r\n    \'Authorization\': \'Bearer <token>\',\r\n    \'Content-Type\': \'application/json\'\r\n};\r\n\r\nconst payload = "Sample error details";\r\n\r\naxios.post(url, payload, { params, headers })\r\n    .then(response => {\r\n        if (response.status === 200) {\r\n            const data = response.data;\r\n            console.log(data);\r\n        } else {\r\n            console.log(`Request failed with status code ${response.status}`);\r\n        }\r\n    })\r\n    .catch(error => {\r\n        console.error(\'Error:\', error);\r\n    });\n'})})})]}),"\n",(0,t.jsx)(r.h3,{id:"response-examples",children:"Response Examples"}),"\n",(0,t.jsxs)(s.A,{className:"unique-tabs",children:[(0,t.jsx)(l.A,{value:"200",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-json",children:'{\r\n    "data": {\r\n        "type": "createAdminError",\r\n        "id": "3986"\r\n    }\r\n}\n'})})}),(0,t.jsx)(l.A,{value:"412 Invalid Type",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-html",children:"<html>\r\n    <head>\r\n        <title>Error</title>\r\n    </head>\r\n    <body>The type parameter must be a value of Data_Collection, Identity_Data_Load, \r\n        Entitlement_Data_Load, Reference_Resolution, Role_Data_Load, Account_Data_Load, \r\n        Identity_Unification, Rule_Execution, User_Defined_Action, System, Workflow, \r\n        EntitlementReview, Delete_Users, Activity_Handler, Metadata_Load, \r\n        Data_Access_Data_Load, Security, User_Lockout, Email_Processing, CircuitBreaker, \r\n        SystemStatusEvent, TelemetryDataCollection, Role_Hierarchy_Import\r\n Query String=cmd=createAdminError&amp;desc=Admin%20error%20created%20using%20REST%20API&amp;type=System1\r\n    </body>\r\n</html>\n"})})}),(0,t.jsx)(l.A,{value:"412 Missing Parameter",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-html",children:"<html>\r\n    <head>\r\n        <title>Error</title>\r\n    </head>\r\n    <body>The desc parameter is required\r\n            Query String=cmd=createAdminError&amp;format=json</body>\r\n</html>\n"})})})]})]})}function p(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},19365:(e,r,n)=>{n.d(r,{A:()=>l});n(96540);var t=n(34164);const a={tabItem:"tabItem_Ymn6"};var s=n(74848);function l(e){let{children:r,hidden:n,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,l),hidden:n,children:r})}},11470:(e,r,n)=>{n.d(r,{A:()=>A});var t=n(96540),a=n(34164),s=n(23104),l=n(56347),i=n(205),o=n(57485),c=n(31682),d=n(89466);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:n}=e;return(0,t.useMemo)((()=>{const e=r??function(e){return u(e).map((e=>{let{props:{value:r,label:n,attributes:t,default:a}}=e;return{value:r,label:n,attributes:t,default:a}}))}(n);return function(e){const r=(0,c.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function m(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function p(e){let{queryString:r=!1,groupId:n}=e;const a=(0,l.W6)(),s=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,o.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const r=new URLSearchParams(a.location.search);r.set(s,e),a.replace({...a.location,search:r.toString()})}),[s,a])]}function x(e){const{defaultValue:r,queryString:n=!1,groupId:a}=e,s=h(e),[l,o]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!m({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:s}))),[c,u]=p({queryString:n,groupId:a}),[x,j]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,s]=(0,d.Dv)(n);return[a,(0,t.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),f=(()=>{const e=c??x;return m({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{f&&o(f)}),[f]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),j(e)}),[u,j,s]),tabValues:s}}var j=n(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(74848);function v(e){let{className:r,block:n,selectedValue:t,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const r=e.currentTarget,n=o.indexOf(r),a=i[n].value;a!==t&&(c(r),l(a))},u=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;r=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;r=o[n]??o[o.length-1];break}}r?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},r),children:i.map((e=>{let{value:r,label:n,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>o.push(e),onKeyDown:u,onClick:d,...s,className:(0,a.A)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":t===r}),children:n??r},r)}))})}function y(e){let{lazy:r,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=s.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==a})))})}function g(e){const r=x(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",f.tabList),children:[(0,b.jsx)(v,{...e,...r}),(0,b.jsx)(y,{...e,...r})]})}function A(e){const r=(0,j.A)();return(0,b.jsx)(g,{...e,children:u(e.children)},String(r))}},41447:(e,r,n)=>{n.d(r,{A:()=>t});const t={curl:"curl_orwx",python:"python_uXgC",nodejs:"nodejs_ucMl",powershell:"powershell_BcVw"}},28453:(e,r,n)=>{n.d(r,{R:()=>l,x:()=>i});var t=n(96540);const a={},s=t.createContext(a);function l(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);