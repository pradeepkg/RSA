"use strict";(self.webpackChunkdocku=self.webpackChunkdocku||[]).push([[223],{51231:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var s=t(74848),r=t(28453),i=t(11470),a=t(19365),o=t(41447);const l={sidebar_position:8},c="Import Descriptions",u={id:"admin/importDescriptions",title:"Import Descriptions",description:"Import a RSA G&L description file using either a file on the server or in the request body.",source:"@site/docs/admin/importDescriptions.md",sourceDirName:"admin",slug:"/admin/importDescriptions",permalink:"/RSA/docs/admin/importDescriptions",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1715787065e3,sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Get User Image",permalink:"/RSA/docs/admin/getUserImage"},next:{title:"Import Metadata",permalink:"/RSA/docs/admin/importMetadata"}},d={},p=[{value:"Request",id:"request",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Headers",id:"headers",level:3},{value:"Body",id:"body",level:3},{value:"Response",id:"response",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Examples",id:"examples",level:2},{value:"Request",id:"request-1",level:3},{value:"Response",id:"response-1",level:3}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"import-descriptions",children:"Import Descriptions"})}),"\n","\n",(0,s.jsx)(n.p,{children:"Import a RSA G&L description file using either a file on the server or in the request body."}),"\n",(0,s.jsxs)("p",{children:[(0,s.jsx)("span",{class:"method-post",children:"POST "}),(0,s.jsx)("span",{class:"method-post-text",children:(0,s.jsx)(n.a,{href:"https://instance.securid.com/aveksa/command.submit?cmd=importDescriptions",children:"https://instance.securid.com/aveksa/command.submit?cmd=importDescriptions"})})]}),"\n",(0,s.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,s.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)("table",{class:"table-container",children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("label",{class:"required",children:"command"})}),(0,s.jsx)("td",{children:"importDescriptions"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"filename"}),(0,s.jsxs)("td",{children:[(0,s.jsx)("p",{children:"The filename in the import directory on the G&L server. The import directory is specified on the web services configuration page. Alternatively, the data can be sent as part of the request body."}),"This option is not recommended and file should be passed using the POST body"]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"format"}),(0,s.jsxs)("td",{children:["The input file format. Valid values :",(0,s.jsxs)("p",{children:[(0,s.jsx)(n.code,{children:"csv"})," - Comma separated values"]}),(0,s.jsx)(n.code,{children:"xml"})," - Extensible Markup Language"]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"behavior"}),(0,s.jsxs)("td",{children:["The behavior when import file contains existing descriptions. Valid values :",(0,s.jsx)("p",{children:"- skip"}),(0,s.jsx)("p",{children:"- overwrite"}),"- fail"]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"appscope"}),(0,s.jsxs)("td",{children:[(0,s.jsx)(n.code,{children:"true, false"})," Indicates if the application scope column is supported or not in CSV file format. (Default) ",(0,s.jsx)(n.code,{children:"false"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"headers",children:"Headers"}),"\n",(0,s.jsxs)("table",{class:"table-container",children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("label",{class:"required",children:"Authorization"})}),(0,s.jsxs)("td",{children:["Bearer ",(0,s.jsx)(n.code,{children:"token"})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Accept"}),(0,s.jsx)("td",{children:"application/json"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Content-Type"}),(0,s.jsx)("td",{children:"application/json"})]})]}),"\n",(0,s.jsx)(n.h3,{id:"body",children:"Body"}),"\n",(0,s.jsx)(n.p,{children:"Descriptions XML data"}),"\n",(0,s.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,s.jsx)(n.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,s.jsx)("table",{class:"table-container",children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.code,{children:"type"})}),(0,s.jsx)("td",{children:"Executed command name"})]})}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.h3,{id:"request-1",children:"Request"}),"\n",(0,s.jsxs)(i.A,{className:"unique-tabs",children:[(0,s.jsx)(a.A,{value:"Curl",attributes:{className:o.A.curl},children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -L -X POST "https://instance.securid.com/aveksa/command.submit?cmd=importDescriptions" \\\n-H "Content-Type: application/json" \\\n-H "Authorization: Bearer <token>" \\\n-d "<BusinessDescriptions>\n    <BusinessDescription type=\\"Application\\" exactmatch=\\"true\\" filter=\\"Aha!\\">\n        <AltName>Aha!</AltName>\n        <Tooltip/>\n        <LongDesc/>\n        <HelpURL/>\n    </BusinessDescription>\n    <BusinessDescription type=\\"Application\\" exactmatch=\\"true\\" filter=\\"Asana\\">\n        <AltName>Asana</AltName>\n        <Tooltip/>\n        <LongDesc/>\n        <HelpURL/>\n    </BusinessDescription>\n    <BusinessDescription type=\\"Application\\" exactmatch=\\"true\\" application=\\"Assigned SecurID Tokens\\" filter=\\"Assigned SecurID Tokens\\">\n        <AltName>Assigned SecurID Tokens</AltName>\n        <Tooltip/>\n        <LongDesc/>\n        <HelpURL/>\n    </BusinessDescription>\n    <BusinessDescription type=\\"Entitlement\\" exactmatch=\\"true\\" filter=\\"Active Directory : Synchronize\\">\n        <AltName>Active Directory : Synchronize</AltName>\n        <Tooltip/>\n        <LongDesc>Triggers attribute synchronization for Active Directory when assigned</LongDesc>\n        <HelpURL/>\n    </BusinessDescription>\n    <BusinessDescription type=\\"GlobalRole\\" exactmatch=\\"true\\" application=\\"AveksaRoles\\" filter=\\"Privileged Base User\\">\n        <AltName>Privileged Base User</AltName>\n        <Tooltip/>\n        <LongDesc/>\n        <HelpURL/>\n    </BusinessDescription>\n</BusinessDescriptions>"\n'})})}),(0,s.jsx)(a.A,{value:"Python",attributes:{className:o.A.python},children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import requests\n\nurl = "https://instance.securid.com/aveksa/command.submit"\n\nxml_payload = """\n<BusinessDescriptions>\n    <BusinessDescription type="Application" exactmatch="true" filter="Aha!">\n        <AltName>Aha!</AltName>\n        <Tooltip/>\n        <LongDesc/>\n        <HelpURL/>\n    </BusinessDescription>\n    <BusinessDescription type="Application" exactmatch="true" filter="Asana">\n        <AltName>Asana</AltName>\n        <Tooltip/>\n        <LongDesc/>\n        <HelpURL/>\n    </BusinessDescription>\n</BusinessDescriptions>\n"""\n\nparams = {\n    "cmd": "importDescriptions",\n    "format": "xml",\n    "behavior": "overwrite"\n}\n\nheaders = {\n    \'Authorization\': \'Bearer <token>\',\n    \'Content-Type\': \'application/xml\'\n}\n\nresponse = requests.post(url, data=xml_payload, params=params, headers=headers)\n\nif response.status_code == 200:\n    print(response.text)\nelse:\n    print(f"Request failed with status code {response.status_code}")\n'})})}),(0,s.jsx)(a.A,{value:"Node.js",attributes:{className:o.A.nodejs},children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const axios = require(\'axios\');\n\nconst url = "https://instance.securid.com/aveksa/command.submit?cmd=importDescriptions";\nconst params = {\n    "cmd": "importDescriptions",\n    "format": "xml",\n    "behavior": "overwrite"\n};\n\nconst headers = {\n    \'Authorization\': \'Bearer <token>\',\n    \'Content-Type\': \'application/json\'\n};\n\nconst data = `<BusinessDescriptions>\n    <BusinessDescription type="Application" exactmatch="true" filter="Aha!">\n        <AltName>Aha!</AltName>\n        <Tooltip/>\n        <LongDesc/>\n        <HelpURL/>\n    </BusinessDescription>\n    <BusinessDescription type="Application" exactmatch="true" filter="Asana">\n        <AltName>Asana</AltName>\n        <Tooltip/>\n        <LongDesc/>\n        <HelpURL/>\n    </BusinessDescription>\n    <BusinessDescription type="Application" exactmatch="true" application="Assigned SecurID Tokens" filter="Assigned SecurID Tokens">\n        <AltName>Assigned SecurID Tokens</AltName>\n        <Tooltip/>\n        <LongDesc/>\n        <HelpURL/>\n    </BusinessDescription>\n    <BusinessDescription type="Entitlement" exactmatch="true" filter="Active Directory : Synchronize">\n        <AltName>Active Directory : Synchronize</AltName>\n        <Tooltip/>\n        <LongDesc>Triggers attribute synchronization for Active Directory when assigned</LongDesc>\n        <HelpURL/>\n    </BusinessDescription>\n    <BusinessDescription type="GlobalRole" exactmatch="true" application="AveksaRoles" filter="Privileged Base User">\n        <AltName>Privileged Base User</AltName>\n        <Tooltip/>\n        <LongDesc/>\n        <HelpURL/>\n    </BusinessDescription>\n</BusinessDescriptions>`;\n\naxios.post(url, data, { params, headers })\n    .then(response => {\n        if (response.status === 200) {\n            console.log("Import successful");\n        } else {\n            console.log(`Request failed with status code ${response.status}`);\n        }\n    })\n    .catch(error => {\n        console.error(\'Error:\', error);\n    });\n'})})})]}),"\n",(0,s.jsx)(n.h3,{id:"response-1",children:"Response"}),"\n",(0,s.jsxs)(i.A,{className:"unique-tabs",children:[(0,s.jsx)(a.A,{value:"200",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json"})})}),(0,s.jsx)(a.A,{value:"412 Incorrect Config",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"<html>\n    <head>\n        <title>Error</title>\n    </head>\n    <body>The filename parameter cannot be used until the import directory is configured \n        in the Web Services configuration screen.\n        Query String=cmd=importDescriptions&amp;format=xml&amp;filename=myfile.xml</body>\n</html>\n"})})}),(0,s.jsx)(a.A,{value:"500 Missing Parameters",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"\x3c!-- Neither the filename parameter nor the POST body contains the descriptions mapping data  --\x3e\n<html>\n    <head>\n        <title>Error</title>\n    </head>\n    <body>java.lang.NullPointerException</body>\n</html>\n"})})}),(0,s.jsx)(a.A,{value:"500 Format Mismatch",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'\x3c!-- When data is XML format and format header is csv  --\x3e\n<html>\n    <head>\n        <title>Error</title>\n    </head>\n    <body>com.aveksa.server.core.description.BusinessDescriptionException: Line 1: \n        The "TYPE" column is an invalid value.\n        TYPE can be one of the following values:\n        Application/Directory, ApplicationRole, Entitlement, GlobalRole, UserGroup</body>\n</html>\n'})})})]})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>a});t(96540);var s=t(34164);const r={tabItem:"tabItem_Ymn6"};var i=t(74848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,a),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>y});var s=t(96540),r=t(34164),i=t(23104),a=t(56347),o=t(205),l=t(57485),c=t(31682),u=t(70679);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:r}}=e;return{value:n,label:t,attributes:s,default:r}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,a.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(i),(0,s.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,i=p(e),[a,l]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:i}))),[c,d]=m({queryString:t,groupId:r}),[x,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,u.Dv)(t);return[r,(0,s.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:r}),b=(()=>{const e=c??x;return h({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{b&&l(b)}),[b]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,i]),tabValues:i}}var f=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(74848);function j(e){let{className:n,block:t,selectedValue:s,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),r=o[t].value;r!==s&&(c(n),a(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...i,className:(0,r.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function A(e){let{lazy:n,children:t,selectedValue:i}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===i));return e?(0,s.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function g(e){const n=x(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,v.jsx)(j,{...n,...e}),(0,v.jsx)(A,{...n,...e})]})}function y(e){const n=(0,f.A)();return(0,v.jsx)(g,{...e,children:d(e.children)},String(n))}},41447:(e,n,t)=>{t.d(n,{A:()=>s});const s={curl:"curl_orwx",python:"python_uXgC",nodejs:"nodejs_ucMl",powershell:"powershell_BcVw"}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var s=t(96540);const r={},i=s.createContext(r);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);