(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueComponentsName"] = factory();
	else
		root["VueComponentsName"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 43);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(2)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ },
/* 2 */
/***/ function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ },
/* 3 */
/***/ function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ },
/* 5 */,
/* 6 */
/***/ function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ },
/* 7 */
/***/ function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(27)
  , defined = __webpack_require__(6);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(11)
module.exports = __webpack_require__(42)

if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(14)
if (false) {
(function () {
var hotAPI = require("vue-hot-reload-api")
hotAPI.install(require("vue"))
if (!hotAPI.compatible) return
var id = "-!babel!./../../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Table.vue"
hotAPI.createRecord(id, module.exports)
module.hot.accept(["-!babel!./../../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Table.vue","-!vue-html-loader!./../../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Table.vue"], function () {
var newOptions = require("-!babel!./../../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=script&index=0!./Table.vue")
if (newOptions && newOptions.__esModule) newOptions = newOptions.default
var newTemplate = require("-!vue-html-loader!./../../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=template&index=0!./Table.vue")
hotAPI.update(id, newOptions, newTemplate)
})
})()
}

/***/ },
/* 10 */
/***/ function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(12);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(10)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../node_modules/.0.21.0@css-loader/index.js!./../../../node_modules/.7.1.7@vue-loader/lib/style-rewriter.js?id=_v-263f320b&file=Table.vue!./../../../node_modules/.2.2.3@less-loader/index.js!./../../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Table.vue", function() {
			var newContent = require("!!./../../../node_modules/.0.21.0@css-loader/index.js!./../../../node_modules/.7.1.7@vue-loader/lib/style-rewriter.js?id=_v-263f320b&file=Table.vue!./../../../node_modules/.2.2.3@less-loader/index.js!./../../../node_modules/.7.1.7@vue-loader/lib/selector.js?type=style&index=0!./Table.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".vc-table-container {\n  position: relative;\n}\n.vc-table-container .search-area,\n.vc-table-container .export-area {\n  display: inline-block;\n  margin-bottom: 10px;\n  z-index: 2;\n  position: relative;\n}\n.vc-table-container .search-area .input-box {\n  display: inline-block;\n  position: relative;\n}\n.vc-table-container .search-area .input-box:hover .clear-it {\n  visibility: visible;\n}\n.vc-table-container .search-area .input-box .clear-it {\n  visibility: hidden;\n  position: absolute;\n  top: 50%;\n  right: 6px;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n  opacity: .3;\n}\n.vc-table-container .vc-table-title {\n  position: absolute;\n  left: 50%;\n  width: 100%;\n  -webkit-transform: translate(-50%, 0);\n  transform: translate(-50%, 0);\n  height: 30px;\n  line-height: 30px;\n  padding: 0 250px;\n}\n.vc-table-container .vc-table-title.title-only {\n  top: -40px;\n  padding: 0;\n}\n.vc-table-container .vc-table-title.title-align-left {\n  text-align: left;\n}\n.vc-table-container .vc-table-title.title-align-center {\n  text-align: center;\n}\n.vc-table-container .vc-table-title.title-align-right {\n  text-align: right;\n}\n.vc-table-container .vc-table-filter {\n  margin-left: 5px;\n  height: 30px;\n  padding: 4px 8px;\n  -wekit-box-shadow: none;\n  box-shadow: none;\n  font-size: 14px;\n  line-height: 1.428571429;\n  color: #555555;\n  vertical-align: middle;\n  background-color: #ffffff;\n  background-image: none;\n  border: 1px solid #cccccc;\n  border-radius: 4px;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  -webkit-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n}\n.vc-table-container .vc-table-filter:focus {\n  border-color: #46c3c1;\n  box-shadow: inset 0 1px 1px rgba(102, 175, 233, 0.1), 0 0 5px rgba(102, 175, 233, 0.3);\n}\ntable.vc-table {\n  border-radius: 3px;\n  text-align: center;\n  border: 1px solid #ddd;\n}\ntable.vc-table.title-only {\n  margin-top: 40px;\n}\ntable.vc-table.vc-table-fixed {\n  table-layout: fixed;\n}\ntable.vc-table th {\n  cursor: pointer;\n  text-align: center;\n  /* override bootstrap */\n  position: relative;\n  border-bottom: none;\n}\ntable.vc-table th.hide {\n  display: none;\n}\ntable.vc-table tr:hover {\n  cursor: pointer;\n}\ntable.vc-table td {\n  padding: 4px;\n  position: relative;\n}\ntable.vc-table td span.top1,\ntable.vc-table td span.top2,\ntable.vc-table td span.top3 {\n  background-color: #F37070;\n  border-radius: 4px;\n  padding: 3px 12px;\n  color: #fff;\n}\ntable.vc-table td span.topN {\n  /* 4位及以后 */\n  background-color: #e6e2e2;\n  border-radius: 4px;\n  padding: 3px 12px;\n}\ntable.vc-table th.active {\n  background-color: inherit;\n}\ntable.vc-table th.active .arrow {\n  /* 激活的排序标志 */\n  opacity: 1;\n  border-bottom-color: #28d63d;\n  border-top-color: #28d63d;\n}\ntable.vc-table .arrow {\n  display: inline-block;\n  vertical-align: middle;\n  width: 0;\n  height: 0;\n  margin-left: 5px;\n  opacity: 0.66;\n}\ntable.vc-table .arrow.asc {\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-bottom: 4px solid #666;\n}\ntable.vc-table .arrow.dsc {\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-top: 4px solid #666;\n}\n/* filterBy渐隐效果 */\n.staggered-transition {\n  -webkit-transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);\n  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);\n  overflow: hidden;\n  margin: 0;\n  height: 20px;\n}\n.staggered-enter,\n.staggered-leave {\n  opacity: 0;\n  height: 0;\n}\n/* 暂未实现 applied during enter/leave transition */\n/* .staggered-enter-active, .staggered-leave-active { */\n/*   transition: opacity .5s ease;  */\n/* } */\n/* v-for orderBy 自动动画 applied during moving transition */\n.staggered-move {\n  -webkit-transition: -webkit-transform 0.8s cubic-bezier(0.55, 0, 0.1, 1);\n  transition: -webkit-transform 0.8s cubic-bezier(0.55, 0, 0.1, 1);\n  transition: transform 0.8s cubic-bezier(0.55, 0, 0.1, 1);\n  transition: transform 0.8s cubic-bezier(0.55, 0, 0.1, 1), -webkit-transform 0.8s cubic-bezier(0.55, 0, 0.1, 1);\n}\n.vc-fade-transition {\n  display: inline-block;\n}\n.vc-fade-enter {\n  -webkit-animation: fadeinT .5s;\n          animation: fadeinT .5s;\n}\n.vc-fade-leave {\n  -webkit-animation: fadeoutT .5s;\n          animation: fadeoutT .5s;\n}\n/* 淡入-从上 */\n@-webkit-keyframes fadeinT {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-20px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n  }\n}\n@keyframes fadeinT {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-20px);\n            transform: translateY(-20px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n/* 淡出-向上 */\n@-webkit-keyframes fadeoutT {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(-20px);\n  }\n}\n@keyframes fadeoutT {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateY(-20px);\n            transform: translateY(-20px);\n  }\n}\n", ""]);

// exports


/***/ },
/* 13 */
/***/ function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ },
/* 14 */
/***/ function(module, exports) {

module.exports = "<div class=\"vc-table-container\">\n        <form class=\"search-area pull-left\" v-if=\"searchable\">\n            <label>{{ filterLabel }}:</label>\n            <div class=\"input-box\">\n                <input type=\"text\" class=\"vc-table-filter\" name=\"query\" v-model=\"filterKey\" />\n                <span class=\"clear-it glyphicon glyphicon-remove-circle\" @click=\"clearFilter\" aria-hidden=\"true\"></span>\n            </div>\n        </form>\n        <div class=\"vc-table-title\" :style=\"{ 'text-align': titleAlign }\" :class=\"{'title-only': !searchable && !exportable }\">{{ title }}</div>\n        <div class=\"export-area pull-right\" v-if=\"exportable\">\n            <button class=\"btn btn-info btn-sm pull-right\" @click=\"exportSortArgs\">导出数据</button>\n        </div>\n        <table class=\"vc-table table table-striped table-hover\" :class=\"{ 'vc-table-fixed': tableFixed, 'title-only': (!searchable && !exportable) }\">\n            <thead v-if=\"showTableHeader\">\n                <tr @click=\"handleClick\">\n                    <th v-for=\"key in columns\"\n                        @click=\"sortBy(key)\"\n                        :class=\"{ active: sortKey == key }\">\n                        {{ key | zhCN }}\n                        <span class=\"arrow\" \n                            v-if=\"sortable\"\n                            :class=\"sortOrders[key] > 0 ? 'asc' : 'dsc'\">\n                        </span>\n                    </th>\n                </tr>\n            </thead>\n            <tbody>\n                <!-- 制作表格的关键，行循环，再填每一行的列, 不可用内置index做排序!故数据源必须自带index -->\n                <tr v-for=\"\n                    (index, entry) in data\n                    | filterBy filterKey \n                    | newOrderBy sortKey sortOrders[sortKey]\" \n                    transition=\"staggered\"\n                    stagger=\"5\"\n                >\n                    <td v-for=\"key in columns\">\n                        <span>{{ entry[key] }}</span>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>";

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(40);
module.exports = __webpack_require__(0).Object.keys;

/***/ },
/* 16 */
/***/ function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(8)
  , toLength  = __webpack_require__(36)
  , toIndex   = __webpack_require__(35);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ },
/* 19 */
/***/ function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(16);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4)
  , document = __webpack_require__(3).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ },
/* 22 */
/***/ function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

var global    = __webpack_require__(3)
  , core      = __webpack_require__(0)
  , ctx       = __webpack_require__(20)
  , hide      = __webpack_require__(25)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ },
/* 24 */
/***/ function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(28)
  , createDesc = __webpack_require__(32);
module.exports = __webpack_require__(1) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(1) && !__webpack_require__(2)(function(){
  return Object.defineProperty(__webpack_require__(21)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(19);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(17)
  , IE8_DOM_DEFINE = __webpack_require__(26)
  , toPrimitive    = __webpack_require__(38)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(1) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

var has          = __webpack_require__(24)
  , toIObject    = __webpack_require__(8)
  , arrayIndexOf = __webpack_require__(18)(false)
  , IE_PROTO     = __webpack_require__(33)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(29)
  , enumBugKeys = __webpack_require__(22);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(23)
  , core    = __webpack_require__(0)
  , fails   = __webpack_require__(2);
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};

/***/ },
/* 32 */
/***/ function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

var shared = __webpack_require__(34)('keys')
  , uid    = __webpack_require__(39);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

var global = __webpack_require__(3)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(7)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(7)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(6);
module.exports = function(it){
  return Object(defined(it));
};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(4);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ },
/* 39 */
/***/ function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(37)
  , $keys    = __webpack_require__(30);

__webpack_require__(31)('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(15), __esModule: true };

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _keys = __webpack_require__(41);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// <template>
//     <div class="vc-table-container">
//         <form class="search-area pull-left" v-if="searchable">
//             <label>{{ filterLabel }}:</label>
//             <div class="input-box">
//                 <input type="text" class="vc-table-filter" name="query" v-model="filterKey" />
//                 <span class="clear-it glyphicon glyphicon-remove-circle" @click="clearFilter" aria-hidden="true"></span>
//             </div>
//         </form>
//         <div class="vc-table-title" :style="{ 'text-align': titleAlign }" :class="{'title-only': !searchable && !exportable }">{{ title }}</div>
//         <div class="export-area pull-right" v-if="exportable">
//             <button class="btn btn-info btn-sm pull-right" @click="exportSortArgs">导出数据</button>
//         </div>
//         <table class="vc-table table table-striped table-hover" :class="{ 'vc-table-fixed': tableFixed, 'title-only': (!searchable && !exportable) }">
//             <thead v-if="showTableHeader">
//                 <tr @click="handleClick">
//                     <th v-for="key in columns"
//                         @click="sortBy(key)"
//                         :class="{ active: sortKey == key }">
//                         {{ key | zhCN }}
//                         <span class="arrow" 
//                             v-if="sortable"
//                             :class="sortOrders[key] > 0 ? 'asc' : 'dsc'">
//                         </span>
//                     </th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <!-- 制作表格的关键，行循环，再填每一行的列, 不可用内置index做排序!故数据源必须自带index -->
//                 <tr v-for="
//                     (index, entry) in data
//                     | filterBy filterKey 
//                     | newOrderBy sortKey sortOrders[sortKey]" 
//                     transition="staggered"
//                     stagger="5"
//                 >
//                     <td v-for="key in columns">
//                         <span>{{ entry[key] }}</span>
//                     </td>
//                 </tr>
//             </tbody>
//         </table>
//     </div>
// </template>

// <style lang="less">
// @table-bg: #fff;
// @arrow-bg: #666;
// @arrow-active-bg: #28d63d;

// .vc-table-container {
//     position: relative;

//     .search-area,
//     .export-area {
//         display: inline-block;
//         margin-bottom: 10px;
//         z-index: 2;
//         position: relative;
//     }
//     .search-area {
//         .input-box {
//             display: inline-block;
//             position: relative;

//             &:hover .clear-it {
//                 visibility: visible;
//             }

//             .clear-it {
//                 visibility: hidden;
//                 position: absolute;
//                 top: 50%;
//                 right: 6px;
//                 -webkit-transform: translateY(-50%);
//                 transform: translateY(-50%);
//                 opacity: .3;
//             }
//         }
//     }
//     .vc-table-title {
//         position: absolute;
//         left: 50%;
//         width: 100%;
//         -webkit-transform: translate(-50%, 0);
//         transform: translate(-50%, 0);
//         height: 30px;
//         line-height: 30px;
//         padding: 0 250px;

//         &.title-only {
//             top: -@only-title-offset;
//             padding: 0;
//         }
//         &.title-align-left {
//             text-align: left;
//         }
//         &.title-align-center {
//             text-align: center;
//         }
//         &.title-align-right {
//             text-align: right;
//         }
//     }

//     // input
//     .vc-table-filter {
//         margin-left: 5px;
//         height: 30px;
//         padding: 4px 8px;
//         -wekit-box-shadow: none;
//         box-shadow: none;
//         font-size: 14px;
//         line-height: 1.428571429;
//         color: #555555;
//         vertical-align: middle;
//         background-color: #ffffff;
//         background-image: none;
//         border: 1px solid #cccccc;
//         border-radius: 4px;
//         -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
//         box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
//         -webkit-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
//         transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
//     }
//     .vc-table-filter:focus {
//         border-color: #46c3c1;
//         -webkit-box-shadow: inset 0 1px 1px rgba(102, 175, 233, 0.1), 0 0 5px rgba(102, 175, 233, 0.3);
//         box-shadow: inset 0 1px 1px rgba(102, 175, 233, 0.1), 0 0 5px rgba(102, 175, 233, 0.3);
//     }
// }

// @only-title-offset: 40px;
// table.vc-table {
//     border-radius: 3px;
//     text-align: center;
//     border: 1px solid #ddd;


//     &.title-only {
//         margin-top: @only-title-offset;
//     }

//     &.vc-table-fixed {
//         table-layout: fixed;
//     }

//     th {
//         &.hide {
//             display: none;
//         }
//         cursor: pointer;
//         text-align: center; /* override bootstrap */
//         position: relative;
//         border-bottom: none;
//     }

//     tr:hover {
//         cursor: pointer;  
//     }

//     td {
//         // background-color: @table-bg;
//         padding: 4px;
//         position: relative;

//         // Rank排位label
//         span.top1,
//         span.top2,
//         span.top3 {
//             background-color: #F37070;
//             border-radius: 4px;
//             padding: 3px 12px;
//             color: #fff;
//         }
//         span.topN { /* 4位及以后 */
//             background-color: #e6e2e2;
//             border-radius: 4px;
//             padding: 3px 12px;
//         }
//     }

//     th.active {
//         background-color: inherit;
//     }

//     th.active .arrow { /* 激活的排序标志 */
//         opacity: 1;
//         border-bottom-color: @arrow-active-bg;
//         border-top-color: @arrow-active-bg;
//     }

//     .arrow {
//         display: inline-block;
//         vertical-align: middle;
//         width: 0;
//         height: 0;
//         margin-left: 5px;
//         opacity: 0.66;
//     }

//     .arrow.asc {
//         border-left: 4px solid transparent;
//         border-right: 4px solid transparent;
//         border-bottom: 4px solid @arrow-bg;
//     }

//     .arrow.dsc {
//         border-left: 4px solid transparent;
//         border-right: 4px solid transparent;
//         border-top: 4px solid @arrow-bg;
//     }
// }

// /* filterBy渐隐效果 */
// .staggered-transition {
//     transition: all .5s cubic-bezier(.55, 0, .1, 1);
//     overflow: hidden;
//     margin: 0;
//     height: 20px;
// }
// .staggered-enter, .staggered-leave {
//     opacity: 0;
//     height: 0;
// }
// /* 暂未实现 applied during enter/leave transition */
// /* .staggered-enter-active, .staggered-leave-active { */
// /*   transition: opacity .5s ease;  */
// /* } */
// /* v-for orderBy 自动动画 applied during moving transition */
// .staggered-move {
//   transition: transform .8s cubic-bezier(.55, 0, .1, 1); 
// }

// .vc-fade-transition {
//     display: inline-block;
// }

// .vc-fade-enter {
//     animation: fadeinT .5s;
// }
// .vc-fade-leave {
//     animation: fadeoutT .5s;
// }

// @maxRange: 20px;

// /* 淡入-从上 */
// @-webkit-keyframes fadeinT {
//     0%{opacity:0;-webkit-transform:translateY(-@maxRange);}
//     100%{opacity:1;-webkit-transform:translateY(0);}
// }
// @-moz-keyframes fadeinT {
//     0%{opacity:0;-moz-transform:translateY(-@maxRange);}
//     100%{opacity:1;-moz-transform:translateY(0);}
// }
// @-ms-keyframes fadeinT {
//     0%{opacity:0;-ms-transform:translateY(-@maxRange);}
//     100%{opacity:1;-ms-transform:translateY(0);}
// }
// @keyframes fadeinT {
//     0%{opacity:0;transform:translateY(-@maxRange);}
//     100%{opacity:1;transform:translateY(0);}
// }

// /* 淡出-向上 */
// @-webkit-keyframes fadeoutT{
//     0%{opacity:1;-webkit-transform:translateY(0);}
//     100%{opacity:0;-webkit-transform:translateY(-@maxRange);}
// }
// @-moz-keyframes fadeoutT{
//     0%{opacity:1;-moz-transform:translateY(0);}
//     100%{opacity:0;-moz-transform:translateY(-@maxRange);}
// }
// @-ms-keyframes fadeoutT{
//     0%{opacity:1;-ms-transform:translateY(0);}
//     100%{opacity:0;-ms-transform:translateY(-@maxRange);}
// }
// @keyframes fadeoutT{
//     0%{opacity:1;transform:translateY(0);}
//     100%{opacity:0;transform:translateY(-@maxRange);}
// }
// </style>

// <script>
var COMPONENT_NS = 'TABLE';

exports.default = {
    props: {
        name: {
            type: String,
            default: 'vc-table' + Date.now()
        },
        tpl: String, // 放出tpl属性，让用户定制组件template，支持一个字符串来代表字符串模板或模板dom标示
        data: {
            type: Array
        },
        dataParser: { // a callback to parse each entry[key] in template
            type: Function
        },
        dataPlus: Object, // 高级定制: 外部可提供一个数据对象供模板使用(比如传入baseUrl)
        columns: Array,
        columnsMap: Object, // key => value对照映射，用于可能的中文filter
        title: String, // 表头
        titleAlign: {
            type: String,
            default: 'center'
        },
        tableFixed: { // table-layout: fixed的使用
            type: Boolean,
            default: false
        },
        searchable: { // 是否可搜索过滤
            type: Boolean,
            default: false
        },
        filterKey: String,
        filterLabel: {
            type: String,
            default: '筛选'
        },
        sortable: {
            type: Boolean,
            default: false
        },
        showTableHeader: {
            type: Boolean,
            default: true
        },
        exportLabel: {
            type: String,
            default: '导出'
        },
        exportable: { // 是否显示导出按钮(会dispatch排序参数等相关信息)
            type: Boolean,
            default: false
        }
    },
    created: function created() {
        if (this.tpl) {
            this.$options.template = this.tpl;
        }
    },
    data: function data() {
        var sortOrders = {};
        this.columns.forEach(function (key) {
            sortOrders[key] = 1;
        });
        return {
            // filterKey: '',
            sortKey: '',
            sortOrders: sortOrders
        };
    },
    filters: { // 局部filter
        newOrderBy: function newOrderBy(arr, key, sign) {
            sign = parseInt(sign);
            return arr.sort(function (item, nextItem) {
                var t1, t2;
                t1 = item[key] == null ? -Infinity : item[key];
                t2 = nextItem[key] == null ? -Infinity : nextItem[key];
                if (isNaN(t1) || isNaN(t2)) {
                    if (t1 > t2) {
                        return sign;
                    } else {
                        return -sign;
                    }
                }
                return (Number(t1) - Number(t2)) * sign;
            });
        },
        round: function round(value, accuracy, keep) {
            if (typeof value !== 'number') value = +value;

            var fixed = value.toFixed(accuracy);

            return keep ? fixed : +fixed;
        },
        zhCN: function zhCN(columnKey) {
            var map = this.columnsMap;
            var keys = (0, _keys2.default)(map);
            if (keys.length > 0) {
                for (var i = 0, len = keys.length; i < len; i++) {
                    if (columnKey === keys[i]) {
                        return map[columnKey];
                        console.log(map[columnKey]);
                    }
                }
            } else {
                return columnKey;
            }
        }
    },
    methods: {
        clearFilter: function clearFilter() {
            this.filterKey = '';
        },

        sortBy: function sortBy(key) {
            if (!this.sortable) return;
            this.sortKey = key;
            if (this.sortOrders[key] == null) {
                this.sortOrders[key] = -1;
            } else {
                this.sortOrders[key] = this.sortOrders[key] * -1; // toggle order
            }
        },
        // 分发当前点击index
        handleClick: function handleClick() {
            var info = [].slice.call(arguments, 0);
            var msg = {
                action: 'click',
                data: info
            };
            this.$dispatch(COMPONENT_NS, msg, name);
        },
        // 分发当前排序参数
        exportSortArgs: function exportSortArgs() {
            var msg = {
                action: 'exportSortInfo',
                data: {
                    sortKey: this.sortKey,
                    currentOrder: this.sortOrders[this.sortKey],
                    order: this.sortOrders
                }
            };
            this.$dispatch(COMPONENT_NS, msg, name);
        }
    },
    events: {
        'triggerSort': function triggerSort(key) {
            this.sortBy(key);
            var msg = {
                action: 'sortDone',
                data: {
                    sortKey: this.sortKey,
                    sortOrders: this.sortOrders
                }
            };
            this.$dispatch('COMPONENT_NS', msg);
        }
    }
};
// </script>

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var _Table = __webpack_require__(9);

var _Table2 = _interopRequireDefault(_Table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _Table2.default;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=build.js.map