(this["webpackJsonpblog-mountain"]=this["webpackJsonpblog-mountain"]||[]).push([[0],{46:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(19),r=a.n(n),i=a(9),o=a(6),l=(a(46),a(2)),d=a.p+"static/media/logo.d46dcc1c.png",u=a(0),j=function(){return Object(u.jsxs)("header",{className:"header",children:[Object(u.jsxs)("div",{className:"header__main",children:[Object(u.jsx)("img",{className:"header__logo",src:d,alt:"logo"}),Object(u.jsx)(o.b,{to:"/",className:"header__title",children:"Mountain blog"}),Object(u.jsx)("nav",{className:"header__nav",children:Object(u.jsxs)("ul",{className:"header__ul",children:[Object(u.jsx)("li",{className:"header__li",children:"Home"}),Object(u.jsx)("li",{className:"header__li",children:"Posts"}),Object(u.jsx)("li",{className:"header__li",children:"About"}),Object(u.jsx)("li",{className:"header__li",children:"Contact"})]})})]}),Object(u.jsx)("div",{className:"header__content",children:Object(u.jsx)("img",{className:"header__img",src:"https://images.unsplash.com/photo-1579691099788-42394ae932d8",alt:"pic"})}),Object(u.jsx)("h1",{className:"header__title_posts",children:"POSTS"}),Object(u.jsx)("hr",{className:"header__hr"}),Object(u.jsx)("div",{className:"header__addPost",children:Object(u.jsx)(o.b,{to:"/create-post",className:"header__addPost_btn",href:"#",children:"Tell About Something..."})})]})},b=a(4),m=a.n(b),p=a(7),h=a(13),f=a.n(h),O=a.p+"static/media/delete.0b76a5fc.svg",x=a.p+"static/media/edit.3c70b537.svg",_=function(e){var t=e.id,a=function(){var e=Object(p.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.delete("https://bloggy-api.herokuapp.com/posts/".concat(t)).then((function(e){window.location.reload()})).catch((function(e){console.log(e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(o.b,{to:"/edit-post/"+t,className:"header__post_edit",children:Object(u.jsx)("img",{className:"header__post_edit_icon",src:x,alt:"edit"})}),Object(u.jsx)("div",{className:"header__post_delete",children:Object(u.jsx)("img",{onClick:function(){return a(t)},className:"header__post_delete_icon",src:O,alt:"deleteIcon"})})]})},v=a.p+"static/media/info.a0467430.svg",N=function(e){var t=e.id,a=e.title,c=e.body;return Object(u.jsxs)("div",{className:"header__posts_main",children:[Object(u.jsxs)("div",{className:"header__posts_content",children:[Object(u.jsx)("h3",{className:"header__posts_title",children:a}),Object(u.jsx)("hr",{}),Object(u.jsx)("p",{className:"header__posts_body",children:c})]}),Object(u.jsxs)("div",{className:"header__posts_btns",children:[Object(u.jsx)(o.b,{to:"/posts/".concat(t),className:"header__post_info",children:Object(u.jsx)("img",{className:"header__post_info_icon",src:v,alt:"info"})}),Object(u.jsx)(_,{id:t})]})]})},g=a(5),y="SET_LOADED",k="SET_LIST_POSTS",w={posts:[],isLoaded:!1},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(g.a)(Object(g.a)({},e),{},{posts:t.payload,isLoaded:!0});case y:return Object(g.a)(Object(g.a)({},e),{},{isLoaded:t.payload});default:return e}},P=function(e){return{type:k,payload:e}},S=function(){return Object(u.jsx)("div",{className:"loader",children:Object(u.jsx)("svg",{width:"144",height:"144",viewBox:"0 0 44 44",xmlns:"http://www.w3.org/2000/svg",stroke:"#000",children:Object(u.jsxs)("g",{fill:"none","fill-rule":"evenodd","stroke-width":"2",children:[Object(u.jsxs)("circle",{cx:"22",cy:"22",r:"1",children:[Object(u.jsx)("animate",{attributeName:"r",begin:"0s",dur:"1.8s",values:"1; 20",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.165, 0.84, 0.44, 1",repeatCount:"indefinite"}),Object(u.jsx)("animate",{attributeName:"stroke-opacity",begin:"0s",dur:"1.8s",values:"1; 0",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.3, 0.61, 0.355, 1",repeatCount:"indefinite"})]}),Object(u.jsxs)("circle",{cx:"22",cy:"22",r:"1",children:[Object(u.jsx)("animate",{attributeName:"r",begin:"-0.9s",dur:"1.8s",values:"1; 20",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.165, 0.84, 0.44, 1",repeatCount:"indefinite"}),Object(u.jsx)("animate",{attributeName:"stroke-opacity",begin:"-0.9s",dur:"1.8s",values:"1; 0",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.3, 0.61, 0.355, 1",repeatCount:"indefinite"})]})]})})})},T=(a(68),function(){return Object(u.jsxs)("div",{className:"empty",children:[Object(u.jsx)("h1",{className:"empty__title",children:"No Posts Yet"}),Object(u.jsx)("svg",{width:"145",height:"145",viewBox:"0 0 45 45",xmlns:"http://www.w3.org/2000/svg",stroke:"#000",children:Object(u.jsxs)("g",{fill:"none","fill-rule":"evenodd",transform:"translate(1 1)","stroke-width":"2",children:[Object(u.jsxs)("circle",{cx:"22",cy:"22",r:"6","stroke-opacity":"0",children:[Object(u.jsx)("animate",{attributeName:"r",begin:"1.5s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),Object(u.jsx)("animate",{attributeName:"stroke-opacity",begin:"1.5s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),Object(u.jsx)("animate",{attributeName:"stroke-width",begin:"1.5s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})]}),Object(u.jsxs)("circle",{cx:"22",cy:"22",r:"6","stroke-opacity":"0",children:[Object(u.jsx)("animate",{attributeName:"r",begin:"3s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),Object(u.jsx)("animate",{attributeName:"stroke-opacity",begin:"3s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),Object(u.jsx)("animate",{attributeName:"stroke-width",begin:"3s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})]}),Object(u.jsx)("circle",{cx:"22",cy:"22",r:"8",children:Object(u.jsx)("animate",{attributeName:"r",begin:"0s",dur:"1.5s",values:"6;1;2;3;4;5;6",calcMode:"linear",repeatCount:"indefinite"})})]})})]})}),L=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.getListPosts.posts})),a=Object(i.c)((function(e){return e.getListPosts.isLoaded}));return s.a.useEffect((function(){e(function(){var e=Object(p.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:y,payload:!1}),e.next=3,f.a.get("https://bloggy-api.herokuapp.com/posts").then((function(e){var a=e.data;t(P(a))}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(u.jsx)("div",{className:"header__posts",children:t.length<=0?Object(u.jsx)(T,{}):a?t.map((function(e){return Object(u.jsx)(N,{id:e.id,title:e.title,body:e.body},e.id)})):Object(u.jsx)(S,{})})},M=function(){return Object(u.jsx)("footer",{className:"footer",children:Object(u.jsx)("h3",{className:"footer__title",children:"React Posts"})})},E=a(15),B=(a(69),function(e){var t=e.id,a=s.a.useState(""),c=Object(E.a)(a,2),n=c[0],r=c[1],i=function(){var e=Object(p.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("https://bloggy-api.herokuapp.com/comments/",Object(g.a)({},t)).then((function(e){window.location.reload()})).catch((function(e){console.log(e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(p.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={postId:t,body:n},e.next=3,i(a);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)("form",{className:"form",children:[Object(u.jsxs)("div",{className:"form_content",children:[Object(u.jsx)("label",{htmlFor:"fromComment",className:"form_label",children:"Comment:"}),Object(u.jsx)("input",{type:"text",className:"form_input",id:"fromComment",value:n,onChange:function(e){return r(e.target.value)}})]}),Object(u.jsxs)("div",{className:"form_btn",children:[Object(u.jsx)("button",{type:"button",onClick:function(){return l()},className:"form_add",children:"Push comment"}),Object(u.jsx)(o.b,{className:"form_back_a",to:"/",children:Object(u.jsx)("button",{type:"button",className:"form_back",children:"Back"})})]})]})}),A="SET_POST",F="SET_LOADED",D={post:{},isLoaded:!1},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return Object(g.a)(Object(g.a)({},e),{},{post:t.payload,isLoaded:!0});case F:return Object(g.a)(Object(g.a)({},e),{},{isLoaded:t.payload});default:return e}},R=function(e){return function(){var t=Object(p.a)(m.a.mark((function t(a){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:F,payload:!1}),t.next=3,f.a.get("https://bloggy-api.herokuapp.com/posts/".concat(e,"?_embed=comments")).then((function(e){var t=e.data;a(J(t))}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},J=function(e){return{type:A,payload:e}},V=function(e){var t=Object(i.c)((function(e){return e.getPost.post})),a=Object(i.c)((function(e){return e.getPost.isLoaded})),c=Object(i.b)();return s.a.useEffect((function(){c(R(e.match.params.id))}),[c,e.match.params.id]),Object(u.jsx)(u.Fragment,{children:a?Object(u.jsx)("div",{className:"test",children:Object(u.jsxs)("div",{className:"header__posts_content",children:[Object(u.jsx)("h5",{className:"header__posts_title",children:t.title}),Object(u.jsx)("hr",{className:"hr"}),Object(u.jsx)("p",{className:"header__posts_body",children:t.body}),Object(u.jsx)("div",{className:"header__posts_btns"}),Object(u.jsx)("hr",{className:"hr"}),Object(u.jsx)(B,{id:t.id}),Object(u.jsx)("ol",{className:"header__posts_comments",children:t.comments.map((function(e){return Object(u.jsx)("li",{className:"header__posts_comment_item",children:e.body},e.id)}))})]})}):Object(u.jsx)(S,{})})},H=function(e){var t=Object(i.b)(),a=s.a.useState(!1),c=Object(E.a)(a,2),n=c[0],r=c[1],d=Object(i.c)((function(e){return e.getPost.post})),j=Object(i.c)((function(e){return e.getPost.isLoaded})),b=s.a.useRef(null),h=s.a.useRef(null);s.a.useEffect((function(){t(R(e.match.params.id))}),[t,e.match.params.id]);var O=function(){var e=Object(p.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.put("https://bloggy-api.herokuapp.com/posts/".concat(d.id),Object(g.a)({},t)).then((function(e){r(!0)})).catch((function(e){console.log(e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={title:b.current.value,body:h.current.value},e.next=3,O(t);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return n?Object(u.jsx)(l.a,{to:"/"}):Object(u.jsx)(u.Fragment,{children:j?Object(u.jsxs)("form",{className:"form",children:[Object(u.jsxs)("div",{className:"form_content",children:[Object(u.jsx)("label",{htmlFor:"formEdit",className:"form_label",children:"Title"}),Object(u.jsx)("input",{type:"text",className:"form_input",id:"formEdit",ref:b,defaultValue:d.title})]}),Object(u.jsxs)("div",{className:"form_content",children:[Object(u.jsx)("label",{htmlFor:"editArea",className:"form_label",children:"Body"}),Object(u.jsx)("textarea",{className:"form_input",id:"editArea",rows:"4",cols:"50",ref:h,defaultValue:d.body})]}),Object(u.jsxs)("div",{className:"form_btn",children:[Object(u.jsx)("button",{type:"button",onClick:function(){return x()},className:"form_add",children:"Edit"}),Object(u.jsx)(o.b,{className:"form_back_a",to:"/",children:Object(u.jsx)("button",{type:"button",className:"form_back",children:"Back"})})]})]}):Object(u.jsx)(S,{})})},W=function(){var e=s.a.useState(""),t=Object(E.a)(e,2),a=t[0],c=t[1],n=s.a.useState(""),r=Object(E.a)(n,2),i=r[0],d=r[1],j=s.a.useState(!1),b=Object(E.a)(j,2),h=b[0],O=b[1],x=function(){var e=Object(p.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("https://bloggy-api.herokuapp.com/posts/",Object(g.a)({},t)).then((function(e){O(!0)})).catch((function(e){console.log(e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={title:a,body:i},e.next=3,x(t);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return h?Object(u.jsx)(l.a,{to:"/"}):Object(u.jsxs)("form",{className:"form",children:[Object(u.jsxs)("div",{className:"form_content",children:[Object(u.jsx)("label",{htmlFor:"newPostTitle",className:"form_label",children:"Title"}),Object(u.jsx)("input",{type:"text",className:"form_input",id:"newPostTitle",value:a,onChange:function(e){return c(e.target.value)}})]}),Object(u.jsxs)("div",{className:"form_content",children:[Object(u.jsx)("label",{htmlFor:"newPostBody",className:"form_label",children:"Body"}),Object(u.jsx)("textarea",{className:"form_input",id:"newPostBody",rows:"3",cols:"50",value:i,onChange:function(e){return d(e.target.value)}})]}),Object(u.jsxs)("div",{className:"form_btn",children:[Object(u.jsx)("button",{type:"button",onClick:function(){return _()},className:"form_add",children:"Add New Post"}),Object(u.jsx)(o.b,{className:"form_back_a",to:"/",children:Object(u.jsx)("button",{type:"button",className:"form_back",children:"Back"})})]})]})};a(70);var Y=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(j,{}),Object(u.jsx)(l.b,{path:"/",component:L,exact:!0}),Object(u.jsx)(l.b,{path:"/posts/:id",component:V,exact:!0}),Object(u.jsx)(l.b,{path:"/edit-post/:id",component:H,exact:!0}),Object(u.jsx)(l.b,{path:"/create-post",component:W}),Object(u.jsx)(M,{})]})})},q=a(16),z=a(36),G=a(37),K=Object(q.combineReducers)({getPost:I,getListPosts:C}),Q=Object(q.createStore)(K,Object(z.composeWithDevTools)(Object(q.applyMiddleware)(G.a)));r.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(o.a,{children:Object(u.jsx)(i.a,{store:Q,children:Object(u.jsx)(Y,{})})})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.450953fe.chunk.js.map