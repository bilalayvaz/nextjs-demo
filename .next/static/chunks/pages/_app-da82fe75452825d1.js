(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(3801)}])},1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,o){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(4941).Z;n(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(2648).Z,a=n(7273).Z,u=r(n(7294)),l=n(6273),i=n(2725),c=n(3462),f=n(1018),s=n(7190),d=n(1210),p=n(8684),v={};function y(e,t,n,o){if(e&&l.isLocalURL(t)){Promise.resolve(e.prefetch(t,n,o)).catch((function(e){0}));var r=o&&"undefined"!==typeof o.locale?o.locale:e&&e.locale;v[t+"%"+n+(r?"%"+r:"")]=!0}}var h=u.default.forwardRef((function(e,t){var n,r=e.href,h=e.as,_=e.children,b=e.prefetch,g=e.passHref,x=e.replace,j=e.shallow,m=e.scroll,C=e.locale,M=e.onClick,O=e.onMouseEnter,L=e.onTouchStart,P=e.legacyBehavior,w=void 0===P?!0!==Boolean(!1):P,E=a(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=_,!w||"string"!==typeof n&&"number"!==typeof n||(n=u.default.createElement("a",null,n));var R=!1!==b,N=u.default.useContext(c.RouterContext),k=u.default.useContext(f.AppRouterContext);k&&(N=k);var T,S=u.default.useMemo((function(){var e=o(l.resolveHref(N,r,!0),2),t=e[0],n=e[1];return{href:t,as:h?l.resolveHref(N,h):n||t}}),[N,r,h]),I=S.href,A=S.as,U=u.default.useRef(I),Z=u.default.useRef(A);w&&(T=u.default.Children.only(n));var B=w?T&&"object"===typeof T&&T.ref:t,D=o(s.useIntersection({rootMargin:"200px"}),3),K=D[0],H=D[1],X=D[2],G=u.default.useCallback((function(e){Z.current===A&&U.current===I||(X(),Z.current=A,U.current=I),K(e),B&&("function"===typeof B?B(e):"object"===typeof B&&(B.current=e))}),[A,B,I,X,K]);u.default.useEffect((function(){var e=H&&R&&l.isLocalURL(I),t="undefined"!==typeof C?C:N&&N.locale,n=v[I+"%"+A+(t?"%"+t:"")];e&&!n&&y(N,I,A,{locale:t})}),[A,I,H,C,R,N]);var q={ref:G,onClick:function(e){w||"function"!==typeof M||M(e),w&&T.props&&"function"===typeof T.props.onClick&&T.props.onClick(e),e.defaultPrevented||function(e,t,n,o,r,a,i,c,f,s){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(n)){e.preventDefault();var d=function(){"beforePopState"in t?t[r?"replace":"push"](n,o,{shallow:a,locale:c,scroll:i}):t[r?"replace":"push"](n,{forceOptimisticNavigation:!s})};f?u.default.startTransition(d):d()}}(e,N,I,A,x,j,m,C,Boolean(k),R)},onMouseEnter:function(e){w||"function"!==typeof O||O(e),w&&T.props&&"function"===typeof T.props.onMouseEnter&&T.props.onMouseEnter(e),!R&&k||l.isLocalURL(I)&&y(N,I,A,{priority:!0})},onTouchStart:function(e){w||"function"!==typeof L||L(e),w&&T.props&&"function"===typeof T.props.onTouchStart&&T.props.onTouchStart(e),!R&&k||l.isLocalURL(I)&&y(N,I,A,{priority:!0})}};if(!w||g||"a"===T.type&&!("href"in T.props)){var z="undefined"!==typeof C?C:N&&N.locale,J=N&&N.isLocaleDomain&&d.getDomainLocale(A,z,N.locales,N.domainLocales);q.href=J||p.addBasePath(i.addLocale(A,z,N&&N.defaultLocale))}return w?u.default.cloneElement(T,q):u.default.createElement("a",Object.assign({},E,q),n)}));t.default=h,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,c=e.disabled||!u,f=o(r.useState(!1),2),s=f[0],d=f[1],p=o(r.useState(null),2),v=p[0],y=p[1];r.useEffect((function(){if(u){if(c||s)return;if(v&&v.tagName){var e=function(e,t,n){var o=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},o=i.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(o&&(t=l.get(o)))return t;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:a,elements:r},i.push(n),l.set(n,t),t}(n),r=o.id,a=o.observer,u=o.elements;return u.set(e,t),a.observe(e),function(){if(u.delete(e),a.unobserve(e),0===u.size){a.disconnect(),l.delete(r);var t=i.findIndex((function(e){return e.root===r.root&&e.margin===r.margin}));t>-1&&i.splice(t,1)}}}(v,(function(e){return e&&d(e)}),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!s){var o=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(o)}}}),[v,c,n,t,s]);var h=r.useCallback((function(){d(!1)}),[]);return[y,s,h]};var r=n(7294),a=n(9311),u="function"===typeof IntersectionObserver,l=new Map,i=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var o=(0,n(2648).Z)(n(7294)),r=o.default.createContext(null);t.AppRouterContext=r;var a=o.default.createContext(null);t.LayoutRouterContext=a;var u=o.default.createContext(null);t.GlobalLayoutRouterContext=u;var l=o.default.createContext(null);t.TemplateContext=l},3801:function(e,t,n){"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}n.r(t),n.d(t,{default:function(){return v}});var a=n(5893),u=n(1664),l=n.n(u),i=n(4568),c=n.n(i);var f=function(){return(0,a.jsxs)("header",{className:c().header,children:[(0,a.jsx)("div",{className:c().logo,children:"React Meetups"}),(0,a.jsx)("nav",{children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(l(),{href:"/",children:"All Meetups"})}),(0,a.jsx)("li",{children:(0,a.jsx)(l(),{href:"/new-meetup",children:"Add New Meetup"})})]})})]})},s=n(8239),d=n.n(s);var p=function(e){return(0,a.jsxs)("div",{children:[(0,a.jsx)(f,{}),(0,a.jsx)("main",{className:d().main,children:e.children})]})};n(906);var v=function(e){var t=e.Component,n=e.pageProps;return(0,a.jsx)(p,{children:(0,a.jsx)(t,r({},n))})}},8239:function(e){e.exports={main:"Layout_main__NgJgX"}},4568:function(e){e.exports={header:"MainNavigation_header__WuiTa",logo:"MainNavigation_logo__oTonQ",active:"MainNavigation_active__eKPZi"}},906:function(){},1664:function(e,t,n){e.exports=n(8418)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1118),t(387)}));var n=e.O();_N_E=n}]);