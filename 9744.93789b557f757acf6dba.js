"use strict";(self.webpackChunkmattermost_webapp=self.webpackChunkmattermost_webapp||[]).push([[9744],{89744:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});var r=a(70314),s=a(36891),n=a(59713),o=(a(14078),a(68581),a(52077),a(83526),a(90938),a(911),a(92189),a(84390)),l=a.n(o),c=a(72060),i=a(38210),m=a(2664),p=a(62355),u=a(8243);function d(e,t,a){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var r=a.call(e,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class h extends l().PureComponent{constructor(e){super(e),d(this,"handleAllow",(()=>{const e=new URLSearchParams(this.props.location.search),t={responseType:e.get("response_type"),clientId:e.get("client_id"),redirectUri:e.get("redirect_uri"),state:e.get("state"),scope:e.get("store")};this.props.actions.allowOAuth2(t).then((e=>{let{data:t,error:a}=e;t&&t.redirect?window.location.href=t.redirect:a&&this.setState({error:a.message})}))})),d(this,"handleDeny",(()=>{const e=new URLSearchParams(this.props.location.search).get("redirect_uri");e&&(e.startsWith("https://")||e.startsWith("http://"))?window.location.href=e+"?error=access_denied":(0,u.s)().replace("/error")})),this.state={}}componentDidMount(){const e=document.getElementById("antiClickjack");e&&e.parentNode&&e.parentNode.removeChild(e);const t=new URLSearchParams(this.props.location.search).get("client_id");t&&!/^[a-z0-9]+$/.test(t)||this.props.actions.getOAuthAppInfo(t).then((e=>{let{data:t}=e;t&&this.setState({app:t})}))}render(){const e=this.state.app;if(!e)return null;let t,a;return t=e.icon_url?e.icon_url:p,this.state.error&&(a=l().createElement("div",{className:"prompt__error form-group"},l().createElement(i.Z,{error:this.state.error}))),l().createElement("div",{className:"container-fluid"},l().createElement("div",{className:"prompt"},l().createElement("div",{className:"prompt__heading"},l().createElement("div",{className:"prompt__app-icon"},l().createElement("img",{alt:"prompt icon",src:t,width:"50",height:"50"})),l().createElement("div",{className:"text"},l().createElement(m.Z,{id:"authorize.title",defaultMessage:"Authorize **{appName}** to Connect to Your **Mattermost** User Account",values:{appName:e.name}}))),l().createElement("p",null,l().createElement(m.Z,{id:"authorize.app",defaultMessage:"The app **{appName}** would like the ability to access and modify your basic information.",values:{appName:e.name}})),l().createElement("h2",{className:"prompt__allow"},l().createElement(m.Z,{id:"authorize.access",defaultMessage:"Allow **{appName}** access?",values:{appName:e.name}})),l().createElement("div",{className:"prompt__buttons"},l().createElement("button",{type:"submit",className:"btn btn-tertiary authorize-btn",onClick:this.handleDeny},l().createElement(c.FormattedMessage,{id:"authorize.deny",defaultMessage:"Deny"})),l().createElement("button",{type:"submit",className:"btn btn-primary authorize-btn",onClick:this.handleAllow},l().createElement(c.FormattedMessage,{id:"authorize.allow",defaultMessage:"Allow"}))),a))}}const f=(0,r.connect)(null,(function(e){return{actions:(0,s.bindActionCreators)({getOAuthAppInfo:n.jI,allowOAuth2:n.yT},e)}}))(h)},38210:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(23615),s=a.n(r),n=(a(14078),a(84390)),o=a.n(n);const l=[],c=e=>{let{error:t=null,errors:a=l,iconClassName:r,margin:s,textClassName:n,type:c}=e;if(!t&&0===a.length)return null;let i=t;if(!i)for(const e of a)e&&(i=e);return i?"modal"===c?o().createElement("div",{className:"form-group"},o().createElement("label",{className:"col-sm-12 has-error"},i)):"backstage"===c?o().createElement("div",{className:"pull-left has-error"},o().createElement("label",{className:"control-label"},i)):s?o().createElement("div",{className:"form-group has-error"},o().createElement("label",{className:"control-label"},i)):o().createElement("div",{className:"col-sm-12 ".concat(n||"has-error")},o().createElement("label",{className:"control-label"},o().createElement("i",{className:"fa ".concat(r||"fa-exclamation-circle")})," ",i)):null};c.propTypes={type:s().node,error:s().node,textClassName:s().string,iconClassName:s().string,margin:s().bool,errors:s().arrayOf(s().node)};const i=o().memo(c)}}]);
//# sourceMappingURL=9744.93789b557f757acf6dba.js.map