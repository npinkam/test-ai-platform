_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"2LSq":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/monitoring",function(){return n("LEt6")}])},"5pQq":function(e,t,n){},E4F9:function(e,t,n){e.exports={container:"layout_container__2kyNC",header:"layout_header__1QwCe",backToHome:"layout_backToHome__2E3Ba",layoutStyle:"layout_layoutStyle__M8rax",contentStyle:"layout_contentStyle__2xsL-"}},LEt6:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),a=n("apO0");t.default=function(e){return Object(r.jsx)(a.a,{children:Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Monitoring page"}),Object(r.jsx)("p",{children:"Hello Monitoring!"})]})})}},QpHn:function(e,t,n){e.exports={headerStyle:"header_headerStyle__1gVw5",headerLeftStyle:"header_headerLeftStyle__3ISg4",headerRightStyle:"header_headerRightStyle__1BXom",headerSubStyle:"header_headerSubStyle__3AdLo"}},YFqc:function(e,t,n){e.exports=n("cTJO")},apO0:function(e,t,n){"use strict";var r=n("nKUr"),a=n("QpHn"),c=n.n(a),o=function(){return Object(r.jsxs)("div",{className:c.a.headerStyle,children:[Object(r.jsx)("div",{className:c.a.headerLeftStyle,children:"AI Platform for Production Scheduling"}),Object(r.jsxs)("div",{className:c.a.headerRightStyle,children:[Object(r.jsx)("div",{className:c.a.headerSubStyle,children:"User: Guest"}),Object(r.jsx)("div",{className:c.a.headerSubStyle,children:Object(r.jsx)("a",{href:"/language",children:"Language"})}),Object(r.jsx)("div",{className:c.a.headerSubStyle,children:"LEXER RESEARCH"})]})]})},l=n("q1tI"),s=n.n(l),i={black:"_2Ll57",blue:"_26ojv",light:"_36YqV",peach:"_1vjRi",purple:"_1tllo",aqua:"_2maJj"},u=function(e){var t=e.isCollapsed,n=e.toggleIsOpen,r=e.classes;return s.a.createElement("span",{onClick:function(){return n(!t)},className:r},t?s.a.createElement("i",{className:"fas fa-bars _2_oI1"}):s.a.createElement("i",{className:"fas fa-times _2_oI1"}))},d={black:"_3HbC6",blue:"_2nNpb",light:"_8tJF8",peach:"_2PHvo",purple:"_lbp0_",aqua:"_1NfpZ"},f=function(e){var t=e.bgColor,n=e.children,r=e.isCollapsed,a=e.classes,c=Object(l.useState)(r),o=c[0],d=c[1],f=Object(l.useState)(!r),h=f[0],p=f[1],b=i[t]||i.white,_=Object(l.useState)(""),v=_[0],j=_[1];return Object(l.useEffect)((function(){j(o?" _2Q5t5 ":""),r===h&&(d(r),p(!r))}),[o,r]),s.a.createElement("div",{className:"_13dNw "+b+" "+v+" "+a},s.a.createElement(u,{isCollapsed:o,toggleIsOpen:d}),o?"":n)},h=function(e){var t=e.children,n=e.classes;return s.a.createElement("h2",{className:n},t)},p=function(e){var t=e.bgColor,n=e.children,r=e.onClick,a=e.classes,c=d[t]+" "+i[t];return s.a.createElement("div",{onClick:r,className:"_VrCvP "+c+" "+a},n)},b=(n("5pQq"),n("YFqc")),_=n.n(b),v=function(){return Object(r.jsx)("div",{children:Object(r.jsxs)(f,{bgColor:"black",isCollapsed:!0,children:[Object(r.jsx)("div",{style:{marginTop:"100px"}}),Object(r.jsx)(h,{children:Object(r.jsx)("a",{href:"https://www.lexer.co.jp/en",children:"LEXER RESEARCH"})}),Object(r.jsx)(_.a,{href:"/",children:Object(r.jsx)(p,{bgColor:"black",children:"Home"})}),Object(r.jsx)(_.a,{href:"/posts/workloadchart",children:Object(r.jsx)(p,{bgColor:"black",children:"Workload Gantt Chart"})})]})})},j=n("E4F9"),y=n.n(j);t.a=function(e){return Object(r.jsxs)("div",{className:y.a.layoutStyle,children:[Object(r.jsx)(o,{}),Object(r.jsx)(v,{}),Object(r.jsx)("div",{className:y.a.contentStyle,children:e.children})]})}},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var c=a(n("q1tI")),o=n("elyg"),l=n("nOHt"),s=n("vNVm"),i={};function u(e,t,n,r){if(e&&(0,o.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;i[t+"%"+n+(a?"%"+a:"")]=!0}}var d=function(e){var t=!1!==e.prefetch,n=(0,l.useRouter)(),a=n&&n.pathname||"/",d=c.default.useMemo((function(){var t=(0,o.resolveHref)(a,e.href,!0),n=r(t,2),c=n[0],l=n[1];return{href:c,as:e.as?(0,o.resolveHref)(a,e.as):l||c}}),[a,e.href,e.as]),f=d.href,h=d.as,p=e.children,b=e.replace,_=e.shallow,v=e.scroll,j=e.locale;"string"===typeof p&&(p=c.default.createElement("a",null,p));var y=c.Children.only(p),m=y&&"object"===typeof y&&y.ref,g=(0,s.useIntersection)({rootMargin:"200px"}),O=r(g,2),E=O[0],S=O[1],x=c.default.useCallback((function(e){E(e),m&&("function"===typeof m?m(e):"object"===typeof m&&(m.current=e))}),[m,E]);(0,c.useEffect)((function(){var e=S&&t&&(0,o.isLocalURL)(f),r="undefined"!==typeof j?j:n&&n.locale,a=i[f+"%"+h+(r?"%"+r:"")];e&&!a&&u(n,f,h,{locale:r})}),[h,f,S,j,t,n]);var N={ref:x,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,c,l,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,o.isLocalURL)(n))&&(e.preventDefault(),null==l&&(l=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:c,locale:s,scroll:l}).then((function(e){e&&l&&document.body.focus()})))}(e,n,f,h,b,_,v,j)},onMouseEnter:function(e){(0,o.isLocalURL)(f)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),u(n,f,h,{priority:!0}))}};if(e.passHref||"a"===y.type&&!("href"in y.props)){var C="undefined"!==typeof j?j:n&&n.locale,L=(0,o.getDomainLocale)(h,C,n&&n.locales,n&&n.domainLocales);N.href=L||(0,o.addBasePath)((0,o.addLocale)(h,C,n&&n.defaultLocale))}return c.default.cloneElement(y,N)};t.default=d},vNVm:function(e,t,n){"use strict";var r=n("J4zp"),a=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!l,a=(0,c.useRef)(),i=(0,c.useState)(!1),u=r(i,2),d=u[0],f=u[1],h=(0,c.useCallback)((function(e){a.current&&(a.current(),a.current=void 0),n||d||e&&e.tagName&&(a.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,c=r.observer,o=r.elements;return o.set(e,t),c.observe(e),function(){o.delete(e),c.unobserve(e),0===o.size&&(c.disconnect(),s.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,d]);return(0,c.useEffect)((function(){l||d||(0,o.default)((function(){return f(!0)}))}),[d]),[h,d]};var c=n("q1tI"),o=a(n("0G5g")),l="undefined"!==typeof IntersectionObserver;var s=new Map}},[["2LSq",0,2,1]]]);