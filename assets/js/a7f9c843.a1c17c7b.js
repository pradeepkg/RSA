"use strict";(self.webpackChunkdocku=self.webpackChunkdocku||[]).push([[71178],{10008:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var n=t(74848),s=t(28453),a=t(11470),l=t(19365),i=t(41447);const o={sidebar_position:8},d="Upload Coverage",c={id:"review/uploadCoverage",title:"Upload Coverage",description:"Invoke a coverage refresh for a particular review definition or review result. This is equivalent to the coverage upload functionality when editing a review definition or review result that the UI supports today.",source:"@site/docs/review/uploadCoverage.md",sourceDirName:"review",slug:"/review/uploadCoverage",permalink:"/RSA/docs/review/uploadCoverage",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Update Unreviewed Items",permalink:"/RSA/docs/review/updateUnreviewedItems"},next:{title:"Rules",permalink:"/RSA/docs/category/rules"}},u={},h=[{value:"Request Parameters",id:"request-parameters",level:3},{value:"Request Headers",id:"request-headers",level:3},{value:"Request Body",id:"request-body",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Examples",id:"response-examples",level:3}];function p(e){const r={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"upload-coverage",children:"Upload Coverage"}),"\n","\n","\n",(0,n.jsx)(r.p,{children:"Invoke a coverage refresh for a particular review definition or review result. This is equivalent to the coverage upload functionality when editing a review definition or review result that the UI supports today."}),"\n",(0,n.jsxs)("p",{children:[(0,n.jsx)("span",{class:"method-post",children:"POST "}),(0,n.jsx)("span",{class:"method-post-text",children:(0,n.jsx)(r.a,{href:"https://instance.securid.com:443/aveksa/command.submit?cmd=uploadCoverage",children:"https://instance.securid.com:443/aveksa/command.submit?cmd=uploadCoverage"})})]}),"\n",(0,n.jsx)(r.h3,{id:"request-parameters",children:"Request Parameters"}),"\n",(0,n.jsxs)("table",{class:"table-container",children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("label",{class:"required",children:"command"})}),(0,n.jsx)("td",{children:"uploadCoverage"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"format"}),(0,n.jsxs)("td",{children:[(0,n.jsxs)("p",{children:[(0,n.jsx)("code",{children:"properties"})," - (Default) ",(0,n.jsx)("code",{children:"key=value"}),". most useful when requesting a single object. If multiple objects are returned, values is a csv. ie ",(0,n.jsx)("code",{children:"key=value1,value2,value3"})," where value1 is the value for the first object, value2 is the value for the 2nd object, etc."]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("code",{children:"json"})," - Useful format for parsing into javascript or other languages. See ",(0,n.jsx)("a",{href:"https://www.json.org",target:"_blank",children:(0,n.jsx)(r.a,{href:"http://www.json.org",children:"www.json.org"})})," for details."]})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("label",{class:"required",children:"name"})}),(0,n.jsx)("td",{children:"The name of the review result or review definition. The name parameter is mutually exclusive with the id parameter."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("label",{class:"required",children:"id"})}),(0,n.jsx)("td",{children:"The id of the review result or review definition. The id parameter is mutually exclusive with the name parameter."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("label",{class:"required",children:"type"})}),(0,n.jsxs)("td",{children:["Indicates the type of coverage file. Valid values : ",(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"monitor"}),(0,n.jsx)("li",{children:"reviewer"}),(0,n.jsx)("li",{children:"altmanager"})]})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"altManagerResolvesTo "}),(0,n.jsx)("td",{children:"The user attribute used to resolve entries in the alternate managers file."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"filename"}),(0,n.jsxs)("td",{children:[(0,n.jsx)("p",{children:"The filename in the import directory on the G&L server. The import directory is specified on the web services configuration page. Alternatively, the data can be sent as part of the request body."}),"This option is not recommended and file should be passed using the POST body"]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"request-headers",children:"Request Headers"}),"\n",(0,n.jsxs)("table",{class:"table-container",children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("label",{class:"required",children:"Authorization"})}),(0,n.jsxs)("td",{children:["Bearer ",(0,n.jsx)("code",{children:"<token>"})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Accept"}),(0,n.jsx)("td",{children:"application/json"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Content-Type"}),(0,n.jsx)("td",{children:"application/json"})]})]}),"\n",(0,n.jsx)(r.h3,{id:"request-body",children:"Request Body"}),"\n",(0,n.jsx)(r.p,{children:"Base64 encoded PNG image."}),"\n",(0,n.jsx)(r.h3,{id:"response-parameters",children:"Response Parameters"}),"\n",(0,n.jsxs)("table",{class:"table-container",children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"type"})}),(0,n.jsx)("td",{children:"Executed command name"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"status"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"success, failure"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"message"})}),(0,n.jsx)("td",{children:"Optional message to return along with the status."})]})]}),"\n",(0,n.jsx)(r.h3,{id:"request-example",children:"Request Example"}),"\n",(0,n.jsxs)(a.A,{className:"unique-tabs",children:[(0,n.jsx)(l.A,{value:"Curl",attributes:{className:i.A.curl},children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:'curl -L -X POST "https://instance.securid.com:443/aveksa/command.submit?cmd=uploadCoverage&id=1" \\\r\n"&type=monitor" \\\r\n-H "Content-Type: application/json" \\\r\n-H "Authorization: Bearer <token>" \\\r\n-d "user_id=\'lbelkin\'|user|1=1|app-role|name=\'Datadog\'|\r\nuser_id=\'mcastro\'|user|1=1|ent|name=\'Dynatrace\'|"\n'})})}),(0,n.jsx)(l.A,{value:"Python",attributes:{className:i.A.python},children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:'import requests\r\n\r\nurl = "https://instance.securid.com:443/aveksa/command.submit"\r\n\r\npost_data = """\r\nuser_id=\'lbelkin\'|user|1=1|app-role|name=\'Datadog\'|\r\nuser_id=\'mcastro\'|user|1=1|ent|name=\'Dynatrace\'|\r\n"""\r\n\r\nparams = {\r\n    "cmd": "uploadCoverage",\r\n    "format": "json",\r\n    "id": "61",\r\n    "type": "reviewer"\r\n}\r\n\r\nheaders = {\r\n    \'Authorization\': \'Bearer <token>\',\r\n    \'Content-Type\': \'application/x-www-form-urlencoded\'\r\n}\r\n\r\nresponse = requests.post(url, data=post_data, params=params, headers=headers)\r\n\r\nif response.status_code == 200:\r\n    data = response.json()\r\n    print(data)\r\nelse:\r\n    print(f"Request failed with status code {response.status_code}")\n'})})}),(0,n.jsx)(l.A,{value:"Node.js",attributes:{className:i.A.nodejs},children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:"const axios = require('axios');\r\n\r\nconst url = \"https://instance.securid.com:443/aveksa/command.submit\";\r\n\r\nconst post_data = \"user_id='lbelkin'|user|1=1|app-role|name='Datadog'|\\nuser_id='mcastro'|user|1=1|ent|name='Dynatrace'|\";\r\n\r\nconst params = {\r\n    \"cmd\": \"uploadCoverage\",\r\n    \"format\": \"json\",\r\n    \"id\": \"61\",\r\n    \"type\": \"reviewer\"\r\n};\r\n\r\nconst headers = {\r\n    'Authorization': 'Bearer <token>',\r\n    'Content-Type': 'application/x-www-form-urlencoded'\r\n};\r\n\r\naxios.post(url, post_data, { params, headers })\r\n    .then(response => {\r\n        if (response.status === 200) {\r\n            console.log(response.data);\r\n        } else {\r\n            console.log(`Request failed with status code ${response.status}`);\r\n        }\r\n    })\r\n    .catch(error => {\r\n        console.error('Error:', error);\r\n    });\n"})})})]}),"\n",(0,n.jsx)(r.h3,{id:"response-examples",children:"Response Examples"}),"\n",(0,n.jsxs)(a.A,{className:"unique-tabs",children:[(0,n.jsx)(l.A,{value:"200",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-json",children:'{\r\n    "data": {\r\n        "type": "uploadCoverage",\r\n        "status": "success"\r\n    }\r\n}\n'})})}),(0,n.jsx)(l.A,{value:"412 Missing Parameters",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-html",children:"<html>\r\n    <head>\r\n        <title>Error</title>\r\n    </head>\r\n    <body>The id parameter or the name parameter must be provided referencing a valid review \r\n            result or definition respectively.\r\n            Query String=cmd=uploadCoverage&amp;format=json</body>\r\n</html>\n"})})})]})]})}function m(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>l});t(96540);var n=t(34164);const s={tabItem:"tabItem_Ymn6"};var a=t(74848);function l(e){let{children:r,hidden:t,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,l),hidden:t,children:r})}},11470:(e,r,t)=>{t.d(r,{A:()=>y});var n=t(96540),s=t(34164),a=t(23104),l=t(56347),i=t(205),o=t(57485),d=t(31682),c=t(89466);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??function(e){return u(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:s}}=e;return{value:r,label:t,attributes:n,default:s}}))}(t);return function(e){const r=(0,d.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function p(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function m(e){let{queryString:r=!1,groupId:t}=e;const s=(0,l.W6)(),a=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,o.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const r=new URLSearchParams(s.location.search);r.set(a,e),s.replace({...s.location,search:r.toString()})}),[a,s])]}function v(e){const{defaultValue:r,queryString:t=!1,groupId:s}=e,a=h(e),[l,o]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:a}))),[d,u]=m({queryString:t,groupId:s}),[v,x]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[s,a]=(0,c.Dv)(t);return[s,(0,n.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),j=(()=>{const e=d??v;return p({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{j&&o(j)}),[j]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),x(e)}),[u,x,a]),tabValues:a}}var x=t(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(74848);function b(e){let{className:r,block:t,selectedValue:n,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.a_)(),c=e=>{const r=e.currentTarget,t=o.indexOf(r),s=i[t].value;s!==n&&(d(r),l(s))},u=e=>{let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;r=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;r=o[t]??o[o.length-1];break}}r?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},r),children:i.map((e=>{let{value:r,label:t,attributes:a}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>o.push(e),onKeyDown:u,onClick:c,...a,className:(0,s.A)("tabs__item",j.tabItem,a?.className,{"tabs__item--active":n===r}),children:t??r},r)}))})}function g(e){let{lazy:r,children:t,selectedValue:s}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=a.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:a.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==s})))})}function w(e){const r=v(e);return(0,f.jsxs)("div",{className:(0,s.A)("tabs-container",j.tabList),children:[(0,f.jsx)(b,{...e,...r}),(0,f.jsx)(g,{...e,...r})]})}function y(e){const r=(0,x.A)();return(0,f.jsx)(w,{...e,children:u(e.children)},String(r))}},41447:(e,r,t)=>{t.d(r,{A:()=>n});const n={curl:"curl_orwx",python:"python_uXgC",nodejs:"nodejs_ucMl",powershell:"powershell_BcVw"}},28453:(e,r,t)=>{t.d(r,{R:()=>l,x:()=>i});var n=t(96540);const s={},a=n.createContext(s);function l(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);