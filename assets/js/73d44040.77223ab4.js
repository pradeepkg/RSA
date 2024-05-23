"use strict";(self.webpackChunkdocku=self.webpackChunkdocku||[]).push([[7405],{58983:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>h});var r=t(74848),s=t(28453),a=t(11470),o=t(19365),i=t(41447);const l={sidebar_position:1},c="Get Login Instructions",u={id:"authentication/getLoginInstructions",title:"Get Login Instructions",description:"Obtain the user name label, password label, and login page message that are displayed on the login page. Depending on the system settings, all of these results could contain HTML and/or JavaScript. If HTML or JavaScript exists, it will be returned in the output.",source:"@site/docs/authentication/getLoginInstructions.md",sourceDirName:"authentication",slug:"/authentication/getLoginInstructions",permalink:"/RSA/docs/authentication/getLoginInstructions",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1715787065e3,sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Authentication",permalink:"/RSA/docs/category/authentication"},next:{title:"Login as Trusted Application",permalink:"/RSA/docs/authentication/loginTrustedApp"}},d={},h=[{value:"Request",id:"request",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Headers",id:"headers",level:3},{value:"Response",id:"response",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Examples",id:"examples",level:2},{value:"Request",id:"request-1",level:3},{value:"Response",id:"response-1",level:3}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"get-login-instructions",children:"Get Login Instructions"}),"\n",(0,r.jsx)(n.p,{children:"Obtain the user name label, password label, and login page message that are displayed on the login page. Depending on the system settings, all of these results could contain HTML and/or JavaScript. If HTML or JavaScript exists, it will be returned in the output."}),"\n",(0,r.jsxs)("p",{children:[(0,r.jsx)("span",{class:"method-get",children:"GET "}),(0,r.jsx)("span",{class:"method-get-text",children:(0,r.jsx)(n.a,{href:"https://instance.securid.com/aveksa/command.submit?cmd=getLoginInstructions",children:"https://instance.securid.com/aveksa/command.submit?cmd=getLoginInstructions"})})]}),"\n",(0,r.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,r.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)("table",{class:"table-container",children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("label",{class:"required",children:"command"})}),(0,r.jsx)("td",{children:"getLoginInstructions"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"format"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(n.code,{children:"properties"})," - (Default) ",(0,r.jsx)(n.code,{children:"key=value"}),". most useful when requesting a single object. If multiple objects are returned, values is a csv. ie ",(0,r.jsx)(n.code,{children:"key=value1,value2,value3"})," where value1 is the value for the first object, value2 is the value for the 2nd object, etc.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)(n.code,{children:"json"})," - Useful format for parsing into javascript or other languages. See ",(0,r.jsx)(n.a,{href:"http://www.json.org",children:"www.json.org"})," for details."]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"headers",children:"Headers"}),"\n",(0,r.jsxs)("table",{class:"table-container",children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Accept"}),(0,r.jsx)("td",{children:"application/json"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Content-Type"}),(0,r.jsx)("td",{children:"application/json"})]})]}),"\n",(0,r.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,r.jsx)(n.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,r.jsxs)("table",{class:"table-container",children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.code,{children:"type"})}),(0,r.jsx)("td",{children:"Executed command name"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.code,{children:"username-label"})}),(0,r.jsx)("td",{children:"The label for the user name field. May contain HTML and JavaScript."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.code,{children:"password-label"})}),(0,r.jsx)("td",{children:"The label for the password field. May contain HTML and JavaScript."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.code,{children:"instructions"})}),(0,r.jsx)("td",{children:"The instructions for logging in, if any. The instructions may be blank, or they may contain HTML and JavaScript."})]})]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.h3,{id:"request-1",children:"Request"}),"\n",(0,r.jsxs)(a.A,{className:"unique-tabs",children:[(0,r.jsx)(o.A,{value:"Curl",attributes:{className:i.A.curl},children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl -K -X GET  \\\r\n"https://instance.securid.com/aveksa/command.submit?cmd=getLoginInstructions&format=json" \\\r\n-H "Content-Type: application/json"\n'})})}),(0,r.jsx)(o.A,{value:"Python",attributes:{className:i.A.python},children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:"showLineNumbers",children:'import requests, json\r\n\r\nurl = "https://instance.securid.com/aveksa/command.submit"\r\n\r\nparams = {\r\n    "cmd": "getLoginInstructions",\r\n    "format": "json"\r\n}\r\n\r\nheaders = {\r\n    \'Authorization\': \'Bearer <token>\',\r\n    \'Content-Type\': \'application/json\'\r\n}\r\n\r\nresponse = requests.get(url, params=params, headers=headers)\r\n\r\nif response.status_code == 200:\r\n    data = response.json()\r\n    print(data)\r\nelse:\r\n    print(f"Request failed with status code {response.status_code}")\n'})})}),(0,r.jsx)(o.A,{value:"Node.js",attributes:{className:i.A.nodejs},children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:"showLineNumbers",children:"const axios = require('axios');\r\n\r\nconst url = \"https://instance.securid.com/aveksa/command.submit\";\r\n\r\nconst params = {\r\n    cmd: \"getLoginInstructions\",\r\n    format: \"json\"\r\n};\r\n\r\nconst headers = {\r\n    'Authorization': 'Bearer <token>',\r\n    'Content-Type': 'application/json'\r\n};\r\n\r\naxios.get(url, { params, headers })\r\n    .then(response => {\r\n        if (response.status === 200) {\r\n            const data = response.data;\r\n            console.log(data);\r\n        } else {\r\n            console.log(`Request failed with status code ${response.status}`);\r\n        }\r\n    })\r\n    .catch(error => {\r\n        console.error('Error:', error);\r\n    });\n"})})})]}),"\n",(0,r.jsx)(n.h3,{id:"response-1",children:"Response"}),"\n",(0,r.jsxs)(a.A,{className:"unique-tabs",children:[(0,r.jsx)(o.A,{value:"200 JSON",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\r\n    "data": {\r\n        "type": "getLoginInstructions",\r\n        "instructions": "",\r\n        "username-label": "User Name",\r\n        "password-label": "Password"\r\n    }\r\n}\n'})})}),(0,r.jsx)(o.A,{value:"200 Properties",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"instructions=\r\nusername-label=User Name\r\npassword-label=Password\n"})})})]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var r=t(34164);const s={tabItem:"tabItem_Ymn6"};var a=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,o),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(96540),s=t(34164),a=t(23104),o=t(56347),i=t(205),l=t(57485),c=t(31682),u=t(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const s=(0,o.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,a=h(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[c,d]=m({queryString:t,groupId:s}),[b,j]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,u.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),g=(()=>{const e=c??b;return p({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),j(e)}),[d,j,a]),tabValues:a}}var j=t(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function f(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),s=i[t].value;s!==r&&(c(n),o(s))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...a,className:(0,s.A)("tabs__item",g.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:s}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=b(e);return(0,x.jsxs)("div",{className:(0,s.A)("tabs-container",g.tabList),children:[(0,x.jsx)(f,{...n,...e}),(0,x.jsx)(v,{...n,...e})]})}function w(e){const n=(0,j.A)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(n))}},41447:(e,n,t)=>{t.d(n,{A:()=>r});const r={curl:"curl_orwx",python:"python_uXgC",nodejs:"nodejs_ucMl",powershell:"powershell_BcVw"}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var r=t(96540);const s={},a=r.createContext(s);function o(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);