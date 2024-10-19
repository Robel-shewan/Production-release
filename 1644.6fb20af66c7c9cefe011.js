"use strict";(self.webpackChunkmattermost_webapp=self.webpackChunkmattermost_webapp||[]).push([[1644],{21644:(e,n,a)=>{a.r(n),a.d(n,{default:()=>Ee});var l=a(23615),t=a.n(l),i=a(84390),o=a.n(i),r=a(85939),s=a.n(r),d=(a(90938),a(70314)),c=a(9448),m=a(75873),u=a(47407),k=a(40364),p=a(35683),f=a(98386),h=a(23712),g=a(41894),b=(a(61418),a(72060)),v=a(45448),E=a(53134),y=a(53912),_=a(26341),C=a(70174),x=a(6098);const I=()=>{};function w(e){let{displayName:n,onExited:a,onCancel:l,onConfirm:t}=e;const{formatMessage:i}=(0,b.useIntl)(),r=i({id:"channel_bookmarks.confirm.delete.title",defaultMessage:"Delete bookmark"}),s=i({id:"channel_bookmarks.confirm.delete.button",defaultMessage:"Yes, delete"}),d=o().createElement(b.FormattedMessage,{id:"channel_bookmarks.confirm.delete.text",defaultMessage:"Are you sure you want to delete the bookmark <strong>{displayName}</strong>?",values:{strong:e=>o().createElement("strong",null,e),displayName:n}});return o().createElement(x.$E,{confirmButtonText:s,handleCancel:null!=l?l:I,handleConfirm:t,modalHeaderText:r,onExited:a,compassDesign:!0,isDeleteModal:!0},d)}w.propTypes={displayName:t().string.isRequired,onConfirm:t().func.isRequired,onCancel:t().func,onExited:t().func.isRequired};const M=w;a(14078),a(70684),a(68581),a(32081),a(40895),a(95289);var B=a(98644),N=a(19601),z=a(96711),T=a(13232),j=a(97725),P=a(83398),L=a(35887),R=a(69072),S=a(1752),O=a(55595),A=a(72075),D=a(22589);const F=e=>{let{type:n,emoji:a,imageUrl:l,fileInfo:t,size:i=16}=e,r="link"===n?o().createElement(v.BookOutlineIcon,{size:i}):o().createElement(v.FileGenericOutlineIcon,{size:i});const s=a&&(0,A.sW)(a),c=(0,d.useSelector)((e=>"true"===(0,N.iE)(e).HasImageProxy));return s?r=o().createElement(S.Z,{emojiName:s,size:i}):l?r=o().createElement(U,{src:(0,D.Q4)(l,c),size:i}):t&&(r=o().createElement(O.Z,{fileInfo:t,disablePreview:!0})),o().createElement(q,{$size:i},r)};F.propTypes={emoji:t().string,imageUrl:t().string,size:t().oneOf([16,24])};const K=F,q=s().div.withConfig({displayName:"Icon"})(["padding:3px 1px 3px 2px;flex-shrink:0;display:flex;align-items:center;.file-icon{width:","px;height:","px;background-size:","px ","px;margin-top:1px;}"],(e=>{let{$size:n}=e;return n}),(e=>{let{$size:n}=e;return n}),(e=>{let{$size:n}=e;return.8*n}),(e=>{let{$size:n}=e;return n})),U=s().img.withConfig({displayName:"BookmarkIconImg"})(["width:","px;height:","px;"],(e=>{let{size:n}=e;return n}),(e=>{let{size:n}=e;return n})),H=e=>{var n;let{type:a,imageUrl:l,fileInfo:t,emoji:r,setEmoji:s,placeholder:d,displayName:c,setDisplayName:m,showEmojiPicker:u,setShowEmojiPicker:k,onAddCustomEmojiClick:p}=e;const{formatMessage:f}=(0,b.useIntl)(),g=(0,i.useRef)(null),E=o().createElement(K,{type:a,size:24,emoji:r,fileInfo:t,imageUrl:l}),y=()=>{g.current&&document.dispatchEvent(new CustomEvent(h.sp.FOCUS,{detail:{target:g.current,keyboardOnly:!0}}))},_=()=>{s("")},C=(0,i.useCallback)((e=>{m(e.currentTarget.value)}),[]);return o().createElement(o().Fragment,null,o().createElement(W,null,u&&o().createElement(R.Z,{target:()=>g.current,show:u,onHide:()=>{k(!1),y()},onEmojiClick:e=>{k(!1);const n="short_name"in e?e.short_name:e.name;s(":".concat(n,":")),y()},placement:"right",onAddCustomEmojiClick:p}),o().createElement("button",{ref:g,type:"button",onClick:()=>k((e=>!e)),onKeyDown:e=>{(0,L.p)(e,h.default.KeyCodes.ENTER)&&e.stopPropagation()},"aria-label":f({id:"emoji_picker.emojiPicker.button.ariaLabel",defaultMessage:"select an emoji"}),"aria-expanded":u?"true":"false",className:"channelBookmarksMenuButton emoji-picker__container BookmarkCreateModal__emoji-button"},E,o().createElement(v.ChevronDownIcon,{size:"12px"})),o().createElement(P.Z,{type:"text",name:"bookmark-display-name",onChange:C,value:null!==(n=null!=c?c:d)&&void 0!==n?n:"",placeholder:d,"data-testid":"titleInput",useLegend:!1}),o().createElement(Z,{visible:Boolean(r),tabIndex:0,onClick:_,onKeyDown:e=>{((0,L.p)(e,h.default.KeyCodes.ENTER)||(0,L.p)(e,h.default.KeyCodes.SPACE))&&(e.stopPropagation(),_())}},o().createElement(b.FormattedMessage,{id:"channel_bookmarks.create.title_input.clear_emoji",defaultMessage:"Remove emoji"}))))};H.propTypes={showEmojiPicker:t().bool.isRequired,onAddCustomEmojiClick:t().func};const Z=s().a.withConfig({displayName:"Clear"})(["font-size:12px;visibility:",";"],(e=>{let{visible:n}=e;return n?"visible":"hidden"})),W=s().div.withConfig({displayName:"NameWrapper"})(["position:relative;> button{position:absolute;left:1px;top:1px;z-index:5;width:57px;height:44px;border-radius:4px 0 0 4px;border-right:1px solid rgba(var(--center-channel-color-rgb),0.16);align-items:center;justify-content:center;gap:0;padding-left:6px;padding-right:2px;svg{flex-shrink:0;}}.Input_container{}.Input_wrapper{padding-left:7rem;}"]),$=H;var V=a(4411);function G(e){const n=(0,g.Vz)(e);if(!n||!(0,g.jv)(n))return null;let a;try{a=new URL(n)}catch(e){return null}return a}function Q(e){var n,a,l,t;let{bookmark:r,bookmarkType:s,file:c,channelId:u,onExited:k,onConfirm:p,onHide:f}=e;const{formatMessage:g}=(0,b.useIntl)(),E=(0,d.useDispatch)(),y=null!==(n=null!==(a=null==r?void 0:r.type)&&void 0!==a?a:s)&&void 0!==n?n:"link",[_,I]=(0,i.useState)(!1),[w,M]=(0,i.useState)(null!==(l=null==r?void 0:r.emoji)&&void 0!==l?l:""),[R,S]=(0,i.useState)(null==r?void 0:r.display_name),[O,A]=(0,i.useState)(),[D,F]=(0,i.useState)(!1),[K,q]=(0,i.useState)(""),U=(0,i.useCallback)((e=>{(0,L.p)(e,h.default.KeyCodes.ESCAPE)&&!_&&f()}),[_,f]);(0,i.useEffect)((()=>(document.addEventListener("keydown",U),()=>{document.removeEventListener("keydown",U)})),[U]);const[H,Z]=(0,i.useState)(null!==(t=null==r?void 0:r.link_url)&&void 0!==t?t:""),[W,Q]=(0,i.useState)(H),[Y,te]=(0,i.useState)(""),[ie,oe]=(0,i.useState)(null==r?void 0:r.image_url),re=(0,i.useCallback)((e=>{let{target:{value:n}}=e;Z(n),se(n)}),[]),se=(0,B.Ds)((e=>{Q(e)}),250),de=(0,i.useCallback)((e=>{let{target:{value:n}}=e;Q(n)}),[]),ce=(0,i.useCallback)((e=>{let{clipboardData:n}=e;Q(n.getData("text/plain"))}),[]);(0,i.useEffect)((()=>{if(W===(null==r?void 0:r.link_url)||!W)return;const e=G(W);(async()=>{A(W||""),oe(""),e?(te(""),A(W)):te("Please enter a valid link. Could not parse: "+W)})()}),[W,null==r?void 0:r.link_url,u]);const me=(0,V.C9)(),[ue,ke]=(0,i.useState)(),[pe,fe]=(0,i.useState)(""),[he,ge]=(0,i.useState)(null==r?void 0:r.file_id),be=(0,i.useRef)(),ve=(0,d.useSelector)((e=>he&&(0,m.hn)(e,he)||void 0)),Ee=(0,d.useSelector)((e=>{const n=(0,N.iE)(e);return parseInt(n.MaxFileSize||"",10)})),ye=Ee/1048576,_e=(0,i.useCallback)((e=>{var n;const a=null===(n=e.target.files)||void 0===n?void 0:n[0];a&&Ne(a)}),[]),Ce=(0,i.useRef)(null),xe=o().createElement("input",{type:"file",id:"bookmark-create-file-input-in-modal",className:"bookmark-create-file-input",ref:Ce,onChange:_e}),Ie=e=>{ke(e)},we=e=>{let{file_infos:n}=e;ke(null);const a=null==n?void 0:n[0];a&&ge(a.id),fe("")},Me=()=>{ke(null),fe(g({id:"file_upload.generic_error_file",defaultMessage:"There was a problem uploading your file."}))},Be=R||O||("file"===y?null==ve?void 0:ve.name:null==r?void 0:r.link_url)||"",Ne=e=>{if(ke(null),ge(""),e.size>Ee)return void fe(g({id:"file_upload.fileAbove",defaultMessage:"File above {max}MB could not be uploaded: {filename}"},{max:ye,filename:e.name}));if(0===e.size)return void fe(g({id:"file_upload.zeroBytesFile",defaultMessage:"You are uploading an empty file: {filename}"},{filename:e.name}));fe(""),Be===(null==ve?void 0:ve.name)&&S(e.name),A(e.name);const n=(0,C.Ox)();be.current=E((0,z.c)({file:e,name:e.name,type:e.type,rootId:"",channelId:u,clientId:n,onProgress:Ie,onSuccess:we,onError:Me},!0))};(0,i.useEffect)((()=>{c&&Ne(c)}),[c]);const ze=(0,i.useCallback)((()=>{var e;null===(e=be.current)||void 0===e||e.abort(),null==k||k()}),[k]),Te=Be!==(null==r?void 0:r.display_name)||!(!(w||null!=r&&r.emoji)||w===(null==r?void 0:r.emoji))||!("file"!==y||!he||he===(null==r?void 0:r.file_id))||"link"===y&&Boolean(W&&W!==(null==r?void 0:r.link_url)),je=!("link"===y&&(!W||Y)||!("file"!==y||ve&&Be&&!pe)),Pe="file"===y||je||r,Le=(0,i.useCallback)((()=>{var e;"file"===y&&(null===(e=be.current)||void 0===e||e.abort())}),[y]),Re=(0,i.useCallback)((async()=>{if(F(!0),"link"===y){const e=G(W);if(!e)return void q(g(le.linkInvalid));let n=e.toString();n.endsWith("/")&&(n=n.slice(0,-1));const{data:a}=await p({image_url:ie,link_url:n,emoji:w,display_name:Be,type:"link"});F(!1),a?(q(""),f()):q(g(le.saveError))}else if(ve){const{data:e}=await p({file_id:ve.id,display_name:Be,type:"file",emoji:w});e?(q(""),f()):q(g(le.saveError))}}),[y,W,p,f,ve,Be,w,ie]),Se=D||!je||!Te;return o().createElement(x.$E,{enforceFocus:!_,keyboardEscape:!1,className:"channel-bookmarks-create-modal",modalHeaderText:g(r?le.editHeading:le.heading),confirmButtonText:g(r?le.saveText:le.addBookmarkText),handleCancel:Pe&&Le||void 0,handleConfirm:Pe&&Re||void 0,handleEnterKeyPress:!Se&&Re||void 0,onExited:ze,compassDesign:!0,isConfirmDisabled:Se,autoCloseOnConfirmButton:!1,errorText:K},o().createElement(o().Fragment,null,"link"===y?o().createElement(P.Z,{type:"text",name:"bookmark-link",containerClassName:"linkInput",placeholder:g(le.linkPlaceholder),onChange:re,onBlur:de,onPaste:ce,value:H,"data-testid":"linkInput",autoFocus:!0,customMessage:Y?{type:"error",value:Y}:{value:g(le.linkInfoMessage)}}):o().createElement(o().Fragment,null,o().createElement(X,null,o().createElement(b.FormattedMessage,{id:"channel_bookmarks.create.file_input.label",defaultMessage:"Attachment"})),o().createElement(ne,{tabIndex:0,role:"button",disabled:!me,onClick:me&&(e=>{var n;const a=document.querySelector("\n            .channel-bookmarks-create-modal .post-image__download a,\n            .channel-bookmarks-create-modal a.file-preview__remove\n        ");a===e.target||null!=a&&a.contains(e.target)||null===(n=Ce.current)||void 0===n||n.click()})||void 0},!ue&&ve&&o().createElement(ae,null,o().createElement(T.Z,{key:ve.id,fileInfo:ve,index:0})),ue&&o().createElement(j.Z,{key:ue.clientId,clientId:ue.clientId,fileInfo:ue,handleRemove:()=>{var e;ke(null),ge(null==r?void 0:r.file_id),A(void 0),null===(e=be.current)||void 0===e||e.abort()}}),!ve&&!ue&&o().createElement("div",{className:"file-preview__container empty"}),o().createElement(ee,null,o().createElement(v.PencilOutlineIcon,{size:24}),g(le.fileInputEdit)),xe),pe&&o().createElement("div",{className:"Input___customMessage Input___error"},o().createElement("i",{className:"icon error icon-alert-circle-outline"}),o().createElement("span",null,pe))),Pe&&o().createElement(J,null,o().createElement(X,null,o().createElement(b.FormattedMessage,{id:"channel_bookmarks.create.title_input.label",defaultMessage:"Title"})),o().createElement($,{type:y,imageUrl:ie,fileInfo:ue||ve,emoji:w,setEmoji:M,displayName:R,placeholder:Be,setDisplayName:S,onAddCustomEmojiClick:f,showEmojiPicker:_,setShowEmojiPicker:I}))))}Q.propTypes={channelId:t().string.isRequired,onExited:t().func.isRequired,onHide:t().func.isRequired};const Y=Q,J=s().div.withConfig({displayName:"TitleWrapper"})(["margin-top:20px;"]),X=s().span.withConfig({displayName:"FieldLabel"})(["display:inline-block;margin-bottom:8px;font-family:Open Sans;font-size:14px;line-height:16px;font-style:normal;font-weight:600;line-height:20px;"]),ee=s().div.withConfig({displayName:"VisualButton"})(["display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;padding:10px 24px;color:rgba(var(--center-channel-color-rgb),0.56);font-size:11px;font-weight:600;font-family:Open Sans;"]),ne=s().div.withConfig({displayName:"FileInputContainer"})(["display:block;background:rgba(var(--center-channel-color-rgb),0.04);padding:12px;border-radius:8px;display:flex;&:hover:not([disabled]){background:rgba(var(--center-channel-color-rgb),0.08);color:rgba(var(--center-channel-color-rgb),0.72);cursor:pointer;}&:disabled{cursor:default;",'{opacity:0.4;}}input[type="file"]{opacity:0;width:0;height:0;}.file-preview__container,.file-preview{width:auto;height:auto;flex:1 1 auto;padding:0;&.empty{border:2px dashed rgba(var(--center-channel-color-rgb),0.16);border-radius :4px;}.post-image__column{width:100%;margin:0;}}'],ee),ae=s().div.withConfig({displayName:"FileItemContainer"})(["display:flex;flex:1 1 auto;> div{width:100%;margin:0;}"]),le=(0,b.defineMessages)({heading:{id:"channel_bookmarks.create.title",defaultMessage:"Add a bookmark"},editHeading:{id:"channel_bookmarks.create.edit.title",defaultMessage:"Edit bookmark"},linkPlaceholder:{id:"channel_bookmarks.create.link_placeholder",defaultMessage:"Link"},linkInfoMessage:{id:"channel_bookmarks.create.link_info",defaultMessage:"Add a link to any post, file, or any external link"},addBookmarkText:{id:"channel_bookmarks.create.confirm_add.button",defaultMessage:"Add bookmark"},saveText:{id:"channel_bookmarks.create.confirm_save.button",defaultMessage:"Save bookmark"},fileInputEdit:{id:"channel_bookmarks.create.file_input.edit",defaultMessage:"Edit"},linkInvalid:{id:"channel_bookmarks.create.error.invalid_url",defaultMessage:"Please enter a valid link"},saveError:{id:"channel_bookmarks.create.error.generic_save",defaultMessage:"There was an error trying to save the bookmark."}}),te=e=>{let{bookmark:n,open:a}=e;const{formatMessage:l}=(0,b.useIntl)(),t=(0,d.useDispatch)(),r=(0,g.fO)(),s="link"===n.type&&n.link_url&&(0,g.or)(n.link_url,r);let c;"file"===n.type?c=o().createElement(v.ArrowExpandIcon,{size:18}):n.link_url&&(c=s?o().createElement(v.OpenInNewIcon,{size:18}):o().createElement(v.BookOutlineIcon,{size:18}));const m=(0,V.Kj)(n.channel_id,"edit"),p=(0,V.Kj)(n.channel_id,"delete"),f=(0,V.uU)(),x=l({id:"channel_bookmarks.edit",defaultMessage:"Edit"}),I=l({id:"channel_bookmarks.open",defaultMessage:"Open"}),w=l({id:"channel_bookmarks.copy",defaultMessage:"Copy link"}),B=l({id:"channel_bookmarks.copyFilePublicLink",defaultMessage:"Get a public link"}),N=l({id:"channel_bookmarks.delete",defaultMessage:"Delete"}),z=(0,i.useCallback)((()=>{t((0,k.h)({modalId:h.r8.CHANNEL_BOOKMARK_CREATE,dialogType:Y,dialogProps:{bookmark:n,channelId:n.channel_id,onConfirm:async e=>t((0,E.ur)(n.channel_id,n.id,e))}}))}),[E.ur,t,n]),T=(0,i.useCallback)((()=>{"link"===n.type&&n.link_url?(0,C.vQ)(n.link_url):"file"===n.type&&n.file_id&&(0,C.vQ)((0,u.gN)(n.file_id))}),[n.type,n.link_url,n.file_id]),j=(0,i.useCallback)((()=>{t((0,k.h)({modalId:h.r8.CHANNEL_BOOKMARK_DELETE,dialogType:M,dialogProps:{displayName:n.display_name,onConfirm:()=>t((0,E.Tc)(n.channel_id,n.id))}}))}),[E.Tc,t,n]),P=(0,i.useCallback)((()=>{n.file_id&&t((0,k.h)({modalId:h.r8.GET_PUBLIC_LINK_MODAL,dialogType:y.Z,dialogProps:{fileId:n.file_id}}))}),[n.file_id,t]);return o().createElement(_.W2,{anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},menuButton:{id:"channelBookmarksDotMenuButton-".concat(n.id),class:"channelBookmarksDotMenuButton",children:o().createElement(v.DotsHorizontalIcon,{size:18}),"aria-label":l({id:"channel_bookmarks.editBookmarkLabel",defaultMessage:"Bookmark menu"})},menu:{id:"channelBookmarksDotMenuDropdown"}},o().createElement(_.ck,{key:"channelBookmarksOpen",id:"channelBookmarksOpen",onClick:a,leadingElement:c,labels:o().createElement("span",null,I),"aria-label":I}),m&&o().createElement(_.ck,{key:"channelBookmarksEdit",id:"channelBookmarksEdit",onClick:z,leadingElement:o().createElement(v.PencilOutlineIcon,{size:18}),labels:o().createElement("span",null,x),"aria-label":x}),"link"===n.type&&o().createElement(_.ck,{key:"channelBookmarksLinkCopy",id:"channelBookmarksLinkCopy",onClick:T,leadingElement:o().createElement(v.LinkVariantIcon,{size:18}),labels:o().createElement("span",null,w),"aria-label":w}),"file"===n.type&&f&&o().createElement(_.ck,{key:"channelBookmarksFileCopy",id:"channelBookmarksFileCopy",onClick:P,leadingElement:o().createElement(v.LinkVariantIcon,{size:18}),labels:o().createElement("span",null,B),"aria-label":B}),p&&o().createElement(_.ck,{key:"channelBookmarksDelete",id:"channelBookmarksDelete",onClick:j,leadingElement:o().createElement(v.TrashCanOutlineIcon,{size:18}),labels:o().createElement("span",null,N),"aria-label":N,isDestructive:!0}))};te.propTypes={open:t().func.isRequired};const ie=te,oe=s().div.withConfig({displayName:"Chip"})(['position:relative;border-radius:12px;overflow:hidden;margin:1px 0;flex-shrink:0;min-width:5rem;max-width:25rem;button{position:absolute;visibility:hidden;right:6px;top:3px;}&:hover,&:focus-within,&:has([aria-expanded="true"]){button{visibility:visible;}}&:hover,&:focus-within{a{text-decoration:none;}}&:hover,&:focus-within,&:has([aria-expanded="true"]){a{background:rgba(var(--center-channel-color-rgb),0.08);color:rgba(var(--center-channel-color-rgb),1);}}&:active:not(:has(button:active)),&--active,&--active:hover{a{background:rgba(var(--button-bg-rgb),0.08);color:rgb(var(--button-bg-rgb)) !important;.icon__text{color:rgb(var(--button-bg));}.icon{color:rgb(var(--button-bg));}}}']),re=s().span.withConfig({displayName:"Label"})(["white-space:nowrap;padding:4px 0;text-overflow:ellipsis;overflow:hidden;"]),se=(0,i.forwardRef)(((e,n)=>{let{href:a,children:l,isFile:t,onClick:i}=e;const r=(0,g.fO)(),s=(0,g.or)(a,r),d="!"===a[0];return d||s?o().createElement(ue,{href:d?a.substring(1):a,rel:"noopener noreferrer",target:"_blank",location:"channel_bookmarks.item",ref:n},l):a.startsWith(r)&&!t?o().createElement(me,{to:a.slice(r.length),ref:n,onClick:i},l):o().createElement(ce,{href:a,ref:n,onClick:i},l)})),de=(0,r.css)(["display:flex;padding:0 12px 0 6px;gap:5px;color:rgba(var(--center-channel-color-rgb),1);font-family:Open Sans;font-size:12px;font-style:normal;font-weight:600;line-height:16px;"]),ce=s().a.withConfig({displayName:"StyledAnchor"})(["&&&&{","}"],de),me=s()(c.Link).withConfig({displayName:"StyledLink"})(["&&&&{","}"],de),ue=s()(p.Z).withConfig({displayName:"StyledExternalLink"})(["&&&&{","}"],de),ke=e=>{let{bookmark:n}=e;const a=(0,i.useRef)(null),l=(0,d.useDispatch)(),t=(0,d.useSelector)((e=>(null==n?void 0:n.file_id)&&(0,m.hn)(e,n.file_id)||void 0)),r=o().createElement(K,{type:n.type,emoji:n.emoji,imageUrl:n.image_url,fileInfo:t});let s;return"link"===n.type&&n.link_url?s=o().createElement(se,{href:n.link_url,ref:a,isFile:!1},r,o().createElement(re,null,n.display_name)):"file"===n.type&&n.file_id&&(s=o().createElement(se,{href:(0,u.gN)(n.file_id),onClick:e=>{e.preventDefault(),t&&l((0,k.h)({modalId:h.r8.FILE_PREVIEW_MODAL,dialogType:f.Z,dialogProps:{post:{user_id:n.owner_id,channel_id:n.channel_id},fileInfos:[t],startIndex:0}}))},ref:a,isFile:!0},r,o().createElement(re,null,n.display_name))),o().createElement(oe,null,s,o().createElement(ie,{bookmark:n,open:()=>{var e;null===(e=a.current)||void 0===e||e.click()}}))};var pe=a(60042),fe=a.n(pe);const he=e=>{let{channelId:n,hasBookmarks:a,limitReached:l,canUploadFiles:t}=e;const{formatMessage:r}=(0,b.useIntl)(),s=(0,d.useDispatch)(),c=!a,m=(0,i.useCallback)((e=>{s((0,k.h)({modalId:h.r8.CHANNEL_BOOKMARK_CREATE,dialogType:Y,dialogProps:{channelId:n,bookmarkType:e?"file":"link",file:e,onConfirm:async e=>s((0,E.Ke)(n,e))}}))}),[n,s]),u=(0,i.useCallback)((e=>{var n;if(null!==(n=e.target.files)&&void 0!==n&&n.length){const[n]=e.target.files;m(n),(0,C.Mb)(e.target)}}),[m]),p=(0,i.useRef)(null),f=o().createElement("input",{type:"file",id:"bookmark-create-file-input",className:"bookmark-create-file-input",ref:p,onChange:u}),g=(0,i.useCallback)((()=>{m()}),[m]),y=(0,i.useCallback)((()=>{var e;null===(e=p.current)||void 0===e||e.click()}),[p.current]),x=r({id:"channel_bookmarks.addBookmark",defaultMessage:"Add a bookmark"}),I=r({id:"channel_bookmarks.addBookmarkLimitReached",defaultMessage:"Cannot add more than {limit} bookmarks"},{limit:V.IM});let w;l?w=I:a&&(w=x);const M=r({id:"channel_bookmarks.addLink",defaultMessage:"Add a link"}),B=r({id:"channel_bookmarks.attachFile",defaultMessage:"Attach a file"});return o().createElement(be,{withLabel:c},o().createElement(_.W2,{anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},menuButton:{id:"channelBookmarksPlusMenuButton",class:fe()("channelBookmarksMenuButton",{withLabel:c,disabled:l}),children:o().createElement(o().Fragment,null,o().createElement(v.PlusIcon,{size:c?16:18}),c&&o().createElement("span",null,x)),"aria-label":x,disabled:l},menu:{id:"channelBookmarksPlusMenuDropdown"},menuButtonTooltip:w?{id:"channelBookmarksPlusMenuButtonTooltip",text:w}:void 0},o().createElement(_.ck,{key:"channelBookmarksAddLink",id:"channelBookmarksAddLink",onClick:g,leadingElement:o().createElement(v.LinkVariantIcon,{size:18}),labels:o().createElement("span",null,M),"aria-label":M}),t&&o().createElement(_.ck,{key:"channelBookmarksAttachFile",id:"channelBookmarksAttachFile",onClick:y,leadingElement:o().createElement(v.PaperclipIcon,{size:18}),labels:o().createElement("span",null,B),"aria-label":B})),f)};he.propTypes={channelId:t().string.isRequired,hasBookmarks:t().bool.isRequired,limitReached:t().bool.isRequired,canUploadFiles:t().bool.isRequired};const ge=he,be=s().div.withConfig({displayName:"PlusButtonContainer"})(["position:sticky;right:0;"," background:linear-gradient(to right,rgba(var(--center-channel-bg-rgb),.16),rgba(var(--center-channel-bg-rgb),1) 25%);"],(e=>{let{withLabel:n}=e;return!n&&(0,r.css)(["padding:0 1rem;"])})),ve=e=>{let{channelId:n}=e;const{order:a,bookmarks:l}=(0,V.JC)(n),t=(0,V.C9)(),i=(0,V.Kj)(n,"add"),r=Boolean(null==a?void 0:a.length);return r||i?o().createElement(ye,{"data-testid":"channel-bookmarks-container"},a.map((e=>o().createElement(ke,{key:e,bookmark:l[e]}))),i&&o().createElement(ge,{channelId:n,hasBookmarks:r,limitReached:a.length>=V.IM,canUploadFiles:t})):null};ve.propTypes={channelId:t().string.isRequired};const Ee=ve,ye=s().div.withConfig({displayName:"Container"})(["display:flex;padding:8px 6px;padding-right:0;align-items:center;border-bottom:1px solid rgba(var(--center-channel-color-rgb),0.12);overflow-x:auto;overflow-y:hidden;overflow-y:clip;"])}}]);
//# sourceMappingURL=1644.6fb20af66c7c9cefe011.js.map