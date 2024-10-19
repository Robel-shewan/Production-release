"use strict";(self.webpackChunkmattermost_webapp=self.webpackChunkmattermost_webapp||[]).push([[9723],{69723:(e,t,a)=>{a.r(t),a.d(t,{default:()=>N});var r=a(84390),i=a.n(r),n=a(72060),o=(a(92189),a(70314)),s=a(36891),l=a(11298),d=a(23894),c=a(40364),m=a(23615),p=a.n(m),u=(a(14078),a(85939)),f=a.n(u),h=a(46299),b=a(35393),v=a(34575),y=a(23712);function g(e,t,a){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var r=a.call(e,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const _=f().div.withConfig({displayName:"HeaderLine"})(["display:flex;padding:2px 16px 0 0;flex-grow:1;user-select:none;color:var(--sidebar-header-text-color);"]),w=f().div.withConfig({displayName:"VerticalStack"})(["display:flex;flex-direction:column;flex-grow:1;"]);class E extends i().PureComponent{constructor(){super(...arguments),g(this,"handleCustomStatusEmojiClick",(e=>{e.stopPropagation();const t={modalId:y.r8.CUSTOM_STATUS,dialogType:b.Z};this.props.actions.openModal(t)}))}render(){if(!this.props.currentUser||!this.props.teamId)return null;let e=i().createElement("h1",{id:"headerTeamName",className:"team__name","data-teamid":this.props.teamId},this.props.teamDisplayName);return this.props.teamDescription&&(e=i().createElement(v.Z,{id:"team-name__tooltip",placement:"bottom",title:this.props.teamDescription},e)),i().createElement("div",{className:"SidebarHeaderDropdownButton",id:"sidebarHeaderDropdownButton"},i().createElement(_,{id:"headerInfo",className:"header__info"},i().createElement(w,null,e,i().createElement("div",{id:"headerInfoContent",className:"header__info__content"},i().createElement("div",{id:"headerUsername",className:"user__name"},"@"+this.props.currentUser.username),i().createElement(h.Z,{showTooltip:!0,tooltipDirection:"bottom",emojiStyle:{verticalAlign:"top",marginLeft:2},onClick:this.handleCustomStatusEmojiClick})))))}}g(E,"propTypes",{teamDescription:p().string,teamId:p().string,teamDisplayName:p().string,actions:p().shape({openModal:p().func.isRequired}).isRequired});const C=(0,o.connect)((function(e){const t=(0,l.kA)(e);return{currentUser:(0,d.ts)(e),teamDescription:null==t?void 0:t.description,teamDisplayName:null==t?void 0:t.display_name,teamId:null==t?void 0:t.id}}),(function(e){return{actions:(0,s.bindActionCreators)({openModal:c.h},e)}}))(E),N=function(){const e=(0,n.useIntl)().formatMessage({id:"accessibility.sections.lhsHeader",defaultMessage:"team menu region"});return i().createElement("div",{id:"lhsHeader","aria-label":e,tabIndex:-1,role:"application",className:"SidebarHeader team__header theme a11y__region","data-a11y-sort-order":"5"},i().createElement("div",{className:"d-flex"},i().createElement(C,null)))}}}]);
//# sourceMappingURL=9723.8f989c6dcedeb77d54af.js.map