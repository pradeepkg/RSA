"use strict";(self.webpackChunkdocku=self.webpackChunkdocku||[]).push([[7011],{62427:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>c,metadata:()=>t,toc:()=>h});const t=JSON.parse('{"id":"reporting/runReport","title":"Run Report","description":"Run a report defined in the system and generate results.","source":"@site/docs/reporting/runReport.md","sourceDirName":"reporting","slug":"/reporting/runReport","permalink":"/RSA/docs/reporting/runReport","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1715787065000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Reporting","permalink":"/RSA/docs/category/reporting"}}');var s=r(74848),a=r(28453),l=r(98120),o=r(19365),i=r(41447);const c={sidebar_position:1},u="Run Report",d={},h=[{value:"Request",id:"request",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Headers",id:"headers",level:3},{value:"Response",id:"response",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Examples",id:"examples",level:2},{value:"Request",id:"request-1",level:3},{value:"Response",id:"response-1",level:3}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"run-report",children:"Run Report"})}),"\n",(0,s.jsx)(n.p,{children:"Run a report defined in the system and generate results."}),"\n",(0,s.jsxs)("p",{children:[(0,s.jsx)("span",{class:"method-get",children:"GET "}),(0,s.jsx)("span",{class:"method-get-text",children:(0,s.jsx)(n.a,{href:"https://instance.securid.com/aveksa/command.submit?cmd=runReport",children:"https://instance.securid.com/aveksa/command.submit?cmd=runReport"})})]}),"\n",(0,s.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,s.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)("table",{class:"table-container",children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("label",{class:"required",children:"command"})}),(0,s.jsx)("td",{children:"runReport"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"format"}),(0,s.jsxs)("td",{children:[(0,s.jsx)(n.code,{children:"properties"})," - (Default) ",(0,s.jsx)(n.code,{children:"key=value"}),". most useful when requesting a single object. If multiple objects are returned, values is a csv. ie ",(0,s.jsx)(n.code,{children:"key=value1,value2,value3"})," where value1 is the value for the first object, value2 is the value for the 2nd object, etc.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)(n.code,{children:"json"})," - Useful format for parsing into javascript or other languages. See ",(0,s.jsx)(n.a,{href:"http://www.json.org",children:"www.json.org"})," for details."]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"name"}),(0,s.jsx)("td",{children:"The name of a report to generate results for."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"desc"}),(0,s.jsx)("td",{children:"An optional description for the generated results."})]})]}),"\n",(0,s.jsx)(n.h3,{id:"headers",children:"Headers"}),"\n",(0,s.jsxs)("table",{class:"table-container",children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("label",{class:"required",children:"Authorization"})}),(0,s.jsxs)("td",{children:["Bearer ",(0,s.jsx)(n.code,{children:"token"})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Accept"}),(0,s.jsx)("td",{children:"application/json"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Content-Type"}),(0,s.jsx)("td",{children:"application/json"})]})]}),"\n",(0,s.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,s.jsx)(n.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,s.jsxs)("table",{class:"table-container",children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:"type"})}),(0,s.jsx)("td",{children:"Executed command name"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:"run-id"})}),(0,s.jsx)("td",{children:"The id assigned to the generation of the report. Use getRunStatus to check the status of the run after this call."})]})]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.h3,{id:"request-1",children:"Request"}),"\n",(0,s.jsxs)(l.A,{className:"unique-tabs",children:[(0,s.jsx)(o.A,{value:"Curl",attributes:{className:i.A.curl},children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'curl -K -X GET  \\\n"https://instance.securid.com/aveksa/command.submit?cmd=runReport&format=json&name=myReport" \\\n-H "Authorization: Bearer <token>" \\\n-H "Content-Type: application/json"\n'})})}),(0,s.jsx)(o.A,{value:"Python",attributes:{className:i.A.python},children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import requests, json\n\nurl = "https://instance.securid.com/aveksa/command.submit"\n\nparams = {\n    "cmd": "runReport",\n    "format": "json",\n    "name": "All User Access",\n    "desc": "Report for Aug 15 2023"\n}\n\nheaders = {\n    \'Authorization\': \'Bearer <token>\',\n    \'Content-Type\': \'application/json\'\n}\n\nresponse = requests.get(url, params=params, headers=headers)\n\nif response.status_code == 200:\n    data = response.json()\n    print(data)\nelse:\n    print(f"Request failed with status code {response.status_code}")\n'})})}),(0,s.jsx)(o.A,{value:"Node.js",attributes:{className:i.A.nodejs},children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const axios = require(\'axios\');\n\nconst url = "https://instance.securid.com/aveksa/command.submit";\n\nconst params = {\n    "cmd": "runReport",\n    "format": "json",\n    "name": "All User Access",\n    "desc": "Report for Aug 15 2023"\n};\n\nconst headers = {\n    \'Authorization\': \'Bearer <token>\',\n    \'Content-Type\': \'application/json\'\n};\n\naxios.get(url, { params, headers })\n    .then(response => {\n        if (response.status === 200) {\n            console.log(response.data);\n        } else {\n            console.log(`Request failed with status code ${response.status}`);\n        }\n    })\n    .catch(error => {\n        console.error(\'Error:\', error);\n    });\n'})})})]}),"\n",(0,s.jsx)(n.h3,{id:"response-1",children:"Response"}),"\n",(0,s.jsxs)(l.A,{className:"unique-tabs",children:[(0,s.jsx)(o.A,{value:"200",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "data": {\n        "type": "runReport",\n        "run-id": "5511"\n    }\n}\n'})})}),(0,s.jsx)(o.A,{value:"401",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"<html>\n    <head>\n        <title>Error</title>\n    </head>\n    <body>The token is not valid for the command 'runReport'. </body>\n</html>\n"})})}),(0,s.jsx)(o.A,{value:"401 Permissions",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"<html>\n    <head>\n        <title>Error</title>\n    </head>\n    <body>User is not authorized to run reports for All User Access\n          Query String=cmd=runReport&amp;format=json&amp;name=All%20User%20Access</body>\n</html>\n"})})})]})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>l});r(96540);var t=r(34164);const s={tabItem:"tabItem_Ymn6"};var a=r(74848);function l(e){let{children:n,hidden:r,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,l),hidden:r,children:n})}},98120:(e,n,r)=>{r.d(n,{A:()=>y});var t=r(96540),s=r(34164),a=r(86641),l=r(56347),o=r(205),i=r(38874);var c=r(82993);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:s}}=e;return{value:n,label:r,attributes:t,default:s}}))}(r);return function(e){const n=(void 0===(t=(e,n)=>e.value===n.value)&&(t=(e,n)=>e===n),(r=e).filter(((e,n)=>r.findIndex((n=>t(n,e)))!==n)));var r,t;if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function h(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:r}=e;const s=(0,l.W6)(),a=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,i.aZ)(a),(0,t.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function m(e){const{defaultValue:n,queryString:r=!1,groupId:s}=e,a=d(e),[l,i]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:a}))),[u,m]=p({queryString:r,groupId:s}),[j,f]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,c.Dv)(r);return[s,(0,t.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:s}),x=(()=>{const e=u??j;return h({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{x&&i(x)}),[x]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),m(e),f(e)}),[m,f,a]),tabValues:a}}var j=r(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(74848);function b(e){let{className:n,block:r,selectedValue:t,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const n=e.currentTarget,r=i.indexOf(n),s=o[r].value;s!==t&&(c(n),l(s))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;n=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;n=i[r]??i[i.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},n),children:o.map((e=>{let{value:n,label:r,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...a,className:(0,s.A)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function v(e){let{lazy:n,children:r,selectedValue:a}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function g(e){const n=m(e);return(0,x.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,x.jsx)(b,{...n,...e}),(0,x.jsx)(v,{...n,...e})]})}function y(e){const n=(0,j.A)();return(0,x.jsx)(g,{...e,children:u(e.children)},String(n))}},41447:(e,n,r)=>{r.d(n,{A:()=>t});const t={curl:"curl_orwx",python:"python_uXgC",nodejs:"nodejs_ucMl",powershell:"powershell_BcVw"}},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>o});var t=r(96540);const s={},a=t.createContext(s);function l(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);