(this.webpackJsonpproject1=this.webpackJsonpproject1||[]).push([[0],{32:function(e,t,n){},37:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),r=n.n(a),s=n(16),i=n.n(s),o=(n(32),n(8)),j=n(5),u=n(3),l=(n(37),"SIGNUP"),b="LOGIN",d="LOGOUT",p="POKEMON",O="ABILITIES",h=["/client","/","/signup","/login","/pokemon","/abilities"],m="http://54.193.1.233:8080/server",x=n(7),f=n.n(x),v=n(12),g=function(e,t){return{type:e,payload:t}};var y=function(){var e=Object(o.c)((function(e){return e.user}));return Object(c.jsxs)("nav",{children:[Object(c.jsx)(j.c,{to:"/",exact:!0,activeClassName:"nav-selected",children:"Home"}),e&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(j.c,{to:"/pokemon",exact:!0,activeClassName:"nav-selected",children:"Pokemon"}),Object(c.jsx)(j.c,{to:"/abilities",exact:!0,activeClassName:"nav-selected",children:"Abilities"})]}),"admin"===(null===e||void 0===e?void 0:e.username)&&Object(c.jsx)(j.c,{to:"/admin",exact:!0,activeClassName:"nav-selected",children:"Admin"})]})},N=function(){return Object(c.jsx)("footer",{children:Object(c.jsxs)("span",{children:[Object(c.jsx)("div",{children:"Client: Nick Barak"}),Object(c.jsx)("div",{children:"Server: Eric Huang"}),Object(c.jsx)("br",{}),Object(c.jsx)("div",{children:"Revature | December 2020"})]})})},k=function(e){var t=e.children,n=Object(o.c)((function(e){return e.user})),a=Object(o.b)(),r=Object(u.f)(),s=function(){var e=Object(v.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(m+"/logout");case 2:e.sent.ok&&(a(g(d,null)),r.push("/"));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{children:[n?Object(c.jsx)("button",{className:"header-logout",onClick:s,children:"Log out"}):Object(c.jsxs)("span",{className:"header-login",children:[Object(c.jsx)("button",{children:Object(c.jsx)(j.b,{to:"/signup",children:"Sign up"})}),Object(c.jsx)("button",{children:Object(c.jsx)(j.b,{to:"/login",children:"Log in"})})]}),Object(c.jsx)(y,{}),t,Object(c.jsx)(N,{})]})},S=function(e){var t=Object(o.c)((function(e){return e.user}));return Object(c.jsx)(k,{children:Object(c.jsxs)("div",{className:"PAGE-HOME body",children:[Object(c.jsx)("h1",{children:"Welcome to RRDex!"}),t?Object(c.jsxs)("div",{children:["What will you learn about pokemon today, ",Object(c.jsx)("strong",{children:t.username}),"?"]}):Object(c.jsx)("div",{children:"Log in or sign up to view the site!"})]})})},C=n(4),w=function(e){var t=e.pokemon;return Object(c.jsxs)("li",{children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("strong",{children:"Name: "}),Object(c.jsx)("span",{children:t.name})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("strong",{children:"Type: "}),Object(c.jsx)("span",{children:t.type1===t.type2?t.type1:"".concat(t.type1,", ").concat(t.type2)})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("strong",{children:"Ability: "}),Object(c.jsx)("span",{children:Object(c.jsx)(j.b,{to:"/abilities?name=".concat(t.abilityObj.name),children:t.abilityObj.name})})]})]})},P=function(e){var t=e.ability;return Object(c.jsxs)("li",{children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("strong",{children:"Name: "}),Object(c.jsx)("span",{children:t.name})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("strong",{children:"Description: "}),Object(c.jsx)("span",{children:t.description})]})]})};function E(e,t){switch(e){case p:if(!("name"in t)||!("type1"in t)||!("type2"in t)||!("abilityObj"in t))break;if(!("name"in t.abilityObj)||!("description"in t.abilityObj))break;return!0;case O:if(!("name"in t)||!("description"in t))break;return!0;default:return!1}return!1}var T=function(e){var t=e.type,n=Object(a.useState)(null),r=Object(C.a)(n,2),s=r[0],i=r[1],o=Object(a.useState)(""),j=Object(C.a)(o,2),u=j[0],l=j[1],b=Object(a.useState)("name"),d=Object(C.a)(b,2),h=d[0],x=d[1];Object(a.useEffect)((function(){Object(v.a)(f.a.mark((function e(){var n,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(m+"/".concat(t===p?"pokemon":"ability"));case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,i(c);case 7:case"end":return e.stop()}}),e)})))()}),[t]);var g=function(){var e=Object(v.a)(f.a.mark((function e(n){var c,a,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),u){e.next=7;break}return e.next=4,fetch(m+"/".concat(t===p?"pokemon":"ability"));case 4:a=e.sent,e.next=10;break;case 7:return e.next=9,fetch(m+"/".concat(t===p?"pokemon":"ability","?").concat(h,"=").concat((null===(c=u[0])||void 0===c?void 0:c.toUpperCase())+u.slice(1)));case 9:a=e.sent;case 10:return e.next=12,a.json();case 12:r=e.sent,i(r),u||n.target.reset();case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsx)(k,{children:Object(c.jsxs)("div",{className:"PAGE-LISTSEARCH body",children:[t===p?Object(c.jsx)("h3",{className:"listSearchPrompt",children:"Search for pokemon by name or type!"}):Object(c.jsx)("h3",{className:"listSearchPrompt",children:"Search for pokemon abilities by name!"}),Object(c.jsxs)("form",{onSubmit:g,className:"listSearchForm",children:[t===p&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("label",{children:[Object(c.jsx)("input",{type:"radio",name:"searchRadio",value:"name",defaultChecked:!0,onChange:function(e){return x(e.target.value)}})," Name "]}),Object(c.jsxs)("label",{children:[Object(c.jsx)("input",{type:"radio",name:"searchRadio",value:"type",onChange:function(e){return x(e.target.value)}})," Type "]})]}),Object(c.jsx)("input",{className:"input",type:"text",name:"searchValue",onChange:function(e){return l(e.target.value)}}),Object(c.jsx)("button",{className:"btn",children:"Submit"}),Object(c.jsx)("button",{className:"btn",onClick:function(){return l("")},children:"Show All"})]}),s?Object(c.jsx)("ol",{className:"listSearchList",children:s.map((function(e){switch(t){case p:if(!E(t,e))break;return Object(c.jsx)(w,{pokemon:e},e.name);case O:if(!E(t,e))break;return Object(c.jsx)(P,{ability:e},e.name)}return Object(c.jsx)("li",{children:"Invalid list item"},Math.random())}))}):Object(c.jsx)("div",{style:{marginTop:"1.25rem"},children:"No results found"})]})})},A=n(18),L=n(24),I=function(e){var t=e.type,n=Object(a.useState)(""),r=Object(C.a)(n,2),s=r[0],i=r[1],j=Object(a.useState)({username:"",password:"",confirmPassword:t===l?"":null}),b=Object(C.a)(j,2),d=b[0],p=b[1],O=Object(o.b)(),h=Object(u.f)(),x=function(e){return p(Object(L.a)(Object(L.a)({},d),{},Object(A.a)({},e.target.name,e.target.value)))},y=function(){var e=Object(v.a)(f.a.mark((function e(n){var c,a,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),t!==l||d.password===d.confirmPassword){e.next=3;break}return e.abrupt("return",i("Passwords must match"));case 3:return e.next=5,fetch(m+"/".concat(t===l?"signup":"login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:d.username,password:d.password}),credentials:"include"});case 5:c=e.sent,a="",e.t0=c.status,e.next=200===e.t0?10:422===e.t0?14:401===e.t0?16:18;break;case 10:return r={username:d.username},O(g(t,r)),h.push("/"),e.abrupt("break",19);case 14:return a="Username not available",e.abrupt("break",19);case 16:return a="Invalid username/password",e.abrupt("break",19);case 18:a=t===l?"Error registering user":"Error signing in";case 19:i(a);case 20:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsx)(k,{children:Object(c.jsxs)("div",{className:"PAGE-LOGIN",children:[Object(c.jsxs)("h3",{children:["Please enter a username and password to ",t===l?"sign up":"log in"]}),Object(c.jsx)("div",{children:s}),Object(c.jsxs)("form",{onSubmit:y,children:[Object(c.jsx)("input",{className:"input",type:"text",name:"username",placeholder:"username",onChange:x}),Object(c.jsx)("input",{className:"input",type:"password",name:"password",placeholder:"password",onChange:x}),t===l&&Object(c.jsx)("input",{className:"input",type:"password",name:"confirmPassword",placeholder:"confirm password",onChange:x}),Object(c.jsx)("button",{className:"btn",children:"Submit"})]})]})})},D=function(e){var t=Object(a.useState)(""),n=Object(C.a)(t,2),r=n[0],s=n[1],i=Object(a.useState)(p),o=Object(C.a)(i,2),j=o[0],u=o[1],l=Object(a.useState)("POST"),b=Object(C.a)(l,2),d=b[0],h=b[1],x=Object(a.useState)(""),g=Object(C.a)(x,2),y=g[0],N=g[1],S=Object(a.useState)(""),w=Object(C.a)(S,2),P=w[0],E=w[1],T=Object(a.useState)(""),A=Object(C.a)(T,2),L=A[0],I=A[1],D=Object(a.useState)(""),F=Object(C.a)(D,2),G=F[0],R=F[1],B=Object(a.useState)(""),H=Object(C.a)(B,2),J=H[0],M=H[1],U=function(){var e=Object(v.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch(m+"".concat(j===p?"/pokemon":"/ability"),{method:d,headers:{"Content-Type":"application/json"},body:j===p?JSON.stringify({name:r,type1:y,type2:P,abilityName:L}):JSON.stringify({name:r,description:G})});case 3:200===e.sent.status&&M("Edit performed successfully");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsx)(k,{children:Object(c.jsxs)("div",{className:"PAGE-ADMIN",children:[Object(c.jsx)("div",{children:J}),Object(c.jsxs)("form",{children:[Object(c.jsxs)("div",{className:"types",children:[Object(c.jsxs)("label",{className:"radio",children:[Object(c.jsx)("input",{type:"radio",name:"type",defaultChecked:!0,value:p,onChange:function(e){return u(e.target.value)}})," Pokemon"]}),Object(c.jsxs)("label",{className:"radio",children:[Object(c.jsx)("input",{type:"radio",name:"type",value:O,onChange:function(e){return u(e.target.value)}})," Ability"]})]}),Object(c.jsxs)("div",{children:[Object(c.jsxs)("label",{className:"radio",children:[Object(c.jsx)("input",{type:"radio",name:"method",defaultChecked:!0,value:"POST",onChange:function(e){return h(e.target.value)}})," Add"]}),Object(c.jsxs)("label",{className:"radio",children:[Object(c.jsx)("input",{type:"radio",name:"method",value:"DELETE",onChange:function(e){return h(e.target.value)}})," Delete"]})]})]}),"DELETE"===d?Object(c.jsxs)("form",{children:[Object(c.jsx)("input",{type:"text",placeholder:"name",className:"input",onChange:function(e){return s(e.target.value)}}),Object(c.jsx)("button",{className:"btn",children:"Submit"})]}):j===p?Object(c.jsxs)("form",{onSubmit:U,children:[Object(c.jsx)("input",{type:"text",className:"input",placeholder:"name",onChange:function(e){return s(e.target.value)}}),Object(c.jsx)("input",{type:"text",className:"input",placeholder:"type 1",onChange:function(e){return N(e.target.value)}}),Object(c.jsx)("input",{type:"text",className:"input",placeholder:"type 2",onChange:function(e){return E(e.target.value)}}),Object(c.jsx)("input",{type:"text",className:"input",placeholder:"ability",onChange:function(e){return I(e.target.value)}}),Object(c.jsx)("button",{className:"btn",children:"Submit"})]}):Object(c.jsxs)("form",{onSubmit:U,children:[Object(c.jsx)("input",{type:"text",className:"input",placeholder:"name",onChange:function(e){return s(e.target.value)}}),Object(c.jsx)("input",{type:"textarea",className:"input",placeholder:"description",onChange:function(e){return R(e.target.value)}}),Object(c.jsx)("button",{className:"btn",children:"Submit"})]})]})})},F=function(e){var t=e.to,n=void 0===t?"/":t;return Object(u.f)().push(n),Object(c.jsx)(c.Fragment,{})};var G=function(){var e=Object(o.c)((function(e){return e.user}));return Object(c.jsx)(j.a,{children:Object(c.jsxs)(u.c,{children:[Object(c.jsx)(u.a,{path:"/",exact:!0,component:S}),e?[Object(c.jsx)(u.a,{path:"/pokemon",exact:!0,component:function(){return Object(c.jsx)(T,{type:p})}},"/pokemon"),Object(c.jsx)(u.a,{path:"/abilities",exact:!0,component:function(){return Object(c.jsx)(T,{type:O})}},"/abilities")]:[Object(c.jsx)(u.a,{path:"/signup",exact:!0,component:function(){return Object(c.jsx)(I,{type:l})}},"/signup"),Object(c.jsx)(u.a,{path:"/login",exact:!0,component:function(){return Object(c.jsx)(I,{type:b})}},"/login")],e&&"admin"===e.username&&Object(c.jsx)(u.a,{path:"/admin",component:D},"/admin"),h.map((function(e){return Object(c.jsx)(u.a,{path:e,exact:!0,component:F},e)})),Object(c.jsx)(u.a,{path:"/",render:function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{children:"404: Page Not Found"})," ",Object(c.jsx)("button",{children:Object(c.jsx)(j.b,{to:"/",children:"Back to Home"})})]})}})]})})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))},B=n(14),H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case l:case b:case d:return c;default:return e}},J=Object(B.b)({user:H}),M=Object(B.c)(J);i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(o.a,{store:M,children:Object(c.jsx)(G,{})})}),document.getElementById("root")),R()}},[[40,1,2]]]);
//# sourceMappingURL=main.eef09063.chunk.js.map