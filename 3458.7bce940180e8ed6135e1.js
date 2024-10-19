(self.webpackChunkmattermost_webapp=self.webpackChunkmattermost_webapp||[]).push([[3458],{43458:(e,t,n)=>{"use strict";n.d(t,{rj:()=>nt});var r=n(36585),i=n(84390),o=n.n(i),a=n(85939),s=n.n(a),l="#121212",c="#212121",u="#4a4a4a",d="#a6a6a6",f="#ffffff",h="#00ccff",p="#00ff99",m="#9933ff",g="#ff6666",v="#fff35c",y=n(28175);function b(e,t,n,r){var i,o=!1,a=0;function s(){i&&clearTimeout(i)}function l(){for(var l=arguments.length,c=new Array(l),u=0;u<l;u++)c[u]=arguments[u];var d=this,f=Date.now()-a;function h(){a=Date.now(),n.apply(d,c)}o||(r&&!i&&h(),s(),void 0===r&&f>e?h():!0!==t&&(i=setTimeout(r?function(){i=void 0}:h,void 0===r?e-f:e)))}return"boolean"!=typeof t&&(r=n,n=t,t=void 0),l.cancel=function(){s(),o=!0},l}function w(e,t,n){return void 0===n?b(e,t,!1):b(e,n,!1!==t)}n(17827);var E,_=Object.defineProperty,C=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,L=(e,t,n)=>t in e?_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,R=(e,t)=>{for(var n in t||(t={}))x.call(t,n)&&L(e,n,t[n]);if(C)for(var n of C(t))k.call(t,n)&&L(e,n,t[n]);return e},O=(e,t,n)=>{const i=(0,r.ei)(e,[n]),o=(0,r.ei)(t,[n]);return i[n]&&o[n]?R(R(R({},e),t),{[n]:i[n]+", "+o[n]}):R(R({},e),t)},S=("undefined"!=typeof window?window:global)||{},N=`${(null==(E=S)?void 0:E.GIPHY_PINGBACK_URL)||"https://pingback.giphy.com"}/v2/pingback?apikey=l0HlIwPWyBBUDAUgM`,A=[];S.giphyRandomId=(0,r.u8)();var F="";function $(){const e=[...A];A=[],(e=>{const t=(0,r.iJ)();null==t||t.set("Content-Type","application/json"),r.Yd.debug("Pingback session",e),e.length?fetch(N,{method:"POST",body:JSON.stringify({events:e}),headers:t}).catch((e=>{r.Yd.warn(`pingbacks failing to post ${e}`)})):new Promise((e=>e()))})(e)}var T,P,I=w(1e3,$);null==(P=(T=S).addEventListener)||P.call(T,"beforeunload",$);var M=({userId:e,eventType:t,actionType:n,attributes:i,queueEvents:o=!0,analyticsResponsePayload:a})=>{F=e?String(e):F;const s={ts:Date.now(),attributes:i,action_type:n,user_id:(0,r.u8)(),analytics_response_payload:a};F&&(s.logged_in_user_id=F),s.analytics_response_payload&&(s.analytics_response_payload=`${s.analytics_response_payload}${r.Yd.ENABLED?"&mode=verification":""}`),t&&(s.event_type=t),A.push(s),o?I():$()},j=n(53125),D=n(78217),G=n(85859),V=n(32621),z=n(73893),Z=n(4687),H=Object.defineProperty,B=Object.defineProperties,U=Object.getOwnPropertyDescriptors,W=Object.getOwnPropertySymbols,K=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable,q=(e,t,n)=>t in e?H(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Q=(e,t)=>{for(var n in t||(t={}))K.call(t,n)&&q(e,n,t[n]);if(W)for(var n of W(t))Y.call(t,n)&&q(e,n,t[n]);return e},J=(e,t)=>B(e,U(t)),X=(e,t,n)=>new Promise(((r,i)=>{var o=e=>{try{s(n.next(e))}catch(e){i(e)}},a=e=>{try{s(n.throw(e))}catch(e){i(e)}},s=e=>e.done?r(e.value):Promise.resolve(e.value).then(o,a);s((n=n.apply(e,t)).next())})),ee=s().img`
    object-fit: cover;
    width: 32px;
    height: 32px;
    margin-right: 8px;
`,te=({user:e,className:t=""})=>{const n=(0,i.useRef)(Math.floor(5*Math.random())+1),r=e.avatar_url?(e=>{var t,n;if(!e)return"";const r=null==(n=null==(t=null==e?void 0:e.split("."))?void 0:t.pop())?void 0:n.toLowerCase();return e.replace(`.${r}`,`/80h.${r}`)})(e.avatar_url):`https://media.giphy.com/avatars/default${n.current}.gif`;return o().createElement(ee,{src:r,className:t})},ne=({className:e="",size:t=17,fill:n="#15CDFF"})=>o().createElement("svg",{className:[ne.className,e].join(" "),height:t,width:"19px",viewBox:"0 0 19 17"},o().createElement("path",{className:ne.checkMarkClassName,d:"M9.32727273,9.44126709 L9.32727273,3.03016561 L6.55027155,3.03016561 L6.55027155,10.8150746 L6.55027155,12.188882 L12.1042739,12.188882 L12.1042739,9.44126709 L9.32727273,9.44126709 Z",fill:l,transform:"translate(9.327273, 7.609524) scale(-1, 1) rotate(-45.000000) translate(-9.327273, -7.609524) "}),o().createElement("g",{transform:"translate(-532.000000, -466.000000)",fill:n},o().createElement("g",{transform:"translate(141.000000, 235.000000)"},o().createElement("g",{transform:"translate(264.000000, 0.000000)"},o().createElement("g",{transform:"translate(10.000000, 224.000000)"},o().createElement("g",{transform:"translate(114.000000, 2.500000)"},o().createElement("path",{d:"M15.112432,4.80769231 L16.8814194,6.87556817 L19.4157673,7.90116318 L19.6184416,10.6028916 L21.0594951,12.9065042 L19.6184416,15.2101168 L19.4157673,17.9118452 L16.8814194,18.9374402 L15.112432,21.0053161 L12.4528245,20.3611511 L9.79321699,21.0053161 L8.02422954,18.9374402 L5.48988167,17.9118452 L5.28720734,15.2101168 L3.84615385,12.9065042 L5.28720734,10.6028916 L5.48988167,7.90116318 L8.02422954,6.87556817 L9.79321699,4.80769231 L12.4528245,5.4518573 L15.112432,4.80769231 Z M17.8163503,10.8991009 L15.9282384,9.01098901 L11.5681538,13.3696923 L9.68115218,11.4818515 L7.81302031,13.3499833 L9.7011322,15.2380952 L11.5892441,17.1262071 L17.8163503,10.8991009 Z"})))))));ne.className="giphy-verified-badge",ne.checkMarkClassName="giphy-verified-checkmark";var re=ne,ie=s().div`
    color: white;
    font-size: 16px;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    -webkit-font-smoothing: antialiased;
`,oe=s()(re)`
    margin-left: 4px;
    flex-shrink: 0;
`,ae=s().div`
    display: flex;
    align-items: center;
    min-width: 0;
`,se=({user:e})=>{const{display_name:t,username:n}=e;return o().createElement(ae,null,o().createElement(ie,null,t||`@${n}`),e.is_verified?o().createElement(oe,{size:14}):null)},le=s().div`
    display: flex;
    align-items: center;
    font-family: interface, helvetica, arial;
`,ce=s()(te)`
    flex-shrink: 0;
`,ue=({gif:e,className:t,onClick:n})=>{const{user:r}=e;return(null==r?void 0:r.username)||(null==r?void 0:r.display_name)?o().createElement(le,{className:[ue.className,t].join(" "),onClick:t=>{if(t.preventDefault(),t.stopPropagation(),n)n(e);else{const e=r.profile_url;e&&window.open(e,"_blank")}}},o().createElement(ce,{user:r}),o().createElement(se,{user:e.user})):null};ue.className="giphy-attribution";var de=ue,fe=s().div`
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(18, 18, 18, 0.6));
    cursor: default;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 75px;
    pointer-events: none;
`,he=s()(de)`
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
`,pe=s().div`
    transition: opacity 150ms ease-in;
`,me=({gif:e,isHovered:t,onClick:n})=>{const r=(0,i.useRef)(t);return t&&(r.current=!0),e.user&&r.current?o().createElement(pe,{style:{opacity:t?1:0}},o().createElement(fe,null),o().createElement(he,{gif:e,onClick:n})):null},ge=({children:e,className:t,onVisibleChange:n,config:r})=>{const a=(0,i.useRef)(null);return(0,i.useEffect)((()=>{let e;return a.current&&(e=new IntersectionObserver((([e])=>{n&&n(e.isIntersecting)}),r),e.observe(a.current)),()=>null==e?void 0:e.disconnect()}),[n,a,r]),o().createElement("div",{ref:a,className:t},e)},ve=e=>(t,n,i,o={})=>{t.analytics_response_payload&&M({analyticsResponsePayload:t.analytics_response_payload,userId:n,actionType:e,attributes:Q({position:JSON.stringify((0,r.VK)(i))},o)})},ye=ve("CLICK"),be=ve("HOVER"),we=(0,i.createContext)({}),Ee=({attributes:e,children:t})=>{const{attributes:n={}}=(0,i.useContext)(we);return o().createElement(we.Provider,{value:{attributes:O(n,e,"layout_type")}},t)},_e=s().div`
    position: relative;
    display: block;
    img {
        display: block;
    }
    .${re.className} {
        g {
            fill: white;
        }
    }
    .${re.checkMarkClassName} {
        opacity: 0;
    }
`,Ce=[h,p,m,g,v],xe="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",ke=!("undefined"==typeof window||!window.document||!window.document.createElement),Le=()=>{},Re=({children:e})=>{const[t,n]=(0,i.useState)(!1);return(0,i.useEffect)((()=>{n(!0)}),[]),t?o().createElement(o().Fragment,null,e):null},Oe=({gif:e,width:t,percentWidth:n,height:a,onGifRightClick:s=Le,className:l="",onGifClick:c=Le,onGifKeyPress:u=Le,onGifSeen:d=Le,onGifVisible:f=Le,user:h={},backgroundColor:p,overlay:m,hideAttribution:g=!1,noLink:v=!1,borderRadius:y=4,style:b,tabIndex:w})=>{const[E,_]=(0,i.useState)(!1),[C,x]=(0,i.useState)(!1),[k,L]=(0,i.useState)(!ke),[R,O]=(0,i.useState)(""),S=(0,i.useRef)(Ce[Math.round(Math.random()*(Ce.length-1))]),N=(0,i.useRef)(null),A=(0,i.useRef)(null),F=(0,i.useRef)(),$=(0,i.useRef)(),T=(0,i.useRef)(),P=(0,i.useRef)(Le),{attributes:I}=(0,i.useContext)(we);let j=m;j||g||(j=me),P.current=t=>{_(!0),r.Yd.debug(`GIF ${e.id} seen. ${e.title}`),((e,t,n,r={})=>{e.analytics_response_payload&&M({analyticsResponsePayload:e.analytics_response_payload,userId:t,actionType:"SEEN",attributes:Q({position:JSON.stringify(n)},r)})})(e,null==h?void 0:h.id,t.boundingClientRect,I),null==d||d(e,t.boundingClientRect),$.current&&$.current.disconnect()};const D=()=>{$.current||($.current=new IntersectionObserver((([e])=>{e.isIntersecting&&P.current(e)}),{threshold:[.99]})),!E&&N.current&&$.current&&$.current.observe(N.current)};(0,i.useEffect)((()=>{var t,n;(null==(t=A.current)?void 0:t.complete)&&(D(),f(e)),null==(n=$.current)||n.disconnect(),_(!1)}),[e.id]),(0,i.useEffect)((()=>(F.current=new IntersectionObserver((([e])=>{const{isIntersecting:t}=e;L(t),!t&&$.current&&$.current.disconnect()})),F.current.observe(N.current),()=>{F.current&&F.current.disconnect(),$.current&&$.current.disconnect(),T.current&&clearTimeout(T.current)})),[]);const G=a||(0,r.f8)(e,t);let V;n&&(V=`${Math.round(G/t*100)}%`);const z=(0,r.oj)(e.images,t,G),Z=e.images[z.renditionName],H=p||(e.is_sticker?"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4AQMAAACSSKldAAAABlBMVEUhIiIWFhYoSqvJAAAAGElEQVQY02MAAv7///8PWxqIPwDZw5UGABtgwz2xhFKxAAAAAElFTkSuQmCC') 0 0":S.current),B=y?"hidden":"unset";return o().createElement(_e,{as:v?"div":"a",href:v?void 0:e.url,"data-giphy-id":e.id,"data-giphy-is-sticker":e.is_sticker,style:Q({width:n||t,height:V||G,overflow:B,borderRadius:y},b),className:[Oe.className,l].join(" "),onMouseOver:t=>{clearTimeout(T.current),t.persist(),x(!0),T.current=window.setTimeout((()=>{be(e,null==h?void 0:h.id,t.target,I)}),200)},onMouseLeave:()=>{clearTimeout(T.current),x(!1)},onClick:t=>{ye(e,null==h?void 0:h.id,t.target,I),c(e,t)},onContextMenu:t=>s(e,t),onKeyPress:t=>{u(e,t)},tabIndex:w,ref:N},o().createElement("picture",null,o().createElement("source",{type:"image/webp",srcSet:k?Z.webp:xe,suppressHydrationWarning:!0}),o().createElement("img",{ref:A,suppressHydrationWarning:!0,className:[Oe.imgClassName,R].join(" "),src:k?Z.url:xe,style:{background:H},width:"100%",height:"100%",alt:(0,r.PY)(e),onLoad:k?t=>{D(),f(e,t),O(Oe.imgLoadedClassName)}:()=>{}})),j&&o().createElement(Re,null,k&&o().createElement(j,{gif:e,isHovered:C,width:t,height:G})))};Oe.className="giphy-gif",Oe.imgClassName="giphy-gif-img",Oe.imgLoadedClassName="giphy-img-loaded";var Se=Oe,Ne=s().div`
    -webkit-overflow-scrolling: touch;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    position: relative;
`,Ae=s()(Se)`
    position: relative;
    display: inline-block;
    list-style: none;
    margin-left: ${e=>e.ml}px;
    /* make sure gifs are fully visible with a scrollbar */
    margin-bottom: 1px;

    &:first-of-type {
        margin-left: 0;
    }
    .${Se.imgClassName} {
        position: absolute;
        top: 0;
        left: 0;
    }
`,Fe=s()(ge)`
    display: inline-block;
`,$e=s().div`
    width: 30px;
    display: inline-block;
    opacity: ${e=>e.isFirstLoad?0:1};
    height: ${e=>e.height}px;
`,Te=Object.freeze({gutter:6,user:{},initialGifs:[]}),Pe=Object.freeze({isFetching:!1,gifs:[],isLoaderVisible:!1,isDoneFetching:!1}),Ie=class e extends i.PureComponent{constructor(){super(...arguments),this.state=J(Q({},Pe),{gifs:this.props.initialGifs||[]}),this.unmounted=!1,this.paginator=(0,y.mY)(this.props.fetchGifs,this.state.gifs),this.onLoaderVisible=e=>{this.unmounted||this.setState({isLoaderVisible:e},this.onFetch)},this.onFetch=w(100,(()=>X(this,null,(function*(){if(this.unmounted)return;const{isFetching:e,isLoaderVisible:t,gifs:n}=this.state;if(!e&&t){let e;this.setState({isFetching:!0});try{e=yield this.paginator()}catch(e){this.setState({isFetching:!1})}if(e)if(n.length===e.length)this.setState({isDoneFetching:!0});else{this.setState({gifs:e,isFetching:!1});const{onGifsFetched:t}=this.props;t&&t(e),this.onFetch()}}}))))}componentDidMount(){this.unmounted=!1,this.onFetch()}componentWillUnmount(){this.unmounted=!0}render(){const{onGifVisible:t,onGifRightClick:n,gifHeight:i,gifWidth:a,gutter:s,className:l=e.className,onGifSeen:c,onGifClick:u,onGifKeyPress:d,user:f,overlay:h,hideAttribution:p,noLink:m,noResultsMessage:g,backgroundColor:v,borderRadius:y,tabIndex:b=0,loaderConfig:w}=this.props,{gifs:E,isDoneFetching:_}=this.state,C=!_,x=0===E.length;return o().createElement(Ee,{attributes:{layout_type:"CAROUSEL"}},o().createElement(Ne,{className:l},E.map((e=>o().createElement(Ae,{gif:e,key:e.id,tabIndex:b,width:a||(0,r.Ol)(e,i),height:i,onGifClick:u,onGifKeyPress:d,onGifSeen:c,onGifVisible:t,onGifRightClick:n,user:f,ml:s,overlay:h,hideAttribution:p,noLink:m,borderRadius:y,backgroundColor:v}))),!C&&0===E.length&&g,C&&o().createElement(Fe,{onVisibleChange:this.onLoaderVisible,config:w},o().createElement($e,{isFirstLoad:x,height:i}))))}};Ie.className="giphy-carousel",Ie.defaultProps=Te;var Me=s().div`
    color: ${d};
    display: flex;
    justify-content: center;
    margin: 30px 0;
    font-family: interface, Helvetica Neue, helvetica, sans-serif;
    font-size: 16px;
    font-weight: 600;
    a {
        color: ${h};
        cursor: pointer;
        &:hover {
            color: white;
        }
    }
`,je=({onClick:e})=>o().createElement(Me,null,"Error loading GIFs. ",o().createElement("a",{onClick:e},"Try again?")),De="#2e2e2e",Ge=u,Ve=s().div`
    align-items: center;
    background-color: ${({backgroundColor:e})=>e};
    border-radius: 16px;
    display: flex;
    max-width: fit-content;
    overflow: hidden;
    padding: 4px 5px 5px 6px;
`,ze=s().div`
    overflow-x: auto;
    overflow-y: hidden;
    position: relative;
    -webkit-overflow-scrolling: touch;
`,Ze=s().div`
    display: inline-flex;
    justify-content: space-between;
    overflow: hidden;
    white-space: nowrap;
    width: ${({width:e})=>`${e}px`};
`,He=s().div`
    background-color: ${({color:e})=>e};
    box-sizing: border-box;
    height: ${({gifHeight:e})=>`${Math.round(.75*e)}px`};
    margin: ${({gutter:e})=>`0 ${e}px`};
    width: 2px;
`,Be=s()(Se)`
    display: inline-block;
    flex-shrink: 0;
    list-style: none;
    /* make sure gifs are fully visible with a scrollbar */
    margin-bottom: 1px;
    position: relative;

    .${Se.imgClassName} {
        position: absolute;
        top: 0;
        left: 0;
    }
`;function Ue(e){var t;const n=e,{backgroundColor:a=De,className:s,dividerColor:l=Ge,fetchVariations:c,gif:u,gifHeight:d,GifProps:f={},gifWidth:h,gutter:p=6,hideAttribution:m,loader:g,noLink:v,onGifClick:y,onGifKeyPress:b,onGifRightClick:w,onGifSeen:E,onGifVisible:_,onVariationsFetched:C,overlay:x,tabIndex:k=0,user:L}=n,R=((e,t)=>{var n={};for(var r in e)K.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&W)for(var r of W(e))t.indexOf(r)<0&&Y.call(e,r)&&(n[r]=e[r]);return n})(n,["backgroundColor","className","dividerColor","fetchVariations","gif","gifHeight","GifProps","gifWidth","gutter","hideAttribution","loader","noLink","onGifClick","onGifKeyPress","onGifRightClick","onGifSeen","onGifVisible","onVariationsFetched","overlay","tabIndex","user"]),O=null!=(t=u.variation_count)?t:0,S=h||(0,r.Ol)(u,d),N=O*S+Math.max(0,O-1)*p,A=(0,D.Z)(c),F=(0,D.Z)(C),[$,T]=(0,j.Z)((()=>X(this,null,(function*(){var e;const t=yield A.current(u.id),n=null!=(e=null==t?void 0:t.data)?e:[];return F.current&&F.current(n),n}))),[u],{loading:!0,value:[]});(0,i.useEffect)((()=>{T()}),[T]);const P=Q({backgroundColor:"transparent",height:d,hideAttribution:m,noLink:v,onGifClick:y,onGifKeyPress:b,onGifRightClick:w,onGifSeen:E,onGifVisible:_,overlay:x,tabIndex:k,user:L,width:S},f);return o().createElement(Ve,Q({backgroundColor:a,className:[Ue.className,s].join(" ")},R),o().createElement(Be,J(Q({},P),{gif:u})),O?o().createElement(He,{className:Ue.dividerClassName,color:l,gifHeight:d,gutter:p}):null,o().createElement(ze,{className:Ue.variationsViewportClassName},o().createElement(Ze,{className:Ue.variationsContainerClassName,width:N},(()=>{var e;return $.loading?g?o().createElement(g,{className:Ue.loaderClassName}):null:$.error?o().createElement(je,{onClick:T}):o().createElement(o().Fragment,null,(null!=(e=$.value)?e:[]).map((e=>o().createElement(Be,J(Q({},P),{key:e.id,gif:e})))))})())))}Ue.className="giphy-emoji-variations-list",Ue.dividerClassName="giphy-emoji-variations-divider",Ue.loaderClassName="giphy-emoji-variations-loader",Ue.variationsViewportClassName="giphy-emoji-variations-viewport",Ue.variationsContainerClassName="giphy-emoji-variations-container";var We=a.keyframes`
     to {
    transform: scale(1.75) translateY(-20px);
  }
`,Ke=s().div`
    display: flex;
    align-items: center;
    height: ${37}px;
    padding-top: 15px;
    margin: 0 auto;
    text-align: center;
    justify-content: center;
    animation: pulse 0.8s ease-in-out 0s infinite alternate backwards;
`,Ye=s().div`
    display: inline-block;
    height: 10px;
    width: 10px;
    margin: ${37}px 10px 10px 10px;
    position: relative;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
    animation: ${We} cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.75s infinite alternate;
    background: ${e=>e.color};
    animation-delay: ${e=>e.delay};
`,qe=({className:e=""})=>o().createElement(Ke,{className:e},o().createElement(Ye,{color:p,delay:"0"}),o().createElement(Ye,{color:h,delay:".1s"}),o().createElement(Ye,{color:m,delay:".2s"}),o().createElement(Ye,{color:g,delay:".3s"}),o().createElement(Ye,{color:v,delay:".4s"})),Qe=(0,i.memo)((({columns:e,gutter:t,useTransform:n=!0,itemWidth:r,itemHeights:i,children:a,columnOffsets:s=[]})=>{const l={};return o().createElement("div",{style:l},function(){let c;const u=function(e,t=[]){return Array.apply(null,Array(e)).map(((e,n)=>t[n]||0))}(e,s),d=o().Children.map(a,((e,a)=>{const s={position:"absolute"};c=u.indexOf(Math.min.apply(Math,u));const l=`${u[c]}px`,d=c*r+c*t+"px";n?s.transform=`translate3d(${d}, ${l}, 0)`:(s.top=l,s.left=d);const f=i[a];return f&&(u[c]+=f+t),o().cloneElement(e,{style:s})}));return l.position="relative",l.width=e*r+(e-1)*t+"px",l.height=Math.max.apply(Math,u)-t+"px",d}())})),Je=s().div`
    opacity: ${e=>e.isFirstLoad?0:1};
`,Xe=Object.freeze({gutter:6,user:{},initialGifs:[]}),et=Object.freeze({isFetching:!1,isError:!1,gifWidth:0,gifs:[],isLoaderVisible:!1,isDoneFetching:!1}),tt=class e extends i.PureComponent{constructor(){super(...arguments),this.state=J(Q({},et),{gifs:this.props.initialGifs||[]}),this.unmounted=!1,this.paginator=(0,y.mY)(this.props.fetchGifs,this.state.gifs),this.onLoaderVisible=e=>{this.unmounted||this.setState({isLoaderVisible:e},this.onFetch)},this.onFetch=w(e.fetchDebounce,(()=>X(this,null,(function*(){if(this.unmounted)return;const{isFetching:e,isLoaderVisible:t,gifs:n}=this.state,r=n.length;if(!e&&t){let e;this.setState({isFetching:!0,isError:!1});try{if(e=yield this.paginator(),this.unmounted)return}catch(e){if(this.unmounted)return;this.setState({isFetching:!1,isError:!0});const{onGifsFetchError:t}=this.props;t&&t(e)}if(e)if(r===e.length)this.setState({isDoneFetching:!0});else{this.setState({gifs:e,isFetching:!1});const{onGifsFetched:t}=this.props;t&&t(e),this.onFetch()}}}))))}componentDidMount(){this.unmounted=!1,this.onFetch()}componentWillUnmount(){this.unmounted=!0}render(){const{onGifVisible:t,onGifRightClick:n,className:i=e.className,onGifSeen:a,onGifClick:s,onGifKeyPress:l,user:c,overlay:u,hideAttribution:d,noLink:f,borderRadius:h,noResultsMessage:p,columns:m,width:g,gutter:v,useTransform:y,columnOffsets:b,backgroundColor:w,loaderConfig:E,tabIndex:_=0,layoutType:C="GRID",loader:x=qe}=this.props,{gifWidth:k,gifs:L,isError:R,isDoneFetching:O}=this.state,S=!O,N=0===L.length,A=L.map((e=>(0,r.f8)(e,k)));return o().createElement(Ee,{attributes:{layout_type:C}},o().createElement("div",{className:i,style:{width:g}},o().createElement(Qe,{itemHeights:A,useTransform:y,itemWidth:k,columns:m,gutter:v,columnOffsets:b},L.map((e=>o().createElement(Se,{gif:e,tabIndex:_,key:e.id,width:k,onGifClick:s,onGifKeyPress:l,onGifSeen:a,onGifVisible:t,onGifRightClick:n,user:c,overlay:u,backgroundColor:w,hideAttribution:d,noLink:f,borderRadius:h})))),!S&&0===L.length&&p,R?o().createElement(je,{onClick:this.onFetch}):S&&o().createElement(ge,{onVisibleChange:this.onLoaderVisible,config:E},o().createElement(Je,{isFirstLoad:N},o().createElement(x,{className:e.loaderClassName})))))}};tt.className="giphy-grid",tt.loaderClassName="loader",tt.fetchDebounce=250,tt.defaultProps=Xe,tt.getDerivedStateFromProps=({columns:e,gutter:t,width:n},r)=>{const i=t*(e-1),o=Math.floor((n-i)/e);return r.gifWidth!==o?{gifWidth:o}:null};var nt=tt,rt="--searchbar-height",it="--searchbar-bg-color",ot="--searchbar-bg-color-2",at="--searchbar-fg-color",st="--searchbar-cancel-button-display",lt=(s().div`
    ${rt}: ${e=>e.searchbarHeight||42}px;
    @media (${e=>e.mobileMediaQuery}) {
        ${rt}: ${e=>e.mobileSearchbarHeight||35}px;
    }
    ${it}: ${f};
    ${ot}: ${f};
    ${at}: ${l};
    ${e=>e.darkMode&&a.css`
            ${at}: ${f};
            ${it}: ${l};
            ${ot}: ${u};
        `}
    ${st}: ${e=>e.hideCancelButton?"none":"block"};
`,(0,i.createContext)({})),ct=(0,i.createContext)({}),ut=s().svg`
    position: relative;
    right: 10px;
    margin-left: 5px;
    cursor: pointer;
    display: var(${st});
`,dt=({width:e=17,height:t=17,setCleared:n})=>{const{term:r,setActiveChannel:a,activeChannel:s}=(0,i.useContext)(lt);return r||s?o().createElement(ut,{className:dt.className,width:e,height:t,viewBox:"0 0 17 17",version:"1.1",xmlns:"http://www.w3.org/2000/svg",onClick:e=>{e.stopPropagation(),e.preventDefault(),n(!0),a(void 0)}},o().createElement("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",opacity:"0.582730817"},o().createElement("g",{transform:"translate(-300.000000, -150.000000)",fill:"#8E8E93",fillRule:"nonzero"},o().createElement("g",{transform:"translate(0.000000, 135.000000)"},o().createElement("g",null,o().createElement("g",null,o().createElement("g",{transform:"translate(11.000000, 13.000000)"},o().createElement("g",{transform:"translate(289.000000, 2.000000)"},o().createElement("path",{d:"M8.5,0 C3.805875,0 0,3.805875 0,8.5 C0,13.194125 3.805875,17 8.5,17 C13.194125,17 17,13.194125 17,8.5 C17,3.805875 13.194125,0 8.5,0 Z M9.50158333,8.5 C9.50158333,8.5 11.7250417,10.7234583 11.834125,10.8325417 C12.1110833,11.1095 12.1110833,11.557875 11.834125,11.834125 C11.5571667,12.1110833 11.1087917,12.1110833 10.8325417,11.834125 C10.7234583,11.72575 8.5,9.50158333 8.5,9.50158333 C8.5,9.50158333 6.27654167,11.7250417 6.16745833,11.834125 C5.8905,12.1110833 5.442125,12.1110833 5.165875,11.834125 C4.88891667,11.5571667 4.88891667,11.1087917 5.165875,10.8325417 C5.27425,10.7234583 7.49841667,8.5 7.49841667,8.5 C7.49841667,8.5 5.27495833,6.27654167 5.165875,6.16745833 C4.88891667,5.8905 4.88891667,5.442125 5.165875,5.165875 C5.44283333,4.88891667 5.89120833,4.88891667 6.16745833,5.165875 C6.27654167,5.27425 8.5,7.49841667 8.5,7.49841667 C8.5,7.49841667 10.7234583,5.27495833 10.8325417,5.165875 C11.1095,4.88891667 11.557875,4.88891667 11.834125,5.165875 C12.1110833,5.44283333 12.1110833,5.89120833 11.834125,6.16745833 C11.72575,6.27654167 9.50158333,8.5 9.50158333,8.5 Z",opacity:"0.75"}))))))))):null};dt.className="giphy-search-bar-cancel";var ft=dt,ht=`calc(var(${rt}) - 12px)`,pt=a.keyframes`
to {
    width: ${ht};
}
`,mt=s()(te)`
    height: ${ht};
    margin: 0;
    width: 0;
    animation: ${pt} 100ms ease-in-out forwards;
`,gt=s().div`
    background: var(${ot});
    display: flex;
    align-items: center;
    padding-left: ${6}px;
`,vt=s().div`
    background: ${"#ececec"};
    display: flex;
    padding: 0 4px;
    color: ${"#3e3e3e"};
    font-family: interface, Helvetica Neue, helvetica, sans-serif;
    font-weight: 600;
    font-size: 12px;
    align-items: center;
    height: ${ht};
    @media (max-width: 480px) {
        display: none;
    }
`,yt=({className:e=""})=>{const{activeChannel:t}=(0,i.useContext)(lt);return t?o().createElement(gt,{className:e},o().createElement(mt,{user:t.user}),o().createElement(vt,{key:t.id},o().createElement("div",null,"@",t.user.username),t.user.is_verified&&o().createElement(re,{size:14}))):null},bt="#9933FF",wt="#FF6666",Et="cubic-bezier(0.920, 0.240, 0.185, 0.730)",_t=a.keyframes`
    0% {
      transform: rotate(34deg) translate(-10px, 80px);
    };
    
    100% {
      transform: rotate(34deg) translate(-10px, -20px);
    }
`,Ct=a.keyframes`
    0% { 
      transform: translate(0px, 0px);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translate(10px, -17px);
      opacity: 0;
    }
`,xt=a.keyframes`
    0% {
      opacity: 0;
      transform: translateX(-400%);
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateX(0);
    }
`,kt=s().div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
    @media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {
        display: none;
    }
    height: var(${rt});
    width: var(${rt});
`,Lt=s().div`
    position: absolute;
    height: 100%;
    width: 100%;
    background: linear-gradient(45deg, ${bt} 0%, ${wt} 100%);
    border-radius: 4px;
    overflow: hidden;
    &:before {
        animation: ${xt} ${"2s"} linear 0s infinite;
        background-image: linear-gradient(45deg, ${bt} 0%, ${wt} 50%, ${bt} 100%);
        background-size: 400%;
        background-position: 0% 100%;
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        width: 400%;
    }
`,Rt=s().div`
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    &::after {
        content: '+';
        color: white;
        font-family: 'SS Standard';
        font-size: 8px;
        position: absolute;
        top: 65%;
        left: 66%;
        animation: ${Ct} 1s ${Et} 0s 1 forwards;
    }
`,Ot=s().div`
    position: absolute;
    width: 200%;
    height: 20px;
    background: rgba(255, 255, 255, 0.5);
    transform: rotate(34deg) translate(-10px, -20px);
    animation: ${_t} 1s ${Et} 0s 1;
    filter: blur(1px);
`,St=s()((({className:e=""})=>o().createElement("svg",{viewBox:"0 0 30 30",version:"1.1",className:e},o().createElement("defs",null,o().createElement("path",{d:"M11.5482521,20.4090671 L4.24727698,28.2009189 C3.68084207,28.8054377 2.73159653,28.8363108 2.12707771,28.2698759 C1.5225589,27.703441 1.4916858,26.7541954 2.0581207,26.1496766 L9.40599838,18.3077689 C7.95982241,16.4371424 7.0978836,14.0789715 7.0978836,11.5181818 C7.0978836,5.44914339 11.9392549,0.518181818 17.9252787,0.518181818 C23.9113026,0.518181818 28.7526738,5.44914339 28.7526738,11.5181818 C28.7526738,17.5872202 23.9113026,22.5181818 17.9252787,22.5181818 C15.539851,22.5181818 13.3361963,21.7351359 11.5482521,20.4090671 Z M17.9252787,19.5181818 C22.242011,19.5181818 25.7526738,15.9425536 25.7526738,11.5181818 C25.7526738,7.09381 22.242011,3.51818182 17.9252787,3.51818182 C13.6085464,3.51818182 10.0978836,7.09381 10.0978836,11.5181818 C10.0978836,15.9425536 13.6085464,19.5181818 17.9252787,19.5181818 Z",id:"giphy-search-icon-path-1"})),o().createElement("g",{id:"search",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},o().createElement("g",{id:"icons/search"},o().createElement("mask",{id:"giphy-search-icon-mask-2",fill:"white"},o().createElement("use",{xlinkHref:"#giphy-search-icon-path-1"})),o().createElement("use",{id:"Mask",fill:"#FFFFFF",fillRule:"nonzero",xlinkHref:"#giphy-search-icon-path-1"}),o().createElement("g",{mask:"url(#giphy-search-icon-mask-2)"},o().createElement("g",{transform:"translate(0.250000, 0.250000)"},o().createElement("g",null))))))))`
    z-index: 1;
    display: flex;
    width: 60%;
    height: 60%;
`,Nt=()=>{const{isFetching:e}=(0,i.useContext)(lt),t=(0,V.Z)(e,1e3);return o().createElement(kt,null,o().createElement(Lt,null),o().createElement(St,null),t&&o().createElement(Rt,null,o().createElement(Ot,null)))},At=s().div`
    display: flex;
    background: white;
    align-items: center;
    border-radius: 4px;
    height: var(${rt});
    background: var(${ot});
`,Ft=s().input`
    background: inherit;
    box-sizing: border-box;
    border: 0;
    appearance: none;
    font-weight: normal;
    font-family: interface, Helvetica Neue, helvetica, sans-serif;
    outline: 0;
    font-size: 15px;
    padding: 0 10px;
    border-radius: 0;
    text-overflow: ellipsis;
    color: var(${at});
    &::placeholder {
        color: ${d};
    }
    min-width: 150px;
    flex: 1;
    ${e=>e.isUsernameSearch&&a.css`
            color: ${"#6157ff"};
        `}
`,$t=({className:e,placeholder:t="Search GIPHY",clear:n=!1,autoFocus:r,searchDebounce:a=500,onEnter:s})=>{const{activeChannel:l,setActiveChannel:c,term:u,setChannels:d}=(0,i.useContext)(lt),{setIsFocused:f,_inputValOverride:h,_setSearch:p}=(0,i.useContext)(ct),[m,g]=(0,i.useState)(u);(0,G.Z)((()=>p(m)),a,[m]);const v=(0,i.useRef)(null),y=function(e){const t=(0,i.useRef)(e);return(0,i.useEffect)((()=>{t.current=e})),t.current}(l),[b,w]=(0,i.useState)(n);return(0,i.useEffect)((()=>{var e;r&&(null==(e=v.current)||e.focus())}),[r]),(0,i.useEffect)((()=>{var e;l&&!y&&(null==(e=v.current)||e.focus(),g(" "===m?"":m.replace(/@?\w*\s?/,"")))}),[m,l,y]),(0,i.useEffect)((()=>{w(n)}),[n]),(0,i.useEffect)((()=>{g(h)}),[h,g]),o().createElement(At,{className:[$t.className,e].join(" ")},o().createElement(yt,null),o().createElement(Ft,{isUsernameSearch:0===u.indexOf("@"),onChange:({target:{value:e}})=>{b&&""===e||(w(!1),g(e))},onFocus:()=>{f(!0)},onBlur:()=>{f(!1)},value:b?"":m,placeholder:l?`Search ${l.display_name}`:t,autoCapitalize:"off",autoCorrect:"off",autoComplete:"off",ref:v,onKeyUp:e=>{switch(e.keyCode||e.key){case 27:case"Escape":c(void 0),d([]);break;case 13:case"Enter":null==s||s(m)}},onKeyDown:e=>{switch(e.keyCode||e.key){case 8:case"Backspace":""===m&&(c(void 0),d([]))}}}),o().createElement(ft,{setCleared:()=>g("")}),o().createElement(Nt,null))};$t.className="giphy-search-bar";var Tt=s().div`
    background: ${c};
    display: flex;
    padding-right: 4px;
    align-items: center;
    margin-right: ${9}px;
    cursor: pointer;
`,Pt=s().div`
    background: ${c};
    display: flex;
    padding: 14px;
    align-items: center;
    margin-right: ${9}px;
    white-space: nowrap;
    cursor: pointer;
    font-style: italic;
    border-radius: 20px;
`,It=s()(te)`
    height: var(${rt});
    width: var(${rt});
`,Mt=s()((({size:e=18,className:t})=>o().createElement("svg",{width:e,height:e,viewBox:"0 0 18 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg",className:t},o().createElement("g",{id:"trending",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},o().createElement("g",null,o().createElement("rect",{id:"Rectangle",stroke:"#979797",fill:"#D8D8D8",opacity:"0",x:"0.5",y:"0.5",width:"17",height:"17"}),o().createElement("path",{d:"M12.6093329,3.12057664 L15.156896,3.12057664 L9.64199318,9.04253019 L6.88133868,6.8175119 C6.7544587,6.67603813 6.56616874,6.60087259 6.38404017,6.61897279 C6.2490402,6.63288422 6.11891631,6.69661171 6.02063992,6.79697337 C2.21226835,10.5943119 0.308082561,12.4929812 0.308082561,12.4929812 C0.308082561,12.4929812 0.527106106,12.8074292 0.710953088,13.0215425 C0.833517743,13.1642848 0.975497751,13.3098497 1.13689311,13.4582373 L6.47329888,8.13191205 L9.16381134,10.2953038 C9.40800276,10.5710787 9.68933701,10.7021044 10.019278,10.4570223 L16.0239805,4.04474473 C16.0239805,5.87956383 16.0239805,6.79697337 16.0239805,6.79697337 C16.0239805,6.79697337 16.4320205,6.79697337 17.2481004,6.79697337 L17.2481004,1.80604505 C14.1555887,1.80604505 12.6093329,1.80604505 12.6093329,1.80604505 C12.6093329,1.80604505 12.6093329,2.24422225 12.6093329,3.12057664 Z",id:"Shape",stroke:"#00CCFF",strokeWidth:"0.4",fill:"#00CCFF",fillRule:"nonzero",transform:"translate(8.778091, 7.632141) rotate(-2.000000) translate(-8.778091, -7.632141) "}))))))`
    margin-right: 2px;
`,jt=({channel:e})=>{const{setActiveChannel:t}=(0,i.useContext)(lt);return o().createElement(Tt,{key:e.id,onClick:()=>t(e)},o().createElement(It,{user:e.user}),o().createElement("div",null,"@",e.user.username),e.user.is_verified&&o().createElement(re,{size:14}))},Dt=({trendingSearch:e})=>{const{setSearch:t}=(0,i.useContext)(lt);return o().createElement(Pt,{key:e,onClick:()=>t(e)},o().createElement(Mt,{size:16}),e)},Gt=s().div`
    display: flex;
    color: white;
    flex-direction: row;
    font-family: 'interface';
    font-weight: 600;
    font-size: 14px;
    -webkit-overflow-scrolling: touch;
    overflow-x: auto;
    overflow-y: hidden;
    padding-bottom: 10px;
    height: var(${rt});
`,Vt=()=>{const{trendingSearches:e,currentChannels:t}=(0,i.useContext)(lt);return o().createElement(Gt,{className:Vt.className},t.length>0?t.map((e=>o().createElement(jt,{key:e.id,channel:e}))):e.map((e=>o().createElement(Dt,{key:e,trendingSearch:e}))))};Vt.className="giphy-suggestion-bar";var zt=({onClick:e})=>o().createElement("svg",{width:"66px",height:"13px",viewBox:"0 0 66 13",onClick:e},o().createElement("g",{stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},o().createElement("g",{transform:"translate(-1060.000000, -462.000000)",fill:"#FFFFFF",fillRule:"nonzero"},o().createElement("g",{transform:"translate(931.000000, 286.375671)"},o().createElement("g",{transform:"translate(86.000000, 136.124329)"},o().createElement("path",{d:"M47.968,49.1962322 C49.588,49.1962322 51.052,48.6202322 51.58,47.5522322 L51.58,43.8202322 L47.476,43.8202322 L47.476,45.6802322 L49.6,45.6802322 L49.6,46.7602322 C49.12,47.1082322 48.424,47.1922322 47.98,47.1922322 C46.288,47.1922322 45.724,45.8602322 45.724,44.7802322 C45.724,43.1362322 46.612,42.3202322 47.98,42.3202322 C48.544,42.3202322 49.288,42.4762322 49.9,43.0522322 L51.28,41.6842322 C50.176,40.5682322 49.144,40.3282322 47.98,40.3282322 C44.824,40.3282322 43.384,42.5842322 43.384,44.7802322 C43.384,46.9762322 44.644,49.1962322 47.968,49.1962322 Z M54.928,48.9682322 L54.928,40.5682322 L52.564,40.5682322 L52.564,48.9682322 L54.928,48.9682322 Z M58.648,48.9682322 L58.648,46.7002322 L60.352,46.7002322 C62.596,46.6762322 63.724,45.3442322 63.724,43.6282322 C63.724,41.9842322 62.608,40.5682322 60.352,40.5682322 L56.272,40.5682322 L56.272,48.9682322 L58.648,48.9682322 Z M60.352,44.6962322 L58.648,44.6962322 L58.648,42.6082322 L60.352,42.6082322 C61,42.6082322 61.348,43.1122322 61.348,43.6642322 C61.348,44.2162322 61.012,44.6962322 60.352,44.6962322 Z M66.796,48.9802322 L66.796,45.8002322 L69.82,45.8002322 L69.82,48.9802322 L72.172,48.9802322 L72.172,40.5802322 L69.82,40.5802322 L69.82,43.7722322 L66.796,43.7722322 L66.796,40.5802322 L64.42,40.5802322 L64.42,48.9802322 L66.796,48.9802322 Z M78.16,48.9682322 L78.16,45.6202322 L81.496,40.6762322 L81.496,40.5682322 L78.82,40.5682322 L77.008,43.4482322 L75.268,40.5682322 L72.592,40.5682322 L72.592,40.6642322 L75.784,45.6202322 L75.784,48.9682322 L78.16,48.9682322 Z M87.796,49.1362322 C88.972,49.1362322 90.088,48.7402322 90.952,47.8882322 L90.028,46.9642322 C89.44,47.5522322 88.576,47.8762322 87.796,47.8762322 C85.624,47.8762322 84.712,46.3522322 84.7,44.8162322 C84.688,43.2682322 85.66,41.6962322 87.796,41.6962322 C88.576,41.6962322 89.368,41.9722322 89.968,42.5602322 L90.868,41.6962322 C90.016,40.8442322 88.924,40.4242322 87.796,40.4242322 C84.796,40.4242322 83.356,42.6202322 83.3679256,44.8282322 C83.38,47.0362322 84.748,49.1362322 87.796,49.1362322 Z M93.028,48.9682322 L93.028,40.5802322 L91.792,40.5802322 L91.792,48.9682322 L93.028,48.9682322 Z M94.252,41.3122322 C94.252,42.3322322 95.788,42.3322322 95.788,41.3122322 C95.788,40.3042322 94.252,40.3042322 94.252,41.3122322 Z M95.632,48.9682322 L95.632,43.0282322 L94.396,43.0282322 L94.396,48.9682322 L95.632,48.9682322 Z M98.188,51.7162322 L98.188,48.1042322 C98.632,48.8362322 99.556,49.1002322 100.276,49.1002322 C102.112,49.1002322 103.264,47.8042322 103.264,46.0162322 C103.264,44.2282322 102.04,42.9442322 100.276,42.9322322 C99.484,42.9322322 98.644,43.2922322 98.188,44.0122322 L98.116,43.0522322 L96.952,43.0522322 L96.952,51.7162322 L98.188,51.7162322 Z M100.156,47.9002322 C99.076,47.9002322 98.296,47.0722322 98.296,46.0162322 C98.296,44.9602322 99.016,44.1322322 100.156,44.1322322 C101.284,44.1322322 102.028,44.9002322 102.028,46.0162322 C102.028,47.1202322 101.236,47.9002322 100.156,47.9002322 Z M106.456,49.1482322 C107.992,49.1482322 108.964,48.3802322 108.976,47.2762322 C108.988,45.7522322 107.56,45.5122322 106.468,45.4162322 C105.712,45.3442322 105.196,45.1522322 105.184,44.6602322 C105.184,44.1922322 105.688,43.9402322 106.444,43.9522322 C107.032,43.9522322 107.536,44.0722322 108.004,44.5042322 L108.7,43.6882322 C108.04,43.1002322 107.332,42.8962322 106.42,42.8962322 C105.316,42.8962322 103.96,43.3882322 103.96,44.6962322 C103.972,46.0042322 105.256,46.3642322 106.372,46.4722322 C107.248,46.5562322 107.752,46.7602322 107.74,47.2882322 C107.728,47.8402322 107.068,48.0562322 106.48,48.0562322 C105.784,48.0442322 104.956,47.7922322 104.404,47.1802322 L103.756,48.0562322 C104.536,48.9322322 105.496,49.1482322 106.456,49.1482322 Z",id:"GIPHYClips"})))))),Zt=s().div`
    display: flex;
    align-items: center;
    font-family: interface, helvetica, arial;
    cursor: pointer;
`,Ht=s()(te)`
    flex-shrink: 0;
`,Bt=s().div`
    display: flex;
    flex-direction: column;
`,Ut=({gif:e,className:t,onClick:n})=>{const{user:r}=e;return(null==r?void 0:r.username)||(null==r?void 0:r.display_name)?o().createElement(Zt,{className:[Ut.className,t].join(" "),onClick:t=>{if(t.preventDefault(),t.stopPropagation(),n)n(e);else{const e=r.profile_url;e&&window.open(e,"_blank")}}},o().createElement(Ht,{user:r}),o().createElement(Bt,null,o().createElement(zt,{onClick:t=>{t.preventDefault(),t.stopPropagation(),n?n(e):e.url&&window.open(e.url,"_blank")}}),o().createElement(se,{user:r}))):null};Ut.className="giphy-attribution";var Wt=Ut,Kt=({size:e=25,onClick:t=(()=>{})})=>o().createElement("svg",{width:e,height:e,viewBox:"0 0 26 23",onClick:t},o().createElement("g",{stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},o().createElement("g",{transform:"translate(1.000000, 0.000000)",fill:"#FFF",fillRule:"nonzero"},o().createElement("path",{d:"M11.9625091,0.572584405 L11.9625091,22.2272644 C11.9625091,22.4856644 11.8466091,22.6635044 11.6151891,22.7611644 C11.3480491,22.8413444 11.1390491,22.7968844 10.9878091,22.6277844 L4.8732291,15.9143244 L0.573909096,15.9143244 C0.413549096,15.9143244 0.277509096,15.8588444 0.166549096,15.7475044 C0.0573082348,15.6406091 -0.00292164572,15.4933347 -1.77635684e-15,15.3405244 L-1.77635684e-15,7.45058441 C-1.77635684e-15,7.29022441 0.0555890961,7.15456441 0.167309096,7.04322441 C0.278269096,6.93226441 0.414309096,6.87640441 0.573909096,6.87640441 L4.8732291,6.87640441 L10.9874291,0.172064405 C11.1390491,0.00296440549 11.3484291,-0.0414955945 11.6151891,0.0386844055 C11.8466091,0.136344405 11.9621291,0.314564405 11.9621291,0.572584405 L11.9625091,0.572584405 Z"}),o().createElement("path",{d:"M15.7579491,16.0914044 L14.6798891,13.6594044 C15.5739159,13.2635547 16.1503537,12.3776671 16.1501091,11.3999244 C16.150386,10.4242626 15.5763999,9.53983269 14.6852091,9.14272441 L15.7697291,6.71376441 C17.6193585,7.53872062 18.810518,9.37466359 18.8101092,11.3999244 C18.8105521,13.4298903 17.6139475,15.2691931 15.7579491,16.0914044 L15.7579491,16.0914044 Z"}),o().createElement("path",{d:"M18.3647491,20.2619044 L17.2863091,17.8299044 C19.8302925,16.7031661 21.4705725,14.1822599 21.4701091,11.3999244 C21.4701091,8.59818441 19.8167291,6.09892441 17.3022691,4.97678441 L18.3864091,2.54782441 C21.8804724,4.10607079 24.1307363,7.57414217 24.1301093,11.3999244 C24.1308375,15.2343934 21.8705556,18.7086904 18.3647491,20.2619044 Z"})))),Yt=({size:e=25,onClick:t=(()=>{})})=>o().createElement("svg",{onClick:t,height:e,width:e,viewBox:"0 0 26 23",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},o().createElement("g",{id:"Page-1",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},o().createElement("g",{id:"Group",transform:"translate(1.000000, 0.000000)",fill:"#FFFFFF",fillRule:"nonzero"},o().createElement("path",{d:"M11.9625091,0.572584405 L11.9625091,22.2272644 C11.9625091,22.4856644 11.8466091,22.6635044 11.6151891,22.7611644 C11.3480491,22.8413444 11.1390491,22.7968844 10.9878091,22.6277844 L4.8732291,15.9143244 L0.573909096,15.9143244 C0.413549096,15.9143244 0.277509096,15.8588444 0.166549096,15.7475044 C0.0573082348,15.6406091 -0.00292164572,15.4933347 0,15.3405244 L0,7.45058441 C0,7.29022441 0.0555890961,7.15456441 0.167309096,7.04322441 C0.278269096,6.93226441 0.414309096,6.87640441 0.573909096,6.87640441 L4.8732291,6.87640441 L10.9874291,0.172064405 C11.1390491,0.00296440549 11.3484291,-0.0414955945 11.6151891,0.0386844055 C11.8466091,0.136344405 11.9621291,0.314564405 11.9621291,0.572584405 L11.9625091,0.572584405 Z",id:"Path"})),o().createElement("g",{id:"Group",transform:"translate(14.887009, 6.947630)",fill:"#FFFFFF",fillRule:"nonzero"},o().createElement("path",{d:"M7.88199149,6.27905236 C7.94693088,6.35707599 7.94693088,6.47033309 7.88199149,6.54835671 L6.54835671,7.88199149 C6.47033309,7.94693088 6.35707599,7.94693088 6.27905236,7.88199149 L3.96534802,5.56828715 L1.65164367,7.88199149 C1.57362004,7.94693088 1.46036294,7.94693088 1.38233932,7.88199149 L0.0487045381,6.54835671 C-0.016234846,6.47033309 -0.016234846,6.35707599 0.0487045381,6.27905236 L2.36240889,3.96534802 L0.0487045381,1.65164367 C-0.016234846,1.57362004 -0.016234846,1.46036294 0.0487045381,1.38233932 L1.38233932,0.0487045381 C1.46036294,-0.016234846 1.57362004,-0.016234846 1.65164367,0.0487045381 L3.96534802,2.36240889 L6.27905236,0.0487045381 C6.35707599,-0.016234846 6.47033309,-0.016234846 6.54835671,0.0487045381 L7.88199149,1.38233932 C7.94693088,1.46036294 7.94693088,1.57362004 7.88199149,1.65164367 L5.56828715,3.96534802 L7.88199149,6.27905236 Z",id:"Shape"})))),qt=s().div`
    background: ${f};
    height: ${e=>e.barHeight}px;
    position: absolute;
    width: 5px;
    bottom: 0;
    left: 0;
    opacity: 0.95;
`,Qt=({videoEl:e})=>{(0,Z.Z)(2147483647,100);const t=(null==e?void 0:e.currentTime)||0,n=(null==e?void 0:e.duration)||0,r=t/n;let i=Math.round(100*r),a=5;return(null==e?void 0:e.height)<200?a=3:(null==e?void 0:e.height)<300&&(a=4),i=n<10&&i>98?100:i,o().createElement(qt,{style:{width:`${i}%`},barHeight:a,className:"hide-in-percy"})},Jt=[.25,.5,.75],Xt="giphy-video",en=({muted:e,ccEnabled:t=!1,ccLanguage:n="en",loop:a=!0,onStateChange:s,onTimeUpdate:l,onCanPlay:c,onFirstPlay:u,onWaiting:d,onMuted:f,onError:h,onEnded:p,onLoop:m,onQuartile:g,onEndFullscreen:v,setVideoEl:y,gif:b,width:w,height:E,volume:_=.7,className:C=Xt})=>{var x,k,L;const R=E||(0,r.f8)(b,w),[O,S]=(0,i.useState)((0,r.i1)(b.video,w,R)),N=(0,i.useRef)(0);O||console.warn(`GiphyJS No video content for id: ${b.id}`);const A=(0,i.useRef)(Date.now()),F=(0,i.useRef)(!1),$=(0,i.useRef)(0),T=(0,i.useRef)(0),P=(0,i.useRef)(new Set);(0,i.useEffect)((()=>{A.current=Date.now(),F.current=!1,$.current=1,T.current=0,P.current=new Set}),[b.id]);const I=(0,i.useRef)(null);(0,i.useEffect)((()=>{const e=(0,r.i1)(b.video,w,R);I.current&&(null==O?void 0:O.url)&&e.url!==O.url&&(-1!==O.url.indexOf(String(b.id))&&(N.current=I.current.currentTime),S(e))}),[w,E,b.video,R,null==O?void 0:O.url,b.id]),(0,i.useEffect)((()=>{I.current&&(null==O?void 0:O.url)&&N.current&&(I.current.currentTime=N.current,N.current=0)}),[null==O?void 0:O.url,N]);const j=(0,i.useCallback)((()=>{var e;const t=I.current,n=null==(e=null==t?void 0:t.error)?void 0:e.code;if(n&&(null==t?void 0:t.src)){const e=((e,t="")=>{switch(e){case 1:return"Aborted. The fetching process for the media resource was aborted by the user agent at the user's request.";case 2:return"Network Error. A network error of some description caused the user agent to stop fetching the media resource, after the resource was established to be usable.";case 3:return"Decode Error. An error of some description occurred while decoding the media resource, after the resource was established to be usable.";case 4:return`Can not play a video of type "${t.split(".").pop()}" on this platform.`;default:return""}})(n,null==t?void 0:t.src);console.error(e),null==h||h(n)}}),[h]),D=(0,i.useCallback)((()=>{null==s||s("playing"),F.current||(F.current=!0,b.analytics_response_payload&&M({actionType:"START",analyticsResponsePayload:b.analytics_response_payload}),null==u||u(Date.now()-A.current))}),[u,s,b]),G=(0,i.useCallback)((()=>null==s?void 0:s("paused")),[s]),V=(0,i.useCallback)((()=>{const e=I.current;if(e){const t=e.currentTime;Jt.some((n=>!!((e,t,n,r,i)=>{const o=i+e;return!r.has(o)&&n>0&&t>n*e&&(r.add(o),!0)})(n,t,e.duration,P.current,$.current)&&(null==g||g(n),!0))),null==l||l(t||0)}}),[g,l]),z=(0,i.useCallback)((()=>null==c?void 0:c()),[c]),Z=(0,i.useCallback)((()=>{const e=I.current;0!==(null==e?void 0:e.currentTime)&&1!==(null==e?void 0:e.networkState)&&(null==d||d(++T.current))}),[d]),H=(0,i.useCallback)((()=>{F.current&&(a&&I.current&&I.current.play(),null==m||m($.current),$.current=$.current+1,null==p||p())}),[p,a,m]),B=(0,i.useCallback)((()=>null==v?void 0:v()),[v]),U=(0,i.useCallback)((e=>X(void 0,null,(function*(){if(e){const t=e.play();if(void 0!==t)try{yield t,null==f||f(!1)}catch(t){e.muted=!0,null==f||f(!0),e.play()}}}))),[f]);(0,i.useEffect)((()=>{const e=I.current;e&&(U(e),null==y||y(e),isNaN(_)||(e.volume=_))}),[]),(0,i.useEffect)((()=>{const e=I.current;return e&&(e.addEventListener("play",D),e.addEventListener("pause",G),e.addEventListener("error",j),e.addEventListener("timeupdate",V),e.addEventListener("canplay",z),e.addEventListener("ended",H),e.addEventListener("waiting",Z),e.addEventListener("webkitendfullscreen",B)),()=>{e&&(e.removeEventListener("play",D),e.removeEventListener("pause",G),e.removeEventListener("error",j),e.removeEventListener("timeupdate",V),e.removeEventListener("canplay",z),e.removeEventListener("ended",H),e.removeEventListener("waiting",Z),e.removeEventListener("webkitendfullscreen",B))}}),[D,G,j,V,z,H,Z,B]);const W=null==(L=null==(k=null==(x=b.video)?void 0:x.captions)?void 0:k[n])?void 0:L.vtt;return(null==O?void 0:O.url)?o().createElement("video",{crossOrigin:"anonymous",draggable:!0,className:C,width:w,height:R,muted:e,autoPlay:!0,playsInline:!0,ref:I,src:null==O?void 0:O.url,"data-giphy-id":b.id},t&&W&&o().createElement("track",{label:"English",kind:"subtitles",srcLang:n,src:W,default:!0})):null};en.className=Xt;var tn=en,nn=s().div`
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: black;
    font-family: interface, helvetica, arial;
    -webkit-font-smoothing: antialiased;
`,rn=s().div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
`,on=s().div`
    position: absolute;
    top: 10px;
    right: 10px;
    left: 10px;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    opacity: ${e=>e.isHovered?1:0};
    transition: opacity ease-out 250ms;
    align-items: flex-start;
`,an=s().div`
    font-size: 22px;
    color: white;
    margin-bottom: 5px;
    font-weight: bold;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    user-select: none;
    cursor: pointer;
`,sn=s().div`
    position: relative;
    min-width: 0;
`,ln=s().div`
    &:before {
        background: linear-gradient(rgba(18, 18, 18, 0.6), rgba(0, 0, 0, 0));
        content: '';
        height: ${e=>e.isLargePlayer?125:75}px;
        left: 0;
        pointer-events: none;
        position: absolute;
        top: 0;
        width: 100%;
    }
    &:after {
        background: linear-gradient(rgba(0, 0, 0, 0), rgba(18, 18, 18, 0.6));
        content: '';
        height: ${e=>e.isLargePlayer?125:75}px;
        left: 0;
        pointer-events: none;
        position: absolute;
        bottom: 0;
        width: 100%;
    }
`,cn=e=>{const{width:t,hideMute:n,hideAttribution:a,hideProgressBar:s,className:l,persistentControls:c,gif:u,overlay:d}=e,[f,h]=(0,i.useState)(!1),[p,m]=(0,i.useState)(null),[g,v]=(0,i.useState)(e.muted),[y,b]=(0,i.useState)(!1),{setVideoEl:w,onMuted:E,onUserMuted:_}=e,C=e.height||(0,r.f8)(u,t),[,x,k]=(0,z.default)((()=>{h(!1)}),4e3),L=(0,i.useCallback)((e=>{null==E||E(e),b(e)}),[b,E]),R=(0,i.useCallback)((e=>{null==w||w(e),m(e)}),[w,m]);(0,i.useEffect)((()=>{v(e.muted)}),[e.muted]);const O=c||f,S=C>=300;return(0,i.useEffect)((()=>(O?k():x(),()=>x())),[O,x,k]),o().createElement(nn,{className:l,style:{width:t,height:C},onMouseOver:()=>h(!0),onMouseLeave:()=>h(!1),onMouseMove:()=>{h(!0),k()},onClick:e=>{null==_||_(!(g||y)),null==p||p.play(),e.preventDefault(),y?(b(!1),v(!1)):v(!g)}},o().createElement(tn,J(Q({},e),{onMuted:L,setVideoEl:R,muted:g})),O&&o().createElement(ln,{isLargePlayer:S}),o().createElement(on,{isHovered:O},o().createElement(sn,null,S&&o().createElement(an,{onClick:e=>{e.preventDefault(),e.stopPropagation(),window.open(u.url,"_blank")}},u.title),p&&!a?o().createElement(Wt,{gif:u}):null),!n&&o().createElement(rn,null,g||y?o().createElement(Yt,null):o().createElement(Kt,null))),O&&!s&&p?o().createElement(Qt,{videoEl:p}):null,d&&o().createElement(d,{gif:u,isHovered:f,width:t,height:C}))};s().div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    width: 100%;
`,s()((e=>(e.overlay&&!e.controls&&console.warn(`${r.Yd.PREFIX}: Overlays only work when controls are enabled`),e.controls?o().createElement(cn,Q({},e)):o().createElement(tn,Q({},e)))))`
    height: 100%;
    display: inline-block;
    object-fit: fill;
    pointer-events: none;
    background: rgb(0, 0, 0, 0);
`,s().div`
    position: absolute;
    top: 6px;
    right: 6px;
    cursor: pointer;
    opacity: ${e=>e.isHovered?1:.8};
    transition: opacity ease-out 800ms;
`;(0,r.fg)("X-GIPHY-SDK-NAME","ReactSDK")},17827:()=>{!function(){"use strict";if("object"==typeof window)if("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)"isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}});else{var e=function(e){for(var t=window.document,n=i(t);n;)n=i(t=n.ownerDocument);return t}(),t=[],n=null,r=null;a.prototype.THROTTLE_TIMEOUT=100,a.prototype.POLL_INTERVAL=null,a.prototype.USE_MUTATION_OBSERVER=!0,a._setupCrossOriginUpdater=function(){return n||(n=function(e,n){r=e&&n?d(e,n):{top:0,bottom:0,left:0,right:0,width:0,height:0},t.forEach((function(e){e._checkForIntersections()}))}),n},a._resetCrossOriginUpdater=function(){n=null,r=null},a.prototype.observe=function(e){if(!this._observationTargets.some((function(t){return t.element==e}))){if(!e||1!=e.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:e,entry:null}),this._monitorIntersections(e.ownerDocument),this._checkForIntersections()}},a.prototype.unobserve=function(e){this._observationTargets=this._observationTargets.filter((function(t){return t.element!=e})),this._unmonitorIntersections(e.ownerDocument),0==this._observationTargets.length&&this._unregisterInstance()},a.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorAllIntersections(),this._unregisterInstance()},a.prototype.takeRecords=function(){var e=this._queuedEntries.slice();return this._queuedEntries=[],e},a.prototype._initThresholds=function(e){var t=e||[0];return Array.isArray(t)||(t=[t]),t.sort().filter((function(e,t,n){if("number"!=typeof e||isNaN(e)||e<0||e>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return e!==n[t-1]}))},a.prototype._parseRootMargin=function(e){var t=(e||"0px").split(/\s+/).map((function(e){var t=/^(-?\d*\.?\d+)(px|%)$/.exec(e);if(!t)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(t[1]),unit:t[2]}}));return t[1]=t[1]||t[0],t[2]=t[2]||t[0],t[3]=t[3]||t[1],t},a.prototype._monitorIntersections=function(t){var n=t.defaultView;if(n&&-1==this._monitoringDocuments.indexOf(t)){var r=this._checkForIntersections,o=null,a=null;this.POLL_INTERVAL?o=n.setInterval(r,this.POLL_INTERVAL):(s(n,"resize",r,!0),s(t,"scroll",r,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in n&&(a=new n.MutationObserver(r)).observe(t,{attributes:!0,childList:!0,characterData:!0,subtree:!0})),this._monitoringDocuments.push(t),this._monitoringUnsubscribes.push((function(){var e=t.defaultView;e&&(o&&e.clearInterval(o),l(e,"resize",r,!0)),l(t,"scroll",r,!0),a&&a.disconnect()}));var c=this.root&&(this.root.ownerDocument||this.root)||e;if(t!=c){var u=i(t);u&&this._monitorIntersections(u.ownerDocument)}}},a.prototype._unmonitorIntersections=function(t){var n=this._monitoringDocuments.indexOf(t);if(-1!=n){var r=this.root&&(this.root.ownerDocument||this.root)||e,o=this._observationTargets.some((function(e){var n=e.element.ownerDocument;if(n==t)return!0;for(;n&&n!=r;){var o=i(n);if((n=o&&o.ownerDocument)==t)return!0}return!1}));if(!o){var a=this._monitoringUnsubscribes[n];if(this._monitoringDocuments.splice(n,1),this._monitoringUnsubscribes.splice(n,1),a(),t!=r){var s=i(t);s&&this._unmonitorIntersections(s.ownerDocument)}}}},a.prototype._unmonitorAllIntersections=function(){var e=this._monitoringUnsubscribes.slice(0);this._monitoringDocuments.length=0,this._monitoringUnsubscribes.length=0;for(var t=0;t<e.length;t++)e[t]()},a.prototype._checkForIntersections=function(){if(this.root||!n||r){var e=this._rootIsInDom(),t=e?this._getRootRect():{top:0,bottom:0,left:0,right:0,width:0,height:0};this._observationTargets.forEach((function(r){var i=r.element,a=c(i),s=this._rootContainsTarget(i),l=r.entry,u=e&&s&&this._computeTargetAndRootIntersection(i,a,t),d=null;this._rootContainsTarget(i)?n&&!this.root||(d=t):d={top:0,bottom:0,left:0,right:0,width:0,height:0};var f=r.entry=new o({time:window.performance&&performance.now&&performance.now(),target:i,boundingClientRect:a,rootBounds:d,intersectionRect:u});l?e&&s?this._hasCrossedThreshold(l,f)&&this._queuedEntries.push(f):l&&l.isIntersecting&&this._queuedEntries.push(f):this._queuedEntries.push(f)}),this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)}},a.prototype._computeTargetAndRootIntersection=function(t,i,o){if("none"!=window.getComputedStyle(t).display){for(var a,s,l,u,f,p,m,g,v=i,y=h(t),b=!1;!b&&y;){var w=null,E=1==y.nodeType?window.getComputedStyle(y):{};if("none"==E.display)return null;if(y==this.root||9==y.nodeType)if(b=!0,y==this.root||y==e)n&&!this.root?!r||0==r.width&&0==r.height?(y=null,w=null,v=null):w=r:w=o;else{var _=h(y),C=_&&c(_),x=_&&this._computeTargetAndRootIntersection(_,C,o);C&&x?(y=_,w=d(C,x)):(y=null,v=null)}else{var k=y.ownerDocument;y!=k.body&&y!=k.documentElement&&"visible"!=E.overflow&&(w=c(y))}if(w&&(a=w,s=v,void 0,void 0,void 0,void 0,void 0,void 0,l=Math.max(a.top,s.top),u=Math.min(a.bottom,s.bottom),f=Math.max(a.left,s.left),g=u-l,v=(m=(p=Math.min(a.right,s.right))-f)>=0&&g>=0&&{top:l,bottom:u,left:f,right:p,width:m,height:g}||null),!v)break;y=y&&h(y)}return v}},a.prototype._getRootRect=function(){var t;if(this.root&&!p(this.root))t=c(this.root);else{var n=p(this.root)?this.root:e,r=n.documentElement,i=n.body;t={top:0,left:0,right:r.clientWidth||i.clientWidth,width:r.clientWidth||i.clientWidth,bottom:r.clientHeight||i.clientHeight,height:r.clientHeight||i.clientHeight}}return this._expandRectByRootMargin(t)},a.prototype._expandRectByRootMargin=function(e){var t=this._rootMarginValues.map((function(t,n){return"px"==t.unit?t.value:t.value*(n%2?e.width:e.height)/100})),n={top:e.top-t[0],right:e.right+t[1],bottom:e.bottom+t[2],left:e.left-t[3]};return n.width=n.right-n.left,n.height=n.bottom-n.top,n},a.prototype._hasCrossedThreshold=function(e,t){var n=e&&e.isIntersecting?e.intersectionRatio||0:-1,r=t.isIntersecting?t.intersectionRatio||0:-1;if(n!==r)for(var i=0;i<this.thresholds.length;i++){var o=this.thresholds[i];if(o==n||o==r||o<n!=o<r)return!0}},a.prototype._rootIsInDom=function(){return!this.root||f(e,this.root)},a.prototype._rootContainsTarget=function(t){var n=this.root&&(this.root.ownerDocument||this.root)||e;return f(n,t)&&(!this.root||n==t.ownerDocument)},a.prototype._registerInstance=function(){t.indexOf(this)<0&&t.push(this)},a.prototype._unregisterInstance=function(){var e=t.indexOf(this);-1!=e&&t.splice(e,1)},window.IntersectionObserver=a,window.IntersectionObserverEntry=o}function i(e){try{return e.defaultView&&e.defaultView.frameElement||null}catch(e){return null}}function o(e){this.time=e.time,this.target=e.target,this.rootBounds=u(e.rootBounds),this.boundingClientRect=u(e.boundingClientRect),this.intersectionRect=u(e.intersectionRect||{top:0,bottom:0,left:0,right:0,width:0,height:0}),this.isIntersecting=!!e.intersectionRect;var t=this.boundingClientRect,n=t.width*t.height,r=this.intersectionRect,i=r.width*r.height;this.intersectionRatio=n?Number((i/n).toFixed(4)):this.isIntersecting?1:0}function a(e,t){var n,r,i,o=t||{};if("function"!=typeof e)throw new Error("callback must be a function");if(o.root&&1!=o.root.nodeType&&9!=o.root.nodeType)throw new Error("root must be a Document or Element");this._checkForIntersections=(n=this._checkForIntersections.bind(this),r=this.THROTTLE_TIMEOUT,i=null,function(){i||(i=setTimeout((function(){n(),i=null}),r))}),this._callback=e,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(o.rootMargin),this.thresholds=this._initThresholds(o.threshold),this.root=o.root||null,this.rootMargin=this._rootMarginValues.map((function(e){return e.value+e.unit})).join(" "),this._monitoringDocuments=[],this._monitoringUnsubscribes=[]}function s(e,t,n,r){"function"==typeof e.addEventListener?e.addEventListener(t,n,r||!1):"function"==typeof e.attachEvent&&e.attachEvent("on"+t,n)}function l(e,t,n,r){"function"==typeof e.removeEventListener?e.removeEventListener(t,n,r||!1):"function"==typeof e.detachEvent&&e.detachEvent("on"+t,n)}function c(e){var t;try{t=e.getBoundingClientRect()}catch(e){}return t?(t.width&&t.height||(t={top:t.top,right:t.right,bottom:t.bottom,left:t.left,width:t.right-t.left,height:t.bottom-t.top}),t):{top:0,bottom:0,left:0,right:0,width:0,height:0}}function u(e){return!e||"x"in e?e:{top:e.top,y:e.top,bottom:e.bottom,left:e.left,x:e.left,right:e.right,width:e.width,height:e.height}}function d(e,t){var n=t.top-e.top,r=t.left-e.left;return{top:n,left:r,height:t.height,width:t.width,bottom:n+t.height,right:r+t.width}}function f(e,t){for(var n=t;n;){if(n==e)return!0;n=h(n)}return!1}function h(t){var n=t.parentNode;return 9==t.nodeType&&t!=e?i(t):(n&&n.assignedSlot&&(n=n.assignedSlot.parentNode),n&&11==n.nodeType&&n.host?n.host:n)}function p(e){return e&&9===e.nodeType}}()},73729:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isNavigator=t.isBrowser=t.off=t.on=t.noop=void 0,t.noop=function(){},t.on=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.addEventListener&&e.addEventListener.apply(e,t)},t.off=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.removeEventListener&&e.removeEventListener.apply(e,t)},t.isBrowser="undefined"!=typeof window,t.isNavigator="undefined"!=typeof navigator},53125:(e,t,n)=>{"use strict";var r=n(85556),i=n(84390),o=r.__importDefault(n(66834));t.Z=function(e,t,n){void 0===t&&(t=[]),void 0===n&&(n={loading:!1});var a=i.useRef(0),s=o.default(),l=i.useState(n),c=l[0],u=l[1],d=i.useCallback((function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var i=++a.current;return c.loading||u((function(e){return r.__assign(r.__assign({},e),{loading:!0})})),e.apply(void 0,t).then((function(e){return s()&&i===a.current&&u({value:e,loading:!1}),e}),(function(e){return s()&&i===a.current&&u({error:e,loading:!1}),e}))}),t);return[c,d]}},85859:(e,t,n)=>{"use strict";var r=n(85556),i=n(84390),o=r.__importDefault(n(73893));t.Z=function(e,t,n){void 0===t&&(t=0),void 0===n&&(n=[]);var r=o.default(e,t),a=r[0],s=r[1],l=r[2];return i.useEffect(l,n),[a,s]}},13570:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(84390);t.default=function(e){r.useEffect(e,[])}},35777:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(84390),i=n(73729).isBrowser?r.useLayoutEffect:r.useEffect;t.default=i},78217:(e,t,n)=>{"use strict";var r=n(84390);t.Z=function(e){var t=r.useRef(e);return t.current=e,t}},66834:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(84390);t.default=function(){var e=r.useRef(!1),t=r.useCallback((function(){return e.current}),[]);return r.useEffect((function(){return e.current=!0,function(){e.current=!1}}),[]),t}},4687:(e,t,n)=>{"use strict";var r=n(85556),i=n(84390),o=r.__importDefault(n(35777));t.Z=function(e,t){void 0===e&&(e=1e12),void 0===t&&(t=0);var n=i.useState(0),r=n[0],a=n[1];return o.default((function(){var n,r,i,o=function(){var t=Math.min(1,(Date.now()-i)/e);a(t),s()},s=function(){n=requestAnimationFrame(o)},l=setTimeout((function(){r=setTimeout((function(){cancelAnimationFrame(n),a(1)}),e),i=Date.now(),s()}),t);return function(){clearTimeout(r),clearTimeout(l),cancelAnimationFrame(n)}}),[e,t]),r}},32621:(e,t,n)=>{"use strict";var r=n(85556),i=n(84390),o=r.__importDefault(n(21550));t.Z=function(e,t){void 0===t&&(t=200);var n=i.useState(e),r=n[0],a=n[1],s=i.useRef(),l=i.useRef(null),c=i.useRef(0);return i.useEffect((function(){if(s.current)l.current=e,c.current=!0;else{a(e);var n=function(){c.current?(c.current=!1,a(l.current),s.current=setTimeout(n,t)):s.current=void 0};s.current=setTimeout(n,t)}}),[e]),o.default((function(){s.current&&clearTimeout(s.current)})),r}},73893:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(84390);t.default=function(e,t){void 0===t&&(t=0);var n=r.useRef(!1),i=r.useRef(),o=r.useRef(e),a=r.useCallback((function(){return n.current}),[]),s=r.useCallback((function(){n.current=!1,i.current&&clearTimeout(i.current),i.current=setTimeout((function(){n.current=!0,o.current()}),t)}),[t]),l=r.useCallback((function(){n.current=null,i.current&&clearTimeout(i.current)}),[]);return r.useEffect((function(){o.current=e}),[e]),r.useEffect((function(){return s(),l}),[t]),[a,l,s]}},21550:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(85556),i=n(84390),o=r.__importDefault(n(13570));t.default=function(e){var t=i.useRef(e);t.current=e,o.default((function(){return function(){return t.current()}}))}},85556:(e,t,n)=>{"use strict";n.r(t),n.d(t,{__addDisposableResource:()=>T,__assign:()=>o,__asyncDelegator:()=>k,__asyncGenerator:()=>x,__asyncValues:()=>L,__await:()=>C,__awaiter:()=>p,__classPrivateFieldGet:()=>A,__classPrivateFieldIn:()=>$,__classPrivateFieldSet:()=>F,__createBinding:()=>g,__decorate:()=>s,__disposeResources:()=>I,__esDecorate:()=>c,__exportStar:()=>v,__extends:()=>i,__generator:()=>m,__importDefault:()=>N,__importStar:()=>S,__makeTemplateObject:()=>R,__metadata:()=>h,__param:()=>l,__propKey:()=>d,__read:()=>b,__rest:()=>a,__runInitializers:()=>u,__setFunctionName:()=>f,__spread:()=>w,__spreadArray:()=>_,__spreadArrays:()=>E,__values:()=>y,default:()=>M});var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)};function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var o=function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},o.apply(this,arguments)};function a(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function s(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a}function l(e,t){return function(n,r){t(n,r,e)}}function c(e,t,n,r,i,o){function a(e){if(void 0!==e&&"function"!=typeof e)throw new TypeError("Function expected");return e}for(var s,l=r.kind,c="getter"===l?"get":"setter"===l?"set":"value",u=!t&&e?r.static?e:e.prototype:null,d=t||(u?Object.getOwnPropertyDescriptor(u,r.name):{}),f=!1,h=n.length-1;h>=0;h--){var p={};for(var m in r)p[m]="access"===m?{}:r[m];for(var m in r.access)p.access[m]=r.access[m];p.addInitializer=function(e){if(f)throw new TypeError("Cannot add initializers after decoration has completed");o.push(a(e||null))};var g=(0,n[h])("accessor"===l?{get:d.get,set:d.set}:d[c],p);if("accessor"===l){if(void 0===g)continue;if(null===g||"object"!=typeof g)throw new TypeError("Object expected");(s=a(g.get))&&(d.get=s),(s=a(g.set))&&(d.set=s),(s=a(g.init))&&i.unshift(s)}else(s=a(g))&&("field"===l?i.unshift(s):d[c]=s)}u&&Object.defineProperty(u,r.name,d),f=!0}function u(e,t,n){for(var r=arguments.length>2,i=0;i<t.length;i++)n=r?t[i].call(e,n):t[i].call(e);return r?n:void 0}function d(e){return"symbol"==typeof e?e:"".concat(e)}function f(e,t,n){return"symbol"==typeof t&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:n?"".concat(n," ",t):t})}function h(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function p(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{l(r.next(e))}catch(e){o(e)}}function s(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}l((r=r.apply(e,t||[])).next())}))}function m(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(s){return function(l){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(a=0)),a;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){a.label=s[1];break}if(6===s[0]&&a.label<i[1]){a.label=i[1],i=s;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(s);break}i[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(e){s=[6,e],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}}var g=Object.create?function(e,t,n,r){void 0===r&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]};function v(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||g(t,e,n)}function y(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function b(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,o=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)a.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return a}function w(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(b(arguments[t]));return e}function E(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var o=arguments[t],a=0,s=o.length;a<s;a++,i++)r[i]=o[a];return r}function _(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}function C(e){return this instanceof C?(this.v=e,this):new C(e)}function x(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,i=n.apply(e,t||[]),o=[];return r={},a("next"),a("throw"),a("return"),r[Symbol.asyncIterator]=function(){return this},r;function a(e){i[e]&&(r[e]=function(t){return new Promise((function(n,r){o.push([e,t,n,r])>1||s(e,t)}))})}function s(e,t){try{(n=i[e](t)).value instanceof C?Promise.resolve(n.value.v).then(l,c):u(o[0][2],n)}catch(e){u(o[0][3],e)}var n}function l(e){s("next",e)}function c(e){s("throw",e)}function u(e,t){e(t),o.shift(),o.length&&s(o[0][0],o[0][1])}}function k(e){var t,n;return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,i){t[r]=e[r]?function(t){return(n=!n)?{value:C(e[r](t)),done:!1}:i?i(t):t}:i}}function L(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=y(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,i){!function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)}(r,i,(t=e[n](t)).done,t.value)}))}}}function R(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var O=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function S(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&g(t,e,n);return O(t,e),t}function N(e){return e&&e.__esModule?e:{default:e}}function A(e,t,n,r){if("a"===n&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(e):r?r.value:t.get(e)}function F(e,t,n,r,i){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!i)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!i:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?i.call(e,n):i?i.value=n:t.set(e,n),n}function $(e,t){if(null===t||"object"!=typeof t&&"function"!=typeof t)throw new TypeError("Cannot use 'in' operator on non-object");return"function"==typeof e?t===e:e.has(t)}function T(e,t,n){if(null!=t){if("object"!=typeof t&&"function"!=typeof t)throw new TypeError("Object expected.");var r;if(n){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");r=t[Symbol.asyncDispose]}if(void 0===r){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");r=t[Symbol.dispose]}if("function"!=typeof r)throw new TypeError("Object not disposable.");e.stack.push({value:t,dispose:r,async:n})}else n&&e.stack.push({async:!0});return t}var P="function"==typeof SuppressedError?SuppressedError:function(e,t,n){var r=new Error(n);return r.name="SuppressedError",r.error=e,r.suppressed=t,r};function I(e){function t(t){e.error=e.hasError?new P(t,e.error,"An error was suppressed during disposal."):t,e.hasError=!0}return function n(){for(;e.stack.length;){var r=e.stack.pop();try{var i=r.dispose&&r.dispose.call(r.value);if(r.async)return Promise.resolve(i).then(n,(function(e){return t(e),n()}))}catch(e){t(e)}}if(e.hasError)throw e.error}()}const M={__extends:i,__assign:o,__rest:a,__decorate:s,__param:l,__metadata:h,__awaiter:p,__generator:m,__createBinding:g,__exportStar:v,__values:y,__read:b,__spread:w,__spreadArrays:E,__spreadArray:_,__await:C,__asyncGenerator:x,__asyncDelegator:k,__asyncValues:L,__makeTemplateObject:R,__importStar:S,__importDefault:N,__classPrivateFieldGet:A,__classPrivateFieldSet:F,__classPrivateFieldIn:$,__addDisposableResource:T,__disposeResources:I}}}]);
//# sourceMappingURL=3458.7bce940180e8ed6135e1.js.map