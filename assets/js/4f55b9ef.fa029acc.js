"use strict";(self.webpackChunkdocku=self.webpackChunkdocku||[]).push([[2977],{86734:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var n=s(74848),r=s(28453),a=s(11470),i=s(19365),l=s(41447);const o={sidebar_position:7},c="Update Unreviewed Items",d={id:"review/updateUnreviewedItems",title:"Update Unreviewed Items",description:"Update the unreviewed items for a given review result marking them as either revoke or maintain.",source:"@site/docs/review/updateUnreviewedItems.md",sourceDirName:"review",slug:"/review/updateUnreviewedItems",permalink:"/RSA/docs/review/updateUnreviewedItems",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1714157031e3,sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Update Review Items",permalink:"/RSA/docs/review/updateReviewItems"},next:{title:"Upload Coverage",permalink:"/RSA/docs/review/uploadCoverage"}},u={},h=[{value:"Request Parameters",id:"request-parameters",level:3},{value:"Request Headers",id:"request-headers",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Examples",id:"response-examples",level:3}];function m(e){const t={a:"a",code:"code",em:"em",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"update-unreviewed-items",children:"Update Unreviewed Items"}),"\n","\n",(0,n.jsxs)(t.p,{children:["Update the unreviewed items for a given review result marking them as either ",(0,n.jsx)(t.em,{children:(0,n.jsx)(t.strong,{children:"revoke"})})," or ",(0,n.jsx)(t.em,{children:(0,n.jsx)(t.strong,{children:"maintain"})}),"."]}),"\n",(0,n.jsxs)("p",{children:[(0,n.jsx)("span",{class:"method-get",children:"GET "}),(0,n.jsx)("span",{class:"method-get-text",children:(0,n.jsx)(t.a,{href:"https://instance.securid.com/aveksa/command.submit?cmd=updateUnreviewedItems",children:"https://instance.securid.com/aveksa/command.submit?cmd=updateUnreviewedItems"})})]}),"\n",(0,n.jsx)(t.h3,{id:"request-parameters",children:"Request Parameters"}),"\n",(0,n.jsxs)("table",{class:"table-container",children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("label",{class:"required",children:"command"})}),(0,n.jsx)("td",{children:"updateUnreviewedItems"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"format"}),(0,n.jsxs)("td",{children:[(0,n.jsx)(t.code,{children:"properties"})," - (Default) ",(0,n.jsx)(t.code,{children:"key=value"}),". most useful when requesting a single object. If multiple objects are returned, values is a csv. ie ",(0,n.jsx)(t.code,{children:"key=value1,value2,value3"})," where value1 is the value for the first object, value2 is the value for the 2nd object, etc.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(t.code,{children:"json"})," - Useful format for parsing into javascript or other languages. See ",(0,n.jsx)(t.a,{href:"http://www.json.org",children:"www.json.org"})," for details."]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("label",{class:"required",children:"id"})}),(0,n.jsx)("td",{children:"The id of the review result. The id parameter is mutually exclusive with the name parameter."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("label",{class:"required",children:"state"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)(t.code,{children:"revoke, maintain"})," Indicates what state all the unreviewed items should be set to."]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"unassigned"}),(0,n.jsxs)("td",{children:[(0,n.jsx)(t.code,{children:"true, false"})," Indicates assigned items should be updated. Defaults to true if not specified."]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("label",{class:"required",children:"grouping"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)(t.code,{children:"asset, component"})," When the state is revoke, this parameter specifies how changes should be grouped to generate change requests."]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"comment"}),(0,n.jsx)("td",{children:"An optional comment to set for the items."})]})]}),"\n",(0,n.jsx)(t.h3,{id:"request-headers",children:"Request Headers"}),"\n",(0,n.jsxs)("table",{class:"table-container",children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("label",{class:"required",children:"Authorization"})}),(0,n.jsxs)("td",{children:["Bearer ",(0,n.jsx)(t.code,{children:"&lt;token&gt;"})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Accept"}),(0,n.jsx)("td",{children:"application/json"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Content-Type"}),(0,n.jsx)("td",{children:"application/json"})]})]}),"\n",(0,n.jsx)(t.h3,{id:"response-parameters",children:"Response Parameters"}),"\n",(0,n.jsxs)("table",{class:"table-container",children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(t.code,{children:"type"})}),(0,n.jsx)("td",{children:"Executed command name"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(t.code,{children:"name"})}),(0,n.jsx)("td",{children:"The name of the review."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(t.code,{children:"status"})}),(0,n.jsx)("td",{children:(0,n.jsx)(t.code,{children:"success, failure"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(t.code,{children:"message"})}),(0,n.jsx)("td",{children:"Optional message to return along with the status."})]})]}),"\n",(0,n.jsx)(t.h3,{id:"request-example",children:"Request Example"}),"\n",(0,n.jsxs)(a.A,{className:"unique-tabs",children:[(0,n.jsx)(i.A,{value:"Curl",attributes:{className:l.A.curl},children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:'curl -K -X GET  \\\n"https://instance.securid.com/aveksa/command.submit?cmd=updateUnreviewedItems&format=json&id=1&state=revoke" \\\n"&grouping=asset&comment=This is a sample comment" \\\n-H "Authorization: Bearer <token>" \\\n-H "Content-Type: application/json"\n'})})}),(0,n.jsx)(i.A,{value:"Python",attributes:{className:l.A.python},children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'import requests\n\nurl = "https://instance.securid.com/aveksa/command.submit"\n\nparams = {\n    "cmd": "updateUnreviewedItems",\n    "format": "json",\n    "id": "62",\n    "state": "revoke",\n    "comment": "This is a sample comment"\n}\n\nheaders = {\n    \'Authorization\': \'Bearer <token>\',\n    \'Content-Type\': \'application/json\'\n}\n\nresponse = requests.get(url, params=params, headers=headers)\n\nif response.status_code == 200:\n    data = response.json()\n    print(data)\nelse:\n    print(f"Request failed with status code {response.status_code}")\n'})})}),(0,n.jsx)(i.A,{value:"Node.js",attributes:{className:l.A.nodejs},children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:'const axios = require(\'axios\');\n\nconst url = "https://instance.securid.com/aveksa/command.submit";\n\nconst params = {\n    "cmd": "updateUnreviewedItems",\n    "format": "json",\n    "id": "62",\n    "state": "revoke",\n    "comment": "This is a sample comment"\n};\n\nconst headers = {\n    \'Authorization\': \'Bearer <token>\',\n    \'Content-Type\': \'application/json\'\n};\n\naxios.get(url, { params, headers })\n    .then(response => {\n        if (response.status === 200) {\n            console.log(response.data);\n        } else {\n            console.log(`Request failed with status code ${response.status}`);\n        }\n    })\n    .catch(error => {\n        console.error(\'Error:\', error);\n    });\n'})})})]}),"\n",(0,n.jsx)(t.h3,{id:"response-examples",children:"Response Examples"}),"\n",(0,n.jsxs)(a.A,{className:"unique-tabs",children:[(0,n.jsx)(i.A,{value:"200 Success",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n    "data": {\n        "type": "updateUnreviewedItems",\n        "status": "success",\n        "name": "UAR-3"\n    }\n}\n'})})}),(0,n.jsx)(i.A,{value:"200 Review Inactive",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n    "data": {\n        "type": "updateUnreviewedItems",\n        "status": "failure",\n        "name": "Azure Role #3-1",\n        "message": "The review is not in an active state"\n    }\n}\n'})})}),(0,n.jsx)(i.A,{value:"412 Missing ID",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",children:"<html>\n    <head>\n        <title>Error</title>\n    </head>\n    <body>The parameter id is required.\n            Query String=cmd=updateUnreviewedItems&amp;format=json&amp;state=revoke</body>\n</html>\n"})})})]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},19365:(e,t,s)=>{s.d(t,{A:()=>i});s(96540);var n=s(34164);const r={tabItem:"tabItem_Ymn6"};var a=s(74848);function i(e){let{children:t,hidden:s,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,i),hidden:s,children:t})}},11470:(e,t,s)=>{s.d(t,{A:()=>y});var n=s(96540),r=s(34164),a=s(23104),i=s(56347),l=s(205),o=s(57485),c=s(31682),d=s(89466);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:s}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:s,attributes:n,default:r}}=e;return{value:t,label:s,attributes:n,default:r}}))}(s);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,s])}function m(e){let{value:t,tabValues:s}=e;return s.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:s}=e;const r=(0,i.W6)(),a=function(e){let{queryString:t=!1,groupId:s}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:t,groupId:s});return[(0,o.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function j(e){const{defaultValue:t,queryString:s=!1,groupId:r}=e,a=h(e),[i,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=s.find((e=>e.default))??s[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[c,u]=p({queryString:s,groupId:r}),[j,x]=function(e){let{groupId:t}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,d.Dv)(s);return[r,(0,n.useCallback)((e=>{s&&a.set(e)}),[s,a])]}({groupId:r}),v=(()=>{const e=c??j;return m({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{v&&o(v)}),[v]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),x(e)}),[u,x,a]),tabValues:a}}var x=s(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=s(74848);function b(e){let{className:t,block:s,selectedValue:n,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const t=e.currentTarget,s=o.indexOf(t),r=l[s].value;r!==n&&(c(t),i(r))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=o.indexOf(e.currentTarget)+1;t=o[s]??o[0];break}case"ArrowLeft":{const s=o.indexOf(e.currentTarget)-1;t=o[s]??o[o.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":s},t),children:l.map((e=>{let{value:t,label:s,attributes:a}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>o.push(e),onKeyDown:u,onClick:d,...a,className:(0,r.A)("tabs__item",v.tabItem,a?.className,{"tabs__item--active":n===t}),children:s??t},t)}))})}function g(e){let{lazy:t,children:s,selectedValue:r}=e;const a=(Array.isArray(s)?s:[s]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function w(e){const t=j(e);return(0,f.jsxs)("div",{className:(0,r.A)("tabs-container",v.tabList),children:[(0,f.jsx)(b,{...t,...e}),(0,f.jsx)(g,{...t,...e})]})}function y(e){const t=(0,x.A)();return(0,f.jsx)(w,{...e,children:u(e.children)},String(t))}},41447:(e,t,s)=>{s.d(t,{A:()=>n});const n={curl:"curl_orwx",python:"python_uXgC",nodejs:"nodejs_ucMl",powershell:"powershell_BcVw"}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>l});var n=s(96540);const r={},a=n.createContext(r);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);