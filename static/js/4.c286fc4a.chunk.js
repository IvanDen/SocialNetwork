(this.webpackJsonpSocialNetwork=this.webpackJsonpSocialNetwork||[]).push([[4],{241:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return o}));var n=function(e){if(!e)return"Field is required"},o=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},242:function(e,t,a){"use strict";a.d(t,"b",(function(){return m})),a.d(t,"a",(function(){return u})),a.d(t,"c",(function(){return f}));var n=a(64),o=a(0),r=a.n(o),l=a(243),i=a.n(l),s=(a(241),a(119)),c=function(e){e.input;var t=e.meta,a=t.touched,o=t.error,l=e.children,s=(Object(n.a)(e,["input","meta","children"]),a&&o);return r.a.createElement("div",{className:i.a.formControl+" "+(s?i.a.error:"")},r.a.createElement("div",{className:i.a.inputWrap},l),s&&r.a.createElement("span",null,o))},m=function(e){var t=e.input,a=(e.meta,e.child,e.element,Object(n.a)(e,["input","meta","child","element"]));return r.a.createElement(c,e,r.a.createElement("textarea",Object.assign({},t,a)))},u=function(e){var t=e.input,a=(e.meta,e.child,e.element,Object(n.a)(e,["input","meta","child","element"]));return r.a.createElement(c,e,r.a.createElement("input",Object.assign({},t,a)))},f=function(e,t,a,n){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return r.a.createElement("div",{className:i.a.formControlWrap},r.a.createElement(s.a,Object.assign({placeholder:e,name:t,component:a,validate:n},o))," ",l)}},243:function(e,t,a){e.exports={formControlWrap:"FormsControls_formControlWrap__gyDky",inputWrap:"FormsControls_inputWrap__go7U1",formControl:"FormsControls_formControl__3GIpO",error:"FormsControls_error__2z09f"}},245:function(e,t,a){e.exports={infoWrap:"Profileinfo_infoWrap__3fyIl",info:"Profileinfo_info__NFyVz",mainImg:"Profileinfo_mainImg__60J-N",userInfo:"Profileinfo_userInfo__29l0j",avatar:"Profileinfo_avatar__18N5m",avaWrap:"Profileinfo_avaWrap__3HoX-",ownInfo:"Profileinfo_ownInfo___EQff",imgWrap:"Profileinfo_imgWrap__3ztce",inputFileWrap:"Profileinfo_inputFileWrap__co6YH",inputFile:"Profileinfo_inputFile__2DGVn",socialLinks:"Profileinfo_socialLinks__1FlxO",formSummaryError:"Profileinfo_formSummaryError__1wEmo",infoItemBlock:"Profileinfo_infoItemBlock__1UWRB",contactsVal:"Profileinfo_contactsVal__2Rhgl",contactsItem:"Profileinfo_contactsItem__2cdaJ",imgTitle:"Profileinfo_imgTitle__hz4kU",imgSocial:"Profileinfo_imgSocial__jcIiX",facebook:"Profileinfo_facebook__1NUvf",website:"Profileinfo_website__3GI7u",vk:"Profileinfo_vk__10_ho",twitter:"Profileinfo_twitter__2fBks",instagram:"Profileinfo_instagram__3o7Xd",youtube:"Profileinfo_youtube__3ATVd",github:"Profileinfo_github__3uLWj",mainLink:"Profileinfo_mainLink__19poW",item:"Profileinfo_item__2oZXe"}},307:function(e,t,a){e.exports={profilePageWrap:"profile_profilePageWrap__1ly23",mainImg:"profile_mainImg__2Cz0J",userInfo:"profile_userInfo__2DDqZ",avatar:"profile_avatar__1DKIf",infoText:"profile_infoText__1QrMX"}},308:function(e,t,a){e.exports={postsFeed:"MyPosts_postsFeed__1Aom0",postForm:"MyPosts_postForm__1WUCc",posts:"MyPosts_posts__2W8_2",formWrap:"MyPosts_formWrap__2GVPl"}},309:function(e,t,a){e.exports={item:"Post_item__wy8gV",imgWrap:"Post_imgWrap__3mf-U",messagePanel:"Post_messagePanel__3S4hj"}},312:function(e,t,a){"use strict";a.r(t);var n=a(24),o=a(25),r=a(27),l=a(26),i=a(28),s=a(0),c=a.n(s),m=a(19),u=a(307),f=a.n(u),p=a(67),_=a(35),d=a(308),E=a.n(d),v=a(309),b=a.n(v),g=function(e){return c.a.createElement("div",{className:b.a.item},c.a.createElement("div",{className:b.a.imgWrap},c.a.createElement("img",{src:"./img/posts-user.png",alt:"user-post"})),c.a.createElement("div",{className:b.a.messagePanel},c.a.createElement("span",null,e.message),c.a.createElement("div",null,c.a.createElement("span",null,"Like: ",e.likeCount),c.a.createElement("span",null,"Send"))))},h=a(120),P=a(241),k=a(242),N=Object(P.a)(30),I=Object(h.a)({form:"ProfileAddNewPostForm"})((function(e){return c.a.createElement("form",{className:E.a.postForm,onSubmit:e.handleSubmit},Object(k.c)("Post message","newPostText",k.b,[P.b,N]),c.a.createElement("button",null,"Add post"))})),O=c.a.memo((function(e){c.a.createRef();var t=Object(_.a)(e.posts).reverse().map((function(e){return c.a.createElement(g,{message:e.message,key:e.id,likeCount:e.likeCount})}));return c.a.createElement("div",{className:E.a.postsFeed},c.a.createElement(I,{onSubmit:function(t){e.addPost(t.newPostText)}}),c.a.createElement("div",{className:E.a.posts},t))})),j=Object(m.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),{addPost:p.a})(O),y=a(72),S=a(245),W=a.n(S),w=a(33),F=Object(h.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,a=e.isOwner,n=e.profile,o=e.error;return c.a.createElement("form",{className:"".concat(W.a.info,"  ").concat(W.a.ownInfo),onSubmit:t},c.a.createElement("div",{className:"".concat(W.a.info,"  ").concat(W.a.ownInfo)},a&&c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){}},"Save")),o&&c.a.createElement("div",{className:W.a.formSummaryError},o),c.a.createElement("div",null,c.a.createElement("span",null,"Name: "),Object(k.c)("Full name","fullName",k.a,[],{type:"text"})),c.a.createElement("div",{className:"".concat(W.a.infoItemBlock)},c.a.createElement("span",null,"looking for a job:"),Object(k.c)("","lookingForAJob",k.a,[],{type:"checkbox"})),c.a.createElement("div",{className:"".concat(W.a.infoItemBlock)},c.a.createElement("span",null,"My professional skills:"),Object(k.c)("My skills","lookingForAJobDescription",k.b,[])),c.a.createElement("div",{className:"".concat(W.a.infoItemBlock)},c.a.createElement("span",null,"About me:"),Object(k.c)("About me:","aboutMe",k.b,[])),c.a.createElement("div",{className:"".concat(W.a.infoItemBlock)},c.a.createElement("span",null,"City:"),c.a.createElement("span",null,"-----")),c.a.createElement("div",{className:"".concat(W.a.infoItemBlock)},c.a.createElement("span",null,"Education:"),c.a.createElement("span",null,"-----")),c.a.createElement("div",{className:"".concat(W.a.infoItemBlock)},c.a.createElement("span",null,"Web Site:"),c.a.createElement("span",null,"-----"))),c.a.createElement("div",{className:"".concat(W.a.info," ").concat(W.a.socialLinks)},c.a.createElement("h2",null,"Contacts"),c.a.createElement("div",{className:"".concat(W.a.infoItemBlock)},Object.keys(n.contacts).map((function(e){return c.a.createElement("div",{key:e,className:W.a.contactsItem},c.a.createElement("div",{className:W.a.imgTitle},c.a.createElement("span",{className:"".concat(W.a.imgSocial," ").concat(W.a[e])}),c.a.createElement("span",{className:W.a.item},e)),Object(k.c)(e,"contacts."+e,k.a,[],{type:"text"}))})))))})),C=function(e){var t=e.contactTitle,a=e.contactValue,n=e.classNameIcon;return c.a.createElement("div",{className:W.a.contactsItem},c.a.createElement("div",{className:W.a.imgTitle},c.a.createElement("span",{className:"".concat(W.a.imgSocial," ").concat(W.a[n])}),c.a.createElement("span",{className:W.a.item},t)),c.a.createElement("span",{className:W.a.contactsVal},a))},x=function(e){var t=Object(s.useState)(!1),a=Object(y.a)(t,2),n=a[0],o=a[1],r=Object(s.useState)(e.status),l=Object(y.a)(r,2),i=l[0],m=l[1];Object(s.useEffect)((function(){m(e.status)}),[e.status]);return c.a.createElement("div",null,!n&&c.a.createElement("div",null,e.isOwner?c.a.createElement("span",{onDoubleClick:function(){o(!0)}},e.status||"------"):c.a.createElement("span",null,e.status||"------")),n&&c.a.createElement("div",null,c.a.createElement("input",{autoFocus:!0,onBlur:function(){o(!1),e.updateStatus(i)},onChange:function(e){m(e.currentTarget.value)},value:i})))},B=function(e){var t=e.profile,a=e.status,n=e.updateStatus,o=e.isOwner,r=e.goToEditMode;return c.a.createElement("div",{className:"".concat(W.a.info,"  ").concat(W.a.ownInfo)},o&&c.a.createElement("div",null,c.a.createElement("button",{onClick:r},"Edit profile")),c.a.createElement("h1",null,"Name: ",t.fullName),c.a.createElement("div",{className:"".concat(W.a.infoItemBlock)},c.a.createElement("span",null,"Status:"),c.a.createElement(x,{status:a,updateStatus:n,isOwner:o})),c.a.createElement("div",{className:"".concat(W.a.infoItemBlock)},c.a.createElement("span",null,"looking for a job:"),c.a.createElement("span",null,t.lookingForAJob?"yes":"no")),t.lookingForAJob&&c.a.createElement("div",{className:"".concat(W.a.infoItemBlock)},c.a.createElement("span",null,"My professional skills:"),c.a.createElement("span",null,t.lookingForAJobDescription)),c.a.createElement("div",{className:"".concat(W.a.infoItemBlock)},c.a.createElement("span",null,"About me:"),c.a.createElement("span",null,t.aboutMe?t.aboutMe:"-----")),c.a.createElement("div",{className:"".concat(W.a.info," ").concat(W.a.socialLinks)},c.a.createElement("h2",null,"Contacts"),c.a.createElement("div",{className:"".concat(W.a.infoItemBlock)},Object.keys(t.contacts).map((function(e){return c.a.createElement(C,{key:e,classNameIcon:e,contactTitle:e,contactValue:t.contacts[e]})})))))},A=function(e){var t=e.profile,a=e.status,n=e.updateStatus,o=e.isOwner,r=e.savePhoto,l=e.saveProfile,i=Object(s.useState)(),m=Object(y.a)(i,2),u=m[0],f=m[1];if(!t)return c.a.createElement(w.a,null);return c.a.createElement("div",{className:W.a.userInfo},c.a.createElement("div",{className:"".concat(W.a.infoWrap)},c.a.createElement("div",{className:"".concat(W.a.info," ").concat(W.a.avaWrap)},o&&c.a.createElement("div",{className:W.a.inputFileWrap},c.a.createElement("input",{type:"file",id:"avatarImage",className:W.a.inputFile,onChange:function(e){e.target.files.length&&r(e.target.files[0])}}),c.a.createElement("label",{htmlFor:"avatarImage"},"Choose a photo")),c.a.createElement("div",{className:W.a.imgWrap},c.a.createElement("img",{className:W.a.avatar,src:t.photos.large||"./img/list-users.png",alt:"avatar"})))),u?c.a.createElement(F,{initialValues:t,profile:t,status:a,updateStatus:n,isOwner:o,onSubmit:function(e){l(e).then((function(){f(!1)}))}}):c.a.createElement(B,{profile:t,status:a,updateStatus:n,isOwner:o,goToEditMode:function(){f(!0)}}))},T=function(e){return c.a.createElement("div",{className:f.a.profilePageWrap},c.a.createElement(A,{savePhoto:e.savePhoto,isOwner:e.isOwner,profile:e.profile,status:e.status,saveProfile:e.saveProfile,updateStatus:e.updateStatus}),c.a.createElement(j,null))},M=a(22),U=a(66),V=a(12),D=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(o.a)(t,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,a){this.props.match.params.userId!=e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return c.a.createElement(T,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,isAuth:this.props.isAuth,savePhoto:this.props.savePhoto,saveProfile:this.props.saveProfile}))}}]),t}(c.a.Component);t.default=Object(V.d)(Object(m.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:p.d,getStatus:p.c,updateStatus:p.g,savePhoto:p.e,saveProfile:p.f}),M.f,U.a)(D)}}]);
//# sourceMappingURL=4.c286fc4a.chunk.js.map