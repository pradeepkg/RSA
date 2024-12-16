"use strict";(self.webpackChunkdocku=self.webpackChunkdocku||[]).push([[2164],{41380:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"collection/collect-identities","title":"Collect Identities","description":"Run one or more identity collectors.","source":"@site/docs/collection/collect-identities.md","sourceDirName":"collection","slug":"/collection/collect-identities","permalink":"/RSA/docs/collection/collect-identities","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1715787065000,"sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"Collect Entitlements","permalink":"/RSA/docs/collection/collect-entitlements"},"next":{"title":"Collect Multi-App Entitlement Collector","permalink":"/RSA/docs/collection/collect-MAEDC"}}');var s=n(74848),l=n(28453),a=n(98120),i=n(19365);const c={sidebar_position:5},o="Collect Identities",d={},u=[{value:"Request",id:"request",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Headers",id:"headers",level:3},{value:"Response",id:"response",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Examples",id:"examples",level:2},{value:"Request",id:"request-1",level:3},{value:"Response",id:"response-1",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"collect-identities",children:"Collect Identities"})}),"\n","\n",(0,s.jsx)(t.p,{children:"Run one or more identity collectors."}),"\n",(0,s.jsxs)("p",{children:[(0,s.jsx)("span",{class:"method-get",children:"GET "}),(0,s.jsx)("span",{class:"method-get-text",children:(0,s.jsx)(t.a,{href:"https://instance.securid.com/aveksa/command.submit?cmd=collectIdentities",children:"https://instance.securid.com/aveksa/command.submit?cmd=collectIdentities"})})]}),"\n",(0,s.jsx)(t.h2,{id:"request",children:"Request"}),"\n",(0,s.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)("table",{class:"table-container",children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("label",{class:"required",children:"command"})}),(0,s.jsx)("td",{children:"collectIdentities"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"format"}),(0,s.jsxs)("td",{children:[(0,s.jsx)(t.code,{children:"properties"})," - (Default) ",(0,s.jsx)(t.code,{children:"key=value"}),". most useful when requesting a single object. If multiple objects are returned, values is a csv. ie ",(0,s.jsx)(t.code,{children:"key=value1,value2,value3"})," where value1 is the value for the first object, value2 is the value for the 2nd object, etc.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)(t.code,{children:"json"})," - Useful format for parsing into javascript or other languages. See ",(0,s.jsx)("a",{href:"https://www.json.org",target:"_blank",children:(0,s.jsx)(t.a,{href:"http://www.json.org",children:"www.json.org"})})," for details."]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"name"}),(0,s.jsx)("td",{children:"The friendly name of the collector. If no name is provided all collectors are processed."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"unify"}),(0,s.jsxs)("td",{children:[(0,s.jsx)(t.code,{children:"true, false"})," Indicates if a subsequent unification should run."]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"force"}),(0,s.jsxs)("td",{children:[(0,s.jsx)(t.code,{children:"true, false"}),' Indicates if a collection should be "forced", i.e. ignore circuit breaker thresholds.']})]})]}),"\n",(0,s.jsx)(t.h3,{id:"headers",children:"Headers"}),"\n",(0,s.jsxs)("table",{class:"table-container",children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("label",{class:"required",children:"Authorization"})}),(0,s.jsxs)("td",{children:["Bearer ",(0,s.jsx)(t.code,{children:"token"})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Accept"}),(0,s.jsx)("td",{children:"application/json"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Content-Type"}),(0,s.jsx)("td",{children:"application/json"})]})]}),"\n",(0,s.jsx)(t.h2,{id:"response",children:"Response"}),"\n",(0,s.jsx)(t.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,s.jsxs)("table",{class:"table-container",children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(t.code,{children:"type"})}),(0,s.jsx)("td",{children:"Executed command name"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(t.code,{children:"run-id"})}),(0,s.jsx)("td",{children:"The id assigned to the collection."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(t.code,{children:"run-source-xx"})}),(0,s.jsx)("td",{children:"The names of the collectors that we processed as part of this run where xx is the run id."})]})]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.h3,{id:"request-1",children:"Request"}),"\n",(0,s.jsxs)(a.A,{className:"unique-tabs",children:[(0,s.jsx)(i.A,{value:"Curl",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'curl -K -X GET  \\\n"https://instance.securid.com/aveksa/command.submit?cmd=collectIdentities&format=json&unify=true" \\\n-H "Authorization: Bearer <token>" \\\n-H "Content-Type: application/json"\n'})})}),(0,s.jsx)(i.A,{value:"Python",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'import requests, json\n\nurl = "https://instance.securid.com/aveksa/command.submit"\n\nparams = {\n    "cmd": "collectIdentities",\n    "format": "json",\n    "name": "HR Users",\n    "unify": "true",\n    "force": "false"\n}\n\nheaders = {\n    \'Authorization\': \'Bearer <token>\',\n    \'Content-Type\': \'application/json\'\n}\n\nresponse = requests.get(url, params=params, headers=headers)\n\nif response.status_code == 200:\n    data = response.json()\n    print(data)\nelse:\n    print(f"Request failed with status code {response.status_code}")\n'})})})]}),"\n",(0,s.jsx)(t.h3,{id:"response-1",children:"Response"}),"\n",(0,s.jsxs)(a.A,{className:"unique-tabs",children:[(0,s.jsx)(i.A,{value:"200 Single IDC",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n    "data": {\n        "type": "collectIdentities",\n        "run-id": "5733,5734",\n        "run-source-5733": "HR Users"\n    }\n}\n'})})}),(0,s.jsx)(i.A,{value:"200 All IDCs",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n    "data": {\n        "type": "collectIdentities",\n        "run-source-5743": "SAP SuccessFactors IDC",\n        "run-id": "5744,5745,5746,5747,5748,5749,5742",\n        "run-source-5748": "HR Database (Internal)",\n        "run-source-5747": "SecZetta IDC (Rester)",\n        "run-source-5746": "UltiPro IDC - Rester",\n        "run-source-5745": "SAP Fieldglass IDC",\n        "run-source-5744": "HR Users"\n    }\n}\n'})})}),(0,s.jsx)(i.A,{value:"404 Invalid Parameter",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:"<html>\n  <head>\n    <title>Error</title>\n  </head>\n  <body>Error running a collection for the identity collector D \n    Query String=cmd=collectIdentities&amp;format=json&amp;name=D&amp;unify=true&amp;force=false</body>\n</html>\n"})})}),(0,s.jsx)(i.A,{value:"409",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:"<html>\n  <head>\n    <title>Error</title>\n  </head>\n  <body>Cannot schedule Identity Collections and/or Unification because they are already in the queue for \n    processing Query String=cmd=collectIdentities&amp;format=json&amp;unify=true&amp;force=false</body>\n</html>\n"})})})]})]})}function p(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var r=n(34164);const s={tabItem:"tabItem_Ymn6"};var l=n(74848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,a),hidden:n,children:t})}},98120:(e,t,n)=>{n.d(t,{A:()=>y});var r=n(96540),s=n(34164),l=n(86641),a=n(56347),i=n(205),c=n(38874);var o=n(82993);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(void 0===(r=(e,t)=>e.value===t.value)&&(r=(e,t)=>e===t),(n=e).filter(((e,t)=>n.findIndex((t=>r(t,e)))!==t)));var n,r;if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const s=(0,a.W6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(s.location.search);t.set(l,e),s.replace({...s.location,search:t.toString()})}),[l,s])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,l=u(e),[a,c]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[d,m]=p({queryString:n,groupId:s}),[f,j]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,l]=(0,o.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:s}),x=(()=>{const e=d??f;return h({value:e,tabValues:l})?e:null})();(0,i.A)((()=>{x&&c(x)}),[x]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);c(e),m(e),j(e)}),[m,j,l]),tabValues:l}}var f=n(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(74848);function b(e){let{className:t,block:n,selectedValue:r,selectValue:a,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,l.a_)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),s=i[n].value;s!==r&&(o(t),a(s))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>c.push(e),onKeyDown:u,onClick:d,...l,className:(0,s.A)("tabs__item",j.tabItem,l?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:l}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===l));return e?(0,r.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==l})))})}function g(e){const t=m(e);return(0,x.jsxs)("div",{className:(0,s.A)("tabs-container",j.tabList),children:[(0,x.jsx)(b,{...t,...e}),(0,x.jsx)(v,{...t,...e})]})}function y(e){const t=(0,f.A)();return(0,x.jsx)(g,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var r=n(96540);const s={},l=r.createContext(s);function a(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);