(window.webpackJsonp=window.webpackJsonp||[]).push([["CurrentView-ThreadView"],{"/kPb":function(e,t,n){"use strict";var i=n("FGh+"),r=n("QgEn"),a=n("9f1P"),c=n.n(a),s=n("VfuR"),o=n.n(s),d=n("NdCN"),l=n("Kcjm"),u=n("A2+2"),p=c.a.div.withConfig({displayName:"DragAndDropUploadOverlay__Container",componentId:"sc-86ys52-0"})(["position:absolute;width:100%;",";transition:background 0.2s;z-index:99;border-bottom-left-radius:","px;border-bottom-right-radius:","px;height:calc(100% - ","px);display:flex;justify-content:center;align-items:center;pointer-events:none;"],(function(e){return e.isOver&&"background-color: rgba(45, 62, 80, 0.3);\n  backdrop-filter: blur(2px);"}),u.a,u.a,l.d),b=function(e){var t=e.isOver,n=Object(i.a)(e,["isOver"]);return Object(r.jsx)(p,Object.assign({isOver:t},n))};b.displayName="DragAndDropUploadOverlay";b.propTypes={isOver:o.a.bool.isRequired};var h=b,f=n("Ktcs"),j=c.a.div.withConfig({displayName:"UnifiedThreadViewWrapperWithDragUpload__UnifiedThreadViewWrapper",componentId:"s4ctvh-0"})(["display:flex;flex-direction:column;height:100%;"]),O=function(e){var t=e.children,n=e.onDropFiles,a=e.disabled,c=Object(f.useCallback)((function(e){var n=e.isOver,a=Object(i.a)(e,["isOver"]);return Object(r.jsxs)(j,Object.assign({"data-test-id":"UnifiedThreadViewWrapper-testid"},a,{children:[t,Object(r.jsx)(h,{isOver:n})]}))}),[t]);return Object(r.jsx)(d.a,{onDropFiles:n,disabled:a,children:c})};O.displayName="UnifiedThreadViewWrapperWithDragUpload";O.propTypes={children:o.a.node.isRequired,disabled:o.a.bool.isRequired,onDropFiles:o.a.func.isRequired};t.a=O},NdCN:function(e,t,n){"use strict";var i=n("HElP"),r=n("Ktcs"),a=n("VfuR"),c=n.n(a),s=function(e){e.preventDefault();e.stopPropagation()},o=function(e){var t=e.children,n=e.disabled,a=e.ignoreDropWhenDefaultPrevented,c=e.onDropFiles,o=Object(r.useState)(!1),d=Object(i.a)(o,2),l=d[0],u=d[1],p=Object(r.useRef)(null),b=Object(r.useCallback)((function(e){e.preventDefault();p.current=e.target;u(!0)}),[]),h=Object(r.useCallback)(s,[]),f=Object(r.useCallback)((function(e){if(p.current===e.target){p.current=null;u(!1)}}),[]),j=Object(r.useCallback)((function(e){if(a&&e.isDefaultPrevented())u(!1);else{var t=e.dataTransfer?e.dataTransfer.files:[];if(t&&t.length){e.preventDefault();c(t);u(!1)}}}),[c,a]);return t(n?{isOver:!1,onDragOver:s,onDrop:s}:{isOver:l,onDrop:j,onDragEnter:b,onDragOver:h,onDragLeave:f})};o.displayName="AttachmentUploadDragAndDropWrapper";o.propTypes={children:c.a.func.isRequired,disabled:c.a.bool.isRequired,ignoreDropWhenDefaultPrevented:c.a.bool.isRequired,onDropFiles:c.a.func.isRequired};o.defaultProps={disabled:!1,ignoreDropWhenDefaultPrevented:!0};t.a=o},twxQ:function(e,t,n){"use strict";n.r(t);var i=n("QgEn"),r=n("19qb"),a=n("JWgK"),c=n("647q"),s=n("xk3e"),o=n("Ut5p"),d=n("NID/"),l=n("Ux+X"),u=Object(o.b)(d.e);function p(){return function(e){e(u());e(Object(l.trackInteraction)("widget-interaction",{action:"clicked meeting link"}))}}var b=n("5Enb"),h=n("edeU"),f=n("+eZO"),j=n("LpN+"),O=n("6DYd"),g=n("g05V"),v=n("sl/w"),k=n("VfuR"),x=n.n(k),m=n("Ktcs"),D=n("9f1P"),w=n.n(D),y=n("7LhL"),C=n("KSjU"),R=n("mKxs"),N=function(e){return Object(i.jsxs)("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},e,{children:[Object(i.jsx)("defs",{children:Object(i.jsx)("path",{d:"M3.4 22c-.22 0-.4-.192-.4-.429V9h18v6.898l-.097.103h-4.299c-.884 0-1.6.768-1.6 1.715v4.18l-.097.104H3.4zM17.923 3.31V1.241c0-.686-.569-1.241-1.27-1.241-.7 0-1.268.555-1.268 1.241v2.07h-6.77V1.24C8.615.555 8.047 0 7.346 0c-.7 0-1.27.555-1.27 1.241v2.07H3.963C2.328 3.31 1 4.61 1 6.206v14.896C1 22.701 2.328 24 3.962 24h11.846c.336 0 .659-.13.897-.363l5.924-5.793c.237-.234.371-.55.371-.878V6.206c0-1.596-1.328-2.896-2.962-2.896h-2.115zM8 11H6c-.552 0-1 .448-1 1v2c0 .552.448 1 1 1h2c.552 0 1-.448 1-1v-2c0-.552-.448-1-1-1m3 0c-.552 0-1 .448-1 1v2c0 .552.448 1 1 1h2c.552 0 1-.448 1-1v-2c0-.552-.448-1-1-1h-2zm5 4h2c.552 0 1-.448 1-1v-2c0-.552-.448-1-1-1h-2c-.552 0-1 .448-1 1v2c0 .552.448 1 1 1m-8 1H6c-.552 0-1 .448-1 1v2c0 .552.448 1 1 1h2c.552 0 1-.448 1-1v-2c0-.552-.448-1-1-1m5 0h-2c-.552 0-1 .448-1 1v2c0 .552.448 1 1 1h2c.552 0 1-.448 1-1v-2c0-.552-.448-1-1-1",id:"date__a"})}),Object(i.jsx)("use",{xlinkHref:"#date__a",fillRule:"evenodd"})]}))};N.displayName="SVGDate";var V=N,L=n("LRQi"),T={assignedResponder:Object(R.a)("Responder"),clickedMeetingsLink:x.a.func.isRequired,shouldShowMeetingsLink:x.a.bool.isRequired},W=w.a.div.withConfig({displayName:"MeetingsLinkButton__WidgetMeetingsLinkButtonWrapper",componentId:"sc-5lid1l-0"})(["padding-left:16px;padding-right:16px;display:flex;flex-direction:column;flex-shrink:0;height:44px;align-items:center;justify-content:center;"]),M=function(e){Object(g.a)(t,e);function t(e){var n;Object(b.a)(this,t);(n=Object(f.a)(this,Object(j.a)(t).call(this,e))).handleOnClick=n.handleOnClick.bind(Object(O.a)(n));return n}Object(h.a)(t,[{key:"handleOnClick",value:function(){var e=this.props,t=e.clickedMeetingsLink,n=e.assignedResponder,i=Object(C.a)(n);window.open(i+"?fromMessages=true","_blank");t()}},{key:"render",value:function(){return this.props.shouldShowMeetingsLink?Object(i.jsx)(W,{children:Object(i.jsxs)(L.a,{className:"align-center justify-center",onClick:this.handleOnClick,children:[Object(i.jsx)(y.a,{icon:Object(i.jsx)(V,{}),className:"m-right-1"}),Object(i.jsx)(v.a,{message:"conversations-visitor-ui.default.meetingsLinkText"})]})}):null}}]);return t}(m.Component);M.displayName="MeetingsLinkButton";M.propTypes=T;var P=M,U=n("zB5l"),q=Object(r.connect)((function(e){return{assignedResponder:Object(s.getAssignedResponderInWidget)(e),shouldShowMeetingsLink:Object(U.a)(e),widgetData:Object(c.getLatestWidgetData)(e)}}),{clickedMeetingsLink:p})(P),_=n("k09d"),S=n("/kPb"),A=n("Apky"),F=n("2gT5"),K=n("DY0p"),E=n("V2EP"),H=function(){var e=Object(r.useSelector)((function(e){return!Object(F.isPersistedThread)(Object(_.a)(e))||Object(K.a)(e)||!Object(a.a)(e,{thread:Object(_.a)(e)})})),t=Object(r.useSelector)((function(e){return Object(_.a)(e)})),n=Object(r.useDispatch)(),c=function(e){if(e&&e.length){var i=e[0];n(Object(E.a)({file:i,thread:t}))}};return Object(i.jsxs)(S.a,{onDropFiles:c,disabled:e,children:[Object(i.jsx)(q,{}),Object(i.jsx)(A.default,{})]})};H.displayName="ThreadView";t.default=H}}]);
//# sourceMappingURL=CurrentView-ThreadView.js.map