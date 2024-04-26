"use strict";(self.webpackChunkdocku=self.webpackChunkdocku||[]).push([[97729],{10458:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>u,toc:()=>d});var s=r(74848),t=r(28453),c=r(11470),o=r(19365);const a={sidebar_position:1},l="Collect Accounts",u={id:"collection/collect-accounts",title:"Collect Accounts",description:"Run one or more account collectors.",source:"@site/docs/collection/collect-accounts.md",sourceDirName:"collection",slug:"/collection/collect-accounts",permalink:"/RSA/docs/collection/collect-accounts",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1714157031e3,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Collection",permalink:"/RSA/docs/category/collection"},next:{title:"Collect App Metadata",permalink:"/RSA/docs/collection/collect-app-metadata"}},i={},d=[{value:"Request Parameters",id:"request-parameters",level:3},{value:"Request Headers",id:"request-headers",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Examples",id:"response-examples",level:3}];function h(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"collect-accounts",children:"Collect Accounts"}),"\n","\n",(0,s.jsx)(n.p,{children:"Run one or more account collectors."}),"\n",(0,s.jsxs)("p",{children:[(0,s.jsx)("span",{class:"method-get",children:"GET "}),(0,s.jsx)("span",{class:"method-get-text",children:(0,s.jsx)(n.a,{href:"https://instance.securid.com/aveksa/command.submit?cmd=collectAccounts",children:"https://instance.securid.com/aveksa/command.submit?cmd=collectAccounts"})})]}),"\n",(0,s.jsx)(n.h3,{id:"request-parameters",children:"Request Parameters"}),"\n",(0,s.jsxs)("table",{class:"table-container",children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("label",{class:"required",children:"command"})}),(0,s.jsx)("td",{children:"collectAccounts"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"format"}),(0,s.jsxs)("td",{children:[(0,s.jsx)(n.code,{children:"properties"})," - (Default) ",(0,s.jsx)(n.code,{children:"key=value"}),". most useful when requesting a single object. If multiple objects are returned, values is a csv. ie ",(0,s.jsx)(n.code,{children:"key=value1,value2,value3"})," where value1 is the value for the first object, value2 is the value for the 2nd object, etc.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)(n.code,{children:"json"})," - Useful format for parsing into javascript or other languages. See ",(0,s.jsx)("a",{href:"https://www.json.org",target:"_blank",children:(0,s.jsx)(n.a,{href:"http://www.json.org",children:"www.json.org"})})," for details."]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"name"}),(0,s.jsx)("td",{children:"The friendly name of the collector. If no name is provided all collectors are processed."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"businessSource"}),(0,s.jsx)("td",{children:"The friendly name of the business source. If no business source is provided all business sources are processed."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"force"}),(0,s.jsxs)("td",{children:[(0,s.jsx)(n.code,{children:"true, false"}),' Indicates if a collection should be "forced", i.e. ignore circuit breaker thresholds.']})]})]}),"\n",(0,s.jsx)(n.h3,{id:"request-headers",children:"Request Headers"}),"\n",(0,s.jsxs)("table",{class:"table-container",children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("label",{class:"required",children:"Authorization"})}),(0,s.jsxs)("td",{children:["Bearer ",(0,s.jsx)(n.code,{children:"&lt;token&gt;"})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Accept"}),(0,s.jsx)("td",{children:"application/json"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Content-Type"}),(0,s.jsx)("td",{children:"application/json"})]})]}),"\n",(0,s.jsx)(n.h3,{id:"response-parameters",children:"Response Parameters"}),"\n",(0,s.jsxs)("table",{class:"table-container",children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:"type"})}),(0,s.jsx)("td",{children:"Executed command name"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:"run-id"})}),(0,s.jsx)("td",{children:"The id assigned to the collection."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:"run-source-xx"})}),(0,s.jsx)("td",{children:"The names of the collectors that we processed as part of this run where xx is the run id."})]})]}),"\n",(0,s.jsx)(n.h3,{id:"request-example",children:"Request Example"}),"\n",(0,s.jsxs)(c.A,{className:"unique-tabs",children:[(0,s.jsx)(o.A,{value:"Curl",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'curl -K -X GET  \\\n"https://instance.securid.com/aveksa/command.submit?cmd=collectAccounts&format=json&name=Collector1" \\\n-H "Authorization: Bearer <token>" \\\n-H "Content-Type: application/json"\n'})})}),(0,s.jsx)(o.A,{value:"Python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import requests, json\n\nurl = "https://instance.securid.com/aveksa/command.submit"\n\nparams = {\n    "cmd": "collectAccounts",\n    "format": "json",\n    "force": "false"\n}\n\nheaders = {\n    \'Authorization\': \'Bearer <token>\',\n    \'Content-Type\': \'application/json\'\n}\n\nresponse = requests.get(url, params=params, headers=headers)\n\nif response.status_code == 200:\n    data = response.json()\n    print(data)\nelse:\n    print(f"Request failed with status code {response.status_code}")\n'})})})]}),"\n",(0,s.jsx)(n.h3,{id:"response-examples",children:"Response Examples"}),"\n",(0,s.jsxs)(c.A,{className:"unique-tabs",children:[(0,s.jsx)(o.A,{value:"200 Single ADC",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "data": {\n        "type": "collectAccounts",\n        "run-source-5514": "SAP SuccessFactors ADC",\n        "run-id": "5514"\n    }\n}\n'})})}),(0,s.jsx)(o.A,{value:"200 All ADCs",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "data": {\n        "type": "collectAccounts",\n        "run-source-5593": "Oracle Databases - ADC1",\n        "run-source-5591": "Okta ADC",\n        "run-source-5629": "GitLab ADC",\n        "run-source-5627": "MangoApps ADC",\n        "run-source-5623": "Azure AD ADC",\n        "run-source-5528": "SAP SuccessFactors ADC",\n        "run-source-5526": "CyberArk (REST) - User Accounts & Groups ADC",\n        "run-source-5558": "Authentication Manager ADC",\n        "run-source-5589": "Microsoft Dynamics 365 ADC",\n        "run-source-5587": "Genesys Cloud ADC",\n        "run-source-5555": "Asana ADC",\n        "run-source-5522": "GitHub Enterprise Cloud ADC",\n        "run-source-5585": "IBM iSeries (AS400) ADC",\n        "run-source-5520": "Aveksa ADC",\n        "run-source-5552": "Amazon AWS IAM ADC",\n        "run-source-5583": "Dropbox Business ADC",\n        "run-source-5550": "Zoho CRM ADC",\n        "run-source-5581": "Sentry ADC",\n        "run-id": "5633,5635,5637,5520,5522,5526,5528,5530,5532,5534,5536,5538,5540,5542,5544,5546,5548,5550,5552,5555,5558,5562,5564,5566,5569,5571,5573,5575,5577,5579,5581,5583,5585,5587,5589,5591,5593,5595,5597,5599,5601,5603,5605,5607,5609,5611,5613,5615,5617,5619,5623,5627,5629,5631",\n        "run-source-5619": "Active Directory ADC",\n        "run-source-5617": "MangoApps ADC (Sandbox)",\n        "run-source-5615": "WebFOCUS BI & Analytics ADC",\n        "run-source-5613": "UNIX Servers ADC",\n        "run-source-5611": "SQL Server Databases - ADC",\n        "run-source-5548": "Freshservice ADC",\n        "run-source-5579": "Deltek Costpoint ADC",\n        "run-source-5546": "PagerDuty ADC",\n        "run-source-5577": "DataReach Windows Account Collector",\n        "run-source-5544": "Tableau ADC",\n        "run-source-5575": "Sumo Logic ADC",\n        "run-source-5542": "PingOne ADC",\n        "run-source-5573": "Cherwell ADC",\n        "run-source-5540": "Dynatrace ADC",\n        "run-source-5571": "CA Workload Automation ADC",\n        "run-source-5609": "ServiceNow ADC",\n        "run-source-5607": "Salesforce ADC",\n        "run-source-5605": "Oracle PeopleTools (PeopleSoft) ADC",\n        "run-source-5637": "Jira Cloud ADC",\n        "run-source-5603": "Miro ADC",\n        "run-source-5635": "SecZetta ADC (Rester)",\n        "run-source-5601": "Oracle Multi-App ADC",\n        "run-source-5633": "UltiPro ADC (Rester)",\n        "run-source-5631": "NetSuite ADC",\n        "run-source-5538": "Qlik ADC",\n        "run-source-5569": "Lucidchart ADC",\n        "run-source-5536": "DocuSign ADC",\n        "run-source-5599": "Litmos ADC",\n        "run-source-5534": "Zendesk ADC",\n        "run-source-5566": "Box Business ADC",\n        "run-source-5597": "Oracle HCM Cloud ADC",\n        "run-source-5532": "Zendesk 2 ADC",\n        "run-source-5564": "AWS IAM  ADC",\n        "run-source-5595": "Aha! ADC",\n        "run-source-5530": "Azure DevOps ADC",\n        "run-source-5562": "Datadog ADC"\n    }\n}\n'})})}),(0,s.jsx)(o.A,{value:"401 Missing Permissions",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"<html>\n  <head>\n    <title>Error</title>\n  </head>\n  <body>The token is not valid for the command 'collectAccounts'. </body>\n</html>\n"})})}),(0,s.jsx)(o.A,{value:"401 Invalid Token",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"<html>\n  <head>\n    <title>Error</title>\n  </head>\n  <body>The token is not valid for the command 'collectAccounts'. Token is invalid or expired</body>\n</html>\n"})})}),(0,s.jsx)(o.A,{value:"404 Invalid Parameter",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"<html>\n  <head>\n    <title>Error</title>\n  </head>\n  <body>Error running a collection for the application SAP SuccessFactor \n            Query String=cmd=collectAccounts&amp;format=json&amp;businessSource=SAP%20SuccessFactor&amp;force=false</body>\n</html>\n"})})})]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>o});r(96540);var s=r(34164);const t={tabItem:"tabItem_Ymn6"};var c=r(74848);function o(e){let{children:n,hidden:r,className:o}=e;return(0,c.jsx)("div",{role:"tabpanel",className:(0,s.A)(t.tabItem,o),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>D});var s=r(96540),t=r(34164),c=r(23104),o=r(56347),a=r(205),l=r(57485),u=r(31682),i=r(89466);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:s,default:t}}=e;return{value:n,label:r,attributes:s,default:t}}))}(r);return function(e){const n=(0,u.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const t=(0,o.W6)(),c=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,l.aZ)(c),(0,s.useCallback)((e=>{if(!c)return;const n=new URLSearchParams(t.location.search);n.set(c,e),t.replace({...t.location,search:n.toString()})}),[c,t])]}function A(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,c=h(e),[o,l]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:c}))),[u,d]=m({queryString:r,groupId:t}),[A,x]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,c]=(0,i.Dv)(r);return[t,(0,s.useCallback)((e=>{r&&c.set(e)}),[r,c])]}({groupId:t}),j=(()=>{const e=u??A;return p({value:e,tabValues:c})?e:null})();(0,a.A)((()=>{j&&l(j)}),[j]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:c}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),x(e)}),[d,x,c]),tabValues:c}}var x=r(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=r(74848);function b(e){let{className:n,block:r,selectedValue:s,selectValue:o,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,c.a_)(),i=e=>{const n=e.currentTarget,r=l.indexOf(n),t=a[r].value;t!==s&&(u(n),o(t))},d=e=>{let n=null;switch(e.key){case"Enter":i(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;n=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;n=l[r]??l[l.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":r},n),children:a.map((e=>{let{value:n,label:r,attributes:c}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>l.push(e),onKeyDown:d,onClick:i,...c,className:(0,t.A)("tabs__item",j.tabItem,c?.className,{"tabs__item--active":s===n}),children:r??n},n)}))})}function v(e){let{lazy:n,children:r,selectedValue:t}=e;const c=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=c.find((e=>e.props.value===t));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:c.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function C(e){const n=A(e);return(0,f.jsxs)("div",{className:(0,t.A)("tabs-container",j.tabList),children:[(0,f.jsx)(b,{...e,...n}),(0,f.jsx)(v,{...e,...n})]})}function D(e){const n=(0,x.A)();return(0,f.jsx)(C,{...e,children:d(e.children)},String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>a});var s=r(96540);const t={},c=s.createContext(t);function o(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);