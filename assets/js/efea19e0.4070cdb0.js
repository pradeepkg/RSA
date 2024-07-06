"use strict";(self.webpackChunkdocku=self.webpackChunkdocku||[]).push([[2501],{82623:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>j,frontMatter:()=>d,metadata:()=>o,toc:()=>u});var n=s(74848),r=s(28453),i=s(11470),l=s(19365),a=s(41447);const d={sidebar_position:5},c="Find Change Requests",o={id:"information/findChangeRequests",title:"Find Change Requests",description:"Find change requests. The command uses the PV_CHANGE_REQUEST public view to find data.",source:"@site/docs/information/findChangeRequests.md",sourceDirName:"information",slug:"/information/findChangeRequests",permalink:"/RSA/docs/information/findChangeRequests",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1715787065e3,sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Find Business Units",permalink:"/RSA/docs/information/findBusinessUnits"},next:{title:"Find User Groups",permalink:"/RSA/docs/information/findUserGroups"}},h={},u=[{value:"Request",id:"request",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Columns",id:"columns",level:4},{value:"Headers",id:"headers",level:3},{value:"Response",id:"response",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Examples",id:"examples",level:2},{value:"Request",id:"request-1",level:3},{value:"Response",id:"response-1",level:3}];function x(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"find-change-requests",children:"Find Change Requests"}),"\n","\n",(0,n.jsxs)(t.p,{children:["Find change requests. The command uses the ",(0,n.jsx)(t.em,{children:(0,n.jsx)(t.strong,{children:"PV_CHANGE_REQUEST"})})," public view to find data."]}),"\n",(0,n.jsxs)("p",{children:[(0,n.jsx)("span",{class:"method-get",children:"GET "}),(0,n.jsx)("span",{class:"method-get-text",children:(0,n.jsx)(t.a,{href:"https://instance.securid.com/aveksa/command.submit?cmd=findChangeRequests",children:"https://instance.securid.com/aveksa/command.submit?cmd=findChangeRequests"})})]}),"\n",(0,n.jsx)(t.h2,{id:"request",children:"Request"}),"\n",(0,n.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)("table",{class:"table-container",children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("label",{class:"required",children:"command"})}),(0,n.jsx)("td",{children:"findChangeRequests"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"format"}),(0,n.jsxs)("td",{children:[(0,n.jsxs)("p",{children:[(0,n.jsx)(t.code,{children:"properties"})," - (Default) ",(0,n.jsx)(t.code,{children:"key=value"}),". most useful when requesting a single object. If multiple objects are returned, values is a csv. ie ",(0,n.jsx)(t.code,{children:"key=value1,value2,value3"})," where value1 is the value for the first object, value2 is the value for the 2nd object, etc."]}),(0,n.jsxs)("p",{children:[(0,n.jsx)(t.code,{children:"json"})," - Useful format for parsing into javascript or other languages. See ",(0,n.jsx)(t.a,{href:"http://www.json.org",children:"www.json.org"})," for details."]}),(0,n.jsxs)("p",{children:[(0,n.jsx)(t.code,{children:"csv"})," - Comma separated values"]}),(0,n.jsxs)("p",{children:[(0,n.jsx)(t.code,{children:"tsv"})," - Tab separated values"]}),(0,n.jsx)(t.code,{children:"xml"})," - Extensible Markup Language"]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"delimiter"}),(0,n.jsxs)("td",{children:["The delimiter to use between values for ",(0,n.jsx)(t.code,{children:"csv, properties"})," formats"]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"returnColumns"}),(0,n.jsxs)("td",{children:[(0,n.jsx)("p",{children:"The names of the columns to return. returnColumns may be a CSV list of multiple column names. The returnColumns parameter may also be listed multiple times (ie returnColumns=col1,col2&returnColumns=col3,col4)"}),"Refer to Columns table below."]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"returnMaxRows"}),(0,n.jsx)("td",{children:"The maximum number of objects to return"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"distinct"}),(0,n.jsxs)("td",{children:[(0,n.jsx)(t.code,{children:"true, false"})," Returns only distinct values similar to the distinct keyword in SQL."]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"sortByColumns"}),(0,n.jsxs)("td",{children:[(0,n.jsx)("p",{children:"The results will be sorted based on the columns listed using comma as the delimiter if multiple columns are specified."}),"Refer to Columns table below."]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"sortDirection"}),(0,n.jsx)("td",{children:"This determines sorting order. When defined as 'asc' the sorting is in ascending order else in 'desc' descending order. If this parameter is not specified, the natural order of rows returned by database is used."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"includeHeaderRow"}),(0,n.jsxs)("td",{children:[(0,n.jsx)(t.code,{children:"true, false"})," To include column headers when the return format is ",(0,n.jsx)(t.code,{children:"csv, tsv"}),". (Default) ",(0,n.jsx)(t.code,{children:"true"})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"ignoreCase"}),(0,n.jsxs)("td",{children:[(0,n.jsx)(t.code,{children:"true, false"})," Returns case insensitive search result for specified filter parameters. (Default) ",(0,n.jsx)(t.code,{children:"false"})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"columns",children:"Columns"}),"\n",(0,n.jsxs)("table",{class:"table-container",children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"id"}),(0,n.jsx)("td",{children:"[Primary Key] Unique change request identifier"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"name"}),(0,n.jsx)("td",{children:"Change request name"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"type"}),(0,n.jsxs)("td",{children:["Change request type. Has the following values:",(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"System"}),(0,n.jsx)("li",{children:"Role"}),(0,n.jsx)("li",{children:"RoleSet"})]})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"requestor_id"}),(0,n.jsx)("td",{children:"[Foreign Key referencing USERS.ID] User id that created this change request"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"request_date"}),(0,n.jsx)("td",{children:"Date stamp when this change request was created"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"completed_date"}),(0,n.jsx)("td",{children:"Date stamp when this change request was completed."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"notes"}),(0,n.jsx)("td",{children:"Notes associated with this change request."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"current_state"}),(0,n.jsxs)("td",{children:["Current state of the change request. Has the following values:",(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"Open"}),(0,n.jsx)("li",{children:"PendingApprovals"}),(0,n.jsx)("li",{children:"Rejected"}),(0,n.jsx)("li",{children:"PendingVerification"}),(0,n.jsx)("li",{children:"PendingUndoVerification"}),(0,n.jsx)("li",{children:"Completed"}),(0,n.jsx)("li",{children:"Cancelled"}),(0,n.jsx)("li",{children:"ER"})]})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"is_undone"}),(0,n.jsxs)("td",{children:[(0,n.jsx)(t.code,{children:"true, false"})," Whether this change request was undone."]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"description"}),(0,n.jsx)("td",{children:"Description for this entry"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"delay_date"}),(0,n.jsx)("td",{children:"Delay date"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"violations"}),(0,n.jsx)("td",{children:"Violations"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"is_alldirectevent"}),(0,n.jsxs)("td",{children:[(0,n.jsx)(t.code,{children:"true, false"})," Indicates whether all direct changes have been fulfilled (indirect changes may be still outstanding)."]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"undoworkflow_id"}),(0,n.jsx)("td",{children:"The id of the workflow being used to undo the request (the request has been canceled)."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"source_type"}),(0,n.jsxs)("td",{children:["Source type. Has the following values:",(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"ExplicitAccess"}),(0,n.jsx)("li",{children:"RuleViolations"}),(0,n.jsx)("li",{children:"RoleManagement"}),(0,n.jsx)("li",{children:"RoleSetManagement"}),(0,n.jsx)("li",{children:"AccessCertification"}),(0,n.jsx)("li",{children:"UserReview"}),(0,n.jsx)("li",{children:"AccountReview"}),(0,n.jsx)("li",{children:"RoleReview"}),(0,n.jsx)("li",{children:"GroupReview"}),(0,n.jsx)("li",{children:"DataResourceReview"}),(0,n.jsx)("li",{children:"DataResourceOwnershipReview"})]})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"source_object"}),(0,n.jsx)("td",{children:"Source object"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"editable"}),(0,n.jsxs)("td",{children:[(0,n.jsx)(t.code,{children:"Y, N"})," Editable"]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"fulfillcancel"}),(0,n.jsxs)("td",{children:[(0,n.jsx)(t.code,{children:"Y, N"}),"Indicates whether cancel of the request is allowed once the request is in the fulfillment phase"]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"session_id"}),(0,n.jsx)("td",{children:"Session id"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"session_time"}),(0,n.jsx)("td",{children:"Session time"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"attachment_set_id"}),(0,n.jsx)("td",{children:"Attachment set id"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"form_id"}),(0,n.jsx)("td",{children:"Form id"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"form_data"}),(0,n.jsx)("td",{children:"Form data"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"visible_to_target"}),(0,n.jsxs)("td",{children:[(0,n.jsx)(t.code,{children:"Y, N"})," Specifies whether the pending change request initiated through the form appears under a user\u2019s Requests tab.You typically might not want a pending termination request to be visible to a user for whom the request was generated."]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"cancellable"}),(0,n.jsxs)("td",{children:[(0,n.jsx)(t.code,{children:"Y, N"})," Specifies whether a change request can be canceled"]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"review_def_id"}),(0,n.jsx)("td",{children:"The identifier of the review definition"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"review_date"}),(0,n.jsx)("td",{children:"Date the review was generated"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"delegate_id"}),(0,n.jsx)("td",{children:"Specifies the person to whom the delegation capabilities are granted."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"version"}),(0,n.jsx)("td",{children:"Indicates whether the new change request needs to be handled differently than legacy on restart"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"archive_id"}),(0,n.jsx)("td",{children:"???"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"approval_phase_completed_date"}),(0,n.jsx)("td",{children:"Date, with time, that approval phase of change request was completed."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"fulfillment_phase_start_date"}),(0,n.jsx)("td",{children:"Date, with time, that fulfillment phase of change request was started. May be null if request is not moving on to fulfillment phase (ie. request may have been cancelled, rejected, etc)."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"total_approval_time_value"}),(0,n.jsx)("td",{children:"Total approval time, as a decimal in days. Use this value and format appropriately when the exact value is desired."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"total_approval_time_days"}),(0,n.jsx)("td",{children:"Total approval time, as an integer in days. Use this value mainly for grouping and sorting. Use the _value column when the exact value is desired."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"total_approval_time_hours"}),(0,n.jsx)("td",{children:"Total approval time, as an integer in hours. Use this value mainly for grouping and sorting. Use the _value column when the exact value is desired."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"total_approval_time_text"}),(0,n.jsx)("td",{children:'Total approval time, as string value in the format of "x days y hours", where x and y are both integers. Use this column as a helper for display in reports.'})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"total_fulfillment_time_value"}),(0,n.jsx)("td",{children:"Total fulfillment time, as a decimal in days. Use this value and format appropriately when the exact value is desired."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"total_fulfillment_time_days"}),(0,n.jsx)("td",{children:"Total fulfillment time, as an integer in days. Use this value mainly for grouping and sorting. Use the _value column when the exact value is desired."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"total_fulfillment_time_hours"}),(0,n.jsx)("td",{children:"Total fulfillment time, as an integer in hours. Use this value mainly for grouping and sorting. Use the _value column when the exact value is desired."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"total_fulfillment_time_text"}),(0,n.jsx)("td",{children:'Total fulfillment time, as string value in the format of "x days y hours", where x and y are both integers. Use this column as a helper for display in reports.'})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"total_time_value"}),(0,n.jsx)("td",{children:"Total time, as a decimal in days. Use this value and format appropriately when the exact value is desired."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"total_time_hours"}),(0,n.jsx)("td",{children:"Total time, as an integer in hours. Use this value mainly for grouping and sorting. Use the _value column when the exact value is desired."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"total_time_days"}),(0,n.jsx)("td",{children:"Total time, as an integer in days. Use this value mainly for grouping and sorting. Use the _value column when the exact value is desired"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"total_time_text"}),(0,n.jsx)("td",{children:'Total time, as string value in the format of "x days y hours", where x and y are both integers. Use this column as a helper for display in reports.'})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"request_date_no_time"}),(0,n.jsx)("td",{children:"Date, without time, extracted from REQUEST_DATE"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"request_date_year"}),(0,n.jsx)("td",{children:"Year, as integer, extracted from REQUEST_DATE"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"request_date_month"}),(0,n.jsx)("td",{children:"Month, as integer, extracted from REQUEST_DATE."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"request_date_month_text"}),(0,n.jsx)("td",{children:"Month, as string, extracted from REQUEST_DATE. (ie. January)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"request_date_month_abv"}),(0,n.jsx)("td",{children:"Month abbreviation, as string extracted from REQUEST_DATE. (ie. Jan)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"request_date_day"}),(0,n.jsx)("td",{children:"Day of Month, as integer, extracted from REQUEST_DATE."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"request_week_of_year"}),(0,n.jsx)("td",{children:"Week of the year, as integer, extracted from REQUEST_DATE."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"completed_date_no_time"}),(0,n.jsx)("td",{children:"Date, without time, extracted from COMPLETED_DATE"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"completed_date_year"}),(0,n.jsx)("td",{children:"Year, as integer, extracted from COMPLETED_DATE"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"completed_date_month"}),(0,n.jsx)("td",{children:"Month, as integer, extracted from COMPLETED_DATE."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"completed_date_month_text"}),(0,n.jsx)("td",{children:"Month, as string, extracted from COMPLETED_DATE. (ie. January)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"completed_date_month_abv"}),(0,n.jsx)("td",{children:"Month abbreviation, as string extracted from COMPLETED_DATE. (ie. Jan)"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"completed_date_day"}),(0,n.jsx)("td",{children:"Day of Month, as integer, extracted from COMPLETED_DATE."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"completed_week_of_year"}),(0,n.jsx)("td",{children:"Week of the year, as integer, extracted from COMPLETED_DATE."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"cau1"}),(0,n.jsx)("td",{children:"Value of custom user type attributes configured on the instance represented by their reference names"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"cad1"}),(0,n.jsx)("td",{children:"Value of custom date type attributes configured on the instance represented by their reference names"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"cas1"}),(0,n.jsx)("td",{children:"Value of custom string type attributes configured on the instance represented by their reference names"})]})]}),"\n",(0,n.jsx)(t.h3,{id:"headers",children:"Headers"}),"\n",(0,n.jsxs)("table",{class:"table-container",children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("label",{class:"required",children:"Authorization"})}),(0,n.jsxs)("td",{children:["Bearer ",(0,n.jsx)(t.code,{children:"token"})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Accept"}),(0,n.jsx)("td",{children:"application/json"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Content-Type"}),(0,n.jsx)("td",{children:"application/json"})]})]}),"\n",(0,n.jsx)(t.h2,{id:"response",children:"Response"}),"\n",(0,n.jsx)(t.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,n.jsxs)(t.p,{children:["The API returns the requested columns specified by ",(0,n.jsx)(t.em,{children:(0,n.jsx)(t.strong,{children:"returnColumns"})})," as output. If ",(0,n.jsx)(t.em,{children:(0,n.jsx)(t.strong,{children:"returnColumns"})})," is unspecified then all ",(0,n.jsx)(t.a,{href:"#columns",children:"columns"})," listed will be returned."]}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.h3,{id:"request-1",children:"Request"}),"\n",(0,n.jsxs)(i.A,{className:"unique-tabs",children:[(0,n.jsx)(l.A,{value:"Curl",attributes:{className:a.A.curl},children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:'curl -K -X GET  \\\n"https://instance.securid.com/aveksa/command.submit?cmd=findChangeRequests&format=json" \\\n"&returnColumns=id%2Cname%2Cdescription%2Ctype%2Ccurrent_state%2Csource_type%2Cnotes&returnMaxRows=10" \\\n-H "Authorization: Bearer <token>" \\\n-H "Content-Type: application/json"\n'})})}),(0,n.jsx)(l.A,{value:"Python",attributes:{className:a.A.python},children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'import requests\n\nurl = "https://instance.securid.com/aveksa/command.submit"\n\nparams = {\n    "cmd": "findChangeRequests",\n    "format": "json",\n    "returnColumns": "id,name,description,type,current_state,source_type,notes",\n    "returnMaxRows": "50",\n    "sortDirection": "asc"\n}\n\nheaders = {\n    \'Authorization\': \'Bearer <token>\',\n    \'Content-Type\': \'application/json\'\n}\n\nresponse = requests.get(url, params=params, headers=headers)\n\nif response.status_code == 200:\n    data = response.json()\n    print(data)\nelse:\n    print(f"Request failed with status code {response.status_code}")\n'})})}),(0,n.jsx)(l.A,{value:"Node.js",attributes:{className:a.A.nodejs},children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"const axios = require('axios');\n\nconst url = \"https://instance.securid.com/aveksa/command.submit\";\n\nconst params = {\n    cmd: \"findChangeRequests\",\n    format: \"json\",\n    returnColumns: \"id,name,description,type,current_state,source_type,notes\",\n    returnMaxRows: \"50\",\n    sortDirection: \"asc\"\n};\n\nconst headers = {\n    'Authorization': 'Bearer <token>',\n    'Content-Type': 'application/json'\n};\n\naxios.get(url, { params, headers })\n    .then(response => {\n        if (response.status === 200) {\n            const data = response.data;\n            console.log(data);\n        } else {\n            console.log(`Request failed with status code ${response.status}`);\n        }\n    })\n    .catch(error => {\n        console.error('Error:', error);\n    });\n"})})})]}),"\n",(0,n.jsx)(t.h3,{id:"response-1",children:"Response"}),"\n",(0,n.jsx)(i.A,{className:"unique-tabs",children:(0,n.jsx)(l.A,{value:"200",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n    "findChangeRequests": [\n        {\n            "id": "43",\n            "name": "00043",\n            "description": "",\n            "type": "System",\n            "current_state": "Cancelled",\n            "source_type": "ExplicitAccess",\n            "notes": ""\n        },\n        {\n            "id": "221",\n            "name": "Rule:Attribute Synchronization_41:Doe, James1_jdoe_225186_00221",\n            "description": "Created from rule Attribute Synchronization",\n            "type": "System",\n            "current_state": "Completed",\n            "source_type": "RuleViolations",\n            "notes": "Created from rule Attribute Synchronization"\n        },\n        {\n            "id": "143",\n            "name": "00143",\n            "description": "",\n            "type": "System",\n            "current_state": "PendingVerification",\n            "source_type": "ExplicitAccess",\n            "notes": ""\n        },\n        {\n            "id": "64",\n            "name": "00063 [This is an automatically generated revocation request.]",\n            "description": "",\n            "type": "System",\n            "current_state": "ER",\n            "source_type": "ExplicitAccess",\n            "notes": ""\n        }\n    ]\n}    \n'})})})})]})}function j(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},19365:(e,t,s)=>{s.d(t,{A:()=>l});s(96540);var n=s(34164);const r={tabItem:"tabItem_Ymn6"};var i=s(74848);function l(e){let{children:t,hidden:s,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,l),hidden:s,children:t})}},11470:(e,t,s)=>{s.d(t,{A:()=>y});var n=s(96540),r=s(34164),i=s(23104),l=s(56347),a=s(205),d=s(57485),c=s(31682),o=s(70679);function h(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:s}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:s,attributes:n,default:r}}=e;return{value:t,label:s,attributes:n,default:r}}))}(s);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,s])}function x(e){let{value:t,tabValues:s}=e;return s.some((e=>e.value===t))}function j(e){let{queryString:t=!1,groupId:s}=e;const r=(0,l.W6)(),i=function(e){let{queryString:t=!1,groupId:s}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:t,groupId:s});return[(0,d.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function m(e){const{defaultValue:t,queryString:s=!1,groupId:r}=e,i=u(e),[l,d]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=s.find((e=>e.default))??s[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[c,h]=j({queryString:s,groupId:r}),[m,p]=function(e){let{groupId:t}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,o.Dv)(s);return[r,(0,n.useCallback)((e=>{s&&i.set(e)}),[s,i])]}({groupId:r}),f=(()=>{const e=c??m;return x({value:e,tabValues:i})?e:null})();(0,a.A)((()=>{f&&d(f)}),[f]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!x({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);d(e),h(e),p(e)}),[h,p,i]),tabValues:i}}var p=s(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=s(74848);function v(e){let{className:t,block:s,selectedValue:n,selectValue:l,tabValues:a}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),o=e=>{const t=e.currentTarget,s=d.indexOf(t),r=a[s].value;r!==n&&(c(t),l(r))},h=e=>{let t=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const s=d.indexOf(e.currentTarget)+1;t=d[s]??d[0];break}case"ArrowLeft":{const s=d.indexOf(e.currentTarget)-1;t=d[s]??d[d.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":s},t),children:a.map((e=>{let{value:t,label:s,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>d.push(e),onKeyDown:h,onClick:o,...i,className:(0,r.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":n===t}),children:s??t},t)}))})}function _(e){let{lazy:t,children:s,selectedValue:r}=e;const i=(Array.isArray(s)?s:[s]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function b(e){const t=m(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,g.jsx)(v,{...t,...e}),(0,g.jsx)(_,{...t,...e})]})}function y(e){const t=(0,p.A)();return(0,g.jsx)(b,{...e,children:h(e.children)},String(t))}},41447:(e,t,s)=>{s.d(t,{A:()=>n});const n={curl:"curl_orwx",python:"python_uXgC",nodejs:"nodejs_ucMl",powershell:"powershell_BcVw"}},28453:(e,t,s)=>{s.d(t,{R:()=>l,x:()=>a});var n=s(96540);const r={},i=n.createContext(r);function l(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);