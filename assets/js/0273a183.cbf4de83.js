"use strict";(self.webpackChunkdocku=self.webpackChunkdocku||[]).push([[4442],{18320:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=s(74848),t=s(28453);const r={slug:"custom-jdbc",title:"Adding Custom JDBC Driver",date:new Date("2024-05-23T00:00:00.000Z"),authors:"pradeepkg",tags:["Provisioning","AFX","JDBC","Database","Driver"],keywords:["Provisioning","AFX","JDBC","Database","Driver"],draft:!1},a=void 0,o={permalink:"/RSA/basics/custom-jdbc",source:"@site/basics/custom-jdbc/jdbc.mdx",title:"Adding Custom JDBC Driver",description:"This blog delves into the process of adding support for additional database drivers in the G&L version 8.0 and above.",date:"2024-05-23T00:00:00.000Z",tags:[{inline:!0,label:"Provisioning",permalink:"/RSA/basics/tags/provisioning"},{inline:!0,label:"AFX",permalink:"/RSA/basics/tags/afx"},{inline:!0,label:"JDBC",permalink:"/RSA/basics/tags/jdbc"},{inline:!0,label:"Database",permalink:"/RSA/basics/tags/database"},{inline:!0,label:"Driver",permalink:"/RSA/basics/tags/driver"}],readingTime:5.433333333333334,hasTruncateMarker:!0,authors:[{name:"Pradeep Kadambar",title:"Creator",url:"https://www.linkedin.com/in/pradeepkg/",imageURL:"https://github.com/pradeepkg.png",key:"pradeepkg"}],frontMatter:{slug:"custom-jdbc",title:"Adding Custom JDBC Driver",date:"2024-05-23T00:00:00.000Z",authors:"pradeepkg",tags:["Provisioning","AFX","JDBC","Database","Driver"],keywords:["Provisioning","AFX","JDBC","Database","Driver"],draft:!1},unlisted:!1,nextItem:{title:"Manipulating Accounts",permalink:"/RSA/basics/data-processors-adc"}},c={authorsImageUrls:[void 0]},d=[];function l(e){const n={em:"em",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"This blog delves into the process of adding support for additional database drivers in the G&L version 8.0 and above."}),"\n",(0,i.jsx)(n.p,{children:"Starting with G&L 8.0, all the individual JDBC connectors have been consolidated into a single generic database connector. This generic connector natively supports the following databases:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"DB2"}),"\n",(0,i.jsx)(n.li,{children:"Oracle"}),"\n",(0,i.jsx)(n.li,{children:"Sybase"}),"\n",(0,i.jsx)(n.li,{children:"SQLServer"}),"\n",(0,i.jsx)(n.li,{children:"jTDS"}),"\n",(0,i.jsx)(n.li,{children:"MySQL"}),"\n",(0,i.jsx)(n.li,{children:"ODBC compliant databases"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Steps"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Login to G&L console as system administrator."}),"\n",(0,i.jsx)(n.li,{children:"If you are creating a new connector proceed to step 4."}),"\n",(0,i.jsxs)(n.li,{children:["For existing connector, click ",(0,i.jsx)(n.strong,{children:"Test Connector Settings"})," which should throw a driver class load error.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)(n.img,{alt:"img",src:s(1954).A+"",width:"994",height:"243"})]}),"\n",(0,i.jsxs)(n.li,{children:["Go to ",(0,i.jsx)(n.strong,{children:"AFX > Connector Templates"})," and click on ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Generic Database"})}),".",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)(n.img,{alt:"img",src:s(15961).A+"",width:"773",height:"394"})]}),"\n",(0,i.jsxs)(n.li,{children:["Under ",(0,i.jsx)(n.strong,{children:"File Content"})," tab, click on ",(0,i.jsx)(n.strong,{children:"Upload Jar"}),".",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)(n.img,{alt:"img",src:s(208).A+"",width:"453",height:"455"})]}),"\n",(0,i.jsxs)(n.li,{children:["Select the JDBC driver jar file and click ",(0,i.jsx)(n.strong,{children:"OK"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Go to the connector and edit the driver class and connector string as needed.",(0,i.jsx)("br",{}),(0,i.jsx)(n.img,{alt:"img",src:s(96079).A+"",width:"661",height:"240"})]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"Test Connector Settings"})}),"."]}),"\n"]})]})}function g(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1954:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/1-3c9ad5bddceaf9d343a802f743c22b4e.png"},15961:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/2-fbba597ec44935121fbd229e4e27e04a.png"},208:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/3-6715253b841bf4588f1f5e6d5bf8d632.png"},96079:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/4-720c35c24fb8df0fa22567548254e611.png"},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>o});var i=s(96540);const t={},r=i.createContext(t);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);