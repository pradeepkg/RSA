"use strict";(self.webpackChunkdocku=self.webpackChunkdocku||[]).push([[7640],{44733:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var s=t(74848),i=t(28453),o=t(27293);const r={slug:"data-processors-basics",title:"Data Processor Basics",date:new Date("2024-01-30T00:00:00.000Z"),authors:"pradeepkg",tags:["Data Processors"],keywords:["Data Processors"]},a=void 0,c={permalink:"/RSA/basics/data-processors-basics",source:"@site/basics/data-processors/data-processors-basics/data-processors-basics.mdx",title:"Data Processor Basics",description:"This is the first line.  This is the second line.",date:"2024-01-30T00:00:00.000Z",tags:[{label:"Data Processors",permalink:"/RSA/basics/tags/data-processors"}],readingTime:19.4,hasTruncateMarker:!1,authors:[{name:"Pradeep Kadambar",title:"Creator",url:"https://www.linkedin.com/in/pradeepkg/",imageURL:"https://github.com/pradeepkg.png",key:"pradeepkg"}],frontMatter:{slug:"data-processors-basics",title:"Data Processor Basics",date:"2024-01-30T00:00:00.000Z",authors:"pradeepkg",tags:["Data Processors"],keywords:["Data Processors"]},unlisted:!1,prevItem:{title:"Manipulating Identities",permalink:"/RSA/basics/data-processors-idc"},nextItem:{title:"REST Collector Authentication",permalink:"/RSA/basics/rest-collector-authentication"}},d={authorsImageUrls:[void 0]},l=[{value:"Introduction",id:"introduction",level:2},{value:"Pre 7.5.2: Common Extension Points",id:"pre-752-common-extension-points",level:3},{value:"G&amp;L Cloud and 7.5.2 On-Premise: Easy Customization",id:"gl-cloud-and-752-on-premise-easy-customization",level:3}];function h(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["This is the first line. ",(0,s.jsx)("br",{})," This is the second line."]}),"\n",(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsxs)(n.p,{children:["Data processors have been integral in ",(0,s.jsx)(n.strong,{children:"RSA Governance and Lifecycle (G&L)"})," systems, playing a crucial role in manipulating data throughout different stages of collections, unification or Separation of Duties (SoD) processing. Traditionally, the integration of custom logic into these data processors required direct system access to the AVDB database and the use of tools such as SQL Developer. However, with the evolution of G&L products, there has been a paradigm shift in the approach to implementing custom logic within data processors."]}),"\n",(0,s.jsx)(n.p,{children:"In this blog post, we'll explore the historical context of data processors and examine contemporary solutions that not only streamline the customization process but also eliminate the necessity for direct database access. This evolution promises a more accessible and agile approach for developers working with G&L systems."}),"\n",(0,s.jsx)(n.h3,{id:"pre-752-common-extension-points",children:"Pre 7.5.2: Common Extension Points"}),"\n",(0,s.jsx)(n.p,{children:"In versions preceding 7.5.2, customization within Governance and Lifecycle (G&L) systems was facilitated through various extension points. These extension points served as key areas where developers could inject custom logic to tailor the system according to specific organizational needs. Below is a table outlining some of the common extension points utilized in G&L systems before version 7.5.2:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Processor Name"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Pre_ID_Unification_Handler"})}),(0,s.jsx)(n.td,{children:"Any action needed post identity data collection but before unification. Mostly used to manipulate the T_DC_SOURCEDATA_USER table"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Post_ID_Unification_Handler"})}),(0,s.jsx)(n.td,{children:"Any action that needs to be performed after the identities have been collected, unified and persisted in the system"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Pre_Supervisor_Resolution"})}),(0,s.jsx)(n.td,{children:"Any action that needs to be performed after the identities have been collected, but before supervisor references are resolved"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Pre_ADC_Handler"})}),(0,s.jsx)(n.td,{children:"Any action to be performed post account data collection but before processing."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Post_Account_Data_Load_Handler"})}),(0,s.jsx)(n.td,{children:"Action to be taken once account data has been collected and persisted in the system"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Post_MAEDC_Load_Handler"})}),(0,s.jsx)(n.td,{children:"Any action needed post multi-app EDC run"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Post_Process_SoD_Violations"})}),(0,s.jsx)(n.td,{children:"Actions to be taken post SoD rules have been evaluated and violations generated"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"gl-cloud-and-752-on-premise-easy-customization",children:"G&L Cloud and 7.5.2 On-Premise: Easy Customization"}),"\n",(0,s.jsx)(n.p,{children:"In the newest G&L Cloud and on-premise versions 7.5.2 and above, RSA has made customizing your system a breeze. This significant enhancement simplifies the process of adding and maintaining custom extensions, making it more intuitive and user-friendly for developers and administrators alike."}),"\n",(0,s.jsx)(n.p,{children:"To enable usage of processors, the following system settings must be set."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"custom.enableCustomPostProcessingScript = true\n"})}),"\n",(0,s.jsx)(n.p,{children:'After activation, you\'ll find the "Pre Custom Processing" and "Post Custom Processing" options available in designated configuration areas.'}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Process/Collector Name"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Identity Collectors"})}),(0,s.jsx)(n.td,{children:"Any action needed before or after identity data collection but before unification."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Unification"})}),(0,s.jsx)(n.td,{children:"Any action that needs to be performed before or after identity unification (Pre Process Script / Post Process Script)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Account Collectors (ADC)"})}),(0,s.jsx)(n.td,{children:"Any action to be performed before or after account data collection."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Entitlements Collectors (EDC)"})}),(0,s.jsx)(n.td,{children:"Any action to be performed before or after entitlements data collection."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Role Collectors (RDC)"})}),(0,s.jsx)(n.td,{children:"Any action to be performed before or after role data collection."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Multi-App Collectors"})}),(0,s.jsx)(n.td,{children:"Similar to ADC / EDC / RDC"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Data Access Collectors"})}),(0,s.jsx)(n.td,{children:"NA"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"App Metadata Collectors"})}),(0,s.jsx)(n.td,{children:"NA"})]})]})]}),"\n",(0,s.jsx)(o.A,{type:"warning",title:"Caution",children:(0,s.jsx)(n.p,{children:"These data processors are advanced product features and should be utilized\r\nwith caution and discretion."})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},27293:(e,n,t)=>{t.d(n,{A:()=>_});var s=t(96540),i=t(74848);function o(e){const{mdxAdmonitionTitle:n,rest:t}=function(e){const n=s.Children.toArray(e),t=n.find((e=>s.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),o=n.filter((e=>e!==t)),r=t?.props.children;return{mdxAdmonitionTitle:r,rest:o.length>0?(0,i.jsx)(i.Fragment,{children:o}):null}}(e.children),o=e.title??n;return{...e,...o&&{title:o},children:t}}var r=t(34164),a=t(21312),c=t(17559);const d={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function l(e){let{type:n,className:t,children:s}=e;return(0,i.jsx)("div",{className:(0,r.A)(c.G.common.admonition,c.G.common.admonitionType(n),d.admonition,t),children:s})}function h(e){let{icon:n,title:t}=e;return(0,i.jsxs)("div",{className:d.admonitionHeading,children:[(0,i.jsx)("span",{className:d.admonitionIcon,children:n}),t]})}function u(e){let{children:n}=e;return n?(0,i.jsx)("div",{className:d.admonitionContent,children:n}):null}function m(e){const{type:n,icon:t,title:s,children:o,className:r}=e;return(0,i.jsxs)(l,{type:n,className:r,children:[s||t?(0,i.jsx)(h,{title:s,icon:t}):null,(0,i.jsx)(u,{children:o})]})}function x(e){return(0,i.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const p={icon:(0,i.jsx)(x,{}),title:(0,i.jsx)(a.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function j(e){return(0,i.jsx)(m,{...p,...e,className:(0,r.A)("alert alert--secondary",e.className),children:e.children})}function f(e){return(0,i.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const g={icon:(0,i.jsx)(f,{}),title:(0,i.jsx)(a.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function b(e){return(0,i.jsx)(m,{...g,...e,className:(0,r.A)("alert alert--success",e.className),children:e.children})}function v(e){return(0,i.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const y={icon:(0,i.jsx)(v,{}),title:(0,i.jsx)(a.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function A(e){return(0,i.jsx)(m,{...y,...e,className:(0,r.A)("alert alert--info",e.className),children:e.children})}function C(e){return(0,i.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const P={icon:(0,i.jsx)(C,{}),title:(0,i.jsx)(a.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function w(e){return(0,i.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const D={icon:(0,i.jsx)(w,{}),title:(0,i.jsx)(a.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const T={icon:(0,i.jsx)(C,{}),title:(0,i.jsx)(a.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const k={...{note:j,tip:b,info:A,warning:function(e){return(0,i.jsx)(m,{...P,...e,className:(0,r.A)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,i.jsx)(m,{...D,...e,className:(0,r.A)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,i.jsx)(j,{title:"secondary",...e}),important:e=>(0,i.jsx)(A,{title:"important",...e}),success:e=>(0,i.jsx)(b,{title:"success",...e}),caution:function(e){return(0,i.jsx)(m,{...T,...e,className:(0,r.A)("alert alert--warning",e.className),children:e.children})}}};function _(e){const n=o(e),t=(s=n.type,k[s]||(console.warn(`No admonition component found for admonition type "${s}". Using Info as fallback.`),k.info));var s;return(0,i.jsx)(t,{...n})}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var s=t(96540);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);