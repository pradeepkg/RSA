"use strict";(self.webpackChunkdocku=self.webpackChunkdocku||[]).push([[6167],{8262:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>h});var r=t(74848),s=t(28453),a=t(11470),l=t(19365),i=t(20431);const o={sidebar_position:10},c="Delete Pending Run",u={id:"collection/delete-pending-run",title:"Delete Pending Run",description:"Delete a single run that is queued for execution. Note that executing runs cannot be deleted currently.",source:"@site/docs/collection/delete-pending-run.md",sourceDirName:"collection",slug:"/collection/delete-pending-run",permalink:"/RSA/docs/collection/delete-pending-run",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1714157031e3,sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Delete Pending Collections",permalink:"/RSA/docs/collection/delete-pending-collections"},next:{title:"Get Run Status",permalink:"/RSA/docs/collection/get-run-status"}},d={},h=[{value:"Request Parameters",id:"request-parameters",level:3},{value:"Request Headers",id:"request-headers",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Examples",id:"response-examples",level:3}];function p(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"delete-pending-run",children:"Delete Pending Run"}),"\n","\n",(0,r.jsx)("img",{src:i.A,width:"80"}),"\n",(0,r.jsx)(n.p,{children:"Delete a single run that is queued for execution. Note that executing runs cannot be deleted currently."}),"\n",(0,r.jsxs)("p",{children:[(0,r.jsx)("span",{class:"method-post",children:"POST "}),(0,r.jsx)("span",{class:"method-post-text",children:(0,r.jsx)(n.a,{href:"https://instance.securid.com/aveksa/command.submit?cmd=deletePendingRun",children:"https://instance.securid.com/aveksa/command.submit?cmd=deletePendingRun"})})]}),"\n",(0,r.jsx)(n.h3,{id:"request-parameters",children:"Request Parameters"}),"\n",(0,r.jsxs)("table",{class:"table-container",children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("label",{class:"required",children:"command"})}),(0,r.jsx)("td",{children:"deletePendingRun"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"format"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(n.code,{children:"properties"})," - (Default) ",(0,r.jsx)(n.code,{children:"key=value"}),". most useful when requesting a single object. If multiple objects are returned, values is a csv. ie ",(0,r.jsx)(n.code,{children:"key=value1,value2,value3"})," where value1 is the value for the first object, value2 is the value for the 2nd object, etc.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)(n.code,{children:"json"})," - Useful format for parsing into javascript or other languages. See ",(0,r.jsx)("a",{href:"https://www.json.org",target:"_blank",children:(0,r.jsx)(n.a,{href:"http://www.json.org",children:"www.json.org"})})," for details."]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("label",{class:"required",children:"run-id"})}),(0,r.jsx)("td",{children:"The id of the run to delete."})]})]}),"\n",(0,r.jsx)(n.h3,{id:"request-headers",children:"Request Headers"}),"\n",(0,r.jsxs)("table",{class:"table-container",children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("label",{class:"required",children:"Authorization"})}),(0,r.jsxs)("td",{children:["Bearer ",(0,r.jsx)(n.code,{children:"&lt;token&gt;"})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Accept"}),(0,r.jsx)("td",{children:"application/json"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Content-Type"}),(0,r.jsx)("td",{children:"application/json"})]})]}),"\n",(0,r.jsx)(n.h3,{id:"response-parameters",children:"Response Parameters"}),"\n",(0,r.jsxs)("table",{class:"table-container",children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.code,{children:"type"})}),(0,r.jsx)("td",{children:"Executed command name"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.code,{children:"status "})}),(0,r.jsxs)("td",{children:["Execution status of the command ",(0,r.jsx)(n.code,{children:"success, failure"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"request-example",children:"Request Example"}),"\n",(0,r.jsxs)(a.A,{className:"unique-tabs",children:[(0,r.jsx)(l.A,{value:"Curl",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'curl -K -X POST  \\\n"https://instance.securid.com/aveksa/command.submit?cmd=deletePendingRun&run-id=1&format=json" \\\n-H "Authorization: Bearer <token>" \\\n-H "Content-Type: application/json"\n'})})}),(0,r.jsx)(l.A,{value:"Python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'import requests, json\n\nurl = "https://instance.securid.com/aveksa/command.submit"\n\nparams = {\n    "cmd": "deletePendingRun",\n    "format": "json",\n    "run-id": "5902"\n}\n\nheaders = {\n    \'Authorization\': \'Bearer <token>\',\n    \'Content-Type\': \'application/json\'\n}\n\nresponse = requests.post(url, params=params, headers=headers)\n\nif response.status_code == 200:\n    data = response.json()\n    print(data)\nelse:\n    print(f"Request failed with status code {response.status_code}")\n'})})})]}),"\n",(0,r.jsx)(n.h3,{id:"response-examples",children:"Response Examples"}),"\n",(0,r.jsxs)(a.A,{className:"unique-tabs",children:[(0,r.jsx)(l.A,{value:"200",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "data": {\n        "type": "deletePendingRun",\n        "status": "success"\n    }\n}\n'})})}),(0,r.jsx)(l.A,{value:"404 Invalid Parameter",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:"<html>\n  <head>\n    <title>Error</title>\n  </head>\n  <body>The run-id 144444 is invalid. Query \n        String=cmd=deletePendingRun&amp;format=json&amp;run-id=144444</body>\n</html>\n"})})}),(0,r.jsx)(l.A,{value:"412 Missing Parameter",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:"<html>\n  <head>\n    <title>Error</title>\n  </head>\n  <body>The parameter run-id is required. Query String=cmd=deletePendingRun&amp;format=json</body>\n</html>\n"})})})]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>l});t(96540);var r=t(34164);const s={tabItem:"tabItem_Ymn6"};var a=t(74848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,l),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>q});var r=t(96540),s=t(34164),a=t(23104),l=t(56347),i=t(205),o=t(57485),c=t(31682),u=t(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const s=(0,l.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,a=h(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[c,d]=m({queryString:t,groupId:s}),[x,j]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,u.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),b=(()=>{const e=c??x;return p({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{b&&o(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),j(e)}),[d,j,a]),tabValues:a}}var j=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(74848);function g(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const n=e.currentTarget,t=o.indexOf(n),s=i[t].value;s!==r&&(c(n),l(s))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...a,className:(0,s.A)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:s}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=x(e);return(0,f.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,f.jsx)(g,{...e,...n}),(0,f.jsx)(v,{...e,...n})]})}function q(e){const n=(0,j.A)();return(0,f.jsx)(y,{...e,children:d(e.children)},String(n))}},20431:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/draft-ab117e6de584b2dc7bd3d9f0bbfe0dd1.png"},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>i});var r=t(96540);const s={},a=r.createContext(s);function l(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);