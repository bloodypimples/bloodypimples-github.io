"use strict"
/*! jQuery v3.1.0 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.1.0",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null!=a?a<0?this[a+this.length]:this[a]:f.call(this)},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=r.isArray(d)))?(e?(e=!1,f=c&&r.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"label"in b&&b.disabled===a||"form"in b&&b.disabled===a||"form"in b&&b.disabled===!1&&(b.isDisabled===a||b.isDisabled!==!a&&("label"in b||!ea(b))!==a)}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e)}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(_,aa),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=V.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(_,aa),$.test(j[0].type)&&qa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&sa(j),!a)return G.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||$.test(a)&&qa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext,B=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,C=/^.[^:#\[\.,]*$/;function D(a,b,c){if(r.isFunction(b))return r.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return r.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(C.test(b))return r.filter(b,a,c);b=r.filter(b,a)}return r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType})}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(D(this,a||[],!1))},not:function(a){return this.pushStack(D(this,a||[],!0))},is:function(a){return!!D(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var E,F=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,G=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||E,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:F.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),B.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};G.prototype=r.fn,E=r(d);var H=/^(?:parents|prev(?:Until|All))/,I={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function J(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return J(a,"nextSibling")},prev:function(a){return J(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return a.contentDocument||r.merge([],a.childNodes)}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(I[a]||r.uniqueSort(e),H.test(a)&&e.reverse()),this.pushStack(e)}});var K=/\S+/g;function L(a){var b={};return r.each(a.match(K)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?L(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function M(a){return a}function N(a){throw a}function O(a,b,c){var d;try{a&&r.isFunction(d=a.promise)?d.call(a).done(b).fail(c):a&&r.isFunction(d=a.then)?d.call(a,b,c):b.call(void 0,a)}catch(a){c.call(void 0,a)}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,M,e),g(f,c,N,e)):(f++,j.call(a,g(f,c,M,e),g(f,c,N,e),g(f,c,M,c.notifyWith))):(d!==M&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==N&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:M,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:M)),c[2][3].add(g(0,a,r.isFunction(d)?d:N))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(O(a,g.done(h(c)).resolve,g.reject),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)O(e[c],h(c),g.reject);return g.promise()}});var P=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&P.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var Q=r.Deferred();r.fn.ready=function(a){return Q.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,holdReady:function(a){a?r.readyWait++:r.ready(!0)},ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||Q.resolveWith(d,[r]))}}),r.ready.then=Q.then;function R(){d.removeEventListener("DOMContentLoaded",R),a.removeEventListener("load",R),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",R),a.addEventListener("load",R));var S=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)S(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,
r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},T=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function U(){this.expando=r.expando+U.uid++}U.uid=1,U.prototype={cache:function(a){var b=a[this.expando];return b||(b={},T(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){r.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(K)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var V=new U,W=new U,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Y=/[A-Z]/g;function Z(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Y,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c||"false"!==c&&("null"===c?null:+c+""===c?+c:X.test(c)?JSON.parse(c):c)}catch(e){}W.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return W.hasData(a)||V.hasData(a)},data:function(a,b,c){return W.access(a,b,c)},removeData:function(a,b){W.remove(a,b)},_data:function(a,b,c){return V.access(a,b,c)},_removeData:function(a,b){V.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=W.get(f),1===f.nodeType&&!V.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),Z(f,d,e[d])));V.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){W.set(this,a)}):S(this,function(b){var c;if(f&&void 0===b){if(c=W.get(f,a),void 0!==c)return c;if(c=Z(f,a),void 0!==c)return c}else this.each(function(){W.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){W.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=V.get(a,b),c&&(!d||r.isArray(c)?d=V.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return V.get(a,c)||V.access(a,c,{empty:r.Callbacks("once memory").add(function(){V.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=V.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var $=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,_=new RegExp("^(?:([+-])=|)("+$+")([a-z%]*)$","i"),aa=["Top","Right","Bottom","Left"],ba=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ca=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function da(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&_.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ea={};function fa(a){var b,c=a.ownerDocument,d=a.nodeName,e=ea[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ea[d]=e,e)}function ga(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=V.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&ba(d)&&(e[f]=fa(d))):"none"!==c&&(e[f]="none",V.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ga(this,!0)},hide:function(){return ga(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){ba(this)?r(this).show():r(this).hide()})}});var ha=/^(?:checkbox|radio)$/i,ia=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,ja=/^$|\/(?:java|ecma)script/i,ka={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ka.optgroup=ka.option,ka.tbody=ka.tfoot=ka.colgroup=ka.caption=ka.thead,ka.th=ka.td;function la(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&r.nodeName(a,b)?r.merge([a],c):c}function ma(a,b){for(var c=0,d=a.length;c<d;c++)V.set(a[c],"globalEval",!b||V.get(b[c],"globalEval"))}var na=/<|&#?\w+;/;function oa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(na.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ia.exec(f)||["",""])[1].toLowerCase(),i=ka[h]||ka._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=la(l.appendChild(f),"script"),j&&ma(g),c){k=0;while(f=g[k++])ja.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var pa=d.documentElement,qa=/^key/,ra=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,sa=/^([^.]*)(?:\.(.+)|)/;function ta(){return!0}function ua(){return!1}function va(){try{return d.activeElement}catch(a){}}function wa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)wa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ua;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(pa,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(K)||[""],j=b.length;while(j--)h=sa.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.hasData(a)&&V.get(a);if(q&&(i=q.events)){b=(b||"").match(K)||[""],j=b.length;while(j--)if(h=sa.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&V.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(V.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;c<h;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?r(e,this).index(i)>-1:r.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==va()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===va()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&r.nodeName(this,"input"))return this.click(),!1},_default:function(a){return r.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ta:ua,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:ua,isPropagationStopped:ua,isImmediatePropagationStopped:ua,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ta,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ta,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ta,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&qa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ra.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return wa(this,a,b,c,d)},one:function(a,b,c,d){return wa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=ua),this.each(function(){r.event.remove(this,a,c,b)})}});var xa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,ya=/<script|<style|<link/i,za=/checked\s*(?:[^=]|=\s*.checked.)/i,Aa=/^true\/(.*)/,Ba=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ca(a,b){return r.nodeName(a,"table")&&r.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a:a}function Da(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ea(a){var b=Aa.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(V.hasData(a)&&(f=V.access(a),g=V.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}W.hasData(a)&&(h=W.access(a),i=r.extend({},h),W.set(b,i))}}function Ga(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ha.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ha(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&za.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(m&&(e=oa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(la(e,"script"),Da),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,la(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ea),l=0;l<i;l++)j=h[l],ja.test(j.type||"")&&!V.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Ba,""),k))}return a}function Ia(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(la(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&ma(la(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(xa,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=la(h),f=la(a),d=0,e=f.length;d<e;d++)Ga(f[d],g[d]);if(b)if(c)for(f=f||la(a),g=g||la(h),d=0,e=f.length;d<e;d++)Fa(f[d],g[d]);else Fa(a,h);return g=la(h,"script"),g.length>0&&ma(g,!i&&la(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(T(c)){if(b=c[V.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[V.expando]=void 0}c[W.expando]&&(c[W.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return S(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(la(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return S(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!ya.test(a)&&!ka[(ia.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(la(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(la(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var Ja=/^margin/,Ka=new RegExp("^("+$+")(?!px)[a-z%]+$","i"),La=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",pa.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,pa.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Ma(a,b,c){var d,e,f,g,h=a.style;return c=c||La(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ka.test(g)&&Ja.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Na(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Oa=/^(none|table(?!-c[ea]).+)/,Pa={position:"absolute",visibility:"hidden",display:"block"},Qa={letterSpacing:"0",fontWeight:"400"},Ra=["Webkit","Moz","ms"],Sa=d.createElement("div").style;function Ta(a){if(a in Sa)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ra.length;while(c--)if(a=Ra[c]+b,a in Sa)return a}function Ua(a,b,c){var d=_.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Va(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+aa[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+aa[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+aa[f]+"Width",!0,e))):(g+=r.css(a,"padding"+aa[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+aa[f]+"Width",!0,e)));return g}function Wa(a,b,c){var d,e=!0,f=La(a),g="border-box"===r.css(a,"boxSizing",!1,f);if(a.getClientRects().length&&(d=a.getBoundingClientRect()[b]),d<=0||null==d){if(d=Ma(a,b,f),(d<0||null==d)&&(d=a.style[b]),Ka.test(d))return d;e=g&&(o.boxSizingReliable()||d===a.style[b]),d=parseFloat(d)||0}return d+Va(a,b,c||(g?"border":"content"),e,f)+"px"}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Ma(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=a.style;return b=r.cssProps[h]||(r.cssProps[h]=Ta(h)||h),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=_.exec(c))&&e[1]&&(c=da(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b);return b=r.cssProps[h]||(r.cssProps[h]=Ta(h)||h),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Ma(a,b,d)),"normal"===e&&b in Qa&&(e=Qa[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Oa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?Wa(a,b,d):ca(a,Pa,function(){return Wa(a,b,d)})},set:function(a,c,d){var e,f=d&&La(a),g=d&&Va(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=_.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ua(a,c,g)}}}),r.cssHooks.marginLeft=Na(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Ma(a,"marginLeft"))||a.getBoundingClientRect().left-ca(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+aa[d]+b]=f[d]||f[d-2]||f[0];return e}},Ja.test(a)||(r.cssHooks[a+b].set=Ua)}),r.fn.extend({css:function(a,b){return S(this,function(a,b,c){var d,e,f={},g=0;if(r.isArray(b)){for(d=La(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function Xa(a,b,c,d,e){return new Xa.prototype.init(a,b,c,d,e)}r.Tween=Xa,Xa.prototype={constructor:Xa,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=Xa.propHooks[this.prop];return a&&a.get?a.get(this):Xa.propHooks._default.get(this)},run:function(a){var b,c=Xa.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Xa.propHooks._default.set(this),this}},Xa.prototype.init.prototype=Xa.prototype,Xa.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},Xa.propHooks.scrollTop=Xa.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=Xa.prototype.init,r.fx.step={};var Ya,Za,$a=/^(?:toggle|show|hide)$/,_a=/queueHooks$/;function ab(){Za&&(a.requestAnimationFrame(ab),r.fx.tick())}function bb(){return a.setTimeout(function(){Ya=void 0}),Ya=r.now()}function cb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=aa[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function db(a,b,c){for(var d,e=(gb.tweeners[b]||[]).concat(gb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function eb(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&ba(a),q=V.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],$a.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=V.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ga([a],!0),j=a.style.display||j,k=r.css(a,"display"),ga([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=V.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ga([a],!0),m.done(function(){p||ga([a]),V.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=db(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function fb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],r.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function gb(a,b,c){var d,e,f=0,g=gb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Ya||bb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:Ya||bb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(fb(k,j.opts.specialEasing);f<g;f++)if(d=gb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,db,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}r.Animation=r.extend(gb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return da(c.elem,a,_.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(K);for(var c,d=0,e=a.length;d<e;d++)c=a[d],gb.tweeners[c]=gb.tweeners[c]||[],gb.tweeners[c].unshift(b)},prefilters:[eb],prefilter:function(a,b){b?gb.prefilters.unshift(a):gb.prefilters.push(a)}}),r.speed=function(a,b,c){var e=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off||d.hidden?e.duration=0:e.duration="number"==typeof e.duration?e.duration:e.duration in r.fx.speeds?r.fx.speeds[e.duration]:r.fx.speeds._default,null!=e.queue&&e.queue!==!0||(e.queue="fx"),e.old=e.complete,e.complete=function(){r.isFunction(e.old)&&e.old.call(this),e.queue&&r.dequeue(this,e.queue)},e},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(ba).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=gb(this,r.extend({},a),f);(e||V.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=V.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&_a.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=V.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(cb(b,!0),a,d,e)}}),r.each({slideDown:cb("show"),slideUp:cb("hide"),slideToggle:cb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(Ya=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),Ya=void 0},r.fx.timer=function(a){r.timers.push(a),a()?r.fx.start():r.timers.pop()},r.fx.interval=13,r.fx.start=function(){Za||(Za=a.requestAnimationFrame?a.requestAnimationFrame(ab):a.setInterval(r.fx.tick,r.fx.interval))},r.fx.stop=function(){a.cancelAnimationFrame?a.cancelAnimationFrame(Za):a.clearInterval(Za),Za=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var hb,ib=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return S(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?hb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&r.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(K);
if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),hb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ib[b]||r.find.attr;ib[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=ib[g],ib[g]=e,e=null!=c(a,b,d)?g:null,ib[g]=f),e}});var jb=/^(?:input|select|textarea|button)$/i,kb=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return S(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):jb.test(a.nodeName)||kb.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});var lb=/[\t\r\n\f]/g;function mb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,mb(this)))});if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=mb(c),d=1===c.nodeType&&(" "+e+" ").replace(lb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=r.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,mb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=mb(c),d=1===c.nodeType&&(" "+e+" ").replace(lb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=r.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,mb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(K)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=mb(this),b&&V.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":V.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+mb(c)+" ").replace(lb," ").indexOf(b)>-1)return!0;return!1}});var nb=/\r/g,ob=/[\x20\t\r\n\f]+/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":r.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(nb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:r.trim(r.text(a)).replace(ob," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type,g=f?null:[],h=f?e+1:d.length,i=e<0?h:f?e:0;i<h;i++)if(c=d[i],(c.selected||i===e)&&!c.disabled&&(!c.parentNode.disabled||!r.nodeName(c.parentNode,"optgroup"))){if(b=r(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(r.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var pb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!pb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,pb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(V.get(h,"events")||{})[b.type]&&V.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&T(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!T(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=V.access(d,b);e||d.addEventListener(a,c,!0),V.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=V.access(d,b)-1;e?V.access(d,b,e):(d.removeEventListener(a,c,!0),V.remove(d,b))}}});var qb=a.location,rb=r.now(),sb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var tb=/\[\]$/,ub=/\r?\n/g,vb=/^(?:submit|button|image|reset|file)$/i,wb=/^(?:input|select|textarea|keygen)/i;function xb(a,b,c,d){var e;if(r.isArray(b))r.each(b,function(b,e){c||tb.test(a)?d(a,e):xb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)xb(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(r.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)xb(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&wb.test(this.nodeName)&&!vb.test(a)&&(this.checked||!ha.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:r.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(ub,"\r\n")}}):{name:b.name,value:c.replace(ub,"\r\n")}}).get()}});var yb=/%20/g,zb=/#.*$/,Ab=/([?&])_=[^&]*/,Bb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Cb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Db=/^(?:GET|HEAD)$/,Eb=/^\/\//,Fb={},Gb={},Hb="*/".concat("*"),Ib=d.createElement("a");Ib.href=qb.href;function Jb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(K)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Kb(a,b,c,d){var e={},f=a===Gb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Lb(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Mb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Nb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:qb.href,type:"GET",isLocal:Cb.test(qb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Hb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Lb(Lb(a,r.ajaxSettings),b):Lb(r.ajaxSettings,a)},ajaxPrefilter:Jb(Fb),ajaxTransport:Jb(Gb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Bb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||qb.href)+"").replace(Eb,qb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(K)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Ib.protocol+"//"+Ib.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Kb(Fb,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Db.test(o.type),f=o.url.replace(zb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(yb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(sb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Ab,""),n=(sb.test(f)?"&":"?")+"_="+rb++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Hb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Kb(Gb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Mb(o,y,d)),v=Nb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Ob={0:200,1223:204},Pb=r.ajaxSettings.xhr();o.cors=!!Pb&&"withCredentials"in Pb,o.ajax=Pb=!!Pb,r.ajaxTransport(function(b){var c,d;if(o.cors||Pb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Ob[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Qb=[],Rb=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Qb.pop()||r.expando+"_"+rb++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Rb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Rb.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Rb,"$1"+e):b.jsonp!==!1&&(b.url+=(sb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Qb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=B.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=oa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=r.trim(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length};function Sb(a){return r.isWindow(a)?a:9===a.nodeType&&a.defaultView}r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),d.width||d.height?(e=f.ownerDocument,c=Sb(e),b=e.documentElement,{top:d.top+c.pageYOffset-b.clientTop,left:d.left+c.pageXOffset-b.clientLeft}):d):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),r.nodeName(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||pa})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return S(this,function(a,d,e){var f=Sb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Na(o.pixelPosition,function(a,c){if(c)return c=Ma(a,b),Ka.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return S(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.parseJSON=JSON.parse,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Tb=a.jQuery,Ub=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Ub),b&&a.jQuery===r&&(a.jQuery=Tb),r},b||(a.jQuery=a.$=r),r});
/* Web Font Loader v1.6.26 - (c) Adobe Systems, Google. License: Apache 2.0 */(function(){function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function p(a,b,c){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return p.apply(null,arguments)}var q=Date.now||function(){return+new Date};function ca(a,b){this.a=a;this.m=b||a;this.c=this.m.document}var da=!!window.FontFace;function t(a,b,c,d){b=a.c.createElement(b);if(c)for(var e in c)c.hasOwnProperty(e)&&("style"==e?b.style.cssText=c[e]:b.setAttribute(e,c[e]));d&&b.appendChild(a.c.createTextNode(d));return b}function u(a,b,c){a=a.c.getElementsByTagName(b)[0];a||(a=document.documentElement);a.insertBefore(c,a.lastChild)}function v(a){a.parentNode&&a.parentNode.removeChild(a)}
function w(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e])}b=[];for(e=0;e<d.length;e+=1){f=!1;for(g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function y(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}
function z(a){if("string"===typeof a.f)return a.f;var b=a.m.location.protocol;"about:"==b&&(b=a.a.location.protocol);return"https:"==b?"https:":"http:"}function ea(a){return a.m.location.hostname||a.a.location.hostname}
function A(a,b,c){function d(){k&&e&&f&&(k(g),k=null)}b=t(a,"link",{rel:"stylesheet",href:b,media:"all"});var e=!1,f=!0,g=null,k=c||null;da?(b.onload=function(){e=!0;d()},b.onerror=function(){e=!0;g=Error("Stylesheet failed to load");d()}):setTimeout(function(){e=!0;d()},0);u(a,"head",b)}
function B(a,b,c,d){var e=a.c.getElementsByTagName("head")[0];if(e){var f=t(a,"script",{src:b}),g=!1;f.onload=f.onreadystatechange=function(){g||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(g=!0,c&&c(null),f.onload=f.onreadystatechange=null,"HEAD"==f.parentNode.tagName&&e.removeChild(f))};e.appendChild(f);setTimeout(function(){g||(g=!0,c&&c(Error("Script load timeout")))},d||5E3);return f}return null};function C(){this.a=0;this.c=null}function D(a){a.a++;return function(){a.a--;E(a)}}function F(a,b){a.c=b;E(a)}function E(a){0==a.a&&a.c&&(a.c(),a.c=null)};function G(a){this.a=a||"-"}G.prototype.c=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.a)};function H(a,b){this.c=a;this.f=4;this.a="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.a=c[1],this.f=parseInt(c[2],10))}function fa(a){return I(a)+" "+(a.f+"00")+" 300px "+J(a.c)}function J(a){var b=[];a=a.split(/,\s*/);for(var c=0;c<a.length;c++){var d=a[c].replace(/['"]/g,"");-1!=d.indexOf(" ")||/^\d/.test(d)?b.push("'"+d+"'"):b.push(d)}return b.join(",")}function K(a){return a.a+a.f}function I(a){var b="normal";"o"===a.a?b="oblique":"i"===a.a&&(b="italic");return b}
function ga(a){var b=4,c="n",d=null;a&&((d=a.match(/(normal|oblique|italic)/i))&&d[1]&&(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&&d[1]&&(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&&(b=parseInt(d[1].substr(0,1),10))));return c+b};function ha(a,b){this.c=a;this.f=a.m.document.documentElement;this.h=b;this.a=new G("-");this.j=!1!==b.events;this.g=!1!==b.classes}function ia(a){a.g&&w(a.f,[a.a.c("wf","loading")]);L(a,"loading")}function M(a){if(a.g){var b=y(a.f,a.a.c("wf","active")),c=[],d=[a.a.c("wf","loading")];b||c.push(a.a.c("wf","inactive"));w(a.f,c,d)}L(a,"inactive")}function L(a,b,c){if(a.j&&a.h[b])if(c)a.h[b](c.c,K(c));else a.h[b]()};function ja(){this.c={}}function ka(a,b,c){var d=[],e;for(e in b)if(b.hasOwnProperty(e)){var f=a.c[e];f&&d.push(f(b[e],c))}return d};function N(a,b){this.c=a;this.f=b;this.a=t(this.c,"span",{"aria-hidden":"true"},this.f)}function O(a){u(a.c,"body",a.a)}function P(a){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+J(a.c)+";"+("font-style:"+I(a)+";font-weight:"+(a.f+"00")+";")};function Q(a,b,c,d,e,f){this.g=a;this.j=b;this.a=d;this.c=c;this.f=e||3E3;this.h=f||void 0}Q.prototype.start=function(){var a=this.c.m.document,b=this,c=q(),d=new Promise(function(d,e){function k(){q()-c>=b.f?e():a.fonts.load(fa(b.a),b.h).then(function(a){1<=a.length?d():setTimeout(k,25)},function(){e()})}k()}),e=new Promise(function(a,d){setTimeout(d,b.f)});Promise.race([e,d]).then(function(){b.g(b.a)},function(){b.j(b.a)})};function R(a,b,c,d,e,f,g){this.v=a;this.B=b;this.c=c;this.a=d;this.s=g||"BESbswy";this.f={};this.w=e||3E3;this.u=f||null;this.o=this.j=this.h=this.g=null;this.g=new N(this.c,this.s);this.h=new N(this.c,this.s);this.j=new N(this.c,this.s);this.o=new N(this.c,this.s);a=new H(this.a.c+",serif",K(this.a));a=P(a);this.g.a.style.cssText=a;a=new H(this.a.c+",sans-serif",K(this.a));a=P(a);this.h.a.style.cssText=a;a=new H("serif",K(this.a));a=P(a);this.j.a.style.cssText=a;a=new H("sans-serif",K(this.a));a=
P(a);this.o.a.style.cssText=a;O(this.g);O(this.h);O(this.j);O(this.o)}var S={D:"serif",C:"sans-serif"},T=null;function U(){if(null===T){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);T=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10))}return T}R.prototype.start=function(){this.f.serif=this.j.a.offsetWidth;this.f["sans-serif"]=this.o.a.offsetWidth;this.A=q();la(this)};
function ma(a,b,c){for(var d in S)if(S.hasOwnProperty(d)&&b===a.f[S[d]]&&c===a.f[S[d]])return!0;return!1}function la(a){var b=a.g.a.offsetWidth,c=a.h.a.offsetWidth,d;(d=b===a.f.serif&&c===a.f["sans-serif"])||(d=U()&&ma(a,b,c));d?q()-a.A>=a.w?U()&&ma(a,b,c)&&(null===a.u||a.u.hasOwnProperty(a.a.c))?V(a,a.v):V(a,a.B):na(a):V(a,a.v)}function na(a){setTimeout(p(function(){la(this)},a),50)}function V(a,b){setTimeout(p(function(){v(this.g.a);v(this.h.a);v(this.j.a);v(this.o.a);b(this.a)},a),0)};function W(a,b,c){this.c=a;this.a=b;this.f=0;this.o=this.j=!1;this.s=c}var X=null;W.prototype.g=function(a){var b=this.a;b.g&&w(b.f,[b.a.c("wf",a.c,K(a).toString(),"active")],[b.a.c("wf",a.c,K(a).toString(),"loading"),b.a.c("wf",a.c,K(a).toString(),"inactive")]);L(b,"fontactive",a);this.o=!0;oa(this)};
W.prototype.h=function(a){var b=this.a;if(b.g){var c=y(b.f,b.a.c("wf",a.c,K(a).toString(),"active")),d=[],e=[b.a.c("wf",a.c,K(a).toString(),"loading")];c||d.push(b.a.c("wf",a.c,K(a).toString(),"inactive"));w(b.f,d,e)}L(b,"fontinactive",a);oa(this)};function oa(a){0==--a.f&&a.j&&(a.o?(a=a.a,a.g&&w(a.f,[a.a.c("wf","active")],[a.a.c("wf","loading"),a.a.c("wf","inactive")]),L(a,"active")):M(a.a))};function pa(a){this.j=a;this.a=new ja;this.h=0;this.f=this.g=!0}pa.prototype.load=function(a){this.c=new ca(this.j,a.context||this.j);this.g=!1!==a.events;this.f=!1!==a.classes;qa(this,new ha(this.c,a),a)};
function ra(a,b,c,d,e){var f=0==--a.h;(a.f||a.g)&&setTimeout(function(){var a=e||null,k=d||null||{};if(0===c.length&&f)M(b.a);else{b.f+=c.length;f&&(b.j=f);var h,m=[];for(h=0;h<c.length;h++){var l=c[h],n=k[l.c],r=b.a,x=l;r.g&&w(r.f,[r.a.c("wf",x.c,K(x).toString(),"loading")]);L(r,"fontloading",x);r=null;null===X&&(X=window.FontFace?(x=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent))?42<parseInt(x[1],10):!0:!1);X?r=new Q(p(b.g,b),p(b.h,b),b.c,l,b.s,n):r=new R(p(b.g,b),p(b.h,b),b.c,l,b.s,a,
n);m.push(r)}for(h=0;h<m.length;h++)m[h].start()}},0)}function qa(a,b,c){var d=[],e=c.timeout;ia(b);var d=ka(a.a,c,a.c),f=new W(a.c,b,e);a.h=d.length;b=0;for(c=d.length;b<c;b++)d[b].load(function(b,d,c){ra(a,f,b,d,c)})};function sa(a,b){this.c=a;this.a=b}function ta(a,b,c){var d=z(a.c);a=(a.a.api||"fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/,"");return d+"//"+a+"/"+b+".js"+(c?"?v="+c:"")}
sa.prototype.load=function(a){function b(){if(f["__mti_fntLst"+d]){var c=f["__mti_fntLst"+d](),e=[],h;if(c)for(var m=0;m<c.length;m++){var l=c[m].fontfamily;void 0!=c[m].fontStyle&&void 0!=c[m].fontWeight?(h=c[m].fontStyle+c[m].fontWeight,e.push(new H(l,h))):e.push(new H(l))}a(e)}else setTimeout(function(){b()},50)}var c=this,d=c.a.projectId,e=c.a.version;if(d){var f=c.c.m;B(this.c,ta(c,d,e),function(e){e?a([]):(f["__MonotypeConfiguration__"+d]=function(){return c.a},b())}).id="__MonotypeAPIScript__"+
d}else a([])};function ua(a,b){this.c=a;this.a=b}ua.prototype.load=function(a){var b,c,d=this.a.urls||[],e=this.a.families||[],f=this.a.testStrings||{},g=new C;b=0;for(c=d.length;b<c;b++)A(this.c,d[b],D(g));var k=[];b=0;for(c=e.length;b<c;b++)if(d=e[b].split(":"),d[1])for(var h=d[1].split(","),m=0;m<h.length;m+=1)k.push(new H(d[0],h[m]));else k.push(new H(d[0]));F(g,function(){a(k,f)})};function va(a,b,c){a?this.c=a:this.c=b+wa;this.a=[];this.f=[];this.g=c||""}var wa="//fonts.googleapis.com/css";function xa(a,b){for(var c=b.length,d=0;d<c;d++){var e=b[d].split(":");3==e.length&&a.f.push(e.pop());var f="";2==e.length&&""!=e[1]&&(f=":");a.a.push(e.join(f))}}
function ya(a){if(0==a.a.length)throw Error("No fonts to load!");if(-1!=a.c.indexOf("kit="))return a.c;for(var b=a.a.length,c=[],d=0;d<b;d++)c.push(a.a[d].replace(/ /g,"+"));b=a.c+"?family="+c.join("%7C");0<a.f.length&&(b+="&subset="+a.f.join(","));0<a.g.length&&(b+="&text="+encodeURIComponent(a.g));return b};function za(a){this.f=a;this.a=[];this.c={}}
var Aa={latin:"BESbswy","latin-ext":"\u00e7\u00f6\u00fc\u011f\u015f",cyrillic:"\u0439\u044f\u0416",greek:"\u03b1\u03b2\u03a3",khmer:"\u1780\u1781\u1782",Hanuman:"\u1780\u1781\u1782"},Ba={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Ca={i:"i",italic:"i",n:"n",normal:"n"},
Da=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
function Ea(a){for(var b=a.f.length,c=0;c<b;c++){var d=a.f[c].split(":"),e=d[0].replace(/\+/g," "),f=["n4"];if(2<=d.length){var g;var k=d[1];g=[];if(k)for(var k=k.split(","),h=k.length,m=0;m<h;m++){var l;l=k[m];if(l.match(/^[\w-]+$/)){var n=Da.exec(l.toLowerCase());if(null==n)l="";else{l=n[2];l=null==l||""==l?"n":Ca[l];n=n[1];if(null==n||""==n)n="4";else var r=Ba[n],n=r?r:isNaN(n)?"4":n.substr(0,1);l=[l,n].join("")}}else l="";l&&g.push(l)}0<g.length&&(f=g);3==d.length&&(d=d[2],g=[],d=d?d.split(","):
g,0<d.length&&(d=Aa[d[0]])&&(a.c[e]=d))}a.c[e]||(d=Aa[e])&&(a.c[e]=d);for(d=0;d<f.length;d+=1)a.a.push(new H(e,f[d]))}};function Fa(a,b){this.c=a;this.a=b}var Ga={Arimo:!0,Cousine:!0,Tinos:!0};Fa.prototype.load=function(a){var b=new C,c=this.c,d=new va(this.a.api,z(c),this.a.text),e=this.a.families;xa(d,e);var f=new za(e);Ea(f);A(c,ya(d),D(b));F(b,function(){a(f.a,f.c,Ga)})};function Ha(a,b){this.c=a;this.a=b}Ha.prototype.load=function(a){var b=this.a.id,c=this.c.m;b?B(this.c,(this.a.api||"https://use.typekit.net")+"/"+b+".js",function(b){if(b)a([]);else if(c.Typekit&&c.Typekit.config&&c.Typekit.config.fn){b=c.Typekit.config.fn;for(var e=[],f=0;f<b.length;f+=2)for(var g=b[f],k=b[f+1],h=0;h<k.length;h++)e.push(new H(g,k[h]));try{c.Typekit.load({events:!1,classes:!1,async:!0})}catch(m){}a(e)}},2E3):a([])};function Ia(a,b){this.c=a;this.f=b;this.a=[]}Ia.prototype.load=function(a){var b=this.f.id,c=this.c.m,d=this;b?(c.__webfontfontdeckmodule__||(c.__webfontfontdeckmodule__={}),c.__webfontfontdeckmodule__[b]=function(b,c){for(var g=0,k=c.fonts.length;g<k;++g){var h=c.fonts[g];d.a.push(new H(h.name,ga("font-weight:"+h.weight+";font-style:"+h.style)))}a(d.a)},B(this.c,z(this.c)+(this.f.api||"//f.fontdeck.com/s/css/js/")+ea(this.c)+"/"+b+".js",function(b){b&&a([])})):a([])};var Y=new pa(window);Y.a.c.custom=function(a,b){return new ua(b,a)};Y.a.c.fontdeck=function(a,b){return new Ia(b,a)};Y.a.c.monotype=function(a,b){return new sa(b,a)};Y.a.c.typekit=function(a,b){return new Ha(b,a)};Y.a.c.google=function(a,b){return new Fa(b,a)};var Z={load:p(Y.load,Y)};"function"===typeof define&&define.amd?define(function(){return Z}):"undefined"!==typeof module&&module.exports?module.exports=Z:(window.WebFont=Z,window.WebFontConfig&&Y.load(window.WebFontConfig));}());
//hardcoded database
var cart = {
	'costumes/adult/women/blood-splatter-dress': {
		'productName':'Blood Splatter Dress',
		'productDescription':'<span>What would Halloween be without a blood splatter dress? We\'ve done the messy work and created this simple white skater dress with adjustable spaghetti straps and an allover blood splatter pattern. You just wear it and look creepy-cute.</span><span>● 95% polyester; 5% rayon</span><span>● Wash cold; dry flat</span><span>● Approx. 33" from shoulder to hem</span><span>● Imported</span>',
		'pageURL':'#product?costumes/adult/women/blood-splatter-dress',
		'imgURL':'assets/imgs/product-imgs/costumes/adult/women/blood-splatter-dress.jpg',
		'priceThen':'$172',
		'priceNow':'$0.99',
	},
	'costumes/adult/women/red-riding-hood': {
		'productName':'Red Riding Hood',
		'productDescription':'<span>It\'s a good thing Grandma can\'t see too well. Otherwise, I\'m sure she\'d give you quite a talking-to about walking through the woods alone in this Sexy Red Riding Hood Costume! Don\'t worry though. You\'re sure to tame the heart of any beast in this sexy costume.</span><span>● 90% polyester/10% cotton gingham, broadcloth & knit; 100% polyester satin</span><span>● Styled as peasant blouse w/ skirt & corset; back zipper</span><span>● Elastic edging in neckline & sleeves of white broadcloth blouse portion</span><span>● Red & white gingham high-waisted skirt has built-in lace-edged petticoat</span><span>● Black interlock corset panels have ribbon lacing</span>',
		'pageURL':'#product?costumes/adult/women/red-riding-hood',
		'imgURL':'assets/imgs/product-imgs/costumes/adult/women/red-riding-hood.jpg',
		'priceThen':'$580',
		'priceNow':'$0.99',
	},
	'accessories/graveyard-tights': {
		'productName':'Graveyard Tights',
		'productDescription':'404 PATIENCE NOT FOUND.',
		'pageURL':'#product?accessories/graveyard-tights',
		'imgURL':'assets/imgs/product-imgs/accessories/graveyard-tights.jpeg',
		'priceThen':'$230',
		'priceNow':'$0.99',
		'class':'align-bottom',
	},
	'decorations/fog-machine': {
		'productName':'Fog Machine',
		'productDescription':'404 PATIENCE NOT FOUND.',
		'pageURL':'#product?decorations/fog-machine',
		'imgURL':'assets/imgs/product-imgs/decorations/fog-machine.jpg',
		'priceThen':'$900',
		'priceNow':'$0.99',
	},
	'decorations/monster-book': {
		'productName':'Monster Book',
		'productDescription':'404 PATIENCE NOT FOUND.',
		'pageURL':'#product?decorations/monster-book',
		'imgURL':'assets/imgs/product-imgs/decorations/monster-book.jpg',
		'priceThen':'$999',
		'priceNow':'$0.99',
	},
}
var blogPosts = [
	'<div class="toggle readmore fixedtop">read more</div><div class="article-title">THE BEST SPOOKY BOOKS TO READ, OCTOBER 2016 — AND WHY THEY’RE WORTH YOUR TIME: PART 2, SERIAL KILLERS, UNRELIABLE NARRATORS & MORE</div><div class="article-meta"><div class="author">lucia</div><div class="dash">-</div><div class="date">october 17, 2016</div></div><div class="article-thumbnail"><img src="assets/imgs/article-imgs/into-the-promised-land-joshua-18-by-patrick-feller.jpg"></div><div class="article-content"><p><span class="capitalized">T</span>ime for the second installment of the Best Spooky Books To Read, October 2016 edition. Whereas last week we focused on ghost stories, this week, we’re broadening it out a little bit: Murders and Serial Killers, Unreliable Narrators, and Short Stories. As was the case with last week’s selections, the books found here aren’t necessarily “horror” in the classic sense of the word; they span many genres, often even defying genre entirely.</p><p>But what they all have in common is that they’re “October books” for me — the kinds of books that are good no matter when you read them, but which always pack a particular punch at this time of year. (See the introduction to last week’s post for more about what I mean.)</p><p>Ready? Let’s go.</p><div class="section"><div class="section-title">Murderers and Serial Killers</div><div class="sub-section"><div class="sub-section-title">1. <a href="https://www.amazon.com/Shining-Girls-Novel-Lauren-Beukes/dp/0316216860/ref=asap_bc?ie=UTF8">The Shining Girls</a> and <a href="https://www.amazon.com/Broken-Monsters-Lauren-Beukes-ebook/dp/B00I828856/ref=sr_1_1?s=digital-text&ie=UTF8&qid=1473453495&sr=1-1&keywords=broken+monsters#nav-subnav">Broken Monsters</a>, by Lauren Beukes</div><div class="sub-section-thumbnail"><img src="assets/imgs/article-imgs/beukes.jpg"></div><div class="sub-section-content"><p>I first discovered South African writer Lauren Beukes courtesy of a Humble Book Bundle; the book was <span class="slanted">Zoo City</span>, her second novel, and I was hooked. I picked up <span class="slanted">Moxyland</span> shortly thereafter and ate that one up, too, so of course as soon as I heard in 2013 that she had another book coming out, and that this one featured a serial killer… well, the fact that I would read it the day it was released was pretty much a foregone conclusion.</p><p>That book was <span class="slanted">The Shining Girls</span>, and it’s magnificent. So, too, was <span class="slanted">Broken Monsters</span>, which followed just a year later in 2014.</p><p><span class="slanted">The Shining Girls</span> was the first of Beukes’ novels to take place in the United States, rather than South Africa, which means that the underlying issues it and <span class="slanted">Broken Monsters</span> — also set in the United States  — address are a little different than the themes that occupy her earlier works. They all deal with classism and socioeconomic struggles, though… and they also examine perception in some interesting ways. They remind us that although we all know that the way we see something might be entirely different from the way someone else sees it… sometimes we lose track of exactly how different those two points of view can be.</p><p>Oh, and by the way, <span class="slanted">The Shining Girls?</span> That’s the other time travel horror story I mentioned in the first installment of this list. Do with that what you will.</p></div></div> <!-- <div class="sub-section"> ends --><div class="sub-section"><div class="sub-section-title">2. <a href="https://www.amazon.com/Killer-Next-Door-Novel-ebook/dp/B00KB5BVVQ/ref=sr_1_1?s=books&ie=UTF8&qid=1473454226&sr=1-1&keywords=the+killer+next+door#nav-subnav">The Killer Next Door</a>, by Alex Marwood</div><div class="sub-section-thumbnail"><img src="assets/imgs/article-imgs/killer-next-door.jpg"></div><div class="sub-section-content"><p>I can’t tell you much about Alex Marwood herself; it’s a psuedonym. But what I can tell you is that her books are great. <span class="slanted">The Wicked Girls</span>, published in 2013, is sort of a <a href="https://en.wikipedia.org/wiki/Boy_A">Boy A</a> story with a few more twists, while <span class="slanted">The Killer Next Door</span> is about… well, the killer next door. Set primarily in a shady flat in South London, the daily lives of the inhabitants — and their pasts, which sometimes have a habit of catching up to them — are juxtaposed with scenes from within one of the flats that show exactly what happened to all those missing girls everyone keeps talking about. The thing is… we don’t know exactly whose flat we’re in.</p><p>The killer might be next door, but no one actually knows it.</p></div></div> <!-- <div class="sub-section"> ends --><div class="sub-section"><div class="sub-section-title">3. <a href="https://www.amazon.com/Sister-Novel-Rosamund-Lupton-ebook/dp/B004J4WLPU/ref=sr_1_1?s=books&ie=UTF8&qid=1473454839&sr=1-1&keywords=rosamund+lupton+sister#nav-subnav">Sister</a>, by Rosamund Lupton</div><div class="sub-section-thumbnail"><img src="assets/imgs/article-imgs/sister.jpg"></div><div class="sub-section-content"><p>I am always an absolute train wreck at the end of Rosamund Lupton’s books, and it all started with <span class="slanted">Sister</span>. There are actually two sisters here; Tess, who is missing, and Beatrice, who is trying to find out what happened to her. It sounds so run-of-the-mill when I describe it like that… but if I tell you anymore, it’ll give everything away. Really, it’s best if you just discover it all for yourself. Just know that, as is the case with so many of the books on this list, things in Beatrice’s world may not be what you think they are. Everything you think you know, in fact, might be completely, utterly false. And it will be absolutely heartbreaking when you realize it.</p><p>(And then check out her second book, <span class="slanted">Afterward</span>, when you’re done; that one kind of falls under “Ghosts and Haunted Houses.” I haven’t read her third, <span class="slanted">The Quality of Silence</span>, yet, but you’d better believe I’m going to.)</p></div></div> <!-- <div class="sub-section"> ends -->					</div> <!-- <div class="section"> ends --><div class="section"><div class="section-title">Unreliable Narrators</div><div class="sub-section"><div class="sub-section-title">1. <a href="https://www.amazon.com/You-Novel-Caroline-Kepnes-ebook/dp/B00IGVH9LI/ref=sr_1_1?s=digital-text&ie=UTF8&qid=1473455238&sr=1-1&keywords=you+caroline+kepnes#nav-subnav">You</a>, by Caroline Kepnes</div><div class="sub-section-thumbnail"><img src="assets/imgs/article-imgs/you.jpg"></div><div class="section-content"><p>Joe seems like he should be the perfect boyfriend.</p><p>He’s not.</p><p>He’s really, really not.</p><p>And that’s probably all that I should tell you about this one.</p><p>There’s a sequel to this one, by the way; it’s called <span class="slanted">Hidden Bodies</span>. In some ways, I kind of wish there wasn’t one — the first book is full of delicious ambiguity, and I think the open-endedness serves the story well. That said, it’s also still absurdly fun (in a sick sort of way) to watch everything in <span class="slanted">Hidden Bodies</span>, too.</p></div></div> <!-- <div class="sub-section"> ends --><div class="sub-section"><div class="sub-section-title">2. <a href="2. Before I Go To Sleep, by S. J. Watson">Before I Go To Sleep, by S. J. Watson</a></div><div class="sub-section-thumbnail"><img src="assets/imgs/article-imgs/before-i-go-to-sleep.jpg"></div><div class="sub-section-content"><p>The reason I’m filing this one under “Unreliable Narrators” isn’t because we can’t trust the narrator; it’s because the narrator can’t trust herself.</p><p><span class="slaned">Before I Go To Sleep</span> is kind of Memento-like in that its protagonist can’t make new memories; however, unlike Leonard, she can’t recall her old memories, either — the ones from prior to her accident. She has a system in place to help her get through the day, which she has developed with help from her therapist… but when all you know about your life and yourself is what other people tell you about them, the truth of your existence is at the mercy of whatever everyone else wants you to believe.</p><p>And what some people want you to believe may not match up with the real truth.</p><p>(P.S. Don’t see the movie adaptation of this one. It’s terrible.)</p></div></div> <!-- <div class="sub-section"> ends --><div class="sub-section"><div class="sub-section-title">3. <a href="https://www.amazon.com/Possession-Mr-Cave-Novel/dp/0143117300/ref=sr_1_1?s=books&ie=UTF8&qid=1474049274&sr=1-1&keywords=the+possession+of+mr.+cave">The Possession of Mr. Cave</a>, by Matt Haig</div><div class="sub-section-thumbnail"><img src="assets/imgs/article-imgs/mr-cave.jpg"></div><div class="sub-section-content"><p>Like David Mitchell, I’ve been eagerly gobbling up everything Matt Haig has written since early in his career. I actually read his second book — <span class="slanted">The Dead Father’s Club</span>, a riff on <span class="slanted">Hamlet</span> — first; honestly, though, that’s probably what got me so interested in his work in the first place. His first novel, <span class="slanted">The Last Family In England</span> (published in the United States as <span class="slanted">The Labrador Pact</span>), is a riff on <span class="slanted">Henry IV</span>, and while I do have an appreciation for the Henriad, Hamlet has always been the Shakespeare play that resonates the most strongly with me. It’s one of those pieces I keep coming back to, time and time again, getting something different out of it each time, depending on where I’m at in my own life at the moment — whether that’s high school, college, graduate school, my mid-20s, or, as now, my 30s.</p><p>But I digress.</p><p>My point is that Haig’s inventive methods of storytelling explore what’s often referred to as “the human condition” in wonderfully unique ways: Through ghosts, through talking dogs, through vampires, through aliens, and through forms that tell us just as much about what’s going on in these people’s lives as the content does.</p><p>The theme of what it means to be family recurs frequently in Haig’s work — indeed, almost all of his novels for adults feature families at their centers — and <span class="slanted">The Possession of Mr. Cave</span> is no exception. It explores what happens when a family is essentially cut in half: Whereas once the Cave family consisted of father, mother, and twin children, a son called Reuben and a daughter named Bryony, following the deaths of his wife and son, Terrance Cave is left alone to raise the remaining Cave child. It’s perhaps understandable that he’d become a little overprotective — but Terrance quickly begins to spin out of control. And that’s when things start to get messy.</p><p>The title for this one is a clever one; there are several layers of meaning there.</p><p>But perhaps I’d better leave you to tease out what they are on your own.</p></div></div> <!-- <div class="sub-section"> ends --></div> <!-- <div class="section"> ends --><div class="section"><div class="section-title">Short Stories</div><div class="sub-section"><div class="sub-section-title">1. <a href="https://www.amazon.com/20th-Century-Ghosts-Joe-Hill/dp/0061147982/ref=sr_1_1?s=books&ie=UTF8&qid=1474050387&sr=1-1&keywords=20th+century+ghosts">20th Century Ghosts, by Joe Hill</a></div><div class="sub-section-thumbnail"><img src="assets/imgs/article-imgs/20th-century-ghosts.jpg"></div><div class="sub-section-content"><p>I believe I’ve mentioned this once before, but I actually find Joe Hill’s stuff to be more frightening than I do his dad’s. Not that I don’t have a soft spot for Stephen King, too — once I was old enough to venture into the Grownup Section of my hometown’s library when I was a kid, I systematically worked my way through everything of his they had, devouring it all at great speed — but, well… Hill’s stuff often seems to tap into something a little more human to me, and therefore a little more terrifying, as well.</p><p><span class="slanted">20th Century Ghosts</span> is a superb short story collection, in part because it’s not all ghosts, and it’s not all horror. Sure, there’s some straight-up, meant-to-cause-nightmares stuff in there; indeed, the very first story in the book, “Best New Horror,” falls under that umbrella (so, if you liked <span class="slanted">Heart-Shaped Box</span>, which my dad never actually finished because it scared him too much, you won’t be disappointed here). But there are also stories like “Pop Art,” which has a fantastical premise (it exists in a world where some people are inflatable), but which also nails that feeling of loneliness and isolation we’ve all experienced at one time or another simply for being “different” than the norm. (That one always sends a pang straight through my heart.) Every single story is a winner, even if you don’t usually like short stories as a medium.</p><p>My favorite story in the collection is hidden, though. You’ll have to look for it. But trust me: It’s worth it.</p></div></div> <!-- <div class="sub-section"> ends --><div class="sub-section"><div class="sub-section-title">2. <a href="https://www.amazon.com/King-Yellow-Robert-William-Chambers-ebook/dp/B00847UYWA/ref=sr_1_1_twi_kin_2?s=books&ie=UTF8&qid=1474052473&sr=1-1&keywords=the+king+in+yellow">The King in Yellow</a>, by Robert W. Chambers</div><div class="sub-section-thumbnail"><img src="assets/imgs/article-imgs/the-king-in-yellow.jpg"></div><div class="sub-section-content"><p>Confession: I haven’t seen <span class="slanted">True Detective</span>. I kept meaning to watch it, but then I heard that the first season was excellent until the finale turned into a train wreck; and then I heard that the second season was terrible; and now I’m kind of afraid to start it for fear that I’ll get really invested in it and ultimately end up overwhelmingly disappointed. Nothing hurts more than a story that shows remarkable promise, but just doesn’t land.</p><p>If I do ever watch it, though, at least I’ll be well prepared; people tell me that <span class="slanted">The King in Yellow</span> is a major part of the series. My Amazon history tells me that I ordered the book in February of 2014, so I’m actually pretty sure that I decided to read it because I’d seen some chatter about it inspired by <span class="slanted">True Detective’s</span> first season. (The show began airing in January 2014.) That, and the fact that H. P. Lovecraft was apparently a big Chambers fan. An endorsement from a writer you already love usually means something will be worth it.</p><p>And it is worth it, although I… honestly don’t know if I should really tell you anything about this one going into it. The stories are connected… but they’re also kind of not… and they’re really, really weird. But you’ll probably dig <span class="slanted">The King in Yellow</span> if you like spec fic (published in 1895, it takes place largely in what was the future at the time — by which I mean the 1920s), George Orwell (particularly 1984) or Philip K. Dick (particularly <span class="slanted">The Man in the High Castle</span>), or the Cthulhu Mythos.</p><p>Oh, and it’s in the public domain, so it’s free on Amazon (linked above), as well as available via <a href="http://www.gutenberg.org/ebooks/8492">Project Gutenberg</a>. Thumbs up to free books.</p></div></div> <!-- <div class="sub-section"> ends --><div class="sub-section"><div class="sub-section-title">3. Any of Neil Gaiman’s Collections</div><div class="sub-section-thumbnail"><img src="assets/imgs/article-imgs/smoke-and-mirrors.jpg"></div><div class="sub-section-content"><p>I’ve long been of the belief that if you only ever read one short story collection in your life, it should be <span class="slanted">Smoke and Mirrors</span>. Then again, though, <span class="slanted">Fragile Things</span> and <span class="slanted">Trigger Warnings</span> both have some terrific things in them, too; I’m also fond of the collections Gaiman has selected and edited, <span class="slanted">Unnatural Creatures</span> and <span class="slanted">Stories: All-New Tales</span> (with Al Sarrantonio). I particularly enjoy his brief introductions for each of his own stories — it can be hard to nail down where a writer’s inspiration comes from, but the theme that keeps coming back time and time again is about looking at something that exists in our own world and thinking, “What if…?” I love that.</p><p>I’m usually hesitant to classify Gaiman as any one genre; usually I just like to refer to him as “fantastical” and leave it at that. But although I’d argue that his books mostly defy genre, what they very much are to me are October books.</p><p>Because, well… <span class="slanted">October is in the chair</span>, after all.</p></div></div> <!-- <div class="sub-section"> --></div> <!-- <div class="section"> ends --></div><div class="article-comments"><div class="section review"><div class="section-title comments">comments</div><div class="reviews"><span>There are currently no comments for this article.</span></div><div class="write-review"><span>leave your comment</span><form><div class="textarea-wrapper"><textarea id="review" placeholder="enter your review here..." autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"></textarea></div><div class="cta submit">submit</div></form></div></div></div>',
	'<div class="toggle readmore fixedtop">read more</div><div class="article-title">THE BEST SPOOKY BOOKS TO READ, OCTOBER 2016 — AND WHY THEY’RE WORTH YOUR TIME: PART 1, GHOSTS & HAUNTED HOUSES</div><div class="article-meta"><div class="author">lucia</div><div class="dash">-</div><div class="date">october 10, 2016</div></div><div class="article-thumbnail"><img src="assets/imgs/article-imgs/books.jpg"></div><div class="article-content"><p><span class="capitalized">T</span>here’s a particular kind of <span class="slanted">spooky book I like to read</span> when autumn rolls around. They’re not necessarily scary per se — but they all have the same sort of air about them: They’re the kinds of stories that beg to be told when the weather starts to get cooler and the nights grow longer and <span class="slanted">October is in the chair</span>.  There’s an impulse to write horror fiction off as “just meant to scare you” and nothing more — but as I’ve mentioned before, <span class="slanted">good horror is about something</span> much more than just what’s going on on the surface. It’s usually talking about something else — something we really should be talking about.</p><p>That’s what these books have. For me, at least.</p><p>After I started compiling this list, I realized that there was probably enough here that two installments might be necessary — so that’s what I ended up doing: Splitting the list into two separate posts. The first one will focus on just one category, since it includes the most titles: Ghosts and Haunted Houses. Why so many ghost stories? Mostly because I just have a particular weakness for them, and as a result… well, let’s just say that I read a lot of them.</p><p>As always, this list is far from comprehensive; they’re just things I’ve read and enjoyed. You might feel differently about them, and that’s totally cool. Also, I’ve tried to focus on books that might have flown a little more under the radar; we’re probably all already familiar with Shirley Jackson and Richard Matheson, for example. So let’s take a look at some other options, shall we?</p><p>Also: If you’re an e-reader user, I highly recommend finding out whether your library lets you check books out on your e-reader. After I moved last year, I discovered my new library has a terrific e-reader lending system in place, and it was life-changing. Seriously, you guys. Library-ing in bed is way better than Netflix-ing in bed.</p><p>So, without further ado, onto the Best Spooky Books To Read, October 2016: Part 1:</p><div class="section"><div class="section-title">Ghosts and Haunted Houses</div><div class="sub-section"><div class="sub-section-title">1. <a href="https://www.amazon.com/White-Witching-Helen-Oyeyemi/dp/159463307X/ref=sr_1_1?ie=UTF8&qid=1473448659&sr=8-1&keywords=white+is+for+witching"> White Is For Witching</a>, by Helen Oyeyemi</div><div class="sub-section-thumbnail"><img src="assets/imgs/article-imgs/white-is-for-witching.jpg"></div><div class="sub-section-content"><p>I only discovered Helen Oyeyemi a few months ago, and it was one of those “Where have you been all my life?!” situations. Although <span class="slanted">White Is For Witching</span>, which was published in 2009, is Oyeyemi’s third book, it seemed like the right one to start with for me; it’s got a small town in England, and a family, and loss, and a house that really, <span class="slanted">really</span> doesn’t like outsiders. <span class="slanted">White Is For Witching</span> likely won’t be to everyone’s taste; Carrie O’Grady at the Guardian, for example, called it “a ghost story that lacks both a story and a proper ghost.” I agree more with Andrew Ervin’s assessment in the New York Times, though:</p><p style="font-style:italic">“Helen Oyeyemi’s eerie third novel features a young woman who has a <span class="slanted">strange eating disorder</span> and lives with her twin brother and widowed father in a haunted house across the street from a cemetery full of unmarked graves. On the surface, this setup might appear best suited to the young adult fiction market, but Oyeyemi (who was born in Nigeria and educated in England) knows that ghost stories aren’t just for kids. And White Is For Witching turns out to be a delightfully unconventional coming-of-age story.”</p><p>And also check out <span class="slanted">Icarus Girl</span>. Oyeyemi’s first novel (written while she was still in school, astonishingly), it’s also a ghost story of sorts.</p></div></div> <!-- <div class="sub-section"> ends --><div class="sub-section"><div class="sub-section-title">2. <a href="https://www.amazon.com/House-Leaves-Mark-Z-Danielewski/dp/0375703764/ref=sr_1_1?ie=UTF8&qid=1473449749&sr=8-1&keywords=house+of+leaves">House of Leaves</a>, by Mark Z. Danielewski</div><div class="sub-section-thumbnail"><img src="assets/imgs/article-imgs/house-of-leaves.jpg"></div><div class="sub-section-content"><p>Some people think <span class="slanted">House of Leaves</span> is impossibly pretentious. That may be the case, but I still love stories that play as much with form as they do with content — and if you do, too, it doesn’t get much better than <span class="slanted">House of Leaves</span>.</p><p>The book is kind of like a nesting doll: It’s a story within a story within a story. At the very center of it is a documentary called <span class="slanted">The Navidson Record</span>, in which a Pulitzer Prize-winning photojournalist moves his family to a <span class="slanted">house in Virginia</span> in an attempt to repair their fracturing relationships — only to find that the house is <span class="slanted">bigger on the inside</span>, but not in a good way.</p><p>We don’t see <span class="slanted">The Navidson Record</span>, though; instead, we read about it second-hand in a lengthy piece of film criticism written by a blind man living in Los Angeles known only as Zampano. Zampano’s footnotes reveal his own story even as he details the story of <span class="slanted">The Navidson Record</span>… and by the way, he’s dead. After he died, his manuscript wa discovered by Johnny Truant, a young would-be tattoo artist, whose own footnotes reveal a troubled past and present of his own.</p><p>Oh, and as far as Johnny can tell, <span class="slanted">The Navidson Record</span> doesn’t actually exist.</p><p>The story is as winding and twisting as the inside of the house — which, to me, is always the heart of the story, literally and metaphorically. The house freaks me out — the first time I read the book, I actually had to stop reading it before bed because it made my dreams that <span class="slanted">messed</span> up — and yet, I can’t stop thinking about it.</p><p>Which is probably what it wants, ultimately. Isn’t it?</p></div></div> <!-- <div class="sub-section"> ends --><div class="sub-section"><div class="sub-section-title">3. <a href="https://www.amazon.com/Slade-House-Novel-David-Mitchell-ebook/dp/B00S3RILQW/ref=sr_1_1?s=digital-text&ie=UTF8&qid=1473452682&sr=1-1&keywords=slade+house">Slade House</a>, by David Mitchell</div><div class="sub-section-thumbnail"><img src="assets/imgs/article-imgs/slade-house.jpg"></div><div class="sub-section-content"><p>I’ve been been a David Mitchell fan since I first picked up <span class="slanted">Ghostwritten</span> on a whim in a tiny local bookshop in Maine during the early 2000s. What struck me as extraordinary about <span class="slanted">Ghostwritten</span> is how distinct each narrator’s voice was; although I spent the first couple of pages of each new chapter a little unmoored as I tried to figure out who was speaking, I was totally fine with it, because it was so very clear that someone new <span class="slanted">was</span> speaking — I just needed to take the time to get to know them.</p><p>I’ve read everything Mitchelle has published between then and now, and while I think some of his books are stronger than others — <span class="slanted">Cloud Atlas</span> will always be one of my favorites, for example, due to its wonderfully executed and complex structure, while I felt <span class="slanted">The Bone Clocks</span> was a little sprawling and got away from Mitchell in places — I always take something away from them. That’s the mark of good art to me: It might be flawed, but it’s always interesting.</p><p><span class="slanted">Slade House</span> scared the pants off me.</p><p><span class="slanted">And</span> it was interesting.</p><p>That ticks all the boxes for me.</p><p>I’ve been noticing a theme of time travel — or at least, time anomalies — in newly published horror tales lately. It’s not a new theme, of course; time travel fiction has been around for centuries, as has horror, and they’ve intersected more than a few times in the past (hi there, <span class="slanted">Army of Darkness</span>). But it seems to be gaining steam in spooky literary works presently, with <span class="slanted">Slade House</span> being one such example. One of the books in the <span class="slanted">Murderers and Serial Killers</span> section below features it, too. I’ll be interested to see where the theme goes in the coming years.</p><p>But in any event, if you find a gorgeous old house with a beautiful garden tucked away near the pub down the road… don’t go inside. No matter how inviting it seems… it’s not.</p></div></div> <!-- <div class="sub-section"> ends -->		<div class="sub-section"><div class="sub-section-title">4. <a href="https://www.amazon.com/Shadow-Blackbirds-Cat-Winters-ebook/dp/B00C6ACUB4/ref=sr_1_1?s=digital-text&ie=UTF8&qid=1473451850&sr=1-1&keywords=in+the+shadow+of+blackbirds#nav-subnav">In the Shadow of Blackbirds</a>, by Cat Winters</div><div class="sub-section-thumbnail"><img src="assets/imgs/article-imgs/blackbirds.jpg"></div><div class="sub-section-content"><p>I was not expecting this one to spook me nearly as much as it did, but it ended up being one of those books I needed to read with the lights on. <span class="slanted">In the Shadow of Blackbirds</span> is a fairly conventional ghost story, with a girl during a time of great upheaveal — 1918, the Second World War, and the Spanish flu epidemic — getting some disturbing visits from what looks like the ghost of her first love. This ghost, though? He’s in pain. And the way it manifests is really, really freaky.</p><p>I haven’t read anything else by Cat Winters, but if you’re looking for a well-told, classic ghost story, her books look to be good bets. Her most recent one, <span class="slanted">Yesternight</span>, was just released on Oct. 4.</p></div></div><div class="sub-section"><div class="sub-section-title">5. <a href="https://www.amazon.com/Little-Stranger-Sarah-Waters-ebook/dp/B0023EFB32/ref=sr_1_1?s=books&ie=UTF8&qid=1473453814&sr=1-1&keywords=the+little+stranger#nav-subnav">The Little Stranger</a> by Sarah Waters</div><div class="sub-section-thumbnail"><img src="assets/imgs/article-imgs/little-stranger.jpg"></div><div class="sub-section-content"><p>Sarah Waters is primarily known for her books set in Victorian society featuring LGBTQ protagonists, but <span class="slanted">The Little Stranger</span> takes place in the 1940s. Her previous novel, <span class="slanted">The Night Watch</span>, had also been set in the ’40s, and her following one, <span class="slanted">The Paying Guests</span>, took place in the ’20s; in her more recent novels, it’s been interesting to watch her move away from the era which so defined her earlier works (<span class="slanted">Tipping the Velvet</span>, <span class="slanted">Affinity</span>, and <span class="slanted">Fingersmith</span>). All of these eras, though, are excellent lenses through which to study class and socioeconomic struggles, and The Little Stranger does so with the additional layer of something that may or may not be supernatural in nature.</p><p>Like a lot of gothic literature, <span class="slanted">The Little Stranger’s</span> centerpiece is a house. It’s a house that was once grand, but which, with the collapsing class system in postwar Britain, has fallen into disrepair. The family, too, which inhabits the house has fallen somewhat into disrepair, and the strange occurrences and frequent tragedies on the grounds certainly don’t help matters. If you like your ghost stories more in the vein of <span class="slanted">The Haunting of Hill House</span>, <span class="slanted">The Little Strangers</span> might be worth picking up.</p></div></div><div class="sub-section"><div class="sub-section-title">6. <a href="https://www.amazon.com/Angelica-Novel-Arthur-Phillips-ebook/dp/B000OYF02A/ref=sr_1_sc_2?s=books&ie=UTF8&qid=1473453843&sr=1-2-spell&keywords=angeliza#nav-subnav">Angelica</a> by Arthur Phillips</div><div class="sub-section-thumbnail"><img src="assets/imgs/article-imgs/angelica.jpg"></div><div class="sub-section-content"><p>In retrospect, it’s interesting that <span class="slanted">Angelica</span> wasn’t the first Arthur Phillips novel I picked up; that honor goes to The <span class="slanted">Tragedy of Arthur</span>, which tickled my background as both a theatre artist and a specialist in Renaissance drama. (I mean, he actually wrote the alleged Shakespeare play discovered in the novel. And he did it in verse. That’s dedication.) But when I enjoyed that one enough to want to check out more of Phillips’ work, of course the next one I grabbed was <span class="slanted">Angelica</span>.</p><p>Phillips is at his best when he’s taking his cues from longstanding literary traditions, and in <span class="slanted">Angelica</span>, he takes the Victorian ghost story and stands it on its head. There’s a tragedy, of course — there always is — but the nature of the tragedy changes depending on whose perspective we’re seeing it from. There’s also a spirit medium, a spooky child… or is there?</p><p><span class="slanted">Angelica</span> would have been equally at home in the Unreliable Narrators section. Do with that what you will.</p><p style="font-style:italic">Tune in next week for Part 2: Serial Killers, Unreliable Narrators And More.</p></div></div>			</div> <!-- <div class="section"> ends --></div> <!-- <div class="article-content"> ends --><div class="article-comments"><div class="section review"><div class="section-title comments">comments</div><div class="reviews"><span>There are currently no comments for this article.</span></div><div class="write-review"><span>leave your comment</span><form><div class="textarea-wrapper"><textarea id="review" placeholder="enter your review here..." autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"></textarea></div><div class="cta submit">submit</div></form></div></div></div>',
	'<div class="toggle readmore fixedtop">read more</div><div class="article-title">HAUNTED ROAD TRIP: THE SALLIE HOUSE, ATCHISON, KANSAS</div><div class="article-meta"><div class="author">lucia</div><div class="dash">-</div><div class="date">september 26, 2016</div></div><div class="article-thumbnail"><img src="assets/imgs/article-imgs/sallie-house.jpg"></div><div class="article-content"><p><span class="capitalized">A</span> lot of people know Atchison as the place in which famed aviator Amelia Earhart was born. But the unexplained disappearance of the first woman to fly solo across the Atlantic Ocean isn’t the only strange thing to have come out of the Kansas city; indeed, Atchison is home to something much weirder: <span class="slanted">The Sallie House</span>.</p><p>Located at <span class="slanted">508 N. 2nd Street</span>, the residence known as the Sallie House is — as they so often are — unremarkable from the outside. It’s old, sure; the house is thought to have been built somewhere between 1867 and 1871, making it something of a historical treasure. I also happen think it’s cute and quaint, although it’s possible that I feel that way purely because I have a soft spot for old buildings. (That’s what you get when you <span class="slanted">grow up in a historic town</span>.) But there’s more to the place than just painted bricks and a peaked roof; some incredibly strange stuff has allegedly gone on there. If you believe in haunted houses, this one is pretty much the quintessential example.</p><p><span class="slanted">Michael C. Finney</span> purchased the land and built the house for his family in 1866, and although we’re not totally sure what the timeline is — town records from the era are patchy due to flooding that wiped some of them out— we’re fairly certain the Finney family had moved into the place properly by 1871. Michael C. Finney died just a year later in the fall of 1872, leaving behind his two sons, his daughter, and his pregnant wife. (The baby turned out to be another boy, born in 1873.) But even though the Finney patriarch was gone, the family flourished; indeed, the house was occupied by Finneys for roughly three quarters of a century, with other houses springing up nearby also filled with Finneys.</p><p>The line of Finneys occupying the house ended after the death of Agnes Finney True in 1939; then, after her brother Charles, who had been living in Topeka, passed away in 1947, 508 N. 2nd Street began being rented out. Records are a little scarce for about 10 years; we know a family named Mize moved into it in 1948, although they stayed only a short while (something which also, by the way, remains unexplained), but after that, we don’t know who occupied it until 1958. That’s when Ethel Anderson moved in, who stayed until 1990. (Anderson passed away in 2000.)</p><p><div class="responsive-yt-video"><iframe src="https://www.youtube.com/embed/I3vEi70h9Qk" frameborder="0" allowfullscreen></iframe></div></p><p>And then on the last day of 1992, the <span class="slanted">Pickman family arrived</span>. Their experiences are the most well-known, because in 1993, the <span class="slanted">television show Sightings</span> contacted the Pickmans about the possibility of conducting an investigation in their home. All told, the Sallie House was featured on Sightings in eight different episodes between 1993 and 1997, although the Pickmans moved out in 1994. They still maintain what’s probably the <span class="slanted">most extensive website</span> about the house on the internet, though, because… well, let’s just say you don’t live in a place like that without it leaving its mark on you — figuratively, but also maybe literally.</p><p>Why is it called the Sallie House? That actually remains somewhat unclear. Unlike a lot of allegedly haunted houses, this one doesn’t seem to have some sort of defining moment in its history that might have induced a haunting. But Sallie is the name given to one of the entities who appears to be residing in the house, even though we don’t know exactly who Sallie is.</p><p>There are a lot of stories, of course, but they’re mostly just that—stories. There’s no historical evidence that any of them actually occurred; indeed, Debra Pickman herself <span class="slanted">refutes all these so-called backstories</span>.  One version of the legend posits that Sallie was a little girl living during the early 1900s who <span class="slanted">died of acute appendicitis</span> after visiting the doctor whose office was located at the house; in fact, this version of the tale describes her as actually dying on the operating table — believing that the doctor was torturing her with his tools. In another version, she was taken to the doctor after experiencing respiratory issues; the doctor, however, did not see how serious her illness really was, which later resulted in her <span class="slanted">death from pneumonia</span>.</p><p>What’s notable here is that both these stories — which, again, aren’t supported by any historical evidence — ultimately come down to the same thing: An ill child suffering from a negligent doctor in an era of questionable medical care. It’s not an uncommon story to hear; medicine at the turn of the century was far less advanced that it is now, and not only did people die much younger then in general, but children died much more frequently as well. I suspect that the prevalence of these kinds of stories and urban legends is our attempt to come to terms with the fragility of our own mortality, as well as some of the <span class="slanted">darker periods of medical history</span>.</p><p><div class="responsive-yt-video"><iframe src="https://www.youtube.com/embed/E3QD6RbmPEw" frameborder="0" allowfullscreen></iframe></div></p><p>In any event, Sallie is thought to be a child, mischievous but not necessarily malevolent. This is why I actually find it kind of interesting that the house is named for her; while it’s true that some of the alleged activity — stuffed animals spread across the floor by an unknown force, pictures turned upside down, and the like — is pretty benign, some of the other stuff that’s described as having happened at the house is… not. We’re talking scratches left on bare skin, people pushed in dangerous ways, mysterious fires set, and other things of a concerning nature. The Sightings episodes feature a lot of it, as do many of the <span class="slanted">other television programs</span> that have come to investigate the house since then, if you want to see what’s been recorded; whether or not you’re convinced will likely depend on whether you’re a skeptic or a believer in the first place, but at least the shows are relatively easy to find.</p><p>Maybe that’s why these days, it’s suspected that whatever is in the house might be evil. Maybe it’s another spirit — that of a <span class="slanted">woman Sallie apparently doesn’t like very much</span>. Maybe it’s <span class="slanted">demonic in nature</span>. Who knows. But whatever it is, it’s probably not just Sallie.</p><p><span class="slanted">The Sallie House is for sale</span>, by the way. It went up on real estate site Zillow in February of 2016; the <span class="slanted">original asking price was apparently $1 million</span>, but as of this writing, it’s down to about $500,000.</p><p>Just, y’know… in case you feel like tempting fate a little.</p><p><span class="slanted">Resources:</span></p><p>The Sallie House.</p><p><a href="http://www.prairieghosts.com/sallie.html">Sallie the Heartland Ghost.</a></p><p><a href="http://www.goldenstatehaunts.org/2016/02/24/the-infamously-haunted-sallie-house-is-on-sale-for-1-million-on-zillow/">The Infamously Haunted Sallie House Is For Sale.</a></p><p>[Photo via <a href="https://www.flickr.com/photos/jingerelle/5861346342">Jennifer Kirkland</a>/Flickr]</p></div><div class="article-comments"><div class="section review"><div class="section-title comments">comments</div><div class="reviews"><span>There are currently no comments for this article.</span></div><div class="write-review"><span>leave your comment</span><form><div class="textarea-wrapper"><textarea id="review" placeholder="enter your review here..." autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"></textarea></div><div class="cta submit">submit</div></form></div></div></div>',
]
var products = {
	'costumes': {
		'costumes/adult/women/blood-splatter-dress': {
			'productName':'Blood Splatter Dress',
			'productDescription':'<span>What would Halloween be without a blood splatter dress? We\'ve done the messy work and created this simple white skater dress with adjustable spaghetti straps and an allover blood splatter pattern. You just wear it and look creepy-cute.</span><span>● 95% polyester; 5% rayon</span><span>● Wash cold; dry flat</span><span>● Approx. 33" from shoulder to hem</span><span>● Imported</span>',
			'pageURL':'#product?costumes/adult/women/blood-splatter-dress',
			'imgURL':'assets/imgs/product-imgs/costumes/adult/women/blood-splatter-dress.jpg',
			'priceThen':'$172',
			'priceNow':'$0.99',
		},
		'costumes/adult/women/red-riding-hood': {
			'productName':'Red Riding Hood',
			'productDescription':'<span>It\'s a good thing Grandma can\'t see too well. Otherwise, I\'m sure she\'d give you quite a talking-to about walking through the woods alone in this Sexy Red Riding Hood Costume! Don\'t worry though. You\'re sure to tame the heart of any beast in this sexy costume.</span><span>● 90% polyester/10% cotton gingham, broadcloth & knit; 100% polyester satin</span><span>● Styled as peasant blouse w/ skirt & corset; back zipper</span><span>● Elastic edging in neckline & sleeves of white broadcloth blouse portion</span><span>● Red & white gingham high-waisted skirt has built-in lace-edged petticoat</span><span>● Black interlock corset panels have ribbon lacing</span>',
			'pageURL':'#product?costumes/adult/women/red-riding-hood',
			'imgURL':'assets/imgs/product-imgs/costumes/adult/women/red-riding-hood.jpg',
			'priceThen':'$580',
			'priceNow':'$0.99',
		},
		'costumes/kids/girls/ancient-reaper': {
			'productName':'Ancient Reaper',
			'productDescription':'<span>Every young kid has a slightly different goal when it comes to their Halloween outfit. Some kids want to haul in a whole truck load of candy while trick-or-treating. Other kids just want a chance to dress up like their favorite superhero or movie character. Your kid? He really just wants to scare the pants off of everyone that he crosses paths with! We think that\'s a pretty good goal for wearing a costume, which is why we carry some pretty creepy outfits...</span><span>Introducing this Ancient Reaper Costume for kids. With a ghastly appearance based on the personification of Death himself, this outfit has no problem giving every kid in the block a good chill. The costume features a skull mask along with a hooded robe to complete the frightening appearance, so your child will be ready to harvest the souls of the living, or at the very least, make them run in fear!</span><span>● Child Ancient Reaper Costume</span><span>● 100% polyester brushed flannel robe w/ attached cowl, Velcro closure on back</span><span>● Robe has a worn-leather look and tattered edges</span><span>● Fabric belt has worn-leather appearance, self ties as desired</span><span>● Vinyl half mask has molded and painted details and strange occult markings, elastic security band</span>',
			'pageURL':'#product?costumes/kids/girls/ancient-reaper',
			'imgURL':'assets/imgs/product-imgs/costumes/kids/girls/ancient-reaper.jpg',
			'priceThen':'$111',
			'priceNow':'$0.99',
		},
		'costumes/adult/men/butcher-pig': {
			'productName':'Butcher Pig',
			'productDescription':'<span>How would you feel if all of your family and friends got turned into pork chops or brats? You\'d probably go a little crazy and might consider a murderous spree, just like this pig has done. This Butcher Pig Costume is a frightening costume for adults to wear. This is one piggie that went \'wee, wee, wee\' all the way to the market.</span>',
			'pageURL':'#product?costumes/adult/men/butcher-pig',
			'imgURL':'assets/imgs/product-imgs/costumes/adult/men/butcher-pig.jpg',
			'priceThen':'$330',
			'priceNow':'$0.99',
		},
		'costumes/adult/women/waitress-zombie': {
			'productName':'Waitress Zombie',
			'productDescription':'<span>Today\'s specials include toenail soup, spaghetti brains, and chopped livers! Bloody Waitress Adult Womens Zombie Costume is complete with blue classic collared diner uniform with attached mini apron splattered with blood stains. Matching sailor cap also included so you\'ll be ready to serve your customers at this friendly neighborhood die-ner.</span>',
			'pageURL':'#product?costumes/adult/women/waitress-zombie',
			'imgURL':'assets/imgs/product-imgs/costumes/adult/women/waitress-zombie.jpg',
			'priceThen':'$999',
			'priceNow':'$0.99',
		},
		'costumes/adult/men/doctor-zombie': {
			'productName':'Doctor Zombie',
			'productDescription':'<span>"Pass me the scalpel! I am going to make an incision around the cranium. I am going in for the brains...because I need a tasty snack!" This Zombie Doctor Costume will make you look like an undead surgeon that is just chomping at the bit for his next bloody meal. This is a scary and unique zombie costume for adults.</span>',
			'pageURL':'#product?costumes/adult/men/doctor-zombie',
			'imgURL':'assets/imgs/product-imgs/costumes/adult/men/doctor-zombie.jpg',
			'priceThen':'$669',
			'priceNow':'$0.99',
		},
		'costumes/adult/women/voodoo-doll': {
			'productName':'Voodoo Doll',
			'productDescription':'<span>So we\'ve always wondered about this costume. As a voodoo doll, is someone else controlling you with a smaller version of a doll dressed as you who is already dressed as a voodoo doll? Or are you dressed as a life-sized voodoo doll of somebody else so someone can use you to control the other person? Do you just control yourself dressed as a voodoo doll of someone else and control that someone else? Phew! That\'s way too deep for us!Let\'s leave the complexities behind and just take this dress at face value: a cute and delightfully creepy costume look. There\'s a ton of ways that you could customize your costume experience when you go in this look. You could enhance the look by using some makeup on your arms and legs to make it look like you were sewn together. You could add a terrifying mask to complete your mysterious style, and you could even carry around some over sized pins to let your friends "poke" you.</span><span>And as for your story, it\'s totally up to you. Maybe you could be a doll that somebody else has the controls for. Or maybe get a bunch of friends together and be a bunch of scary little dolls who somehow escaped from a misfit toy shop. Whatever kind of ritualistic creation you\'d like to be, just grab some black heels and maybe a pair of torn up or fishnet stockings along with all the black and white makeup you own. Just, whatever you do, don\'t take any pieces of our hair and try to control us!		</span><span>● 97% Cotton 3% Spandex</span><span>● Tan dress with sprayed on black paint details</span><span>● Printed on heart with skull pins in it on the chest</span><span>● Sewn on black stitches and snake</span><span>● Attached white under skirt with red mesh trim</span><span>● Stuffed Voodoo doll accessory</span><span>● Black wristband with chain attached to the doll</span>',
			'pageURL':'#product?costumes/adult/women/voodoo-doll',
			'imgURL':'assets/imgs/product-imgs/costumes/adult/women/voodoo-doll.jpg',
			'priceThen':'$330',
			'priceNow':'$0.99',
		},
		'costumes/kids/boys/demented-doctor': {
			'productName':'Demented Doctor',
			'productDescription':'<span>This demented doctor is ready to see you now, you may not want to see him! This is a horrifying costume for kids to wear on Halloween.</span><span>● 100% polyester gabardine</span><span>● Blood-spattered white robe fastens w/ Velcro at center back</span><span>● Front has bloody hand prints & five non-functional vinyl straps w/ plastic buckles</span><span>● Molded vinyl mask has stringy synthetic hair attached</span><span>● Eye & nose slits for vision & breathing, elastic band for security</span>',
			'pageURL':'#product?costumes/kids/boys/demented-doctor',
			'imgURL':'assets/imgs/product-imgs/costumes/kids/boys/demented-doctor.jpg',
			'priceThen':'$750',
			'priceNow':'$0.99',
		},
		'costumes/kids/girls/cemetary-bride': {
			'productName':'Cemetary Bride',
			'productDescription':'<span>Here comes the bride…back from the dead! This cemetery bride costume is the perfect twist on the classic bride costume, with a beautiful yet haunting dress and veil, making it the perfect combination of gorgeous and ghostly!</span>',
			'pageURL':'#product?costumes/kids/girls/cemetary-bride',
			'imgURL':'assets/imgs/product-imgs/costumes/kids/girls/cemetary-bride.png',
			'priceThen':'$779',
			'priceNow':'$0.99',
		},
		'costumes/adult/women/regan': {
			'productName':'Regan',
			'productDescription':'<span>Designed off the infamous night gown that regan wears in the classic horror film.</span><span>● 100% Polyester</span><span>● Machine Wash</span><span>● This costume features lace detailing</span><span>● This costume imitation vomit stains</span><span>● Mask not included</span>',
			'pageURL':'#product?costumes/adult/women/regan',
			'imgURL':'assets/imgs/product-imgs/costumes/adult/women/regan.jpg',
			'priceThen':'$230',
			'priceNow':'$0.99',
		},
		'costumes/kids/boys/exploded-guts-zombie': {
			'productName':'Exploded Guts Zombie',
			'productDescription':'<span>Get ready to run! If this zombie is after you you\'re done for! The gruesome spandex suit features gruesome rotting flesh, and bloody exploding organ detailing. This breathable, see-through, and drink through suit is not for the squeamish!</span>',
			'pageURL':'#product?costumes/kids/boys/exploded-guts-zombie',
			'imgURL':'assets/imgs/product-imgs/costumes/kids/boys/exploded-guts-zombie.jpg',
			'priceThen':'$550',
			'priceNow':'$0.99',
		},
		'costumes/kids/girls/ghost': {
			'productName':'Ghost',
			'productDescription':'<span>A faceless ghoul that carries a chain and lantern? That sounds spooktacular! If you want to go for the ultimate creepy look, this Child Spooky Ghost Costume is the way to go. You can lurk in the shadows and jump out at people. Keep a scream tally and take note of all the people who shriek in terror!</span><span>● 100% polyester</span><span>● Robe has zipper down the back, layer of fringed white over top</span><span>● Attached foam polyurethane head w/ attached black mask</span><span>● Foam black gloves</span>',
			'pageURL':'#product?costumes/kids/girls/ghost',
			'imgURL':'assets/imgs/product-imgs/costumes/kids/girls/ghost.jpg',
			'priceThen':'$279',
			'priceNow':'$0.99',
		},
		'costumes/adult/men/ghost': {
			'productName':'Ghost',
			'productDescription':'<span>When ever you enter a haunted house you better keep your eyes open. Because somewhere lurking in the shadows there is always a spirit ready to jump out and scare anyone walking into their home. Ghosts hate it when uninvited guests come in unannounced. You see, it is a very little known fact that ghosts love politeness. They only are tempted to scare when they feel there is someone who is impolite around them. So next time you plan on going into a haunted house be sure to send a letter before hand saying what time you\'ll be arriving.</span>',
			'pageURL':'#product?costumes/adult/men/ghost',
			'imgURL':'assets/imgs/product-imgs/costumes/adult/men/ghost.jpg',
			'priceThen':'$369',
			'priceNow':'$0.99',
		},
		'costumes/kids/boys/ghost': {
			'productName':'Ghost',
			'productDescription':'<span>A faceless ghoul that carries a chain and lantern? That sounds spooktacular! If you want to go for the ultimate creepy look, this Child Spooky Ghost Costume is the way to go. You can lurk in the shadows and jump out at people. Keep a scream tally and take note of all the people who shriek in terror!</span><span>● 100% polyester</span><span>● Robe has zipper down the back, layer of fringed white over top</span><span>● Attached foam polyurethane head w/ attached black mask</span><span>● Foam black gloves</span>',
			'pageURL':'#product?costumes/kids/boys/ghost',
			'imgURL':'assets/imgs/product-imgs/costumes/kids/boys/ghost.jpg',
			'priceThen':'$110',
			'priceNow':'$0.99',
		},
		'costumes/kids/girls/haunted-beauty': {
			'productName':'Haunted Beauty',
			'productDescription':'<span>There\'s always a story behind a haunted spirit that still roams this world. Little girls will love making up their own personal ghostly tale when they don this haunted beauty costume. She\'ll love the eerie feeling that she\'ll get when she wears the mesh hood and shackled chains. An idea for a spooky story will pop into her mind as soon as she puts on this ghostly costume.</span><span>● 100% polyester fabric and knit mesh</span><span>● Sleeveless pullover dress has elastic waistband, knit mesh overlay</span><span>● Shrug has long mesh sleeves with hanging fringe; hood fastens with Velcro at neck</span><span>● Mesh veil can be worn on top of hood or pulled down to cover face</span><span>● 6\' long plastic chain can be threaded through ribbon loops in side seams of dress</span>',
			'pageURL':'#product?costumes/kids/girls/haunted-beauty',
			'imgURL':'assets/imgs/product-imgs/costumes/kids/girls/haunted-beauty.jpg',
			'priceThen':'$229',
			'priceNow':'$0.99',
		},
		'costumes/kids/boys/ancient-reaper': {
			'productName':'Ancient Reaper',
			'productDescription':'<span>Every young kid has a slightly different goal when it comes to their Halloween outfit. Some kids want to haul in a whole truck load of candy while trick-or-treating. Other kids just want a chance to dress up like their favorite superhero or movie character. Your kid? He really just wants to scare the pants off of everyone that he crosses paths with! We think that\'s a pretty good goal for wearing a costume, which is why we carry some pretty creepy outfits...</span><span>Introducing this Ancient Reaper Costume for kids. With a ghastly appearance based on the personification of Death himself, this outfit has no problem giving every kid in the block a good chill. The costume features a skull mask along with a hooded robe to complete the frightening appearance, so your child will be ready to harvest the souls of the living, or at the very least, make them run in fear!</span><span>● Child Ancient Reaper Costume</span><span>● 100% polyester brushed flannel robe w/ attached cowl, Velcro closure on back</span><span>● Robe has a worn-leather look and tattered edges</span><span>● Fabric belt has worn-leather appearance, self ties as desired</span><span>● Vinyl half mask has molded and painted details and strange occult markings, elastic security band</span>',
			'pageURL':'#product?costumes/kids/boys/ancient-reaper',
			'imgURL':'assets/imgs/product-imgs/costumes/kids/boys/ancient-reaper.jpg',
			'priceThen':'$700',
			'priceNow':'$0.99',
		},
		'costumes/adult/men/grave-ghoul': {
			'productName':'Grave Ghoul',
			'productDescription':'<span>The Grave Ghoul is kind of a nasty guy. Wander too far into the graveyard at night, and he\'ll grasp you in his clutches and drag you to hell with his chains. Even worse, if you\'re out of he reach, he can reanimate his minions and send an undead army marching towards your front door. Our advice: Just avoid graveyards all together!</span>',
			'pageURL':'#product?costumes/adult/men/grave-ghoul',
			'imgURL':'assets/imgs/product-imgs/costumes/adult/men/grave-ghoul.jpg',
			'priceThen':'$369',
			'priceNow':'$0.99',
		},
		'costumes/kids/girls/homecoming-horror': {
			'productName':'Homecoming Horror',
			'productDescription':'<span>It always seems to start the same way: an innocent school dance, the most popular couple in school, and a crazy dare. But before you know it, zombies (or other assorted monsters/demons/devils) have taken over and everyone is running for the exits! But zombies and other undead creatures have come a long way since bad 80’s horror movies – it seems as though zombies (of the fictional variety) are everywhere we turn. From hit television shows to mainstream films, zombies have truly made their mark on pop culture.</span><span>Beyond just fictional zombies and the undead, people are even preparing for a real zombie apocalypse. Now, whether or not a zombie takeover is imminent, you can still get in on the fun with this Homecoming Horror Costume! From the 100% polyester dress with printed blood stains to the ‘Drop Dead Gorgeous’ sash, this zombie costume will have you ready for your next theme party or for Halloween. No matter what, don’t forget the tiara with connected knife to give you a look that is truly undead.</span><span>Let’s be honest, we’ve all thought about become Queen Bee at some point in our lives and what better time than a high school dance or Halloween? You’ll be able to take over your next event with your lifeless eyes and ghostly appearance – everyone else will be running for the halls! Become the homecoming queen at Zombie High in this Homecoming Horror Costume! Add glittery shoes and zombie makeup to complete your look and you will rule the school – and not just because you are popular!</span><span>● Homecoming Horror Costume</span><span>● 100% polyester dress w/ 74% polyester/26% metallic sequin knit overlay</span><span>● Sleeveless pullover tank dress has jagged hemline, longer in back</span><span>● Printed "blood stains" on skirt</span><span>● Sequin waist sash fastens w/ Velcro</span><span>● Sash has printed blood stains & "Drop Dead Gorgeous" in black script</span><span>● Silver sequined felt tiara fastened to plastic headband w/ knife handle on one side & blade tip on other side</span>',
			'pageURL':'#product?costumes/kids/girls/homecoming-horror',
			'imgURL':'assets/imgs/product-imgs/costumes/kids/girls/homecoming-horror.jpg',
			'priceThen':'$199',
			'priceNow':'$0.99',
		},
		'costumes/adult/men/hellraiser-pinhead': {
			'productName':'Hellraiser Pinhead',
			'productDescription':'<span>A demon to some, angel to others, pain for pleasure is Hellraiser\'s game. The 1987 Hellraiser remains one of the scariest and horrific movies in history and for good reason. With their torturous looks and gothic garb, a Hellraiser costume is always a fan favorite and one that will send chills up the spines of anyone nearby. The mysterious and violent leader is represented with our authentic Pinhead costumes. Complete with black shiny cloak, we provide a Pinhead mask to recreate his signature look without the need or pain of actually nailing pins to your head. His gang of Centibytes Hellraiser costumes are always close at hand. With their grotesque faces and gruesome weapons, Chatterer and Butterball Centibyte costumes are never to be forgotten. And the root cause of all this evil? The perfect horror accessory, a Hellraiser mystery box. Fortunately, hooks don\'t launch from it but never fear, we have an assortment of meat hooks, blood, and weapons belts that will complete your Hellraiser costume look. So suit up, tear off some flesh, and get gory with our great Hellraiser and Centibyte costumes! They\'ll tear your soul apart!</span>',
			'pageURL':'#product?costumes/adult/men/hellraiser-pinhead',
			'imgURL':'assets/imgs/product-imgs/costumes/adult/men/hellraiser-pinhead.jpg',
			'priceThen':'$399',
			'priceNow':'$0.99',
		},
		'costumes/adult/women/morbid-girl': {
			'productName':'Morbid Girl',
			'productDescription':'<span>Get creepy, kooky and totally girly in this little back dress! Black velvet dress with contrasting white collar, three white cloth buttons at the neckline and back single cloth button closure. Don\'t worry: ooky is definitely not a word that will be used to describe you while you\'re wearing it. Throw on your knee socks and saddle shoes and you\'re ready to go!</span><span>● 97% polyester</span><span>● 3% spandexWash cold</span><span>● dry flat</span><span>● 35" from shoulder to hem</span><span>● Imported</span>',
			'pageURL':'#product?costumes/adult/women/morbid-girl',
			'imgURL':'assets/imgs/product-imgs/costumes/adult/women/morbid-girl.jpg',
			'priceThen':'$880',
			'priceNow':'$0.99',
		},
		'costumes/kids/boys/headless-boy': {
			'productName':'Headless Boy',
			'productDescription':'<span>Being headless is never easy. Clothes just don\'t fit right. You can never wear a hoodie or a baseball cap. Plus, all that coagulating blood is messy. No one wants to stand too close to you for fear you will drip on them. They say kids can be so mean, but try walking down a school hallway without a head. If you thought someone calling you \'Brace Face\' or \'Four Eyes\' was bad, try listening to \'Dead Head\' and \'Stubby Neck Freak\' all day long.</span><span>And, don\'t even get me started on trying to eat lunch in the cafeteria. Never mind that a headless kid doesn\'t actually need to eat anymore -- what, with being the living dead and all. It\'s hard to hold a lunch tray, maneuver through the line, and carry your head all at the same time. Plus, the whole running joke that the 8th graders have about you and the infamous \'Mystery Meat\' selection that the lunch ladies always serve up at the end of the month is enough to make you want to crawl into the nearest unoccupied grave. Sometimes it\'s easier to just skip lunch altogether, but recess is not much better. The headless kid is always the last one picked for teams, even the guy with the asthma inhaler gets picked before you.</span><span>That\'s one of the reasons this robe is so awesome. It\'s long and flowing with a harness underneath to support everything. It may not be perfect, but helps you blend in with the living a little better.</span><span>● 100% polyester robe w/ hole for head to poke out of</span><span>● Harness is hidden under robe</span><span>● Elastic bands go underneath armpit and Velcro to plastic neck to hold up harness</span><span>● Neck & shoulders is paited red to look like dripping blood</span>',
			'pageURL':'#product?costumes/kids/boys/headless-boy',
			'imgURL':'assets/imgs/product-imgs/costumes/kids/boys/headless-boy.jpg',
			'priceThen':'$710',
			'priceNow':'$0.99',
		},
		'costumes/adult/men/killer-clown': {
			'productName':'Killer Clown',
			'productDescription':'<span>Once upon a time, there was a colorful and delightful clown. The clown delighted in telling jokes, tripping over his own massive feet for a good laugh, making balloon animals, and practicing any number of amazing parlor tricks. He traveled with a circus for a while, picking up some excellent fashion tips, and, naturally, did a few kids’ birthday parties on the side in order to make a few extra bucks… which, of course, he donated to the local children’s hospital. His heart stirred with the desire to bring joy to every living being…</span><span>But, not all people are as kind as this generous clown. Some people hate clowns. And, so, it came to one performance where the kindly clown was making one of the most intricate balloon creatures ever before seen—a true masterpiece… a virtually animated, child-sized bunny—when the tragedy occurred. A spectator jeered and threw a rock at the poor clown. Striking the poor clown harsh on the skull, the whole crowd heard the crack… and they laughed. Well, a serious head injury is one thing, but the emotional crippling of cruel laughter gives birth to a true monster.</span><span>And that is your story, my friend. How you were born into this world of horror and murder as the Killer Clown. Wear your white and black, half polka dot, half striped polyester satin jumpsuit and show your deserving victims your horrific and injured face, a wide black and insidious smile and the bleeding red scar on your skull, all framed by the a black ruffle at your neck. Gone are your days of brilliant color and happy smiles. Now are the nights of screams! (Hopefully your weapon of choice will only be terrible puns, though.)</span>',
			'pageURL':'#product?costumes/adult/men/killer-clown',
			'imgURL':'assets/imgs/product-imgs/costumes/adult/men/killer-clown.jpg',
			'priceThen':'$299',
			'priceNow':'$0.99',
		},
		'costumes/adult/women/monster-bride': {
			'productName':'Monster Bride',
			'productDescription':'<span>● This item\'s color may vary due to inherent manufacturing variations or your computer monitor\'s color settings. The item you receive will be identical or substantially similar to the item pictured in this listing.</span>',
			'pageURL':'#product?costumes/adult/women/monster-bride',
			'imgURL':'assets/imgs/product-imgs/costumes/adult/women/monster-bride.jpg',
			'priceThen':'$800',
			'priceNow':'$0.99',
		},
		'costumes/kids/boys/headless-vampire.html': {
			'productName':'Headless Vampire',
			'productDescription':'<span>This Halloween season, your child can scare all of the villagers while bringing the legend of Sleepy Hollow to life in this Kids Headless Horseman Costume! The name Ichabod Crane is inextricably linked in literature with the Headless Horseman, and a few people who haven\'t read Washington Irving\'s actual story may mistakenly think that Crane WAS the Headless Horseman. He wasn\'t. Ichabod was the schoolmaster in the fictional village of Sleepy Hollow, and he encountered the Headless Horseman, believed to be the ghost of a Hessian mercenary from the Revolutionary War, while riding late at night back to the village from a party at an outlying farm. He had made a proposal of marriage to the farmer\'s daughter, and had been rejected.He was never seen in Sleepy Hollow again. The next morning his unsaddled horse was found wandering, the saddle trampled, and a smashed pumpkin lying alongside Crane\'s hat beside the road.Wear this ensemble with your own black pants. And for a more realistic touch, carry one of our pumpkins as a prop. Everyone will want to escape this spooky creature whose head was blown off by a Revolutionary War cannonball!</span><span>● 100% polyester interlock and knit mesh</span><span>● Shirt/cape combo has ruffled lace ascot and elasticized lace sleeve cuffs</span><span>● Self-fabric waist ties allow fit adjustment</span><span>● Cape has stand-up collar and back Velcro tab fastener</span><span>● Inflatable shoulder pads support cape to cover head, held in place w/ elastic bands</span><span>● Mesh vest front allows limited vision</span><span>● Molded vinyl headpiece has realistic severed-neck details</span><span>● Also available in adult size</span>',
			'pageURL':'#product?costumes/kids/boys/headless-vampire',
			'imgURL':'assets/imgs/product-imgs/costumes/kids/boys/headless-vampire.jpg',
			'priceThen':'$777',
			'priceNow':'$0.99',
		},
		'costumes/kids/girls/living-dead-zombie': {
			'productName':'Living Dead Zombie',
			'productDescription':'<span>Zombie movies and cartoons have become a hit with both adults and kids alike. No longer are zombies just a boring trope in a scary movie, now they are taking center stage in both movies and television shows. Whether your child loves the classic movie zombies or the modern, more human-like zombies, they will love dressing up as a zombie this Halloween.</span><span>Kids zombie costumes come in all sizes and styles and this Kids Living Dead Zombie Costume is the perfect mix of the classic and modern zombie look. This costume comes complete with all of the gruesome details you’d expect from a classic zombie costume, but with enough modern comforts that they can move around easily on all of their Halloween adventures.</span><span>This kid’s zombie costume is a shirt and pants combo. The pants have an elastic waist for a comfortable fit and the top and pants have matching gray and black poly blend fabric. The molded chest piece attaches with Velcro at the shoulders and gives the costumes it’s from-the-grave look. Finally, the molded vinyl mask has slits for the eyes for clear vision and is held in place with an elastic strap. The gory details truly set this full zombie costume apart from the others.</span><span>Add black boots and gloves to complete the look. Your child will look like they just emerged from the crypt with this realistic costume. No need for any zombie makeup – this costume and mask combo has your child covered this Halloween or for a fun night out in the neighborhood!</span>',
			'pageURL':'#product?costumes/kids/girls/living-dead-zombie',
			'imgURL':'assets/imgs/product-imgs/costumes/kids/girls/living-dead-zombie.jpg',
			'priceThen':'$200',
			'priceNow':'$0.99',
		},
		'costumes/adult/women/marionette': {
			'productName':'Marionette',
			'productDescription':'<span>Be everyone\'s favorite stringed puppet when you wear this Marionette Kit! The tan headband with attached cuffs will give you the perfect controlled puppet appearance you were going for!</span><span>● Materials: 100% polyester</span><span>● Wash/Care Instructions: Do not wash</span>',
			'pageURL':'#product?costumes/adult/women/marionette',
			'imgURL':'assets/imgs/product-imgs/costumes/adult/women/marionette.jpg',
			'priceThen':'$199',
			'priceNow':'$0.99',
		},
		'costumes/kids/boys/jason': {
			'productName':'Jason',
			'productDescription':'<span>And you\'re back. I was wondering if I\'d ever see you again. Well, just be careful hunting down Camp Crystal Lake workers. They get stronger and more crafty every year. Oh, and did I ever tell you that I\'m sorry about what happened to your mom?</span><span>● 100% polyester</span><span>● Long sleeve shirt with screenprinted graphics such has exposed ribs and muscle and pockets</span><span>● Ties at back of the neck</span><span>● Matching forest green pants with an elastic waistband</span><span>● Tattered leg bottoms</span><span>● Vinyl half mask with eye and mouth holes</span><span>● Classic hockey mask with bloated, bloody skin</span><span>● Mask secures around head with elastic bands</span>',
			'pageURL':'#product?costumes/kids/boys/jason',
			'imgURL':'assets/imgs/product-imgs/costumes/kids/boys/jason.jpg',
			'priceThen':'$499',
			'priceNow':'$0.99',
		},
		'costumes/kids/girls/midnight-ghost': {
			'productName':'Midnight Ghost',
			'productDescription':'<span>Every haunted house needs someone spooky to haunt it. But trying to get the right haunter can be a challenge in and of itself. We don\'t recommend trusting a poltergeist because they\'re too messy (nobody wants to have to pick up those pots and pans). Phantoms are out because they\'re just far too loud with all of the moaning and hullabaloo in the hallways. And frankly if you hire specters to do the haunting you\'re just not going to get your money\'s worth. The only supernatural force that should be in a home to scare the inhabitants are traditional ghosts. Ghosts get their work done in the scaring department and now your child can get on the spooky good fun with this Midnight Ghost costume. Get your little one this costume, and you\'ll be one step closer to getting that house haunted!</span>',
			'pageURL':'#product?costumes/kids/girls/midnight-ghost',
			'imgURL':'assets/imgs/product-imgs/costumes/kids/girls/midnight-ghost.jpg',
			'priceThen':'700',
			'priceNow':'$0.99',
		},
		'costumes/adult/men/leatherface': {
			'productName':'Leatherface',
			'productDescription':'<span>The Texas Chainsaw Massacre Leatherface Adult Costume includes mask with hair, apron with shirt and tie. Straight from the famous horror movie Texas Chainsaw Massacre.</span>',
			'pageURL':'#product?costumes/adult/men/leatherface',
			'imgURL':'assets/imgs/product-imgs/costumes/adult/men/leatherface.jpg',
			'priceThen':'$899',
			'priceNow':'$0.99',
		},
		'costumes/kids/boys/leatherface': {
			'productName':'Leatherface',
			'productDescription':'<span>If you drive too far off down the back roads of Texas you may find one of the worst monsters ever, Leatherface. What makes this murderous madman the worst is that he is completely human and does the worst things ever to others. So when you hear a chainsaw roar while you\'re in the Lone Star State be sure to run away from it right away or you\'ll end up a part of a Texas chainsaw massacre.Now your little one can be their favorite horror movie maniac in this great Leatherface costume. Just be sure to pick up one of our chainsaws to complete the costume.</span><span>● 100% Polyester</span><span>● Tan shirt with vertical green stripes and attached neck tie</span><span>● Attached long apron with jagged edges on the top and bottom</span><span>● Black stitches printed on the apron</span><span>● Foam mask made to look like decaying skin</span><span>● Red hair attached to the top of the mask</span>',
			'pageURL':'#product?costumes/kids/boys/leatherface',
			'imgURL':'assets/imgs/product-imgs/costumes/kids/boys/leatherface.jpg',
			'priceThen':'$120',
			'priceNow':'$0.99',
		},
		'costumes/kids/girls/mummy': {
			'productName':'Mummy',
			'productDescription':'<span>If you\'re ready to get out of the the sarcophagus you\'re going to want make sure that you have the right threads, and this costume will provide the perfect look. You\'ll really be able to terrify the neighborhood with this mummy costume! It\'s an exclusive look you won\'t find anywhere else. It looks ragged, but don\'t worry, it\'s supposed to!</span>',
			'pageURL':'#product?costumes/kids/girls/mummy',
			'imgURL':'assets/imgs/product-imgs/costumes/kids/girls/mummy.jpg',
			'priceThen':'$300',
			'priceNow':'$0.99',
		},
		'costumes/adult/men/mummy': {
			'productName':'Mummy',
			'productDescription':'<span>If you\'re ready to get out of the the sarcophagus you\'re going to want make sure that you have the right threads, and this costume will provide the perfect look. You\'ll really be able to terrify the neighborhood with this mummy costume! It\'s an exclusive look you won\'t find anywhere else. It looks ragged, but don\'t worry, it\'s supposed to!</span>',
			'pageURL':'#product?costumes/adult/men/mummy',
			'imgURL':'assets/imgs/product-imgs/costumes/adult/men/mummy.jpg',
			'priceThen':'$777',
			'priceNow':'$0.99',
		},
		'costumes/adult/women/high-school-zombie-girl': {
			'productName':'Highschool Zombie Girl',
			'productDescription':'<span>Relive high school when you wear the High School Zombie Girl adult womens costume. The tattered and blood-spattered gray, white and red uniform-inspired jacket of this zombie costume features an attached shirt and comes complete with a tie and plaid skirt.</span><span>● Materials/ Fabrics- knitted and woven polyester</span><span>● Wash/Care Instructions- dry clean only</span>',
			'pageURL':'#product?costumes/adult/women/high-school-zombie-girl',
			'imgURL':'assets/imgs/product-imgs/costumes/adult/women/high-school-zombie-girl.jpg',
			'priceThen':'$777',
			'priceNow':'$0.99',
		},
		'costumes/kids/girls/skeleton': {
			'productName':'Skeleton',
			'productDescription':'<span>Make no bones about it – this kids skeleton Halloween costume is as scary as it looks! Skeletons are a mainstay on the Halloween scene, but it’s easy to forget them among the more popular vampires, werewolves, and demons. But this Halloween, your child will stand out in a sea of common creatures with this skeleton costume.</span><span>Jumping out of closets, rising from the grave, terrorizing the town – these are just a few of the activities skeletons enjoy. From the big screen to the small screen and to the pages of your favorite book, skeletons always make for a fun and interesting character. Some of them have their own sob stories and others are just mindless henchman for the big baddie, but either way, they know what it takes to steal a scene.</span><span>You won\'t be the usual bag of bones when you wear this Kids Skeleton Costume. This is a frightening costume for kids that won\'t make them look like the typical werewolf or zombie. This costume covers you from head to toe and is a unique way to scare their friends (and maybe a few adults) this Halloween. The 100% polyester black bodysuit has latex bones covering the exterior. The included hood has a skull face on it with black mesh so they can easily see. Cover up the last remaining bits of their former human self with the black boot covers and matching skeleton gloves. Before you know it, your child will be ready to haunt the neighborhood in their full skeleton costume!</span>',
			'pageURL':'#product?costumes/kids/girls/skeleton',
			'imgURL':'assets/imgs/product-imgs/costumes/kids/girls/skeleton.jpg',
			'priceThen':'$888',
			'priceNow':'$0.99',
		},
		'costumes/adult/men/pestilence': {
			'productName':'Pestilence',
			'productDescription':'<span>It is said that through out the ages an evil forces has made it\'s way to our world and brought with it disease and destruction. That force is known as Pestilence and he is responsible for every black death, pandemic, and all other forms outbreak of diseases. Pestilence will not stop until the world becomes infected with every form of flu and contamination ever. Now you can look like this fowl demon who loves to spread plague and infection when you put on this high quality Pestilence FX Costume. You\'ll be set to terrify all that see you and especially those who have a fear of the common cold!</span>',
			'pageURL':'#product?costumes/adult/men/pestilence',
			'imgURL':'assets/imgs/product-imgs/costumes/adult/men/pestilence.jpg',
			'priceThen':'$123',
			'priceNow':'$0.99',
		},
		'costumes/adult/women/darling-spellcaster': {
			'productName':'Darling Spellcaster',
			'productDescription':'<span>Show that you can be both sweet and wicked with this Darling Spellcaster costume! With a dress that ends a little below the knees and features a glitter skirt, as well as a classic witch hat and matching belt, this costume is perfect for any sweet spellcaster!</span><span>● Material: Polyester, nylon</span><span>● Care: Hand wash</span><span>● Imported</span><span>● Note: Broom, gloves, and shoes sold separately</span>',
			'pageURL':'#product?costumes/adult/women/darling-spellcaster',
			'imgURL':'assets/imgs/product-imgs/costumes/adult/women/darling-spellcaster.jpg',
			'priceThen':'$345',
			'priceNow':'$0.99',
		},
		'costumes/kids/boys/living-dead-zombie': {
			'productName':'Living Dead Zombie',
			'productDescription':'<span>Zombie movies and cartoons have become a hit with both adults and kids alike. No longer are zombies just a boring trope in a scary movie, now they are taking center stage in both movies and television shows. Whether your child loves the classic movie zombies or the modern, more human-like zombies, they will love dressing up as a zombie this Halloween.</span><span>Kids zombie costumes come in all sizes and styles and this Kids Living Dead Zombie Costume is the perfect mix of the classic and modern zombie look. This costume comes complete with all of the gruesome details you’d expect from a classic zombie costume, but with enough modern comforts that they can move around easily on all of their Halloween adventures.</span><span>This kid’s zombie costume is a shirt and pants combo. The pants have an elastic waist for a comfortable fit and the top and pants have matching gray and black poly blend fabric. The molded chest piece attaches with Velcro at the shoulders and gives the costumes it’s from-the-grave look. Finally, the molded vinyl mask has slits for the eyes for clear vision and is held in place with an elastic strap. The gory details truly set this full zombie costume apart from the others.</span><span>Add black boots and gloves to complete the look. Your child will look like they just emerged from the crypt with this realistic costume. No need for any zombie makeup – this costume and mask combo has your child covered this Halloween or for a fun night out in the neighborhood!</span>',
			'pageURL':'#product?costumes/kids/boys/living-dead-zombie',
			'imgURL':'assets/imgs/product-imgs/costumes/kids/boys/living-dead-zombie.jpg',
			'priceThen':'$540',
			'priceNow':'$0.99',
		},
		'costumes/adult/men/swamp-nate': {
			'productName':'Swamp Nate',
			'productDescription':'<span>Meet Nate. He\'s a successful young zombie bachelor living it up in the swamps. He enjoys long walks on the beach, holding hands, deep conversations and moonlit nights. He\'s been looking for love in all the wrong places and is ready to date a girl who\'s ready to get serious. He\'d like someone who can appreciate his special sense of style, which includes things like ripped up tweed jackets, splattered blood on all of his clothes and seaweed on everything. He wears his intestines on the outside and isn\'t ashamed to admit it. If you\'re interested in being his forever girl and you\'re not afraid of eating brains, give him a call to meet your destiny.</span>',
			'pageURL':'#product?costumes/adult/men/swamp-nate',
			'imgURL':'assets/imgs/product-imgs/costumes/adult/men/swamp-nate.jpg',
			'priceThen':'$900',
			'priceNow':'$0.99',
		},
		'costumes/kids/girls/zombie-school-girl': {
			'productName':'Zombie School Girl',
			'productDescription':'<span>School\'s a real drag. With all the staggering through the halls and mindless groaning, it almost makes you feel a little bit like a...ZOMBIE! At least you don\'t go around feasting on the brains of other classmates, but if you want to start getting into that sort of thing, we can help transform you into one of the undead with this gory, yet strangely cute costume.</span>',
			'pageURL':'#product?costumes/kids/girls/zombie-school-girl',
			'imgURL':'assets/imgs/product-imgs/costumes/kids/girls/zombie-school-girl.jpg',
			'priceThen':'$999',
			'priceNow':'$0.99',
		},
		'costumes/kids/boys/zombie': {
			'productName':'Zombie',
			'productDescription':'<span>Candy corn, Snickers, Baby Ruths? Please. Not unless it\'s covered in blood and brains. Let your child crave something with a little more iron this Halloween in this Boy Zombie Costume. Let\'s just hope he doesn\'t try to eat the neighbor\'s dog again...</span><span>● 100% polyester</span><span>● Shirt Velcros in back</span><span>● Rib cage and blood spatter marks accent shirt</span><span>● Blue pants w/ bones & blood on them have an elastic waistband</span>',
			'pageURL':'#product?costumes/kids/boys/zombie',
			'imgURL':'assets/imgs/product-imgs/costumes/kids/boys/zombie.jpg',
			'priceThen':'$870',
			'priceNow':'$0.99',
		},
		'costumes/adult/men/saw-pig': {
			'productName':'Saw Pig',
			'productDescription':'<span>Freak them out farmyardstyle in this officially licensed Saw Pig adult mens costume, straight from the horror film trilogy. The full length black trenchcoat trimmed with a bloodred latex collar, black gloves and signature pigface mask of this scary costume are sure to send chills.</span><span>From the jigsaw movie franchise, this deluxe pig mask and costume is sure to scare. Black trench coat costume with red trim and black gloves highlighted by the creepy pig mask. Officially licensed costume.</span>',
			'pageURL':'#product?costumes/adult/men/saw-pig',
			'imgURL':'assets/imgs/product-imgs/costumes/adult/men/saw-pig.jpg',
			'priceThen':'$600',
			'priceNow':'$0.99',
		},
		'costumes/kids/girls/waitress-zombie': {
			'productName':'Waitress Zombie',
			'productDescription':'<span>Today\'s specials include toenail soup, spaghetti brains, and chopped livers! Bloody Waitress Adult Womens Zombie Costume is complete with blue classic collared diner uniform with attached mini apron splattered with blood stains. Matching sailor cap also included so you\'ll be ready to serve your customers at this friendly neighborhood die-ner.</span>',
			'pageURL':'#product?costumes/kids/girls/waitress-zombie',
			'imgURL':'assets/imgs/product-imgs/costumes/kids/girls/waitress-zombie.png',
			'priceThen':'$999',
			'priceNow':'$0.99',
		},
		'costumes/kids/boys/skeleton': {
			'productName':'Skeleton',
			'productDescription':'<span>Make no bones about it – this kids skeleton Halloween costume is as scary as it looks! Skeletons are a mainstay on the Halloween scene, but it’s easy to forget them among the more popular vampires, werewolves, and demons. But this Halloween, your child will stand out in a sea of common creatures with this skeleton costume.</span><span>Jumping out of closets, rising from the grave, terrorizing the town – these are just a few of the activities skeletons enjoy. From the big screen to the small screen and to the pages of your favorite book, skeletons always make for a fun and interesting character. Some of them have their own sob stories and others are just mindless henchman for the big baddie, but either way, they know what it takes to steal a scene.</span><span>You won\'t be the usual bag of bones when you wear this Kids Skeleton Costume. This is a frightening costume for kids that won\'t make them look like the typical werewolf or zombie. This costume covers you from head to toe and is a unique way to scare their friends (and maybe a few adults) this Halloween. The 100% polyester black bodysuit has latex bones covering the exterior. The included hood has a skull face on it with black mesh so they can easily see. Cover up the last remaining bits of their former human self with the black boot covers and matching skeleton gloves. Before you know it, your child will be ready to haunt the neighborhood in their full skeleton costume!</span>',
			'pageURL':'#product?costumes/kids/boys/skeleton',
			'imgURL':'assets/imgs/product-imgs/costumes/kids/boys/skeleton.jpg',
			'priceThen':'$666',
			'priceNow':'$0.99',
		},
		'costumes/adult/women/broken-china-doll': {
			'productName':'Broken China Doll',
			'productDescription':'<span>Nothing\'s creepier than a shattered doll, and in the Broken China Doll Adult Women\'s Costume you\'ll be quite a fright. Features black dress with patchwork details and stripe pattern, matching bow and lifelike shattered tights.	</span><span>● Wig, socks and shoes not included</span><span>● Dress and Choker: 100% Polyester</span><span>● Hair Bow/Clip- 60%, 40% Plastic</span><span>● Fabric- 100% Knit Polyester</span><span>● Tights: 95% Nylon, 5% Spandex</span><span>● Dress- Hand Wash Separately In Cold Water, Only Non-Chlorine Bleach When Needed, Line Dry Cool Iron If Necessary</span><span>● Tights- Hand Wash In Cold Water, Line Dry or Lay Flat to Dry</span>',
			'pageURL':'#product?costumes/adult/women/broken-china-doll',
			'imgURL':'assets/imgs/product-imgs/costumes/adult/women/broken-china-doll.jpg',
			'priceThen':'$920',
			'priceNow':'$0.99',
		},
		'costumes/kids/girls/voodoo-doll': {
			'productName':'Voodoo Doll',
			'productDescription':'<span>So we\'ve always wondered about this costume. As a voodoo doll, is someone else controlling you with a smaller version of a doll dressed as you who is already dressed as a voodoo doll? Or are you dressed as a life-sized voodoo doll of somebody else so someone can use you to control the other person? Do you just control yourself dressed as a voodoo doll of someone else and control that someone else? Phew! That\'s way too deep for us!Let\'s leave the complexities behind and just take this dress at face value: a cute and delightfully creepy costume look. There\'s a ton of ways that you could customize your costume experience when you go in this look. You could enhance the look by using some makeup on your arms and legs to make it look like you were sewn together. You could add a terrifying mask to complete your mysterious style, and you could even carry around some over sized pins to let your friends "poke" you.</span><span>And as for your story, it\'s totally up to you. Maybe you could be a doll that somebody else has the controls for. Or maybe get a bunch of friends together and be a bunch of scary little dolls who somehow escaped from a misfit toy shop. Whatever kind of ritualistic creation you\'d like to be, just grab some black heels and maybe a pair of torn up or fishnet stockings along with all the black and white makeup you own. Just, whatever you do, don\'t take any pieces of our hair and try to control us!</span>',
			'pageURL':'#product?costumes/kids/girls/voodoo-doll',
			'imgURL':'assets/imgs/product-imgs/costumes/kids/girls/voodoo-doll.jpg',
			'priceThen':'$930',
			'priceNow':'$0.99',
		},
		'costumes/kids/boys/mummy': {
			'productName':'Mummy',
			'productDescription':'<span>If you\'re ready to get out of the the sarcophagus you\'re going to want make sure that you have the right threads, and this costume will provide the perfect look. You\'ll really be able to terrify the neighborhood with this mummy costume! It\'s an exclusive look you won\'t find anywhere else. It looks ragged, but don\'t worry, it\'s supposed to!</span>',
			'pageURL':'#product?costumes/kids/boys/mummy',
			'imgURL':'assets/imgs/product-imgs/costumes/kids/boys/mummy.jpg',
			'priceThen':'$240',
			'priceNow':'$0.99',
		},
		'costumes/adult/women/classic-witch': {
			'productName':'Classic Witch',
			'productDescription':'<span>Become a storybook favorite in our Classic Witch Costume. Affordable Classic Witch Costume features a tie-back black dress with sawtooth hem and sleeves. Witch hat and broom sold separately.</span>',
			'pageURL':'#product?costumes/adult/women/classic-witch',
			'imgURL':'assets/imgs/product-imgs/costumes/adult/women/classic-witch.jpg',
			'priceThen':'$260',
			'priceNow':'$0.99',
		},
		'costumes/adult/men/pyramid-head': {
			'productName':'Pyramid Head',
			'productDescription':'<span>"In my restless dreams,</span><span>I see that town.</span><span>Silent Hill.</span><span>You promised me you\'d take me there again someday.</span><span>But you never did.</span><span>Well, I\'m alone there now...</span><span>In our \'special place\'...</span><span>Waiting for you..."</span>',
			'pageURL':'#product?costumes/adult/men/pyramid-head',
			'imgURL':'assets/imgs/product-imgs/costumes/adult/men/pyramid-head.jpg',
			'priceThen':'$380',
			'priceNow':'$0.99',
		},
		//replicated 1
		'costumes/adult/women/blood-splatter-dresss': {
			'productName':'Blood Splatter Dress',
			'productDescription':'<span>What would Halloween be without a blood splatter dress? We\'ve done the messy work and created this simple white skater dress with adjustable spaghetti straps and an allover blood splatter pattern. You just wear it and look creepy-cute.</span><span>● 95% polyester; 5% rayon</span><span>● Wash cold; dry flat</span><span>● Approx. 33" from shoulder to hem</span><span>● Imported</span>',
			'pageURL':'#product?costumes/adult/women/blood-splatter-dress',
			'imgURL':'assets/imgs/product-imgs/costumes/adult/women/blood-splatter-dress.jpg',
			'priceThen':'$172',
			'priceNow':'$0.99',
		},
		'costumes/adult/women/red-riding-hoods': {
			'productName':'Red Riding Hood',
			'productDescription':'<span>It\'s a good thing Grandma can\'t see too well. Otherwise, I\'m sure she\'d give you quite a talking-to about walking through the woods alone in this Sexy Red Riding Hood Costume! Don\'t worry though. You\'re sure to tame the heart of any beast in this sexy costume.</span><span>● 90% polyester/10% cotton gingham, broadcloth & knit; 100% polyester satin</span><span>● Styled as peasant blouse w/ skirt & corset; back zipper</span><span>● Elastic edging in neckline & sleeves of white broadcloth blouse portion</span><span>● Red & white gingham high-waisted skirt has built-in lace-edged petticoat</span><span>● Black interlock corset panels have ribbon lacing</span>',
			'pageURL':'#product?costumes/adult/women/red-riding-hood',
			'imgURL':'assets/imgs/product-imgs/costumes/adult/women/red-riding-hood.jpg',
			'priceThen':'$580',
			'priceNow':'$0.99',
		},
		'costumes/kids/girls/ancient-reapers': {
			'productName':'Ancient Reaper',
			'productDescription':'<span>Every young kid has a slightly different goal when it comes to their Halloween outfit. Some kids want to haul in a whole truck load of candy while trick-or-treating. Other kids just want a chance to dress up like their favorite superhero or movie character. Your kid? He really just wants to scare the pants off of everyone that he crosses paths with! We think that\'s a pretty good goal for wearing a costume, which is why we carry some pretty creepy outfits...</span><span>Introducing this Ancient Reaper Costume for kids. With a ghastly appearance based on the personification of Death himself, this outfit has no problem giving every kid in the block a good chill. The costume features a skull mask along with a hooded robe to complete the frightening appearance, so your child will be ready to harvest the souls of the living, or at the very least, make them run in fear!</span><span>● Child Ancient Reaper Costume</span><span>● 100% polyester brushed flannel robe w/ attached cowl, Velcro closure on back</span><span>● Robe has a worn-leather look and tattered edges</span><span>● Fabric belt has worn-leather appearance, self ties as desired</span><span>● Vinyl half mask has molded and painted details and strange occult markings, elastic security band</span>',
			'pageURL':'#product?costumes/kids/girls/ancient-reaper',
			'imgURL':'assets/imgs/product-imgs/costumes/kids/girls/ancient-reaper.jpg',
			'priceThen':'$111',
			'priceNow':'$0.99',
		},
		'costumes/adult/men/butcher-pigs': {
			'productName':'Butcher Pig',
			'productDescription':'<span>How would you feel if all of your family and friends got turned into pork chops or brats? You\'d probably go a little crazy and might consider a murderous spree, just like this pig has done. This Butcher Pig Costume is a frightening costume for adults to wear. This is one piggie that went \'wee, wee, wee\' all the way to the market.</span>',
			'pageURL':'#product?costumes/adult/men/butcher-pig',
			'imgURL':'assets/imgs/product-imgs/costumes/adult/men/butcher-pig.jpg',
			'priceThen':'$330',
			'priceNow':'$0.99',
		},
		'costumes/adult/women/waitress-zombies': {
			'productName':'Waitress Zombie',
			'productDescription':'<span>Today\'s specials include toenail soup, spaghetti brains, and chopped livers! Bloody Waitress Adult Womens Zombie Costume is complete with blue classic collared diner uniform with attached mini apron splattered with blood stains. Matching sailor cap also included so you\'ll be ready to serve your customers at this friendly neighborhood die-ner.</span>',
			'pageURL':'#product?costumes/adult/women/waitress-zombie',
			'imgURL':'assets/imgs/product-imgs/costumes/adult/women/waitress-zombie.jpg',
			'priceThen':'$999',
			'priceNow':'$0.99',
		},
		'costumes/adult/men/doctor-zombies': {
			'productName':'Doctor Zombie',
			'productDescription':'<span>"Pass me the scalpel! I am going to make an incision around the cranium. I am going in for the brains...because I need a tasty snack!" This Zombie Doctor Costume will make you look like an undead surgeon that is just chomping at the bit for his next bloody meal. This is a scary and unique zombie costume for adults.</span>',
			'pageURL':'#product?costumes/adult/men/doctor-zombie',
			'imgURL':'assets/imgs/product-imgs/costumes/adult/men/doctor-zombie.jpg',
			'priceThen':'$669',
			'priceNow':'$0.99',
		},
		'costumes/adult/women/voodoo-dolls': {
			'productName':'Voodoo Doll',
			'productDescription':'<span>So we\'ve always wondered about this costume. As a voodoo doll, is someone else controlling you with a smaller version of a doll dressed as you who is already dressed as a voodoo doll? Or are you dressed as a life-sized voodoo doll of somebody else so someone can use you to control the other person? Do you just control yourself dressed as a voodoo doll of someone else and control that someone else? Phew! That\'s way too deep for us!Let\'s leave the complexities behind and just take this dress at face value: a cute and delightfully creepy costume look. There\'s a ton of ways that you could customize your costume experience when you go in this look. You could enhance the look by using some makeup on your arms and legs to make it look like you were sewn together. You could add a terrifying mask to complete your mysterious style, and you could even carry around some over sized pins to let your friends "poke" you.</span><span>And as for your story, it\'s totally up to you. Maybe you could be a doll that somebody else has the controls for. Or maybe get a bunch of friends together and be a bunch of scary little dolls who somehow escaped from a misfit toy shop. Whatever kind of ritualistic creation you\'d like to be, just grab some black heels and maybe a pair of torn up or fishnet stockings along with all the black and white makeup you own. Just, whatever you do, don\'t take any pieces of our hair and try to control us!		</span><span>● 97% Cotton 3% Spandex</span><span>● Tan dress with sprayed on black paint details</span><span>● Printed on heart with skull pins in it on the chest</span><span>● Sewn on black stitches and snake</span><span>● Attached white under skirt with red mesh trim</span><span>● Stuffed Voodoo doll accessory</span><span>● Black wristband with chain attached to the doll</span>',
			'pageURL':'#product?costumes/adult/women/voodoo-doll',
			'imgURL':'assets/imgs/product-imgs/costumes/adult/women/voodoo-doll.jpg',
			'priceThen':'$330',
			'priceNow':'$0.99',
		},
		'costumes/kids/boys/demented-doctors': {
			'productName':'Demented Doctor',
			'productDescription':'<span>This demented doctor is ready to see you now, you may not want to see him! This is a horrifying costume for kids to wear on Halloween.</span><span>● 100% polyester gabardine</span><span>● Blood-spattered white robe fastens w/ Velcro at center back</span><span>● Front has bloody hand prints & five non-functional vinyl straps w/ plastic buckles</span><span>● Molded vinyl mask has stringy synthetic hair attached</span><span>● Eye & nose slits for vision & breathing, elastic band for security</span>',
			'pageURL':'#product?costumes/kids/boys/demented-doctor',
			'imgURL':'assets/imgs/product-imgs/costumes/kids/boys/demented-doctor.jpg',
			'priceThen':'$750',
			'priceNow':'$0.99',
		},
		'costumes/kids/girls/cemetary-brides': {
			'productName':'Cemetary Bride',
			'productDescription':'<span>Here comes the bride…back from the dead! This cemetery bride costume is the perfect twist on the classic bride costume, with a beautiful yet haunting dress and veil, making it the perfect combination of gorgeous and ghostly!</span>',
			'pageURL':'#product?costumes/kids/girls/cemetary-bride',
			'imgURL':'assets/imgs/product-imgs/costumes/kids/girls/cemetary-bride.png',
			'priceThen':'$779',
			'priceNow':'$0.99',
		},
		'costumes/adult/women/regans': {
			'productName':'Regan',
			'productDescription':'<span>Designed off the infamous night gown that regan wears in the classic horror film.</span><span>● 100% Polyester</span><span>● Machine Wash</span><span>● This costume features lace detailing</span><span>● This costume imitation vomit stains</span><span>● Mask not included</span>',
			'pageURL':'#product?costumes/adult/women/regan',
			'imgURL':'assets/imgs/product-imgs/costumes/adult/women/regan.jpg',
			'priceThen':'$230',
			'priceNow':'$0.99',
		},
		'costumes/kids/boys/exploded-guts-zombies': {
			'productName':'Exploded Guts Zombie',
			'productDescription':'<span>Get ready to run! If this zombie is after you you\'re done for! The gruesome spandex suit features gruesome rotting flesh, and bloody exploding organ detailing. This breathable, see-through, and drink through suit is not for the squeamish!</span>',
			'pageURL':'#product?costumes/kids/boys/exploded-guts-zombie',
			'imgURL':'assets/imgs/product-imgs/costumes/kids/boys/exploded-guts-zombie.jpg',
			'priceThen':'$550',
			'priceNow':'$0.99',
		},
		'costumes/kids/girls/ghosts': {
			'productName':'Ghost',
			'productDescription':'<span>A faceless ghoul that carries a chain and lantern? That sounds spooktacular! If you want to go for the ultimate creepy look, this Child Spooky Ghost Costume is the way to go. You can lurk in the shadows and jump out at people. Keep a scream tally and take note of all the people who shriek in terror!</span><span>● 100% polyester</span><span>● Robe has zipper down the back, layer of fringed white over top</span><span>● Attached foam polyurethane head w/ attached black mask</span><span>● Foam black gloves</span>',
			'pageURL':'#product?costumes/kids/girls/ghost',
			'imgURL':'assets/imgs/product-imgs/costumes/kids/girls/ghost.jpg',
			'priceThen':'$279',
			'priceNow':'$0.99',
		},
		'costumes/adult/men/ghosts': {
			'productName':'Ghost',
			'productDescription':'<span>When ever you enter a haunted house you better keep your eyes open. Because somewhere lurking in the shadows there is always a spirit ready to jump out and scare anyone walking into their home. Ghosts hate it when uninvited guests come in unannounced. You see, it is a very little known fact that ghosts love politeness. They only are tempted to scare when they feel there is someone who is impolite around them. So next time you plan on going into a haunted house be sure to send a letter before hand saying what time you\'ll be arriving.</span>',
			'pageURL':'#product?costumes/adult/men/ghost',
			'imgURL':'assets/imgs/product-imgs/costumes/adult/men/ghost.jpg',
			'priceThen':'$369',
			'priceNow':'$0.99',
		},
		'costumes/kids/boys/ghosts': {
			'productName':'Ghost',
			'productDescription':'<span>A faceless ghoul that carries a chain and lantern? That sounds spooktacular! If you want to go for the ultimate creepy look, this Child Spooky Ghost Costume is the way to go. You can lurk in the shadows and jump out at people. Keep a scream tally and take note of all the people who shriek in terror!</span><span>● 100% polyester</span><span>● Robe has zipper down the back, layer of fringed white over top</span><span>● Attached foam polyurethane head w/ attached black mask</span><span>● Foam black gloves</span>',
			'pageURL':'#product?costumes/kids/boys/ghost',
			'imgURL':'assets/imgs/product-imgs/costumes/kids/boys/ghost.jpg',
			'priceThen':'$110',
			'priceNow':'$0.99',
		},
		'costumes/kids/girls/haunted-beautys': {
			'productName':'Haunted Beauty',
			'productDescription':'<span>There\'s always a story behind a haunted spirit that still roams this world. Little girls will love making up their own personal ghostly tale when they don this haunted beauty costume. She\'ll love the eerie feeling that she\'ll get when she wears the mesh hood and shackled chains. An idea for a spooky story will pop into her mind as soon as she puts on this ghostly costume.</span><span>● 100% polyester fabric and knit mesh</span><span>● Sleeveless pullover dress has elastic waistband, knit mesh overlay</span><span>● Shrug has long mesh sleeves with hanging fringe; hood fastens with Velcro at neck</span><span>● Mesh veil can be worn on top of hood or pulled down to cover face</span><span>● 6\' long plastic chain can be threaded through ribbon loops in side seams of dress</span>',
			'pageURL':'#product?costumes/kids/girls/haunted-beauty',
			'imgURL':'assets/imgs/product-imgs/costumes/kids/girls/haunted-beauty.jpg',
			'priceThen':'$229',
			'priceNow':'$0.99',
		},
		'costumes/kids/boys/ancient-reapers': {
			'productName':'Ancient Reaper',
			'productDescription':'<span>Every young kid has a slightly different goal when it comes to their Halloween outfit. Some kids want to haul in a whole truck load of candy while trick-or-treating. Other kids just want a chance to dress up like their favorite superhero or movie character. Your kid? He really just wants to scare the pants off of everyone that he crosses paths with! We think that\'s a pretty good goal for wearing a costume, which is why we carry some pretty creepy outfits...</span><span>Introducing this Ancient Reaper Costume for kids. With a ghastly appearance based on the personification of Death himself, this outfit has no problem giving every kid in the block a good chill. The costume features a skull mask along with a hooded robe to complete the frightening appearance, so your child will be ready to harvest the souls of the living, or at the very least, make them run in fear!</span><span>● Child Ancient Reaper Costume</span><span>● 100% polyester brushed flannel robe w/ attached cowl, Velcro closure on back</span><span>● Robe has a worn-leather look and tattered edges</span><span>● Fabric belt has worn-leather appearance, self ties as desired</span><span>● Vinyl half mask has molded and painted details and strange occult markings, elastic security band</span>',
			'pageURL':'#product?costumes/kids/boys/ancient-reaper',
			'imgURL':'assets/imgs/product-imgs/costumes/kids/boys/ancient-reaper.jpg',
			'priceThen':'$700',
			'priceNow':'$0.99',
		},
		'costumes/adult/men/grave-ghouls': {
			'productName':'Grave Ghoul',
			'productDescription':'<span>The Grave Ghoul is kind of a nasty guy. Wander too far into the graveyard at night, and he\'ll grasp you in his clutches and drag you to hell with his chains. Even worse, if you\'re out of he reach, he can reanimate his minions and send an undead army marching towards your front door. Our advice: Just avoid graveyards all together!</span>',
			'pageURL':'#product?costumes/adult/men/grave-ghoul',
			'imgURL':'assets/imgs/product-imgs/costumes/adult/men/grave-ghoul.jpg',
			'priceThen':'$369',
			'priceNow':'$0.99',
		},
		'costumes/kids/girls/homecoming-horrors': {
			'productName':'Homecoming Horror',
			'productDescription':'<span>It always seems to start the same way: an innocent school dance, the most popular couple in school, and a crazy dare. But before you know it, zombies (or other assorted monsters/demons/devils) have taken over and everyone is running for the exits! But zombies and other undead creatures have come a long way since bad 80’s horror movies – it seems as though zombies (of the fictional variety) are everywhere we turn. From hit television shows to mainstream films, zombies have truly made their mark on pop culture.</span><span>Beyond just fictional zombies and the undead, people are even preparing for a real zombie apocalypse. Now, whether or not a zombie takeover is imminent, you can still get in on the fun with this Homecoming Horror Costume! From the 100% polyester dress with printed blood stains to the ‘Drop Dead Gorgeous’ sash, this zombie costume will have you ready for your next theme party or for Halloween. No matter what, don’t forget the tiara with connected knife to give you a look that is truly undead.</span><span>Let’s be honest, we’ve all thought about become Queen Bee at some point in our lives and what better time than a high school dance or Halloween? You’ll be able to take over your next event with your lifeless eyes and ghostly appearance – everyone else will be running for the halls! Become the homecoming queen at Zombie High in this Homecoming Horror Costume! Add glittery shoes and zombie makeup to complete your look and you will rule the school – and not just because you are popular!</span><span>● Homecoming Horror Costume</span><span>● 100% polyester dress w/ 74% polyester/26% metallic sequin knit overlay</span><span>● Sleeveless pullover tank dress has jagged hemline, longer in back</span><span>● Printed "blood stains" on skirt</span><span>● Sequin waist sash fastens w/ Velcro</span><span>● Sash has printed blood stains & "Drop Dead Gorgeous" in black script</span><span>● Silver sequined felt tiara fastened to plastic headband w/ knife handle on one side & blade tip on other side</span>',
			'pageURL':'#product?costumes/kids/girls/homecoming-horror',
			'imgURL':'assets/imgs/product-imgs/costumes/kids/girls/homecoming-horror.jpg',
			'priceThen':'$199',
			'priceNow':'$0.99',
		},
		'costumes/adult/men/hellraiser-pinheads': {
			'productName':'Hellraiser Pinhead',
			'productDescription':'<span>A demon to some, angel to others, pain for pleasure is Hellraiser\'s game. The 1987 Hellraiser remains one of the scariest and horrific movies in history and for good reason. With their torturous looks and gothic garb, a Hellraiser costume is always a fan favorite and one that will send chills up the spines of anyone nearby. The mysterious and violent leader is represented with our authentic Pinhead costumes. Complete with black shiny cloak, we provide a Pinhead mask to recreate his signature look without the need or pain of actually nailing pins to your head. His gang of Centibytes Hellraiser costumes are always close at hand. With their grotesque faces and gruesome weapons, Chatterer and Butterball Centibyte costumes are never to be forgotten. And the root cause of all this evil? The perfect horror accessory, a Hellraiser mystery box. Fortunately, hooks don\'t launch from it but never fear, we have an assortment of meat hooks, blood, and weapons belts that will complete your Hellraiser costume look. So suit up, tear off some flesh, and get gory with our great Hellraiser and Centibyte costumes! They\'ll tear your soul apart!</span>',
			'pageURL':'#product?costumes/adult/men/hellraiser-pinhead',
			'imgURL':'assets/imgs/product-imgs/costumes/adult/men/hellraiser-pinhead.jpg',
			'priceThen':'$399',
			'priceNow':'$0.99',
		},
		'costumes/adult/women/morbid-girls': {
			'productName':'Morbid Girl',
			'productDescription':'<span>Get creepy, kooky and totally girly in this little back dress! Black velvet dress with contrasting white collar, three white cloth buttons at the neckline and back single cloth button closure. Don\'t worry: ooky is definitely not a word that will be used to describe you while you\'re wearing it. Throw on your knee socks and saddle shoes and you\'re ready to go!</span><span>● 97% polyester</span><span>● 3% spandexWash cold</span><span>● dry flat</span><span>● 35" from shoulder to hem</span><span>● Imported</span>',
			'pageURL':'#product?costumes/adult/women/morbid-girl',
			'imgURL':'assets/imgs/product-imgs/costumes/adult/women/morbid-girl.jpg',
			'priceThen':'$880',
			'priceNow':'$0.99',
		},
		'costumes/kids/boys/headless-boys': {
			'productName':'Headless Boy',
			'productDescription':'<span>Being headless is never easy. Clothes just don\'t fit right. You can never wear a hoodie or a baseball cap. Plus, all that coagulating blood is messy. No one wants to stand too close to you for fear you will drip on them. They say kids can be so mean, but try walking down a school hallway without a head. If you thought someone calling you \'Brace Face\' or \'Four Eyes\' was bad, try listening to \'Dead Head\' and \'Stubby Neck Freak\' all day long.</span><span>And, don\'t even get me started on trying to eat lunch in the cafeteria. Never mind that a headless kid doesn\'t actually need to eat anymore -- what, with being the living dead and all. It\'s hard to hold a lunch tray, maneuver through the line, and carry your head all at the same time. Plus, the whole running joke that the 8th graders have about you and the infamous \'Mystery Meat\' selection that the lunch ladies always serve up at the end of the month is enough to make you want to crawl into the nearest unoccupied grave. Sometimes it\'s easier to just skip lunch altogether, but recess is not much better. The headless kid is always the last one picked for teams, even the guy with the asthma inhaler gets picked before you.</span><span>That\'s one of the reasons this robe is so awesome. It\'s long and flowing with a harness underneath to support everything. It may not be perfect, but helps you blend in with the living a little better.</span><span>● 100% polyester robe w/ hole for head to poke out of</span><span>● Harness is hidden under robe</span><span>● Elastic bands go underneath armpit and Velcro to plastic neck to hold up harness</span><span>● Neck & shoulders is paited red to look like dripping blood</span>',
			'pageURL':'#product?costumes/kids/boys/headless-boy',
			'imgURL':'assets/imgs/product-imgs/costumes/kids/boys/headless-boy.jpg',
			'priceThen':'$710',
			'priceNow':'$0.99',
		},
		'costumes/adult/men/killer-clowns': {
			'productName':'Killer Clown',
			'productDescription':'<span>Once upon a time, there was a colorful and delightful clown. The clown delighted in telling jokes, tripping over his own massive feet for a good laugh, making balloon animals, and practicing any number of amazing parlor tricks. He traveled with a circus for a while, picking up some excellent fashion tips, and, naturally, did a few kids’ birthday parties on the side in order to make a few extra bucks… which, of course, he donated to the local children’s hospital. His heart stirred with the desire to bring joy to every living being…</span><span>But, not all people are as kind as this generous clown. Some people hate clowns. And, so, it came to one performance where the kindly clown was making one of the most intricate balloon creatures ever before seen—a true masterpiece… a virtually animated, child-sized bunny—when the tragedy occurred. A spectator jeered and threw a rock at the poor clown. Striking the poor clown harsh on the skull, the whole crowd heard the crack… and they laughed. Well, a serious head injury is one thing, but the emotional crippling of cruel laughter gives birth to a true monster.</span><span>And that is your story, my friend. How you were born into this world of horror and murder as the Killer Clown. Wear your white and black, half polka dot, half striped polyester satin jumpsuit and show your deserving victims your horrific and injured face, a wide black and insidious smile and the bleeding red scar on your skull, all framed by the a black ruffle at your neck. Gone are your days of brilliant color and happy smiles. Now are the nights of screams! (Hopefully your weapon of choice will only be terrible puns, though.)</span>',
			'pageURL':'#product?costumes/adult/men/killer-clown',
			'imgURL':'assets/imgs/product-imgs/costumes/adult/men/killer-clown.jpg',
			'priceThen':'$299',
			'priceNow':'$0.99',
		},
		'costumes/adult/women/monster-brides': {
			'productName':'Monster Bride',
			'productDescription':'<span>● This item\'s color may vary due to inherent manufacturing variations or your computer monitor\'s color settings. The item you receive will be identical or substantially similar to the item pictured in this listing.</span>',
			'pageURL':'#product?costumes/adult/women/monster-bride',
			'imgURL':'assets/imgs/product-imgs/costumes/adult/women/monster-bride.jpg',
			'priceThen':'$800',
			'priceNow':'$0.99',
		},
		'costumes/kids/boys/headless-vampire.htmls': {
			'productName':'Headless Vampire',
			'productDescription':'<span>This Halloween season, your child can scare all of the villagers while bringing the legend of Sleepy Hollow to life in this Kids Headless Horseman Costume! The name Ichabod Crane is inextricably linked in literature with the Headless Horseman, and a few people who haven\'t read Washington Irving\'s actual story may mistakenly think that Crane WAS the Headless Horseman. He wasn\'t. Ichabod was the schoolmaster in the fictional village of Sleepy Hollow, and he encountered the Headless Horseman, believed to be the ghost of a Hessian mercenary from the Revolutionary War, while riding late at night back to the village from a party at an outlying farm. He had made a proposal of marriage to the farmer\'s daughter, and had been rejected.He was never seen in Sleepy Hollow again. The next morning his unsaddled horse was found wandering, the saddle trampled, and a smashed pumpkin lying alongside Crane\'s hat beside the road.Wear this ensemble with your own black pants. And for a more realistic touch, carry one of our pumpkins as a prop. Everyone will want to escape this spooky creature whose head was blown off by a Revolutionary War cannonball!</span><span>● 100% polyester interlock and knit mesh</span><span>● Shirt/cape combo has ruffled lace ascot and elasticized lace sleeve cuffs</span><span>● Self-fabric waist ties allow fit adjustment</span><span>● Cape has stand-up collar and back Velcro tab fastener</span><span>● Inflatable shoulder pads support cape to cover head, held in place w/ elastic bands</span><span>● Mesh vest front allows limited vision</span><span>● Molded vinyl headpiece has realistic severed-neck details</span><span>● Also available in adult size</span>',
			'pageURL':'#product?costumes/kids/boys/headless-vampire',
			'imgURL':'assets/imgs/product-imgs/costumes/kids/boys/headless-vampire.jpg',
			'priceThen':'$777',
			'priceNow':'$0.99',
		},
		'costumes/kids/girls/living-dead-zombies': {
			'productName':'Living Dead Zombie',
			'productDescription':'<span>Zombie movies and cartoons have become a hit with both adults and kids alike. No longer are zombies just a boring trope in a scary movie, now they are taking center stage in both movies and television shows. Whether your child loves the classic movie zombies or the modern, more human-like zombies, they will love dressing up as a zombie this Halloween.</span><span>Kids zombie costumes come in all sizes and styles and this Kids Living Dead Zombie Costume is the perfect mix of the classic and modern zombie look. This costume comes complete with all of the gruesome details you’d expect from a classic zombie costume, but with enough modern comforts that they can move around easily on all of their Halloween adventures.</span><span>This kid’s zombie costume is a shirt and pants combo. The pants have an elastic waist for a comfortable fit and the top and pants have matching gray and black poly blend fabric. The molded chest piece attaches with Velcro at the shoulders and gives the costumes it’s from-the-grave look. Finally, the molded vinyl mask has slits for the eyes for clear vision and is held in place with an elastic strap. The gory details truly set this full zombie costume apart from the others.</span><span>Add black boots and gloves to complete the look. Your child will look like they just emerged from the crypt with this realistic costume. No need for any zombie makeup – this costume and mask combo has your child covered this Halloween or for a fun night out in the neighborhood!</span>',
			'pageURL':'#product?costumes/kids/girls/living-dead-zombie',
			'imgURL':'assets/imgs/product-imgs/costumes/kids/girls/living-dead-zombie.jpg',
			'priceThen':'$200',
			'priceNow':'$0.99',
		},
		'costumes/adult/women/marionettes': {
			'productName':'Marionette',
			'productDescription':'<span>Be everyone\'s favorite stringed puppet when you wear this Marionette Kit! The tan headband with attached cuffs will give you the perfect controlled puppet appearance you were going for!</span><span>● Materials: 100% polyester</span><span>● Wash/Care Instructions: Do not wash</span>',
			'pageURL':'#product?costumes/adult/women/marionette',
			'imgURL':'assets/imgs/product-imgs/costumes/adult/women/marionette.jpg',
			'priceThen':'$199',
			'priceNow':'$0.99',
		},
		'costumes/kids/boys/jasons': {
			'productName':'Jason',
			'productDescription':'<span>And you\'re back. I was wondering if I\'d ever see you again. Well, just be careful hunting down Camp Crystal Lake workers. They get stronger and more crafty every year. Oh, and did I ever tell you that I\'m sorry about what happened to your mom?</span><span>● 100% polyester</span><span>● Long sleeve shirt with screenprinted graphics such has exposed ribs and muscle and pockets</span><span>● Ties at back of the neck</span><span>● Matching forest green pants with an elastic waistband</span><span>● Tattered leg bottoms</span><span>● Vinyl half mask with eye and mouth holes</span><span>● Classic hockey mask with bloated, bloody skin</span><span>● Mask secures around head with elastic bands</span>',
			'pageURL':'#product?costumes/kids/boys/jason',
			'imgURL':'assets/imgs/product-imgs/costumes/kids/boys/jason.jpg',
			'priceThen':'$499',
			'priceNow':'$0.99',
		},
		'costumes/kids/girls/midnight-ghosts': {
			'productName':'Midnight Ghost',
			'productDescription':'<span>Every haunted house needs someone spooky to haunt it. But trying to get the right haunter can be a challenge in and of itself. We don\'t recommend trusting a poltergeist because they\'re too messy (nobody wants to have to pick up those pots and pans). Phantoms are out because they\'re just far too loud with all of the moaning and hullabaloo in the hallways. And frankly if you hire specters to do the haunting you\'re just not going to get your money\'s worth. The only supernatural force that should be in a home to scare the inhabitants are traditional ghosts. Ghosts get their work done in the scaring department and now your child can get on the spooky good fun with this Midnight Ghost costume. Get your little one this costume, and you\'ll be one step closer to getting that house haunted!</span>',
			'pageURL':'#product?costumes/kids/girls/midnight-ghost',
			'imgURL':'assets/imgs/product-imgs/costumes/kids/girls/midnight-ghost.jpg',
			'priceThen':'700',
			'priceNow':'$0.99',
		},
		'costumes/adult/men/leatherfaces': {
			'productName':'Leatherface',
			'productDescription':'<span>The Texas Chainsaw Massacre Leatherface Adult Costume includes mask with hair, apron with shirt and tie. Straight from the famous horror movie Texas Chainsaw Massacre.</span>',
			'pageURL':'#product?costumes/adult/men/leatherface',
			'imgURL':'assets/imgs/product-imgs/costumes/adult/men/leatherface.jpg',
			'priceThen':'$899',
			'priceNow':'$0.99',
		},
		'costumes/kids/boys/leatherfaces': {
			'productName':'Leatherface',
			'productDescription':'<span>If you drive too far off down the back roads of Texas you may find one of the worst monsters ever, Leatherface. What makes this murderous madman the worst is that he is completely human and does the worst things ever to others. So when you hear a chainsaw roar while you\'re in the Lone Star State be sure to run away from it right away or you\'ll end up a part of a Texas chainsaw massacre.Now your little one can be their favorite horror movie maniac in this great Leatherface costume. Just be sure to pick up one of our chainsaws to complete the costume.</span><span>● 100% Polyester</span><span>● Tan shirt with vertical green stripes and attached neck tie</span><span>● Attached long apron with jagged edges on the top and bottom</span><span>● Black stitches printed on the apron</span><span>● Foam mask made to look like decaying skin</span><span>● Red hair attached to the top of the mask</span>',
			'pageURL':'#product?costumes/kids/boys/leatherface',
			'imgURL':'assets/imgs/product-imgs/costumes/kids/boys/leatherface.jpg',
			'priceThen':'$120',
			'priceNow':'$0.99',
		},
		'costumes/kids/girls/mummys': {
			'productName':'Mummy',
			'productDescription':'<span>If you\'re ready to get out of the the sarcophagus you\'re going to want make sure that you have the right threads, and this costume will provide the perfect look. You\'ll really be able to terrify the neighborhood with this mummy costume! It\'s an exclusive look you won\'t find anywhere else. It looks ragged, but don\'t worry, it\'s supposed to!</span>',
			'pageURL':'#product?costumes/kids/girls/mummy',
			'imgURL':'assets/imgs/product-imgs/costumes/kids/girls/mummy.jpg',
			'priceThen':'$300',
			'priceNow':'$0.99',
		},
		'costumes/adult/men/mummys': {
			'productName':'Mummy',
			'productDescription':'<span>If you\'re ready to get out of the the sarcophagus you\'re going to want make sure that you have the right threads, and this costume will provide the perfect look. You\'ll really be able to terrify the neighborhood with this mummy costume! It\'s an exclusive look you won\'t find anywhere else. It looks ragged, but don\'t worry, it\'s supposed to!</span>',
			'pageURL':'#product?costumes/adult/men/mummy',
			'imgURL':'assets/imgs/product-imgs/costumes/adult/men/mummy.jpg',
			'priceThen':'$777',
			'priceNow':'$0.99',
		},
		'costumes/adult/women/high-school-zombie-girls': {
			'productName':'Highschool Zombie Girl',
			'productDescription':'<span>Relive high school when you wear the High School Zombie Girl adult womens costume. The tattered and blood-spattered gray, white and red uniform-inspired jacket of this zombie costume features an attached shirt and comes complete with a tie and plaid skirt.</span><span>● Materials/ Fabrics- knitted and woven polyester</span><span>● Wash/Care Instructions- dry clean only</span>',
			'pageURL':'#product?costumes/adult/women/high-school-zombie-girl',
			'imgURL':'assets/imgs/product-imgs/costumes/adult/women/high-school-zombie-girl.jpg',
			'priceThen':'$777',
			'priceNow':'$0.99',
		},
		'costumes/kids/girls/skeletons': {
			'productName':'Skeleton',
			'productDescription':'<span>Make no bones about it – this kids skeleton Halloween costume is as scary as it looks! Skeletons are a mainstay on the Halloween scene, but it’s easy to forget them among the more popular vampires, werewolves, and demons. But this Halloween, your child will stand out in a sea of common creatures with this skeleton costume.</span><span>Jumping out of closets, rising from the grave, terrorizing the town – these are just a few of the activities skeletons enjoy. From the big screen to the small screen and to the pages of your favorite book, skeletons always make for a fun and interesting character. Some of them have their own sob stories and others are just mindless henchman for the big baddie, but either way, they know what it takes to steal a scene.</span><span>You won\'t be the usual bag of bones when you wear this Kids Skeleton Costume. This is a frightening costume for kids that won\'t make them look like the typical werewolf or zombie. This costume covers you from head to toe and is a unique way to scare their friends (and maybe a few adults) this Halloween. The 100% polyester black bodysuit has latex bones covering the exterior. The included hood has a skull face on it with black mesh so they can easily see. Cover up the last remaining bits of their former human self with the black boot covers and matching skeleton gloves. Before you know it, your child will be ready to haunt the neighborhood in their full skeleton costume!</span>',
			'pageURL':'#product?costumes/kids/girls/skeleton',
			'imgURL':'assets/imgs/product-imgs/costumes/kids/girls/skeleton.jpg',
			'priceThen':'$888',
			'priceNow':'$0.99',
		},
		'costumes/adult/men/pestilences': {
			'productName':'Pestilence',
			'productDescription':'<span>It is said that through out the ages an evil forces has made it\'s way to our world and brought with it disease and destruction. That force is known as Pestilence and he is responsible for every black death, pandemic, and all other forms outbreak of diseases. Pestilence will not stop until the world becomes infected with every form of flu and contamination ever. Now you can look like this fowl demon who loves to spread plague and infection when you put on this high quality Pestilence FX Costume. You\'ll be set to terrify all that see you and especially those who have a fear of the common cold!</span>',
			'pageURL':'#product?costumes/adult/men/pestilence',
			'imgURL':'assets/imgs/product-imgs/costumes/adult/men/pestilence.jpg',
			'priceThen':'$123',
			'priceNow':'$0.99',
		},
		'costumes/adult/women/darling-spellcasters': {
			'productName':'Darling Spellcaster',
			'productDescription':'<span>Show that you can be both sweet and wicked with this Darling Spellcaster costume! With a dress that ends a little below the knees and features a glitter skirt, as well as a classic witch hat and matching belt, this costume is perfect for any sweet spellcaster!</span><span>● Material: Polyester, nylon</span><span>● Care: Hand wash</span><span>● Imported</span><span>● Note: Broom, gloves, and shoes sold separately</span>',
			'pageURL':'#product?costumes/adult/women/darling-spellcaster',
			'imgURL':'assets/imgs/product-imgs/costumes/adult/women/darling-spellcaster.jpg',
			'priceThen':'$345',
			'priceNow':'$0.99',
		},
		'costumes/kids/boys/living-dead-zombies': {
			'productName':'Living Dead Zombie',
			'productDescription':'<span>Zombie movies and cartoons have become a hit with both adults and kids alike. No longer are zombies just a boring trope in a scary movie, now they are taking center stage in both movies and television shows. Whether your child loves the classic movie zombies or the modern, more human-like zombies, they will love dressing up as a zombie this Halloween.</span><span>Kids zombie costumes come in all sizes and styles and this Kids Living Dead Zombie Costume is the perfect mix of the classic and modern zombie look. This costume comes complete with all of the gruesome details you’d expect from a classic zombie costume, but with enough modern comforts that they can move around easily on all of their Halloween adventures.</span><span>This kid’s zombie costume is a shirt and pants combo. The pants have an elastic waist for a comfortable fit and the top and pants have matching gray and black poly blend fabric. The molded chest piece attaches with Velcro at the shoulders and gives the costumes it’s from-the-grave look. Finally, the molded vinyl mask has slits for the eyes for clear vision and is held in place with an elastic strap. The gory details truly set this full zombie costume apart from the others.</span><span>Add black boots and gloves to complete the look. Your child will look like they just emerged from the crypt with this realistic costume. No need for any zombie makeup – this costume and mask combo has your child covered this Halloween or for a fun night out in the neighborhood!</span>',
			'pageURL':'#product?costumes/kids/boys/living-dead-zombie',
			'imgURL':'assets/imgs/product-imgs/costumes/kids/boys/living-dead-zombie.jpg',
			'priceThen':'$540',
			'priceNow':'$0.99',
		},
		'costumes/adult/men/swamp-nates': {
			'productName':'Swamp Nate',
			'productDescription':'<span>Meet Nate. He\'s a successful young zombie bachelor living it up in the swamps. He enjoys long walks on the beach, holding hands, deep conversations and moonlit nights. He\'s been looking for love in all the wrong places and is ready to date a girl who\'s ready to get serious. He\'d like someone who can appreciate his special sense of style, which includes things like ripped up tweed jackets, splattered blood on all of his clothes and seaweed on everything. He wears his intestines on the outside and isn\'t ashamed to admit it. If you\'re interested in being his forever girl and you\'re not afraid of eating brains, give him a call to meet your destiny.</span>',
			'pageURL':'#product?costumes/adult/men/swamp-nate',
			'imgURL':'assets/imgs/product-imgs/costumes/adult/men/swamp-nate.jpg',
			'priceThen':'$900',
			'priceNow':'$0.99',
		},
		'costumes/kids/girls/zombie-school-girls': {
			'productName':'Zombie School Girl',
			'productDescription':'<span>School\'s a real drag. With all the staggering through the halls and mindless groaning, it almost makes you feel a little bit like a...ZOMBIE! At least you don\'t go around feasting on the brains of other classmates, but if you want to start getting into that sort of thing, we can help transform you into one of the undead with this gory, yet strangely cute costume.</span>',
			'pageURL':'#product?costumes/kids/girls/zombie-school-girl',
			'imgURL':'assets/imgs/product-imgs/costumes/kids/girls/zombie-school-girl.jpg',
			'priceThen':'$999',
			'priceNow':'$0.99',
		},
		'costumes/kids/boys/zombies': {
			'productName':'Zombie',
			'productDescription':'<span>Candy corn, Snickers, Baby Ruths? Please. Not unless it\'s covered in blood and brains. Let your child crave something with a little more iron this Halloween in this Boy Zombie Costume. Let\'s just hope he doesn\'t try to eat the neighbor\'s dog again...</span><span>● 100% polyester</span><span>● Shirt Velcros in back</span><span>● Rib cage and blood spatter marks accent shirt</span><span>● Blue pants w/ bones & blood on them have an elastic waistband</span>',
			'pageURL':'#product?costumes/kids/boys/zombie',
			'imgURL':'assets/imgs/product-imgs/costumes/kids/boys/zombie.jpg',
			'priceThen':'$870',
			'priceNow':'$0.99',
		},
		'costumes/adult/men/saw-pigs': {
			'productName':'Saw Pig',
			'productDescription':'<span>Freak them out farmyardstyle in this officially licensed Saw Pig adult mens costume, straight from the horror film trilogy. The full length black trenchcoat trimmed with a bloodred latex collar, black gloves and signature pigface mask of this scary costume are sure to send chills.</span><span>From the jigsaw movie franchise, this deluxe pig mask and costume is sure to scare. Black trench coat costume with red trim and black gloves highlighted by the creepy pig mask. Officially licensed costume.</span>',
			'pageURL':'#product?costumes/adult/men/saw-pig',
			'imgURL':'assets/imgs/product-imgs/costumes/adult/men/saw-pig.jpg',
			'priceThen':'$600',
			'priceNow':'$0.99',
		},
		'costumes/kids/girls/waitress-zombies': {
			'productName':'Waitress Zombie',
			'productDescription':'<span>Today\'s specials include toenail soup, spaghetti brains, and chopped livers! Bloody Waitress Adult Womens Zombie Costume is complete with blue classic collared diner uniform with attached mini apron splattered with blood stains. Matching sailor cap also included so you\'ll be ready to serve your customers at this friendly neighborhood die-ner.</span>',
			'pageURL':'#product?costumes/kids/girls/waitress-zombie',
			'imgURL':'assets/imgs/product-imgs/costumes/kids/girls/waitress-zombie.png',
			'priceThen':'$999',
			'priceNow':'$0.99',
		},
		'costumes/kids/boys/skeletons': {
			'productName':'Skeleton',
			'productDescription':'<span>Make no bones about it – this kids skeleton Halloween costume is as scary as it looks! Skeletons are a mainstay on the Halloween scene, but it’s easy to forget them among the more popular vampires, werewolves, and demons. But this Halloween, your child will stand out in a sea of common creatures with this skeleton costume.</span><span>Jumping out of closets, rising from the grave, terrorizing the town – these are just a few of the activities skeletons enjoy. From the big screen to the small screen and to the pages of your favorite book, skeletons always make for a fun and interesting character. Some of them have their own sob stories and others are just mindless henchman for the big baddie, but either way, they know what it takes to steal a scene.</span><span>You won\'t be the usual bag of bones when you wear this Kids Skeleton Costume. This is a frightening costume for kids that won\'t make them look like the typical werewolf or zombie. This costume covers you from head to toe and is a unique way to scare their friends (and maybe a few adults) this Halloween. The 100% polyester black bodysuit has latex bones covering the exterior. The included hood has a skull face on it with black mesh so they can easily see. Cover up the last remaining bits of their former human self with the black boot covers and matching skeleton gloves. Before you know it, your child will be ready to haunt the neighborhood in their full skeleton costume!</span>',
			'pageURL':'#product?costumes/kids/boys/skeleton',
			'imgURL':'assets/imgs/product-imgs/costumes/kids/boys/skeleton.jpg',
			'priceThen':'$666',
			'priceNow':'$0.99',
		},
		'costumes/adult/women/broken-china-dolls': {
			'productName':'Broken China Doll',
			'productDescription':'<span>Nothing\'s creepier than a shattered doll, and in the Broken China Doll Adult Women\'s Costume you\'ll be quite a fright. Features black dress with patchwork details and stripe pattern, matching bow and lifelike shattered tights.	</span><span>● Wig, socks and shoes not included</span><span>● Dress and Choker: 100% Polyester</span><span>● Hair Bow/Clip- 60%, 40% Plastic</span><span>● Fabric- 100% Knit Polyester</span><span>● Tights: 95% Nylon, 5% Spandex</span><span>● Dress- Hand Wash Separately In Cold Water, Only Non-Chlorine Bleach When Needed, Line Dry Cool Iron If Necessary</span><span>● Tights- Hand Wash In Cold Water, Line Dry or Lay Flat to Dry</span>',
			'pageURL':'#product?costumes/adult/women/broken-china-doll',
			'imgURL':'assets/imgs/product-imgs/costumes/adult/women/broken-china-doll.jpg',
			'priceThen':'$920',
			'priceNow':'$0.99',
		},
		'costumes/kids/girls/voodoo-dolls': {
			'productName':'Voodoo Doll',
			'productDescription':'<span>So we\'ve always wondered about this costume. As a voodoo doll, is someone else controlling you with a smaller version of a doll dressed as you who is already dressed as a voodoo doll? Or are you dressed as a life-sized voodoo doll of somebody else so someone can use you to control the other person? Do you just control yourself dressed as a voodoo doll of someone else and control that someone else? Phew! That\'s way too deep for us!Let\'s leave the complexities behind and just take this dress at face value: a cute and delightfully creepy costume look. There\'s a ton of ways that you could customize your costume experience when you go in this look. You could enhance the look by using some makeup on your arms and legs to make it look like you were sewn together. You could add a terrifying mask to complete your mysterious style, and you could even carry around some over sized pins to let your friends "poke" you.</span><span>And as for your story, it\'s totally up to you. Maybe you could be a doll that somebody else has the controls for. Or maybe get a bunch of friends together and be a bunch of scary little dolls who somehow escaped from a misfit toy shop. Whatever kind of ritualistic creation you\'d like to be, just grab some black heels and maybe a pair of torn up or fishnet stockings along with all the black and white makeup you own. Just, whatever you do, don\'t take any pieces of our hair and try to control us!</span>',
			'pageURL':'#product?costumes/kids/girls/voodoo-doll',
			'imgURL':'assets/imgs/product-imgs/costumes/kids/girls/voodoo-doll.jpg',
			'priceThen':'$930',
			'priceNow':'$0.99',
		},
		'costumes/kids/boys/mummys': {
			'productName':'Mummy',
			'productDescription':'<span>If you\'re ready to get out of the the sarcophagus you\'re going to want make sure that you have the right threads, and this costume will provide the perfect look. You\'ll really be able to terrify the neighborhood with this mummy costume! It\'s an exclusive look you won\'t find anywhere else. It looks ragged, but don\'t worry, it\'s supposed to!</span>',
			'pageURL':'#product?costumes/kids/boys/mummy',
			'imgURL':'assets/imgs/product-imgs/costumes/kids/boys/mummy.jpg',
			'priceThen':'$240',
			'priceNow':'$0.99',
		},
		'costumes/adult/women/classic-witchs': {
			'productName':'Classic Witch',
			'productDescription':'<span>Become a storybook favorite in our Classic Witch Costume. Affordable Classic Witch Costume features a tie-back black dress with sawtooth hem and sleeves. Witch hat and broom sold separately.</span>',
			'pageURL':'#product?costumes/adult/women/classic-witch',
			'imgURL':'assets/imgs/product-imgs/costumes/adult/women/classic-witch.jpg',
			'priceThen':'$260',
			'priceNow':'$0.99',
		},
		'costumes/adult/men/pyramid-heads': {
			'productName':'Pyramid Head',
			'productDescription':'<span>"In my restless dreams,</span><span>I see that town.</span><span>Silent Hill.</span><span>You promised me you\'d take me there again someday.</span><span>But you never did.</span><span>Well, I\'m alone there now...</span><span>In our \'special place\'...</span><span>Waiting for you..."</span>',
			'pageURL':'#product?costumes/adult/men/pyramid-head',
			'imgURL':'assets/imgs/product-imgs/costumes/adult/men/pyramid-head.jpg',
			'priceThen':'$380',
			'priceNow':'$0.99',
		},
		//replicated 1 ends
	},
	'accessories': {
		'accessories/white-mask': {
			'productName':'White Mask',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?accessories/white-mask',
			'imgURL':'assets/imgs/product-imgs/accessories/white-mask.jpeg',
			'priceThen':'$999',
			'priceNow':'$0.99',
			'class':'align-bottom',
		},
		'accessories/suicide-squad-goat-mask': {
			'productName':'Suicide Squad Moat Mask',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?accessories/suicide-squad-goat-mask',
			'imgURL':'assets/imgs/product-imgs/accessories/suicide-squad-goat-mask.jpeg',
			'priceThen':'$750',
			'priceNow':'$0.99',
			'class':'align-bottom',
		},
		'accessories/stitches-tights': {
			'productName':'Stitches Tights',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?accessories/stitches-tights',
			'imgURL':'assets/imgs/product-imgs/accessories/stitches-tights.jpeg',
			'priceThen':'$650',
			'priceNow':'$0.99',
			'class':'align-bottom',
		},
		'accessories/sam-burlap-mask': {
			'productName':'Sam Burlap Mask',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?accessories/sam-burlap-mask',
			'imgURL':'assets/imgs/product-imgs/accessories/sam-burlap-mask.jpeg',
			'priceThen':'$666',
			'priceNow':'$0.99',
			'class':'align-bottom',
		},
		'accessories/ripped-face-mask': {
			'productName':'Ripped Face Mask',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?accessories/ripped-face-mask',
			'imgURL':'assets/imgs/product-imgs/accessories/ripped-face-mask.jpeg',
			'priceThen':'$300',
			'priceNow':'$0.99',
			'class':'align-bottom',
		},
		'accessories/jack-o-lantern-tights': {
			'productName':'Jack-o Lantern Tights',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?accessories/jack-o-lantern-tights',
			'imgURL':'assets/imgs/product-imgs/accessories/jack-o-lantern-tights.jpeg',
			'priceThen':'$220',
			'priceNow':'$0.99',
			'class':'align-bottom',
		},
		'accessories/graveyard-tights': {
			'productName':'Graveyard Tights',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?accessories/graveyard-tights',
			'imgURL':'assets/imgs/product-imgs/accessories/graveyard-tights.jpeg',
			'priceThen':'$230',
			'priceNow':'$0.99',
			'class':'align-bottom',
		},
		'accessories/eyeball-mask': {
			'productName':'Eyeball Mask',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?accessories/eyeball-mask',
			'imgURL':'assets/imgs/product-imgs/accessories/eyeball-mask.jpeg',
			'priceThen':'$700',
			'priceNow':'$0.99',
			'class':'align-bottom',
		},
		'accessories/doll-leg-tights': {
			'productName':'Doll Leg Tights',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?accessories/doll-leg-tights',
			'imgURL':'assets/imgs/product-imgs/accessories/doll-leg-tights.jpeg',
			'priceThen':'$640',
			'priceNow':'$0.99',
			'class':'align-bottom',
		},
		'accessories/broken-doll-makeup-kit': {
			'productName':'Broken Doll Makeup Kit',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?accessories/broken-doll-makeup-kit',
			'imgURL':'assets/imgs/product-imgs/accessories/broken-doll-makeup-kit.jpeg',
			'priceThen':'$660',
			'priceNow':'$0.99',
			'class':'align-bottom',
		},
		'accessories/black-heart-beauty-fake-blood': {
			'productName':'Black Heart Beauty Fake Blood',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?accessories/black-heart-beauty-fake-blood',
			'imgURL':'assets/imgs/product-imgs/accessories/black-heart-beauty-fake-blood.jpeg',
			'priceThen':'$960',
			'priceNow':'$0.99',
			'class':'align-bottom',
		},
		'accessories/black-heart-beauty-face-body-whitepaint': {
			'productName':'Black Heart Beauty Face Body Whitepaint',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?accessories/black-heart-beauty-face-body-whitepaint',
			'imgURL':'assets/imgs/product-imgs/accessories/black-heart-beauty-face-body-whitepaint.jpeg',
			'priceThen':'$666',
			'priceNow':'$0.99',
			'class':'align-bottom',
		},
		//replicated 1
		'accessories/white-masks': {
			'productName':'White Mask',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?accessories/white-mask',
			'imgURL':'assets/imgs/product-imgs/accessories/white-mask.jpeg',
			'priceThen':'$999',
			'priceNow':'$0.99',
			'class':'align-bottom',
		},
		'accessories/suicide-squad-goat-masks': {
			'productName':'Suicide Squad Moat Mask',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?accessories/suicide-squad-goat-mask',
			'imgURL':'assets/imgs/product-imgs/accessories/suicide-squad-goat-mask.jpeg',
			'priceThen':'$750',
			'priceNow':'$0.99',
			'class':'align-bottom',
		},
		'accessories/stitches-tightss': {
			'productName':'Stitches Tights',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?accessories/stitches-tights',
			'imgURL':'assets/imgs/product-imgs/accessories/stitches-tights.jpeg',
			'priceThen':'$650',
			'priceNow':'$0.99',
			'class':'align-bottom',
		},
		'accessories/sam-burlap-masks': {
			'productName':'Sam Burlap Mask',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?accessories/sam-burlap-mask',
			'imgURL':'assets/imgs/product-imgs/accessories/sam-burlap-mask.jpeg',
			'priceThen':'$666',
			'priceNow':'$0.99',
			'class':'align-bottom',
		},
		'accessories/ripped-face-masks': {
			'productName':'Ripped Face Mask',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?accessories/ripped-face-mask',
			'imgURL':'assets/imgs/product-imgs/accessories/ripped-face-mask.jpeg',
			'priceThen':'$300',
			'priceNow':'$0.99',
			'class':'align-bottom',
		},
		'accessories/jack-o-lantern-tightss': {
			'productName':'Jack-o Lantern Tights',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?accessories/jack-o-lantern-tights',
			'imgURL':'assets/imgs/product-imgs/accessories/jack-o-lantern-tights.jpeg',
			'priceThen':'$220',
			'priceNow':'$0.99',
			'class':'align-bottom',
		},
		'accessories/graveyard-tightss': {
			'productName':'Graveyard Tights',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?accessories/graveyard-tights',
			'imgURL':'assets/imgs/product-imgs/accessories/graveyard-tights.jpeg',
			'priceThen':'$230',
			'priceNow':'$0.99',
			'class':'align-bottom',
		},
		'accessories/eyeball-masks': {
			'productName':'Eyeball Mask',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?accessories/eyeball-mask',
			'imgURL':'assets/imgs/product-imgs/accessories/eyeball-mask.jpeg',
			'priceThen':'$700',
			'priceNow':'$0.99',
			'class':'align-bottom',
		},
		'accessories/doll-leg-tightss': {
			'productName':'Doll Leg Tights',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?accessories/doll-leg-tights',
			'imgURL':'assets/imgs/product-imgs/accessories/doll-leg-tights.jpeg',
			'priceThen':'$640',
			'priceNow':'$0.99',
			'class':'align-bottom',
		},
		'accessories/broken-doll-makeup-kits': {
			'productName':'Broken Doll Makeup Kit',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?accessories/broken-doll-makeup-kit',
			'imgURL':'assets/imgs/product-imgs/accessories/broken-doll-makeup-kit.jpeg',
			'priceThen':'$660',
			'priceNow':'$0.99',
			'class':'align-bottom',
		},
		'accessories/black-heart-beauty-fake-bloods': {
			'productName':'Black Heart Beauty Fake Blood',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?accessories/black-heart-beauty-fake-blood',
			'imgURL':'assets/imgs/product-imgs/accessories/black-heart-beauty-fake-blood.jpeg',
			'priceThen':'$960',
			'priceNow':'$0.99',
			'class':'align-bottom',
		},
		'accessories/black-heart-beauty-face-body-whitepaints': {
			'productName':'Black Heart Beauty Face Body Whitepaint',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?accessories/black-heart-beauty-face-body-whitepaint',
			'imgURL':'assets/imgs/product-imgs/accessories/black-heart-beauty-face-body-whitepaint.jpeg',
			'priceThen':'$666',
			'priceNow':'$0.99',
			'class':'align-bottom',
		},
		//replicated 1 ends
	},
	'decorations': {
		'decorations/decorations/zombie-arms': {
			'productName':'Zombie Arms',
			'productDescription':'<span>This zombie arm hand lawn stakes Halloween decor will add a unique look to any Halloween display, haunted house, garden or where ever a unique display piece may be needed</span>',
			'pageURL':'#product?decorations/zombie-arms',
			'imgURL':'assets/imgs/product-imgs/decorations/zombie-arms.jpg',
			'priceThen':'$740',
			'priceNow':'$0.99',
		},
		'decorations/side-walk-sign': {
			'productName':'Side Walk Sign',
			'productDescription':'<span>Set the scene for your next Halloween party with these warning signs. They’re made of sturdy corrugated plastic, but have the look of aged wood with quite a bit of blood spatter. One sign reads: “Danger,” and “Enter at Your Own Risk ,” another reads “Beware” and “Go Back!” and the third reads “Keep Out” and “Condemned.” Each package contains the 3 different warning signs, each measuring 12in high x 9in wide. These signs are easy to use and re-use.</span>',
			'pageURL':'#product?decorations/side-walk-sign',
			'imgURL':'assets/imgs/product-imgs/decorations/side-walk-sign.jpg',
			'priceThen':'$745',
			'priceNow':'$0.99',
		},
		'decorations/roach-pile': {
			'productName':'Roach Pile',
			'productDescription':'<span>NOTE: Choking hazard, small parts are not suitable for children under 6 years.</span>',
			'pageURL':'#product?decorations/roach-pile',
			'imgURL':'assets/imgs/product-imgs/decorations/roach-pile.jpg',
			'priceThen':'$666',
			'priceNow':'$0.99',
		},
		'decorations/reaper-tombstone': {
			'productName':'Reaper Tombstone',
			'productDescription':'<span>Transform your lawn into a haunted cemetery when you decorate with this amazingly realistic resin Reaper tombstone.  Send a spooky message to all who dare to cross your path that you take Halloween seriously!</span>',
			'pageURL':'#product?decorations/reaper-tombstone',
			'imgURL':'assets/imgs/product-imgs/decorations/reaper-tombstone.jpg',
			'priceThen':'$760',
			'priceNow':'$0.99',
		},
		'decorations/possessed-girl-on-swing': {
			'productName':'Possessed Girl On Swing',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?decorations/possessed-girl-on-swing',
			'imgURL':'assets/imgs/product-imgs/decorations/possessed-girl-on-swing.jpg',
			'priceThen':'$400',
			'priceNow':'$0.99',
		},
		'decorations/monster-book': {
			'productName':'Monster Book',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?decorations/monster-book',
			'imgURL':'assets/imgs/product-imgs/decorations/monster-book.jpg',
			'priceThen':'$999',
			'priceNow':'$0.99',
		},
		'decorations/led-eyed-tarantula': {
			'productName':'Led Eyed Tarantula',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?decorations/led-eyed-tarantula',
			'imgURL':'assets/imgs/product-imgs/decorations/led-eyed-tarantula.jpg',
			'priceThen':'$200',
			'priceNow':'$0.99',
		},
		'decorations/head-jar': {
			'productName':'Head Jar',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?decorations/head-jar',
			'imgURL':'assets/imgs/product-imgs/decorations/head-jar.jpg',
			'priceThen':'$100',
			'priceNow':'$0.99',
		},
		'decorations/hanging-skeleton': {
			'productName':'Hanging Skeleton',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?decorations/hanging-skeleton',
			'imgURL':'assets/imgs/product-imgs/decorations/hanging-skeleton.jpg',
			'priceThen':'$800',
			'priceNow':'$0.99',
		},
		'decorations/gelatin-brain': {
			'productName':'Gelatin Brain',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?decorations/gelatin-brain',
			'imgURL':'assets/imgs/product-imgs/decorations/gelatin-brain.jpg',
			'priceThen':'$100',
			'priceNow':'$0.99',
		},
		'decorations/fog-machine': {
			'productName':'Fog Machine',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?decorations/fog-machine',
			'imgURL':'assets/imgs/product-imgs/decorations/fog-machine.jpg',
			'priceThen':'$900',
			'priceNow':'$0.99',
		},
		'decorations/door-curtain': {
			'productName':'Door Curtain',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?decorations/door-curtain',
			'imgURL':'assets/imgs/product-imgs/decorations/door-curtain.jpg',
			'priceThen':'$820',
			'priceNow':'$0.99',
			'class':'align-bottom',
		},
		'decorations/demon-baby': {
			'productName':'Demon Baby',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?decorations/demon-baby',
			'imgURL':'assets/imgs/product-imgs/decorations/demon-baby.jpg',
			'priceThen':'$330',
			'priceNow':'$0.99',
		},
		'decorations/cocoon-corpse': {
			'productName':'Cocoon Corpse',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?decorations/cocoon-corpse',
			'imgURL':'assets/imgs/product-imgs/decorations/cocoon-corpse.jpg',
			'priceThen':'$720',
			'priceNow':'$0.99',
		},
		'decorations/chopped-leg': {
			'productName':'Chopped Leg',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?decorations/chopped-leg',
			'imgURL':'assets/imgs/product-imgs/decorations/chopped-leg.jpg',
			'priceThen':'$700',
			'priceNow':'$0.99',
		},
		'decorations/bloody-footprints-floor-clings': {
			'productName':'Bloody Footprints Floor Clings',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?decorations/bloody-footprints-floor-clings',
			'imgURL':'assets/imgs/product-imgs/decorations/bloody-footprints-floor-clings.jpg',
			'priceThen':'$200',
			'priceNow':'$0.99',
		},
		//replicated 1
		'decorations/dexcorations/zombie-arms': {
			'productName':'Zombie Arms',
			'productDescription':'<span>This zombie arm hand lawn stakes Halloween decor will add a unique look to any Halloween display, haunted house, garden or where ever a unique display piece may be needed</span>',
			'pageURL':'#product?decorations/zombie-arms',
			'imgURL':'assets/imgs/product-imgs/decorations/zombie-arms.jpg',
			'priceThen':'$740',
			'priceNow':'$0.99',
		},
		'decorations/sixde-walk-sign': {
			'productName':'Side Walk Sign',
			'productDescription':'<span>Set the scene for your next Halloween party with these warning signs. They’re made of sturdy corrugated plastic, but have the look of aged wood with quite a bit of blood spatter. One sign reads: “Danger,” and “Enter at Your Own Risk ,” another reads “Beware” and “Go Back!” and the third reads “Keep Out” and “Condemned.” Each package contains the 3 different warning signs, each measuring 12in high x 9in wide. These signs are easy to use and re-use.</span>',
			'pageURL':'#product?decorations/side-walk-sign',
			'imgURL':'assets/imgs/product-imgs/decorations/side-walk-sign.jpg',
			'priceThen':'$745',
			'priceNow':'$0.99',
		},
		'decorations/roxach-pile': {
			'productName':'Roach Pile',
			'productDescription':'<span>NOTE: Choking hazard, small parts are not suitable for children under 6 years.</span>',
			'pageURL':'#product?decorations/roach-pile',
			'imgURL':'assets/imgs/product-imgs/decorations/roach-pile.jpg',
			'priceThen':'$666',
			'priceNow':'$0.99',
		},
		'decorations/reaxper-tombstone': {
			'productName':'Reaper Tombstone',
			'productDescription':'<span>Transform your lawn into a haunted cemetery when you decorate with this amazingly realistic resin Reaper tombstone.  Send a spooky message to all who dare to cross your path that you take Halloween seriously!</span>',
			'pageURL':'#product?decorations/reaper-tombstone',
			'imgURL':'assets/imgs/product-imgs/decorations/reaper-tombstone.jpg',
			'priceThen':'$760',
			'priceNow':'$0.99',
		},
		'decorations/poxssessed-girl-on-swing': {
			'productName':'Possessed Girl On Swing',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?decorations/possessed-girl-on-swing',
			'imgURL':'assets/imgs/product-imgs/decorations/possessed-girl-on-swing.jpg',
			'priceThen':'$400',
			'priceNow':'$0.99',
		},
		'decorations/moxnster-book': {
			'productName':'Monster Book',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?decorations/monster-book',
			'imgURL':'assets/imgs/product-imgs/decorations/monster-book.jpg',
			'priceThen':'$999',
			'priceNow':'$0.99',
		},
		'decorations/lexd-eyed-tarantula': {
			'productName':'Led Eyed Tarantula',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?decorations/led-eyed-tarantula',
			'imgURL':'assets/imgs/product-imgs/decorations/led-eyed-tarantula.jpg',
			'priceThen':'$200',
			'priceNow':'$0.99',
		},
		'decorations/heaxd-jar': {
			'productName':'Head Jar',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?decorations/head-jar',
			'imgURL':'assets/imgs/product-imgs/decorations/head-jar.jpg',
			'priceThen':'$100',
			'priceNow':'$0.99',
		},
		'decorations/hangxing-skeleton': {
			'productName':'Hanging Skeleton',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?decorations/hanging-skeleton',
			'imgURL':'assets/imgs/product-imgs/decorations/hanging-skeleton.jpg',
			'priceThen':'$800',
			'priceNow':'$0.99',
		},
		'decorations/gexlatin-brain': {
			'productName':'Gelatin Brain',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?decorations/gelatin-brain',
			'imgURL':'assets/imgs/product-imgs/decorations/gelatin-brain.jpg',
			'priceThen':'$100',
			'priceNow':'$0.99',
		},
		'decorations/foxg-machine': {
			'productName':'Fog Machine',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?decorations/fog-machine',
			'imgURL':'assets/imgs/product-imgs/decorations/fog-machine.jpg',
			'priceThen':'$900',
			'priceNow':'$0.99',
		},
		'decorations/doxor-curtain': {
			'productName':'Door Curtain',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?decorations/door-curtain',
			'imgURL':'assets/imgs/product-imgs/decorations/door-curtain.jpg',
			'priceThen':'$820',
			'priceNow':'$0.99',
			'class':'align-bottom',
		},
		'decorations/demonx-baby': {
			'productName':'Demon Baby',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?decorations/demon-baby',
			'imgURL':'assets/imgs/product-imgs/decorations/demon-baby.jpg',
			'priceThen':'$330',
			'priceNow':'$0.99',
		},
		'decorations/cocoonx-corpse': {
			'productName':'Cocoon Corpse',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?decorations/cocoon-corpse',
			'imgURL':'assets/imgs/product-imgs/decorations/cocoon-corpse.jpg',
			'priceThen':'$720',
			'priceNow':'$0.99',
		},
		'decorations/choppxed-leg': {
			'productName':'Chopped Leg',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?decorations/chopped-leg',
			'imgURL':'assets/imgs/product-imgs/decorations/chopped-leg.jpg',
			'priceThen':'$700',
			'priceNow':'$0.99',
		},
		'decorations/bloody-fxootprints-floor-clings': {
			'productName':'Bloody Footprints Floor Clings',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?decorations/bloody-footprints-floor-clings',
			'imgURL':'assets/imgs/product-imgs/decorations/bloody-footprints-floor-clings.jpg',
			'priceThen':'$200',
			'priceNow':'$0.99',
		},
		//replicated 1 ends
	},
	'toys': {
		'toys/the-nightmare-before-christmas-sally-figure': {
			'productName':'The Nightmare Before Christmas Sally Figure',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?toys/the-nightmare-before-christmas-sally-figure',
			'imgURL':'assets/imgs/product-imgs/toys/the-nightmare-before-christmas-sally-figure.jpg',
			'priceThen':'$100',
			'priceNow':'$0.99',
		},
		'toys/the-nightmare-before-christmas-jack-skellington-figure': {
			'productName':'The Nightmare Before Christmas Jack Skellington Figure',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?toys/the-nightmare-before-christmas-jack-skellington-figure',
			'imgURL':'assets/imgs/product-imgs/toys/the-nightmare-before-christmas-jack-skellington-figure.jpg',
			'priceThen':'$110',
			'priceNow':'$0.99',
		},
		'toys/the-nightmare-before-christmas-clue': {
			'productName':'The Nightmare Before Christmas Clue',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?toys/the-nightmare-before-christmas-clue',
			'imgURL':'assets/imgs/product-imgs/toys/the-nightmare-before-christmas-clue.jpg',
			'priceThen':'$100',
			'priceNow':'$0.99',
		},
		'toys/tarot-deck': {
			'productName':'Tarot Deck',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?toys/tarot-deck',
			'imgURL':'assets/imgs/product-imgs/toys/tarot-deck.jpg',
			'priceThen':'$120',
			'priceNow':'$0.99',
		},
		'toys/skull-dices': {
			'productName':'Skull Dices',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?toys/skull-dices',
			'imgURL':'assets/imgs/product-imgs/toys/skull-dices.jpg',
			'priceThen':'$110',
			'priceNow':'$0.99',
		},
		'toys/silent-hill-homecoming': {
			'productName':'Silent Hill Homecoming',
			'productDescription':'<span>this game is gonna haunt you for the rest of your life.</span>',
			'pageURL':'#product?toys/silent-hill-homecoming',
			'imgURL':'assets/imgs/product-imgs/toys/silent-hill-homecoming.jpg',
			'priceThen':'$150',
			'priceNow':'$0.99',
		},
		'toys/ouija-board': {
			'productName':'Ouija Board',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?toys/ouija-board',
			'imgURL':'assets/imgs/product-imgs/toys/ouija-board.jpg',
			'priceThen':'$100',
			'priceNow':'$0.99',
		},
		'toys/jason-mask': {
			'productName':'Jason Mask',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?toys/jason-mask',
			'imgURL':'assets/imgs/product-imgs/toys/jason-mask.jpg',
			'priceThen':'$220',
			'priceNow':'$0.99',
		},
		'toys/haunted-doll-with-sound': {
			'productName':'Haunted Doll With Sound',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?toys/haunted-doll-with-sound',
			'imgURL':'assets/imgs/product-imgs/toys/haunted-doll-with-sound.jpg',
			'priceThen':'$150',
			'priceNow':'$0.99',
		},
		'toys/fake-nail': {
			'productName':'Fake Nail',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?toys/fake-nail',
			'imgURL':'assets/imgs/product-imgs/toys/fake-nail.jpg',
			'priceThen':'$100',
			'priceNow':'$0.99',
		},
		'toys/demon-baby': {
			'productName':'Demon Baby',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?toys/demon-baby',
			'imgURL':'assets/imgs/product-imgs/toys/demon-baby.jpg',
			'priceThen':'$120',
			'priceNow':'$0.99',
		},
		'toys/charlies-pencil': {
			'productName':'Charlie\'s Pencil',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?toys/charlies-pencil',
			'imgURL':'assets/imgs/product-imgs/toys/charlies-pencil.jpg',
			'priceThen':'$100',
			'priceNow':'$0.99',
		},
		'toys/annabelle': {
			'productName':'Annabelle',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?toys/annabelle',
			'imgURL':'assets/imgs/product-imgs/toys/annabelle.jpg',
			'priceThen':'$100',
			'priceNow':'$0.99',
		},
		//replicated1
		'toys/thxe-nightmare-before-christmas-sally-figure': {
			'productName':'The Nightmare Before Christmas Sally Figure',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?toys/the-nightmare-before-christmas-sally-figure',
			'imgURL':'assets/imgs/product-imgs/toys/the-nightmare-before-christmas-sally-figure.jpg',
			'priceThen':'$100',
			'priceNow':'$0.99',
		},
		'toys/thxe-nightmare-before-christmas-jack-skellington-figure': {
			'productName':'The Nightmare Before Christmas Jack Skellington Figure',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?toys/the-nightmare-before-christmas-jack-skellington-figure',
			'imgURL':'assets/imgs/product-imgs/toys/the-nightmare-before-christmas-jack-skellington-figure.jpg',
			'priceThen':'$110',
			'priceNow':'$0.99',
		},
		'toys/txhe-nightmare-before-christmas-clue': {
			'productName':'The Nightmare Before Christmas Clue',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?toys/the-nightmare-before-christmas-clue',
			'imgURL':'assets/imgs/product-imgs/toys/the-nightmare-before-christmas-clue.jpg',
			'priceThen':'$100',
			'priceNow':'$0.99',
		},
		'toys/tarxot-deck': {
			'productName':'Tarot Deck',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?toys/tarot-deck',
			'imgURL':'assets/imgs/product-imgs/toys/tarot-deck.jpg',
			'priceThen':'$120',
			'priceNow':'$0.99',
		},
		'toys/skuxll-dices': {
			'productName':'Skull Dices',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?toys/skull-dices',
			'imgURL':'assets/imgs/product-imgs/toys/skull-dices.jpg',
			'priceThen':'$110',
			'priceNow':'$0.99',
		},
		'toys/silxent-hill-homecoming': {
			'productName':'Silent Hill Homecoming',
			'productDescription':'<span>this game is gonna haunt you for the rest of your life.</span>',
			'pageURL':'#product?toys/silent-hill-homecoming',
			'imgURL':'assets/imgs/product-imgs/toys/silent-hill-homecoming.jpg',
			'priceThen':'$150',
			'priceNow':'$0.99',
		},
		'toys/ouxija-board': {
			'productName':'Ouija Board',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?toys/ouija-board',
			'imgURL':'assets/imgs/product-imgs/toys/ouija-board.jpg',
			'priceThen':'$100',
			'priceNow':'$0.99',
		},
		'toys/jaxson-mask': {
			'productName':'Jason Mask',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?toys/jason-mask',
			'imgURL':'assets/imgs/product-imgs/toys/jason-mask.jpg',
			'priceThen':'$220',
			'priceNow':'$0.99',
		},
		'toys/hxaunted-doll-with-sound': {
			'productName':'Haunted Doll With Sound',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?toys/haunted-doll-with-sound',
			'imgURL':'assets/imgs/product-imgs/toys/haunted-doll-with-sound.jpg',
			'priceThen':'$150',
			'priceNow':'$0.99',
		},
		'toys/fxake-nail': {
			'productName':'Fake Nail',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?toys/fake-nail',
			'imgURL':'assets/imgs/product-imgs/toys/fake-nail.jpg',
			'priceThen':'$100',
			'priceNow':'$0.99',
		},
		'toys/demoxn-baby': {
			'productName':'Demon Baby',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?toys/demon-baby',
			'imgURL':'assets/imgs/product-imgs/toys/demon-baby.jpg',
			'priceThen':'$120',
			'priceNow':'$0.99',
		},
		'toys/charlxies-pencil': {
			'productName':'Charlie\'s Pencil',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?toys/charlies-pencil',
			'imgURL':'assets/imgs/product-imgs/toys/charlies-pencil.jpg',
			'priceThen':'$100',
			'priceNow':'$0.99',
		},
		'toys/annabxelle': {
			'productName':'Annabelle',
			'productDescription':'404 PATIENCE NOT FOUND.',
			'pageURL':'#product?toys/annabelle',
			'imgURL':'assets/imgs/product-imgs/toys/annabelle.jpg',
			'priceThen':'$100',
			'priceNow':'$0.99',
		},
		//replicated1 ends
	},
}
var populatest = function(caller){

	for(var i = 0; i < 12; i++){

		var productKind = caller.substring(1, caller.length);

		var keys = Object.keys(products[productKind]);

		var productObj = products[productKind][keys[i]];

		var productHTML = '<div class="product-lockup-wrapper"><a class="product-lockup" href="'+ productObj['pageURL'] +'"><div class="product-overlay"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="322.454px" height="98.995px" viewBox="0 0 322.454 98.995" enable-background="new 0 0 322.454 98.995"xml:space="preserve"><path d="M254.917,0H0v98.995h254.917l67.537-49.498L254.917,0z M274.584,61.164c-6.443,0-11.667-5.224-11.667-11.666c0-6.443,5.224-11.667,11.667-11.667c6.443,0,11.667,5.224,11.667,11.667C286.251,55.94,281.027,61.164,274.584,61.164z"/><text fill="#FFFFFF"><tspan class="then" font-size="30" y="60" x="10">'+ productObj['priceThen'] +'</tspan><tspan class="now" font-size="50" y="60" x="100">'+ productObj['priceNow'] +'</tspan></text></svg></div><img class="'+ productObj['class'] +'" src="'+ productObj['imgURL'] +'"></a></div>';

		$(caller + ' .row-body').append(productHTML);

	}
}
//fitext
$.fn.fitText = function(compressor, options) {

  var callerElement = $(this)
  var compressor = compressor || 1 //font-size = element's width / 10 by default

  //with custom parameters execute this block
  if(options){

    //compressor must be larger than 0 or defaults to 1
    var minSize = parseFloat(options.minSize)
    var maxSize = parseFloat(options.maxSize)

    var resize = function(){

      //if element's width / ( compressor * 10 ) is smaller and minSize take minSize
      //if element's width / ( compressor * 10 ) is larger than maxSize take maxSize
      //if element's width / ( compressor * 10 ) is larger than minSize and smaller than maxSize take element's width / ( compressor * 10 )
      var size = Math.min( Math.max( callerElement.width() / (compressor * 10), minSize ), maxSize )
      callerElement.css( 'font-size', size )
    }

  //without custom parameters execute this block
  }else{

    var resize = function(){

      var size = callerElement.width() / (compressor * 10)
      callerElement.css( 'font-size', size )

    }

  }

  //manually call once
  resize()

  $(window).on('resize', resize)

};
//fitext ends
//router
//EXAMPLE VALUE, CHANGE THESE
var currentRoute = '';
var routes = {
	'#product': { //route product
		'title':'Default',
		'url':'pages/product.html',
		'parameters':{},
		'controller': function(){
			$('.ajax-content').removeClass('visible');
			this.callback();
			var hash = window.location.hash;
			var params = getParams(hash);
			this['parameters']['kind'] = params['kind'];
			this['parameters']['url'] = params['url'];
			$('.nav.desktop ul li.active').removeClass('active');
			$('.' + this['parameters']['kind'] + '').addClass('active');
			navSizing();
			$(loadContainer).load(this.url);
			currentRoute = this.url;
		},
		'callback': function(){
			$(document).on('ajaxError', function(){

				$(document).off('ajaxError');

				redirect404();

			})
			$(document).on('ajaxStop', function(){

				$(document).off('ajaxStop');

				var kind = routes['#product']['parameters']['kind'];
				var url = routes['#product']['parameters']['url'];
				var productObj = products[kind][url];
				var cartItems = Object.keys(cart);

				var productHTML = '<div class="product-ajax"><div class="body product"><div class="row"><div class="product-img desktop"><img class="'+ productObj['class'] +'" src="'+ productObj['imgURL'] +'"></div><div class="product-detail"><div class="product-title">'+ productObj['productName'] +'</div><div class="product-img mobile"><img src="'+ productObj['imgURL'] +'"></div><div class="product-price"><span class="then">'+ productObj['priceThen'] +'</span><span class="now">'+ productObj['priceNow'] +'</span></div><div class="cta add-to-cart">add to cart</div><div class="product-description">'+ productObj['productDescription'] +'</div></div><div class="toggle"><span class="readmore">read more</span></div></div> <!-- <div class="row"> --><div class="section review"><div class="section-title">reviews</div><div class="reviews"><span>There are currently no reviews for this product.</span></div><div class="write-review"><span>leave your review</span><form><div class="textarea-wrapper"><textarea id="review" placeholder="enter your review here..." autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"></textarea></div><div class="cta submit">submit</div></form></div></div></div><div class="foot"><svg version="1.1" id="social-medias" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"y="0px" width="973.917px" height="457.088px" viewBox="0 0 973.917 457.088" enable-background="new 0 0 973.917 457.088"xml:space="preserve"><defs><linearGradient id="instagram-hover" gradientUnits="userSpaceOnUse" x1="478.3057" y1="235.8633" x2="600.3057" y2="-2.1367"><stop  offset="0" style="stop-color:#F8EC33"/><stop  offset="0.5865" style="stop-color:#EE2C7B"/><stop  offset="0.7504" style="stop-color:#AA488D"/><stop  offset="0.9222" style="stop-color:#63539E"/><stop  offset="1" style="stop-color:#3B56A6"/></linearGradient><linearGradient id="instagram" gradientUnits="userSpaceOnUse" x1="478.3057" y1="235.8633" x2="600.3057" y2="-2.1367"><stop  offset="0" style="stop-color:#BB3635"/><stop  offset="0.5865" style="stop-color:#BB3635"/><stop  offset="0.7504" style="stop-color:#BB3635"/><stop  offset="0.9222" style="stop-color:#BB3635"/><stop  offset="1" style="stop-color:#BB3635"/></linearGradient></defs><g class="text"><rect x="651.958" y="0.585" fill="#FFFFFF" stroke="#000000" stroke-miterlimit="10" width="321.959" height="49.387"/><text id="follow-us" transform="matrix(1 0 0 1 666.3696 38.0918)" fill="#BB3635" font-size="46.8892">follow us</text></g><g id="youtube_1_"><path id="youtube-underlay" fill="#FFFFFF" d="M592.337,281.498h-61.425c-28.671,0-51.995,23.324-51.995,51.994v61.426c0,28.67,23.324,51.994,51.995,51.994h61.425c28.669,0,51.994-23.324,51.994-51.994v-61.426C644.332,304.822,621.006,281.498,592.337,281.498z"/><path id="youtube-icon" fill="#BB3635" d="M640.937,247.147h-168.35c-41.604,0-61.635,15.883-61.635,71.867v72.969c0,34.597,10.379,65.104,51.987,65.104h198.775c41.607,0,50.584-27.991,50.584-52.485V296.813C712.298,263.03,690.021,247.147,640.937,247.147z M620.396,361.185l-92.992,53.688c-8.637,4.988-15.703,0.907-15.703-9.065V298.429c0-9.973,7.066-14.054,15.703-9.065l92.992,53.688C629.031,348.038,629.031,356.197,620.396,361.185z"/></g><path id="facebook" fill="#BB3635" d="M402.255,246.823v33.667c0,0-13.085,0-23.989,0c-10.903,0-15.266,6.543-15.266,27.532v16.356h37.075l-5.181,35.712H363v97.32h-36.53v-96.775h-32.713v-35.984h32.167c0,0,0.818-12.812,0.818-35.165c0-22.354,15.539-42.663,42.663-42.663H402.255z"/><path id="twitter" fill="#BB3635" d="M368.334,59.325c0,0,19.999-5.667,35.666-40.667c-21,10.667-43,17.666-52.667,19.666c-21.667-32.909-122-59.333-150,48.667c0,0,4.667,25.667,1.333,30c-91-4.666-139-41.666-182.334-90.333c0,0-34.333,62.999,27.334,111.333c8,13.334-36.333-1-39-5.333c0,0,4.666,67.667,69.666,82.333C86,223.991,42,221.658,42,221.658s16.333,52.666,79.333,55.999c-7,21.335-63.666,45.335-121.333,41.667c109,71.001,365.666,40.335,374.334-226.333c0,0,31.416-26.333,37.666-39.083c-8.5,4.25-36,11.75-41.75,11.25C367.148,63.237,368.334,59.325,368.334,59.325z"/><g id="instagram_1_"><path id="instagram-underlay" fill="#FFFFFF" d="M573.335,19.13h-77.764c-36.297,0-65.826,29.528-65.826,65.824v77.766c0,36.296,29.528,65.824,65.826,65.824h77.764c36.295,0,65.824-29.528,65.824-65.824V84.954C639.16,48.659,609.63,19.13,573.335,19.13z"/><g id="instagram-icon"><path id="path1" fill="#BB3635" d="M534.453,63.062c-34.889,0-63.272,28.383-63.272,63.271c0,34.888,28.383,63.27,63.272,63.27s63.27-28.382,63.27-63.27C597.722,91.444,569.341,63.062,534.453,63.062z M534.453,173.099c-25.785,0-46.766-20.979-46.766-46.766s20.979-46.766,46.766-46.766s46.766,20.979,46.766,46.766C581.218,152.119,560.24,173.099,534.453,173.099z"/><circle id="path2" fill="#BB3635" cx="596.748" cy="57.56" r="13.755"/><path id="path3" fill="#BB3635" d="M577.238,11.116h-85.568c-39.939,0-72.433,32.492-72.433,72.431v85.571c0,39.938,32.492,72.431,72.433,72.431h85.568c39.938,0,72.432-32.492,72.432-72.431V83.547C649.669,43.608,617.175,11.116,577.238,11.116z M633.164,165.838c0,30.837-25.09,55.926-55.926,55.926h-85.568c-30.838,0-55.927-25.089-55.927-55.926v-85.57c0-30.837,25.089-55.925,55.927-55.925h85.568c30.836,0,55.926,25.088,55.926,55.925V165.838z"/></g></g><g id="instagram_2_"><path id="instagram-underlay" fill="#FFFFFF" d="M573.335,19.13h-77.764c-36.297,0-65.826,29.528-65.826,65.824v77.766c0,36.296,29.528,65.824,65.826,65.824h77.764c36.295,0,65.824-29.528,65.824-65.824V84.954C639.16,48.659,609.63,19.13,573.335,19.13z"/><g id="instagram-icon"><path id="path1" fill=url(\'#instagram-hover\') d="M534.453,63.062c-34.889,0-63.272,28.383-63.272,63.271c0,34.888,28.383,63.27,63.272,63.27s63.27-28.382,63.27-63.27C597.722,91.444,569.341,63.062,534.453,63.062z M534.453,173.099c-25.785,0-46.766-20.979-46.766-46.766s20.979-46.766,46.766-46.766s46.766,20.979,46.766,46.766C581.218,152.119,560.24,173.099,534.453,173.099z"/><circle id="path2" fill=url(\'#instagram-hover\') cx="596.748" cy="57.56" r="13.755"/><path id="path3" fill=url(\'#instagram-hover\') d="M577.238,11.116h-85.568c-39.939,0-72.433,32.492-72.433,72.431v85.571c0,39.938,32.492,72.431,72.433,72.431h85.568c39.938,0,72.432-32.492,72.432-72.431V83.547C649.669,43.608,617.175,11.116,577.238,11.116z M633.164,165.838c0,30.837-25.09,55.926-55.926,55.926h-85.568c-30.838,0-55.927-25.089-55.927-55.926v-85.57c0-30.837,25.089-55.925,55.927-55.925h85.568c30.836,0,55.926,25.088,55.926,55.925V165.838z"/></g></g><g id="tumblr"><path id="path1" fill="#BB3635" d="M892.111,63.676H775.142c0,0-14.352,2.601-15.786,19.105c-1.435,16.505-10.046,71.042-70.325,84.676c0,76.783,0,81.089,0,81.089h40.905v104.771c10.763,131.318,204.515,117.685,243.981,69.607l-24.399-74.629h-55.974V247.831h63.869v-92.567h-64.585L892.111,63.676z"/><polygon id="path2" fill="#A53333" points="772.989,248.455 772.989,272.464 729.936,272.464 729.936,248.547 	"/><path id="path3" fill="#9B2B2F" d="M874.171,79.195h-52.384c0,0-2.871,72.479-70.325,101.181c0.717,37.316,0,50.949,0,50.949h38.751c0,0-0.004-7.174,0.714,122.71c22.963,127.016,166.743,82.235,164.331,62.434l-15.786-48.799c0,0-62.432,27.271-63.866-31.573V232.044h66.02v-60.278h-67.456v-92.57"/></g></svg><div class="newsletterAndLocation"><div class="section newsletter"><div class="section-title newsletter">newsletter</div><div class="section-description"><span>hottest news, merch, deals/ discounts,</span><span>hottest everything straight to your inbox!</span></div><!-- <form><input type="text" name="mail" id="mail" placeholder="your email..."><div class="submit" onclick="javascript:this.form.submit();">><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="484.709px" height="416.401px" viewBox="0 0 484.709 416.401" enable-background="new 0 0 484.709 416.401"xml:space="preserve"><polygon fill="#BB3535" points="0,85.428 484.709,0 222.312,416.401 "/><polygon fill="#77181C" points="77.293,200.5 246.77,142.929 130.446,279.112 "/><polygon fill="#77181C" points="93.26,393.948 77.293,200.5 130.446,279.112 "/><polygon fill="#971F24" points="93.26,393.948 130.446,279.112 152.237,312.076 "/></svg></div></form> --><!-- Begin MailChimp Signup Form --><div id="mc_embed_signup"><form action="//thegraveyard.us14.list-manage.com/subscribe/post?u=5a5351a324425a1ebbcefbb46&amp;id=628f306901" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate><div id="mc_embed_signup_scroll"><div class="mc-field-group" style="font-size: 0px"><!-- <label for="mce-EMAIL">Email Address </label> --><input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" placeholder="your email..." autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"></div><div id="mce-responses" class="clear"><div class="response" id="mce-error-response" style="display:none"></div><div class="response" id="mce-success-response" style="display:none"></div></div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--><div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_5a5351a324425a1ebbcefbb46_628f306901" tabindex="-1" value=""></div><div class="clear"><input style="display: none" type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div></div><div class="submit" onclick="javascript:this.parentNode.submit();"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="484.709px" height="416.401px" viewBox="0 0 484.709 416.401" enable-background="new 0 0 484.709 416.401"xml:space="preserve"><polygon fill="#BB3535" points="0,85.428 484.709,0 222.312,416.401 "/><polygon fill="#77181C" points="77.293,200.5 246.77,142.929 130.446,279.112 "/><polygon fill="#77181C" points="93.26,393.948 77.293,200.5 130.446,279.112 "/><polygon fill="#971F24" points="93.26,393.948 130.446,279.112 152.237,312.076 "/></svg></div></form></div><!--End mc_embed_signup--></div><div class="section location"><div class="section-title location">location</div><div class="section-description"><span>fashion show mall</span><span>3200 las vegas blvd. south</span><span>702.650.9710</span></div><a target="_blank" href="https://www.google.com/maps?ll=36.127224,-115.171551&z=16&t=m&hl=en-US&gl=US&mapclient=embed&cid=5314913054038889157"><div class="map"><iframe frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=Fashion+Show,+Las+Vegas,+NV,+United+States&key=AIzaSyAN0om9mFmy1QN6Wf54tXAowK4eT0ZUPrU"></iframe></div></a></div> <!-- <div class="section location"> --></div> <!-- <.newsletterAndLocation/> --><div class="copyright">© CopyrighT 2016 THE GRAVEYARD INC. All Rights Reserved.</div> <!-- <div class="copyright"> --></div> <!-- <div class="foot"></div> --></div>';

				$('.ajax-content .body').html(productHTML).promise().done(function(){

					var productTitle = $('.product-title').html();

					$('title').html( productTitle );

					$('.product-img.desktop img').on('load', function(){

						var rowHeightwoMargin = $('.product-ajax .row').outerHeight();

						var productDetailHeight = $('.product-ajax .row .product-detail').height()

						if(productDetailHeight > rowHeightwoMargin){

							$('.row .product-detail').addClass('expandable');

							$('.row .toggle').addClass('visible');

						}

					})

					$('.row .toggle').on('click', '.readmore', function(){

						$('.row').addClass('expanded');

						$('.toggle .readmore').removeClass('readmore').addClass('readless').html('read less');

					})

					$('.row .toggle').on('click', '.readless', function(){

						$('.row').removeClass('expanded');

						$('.toggle .readless').removeClass('readless').addClass('readmore').html('read more');

					})

					$('.section-title.product .back').on('click', function(){
						window.location.href = '#' + kind;
						sectionTransition();
					})

					if( cartItems.indexOf(url) > -1 ){

						$('.cta.add-to-cart').addClass('added').html('added');
					}

					$('.product-detail').on('click', '.cta.add-to-cart', function(){

						$(this).addClass('added').html('added');

						cart[url] = productObj;

						console.log( Object.keys(cart) )

						updateCartItemsCount();
					})

					$('.product-detail').on('click', '.cta.add-to-cart.added', function(){

						$(this).removeClass('added').html('add to cart');

						delete cart[url];

						updateCartItemsCount();

						populateCart();
					})

					$('.ajax-content').addClass('visible');
				});

			})
		},
	},
	'#404':{
		'title':'Something is here',
		'url':'pages/404.html',
		'controller': function(){
			$('.ajax-content').removeClass('visible');
			this.callback();
			$('.nav.desktop ul li.active').removeClass('active');
			navSizing();
			$('title').html(this.title);
			$(loadContainer).load(this.url);
			currentRoute = this.url;
		},
		'callback': function(){
			$(document).on('ajaxStop', function(){

				$(document).off('ajaxStop');

				$('.ajax-content').addClass('visible');

			})
		},
	},
	'#home': {
		'title':'The Graveyard',
		'url':'pages/home.html',
		'controller': function(){
			if(currentRoute != this.url){
				$('.ajax-content').removeClass('visible');
				this.callback();
				$('.nav.desktop ul li.active').removeClass('active');
				$('.home').addClass('active');
				navSizing();
				$('title').html(this.title);
				$(loadContainer).load(this.url);
				currentRoute = this.url;
			}
		},
		'callback': function(){
			$(document).on('ajaxStop', function(){

				$(document).off('ajaxStop');

				populatest('.toys');
				populatest('.decorations');
				populatest('.costumes');
				populatest('.accessories');
				nav('.costumes');
				nav('.accessories');
				nav('.decorations');
				nav('.toys');
				$('.section-anchor').on('click', sectionTransition);
				$('.product-lockup-wrapper').on('click', sectionTransition);
				$('.ajax-content').addClass('visible');

			})
		},
	},
	'#costumes': { //route costumes
		'title':'Costumes',
		'url':'pages/costumes.html',
		'controller': function(){
			$('.ajax-content').removeClass('visible');
			this.callback();
			$('.nav.desktop ul li.active').removeClass('active');
			$('.costumes').addClass('active');
			navSizing();
			$('title').html(this.title);
			$(loadContainer).load(this.url);
			currentRoute = this.url;
		},
		'callback': function(){

			$(document).on('ajaxStop', function(){

				$(document).off('ajaxStop');

				$('.sort').on('click', function(){

					$(this).toggleClass('open');

				})

				$('.sort .sort-options').on('click', function(){

					sectionTransition();
				})

				var hash = window.location.hash;
				if(hash.indexOf('filter') > 0){

					var filter = hash.split('?')[1].split('&')[0].split('=')[1];
					if(filter == 'men' || filter == 'women' || filter == 'girls' || filter == 'boys'){

						$('.sort .currently span').html(filter);
					}else{

						redirect404();
					}
				}
				if(hash.indexOf('page') < 0){

					var from = 0;

				}else{

					var from = (hash.substring(hash.indexOf('page') + 5, hash.length) - 1) * 16;

					if(!from || from < 0){

						from = 0;

					}

				}

				var to = from + 16;

				populateProducts('costumes',from,to);

				$('.ajax-content').addClass('visible');
			})
		},
	},
	'#accessories':{ //route accessories
		'title':'Accessories',
		'url':'pages/accessories.html',
		'controller': function(){
			$('.ajax-content').removeClass('visible');
			this.callback();
			$('.nav.desktop ul li.active').removeClass('active');
			$('.accessories').addClass('active');
			navSizing();
			$('title').html(this.title);
			$(loadContainer).load(this.url);
			currentRoute = this.url;
		},
		'callback': function(){

			$(document).on('ajaxStop', function(){

				$(document).off('ajaxStop');

				var hash = window.location.hash;

				if(hash.indexOf('page') < 0){

					var from = 0;

				}else{

					var from = (hash.substring(hash.indexOf('page') + 5, hash.length) - 1) * 16;

					if(!from || from < 0){

						from = 0;

					}

				}

				var to = from + 16;

				populateProducts('accessories',from,to);

				$('.ajax-content').addClass('visible');

			})
		},
	},
	'#toys': {
		'title':'Toys',
		'url':'pages/toys.html',
		'controller': function(){
			$('.ajax-content').removeClass('visible');
			this.callback();
			$('.nav.desktop ul li.active').removeClass('active');
			$('.toys').addClass('active');
			navSizing();
			$('title').html(this.title);
			$(loadContainer).load(this.url);
			currentRoute = this.url;
		},
		'callback': function(){
			$(document).on('ajaxStop', function(){

				$(document).off('ajaxStop');

				var hash = window.location.hash;

				if(hash.indexOf('page') < 0){

					var from = 0;

				}else{

					var from = (hash.substring(hash.indexOf('page') + 5, hash.length) - 1) * 16;

					if(!from || from < 0){

						from = 0;

					}

				}

				var to = from + 16;

				populateProducts('toys',from,to);

				$('.ajax-content').addClass('visible');

			})
		},
	},
	'#decorations': {
		'title':'Decorations',
		'url':'pages/decorations.html',
		'controller': function(){
			$('.ajax-content').removeClass('visible');
			this.callback();
			$('.nav.desktop ul li.active').removeClass('active');
			$('.decorations').addClass('active');
			navSizing();
			$('title').html(this.title);
			$(loadContainer).load(this.url);
			currentRoute = this.url;
		},
		'callback': function(){
			$(document).on('ajaxStop', function(){

				$(document).off('ajaxStop');

				var hash = window.location.hash;

				if(hash.indexOf('page') < 0){

					var from = 0;

				}else{

					var from = (hash.substring(hash.indexOf('page') + 5, hash.length) - 1) * 16;

					if(!from || from < 0){

						from = 0;

					}

				}

				var to = from + 16;

				populateProducts('decorations',from,to);

				$('.ajax-content').addClass('visible');

			})
		},
	},
	'#cart': {	//route cart
		'title':'Cart',
		'url':'pages/cart.html',
		'controller': function(){
			$('.ajax-content').removeClass('visible');
			this.callback();
			$('.nav.desktop ul li.active').removeClass('active');
			$('.cart').addClass('active');
			navSizing();
			$('title').html(this.title);
			$(loadContainer).load(this.url);
			currentRoute = this.url;
		},
		'callback': function(){
			$(document).on('ajaxStop', function(){

				$(document).off('ajaxStop');

				updateCartItemsCount();

				populateCart();

				$('.ajax-content').addClass('visible');

			})
		},
	},
	'#blog': { //route blog
		'title':'Blog',
		'url':'pages/blog.html',
		'controller': function(){
			$('.ajax-content').removeClass('visible');
			this.callback();
			$('.nav.desktop ul li.active').removeClass('active');
			$('.blog').addClass('active');
			navSizing();
			$('title').html(this.title);
			$(loadContainer).load(this.url);
			currentRoute = this.url;
		},
		'callback': function(){
			$(document).on('ajaxStop', function(){

				$(document).off('ajaxStop');

				populateBlog();
				readmore('.block1');
				readmore('.block2');
				readmore('.block3');

				$('.ajax-content').addClass('visible');
			})
		},
	},
}
var loadContainer = '.body';	//THE DIV WHERE YOU WANT THE AJAX CONTENT TO BE LOADED INTO
var routeIndex = '#home';	//ROUTE FOR "/"
var route404 = '#404'; //404 route
//DON'T CHANGE ANYTHING AFTER THIS
var routing = function(){
	var url = window.location.hash;
	if( url.indexOf('?') > -1 ){

		url = url.substring(url.indexOf('#'), url.indexOf('?'))
	}
	if(!url){

		routes[routeIndex].controller()

	}else{
		var routesNames = Object.keys(routes)

		if( routesNames.indexOf(url) > -1 ){

			routes[url].controller()

		}else{

			routes[route404].controller()
			
		}
	}
}
;(function(){

	$(window).on('load', function(){	

		routing();

	})

	$(window).on('hashchange', function(){

		routing();

	})
})()
//ROUTER ENDS
var populateCart = function(){
	$('.ajax-content.cart .products').html('');

	var cartItems = Object.keys(cart);

	if(cartItems.length > 0){

		for(var i = 0; i < cartItems.length; i++){

			var thisItem = cart[cartItems[i]];

			var thisItemHTML = '<div class="product-lockup-wrapper"><a href="'+ thisItem['pageURL'] +'" class="product-lockup"><div class="delete">x</div><img class="'+ thisItem['class'] +'" src="'+ thisItem['imgURL'] +'"><div class="product-overlay"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="322.454px" height="98.995px" viewBox="0 0 322.454 98.995" enable-background="new 0 0 322.454 98.995" xml:space="preserve"><path d="M254.917,0H0v98.995h254.917l67.537-49.498L254.917,0z M274.584,61.164c-6.443,0-11.667-5.224-11.667-11.666c0-6.443,5.224-11.667,11.667-11.667c6.443,0,11.667,5.224,11.667,11.667C286.251,55.94,281.027,61.164,274.584,61.164z"></path><text fill="#FFFFFF"><tspan class="then" font-size="30" y="60" x="10">'+ thisItem['priceThen'] +'</tspan><tspan class="now" font-size="50" y="60" x="100">'+ thisItem['priceNow'] +'</tspan></text></svg></div></a></div>';

			$('.ajax-content.cart .products').append(thisItemHTML);
		}
	}else{

		$('.ajax-content.cart .body p').addClass('visible');
		$('.cta.checkout').addClass('hidden');
	}

	$('.delete').on('click', function(e){

		e.preventDefault();
		var href = $(this).parents('a').attr('href');
		var params = getParams(href);
		var kind = params['kind'];
		var url = params['url'];

		delete cart[url];

		updateCartItemsCount();

		populateCart();
	})
}
var populateBlog = function(){
	for(var i = 0; i < blogPosts.length; i++){

		var articleBlocks = $('.article-block');

		articleBlocks.eq(i).html(blogPosts[i])
	}
}
var blocks = {};
var readmore = function(caller){

	var wScroll = $(window).scrollTop();

	$(window).on('scroll', function(){

		wScroll = $(window).scrollTop();
	})

	blocks[caller] = {

		'containerHeight': 0,
		'initialPos': 0,
		'currentPos': 0,
		activateReadMore: function(){

			var blocksObj = blocks;

			$('.article-block' + caller).on('click', '.readmore', function(){

				var $this = $(this);
				var wScrollIncludeHeight = $(window).scrollTop() + $(window).height() - $this.height();
				var wScrollWithoutHeight = $(window).scrollTop() + $(window).height();
				blocks[caller].initialPos = $this.offset().top;
				blocks[caller].currentPos = $this.offset().top;

				$this.parents('.article-block').toggleClass('expanded');
				blocks[caller].containerHeight = $this.parents('.article-block').offset().top + $this.parents('.article-block').outerHeight();

				if(wScrollWithoutHeight <= blocks[caller].containerHeight && wScrollIncludeHeight >= blocks[caller].initialPos){

					$this.addClass('dynamic').html('read less').addClass('readless').removeClass('readmore').removeClass('fixedbottom').removeClass('fixedtop');
					// console.log('containded!')
				}else if(wScrollWithoutHeight >= blocks[caller].containerHeight){
					
					$this.removeClass('dynamic').html('read less').addClass('readless').removeClass('readmore').addClass('fixedbottom').removeClass('fixedtop');
					// console.log('exceeded bottom!')
				}else if(wScrollIncludeHeight <= blocks[caller].initialPos){

					$this.removeClass('dynamic').html('read less').addClass('readless').removeClass('readmore').removeClass('fixedbottom').addClass('fixedtop');
					// console.log('exceeded top!')
				}

				$(window).on('scroll', function(){

					var wScrollIncludeHeight = $(window).scrollTop() + $(window).height() - $this.height();
					var wScrollWithoutHeight = $(window).scrollTop() + $(window).height();

					if($this.hasClass('readless')){
					
						if(wScrollWithoutHeight <= blocks[caller].containerHeight && wScrollIncludeHeight >= blocks[caller].initialPos){

							$this.addClass('dynamic').removeClass('fixedbottom').removeClass('fixedtop');
						}else if(wScrollWithoutHeight >= blocks[caller].containerHeight){
							
							$this.removeClass('dynamic').addClass('fixedbottom').removeClass('fixedtop');
						}else if(wScrollIncludeHeight <= blocks[caller].initialPos){

							$this.removeClass('dynamic').removeClass('fixedbottom').addClass('fixedtop');
						}
					}
				})
			})

			$('.article-block' + caller).on('click', '.readless', function(){

				var $this = $(this);
				var wScrollIncludeHeight = $(window).scrollTop() - $this.height();
				if(wScrollIncludeHeight > blocks[caller].initialPos){
					
					$('html, body').animate({ scrollTop: $this.parents('.article-block').offset().top }, 0, 'swing');
				}
				$this.parents('.article-block').toggleClass('expanded');
				$this.removeClass('readless').addClass('fixedtop').removeClass('fixedbottom').addClass('readmore').removeClass('dynamic').html('read more');
				updateBlocks();
			})
		}
	}

	blocks[caller].activateReadMore();
}
var updateBlocks = function(){

	for(var i = 0; i < Object.keys(blocks).length; i++){

		var thisBlock = blocks[Object.keys(blocks)[i]];

		thisBlock['initialPos'] = $('.article-block' + Object.keys(blocks)[i]).offset().top + (($(window).height()*1.6)+$('.article-block' + Object.keys(blocks)[i] + ' .toggle').outerHeight(true));
		thisBlock['containerHeight'] = $('.article-block' + Object.keys(blocks)[i]).offset().top + $('.article-block' + Object.keys(blocks)[i]).outerHeight();
	}
}
var paginate = function(section,currentPage,total,filter){

	var page = 'page';

	if(filter){

		filter = 'filter=' + filter;
		page = '&page';
	}

	var renderList = function(){

		//first page start at page 1 instead of 0
		currentPage = currentPage + 1;

		for(var i = 1; i <= total; i++){

			if(i == currentPage){

				var pageHTML = '<a href="#'+ section +'?' + filter + page +'='+i+'" class="active">'+i+'</a>';

			}else{

				var pageHTML = '<a href="#'+ section +'?' + filter + page +'='+i+'">'+i+'</a>';

			}

			$('.ajax-content.'+section+' .paginator .pages').append(pageHTML);

			if(i == 1){

				if(currentPage <= 4){

					var firstPage = '<a href="#'+ section +'?' + filter + page +'='+i+'">'+i+'</a>';

				}else{

					var firstPage = '<a href="#'+ section +'?' + filter + page +'='+i+'">'+i+' ...</a>';

				}

				$('.firstPage').append(firstPage);

			}else if(i == total){

				if(currentPage > total - 4){

					var lastPage = '<a href="#'+ section +'?' + filter + page +'='+i+'">'+i+'</a>';

				}else{

					var lastPage = '<a href="#'+ section +'?' + filter + page +'='+i+'">... '+i+'</a>';

				}

				$('.lastPage').append(lastPage);

			}
		}

		$('.ajax-content.'+section+' .paginator .pages a').removeClass('visible');

		//first 3 pages
		if(currentPage <= 3){

			if(total > 5){

				$('.lastPage a').removeClass('visible');
				$('.firstPage a').removeClass('visible');
				$('.lastPage a').addClass('visible');
			}

			for(var i = 0; i < 5; i++){

				if($('.ajax-content.'+section+' .paginator .pages a').eq(i).length){

					$('.ajax-content.'+section+' .paginator .pages a').eq(i).addClass('visible');				

				}
			}
		//last 3 pages
		}else if(currentPage > total - 3){

			if(total > 5){

				$('.lastPage a').removeClass('visible');
				$('.firstPage a').removeClass('visible');
				$('.firstPage a').addClass('visible');
			}

			for(var i = total - 5; i <= total; i++){

				if($('.ajax-content.'+section+' .paginator .pages a').eq(i).length){

					$('.ajax-content.'+section+' .paginator .pages a').eq(i).addClass('visible');				

				}
			}

		}else{

			if(total > 5){

				$('.lastPage a').removeClass('visible');
				$('.firstPage a').removeClass('visible');
				$('.lastPage a').addClass('visible');
				$('.firstPage a').addClass('visible');
			}

			for(var i = currentPage - 3; i <= currentPage + 1; i++){

				if($('.ajax-content.'+section+' .paginator .pages a').eq(i).length){

					$('.ajax-content.'+section+' .paginator .pages a').eq(i).addClass('visible');				

				}
			}
		}
		if(total > 1){

			$('.paginator').addClass('visible');
		}
	}

	renderList();
}
var redirect404 = function(){

	$(loadContainer).load(routes['#404'].url);
}
var populateProducts = function(section,from,to){

	var items = [];
	var keys = Object.keys(products[section]);
	var hash = window.location.hash;
	var params = hash.split('?');
	if(params[1]){

		params = params[1].split('&');
	}
	if(params[0].substring(0,6) == 'filter'){

		var filter = params[0].substring(7, params[0].length);

		for(var i = 0; i < Object.keys(products[section]).length; i++){

			if(keys[i].split('/')[2] == filter){

				items.push(products[section][keys[i]]);

			}
		}
	}else{

		for(var i = 0; i < Object.keys(products[section]).length; i++){

			items.push(products[section][keys[i]]);

		}
	}
	if(!items[from]){

		redirect404();

	}else{
		for(i = from; i < to; i++){

			if(items[i]){

				var productObj = items[i];

				var productHTML = '<div class="product-lockup-wrapper"><a href="'+ productObj['pageURL'] +'" class="product-lockup"><img class="'+ productObj['class'] +'" src="'+ productObj['imgURL'] +'"><div class="product-overlay"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="322.454px" height="98.995px" viewBox="0 0 322.454 98.995" enable-background="new 0 0 322.454 98.995"xml:space="preserve"><path d="M254.917,0H0v98.995h254.917l67.537-49.498L254.917,0z M274.584,61.164c-6.443,0-11.667-5.224-11.667-11.666c0-6.443,5.224-11.667,11.667-11.667c6.443,0,11.667,5.224,11.667,11.667C286.251,55.94,281.027,61.164,274.584,61.164z"/><text fill="#FFFFFF"><tspan class="then" font-size="30" y="60" x="10">'+ productObj['priceThen'] +'</tspan><tspan class="now" font-size="50" y="60" x="100">'+ productObj['priceNow'] +'</tspan></text></svg></div></a></div>';

				$('.ajax-content.'+ section +' .body .products').append(productHTML);

			}
		}

		var filterWithAmpersand = filter || '';

		paginate(section, from/16, Math.ceil(items.length/16), filterWithAmpersand);
	}
}
var navSizing = function(){

	var width = $(window).outerWidth();

	if(width >= 768){

		$('.nav.desktop ul li').fitText(1);
		$('.nav.desktop ul li.active').fitText(.7);

		$('.nav.desktop ul li').on('mouseover', function(){

			$('.nav.desktop ul li').fitText(1);

			$(this).fitText(.7);

		})
		$('.nav.desktop ul li').on('mouseleave', function(){

			$('.nav.desktop ul li').fitText(1);
			$('.nav.desktop ul li.active').fitText(.7);

		})

		updateCartItemsCount();

		$('.nav').addClass('visible');
		$('li').addClass('animated');

	}else{

		$('.nav.desktop ul li').fitText(.8, {minSize:'30px',maxSize:'30px'});
		$('.nav.desktop ul li.active').fitText(.7, {minSize:'40px',maxSize:'40px'});

		$('.nav.desktop ul li').on('mouseover', function(){

			$('.nav.desktop ul li').fitText(1, {minSize:'30px',maxSize:'30px'});

			$(this).fitText(.7, {minSize:'40px',maxSize:'40px'});

		})
		$('.nav.desktop ul li').on('mouseleave', function(){

			$('.nav.desktop ul li').fitText(.8, {minSize:'30px',maxSize:'30px'});
			$('.nav.desktop ul li.active').fitText(.7, {minSize:'40px',maxSize:'40px'});

		})

		updateCartItemsCount();

		$('.nav').addClass('visible');
		$('li').addClass('animated');

	}

}
//router ends
var updateCartItemsCount = function(){

	$('.cartItemsCount').html( Object.keys(cart).length );	
}
var mobileRender = function(){

	var wWidth = $(window).width();

	var wHeight = $(window).height();

	if(wWidth < 768){

		if(wWidth * 1.2 < wHeight){

			$('.slider').addClass('portrait');
			$('.slider').addClass('visible');

		}else{

			$('.slider').removeClass('portrait');
			$('.slider').addClass('visible');		

		}

	}else{

		$('.slider').addClass('visible');

	}

}
var fontSizing = function(){ //UN-USED

	var wWidth = $(window).width();

	$('.product-overlay').fitText(.7);

	if(wWidth >= 768){

		return true;

	}else{

		return true;

	}

}
var nav = function(caller){

	var row = {};

	row[caller] = {

		'navController': function(){

			var wWidth = $(window).width();

			var distance = 0;
			var totalDistance = 200;
			if(wWidth <= 768){
				totalDistance = 500;
			}
			if(wWidth <= 540){
				totalDistance = 1100;
			}

			$(caller + ' .row-body').css({
				'left':'-'+ distance +'%',
			})

			if(distance == 0){

				$(caller + ' .arrow.left').removeClass('enabled');
				$(caller + ' .arrow.left').addClass('disabled');

			}if(distance == totalDistance){

				$(caller + ' .arrow.right').removeClass('enabled');
				$(caller + ' .arrow.right').addClass('disabled');		

			}

			$( caller + ' .arrow.left').on('click', function(){

				if(distance == 0){

					distance = distance;

				}else{

					distance = distance - 100;

				}

				$(caller + ' .row-body').css({
					'left':'-'+ distance +'%',
				})

				$(caller + ' .arrow.right').addClass('enabled');
				$(caller + ' .arrow.right').removeClass('disabled');

				if(distance == 0){

					$(caller + ' .arrow.left').removeClass('enabled');
					$(caller + ' .arrow.left').addClass('disabled');

				}
			})
			$(caller + ' .arrow.right').on('click', function(){

				if(distance == totalDistance){

					distance = distance;

				}else{

					distance = distance + 100;

				}

				$(caller + ' .row-body').css({
					'left':'-'+ distance +'%',
				})
				$(caller + ' .arrow.left').addClass('enabled');
				$(caller + ' .arrow.left').removeClass('disabled');

				if(distance == totalDistance){

					$(caller + ' .arrow.right').removeClass('enabled');
					$(caller + ' .arrow.right').addClass('disabled');	

				}
			})
		}
	} //<propertyDefinition/>

	row[caller].navController();
}
var sectionTransition = function(){

	var position = $('.head').offset().top + $('.head').outerHeight(true);

	$('html, body').animate({ scrollTop: position }, 400, 'swing');

}
var getParams = function(hash){

	var query = hash.substring(hash.indexOf('?') + 1, hash.length);

	var kind = query.substring(0, query.indexOf('/'));

	var params = {

		'url': query,

		'kind': kind,

	};

	return params;

}
$(window).on('load', function(){

	$('.nav.desktop .toggle').on('click', function(){

		$('.nav.desktop ul').toggleClass('active');

	})

	$('html').fitText(2);

	$('.nav ul li').on('click', function(){

		$('.nav.desktop ul').removeClass('active');

		sectionTransition();

	})

	mobileRender();

	$(window).on('resize', function(){

		mobileRender();

	})

	WebFont.load({
		custom: {
			families: ['Exocet'],
			urls: ['assets/fonts/exocet.css']
		},
		timeout: 60000,
	})

	var locked = false;

	$('.left-shade ul li').on('click', function(){

		locked = true;
		setTimeout(function(){
			locked = false;
		}, 5000)

		$('.left-shade ul li.active').removeClass('active');

		$(this).addClass('active');

		var index = $(this).index();

		$('.slider .slides-wrapper').css({

			'left': index * -100 + '%',

		})

	})

	//automating slider
	setInterval(function(){
			
		if(locked == false){
			var totalSlides = $('.left-shade ul li').length;

			var currentSlide = $('.left-shade ul li.active').index();

			var nextSlide = currentSlide + 1;

			if(nextSlide == totalSlides){

				nextSlide = 0;

			}

			$('.left-shade ul li.active').removeClass('active');

			$('.left-shade ul li').eq(nextSlide).addClass('active');

			$('.slider .slides-wrapper').css({

				'left': nextSlide * -100 + '%',

			})
		}
	}, 5000)
})
























































