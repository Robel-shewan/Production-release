"use strict";(self.webpackChunkmattermost_webapp=self.webpackChunkmattermost_webapp||[]).push([[5215],{35215:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var n=a(70314),r=a(61057),i=(a(92189),a(84390)),s=a.n(i),l=a(72060),o=a(23712),c=a(35887),p=a(70174);function u(e,t,a){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var n=a.call(e,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class m extends s().PureComponent{constructor(e){super(e),u(this,"handleClick",((e,t)=>{var a;t.preventDefault(),this.props.updateTab(e.name),null===(a=t.target.closest(".settings-modal"))||void 0===a||a.classList.add("display--content")})),u(this,"handleKeyUp",((e,t)=>{(0,c.p)(t,o.default.KeyCodes.UP)?e>0&&(this.props.updateTab(this.props.tabs[e-1].name),(0,p.Y_)(this.buttonRefs[e-1].current)):(0,c.p)(t,o.default.KeyCodes.DOWN)&&e<this.props.tabs.length-1&&(this.props.updateTab(this.props.tabs[e+1].name),(0,p.Y_)(this.buttonRefs[e+1].current))})),this.buttonRefs=this.props.tabs.map((()=>s().createRef()))}renderTab(e,t){const a="".concat(e.name,"_li"),n=this.props.activeTab===e.name;let r,i="";return n&&(i="active"),r="string"==typeof e.icon?s().createElement("i",{className:e.icon,title:e.iconTitle}):s().createElement("img",{src:e.icon.url,alt:e.iconTitle,className:"icon"}),s().createElement("li",{id:"".concat(e.name,"Li"),key:a,className:i,role:"presentation"},s().createElement("button",{ref:this.buttonRefs[t],id:"".concat(e.name,"Button"),className:"cursor--pointer style--none",onClick:this.handleClick.bind(null,e),onKeyUp:this.handleKeyUp.bind(null,t),"aria-label":e.uiName.toLowerCase(),role:"tab","aria-selected":n,tabIndex:n||this.props.isMobileView?0:-1},r,e.uiName))}render(){var e;const t=this.props.tabs.map(((e,t)=>this.renderTab(e,t)));let a;return null!==(e=this.props.pluginTabs)&&void 0!==e&&e.length&&(a=s().createElement(s().Fragment,null,s().createElement("hr",null),s().createElement("li",{key:"plugin preferences heading",role:"heading",className:"header"},s().createElement(l.FormattedMessage,{id:"userSettingsModal.pluginPreferences.header",defaultMessage:"PLUGIN PREFERENCES"})),this.props.pluginTabs.map(((e,t)=>this.renderTab(e,t))))),s().createElement("div",null,s().createElement("ul",{id:"tabList",className:"nav nav-pills nav-stacked",role:"tablist","aria-orientation":"vertical"},t,a))}}const d=(0,n.connect)((function(e){return{isMobileView:(0,r.E7)(e)}}))(m)}}]);
//# sourceMappingURL=5215.48db9473baee83d3fed5.js.map