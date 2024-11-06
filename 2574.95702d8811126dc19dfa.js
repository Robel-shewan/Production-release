"use strict";(self.webpackChunkmattermost_webapp=self.webpackChunkmattermost_webapp||[]).push([[2574],{80806:(e,t,a)=>{a.d(t,{Z:()=>f});var n=a(23615),l=a.n(n),s=(a(20266),a(14078),a(52077),a(911),a(84390)),r=a.n(s),o=a(72060),i=a(70314),c=a(11298),u=a(83398),d=a(60042),m=a.n(d),p=a(34575),C=a(41894);function h(e){let{base:t,path:a,pathInfo:n,limit:l,maxLength:i,shortenLength:c,error:d,className:h,onChange:g,onBlur:E}=e;const{formatMessage:N}=(0,o.useIntl)(),[_,f]=(0,s.useState)(!1);(0,s.useEffect)((()=>{d&&f(!0)}),[d]);const b="".concat(t,"/").concat(a?"".concat(a,"/"):""),v="".concat(b).concat(_?"":n),L=c&&v.length>c,M=Boolean(d),w=r().createElement("span",{className:"url-input-label","data-testid":"urlInputLabel"},N({id:"url_input.label.url",defaultMessage:"URL: "}),L?(0,C.ZC)(v,c):v);return r().createElement("div",{className:m()("url-input-main",h)},r().createElement("div",{className:"url-input-container"},L?r().createElement(p.Z,{id:"urlTooltip",title:v,placement:"top"},w):w,(_||M)&&r().createElement(u.Z,{"data-testid":"channelURLInput",name:"url-input",type:"text",containerClassName:"url-input-editable-container",wrapperClassName:"url-input-editable-wrapper",inputClassName:"url-input-editable-path",autoFocus:!0,autoComplete:"off",value:n,limit:l,maxLength:i,hasError:M,onChange:e=>{e.preventDefault(),g&&g(e)},onBlur:e=>{e.preventDefault(),f(M),E&&E(e)}}),r().createElement("button",{className:m()("url-input-button",{disabled:M}),disabled:M,onClick:()=>{M||f(!_)}},r().createElement("span",{className:"url-input-button-label"},N(_?{id:"url_input.buttonLabel.done",defaultMessage:"Done"}:{id:"url_input.buttonLabel.edit",defaultMessage:"Edit"})))),d&&r().createElement("div",{className:"url-input-error"},r().createElement("i",{className:"icon icon-alert-outline"}),r().createElement("span",null,d)))}h.propTypes={base:l().string.isRequired,path:l().string,pathInfo:l().string.isRequired,limit:l().number,maxLength:l().number,shortenLength:l().number,error:l().string,className:l().string,onChange:l().func,onBlur:l().func};const g=h;var E=a(23712),N=a(70174);const _=e=>{var t;const a=(0,o.useIntl)(),{formatMessage:n}=a,l=(0,s.useRef)(!1),[d,m]=(0,s.useState)(""),p=(0,s.useRef)(""),h=(0,s.useRef)(!1),[_,f]=(0,s.useState)(""),[b,v]=(0,s.useState)(""),[L,M]=(0,s.useState)(null),w=null===(t=(0,i.useSelector)(c.kA))||void 0===t?void 0:t.name,A=e.team?e.team.name:w,S=(0,s.useCallback)((t=>{t.preventDefault();const{target:{value:a}}=t,n=function(e){const t=[],a=e.trim();return a.length<E.default.MIN_CHANNELNAME_LENGTH&&t.push((0,N._u)("channel_modal.name.longer","Channel names must have at least 2 characters.")),a.length>E.default.MAX_CHANNELNAME_LENGTH&&t.push((0,N._u)("channel_modal.name.shorter","Channel names must have maximum 64 characters.")),t}(a);if(m(n.length?n[n.length-1]:""),p.current=a,e.onDisplayNameChange(a),!h.current){const t=(0,C.oK)(a);f(t),v(""),e.onURLChange(t)}}),[e.onDisplayNameChange,e.onURLChange]),T=(0,s.useCallback)((()=>{if(p.current&&!_){const t=(0,N.GD)();f(t),e.onURLChange(t)}l.current||(l.current=!0,M(null))}),[e.onURLChange,p.current,_,l]),R=(0,s.useCallback)((t=>{t.preventDefault();const{target:{value:n}}=t,l=n.toLowerCase().replace(/\s/g,"-"),s=(0,C.pj)(l,a);v(s.length?s[s.length-1]:""),f(l),h.current=!0,e.onURLChange(l)}),[e.onURLChange]);return(0,s.useEffect)((()=>{e.onErrorStateChange&&e.onErrorStateChange(Boolean(d)||Boolean(b))}),[d,b]),r().createElement(r().Fragment,null,r().createElement(u.Z,{type:"text",autoComplete:"off",autoFocus:!1!==e.autoFocus,required:!0,name:e.name,containerClassName:"".concat(e.name,"-container"),inputClassName:"".concat(e.name,"-input channel-name-input-field"),label:n({id:"channel_modal.name.label",defaultMessage:"Channel name"}),placeholder:e.placeholder,limit:E.default.MAX_CHANNELNAME_LENGTH,value:e.value,customMessage:L,onChange:S,onBlur:T}),r().createElement(g,{className:"new-channel-modal__url",base:(0,C.fO)(),path:"".concat(A,"/channels"),pathInfo:_,limit:E.default.MAX_CHANNELNAME_LENGTH,shortenLength:E.default.DEFAULT_CHANNELURL_SHORTEN_LENGTH,error:b||e.urlError,onChange:R}))};_.propTypes={value:l().string.isRequired,name:l().string.isRequired,placeholder:l().string.isRequired,onDisplayNameChange:l().func.isRequired,onURLChange:l().func.isRequired,autoFocus:l().bool,onErrorStateChange:l().func,urlError:l().string};const f=_},78892:(e,t,a)=>{a.r(t),a.d(t,{default:()=>I,getChannelTypeFromPermissions:()=>k}),a(14078),a(61418);var n=a(60042),l=a.n(n),s=a(84390),r=a.n(s),o=a(72060),i=a(70314),c=a(6098),u=a(84517),d=a(73443),m=a(52173),p=a(82),C=a(83905),h=a(84073),g=a(11298),E=a(9828),N=a(40364),_=a(80806),f=a(23615),b=a.n(f);function v(e){const{formatMessage:t}=(0,o.useIntl)();return r().createElement("span",e,r().createElement("svg",{width:"22",height:"22",viewBox:"0 0 22 22",xmlns:"http://www.w3.org/2000/svg","aria-label":t({id:"generic_icons.check.circle",defaultMessage:"Check Circle Icon"})},r().createElement("path",{d:"M11 0.992024C9.192 0.992024 7.512 1.44802 5.96 2.36002C4.44 3.24002 3.24 4.44002 2.36 5.96002C1.448 7.51202 0.992 9.19202 0.992 11C0.992 12.808 1.448 14.488 2.36 16.04C3.24 17.56 4.44 18.76 5.96 19.64C7.512 20.552 9.192 21.008 11 21.008C12.808 21.008 14.488 20.552 16.04 19.64C17.56 18.76 18.76 17.56 19.64 16.04C20.552 14.488 21.008 12.808 21.008 11C21.008 9.19202 20.552 7.51202 19.64 5.96002C18.76 4.44002 17.56 3.24002 16.04 2.36002C14.488 1.44802 12.808 0.992024 11 0.992024ZM9.248 15.68L7.832 14.288L5 11.456L6.416 10.04L9.248 12.872L15.608 6.48802L17.024 7.90402L9.248 15.68Z"})))}function L(e){const{formatMessage:t}=(0,o.useIntl)();return r().createElement("span",e,r().createElement("svg",{width:"40",height:"40",viewBox:"0 0 40 40",xmlns:"http://www.w3.org/2000/svg","aria-label":t({id:"generic_icons.globe.circleSolid",defaultMessage:"Globe Circle Solid Icon"})},r().createElement("rect",{width:"40",height:"40",rx:"20",fillOpacity:"0.08"}),r().createElement("path",{d:"M20 8.31042C17.8304 8.31042 15.8144 8.85762 13.952 9.95202C12.1472 11.0272 10.7072 12.4672 9.632 14.272C8.5376 16.1344 7.9904 18.1504 7.9904 20.32C7.9904 22.4896 8.5376 24.5056 9.632 26.368C10.7072 28.1728 12.1472 29.6128 13.952 30.688C15.8144 31.7824 17.8304 32.3296 20 32.3296C22.1696 32.3296 24.1856 31.7824 26.048 30.688C27.8528 29.6128 29.2928 28.1728 30.368 26.368C31.4624 24.5056 32.0096 22.4896 32.0096 20.32C32.0096 18.1504 31.4624 16.1344 30.368 14.272C29.2928 12.4672 27.8528 11.0272 26.048 9.95202C24.1856 8.85762 22.1696 8.31042 20 8.31042ZM29.5904 20.9248C29.3792 21.2128 28.8896 21.5296 28.1216 21.8752C27.1616 22.2976 26.0576 22.6144 24.8096 22.8256V18.7648C26.5184 18.4576 27.8336 18.0928 28.7552 17.6704C28.7936 17.632 28.8704 17.5936 28.9856 17.5552C29.12 17.5168 29.2064 17.4784 29.2448 17.44C29.4752 18.2656 29.5904 19.2256 29.5904 20.32V20.9248ZM18.2144 25.5904C18.4064 25.5904 18.6944 25.6096 19.0784 25.648C19.4816 25.6864 19.7888 25.7056 20 25.7056C20.8064 25.7056 21.4112 25.6672 21.8144 25.5904C21.5264 26.7424 21.2096 27.7024 20.864 28.4704C20.5568 29.1616 20.2688 29.6032 20 29.7952C19.712 29.584 19.4144 29.1424 19.1072 28.4704C18.7232 27.664 18.4256 26.704 18.2144 25.5904ZM20 23.3152C18.9632 23.3152 18.2048 23.2768 17.7248 23.2C17.7248 22.9312 17.7056 22.5088 17.6672 21.9328C17.6288 21.2416 17.6096 20.704 17.6096 20.32V18.9952C18.1664 19.072 18.9632 19.1104 20 19.1104C21.0368 19.1104 21.8336 19.072 22.3904 18.9952V20.32C22.3904 20.704 22.3712 21.2416 22.3328 21.9328C22.2944 22.5088 22.2752 22.9312 22.2752 23.2C21.7952 23.2768 21.0368 23.3152 20 23.3152ZM22.16 16.6048C21.68 16.6816 20.96 16.72 20 16.72C19.04 16.72 18.32 16.6816 17.84 16.6048C18.0704 15.0688 18.416 13.7248 18.8768 12.5728C19.2608 11.6128 19.6352 10.9984 20 10.7296C20.3648 10.9984 20.7392 11.6128 21.1232 12.5728C21.584 13.7248 21.9296 15.0688 22.16 16.6048ZM28.1504 15.28C27.536 15.5296 27.0272 15.7216 26.624 15.856C25.9328 16.0864 25.2416 16.2496 24.5504 16.3456C24.4352 15.424 24.2624 14.5216 24.032 13.6384C23.8016 12.7552 23.5424 11.9776 23.2544 11.3056C25.3472 12.0544 26.9792 13.3792 28.1504 15.28ZM11.8496 15.28C12.464 14.3392 13.184 13.5424 14.0096 12.8896C14.8736 12.1792 15.8336 11.6512 16.8896 11.3056C16.2752 12.6496 15.7952 14.3296 15.4496 16.3456C13.9712 16.0192 12.7712 15.664 11.8496 15.28ZM10.8704 17.44C10.928 17.4784 11.0144 17.5264 11.1296 17.584L11.36 17.6704C12.3968 18.1312 13.7216 18.496 15.3344 18.7648C15.2768 18.976 15.2384 19.216 15.2192 19.4848C15.2 19.6576 15.1904 19.936 15.1904 20.32C15.1904 21.4336 15.2384 22.2688 15.3344 22.8256C14.0864 22.6144 12.9824 22.2976 12.0224 21.8752C11.2352 21.5296 10.736 21.2128 10.5248 20.9248V20.32C10.4672 19.84 10.4672 19.3408 10.5248 18.8224C10.5824 18.304 10.6976 17.8432 10.8704 17.44ZM11.2448 24.1504C12.7424 24.7456 14.2208 25.1488 15.68 25.36C15.872 26.6464 16.2752 27.9616 16.8896 29.3056C15.6224 28.8832 14.4992 28.2208 13.52 27.3184C12.5408 26.416 11.7824 25.36 11.2448 24.1504ZM28.7552 24.1504C28.2176 25.36 27.4592 26.416 26.48 27.3184C25.5008 28.2208 24.3776 28.8832 23.1104 29.3056C23.7248 27.9616 24.128 26.6464 24.32 25.36C26.2208 25.0912 27.6992 24.688 28.7552 24.1504Z"})))}function M(e){const{formatMessage:t}=(0,o.useIntl)();return r().createElement("span",e,r().createElement("svg",{width:"40",height:"40",viewBox:"0 0 40 40",xmlns:"http://www.w3.org/2000/svg","aria-label":t({id:"generic_icons.lock.circleSolid",defaultMessage:"Lock Circle Solid Icon"})},r().createElement("rect",{width:"40",height:"40",rx:"20",fillOpacity:"0.08"}),r().createElement("path",{d:"M27.2 29.9104V19.1104H12.8V29.9104H27.2ZM27.2 16.72C27.872 16.72 28.4384 16.9504 28.8992 17.4112C29.36 17.872 29.5904 18.4384 29.5904 19.1104V29.9104C29.5904 30.5824 29.3504 31.1488 28.8704 31.6096C28.4096 32.0896 27.8528 32.3296 27.2 32.3296H12.8C12.1472 32.3296 11.5808 32.0896 11.1008 31.6096C10.64 31.1488 10.4096 30.5824 10.4096 29.9104V19.1104C10.4096 18.4384 10.64 17.872 11.1008 17.4112C11.5808 16.9504 12.1472 16.72 12.8 16.72H14.0096V14.3296C14.0096 13.216 14.2688 12.208 14.7872 11.3056C15.3248 10.384 16.0448 9.65442 16.9472 9.11682C17.8688 8.57922 18.8864 8.31042 20 8.31042C21.1136 8.31042 22.1216 8.57922 23.024 9.11682C23.9456 9.65442 24.6656 10.384 25.184 11.3056C25.7216 12.208 25.9904 13.216 25.9904 14.3296V16.72H27.2ZM20 10.7296C19.328 10.7296 18.7136 10.8928 18.1568 11.2192C17.6192 11.5264 17.1872 11.9584 16.8608 12.5152C16.5536 13.0528 16.4 13.6576 16.4 14.3296V16.72H23.6V14.3296C23.6 13.6576 23.4368 13.0528 23.1104 12.5152C22.8032 11.9584 22.3712 11.5264 21.8144 11.2192C21.2768 10.8928 20.672 10.7296 20 10.7296Z"})))}function w(e){const{formatMessage:t}=(0,o.useIntl)();return r().createElement("span",e,r().createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:"100%",height:"100%",viewBox:"2 2 20 20",role:"img","aria-label":t({id:"generic_icons.upgradeBadge",defaultMessage:"Upgrade badge"})},r().createElement("circle",{cx:"12",cy:"12",r:"10",fillOpacity:"0.08"}),r().createElement("path",{d:"M12,2c5.523,0,10,4.477,10,10s-4.477,10-10,10S2,17.523,2,12S6.477,2,12,2z M14.994,9.033 c0.218,0.217,0.327,0.47,0.327,0.76s-0.109,0.543-0.327,0.76c-0.218,0.217-0.472,0.326-0.762,0.326s-0.545-0.109-0.762-0.326 c-0.218-0.217-0.327-0.47-0.327-0.76s0.109-0.543,0.327-0.76c0.218-0.217,0.472-0.326,0.762-0.326S14.776,8.816,14.994,9.033z M16.555,7.477C15.902,6.826,15.115,6.5,14.195,6.5c-0.871,0-1.634,0.326-2.287,0.977c-0.508,0.507-0.823,1.11-0.944,1.809 c-0.097,0.675,0.012,1.315,0.327,1.918L6.5,15.98l1.525,1.52l1.561-1.556l1.561,1.556l1.525-1.52l-1.561-1.556l1.706-1.701 c0.605,0.314,1.246,0.422,1.924,0.326c0.702-0.121,1.307-0.434,1.815-0.941c0.653-0.651,0.968-1.423,0.944-2.316 C17.523,8.9,17.208,8.128,16.555,7.477z"})))}a(92189);var A=a(34575),S=a(23712);const T=e=>{let{id:t,title:a,description:n,iconSVG:o,titleClassName:i,descriptionClassName:c,iconClassName:u,tooltip:d,selected:m,disabled:p,locked:C,onClick:h}=e;const g=(0,s.useCallback)((e=>{e.preventDefault(),h(t)}),[t,h]),E=r().createElement("button",{id:"public-private-selector-button-".concat(t),className:l()("public-private-selector-button",{selected:m,disabled:p,locked:C}),onClick:g},r().createElement(o,{className:l()("public-private-selector-button-icon",u)}),r().createElement("div",{className:"public-private-selector-button-text"},r().createElement("div",{className:l()("public-private-selector-button-title",i)},a,C&&r().createElement(w,{className:"public-private-selector-button-icon-upgrade"})),r().createElement("div",{className:l()("public-private-selector-button-description",c)},n)),m&&r().createElement(v,{className:"public-private-selector-button-icon-check"}));return d?r().createElement(A.Z,{id:"'public-private-selector-button-tooltip'",placement:"top",title:d},E):E};T.propTypes={title:b().oneOfType([b().string,b().node]).isRequired,description:b().oneOfType([b().string,b().node]).isRequired,iconSVG:b().func.isRequired,titleClassName:b().string,descriptionClassName:b().string,iconClassName:b().string,tooltip:b().string,selected:b().bool,disabled:b().bool,locked:b().bool,onClick:b().func.isRequired};const R=e=>{let{selected:t,className:a,publicButtonProps:{title:n,description:i,titleClassName:c,descriptionClassName:u,iconClassName:d,tooltip:m,disabled:p,locked:C}={},privateButtonProps:{title:h,description:g,titleClassName:E,descriptionClassName:N,iconClassName:_,tooltip:f,disabled:b,locked:v}={},onChange:w}=e;const{formatMessage:A}=(0,o.useIntl)(),R=!p&&!C,y=!b&&!v,H=(0,s.useCallback)((e=>{e===t||e===S.Constants.OPEN_CHANNEL&&!R||e===S.Constants.PRIVATE_CHANNEL&&!y||w(e)}),[t,R,y,w]);return r().createElement("div",{className:l()("public-private-selector",a)},r().createElement(T,{id:S.Constants.OPEN_CHANNEL,title:n||A({id:"public_private_selector.public.title",defaultMessage:"Public"}),description:i||A({id:"public_private_selector.public.description",defaultMessage:"Anyone"}),iconSVG:L,titleClassName:c,descriptionClassName:u,iconClassName:d,tooltip:m,selected:t===S.Constants.OPEN_CHANNEL,disabled:p,locked:C,onClick:H}),r().createElement(T,{id:S.Constants.PRIVATE_CHANNEL,title:h||A({id:"public_private_selector.private.title",defaultMessage:"Private"}),description:g||A({id:"public_private_selector.private.description",defaultMessage:"Only invited members"}),iconSVG:M,titleClassName:E,descriptionClassName:N,iconClassName:_,tooltip:f,selected:t===S.Constants.PRIVATE_CHANNEL,disabled:b,locked:v,onClick:H}))};R.propTypes={className:b().string,publicButtonProps:b().shape({title:b().oneOfType([b().string,b().node]),description:b().oneOfType([b().string,b().node]),titleClassName:b().string,descriptionClassName:b().string,iconClassName:b().string,tooltip:b().string,selected:b().bool,disabled:b().bool,locked:b().bool}),privateButtonProps:b().shape({title:b().oneOfType([b().string,b().node]),description:b().oneOfType([b().string,b().node]),titleClassName:b().string,descriptionClassName:b().string,iconClassName:b().string,tooltip:b().string,selected:b().bool,disabled:b().bool,locked:b().bool}),onChange:b().func.isRequired};const y=R;var H=a(26742);function k(e,t){let a=S.default.OPEN_CHANNEL;return e||a!==S.default.OPEN_CHANNEL||(a=S.default.PRIVATE_CHANNEL),t||a!==S.default.PRIVATE_CHANNEL||(a=S.default.OPEN_CHANNEL),a}var P=function(e){return e.CHANNEL_URL_SIZE="model.channel.is_valid.1_or_more.app_error",e.CHANNEL_UPDATE_EXISTS="store.sql_channel.update.exists.app_error",e.CHANNEL_CREATE_EXISTS="store.sql_channel.save_channel.exists.app_error",e.CHANNEL_PURPOSE_SIZE="model.channel.is_valid.purpose.app_error",e}(P||{});const I=()=>{var e;const t=(0,o.useIntl)(),{formatMessage:a}=t,n=null===(e=(0,i.useSelector)(g.kA))||void 0===e?void 0:e.id,f=(0,i.useSelector)((e=>!!n&&(0,h.iM)(e,m.Z.CREATE_PUBLIC_CHANNEL))),b=(0,i.useSelector)((e=>!!n&&(0,h.iM)(e,m.Z.CREATE_PRIVATE_CHANNEL))),v=(0,i.useDispatch)(),[L,M]=(0,s.useState)(k(f,b)),[w,T]=(0,s.useState)(""),[R,I]=(0,s.useState)(""),[Z,x]=(0,s.useState)(""),[O,B]=(0,s.useState)(""),[U,D]=(0,s.useState)(""),[V,q]=(0,s.useState)(""),[F,G]=(0,s.useState)(!1),X=(0,i.useSelector)((e=>e.plugins.components)),W=null==X?void 0:X.CreateBoardFromTemplate,z=(0,i.useSelector)((e=>(0,C.U2)(e,p.Z.APP_BAR,p.Z.NEW_CHANNEL_WITH_BOARD_TOUR_SHOWED,""))),[K,j]=(0,s.useState)(!0),[$,J]=(0,s.useState)(void 0),Q=(0,s.useCallback)((e=>{I(e),B("")}),[]),Y=async()=>{if(!le||!n)return;const e={team_id:n,name:R,display_name:w,purpose:Z,header:"",type:L,create_at:0,creator_id:"",delete_at:0,group_constrained:!1,id:"",last_post_at:0,last_root_post_at:0,scheme_id:"",update_at:0};try{const{data:t,error:a}=await v((0,d.mi)(e,""));if(a)return void ae(a);if(te(),K&&W)try{ee(t.id)}catch(e){console.log(e.message)}v((0,E.qZ)(t))}catch(e){ae({message:a({id:"channel_modal.error.generic",defaultMessage:"Something went wrong. Please try again."})})}},ee=async e=>{if(!W||!n)return!1;if(!$)return!1;const t=$;if(t&&K){const a=await t(e,n);if(null==a||!a.id)return!1}return""===z&&v((0,u.f)({[p.Z.NEW_CHANNEL_WITH_BOARD_TOUR_SHOWED]:!1})),!0},te=()=>{v((0,N.M)(S.r8.NEW_CHANNEL_MODAL))},ae=e=>{let{server_error_id:t,message:n}=e;switch(t){case P.CHANNEL_URL_SIZE:B(a({id:"channel_modal.handleTooShort",defaultMessage:"Channel URL must be 1 or more lowercase alphanumeric characters"}));break;case P.CHANNEL_UPDATE_EXISTS:case P.CHANNEL_CREATE_EXISTS:B(a({id:"channel_modal.alreadyExist",defaultMessage:"A channel with that URL already exists"}));break;case P.CHANNEL_PURPOSE_SIZE:D(a({id:"channel_modal.purposeTooLong",defaultMessage:"The purpose exceeds the maximum of 250 characters"}));break;default:q(n)}},ne=(0,s.useCallback)((e=>{M(e),q("")}),[]),le=w&&!O&&L&&!U&&!V&&K&&!F,se=r().createElement(A.Z,{id:"new-channel-with-board-tooltip",title:r().createElement(r().Fragment,null,r().createElement("div",{className:"title"},r().createElement(o.FormattedMessage,{id:"channel_modal.create_board.tooltip_title",defaultMessage:"Manage your task with a board"})),r().createElement("div",{className:"description"},r().createElement(o.FormattedMessage,{id:"channel_modal.create_board.tooltip_description",defaultMessage:"Use any of our templates to manage your tasks or start from scratch with your own!"}))),placement:"right"},r().createElement("i",{className:"icon-information-outline"}));return r().createElement(c.$E,{id:"new-channel-modal",className:"new-channel-modal",modalHeaderText:a({id:"channel_modal.modalTitle",defaultMessage:"Create a new channel"}),confirmButtonText:a({id:"channel_modal.createNew",defaultMessage:"Create channel"}),cancelButtonText:a({id:"channel_modal.cancel",defaultMessage:"Cancel"}),errorText:V,isConfirmDisabled:!le,autoCloseOnConfirmButton:!1,compassDesign:!0,handleConfirm:Y,handleEnterKeyPress:Y,handleCancel:te,onExited:te},r().createElement("div",{className:"new-channel-modal-body"},r().createElement(_.Z,{value:w,name:"new-channel-modal-name",placeholder:a({id:"channel_modal.name.placeholder",defaultMessage:"Enter a name for your new channel"}),onDisplayNameChange:T,onURLChange:Q,onErrorStateChange:G,urlError:O}),r().createElement(y,{className:"new-channel-modal-type-selector",selected:L,publicButtonProps:{title:a({id:"channel_modal.type.public.title",defaultMessage:"Public Channel"}),description:a({id:"channel_modal.type.public.description",defaultMessage:"Anyone can join"}),disabled:!f},privateButtonProps:{title:a({id:"channel_modal.type.private.title",defaultMessage:"Private Channel"}),description:a({id:"channel_modal.type.private.description",defaultMessage:"Only invited members"}),disabled:!b},onChange:ne}),r().createElement("div",{className:"new-channel-modal-purpose-container"},r().createElement("textarea",{id:"new-channel-modal-purpose",className:l()("new-channel-modal-purpose-textarea",{"with-error":U}),placeholder:a({id:"channel_modal.purpose.placeholder",defaultMessage:"Enter a purpose for this channel (optional)"}),rows:4,maxLength:S.default.MAX_CHANNELPURPOSE_LENGTH,autoComplete:"off",value:Z,onChange:e=>{e.preventDefault();const{target:{value:t}}=e;x(t),D(""),q("")},onKeyDown:e=>{e.stopPropagation()}}),U?r().createElement("div",{className:"new-channel-modal-purpose-error"},r().createElement("i",{className:"icon icon-alert-outline"}),r().createElement("span",null,U)):r().createElement("div",{className:"new-channel-modal-purpose-info"},r().createElement("span",null,a({id:"channel_modal.purpose.info",defaultMessage:"This will be displayed when browsing for channels."}))),W&&r().createElement(H.default,{pluggableName:"CreateBoardFromTemplate",setCanCreate:j,setAction:J,newBoardInfoIcon:se}))))}}}]);
//# sourceMappingURL=2574.95702d8811126dc19dfa.js.map