"use strict";(self.webpackChunkdocku=self.webpackChunkdocku||[]).push([[5440],{37420:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var s=t(74848),r=t(28453),a=t(11470),o=t(19365),i=t(41447);const l={sidebar_position:7},c="Get User Image",u={id:"admin/getUserImage",title:"Get User Image",description:"Obtain the configured image for a given user.",source:"@site/docs/admin/getUserImage.md",sourceDirName:"admin",slug:"/admin/getUserImage",permalink:"/RSA/docs/admin/getUserImage",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1714157031e3,sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Get Security Settings",permalink:"/RSA/docs/admin/getSecuritySettings"},next:{title:"Import Descriptions",permalink:"/RSA/docs/admin/importDescriptions"}},d={},p=[{value:"Request Parameters",id:"request-parameters",level:3},{value:"Request Headers",id:"request-headers",level:3},{value:"Response Parameters",id:"response-parameters",level:3},{value:"Request Example",id:"request-example",level:3},{value:"Response Examples",id:"response-examples",level:3}];function h(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"get-user-image",children:"Get User Image"}),"\n","\n",(0,s.jsx)(n.p,{children:"Obtain the configured image for a given user."}),"\n",(0,s.jsxs)("p",{children:[(0,s.jsx)("span",{class:"method-get",children:"GET "}),(0,s.jsx)("span",{class:"method-get-text",children:(0,s.jsx)(n.a,{href:"https://instance.securid.com/aveksa/command.submit?cmd=getUserImage",children:"https://instance.securid.com/aveksa/command.submit?cmd=getUserImage"})})]}),"\n",(0,s.jsx)(n.h3,{id:"request-parameters",children:"Request Parameters"}),"\n",(0,s.jsxs)("table",{class:"table-container",children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("label",{class:"required",children:"command"})}),(0,s.jsx)("td",{children:"getUserImage"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"format"}),(0,s.jsxs)("td",{children:[(0,s.jsx)(n.code,{children:"properties"})," - (Default) ",(0,s.jsx)(n.code,{children:"key=value"}),". most useful when requesting a single object. If multiple objects are returned, values is a csv. ie ",(0,s.jsx)(n.code,{children:"key=value1,value2,value3"})," where value1 is the value for the first object, value2 is the value for the 2nd object, etc.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)(n.code,{children:"json"})," - Useful format for parsing into javascript or other languages. See ",(0,s.jsx)("a",{href:"https://www.json.org",target:"_blank",children:(0,s.jsx)(n.a,{href:"http://www.json.org",children:"www.json.org"})})," for details."]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"userId"}),(0,s.jsxs)("td",{children:["The user id of the user to retrieve the image for. If no userId is specified, the image is applied to the user associated with the token. ",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"If using trusted application, then the first user image will be returned."]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"request-headers",children:"Request Headers"}),"\n",(0,s.jsxs)("table",{class:"table-container",children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("label",{class:"required",children:"Authorization"})}),(0,s.jsxs)("td",{children:["Bearer ",(0,s.jsx)(n.code,{children:"&lt;token&gt;"})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Accept"}),(0,s.jsx)("td",{children:"application/json"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Content-Type"}),(0,s.jsx)("td",{children:"application/json"})]})]}),"\n",(0,s.jsx)(n.h3,{id:"response-parameters",children:"Response Parameters"}),"\n",(0,s.jsxs)(n.p,{children:["Binary image representing the requested logo (",(0,s.jsx)(n.code,{children:"Content-Type : image/png"}),")."]}),"\n",(0,s.jsx)(n.h3,{id:"request-example",children:"Request Example"}),"\n",(0,s.jsxs)(a.A,{className:"unique-tabs",children:[(0,s.jsx)(o.A,{value:"Curl",attributes:{className:i.A.curl},children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -K -X GET  \\\n"https://instance.securid.com/aveksa/command.submit?cmd=getUserImage&format=json&userId=10" \\\n-H "Authorization: Bearer <token>" \\\n-H "Content-Type: application/json" \\\n-o 10.png\n'})})}),(0,s.jsx)(o.A,{value:"Python",attributes:{className:i.A.python},children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import requests\n\nurl = "https://instance.securid.com/aveksa/command.submit"\n\nparams = {\n    "cmd": "getUserImage",\n    "format": "json",\n    "userId": "10"\n}\n\nheaders = {\n    \'Authorization\': \'Bearer <token>\',\n    \'Content-Type\': \'application/json\'\n}\n\nresponse = requests.get(url, params=params, headers=headers)\n\nif response.status_code == 200:\n    content_type = response.headers.get(\'Content-Type\')\n    if content_type == \'image/png\':\n        image_data = response.content\n        with open(\'10.png\', \'wb\') as f:\n            f.write(image_data)\n\n        print("Saved to \'10.png\'")\n    else:\n        print("Response does not contain PNG image data.")\nelse:\n    print(f"Request failed with status code {response.status_code}")\n'})})}),(0,s.jsx)(o.A,{value:"Node.js",attributes:{className:i.A.nodejs},children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const axios = require('axios');\nconst fs = require('fs');\n\nconst url = \"https://instance.securid.com/aveksa/command.submit\";\n\nconst params = {\n    cmd: \"getUserImage\",\n    format: \"json\",\n    userId: \"10\"\n};\n\nconst headers = {\n    'Authorization': 'Bearer <token>',\n    'Content-Type': 'application/json'\n};\n\naxios.get(url, { params, headers, responseType: 'arraybuffer' })\n    .then(response => {\n        if (response.status === 200) {\n            const content_type = response.headers['content-type'];\n            if (content_type === 'image/png') {\n                const image_data = response.data;\n                fs.writeFileSync('10.png', image_data, 'binary');\n                console.log(\"Saved to '10.png'\");\n            } else {\n                console.log(\"Response does not contain PNG image data.\");\n            }\n        } else {\n            console.log(`Request failed with status code ${response.status}`);\n        }\n    })\n    .catch(error => {\n        console.error('Error:', error);\n    });\n"})})})]}),"\n",(0,s.jsx)(n.h3,{id:"response-examples",children:"Response Examples"}),"\n",(0,s.jsxs)(a.A,{className:"unique-tabs",children:[(0,s.jsx)(o.A,{value:"200",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:"Binary image data\n"})})}),(0,s.jsx)(o.A,{value:"200 Invalid User ID",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "data": {\n        "type": "getUserImage"\n    }\n}\n'})})})]})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var s=t(34164);const r={tabItem:"tabItem_Ymn6"};var a=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,o),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>w});var s=t(96540),r=t(34164),a=t(23104),o=t(56347),i=t(205),l=t(57485),c=t(31682),u=t(89466);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:r}}=e;return{value:n,label:t,attributes:s,default:r}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,o.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,a=p(e),[o,l]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:a}))),[c,d]=m({queryString:t,groupId:r}),[g,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,a]=(0,u.Dv)(t);return[r,(0,s.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:r}),j=(()=>{const e=c??g;return h({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{j&&l(j)}),[j]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,a]),tabValues:a}}var f=t(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(74848);function x(e){let{className:n,block:t,selectedValue:s,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),r=i[t].value;r!==s&&(c(n),o(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...a,className:(0,r.A)("tabs__item",j.tabItem,a?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:r}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=g(e);return(0,b.jsxs)("div",{className:(0,r.A)("tabs-container",j.tabList),children:[(0,b.jsx)(x,{...n,...e}),(0,b.jsx)(v,{...n,...e})]})}function w(e){const n=(0,f.A)();return(0,b.jsx)(y,{...e,children:d(e.children)},String(n))}},41447:(e,n,t)=>{t.d(n,{A:()=>s});const s={curl:"curl_orwx",python:"python_uXgC",nodejs:"nodejs_ucMl",powershell:"powershell_BcVw"}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var s=t(96540);const r={},a=s.createContext(r);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);