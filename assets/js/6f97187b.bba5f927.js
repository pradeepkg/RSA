"use strict";(self.webpackChunkdocku=self.webpackChunkdocku||[]).push([[4743],{55024:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>h});var r=n(74848),s=n(28453),a=n(11470),l=n(19365),i=n(41447);const o={sidebar_position:12},c="Set User Image",u={id:"admin/setUserImage",title:"Set User Image",description:"Set the configured image for a given user.",source:"@site/docs/admin/setUserImage.md",sourceDirName:"admin",slug:"/admin/setUserImage",permalink:"/RSA/docs/admin/setUserImage",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1715787065e3,sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Notify Vault Password Change",permalink:"/RSA/docs/admin/notifyVaultPasswordChange"},next:{title:"Status",permalink:"/RSA/docs/admin/status"}},d={},h=[{value:"Request",id:"request",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Headers",id:"headers",level:3},{value:"Body",id:"body",level:3},{value:"Response",id:"response",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Examples",id:"examples",level:2},{value:"Request",id:"request-1",level:3},{value:"Response",id:"response-1",level:3}];function m(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"set-user-image",children:"Set User Image"}),"\n","\n",(0,r.jsx)(t.p,{children:"Set the configured image for a given user."}),"\n",(0,r.jsxs)("p",{children:[(0,r.jsx)("span",{class:"method-post",children:"POST "}),(0,r.jsx)("span",{class:"method-post-text",children:(0,r.jsx)(t.a,{href:"https://instance.securid.com/aveksa/command.submit?cmd=setUserImage",children:"https://instance.securid.com/aveksa/command.submit?cmd=setUserImage"})})]}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsx)(t.p,{children:"The images must be Base64 encoded Portable Network Graphics (PNG)."})}),"\n",(0,r.jsx)(t.h2,{id:"request",children:"Request"}),"\n",(0,r.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)("table",{class:"table-container",children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("label",{class:"required",children:"command"})}),(0,r.jsx)("td",{children:"setUserImage"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"format"}),(0,r.jsxs)("td",{children:[(0,r.jsx)(t.code,{children:"properties"})," - (Default) ",(0,r.jsx)(t.code,{children:"key=value"}),". most useful when requesting a single object. If multiple objects are returned, values is a csv. ie ",(0,r.jsx)(t.code,{children:"key=value1,value2,value3"})," where value1 is the value for the first object, value2 is the value for the 2nd object, etc.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)(t.code,{children:"json"})," - Useful format for parsing into javascript or other languages. See ",(0,r.jsx)("a",{href:"https://www.json.org",target:"_blank",children:(0,r.jsx)(t.a,{href:"http://www.json.org",children:"www.json.org"})})," for details."]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("label",{class:"required",children:"userId"})}),(0,r.jsx)("td",{children:"The id of the run to delete."})]})]}),"\n",(0,r.jsx)(t.h3,{id:"headers",children:"Headers"}),"\n",(0,r.jsxs)("table",{class:"table-container",children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("label",{class:"required",children:"Authorization"})}),(0,r.jsxs)("td",{children:["Bearer ",(0,r.jsx)(t.code,{children:"token"})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("label",{class:"required",children:"Content-Type"})}),(0,r.jsx)("td",{children:"image/png"})]})]}),"\n",(0,r.jsx)(t.h3,{id:"body",children:"Body"}),"\n",(0,r.jsx)(t.p,{children:"Base64 encoded PNG image."}),"\n",(0,r.jsx)(t.h2,{id:"response",children:"Response"}),"\n",(0,r.jsx)(t.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,r.jsx)("table",{class:"table-container",children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.code,{children:"type"})}),(0,r.jsx)("td",{children:"Executed command name"})]})}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.h3,{id:"request-1",children:"Request"}),"\n",(0,r.jsxs)(a.A,{className:"unique-tabs",children:[(0,r.jsx)(l.A,{value:"Curl",attributes:{className:i.A.curl},children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'curl -L -X POST "https://instance.securid.com/aveksa/command.submit?cmd=setUserImage&userId=1" \\\n-H "Content-Type: image/png" \\\n-H "Authorization: Bearer <token>" \\\n-d "iVBORw0KGgoAAAANSUhEUgAAAPAAAADwCAYAAAA+VemSAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAWUklEQVR42u3df2wcV7UH8Dv3\nztw7szs7Hu+uvWt77Wzj2Gu3zo+6qd00P12qQiGkfSEvlNImJerLC6EKUVNQhRASqp5QhSpUIVRBQRVCCCGEUIX6IOpDoWkDfeqv\n\n-- TRUNCATED -- \n\n97LNsqwfrVu3rtXu3oduYmJCtyzrJ2z+P2cS96VPOA/Xde+42N/DqVTqB1gmGZ61a9fKVCp1UT9xOOd113WbbnM4aICOjo41UsoX\njuM4e5RSjyqlTuq6HkgpAynla6ZpiCXy924bds2JQBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIPZ/7Sv4"\n'})})}),(0,r.jsx)(l.A,{value:"Python",attributes:{className:i.A.python},children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'import requests, json, base64\n\nurl = "https://instance.securid.com/aveksa/command.submit"\nimage_file = "user10.png"\n\nparams = {\n    "cmd": "setUserImage",\n    "format": "json",\n    "userId": 10\n}\n\nheaders = {\n    \'Authorization\': \'Bearer <token>\',\n    \'Content-Type\': \'image/png\'\n}\n\nwith open(image_file, "rb") as image_file:\n    payload = base64.b64encode(image_file.read()).decode(\'utf-8\')\n\nresponse = requests.post(url, headers=headers, params=params, data=payload)\n\nif response.status_code == 200:\n    data = response.json()\n    print(data)\nelse:\n    print(f"Request failed with status code {response.status_code}")\n'})})}),(0,r.jsx)(l.A,{value:"Node.js",attributes:{className:i.A.nodejs},children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js"})})})]}),"\n",(0,r.jsx)(t.h3,{id:"response-1",children:"Response"}),"\n",(0,r.jsxs)(a.A,{className:"unique-tabs",children:[(0,r.jsx)(l.A,{value:"200",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n    "data": {\n        "type": "setUserImage"\n    }\n}\n'})})}),(0,r.jsx)(l.A,{value:"400",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:"<html>\n    <head>\n        <title>Error</title>\n    </head>\n    <body>The content-type must be multipart/form-data with the content set to content-type image/png\n            Query String=cmd=setUserImage&amp;format=json&amp;userId</body>\n</html>\n"})})}),(0,r.jsx)(l.A,{value:"500 Invalid Data",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:"<html>\n  <head>\n    <title>Error</title>\n  </head>\n  <body>java.lang.Exception: The File upload for 1gege failed: Illegal base64 character -1</body>\n</html>\n"})})})]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>l});n(96540);var r=n(34164);const s={tabItem:"tabItem_Ymn6"};var a=n(74848);function l(e){let{children:t,hidden:n,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,l),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>y});var r=n(96540),s=n(34164),a=n(23104),l=n(56347),i=n(205),o=n(57485),c=n(31682),u=n(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const s=(0,l.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function A(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,a=h(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[c,d]=p({queryString:n,groupId:s}),[A,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,u.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:s}),f=(()=>{const e=c??A;return m({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{f&&o(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,a]),tabValues:a}}var b=n(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(74848);function x(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const t=e.currentTarget,n=o.indexOf(t),s=i[n].value;s!==r&&(c(t),l(s))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:d,onClick:u,...a,className:(0,s.A)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function g(e){let{lazy:t,children:n,selectedValue:s}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function v(e){const t=A(e);return(0,j.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,j.jsx)(x,{...t,...e}),(0,j.jsx)(g,{...t,...e})]})}function y(e){const t=(0,b.A)();return(0,j.jsx)(v,{...e,children:d(e.children)},String(t))}},41447:(e,t,n)=>{n.d(t,{A:()=>r});const r={curl:"curl_orwx",python:"python_uXgC",nodejs:"nodejs_ucMl",powershell:"powershell_BcVw"}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>i});var r=n(96540);const s={},a=r.createContext(s);function l(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);