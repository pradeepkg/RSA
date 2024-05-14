"use strict";(self.webpackChunkdocku=self.webpackChunkdocku||[]).push([[2164],{84448:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=n(74848),s=n(28453),l=n(11470),a=n(19365);const i={sidebar_position:5},c="Collect Identities",o={id:"collection/collect-identities",title:"Collect Identities",description:"Run one or more identity collectors.",source:"@site/docs/collection/collect-identities.md",sourceDirName:"collection",slug:"/collection/collect-identities",permalink:"/RSA/docs/collection/collect-identities",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1714157031e3,sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Collect Entitlements",permalink:"/RSA/docs/collection/collect-entitlements"},next:{title:"Collect Multi-App Entitlement Collector",permalink:"/RSA/docs/collection/collect-MAEDC"}},u={},d=[{value:"Request Parameters",id:"request-parameters",level:3},{value:"Request Headers",id:"request-headers",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Examples",id:"response-examples",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"collect-identities",children:"Collect Identities"}),"\n","\n",(0,r.jsx)(t.p,{children:"Run one or more identity collectors."}),"\n",(0,r.jsxs)("p",{children:[(0,r.jsx)("span",{class:"method-get",children:"GET "}),(0,r.jsx)("span",{class:"method-get-text",children:(0,r.jsx)(t.a,{href:"https://instance.securid.com/aveksa/command.submit?cmd=collectIdentities",children:"https://instance.securid.com/aveksa/command.submit?cmd=collectIdentities"})})]}),"\n",(0,r.jsx)(t.h3,{id:"request-parameters",children:"Request Parameters"}),"\n",(0,r.jsxs)("table",{class:"table-container",children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("label",{class:"required",children:"command"})}),(0,r.jsx)("td",{children:"collectIdentities"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"format"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(t.code,{children:"properties"})," - (Default) ",(0,r.jsx)(t.code,{children:"key=value"}),". most useful when requesting a single object. If multiple objects are returned, values is a csv. ie ",(0,r.jsx)(t.code,{children:"key=value1,value2,value3"})," where value1 is the value for the first object, value2 is the value for the 2nd object, etc.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)(t.code,{children:"json"})," - Useful format for parsing into javascript or other languages. See ",(0,r.jsx)("a",{href:"https://www.json.org",target:"_blank",children:(0,r.jsx)(t.a,{href:"http://www.json.org",children:"www.json.org"})})," for details."]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"name"}),(0,r.jsx)("td",{children:"The friendly name of the collector. If no name is provided all collectors are processed."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"unify"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(t.code,{children:"true, false"})," Indicates if a subsequent unification should run."]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"force"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(t.code,{children:"true, false"}),' Indicates if a collection should be "forced", i.e. ignore circuit breaker thresholds.']})]})]}),"\n",(0,r.jsx)(t.h3,{id:"request-headers",children:"Request Headers"}),"\n",(0,r.jsxs)("table",{class:"table-container",children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("label",{class:"required",children:"Authorization"})}),(0,r.jsxs)("td",{children:["Bearer ",(0,r.jsx)(t.code,{children:"&lt;token&gt;"})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Accept"}),(0,r.jsx)("td",{children:"application/json"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Content-Type"}),(0,r.jsx)("td",{children:"application/json"})]})]}),"\n",(0,r.jsx)(t.h3,{id:"response-parameters",children:"Response Parameters"}),"\n",(0,r.jsxs)("table",{class:"table-container",children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.code,{children:"type"})}),(0,r.jsx)("td",{children:"Executed command name"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.code,{children:"run-id"})}),(0,r.jsx)("td",{children:"The id assigned to the collection."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.code,{children:"run-source-xx"})}),(0,r.jsx)("td",{children:"The names of the collectors that we processed as part of this run where xx is the run id."})]})]}),"\n",(0,r.jsx)(t.h3,{id:"request-example",children:"Request Example"}),"\n",(0,r.jsxs)(l.A,{className:"unique-tabs",children:[(0,r.jsx)(a.A,{value:"Curl",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'curl -K -X GET  \\\n"https://instance.securid.com/aveksa/command.submit?cmd=collectIdentities&format=json&unify=true" \\\n-H "Authorization: Bearer <token>" \\\n-H "Content-Type: application/json"\n'})})}),(0,r.jsx)(a.A,{value:"Python",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'import requests, json\n\nurl = "https://instance.securid.com/aveksa/command.submit"\n\nparams = {\n    "cmd": "collectIdentities",\n    "format": "json",\n    "name": "HR Users",\n    "unify": "true",\n    "force": "false"\n}\n\nheaders = {\n    \'Authorization\': \'Bearer <token>\',\n    \'Content-Type\': \'application/json\'\n}\n\nresponse = requests.get(url, params=params, headers=headers)\n\nif response.status_code == 200:\n    data = response.json()\n    print(data)\nelse:\n    print(f"Request failed with status code {response.status_code}")\n'})})})]}),"\n",(0,r.jsx)(t.h3,{id:"response-examples",children:"Response Examples"}),"\n",(0,r.jsxs)(l.A,{className:"unique-tabs",children:[(0,r.jsx)(a.A,{value:"200 Single IDC",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n    "data": {\n        "type": "collectIdentities",\n        "run-id": "5733,5734",\n        "run-source-5733": "HR Users"\n    }\n}\n'})})}),(0,r.jsx)(a.A,{value:"200 All IDCs",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n    "data": {\n        "type": "collectIdentities",\n        "run-source-5743": "SAP SuccessFactors IDC",\n        "run-id": "5744,5745,5746,5747,5748,5749,5742",\n        "run-source-5748": "HR Database (Internal)",\n        "run-source-5747": "SecZetta IDC (Rester)",\n        "run-source-5746": "UltiPro IDC - Rester",\n        "run-source-5745": "SAP Fieldglass IDC",\n        "run-source-5744": "HR Users"\n    }\n}\n'})})}),(0,r.jsx)(a.A,{value:"404 Invalid Parameter",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:"<html>\n  <head>\n    <title>Error</title>\n  </head>\n  <body>Error running a collection for the identity collector D \n    Query String=cmd=collectIdentities&amp;format=json&amp;name=D&amp;unify=true&amp;force=false</body>\n</html>\n"})})}),(0,r.jsx)(a.A,{value:"409",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:"<html>\n  <head>\n    <title>Error</title>\n  </head>\n  <body>Cannot schedule Identity Collections and/or Unification because they are already in the queue for \n    processing Query String=cmd=collectIdentities&amp;format=json&amp;unify=true&amp;force=false</body>\n</html>\n"})})})]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var r=n(34164);const s={tabItem:"tabItem_Ymn6"};var l=n(74848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,a),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>I});var r=n(96540),s=n(34164),l=n(23104),a=n(56347),i=n(205),c=n(57485),o=n(31682),u=n(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,o.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const s=(0,a.W6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(s.location.search);t.set(l,e),s.replace({...s.location,search:t.toString()})}),[l,s])]}function x(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,l=h(e),[a,c]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[o,d]=m({queryString:n,groupId:s}),[x,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,l]=(0,u.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:s}),j=(()=>{const e=o??x;return p({value:e,tabValues:l})?e:null})();(0,i.A)((()=>{j&&c(j)}),[j]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),f(e)}),[d,f,l]),tabValues:l}}var f=n(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(74848);function v(e){let{className:t,block:n,selectedValue:r,selectValue:a,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,l.a_)(),u=e=>{const t=e.currentTarget,n=c.indexOf(t),s=i[n].value;s!==r&&(o(t),a(s))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>c.push(e),onKeyDown:d,onClick:u,...l,className:(0,s.A)("tabs__item",j.tabItem,l?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function g(e){let{lazy:t,children:n,selectedValue:s}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=x(e);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",j.tabList),children:[(0,b.jsx)(v,{...t,...e}),(0,b.jsx)(g,{...t,...e})]})}function I(e){const t=(0,f.A)();return(0,b.jsx)(y,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var r=n(96540);const s={},l=r.createContext(s);function a(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);