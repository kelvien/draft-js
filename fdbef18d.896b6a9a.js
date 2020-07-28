/*! For license information please see fdbef18d.896b6a9a.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{177:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return f}));var r=n(2),o=n(9),a=(n(181),n(180)),c={id:"api-reference-data-conversion",title:"Data Conversion"},i={id:"api-reference-data-conversion",title:"Data Conversion",description:"Because a text editor doesn't exist in a vacuum and it's important to save",source:"@site/../docs/APIReference-Data-Conversion.md",permalink:"/docs/api-reference-data-conversion",editUrl:"https://github.com/facebook/draft-js/edit/master/docs/../docs/APIReference-Data-Conversion.md",lastUpdatedBy:"Panagiotis Vekris",lastUpdatedAt:1587438698,sidebar:"docs",previous:{title:"CompositeDecorator",permalink:"/docs/api-reference-composite-decorator"},next:{title:"RichUtils",permalink:"/docs/api-reference-rich-utils"}},u=[{value:"Functions",id:"functions",children:[{value:"<code>convertFromRaw()</code>",id:"convertfromraw",children:[]},{value:"<code>convertToRaw()</code>",id:"converttoraw",children:[]},{value:"<code>convertFromHTML()</code>",id:"convertfromhtml",children:[]}]}],l={rightToc:u};function f(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Because a text editor doesn't exist in a vacuum and it's important to save\ncontents for storage or transmission, you will want to be able to\nconvert a ",Object(a.b)("inlineCode",{parentName:"p"},"ContentState")," into raw JS, and vice versa."),Object(a.b)("p",null,"To that end, we provide a couple of utility functions that allow you to perform\nthese conversions."),Object(a.b)("p",null,"Note that the Draft library does not currently provide utilities to convert to\nand from markdown or markup, since different clients may have different requirements\nfor these formats. We instead provide JavaScript objects that can be converted\nto other formats as needed."),Object(a.b)("p",null,"The Flow type ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/draft-js/blob/master/src/model/encoding/RawDraftContentState.js"}),Object(a.b)("inlineCode",{parentName:"a"},"RawDraftContentState")),"\ndenotes the expected structure of the raw format of the contents. The raw state\ncontains a list of content blocks, as well as a map of all relevant entity\nobjects."),Object(a.b)("h2",{id:"functions"},"Functions"),Object(a.b)("h3",{id:"convertfromraw"},Object(a.b)("inlineCode",{parentName:"h3"},"convertFromRaw()")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"convertFromRaw(rawState: RawDraftContentState): ContentState\n")),Object(a.b)("p",null,"Given a raw state, convert it to a ",Object(a.b)("inlineCode",{parentName:"p"},"ContentState"),". This is useful when\nrestoring contents to use within a Draft editor."),Object(a.b)("h3",{id:"converttoraw"},Object(a.b)("inlineCode",{parentName:"h3"},"convertToRaw()")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"convertToRaw(contentState: ContentState): RawDraftContentState\n")),Object(a.b)("p",null,"Given a ",Object(a.b)("inlineCode",{parentName:"p"},"ContentState")," object, convert it to a raw JS structure. This is useful\nwhen saving an editor state for storage, conversion to other formats, or\nother usage within an application."),Object(a.b)("h3",{id:"convertfromhtml"},Object(a.b)("inlineCode",{parentName:"h3"},"convertFromHTML()")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const sampleMarkup =\n  '<b>Bold text</b>, <i>Italic text</i><br/ ><br />' +\n  '<a href=\"http://www.facebook.com\">Example link</a>';\n\nconst blocksFromHTML = convertFromHTML(sampleMarkup);\nconst state = ContentState.createFromBlockArray(\n  blocksFromHTML.contentBlocks,\n  blocksFromHTML.entityMap,\n);\n\nthis.state = {\n  editorState: EditorState.createWithContent(state),\n};\n")),Object(a.b)("p",null,"Given an HTML fragment, convert it to an object with two keys; one holding the\narray of ",Object(a.b)("inlineCode",{parentName:"p"},"ContentBlock")," objects, and the other holding a reference to the\nentityMap. Construct content state from the array of block elements and the\nentityMap, and then update the editor state with it. Full example available\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/draft-js/tree/master/examples/draft-0-10-0/convertFromHTML"}),"here"),"."))}f.isMDXComponent=!0},180:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),f=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=f(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=f(n),d=r,b=s["".concat(c,".").concat(d)]||s[d]||p[d]||a;return n?o.a.createElement(b,i(i({ref:t},l),{},{components:n})):o.a.createElement(b,i({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},181:function(e,t,n){"use strict";e.exports=n(182)},182:function(e,t,n){"use strict";var r=n(183),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,u=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.concurrent_mode"):60111,d=o?Symbol.for("react.forward_ref"):60112,b=o?Symbol.for("react.suspense"):60113,m=o?Symbol.for("react.memo"):60115,y=o?Symbol.for("react.lazy"):60116,v="function"==typeof Symbol&&Symbol.iterator;function h(e,t,n,r,o,a,c,i){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,o,a,c,i],l=0;(e=Error(t.replace(/%s/g,(function(){return u[l++]})))).name="Invariant Violation"}throw e.framesToPop=1,e}}function j(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);h(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w={};function g(e,t,n){this.props=e,this.context=t,this.refs=w,this.updater=n||O}function S(){}function k(e,t,n){this.props=e,this.context=t,this.refs=w,this.updater=n||O}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&j("85"),this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},S.prototype=g.prototype;var C=k.prototype=new S;C.constructor=k,r(C,g.prototype),C.isPureReactComponent=!0;var x={current:null},P={current:null},_=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function R(e,t,n){var r=void 0,o={},c=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)_.call(t,r)&&!E.hasOwnProperty(r)&&(o[r]=t[r]);var u=arguments.length-2;if(1===u)o.children=n;else if(1<u){for(var l=Array(u),f=0;f<u;f++)l[f]=arguments[f+2];o.children=l}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===o[r]&&(o[r]=u[r]);return{$$typeof:a,type:e,key:c,ref:i,props:o,_owner:P.current}}function T(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var N=/\/+/g,M=[];function $(e,t,n,r){if(M.length){var o=M.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function D(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>M.length&&M.push(e)}function F(e,t,n){return null==e?0:function e(t,n,r,o){var i=typeof t;"undefined"!==i&&"boolean"!==i||(t=null);var u=!1;if(null===t)u=!0;else switch(i){case"string":case"number":u=!0;break;case"object":switch(t.$$typeof){case a:case c:u=!0}}if(u)return r(o,t,""===n?"."+L(t,0):n),1;if(u=0,n=""===n?".":n+":",Array.isArray(t))for(var l=0;l<t.length;l++){var f=n+L(i=t[l],l);u+=e(i,f,r,o)}else if(null===t||"object"!=typeof t?f=null:f="function"==typeof(f=v&&t[v]||t["@@iterator"])?f:null,"function"==typeof f)for(t=f.call(t),l=0;!(i=t.next()).done;)u+=e(i=i.value,f=n+L(i,l++),r,o);else"object"===i&&j("31","[object Object]"===(r=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":r,"");return u}(e,"",t,n)}function L(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function A(e,t){e.func.call(e.context,t,e.count++)}function I(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?U(e,r,n,(function(e){return e})):null!=e&&(T(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(N,"$&/")+"/")+n)),r.push(e))}function U(e,t,n,r,o){var a="";null!=n&&(a=(""+n).replace(N,"$&/")+"/"),F(e,I,t=$(t,a,r,o)),D(t)}function H(){var e=x.current;return null===e&&j("307"),e}var B={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return U(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;F(e,A,t=$(null,null,t,n)),D(t)},count:function(e){return F(e,(function(){return null}),null)},toArray:function(e){var t=[];return U(e,t,null,(function(e){return e})),t},only:function(e){return T(e)||j("143"),e}},createRef:function(){return{current:null}},Component:g,PureComponent:k,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:d,render:e}},lazy:function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return H().useCallback(e,t)},useContext:function(e,t){return H().useContext(e,t)},useEffect:function(e,t){return H().useEffect(e,t)},useImperativeHandle:function(e,t,n){return H().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return H().useLayoutEffect(e,t)},useMemo:function(e,t){return H().useMemo(e,t)},useReducer:function(e,t,n){return H().useReducer(e,t,n)},useRef:function(e){return H().useRef(e)},useState:function(e){return H().useState(e)},Fragment:i,StrictMode:u,Suspense:b,createElement:R,cloneElement:function(e,t,n){null==e&&j("267",e);var o=void 0,c=r({},e.props),i=e.key,u=e.ref,l=e._owner;if(null!=t){void 0!==t.ref&&(u=t.ref,l=P.current),void 0!==t.key&&(i=""+t.key);var f=void 0;for(o in e.type&&e.type.defaultProps&&(f=e.type.defaultProps),t)_.call(t,o)&&!E.hasOwnProperty(o)&&(c[o]=void 0===t[o]&&void 0!==f?f[o]:t[o])}if(1===(o=arguments.length-2))c.children=n;else if(1<o){f=Array(o);for(var s=0;s<o;s++)f[s]=arguments[s+2];c.children=f}return{$$typeof:a,type:e.type,key:i,ref:u,props:c,_owner:l}},createFactory:function(e){var t=R.bind(null,e);return t.type=e,t},isValidElement:T,version:"16.8.4",unstable_ConcurrentMode:p,unstable_Profiler:l,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:x,ReactCurrentOwner:P,assign:r}},q={default:B},V=q&&B||q;e.exports=V.default||V},183:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,i,u=c(e),l=1;l<arguments.length;l++){for(var f in n=Object(arguments[l]))o.call(n,f)&&(u[f]=n[f]);if(r){i=r(n);for(var s=0;s<i.length;s++)a.call(n,i[s])&&(u[i[s]]=n[i[s]])}}return u}}}]);