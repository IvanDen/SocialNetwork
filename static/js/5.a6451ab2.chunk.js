(this.webpackJsonpSocialNetwork=this.webpackJsonpSocialNetwork||[]).push([[5],{241:function(e,a,t){"use strict";t.d(a,"b",(function(){return n})),t.d(a,"a",(function(){return r}));var n=function(e){if(!e)return"Field is required"},r=function(e){return function(a){if(a.length>e)return"Max length is ".concat(e," symbols")}}},242:function(e,a,t){"use strict";t.d(a,"b",(function(){return m})),t.d(a,"a",(function(){return u})),t.d(a,"c",(function(){return d}));var n=t(64),r=t(0),s=t.n(r),c=t(243),o=t.n(c),l=(t(241),t(119)),i=function(e){e.input;var a=e.meta,t=a.touched,r=a.error,c=e.children,l=(Object(n.a)(e,["input","meta","children"]),t&&r);return s.a.createElement("div",{className:o.a.formControl+" "+(l?o.a.error:"")},s.a.createElement("div",{className:o.a.inputWrap},c),l&&s.a.createElement("span",null,r))},m=function(e){var a=e.input,t=(e.meta,e.child,e.element,Object(n.a)(e,["input","meta","child","element"]));return s.a.createElement(i,e,s.a.createElement("textarea",Object.assign({},a,t)))},u=function(e){var a=e.input,t=(e.meta,e.child,e.element,Object(n.a)(e,["input","meta","child","element"]));return s.a.createElement(i,e,s.a.createElement("input",Object.assign({},a,t)))},d=function(e,a,t,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return s.a.createElement("div",{className:o.a.formControlWrap},s.a.createElement(l.a,Object.assign({placeholder:e,name:a,component:t,validate:n},r))," ",c)}},243:function(e,a,t){e.exports={formControlWrap:"FormsControls_formControlWrap__gyDky",inputWrap:"FormsControls_inputWrap__go7U1",formControl:"FormsControls_formControl__3GIpO",error:"FormsControls_error__2z09f"}},263:function(e,a,t){e.exports={dialogsWrap:"Dialogs_dialogsWrap__2_mfn",listWrap:"Dialogs_listWrap__24j0A",list:"Dialogs_list__2owHD",chat:"Dialogs_chat__2wr4l",sendWrap:"Dialogs_sendWrap__3EHBX",message:"Dialogs_message__3Vja0",my:"Dialogs_my__330MI",avatar:"Dialogs_avatar__3BV8p"}},264:function(e,a,t){e.exports={items:"People_items__d7RQO",active:"People_active__3NVLP"}},265:function(e,a,t){e.exports={chat:"Chat_chat__33Csi",message:"Chat_message__1rMIj",avaWrap:"Chat_avaWrap__3fuP8",my:"Chat_my__29wrr",avatar:"Chat_avatar__2AGW9",messageText:"Chat_messageText__fEIca"}},313:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(82),c=t(263),o=t.n(c),l=t(264),i=t.n(l),m=t(4),u=function(e){var a="/dialogs/"+e.id;return r.a.createElement("div",{className:i.a.items},r.a.createElement(m.b,{to:a,activeClassName:i.a.active},e.userName))},d=t(265),_=t.n(d),p=function(e){return r.a.createElement("div",{className:_.a.message},r.a.createElement("div",{className:_.a.avaWrap},r.a.createElement("img",{className:_.a.avatar,src:"./img/posts-user.png",alt:"avatar"}),r.a.createElement("span",null,e.userName)),r.a.createElement("span",{className:_.a.messageText},e.chatText))},g=function(e){return r.a.createElement("div",{className:"".concat(_.a.message," ").concat(_.a.my)},r.a.createElement("span",{className:"".concat(_.a.messageText," ").concat(_.a.my)},e.chatText),r.a.createElement("div",{className:_.a.avaWrap},r.a.createElement("img",{className:"".concat(_.a.avatar,"  ").concat(_.a.my),src:"./img/myAvatar.png",alt:"avatar"}),r.a.createElement("span",null,"Me")))},f=t(119),v=t(120),h=t(242),E=t(241),b=Object(E.a)(50),N=Object(v.a)({form:"dialogAddMessageForm"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit,className:o.a.sendWrap},r.a.createElement(f.a,{component:h.b,name:"newMessageBody",placeholder:"your message",validate:[E.b,b],value:e.newChatText}),r.a.createElement("button",{className:"button"},"Send massage"))})),C=function(e){var a=e.dialogsPage,t=a.dialogs.map((function(e){return r.a.createElement(u,{id:e.id,key:e.id,userName:e.name})})),n=a.messages.map((function(e){return r.a.createElement(p,{id:e.id,chatText:e.message,key:e.id})})),s=a.messagesMe.map((function(e){return r.a.createElement(g,{chatText:e.message,key:e.id})}));r.a.createRef();return r.a.createElement("div",{className:o.a.dialogsWrap},r.a.createElement("div",{className:o.a.listWrap},r.a.createElement("h1",null,"DIALOGS"),r.a.createElement("div",{className:o.a.list},t)),r.a.createElement("div",{className:o.a.chat},n,s,r.a.createElement(N,{onSubmit:function(a){console.log(a.newMessageBody),function(a){a?e.sendTextChat(a):alert("enter your text!")}(a.newMessageBody)}})))},W=t(19),y=t(66),x=t(12);a.default=Object(x.d)(Object(W.b)((function(e){return{dialogsPage:e.dialogsPage}}),{sendTextChat:s.b}),y.a)(C)}}]);
//# sourceMappingURL=5.a6451ab2.chunk.js.map