"use strict";(self.webpackChunkdocku=self.webpackChunkdocku||[]).push([[7373],{67042:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var n=r(74848),s=r(28453),a=r(11470),l=r(19365),i=r(41447);const o={sidebar_position:5},c="Set Review State",d={id:"review/setReviewState",title:"Set Review State",description:"Change the state of a review result.",source:"@site/docs/review/setReviewState.md",sourceDirName:"review",slug:"/review/setReviewState",permalink:"/RSA/docs/review/setReviewState",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1715787065e3,sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Run Review",permalink:"/RSA/docs/review/runReview"},next:{title:"Update Review Items",permalink:"/RSA/docs/review/updateReviewItems"}},u={},h=[{value:"Request",id:"request",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Headers",id:"headers",level:3},{value:"Response",id:"response",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Examples",id:"examples",level:2},{value:"Request",id:"request-1",level:3},{value:"Response",id:"response-1",level:3}];function p(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"set-review-state",children:"Set Review State"}),"\n","\n",(0,n.jsx)(t.p,{children:"Change the state of a review result."}),"\n",(0,n.jsxs)("p",{children:[(0,n.jsx)("span",{class:"method-get",children:"GET "}),(0,n.jsx)("span",{class:"method-get-text",children:(0,n.jsx)(t.a,{href:"https://instance.securid.com/aveksa/command.submit?cmd=setReviewState",children:"https://instance.securid.com/aveksa/command.submit?cmd=setReviewState"})})]}),"\n",(0,n.jsx)(t.h2,{id:"request",children:"Request"}),"\n",(0,n.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)("table",{class:"table-container",children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("label",{class:"required",children:"command"})}),(0,n.jsx)("td",{children:"setReviewState"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"format"}),(0,n.jsxs)("td",{children:[(0,n.jsxs)("p",{children:[(0,n.jsx)(t.code,{children:"properties"})," - (Default) ",(0,n.jsx)(t.code,{children:"key=value"}),". most useful when requesting a single object. If multiple objects are returned, values is a csv. ie ",(0,n.jsx)(t.code,{children:"key=value1,value2,value3"})," where value1 is the value for the first object, value2 is the value for the 2nd object, etc."]}),(0,n.jsxs)("p",{children:[(0,n.jsx)(t.code,{children:"json"})," - Useful format for parsing into javascript or other languages. See ",(0,n.jsx)("a",{href:"https://www.json.org",target:"_blank",children:(0,n.jsx)(t.a,{href:"http://www.json.org",children:"www.json.org"})})," for details."]})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("label",{class:"required",children:"id"})}),(0,n.jsx)("td",{children:"The id of the review result."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("label",{class:"required",children:"state"})}),(0,n.jsxs)("td",{children:["The state to set for the review. Valid values : ",(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"onhold"}),(0,n.jsx)("li",{children:"active"}),(0,n.jsx)("li",{children:"completed"})]})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"headers",children:"Headers"}),"\n",(0,n.jsxs)("table",{class:"table-container",children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("label",{class:"required",children:"Authorization"})}),(0,n.jsxs)("td",{children:["Bearer ",(0,n.jsx)(t.code,{children:"token"})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Accept"}),(0,n.jsx)("td",{children:"application/json"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Content-Type"}),(0,n.jsx)("td",{children:"application/json"})]})]}),"\n",(0,n.jsx)(t.h2,{id:"response",children:"Response"}),"\n",(0,n.jsx)(t.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,n.jsxs)("table",{class:"table-container",children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(t.code,{children:"type"})}),(0,n.jsx)("td",{children:"Executed command name"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(t.code,{children:"name"})}),(0,n.jsx)("td",{children:"The name of the review."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(t.code,{children:"status"})}),(0,n.jsx)("td",{children:"success or failure."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(t.code,{children:"message"})}),(0,n.jsx)("td",{children:"Optional message to return along with the status."})]})]}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.h3,{id:"request-1",children:"Request"}),"\n",(0,n.jsxs)(a.A,{className:"unique-tabs",children:[(0,n.jsx)(l.A,{value:"Curl",attributes:{className:i.A.curl},children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:'curl -K -X GET  \\\r\n"https://instance.securid.com/aveksa/command.submit?cmd=setReviewState&id=1&state=active" \\\r\n-H "Authorization: Bearer <token>" \\\r\n-H "Content-Type: application/json"\n'})})}),(0,n.jsx)(l.A,{value:"Python",attributes:{className:i.A.python},children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'import requests\r\n\r\nurl = "https://instance.securid.com/aveksa/command.submit"\r\n\r\nparams = {\r\n    "cmd": "setReviewState",\r\n    "format": "json",\r\n    "id": "62",\r\n    "state": "active"\r\n}\r\n\r\nheaders = {\r\n    \'Authorization\': \'Bearer <token>\',\r\n    \'Content-Type\': \'application/json\'\r\n}\r\n\r\nresponse = requests.get(url, params=params, headers=headers)\r\n\r\nif response.status_code == 200:\r\n    data = response.json()\r\n    print(data)\r\nelse:\r\n    print(f"Request failed with status code {response.status_code}")\n'})})}),(0,n.jsx)(l.A,{value:"Node.js",attributes:{className:i.A.nodejs},children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:'const axios = require(\'axios\');\r\n\r\nconst url = "https://instance.securid.com/aveksa/command.submit";\r\n\r\nconst params = {\r\n    "cmd": "setReviewState",\r\n    "format": "json",\r\n    "id": "62",\r\n    "state": "active"\r\n};\r\n\r\nconst headers = {\r\n    \'Authorization\': \'Bearer <token>\',\r\n    \'Content-Type\': \'application/json\'\r\n};\r\n\r\naxios.get(url, { params, headers })\r\n    .then(response => {\r\n        if (response.status === 200) {\r\n            console.log(response.data);\r\n        } else {\r\n            console.log(`Request failed with status code ${response.status}`);\r\n        }\r\n    })\r\n    .catch(error => {\r\n        console.error(\'Error:\', error);\r\n    });\n'})})})]}),"\n",(0,n.jsx)(t.h3,{id:"response-1",children:"Response"}),"\n",(0,n.jsxs)(a.A,{className:"unique-tabs",children:[(0,n.jsx)(l.A,{value:"200",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\r\n    "data": {\r\n        "type": "setReviewState",\r\n        "status": "success",\r\n        "name": "UAR-3"\r\n    }\r\n}\n'})})}),(0,n.jsx)(l.A,{value:"404 Invalid Review Id",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",children:"<html>\r\n    <head>\r\n        <title>Error</title>\r\n    </head>\r\n    <body>Could not find a report with the id 62000\r\n Query String=cmd=setReviewState&amp;format=json&amp;id=62000&amp;state=active</body>\r\n</html>\n"})})}),(0,n.jsx)(l.A,{value:"412 Missing Parameter",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",children:"<html>\r\n  <head>\r\n    <title>Error</title>\r\n  </head>\r\n  <body>The parameter state is required. Query String=cmd=setReviewState&amp;format=json</body>\r\n</html>\n"})})})]})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>l});r(96540);var n=r(34164);const s={tabItem:"tabItem_Ymn6"};var a=r(74848);function l(e){let{children:t,hidden:r,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,l),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>y});var n=r(96540),s=r(34164),a=r(23104),l=r(56347),i=r(205),o=r(57485),c=r(31682),d=r(89466);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}(r);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const s=(0,l.W6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function j(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,a=h(e),[l,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[c,u]=m({queryString:r,groupId:s}),[j,v]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,d.Dv)(r);return[s,(0,n.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:s}),x=(()=>{const e=c??j;return p({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{x&&o(x)}),[x]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),v(e)}),[u,v,a]),tabValues:a}}var v=r(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=r(74848);function b(e){let{className:t,block:r,selectedValue:n,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const t=e.currentTarget,r=o.indexOf(t),s=i[r].value;s!==n&&(c(t),l(s))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;t=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;t=o[r]??o[o.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},t),children:i.map((e=>{let{value:t,label:r,attributes:a}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>o.push(e),onKeyDown:u,onClick:d,...a,className:(0,s.A)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function w(e){let{lazy:t,children:r,selectedValue:s}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function g(e){const t=j(e);return(0,f.jsxs)("div",{className:(0,s.A)("tabs-container",x.tabList),children:[(0,f.jsx)(b,{...t,...e}),(0,f.jsx)(w,{...t,...e})]})}function y(e){const t=(0,v.A)();return(0,f.jsx)(g,{...e,children:u(e.children)},String(t))}},41447:(e,t,r)=>{r.d(t,{A:()=>n});const n={curl:"curl_orwx",python:"python_uXgC",nodejs:"nodejs_ucMl",powershell:"powershell_BcVw"}},28453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>i});var n=r(96540);const s={},a=n.createContext(s);function l(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);