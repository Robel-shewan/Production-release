"use strict";(self.webpackChunkmattermost_webapp=self.webpackChunkmattermost_webapp||[]).push([[2109],{81494:(e,t,i)=>{i.r(t),i.d(t,{default:()=>w});var a=i(23615),n=i.n(a),l=i(84390),r=i.n(l),c=(i(61418),i(52077),i(83526),i(43458)),o=i(70314),s=i(19601),u=i(15308),f=i(69317);function d(e){const t=(0,o.useSelector)(s.D_),i=(0,l.useCallback)((async i=>t?e.filter.length>0?await t.search(e.filter,{offset:i,limit:10}):await t.trending({offset:i,limit:10}):{}),[e.filter,t]);return r().createElement("div",{className:"emoji-picker__items gif-picker__items"},r().createElement(c.rj,{key:0===e.filter.length?"trending":e.filter,columns:2,gutter:8,hideAttribution:!0,width:e.width,noResultsMessage:r().createElement(u.Z,{variant:f.U.Search,titleValues:{channelName:"".concat(e.filter)}}),fetchGifs:i,onGifClick:e.onClick}))}d.propTypes={width:n().number.isRequired,filter:n().string.isRequired};const m=(0,l.memo)(d);i(911);var g=i(72060),p=i(83198),h=i.n(p),k=i(83905);const v=i.p+"files/91a3a29ed2f93ba44792.png",C=i.p+"files/c01e2180eeaf3ec6fc96.png";function _(e){const t=(0,o.useSelector)(k.gh),{formatMessage:i}=(0,g.useIntl)(),a=(0,l.useCallback)((t=>{var i,a,n;t.preventDefault();const l=null!==(i=null===(a=t.target)||void 0===a||null===(n=a.value)||void 0===n?void 0:n.replace(/^:|:$/g,""))&&void 0!==i?i:"";e.onChange(l)}),[e.onChange]),n=(0,l.useMemo)((()=>!!h().mostReadable(t.centerChannelBg,["#FFFFFF","#000000"],{includeFallbackColors:!1}).isLight()),[t.centerChannelBg]);return r().createElement("div",{className:"emoji-picker__search-container"},r().createElement("div",{className:"emoji-picker__text-container"},r().createElement("span",{className:"icon-magnify icon emoji-picker__search-icon"}),r().createElement("input",{id:"emojiPickerSearch",className:"emoji-picker__search","aria-label":i({id:"gif_picker.input.label",defaultMessage:"Search for GIFs"}),placeholder:i({id:"gif_picker.input.placeholder",defaultMessage:"Search GIPHY"}),type:"text",autoFocus:!0,autoComplete:"off",onChange:a,value:e.value})),r().createElement("div",{className:"gif-attribution"},r().createElement("img",{src:n?C:v,alt:i({id:"gif_picker.attribution.alt",defaultMessage:"Powered by GIPHY"})})))}_.propTypes={value:n().string.isRequired,onChange:n().func.isRequired};const b=(0,l.memo)(_),R=e=>{const t=(0,l.useCallback)(((t,i)=>{if(e.onGifClick){i.preventDefault();const a="![".concat(t.title,"](").concat(t.images.fixed_height.url,")");e.onGifClick(a)}}),[e.onGifClick]),i=(0,l.useMemo)((()=>{var t,i,a,n;return(null!==(t=null===(i=e.getRootPickerNode)||void 0===i||null===(a=i.call(e))||void 0===a||null===(n=a.getBoundingClientRect())||void 0===n?void 0:n.width)&&void 0!==t?t:350)-24}),[e.getRootPickerNode]);return r().createElement("div",null,r().createElement(b,{value:e.filter,onChange:e.handleFilterChange}),r().createElement(m,{width:i,filter:e.filter,onClick:t}))};R.propTypes={filter:n().string.isRequired,onGifClick:n().func,handleFilterChange:n().func.isRequired,getRootPickerNode:n().func.isRequired};const w=R}}]);
//# sourceMappingURL=2109.ccabb35de84e4671eecb.js.map