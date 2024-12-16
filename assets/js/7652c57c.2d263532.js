"use strict";(self.webpackChunkdocku=self.webpackChunkdocku||[]).push([[2479],{8512:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>c,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"admin/getLogo","title":"Get Logo","description":"Obtain the configured logo that is shown to users. By default logo-main.png is returned, which is the logo that is displayed in the header.","source":"@site/docs/admin/getLogo.md","sourceDirName":"admin","slug":"/admin/getLogo","permalink":"/RSA/docs/admin/getLogo","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1715787065000,"sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"Get Help Link","permalink":"/RSA/docs/admin/getHelpLink"},"next":{"title":"Get Security Settings","permalink":"/RSA/docs/admin/getSecuritySettings"}}');var a=t(74848),r=t(28453),o=t(98120),l=t(19365),i=t(41447);const c={sidebar_position:5},d="Get Logo",u={},h=[{value:"Request",id:"request",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Headers",id:"headers",level:3},{value:"Response",id:"response",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Examples",id:"examples",level:2},{value:"Request",id:"request-1",level:3},{value:"Response",id:"response-1",level:3}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"get-logo",children:"Get Logo"})}),"\n","\n",(0,a.jsx)(n.p,{children:"Obtain the configured logo that is shown to users. By default logo-main.png is returned, which is the logo that is displayed in the header."}),"\n",(0,a.jsxs)("p",{children:[(0,a.jsx)("span",{class:"method-get",children:"GET "}),(0,a.jsx)("span",{class:"method-get-text",children:(0,a.jsx)(n.a,{href:"https://instance.securid.com/aveksa/command.submit?cmd=getLogo",children:"https://instance.securid.com/aveksa/command.submit?cmd=getLogo"})})]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["Any image that has been uploaded via ",(0,a.jsx)(n.strong,{children:"Admin > User Interface > Files"})," can be retrieved using this API."]})}),"\n",(0,a.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,a.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)("table",{class:"table-container",children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("label",{class:"required",children:"command"})}),(0,a.jsx)("td",{children:"getLogo"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"format"}),(0,a.jsxs)("td",{children:[(0,a.jsx)(n.code,{children:"properties"})," - (Default) ",(0,a.jsx)(n.code,{children:"key=value"}),". most useful when requesting a single object. If multiple objects are returned, values is a csv. ie ",(0,a.jsx)(n.code,{children:"key=value1,value2,value3"})," where value1 is the value for the first object, value2 is the value for the 2nd object, etc.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)(n.code,{children:"json"})," - Useful format for parsing into javascript or other languages. See ",(0,a.jsx)("a",{href:"https://www.json.org",target:"_blank",children:(0,a.jsx)(n.a,{href:"http://www.json.org",children:"www.json.org"})})," for details."]})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"name"}),(0,a.jsxs)("td",{children:["The name of the logo to return. (Default) ",(0,a.jsx)(n.code,{children:"logo-main.png"})]})]})]}),"\n",(0,a.jsx)(n.h3,{id:"headers",children:"Headers"}),"\n",(0,a.jsxs)("table",{class:"table-container",children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("label",{class:"required",children:"Authorization"})}),(0,a.jsxs)("td",{children:["Bearer ",(0,a.jsx)(n.code,{children:"token"})]})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Accept"}),(0,a.jsx)("td",{children:"application/json"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Content-Type"}),(0,a.jsx)("td",{children:"application/json"})]})]}),"\n",(0,a.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,a.jsx)(n.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,a.jsxs)(n.p,{children:["Binary image representing the requested logo (",(0,a.jsx)(n.code,{children:"Content-Type : image/png"}),")."]}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.h3,{id:"request-1",children:"Request"}),"\n",(0,a.jsxs)(o.A,{className:"unique-tabs",children:[(0,a.jsx)(l.A,{value:"Curl",attributes:{className:i.A.curl},children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl -K -X GET  \\\n"https://instance.securid.com/aveksa/command.submit?cmd=getLogo&format=json&name=logo-main.png" \\\n-H "Authorization: Bearer <token>" \\\n-H "Content-Type: application/json" \\\n-o logo-main.png\n'})})}),(0,a.jsx)(l.A,{value:"Python",attributes:{className:i.A.python},children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'import requests\n\nurl = "https://instance.securid.com/aveksa/command.submit"\n\nparams = {\n    "cmd": "getLogo",\n    "format": "json",\n    "name": "logo-main.png"\n}\n\nheaders = {\n    \'Authorization\': \'Bearer <token>\',\n    \'Content-Type\': \'application/json\'\n}\n\nresponse = requests.get(url, params=params, headers=headers)\n\nif response.status_code == 200:\n    content_type = response.headers.get(\'Content-Type\')\n    if content_type == \'image/png\':\n        image_data = response.content\n        with open(\'logo-main.png\', \'wb\') as f:\n            f.write(image_data)\n\n        print("Image saved to \'logo-main.png\'")\n    else:\n        print("Response does not contain PNG image data.")\nelse:\n    print(f"Request failed with status code {response.status_code}")\n'})})}),(0,a.jsx)(l.A,{value:"Node.js",attributes:{className:i.A.nodejs},children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const axios = require('axios');\nconst fs = require('fs');\n\nconst url = \"https://instance.securid.com/aveksa/command.submit\";\n\nconst params = {\n    cmd: \"getLogo\",\n    format: \"json\",\n    name: \"logo-main.png\"\n};\n\nconst headers = {\n    'Authorization': 'Bearer <token>',\n    'Content-Type': 'application/json'\n};\n\naxios.get(url, { params, headers, responseType: 'arraybuffer' })\n    .then(response => {\n        if (response.status === 200) {\n            const content_type = response.headers['content-type'];\n            if (content_type === 'image/png') {\n                const image_data = response.data;\n                fs.writeFileSync('logo-main.png', image_data, 'binary');\n                console.log(\"Image saved to 'logo-main.png'\");\n            } else {\n                console.log(\"Response does not contain PNG image data.\");\n            }\n        } else {\n            console.log(`Request failed with status code ${response.status}`);\n        }\n    })\n    .catch(error => {\n        console.error('Error:', error);\n    });\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"response-1",children:"Response"}),"\n",(0,a.jsxs)(o.A,{className:"unique-tabs",children:[(0,a.jsx)(l.A,{value:"200",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:"Binary image data\n"})})}),(0,a.jsx)(l.A,{value:"412 Invalid Parameters",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:"<html>\n  <head>\n    <title>Error</title>\n  </head>\n  <body>Logo named 'img' could not be found. Query String=cmd=getLogo&amp;format=json&amp;name=saad</body>\n</html>\n"})})})]})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var s=t(34164);const a={tabItem:"tabItem_Ymn6"};var r=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)(a.tabItem,o),hidden:t,children:n})}},98120:(e,n,t)=>{t.d(n,{A:()=>y});var s=t(96540),a=t(34164),r=t(86641),o=t(56347),l=t(205),i=t(38874);var c=t(82993);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:a}}=e;return{value:n,label:t,attributes:s,default:a}}))}(t);return function(e){const n=(void 0===(s=(e,n)=>e.value===n.value)&&(s=(e,n)=>e===n),(t=e).filter(((e,n)=>t.findIndex((n=>s(n,e)))!==n)));var t,s;if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(r),(0,s.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(a.location.search);n.set(r,e),a.replace({...a.location,search:n.toString()})}),[r,a])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,r=u(e),[o,i]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:r}))),[d,m]=p({queryString:t,groupId:a}),[g,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,r]=(0,c.Dv)(t);return[a,(0,s.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:a}),j=(()=>{const e=d??g;return h({value:e,tabValues:r})?e:null})();(0,l.A)((()=>{j&&i(j)}),[j]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),m(e),f(e)}),[m,f,r]),tabValues:r}}var g=t(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(74848);function b(e){let{className:n,block:t,selectedValue:s,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=e=>{const n=e.currentTarget,t=i.indexOf(n),a=l[t].value;a!==s&&(c(n),o(a))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>i.push(e),onKeyDown:u,onClick:d,...r,className:(0,a.A)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:r}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function v(e){const n=m(e);return(0,j.jsxs)("div",{className:(0,a.A)("tabs-container",f.tabList),children:[(0,j.jsx)(b,{...n,...e}),(0,j.jsx)(x,{...n,...e})]})}function y(e){const n=(0,g.A)();return(0,j.jsx)(v,{...e,children:d(e.children)},String(n))}},41447:(e,n,t)=>{t.d(n,{A:()=>s});const s={curl:"curl_orwx",python:"python_uXgC",nodejs:"nodejs_ucMl",powershell:"powershell_BcVw"}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var s=t(96540);const a={},r=s.createContext(a);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);