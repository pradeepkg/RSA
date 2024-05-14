"use strict";(self.webpackChunkdocku=self.webpackChunkdocku||[]).push([[7148],{56105:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=r(74848),s=r(28453),l=r(11470),a=r(19365);const o={sidebar_position:7},c="Collect Roles",i={id:"collection/collect-roles",title:"Collect Roles",description:"Run one or more role collectors.",source:"@site/docs/collection/collect-roles.md",sourceDirName:"collection",slug:"/collection/collect-roles",permalink:"/RSA/docs/collection/collect-roles",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1714157031e3,sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Collect Multi-App Entitlement Collector",permalink:"/RSA/docs/collection/collect-MAEDC"},next:{title:"Delete Collector",permalink:"/RSA/docs/collection/delete-collector"}},u={},d=[{value:"Request Parameters",id:"request-parameters",level:3},{value:"Request Headers",id:"request-headers",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Examples",id:"response-examples",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"collect-roles",children:"Collect Roles"}),"\n","\n",(0,n.jsx)(t.p,{children:"Run one or more role collectors."}),"\n",(0,n.jsxs)("p",{children:[(0,n.jsx)("span",{class:"method-get",children:"GET "}),(0,n.jsx)("span",{class:"method-get-text",children:(0,n.jsx)(t.a,{href:"https://instance.securid.com/aveksa/command.submit?cmd=collectRoles",children:"https://instance.securid.com/aveksa/command.submit?cmd=collectRoles"})})]}),"\n",(0,n.jsx)(t.h3,{id:"request-parameters",children:"Request Parameters"}),"\n",(0,n.jsxs)("table",{class:"table-container",children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("label",{class:"required",children:"command"})}),(0,n.jsx)("td",{children:"collectRoles"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"format"}),(0,n.jsxs)("td",{children:[(0,n.jsx)(t.code,{children:"properties"})," - (Default) ",(0,n.jsx)(t.code,{children:"key=value"}),". most useful when requesting a single object. If multiple objects are returned, values is a csv. ie ",(0,n.jsx)(t.code,{children:"key=value1,value2,value3"})," where value1 is the value for the first object, value2 is the value for the 2nd object, etc.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(t.code,{children:"json"})," - Useful format for parsing into javascript or other languages. See ",(0,n.jsx)("a",{href:"https://www.json.org",target:"_blank",children:(0,n.jsx)(t.a,{href:"http://www.json.org",children:"www.json.org"})})," for details."]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"name"}),(0,n.jsx)("td",{children:"The friendly name of the collector. If no name is provided all collectors are processed."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"force"}),(0,n.jsxs)("td",{children:[(0,n.jsx)(t.code,{children:"true, false"}),' Indicates if a collection should be "forced", i.e. ignore circuit breaker thresholds.']})]})]}),"\n",(0,n.jsx)(t.h3,{id:"request-headers",children:"Request Headers"}),"\n",(0,n.jsxs)("table",{class:"table-container",children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("label",{class:"required",children:"Authorization"})}),(0,n.jsxs)("td",{children:["Bearer ",(0,n.jsx)(t.code,{children:"&lt;token&gt;"})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Accept"}),(0,n.jsx)("td",{children:"application/json"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Content-Type"}),(0,n.jsx)("td",{children:"application/json"})]})]}),"\n",(0,n.jsx)(t.h3,{id:"response-parameters",children:"Response Parameters"}),"\n",(0,n.jsxs)("table",{class:"table-container",children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(t.code,{children:"type"})}),(0,n.jsx)("td",{children:"Executed command name"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(t.code,{children:"run-id"})}),(0,n.jsx)("td",{children:"The id assigned to the collection."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(t.code,{children:"run-source-xx"})}),(0,n.jsx)("td",{children:"The names of the collectors that we processed as part of this run where xx is the run id."})]})]}),"\n",(0,n.jsx)(t.h3,{id:"request-example",children:"Request Example"}),"\n",(0,n.jsxs)(l.A,{className:"unique-tabs",children:[(0,n.jsx)(a.A,{value:"Curl",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:'curl -K -X GET  \\\n"https://instance.securid.com/aveksa/command.submit?cmd=collectRoles&format=json" \\\n-H "Authorization: Bearer <token>" \\\n-H "Content-Type: application/json"\n'})})}),(0,n.jsx)(a.A,{value:"Python",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'import requests, json\n\nurl = "https://instance.securid.com/aveksa/command.submit"\n\nparams = {\n    "cmd": "collectRoles",\n    "format": "json",\n    "name": "rdc1",\n    "force": "false"\n}\n\nheaders = {\n    \'Authorization\': \'Bearer <token>\',\n    \'Content-Type\': \'application/json\'\n}\n\nresponse = requests.get(url, params=params, headers=headers)\n\nif response.status_code == 200:\n    data = response.json()\n    print(data)\nelse:\n    print(f"Request failed with status code {response.status_code}")\n'})})})]}),"\n",(0,n.jsx)(t.h3,{id:"response-examples",children:"Response Examples"}),"\n",(0,n.jsxs)(l.A,{className:"unique-tabs",children:[(0,n.jsx)(a.A,{value:"200",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n    "data": {\n        "type": "collectRoles",\n        "run-id": "5915",\n        "run-source-5915": "rdc1"\n    }\n}\n'})})}),(0,n.jsx)(a.A,{value:"404 Invalid Parameter",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",children:"<html>\n  <head>\n    <title>Error</title>\n  </head>\n  <body>Error running a collection for the role collector rdc1 \n        Query String=cmd=collectRoles&amp;format=json&amp;name=rdc1&amp;force=false</body>\n</html>\n"})})})]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>a});r(96540);var n=r(34164);const s={tabItem:"tabItem_Ymn6"};var l=r(74848);function a(e){let{children:t,hidden:r,className:a}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,a),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>w});var n=r(96540),s=r(34164),l=r(23104),a=r(56347),o=r(205),c=r(57485),i=r(31682),u=r(89466);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}(r);return function(e){const t=(0,i.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const s=(0,a.W6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,c.aZ)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(s.location.search);t.set(l,e),s.replace({...s.location,search:t.toString()})}),[l,s])]}function x(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,l=h(e),[a,c]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[i,d]=m({queryString:r,groupId:s}),[x,j]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,l]=(0,u.Dv)(r);return[s,(0,n.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:s}),f=(()=>{const e=i??x;return p({value:e,tabValues:l})?e:null})();(0,o.A)((()=>{f&&c(f)}),[f]);return{selectedValue:a,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),j(e)}),[d,j,l]),tabValues:l}}var j=r(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(74848);function v(e){let{className:t,block:r,selectedValue:n,selectValue:a,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:i}=(0,l.a_)(),u=e=>{const t=e.currentTarget,r=c.indexOf(t),s=o[r].value;s!==n&&(i(t),a(s))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},t),children:o.map((e=>{let{value:t,label:r,attributes:l}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>c.push(e),onKeyDown:d,onClick:u,...l,className:(0,s.A)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function g(e){let{lazy:t,children:r,selectedValue:s}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=x(e);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,b.jsx)(v,{...t,...e}),(0,b.jsx)(g,{...t,...e})]})}function w(e){const t=(0,j.A)();return(0,b.jsx)(y,{...e,children:d(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>o});var n=r(96540);const s={},l=n.createContext(s);function a(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);