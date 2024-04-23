"use strict";(self.webpackChunkdocku=self.webpackChunkdocku||[]).push([[84563],{94730:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var n=r(74848),s=r(28453),l=r(11470),a=r(19365),o=r(20431);const c={sidebar_position:8},i="Delete Collector",d={id:"collection/delete-collector",title:"Delete Collector",description:"Delete a collector.",source:"@site/docs/collection/delete-collector.md",sourceDirName:"collection",slug:"/collection/delete-collector",permalink:"/RSA/docs/collection/delete-collector",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1708638966e3,sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Collect Roles",permalink:"/RSA/docs/collection/collect-roles"},next:{title:"Delete Pending Collections",permalink:"/RSA/docs/collection/delete-pending-collections"}},u={},h=[{value:"Request Parameters",id:"request-parameters",level:3},{value:"Request Headers",id:"request-headers",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Examples",id:"response-examples",level:3}];function p(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"delete-collector",children:"Delete Collector"}),"\n","\n",(0,n.jsx)("img",{src:o.A,width:"80"}),"\n",(0,n.jsx)(t.p,{children:"Delete a collector."}),"\n",(0,n.jsxs)("p",{children:[(0,n.jsx)("span",{class:"method-post",children:"POST "}),(0,n.jsx)("span",{class:"method-post-text",children:(0,n.jsx)(t.a,{href:"https://instance.securid.com:443/aveksa/command.submit?cmd=deleteCollector",children:"https://instance.securid.com:443/aveksa/command.submit?cmd=deleteCollector"})})]}),"\n",(0,n.jsx)(t.h3,{id:"request-parameters",children:"Request Parameters"}),"\n",(0,n.jsxs)("table",{class:"table-container",children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("label",{class:"required",children:"command"})}),(0,n.jsx)("td",{children:"deleteCollector"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"format"}),(0,n.jsxs)("td",{children:[(0,n.jsxs)("p",{children:[(0,n.jsx)("code",{children:"properties"})," - (Default) ",(0,n.jsx)("code",{children:"key=value"}),". most useful when requesting a single object. If multiple objects are returned, values is a csv. ie ",(0,n.jsx)("code",{children:"key=value1,value2,value3"})," where value1 is the value for the first object, value2 is the value for the 2nd object, etc."]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("code",{children:"json"})," - Useful format for parsing into javascript or other languages. See ",(0,n.jsx)("a",{href:"https://www.json.org",target:"_blank",children:(0,n.jsx)(t.a,{href:"http://www.json.org",children:"www.json.org"})})," for details."]})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("label",{class:"required",children:"name"})}),(0,n.jsx)("td",{children:"The friendly name of the collector."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("label",{class:"required",children:"type"})}),(0,n.jsxs)("td",{children:["The type of the collector. Valid values : ",(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"Identity"}),(0,n.jsx)("li",{children:"Activity"}),(0,n.jsx)("li",{children:"Account"}),(0,n.jsx)("li",{children:"Entitlement"}),(0,n.jsx)("li",{children:"Role"}),(0,n.jsx)("li",{children:"Metadata"}),(0,n.jsx)("li",{children:"MAEDC"})]})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"request-headers",children:"Request Headers"}),"\n",(0,n.jsxs)("table",{class:"table-container",children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("label",{class:"required",children:"Authorization"})}),(0,n.jsxs)("td",{children:["Bearer ",(0,n.jsx)("code",{children:"<token>"})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Accept"}),(0,n.jsx)("td",{children:"application/json"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Content-Type"}),(0,n.jsx)("td",{children:"application/json"})]})]}),"\n",(0,n.jsx)(t.h3,{id:"response-parameters",children:"Response Parameters"}),"\n",(0,n.jsx)("table",{class:"table-container",children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"type"})}),(0,n.jsx)("td",{children:"Executed command name"})]})}),"\n",(0,n.jsx)(t.h3,{id:"request-example",children:"Request Example"}),"\n",(0,n.jsxs)(l.A,{className:"unique-tabs",children:[(0,n.jsx)(a.A,{value:"Curl",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:'curl -K -X POST  \\\r\n"https://instance.securid.com:443/aveksa/command.submit?cmd=deleteCollector&name=myIDC&type=Identity" \\\r\n-H "Authorization: Bearer <token>" \\\r\n-H "Content-Type: application/json"\n'})})}),(0,n.jsx)(a.A,{value:"Python",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'import requests, json\r\n\r\nurl = "https://instance.securid.com:443/aveksa/command.submit"\r\n\r\nparams = {\r\n    "cmd": "deleteCollector",\r\n    "format": "json",\r\n    "name": "DELETE",\r\n    "type": "Entitlement"\r\n}\r\n\r\nheaders = {\r\n    \'Authorization\': \'Bearer <token>\',\r\n    \'Content-Type\': \'application/json\'\r\n}\r\n\r\nresponse = requests.post(url, params=params, headers=headers)\r\n\r\nif response.status_code == 200:\r\n    data = response.json()\r\n    print(data)\r\nelse:\r\n    print(f"Request failed with status code {response.status_code}")\n'})})})]}),"\n",(0,n.jsx)(t.h3,{id:"response-examples",children:"Response Examples"}),"\n",(0,n.jsxs)(l.A,{className:"unique-tabs",children:[(0,n.jsx)(a.A,{value:"200",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\r\n    "data": {\r\n        "type": "deleteCollector"\r\n    }\r\n}\n'})})}),(0,n.jsx)(a.A,{value:"500 Internal Error",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",children:"<html>\r\n  <head>\r\n    <title>Error</title>\r\n  </head>\r\n  <body>com.aveksa.server.message.MessengerServiceException: Test request failed with response: \r\n    com.aveksa.server.db.PersistenceException: n/a Query \r\n    String=cmd=deleteCollector&amp;format=json&amp;name=DELETE&amp;type=Entitlement</body>\r\n</html>\n"})})}),(0,n.jsx)(a.A,{value:"412 Missing Parameter",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",children:"<html>\r\n  <head>\r\n    <title>Error</title>\r\n  </head>\r\n  <body>The parameter name is required. Query String=cmd=deleteCollector&amp;format=json</body>\r\n</html>\n"})})})]})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>a});r(96540);var n=r(34164);const s={tabItem:"tabItem_Ymn6"};var l=r(74848);function a(e){let{children:t,hidden:r,className:a}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,a),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>w});var n=r(96540),s=r(34164),l=r(23104),a=r(56347),o=r(205),c=r(57485),i=r(31682),d=r(89466);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}(r);return function(e){const t=(0,i.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const s=(0,a.W6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,c.aZ)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(s.location.search);t.set(l,e),s.replace({...s.location,search:t.toString()})}),[l,s])]}function x(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,l=h(e),[a,c]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[i,u]=m({queryString:r,groupId:s}),[x,j]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,l]=(0,d.Dv)(r);return[s,(0,n.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:s}),b=(()=>{const e=i??x;return p({value:e,tabValues:l})?e:null})();(0,o.A)((()=>{b&&c(b)}),[b]);return{selectedValue:a,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),j(e)}),[u,j,l]),tabValues:l}}var j=r(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=r(74848);function v(e){let{className:t,block:r,selectedValue:n,selectValue:a,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:i}=(0,l.a_)(),d=e=>{const t=e.currentTarget,r=c.indexOf(t),s=o[r].value;s!==n&&(i(t),a(s))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},t),children:o.map((e=>{let{value:t,label:r,attributes:l}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>c.push(e),onKeyDown:u,onClick:d,...l,className:(0,s.A)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function g(e){let{lazy:t,children:r,selectedValue:s}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=x(e);return(0,f.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,f.jsx)(v,{...e,...t}),(0,f.jsx)(g,{...e,...t})]})}function w(e){const t=(0,j.A)();return(0,f.jsx)(y,{...e,children:u(e.children)},String(t))}},20431:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/draft-ab117e6de584b2dc7bd3d9f0bbfe0dd1.png"},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>o});var n=r(96540);const s={},l=n.createContext(s);function a(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);