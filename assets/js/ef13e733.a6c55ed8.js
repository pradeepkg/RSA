"use strict";(self.webpackChunkdocku=self.webpackChunkdocku||[]).push([[1504],{48179:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>h,contentTitle:()=>c,default:()=>x,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var r=n(74848),t=n(28453),d=n(50310);const i={slug:"bonusly",title:"Bonusly",date:new Date("2024-09-18T00:00:00.000Z"),authors:"pradeepkg",tags:["Provisioning","REST","SaaS","Bonusly","Employee Engagement","Collaboration"],keywords:["Provisioning","REST","SaaS","Bonusly","Employee Engagement","Collaboration"],draft:!1},c=void 0,l={permalink:"/RSA/connectors/bonusly",source:"@site/connectors/bonusly/bonusly.mdx",title:"Bonusly",description:"Bonusly is a recognition and rewards platform that fosters employee engagement by allowing peers to give and receive micro-bonuses for excellent work. Its intuitive interface and integration with popular workplace tools make it easy for teams to appreciate each other's efforts, boosting morale and productivity.Versions: 8.0.0 P2",date:"2024-09-18T00:00:00.000Z",tags:[{inline:!0,label:"Provisioning",permalink:"/RSA/connectors/tags/provisioning"},{inline:!0,label:"REST",permalink:"/RSA/connectors/tags/rest"},{inline:!0,label:"SaaS",permalink:"/RSA/connectors/tags/saa-s"},{inline:!0,label:"Bonusly",permalink:"/RSA/connectors/tags/bonusly"},{inline:!0,label:"Employee Engagement",permalink:"/RSA/connectors/tags/employee-engagement"},{inline:!0,label:"Collaboration",permalink:"/RSA/connectors/tags/collaboration"}],readingTime:38.6,hasTruncateMarker:!0,authors:[{name:"Pradeep Kadambar",title:"Creator",url:"https://www.linkedin.com/in/pradeepkg/",imageURL:"https://github.com/pradeepkg.png",key:"pradeepkg",page:null}],frontMatter:{slug:"bonusly",title:"Bonusly",date:"2024-09-18T00:00:00.000Z",authors:"pradeepkg",tags:["Provisioning","REST","SaaS","Bonusly","Employee Engagement","Collaboration"],keywords:["Provisioning","REST","SaaS","Bonusly","Employee Engagement","Collaboration"],draft:!1},unlisted:!1,lastUpdatedAt:1714656501e3,nextItem:{title:"MaintainX",permalink:"/RSA/connectors/maintainx"}},h={authorsImageUrls:[void 0]},o=[{value:"Overview",id:"overview",level:2},{value:"Connector Settings",id:"connector-settings",level:2},{value:"Supported Verbs",id:"supported-verbs",level:2},{value:"Create an Account",id:"create-an-account",level:3},{value:"Add Application Role to Account",id:"add-application-role-to-account",level:3},{value:"Remove Application Role from Account",id:"remove-application-role-from-account",level:3},{value:"Disable an Account",id:"disable-an-account",level:3}];function a(e){const s={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("table",{children:(0,r.jsx)("tr",{children:(0,r.jsxs)("td",{width:"180",class:"image-cell",children:[(0,r.jsx)("img",{src:d.A,width:"180",height:"180"}),"Bonusly is a recognition and rewards platform that fosters employee engagement by allowing peers to give and receive micro-bonuses for excellent work. Its intuitive interface and integration with popular workplace tools make it easy for teams to appreciate each other's efforts, boosting morale and productivity.",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"Versions: ",(0,r.jsx)(s.code,{children:"8.0.0 P2"})]})})}),"\n",(0,r.jsx)(s.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsxs)(s.p,{children:["It is recommended that you review the ",(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"./../blog/bonusly",children:"Bonusly Collections"})})," guide before proceeding with this blog."]}),"\n",(0,r.jsx)(s.h2,{id:"connector-settings",children:"Connector Settings"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Steps"})}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsx)(s.li,{children:"Login to RSA Identity G&L console as System Administrator."}),"\n",(0,r.jsxs)(s.li,{children:["Navigate to ",(0,r.jsx)(s.strong,{children:"AFX > Connectors"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:["Click on ",(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.em,{children:"Create Connector"})})," and select the RESTful Web Service connector template."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"supported-verbs",children:"Supported Verbs"}),"\n",(0,r.jsx)(s.h3,{id:"create-an-account",children:"Create an Account"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Steps"})}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["Edit the connector and navigate to ",(0,r.jsx)(s.em,{children:"Capabilities"})," tab."]}),"\n",(0,r.jsxs)(s.li,{children:["Click on ",(0,r.jsx)(s.em,{children:"Create an Account"})," and configure as shown below."]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Command Input Parameters"})}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Parameter Name"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Display Name"}),(0,r.jsx)(s.th,{children:"Mapping"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Account"}),(0,r.jsx)(s.td,{children:"\u2714\ufe0f"}),(0,r.jsx)(s.td,{children:"Account Name"}),(0,r.jsx)(s.td,{children:"${AccountTemplate.Name}"}),(0,r.jsx)(s.td,{children:"Unique identifier for the user"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"LastName"}),(0,r.jsx)(s.td,{children:"\u2714\ufe0f"}),(0,r.jsx)(s.td,{children:"Last Name"}),(0,r.jsx)(s.td,{children:"${AccountTemplate.LastName}"}),(0,r.jsx)(s.td,{children:"Family name of the user"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"FirstName"}),(0,r.jsx)(s.td,{children:"\u2714\ufe0f"}),(0,r.jsx)(s.td,{children:"First Name"}),(0,r.jsx)(s.td,{children:"${AccountTemplate.FirstName}"}),(0,r.jsx)(s.td,{children:"Given name of the user"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"EmployeeID"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:"Employee ID"}),(0,r.jsx)(s.td,{children:"${AccountTemplate.EmployeeID}"}),(0,r.jsx)(s.td,{children:"Employee ID of the user"})]})]})]}),"\n",(0,r.jsx)(s.p,{children:"\ud83d\udd12 = Encrypted \u2714\ufe0f = Required"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Command Output Parameters"})}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Parameter Name"}),(0,r.jsx)(s.th,{children:"Display Name"}),(0,r.jsx)(s.th,{children:"Mapping"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"AccountID"}),(0,r.jsx)(s.td,{children:"Account ID"}),(0,r.jsx)(s.td,{children:"Account.External_ID"}),(0,r.jsx)(s.td,{children:"A unique identifier used to reference user"})]})})]}),"\n",(0,r.jsxs)("table",{class:"table-container",children:[(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colspan:"2",children:(0,r.jsx)("span",{class:"header-2-text",children:"Command Code"})})}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Generate SessionToken"}),(0,r.jsx)("td",{})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Method"}),(0,r.jsx)("td",{children:(0,r.jsx)("span",{class:"method-post",children:"POST"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Path"}),(0,r.jsx)("td",{children:(0,r.jsx)(s.code,{children:"api/v1/users"})})]}),(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colspan:"2",children:(0,r.jsx)("span",{class:"header-2-text",children:"Request Headers"})})}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Content-Type"}),(0,r.jsx)("td",{children:(0,r.jsx)(s.code,{children:"application/json"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Accept"}),(0,r.jsx)("td",{children:(0,r.jsx)(s.code,{children:"application/json"})})]}),(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colspan:"2",children:(0,r.jsx)("span",{class:"header-2-text",children:"Request Body"})})}),(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colspan:"2",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\r\n  "email": "${Account}",\r\n  "first_name": "${FirstName}",\r\n  "last_name": "${LastName}",\r\n  "external_unique_id": "${EmployeeID}",\r\n  "send_invite": false\r\n}\n'})})})}),(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colspan:"2",children:(0,r.jsx)("span",{class:"header-2-text",children:"Status Code"})})}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Expression Type"}),(0,r.jsx)("td",{children:"Status Code"})]}),(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colspan:"2",children:"Pattern"})}),(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{children:["^[23]\\d",2,"$"]}),(0,r.jsx)("td",{children:"0"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{children:["^([45])\\d",2,"$"]}),(0,r.jsx)("td",{children:"$1"})]}),(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colspan:"2",children:(0,r.jsx)("span",{class:"header-2-text",children:"Brief Response"})})}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Expression Type"}),(0,r.jsx)("td",{children:"Json Path"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Expression"}),(0,r.jsx)("td",{children:(0,r.jsx)(s.code,{children:"$.success"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"(.*)"}),(0,r.jsx)("td",{children:"Success = $1"})]}),(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colspan:"2",children:(0,r.jsx)("span",{class:"header-2-text",children:"Detailed Response"})})}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Expression Type"}),(0,r.jsx)("td",{children:"Json Path"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Expression"}),(0,r.jsx)("td",{children:(0,r.jsx)(s.code,{children:"$.message"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"(.*)"}),(0,r.jsx)("td",{children:"Message = $1"})]}),(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colspan:"2",children:(0,r.jsx)("span",{class:"header-2-text",children:"AccountID"})})}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Expression Type"}),(0,r.jsx)("td",{children:"Json Path"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Expression"}),(0,r.jsx)("td",{children:(0,r.jsx)(s.code,{children:"id"})})]})]}),"\n",(0,r.jsxs)(s.ol,{start:"3",children:["\n",(0,r.jsxs)(s.li,{children:["Click ",(0,r.jsx)(s.strong,{children:"OK"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:["Run the ",(0,r.jsx)(s.em,{children:"Test Connector Capabilities"})," to verify the verb."]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"add-application-role-to-account",children:"Add Application Role to Account"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Steps"})}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["Edit the connector and navigate to ",(0,r.jsx)(s.em,{children:"Capabilities"})," tab."]}),"\n",(0,r.jsxs)(s.li,{children:["Click on ",(0,r.jsx)(s.em,{children:"Add Application Role to Account"})," and configure as shown below."]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Command Input Parameters"})}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Parameter Name"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Display Name"}),(0,r.jsx)(s.th,{children:"Mapping"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"AccountID"}),(0,r.jsx)(s.td,{children:"\u2714\ufe0f"}),(0,r.jsx)(s.td,{children:"Account ID"}),(0,r.jsx)(s.td,{children:"${Account.External_Id}"}),(0,r.jsx)(s.td,{children:"Unique identifier for the user"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"AppRole"}),(0,r.jsx)(s.td,{children:"\u2714\ufe0f"}),(0,r.jsx)(s.td,{children:"User Mode"}),(0,r.jsx)(s.td,{children:"${ApplicationRole.Name}"}),(0,r.jsx)(s.td,{children:"The user mode to be assigned to the user"})]})]})]}),"\n",(0,r.jsx)(s.p,{children:"\ud83d\udd12 = Encrypted \u2714\ufe0f = Required"}),"\n",(0,r.jsxs)("table",{class:"table-container",children:[(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colspan:"2",children:(0,r.jsx)("span",{class:"header-2-text",children:"Command Code"})})}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Generate SessionToken"}),(0,r.jsx)("td",{})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Method"}),(0,r.jsx)("td",{children:(0,r.jsx)("span",{class:"method-put",children:"PUT"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Path"}),(0,r.jsx)("td",{children:(0,r.jsx)(s.code,{children:"api/v1/users/${AccountID}"})})]}),(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colspan:"2",children:(0,r.jsx)("span",{class:"header-2-text",children:"Request Headers"})})}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Content-Type"}),(0,r.jsx)("td",{children:(0,r.jsx)(s.code,{children:"application/json"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Accept"}),(0,r.jsx)("td",{children:(0,r.jsx)(s.code,{children:"application/json"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Authorization"}),(0,r.jsx)("td",{children:(0,r.jsx)(s.code,{children:"Bearer ${Settings.APIKey}"})})]}),(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colspan:"2",children:(0,r.jsx)("span",{class:"header-2-text",children:"Request Body"})})}),(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colspan:"2",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\r\n  "user_mode": "${AppRole}"\r\n}\n'})})})}),(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colspan:"2",children:(0,r.jsx)("span",{class:"header-2-text",children:"Status Code"})})}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Expression Type"}),(0,r.jsx)("td",{children:"Status Code"})]}),(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colspan:"2",children:"Pattern"})}),(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{children:["^[23]\\d",2,"$"]}),(0,r.jsx)("td",{children:"0"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{children:["^([45])\\d",2,"$"]}),(0,r.jsx)("td",{children:"$1"})]}),(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colspan:"2",children:(0,r.jsx)("span",{class:"header-2-text",children:"Brief Response"})})}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Expression Type"}),(0,r.jsx)("td",{children:"Json Path"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Expression"}),(0,r.jsx)("td",{children:(0,r.jsx)(s.code,{children:"$.success"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"(.*)"}),(0,r.jsx)("td",{children:"Success = $1"})]}),(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colspan:"2",children:(0,r.jsx)("span",{class:"header-2-text",children:"Detailed Response"})})}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Expression Type"}),(0,r.jsx)("td",{children:"Json Path"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Expression"}),(0,r.jsx)("td",{children:(0,r.jsx)(s.code,{children:"$.message"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"(.*)"}),(0,r.jsx)("td",{children:"Message = $1"})]})]}),"\n",(0,r.jsxs)(s.ol,{start:"3",children:["\n",(0,r.jsxs)(s.li,{children:["Click ",(0,r.jsx)(s.strong,{children:"OK"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:["Run the ",(0,r.jsx)(s.em,{children:"Test Connector Capabilities"})," to verify the verb."]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"remove-application-role-from-account",children:"Remove Application Role from Account"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Steps"})}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["Edit the connector and navigate to ",(0,r.jsx)(s.em,{children:"Capabilities"})," tab."]}),"\n",(0,r.jsxs)(s.li,{children:["Click on ",(0,r.jsx)(s.em,{children:"Remove Application Role from Account"})," and configure as shown below."]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Command Input Parameters"})}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Parameter Name"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Display Name"}),(0,r.jsx)(s.th,{children:"Mapping"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"AccountID"}),(0,r.jsx)(s.td,{children:"\u2714\ufe0f"}),(0,r.jsx)(s.td,{children:"Account ID"}),(0,r.jsx)(s.td,{children:"${Account.External_Id}"}),(0,r.jsx)(s.td,{children:"Unique identifier for the user"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"AppRole"}),(0,r.jsx)(s.td,{children:"\u2714\ufe0f"}),(0,r.jsx)(s.td,{children:"User Mode"}),(0,r.jsx)(s.td,{children:"${ApplicationRole.Name}"}),(0,r.jsx)(s.td,{children:"The user mode to be removed from the user"})]})]})]}),"\n",(0,r.jsx)(s.p,{children:"\ud83d\udd12 = Encrypted \u2714\ufe0f = Required"}),"\n",(0,r.jsxs)("table",{class:"table-container",children:[(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colspan:"2",children:(0,r.jsx)("span",{class:"header-2-text",children:"Command Code"})})}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Generate SessionToken"}),(0,r.jsx)("td",{})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Method"}),(0,r.jsx)("td",{children:(0,r.jsx)("span",{class:"method-put",children:"PUT"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Path"}),(0,r.jsx)("td",{children:(0,r.jsx)(s.code,{children:"api/v1/users/${AccountID}"})})]}),(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colspan:"2",children:(0,r.jsx)("span",{class:"header-2-text",children:"Request Headers"})})}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Content-Type"}),(0,r.jsx)("td",{children:(0,r.jsx)(s.code,{children:"application/json"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Accept"}),(0,r.jsx)("td",{children:(0,r.jsx)(s.code,{children:"application/json"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Authorization"}),(0,r.jsx)("td",{children:(0,r.jsx)(s.code,{children:"Bearer ${Settings.APIKey}"})})]}),(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colspan:"2",children:(0,r.jsx)("span",{class:"header-2-text",children:"Request Body"})})}),(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colspan:"2",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\r\n  "user_mode": "normal"\r\n}\n'})})})}),(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colspan:"2",children:(0,r.jsx)("span",{class:"header-2-text",children:"Status Code"})})}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Expression Type"}),(0,r.jsx)("td",{children:"Status Code"})]}),(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colspan:"2",children:"Pattern"})}),(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{children:["^[23]\\d",2,"$"]}),(0,r.jsx)("td",{children:"0"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{children:["^([45])\\d",2,"$"]}),(0,r.jsx)("td",{children:"$1"})]}),(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colspan:"2",children:(0,r.jsx)("span",{class:"header-2-text",children:"Brief Response"})})}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Expression Type"}),(0,r.jsx)("td",{children:"Json Path"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Expression"}),(0,r.jsx)("td",{children:(0,r.jsx)(s.code,{children:"$.success"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"(.*)"}),(0,r.jsx)("td",{children:"Success = $1"})]}),(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colspan:"2",children:(0,r.jsx)("span",{class:"header-2-text",children:"Detailed Response"})})}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Expression Type"}),(0,r.jsx)("td",{children:"Json Path"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Expression"}),(0,r.jsx)("td",{children:(0,r.jsx)(s.code,{children:"$.message"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"(.*)"}),(0,r.jsx)("td",{children:"Message = $1"})]})]}),"\n",(0,r.jsxs)(s.ol,{start:"3",children:["\n",(0,r.jsxs)(s.li,{children:["Click ",(0,r.jsx)(s.strong,{children:"OK"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:["Run the ",(0,r.jsx)(s.em,{children:"Test Connector Capabilities"})," to verify the verb."]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"disable-an-account",children:"Disable an Account"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Steps"})}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["Edit the connector and navigate to ",(0,r.jsx)(s.em,{children:"Capabilities"})," tab."]}),"\n",(0,r.jsxs)(s.li,{children:["Click on ",(0,r.jsx)(s.em,{children:"Disable an Account"})," and configure as shown below."]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Command Input Parameters"})}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Parameter Name"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Display Name"}),(0,r.jsx)(s.th,{children:"Mapping"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"AccountID"}),(0,r.jsx)(s.td,{children:"\u2714\ufe0f"}),(0,r.jsx)(s.td,{children:"Account ID"}),(0,r.jsx)(s.td,{children:"${Account.External_Id}"}),(0,r.jsx)(s.td,{children:"A unique identifier used to reference users"})]})})]}),"\n",(0,r.jsx)(s.p,{children:"\ud83d\udd12 = Encrypted \u2714\ufe0f = Required"}),"\n",(0,r.jsxs)("table",{class:"table-container",children:[(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colspan:"2",children:(0,r.jsx)("span",{class:"header-2-text",children:"Command Code"})})}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Generate SessionToken"}),(0,r.jsx)("td",{})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Method"}),(0,r.jsx)("td",{children:(0,r.jsx)("span",{class:"method-delete",children:"DELETE"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Path"}),(0,r.jsx)("td",{children:(0,r.jsx)(s.code,{children:"api/v1/users/${AccountID}"})})]}),(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colspan:"2",children:(0,r.jsx)("span",{class:"header-2-text",children:"Request Headers"})})}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Content-Type"}),(0,r.jsx)("td",{children:(0,r.jsx)(s.code,{children:"application/json"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Accept"}),(0,r.jsx)("td",{children:(0,r.jsx)(s.code,{children:"application/json"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Authorization"}),(0,r.jsx)("td",{children:(0,r.jsx)(s.code,{children:"Bearer ${Settings.APIKey}"})})]}),(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colspan:"2",children:(0,r.jsx)("span",{class:"header-2-text",children:"Request Body"})})}),(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colspan:"2",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:"{}\n"})})})}),(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colspan:"2",children:(0,r.jsx)("span",{class:"header-2-text",children:"Status Code"})})}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Expression Type"}),(0,r.jsx)("td",{children:"Status Code"})]}),(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colspan:"2",children:"Pattern"})}),(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{children:["^[23]\\d",2,"$"]}),(0,r.jsx)("td",{children:"0"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{children:["^([45])\\d",2,"$"]}),(0,r.jsx)("td",{children:"$1"})]}),(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colspan:"2",children:(0,r.jsx)("span",{class:"header-2-text",children:"Brief Response"})})}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Expression Type"}),(0,r.jsx)("td",{children:"Json Path"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Expression"}),(0,r.jsx)("td",{children:(0,r.jsx)(s.code,{children:"$.success"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"(.*)"}),(0,r.jsx)("td",{children:"Success = $1"})]}),(0,r.jsx)("tr",{children:(0,r.jsx)("td",{colspan:"2",children:(0,r.jsx)("span",{class:"header-2-text",children:"Detailed Response"})})}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Expression Type"}),(0,r.jsx)("td",{children:"Json Path"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Expression"}),(0,r.jsx)("td",{children:(0,r.jsx)(s.code,{children:"$.message"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"(.*)"}),(0,r.jsx)("td",{children:"Message = $1"})]})]}),"\n",(0,r.jsxs)(s.ol,{start:"3",children:["\n",(0,r.jsxs)(s.li,{children:["Click ",(0,r.jsx)(s.strong,{children:"OK"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:["Run the ",(0,r.jsx)(s.em,{children:"Test Connector Capabilities"})," to verify the verb."]}),"\n"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)("span",{class:"blog-id-text",children:"CON010"}),"\n"]})]})}function x(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},50310:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/Bonusly - 180x180-653388fabeb5ef2c5a30130c26a32690.jpg"},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>c});var r=n(96540);const t={},d=r.createContext(t);function i(e){const s=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(d.Provider,{value:s},e.children)}}}]);