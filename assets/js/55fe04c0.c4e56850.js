"use strict";(self.webpackChunkdocku=self.webpackChunkdocku||[]).push([[1887],{76713:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>h});var t=s(74848),r=s(28453),a=s(11470),o=s(19365),l=s(41447);const i={sidebar_position:3},c="Login User",u={id:"authentication/loginUser",title:"Login User",description:"Create a user session token, which can then be passed to other web services.",source:"@site/docs/authentication/loginUser.md",sourceDirName:"authentication",slug:"/authentication/loginUser",permalink:"/RSA/docs/authentication/loginUser",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1714157031e3,sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Login as Trusted Application",permalink:"/RSA/docs/authentication/loginTrustedApp"},next:{title:"Logout User",permalink:"/RSA/docs/authentication/logoutUser"}},d={},h=[{value:"Request Parameters",id:"request-parameters",level:3},{value:"Request Headers",id:"request-headers",level:3},{value:"Request Body",id:"request-body",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Examples",id:"response-examples",level:3}];function p(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"login-user",children:"Login User"}),"\n",(0,t.jsx)(n.p,{children:"Create a user session token, which can then be passed to other web services."}),"\n",(0,t.jsxs)("p",{children:[(0,t.jsx)("span",{class:"method-post",children:"POST "}),(0,t.jsx)("span",{class:"method-post-text",children:(0,t.jsx)(n.a,{href:"https://instance.securid.com/aveksa/command.submit?cmd=loginUser",children:"https://instance.securid.com/aveksa/command.submit?cmd=loginUser"})})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\ud83d\udca1"," ",(0,t.jsx)(n.strong,{children:"Tip:"})," In order to get the login instructions or guidance on how to use the system, the ",(0,t.jsx)(n.a,{href:"getLoginInstructions",children:"getLoginInstructions"})," command can be called. This returned information can then be shown to the end user prior to calling the loginUser command."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"request-parameters",children:"Request Parameters"}),"\n",(0,t.jsxs)("table",{class:"table-container",children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("label",{class:"required",children:"command"})}),(0,t.jsx)("td",{children:"getLoginInstructions"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"format"}),(0,t.jsxs)("td",{children:[(0,t.jsx)(n.code,{children:"properties"})," - (Default) ",(0,t.jsx)(n.code,{children:"key=value"}),". most useful when requesting a single object. If multiple objects are returned, values is a csv. ie ",(0,t.jsx)(n.code,{children:"key=value1,value2,value3"})," where value1 is the value for the first object, value2 is the value for the 2nd object, etc.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)(n.code,{children:"json"})," - Useful format for parsing into javascript or other languages. See ",(0,t.jsx)(n.a,{href:"http://www.json.org",children:"www.json.org"})," for details."]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"request-headers",children:"Request Headers"}),"\n",(0,t.jsxs)("table",{class:"table-container",children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("label",{class:"required",children:"Authorization"})}),(0,t.jsxs)("td",{children:["Bearer ",(0,t.jsx)(n.code,{children:"&lt;token&gt;"})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Accept"}),(0,t.jsx)("td",{children:"application/json"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Content-Type"}),(0,t.jsx)("td",{children:"application/json"})]})]}),"\n",(0,t.jsx)(n.h3,{id:"request-body",children:"Request Body"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:"<username>{{UserName}}</username>\n<password>{{Password}}</password>\n<authsource>value</authsource>\n"})}),"\n",(0,t.jsxs)("table",{class:"table-container",children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(n.code,{children:"UserName"})}),(0,t.jsx)("td",{children:"The username used to log in."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(n.code,{children:"Password"})}),(0,t.jsx)("td",{children:"The password used to log in."})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(n.code,{children:"authsource"})}),(0,t.jsx)("td",{children:"An optional auth source provider name used to log in with such as an ldap provider. This can included as an URL parameter alternatively. In the case of using a third party SSO please ensure an SSO Authenticator Provider is configured appropriately and then invoke the loginUser command with the right authsource. The auth source provider name used to log in such as SSO user header or SSO SAML can be provided as content in the POST or as a request parameter. A request parameter is recommended so the post can be used for anything like a SAML assertion."})]})]}),"\n",(0,t.jsx)(n.h3,{id:"response-parameters",children:"Response Parameters"}),"\n",(0,t.jsxs)("table",{class:"table-container",children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(n.code,{children:"type"})}),(0,t.jsx)("td",{children:"Executed command name"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(n.code,{children:"token"})}),(0,t.jsx)("td",{children:"The security token for this user"})]})]}),"\n",(0,t.jsx)(n.h3,{id:"request-example",children:"Request Example"}),"\n",(0,t.jsxs)(a.A,{className:"unique-tabs",children:[(0,t.jsx)(o.A,{value:"Curl",attributes:{className:l.A.curl},children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl --location --request POST  \\\n"https://instance.securid.com/aveksa/command.submit?cmd=loginUser&format=json" \\\n-H "Content-Type: application/json" \\\n--data "<username>user01</username><password>password123</password>"\n'})})}),(0,t.jsx)(o.A,{value:"Python",attributes:{className:l.A.python},children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",metastring:"showLineNumbers",children:'import requests, json\n\nurl = "https://instance.securid.com/aveksa/command.submit"\n\nparams = {\n    "cmd": "loginUser",\n    "format": "json"\n}\n\nusername = "username_here"\npassword = "password_here"\npayload = f"<username>{username}</username><password>{password}</password>"\n\nheaders = {\n    \'Content-Type\': \'application/xml\'\n}\n\nresponse = requests.post(url, params=params, data=payload, headers=headers)\n\nif response.status_code == 200:\n    data = response.json()\n    token = data.get("data", {}).get("token")\n    if token:\n        print(f"Token: {token}")\n    else:\n        print("Token not found in the response.")\nelse:\n    print(f"Request failed with status code {response.status_code}")\n'})})}),(0,t.jsx)(o.A,{value:"Node.js",attributes:{className:l.A.nodejs},children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:"showLineNumbers",children:'const axios = require(\'axios\');\n\nconst url = "https://instance.securid.com/aveksa/command.submit";\n\nconst params = {\n    cmd: "loginUser",\n    format: "json"\n};\n\nconst username = "username_here";\nconst password = "password_here";\nconst payload = `<username>${username}</username><password>${password}</password>`;\n\nconst headers = {\n    \'Content-Type\': \'application/xml\'\n};\n\naxios.post(url, payload, { params, headers })\n    .then(response => {\n        if (response.status === 200) {\n            const responseData = response.data;\n            const token = responseData.data?.token;\n            if (token) {\n                console.log(`Token: ${token}`);\n            } else {\n                console.log("Token not found in the response.");\n            }\n        } else {\n            console.log(`Request failed with status code ${response.status}`);\n        }\n    })\n    .catch(error => {\n        console.error(\'Error:\', error);\n    });\n'})})})]}),"\n",(0,t.jsx)(n.h3,{id:"response-examples",children:"Response Examples"}),"\n",(0,t.jsxs)(a.A,{className:"unique-tabs",children:[(0,t.jsx)(o.A,{value:"200",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "data": {\n        "type": "loginUser",\n        "token": "ws31012566e36e3be2c9:-28aff589:18a2758240d:-7c4e0.5767652570173257"\n    }\n}\n'})})}),(0,t.jsx)(o.A,{value:"401",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:"<html>\n    <head>\n        <title>Error</title>\n    </head>\n    <body>User could not be validated. The username or password may be incorrect. \n            Query String=cmd=loginUser&amp;format=json</body>\n</html>\n"})})})]})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},19365:(e,n,s)=>{s.d(n,{A:()=>o});s(96540);var t=s(34164);const r={tabItem:"tabItem_Ymn6"};var a=s(74848);function o(e){let{children:n,hidden:s,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,o),hidden:s,children:n})}},11470:(e,n,s)=>{s.d(n,{A:()=>y});var t=s(96540),r=s(34164),a=s(23104),o=s(56347),l=s(205),i=s(57485),c=s(31682),u=s(89466);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:s}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:s,attributes:t,default:r}}=e;return{value:n,label:s,attributes:t,default:r}}))}(s);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function p(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:s}=e;const r=(0,o.W6)(),a=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,i.aZ)(a),(0,t.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function x(e){const{defaultValue:n,queryString:s=!1,groupId:r}=e,a=h(e),[o,i]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:a}))),[c,d]=m({queryString:s,groupId:r}),[x,j]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,a]=(0,u.Dv)(s);return[r,(0,t.useCallback)((e=>{s&&a.set(e)}),[s,a])]}({groupId:r}),b=(()=>{const e=c??x;return p({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{b&&i(b)}),[b]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),j(e)}),[d,j,a]),tabValues:a}}var j=s(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=s(74848);function g(e){let{className:n,block:s,selectedValue:t,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const n=e.currentTarget,s=i.indexOf(n),r=l[s].value;r!==t&&(c(n),o(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const s=i.indexOf(e.currentTarget)+1;n=i[s]??i[0];break}case"ArrowLeft":{const s=i.indexOf(e.currentTarget)-1;n=i[s]??i[i.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":s},n),children:l.map((e=>{let{value:n,label:s,attributes:a}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...a,className:(0,r.A)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":t===n}),children:s??n},n)}))})}function v(e){let{lazy:n,children:s,selectedValue:r}=e;const a=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function w(e){const n=x(e);return(0,f.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,f.jsx)(g,{...n,...e}),(0,f.jsx)(v,{...n,...e})]})}function y(e){const n=(0,j.A)();return(0,f.jsx)(w,{...e,children:d(e.children)},String(n))}},41447:(e,n,s)=>{s.d(n,{A:()=>t});const t={curl:"curl_orwx",python:"python_uXgC",nodejs:"nodejs_ucMl",powershell:"powershell_BcVw"}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var t=s(96540);const r={},a=t.createContext(r);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);