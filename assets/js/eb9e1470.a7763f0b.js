"use strict";(self.webpackChunkdocku=self.webpackChunkdocku||[]).push([[2766],{63510:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var t=r(74848),s=r(28453),a=r(11470),l=r(19365);const c={sidebar_position:4},o="Collect Entitlements",i={id:"collection/collect-entitlements",title:"Collect Entitlements",description:"Run one or more account collectors.",source:"@site/docs/collection/collect-entitlements.md",sourceDirName:"collection",slug:"/collection/collect-entitlements",permalink:"/RSA/docs/collection/collect-entitlements",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1715787065e3,sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Collect Data Access",permalink:"/RSA/docs/collection/collect-data-access"},next:{title:"Collect Identities",permalink:"/RSA/docs/collection/collect-identities"}},u={},d=[{value:"Request",id:"request",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Headers",id:"headers",level:3},{value:"Response",id:"response",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Examples",id:"examples",level:2},{value:"Request",id:"request-1",level:3},{value:"Response",id:"response-1",level:3}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"collect-entitlements",children:"Collect Entitlements"}),"\n","\n",(0,t.jsx)(n.p,{children:"Run one or more account collectors."}),"\n",(0,t.jsxs)("p",{children:[(0,t.jsx)("span",{class:"method-get",children:"GET "}),(0,t.jsx)("span",{class:"method-get-text",children:(0,t.jsx)(n.a,{href:"https://instance.securid.com/aveksa/command.submit?cmd=collectEntitlements",children:"https://instance.securid.com/aveksa/command.submit?cmd=collectEntitlements"})})]}),"\n",(0,t.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,t.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)("table",{class:"table-container",children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("label",{class:"required",children:"command"})}),(0,t.jsx)("td",{children:"collectEntitlements"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"format"}),(0,t.jsxs)("td",{children:[(0,t.jsx)(n.code,{children:"properties"})," - (Default) ",(0,t.jsx)(n.code,{children:"key=value"}),". most useful when requesting a single object. If multiple objects are returned, values is a csv. ie ",(0,t.jsx)(n.code,{children:"key=value1,value2,value3"})," where value1 is the value for the first object, value2 is the value for the 2nd object, etc.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)(n.code,{children:"json"})," - Useful format for parsing into javascript or other languages. See ",(0,t.jsx)("a",{href:"https://www.json.org",target:"_blank",children:(0,t.jsx)(n.a,{href:"http://www.json.org",children:"www.json.org"})})," for details."]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"name"}),(0,t.jsx)("td",{children:"The friendly name of the collector. If no name is provided all collectors are processed."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"application"}),(0,t.jsx)("td",{children:"The friendly name of the application. If no name is provided all applications are processed."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"force"}),(0,t.jsxs)("td",{children:[(0,t.jsx)(n.code,{children:"true, false"}),' Indicates if a collection should be "forced", i.e. ignore circuit breaker thresholds.']})]})]}),"\n",(0,t.jsx)(n.h3,{id:"headers",children:"Headers"}),"\n",(0,t.jsxs)("table",{class:"table-container",children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("label",{class:"required",children:"Authorization"})}),(0,t.jsxs)("td",{children:["Bearer ",(0,t.jsx)(n.code,{children:"token"})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Accept"}),(0,t.jsx)("td",{children:"application/json"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Content-Type"}),(0,t.jsx)("td",{children:"application/json"})]})]}),"\n",(0,t.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,t.jsx)(n.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,t.jsxs)("table",{class:"table-container",children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(n.code,{children:"type"})}),(0,t.jsx)("td",{children:"Executed command name"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(n.code,{children:"run-id"})}),(0,t.jsx)("td",{children:"The id assigned to the collection."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(n.code,{children:"run-source-xx"})}),(0,t.jsx)("td",{children:"The names of the collectors that we processed as part of this run where xx is the run id."})]})]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.h3,{id:"request-1",children:"Request"}),"\n",(0,t.jsxs)(a.A,{className:"unique-tabs",children:[(0,t.jsx)(l.A,{value:"Curl",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'curl -K -X GET  \\\n"https://instance.securid.com/aveksa/command.submit?cmd=collectEntitlements&format=json&application=app1" \\\n-H "Authorization: Bearer <token>" \\\n-H "Content-Type: application/json"\n'})})}),(0,t.jsx)(l.A,{value:"Python",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import requests, json\n\nurl = "https://instance.securid.com/aveksa/command.submit"\n\nparams = {\n    "cmd": "collectEntitlements",\n    "format": "json",\n    "application": "SAP SuccessFactors",\n    "force": "true"\n}\n\nheaders = {\n    \'Authorization\': \'Bearer <token>\',\n    \'Content-Type\': \'application/json\'\n}\n\nresponse = requests.get(url, params=params, headers=headers)\n\nif response.status_code == 200:\n    data = response.json()\n    print(data)\nelse:\n    print(f"Request failed with status code {response.status_code}")\n'})})})]}),"\n",(0,t.jsx)(n.h3,{id:"response-1",children:"Response"}),"\n",(0,t.jsxs)(a.A,{className:"unique-tabs",children:[(0,t.jsx)(l.A,{value:"200 Single Application",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "data": {\n        "type": "collectEntitlements",\n        "run-id": "5649",\n        "run-source-5649": "SAP SuccessFactors EDC"\n    }\n}\n'})})}),(0,t.jsx)(l.A,{value:"200 All Applications",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "data": {\n        "type": "collectEntitlements",\n        "run-source-5727": "Azure AD EDC",\n        "run-source-5725": "WebFOCUS BI & Analytics EDC",\n        "run-source-5723": "SQL Server Databases - EDC1",\n        "run-source-5721": "ServiceNow EDC",\n        "run-source-5659": "Zendesk EDC",\n        "run-source-5689": "Genesys Cloud EDC",\n        "run-source-5657": "Azure DevOps EDC",\n        "run-source-5687": "Sentry EDC - Roles",\n        "run-source-5655": "SAP SuccessFactors EDC",\n        "run-source-5685": "Sentry EDC - Projects",\n        "run-source-5653": "CyberArk (REST) - Safes - EDC",\n        "run-source-5683": "Sumo Logic EDC",\n        "run-source-5651": "Aveksa EDC",\n        "run-source-5681": "Lucidchart EDC",\n        "run-source-5717": "Oracle PeopleTools (PeopleSoft) EDC",\n        "run-source-5715": "Oracle HCM Cloud EDC",\n        "run-source-5711": "Oracle Databases - EDC",\n        "run-id": "5697,5699,5701,5703,5705,5707,5709,5711,5651,5715,5653,5717,5655,5657,5721,5659,5723,5661,5725,5663,5727,5665,5729,5667,5731,5671,5673,5675,5677,5679,5681,5683,5685,5687,5689,5691,5693,5695",\n        "run-source-5679": "Datadog EDC",\n        "run-source-5677": "Asana EDC",\n        "run-source-5675": "Zoho CRM EDC",\n        "run-source-5673": "PagerDuty EDC",\n        "run-source-5671": "Tableau EDC",\n        "run-source-5709": "Okta EDC",\n        "run-source-5707": "Microsoft Dynamics 365 EDC",\n        "run-source-5705": "IBM iSeries (AS400) eDC",\n        "run-source-5703": "AWS IAM EDC",\n        "run-source-5701": "Cherwell EDC",\n        "run-source-5731": "SecZetta EDC (Rester)",\n        "run-source-5667": "PingOne EDC",\n        "run-source-5699": "CA Workload Automation EDC",\n        "run-source-5665": "Qlik EDC",\n        "run-source-5697": "Authentication Manager EDC",\n        "run-source-5695": "Amazon AWS IAM EDC",\n        "run-source-5663": "DocuSign EDC",\n        "run-source-5693": "Freshservice EDC",\n        "run-source-5661": "Zendesk 2 EDC",\n        "run-source-5691": "Aha! EDC",\n        "run-source-5729": "Jira Cloud EDC"\n    }\n}\n'})})}),(0,t.jsx)(l.A,{value:"404 Invalid Parameter",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:"<html>\n  <head>\n    <title>Error</title>\n  </head>\n  <body>No eligible collectors found for the application SAP SuccessFactor \n    Query String=cmd=collectEntitlements&amp;format=json&amp;name&amp;application=SAP%20SuccessFactor&amp;force=true</body>\n</html>\n"})})})]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>l});r(96540);var t=r(34164);const s={tabItem:"tabItem_Ymn6"};var a=r(74848);function l(e){let{children:n,hidden:r,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,l),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>g});var t=r(96540),s=r(34164),a=r(23104),l=r(56347),c=r(205),o=r(57485),i=r(31682),u=r(89466);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:s}}=e;return{value:n,label:r,attributes:t,default:s}}))}(r);return function(e){const n=(0,i.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const s=(0,l.W6)(),a=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,o.aZ)(a),(0,t.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function j(e){const{defaultValue:n,queryString:r=!1,groupId:s}=e,a=h(e),[l,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:a}))),[i,d]=m({queryString:r,groupId:s}),[j,x]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,u.Dv)(r);return[s,(0,t.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:s}),f=(()=>{const e=i??j;return p({value:e,tabValues:a})?e:null})();(0,c.A)((()=>{f&&o(f)}),[f]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),x(e)}),[d,x,a]),tabValues:a}}var x=r(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(74848);function v(e){let{className:n,block:r,selectedValue:t,selectValue:l,tabValues:c}=e;const o=[],{blockElementScrollPositionUntilNextRender:i}=(0,a.a_)(),u=e=>{const n=e.currentTarget,r=o.indexOf(n),s=c[r].value;s!==t&&(i(n),l(s))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;n=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;n=o[r]??o[o.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},n),children:c.map((e=>{let{value:n,label:r,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...a,className:(0,s.A)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function E(e){let{lazy:n,children:r,selectedValue:s}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function C(e){const n=j(e);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,b.jsx)(v,{...n,...e}),(0,b.jsx)(E,{...n,...e})]})}function g(e){const n=(0,x.A)();return(0,b.jsx)(C,{...e,children:d(e.children)},String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>c});var t=r(96540);const s={},a=t.createContext(s);function l(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);