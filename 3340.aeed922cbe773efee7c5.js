"use strict";(self.webpackChunkmattermost_webapp=self.webpackChunkmattermost_webapp||[]).push([[3340],{23340:(e,o,n)=>{n.r(o),n.d(o,{default:()=>u});var t=n(70314),s=n(36891),a=n(40364),i=n(23615),l=n.n(i),d=(n(48410),n(84390)),r=n.n(d);const c=e=>{let{modals:o,actions:n}=e;if(!o)return null;const{modalState:t}=o,s=[];for(const e in t)if(t.hasOwnProperty(e)){const o=t[e];if(o.open){const t=r().createElement(o.dialogType,Object.assign({},o.dialogProps,{onExited:()=>{var t,s;n.closeModal(e),null===(t=o.dialogProps)||void 0===t||null===(s=t.onExited)||void 0===s||s.call(t)},onHide:n.closeModal.bind(void 0,e),key:"".concat(e,"_modal")}));s.push(t)}}return r().createElement(r().Fragment,null,s)};c.propTypes={modals:l().shape({modalState:l().objectOf(l().shape({open:l().bool.isRequired,dialogType:l().elementType.isRequired,dialogProps:l().objectOf(l().any)})).isRequired}).isRequired,actions:l().shape({closeModal:l().func.isRequired}).isRequired};const p=c,u=(0,t.connect)((function(e){return{modals:e.views.modals}}),(function(e){return{actions:(0,s.bindActionCreators)({closeModal:a.M},e)}}))(p)}}]);
//# sourceMappingURL=3340.aeed922cbe773efee7c5.js.map