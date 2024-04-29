"use strict";(self.webpackChunkdocku=self.webpackChunkdocku||[]).push([[84743],{55024:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var s=n(74848),r=n(28453),a=n(11470),l=n(19365),o=n(41447);const i={sidebar_position:12},u="Set User Image",c={id:"admin/setUserImage",title:"Set User Image",description:"Set the configured image for a given user.",source:"@site/docs/admin/setUserImage.md",sourceDirName:"admin",slug:"/admin/setUserImage",permalink:"/RSA/docs/admin/setUserImage",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1714157031e3,sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"Notify Vault Password Change",permalink:"/RSA/docs/admin/notifyVaultPasswordChange"},next:{title:"Status",permalink:"/RSA/docs/admin/status"}},d={},h=[{value:"Request Parameters",id:"request-parameters",level:3},{value:"Request Headers",id:"request-headers",level:3},{value:"Request Body",id:"request-body",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Examples",id:"response-examples",level:3}];function m(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"set-user-image",children:"Set User Image"}),"\n","\n",(0,s.jsx)(t.p,{children:"Set the configured image for a given user."}),"\n",(0,s.jsxs)("p",{children:[(0,s.jsx)("span",{class:"method-post",children:"POST "}),(0,s.jsx)("span",{class:"method-post-text",children:(0,s.jsx)(t.a,{href:"https://instance.securid.com/aveksa/command.submit?cmd=setUserImage",children:"https://instance.securid.com/aveksa/command.submit?cmd=setUserImage"})})]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsx)(t.p,{children:"The images must be Base64 encoded Portable Network Graphics (PNG)."})}),"\n",(0,s.jsx)(t.h3,{id:"request-parameters",children:"Request Parameters"}),"\n",(0,s.jsxs)("table",{class:"table-container",children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("label",{class:"required",children:"command"})}),(0,s.jsx)("td",{children:"setUserImage"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"format"}),(0,s.jsxs)("td",{children:[(0,s.jsx)(t.code,{children:"properties"})," - (Default) ",(0,s.jsx)(t.code,{children:"key=value"}),". most useful when requesting a single object. If multiple objects are returned, values is a csv. ie ",(0,s.jsx)(t.code,{children:"key=value1,value2,value3"})," where value1 is the value for the first object, value2 is the value for the 2nd object, etc.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)(t.code,{children:"json"})," - Useful format for parsing into javascript or other languages. See ",(0,s.jsx)("a",{href:"https://www.json.org",target:"_blank",children:(0,s.jsx)(t.a,{href:"http://www.json.org",children:"www.json.org"})})," for details."]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("label",{class:"required",children:"userId"})}),(0,s.jsx)("td",{children:"The id of the run to delete."})]})]}),"\n",(0,s.jsx)(t.h3,{id:"request-headers",children:"Request Headers"}),"\n",(0,s.jsxs)("table",{class:"table-container",children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("label",{class:"required",children:"Authorization"})}),(0,s.jsxs)("td",{children:["Bearer ",(0,s.jsx)(t.code,{children:"&lt;token&gt;"})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("label",{class:"required",children:"Content-Type"})}),(0,s.jsx)("td",{children:"image/png"})]})]}),"\n",(0,s.jsx)(t.h3,{id:"request-body",children:"Request Body"}),"\n",(0,s.jsx)(t.p,{children:"Base64 encoded PNG image."}),"\n",(0,s.jsx)(t.h3,{id:"response-parameters",children:"Response Parameters"}),"\n",(0,s.jsx)("table",{class:"table-container",children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(t.code,{children:"type"})}),(0,s.jsx)("td",{children:"Executed command name"})]})}),"\n",(0,s.jsx)(t.h3,{id:"request-example",children:"Request Example"}),"\n",(0,s.jsxs)(a.A,{className:"unique-tabs",children:[(0,s.jsx)(l.A,{value:"Curl",attributes:{className:o.A.curl},children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'curl -L -X POST "https://instance.securid.com/aveksa/command.submit?cmd=setUserImage&userId=1" \\\n-H "Content-Type: image/png" \\\n-H "Authorization: Bearer <token>" \\\n-d "iVBORw0KGgoAAAANSUhEUgAAAPAAAADwCAYAAAA+VemSAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAWUklEQVR42u3df2wcV7UH8Dv3\nztw7szs7Hu+uvWt77Wzj2Gu3zo+6qd00P12qQiGkfSEvlNImJerLC6EKUVNQhRASqp5QhSpUIVRBQRVCCCGEUIX6IOpDoWkDfeqv\n\n-- TRUNCATED -- \n\n97LNsqwfrVu3rtXu3oduYmJCtyzrJ2z+P2cS96VPOA/Xde+42N/DqVTqB1gmGZ61a9fKVCp1UT9xOOd113WbbnM4aICOjo41UsoX\njuM4e5RSjyqlTuq6HkgpAynla6ZpiCXy924bds2JQBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIPZ/7Sv4"\n'})})}),(0,s.jsx)(l.A,{value:"Python",attributes:{className:o.A.python},children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'import requests, json, base64\n\nurl = "https://instance.securid.com/aveksa/command.submit"\nimage_file = "user10.png"\n\nparams = {\n    "cmd": "setUserImage",\n    "format": "json",\n    "userId": 10\n}\n\nheaders = {\n    \'Authorization\': \'Bearer <token>\',\n    \'Content-Type\': \'image/png\'\n}\n\nwith open(image_file, "rb") as image_file:\n    payload = base64.b64encode(image_file.read()).decode(\'utf-8\')\n\nresponse = requests.post(url, headers=headers, params=params, data=payload)\n\nif response.status_code == 200:\n    data = response.json()\n    print(data)\nelse:\n    print(f"Request failed with status code {response.status_code}")\n'})})}),(0,s.jsx)(l.A,{value:"Node.js",attributes:{className:o.A.nodejs},children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js"})})})]}),"\n",(0,s.jsx)(t.h3,{id:"response-examples",children:"Response Examples"}),"\n",(0,s.jsxs)(a.A,{className:"unique-tabs",children:[(0,s.jsx)(l.A,{value:"200",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n    "data": {\n        "type": "setUserImage"\n    }\n}\n'})})}),(0,s.jsx)(l.A,{value:"400",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:"<html>\n    <head>\n        <title>Error</title>\n    </head>\n    <body>The content-type must be multipart/form-data with the content set to content-type image/png\n            Query String=cmd=setUserImage&amp;format=json&amp;userId</body>\n</html>\n"})})}),(0,s.jsx)(l.A,{value:"500 Invalid Data",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-html",children:"<html>\n  <head>\n    <title>Error</title>\n  </head>\n  <body>java.lang.Exception: The File upload for 1gege failed: Illegal base64 character -1</body>\n</html>\n"})})})]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>l});n(96540);var s=n(34164);const r={tabItem:"tabItem_Ymn6"};var a=n(74848);function l(e){let{children:t,hidden:n,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,l),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>y});var s=n(96540),r=n(34164),a=n(23104),l=n(56347),o=n(205),i=n(57485),u=n(31682),c=n(89466);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:r}}=e;return{value:t,label:n,attributes:s,default:r}}))}(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function A(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=h(e),[l,i]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:a}))),[u,d]=p({queryString:n,groupId:r}),[A,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,c.Dv)(n);return[r,(0,s.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),f=(()=>{const e=u??A;return m({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,a]),tabValues:a}}var b=n(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(74848);function x(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.a_)(),c=e=>{const t=e.currentTarget,n=i.indexOf(t),r=o[n].value;r!==s&&(u(t),l(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...a,className:(0,r.A)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function g(e){let{lazy:t,children:n,selectedValue:r}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function v(e){const t=A(e);return(0,j.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,j.jsx)(x,{...e,...t}),(0,j.jsx)(g,{...e,...t})]})}function y(e){const t=(0,b.A)();return(0,j.jsx)(v,{...e,children:d(e.children)},String(t))}},41447:(e,t,n)=>{n.d(t,{A:()=>s});const s={curl:"curl_orwx",python:"python_uXgC",nodejs:"nodejs_ucMl",powershell:"powershell_BcVw"}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>o});var s=n(96540);const r={},a=s.createContext(r);function l(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);