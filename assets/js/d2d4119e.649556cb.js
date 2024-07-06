"use strict";(self.webpackChunkdocku=self.webpackChunkdocku||[]).push([[2393],{43689:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var i=t(74848),s=t(28453);t(27293);const r={slug:"data-processors-idc",title:"Manipulating Identities",date:new Date("2024-01-31T00:00:00.000Z"),authors:"pradeepkg",tags:["Data Processors","Identities"],keywords:["Data Processors","Identities"]},a=void 0,o={permalink:"/RSA/basics/data-processors-idc",source:"@site/basics/data-processors/data-processors-idc/data-processors-idc.mdx",title:"Manipulating Identities",description:"In this blog post, I will guide you through the effective utilization of pre and post processors during identity collections to address common use cases. If you are not familiar with data processors, I recommend reading the Data Processors Basics before proceeding, as it will provide a foundational understanding for the concepts discussed in this blog.",date:"2024-01-31T00:00:00.000Z",tags:[{inline:!0,label:"Data Processors",permalink:"/RSA/basics/tags/data-processors"},{inline:!0,label:"Identities",permalink:"/RSA/basics/tags/identities"}],readingTime:20.333333333333332,hasTruncateMarker:!0,authors:[{name:"Pradeep Kadambar",title:"Creator",url:"https://www.linkedin.com/in/pradeepkg/",imageURL:"https://github.com/pradeepkg.png",key:"pradeepkg"}],frontMatter:{slug:"data-processors-idc",title:"Manipulating Identities",date:"2024-01-31T00:00:00.000Z",authors:"pradeepkg",tags:["Data Processors","Identities"],keywords:["Data Processors","Identities"]},unlisted:!1,prevItem:{title:"Manipulating Accounts",permalink:"/RSA/basics/data-processors-adc"},nextItem:{title:"Data Processor Basics",permalink:"/RSA/basics/data-processors-basics"}},c={authorsImageUrls:[void 0]},l=[{value:"Enabling Data Processors",id:"enabling-data-processors",level:3},{value:"Set termination status based on Active Directory accountExpires value",id:"set-termination-status-based-on-active-directory-accountexpires-value",level:3},{value:"Generate User Name",id:"generate-user-name",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["In this blog post, I will guide you through the effective utilization of pre and post processors during identity collections to address common use cases. If you are not familiar with data processors, I recommend reading the ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"data-processors-basics",children:"Data Processors Basics"})})," before proceeding, as it will provide a foundational understanding for the concepts discussed in this blog."]}),"\n",(0,i.jsx)(n.h3,{id:"enabling-data-processors",children:"Enabling Data Processors"}),"\n",(0,i.jsx)(n.p,{children:"Data processing is an advanced feature that requires explicit activation by the System Administrator. To enable this feature, follow the steps outlined below:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Login to console as System Administrator"}),"\n",(0,i.jsx)(n.li,{children:"Navigate to Admin > System."}),"\n",(0,i.jsx)(n.li,{children:"Click on Edit"}),"\n",(0,i.jsx)(n.li,{children:"Under Custom, add enableCustomPostProcessingScript with value true"}),"\n",(0,i.jsx)(n.li,{children:"Click Save"}),"\n",(0,i.jsx)(n.li,{children:"Click OK."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"set-termination-status-based-on-active-directory-accountexpires-value",children:"Set termination status based on Active Directory accountExpires value"}),"\n",(0,i.jsxs)(n.p,{children:["In this specific use case, our goal is to gather user identities from Active Directory, including the ",(0,i.jsx)(n.em,{children:"accountExpires"})," attribute, which indicates the expiration date of an account. Upon collecting this identity information in G&L, our objective is to label the identity as terminated if the ",(0,i.jsx)(n.em,{children:"accountExpires"})," value is greater than or equal to the current date."]}),"\n",(0,i.jsxs)(n.p,{children:["To achieve this, we can leverage the ",(0,i.jsx)(n.em,{children:"Pre_ID_Unification_Handler"}),". This handler allows us to manipulate the raw data collected from Active Directory before the unification process takes place. By incorporating logic within this handler, we can effectively set the termination status based on the comparison between the ",(0,i.jsx)(n.em,{children:"accountExpires"})," value and the current date. This ensures that the identity management system appropriately identifies and marks accounts as terminated in accordance with the specified criteria."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Login to console as System Administrator"}),"\n",(0,i.jsxs)(n.li,{children:["Navigate to ",(0,i.jsx)(n.strong,{children:"Unification Config"})," and click on ",(0,i.jsx)(n.strong,{children:"Pre Process Script"})]}),"\n",(0,i.jsxs)(n.li,{children:['Update to add the following SQL block below the comment "Custom Code Goes Here". Here, we are setting the terminated flag based on the custom date attribute that contains the ',(0,i.jsx)(n.em,{children:"accountExpires"})," value from Active Directory IDC."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",metastring:"showLineNumbers",children:"UPDATE\r\n  T_RAW_USER\r\nSET\r\n  IS_TERMINATED = 1\r\nWHERE\r\n  CUS_ATTR_USER_CAD_1 <= SYSDATE\r\n  and run_id =(\r\n    select\r\n      MAX(v_run_id)\r\n    from\r\n      t_raw_user\r\n    where\r\n      idc_id = <<YOUR_IDC_ID>>\r\n  );\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"Validate"})," to check for syntactical errors."]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"Save"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"generate-user-name",children:"Generate User Name"}),"\n",(0,i.jsx)(n.p,{children:"In scenarios where G&L is tasked with onboarding user accounts across multiple systems, the need for generating a unique user ID becomes crucial. While straightforward cases can be addressed through Naming Policies, more intricate situations may demand customized solutions."}),"\n",(0,i.jsxs)(n.p,{children:["To tackle these complexities, we can employ the ",(0,i.jsx)(n.em,{children:"Post_ID_Unification_Handler"}),". This handler allows us to manipulate the unified data after the unification process has taken place. By incorporating custom logic within this handler, we can address the nuanced requirements of generating unique user IDs, ensuring that the system adapts to diverse scenarios during the onboarding process. This approach provides a flexible and tailored solution for managing user account onboarding in a variety of system environments."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Login to console as System Administrator"}),"\n",(0,i.jsxs)(n.li,{children:["Navigate to ",(0,i.jsx)(n.strong,{children:"Unification Config"})," and click on ",(0,i.jsx)(n.strong,{children:"Post Process Script"})]}),"\n",(0,i.jsxs)(n.li,{children:['Update to add the following SQL block below the comment "Custom Code Goes Here". Here we are setting the generated ',(0,i.jsx)(n.em,{children:"sAMAccountName"})," name in the custom user attribute post unification."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",metastring:"showLineNumbers",children:"FOR NewUser IN (\r\n  SELECT\r\n    userID,\r\n    sAMAccountName\r\n  FROM\r\n    (\r\n      SELECT\r\n        USER_ID as userID,\r\n        UPPER(\r\n          SUBSTR(U.FIRST_NAME, 1, 1) || SUBSTR(U.LAST_NAME, 1, 5)\r\n        ) AS sAMAccountName\r\n      FROM\r\n        T_MASTER_ENTERPRISE_USERS U\r\n      WHERE\r\n        /* sAMAccountName */\r\n        U.CUS_ATTR_USER_CAS_3 IS NULL\r\n        AND U.UNIQUE_ID IS NULL\r\n        AND U.USER_ID <> 'AveksaAdmin'\r\n        AND TO_DATE(U.CREATION_DATE, 'DD-MON-YY') = TO_DATE(SYSDATE, 'DD-MON-YY')\r\n        AND U.DELETION_DATE IS NULL\r\n    )\r\n) LOOP\r\n/* Update the custom user attribute sAMAccountName that holds generated sAMAccountName */\r\nUPDATE\r\n  T_MASTER_ENTERPRISE_USERS U\r\nSET\r\n  U.CUS_ATTR_USER_CAS_3 = NewUser.sAMAccountName\r\nWHERE\r\n  U.USER_ID = NewUser.userID;\r\nCOMMIT;\r\nEND LOOP;\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"Validate"})," to check for syntactical errors."]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"Save"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},27293:(e,n,t)=>{t.d(n,{A:()=>y});var i=t(96540),s=t(74848);function r(e){const{mdxAdmonitionTitle:n,rest:t}=function(e){const n=i.Children.toArray(e),t=n.find((e=>i.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),r=n.filter((e=>e!==t)),a=t?.props.children;return{mdxAdmonitionTitle:a,rest:r.length>0?(0,s.jsx)(s.Fragment,{children:r}):null}}(e.children),r=e.title??n;return{...e,...r&&{title:r},children:t}}var a=t(34164),o=t(21312),c=t(17559);const l={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function d(e){let{type:n,className:t,children:i}=e;return(0,s.jsx)("div",{className:(0,a.A)(c.G.common.admonition,c.G.common.admonitionType(n),l.admonition,t),children:i})}function h(e){let{icon:n,title:t}=e;return(0,s.jsxs)("div",{className:l.admonitionHeading,children:[(0,s.jsx)("span",{className:l.admonitionIcon,children:n}),t]})}function u(e){let{children:n}=e;return n?(0,s.jsx)("div",{className:l.admonitionContent,children:n}):null}function m(e){const{type:n,icon:t,title:i,children:r,className:a}=e;return(0,s.jsxs)(d,{type:n,className:a,children:[i||t?(0,s.jsx)(h,{title:i,icon:t}):null,(0,s.jsx)(u,{children:r})]})}function p(e){return(0,s.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const g={icon:(0,s.jsx)(p,{}),title:(0,s.jsx)(o.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function x(e){return(0,s.jsx)(m,{...g,...e,className:(0,a.A)("alert alert--secondary",e.className),children:e.children})}function f(e){return(0,s.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const j={icon:(0,s.jsx)(f,{}),title:(0,s.jsx)(o.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function v(e){return(0,s.jsx)(m,{...j,...e,className:(0,a.A)("alert alert--success",e.className),children:e.children})}function A(e){return(0,s.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const b={icon:(0,s.jsx)(A,{}),title:(0,s.jsx)(o.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function N(e){return(0,s.jsx)(m,{...b,...e,className:(0,a.A)("alert alert--info",e.className),children:e.children})}function S(e){return(0,s.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const T={icon:(0,s.jsx)(S,{}),title:(0,s.jsx)(o.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function w(e){return(0,s.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const E={icon:(0,s.jsx)(w,{}),title:(0,s.jsx)(o.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const I={icon:(0,s.jsx)(S,{}),title:(0,s.jsx)(o.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const D={...{note:x,tip:v,info:N,warning:function(e){return(0,s.jsx)(m,{...T,...e,className:(0,a.A)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,s.jsx)(m,{...E,...e,className:(0,a.A)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,s.jsx)(x,{title:"secondary",...e}),important:e=>(0,s.jsx)(N,{title:"important",...e}),success:e=>(0,s.jsx)(v,{title:"success",...e}),caution:function(e){return(0,s.jsx)(m,{...I,...e,className:(0,a.A)("alert alert--warning",e.className),children:e.children})}}};function y(e){const n=r(e),t=(i=n.type,D[i]||(console.warn(`No admonition component found for admonition type "${i}". Using Info as fallback.`),D.info));var i;return(0,s.jsx)(t,{...n})}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var i=t(96540);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);