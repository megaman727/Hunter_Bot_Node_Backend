(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{193:function(e,t,n){},194:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(46),i=n.n(c),r=n(57),s=n(14),o=n(12),l=n(53),d=n.n(l),j=n(1);function b(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-trueGray-900 opacity-75 flex flex-col items-center justify-center",children:[Object(j.jsx)("div",{className:"loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"}),Object(j.jsx)("h2",{className:"text-center text-white text-xl font-semibold",children:"Loading..."})]})})}var h=n(277),u=n(276),x=n(278),O=n(89),m=n(266),p=n(279),g=n(267);function f(e){var t=e.logo,n=e.userName,a=e.access,c=Object(s.f)();return Object(j.jsx)(u.a,{sx:{flexGrow:1},children:Object(j.jsx)(h.a,{position:"static",children:Object(j.jsxs)(x.a,{children:[Object(j.jsx)(p.a,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2}}),Object(j.jsx)(O.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:"Discord Bot"}),"unauthorized"==a?Object(j.jsx)(m.a,{color:"inherit",onClick:function(){return window.location.href="/api/auth/discord"},children:"Login"}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("span",{style:{fontSize:18},children:n}),Object(j.jsx)(p.a,{size:"large",edge:"end","aria-label":"account of current user","aria-haspopup":"true",color:"inherit",onClick:function(){return c.push("/dashboard")},children:Object(j.jsx)(g.a,{alt:"Logo",src:t})})]})]})})})}var v=n(28),w=n.n(v);function S(){return w.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",w.a.get("/api/auth",{withCredentials:!0,credentials:"include"})}var y=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(!0),r=Object(o.a)(i,2),s=r[0],l=r[1],h=Object(a.useState)(""),u=Object(o.a)(h,2),x=u[0],O=u[1],m=Object(a.useState)(""),p=Object(o.a)(m,2),g=p[0],v=p[1];return Object(a.useEffect)((function(){S().then((function(e){c(e.data.msg),"authorized"===n&&(O(e.data.user.discordTag),v("https://cdn.discordapp.com/avatars/".concat(e.data.user.discordId,"/").concat(e.data.user.avatar,".png?size=128"))),setTimeout((function(){l(!1)}),1e3)})).catch((function(e){console.log(e),l(!1),c("unauthorized")}))}),[n]),Object(j.jsx)(j.Fragment,{children:!0===s?Object(j.jsx)(b,{}):Object(j.jsx)("div",{className:"leading-normal tracking-normal text-white h-full",style:{width:"100%",minHeight:"100vh"},children:Object(j.jsxs)("div",{children:[Object(j.jsx)(f,{logo:g,userName:x,access:n}),Object(j.jsx)("div",{className:"pt-36",children:Object(j.jsx)("div",{className:"container mx-auto flex flex-wrap flex-col md:flex-row",children:Object(j.jsxs)("div",{className:"flex flex-col w-full  items-center text-center md:text-left",children:[Object(j.jsx)("h1",{className:"w-full my-5 text-5xl font-bold leading-tight text-center text-black",children:"Discord Bot"}),Object(j.jsxs)("p",{className:"leading-normal text-2xl mb-8",children:[d.a.botName," is the best customizable bot for discord with a dashboard."]}),Object(j.jsx)("div",{className:"flex",children:Object(j.jsx)("button",{className:"flex items-center px-7 py-3 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-500 rounded-md hover:bg-indigo-800 focus:outline-none focus:bg-indigo-800",children:Object(j.jsx)("span",{className:"mx-1",children:"Invite Bot"})})})]})})})]})})})},C=n(287),z=n(280),I=n(283),N=n(282),k=n(281),E=n(284),T=n(250),R=n(251);function B(e){var t=e.guild,n=e.permission;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(z.a,{sx:{width:300,m:2},children:[Object(j.jsxs)(k.a,{children:[null!==t.icon?Object(j.jsx)(N.a,{component:"img",height:"140",image:"/assets/image/dashboard/sample-server.png",alt:"green iguana"}):Object(j.jsx)(N.a,{component:"img",height:"140",image:"/assets/image/dashboard/default-server.png",alt:"green iguana"}),Object(j.jsxs)(I.a,{children:[Object(j.jsx)(O.a,{gutterBottom:!0,variant:"h6",component:"div",children:t.name.substr(0,20)+(t.name.length>20?"...":"")}),Object(j.jsx)(O.a,{variant:"body2",color:"text.secondary",children:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"})]})]}),Object(j.jsx)(E.a,{children:!0===n?Object(j.jsx)(m.a,{variant:"contained",color:"primary",endIcon:Object(j.jsx)(T.a,{}),onClick:function(){return window.location.href="".concat(d.a.site_url,"/").concat(t.id,"/role")},children:" Manage "}):Object(j.jsx)(m.a,{variant:"contained",color:"primary",endIcon:Object(j.jsx)(R.a,{}),onClick:function(){return window.location.href="http://discord.com/oauth2/authorize?client_id=".concat(d.a.clientId,"&scope=bot%20applications.commands&guild_id=").concat(t.id,"&response_type=code&redirect_uri=").concat(encodeURIComponent(d.a.redirect_uri))},children:" Invite "})})]})})}var F=n(55),_=n(4),W=n(31),L=n(268),D=n(285),M=n(254),A=n(123),G=n.n(A),U=n(126),H=n.n(U),P=n(127),$=n.n(P),J=n(263),q=n(255),Y=n(256),K=n(128),Q=n.n(K),V=n(129),X=n.n(V),Z=n(286),ee=n(261),te=Object(_.a)("div")((function(e){var t=e.theme;return Object(F.a)(Object(F.a)({display:"flex",alignItems:"center",padding:t.spacing(0,1)},t.mixins.toolbar),{},{justifyContent:"flex-end"})}));function ne(e){var t=e.logo,n=e.userName,c=e.access,i=Object(s.f)(),r=Object(W.a)(),l=a.useState(!1),d=Object(o.a)(l,2),b=d[0],f=d[1],v=a.useState(null),S=Object(o.a)(v,2),y=S[0],C=S[1];return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(u.a,{sx:{flexGrow:1},children:[Object(j.jsx)(h.a,{position:"static",children:Object(j.jsxs)(x.a,{children:[Object(j.jsx)(p.a,{size:"large",edge:"start",color:"inherit",onClick:function(){f(!0)},"aria-label":"menu",sx:{mr:2},children:Object(j.jsx)(G.a,{})}),Object(j.jsx)(O.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:"Server Management"}),"unauthorized"==c?Object(j.jsx)(m.a,{color:"inherit",onClick:function(){return window.location.href="/api/auth/discord"},children:"Login"}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("span",{style:{fontSize:18},children:n}),Object(j.jsx)(p.a,{size:"large",edge:"end","aria-label":"account of current user","aria-haspopup":"true",color:"inherit",onClick:function(e){C(e.currentTarget)},children:Object(j.jsx)(g.a,{alt:"Logo",src:t})})]}),Object(j.jsx)("div",{children:Object(j.jsx)(ee.a,{id:"menu-appbar",anchorEl:y,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},style:{marginTop:40},open:Boolean(y),onClose:function(){C(null)},children:Object(j.jsx)(Z.a,{onClick:function(){(w.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",w.a.get("/api/auth/logout",{withCredentials:!0,credentials:"include"})).then((function(e){i.push("/")}))},children:"Logout"})})})]})}),Object(j.jsxs)(L.a,{sx:{width:240,flexShrink:0,"& .MuiDrawer-paper":{width:240,boxSizing:"border-box"}},variant:"persistent",anchor:"left",open:b,children:[Object(j.jsx)(te,{children:Object(j.jsx)(p.a,{onClick:function(){f(!1)},children:"ltr"===r.direction?Object(j.jsx)(H.a,{}):Object(j.jsx)($.a,{})})}),Object(j.jsx)(M.a,{}),Object(j.jsxs)(D.a,{children:[Object(j.jsxs)(J.a,{button:!0,children:[Object(j.jsx)(q.a,{children:Object(j.jsx)(Q.a,{})}),Object(j.jsx)(Y.a,{primary:"Roles"})]}),Object(j.jsxs)(J.a,{button:!0,children:[Object(j.jsx)(q.a,{children:Object(j.jsx)(X.a,{})}),Object(j.jsx)(Y.a,{primary:"Messages"})]})]})]})]})})}function ae(){var e=Object(a.useState)(!0),t=Object(o.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)([]),r=Object(o.a)(i,2),s=r[0],l=r[1],d=Object(a.useState)([]),h=Object(o.a)(d,2),x=h[0],O=h[1],m=Object(a.useState)(""),p=Object(o.a)(m,2),g=p[0],f=p[1],v=Object(a.useState)(""),y=Object(o.a)(v,2),z=y[0],I=y[1],N=Object(a.useState)(""),k=Object(o.a)(N,2),E=k[0],T=k[1];return Object(a.useEffect)((function(){S().then((function(e){T(e.data.msg),"authorized"===E&&(f(e.data.user.discordTag),I("https://cdn.discordapp.com/avatars/".concat(e.data.user.discordId,"/").concat(e.data.user.avatar,".png?size=128")))}))}),[E]),Object(a.useEffect)((function(){"authorized"!=E&&(w.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",w.a.get("/api/guild",{withCredentials:!0,credentials:"include"})).then((function(e){if("unauthorized"===e.data.msg)return window.location.href="/api/auth/discord/";l(e.data.permissionNoGuilds),O(e.data.permissionHasGuilds),setTimeout((function(){c(!1)}),2e3)}))}),[]),Object(j.jsx)(j.Fragment,{children:!0===n?Object(j.jsx)(b,{}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(ne,{logo:z,userName:g,access:E}),Object(j.jsx)(C.a,{maxWidth:"lg",children:Object(j.jsxs)(u.a,{sx:{display:"flex",flexWrap:"wrap",alignItems:"stretch",justifyContent:"center",p:1,m:1,height:100},children:[x.map((function(e,t){return Object(j.jsx)(B,{guild:e,permission:!0},t)})),s.map((function(e,t){return Object(j.jsx)(B,{guild:e,permission:!1},t)}))]})})]})})}var ce=n(6),ie=n(288),re=n(264),se=n(262),oe=n(289),le=n(258),de=n(271),je=n(275),be=n(274),he=n(270),ue=n(272),xe=n(273),Oe=n(269),me=n(80),pe=n.n(me),ge=n(81),fe=n.n(ge),ve=n(130),we=n.n(ve),Se=n(131),ye=n.n(Se),Ce=n(259),ze={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",boxShadow:24,p:4};var Ie=Object(le.a)({formControl:{marginBottom:"20px"},card:{minWidth:"200px",maxWidth:"350px",display:"flex",justifyContent:"center"},noRole:{fontSize:"30px"}})((function(e){var t,n=Object(a.useState)(!1),c=Object(o.a)(n,2),i=c[0],r=(c[1],Object(a.useState)([{id:"910451180457586709",name:"Administrator",permissions:"1099511103487",position:4,color:15742004,hoist:!1,managed:!1,mentionable:!1,icon:null,unicode_emoji:null,price:"12"},{id:"911554332246302740",name:"new role",permissions:"1071698660929",position:1,color:0,hoist:!1,managed:!1,mentionable:!1,icon:null,unicode_emoji:null,price:null}])),l=Object(o.a)(r,2),d=l[0],h=l[1],x=Object(a.useState)(""),g=Object(o.a)(x,2),f=g[0],v=(g[1],Object(a.useState)("")),S=Object(o.a)(v,2),y=S[0],z=(S[1],Object(a.useState)("")),I=Object(o.a)(z,2),N=I[0],k=(I[1],e.classes,Object(s.g)().guildId),E=(Object(s.f)(),Object(a.useState)({id:"",guildId:"",price:""})),T=Object(o.a)(E,2),R=T[0],B=T[1],_=Object(a.useState)(!1),W=Object(o.a)(_,2),L=W[0],D=W[1],M=function(){return D(!1)};return Object(j.jsx)(j.Fragment,{children:!0===i?Object(j.jsx)(b,{}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{children:[Object(j.jsx)(ne,{logo:y,userName:f,access:N}),Object(j.jsxs)(C.a,{maxWidth:"lg",children:[Object(j.jsxs)(u.a,{sx:{width:"100%",paddingTop:"50px"},children:[Object(j.jsx)(O.a,{variant:"h4",gutterBottom:!0,component:"div",children:"Roles"}),Object(j.jsx)(O.a,{variant:"h6",gutterBottom:!0,component:"div",children:"Use roles to organize your server members and customize their permissions."})]}),Object(j.jsx)(he.a,{component:Oe.a,children:Object(j.jsxs)(de.a,{sx:{minWidth:650,border:0},"aria-label":"simple table",children:[Object(j.jsx)(ue.a,{children:Object(j.jsxs)(xe.a,{children:[Object(j.jsx)(be.a,{align:"left",children:"ROLES"}),Object(j.jsx)(be.a,{align:"right",children:"MEMBERS"}),Object(j.jsx)(be.a,{align:"right",children:"PRICE"}),Object(j.jsx)(be.a,{align:"right",children:"ACTIONS"})]})}),Object(j.jsx)(je.a,{children:d.map((function(e){return Object(j.jsxs)(xe.a,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(j.jsxs)(be.a,{component:"th",scope:"row",align:"left",children:[Object(j.jsx)(pe.a,{sx:{color:"#f03434"}}),Object(j.jsx)("span",{className:"ml-3",children:e.name})]}),Object(j.jsxs)(be.a,{align:"right",children:[" 1 ",Object(j.jsx)(fe.a,{})," "]}),Object(j.jsxs)(be.a,{align:"right",children:[" ",null==e.price?"NOT ADDED":"$ "+e.price," "]}),Object(j.jsxs)(be.a,{align:"right",children:[Object(j.jsx)(p.a,{size:"normal",edge:"end","aria-label":"Edit Role","aria-haspopup":"true",color:"inherit",onClick:function(){return function(e){console.log(e),B({id:e.id,guildId:k,price:e.price}),D(!0)}(e)},children:Object(j.jsx)(we.a,{})}),Object(j.jsx)(p.a,{size:"normal",edge:"end","aria-label":"Edit Role","aria-haspopup":"true",color:"inherit",sx:{marginLeft:"20px"},children:Object(j.jsx)(ye.a,{})})]})]},e.id)}))})]})})]})]}),Object(j.jsx)("div",{children:Object(j.jsx)(Ce.a,{open:L,onClose:M,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(j.jsxs)(u.a,{sx:ze,children:[Object(j.jsx)(O.a,{id:"modal-modal-title",variant:"h6",component:"h2",children:"Role"}),Object(j.jsxs)(ie.a,{fullWidth:!0,sx:{mt:3,mb:3},variant:"standard",children:[Object(j.jsx)(re.a,{htmlFor:"standard-adornment-amount",children:"Please enter the price of ths role."}),Object(j.jsx)(se.a,{id:"standard-adornment-amount",value:R.price,onChange:(t="price",function(e){B(Object(F.a)(Object(F.a)({},R),{},Object(ce.a)({},t,e.target.value))),console.log(R)}),startAdornment:Object(j.jsx)(oe.a,{position:"start",children:"$"})})]}),Object(j.jsx)(m.a,{variant:"contained",sx:{mr:3},onClick:function(){var e;(e=R,w.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",w.a.post("/api/role/modifyRole",{role:e},{withCredentials:!0,credentials:"include"})).then((function(e){h(e.data.roles),D(!1)})).catch((function(e){console.log(e),D(!1)}))},children:"Save"}),Object(j.jsx)(m.a,{variant:"contained",color:"error",onClick:M,children:"Cancel"})]})})})]})})})),Ne=n(132),ke=n.n(Ne);var Ee=Object(le.a)({formControl:{marginBottom:"20px"},card:{minWidth:"200px",maxWidth:"350px",display:"flex",justifyContent:"center"},noRole:{fontSize:"30px"}})((function(e){var t=Object(a.useState)(!1),n=Object(o.a)(t,2),c=n[0],i=(n[1],Object(a.useState)([{id:"910451180457586709",name:"Administrator",permissions:"1099511103487",position:4,color:15742004,hoist:!1,managed:!1,mentionable:!1,icon:null,unicode_emoji:null,price:"12"},{id:"911554332246302740",name:"new role",permissions:"1071698660929",position:1,color:0,hoist:!1,managed:!1,mentionable:!1,icon:null,unicode_emoji:null,price:null}])),r=Object(o.a)(i,2),l=r[0],d=(r[1],e.classes,Object(a.useState)("")),h=Object(o.a)(d,2),x=h[0],p=(h[1],Object(a.useState)("")),g=Object(o.a)(p,2),v=g[0],S=(g[1],Object(a.useState)("")),y=Object(o.a)(S,2),z=y[0],I=(y[1],Object(s.g)()),N=I.guildId,k=I.userId,E=function(e){(function(e,t,n){return w.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",w.a.post("/api/role/buyrole",{guildId:e,userId:t,roleId:n},{withCredentials:!0,credentials:"include"})})(N,k,e.id).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)}))};return Object(j.jsx)(j.Fragment,{children:!0===c?Object(j.jsx)(b,{}):Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{children:[Object(j.jsx)(f,{logo:v,userName:x,access:z}),Object(j.jsxs)(C.a,{maxWidth:"lg",children:[Object(j.jsxs)(u.a,{sx:{width:"100%",paddingTop:"50px"},children:[Object(j.jsx)(O.a,{variant:"h4",gutterBottom:!0,component:"div",children:"Roles"}),Object(j.jsx)(O.a,{variant:"h6",gutterBottom:!0,component:"div",children:"Use roles to organize your server members and customize their permissions."})]}),Object(j.jsx)(he.a,{component:Oe.a,children:Object(j.jsxs)(de.a,{sx:{minWidth:650,border:0},"aria-label":"simple table",children:[Object(j.jsx)(ue.a,{children:Object(j.jsxs)(xe.a,{children:[Object(j.jsx)(be.a,{align:"left",children:"ROLES"}),Object(j.jsx)(be.a,{align:"right",children:"MEMBERS"}),Object(j.jsx)(be.a,{align:"right",children:"PRICE"}),Object(j.jsx)(be.a,{align:"right",children:"ACTIONS"})]})}),Object(j.jsx)(je.a,{children:l.map((function(e){return Object(j.jsxs)(xe.a,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(j.jsxs)(be.a,{component:"th",scope:"row",align:"left",children:[Object(j.jsx)(pe.a,{sx:{color:"#f03434"}}),Object(j.jsx)("span",{className:"ml-3",children:e.name})]}),Object(j.jsxs)(be.a,{align:"right",children:[" 1 ",Object(j.jsx)(fe.a,{})," "]}),Object(j.jsxs)(be.a,{align:"right",children:[" ",null==e.price?"NOT ADDED":"$ "+e.price," "]}),Object(j.jsx)(be.a,{align:"right",children:Object(j.jsx)(m.a,{variant:"contained",endIcon:Object(j.jsx)(ke.a,{}),onClick:function(){return E(e)},children:"BUY"})})]},e.id)}))})]})})]})]})})})}));function Te(){return Object(j.jsx)(r.a,{children:Object(j.jsxs)(s.c,{children:[Object(j.jsx)(s.a,{exact:!0,path:"/",children:Object(j.jsx)(y,{})}),Object(j.jsx)(s.a,{path:"/dashboard",children:Object(j.jsx)(ae,{})}),Object(j.jsx)(s.a,{path:"/:guildId/role",children:Object(j.jsx)(Ie,{})}),Object(j.jsx)(s.a,{path:"/buyrole/guilds/:guildId/members/:userId",children:Object(j.jsx)(Ee,{})})]})})}var Re=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(Te,{})})};n(193);i.a.render(Object(j.jsx)(Re,{}),document.getElementById("root"))},53:function(e,t){e.exports={botName:"Hunter",clientId:"910229962349486082",site_url:"https://hunter-bot-backend.herokuapp.com",redirect_uri:"http://hunter-bot-backend.herokuapp.com/api/auth/discord/redirect"}}},[[194,1,2]]]);
//# sourceMappingURL=main.307f668b.chunk.js.map