"use strict";(self.webpackChunkmattermost_webapp=self.webpackChunkmattermost_webapp||[]).push([[7590],{27590:(e,t,a)=>{a.r(t),a.d(t,{default:()=>w});var s=a(84390),r=a.n(s),n=a(72060),l=a(70314),i=a(9448),c=a(83905),d=a(11298),o=a(52508),u=a(35658),m=(a(14078),a(6098)),f=a(97042),p=a(9804);const g=r().createElement("span",{className:"d-flex align-items-center"},r().createElement(n.FormattedMessage,{id:"drafts.tutorialTip.title",defaultMessage:"Drafts"}),r().createElement(p.Z,{variant:"success",text:r().createElement(n.FormattedMessage,{id:"tag.default.new",defaultMessage:"NEW"})})),h=r().createElement(r().Fragment,null,r().createElement(n.FormattedMessage,{id:"drafts.tutorialTip.description",defaultMessage:"With the new Drafts view, all of your unfinished messages are collected in one place. Return here to read, edit, or send draft messages."})),b=r().createElement(n.FormattedMessage,{id:"drafts.tutorial_tip.notNow",defaultMessage:"Not now"}),E=r().createElement(n.FormattedMessage,{id:"drafts.tutorial_tip.viewDrafts",defaultMessage:"View drafts"}),v=()=>{const e=(0,l.useDispatch)(),t=(0,i.useHistory)(),a=(0,l.useSelector)(u.tv),{url:n}=(0,i.useRouteMatch)(),c="".concat(n,"/drafts"),[d,p]=(0,s.useState)(a),v=(0,s.useCallback)((t=>{t.stopPropagation(),e((0,o.WB)({[f.Preferences.DRAFTS_TOUR_TIP_SHOWED]:!0})),p(!1)}),[]),_=(0,s.useCallback)((()=>{e((0,o.WB)({[f.Preferences.DRAFTS_TOUR_TIP_SHOWED]:!0})),p(!1),t.push(c)}),[]),D=(0,s.useCallback)((t=>{t.stopPropagation(),t.preventDefault(),d?(e((0,o.WB)({[f.Preferences.DRAFTS_TOUR_TIP_SHOWED]:!0})),p(!1)):p(!0)}),[]),M=(0,m.kt)(["sidebar-drafts-button"],[]);return r().createElement(r().Fragment,null,a&&r().createElement(m.In,{show:d,screen:h,title:g,overlayPunchOut:M,placement:"right-start",pulsatingDotPlacement:"right",step:1,singleTip:!0,showOptOut:!1,interactivePunchOut:!1,handleDismiss:v,handleNext:_,handleOpen:D,handlePrevious:v,nextBtn:E,prevBtn:b}))},_=(0,s.memo)(v);var D=a(18734);const M=(0,u.v)();function S(){const e=(0,l.useDispatch)(),t=(0,l.useSelector)(c.TJ),a=(0,l.useSelector)(M),u=(0,l.useSelector)(d.ev),{url:m}=(0,i.useRouteMatch)(),f=(0,i.useRouteMatch)("/:team/drafts");return(0,s.useEffect)((()=>{t&&e((0,o.Oe)(u))}),[u,t]),a||f?r().createElement("ul",{className:"SidebarDrafts NavGroupContent nav nav-pills__container"},r().createElement("li",{className:"SidebarChannel",tabIndex:-1,id:"sidebar-drafts-button"},r().createElement(i.NavLink,{to:"".concat(m,"/drafts"),id:"sidebarItem_drafts",activeClassName:"active",draggable:"false",className:"SidebarLink sidebar-item",tabIndex:0},r().createElement("i",{"data-testid":"draftIcon",className:"icon icon-pencil-outline"}),r().createElement("div",{className:"SidebarChannelLinkLabel_wrapper"},r().createElement("span",{className:"SidebarChannelLinkLabel sidebar-item__name"},r().createElement(n.FormattedMessage,{id:"drafts.sidebarLink",defaultMessage:"Drafts"}))),a>0&&r().createElement(D.Z,{unreadMentions:a})),r().createElement(_,null))):null}const w=(0,s.memo)(S)}}]);
//# sourceMappingURL=7590.51612def51168fe0c55e.js.map