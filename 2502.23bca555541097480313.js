"use strict";(self.webpackChunkmattermost_webapp=self.webpackChunkmattermost_webapp||[]).push([[2502],{22502:(e,t,n)=>{n.r(t),n.d(t,{default:()=>D});var s=n(70314),a=n(36891),i=n(17086),o=n(19601),c=n(11298),r=n(78227),l=(n(61418),n(92189),n(84390)),d=n.n(l),u=n(72060),m=n(6098),h=n(28176),p=n(35683),C=n(27468);function g(e){const{formatMessage:t}=(0,u.useIntl)();return d().createElement("span",e,d().createElement("svg",{width:"14",height:"10",viewBox:"0 0 14 10",fill:"none",role:"img","aria-label":t({id:"generic_icons.adminOnlyIcon",defaultMessage:"Admin View Only Icon"})},d().createElement("path",{d:"M7 3.21005C7.3264 3.21005 7.624 3.29165 7.8928 3.45485C8.1712 3.61805 8.392 3.83885 8.5552 4.11725C8.7184 4.38605 8.8 4.68365 8.8 5.01005C8.8 5.33645 8.7184 5.63885 8.5552 5.91725C8.392 6.18605 8.1712 6.40205 7.8928 6.56525C7.624 6.72845 7.3264 6.81005 7 6.81005C6.6736 6.81005 6.3712 6.72845 6.0928 6.56525C5.824 6.40205 5.608 6.18605 5.4448 5.91725C5.2816 5.63885 5.2 5.33645 5.2 5.01005C5.2 4.68365 5.2816 4.38605 5.4448 4.11725C5.608 3.83885 5.824 3.61805 6.0928 3.45485C6.3712 3.29165 6.6736 3.21005 7 3.21005ZM7 0.502848C7.9792 0.502848 8.9152 0.694848 9.808 1.07885C10.672 1.46285 11.4304 1.99565 12.0832 2.67725C12.7456 3.35885 13.2496 4.13645 13.5952 5.01005C13.2496 5.88365 12.7456 6.66125 12.0832 7.34285C11.4304 8.02445 10.672 8.55245 9.808 8.92685C8.9152 9.31085 7.9792 9.50285 7 9.50285C6.0208 9.50285 5.0848 9.31085 4.192 8.92685C3.328 8.55245 2.5648 8.02445 1.9024 7.34285C1.2496 6.66125 0.7504 5.88365 0.4048 5.01005C0.7504 4.13645 1.2496 3.35885 1.9024 2.67725C2.5648 1.99565 3.328 1.46285 4.192 1.07885C5.0848 0.694848 6.0208 0.502848 7 0.502848ZM1.7152 5.01005C2.0416 5.67245 2.4736 6.25325 3.0112 6.75245C3.5488 7.25165 4.1584 7.63565 4.84 7.90445C5.5312 8.17325 6.2512 8.30765 7 8.30765C8.1328 8.30765 9.1744 8.01005 10.1248 7.41485C11.0752 6.81965 11.8 6.01805 12.2992 5.01005C11.8 4.00205 11.0752 3.20045 10.1248 2.60525C9.1744 2.01005 8.1328 1.71245 7 1.71245C6.2512 1.71245 5.5312 1.84685 4.84 2.11565C4.1584 2.38445 3.5488 2.76845 3.0112 3.26765C2.4736 3.76685 2.0416 4.34765 1.7152 5.01005Z",fill:"rgba(var(--center-channel-color-rgb), 0.75)",fillOpacity:"0.48"})))}var N=n(40791),f=n(28271),x=n(21214);function v(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var s=n.call(e,"string");if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class I extends d().PureComponent{constructor(e){super(e),v(this,"trackClickEvent",(()=>{const e=this.state.noticesData[this.state.presentNoticeIndex];(0,h.L9)("ui","notice_click_".concat(e.id))})),v(this,"handleNextButton",(()=>{const e=this.state.noticesData[this.state.presentNoticeIndex],t=this.state.noticesData.length;if(1===t&&e.actionText)this.trackClickEvent(),window.open(e.actionParam,"_blank");else if(this.state.presentNoticeIndex+1<t){const e=this.state.noticesData[this.state.presentNoticeIndex+1];this.props.actions.updateNoticesAsViewed([e.id]),this.setState({presentNoticeIndex:this.state.presentNoticeIndex+1})}})),v(this,"handlePreviousButton",(()=>{0!==this.state.presentNoticeIndex&&this.setState({presentNoticeIndex:this.state.presentNoticeIndex-1})})),v(this,"onModalDismiss",(()=>{this.clearDataTimer=window.setTimeout((()=>{this.setState({noticesData:[],presentNoticeIndex:0})}),3e3)})),this.state={presentNoticeIndex:0,noticesData:[]},this.clearDataTimer=void 0}componentDidMount(){this.fetchNoticesData()}componentDidUpdate(e){const t=this.props.socketStatus,n=e.socketStatus;if(t.connected&&!n.connected&&n.lastConnectAt){const e=Date.now(),t=new Date(n.lastConnectAt).getDate();new Date(e).getDate()!==t&&e>n.lastConnectAt&&this.fetchNoticesData()}e.currentTeamId||this.fetchNoticesData()}componentWillUnmount(){clearTimeout(this.clearDataTimer)}async fetchNoticesData(){const{version:e,currentTeamId:t}=this.props;if(!t)return;let n="web",s=e;(0,x.P)()&&(n="desktop",s=(0,x.zF)());const{data:a}=await this.props.actions.getInProductNotices(t,n,s);if(a&&(this.setState({noticesData:a}),a.length)){const e=this.state.noticesData[this.state.presentNoticeIndex];this.props.actions.updateNoticesAsViewed([e.id])}}confirmButtonText(e){const t=this.state.noticesData.length;return 1===t&&e.actionText?d().createElement("span",null,e.actionText):t===this.state.presentNoticeIndex+1?d().createElement(u.FormattedMessage,{id:"generic.done",defaultMessage:"Done"}):d().createElement(d().Fragment,null,d().createElement(u.FormattedMessage,{id:"generic.next",defaultMessage:"Next"}),d().createElement(N.Z,null))}cancelButtonText(){return 0!==this.state.presentNoticeIndex?d().createElement(d().Fragment,null,d().createElement(f.Z,null),d().createElement(u.FormattedMessage,{id:"generic.previous",defaultMessage:"Previous"})):null}renderCicrleIndicators(){const e=this.state.noticesData.length;if(1===e)return null;const t=[];for(let n=0;n<e;n++){let e="circle";n===this.state.presentNoticeIndex&&(e+=" active"),t.push(d().createElement("span",{id:"tutorialIntroCircle"+n,key:"circle"+n,className:e,"data-screen":n}))}return d().createElement("span",{className:"tutorial__circles"},t)}renderAdminOnlyText(){return this.state.noticesData[this.state.presentNoticeIndex].sysAdminOnly?d().createElement(d().Fragment,null,d().createElement(g,null),d().createElement(u.FormattedMessage,{id:"inProduct_notices.adminOnlyMessage",defaultMessage:"Visible to Admins only"})):null}renderImage(e){return e?d().createElement("img",{className:"productNotices__img",src:e}):null}renderActionButton(e){return 1!==this.state.noticesData.length&&e.actionText?d().createElement(p.Z,{id:"actionButton",className:"GenericModal__button actionButton",location:"product_notices_modal",href:e.actionParam||"",onClick:this.trackClickEvent},e.actionText):null}render(){if(!this.state.noticesData.length)return null;const e=this.state.noticesData[this.state.presentNoticeIndex],t=0===this.state.presentNoticeIndex?void 0:this.handlePreviousButton,n=this.state.presentNoticeIndex===this.state.noticesData.length-1;return d().createElement(m.$E,{compassDesign:!0,onExited:this.onModalDismiss,handleConfirm:this.handleNextButton,handleEnterKeyPress:this.handleNextButton,handleCancel:t,modalHeaderText:d().createElement("span",null,e.title),confirmButtonText:this.confirmButtonText(e),cancelButtonText:this.cancelButtonText(),className:"productNotices",autoCloseOnConfirmButton:n,autoCloseOnCancelButton:!1},d().createElement("span",{className:"productNotices__helpText"},d().createElement(C.Z,{message:e.description})),this.renderActionButton(e),d().createElement("div",{className:"productNotices__imageDiv"},this.renderImage(e.image)),d().createElement("div",{className:"productNotices__info"},this.renderCicrleIndicators(),this.renderAdminOnlyText()))}}const D=(0,s.connect)((function(e){const t=(0,o.iE)(e).Version||"",n=(0,r.L)(e);return{currentTeamId:(0,c.ev)(e),version:t,socketStatus:n}}),(function(e){return{actions:(0,a.bindActionCreators)({getInProductNotices:i.UG,updateNoticesAsViewed:i.Ye},e)}}))(I)},40791:(e,t,n)=>{n.d(t,{Z:()=>u});var s=n(23615),a=n.n(s),i=n(60042),o=n.n(i),c=n(84390),r=n.n(c),l=n(72060);const d=e=>{let{additionalClassName:t}=e;const{formatMessage:n}=(0,l.useIntl)();return r().createElement("i",{className:o()("icon icon-chevron-right",t),title:n({id:"generic_icons.next",defaultMessage:"Next Icon"})})};d.propTypes={additionalClassName:a().string};const u=r().memo(d)},28271:(e,t,n)=>{n.d(t,{Z:()=>u});var s=n(23615),a=n.n(s),i=n(60042),o=n.n(i),c=n(84390),r=n.n(c),l=n(72060);const d=e=>{let{additionalClassName:t}=e;const{formatMessage:n}=(0,l.useIntl)();return r().createElement("i",{className:o()("icon icon-chevron-left",t),title:n({id:"generic_icons.previous",defaultMessage:"Previous Icon"})})};d.propTypes={additionalClassName:a().string};const u=r().memo(d)}}]);
//# sourceMappingURL=2502.23bca555541097480313.js.map