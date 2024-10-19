"use strict";(self.webpackChunkmattermost_webapp=self.webpackChunkmattermost_webapp||[]).push([[1504],{87872:(e,t,n)=>{n.d(t,{Q:()=>c,h8:()=>d,x4:()=>i}),n(61418);var a=n(22850),r=n(10883),o=n(17554),l=n(92087),s=n(80139);function i(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return async i=>{i({type:r.bZ.LOGIN_REQUEST,data:null});try{const o=await s.je.login(e,t,n);i((0,a.$C)([{type:r.bZ.LOGIN_SUCCESS},{type:r.bZ.RECEIVED_ME,data:o}])),i((0,l.k3)(o.roles.split(" ")))}catch(e){return i({type:r.bZ.LOGIN_FAILURE,error:e}),i((0,o.H)(e)),{error:e}}return{data:!0}}}function c(e){return async t=>{t({type:r.bZ.LOGIN_REQUEST,data:null});try{const n=await s.je.loginWithDesktopToken(e);t((0,a.$C)([{type:r.bZ.LOGIN_SUCCESS},{type:r.bZ.RECEIVED_ME,data:n}])),t((0,l.k3)(n.roles.split(" ")))}catch(e){return t({type:r.bZ.LOGIN_FAILURE,error:e}),t((0,o.H)(e)),{error:e}}return{data:!0}}}function d(e,t){return async n=>{n({type:r.bZ.LOGIN_REQUEST,data:null});try{const o=await s.je.loginById(e,t,"");n((0,a.$C)([{type:r.bZ.LOGIN_SUCCESS},{type:r.bZ.RECEIVED_ME,data:o}])),n((0,l.k3)(o.roles.split(" ")))}catch(e){return n({type:r.bZ.LOGIN_FAILURE,error:e}),n((0,o.H)(e)),{error:e}}return{data:!0}}}},8120:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(23615),r=n.n(a),o=(n(52077),n(83526),n(14078),n(68581),n(61418),n(40895),n(70684),n(911),n(60042)),l=n.n(o),s=n(32337),i=n(84390),c=n.n(i),d=n(72060),u=n(70314),p=n(9448),g=n(87872),m=n(7709);const E="desktop_auth_client_token";var h=function(e){return e[e.None=0]="None",e[e.WaitingForBrowser=1]="WaitingForBrowser",e[e.LoggedIn=2]="LoggedIn",e[e.Authenticating=3]="Authenticating",e[e.Error=4]="Error",e}(h||{});const f=e=>{let{href:t,onLogin:n}=e;const a=(0,u.useDispatch)(),r=(0,p.useHistory)(),{search:o}=(0,p.useLocation)(),f=new URLSearchParams(o),w=f.get("server_token"),L=f.get("client_token"),v=sessionStorage.getItem(E),[C,k]=(0,i.useState)(w?h.LoggedIn:h.None),[M,b]=(0,i.useState)(),_=()=>{const e=new URL(window.location.href);let t="mattermost";e.searchParams.get("isDesktopDev")&&(t="mattermost-dev"),window.location.href=e.toString().replace(e.protocol,"".concat(t,":"))};let R,y,I;return(0,i.useEffect)((()=>{b(!1);const e=setTimeout((()=>{b(!0)}),1e4);return()=>{clearTimeout(e)}}),[C]),(0,i.useEffect)((()=>{w?v?(async()=>{if(!w||L!==v)return void k(h.Error);sessionStorage.removeItem(E);const{error:e}=await a((0,g.Q)(w));e&&e.server_error_id&&0!==e.server_error_id.length?k(h.Error):(k(h.LoggedIn),await n())})():_():(async()=>{const e="".concat(m.Z.isDev()?"dev-":"").concat(s.randomBytes(32).toString("hex")).slice(0,64);sessionStorage.setItem(E,e);const n=new URL(t),a=new URLSearchParams(n.searchParams);a.set("desktop_token",e),window.open("".concat(n.origin).concat(n.pathname,"?").concat(a.toString())),k(h.WaitingForBrowser)})()}),[w]),C===h.WaitingForBrowser&&(R=c().createElement(d.FormattedMessage,{id:"desktop_auth_token.polling.redirectingToBrowser",defaultMessage:"Redirecting to browser..."}),y=c().createElement(d.FormattedMessage,{id:"desktop_auth_token.polling.awaitingToken",defaultMessage:"Authenticating in the browser, awaiting valid token."}),I=null),C===h.LoggedIn&&(R=c().createElement(d.FormattedMessage,{id:"desktop_auth_token.complete.youAreNowLoggedIn",defaultMessage:"You are now logged in"}),y=c().createElement(d.FormattedMessage,{id:"desktop_auth_token.complete.openMattermost",defaultMessage:"Click on <b>Open Mattermost</b> in the browser prompt to <a>launch the desktop app</a>",values:{a:e=>c().createElement("a",{onClick:_},e),b:e=>c().createElement("b",null,e)}}),I=c().createElement(d.FormattedMessage,{id:"desktop_auth_token.complete.havingTrouble",defaultMessage:"Having trouble logging in? <a>Open Mattermost in your browser</a>",values:{a:e=>c().createElement("a",{onClick:()=>r.push("/")},e)}})),C===h.Error&&(R=c().createElement(d.FormattedMessage,{id:"desktop_auth_token.error.somethingWentWrong",defaultMessage:"Something went wrong"}),y=c().createElement(d.FormattedMessage,{id:"desktop_auth_token.error.restartFlow",defaultMessage:"Click <a>here</a> to try again.",values:{a:e=>c().createElement("a",{onClick:()=>r.push("/")},e)}}),I=null),c().createElement("div",{className:"DesktopAuthToken"},c().createElement("h1",{className:"DesktopAuthToken__main"},R),c().createElement("p",{className:l()("DesktopAuthToken__sub",{complete:C===h.LoggedIn})},y),c().createElement("div",{className:"DesktopAuthToken__bottom"},M?I:null))};f.propTypes={href:r().string.isRequired,onLogin:r().func.isRequired};const w=f},84857:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(23615),r=n.n(a),o=n(60042),l=n.n(o),s=n(84390),i=n.n(s);const c=e=>{let{id:t,url:n,icon:a,label:r,style:o,direction:s="row",onClick:c}=e;return i().createElement("a",{id:t,className:l()("external-login-button",{"direction-column":"column"===s},t),href:n,style:o,onClick:c},a,i().createElement("span",{className:"external-login-button-label"},r))};c.propTypes={id:r().string.isRequired,url:r().string.isRequired,icon:r().node.isRequired,label:r().string.isRequired,direction:r().oneOf(["row","column"]),onClick:r().func.isRequired};const d=c},58259:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(23615),r=n.n(a),o=(n(52077),n(83526),n(60042)),l=n.n(o),s=n(84390),i=n.n(s),c=n(9448);const d=e=>{let{className:t,onClick:n=(()=>{}),alternateMessage:a,alternateLinkPath:r,alternateLinkLabel:o}=e;return a||r||o?i().createElement("div",{className:l()("alternate-link",t),"data-testid":"alternate-link"},a&&i().createElement("span",{className:"alternate-link__message"},a),r&&o&&i().createElement(c.Link,{className:"alternate-link__link",to:{pathname:r,search:location.search},onClick:n},o)):null};d.propTypes={className:r().string,onClick:r().func,alternateMessage:r().string,alternateLinkPath:r().string,alternateLinkLabel:r().string};const u=d},41513:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(23615),r=n.n(a),o=n(84390),l=n.n(o),s=n(23712);const i=e=>{let{title:t,message:n,SVGElement:a,extraContent:r,onEnterKeyDown:o}=e;return l().createElement("div",{className:"content-layout-column",onKeyDown:e=>{o&&e.key===s.default.KeyCodes.ENTER[0]&&o(e)},tabIndex:0},l().createElement("div",{className:"content-layout-column-svg"},a),l().createElement("h1",{className:"content-layout-column-title"},t),l().createElement("p",{className:"content-layout-column-message"},n),r&&l().createElement("div",{className:"content-layout-column-extra-content"},r))};i.propTypes={title:r().node.isRequired,message:r().node.isRequired,SVGElement:r().node,extraContent:r().node,onEnterKeyDown:r().func};const c=i},79599:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(23615),r=n.n(a),o=(n(14078),n(84390)),l=n.n(o);const s=e=>{let{words:t,typingSpeed:n=150,pauseDuration:a=1e3}=e;const[r,s]=(0,o.useState)(""),[i,c]=(0,o.useState)(!1),[d,u]=(0,o.useState)(0),[p,g]=(0,o.useState)(0);return(0,o.useEffect)((()=>{const e=setTimeout((()=>{const e=t[d];i?p>0?(s(e.substring(0,p-1)),g(p-1)):(c(!1),u((d+1)%t.length)):p<e.length?(s(e.substring(0,p+1)),g(p+1)):setTimeout((()=>c(!0)),a)}),n);return()=>clearTimeout(e)}),[p,i,d,t,n,a]),l().createElement("span",null,r,l().createElement("span",{className:"cursor"},"|"))};s.propTypes={words:r().arrayOf(r().string).isRequired,typingSpeed:r().number,pauseDuration:r().number};const i=s},32752:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(84390),r=n.n(a),o=n(72060);function l(e){const{formatMessage:t}=(0,o.useIntl)();return r().createElement("span",e,r().createElement("svg",{width:"12px",height:"13px",viewBox:"0 0 13 15",role:"presentation","aria-label":t({id:"generic_icons.channel.private",defaultMessage:"Private Channel Icon"})},r().createElement("g",{stroke:"none",strokeWidth:"1",fill:"inherit",fillRule:"evenodd"},r().createElement("g",{transform:"translate(-116.000000, -175.000000)",fillRule:"nonzero",fill:"inherit"},r().createElement("g",{transform:"translate(95.000000, 0.000000)"},r().createElement("g",{transform:"translate(20.000000, 113.000000)"},r().createElement("g",{transform:"translate(1.000000, 62.000000)"},r().createElement("path",{d:"M12.0714286,6.5 L11.1428571,6.5 L11.1428571,4.64285714 C11.1428571,2.07814286 9.06471429,0 6.5,0 C3.93528571,0 1.85714286,2.07814286 1.85714286,4.64285714 L1.85714286,6.5 L0.928571429,6.5 C0.415071429,6.5 0,7.00792857 0,7.52142857 L0,13.9285714 C0,14.4420714 0.415071429,14.8571429 0.928571429,14.8571429 L12.0714286,14.8571429 C12.5849286,14.8571429 13,14.4420714 13,13.9285714 L13,7.52142857 C13,7.00792857 12.5849286,6.5 12.0714286,6.5 Z M6.5,1.85714286 C8.03585714,1.85714286 9.28571429,3.107 9.28571429,4.64285714 L9.28571429,6.5 L8.35714286,6.5 L4.64285714,6.5 L3.71428571,6.5 L3.71428571,4.64285714 C3.71428571,3.107 4.96414286,1.85714286 6.5,1.85714286 Z"}))))))))}},32473:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(84390),r=n.n(a),o=n(72060);function l(e){const{formatMessage:t}=(0,o.useIntl)();return r().createElement("span",e,r().createElement("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-label":t({id:"generic_icons.login.gitlab",defaultMessage:"Gitlab Icon"})},r().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.83325 15.4909L11.7793 6.45337H5.88745L8.83334 15.4909H8.83325Z",fill:"#E24329"}),r().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.83339 15.4909L5.88737 6.45337H1.75854L8.83347 15.4908L8.83339 15.4909Z",fill:"#FC6D26"}),r().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.75846 6.45329L0.863125 9.19966C0.781518 9.45021 0.870921 9.72467 1.08477 9.87941L8.83325 15.4908L1.75846 6.45325V6.45329Z",fill:"#FCA326"}),r().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.75859 6.45333H5.88742L4.11296 1.01011C4.02169 0.73003 3.62418 0.73003 3.53296 1.01011L1.75854 6.45333H1.75859Z",fill:"#E24329"}),r().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.83325 15.4909L11.7793 6.45337H15.9081L8.83334 15.4908L8.83325 15.4909Z",fill:"#FC6D26"}),r().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.908 6.45329L16.8034 9.19966C16.885 9.45021 16.7956 9.72467 16.5817 9.87941L8.83325 15.4908L15.908 6.45325V6.45329Z",fill:"#FCA326"}),r().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.9081 6.45333H11.7793L13.5538 1.01011C13.6451 0.73003 14.0426 0.73003 14.1338 1.01011L15.9082 6.45333H15.9081Z",fill:"#E24329"})))}},78641:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(84390),r=n.n(a),o=n(72060);function l(e){const{formatMessage:t}=(0,o.useIntl)();return r().createElement("span",e,r().createElement("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-label":t({id:"generic_icons.login.google",defaultMessage:"Google Icon"})},r().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.5787 8.16364C15.5787 7.6531 15.5329 7.16219 15.4478 6.69092H8.66675V9.47601H12.5417C12.3747 10.376 11.8675 11.1386 11.1049 11.6491V13.4556H13.4318C14.7933 12.2022 15.5787 10.3564 15.5787 8.16364Z",fill:"#4285F4"}),r().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.66685 15.2C10.6108 15.2 12.2407 14.5553 13.4319 13.4557L11.105 11.6491C10.4603 12.0811 9.63558 12.3364 8.66685 12.3364C6.79158 12.3364 5.2043 11.0699 4.63812 9.36804H2.23267V11.2335C3.41739 13.5866 5.8523 15.2 8.66685 15.2Z",fill:"#34A853"}),r().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.63807 9.36806C4.49407 8.93606 4.41225 8.4746 4.41225 8.00006C4.41225 7.52551 4.49407 7.06406 4.63807 6.63206V4.7666H2.23261C1.74498 5.7386 1.4668 6.83824 1.4668 8.00006C1.4668 9.16187 1.74498 10.2615 2.23261 11.2335L4.63807 9.36806Z",fill:"#FBBC05"}),r().createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.66685 3.66369C9.72394 3.66369 10.673 4.02696 11.4192 4.74041L13.4843 2.67532C12.2374 1.5135 10.6076 0.800049 8.66685 0.800049C5.8523 0.800049 3.41739 2.4135 2.23267 4.76659L4.63812 6.63205C5.2043 4.93023 6.79158 3.66369 8.66685 3.66369Z",fill:"#EA4335"})))}},66392:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(84390),r=n.n(a),o=n(72060);function l(e){const{formatMessage:t}=(0,o.useIntl)();return r().createElement("span",e,r().createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-label":t({id:"generic_icons.login.oneLogin",defaultMessage:"One Login Icon"})},r().createElement("path",{d:"M1.25 12.5V3.50005L10.25 0.872048L14.75 2.00605V13.616L9.872 15.128L2.006 12.5L10.25 13.616V2.74405L4.256 4.25605V11.366L1.25 12.5Z",fill:"#DC3C00"})))}},30311:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(84390),r=n.n(a),o=n(72060);function l(e){const{formatMessage:t}=(0,o.useIntl)();return r().createElement("span",e,r().createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-label":t({id:"generic_icons.login.openid",defaultMessage:"OpenID Icon"})},r().createElement("path",{d:"M7.19995 1.2V15.2L9.59995 14V0L7.19995 1.2Z",fill:"#F48018"}),r().createElement("path",{d:"M15.6652 5.3302L16.0001 8.80002L11.313 7.85391",fill:"#AEB0B3"}),r().createElement("path",{d:"M10 4.61206V6.19484C11.015 6.37555 12.0439 6.71905 12.768 7.17939L14.4821 6.09046C13.3141 5.34815 11.686 4.82159 10 4.61206ZM2.42378 9.90251C2.42378 8.13669 4.2954 6.64895 6.84567 6.19484V4.61206C2.94414 5.09733 0 7.28065 0 9.90251C0 12.5244 3.08942 14.8262 7.2 15.2V13.6001C4.43386 13.2433 2.42378 11.7657 2.42378 9.90251Z",fill:"#AEB0B3"})))}},57058:(e,t,n)=>{n.d(t,{Z:()=>d}),n(14078);var a=n(60042),r=n.n(a),o=n(84390),l=n.n(o),s=n(72060),i=n(23712),c=n(83398);const d=l().forwardRef(((e,t)=>{let{className:n,value:a,onChange:d,onBlur:u,onFocus:p,hasError:g,info:m,error:E,createMode:h,disabled:f,inputSize:w}=e;const{formatMessage:L}=(0,s.useIntl)(),[v,C]=(0,o.useState)(!1),k=E?{type:i.Ms.ERROR,value:E}:null,M=m?{type:i.Ms.INFO,value:m}:null,b=E?k:M,_=L(h?{id:"widget.passwordInput.createPassword",defaultMessage:"Choose a Password"}:{id:"widget.passwordInput.password",defaultMessage:"Password"});return l().createElement(c.Z,{className:r()("password-input",n),wrapperClassName:"password-input-with-toggle",name:"password-input",type:v&&!f?"text":"password",inputSize:w,addon:l().createElement("button",{id:"password_toggle",type:"button","aria-label":L({id:"widget.passwordInput.passwordToggle",defaultMessage:"Show or hide password"}),className:"password-input-toggle",onClick:()=>C(!v),disabled:f},l().createElement("i",{className:v&&!f?"icon-eye-off-outline":"icon-eye-outline"})),value:a,onChange:d,onBlur:u,onFocus:p,placeholder:_,hasError:g,customMessage:E||m?b:void 0,disabled:f,ref:t})}))},68904:(e,t,n)=>{e.exports=n.p+"files/2e9ec0bc2b175a60d8da.png"},59080:(e,t,n)=>{e.exports=n.p+"files/eb5c6445911d053a05d9.png"},15803:(e,t,n)=>{e.exports=n.p+"files/ae3559af12135f7feaf9.png"},88143:(e,t,n)=>{e.exports=n.p+"files/7549474e238753291abc.png"}}]);
//# sourceMappingURL=1504.6c399cfb94470d58d43a.js.map