_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"5pQq":function(e,t,n){},Dnud:function(e,t,n){"use strict";n.r(t);var a=n("nKUr"),r=n("apO0");t.default=function(e){return Object(a.jsx)(r.a,{children:Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"KnowledgeDB page"}),Object(a.jsx)("p",{children:"Hello KnowledgeDB!"})]})})}},E4F9:function(e,t,n){e.exports={container:"layout_container__2kyNC",header:"layout_header__1QwCe",backToHome:"layout_backToHome__2E3Ba",layoutStyle:"layout_layoutStyle__M8rax",contentStyle:"layout_contentStyle__2xsL-"}},QpHn:function(e,t,n){e.exports={headerStyle:"header_headerStyle__1gVw5",headerLeftStyle:"header_headerLeftStyle__3ISg4",headerRightStyle:"header_headerRightStyle__1BXom",headerSubStyle:"header_headerSubStyle__3AdLo"}},YFqc:function(e,t,n){e.exports=n("cTJO")},apO0:function(e,t,n){"use strict";var a=n("nKUr"),r=n("QpHn"),c=n.n(r),l=function(){return Object(a.jsxs)("div",{className:c.a.headerStyle,children:[Object(a.jsx)("div",{className:c.a.headerLeftStyle,children:"AI Platform for Production Scheduling"}),Object(a.jsxs)("div",{className:c.a.headerRightStyle,children:[Object(a.jsx)("div",{className:c.a.headerSubStyle,children:"User: Guest"}),Object(a.jsx)("div",{className:c.a.headerSubStyle,children:Object(a.jsx)("a",{href:"/language",children:"Language"})}),Object(a.jsx)("div",{className:c.a.headerSubStyle,children:"LEXER RESEARCH"})]})]})},o=n("q1tI"),s=n.n(o),i={black:"_2Ll57",blue:"_26ojv",light:"_36YqV",peach:"_1vjRi",purple:"_1tllo",aqua:"_2maJj"},u=function(e){var t=e.isCollapsed,n=e.toggleIsOpen,a=e.classes;return s.a.createElement("span",{onClick:function(){return n(!t)},className:a},t?s.a.createElement("i",{className:"fas fa-bars _2_oI1"}):s.a.createElement("i",{className:"fas fa-times _2_oI1"}))},d={black:"_3HbC6",blue:"_2nNpb",light:"_8tJF8",peach:"_2PHvo",purple:"_lbp0_",aqua:"_1NfpZ"},f=function(e){var t=e.bgColor,n=e.children,a=e.isCollapsed,r=e.classes,c=Object(o.useState)(a),l=c[0],d=c[1],f=Object(o.useState)(!a),h=f[0],p=f[1],b=i[t]||i.white,_=Object(o.useState)(""),v=_[0],j=_[1];return Object(o.useEffect)((function(){j(l?" _2Q5t5 ":""),a===h&&(d(a),p(!a))}),[l,a]),s.a.createElement("div",{className:"_13dNw "+b+" "+v+" "+r},s.a.createElement(u,{isCollapsed:l,toggleIsOpen:d}),l?"":n)},h=function(e){var t=e.children,n=e.classes;return s.a.createElement("h2",{className:n},t)},p=function(e){var t=e.bgColor,n=e.children,a=e.onClick,r=e.classes,c=d[t]+" "+i[t];return s.a.createElement("div",{onClick:a,className:"_VrCvP "+c+" "+r},n)},b=(n("5pQq"),n("YFqc")),_=n.n(b),v=function(){return Object(a.jsx)("div",{children:Object(a.jsxs)(f,{bgColor:"black",isCollapsed:!0,children:[Object(a.jsx)("div",{style:{marginTop:"100px"}}),Object(a.jsx)(h,{children:Object(a.jsx)("a",{href:"https://www.lexer.co.jp/en",children:"LEXER RESEARCH"})}),Object(a.jsx)(_.a,{href:"/",children:Object(a.jsx)(p,{bgColor:"black",children:"Home"})}),Object(a.jsx)(_.a,{href:"/posts/workloadchart",children:Object(a.jsx)(p,{bgColor:"black",children:"Workload Gantt Chart"})})]})})},j=n("E4F9"),y=n.n(j);t.a=function(e){return Object(a.jsxs)("div",{className:y.a.layoutStyle,children:[Object(a.jsx)(l,{}),Object(a.jsx)(v,{}),Object(a.jsx)("div",{className:y.a.contentStyle,children:e.children})]})}},cTJO:function(e,t,n){"use strict";var a=n("J4zp"),r=n("284h");t.__esModule=!0,t.default=void 0;var c=r(n("q1tI")),l=n("elyg"),o=n("nOHt"),s=n("vNVm"),i={};function u(e,t,n,a){if(e&&(0,l.isLocalURL)(t)){e.prefetch(t,n,a).catch((function(e){0}));var r=a&&"undefined"!==typeof a.locale?a.locale:e&&e.locale;i[t+"%"+n+(r?"%"+r:"")]=!0}}var d=function(e){var t=!1!==e.prefetch,n=(0,o.useRouter)(),r=n&&n.pathname||"/",d=c.default.useMemo((function(){var t=(0,l.resolveHref)(r,e.href,!0),n=a(t,2),c=n[0],o=n[1];return{href:c,as:e.as?(0,l.resolveHref)(r,e.as):o||c}}),[r,e.href,e.as]),f=d.href,h=d.as,p=e.children,b=e.replace,_=e.shallow,v=e.scroll,j=e.locale;"string"===typeof p&&(p=c.default.createElement("a",null,p));var y=c.Children.only(p),m=y&&"object"===typeof y&&y.ref,g=(0,s.useIntersection)({rootMargin:"200px"}),O=a(g,2),E=O[0],x=O[1],S=c.default.useCallback((function(e){E(e),m&&("function"===typeof m?m(e):"object"===typeof m&&(m.current=e))}),[m,E]);(0,c.useEffect)((function(){var e=x&&t&&(0,l.isLocalURL)(f),a="undefined"!==typeof j?j:n&&n.locale,r=i[f+"%"+h+(a?"%"+a:"")];e&&!r&&u(n,f,h,{locale:a})}),[h,f,x,j,t,n]);var N={ref:S,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,t,n,a,r,c,o,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,l.isLocalURL)(n))&&(e.preventDefault(),null==o&&(o=a.indexOf("#")<0),t[r?"replace":"push"](n,a,{shallow:c,locale:s,scroll:o}).then((function(e){e&&o&&document.body.focus()})))}(e,n,f,h,b,_,v,j)},onMouseEnter:function(e){(0,l.isLocalURL)(f)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),u(n,f,h,{priority:!0}))}};if(e.passHref||"a"===y.type&&!("href"in y.props)){var w="undefined"!==typeof j?j:n&&n.locale,C=(0,l.getDomainLocale)(h,w,n&&n.locales,n&&n.domainLocales);N.href=C||(0,l.addBasePath)((0,l.addLocale)(h,w,n&&n.defaultLocale))}return c.default.cloneElement(y,N)};t.default=d},fWN4:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/knowledgedb",function(){return n("Dnud")}])},vNVm:function(e,t,n){"use strict";var a=n("J4zp"),r=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!o,r=(0,c.useRef)(),i=(0,c.useState)(!1),u=a(i,2),d=u[0],f=u[1],h=(0,c.useCallback)((function(e){r.current&&(r.current(),r.current=void 0),n||d||e&&e.tagName&&(r.current=function(e,t,n){var a=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var a=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=a.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:r,elements:a}),n}(n),r=a.id,c=a.observer,l=a.elements;return l.set(e,t),c.observe(e),function(){l.delete(e),c.unobserve(e),0===l.size&&(c.disconnect(),s.delete(r))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,d]);return(0,c.useEffect)((function(){o||d||(0,l.default)((function(){return f(!0)}))}),[d]),[h,d]};var c=n("q1tI"),l=r(n("0G5g")),o="undefined"!==typeof IntersectionObserver;var s=new Map}},[["fWN4",0,2,1]]]);