(this["webpackJsonppublications-react"]=this["webpackJsonppublications-react"]||[]).push([[0],{55:function(e,t,a){},61:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),i=a(15),s=a.n(i),r=a(12),o=a(5),l=(a(50),a(23));window.jQuery=window.$=l;var u=a(24);window.Popper=u.default;a(53),a(54),a(55);var d=a(3),b=(a(56),a(6)),j=a(4),p="API",m="SET_USER_INFO",h="TOGGLE_LOADER",O="RESET_USER_INFO",f="SET_ALL_PUBLICATIONS",x="ADD_PUBLICATION",v="REMOVE_PUBLICATION",N="UPDATE_PUBLICATION",g=function(){return localStorage.removeItem("USER_INFO"),{type:O}},y=function(e){var t=JSON.parse(atob(e.token.split(".")[1])),a={userId:t.id,fullName:"".concat(t.firstName," ").concat(t.lastName),token:e.token,isLoggedIn:!0};return localStorage.setItem("USER_INFO",JSON.stringify(a)),{type:m,payload:a}},P=a(0),w=Object(o.b)(null,(function(e){return{dispatchLoginAction:function(t,a,n,c){return e(function(e,t,a){return{type:p,payload:{method:"POST",url:"/api/users/login",data:e,success:function(e){return y(e)},postProcessSuccess:t,postProcessError:a}}}({email:t,password:a},n,c))}}}))((function(e){var t=e.dispatchLoginAction,a=Object(n.useState)(""),i=Object(j.a)(a,2),s=i[0],r=i[1],o=Object(n.useState)(""),l=Object(j.a)(o,2),u=l[0],d=l[1],p=Object(n.useState)({email:!1,password:!1}),m=Object(j.a)(p,2),h=m[0],O=m[1],f=function(){return!s||!u},x=function(){var e={email:!1,password:!1};s.trim()||(e.email=!0),u.trim()||(e.password=!0),O(e)};return Object(P.jsxs)(c.a.Fragment,{children:[Object(P.jsx)("h2",{children:"Have an account ?"}),Object(P.jsx)("h4",{children:"Login here"}),Object(P.jsx)("br",{}),Object(P.jsxs)("form",{noValidate:!0,onSubmit:function(e){e.preventDefault(),f()?x():t(s,u,(function(){return b.c.success("Logged In Successfully!")}),(function(e){return b.c.error("Error: ".concat(e))}))},children:[Object(P.jsxs)("div",{className:"form-group",children:[Object(P.jsx)("label",{htmlFor:"email",children:"Email address"}),Object(P.jsx)("input",{noValidate:!0,id:"email",type:"email",name:"email",placeholder:"Email",value:s,onChange:function(e){return r(e.target.value)},className:"form-control ".concat(h.email?"is-invalid":"")}),Object(P.jsx)("p",{className:"invalid-feedback",children:"Required"})]}),Object(P.jsxs)("div",{className:"form-group",children:[Object(P.jsx)("label",{htmlFor:"password",children:"Password"}),Object(P.jsx)("input",{noValidate:!0,id:"password",type:"password",name:"password",placeholder:"password",value:u,onChange:function(e){return d(e.target.value)},className:"form-control ".concat(h.password?"is-invalid":"")}),Object(P.jsx)("p",{className:"invalid-feedback",children:"Required"})]}),Object(P.jsxs)("button",{type:"submit",className:"btn btn-primary mr-2",children:["Login | ",Object(P.jsx)("i",{className:"fas fa-sign-in-alt"})]}),Object(P.jsxs)("button",{onClick:function(e){e.preventDefault(),r(""),d(""),O({email:!1,password:!1})},className:"btn btn-outline-secondary",children:["Cancel | ",Object(P.jsx)("i",{className:"fas fa-times"})]})]})]})})),C=Object(o.b)(null,(function(e){return{dispatchRegisterAction:function(t,a,n,c,i,s){return e(function(e,t,a){return{type:p,payload:{method:"POST",url:"/api/users/register",data:e,success:function(e){return y(e)},postProcessSuccess:t,postProcessError:a}}}({firstName:t,lastName:a,email:n,password:c},i,s))}}}))((function(e){var t=e.dispatchRegisterAction,a=Object(n.useState)(""),i=Object(j.a)(a,2),s=i[0],r=i[1],o=Object(n.useState)(""),l=Object(j.a)(o,2),u=l[0],d=l[1],p=Object(n.useState)(""),m=Object(j.a)(p,2),h=m[0],O=m[1],f=Object(n.useState)(""),x=Object(j.a)(f,2),v=x[0],N=x[1],g=Object(n.useState)({firstName:!1,lastName:!1,email:!1,password:!1}),y=Object(j.a)(g,2),w=y[0],C=y[1],S=function(){return!s||!u||!h||!v},E=function(){var e={firstName:!1,lastName:!1,email:!1,password:!1};s.trim()||(e.firstName=!0),u.trim()||(e.lastName=!0),h.trim()||(e.email=!0),v.trim()||(e.password=!0),C(e)};return Object(P.jsxs)(c.a.Fragment,{children:[Object(P.jsx)("h2",{children:"New User ?"}),Object(P.jsx)("h4",{children:"Create an account"}),Object(P.jsx)("br",{}),Object(P.jsxs)("form",{noValidate:!0,onSubmit:function(e){e.preventDefault(),S()?E():t(s,u,h,v,(function(){return b.c.success("Account Created Successfully!")}),(function(e){return b.c.error("Error: ".concat(e))}))},children:[Object(P.jsxs)("div",{className:"form-group",children:[Object(P.jsx)("label",{htmlFor:"firstName",children:"First Name"}),Object(P.jsx)("input",{noValidate:!0,id:"firstName",type:"text",name:"firstName",placeholder:"First Name",value:s,onChange:function(e){return r(e.target.value)},className:"form-control ".concat(w.email?"is-invalid":"")}),Object(P.jsx)("p",{className:"invalid-feedback",children:"Required"})]}),Object(P.jsxs)("div",{className:"form-group",children:[Object(P.jsx)("label",{htmlFor:"lastName",children:"Last Name"}),Object(P.jsx)("input",{noValidate:!0,id:"lastName",type:"text",name:"lastName",placeholder:"Last Name",value:u,onChange:function(e){return d(e.target.value)},className:"form-control ".concat(w.email?"is-invalid":"")}),Object(P.jsx)("p",{className:"invalid-feedback",children:"Required"})]}),Object(P.jsxs)("div",{className:"form-group",children:[Object(P.jsx)("label",{htmlFor:"email1",children:"Email address"}),Object(P.jsx)("input",{noValidate:!0,id:"email1",type:"email",name:"email",placeholder:"Email",value:h,onChange:function(e){return O(e.target.value)},className:"form-control ".concat(w.email?"is-invalid":"")}),Object(P.jsx)("p",{className:"invalid-feedback",children:"Required"})]}),Object(P.jsxs)("div",{className:"form-group",children:[Object(P.jsx)("label",{htmlFor:"password1",children:"Password"}),Object(P.jsx)("input",{noValidate:!0,id:"password1",type:"password",name:"password",placeholder:"password",value:v,onChange:function(e){return N(e.target.value)},className:"form-control ".concat(w.email?"is-invalid":"")}),Object(P.jsx)("p",{className:"invalid-feedback",children:"Required"})]}),Object(P.jsxs)("button",{type:"submit",className:"btn btn-primary mr-2",children:["Register | ",Object(P.jsx)("i",{className:"fas fa-user-plus"})]}),Object(P.jsxs)("button",{onClick:function(e){e.preventDefault(),r(""),d(""),O(""),N(""),C({firstName:!1,lastName:!1,email:!1,password:!1})},className:"btn btn-outline-secondary",children:["Cancel | ",Object(P.jsx)("i",{className:"fas fa-times"})]})]})]})})),S=function(){return Object(P.jsxs)("div",{className:"row justify-content-between",children:[Object(P.jsx)("div",{className:"col-md-5",children:Object(P.jsx)(w,{})}),Object(P.jsx)("div",{style:{border:"1px solid #ababab"}}),Object(P.jsx)("div",{className:"col-md-6",children:Object(P.jsx)(C,{})})]})},E=function(e){var t=e.page,a=e.onPageChange,n=e.itemsTotal,c=e.itemsPerPage,i=function(){return Math.ceil(n/c)};return Object(P.jsx)("nav",{"aria-label":"Page navigation example",children:Object(P.jsxs)("ul",{className:"pagination",children:[Object(P.jsx)("li",{className:"page-item",children:Object(P.jsx)("button",{className:"page-link",disabled:t<=1,onClick:function(){return a(1)},children:"First"})}),Object(P.jsx)("li",{className:"page-item",children:Object(P.jsx)("button",{className:"page-link",disabled:t<=1,onClick:function(){return a(t-1)},children:"Previous"})}),Object(P.jsx)("li",{className:"page-item",children:Object(P.jsx)("button",{className:"page-link",disabled:t>=i(),onClick:function(){return a(t+1)},children:"Next"})}),Object(P.jsx)("li",{className:"page-item",children:Object(P.jsx)("button",{className:"page-link",disabled:t>=i(),onClick:function(){return a(i())},children:"Last"})}),Object(P.jsxs)("li",{className:"ml-4 my-auto",children:[t,"/",i()]})]})})},k=function(){return{type:p,payload:{method:"GET",url:"/api/publications",success:function(e){return T(e)}}}},A=function(e){return{type:x,payload:e}},T=function(e){return{type:f,payload:e}},I=function(e,t){return{type:N,payload:{publicationId:e,data:t}}},D=function(e){return{type:v,payload:e}},R=Object(o.b)(null,(function(e){return{dispatchDeleteAction:function(t,a,n){return e(function(e,t,a){return{type:p,payload:{method:"DELETE",url:"/api/publications/".concat(e),success:function(){return D(e)},postProcessSuccess:t,postProcessError:a}}}(t,a,n))}}}))((function(e){var t=e.publications,a=e.dispatchDeleteAction,i=Object(n.useState)(1),s=Object(j.a)(i,2),o=s[0],l=s[1],u=Object(n.useState)(""),d=Object(j.a)(u,2),p=d[0],m=d[1];return Object(P.jsxs)(c.a.Fragment,{children:[Object(P.jsx)(E,{page:o,onPageChange:function(e){l(e)},itemsPerPage:10,itemsTotal:t.length}),Object(P.jsxs)("table",{className:"table table-hover",children:[Object(P.jsx)("thead",{className:"thead-dark",children:Object(P.jsxs)("tr",{children:[Object(P.jsx)("th",{scope:"col",children:"Publication Type"}),Object(P.jsx)("th",{scope:"col",children:"Title"}),Object(P.jsx)("th",{scope:"col",children:"Authors"}),Object(P.jsx)("th",{scope:"col",className:"creation-date-display",children:"Creation Date"}),Object(P.jsx)("th",{scope:"col"})]})}),Object(P.jsx)("tbody",{children:t.slice(10*(o-1),10*o).map((function(e){return Object(P.jsxs)("tr",{children:[Object(P.jsx)("td",{children:Object(P.jsx)(r.b,{to:"/publication-createorupdate/".concat(e._id),children:e.publicationType})}),Object(P.jsx)("td",{children:e.title}),Object(P.jsx)("td",{children:e.authors}),Object(P.jsx)("td",{children:e.creationDate}),Object(P.jsx)("td",{children:Object(P.jsx)("a",{href:"/",onClick:function(t){return a=t,n=e._id,a.preventDefault(),m(n),void window.$("#confirmationModal").modal("show");var a,n},children:Object(P.jsx)("i",{className:"fas fa-trash-alt fa-lg text-danger"})})})]},e._id)}))})]}),Object(P.jsx)(L,{handleOnDelete:function(){a(p,(function(){window.$("#confirmationModal").modal("hide"),b.c.success("Publication Deleted Successfully!")}),(function(e){window.$("#confirmationModal").modal("hide"),b.c.error("Error: ".concat(e))}))}})]})})),L=function(e){var t=e.handleOnDelete;return Object(P.jsx)("div",{className:"modal",id:"confirmationModal",tabIndex:"-1",role:"dialog",children:Object(P.jsx)("div",{role:"document",className:"modal-dialog",children:Object(P.jsxs)("div",{className:"modal-content",children:[Object(P.jsx)("div",{className:"modal-header",children:Object(P.jsx)("h5",{className:"modal-title",children:"Confirmation"})}),Object(P.jsx)("div",{className:"modal-body",children:Object(P.jsx)("p",{children:"Are you sure, you want to delete this publication ?"})}),Object(P.jsxs)("div",{className:"modal-footer",children:[Object(P.jsx)("button",{type:"button","data-dismiss":"modal",className:"btn btn-secondary",children:"No"}),Object(P.jsx)("button",{type:"button",onClick:t,"data-dismiss":"modal",className:"btn btn-primary",children:"Yes"})]})]})})})},F=Object(o.b)((function(e){return{loading:e.loading,publications:e.publications}}),(function(e){return{dispatchFetchAllPublicationsAction:function(){return e(k())}}}))((function(e){var t=e.loading,a=e.publications,i=e.dispatchFetchAllPublicationsAction;return Object(n.useEffect)((function(){return i()}),[i]),Object(P.jsxs)(c.a.Fragment,{children:[Object(P.jsx)("div",{className:"row my-5",children:Object(P.jsx)("div",{className:"offset-9 col-2",children:Object(P.jsxs)(r.b,{to:"/publication-createorupdate",className:"btn btn-primary",children:["Create Publication | ",Object(P.jsx)("i",{className:"fas fa-plus"})]})})}),Object(P.jsx)("div",{className:"row mt-5",children:Object(P.jsx)("div",{className:"col-12",children:a.length>0?Object(P.jsx)(R,{publications:a}):!t&&Object(P.jsxs)("div",{className:"text-center mt-5",children:[Object(P.jsx)("h2",{children:Object(P.jsx)("i",{className:"far fa-folder-open fa-3x"})}),Object(P.jsx)("h1",{className:"text-center",children:"There are no publications available"})]})})})]})})),_=a(20),U=a(28),B=a.n(U),V=a(41),q=a.n(V);a(60)(B.a);var M=function(e){var t=e.publications,a=function(e){var a=t.filter((function(t){return t.publicationType===e})),n=Object(_.range)(2011,2022),c=Object(_.times)(n.length,Object(_.constant)(0));return a.forEach((function(e){var t=new Date(e.creationDate).getFullYear(),a=n.indexOf(t);c[a]+=1})),c};return Object(P.jsx)(q.a,{highcharts:B.a,options:{credits:{enabled:!1},exporting:{enabled:!0},title:{text:"Publications"},subtitle:{text:"Source: Natural Resources Canada (NRCan)"},yAxis:{title:{text:"Total"}},xAxis:{accessibility:{rangeDescription:"Range: 2011 to 2021"}},legend:{layout:"vertical",align:"right",verticalAlign:"middle"},plotOptions:{series:{label:{connectorAllowed:!1},pointStart:2011}},series:["Books & Book Chapters","Consultant Report","Cost Recovery (CR) report","Journal","Other Publication","Poster","Presentation","Conference Proceedings","Internal technical report"].map((function(e){return{name:e,data:a(e)}})),responsive:{rules:[{condition:{maxWidth:500},chartOptions:{legend:{layout:"horizontal",align:"center",verticalAlign:"bottom"}}}]}}})},J=Object(o.b)((function(e){return{loading:e.loading,publications:e.publications}}),(function(e){return{dispatchFetchAllPublicationsAction:function(){return e(k())}}}))((function(e){var t=e.loading,a=e.publications,c=e.dispatchFetchAllPublicationsAction;return Object(n.useEffect)((function(){return c()}),[c]),Object(P.jsx)("div",{className:"row mt-5",children:Object(P.jsx)("div",{className:"col-12",children:a.length>0?Object(P.jsx)(M,{publications:a}):!t&&Object(P.jsxs)("div",{className:"text-center mt-5",children:[Object(P.jsx)("h2",{children:Object(P.jsx)("i",{className:"far fa-folder-open fa-3x"})}),Object(P.jsx)("h1",{className:"text-center",children:"There are no publication trends available"})]})})})})),G=Object(o.b)(null,(function(e){return{dispatchCreatePublicationAction:function(t,a,n){return e(function(e,t,a){return{type:p,payload:{method:"POST",url:"/api/publications",data:e,success:function(e){return A(e)},postProcessSuccess:t,postProcessError:a}}}(t,a,n))},dispatchUpdatePublicationAction:function(t,a,n,c){return e(function(e,t,a,n){return{type:p,payload:{method:"PUT",url:"/api/publications/".concat(e),data:t,success:function(e,t){return I(e,t)},postProcessSuccess:a,postProcessError:n}}}(t,a,n,c))},dispatchGetPublicationByIdAction:function(t,a){return e(function(e,t){return{type:p,payload:{method:"GET",url:"/api/publications/".concat(e),postProcessSuccess:t}}}(t,a))}}}))((function(e){var t=e.match,a=e.history,i=e.dispatchCreatePublicationAction,s=e.dispatchGetPublicationByIdAction,r=e.dispatchUpdatePublicationAction,o=Object(n.useState)(""),l=Object(j.a)(o,2),u=l[0],d=l[1],p=Object(n.useState)(""),m=Object(j.a)(p,2),h=m[0],O=m[1],f=Object(n.useState)(""),x=Object(j.a)(f,2),v=x[0],N=x[1],g=Object(n.useState)(""),y=Object(j.a)(g,2),w=y[0],C=y[1],S=Object(n.useState)({publicationType:!1,title:!1,authors:!1,creationDate:!1}),E=Object(j.a)(S,2),k=E[0],A=E[1];Object(n.useEffect)((function(){var e=t.params.publicationId;e&&s(e,(function(e){var t=e.publicationType,a=e.title,n=e.authors,c=e.creationDate;d(t),O(a),N(n),C(c)}))}),[s,t.params]);var T=function(){return!u.trim()||!h.trim()||!v.trim()||!w.trim()||isNaN(new Date(w))},I=function(){var e={publicationType:!1,title:!1,authors:!1,creationDate:!1};u.trim()||(e.publicationType=!0),h.trim()||(e.title=!0),v.trim()||(e.authors=!0),w.trim()&&!isNaN(new Date(w))||(e.creationDate=!0),A(e)};return Object(P.jsxs)(c.a.Fragment,{children:[Object(P.jsx)("div",{className:"row",children:Object(P.jsx)("div",{className:"col",children:Object(P.jsx)("h2",{children:"Edit Publication"})})}),Object(P.jsx)("div",{className:"row align-items-center mt-4",children:Object(P.jsx)("div",{className:"col-9",children:Object(P.jsxs)("form",{noValidate:!0,onSubmit:function(e){if(e.preventDefault(),T())I();else{var n=t.params.publicationId,c={publicationType:u,title:h,authors:v,creationDate:w};n?r(n,c,(function(){b.c.success("Publication Updated Successfully!"),a.replace("/publication-listing")}),(function(e){return b.c.error("Error: ".concat(e))})):i(c,(function(){b.c.success("Publication Created Successfully!"),a.replace("/publication-listing")}),(function(e){return b.c.error("Error: ".concat(e))}))}},children:[Object(P.jsxs)("div",{className:"form-group",children:[Object(P.jsx)("label",{htmlFor:"publicationType",children:"Publication Type"}),Object(P.jsxs)("select",{noValidate:!0,id:"publicationType",name:"publicationType",className:"form-control ".concat(k.publicationType?"is-invalid":""),value:u,onChange:function(e){return d(e.target.value)},children:[Object(P.jsx)("option",{value:"",children:"-- Select --"}),Object(P.jsx)("option",{value:"Books & Book Chapters",children:"Books & Book Chapters"}),Object(P.jsx)("option",{value:"Consultant Report",children:"Consultant Report"}),Object(P.jsx)("option",{value:"Cost Recovery (CR) report",children:"Cost Recovery (CR) report"}),Object(P.jsx)("option",{value:"Journal",children:"Journal"}),Object(P.jsx)("option",{value:"Other Publication",children:"Other Publication"}),Object(P.jsx)("option",{value:"Poster",children:"Poster"}),Object(P.jsx)("option",{value:"Presentation",children:"Presentation"}),Object(P.jsx)("option",{value:"Conference Proceedings",children:"Conference Proceedings"}),Object(P.jsx)("option",{value:"Internal technical report",children:"Internal technical report"})]}),Object(P.jsx)("p",{className:"invalid-feedback",children:"Required"})]}),Object(P.jsxs)("div",{className:"form-group",children:[Object(P.jsx)("label",{htmlFor:"title",children:"Title"}),Object(P.jsx)("input",{noValidate:!0,id:"title",type:"text",placeholder:"Title",name:"title",value:h,onChange:function(e){return O(e.target.value)},className:"form-control ".concat(k.title?"is-invalid":"")}),Object(P.jsx)("p",{className:"invalid-feedback",children:"Required"})]}),Object(P.jsxs)("div",{className:"form-group",children:[Object(P.jsx)("label",{htmlFor:"authors",children:"Authors"}),Object(P.jsx)("input",{noValidate:!0,id:"authors",type:"text",placeholder:"Authors",name:"authors",value:v,onChange:function(e){return N(e.target.value)},className:"form-control ".concat(k.authors?"is-invalid":"")}),Object(P.jsx)("p",{className:"invalid-feedback",children:"Required"})]}),Object(P.jsxs)("div",{className:"form-group",children:[Object(P.jsx)("label",{htmlFor:"creationDate",children:"Creation Date"}),Object(P.jsx)("input",{noValidate:!0,id:"creationDate",type:"text",placeholder:"CreationDate",name:"creationDate",value:w,onChange:function(e){return C(e.target.value)},className:"form-control ".concat(k.creationDate?"is-invalid":"")}),Object(P.jsx)("p",{className:"invalid-feedback",children:"Required (YYYY-MM-DD)"})]}),Object(P.jsxs)("div",{className:"mt-5",children:[Object(P.jsxs)("button",{type:"submit",className:"btn btn-primary mr-2 btn-lg",children:["Save | ",Object(P.jsx)("i",{className:"fas fa-save"})]}),Object(P.jsxs)("button",{type:"button",onClick:function(){return a.replace("/publication-listing")},className:"btn btn-secondary btn-lg",children:["Cancel | ",Object(P.jsx)("i",{className:"fas fa-times"})]})]})]})})})]})})),Y=function(e){var t=e.userName,a=e.isLoggedIn,n=e.onLogout;return Object(P.jsxs)("nav",{className:"navbar navbar-expand-sm bg-dark navbar-dark",children:[Object(P.jsxs)(r.b,{className:"navbar-brand",to:"/",children:[Object(P.jsx)("i",{className:"fas fa-book fa-lg"}),Object(P.jsx)("span",{className:"pl-2",children:"Publications"})]}),a&&Object(P.jsxs)("ul",{className:"navbar-nav",children:[Object(P.jsx)("li",{className:"nav-item",children:Object(P.jsx)(r.b,{className:"nav-link",to:"/publication-listing",children:Object(P.jsx)("span",{className:"pl-2",children:"Listing"})})}),Object(P.jsx)("li",{className:"nav-item",children:Object(P.jsx)(r.b,{className:"nav-link",to:"/publication-trend",children:Object(P.jsx)("span",{className:"pl-2",children:"Trend"})})})]}),a&&Object(P.jsx)("h4",{className:"ml-auto mr-4 my-auto",children:Object(P.jsxs)("span",{className:"badge badge-pill badge-secondary text-capitalize small",children:["Welcome ",t," !"]})}),a&&Object(P.jsxs)("button",{type:"button",onClick:n,className:"btn btn-sm btn-outline-warning",children:["Logout | ",Object(P.jsx)("i",{className:"fas fa-sign-out-alt"})]})]})},$=(a(61),Object(o.b)((function(e){return{isLoading:e.loading}}))((function(e){var t=e.isLoading;return Object(P.jsx)(c.a.Fragment,{children:t?Object(P.jsx)("div",{id:"spinner-fade",children:Object(P.jsx)("div",{className:"default-spinner spinner-border",role:"status"})}):null})}))),z=Object(o.b)((function(e){return{user:e.user}}),(function(e){return{dispatchLogoutAction:function(){return e(g())}}}))((function(e){var t=e.user,a=e.dispatchLogoutAction;return Object(P.jsxs)(c.a.Fragment,{children:[Object(P.jsx)(b.b,{position:"top-right",autoClose:2e3,hideProgressBar:!0,transition:b.a}),Object(P.jsx)($,{}),Object(P.jsx)(Y,{isLoggedIn:t.isLoggedIn,userName:t.fullName,onLogout:a}),Object(P.jsx)("div",{className:"container my-5",children:t.isLoggedIn?Object(P.jsxs)(d.d,{children:[Object(P.jsx)(d.b,{exact:!0,path:"/publication-trend",component:J}),Object(P.jsx)(d.b,{exact:!0,path:"/publication-listing",component:F}),Object(P.jsx)(d.b,{exact:!0,path:"/publication-createorupdate",component:G}),Object(P.jsx)(d.b,{exact:!0,path:"/publication-createorupdate/:publicationId",component:G}),Object(P.jsx)(d.a,{to:"/publication-listing"})]}):Object(P.jsxs)(d.d,{children:[Object(P.jsx)(d.b,{exact:!0,path:"/auth",component:S}),Object(P.jsx)(d.a,{to:"/auth"})]})})]})})),W=a(13),X=a(17),H={userId:null,fullName:null,token:null,isLoggedIn:!1},Q=localStorage.getItem("USER_INFO"),K=Q?JSON.parse(Q):H;var Z=Object(W.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(X.a)({},t.payload);case O:return Object(X.a)({},H);default:return e}},loading:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return!e;default:return e}},publications:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return t.payload;case x:return e.concat(t.payload);case v:return e.filter((function(e){return e._id!==t.payload}));case N:return e.map((function(e){return e._id===t.payload.publicationId?Object(X.a)(Object(X.a)({},e),t.payload.data):e}));case O:return[];default:return e}}}),ee=a(29),te=a.n(ee),ae=function(e){var t=e.dispatch,a=e.getState;return function(e){return function(n){if(n.type!==p)return e(n);t({type:h});var c=a().user.token;c&&(te.a.defaults.headers.common.Authorization="Bearer ".concat(c));var i=n.payload,s=i.url,r=i.method,o=i.success,l=i.data,u=i.postProcessSuccess,d=i.postProcessError;te()({method:r,url:"https://publications-api.herokuapp.com"+s,data:l||null}).then((function(e){t({type:h}),o&&t(o(e.data)),u&&u(e.data)})).catch((function(e){var a;(t({type:h}),e.response)?(e.response&&403===e.response.status&&t(g()),(null===(a=e.response.data.error)||void 0===a?void 0:a.message)&&d&&d(e.response.data.error.message)):console.warn(e)}))}}};var ne=function(e){var t=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||W.d;return Object(W.e)(Z,e,t(Object(W.a)(ae)))}();s.a.render(Object(P.jsx)(o.a,{store:ne,children:Object(P.jsx)(r.a,{children:Object(P.jsx)(c.a.StrictMode,{children:Object(P.jsx)(z,{})})})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.ff858dbf.chunk.js.map