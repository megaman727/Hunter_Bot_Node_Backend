(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{200:function(e,t,n){},201:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(24),i=n.n(c),s=n(68),o=n(18),l=n(11),d=n(2);function j(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-trueGray-900 opacity-75 flex flex-col items-center justify-center",children:[Object(d.jsx)("div",{className:"loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"}),Object(d.jsx)("h2",{className:"text-center text-white text-xl font-semibold",children:"Loading..."})]})})}var b=n(319),h=n(318),x=n(321),u=n(323),O=n(313),m=n(322),p=n(314);function g(e){var t=e.logo,n=e.userName,a=e.access,r=Object(o.f)();return Object(d.jsx)(h.a,{sx:{flexGrow:1},children:Object(d.jsx)(b.a,{position:"static",children:Object(d.jsxs)(x.a,{children:[Object(d.jsx)(m.a,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2}}),Object(d.jsx)(u.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:"Discord Bot"}),"unauthorized"==a?Object(d.jsx)(O.a,{color:"inherit",children:"Login"}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("span",{style:{fontSize:18},children:n}),Object(d.jsx)(m.a,{size:"large",edge:"end","aria-label":"account of current user","aria-haspopup":"true",color:"inherit",onClick:function(){return r.push("/dashboard")},children:Object(d.jsx)(p.a,{alt:"Logo",src:t})})]})]})})})}var f=n(37),y=n.n(f);function v(){return y.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",y.a.get("/api/auth",{withCredentials:!0,credentials:"include"})}var w=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(!0),i=Object(l.a)(c,2),s=i[0],o=i[1],b=Object(a.useState)(""),h=Object(l.a)(b,2),x=h[0],u=h[1],O=Object(a.useState)(""),m=Object(l.a)(O,2),p=m[0],f=m[1];return Object(a.useEffect)((function(){v().then((function(e){r(e.data.msg),"authorized"===n&&(u(e.data.user.discordTag),f("https://cdn.discordapp.com/avatars/".concat(e.data.user.discordId,"/").concat(e.data.user.avatar,".png?size=128"))),setTimeout((function(){o(!1)}),1e3)}))}),[n]),Object(d.jsx)(d.Fragment,{children:!0===s?Object(d.jsx)(j,{}):Object(d.jsx)("div",{className:"leading-normal tracking-normal text-white h-full",style:{width:"100%",minHeight:"100vh"},children:Object(d.jsxs)("div",{children:[Object(d.jsx)(g,{logo:p,userName:x,access:n}),Object(d.jsx)("div",{className:"pt-36",children:Object(d.jsx)("div",{className:"container mx-auto flex flex-wrap flex-col md:flex-row",children:Object(d.jsxs)("div",{className:"flex flex-col w-full  items-center text-center md:text-left",children:[Object(d.jsx)("h1",{className:"w-full my-5 text-5xl font-bold leading-tight text-center text-black",children:"Discord Bot"}),Object(d.jsxs)("p",{className:"leading-normal text-2xl mb-8",children:["Hunter"," is the best customizable bot for discord with a dashboard."]}),Object(d.jsx)("div",{className:"flex",children:Object(d.jsx)("button",{className:"flex items-center px-7 py-3 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-500 rounded-md hover:bg-indigo-800 focus:outline-none focus:bg-indigo-800",children:Object(d.jsx)("span",{className:"mx-1",children:"Invite Bot"})})})]})})})]})})})},S=n(40),k=(n(142),n(98),n(196),n(329)),C=n(315),N=n(326),B=n(311),z=n(330),A=n(328),P=n(325),F=n(331),I=n(332),D=n(305),R=n(324),W=n(306),T=n(139),L=n.n(T),q=n(5),H=n(38),G=n(316),E=n(293),M=n(134),J=n.n(M),Y=n(135),$=n.n(Y),Q=n(136),U=n.n(Q),V=n(327),K=n(137),X=n.n(K),Z=n(138),_=n.n(Z),ee=n(320),te=240,ne=Object(q.a)("main",{shouldForwardProp:function(e){return"open"!==e}})((function(e){var t=e.theme,n=e.open;return Object(S.a)({flexGrow:1,padding:t.spacing(3),transition:t.transitions.create("margin",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),marginLeft:"-".concat(te,"px")},n&&{transition:t.transitions.create("margin",{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.enteringScreen}),marginLeft:0})})),ae=Object(q.a)(b.a,{shouldForwardProp:function(e){return"open"!==e}})((function(e){var t=e.theme,n=e.open;return Object(S.a)({transition:t.transitions.create(["margin","width"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen})},n&&{width:"calc(100% - ".concat(te,"px)"),marginLeft:"".concat(te,"px"),transition:t.transitions.create(["margin","width"],{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.enteringScreen})})})),re=Object(q.a)("div")((function(e){var t=e.theme;return Object(S.a)(Object(S.a)({display:"flex",alignItems:"center",padding:t.spacing(0,1)},t.mixins.toolbar),{},{justifyContent:"flex-end"})}));Object(q.a)(ee.a)((function(e){var t=e.theme;return Object(S.a)(Object(S.a)({},t.typography.body2),{},{padding:t.spacing(1),textAlign:"center",color:t.palette.text.secondary})}));function ce(e){var t=Object(H.a)(),n=a.useState(!1),r=Object(l.a)(n,2),c=r[0],i=r[1];return Object(d.jsxs)(h.a,{sx:{display:"flex"},children:[Object(d.jsx)(E.a,{}),Object(d.jsx)(ae,{position:"fixed",open:c,children:Object(d.jsx)(C.a,{container:!0,spacing:2,children:Object(d.jsx)(C.a,{item:!0,xs:12,children:Object(d.jsxs)(x.a,{children:[Object(d.jsx)(m.a,{color:"inherit","aria-label":"open drawer",onClick:function(){i(!0)},edge:"start",sx:Object(S.a)({mr:2},c&&{display:"none"}),children:Object(d.jsx)(J.a,{})}),Object(d.jsx)(u.a,{align:"right",variant:"h6",noWrap:!0,component:"div",children:"Server Management"})]})})})}),Object(d.jsxs)(G.a,{sx:{width:te,flexShrink:0,"& .MuiDrawer-paper":{width:te,boxSizing:"border-box"}},variant:"persistent",anchor:"left",open:c,children:[Object(d.jsx)(re,{children:Object(d.jsx)(m.a,{onClick:function(){i(!1)},children:"ltr"===t.direction?Object(d.jsx)($.a,{}):Object(d.jsx)(U.a,{})})}),Object(d.jsx)(P.a,{}),Object(d.jsxs)(N.a,{children:[Object(d.jsxs)(B.a,{button:!0,children:[Object(d.jsx)(V.a,{children:Object(d.jsx)(X.a,{})}),Object(d.jsx)(A.a,{primary:"Roles"})]}),Object(d.jsxs)(B.a,{button:!0,children:[Object(d.jsx)(V.a,{children:Object(d.jsx)(_.a,{})}),Object(d.jsx)(A.a,{primary:"Messages"})]})]})]}),Object(d.jsxs)(ne,{open:c,children:[Object(d.jsx)(re,{}),e.children]})]})}var ie=Object(W.a)({formControl:{marginBottom:"20px"},card:{minWidth:"200px",maxWidth:"350px",display:"flex",justifyContent:"center"},noRole:{fontSize:"30px"}})((function(e){var t=Object(a.useState)({name:"",price:"",description:""}),n=Object(l.a)(t,2),c=(n[0],n[1],Object(a.useState)(!1)),i=Object(l.a)(c,2),s=(i[0],i[1],Object(a.useState)([])),j=Object(l.a)(s,2),b=j[0],h=j[1],x=e.classes,g=Object(o.h)().id;return Object(a.useEffect)((function(){var e;(e=g,y.a.get("/api/discord/getguildinfo?id=".concat(e))).then((function(e){h(e.data.roles)}))}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(ce,{}),Object(d.jsx)(k.a,{maxWidth:"lg",children:1==b.length?Object(d.jsx)(C.a,{container:!0,justifyContent:"center",alignItems:"center",children:Object(d.jsx)("span",{className:x.noRole,children:"No Role"})}):Object(d.jsxs)(C.a,{container:!0,spacing:5,children:[Object(d.jsx)(C.a,{item:!0,xs:12,sm:12,md:6,lg:6,children:Object(d.jsx)(C.a,{container:!0,children:Object(d.jsx)(C.a,{item:!0,children:Object(d.jsxs)(N.a,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},children:[Object(d.jsxs)(B.a,{alignItems:"flex-start",secondaryAction:Object(d.jsx)(m.a,{edge:"end","aria-label":"delete",children:Object(d.jsx)(L.a,{})}),children:[Object(d.jsx)(z.a,{children:Object(d.jsx)(p.a,{alt:"Remy Sharp",src:"/assets/image/avatar.jpg"})}),Object(d.jsx)(A.a,{primary:"Brunch this weekend?",secondary:Object(d.jsxs)(r.a.Fragment,{children:[Object(d.jsx)(u.a,{sx:{display:"inline"},component:"span",variant:"body2",color:"text.primary",children:"Ali Connors"})," \u2014 I'll be in your neighborhood doing errands this\u2026"]})})]}),Object(d.jsx)(P.a,{variant:"inset",component:"li"}),Object(d.jsxs)(B.a,{alignItems:"flex-start",children:[Object(d.jsx)(z.a,{children:Object(d.jsx)(p.a,{alt:"Travis Howard",src:"/assets/image/avatar.jpg"})}),Object(d.jsx)(A.a,{primary:"Summer BBQ",secondary:Object(d.jsxs)(r.a.Fragment,{children:[Object(d.jsx)(u.a,{sx:{display:"inline"},component:"span",variant:"body2",color:"text.primary",children:"to Scott, Alex, Jennifer"})," \u2014 Wish I could come, but I'm out of town this\u2026"]})})]}),Object(d.jsx)(P.a,{variant:"inset",component:"li"}),Object(d.jsxs)(B.a,{alignItems:"flex-start",children:[Object(d.jsx)(z.a,{children:Object(d.jsx)(p.a,{alt:"Cindy Baker",src:"/assets/image/avatar.jpg"})}),Object(d.jsx)(A.a,{primary:"Oui Oui",secondary:Object(d.jsxs)(r.a.Fragment,{children:[Object(d.jsx)(u.a,{sx:{display:"inline"},component:"span",variant:"body2",color:"text.primary",children:"Sandra Adams"})," \u2014 Do you have Paris recommendations? Have you ever\u2026"]})})]})]})})})}),Object(d.jsx)(C.a,{item:!0,xs:12,sm:12,md:6,lg:6,children:Object(d.jsx)(F.a,{className:x.card,style:{border:"1px solid green"},children:Object(d.jsxs)(I.a,{children:[Object(d.jsx)(u.a,{gutterBottom:!0,variant:"h5",component:"div",children:"Your Public Checkout Link"}),Object(d.jsx)(D.a,{fullWidth:!0,id:"outlined-size-small",size:"sm",style:{marginBottom:"20px"}}),Object(d.jsx)(O.a,{fullWidth:!0,style:{marginBottom:"20px"},variant:"contained",color:"success",children:"View your public store"}),Object(d.jsxs)(u.a,{style:{marginBottom:"20px"},variant:"body1",color:"text.secondary",children:["Share this link anywhere. This is also the link you place on your",Object(d.jsx)(R.a,{href:"#",underline:"none",children:" Medal profile. "}),"Users who buy donations are not required to be in your server."]}),Object(d.jsx)(u.a,{gutterBottom:!0,variant:"h5",component:"div",children:"Donations inside Discord"}),Object(d.jsxs)(u.a,{gutterBottom:!0,variant:"body1",component:"div",children:["The roles on the left sync directly with your",Object(d.jsx)(R.a,{href:"#",underline:"none",children:" Discord Roles "}),". To get started, price your roles and set a PayPal email in settings."]}),Object(d.jsxs)(u.a,{gutterBottom:!0,variant:"body1",component:"div",children:["Your users can type ",Object(d.jsx)("strong",{children:'"donate"'}),"  in your Discord Server, they will be sent your donate link."]})]})})})]})})]})}));var se=n(334),oe=n(333),le=n(335),de=n(296);function je(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(F.a,{sx:{maxWidth:300,m:2},children:[Object(d.jsxs)(oe.a,{children:[Object(d.jsx)(se.a,{component:"img",height:"140",image:"/assets/image/dashboard/server-card-logo.jpg",alt:"green iguana"}),Object(d.jsxs)(I.a,{children:[Object(d.jsx)(u.a,{gutterBottom:!0,variant:"h5",component:"div",children:"Lizard"}),Object(d.jsx)(u.a,{variant:"body2",color:"text.secondary",children:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"})]})]}),Object(d.jsx)(le.a,{children:Object(d.jsx)(O.a,{variant:"contained",color:"primary",endIcon:Object(d.jsx)(de.a,{}),children:" Invite "})})]})})}n(198);function be(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=(t[0],t[1],Object(a.useState)([])),r=Object(l.a)(n,2),c=(r[0],r[1],Object(a.useState)(!1)),i=Object(l.a)(c,2),s=i[0],b=(i[1],Object(a.useState)("")),x=Object(l.a)(b,2),u=(x[0],x[1],Object(a.useState)("")),O=Object(l.a)(u,2),m=(O[0],O[1],Object(a.useState)("")),p=Object(l.a)(m,2);p[0],p[1],Object(o.f)();return Object(d.jsx)(d.Fragment,{children:!0===s?Object(d.jsx)(j,{}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(ce,{}),Object(d.jsx)(k.a,{maxWidth:"lg",children:Object(d.jsxs)(h.a,{sx:{display:"flex",flexWrap:"wrap",alignItems:"stretch",justifyContent:"center",p:1,m:1,bgcolor:"background.paper",height:100},children:[Object(d.jsx)(je,{}),Object(d.jsx)(je,{}),Object(d.jsx)(je,{}),Object(d.jsx)(je,{})]})})]})})}var he=n(75),xe=n(76),ue=n(112),Oe=n(111),me=n(16),pe=n(302),ge=n(303),fe=n(300),ye=n(304),ve=n(298),we=n(299),Se=n(317),ke=n(301),Ce=n(308),Ne=n(309),Be=0;function ze(e,t,n,a){return{id:Be+=1,name:e,color:n,price:t,summary:a}}function Ae(e,t,n){return t[n]<e[n]?-1:t[n]>e[n]?1:0}function Pe(e,t){var n=e.map((function(e,t){return[e,t]}));return n.sort((function(e,n){var a=t(e[0],n[0]);return 0!==a?a:e[1]-n[1]})),n.map((function(e){return e[0]}))}function Fe(e,t){return"desc"===e?function(e,n){return Ae(e,n,t)}:function(e,n){return-Ae(e,n,t)}}var Ie=[{id:"name",numeric:!1,disablePadding:!0,label:"Name"},{id:"price",numeric:!0,disablePadding:!1,label:"Price ($)"},{id:"colors",string:!0,disablePadding:!1,label:"Colors"},{id:"summary",string:!0,disablePadding:!1,label:"Summary"}],De=function(e){Object(ue.a)(n,e);var t=Object(Oe.a)(n);function n(){var e;Object(he.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).createSortHandler=function(t){return function(n){e.props.onRequestSort(n,t)}},e}return Object(xe.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.onSelectAllClick,a=t.order,r=t.orderBy,c=t.numSelected,i=t.rowCount,s=t.showstate;return Object(d.jsx)(ve.a,{children:Object(d.jsxs)(we.a,{style:{display:s},children:[Object(d.jsx)(fe.a,{padding:"checkbox",children:Object(d.jsx)(Ce.a,{indeterminate:c>0&&c<i,checked:c===i,onChange:n})}),Ie.map((function(t){return Object(d.jsx)(fe.a,{align:"center",sortDirection:r===t.id&&a,children:Object(d.jsx)(Ne.a,{title:"Sort",placement:t.numeric?"bottom-end":"bottom-start",enterDelay:300,children:Object(d.jsx)(Se.a,{active:r===t.id,direction:a,onClick:e.createSortHandler(t.id),children:t.label})})},t.id)}),this)]})})}}]),n}(r.a.Component),Re=function(e){Object(ue.a)(n,e);var t=Object(Oe.a)(n);function n(){var e;Object(he.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={order:"asc",orderBy:"calories",selected:[],data:[ze("Cupcake",305,"red",67),ze("Donut",452,"yellow",51),ze("Eclair",262,"brown",24),ze("Frozen yoghurt",262,"blue",24),ze("Gingerbread",356,"green",49),ze("Honeycomb",408,"white",87),ze("Cupcake",305,"red",67),ze("Donut",452,"yellow",51),ze("Eclair",262,"brown",24),ze("Frozen yoghurt",33,"blue",24),ze("Gingerbread",356,"green",49),ze("Honeycomb",408,"white",87)],page:0,rowsPerPage:5},e.handleRequestSort=function(t,n){var a=n,r="desc";e.state.orderBy===n&&"desc"===e.state.order&&(r="asc"),e.setState({order:r,orderBy:a})},e.handleSelectAllClick=function(t){t.target.checked?e.setState((function(e){return{selected:e.data.map((function(e){return e.id}))}})):e.setState({selected:[]})},e.handleClick=function(t,n){var a=e.state.selected,r=a.indexOf(n),c=[];-1===r?c=c.concat(a,n):0===r?c=c.concat(a.slice(1)):r===a.length-1?c=c.concat(a.slice(0,-1)):r>0&&(c=c.concat(a.slice(0,r),a.slice(r+1))),console.log(a),e.setState({selected:c})},e.isSelected=function(t){return-1!==e.state.selected.indexOf(t)},e}return Object(xe.a)(n,[{key:"render",value:function(){var e=this,t=this.props.classes,n=this.state,a=n.data,r=n.order,c=n.orderBy,i=n.selected;n.rowsPerPage,n.page;return Object(d.jsxs)("div",{className:"buyrole-main-div",children:[Object(d.jsxs)(ke.a,{className:"buyrole-root",style:{boxShadow:"none"},children:[Object(d.jsxs)("p",{className:"buyrole-p",children:[" Total price is ",Object(d.jsx)("strong",{}),"$"]}),Object(d.jsxs)("div",{className:"buyrole-tablewrapper-div",children:[Object(d.jsx)("div",{className:"buyrole-tablehead-div",children:Object(d.jsx)(pe.a,{"aria-labelledby":"tableTitle",children:Object(d.jsx)(De,{numSelected:i.length,order:r,orderBy:c,onSelectAllClick:this.handleSelectAllClick,onRequestSort:this.handleRequestSort,rowCount:a.length})})}),Object(d.jsx)("div",{className:"buyrole-tablewrapper",children:Object(d.jsxs)(pe.a,{"aria-labelledby":"tableTitle",children:[Object(d.jsx)(De,{numSelected:i.length,order:r,orderBy:c,onSelectAllClick:this.handleSelectAllClick,onRequestSort:this.handleRequestSort,rowCount:a.length}),Object(d.jsx)(ge.a,{className:"buyrole-table",children:Pe(a,Fe(r,c)).map((function(t){var n=e.isSelected(t.id);return Object(d.jsxs)(we.a,{hover:!0,onClick:function(n){return e.handleClick(n,t.id)},role:"checkbox","aria-checked":n,tabIndex:-1,selected:n,children:[Object(d.jsx)(fe.a,{padding:"checkbox",children:Object(d.jsx)(Ce.a,{checked:n})}),Object(d.jsx)(fe.a,{align:"center",component:"th",scope:"row",padding:"none",children:t.name}),Object(d.jsx)(fe.a,{align:"center",children:t.price}),Object(d.jsx)(fe.a,{align:"center",children:Object(d.jsx)("button",{style:{background:t.color},className:"buyrole-colorbtn"})}),Object(d.jsx)(fe.a,{align:"center",children:t.summary})]},t.id)}))})]})})]})]}),Object(d.jsx)("div",{className:"buyrole-paybtn-div",children:Object(d.jsx)(ye.a,{variant:"extended",size:"large",align:"center",color:"primary","aria-label":"Add",className:t.margin,style:{alignSelf:"center",width:"150px"},children:Object(d.jsx)("p",{className:"buyrole-pay-p",children:"PAY"})})})]})}}]),n}(r.a.Component),We=Object(me.a)((function(e){return{}}))(Re);function Te(){return Object(d.jsx)(s.a,{children:Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{exact:!0,path:"/",children:Object(d.jsx)(w,{})}),Object(d.jsx)(o.a,{path:"/dashboard",children:Object(d.jsx)(be,{})}),Object(d.jsx)(o.a,{path:"/server/:id/role",children:Object(d.jsx)(ie,{})}),Object(d.jsx)(o.a,{path:"/roles",children:Object(d.jsx)(ie,{})}),Object(d.jsx)(o.a,{path:"/buyrole",children:Object(d.jsx)(We,{})})]})})}var Le=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(Te,{})})};n(200);i.a.render(Object(d.jsx)(Le,{}),document.getElementById("root"))}},[[201,1,2]]]);
//# sourceMappingURL=main.bbca0352.chunk.js.map