(window.webpackJsonp=window.webpackJsonp||[]).push([["CurrentView-ThreadView~messages-preview"],{JWyW:function(t,e,n){"use strict";var a,i,r,E,O,s,S=n("MBJP"),u=n("nDpY"),c=n.n(u),o=n("5Enb"),_=n("edeU"),R=n("fQRB"),A={CRM:"CRM",FB_CRM:"FB_CRM",MARKETING:"MARKETING",SALES:"SALES",ACADEMY:"ACADEMY",CLASSROOM_TRAINING:"CLASSROOM_TRAINING",CONTENT:"CONTENT",HUBSPOT_FOR_STARTUPS:"HUBSPOT_FOR_STARTUPS",INTEGRATIONS:"INTEGRATIONS",PURCHASE:"PURCHASE",SERVICE:"SERVICE",WORDPRESS:"WORDPRESS",WORDPRESS_LOGIN:"WORDPRESS_LOGIN",GROWTH_HUB:"GROWTH_HUB",DEVELOPERS:"DEVELOPERS",EMBEDDED:"EMBEDDED",CONTENT_HUB:"CONTENT_HUB",STANDALONE_CMS_PARTNER:"STANDALONE_CMS_PARTNER"},N=(a={},Object(R.a)(a,A.CRM,"crm"),Object(R.a)(a,A.FB_CRM,"fb-crm"),Object(R.a)(a,A.MARKETING,"marketing"),Object(R.a)(a,A.SALES,"sales"),Object(R.a)(a,A.ACADEMY,"academy"),Object(R.a)(a,A.CLASSROOM_TRAINING,"classroom-training"),Object(R.a)(a,A.CONTENT,"content"),Object(R.a)(a,A.HUBSPOT_FOR_STARTUPS,"hubspot-for-startups"),Object(R.a)(a,A.INTEGRATIONS,"integrations"),Object(R.a)(a,A.PURCHASE,"purchase"),Object(R.a)(a,A.SERVICE,"service"),Object(R.a)(a,A.WORDPRESS,"wordpress"),Object(R.a)(a,A.WORDPRESS_LOGIN,"wordpress-login"),Object(R.a)(a,A.DEVELOPERS,"developers"),Object(R.a)(a,A.EMBEDDED,"embedded"),Object(R.a)(a,A.CONTENT_HUB,"content-hub"),Object(R.a)(a,A.STANDALONE_CMS_PARTNER,"standalone-cms-partner"),a),T={CONVERSATIONS:"CONVERSATIONS",DOCUMENTS:"DOCUMENTS",FORMS:"FORMS",LEAD_FLOWS:"LEAD_FLOWS",LEARNING_CENTER:"LEARNING_CENTER",LANDING_PAGES:"LANDING_PAGES",MARKETING_ADS:"MARKETING_ADS",MARKETING_FREE_EMAIL:"MARKETING_FREE_EMAIL",MEETINGS:"MEETINGS",SALES_FREE:"SALES_FREE",SALES_O365:"SALES_O365",SALES_VSTO:"SALES_VSTO",TRIAL:"TRIAL",COMPANY_GRADER:"COMPANY_GRADER",HUBSPOT_NETWORK:"HUBSPOT_NETWORK",SALES_EXTENSION:"SALES_EXTENSION"},I=(i={},Object(R.a)(i,T.LEAD_FLOWS,"lead-flows"),Object(R.a)(i,T.MEETINGS,"salesMeetings"),Object(R.a)(i,T.CONVERSATIONS,"conversations"),Object(R.a)(i,T.DOCUMENTS,"salesDocuments"),Object(R.a)(i,T.FORMS,"marketingFreeForms"),Object(R.a)(i,T.SALES_FREE,"salesFree"),Object(R.a)(i,T.SALES_O365,"salesO365"),Object(R.a)(i,T.MARKETING_FREE_EMAIL,"marketingFreeEmail"),Object(R.a)(i,T.SALES_VSTO,"salesVsto"),Object(R.a)(i,T.MARKETING_ADS,"marketingAds"),Object(R.a)(i,T.TRIAL,"trial"),Object(R.a)(i,T.LEARNING_CENTER,"learningCenter"),Object(R.a)(i,T.LANDING_PAGES,"landingpages"),Object(R.a)(i,T.COMPANY_GRADER,"companygrader"),Object(R.a)(i,T.HUBSPOT_NETWORK,"hubspotnetwork"),Object(R.a)(i,T.SALES_EXTENSION,"salesExtension"),i),h={UTM_SOURCE:"UTM_SOURCE",UTM_MEDIUM:"UTM_MEDIUM",UTM_ID:"UTM_ID"},b=(r={},Object(R.a)(r,h.UTM_SOURCE,"utm_source"),Object(R.a)(r,h.UTM_MEDIUM,"utm_medium"),Object(R.a)(r,h.UTM_ID,"utm_id"),r),p={HUBS_CAMPAIGN:"HUBS_CAMPAIGN",HUBS_CONTENT:"HUBS_CONTENT",HUBS_CTA:"HUBS_CTA",HUBS_MEDIUM:"HUBS_MEDIUM",HUBS_SIGNUP_URL:"HUBS_SIGNUP_URL",HUBS_SOURCE:"HUBS_SOURCE"},U=(E={},Object(R.a)(E,p.HUBS_CAMPAIGN,"hubs_campaign"),Object(R.a)(E,p.HUBS_CONTENT,"hubs_content"),Object(R.a)(E,p.HUBS_CTA,"hubs_cta"),Object(R.a)(E,p.HUBS_MEDIUM,"hubs_medium"),Object(R.a)(E,p.HUBS_SIGNUP_URL,"hubs_signup-url"),Object(R.a)(E,p.HUBS_SOURCE,"hubs_source"),E),M=n("uEQG"),l="opt_sidebar",C="sales-extension-signup",d="livechat-signup",j="landing-pages",P="meeting",D="leadflows",f="forms",L="documents",m="crm-email",g="marketing-free",G="skip_setup",B="partnerId",w="landingPageType",H="viralSourcePortalId",v="viralSourceUserId",y=(O={},Object(R.a)(O,M.i,l),Object(R.a)(O,M.k,l),Object(R.a)(O,M.g,l),Object(R.a)(O,M.d,l),Object(R.a)(O,M.f,l),Object(R.a)(O,M.c,l),Object(R.a)(O,M.b,l),Object(R.a)(O,M.a,l),Object(R.a)(O,M.h,l),Object(R.a)(O,M.l,G),Object(R.a)(O,M.j,B),Object(R.a)(O,M.e,w),Object(R.a)(O,M.m,H),Object(R.a)(O,M.n,v),O),F=(s={},Object(R.a)(s,M.d,j),Object(R.a)(s,M.i,P),Object(R.a)(s,M.k,C),Object(R.a)(s,M.g,d),Object(R.a)(s,M.f,D),Object(R.a)(s,M.c,f),Object(R.a)(s,M.b,L),Object(R.a)(s,M.a,m),Object(R.a)(s,M.h,g),Object(R.a)(s,M.j,B),s),k=y,V="/signup",W="/signup-hubspot",K=W+"/crm",Y=[A.CLASSROOM_TRAINING,A.CRM,A.SERVICE,A.SALES,A.MARKETING],Q=function(t){var e=[];Object.keys(t).sort().forEach((function(n){if(t.hasOwnProperty(n)){var a=t[n];a&&e.push(encodeURIComponent(n)+"="+encodeURIComponent(a))}}));return e.length?"?"+e.join("&"):""},q=function(t){if(A.hasOwnProperty(t)&&N.hasOwnProperty(t))return N[t];console.error("Couldn`t find signup flow, defaulting to crm");return N[A.CRM]},x=function(t){if(T.hasOwnProperty(t)&&I.hasOwnProperty(t))return I[t];console.error("Couldn`t find intent for "+t+", leaving empty");return null},J=function(t){var e=Object.assign({},k,{},U,{},b)[t];e||console.error("Couldn`t find mapping for "+t+", leaving empty");return e},X=function(t){return A.hasOwnProperty(t)&&N.hasOwnProperty(t)?Y.includes(t)?W:V:W},z=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object(o.a)(this,t);this.shouldUpdateOptions=!0;this.signupFlow=e;this.options=n||{};this.options.query||(this.options.query={});try{var a=q(this.signupFlow);this.signupPathname=X(this.signupFlow)+"/"+a;this.signupQueryParams=this.updateOptions(n)}catch(t){this.signupPathname=K;this.signupQueryParams=""}}Object(_.a)(t,[{key:"updateOptions",value:function(t){var e=t.query?Q(t.query):"";this.shouldUpdateOptions=!1;return e}},{key:"getPathname",value:function(){return this.signupPathname}},{key:"getSearch",value:function(){if(this.shouldUpdateOptions){this.signupQueryParams=this.updateOptions(this.options);this.shouldUpdateOptions=!1}return this.signupQueryParams}},{key:"getUrl",value:function(){return""+this.signupPathname+this.getSearch()}},{key:"withIntent",value:function(t){var e=x(t);if(e){this.options.query.intent=e;this.shouldUpdateOptions=!0}return this}},{key:"withParam",value:function(t,e){var n=J(t);if(n){this.options.query[n]=e||F[t];this.shouldUpdateOptions=!0}return this}},{key:"withUtm",value:function(t,e){return this.withParam(t,e)}},{key:"withHubs",value:function(t,e){return this.withParam(t,e)}},{key:"withOption",value:function(t){return this.withParam(t)}}]);return t}(),Z=n("OmJX");n.d(e,"a",(function(){return $}));var $=Object(S.a)([Z.a],(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=53===t.portalId,n=t.portalId||c.a.get();if(e){return"https://app.hubspot.com"+new z(A.CRM).withHubs(p.HUBS_CAMPAIGN,"hubspot-livechat-virality").withHubs(p.HUBS_CONTENT,"hubspot.com").withHubs(p.HUBS_MEDIUM,"virality").withOption(M.g).withIntent(T.CONVERSATIONS).withParam(M.m,n).getUrl()}return"https://app.hubspot.com"+new z(A.CRM).withHubs(p.HUBS_CAMPAIGN,"hubspot-livechat-virality").withHubs(p.HUBS_MEDIUM,"virality").withOption(M.g).withIntent(T.CONVERSATIONS).withParam(M.m,n).getUrl()}))},uEQG:function(t,e,n){"use strict";(function(t){n.d(e,"i",(function(){return a}));n.d(e,"k",(function(){return i}));n.d(e,"g",(function(){return r}));n.d(e,"f",(function(){return E}));n.d(e,"c",(function(){return O}));n.d(e,"b",(function(){return s}));n.d(e,"a",(function(){return S}));n.d(e,"h",(function(){return u}));n.d(e,"l",(function(){return c}));n.d(e,"j",(function(){return o}));n.d(e,"e",(function(){return _}));n.d(e,"d",(function(){return R}));n.d(e,"m",(function(){return A}));n.d(e,"n",(function(){return N}));var a="MEETING_SIDEBAR",i="SALES_EXTENSION_SIDEBAR",r="LIVECHAT_SIDEBAR",E="LEADFLOWS_SIDEBAR",O="FORMS_SIDEBAR",s="DOCUMENTS_SIDEBAR",S="CRM_EMAIL_SIDEBAR",u="MARKETING_FREE_EMAIL_SIDEBAR",c="SKIP_SETUP",o="PARTNER_ID",_="LANDING_PAGE_TYPE",R="LANDING_PAGES_SIDEBAR",A="VIRAL_SOURCE_PORTAL_ID",N="VIRAL_SOURCE_USER_ID";t&&t.exports&&(t.exports.default=Object.assign({},t.exports))}).call(this,n("Eld7")(t))}}]);
//# sourceMappingURL=CurrentView-ThreadView~messages-preview.js.map