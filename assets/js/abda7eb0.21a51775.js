"use strict";(self.webpackChunkdocku=self.webpackChunkdocku||[]).push([[37373],{67042:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var s=r(74848),n=r(28453),a=r(11470),l=r(19365),i=r(41447);const o={sidebar_position:5},c="Set Review State",d={id:"review/setReviewState",title:"Set Review State",description:"Change the state of a review result.",source:"@site/docs/review/setReviewState.md",sourceDirName:"review",slug:"/review/setReviewState",permalink:"/RSA/docs/review/setReviewState",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1714157031e3,sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Run Review",permalink:"/RSA/docs/review/runReview"},next:{title:"Update Review Items",permalink:"/RSA/docs/review/updateReviewItems"}},u={},h=[{value:"Request Parameters",id:"request-parameters",level:3},{value:"Request Headers",id:"request-headers",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Examples",id:"response-examples",level:3}];function p(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"set-review-state",children:"Set Review State"}),"\n","\n",(0,s.jsx)(t.p,{children:"Change the state of a review result."}),"\n",(0,s.jsxs)("p",{children:[(0,s.jsx)("span",{class:"method-get",children:"GET "}),(0,s.jsx)("span",{class:"method-get-text",children:(0,s.jsx)(t.a,{href:"https://instance.securid.com/aveksa/command.submit?cmd=setReviewState",children:"https://instance.securid.com/aveksa/command.submit?cmd=setReviewState"})})]}),"\n",(0,s.jsx)(t.h3,{id:"request-parameters",children:"Request Parameters"}),"\n",(0,s.jsxs)("table",{class:"table-container",children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("label",{class:"required",children:"command"})}),(0,s.jsx)("td",{children:"setReviewState"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"format"}),(0,s.jsxs)("td",{children:[(0,s.jsxs)("p",{children:[(0,s.jsx)(t.code,{children:"properties"})," - (Default) ",(0,s.jsx)(t.code,{children:"key=value"}),". most useful when requesting a single object. If multiple objects are returned, values is a csv. ie ",(0,s.jsx)(t.code,{children:"key=value1,value2,value3"})," where value1 is the value for the first object, value2 is the value for the 2nd object, etc."]}),(0,s.jsxs)("p",{children:[(0,s.jsx)(t.code,{children:"json"})," - Useful format for parsing into javascript or other languages. See ",(0,s.jsx)("a",{href:"https://www.json.org",target:"_blank",children:(0,s.jsx)(t.a,{href:"http://www.json.org",children:"www.json.org"})})," for details."]})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("label",{class:"required",children:"id"})}),(0,s.jsx)("td",{children:"The id of the review result."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("label",{class:"required",children:"state"})}),(0,s.jsxs)("td",{children:["The state to set for the review. Valid values : ",(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"onhold"}),(0,s.jsx)("li",{children:"active"}),(0,s.jsx)("li",{children:"completed"})]})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"request-headers",children:"Request Headers"}),"\n",(0,s.jsxs)("table",{class:"table-container",children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("label",{class:"required",children:"Authorization"})}),(0,s.jsxs)("td",{children:["Bearer ",(0,s.jsx)(t.code,{children:"&lt;token&gt;"})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Accept"}),(0,s.jsx)("td",{children:"application/json"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Content-Type"}),(0,s.jsx)("td",{children:"application/json"})]})]}),"\n",(0,s.jsx)(t.h3,{id:"response-parameters",children:"Response Parameters"}),"\n",(0,s.jsxs)("table",{class:"table-container",children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(t.code,{children:"type"})}),(0,s.jsx)("td",{children:"Executed command name"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(t.code,{children:"name"})}),(0,s.jsx)("td",{children:"The name of the review."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(t.code,{children:"status"})}),(0,s.jsx)("td",{children:"success or failure."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(t.code,{children:"message"})}),(0,s.jsx)("td",{children:"Optional message to return along with the status."})]})]}),"\n",(0,s.jsx)(t.h3,{id:"request-example",children:"Request Example"}),"\n",(0,s.jsxs)(a.A,{className:"unique-tabs",children:[(0,s.jsx)(l.A,{value:"Curl",attributes:{className:i.A.curl},children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'curl -K -X GET  \\\r\n"https://instance.securid.com/aveksa/command.submit?cmd=setReviewState&id=1&state=active" \\\r\n-H "Authorization: Bearer <token>" \\\r\n-H "Content-Type: application/json"\n'})})}),(0,s.jsx)(l.A,{value:"Python",attributes:{className:i.A.python},children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'import requests\r\n\r\nurl = "https://instance.securid.com/aveksa/command.submit"\r\n\r\nparams = {\r\n    "cmd": "setReviewState",\r\n    "format": "json",\r\n    "id": "62",\r\n    "state": "active"\r\n}\r\n\r\nheaders = {\r\n    \'Authorization\': \'Bearer <token>\',\r\n    \'Content-Type\': \'application/json\'\r\n}\r\n\r\nresponse = requests.get(url, params=params, headers=headers)\r\n\r\nif response.status_code == 200:\r\n    data = response.json()\r\n    print(data)\r\nelse:\r\n    print(f"Request failed with status code {response.status_code}")\n'})})}),(0,s.jsx)(l.A,{value:"Node.js",attributes:{className:i.A.nodejs},children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'const axios = require(\'axios\');\r\n\r\nconst url = "https://instance.securid.com/aveksa/command.submit";\r\n\r\nconst params = {\r\n    "cmd": "setReviewState",\r\n    "format": "json",\r\n    "id": "62",\r\n    "state": "active"\r\n};\r\n\r\nconst headers = {\r\n    \'Authorization\': \'Bearer <token>\',\r\n    \'Content-Type\': \'application/json\'\r\n};\r\n\r\naxios.get(url, { params, headers })\r\n    .then(response => {\r\n        if (response.status === 200) {\r\n            console.log(response.data);\r\n        } else {\r\n            console.log(`Request failed with status code ${response.status}`);\r\n        }\r\n    })\r\n    .catch(error => {\r\n        console.error(\'Error:\', error);\r\n    });\n'})})})]}),"\n",(0,s.jsx)(t.h3,{id:"response-examples",children:"Response Examples"}),"\n",(0,s.jsxs)(a.A,{className:"unique-tabs",children:[(0,s.jsx)(l.A,{value:"200",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\r\n    "data": {\r\n        "type": "setReviewState",\r\n        "status": "success",\r\n        "name": "UAR-3"\r\n    }\r\n}\n'})})}),(0,s.jsx)(l.A,{value:"404 Invalid Review Id",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:"<html>\r\n    <head>\r\n        <title>Error</title>\r\n    </head>\r\n    <body>Could not find a report with the id 62000\r\n Query String=cmd=setReviewState&amp;format=json&amp;id=62000&amp;state=active</body>\r\n</html>\n"})})}),(0,s.jsx)(l.A,{value:"412 Missing Parameter",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:"<html>\r\n  <head>\r\n    <title>Error</title>\r\n  </head>\r\n  <body>The parameter state is required. Query String=cmd=setReviewState&amp;format=json</body>\r\n</html>\n"})})})]})]})}function m(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>l});r(96540);var s=r(34164);const n={tabItem:"tabItem_Ymn6"};var a=r(74848);function l(e){let{children:t,hidden:r,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(n.tabItem,l),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>y});var s=r(96540),n=r(34164),a=r(23104),l=r(56347),i=r(205),o=r(57485),c=r(31682),d=r(89466);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:r,attributes:s,default:n}}=e;return{value:t,label:r,attributes:s,default:n}}))}(r);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const n=(0,l.W6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(n.location.search);t.set(a,e),n.replace({...n.location,search:t.toString()})}),[a,n])]}function j(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,a=h(e),[l,o]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:a}))),[c,u]=m({queryString:r,groupId:n}),[j,x]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,a]=(0,d.Dv)(r);return[n,(0,s.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:n}),v=(()=>{const e=c??j;return p({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{v&&o(v)}),[v]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),x(e)}),[u,x,a]),tabValues:a}}var x=r(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=r(74848);function b(e){let{className:t,block:r,selectedValue:s,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const t=e.currentTarget,r=o.indexOf(t),n=i[r].value;n!==s&&(c(t),l(n))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;t=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;t=o[r]??o[o.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":r},t),children:i.map((e=>{let{value:t,label:r,attributes:a}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>o.push(e),onKeyDown:u,onClick:d,...a,className:(0,n.A)("tabs__item",v.tabItem,a?.className,{"tabs__item--active":s===t}),children:r??t},t)}))})}function w(e){let{lazy:t,children:r,selectedValue:n}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===n));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function g(e){const t=j(e);return(0,f.jsxs)("div",{className:(0,n.A)("tabs-container",v.tabList),children:[(0,f.jsx)(b,{...e,...t}),(0,f.jsx)(w,{...e,...t})]})}function y(e){const t=(0,x.A)();return(0,f.jsx)(g,{...e,children:u(e.children)},String(t))}},41447:(e,t,r)=>{r.d(t,{A:()=>s});const s={curl:"curl_orwx",python:"python_uXgC",nodejs:"nodejs_ucMl",powershell:"powershell_BcVw"}},28453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>i});var s=r(96540);const n={},a=s.createContext(n);function l(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);