"use strict";(self.webpackChunkdocku=self.webpackChunkdocku||[]).push([[96090],{82668:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>h});var s=r(74848),n=r(28453),a=r(11470),l=r(19365),o=r(41447);const i={sidebar_position:15,draft:!1},c="Import Workflow",d={id:"admin/importWorkflow",title:"Import Workflow",description:"Import a workflow archive file using either a file located on the server or passed as the request body.",source:"@site/docs/admin/importWorkflow.md",sourceDirName:"admin",slug:"/admin/importWorkflow",permalink:"/RSA/docs/admin/importWorkflow",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1714157031e3,sidebarPosition:15,frontMatter:{sidebar_position:15,draft:!1},sidebar:"tutorialSidebar",previous:{title:"Status",permalink:"/RSA/docs/admin/status"},next:{title:"Information",permalink:"/RSA/docs/category/information"}},u={},h=[{value:"Request Parameters",id:"request-parameters",level:3},{value:"Request Headers",id:"request-headers",level:3},{value:"Request Body",id:"request-body",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Examples",id:"response-examples",level:3}];function p(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"import-workflow",children:"Import Workflow"}),"\n","\n",(0,s.jsx)(t.p,{children:"Import a workflow archive file using either a file located on the server or passed as the request body."}),"\n",(0,s.jsxs)("p",{children:[(0,s.jsx)("span",{class:"method-post",children:"POST "}),(0,s.jsx)("span",{class:"method-post-text",children:(0,s.jsx)(t.a,{href:"https://instance.securid.com/aveksa/command.submit?cmd=importWorkflow",children:"https://instance.securid.com/aveksa/command.submit?cmd=importWorkflow"})})]}),"\n",(0,s.jsx)(t.h3,{id:"request-parameters",children:"Request Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)("label",{class:"required",children:"command"})}),(0,s.jsx)(t.td,{children:"about"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"filename"}),(0,s.jsxs)(t.td,{children:["The filename in the import directory on the G&L server. The import directory is specified on the web services configuration page. Alternatively, the data can be sent as part of the request body.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"This option is not recommended and file should be passed using the POST body"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"overwrite"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"true, false"})," Indicates existing objects should be overwritten. (Default) ",(0,s.jsx)(t.code,{children:"false"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"format"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"properties"})," - (Default) ",(0,s.jsx)(t.code,{children:"key=value"}),". most useful when requesting a single object. If multiple objects are returned, values is a csv. ie ",(0,s.jsx)(t.code,{children:"key=value1,value2,value3"})," where value1 is the value for the first object, value2 is the value for the 2nd object, etc.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)(t.code,{children:"json"})," - Useful format for parsing into javascript or other languages. See ",(0,s.jsx)(t.a,{href:"http://www.json.org",children:"www.json.org"})," for details."]})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"request-headers",children:"Request Headers"}),"\n",(0,s.jsxs)("table",{class:"table-container",children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("label",{class:"required",children:"Authorization"})}),(0,s.jsxs)("td",{children:["Bearer ",(0,s.jsx)(t.code,{children:"token"})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Accept"}),(0,s.jsx)("td",{children:"application/json"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Content-Type"}),(0,s.jsx)("td",{children:"application/json"})]})]}),"\n",(0,s.jsx)(t.h3,{id:"request-body",children:"Request Body"}),"\n",(0,s.jsx)(t.p,{children:"Workflow zip archive"}),"\n",(0,s.jsx)(t.h3,{id:"response-parameters",children:"Response Parameters"}),"\n",(0,s.jsxs)("table",{class:"table-container",children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(t.code,{children:"type"})}),(0,s.jsx)("td",{children:"Executed command name"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(t.code,{children:"status"})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.code,{children:"success, failure"})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(t.code,{children:"message"})}),(0,s.jsx)("td",{children:"Optional message to return along with the status"})]})]}),"\n",(0,s.jsx)(t.h3,{id:"request-example",children:"Request Example"}),"\n",(0,s.jsxs)(a.A,{className:"unique-tabs",children:[(0,s.jsx)(l.A,{value:"Curl",attributes:{className:o.A.curl},children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'curl -X GET "https://instance.securid.com/aveksa/command.submit" \\\n-d "cmd=importWorkflow" \\\n-d "format=json" \\\n-d "overwrite=true" \\\n-H "Authorization: Bearer <token>" \\\n-H "Content-Type: application/json"\n--data \'@/C:/Data/Workflow-04-26-2024.zip\'\n'})})}),(0,s.jsx)(l.A,{value:"Python",attributes:{className:o.A.python},children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python"})})}),(0,s.jsx)(l.A,{value:"Node.js",attributes:{className:o.A.nodejs},children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js"})})})]}),"\n",(0,s.jsx)(t.h3,{id:"response-examples",children:"Response Examples"}),"\n",(0,s.jsxs)(a.A,{className:"unique-tabs",children:[(0,s.jsx)(l.A,{value:"200",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n    "data": {\n        "type": "importWorkflow",\n        "status": "success",\n        "message": "Import started Fri Apr 26 18:19:37 UTC 2024...... <TRUNCATED>"\n    }\n}\n'})})}),(0,s.jsx)(l.A,{value:"200 Missing/Invalid Parameters",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n    "data": {\n        "type": "importWorkflow",\n        "status": "failure",\n        "message": "The workflow import using the archive file /tmp/wfarchive4686824953448986718.tmp failed"\n    }\n}\n'})})})]})]})}function m(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>l});r(96540);var s=r(34164);const n={tabItem:"tabItem_Ymn6"};var a=r(74848);function l(e){let{children:t,hidden:r,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(n.tabItem,l),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>y});var s=r(96540),n=r(34164),a=r(23104),l=r(56347),o=r(205),i=r(57485),c=r(31682),d=r(89466);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:r,attributes:s,default:n}}=e;return{value:t,label:r,attributes:s,default:n}}))}(r);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const n=(0,l.W6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(n.location.search);t.set(a,e),n.replace({...n.location,search:t.toString()})}),[a,n])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,a=h(e),[l,i]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:a}))),[c,u]=m({queryString:r,groupId:n}),[f,x]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,a]=(0,d.Dv)(r);return[n,(0,s.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:n}),j=(()=>{const e=c??f;return p({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{j&&i(j)}),[j]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),x(e)}),[u,x,a]),tabValues:a}}var x=r(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(74848);function v(e){let{className:t,block:r,selectedValue:s,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const t=e.currentTarget,r=i.indexOf(t),n=o[r].value;n!==s&&(c(t),l(n))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;t=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;t=i[r]??i[i.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":r},t),children:o.map((e=>{let{value:t,label:r,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>i.push(e),onKeyDown:u,onClick:d,...a,className:(0,n.A)("tabs__item",j.tabItem,a?.className,{"tabs__item--active":s===t}),children:r??t},t)}))})}function g(e){let{lazy:t,children:r,selectedValue:n}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===n));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function w(e){const t=f(e);return(0,b.jsxs)("div",{className:(0,n.A)("tabs-container",j.tabList),children:[(0,b.jsx)(v,{...e,...t}),(0,b.jsx)(g,{...e,...t})]})}function y(e){const t=(0,x.A)();return(0,b.jsx)(w,{...e,children:u(e.children)},String(t))}},41447:(e,t,r)=>{r.d(t,{A:()=>s});const s={curl:"curl_orwx",python:"python_uXgC",nodejs:"nodejs_ucMl",powershell:"powershell_BcVw"}},28453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>o});var s=r(96540);const n={},a=s.createContext(n);function l(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);