"use strict";(self.webpackChunkmattermost_webapp=self.webpackChunkmattermost_webapp||[]).push([[6815],{76815:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var s=n(70314),r=n(36891),c=n(43618),a=n(11298),u=n(23894),o=n(80847),i=n(23615),d=n.n(i),p=(n(14078),n(61418),n(52077),n(1203),n(84390)),m=n.n(p);const f=e=>{const t=(0,p.useRef)(!1),[n,s]=(0,p.useState)(!1);(0,p.useEffect)((()=>(t.current=!0,()=>{t.current=!1})),[]);const r=(0,p.useCallback)((async()=>{const n=e.match.params.postid;await e.actions.focusPost(n,e.returnTo,e.currentUserId),t.current&&s(!0)}),[e.match.params.postid,e.returnTo,e.currentUserId,e.actions]);return(0,p.useEffect)((()=>{document.body.classList.add("app__body"),r()}),[r]),n&&e.channelId&&e.teamName?null:m().createElement("div",{id:"app-content",className:"app__content"})};f.propTypes={channelId:d().string.isRequired,returnTo:d().string.isRequired,teamName:d().string,actions:d().shape({focusPost:d().func.isRequired}).isRequired,currentUserId:d().string.isRequired};const l=(0,p.memo)(f),h=(0,s.connect)((function(e){const t=(0,a.kA)(e),n=(0,c.TB)(e),s=(0,u.rc)(e);return{channelId:n?n.id:"",teamName:t?t.name:"",currentUserId:s}}),(function(e){return{actions:(0,r.bindActionCreators)({focusPost:o.A},e)}}))(l)}}]);
//# sourceMappingURL=6815.4d275ad096c91e6951dc.js.map