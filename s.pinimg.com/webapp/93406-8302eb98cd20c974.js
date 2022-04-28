"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[93406],{493406:function(e,n,t){t.d(n,{Z:function(){return w}});var r=t(30700),o=t(829407),i=t(898781),l=t(112690),a=t(728214),u=t(602574),s=t(931740),c=t(19121),d=t(957314),f=t(281180),_=t(50286),p=t(937666),h=t(343341),v=t(687999),b=t(867820),g=t(908390),m=t(515198),y=function(e){var n=e.children,t=e.pulsar,o=e.testId;return t.show?(0,m.jsx)(g.xu,{position:"relative","data-test-id":o,children:(0,m.jsxs)(r.Z,{pressState:"none",onTouch:t.onClick,children:[(0,m.jsx)(g.xu,{position:"absolute",marginTop:-5,dangerouslySetInlineStyle:{__style:{marginLeft:"-75px"}},children:n}),(0,m.jsx)(g.xu,{position:"absolute",marginTop:-12,dangerouslySetInlineStyle:{__style:{marginLeft:"-83px"}},children:(0,m.jsx)(g.o3,{})})]})}):(0,m.jsx)(g.xu,{"data-test-id":o,children:n})};function w(e){var n=e.auxData,t=e.disabled,r=e.disableLog,w=e.followEventType,S=e.id,O=e.inline,P=e.invertColors,E=e.isFollowed,A=e.isIdeaPin,I=e.isLegoEnabled,L=e.isSecondaryButton,x=e.isUserFollowButton,C=e.isUserMe,j=e.onFollow,T=e.onUnfollow,N=e.shouldShowAddRemoveText,M=e.shouldUseLegoColors,D=e.showPulsar,U=e.size,k=e.unfollowEventType,H=e.viewParameter,F=e.viewType,R=(0,i.ZP)(),Z=(0,p.TH)(),G=(0,_.HG)(),B=(0,h.F9)().showToast,z=(0,l.Z)(),W=(0,s.Z)(),V=(0,a.Z)(),q=(0,c.Z)(),X=q&&q.isAuth,Y=(0,v.f)(),$=Y.unauthFollowUserId,K=Y.setUnauthFollowUserId,J=(0,f.mN)()(S);(0,o.Z)((function(){!G&&X&&$&&S&&$===S&&j(S)}));var Q=V({fn:function(){X?E?(T(S),r||z({event_type:k,view_type:F,view_parameter:H,object_id_str:S,aux_data:n})):(j(S),x&&B((function(e){var n=e.hideToast;if(!J)return null;var t="/".concat(J.username,"/");return(0,m.jsx)(u.Z,{handleHide:n,text:(0,m.jsx)(g.xv,{children:R._('Following! Their created Pins will show up in your home feed!', 'followButton.follow.informationalToastText', 'Text explaining that a creator\'s Pins will show up in home feed after follow')}),userId:S,href:t,imageUrl:J.image_medium_url})})),r||z({event_type:w,view_type:F,view_parameter:H,object_id_str:S,aux_data:n})):((0,b.My)("mweb_unauth_follow_button.tap.".concat(String(F))),5===F&&26===w&&(0,b.My)("mweb_unauth_board_page_follow_button.tap"),(0,b.NC)(E?"press_profile_unfollow":"press_profile_follow"),(0,b.LW)({action:"click",pageLocation:Z,item:"board-follow-button"}),W({attributionLabel:A?"tap.unauth_idea_pin.follow_button":"tap.unauth.follow_button",reason:"ACTION_REQUIRES_LOGIN_OR_SIGNUP"}),G||K(null!=S?S:""),(0,b.NC)("clickthrough"))},modalHeader:(0,d.N4)({i18n:R,toFollow:!E})}),ee=!E&&!!D;return(0,m.jsx)(y,{pulsar:ee?{show:!0,onClick:Q}:{show:!1},testId:C||E?"board-unfollow-button":"board-follow-button",children:(0,m.jsx)(g.zx,{color:M||N||!I&&L||E?"gray":"red",disabled:C||t,fullWidth:O,onClick:ee?void 0:function(e){var t=e.event;t.preventDefault(),t.stopPropagation(),r||z({event_type:101,component:13672,element:11951,object_id_str:S,view_type:F,view_parameter:H,aux_data:n}),Q()},selected:P?!E:M&&E||!!E&&L,size:U,text:C?R._('That\'s you!', 'Follow button is disabled because this is you', 'Follow button is disabled because this is you'):N?E?R._('Add', 'followButton.addText', 'Follow button label - unfollowed state, so user can click to "add" the follow'):R._('Remove', 'unfollowButton.removeText', 'Follow button label - followed state, so user can click to "remove" the follow'):E?R._('Following', 'Follow button label - followed state', 'Follow button label - followed state'):R._('Follow', 'Follow button label - unfollowed state', 'Follow button label - unfollowed state')})})}},30700:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(908390),o=t(515198);function i(e){var n=e.children,t=e.onMouseEnter,i=e.onMouseLeave,l=e.onTouch,a=e.rounding,u=e.fullWidth,s=void 0!==u&&u,c=e.pressState,d=void 0===c?"none":c,f=e.accessibilityLabel,_=e.role,p=(Array.isArray(d)?d:[d]).includes("compress");return(0,o.jsx)(r.iP,{fullWidth:s,onMouseEnter:t&&function(e){var n=e.event;return t(n)},onMouseLeave:i&&function(e){var n=e.event;return i(n)},onTap:l&&function(e){var n=e.event;return l(n)},rounding:a,tapStyle:p?"compress":"none",accessibilityLabel:f,role:_,children:n})}},915832:function(e,n,t){t.d(n,{RX:function(){return m},XE:function(){return v},Xn:function(){return h},an:function(){return b},rV:function(){return g}});var r=t(231486),o=t(226198),i=t(826067),l="BING",a="GOOGLE",u="YAHOO",s="YANDEX",c="RAKUTEN",d="NAVER",f="AMP_CACHE",_="DUCKDUCKGO",p=[a,l,u,s,c,d,f,_];function h(e){return p.includes(function(e){var n=(0,i.Qc)(e,!0).hostname;if(n&&e){if(n.includes("google.")||function(e){return e.includes("android-app://com.google.android.googlequicksearchbox")}(e))return a;if(n.includes("bing."))return l;if(n.includes("yahoo."))return u;if(n.includes("yandex."))return s;if(n.includes("rakuten."))return c;if(n.includes("naver."))return d;if(n.includes("duckduckgo."))return _;if(n.includes(".cdn.ampproject.org"))return f}return""}(e))}function v(e){return((0,i.Qc)(e).hostname||"").includes(".cdn.ampproject.org")}function b(e){return e||r.U2(o.tg)||"undefined"!=typeof document&&document.referrer||""}var g="amp",m=function(e){return Boolean(e.mobile_link&&v(e.mobile_link))}},931740:function(e,n,t){var r=t(842394),o=t(780679);function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}n.Z=function(){var e=(0,o.g)(),n=(0,r.lv)();return function(t){var r,o=t.mobileOptions,a=t.desktopOptions,u=t.reason,s=t.attributionLabel;e?e.showDesktopSignupModal(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({modalType:null!==(r=null==a?void 0:a.modalType)&&void 0!==r?r:"signup",reason:u,attributionLabel:s},null==a?void 0:a.modalOptions)):n&&n.showMobileSignupModal({reason:u,attributionLabel:s,headingType:null==o?void 0:o.headingType})}}},842394:function(e,n,t){t.d(n,{ZP:function(){return x},lv:function(){return L}});var r=t(76911),o=t(48676),i=t(452047),l=t(266725),a=t(867820),u=t(53987),s=function(e,n,t){if("SHOW_MOBILE_SIGNUP_MODAL"===e.type&&t.modal.isShown){var r=t.modal.displayProps.trigger,o=r.attributionLabel,s=r.reason;(0,i.Z)("dispatch_show",{reason:s,attributionLabel:o,oldPage:e.options.navigationTriggeredUpsell?(p=e.options.navigationTriggeredUpsell.oldLocation,p?((0,u.bo)(p)?"today":(0,u.am)(p)&&"board")||(0,u.C$)(p)&&"home"||(0,u.J3)(p)&&"ideas"||(0,u.Xn)(p)&&"login"||(0,u.uM)(p)&&"pin"||(0,u.cD)(p)&&"profile"||(0,u.En)(p)&&"search"||"other":"unknown"):"NOT_APPLICABLE",timesShownForSessionCount:(_=t.timesShownForSessionCount,_<=10?_.toString():_<=20?"[11,20]":_<=50?"[21,50]":_<=100?"[51,100]":"101+")})}else if("DISMISS_MOBILE_SIGNUP_MODAL"===e.type&&n.modal.isShown){var c=n.modal.displayProps.trigger,d=c.attributionLabel,f=c.reason;(0,i.Z)("dispatch_dismiss",{reason:f,attributionLabel:d})}var _,p,h=t.sessionContext.unauthID,v="SHOW_MOBILE_SIGNUP_MODAL"===e.type&&e.options.navigationTriggeredUpsell?e.options.navigationTriggeredUpsell.newLocation:null,b=v?function(e){return(0,u.uM)(e)?{name:"pin",viewType:3}:(0,u.am)(e)?{name:"board",viewType:5}:(0,u.cD)(e)?{name:"profile",viewType:215}:null}(v):null,g=(null==b?void 0:b.viewType)||t.currentPageViewType||132;if(!n.modal.isShown&&t.modal.isShown)if((0,l.j)({event_type:13,element:12403,component:13858,view_type:g,aux_data:{unauth_id:h}}),"SHOW_MOBILE_SIGNUP_MODAL"===e.type&&e.options.attributionLabel){var m=e.options.attributionLabel.replace(/\./g,"_");(0,a.NC)("show_dismissible_mobile_signup_modal_".concat(e.type,"_").concat(m))}else(0,a.NC)("show_dismissible_mobile_signup_modal_".concat(e.type));else"DISMISS_MOBILE_SIGNUP_MODAL"===e.type&&n.modal.isShown&&!t.modal.isShown&&((0,l.j)({event_type:123,component:13858,view_type:g,aux_data:{unauth_id:h}}),(0,a.NC)("dismiss_mobile_signup_modal"))},c=t(172071),d=t(915832),f=t(436851),_=t(385740),p=t(419940),h=t(957161),v="signupModal",b=t(622096),g=t(515198);function m(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,o,i=[],l=!0,a=!1;try{for(t=t.call(e);!(l=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);l=!0);}catch(u){a=!0,o=u}finally{try{l||null==t.return||t.return()}finally{if(a)throw o}}return i}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return y(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return y(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function w(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function S(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?w(Object(t),!0).forEach((function(n){O(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function O(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var P=Object.freeze(["CO","ID"]),E=function(e){var n=e.modalHasShown,t=e.sessionContext,r=t.country,o=t.isUnauthSharingModalsShown,i=t.userAgent;return o||n&&function(e){return P.includes(e)}(r)||(0,p.P)()||function(e){return!!(0,f.d)(e)&&((0,b.qn)("msmrsfiiab")||(c.Z.increment("mobile_signup_modal.rules.suppress_for_instagram_in_app_browser"),(0,b.Nh)("msmrsfiiab","1")),!0)}(i)},A=function(e,n){var t=function(e,n){switch(n.type){case"INCREMENT_UPSELL_ELIGIBLE_NAVIGATION_COUNT":return S(S({},e),{},{upsellEligibleNavigationCount:e.upsellEligibleNavigationCount+1});case"DISMISS_MOBILE_SIGNUP_MODAL":return S(S({},e),{},{modal:{isShown:!1}});case"UPDATE_SESSION_CONTEXT":return S(S({},e),{},{sessionContext:n.sessionContext});case"UPDATE_CURRENT_PAGE_VIEW_TYPE":return S(S({},e),{},{currentPageViewType:n.currentPageViewType});case"RESTORE_FROM_LOCAL_STORAGE":var t=n.upsellEligibleNavigationCount;return S(S({},e),{},{upsellEligibleNavigationCount:null!=t?t:e.upsellEligibleNavigationCount});case"SHOW_MOBILE_SIGNUP_MODAL":var r="UPSELL_LOGIN_OR_SIGNUP"===n.options.reason&&"scrollOnSharedPinPage"===n.options.attributionLabel;return S(S({},e),{},{lastShownTime:n.now,timesShownForSessionCount:e.timesShownForSessionCount+1,scrollControllerHasDisplayed:e.scrollControllerHasDisplayed||r,modal:{isShown:!0,displayProps:{isScrollingModal:r,headingType:n.options.headingType,trigger:{attributionLabel:n.options.attributionLabel,reason:n.options.reason}}}});default:return e}}(e,n);return"DISMISS_MOBILE_SIGNUP_MODAL"!==n.type&&"SHOW_MOBILE_SIGNUP_MODAL"!==n.type||s(n,e,t),t},I=(0,r.createContext)(null),L=function(){return(0,r.useContext)(I)};function x(e){var n=e.children,t=(0,o.useSelector)((function(e){return e.session})),i=t.country,l=t.referrer,a=t.isUnauthSharingModalsShown,u=t.unauthId,s=t.userAgent,c=(0,_.SU)().viewType,f=(0,d.an)(l),p=m((0,r.useReducer)(A,{modal:{isShown:!1},scrollControllerHasDisplayed:!1,upsellEligibleNavigationCount:0,lastShownTime:null,timesShownForSessionCount:0,sessionContext:{country:i,isUnauthSharingModalsShown:a,referrer:f,unauthID:u,userAgent:s},currentPageViewType:c}),2),b=p[0],y=p[1];(0,r.useEffect)((function(){y({type:"UPDATE_SESSION_CONTEXT",sessionContext:{country:i,isUnauthSharingModalsShown:a,referrer:f,unauthID:u,userAgent:s}})}),[i,a,f,u,s]),(0,r.useEffect)((function(){y({type:"UPDATE_CURRENT_PAGE_VIEW_TYPE",currentPageViewType:c})}),[c]);var w=(0,r.useRef)(!1);(0,r.useEffect)((function(){if(!w.current){w.current=!0;var e=function(){var e=(0,h.qn)(v);if(!e)return null;try{var n=JSON.parse(e);return{version:n.version,state:n.data}}catch(t){return null}}(),n=e&&"v1"===e.version?e.state:null;if(n){var t=n.upsellEligibleNavigationCount;y({type:"RESTORE_FROM_LOCAL_STORAGE",upsellEligibleNavigationCount:t})}}}),[]);var S=b.scrollControllerHasDisplayed,O=b.upsellEligibleNavigationCount;return(0,r.useEffect)((function(){w.current&&function(e,n){var t={version:n,data:e},r=JSON.stringify(t);(0,h.Nh)(v,r)}({upsellEligibleNavigationCount:O},"v1")}),[O]),(0,g.jsx)(I.Provider,{value:{modal:b.modal,dismissMobileSignupModal:function(){return y({type:"DISMISS_MOBILE_SIGNUP_MODAL"})},showMobileSignupModal:function(e){return y({type:"SHOW_MOBILE_SIGNUP_MODAL",now:Date.now(),options:e})},upsellIsEnabledGlobally:function(){return!b.modal.isShown&&!E({sessionContext:b.sessionContext,modalHasShown:!!b.lastShownTime})},incrementUpsellEligibleNavigationCount:function(){return y({type:"INCREMENT_UPSELL_ELIGIBLE_NAVIGATION_COUNT"})},scrollControllerHasDisplayed:S,upsellEligibleNavigationCount:O},children:n})}},452047:function(e,n,t){var r=t(172071);n.Z=function(e,n){return r.Z.incrementNow("pinner_conversion.upsell.mweb_signup_modal.".concat(e),1,n)}},419940:function(e,n,t){t.d(n,{C:function(){return u},P:function(){return a}});var r=t(172071),o=t(53987),i=t(622096),l="msmrsfda",a=function(){return!!(0,i.qn)(l)},u=function(e){(0,o.LM)(e)&&!a()&&((0,i.Nh)(l,"1"),r.Z.incrementNow("mobile_signup_modal.rules.suppress_for_discover_article",1))}},436851:function(e,n,t){t.d(n,{$:function(){return o},d:function(){return r}});var r=function(e){return/instagram/i.test(e||"")},o=function(e){return(e||"").includes("[Pinterest/iOS]")||(e||"").includes("[Pinterest/Android]")}},780679:function(e,n,t){t.d(n,{g:function(){return l},t:function(){return i}});var r=t(76911),o=(0,r.createContext)(null),i=o.Provider,l=function(){return(0,r.useContext)(o)}},784590:function(e,n,t){t.d(n,{Z:function(){return _}});var r=t(76911),o=t(48676),i=t(886858),l=t(718368),a=t(937666),u=t(780280),s=t(379725);function c(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,o,i=[],l=!0,a=!1;try{for(t=t.call(e);!(l=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);l=!0);}catch(u){a=!0,o=u}finally{try{l||null==t.return||t.return()}finally{if(a)throw o}}return i}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return d(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return d(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var f={};function _(e){var n=e.dangerouslyDisableFetch,t=e.enabledRouteRefresh,d=e.__unstableEnableSuspenseSupport,_=e.headers,p=e.name,h=e.noCache,v=e.options,b=e.schema,g=(0,o.useDispatch)(),m=(0,i.Z)(v),y=(0,r.useRef)(null),w=(0,r.useRef)(),S=(0,a.k6)(),O=S&&"POP"!==S.action,P=function(e){return(e[p]||f)[m]||f},E=(0,o.useSelector)((function(e){var n=e.resources;return P(n).nextBookmark})),A=(0,o.useSelector)((function(e){var n=e.resources;return P(n).data})),I=(0,o.useSelector)((function(e){var n=e.resources;return P(n).auxData})),L=(0,o.useSelector)((function(e){var n=e.resources;return P(n).error})),x=(0,o.useSelector)((function(e){var n=e.resources;return Boolean(P(n).fetching)})),C=Boolean(L)||void 0!==A,j=C&&!x&&E===l.q,T=Boolean(C&&t&&O&&!n),N=c((0,r.useState)(T),2),M=N[0],D=N[1],U=(0,r.useCallback)((function(e){y.current=g((0,s.U2)(p,{options:v,schema:b,bookmark:e,headers:_}))}),[g,p,m,b,_]),k=function(){y.current=g((0,s.bi)(p,{options:v,schema:b,headers:_}))},H=(0,u.B)().isBot,F=function(){if(!n&&w.current!==m){var e=void 0===w.current;w.current=m,!C&&!x||e&&L&&(!(t=L.httpStatus)||t>=500)?U():(!H&&h||T)&&k()}var t};(0,r.useEffect)((function(){d||F()})),d&&F();var R=(0,r.useCallback)((function(){n||(k(),D(!0))}),[n,s.bi,p,m,_,D]),Z=(0,r.useCallback)((function(){!E||j||x||n||U(E)}),[n,U,E,j,x]);if(y.current)if(C&&!x)y.current=null;else if(d)throw y.current;var G=(0,r.useRef)({auxData:void 0,data:void 0,error:void 0,fetchMore:Z,isAtEnd:!1,isFetching:!1,isLoaded:!1,isRefreshing:!1,nextBookmark:void 0,refresh:R}),B={auxData:I,data:A,error:L,fetchMore:Z,isAtEnd:j,isFetching:x,isLoaded:C,isRefreshing:M,nextBookmark:E,refresh:R};return(0,o.shallowEqual)(B,G.current)||(!M||!G.current.data&&T||(0,o.shallowEqual)(B.data,G.current.data)||(B.isRefreshing=!1,D(!1)),G.current=B),G.current}},343341:function(e,n,t){t.d(n,{F9:function(){return l},Zo:function(){return o},nE:function(){return i}});var r=(0,t(425288).Z)("toastManagerContext"),o=r.Provider,i=r.Consumer,l=r.useHook},19121:function(e,n,t){t.d(n,{$:function(){return o}});var r=(0,t(425288).Z)("viewer"),o=r.Provider,i=r.useHook;n.Z=i},281180:function(e,n,t){t.d(n,{kW:function(){return i},kY:function(){return o},mN:function(){return l}});var r=(0,t(425288).Z)("Users"),o=r.Provider,i=r.useHook;function l(){var e=i().users;return function(n){return e[n]}}},687999:function(e,n,t){t.d(n,{f:function(){return _},w:function(){return p}});var r=t(76911),o=t(425288),i=t(515198);function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){u(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,o,i=[],l=!0,a=!1;try{for(t=t.call(e);!(l=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);l=!0);}catch(u){a=!0,o=u}finally{try{l||null==t.return||t.return()}finally{if(a)throw o}}return i}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return c(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return c(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var d=(0,o.Z)("Session"),f=d.Provider,_=d.useHook;function p(e){var n=e.children,t=s((0,r.useState)(void 0),2),o=t[0],l=t[1],u=(0,r.useMemo)((function(){return{removeUnauthFollowUserId:function(){return l(void 0)},setUnauthFollowUserId:l}}),[]);return(0,i.jsx)(f,{value:a({unauthFollowUserId:o},u),children:n})}},154391:function(e,n,t){t.d(n,{H:function(){return i},o:function(){return o}});var r=(0,t(425288).Z)("LimitedLogin"),o=r.Provider,i=r.useHook},957314:function(e,n,t){t.d(n,{N4:function(){return i},Wh:function(){return r},hr:function(){return o}});var r=function(e){return e._('Log in to continue', 'limitedLogin.modalHeader.default', 'Default title on mobile web limited login modal')},o=function(e){return e._('You\'re almost there! Log in to access all of Pinterest', 'loginModal.limitedLogin.subheader', 'Subheader text on personalized login modal/flyout to remind users to log in')},i=function(e){var n=e.i18n;return e.toFollow?n._('Log in to follow', 'limitedLogin.modalHeader.follow', 'Title on mobile web limited login modal to prompt users to login to follow a user or board.'):n._('Log in to unfollow', 'limitedLogin.modalHeader.unfollow', 'Title on mobile web limited login modal to prompt users to login to unfollow a user or board.')}},728214:function(e,n,t){var r=t(898781),o=t(50286),i=t(154391),l=t(957314);n.Z=function(){var e=(0,r.ZP)(),n=(0,o.HG)(),t=(0,i.H)(),a=t.viewer,u=t.loginForMore,s=t.limitedLoginModalSubheader,c=t.limitedLoginModalNextLocation;return"LIMITED_LOGIN"===a.type?function(t){var r=t.modalHeader,o=t.nextLocation;return function(t){var i=null;t&&(t.nativeEvent&&t.nativeEvent instanceof Event?i=t:t.event&&(i=t.event)),i&&(i.preventDefault&&i.preventDefault(),i.stopPropagation&&i.stopPropagation()),r||(r=n?(0,l.hr)(e):(0,l.Wh)(e)),null==u||u.setVisible(!0),null==s||s.setText(r),o&&(null==c||c.setRoute(o))}}:function(e){return e.fn}}},602574:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(908390),o=t(515198);function i(e){var n=e.ideaPinImages,t={1:28,2:40,3:48},i=n.map((function(e,n){var t,i,l;return(0,o.jsx)(r.xu,{height:48,width:28,color:"white",borderStyle:"sm",overflow:"hidden",rounding:2,dangerouslySetInlineStyle:{__style:{borderColor:"white",marginInlineEnd:"-17px",WebkitMaskImage:"-webkit-radial-gradient(white, black)",zIndex:n}},children:(0,o.jsx)(r.Ee,{alt:"",src:null!==(t=null==e?void 0:e.url)&&void 0!==t?t:"",color:"#696969",fit:"cover",naturalHeight:null!==(i=null==e?void 0:e.height)&&void 0!==i?i:1,naturalWidth:null!==(l=null==e?void 0:e.width)&&void 0!==l?l:1})},n)}));return(0,o.jsx)(r.kC,{justifyContent:"center",children:(0,o.jsx)(r.kC,{justifyContent:"start",width:t[n.length],children:i})})}var l=t(499128),a=t(898781),u=t(784590),s=t(50286);function c(e){var n=e.handleHide,t=e.text,c=e.userId,d=e.href,f=e.imageUrl,_=(0,a.ZP)(),p=(0,s.HG)(),h=(0,u.Z)({name:"UserStoryPinsFeedResource",options:{data:{filter_version:2,public_only:!0},field_set_key:"partner_grid_item",user_id:c}}),v=Array.isArray(t)?t.join(" "):t;if(0===(h.data||[]).length){var b=f?(0,o.jsx)(r.xu,{height:48,overflow:"hidden",width:48,children:(0,o.jsx)(r.Ee,{alt:_._('Image of who you followed', 'userFollowingToast.thumbnail.userImage', 'Profile thumbnail of the user you followed'),fit:"cover",naturalHeight:1,naturalWidth:1,src:f})}):void 0;return(0,o.jsx)(l.ZP,{duration:5e3,onHide:n,text:v,href:d,iconThumbnail:b,thumbnailShape:"circle"})}var g=(h.data||[]).slice(0,3).map((function(e){var n;return null===(n=e.images)||void 0===n?void 0:n[p?"236x":"170x"]})),m=(0,o.jsx)(i,{ideaPinImages:g});return(0,o.jsx)(l.ZP,{href:d,duration:5e3,onHide:n,iconThumbnail:m,text:v,thumbnailShape:"square"})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/93406-8302eb98cd20c974.js.map