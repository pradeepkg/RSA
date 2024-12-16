"use strict";(self.webpackChunkdocku=self.webpackChunkdocku||[]).push([[1310],{75909:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>c,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"authentication/loginTrustedApp","title":"Login as Trusted Application","description":"Create a token for a trusted application, which can then be passed to other web services.","source":"@site/docs/authentication/loginTrustedApp.md","sourceDirName":"authentication","slug":"/authentication/loginTrustedApp","permalink":"/RSA/docs/authentication/loginTrustedApp","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1715787065000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Get Login Instructions","permalink":"/RSA/docs/authentication/getLoginInstructions"},"next":{"title":"Login User","permalink":"/RSA/docs/authentication/loginUser"}}');var r=t(74848),a=t(28453),o=t(98120),l=t(19365),i=t(41447);const c={sidebar_position:2},u="Login as Trusted Application",d={},h=[{value:"Request",id:"request",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Headers",id:"headers",level:3},{value:"Response",id:"response",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Examples",id:"examples",level:2},{value:"Request",id:"request-1",level:3},{value:"Response",id:"response-1",level:3}];function p(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"login-as-trusted-application",children:"Login as Trusted Application"})}),"\n",(0,r.jsx)(n.p,{children:"Create a token for a trusted application, which can then be passed to other web services."}),"\n",(0,r.jsxs)("p",{children:[(0,r.jsx)("span",{class:"method-post",children:"POST "}),(0,r.jsx)("span",{class:"method-post-text",children:(0,r.jsx)(n.a,{href:"https://instance.securid.com/aveksa/command.submit?cmd=getLoginInstloginTrustedAppructions",children:"https://instance.securid.com/aveksa/command.submit?cmd=getLoginInstloginTrustedAppructions"})})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\ud83d\udca1"," ",(0,r.jsx)(n.strong,{children:"Info:"})," The ",(0,r.jsx)(n.code,{children:"Client Id"}),", ",(0,r.jsx)(n.code,{children:"Client Secret"}),", and ",(0,r.jsx)(n.code,{children:"Auth URL"})," are part of the details for the trusted application on the ",(0,r.jsx)(n.strong,{children:"Admin > Web Services > Trusted Application"})," page."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,r.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(o.A,{children:[(0,r.jsx)(l.A,{value:"command",children:(0,r.jsx)(n.code,{children:"loginTrustedApp"})}),(0,r.jsx)(l.A,{value:"format",children:(0,r.jsxs)("table",{class:"table-container",children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"properties"}),(0,r.jsxs)("td",{children:["(Default) ",(0,r.jsx)(n.code,{children:"key=value"}),". most useful when requesting a single object. If multiple objects are returned, values is a csv. ie ",(0,r.jsx)(n.code,{children:"key=value1,value2,value3"})," where value1 is the value for the first object, value2 is the value for the 2nd object, etc."]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"json"}),(0,r.jsxs)("td",{children:["Useful format for parsing into javascript or other languages. See ",(0,r.jsx)(n.a,{href:"http://www.json.org",children:"www.json.org"})," for details."]})]})]})})]}),"\n",(0,r.jsx)(n.h3,{id:"headers",children:"Headers"}),"\n",(0,r.jsxs)(o.A,{children:[(0,r.jsx)(l.A,{value:"ClientId",children:(0,r.jsx)(n.code,{children:"Client ID"})}),(0,r.jsx)(l.A,{value:"ClientSecret",children:(0,r.jsx)(n.code,{children:"Client Secret"})}),(0,r.jsx)(l.A,{value:"Accept",children:(0,r.jsx)(n.code,{children:"application/json"})}),(0,r.jsx)(l.A,{value:"Content-Type",children:(0,r.jsx)(n.code,{children:"application/json"})})]}),"\n",(0,r.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,r.jsx)(n.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,r.jsxs)("table",{class:"table-container",children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.code,{children:"type"})}),(0,r.jsx)("td",{children:"Executed command name"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.code,{children:"token"})}),(0,r.jsx)("td",{children:"The security token for this user"})]})]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.h3,{id:"request-1",children:"Request"}),"\n",(0,r.jsxs)(o.A,{className:"unique-tabs",children:[(0,r.jsx)(l.A,{value:"Curl",attributes:{className:i.A.curl},children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl -L -X POST  \\\n"https://instance.securid.com/aveksa/command.submit?cmd=loginTrustedApp&format=json" \\\n-H "ClientId: 624366536445383515" \\\n-H "ClientSecret: auth31a2579c1238c21f0d8:17890a74:18a1462d107:-7fec0.7081724190419978" \\\n-H "Content-Type: application/json"\n'})})}),(0,r.jsx)(l.A,{value:"Python",attributes:{className:i.A.python},children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",metastring:"showLineNumbers",children:'import requests, json\n\nurl = "https://instance.securid.com/aveksa/command.submit"\n\nparams = {\n    "cmd": "loginTrustedApp",\n    "format": "json"\n}\n\nheaders = {\n    \'ClientId\': \'your_client_id_here\',\n    \'ClientSecret\': \'your_client_secret_here\',\n    \'Content-Type\': \'application/json\'\n}\n\nresponse = requests.post(url, params=params, headers=headers)\n\nif response.status_code == 200:\n    data = response.json()\n    token = data.get("token")\n    print(f"Token: {token}")\nelse:\n    print(f"Request failed with status code {response.status_code}")\n'})})}),(0,r.jsx)(l.A,{value:"Node.js",attributes:{className:i.A.nodejs},children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:"showLineNumbers",children:"const axios = require('axios');\n\nconst url = \"https://instance.securid.com/aveksa/command.submit\";\nconst params = {\n    cmd: \"loginTrustedApp\",\n    format: \"json\"\n};\n\nconst headers = {\n    'ClientId': 'your_client_id_here',\n    'ClientSecret': 'your_client_secret_here',\n    'Content-Type': 'application/json'\n};\n\naxios.post(url, null, { params, headers })\n    .then(response => {\n        if (response.status === 200) {\n            const responseData = response.data;\n            const token = responseData.token;\n            console.log(`Token: ${token}`);\n        } else {\n            console.log(`Request failed with status code ${response.status}`);\n        }\n    })\n    .catch(error => {\n        console.error('Error:', error);\n    });\n"})})})]}),"\n",(0,r.jsx)(n.h3,{id:"response-1",children:"Response"}),"\n",(0,r.jsxs)(o.A,{className:"unique-tabs",children:[(0,r.jsx)(l.A,{value:"200",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "token": "ta31012485e36e3be2c9:-28aff589:18a2295240d:-7bcd0.529824866054087"\n}\n'})})}),(0,r.jsx)(l.A,{value:"401",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:"<html>\n    <head>\n        <title>Error</title>\n    </head>\n    <body>Application could not be validated Query String=cmd=loginTrustedApp</body>\n</html>\n"})})})]})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var s=t(34164);const r={tabItem:"tabItem_Ymn6"};var a=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,o),hidden:t,children:n})}},98120:(e,n,t)=>{t.d(n,{A:()=>A});var s=t(96540),r=t(34164),a=t(86641),o=t(56347),l=t(205),i=t(38874);var c=t(82993);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:r}}=e;return{value:n,label:t,attributes:s,default:r}}))}(t);return function(e){const n=(void 0===(s=(e,n)=>e.value===n.value)&&(s=(e,n)=>e===n),(t=e).filter(((e,n)=>t.findIndex((n=>s(n,e)))!==n)));var t,s;if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const r=(0,o.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,a=d(e),[o,i]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:a}))),[u,m]=p({queryString:t,groupId:r}),[j,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,a]=(0,c.Dv)(t);return[r,(0,s.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:r}),x=(()=>{const e=u??j;return h({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{x&&i(x)}),[x]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),m(e),f(e)}),[m,f,a]),tabValues:a}}var j=t(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function b(e){let{className:n,block:t,selectedValue:s,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const n=e.currentTarget,t=i.indexOf(n),r=l[t].value;r!==s&&(c(n),o(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...a,className:(0,r.A)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function g(e){const n=m(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,x.jsx)(b,{...n,...e}),(0,x.jsx)(v,{...n,...e})]})}function A(e){const n=(0,j.A)();return(0,x.jsx)(g,{...e,children:u(e.children)},String(n))}},41447:(e,n,t)=>{t.d(n,{A:()=>s});const s={curl:"curl_orwx",python:"python_uXgC",nodejs:"nodejs_ucMl",powershell:"powershell_BcVw"}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var s=t(96540);const r={},a=s.createContext(r);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);