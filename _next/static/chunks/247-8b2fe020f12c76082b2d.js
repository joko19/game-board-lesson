(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[247],{9917:function(e,t,n){"use strict";var r=n(3848),o=n(3115);var i=l(n(7294)),a=l(n(639)),c=n(8997),u=n(5809),s=n(7426);function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e){return e&&e.__esModule?e:{default:e}}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){f(e,t,n[t])}))}return e}var p=new Set;var v=new Map([["default",function(e){var t=e.root,n=e.src,r=e.width,o=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(o||75)}],["imgix",function(e){var t=e.root,n=e.src,r=e.width,o=e.quality,i=new URL("".concat(t).concat(S(n))),a=i.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),o&&a.set("q",o.toString());return i.href}],["cloudinary",function(e){var t=e.root,n=e.src,r=e.width,o=e.quality,i=["f_auto","c_limit","w_"+r,"q_"+(o||"auto")].join(",")+"/";return"".concat(t).concat(i).concat(S(n))}],["akamai",function(e){var t=e.root,n=e.src,r=e.width;return"".concat(t).concat(S(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function m(e){return void 0!==e.default}var h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"imgix"}||u.imageConfigDefault,g=h.deviceSizes,w=h.imageSizes,y=h.loader,b=h.path,_=(h.domains,[].concat(o(g),o(w)));function L(e){var t=e.src,n=e.unoptimized,r=e.layout,i=e.width,a=e.quality,c=e.sizes,u=e.loader;if(n)return{src:t,srcSet:void 0,sizes:void 0};var s=function(e,t,n){if(n&&("fill"===t||"responsive"===t)){for(var r,i=/(^|\s)(1?\d?\d)vw/g,a=[];r=i.exec(n);r)a.push(parseInt(r[2]));if(a.length){var c=.01*Math.min.apply(Math,a);return{widths:_.filter((function(e){return e>=g[0]*c})),kind:"w"}}return{widths:_,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:g,kind:"w"}:{widths:o(new Set([e,2*e].map((function(e){return _.find((function(t){return t>=e}))||_[_.length-1]})))),kind:"x"}}(i,r,c),f=s.widths,l=s.kind,d=f.length-1;return{sizes:c||"w"!==l?c:"100vw",srcSet:f.map((function(e,n){return"".concat(u({src:t,quality:a,width:e})," ").concat("w"===l?e:n+1).concat(l)})).join(", "),src:u({src:t,quality:a,width:f[d]})}}function k(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function E(e){var t=v.get(y);if(t)return t(d({root:b},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(u.VALID_LOADERS.join(", "),". Received: ").concat(y))}function S(e){return"/"===e[0]?e.slice(1):e}g.sort((function(e,t){return e-t})),_.sort((function(e,t){return e-t}))},2167:function(e,t,n){"use strict";var r=n(3848);t.default=void 0;var o,i=(o=n(7294))&&o.__esModule?o:{default:o},a=n(1063),c=n(4651),u=n(7426);var s={};function f(e,t,n,r){if(e&&a.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(o?"%"+o:"")]=!0}}var l=function(e){var t,n=!1!==e.prefetch,o=c.useRouter(),l=i.default.useMemo((function(){var t=a.resolveHref(o,e.href,!0),n=r(t,2),i=n[0],c=n[1];return{href:i,as:e.as?a.resolveHref(o,e.as):c||i}}),[o,e.href,e.as]),d=l.href,p=l.as,v=e.children,m=e.replace,h=e.shallow,g=e.scroll,w=e.locale;"string"===typeof v&&(v=i.default.createElement("a",null,v));var y=(t=i.default.Children.only(v))&&"object"===typeof t&&t.ref,b=u.useIntersection({rootMargin:"200px"}),_=r(b,2),L=_[0],k=_[1],E=i.default.useCallback((function(e){L(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,L]);i.default.useEffect((function(){var e=k&&n&&a.isLocalURL(d),t="undefined"!==typeof w?w:o&&o.locale,r=s[d+"%"+p+(t?"%"+t:"")];e&&!r&&f(o,d,p,{locale:t})}),[p,d,k,w,n,o]);var S={ref:E,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,c,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(n))&&(e.preventDefault(),null==c&&r.indexOf("#")>=0&&(c=!1),t[o?"replace":"push"](n,r,{shallow:i,locale:u,scroll:c}))}(e,o,d,p,m,h,g,w)},onMouseEnter:function(e){a.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),f(o,d,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var M="undefined"!==typeof w?w:o&&o.locale,O=o&&o.isLocaleDomain&&a.getDomainLocale(p,M,o&&o.locales,o&&o.domainLocales);S.href=O||a.addBasePath(a.addLocale(p,M,o&&o.defaultLocale))}return i.default.cloneElement(t,S)};t.default=l},7426:function(e,t,n){"use strict";var r=n(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,u=o.useRef(),s=o.useState(!1),f=r(s,2),l=f[0],d=f[1],p=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),n||l||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,i=r.observer,a=r.elements;return a.set(e,t),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),c.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,l]);return o.useEffect((function(){if(!a&&!l){var e=i.requestIdleCallback((function(){return d(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[l]),[p,l]};var o=n(7294),i=n(3447),a="undefined"!==typeof IntersectionObserver;var c=new Map},8997:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.toBase64=function(e){return window.btoa(e)}},5809:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60}},9008:function(e,t,n){n(639)},5675:function(e,t,n){n(9917)},1664:function(e,t,n){e.exports=n(2167)}}]);