"use strict";(self.webpackChunkmattermost_webapp=self.webpackChunkmattermost_webapp||[]).push([[2549],{62549:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m}),a(61418);var n=a(84390),o=a(70314),c=a(9448),s=a(10883),l=a(80139),u=a(43618),r=a(11298),i=a(65370),d=a(9828),p=a(21349);const m=()=>{const e=(0,c.useRouteMatch)(),t=(0,o.useDispatch)(),a=e.params.team,m=e.params.playbookId,_=(0,o.useSelector)((e=>(0,r.Xv)(e,a))),y=(0,o.useSelector)((e=>(0,p.nX)(e,a))),b=(0,o.useSelector)((e=>(0,u.fQ)(e,(null==_?void 0:_.id)||"",y)));return(0,n.useEffect)((()=>{(async()=>{const e=null!=b?b:await l.je.getChannelByName((null==_?void 0:_.id)||"","town-square");t((0,d.qZ)(e)),t(function(e,t,a){return async n=>{const o=(0,i.Ox)();n({type:"playbooks_set_client_id",clientId:o});const c="/playbook run-playbook ".concat(a," ").concat(o),u={channel_id:e.id,team_id:t};try{const e=await l.je.executeCommand(c,u);n({type:s.bK.RECEIVED_DIALOG_TRIGGER_ID,data:null==e?void 0:e.trigger_id})}catch(e){console.error(e)}}}(e,(null==_?void 0:_.id)||"",m))})()}),[]),null}}}]);
//# sourceMappingURL=2549.00046272577000089b87.js.map