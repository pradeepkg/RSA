"use strict";(self.webpackChunkdocku=self.webpackChunkdocku||[]).push([[3527],{95385:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>h});var s=t(74848),r=t(28453),a=t(11470),o=t(19365),l=t(41447);const i={sidebar_position:4},c="Logout User",u={id:"authentication/logoutUser",title:"Logout User",description:"Deactivate a session token retrieved from loginUser.",source:"@site/docs/authentication/logoutUser.md",sourceDirName:"authentication",slug:"/authentication/logoutUser",permalink:"/RSA/docs/authentication/logoutUser",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1715787065e3,sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Login User",permalink:"/RSA/docs/authentication/loginUser"},next:{title:"Admin",permalink:"/RSA/docs/category/admin"}},d={},h=[{value:"Request",id:"request",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Headers",id:"headers",level:3},{value:"Response",id:"response",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Examples",id:"examples",level:2},{value:"Request",id:"request-1",level:3},{value:"Response",id:"response-1",level:3}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"logout-user",children:"Logout User"})}),"\n",(0,s.jsx)(n.p,{children:"Deactivate a session token retrieved from loginUser."}),"\n",(0,s.jsxs)("p",{children:[(0,s.jsx)("span",{class:"method-post",children:"POST "}),(0,s.jsx)("span",{class:"method-post-text",children:(0,s.jsx)(n.a,{href:"https://instance.securid.com/aveksa/command.submit?cmd=logoutUser",children:"https://instance.securid.com/aveksa/command.submit?cmd=logoutUser"})})]}),"\n",(0,s.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,s.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)("table",{class:"table-container",children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("label",{class:"required",children:"command"})}),(0,s.jsx)("td",{children:"logoutUser"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"format"}),(0,s.jsxs)("td",{children:[(0,s.jsx)(n.code,{children:"properties"})," - (Default) ",(0,s.jsx)(n.code,{children:"key=value"}),". most useful when requesting a single object. If multiple objects are returned, values is a csv. ie ",(0,s.jsx)(n.code,{children:"key=value1,value2,value3"})," where value1 is the value for the first object, value2 is the value for the 2nd object, etc.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)(n.code,{children:"json"})," - Useful format for parsing into javascript or other languages. See ",(0,s.jsx)(n.a,{href:"http://www.json.org",children:"www.json.org"})," for details."]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"headers",children:"Headers"}),"\n",(0,s.jsxs)("table",{class:"table-container",children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("label",{class:"required",children:"Authorization"})}),(0,s.jsxs)("td",{children:["Bearer ",(0,s.jsx)(n.code,{children:"token"})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Accept"}),(0,s.jsx)("td",{children:"application/json"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Content-Type"}),(0,s.jsx)("td",{children:"application/json"})]})]}),"\n",(0,s.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,s.jsx)(n.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,s.jsx)("table",{class:"table-container",children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:"type"})}),(0,s.jsx)("td",{children:"Executed command name"})]})}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.h3,{id:"request-1",children:"Request"}),"\n",(0,s.jsxs)(a.A,{className:"unique-tabs",children:[(0,s.jsx)(o.A,{value:"Curl",attributes:{className:l.A.curl},children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl --location --request POST  \\\n"https://instance.securid.com/aveksa/command.submit?cmd=logoutUser&format=json" \\\n-H "Authorization: Bearer <token>" \\\n-H "Content-Type: application/json"\n'})})}),(0,s.jsx)(o.A,{value:"Python",attributes:{className:l.A.python},children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",metastring:"showLineNumbers",children:'import requests, json\n\nurl = "https://instance.securid.com/aveksa/command.submit"\n\nparams = {\n    "cmd": "logoutUser",\n    "format": "json"\n}\n\nheaders = {\n    \'Authorization\': \'Bearer <token>\',\n    \'Content-Type\': \'application/json\'\n}\n\nresponse = requests.post(url, params=params, headers=headers)\n\nif response.status_code == 200:\n    data = response.json()\n    print(data)\nelse:\n    print(f"Request failed with status code {response.status_code}")\n'})})}),(0,s.jsx)(o.A,{value:"Node.js",attributes:{className:l.A.nodejs},children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:"showLineNumbers",children:"const axios = require('axios');\n\nconst url = \"https://instance.securid.com/aveksa/command.submit\";\n\nconst params = {\n    cmd: \"logoutUser\",\n    format: \"json\"\n};\n\nconst headers = {\n    'Authorization': 'Bearer <token>',\n    'Content-Type': 'application/json'\n};\n\naxios.post(url, null, { params, headers })\n    .then(response => {\n        if (response.status === 200) {\n            const data = response.data;\n            console.log(data);\n        } else {\n            console.log(`Request failed with status code ${response.status}`);\n        }\n    })\n    .catch(error => {\n        console.error('Error:', error);\n    });\n"})})})]}),"\n",(0,s.jsx)(n.h3,{id:"response-1",children:"Response"}),"\n",(0,s.jsxs)(a.A,{className:"unique-tabs",children:[(0,s.jsx)(o.A,{value:"200",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "data": {\n        "type": "logoutUser"\n    }\n}\n'})})}),(0,s.jsx)(o.A,{value:"401",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",children:"<html>\n    <head>\n        <title>Error</title>\n    </head>\n    <body>The token is not valid for the command 'logoutUser'. Token is invalid or expired</body>\n</html>\n"})})})]})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var s=t(34164);const r={tabItem:"tabItem_Ymn6"};var a=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,o),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>w});var s=t(96540),r=t(34164),a=t(23104),o=t(56347),l=t(205),i=t(57485),c=t(31682),u=t(70679);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:r}}=e;return{value:n,label:t,attributes:s,default:r}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,o.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function j(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,a=h(e),[o,i]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:a}))),[c,d]=m({queryString:t,groupId:r}),[j,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,a]=(0,u.Dv)(t);return[r,(0,s.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:r}),b=(()=>{const e=c??j;return p({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{b&&i(b)}),[b]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),x(e)}),[d,x,a]),tabValues:a}}var x=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(74848);function v(e){let{className:n,block:t,selectedValue:s,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const n=e.currentTarget,t=i.indexOf(n),r=l[t].value;r!==s&&(c(n),o(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...a,className:(0,r.A)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=j(e);return(0,f.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,f.jsx)(v,{...n,...e}),(0,f.jsx)(g,{...n,...e})]})}function w(e){const n=(0,x.A)();return(0,f.jsx)(y,{...e,children:d(e.children)},String(n))}},41447:(e,n,t)=>{t.d(n,{A:()=>s});const s={curl:"curl_orwx",python:"python_uXgC",nodejs:"nodejs_ucMl",powershell:"powershell_BcVw"}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var s=t(96540);const r={},a=s.createContext(r);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);