"use strict";(self.webpackChunkdocku=self.webpackChunkdocku||[]).push([[3797],{93493:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>x,frontMatter:()=>c,metadata:()=>o,toc:()=>h});var r=n(74848),s=n(28453),a=n(11470),i=n(19365),l=n(41447);const c={sidebar_position:2},d="Get Review Status",o={id:"review/getReviewStatus",title:"Get Review Status",description:"Returns the summary for a given review.",source:"@site/docs/review/getReviewStatus.md",sourceDirName:"review",slug:"/review/getReviewStatus",permalink:"/RSA/docs/review/getReviewStatus",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1714157031e3,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Get Review Result",permalink:"/RSA/docs/review/getReviewResult"},next:{title:"Refresh Review",permalink:"/RSA/docs/review/refreshReview"}},u={},h=[{value:"Request Parameters",id:"request-parameters",level:3},{value:"Request Headers",id:"request-headers",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Examples",id:"response-examples",level:3}];function j(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"get-review-status",children:"Get Review Status"}),"\n","\n",(0,r.jsx)(t.p,{children:"Returns the summary for a given review."}),"\n",(0,r.jsxs)("p",{children:[(0,r.jsx)("span",{class:"method-get",children:"GET "}),(0,r.jsx)("span",{class:"method-get-text",children:(0,r.jsx)(t.a,{href:"https://instance.securid.com/aveksa/command.submit?cmd=getReviewStatus",children:"https://instance.securid.com/aveksa/command.submit?cmd=getReviewStatus"})})]}),"\n",(0,r.jsx)(t.h3,{id:"request-parameters",children:"Request Parameters"}),"\n",(0,r.jsxs)("table",{class:"table-container",children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("label",{class:"required",children:"command"})}),(0,r.jsx)("td",{children:"getReviewStatus"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"format"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(t.code,{children:"properties"})," - (Default) ",(0,r.jsx)(t.code,{children:"key=value"}),". most useful when requesting a single object. If multiple objects are returned, values is a csv. ie ",(0,r.jsx)(t.code,{children:"key=value1,value2,value3"})," where value1 is the value for the first object, value2 is the value for the 2nd object, etc.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)(t.code,{children:"json"})," - Useful format for parsing into javascript or other languages. See ",(0,r.jsx)(t.a,{href:"http://www.json.org",children:"www.json.org"})," for details."]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("label",{class:"required",children:"id"})}),(0,r.jsx)("td",{children:"The id of the review result obtained from getReviewResult."})]})]}),"\n",(0,r.jsx)(t.h3,{id:"request-headers",children:"Request Headers"}),"\n",(0,r.jsxs)("table",{class:"table-container",children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("label",{class:"required",children:"Authorization"})}),(0,r.jsxs)("td",{children:["Bearer ",(0,r.jsx)(t.code,{children:"&lt;token&gt;"})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Accept"}),(0,r.jsx)("td",{children:"application/json"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Content-Type"}),(0,r.jsx)("td",{children:"application/json"})]})]}),"\n",(0,r.jsx)(t.h3,{id:"response-parameters",children:"Response Parameters"}),"\n",(0,r.jsxs)("table",{class:"table-container",children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.code,{children:"type"})}),(0,r.jsx)("td",{children:"Executed command name"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.code,{children:"name"})}),(0,r.jsx)("td",{children:"The name of the review."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.code,{children:"description"})}),(0,r.jsx)("td",{children:"The description for the review."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.code,{children:"review-type"})}),(0,r.jsx)("td",{children:"The type for review."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.code,{children:"state"})}),(0,r.jsx)("td",{children:"The state of the review."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.code,{children:"start-date"})}),(0,r.jsx)("td",{children:"The date the review was started."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.code,{children:"due-date"})}),(0,r.jsx)("td",{children:"The date the review is due (only returned if the review has a specific due date set)."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.code,{children:"complete-date"})}),(0,r.jsx)("td",{children:"The date the review was completed."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.code,{children:"reviewed-entitlements"})}),(0,r.jsx)("td",{children:"The number of entitlements reviewed."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.code,{children:"saved-entitlements"})}),(0,r.jsx)("td",{children:"The number of entitlements saved."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.code,{children:"total-entitlements"})}),(0,r.jsx)("td",{children:"The total number of entitlements in the review."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.code,{children:"reviewed-users"})}),(0,r.jsx)("td",{children:"The number of users reviewed."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.code,{children:"certified-users"})}),(0,r.jsx)("td",{children:"The number of certified users (Only returned if the review supports certification)"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.code,{children:"saved-users"})}),(0,r.jsx)("td",{children:"The number of users saved."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.code,{children:"total-users"})}),(0,r.jsx)("td",{children:"The total number of users in the review."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.code,{children:"reviewed-accounts"})}),(0,r.jsx)("td",{children:"The number of accounts reviewed. (Only valid for account reviews)"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.code,{children:"certified-accounts"})}),(0,r.jsx)("td",{children:"The number of certified accounts (Only returned if the account review supports certification)"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.code,{children:"saved-accounts"})}),(0,r.jsx)("td",{children:"The number of accounts saved. (Only valid for account reviews)"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.code,{children:"total-accounts"})}),(0,r.jsx)("td",{children:"The total number of accounts in the review. (Only valid for account reviews)"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.code,{children:"unassigned-review-items"})}),(0,r.jsx)("td",{children:"The number of unassigned review items."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.code,{children:"unassigned-certification-items"})}),(0,r.jsx)("td",{children:"The number of unassigned certification items."})]})]}),"\n",(0,r.jsx)(t.h3,{id:"request-example",children:"Request Example"}),"\n",(0,r.jsxs)(a.A,{className:"unique-tabs",children:[(0,r.jsx)(i.A,{value:"Curl",attributes:{className:l.A.curl},children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'curl -K -X GET  \\\n"https://instance.securid.com/aveksa/command.submit?cmd=getReviewStatus&format=json&run-id=61" \\\n-H "Authorization: Bearer <token>" \\\n-H "Content-Type: application/json"\n'})})}),(0,r.jsx)(i.A,{value:"Python",attributes:{className:l.A.python},children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'import requests\n\nurl = "https://instance.securid.com/aveksa/command.submit"\n\nparams = {\n    "cmd": "getReviewStatus",\n    "format": "json",\n    "id": "41"\n}\n\nheaders = {\n    \'Authorization\': \'Bearer <token>\',\n    \'Content-Type\': \'application/json\'\n}\n\nresponse = requests.get(url, params=params, headers=headers)\n\nif response.status_code == 200:\n    data = response.json()\n    print(data)\nelse:\n    print(f"Request failed with status code {response.status_code}")\n'})})}),(0,r.jsx)(i.A,{value:"Node.js",attributes:{className:l.A.nodejs},children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'const axios = require(\'axios\');\n\nconst url = "https://instance.securid.com/aveksa/command.submit";\n\nconst params = {\n    "cmd": "getReviewStatus",\n    "format": "json",\n    "id": "41"\n};\n\nconst headers = {\n    \'Authorization\': \'Bearer <token>\',\n    \'Content-Type\': \'application/json\'\n};\n\naxios.get(url, { params, headers })\n    .then(response => {\n        if (response.status === 200) {\n            console.log(response.data);\n        } else {\n            console.log(`Request failed with status code ${response.status}`);\n        }\n    })\n    .catch(error => {\n        console.error(\'Error:\', error);\n    });\n'})})})]}),"\n",(0,r.jsx)(t.h3,{id:"response-examples",children:"Response Examples"}),"\n",(0,r.jsxs)(a.A,{className:"unique-tabs",children:[(0,r.jsx)(i.A,{value:"200",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n    "data": {\n        "type": "getReviewStatus",\n        "state": "InActionable",\n        "name": "Azure Role #3-1",\n        "unassigned-review-items": "0",\n        "saved-entitlements": "0",\n        "saved-accounts": "0",\n        "reviewed-accounts": "0",\n        "reviewed-entitlements": "0",\n        "total-entitlements": "667",\n        "start-date": "2023-08-03 20:12:08",\n        "description": "",\n        "review-type": "account",\n        "total-accounts": "667"\n    }\n}\n'})})}),(0,r.jsx)(i.A,{value:"404 Invalid ID",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:"<html>\n    <head>\n        <title>Error</title>\n    </head>\n    <body>Could not find a review with the id 5917\n          Query String=cmd=getReviewStatus&amp;format=json&amp;id=5917</body>\n</html>\n"})})}),(0,r.jsx)(i.A,{value:"412 Missing ID",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:"<html>\n    <head>\n        <title>Error</title>\n    </head>\n    <body>The parameter id is required.\n           Query String=cmd=getReviewStatus&amp;format=json</body>\n</html>\n"})})}),(0,r.jsx)(i.A,{value:"500 Internal Error",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:"<html>\n    <head>\n        <title>Error</title>\n    </head>\n    <body>org.hibernate.exception.GenericJDBCException: could not execute query</body>\n</html>\n"})})})]})]})}function x(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(j,{...e})}):j(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var r=n(34164);const s={tabItem:"tabItem_Ymn6"};var a=n(74848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,i),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>y});var r=n(96540),s=n(34164),a=n(23104),i=n(56347),l=n(205),c=n(57485),d=n(31682),o=n(89466);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,d.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function j(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:n}=e;const s=(0,i.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,a=h(e),[i,c]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!j({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[d,u]=x({queryString:n,groupId:s}),[m,p]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,o.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:s}),v=(()=>{const e=d??m;return j({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{v&&c(v)}),[v]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!j({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),p(e)}),[u,p,a]),tabValues:a}}var p=n(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(74848);function b(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.a_)(),o=e=>{const t=e.currentTarget,n=c.indexOf(t),s=l[n].value;s!==r&&(d(t),i(s))},u=e=>{let t=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>c.push(e),onKeyDown:u,onClick:o,...a,className:(0,s.A)("tabs__item",v.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function w(e){let{lazy:t,children:n,selectedValue:s}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function g(e){const t=m(e);return(0,f.jsxs)("div",{className:(0,s.A)("tabs-container",v.tabList),children:[(0,f.jsx)(b,{...e,...t}),(0,f.jsx)(w,{...e,...t})]})}function y(e){const t=(0,p.A)();return(0,f.jsx)(g,{...e,children:u(e.children)},String(t))}},41447:(e,t,n)=>{n.d(t,{A:()=>r});const r={curl:"curl_orwx",python:"python_uXgC",nodejs:"nodejs_ucMl",powershell:"powershell_BcVw"}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var r=n(96540);const s={},a=r.createContext(s);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);