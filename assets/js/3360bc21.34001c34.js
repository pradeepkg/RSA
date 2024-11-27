"use strict";(self.webpackChunkdocku=self.webpackChunkdocku||[]).push([[2193],{5142:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"admin/checkAccess","title":"Check Access","description":"Check if a user or account is supposed to have access to a particular entitlement, if there are change requests related to the entitlement and if the entitlement violates a policy.","source":"@site/docs/admin/checkAccess.md","sourceDirName":"admin","slug":"/admin/checkAccess","permalink":"/RSA/docs/admin/checkAccess","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1715787065000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2,"draft":false},"sidebar":"tutorialSidebar","previous":{"title":"About","permalink":"/RSA/docs/admin/about"},"next":{"title":"Create Admin Error","permalink":"/RSA/docs/admin/createAdminError"}}');var n=s(4848),a=s(8453),c=s(1470),l=s(9365),i=s(1447);const o={sidebar_position:2,draft:!1},d="Check Access",u={},h=[{value:"Request",id:"request",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Response",id:"response",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Errors",id:"errors",level:3},{value:"Examples",id:"examples",level:2},{value:"Request",id:"request-1",level:3},{value:"Response",id:"response-1",level:3}];function m(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"check-access",children:"Check Access"})}),"\n","\n",(0,n.jsx)(t.p,{children:"Check if a user or account is supposed to have access to a particular entitlement, if there are change requests related to the entitlement and if the entitlement violates a policy."}),"\n",(0,n.jsxs)("p",{children:[(0,n.jsx)("span",{class:"method-get",children:"GET "}),(0,n.jsxs)("span",{class:"method-get-text",children:[(0,n.jsx)(t.a,{href:"https://instance.securid.com/aveksa/command.submit?cmd=about",children:"https://instance.securid.com/aveksa/command.submit?cmd=about"})," "]})]}),"\n",(0,n.jsx)(t.h2,{id:"request",children:"Request"}),"\n",(0,n.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)("table",{class:"table-container",children:[(0,n.jsx)("tr",{children:(0,n.jsx)("td",{colspan:"2",children:(0,n.jsx)("span",{class:"header-2-text",children:"Common"})})}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("label",{class:"required",children:"command"})}),(0,n.jsx)("td",{children:"checkAccess"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"format"}),(0,n.jsxs)("td",{children:[(0,n.jsxs)("p",{children:[(0,n.jsx)(t.code,{children:"properties"})," - (Default) ",(0,n.jsx)(t.code,{children:"key=value"}),". most useful when requesting a single object. If multiple objects are returned, values is a csv. ie ",(0,n.jsx)(t.code,{children:"key=value1,value2,value3"})," where value1 is the value for the first object, value2 is the value for the 2nd object, etc."]}),(0,n.jsxs)("p",{children:[(0,n.jsx)(t.code,{children:"json"})," - Useful format for parsing into javascript or other languages. See ",(0,n.jsx)("a",{href:"https://www.json.org",target:"_blank",children:(0,n.jsx)(t.a,{href:"http://www.json.org",children:"www.json.org"})})," for details."]})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"checkOption"}),(0,n.jsxs)("td",{children:["Indicates to check access or validate access grants.",(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:[(0,n.jsx)(t.code,{children:"checkAccess"})," (default)"]}),(0,n.jsx)("li",{children:(0,n.jsx)(t.code,{children:"validateRuleOnly"})}),(0,n.jsx)("li",{children:(0,n.jsx)(t.code,{children:"validateCROnly"})}),(0,n.jsx)("li",{children:(0,n.jsx)(t.code,{children:"validateCRAndRule"})})]})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"ignoreUserMapping"}),(0,n.jsxs)("td",{children:[(0,n.jsx)(t.code,{children:"true, false"})," Boolean flag to ignore checking of access for users mapped to the specified account. (Default) ",(0,n.jsx)(t.code,{children:"false"})]})]}),(0,n.jsx)("tr",{children:(0,n.jsx)("td",{colspan:"2",children:(0,n.jsx)("span",{class:"header-2-text",children:"Accounts"})})}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"accountBS"}),(0,n.jsxs)("td",{children:["This specifies the name of the business source, such as an application or directory, associated with the account. It should be used in conjunction with the ",(0,n.jsx)(t.em,{children:"accountName"})," parameter"]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"accountName"}),(0,n.jsxs)("td",{children:["The account name and must be used along with ",(0,n.jsx)(t.em,{children:"accountName"})," parameter"]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"userId"}),(0,n.jsx)("td",{children:"User id or login id"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"uniqueId"}),(0,n.jsx)("td",{children:"User unique id"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"email"}),(0,n.jsx)("td",{children:"User email address"})]}),(0,n.jsx)("tr",{children:(0,n.jsx)("td",{colspan:"2",children:(0,n.jsx)("span",{class:"header-2-text",children:"Entitlements"})})}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"entitlementBS"}),(0,n.jsx)("td",{children:"The application, directory, or role set name for the entitlement"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"appRole"}),(0,n.jsx)("td",{children:"Application role name"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"resource"}),(0,n.jsxs)("td",{children:["The name of the entitlement resource, which must be used in conjunction with the ",(0,n.jsx)(t.em,{children:"action"})," parameter"]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"role"}),(0,n.jsx)("td",{children:"Role name"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"group"}),(0,n.jsx)("td",{children:"Group name"})]})]}),"\n",(0,n.jsx)(t.h2,{id:"response",children:"Response"}),"\n",(0,n.jsx)(t.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,n.jsxs)("table",{class:"table-container",children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(t.code,{children:"type"})}),(0,n.jsx)("td",{children:"Executed command name"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(t.code,{children:"result"})}),(0,n.jsxs)("td",{children:["The user or account has access to the entitlement, or if access grant is permitted ",(0,n.jsx)(t.code,{children:"true"}),", or not ",(0,n.jsx)(t.code,{children:"false"})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(t.code,{children:"crState"})}),(0,n.jsx)("td",{children:"allowed / denied / notCheckCR"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(t.code,{children:"violations"})}),(0,n.jsxs)("td",{children:["Returns the names of rules if there are any rule violations; otherwise, indicates ",(0,n.jsx)(t.code,{children:"noViolations"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"errors",children:"Errors"}),"\n",(0,n.jsx)("table",{class:"table-container",children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(t.code,{children:"400"})}),(0,n.jsx)("td",{children:"If the user / account / business source / entitlement cannot be found, an error message will be returned in the response body"})]})}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.h3,{id:"request-1",children:"Request"}),"\n",(0,n.jsx)(c.A,{className:"unique-tabs",children:(0,n.jsx)(l.A,{value:"Curl",attributes:{className:i.A.curl},children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'curl -X GET -G "https://instance.securid.com/aveksa/command.submit" \\\n-d "cmd=checkAccess" \\\n-d "userId=my_account_id" \\\n-d "format=json" \\\n-d "entitlementBS=Aveksa" \\\n-d "appRole=System%20Administrator" \\\n-H "Authorization: Bearer <token>" \\\n-H "Content-Type: application/json"\n'})})})}),"\n",(0,n.jsx)(t.h3,{id:"response-1",children:"Response"}),"\n",(0,n.jsxs)(c.A,{className:"unique-tabs",children:[(0,n.jsx)(l.A,{value:"200",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n    "data": {\n        "type": "checkAccess",\n        "result": "true"\n    }\n}\n'})})}),(0,n.jsx)(l.A,{value:"400 No Account",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",children:"<html>\n  <head>\n    <title>Error</title>\n  </head>\n  <body>\n    could not find user or account Query\n    String=cmd=checkAccess&amp;userId=user1&amp;format=json&amp;entitlementBS=Aveksa&amp;appRole=System%20Administrator\n  </body>\n</html>\n"})})})]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},9365:(e,t,s)=>{s.d(t,{A:()=>c});s(6540);var r=s(4164);const n={tabItem:"tabItem_Ymn6"};var a=s(4848);function c(e){let{children:t,hidden:s,className:c}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(n.tabItem,c),hidden:s,children:t})}},1470:(e,t,s)=>{s.d(t,{A:()=>k});var r=s(6540),n=s(4164),a=s(3104),c=s(6347),l=s(205),i=s(7485),o=s(1682),d=s(679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:s}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:s,attributes:r,default:n}}=e;return{value:t,label:s,attributes:r,default:n}}))}(s);return function(e){const t=(0,o.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,s])}function m(e){let{value:t,tabValues:s}=e;return s.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:s}=e;const n=(0,c.W6)(),a=function(e){let{queryString:t=!1,groupId:s}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:t,groupId:s});return[(0,i.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(n.location.search);t.set(a,e),n.replace({...n.location,search:t.toString()})}),[a,n])]}function x(e){const{defaultValue:t,queryString:s=!1,groupId:n}=e,a=h(e),[c,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=s.find((e=>e.default))??s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[o,u]=p({queryString:s,groupId:n}),[x,j]=function(e){let{groupId:t}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,a]=(0,d.Dv)(s);return[n,(0,r.useCallback)((e=>{s&&a.set(e)}),[s,a])]}({groupId:n}),f=(()=>{const e=o??x;return m({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{f&&i(f)}),[f]);return{selectedValue:c,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),j(e)}),[u,j,a]),tabValues:a}}var j=s(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=s(4848);function v(e){let{className:t,block:s,selectedValue:r,selectValue:c,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:o}=(0,a.a_)(),d=e=>{const t=e.currentTarget,s=i.indexOf(t),n=l[s].value;n!==r&&(o(t),c(n))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=i.indexOf(e.currentTarget)+1;t=i[s]??i[0];break}case"ArrowLeft":{const s=i.indexOf(e.currentTarget)-1;t=i[s]??i[i.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":s},t),children:l.map((e=>{let{value:t,label:s,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>i.push(e),onKeyDown:u,onClick:d,...a,className:(0,n.A)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":r===t}),children:s??t},t)}))})}function g(e){let{lazy:t,children:s,selectedValue:a}=e;const c=(Array.isArray(s)?s:[s]).filter(Boolean);if(t){const e=c.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:c.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function A(e){const t=x(e);return(0,b.jsxs)("div",{className:(0,n.A)("tabs-container",f.tabList),children:[(0,b.jsx)(v,{...t,...e}),(0,b.jsx)(g,{...t,...e})]})}function k(e){const t=(0,j.A)();return(0,b.jsx)(A,{...e,children:u(e.children)},String(t))}},1447:(e,t,s)=>{s.d(t,{A:()=>r});const r={curl:"curl_orwx",python:"python_uXgC",nodejs:"nodejs_ucMl",powershell:"powershell_BcVw"}},8453:(e,t,s)=>{s.d(t,{R:()=>c,x:()=>l});var r=s(6540);const n={},a=r.createContext(n);function c(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);