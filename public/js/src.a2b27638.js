// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/xterm/lib/xterm.js":[function(require,module,exports) {
var define;
!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var i=t();for(var r in i)("object"==typeof exports?exports:e)[r]=i[r]}}(window,function(){return function(e){var t={};function i(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=e,i.c=t,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=32)}([function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(13);t.IBufferService=r.createDecorator("BufferService"),t.ICoreMouseService=r.createDecorator("CoreMouseService"),t.ICoreService=r.createDecorator("CoreService"),t.IDirtyRowService=r.createDecorator("DirtyRowService"),t.IInstantiationService=r.createDecorator("InstantiationService"),t.ILogService=r.createDecorator("LogService"),t.IOptionsService=r.createDecorator("OptionsService")},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){this._listeners=[]}return Object.defineProperty(e.prototype,"event",{get:function(){var e=this;return this._event||(this._event=function(t){return e._listeners.push(t),{dispose:function(){for(var i=0;i<e._listeners.length;i++)if(e._listeners[i]===t)return void e._listeners.splice(i,1)}}}),this._event},enumerable:!0,configurable:!0}),e.prototype.fire=function(e){for(var t=[],i=0;i<this._listeners.length;i++)t.push(this._listeners[i]);for(i=0;i<t.length;i++)t[i].call(void 0,e)},e}();t.EventEmitter=r},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){this._disposables=[],this._isDisposed=!1}return e.prototype.dispose=function(){this._isDisposed=!0,this._disposables.forEach(function(e){return e.dispose()}),this._disposables.length=0},e.prototype.register=function(e){this._disposables.push(e)},e.prototype.unregister=function(e){var t=this._disposables.indexOf(e);-1!==t&&this._disposables.splice(t,1)},e}();t.Disposable=r},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DEFAULT_COLOR=256,t.DEFAULT_ATTR=256|t.DEFAULT_COLOR<<9,t.CHAR_DATA_ATTR_INDEX=0,t.CHAR_DATA_CHAR_INDEX=1,t.CHAR_DATA_WIDTH_INDEX=2,t.CHAR_DATA_CODE_INDEX=3,t.NULL_CELL_CHAR="",t.NULL_CELL_WIDTH=1,t.NULL_CELL_CODE=0,t.WHITESPACE_CELL_CHAR=" ",t.WHITESPACE_CELL_WIDTH=1,t.WHITESPACE_CELL_CODE=32},function(e,t,i){"use strict";var r,n=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(e,t)},function(e,t){function i(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)});Object.defineProperty(t,"__esModule",{value:!0});var s=i(8),o=i(3),a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.content=0,t.fg=0,t.bg=0,t.combinedData="",t}return n(t,e),t.fromCharData=function(e){var i=new t;return i.setFromCharData(e),i},t.prototype.isCombined=function(){return 2097152&this.content},t.prototype.getWidth=function(){return this.content>>22},t.prototype.getChars=function(){return 2097152&this.content?this.combinedData:2097151&this.content?s.stringFromCodePoint(2097151&this.content):""},t.prototype.getCode=function(){return this.isCombined()?this.combinedData.charCodeAt(this.combinedData.length-1):2097151&this.content},t.prototype.setFromCharData=function(e){this.fg=e[o.CHAR_DATA_ATTR_INDEX],this.bg=0;var t=!1;if(e[o.CHAR_DATA_CHAR_INDEX].length>2)t=!0;else if(2===e[o.CHAR_DATA_CHAR_INDEX].length){var i=e[o.CHAR_DATA_CHAR_INDEX].charCodeAt(0);if(55296<=i&&i<=56319){var r=e[o.CHAR_DATA_CHAR_INDEX].charCodeAt(1);56320<=r&&r<=57343?this.content=1024*(i-55296)+r-56320+65536|e[o.CHAR_DATA_WIDTH_INDEX]<<22:t=!0}else t=!0}else this.content=e[o.CHAR_DATA_CHAR_INDEX].charCodeAt(0)|e[o.CHAR_DATA_WIDTH_INDEX]<<22;t&&(this.combinedData=e[o.CHAR_DATA_CHAR_INDEX],this.content=2097152|e[o.CHAR_DATA_WIDTH_INDEX]<<22)},t.prototype.getAsCharData=function(){return[this.fg,this.getChars(),this.getWidth(),this.getCode()]},t}(i(6).AttributeData);t.CellData=a},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(13);t.ICharSizeService=r.createDecorator("CharSizeService"),t.IMouseService=r.createDecorator("MouseService"),t.IRenderService=r.createDecorator("RenderService"),t.ISelectionService=r.createDecorator("SelectionService"),t.ISoundService=r.createDecorator("SoundService")},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){this.fg=0,this.bg=0}return e.toColorRGB=function(e){return[e>>>16&255,e>>>8&255,255&e]},e.fromColorRGB=function(e){return(255&e[0])<<16|(255&e[1])<<8|255&e[2]},e.prototype.clone=function(){var t=new e;return t.fg=this.fg,t.bg=this.bg,t},e.prototype.isInverse=function(){return 67108864&this.fg},e.prototype.isBold=function(){return 134217728&this.fg},e.prototype.isUnderline=function(){return 268435456&this.fg},e.prototype.isBlink=function(){return 536870912&this.fg},e.prototype.isInvisible=function(){return 1073741824&this.fg},e.prototype.isItalic=function(){return 67108864&this.bg},e.prototype.isDim=function(){return 134217728&this.bg},e.prototype.getFgColorMode=function(){return 50331648&this.fg},e.prototype.getBgColorMode=function(){return 50331648&this.bg},e.prototype.isFgRGB=function(){return 50331648==(50331648&this.fg)},e.prototype.isBgRGB=function(){return 50331648==(50331648&this.bg)},e.prototype.isFgPalette=function(){return 16777216==(50331648&this.fg)||33554432==(50331648&this.fg)},e.prototype.isBgPalette=function(){return 16777216==(50331648&this.bg)||33554432==(50331648&this.bg)},e.prototype.isFgDefault=function(){return 0==(50331648&this.fg)},e.prototype.isBgDefault=function(){return 0==(50331648&this.bg)},e.prototype.getFgColor=function(){switch(50331648&this.fg){case 16777216:case 33554432:return 255&this.fg;case 50331648:return 16777215&this.fg;default:return-1}},e.prototype.getBgColor=function(){switch(50331648&this.bg){case 16777216:case 33554432:return 255&this.bg;case 50331648:return 16777215&this.bg;default:return-1}},e}();t.AttributeData=r},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.addDisposableDomListener=function(e,t,i,r){return e.addEventListener(t,i,r),{dispose:function(){i&&e.removeEventListener(t,i,r)}}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.stringFromCodePoint=function(e){return e>65535?(e-=65536,String.fromCharCode(55296+(e>>10))+String.fromCharCode(e%1024+56320)):String.fromCharCode(e)},t.utf32ToString=function(e,t,i){void 0===t&&(t=0),void 0===i&&(i=e.length);for(var r="",n=t;n<i;++n){var s=e[n];s>65535?(s-=65536,r+=String.fromCharCode(55296+(s>>10))+String.fromCharCode(s%1024+56320)):r+=String.fromCharCode(s)}return r};var r=function(){function e(){this._interim=0}return e.prototype.clear=function(){this._interim=0},e.prototype.decode=function(e,t){var i=e.length;if(!i)return 0;var r=0,n=0;this._interim&&(56320<=(a=e.charCodeAt(n++))&&a<=57343?t[r++]=1024*(this._interim-55296)+a-56320+65536:(t[r++]=this._interim,t[r++]=a),this._interim=0);for(var s=n;s<i;++s){var o=e.charCodeAt(s);if(55296<=o&&o<=56319){if(++s>=i)return this._interim=o,r;var a;56320<=(a=e.charCodeAt(s))&&a<=57343?t[r++]=1024*(o-55296)+a-56320+65536:(t[r++]=o,t[r++]=a)}else t[r++]=o}return r},e}();t.StringToUtf32=r;var n=function(){function e(){this.interim=new Uint8Array(3)}return e.prototype.clear=function(){this.interim.fill(0)},e.prototype.decode=function(e,t){var i=e.length;if(!i)return 0;var r,n,s,o,a=0,c=0,l=0;if(this.interim[0]){var h=!1,u=this.interim[0];u&=192==(224&u)?31:224==(240&u)?15:7;for(var f=0,_=void 0;(_=63&this.interim[++f])&&f<4;)u<<=6,u|=_;for(var d=192==(224&this.interim[0])?2:224==(240&this.interim[0])?3:4,p=d-f;l<p;){if(l>=i)return 0;if(128!=(192&(_=e[l++]))){l--,h=!0;break}this.interim[f++]=_,u<<=6,u|=63&_}h||(2===d?u<128?l--:t[a++]=u:3===d?u<2048||u>=55296&&u<=57343||(t[a++]=u):u<65536||u>1114111||(t[a++]=u)),this.interim.fill(0)}for(var v=i-4,g=l;g<i;){for(;!(!(g<v)||128&(r=e[g])||128&(n=e[g+1])||128&(s=e[g+2])||128&(o=e[g+3]));)t[a++]=r,t[a++]=n,t[a++]=s,t[a++]=o,g+=4;if((r=e[g++])<128)t[a++]=r;else if(192==(224&r)){if(g>=i)return this.interim[0]=r,a;if(128!=(192&(n=e[g++]))){g--;continue}if((c=(31&r)<<6|63&n)<128){g--;continue}t[a++]=c}else if(224==(240&r)){if(g>=i)return this.interim[0]=r,a;if(128!=(192&(n=e[g++]))){g--;continue}if(g>=i)return this.interim[0]=r,this.interim[1]=n,a;if(128!=(192&(s=e[g++]))){g--;continue}if((c=(15&r)<<12|(63&n)<<6|63&s)<2048||c>=55296&&c<=57343)continue;t[a++]=c}else if(240==(248&r)){if(g>=i)return this.interim[0]=r,a;if(128!=(192&(n=e[g++]))){g--;continue}if(g>=i)return this.interim[0]=r,this.interim[1]=n,a;if(128!=(192&(s=e[g++]))){g--;continue}if(g>=i)return this.interim[0]=r,this.interim[1]=n,this.interim[2]=s,a;if(128!=(192&(o=e[g++]))){g--;continue}if((c=(7&r)<<18|(63&n)<<12|(63&s)<<6|63&o)<65536||c>1114111)continue;t[a++]=c}}return a},e}();t.Utf8ToUtf32=n},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.INVERTED_DEFAULT_COLOR=257,t.DIM_OPACITY=.5,t.CHAR_ATLAS_CELL_SPACING=1},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="undefined"==typeof navigator,n=r?"node":navigator.userAgent,s=r?"node":navigator.platform;function o(e,t){return e.indexOf(t)>=0}t.isFirefox=!!~n.indexOf("Firefox"),t.isSafari=/^((?!chrome|android).)*safari/i.test(n),t.isMac=o(["Macintosh","MacIntel","MacPPC","Mac68K"],s),t.isIpad="iPad"===s,t.isIphone="iPhone"===s,t.isWindows=o(["Windows","Win16","Win32","WinCE"],s),t.isLinux=s.indexOf("Linux")>=0},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.NUL="\0",e.SOH="",e.STX="",e.ETX="",e.EOT="",e.ENQ="",e.ACK="",e.BEL="",e.BS="\b",e.HT="\t",e.LF="\n",e.VT="\v",e.FF="\f",e.CR="\r",e.SO="",e.SI="",e.DLE="",e.DC1="",e.DC2="",e.DC3="",e.DC4="",e.NAK="",e.SYN="",e.ETB="",e.CAN="",e.EM="",e.SUB="",e.ESC="",e.FS="",e.GS="",e.RS="",e.US="",e.SP=" ",e.DEL=""}(t.C0||(t.C0={})),function(e){e.PAD="",e.HOP="",e.BPH="",e.NBH="",e.IND="",e.NEL="",e.SSA="",e.ESA="",e.HTS="",e.HTJ="",e.VTS="",e.PLD="",e.PLU="",e.RI="",e.SS2="",e.SS3="",e.DCS="",e.PU1="",e.PU2="",e.STS="",e.CCH="",e.MW="",e.SPA="",e.EPA="",e.SOS="",e.SGCI="",e.SCI="",e.CSI="",e.ST="",e.OSC="",e.PM="",e.APC=""}(t.C1||(t.C1={}))},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(3),n=i(9),s=i(23),o=i(6),a=i(26),c=function(){function e(e,t,i,r,n,s,o,a){this._container=e,this._alpha=r,this._colors=n,this._rendererId=s,this._bufferService=o,this._optionsService=a,this._scaledCharWidth=0,this._scaledCharHeight=0,this._scaledCellWidth=0,this._scaledCellHeight=0,this._scaledCharLeft=0,this._scaledCharTop=0,this._currentGlyphIdentifier={chars:"",code:0,bg:0,fg:0,bold:!1,dim:!1,italic:!1},this._canvas=document.createElement("canvas"),this._canvas.classList.add("xterm-"+t+"-layer"),this._canvas.style.zIndex=i.toString(),this._initCanvas(),this._container.appendChild(this._canvas)}return e.prototype.dispose=function(){this._container.removeChild(this._canvas),this._charAtlas&&this._charAtlas.dispose()},e.prototype._initCanvas=function(){this._ctx=a.throwIfFalsy(this._canvas.getContext("2d",{alpha:this._alpha})),this._alpha||this._clearAll()},e.prototype.onOptionsChanged=function(){},e.prototype.onBlur=function(){},e.prototype.onFocus=function(){},e.prototype.onCursorMove=function(){},e.prototype.onGridChanged=function(e,t){},e.prototype.onSelectionChanged=function(e,t,i){void 0===i&&(i=!1)},e.prototype.setColors=function(e){this._refreshCharAtlas(e)},e.prototype._setTransparency=function(e){if(e!==this._alpha){var t=this._canvas;this._alpha=e,this._canvas=this._canvas.cloneNode(),this._initCanvas(),this._container.replaceChild(this._canvas,t),this._refreshCharAtlas(this._colors),this.onGridChanged(0,this._bufferService.rows-1)}},e.prototype._refreshCharAtlas=function(e){this._scaledCharWidth<=0&&this._scaledCharHeight<=0||(this._charAtlas=s.acquireCharAtlas(this._optionsService.options,this._rendererId,e,this._scaledCharWidth,this._scaledCharHeight),this._charAtlas.warmUp())},e.prototype.resize=function(e){this._scaledCellWidth=e.scaledCellWidth,this._scaledCellHeight=e.scaledCellHeight,this._scaledCharWidth=e.scaledCharWidth,this._scaledCharHeight=e.scaledCharHeight,this._scaledCharLeft=e.scaledCharLeft,this._scaledCharTop=e.scaledCharTop,this._canvas.width=e.scaledCanvasWidth,this._canvas.height=e.scaledCanvasHeight,this._canvas.style.width=e.canvasWidth+"px",this._canvas.style.height=e.canvasHeight+"px",this._alpha||this._clearAll(),this._refreshCharAtlas(this._colors)},e.prototype._fillCells=function(e,t,i,r){this._ctx.fillRect(e*this._scaledCellWidth,t*this._scaledCellHeight,i*this._scaledCellWidth,r*this._scaledCellHeight)},e.prototype._fillBottomLineAtCells=function(e,t,i){void 0===i&&(i=1),this._ctx.fillRect(e*this._scaledCellWidth,(t+1)*this._scaledCellHeight-window.devicePixelRatio-1,i*this._scaledCellWidth,window.devicePixelRatio)},e.prototype._fillLeftLineAtCell=function(e,t){this._ctx.fillRect(e*this._scaledCellWidth,t*this._scaledCellHeight,window.devicePixelRatio,this._scaledCellHeight)},e.prototype._strokeRectAtCell=function(e,t,i,r){this._ctx.lineWidth=window.devicePixelRatio,this._ctx.strokeRect(e*this._scaledCellWidth+window.devicePixelRatio/2,t*this._scaledCellHeight+window.devicePixelRatio/2,i*this._scaledCellWidth-window.devicePixelRatio,r*this._scaledCellHeight-window.devicePixelRatio)},e.prototype._clearAll=function(){this._alpha?this._ctx.clearRect(0,0,this._canvas.width,this._canvas.height):(this._ctx.fillStyle=this._colors.background.css,this._ctx.fillRect(0,0,this._canvas.width,this._canvas.height))},e.prototype._clearCells=function(e,t,i,r){this._alpha?this._ctx.clearRect(e*this._scaledCellWidth,t*this._scaledCellHeight,i*this._scaledCellWidth,r*this._scaledCellHeight):(this._ctx.fillStyle=this._colors.background.css,this._ctx.fillRect(e*this._scaledCellWidth,t*this._scaledCellHeight,i*this._scaledCellWidth,r*this._scaledCellHeight))},e.prototype._fillCharTrueColor=function(e,t,i){this._ctx.font=this._getFont(!1,!1),this._ctx.textBaseline="middle",this._clipRow(i),this._ctx.fillText(e.getChars(),t*this._scaledCellWidth+this._scaledCharLeft,i*this._scaledCellHeight+this._scaledCharTop+this._scaledCharHeight/2)},e.prototype._drawChars=function(e,t,i){var s,o;e.isFgRGB()||e.isBgRGB()?this._drawUncachedChars(e,t,i):(e.isInverse()?(s=e.isBgDefault()?n.INVERTED_DEFAULT_COLOR:e.getBgColor(),o=e.isFgDefault()?n.INVERTED_DEFAULT_COLOR:e.getFgColor()):(o=e.isBgDefault()?r.DEFAULT_COLOR:e.getBgColor(),s=e.isFgDefault()?r.DEFAULT_COLOR:e.getFgColor()),s+=this._optionsService.options.drawBoldTextInBrightColors&&e.isBold()&&s<8&&s!==n.INVERTED_DEFAULT_COLOR?8:0,this._currentGlyphIdentifier.chars=e.getChars()||r.WHITESPACE_CELL_CHAR,this._currentGlyphIdentifier.code=e.getCode()||r.WHITESPACE_CELL_CODE,this._currentGlyphIdentifier.bg=o,this._currentGlyphIdentifier.fg=s,this._currentGlyphIdentifier.bold=!!e.isBold(),this._currentGlyphIdentifier.dim=!!e.isDim(),this._currentGlyphIdentifier.italic=!!e.isItalic(),this._charAtlas&&this._charAtlas.draw(this._ctx,this._currentGlyphIdentifier,t*this._scaledCellWidth+this._scaledCharLeft,i*this._scaledCellHeight+this._scaledCharTop)||this._drawUncachedChars(e,t,i))},e.prototype._drawUncachedChars=function(e,t,i){if(this._ctx.save(),this._ctx.font=this._getFont(!!e.isBold(),!!e.isItalic()),this._ctx.textBaseline="middle",e.isInverse())e.isBgDefault()?this._ctx.fillStyle=this._colors.background.css:e.isBgRGB()?this._ctx.fillStyle="rgb("+o.AttributeData.toColorRGB(e.getBgColor()).join(",")+")":this._ctx.fillStyle=this._colors.ansi[e.getBgColor()].css;else if(e.isFgDefault())this._ctx.fillStyle=this._colors.foreground.css;else if(e.isFgRGB())this._ctx.fillStyle="rgb("+o.AttributeData.toColorRGB(e.getFgColor()).join(",")+")";else{var r=e.getFgColor();this._optionsService.options.drawBoldTextInBrightColors&&e.isBold()&&r<8&&(r+=8),this._ctx.fillStyle=this._colors.ansi[r].css}this._clipRow(i),e.isDim()&&(this._ctx.globalAlpha=n.DIM_OPACITY),this._ctx.fillText(e.getChars(),t*this._scaledCellWidth+this._scaledCharLeft,i*this._scaledCellHeight+this._scaledCharTop+this._scaledCharHeight/2),this._ctx.restore()},e.prototype._clipRow=function(e){this._ctx.beginPath(),this._ctx.rect(0,e*this._scaledCellHeight,this._bufferService.cols*this._scaledCellWidth,this._scaledCellHeight),this._ctx.clip()},e.prototype._getFont=function(e,t){return(t?"italic":"")+" "+(e?this._optionsService.options.fontWeightBold:this._optionsService.options.fontWeight)+" "+this._optionsService.options.fontSize*window.devicePixelRatio+"px "+this._optionsService.options.fontFamily},e}();t.BaseRenderLayer=c},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="di$target",n="di$dependencies";function s(e,t,i){t[r]===t?t[n].push({id:e,index:i}):(t[n]=[{id:e,index:i}],t[r]=t)}t.serviceRegistry=new Map,t.getServiceDependencies=function(e){return e[n]||[]},t.createDecorator=function(e){if(t.serviceRegistry.has(e))return t.serviceRegistry.get(e);var i=function(e,t,r){if(3!==arguments.length)throw new Error("@IServiceName-decorator can only be used to decorate a parameter");s(i,e,r)};return i.toString=function(){return e},t.serviceRegistry.set(e,i),i}},function(e,t,i){"use strict";function r(e,t,i,r){if(void 0===i&&(i=0),void 0===r&&(r=e.length),i>=e.length)return e;i=(e.length+i)%e.length,r=r>=e.length?e.length:(e.length+r)%e.length;for(var n=i;n<r;++n)e[n]=t;return e}Object.defineProperty(t,"__esModule",{value:!0}),t.fill=function(e,t,i,n){return e.fill?e.fill(t,i,n):r(e,t,i,n)},t.fillFallback=r,t.concat=function(e,t){var i=new e.constructor(e.length+t.length);return i.set(e),i.set(t,e.length),i}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(8),n=i(3),s=i(4),o=i(6),a=3;t.DEFAULT_ATTR_DATA=Object.freeze(new o.AttributeData);var c=function(){function e(e,t,i){void 0===i&&(i=!1),this.isWrapped=i,this._combined={},this._data=new Uint32Array(e*a);for(var r=t||s.CellData.fromCharData([0,n.NULL_CELL_CHAR,n.NULL_CELL_WIDTH,n.NULL_CELL_CODE]),o=0;o<e;++o)this.setCell(o,r);this.length=e}return e.prototype.get=function(e){var t=this._data[e*a+0],i=2097151&t;return[this._data[e*a+1],2097152&t?this._combined[e]:i?r.stringFromCodePoint(i):"",t>>22,2097152&t?this._combined[e].charCodeAt(this._combined[e].length-1):i]},e.prototype.set=function(e,t){this._data[e*a+1]=t[n.CHAR_DATA_ATTR_INDEX],t[n.CHAR_DATA_CHAR_INDEX].length>1?(this._combined[e]=t[1],this._data[e*a+0]=2097152|e|t[n.CHAR_DATA_WIDTH_INDEX]<<22):this._data[e*a+0]=t[n.CHAR_DATA_CHAR_INDEX].charCodeAt(0)|t[n.CHAR_DATA_WIDTH_INDEX]<<22},e.prototype.getWidth=function(e){return this._data[e*a+0]>>22},e.prototype.hasWidth=function(e){return 12582912&this._data[e*a+0]},e.prototype.getFg=function(e){return this._data[e*a+1]},e.prototype.getBg=function(e){return this._data[e*a+2]},e.prototype.hasContent=function(e){return 4194303&this._data[e*a+0]},e.prototype.getCodePoint=function(e){var t=this._data[e*a+0];return 2097152&t?this._combined[e].charCodeAt(this._combined[e].length-1):2097151&t},e.prototype.isCombined=function(e){return 2097152&this._data[e*a+0]},e.prototype.getString=function(e){var t=this._data[e*a+0];return 2097152&t?this._combined[e]:2097151&t?r.stringFromCodePoint(2097151&t):""},e.prototype.loadCell=function(e,t){var i=e*a;return t.content=this._data[i+0],t.fg=this._data[i+1],t.bg=this._data[i+2],2097152&t.content&&(t.combinedData=this._combined[e]),t},e.prototype.setCell=function(e,t){2097152&t.content&&(this._combined[e]=t.combinedData),this._data[e*a+0]=t.content,this._data[e*a+1]=t.fg,this._data[e*a+2]=t.bg},e.prototype.setCellFromCodePoint=function(e,t,i,r,n){this._data[e*a+0]=t|i<<22,this._data[e*a+1]=r,this._data[e*a+2]=n},e.prototype.addCodepointToCell=function(e,t){var i=this._data[e*a+0];2097152&i?this._combined[e]+=r.stringFromCodePoint(t):(2097151&i?(this._combined[e]=r.stringFromCodePoint(2097151&i)+r.stringFromCodePoint(t),i&=-2097152,i|=2097152):i=t|1<<22,this._data[e*a+0]=i)},e.prototype.insertCells=function(e,t,i){if(e%=this.length,t<this.length-e){for(var r=new s.CellData,n=this.length-e-t-1;n>=0;--n)this.setCell(e+t+n,this.loadCell(e+n,r));for(n=0;n<t;++n)this.setCell(e+n,i)}else for(n=e;n<this.length;++n)this.setCell(n,i)},e.prototype.deleteCells=function(e,t,i){if(e%=this.length,t<this.length-e){for(var r=new s.CellData,n=0;n<this.length-e-t;++n)this.setCell(e+n,this.loadCell(e+t+n,r));for(n=this.length-t;n<this.length;++n)this.setCell(n,i)}else for(n=e;n<this.length;++n)this.setCell(n,i)},e.prototype.replaceCells=function(e,t,i){for(;e<t&&e<this.length;)this.setCell(e++,i)},e.prototype.resize=function(e,t){if(e!==this.length){if(e>this.length){var i=new Uint32Array(e*a);this.length&&(e*a<this._data.length?i.set(this._data.subarray(0,e*a)):i.set(this._data)),this._data=i;for(var r=this.length;r<e;++r)this.setCell(r,t)}else if(e){(i=new Uint32Array(e*a)).set(this._data.subarray(0,e*a)),this._data=i;var n=Object.keys(this._combined);for(r=0;r<n.length;r++){var s=parseInt(n[r],10);s>=e&&delete this._combined[s]}}else this._data=new Uint32Array(0),this._combined={};this.length=e}},e.prototype.fill=function(e){this._combined={};for(var t=0;t<this.length;++t)this.setCell(t,e)},e.prototype.copyFrom=function(e){for(var t in this.length!==e.length?this._data=new Uint32Array(e._data):this._data.set(e._data),this.length=e.length,this._combined={},e._combined)this._combined[t]=e._combined[t];this.isWrapped=e.isWrapped},e.prototype.clone=function(){var t=new e(0);for(var i in t._data=new Uint32Array(this._data),t.length=this.length,this._combined)t._combined[i]=this._combined[i];return t.isWrapped=this.isWrapped,t},e.prototype.getTrimmedLength=function(){for(var e=this.length-1;e>=0;--e)if(4194303&this._data[e*a+0])return e+(this._data[e*a+0]>>22);return 0},e.prototype.copyCellsFrom=function(e,t,i,r,n){var s=e._data;if(n)for(var o=r-1;o>=0;o--)for(var c=0;c<a;c++)this._data[(i+o)*a+c]=s[(t+o)*a+c];else for(o=0;o<r;o++)for(c=0;c<a;c++)this._data[(i+o)*a+c]=s[(t+o)*a+c];var l=Object.keys(e._combined);for(c=0;c<l.length;c++){var h=parseInt(l[c],10);h>=t&&(this._combined[h-t+i]=e._combined[h])}},e.prototype.translateToString=function(e,t,i){void 0===e&&(e=!1),void 0===t&&(t=0),void 0===i&&(i=this.length),e&&(i=Math.min(i,this.getTrimmedLength()));for(var s="";t<i;){var o=this._data[t*a+0],c=2097151&o;s+=2097152&o?this._combined[t]:c?r.stringFromCodePoint(c):n.WHITESPACE_CELL_CHAR,t+=o>>22||1}return s},e}();t.BufferLine=c},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.promptLabel="Terminal input",t.tooMuchOutput="Too much output to announce, navigate to rows manually to read"},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CHARSETS={},t.DEFAULT_CHARSET=t.CHARSETS.B,t.CHARSETS[0]={"`":"◆",a:"▒",b:"\t",c:"\f",d:"\r",e:"\n",f:"°",g:"±",h:"␤",i:"\v",j:"┘",k:"┐",l:"┌",m:"└",n:"┼",o:"⎺",p:"⎻",q:"─",r:"⎼",s:"⎽",t:"├",u:"┤",v:"┴",w:"┬",x:"│",y:"≤",z:"≥","{":"π","|":"≠","}":"£","~":"·"},t.CHARSETS.A={"#":"£"},t.CHARSETS.B=null,t.CHARSETS[4]={"#":"£","@":"¾","[":"ij","\\":"½","]":"|","{":"¨","|":"f","}":"¼","~":"´"},t.CHARSETS.C=t.CHARSETS[5]={"[":"Ä","\\":"Ö","]":"Å","^":"Ü","`":"é","{":"ä","|":"ö","}":"å","~":"ü"},t.CHARSETS.R={"#":"£","@":"à","[":"°","\\":"ç","]":"§","{":"é","|":"ù","}":"è","~":"¨"},t.CHARSETS.Q={"@":"à","[":"â","\\":"ç","]":"ê","^":"î","`":"ô","{":"é","|":"ù","}":"è","~":"û"},t.CHARSETS.K={"@":"§","[":"Ä","\\":"Ö","]":"Ü","{":"ä","|":"ö","}":"ü","~":"ß"},t.CHARSETS.Y={"#":"£","@":"§","[":"°","\\":"ç","]":"é","`":"ù","{":"à","|":"ò","}":"è","~":"ì"},t.CHARSETS.E=t.CHARSETS[6]={"@":"Ä","[":"Æ","\\":"Ø","]":"Å","^":"Ü","`":"ä","{":"æ","|":"ø","}":"å","~":"ü"},t.CHARSETS.Z={"#":"£","@":"§","[":"¡","\\":"Ñ","]":"¿","{":"°","|":"ñ","}":"ç"},t.CHARSETS.H=t.CHARSETS[7]={"@":"É","[":"Ä","\\":"Ö","]":"Å","^":"Ü","`":"é","{":"ä","|":"ö","}":"å","~":"ü"},t.CHARSETS["="]={"#":"ù","@":"à","[":"é","\\":"ç","]":"ê","^":"î",_:"è","`":"ô","{":"ä","|":"ö","}":"ü","~":"û"}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(14);t.wcwidth=function(e){var t=[[768,879],[1155,1158],[1160,1161],[1425,1469],[1471,1471],[1473,1474],[1476,1477],[1479,1479],[1536,1539],[1552,1557],[1611,1630],[1648,1648],[1750,1764],[1767,1768],[1770,1773],[1807,1807],[1809,1809],[1840,1866],[1958,1968],[2027,2035],[2305,2306],[2364,2364],[2369,2376],[2381,2381],[2385,2388],[2402,2403],[2433,2433],[2492,2492],[2497,2500],[2509,2509],[2530,2531],[2561,2562],[2620,2620],[2625,2626],[2631,2632],[2635,2637],[2672,2673],[2689,2690],[2748,2748],[2753,2757],[2759,2760],[2765,2765],[2786,2787],[2817,2817],[2876,2876],[2879,2879],[2881,2883],[2893,2893],[2902,2902],[2946,2946],[3008,3008],[3021,3021],[3134,3136],[3142,3144],[3146,3149],[3157,3158],[3260,3260],[3263,3263],[3270,3270],[3276,3277],[3298,3299],[3393,3395],[3405,3405],[3530,3530],[3538,3540],[3542,3542],[3633,3633],[3636,3642],[3655,3662],[3761,3761],[3764,3769],[3771,3772],[3784,3789],[3864,3865],[3893,3893],[3895,3895],[3897,3897],[3953,3966],[3968,3972],[3974,3975],[3984,3991],[3993,4028],[4038,4038],[4141,4144],[4146,4146],[4150,4151],[4153,4153],[4184,4185],[4448,4607],[4959,4959],[5906,5908],[5938,5940],[5970,5971],[6002,6003],[6068,6069],[6071,6077],[6086,6086],[6089,6099],[6109,6109],[6155,6157],[6313,6313],[6432,6434],[6439,6440],[6450,6450],[6457,6459],[6679,6680],[6912,6915],[6964,6964],[6966,6970],[6972,6972],[6978,6978],[7019,7027],[7616,7626],[7678,7679],[8203,8207],[8234,8238],[8288,8291],[8298,8303],[8400,8431],[12330,12335],[12441,12442],[43014,43014],[43019,43019],[43045,43046],[64286,64286],[65024,65039],[65056,65059],[65279,65279],[65529,65531]],i=[[68097,68099],[68101,68102],[68108,68111],[68152,68154],[68159,68159],[119143,119145],[119155,119170],[119173,119179],[119210,119213],[119362,119364],[917505,917505],[917536,917631],[917760,917999]];var n=0|e.control,s=new Uint8Array(65536);r.fill(s,1),s[0]=e.nul,r.fill(s,e.control,1,32),r.fill(s,e.control,127,160),r.fill(s,2,4352,4448),s[9001]=2,s[9002]=2,r.fill(s,2,11904,42192),s[12351]=1,r.fill(s,2,44032,55204),r.fill(s,2,63744,64256),r.fill(s,2,65040,65050),r.fill(s,2,65072,65136),r.fill(s,2,65280,65377),r.fill(s,2,65504,65511);for(var o=0;o<t.length;++o)r.fill(s,0,t[o][0],t[o][1]+1);return function(e){return e<32?0|n:e<127?1:e<65536?s[e]:function(e,t){var i,r=0,n=t.length-1;if(e<t[0][0]||e>t[n][1])return!1;for(;n>=r;)if(e>t[i=r+n>>1][1])r=i+1;else{if(!(e<t[i][0]))return!0;n=i-1}return!1}(t=e,i)?0:t>=131072&&t<=196605||t>=196608&&t<=262141?2:1;var t}}({nul:0,control:0}),t.getStringCellWidth=function(e){for(var i=0,r=e.length,n=0;n<r;++n){var s=e.charCodeAt(n);if(55296<=s&&s<=56319){if(++n>=r)return i+t.wcwidth(s);var o=e.charCodeAt(n);56320<=o&&o<=57343?s=1024*(s-55296)+o-56320+65536:i+=t.wcwidth(o)}i+=t.wcwidth(s)}return i}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=256,n=function(){function e(e,t){if(void 0===e&&(e=32),void 0===t&&(t=32),this.maxLength=e,this.maxSubParamsLength=t,t>r)throw new Error("maxSubParamsLength must not be greater than 256");this.params=new Int32Array(e),this.length=0,this._subParams=new Int32Array(t),this._subParamsLength=0,this._subParamsIdx=new Uint16Array(e),this._rejectDigits=!1,this._rejectSubDigits=!1,this._digitIsSub=!1}return e.fromArray=function(t){var i=new e;if(!t.length)return i;for(var r=t[0]instanceof Array?1:0;r<t.length;++r){var n=t[r];if(n instanceof Array)for(var s=0;s<n.length;++s)i.addSubParam(n[s]);else i.addParam(n)}return i},e.prototype.clone=function(){var t=new e(this.maxLength,this.maxSubParamsLength);return t.params.set(this.params),t.length=this.length,t._subParams.set(this._subParams),t._subParamsLength=this._subParamsLength,t._subParamsIdx.set(this._subParamsIdx),t._rejectDigits=this._rejectDigits,t._rejectSubDigits=this._rejectSubDigits,t._digitIsSub=this._digitIsSub,t},e.prototype.toArray=function(){for(var e=[],t=0;t<this.length;++t){e.push(this.params[t]);var i=this._subParamsIdx[t]>>8,r=255&this._subParamsIdx[t];r-i>0&&e.push(Array.prototype.slice.call(this._subParams,i,r))}return e},e.prototype.reset=function(){this.length=0,this._subParamsLength=0,this._rejectDigits=!1,this._rejectSubDigits=!1,this._digitIsSub=!1},e.prototype.addParam=function(e){if(this._digitIsSub=!1,this.length>=this.maxLength)this._rejectDigits=!0;else{if(e<-1)throw new Error("values lesser than -1 are not allowed");this._subParamsIdx[this.length]=this._subParamsLength<<8|this._subParamsLength,this.params[this.length++]=e>2147483647?2147483647:e}},e.prototype.addSubParam=function(e){if(this._digitIsSub=!0,this.length)if(this._rejectDigits||this._subParamsLength>=this.maxSubParamsLength)this._rejectSubDigits=!0;else{if(e<-1)throw new Error("values lesser than -1 are not allowed");this._subParams[this._subParamsLength++]=e>2147483647?2147483647:e,this._subParamsIdx[this.length-1]++}},e.prototype.hasSubParams=function(e){return(255&this._subParamsIdx[e])-(this._subParamsIdx[e]>>8)>0},e.prototype.getSubParams=function(e){var t=this._subParamsIdx[e]>>8,i=255&this._subParamsIdx[e];return i-t>0?this._subParams.subarray(t,i):null},e.prototype.getSubParamsAll=function(){for(var e={},t=0;t<this.length;++t){var i=this._subParamsIdx[t]>>8,r=255&this._subParamsIdx[t];r-i>0&&(e[t]=this._subParams.slice(i,r))}return e},e.prototype.addDigit=function(e){var t;if(!(this._rejectDigits||!(t=this._digitIsSub?this._subParamsLength:this.length)||this._digitIsSub&&this._rejectSubDigits)){var i=this._digitIsSub?this._subParams:this.params,r=i[t-1];i[t-1]=~r?Math.min(10*r+e,2147483647):e}},e}();t.Params=n},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(21),n=i(8),s=function(){function e(){this._state=0,this._id=-1,this._handlers=Object.create(null),this._handlerFb=function(){}}return e.prototype.addHandler=function(e,t){void 0===this._handlers[e]&&(this._handlers[e]=[]);var i=this._handlers[e];return i.push(t),{dispose:function(){var e=i.indexOf(t);-1!==e&&i.splice(e,1)}}},e.prototype.setHandler=function(e,t){this._handlers[e]=[t]},e.prototype.clearHandler=function(e){this._handlers[e]&&delete this._handlers[e]},e.prototype.setHandlerFallback=function(e){this._handlerFb=e},e.prototype.dispose=function(){this._handlers=Object.create(null),this._handlerFb=function(){}},e.prototype.reset=function(){2===this._state&&this.end(!1),this._id=-1,this._state=0},e.prototype._start=function(){var e=this._handlers[this._id];if(e)for(var t=e.length-1;t>=0;t--)e[t].start();else this._handlerFb(this._id,"START")},e.prototype._put=function(e,t,i){var r=this._handlers[this._id];if(r)for(var s=r.length-1;s>=0;s--)r[s].put(e,t,i);else this._handlerFb(this._id,"PUT",n.utf32ToString(e,t,i))},e.prototype._end=function(e){var t=this._handlers[this._id];if(t){for(var i=t.length-1;i>=0&&!1===t[i].end(e);i--);for(i--;i>=0;i--)t[i].end(!1)}else this._handlerFb(this._id,"END",e)},e.prototype.start=function(){this.reset(),this._id=-1,this._state=1},e.prototype.put=function(e,t,i){if(3!==this._state){if(1===this._state)for(;t<i;){var r=e[t++];if(59===r){this._state=2,this._start();break}if(r<48||57<r)return void(this._state=3);-1===this._id&&(this._id=0),this._id=10*this._id+r-48}2===this._state&&i-t>0&&this._put(e,t,i)}},e.prototype.end=function(e){0!==this._state&&(3!==this._state&&(1===this._state&&this._start(),this._end(e)),this._id=-1,this._state=0)},e}();t.OscParser=s;var o=function(){function e(e){this._handler=e,this._data="",this._hitLimit=!1}return e.prototype.start=function(){this._data="",this._hitLimit=!1},e.prototype.put=function(e,t,i){this._hitLimit||(this._data+=n.utf32ToString(e,t,i),this._data.length>r.PAYLOAD_LIMIT&&(this._data="",this._hitLimit=!0))},e.prototype.end=function(e){var t;return this._hitLimit?t=!1:e&&(t=this._handler(this._data)),this._data="",this._hitLimit=!1,t},e}();t.OscHandler=o},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PAYLOAD_LIMIT=1e7},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(8),n=i(19),s=i(21),o=[],a=function(){function e(){this._handlers=Object.create(null),this._active=o,this._ident=0,this._handlerFb=function(){}}return e.prototype.dispose=function(){this._handlers=Object.create(null),this._handlerFb=function(){}},e.prototype.addHandler=function(e,t){void 0===this._handlers[e]&&(this._handlers[e]=[]);var i=this._handlers[e];return i.push(t),{dispose:function(){var e=i.indexOf(t);-1!==e&&i.splice(e,1)}}},e.prototype.setHandler=function(e,t){this._handlers[e]=[t]},e.prototype.clearHandler=function(e){this._handlers[e]&&delete this._handlers[e]},e.prototype.setHandlerFallback=function(e){this._handlerFb=e},e.prototype.reset=function(){this._active.length&&this.unhook(!1),this._active=o,this._ident=0},e.prototype.hook=function(e,t){if(this.reset(),this._ident=e,this._active=this._handlers[e]||o,this._active.length)for(var i=this._active.length-1;i>=0;i--)this._active[i].hook(t);else this._handlerFb(this._ident,"HOOK",t)},e.prototype.put=function(e,t,i){if(this._active.length)for(var n=this._active.length-1;n>=0;n--)this._active[n].put(e,t,i);else this._handlerFb(this._ident,"PUT",r.utf32ToString(e,t,i))},e.prototype.unhook=function(e){if(this._active.length){for(var t=this._active.length-1;t>=0&&!1===this._active[t].unhook(e);t--);for(t--;t>=0;t--)this._active[t].unhook(!1)}else this._handlerFb(this._ident,"UNHOOK",e);this._active=o,this._ident=0},e}();t.DcsParser=a;var c=function(){function e(e){this._handler=e,this._data="",this._hitLimit=!1}return e.prototype.hook=function(e){this._params=e.clone(),this._data="",this._hitLimit=!1},e.prototype.put=function(e,t,i){this._hitLimit||(this._data+=r.utf32ToString(e,t,i),this._data.length>s.PAYLOAD_LIMIT&&(this._data="",this._hitLimit=!0))},e.prototype.unhook=function(e){var t;return this._hitLimit?t=!1:e&&(t=this._handler(this._data,this._params?this._params:new n.Params)),this._params=void 0,this._data="",this._hitLimit=!1,t},e}();t.DcsHandler=c},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(24),n=i(42),s=[];t.acquireCharAtlas=function(e,t,i,o,a){for(var c=r.generateConfig(o,a,e,i),l=0;l<s.length;l++){var h=(u=s[l]).ownedBy.indexOf(t);if(h>=0){if(r.configEquals(u.config,c))return u.atlas;1===u.ownedBy.length?(u.atlas.dispose(),s.splice(l,1)):u.ownedBy.splice(h,1);break}}for(l=0;l<s.length;l++){var u=s[l];if(r.configEquals(u.config,c))return u.ownedBy.push(t),u.atlas}var f={atlas:new n.DynamicCharAtlas(document,c),config:c,ownedBy:[t]};return s.push(f),f.atlas},t.removeTerminalFromCache=function(e){for(var t=0;t<s.length;t++){var i=s[t].ownedBy.indexOf(e);if(-1!==i){1===s[t].ownedBy.length?(s[t].atlas.dispose(),s.splice(t,1)):s[t].ownedBy.splice(i,1);break}}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(3);t.generateConfig=function(e,t,i,r){var n={foreground:r.foreground,background:r.background,cursor:void 0,cursorAccent:void 0,selection:void 0,ansi:r.ansi.slice(0,16)};return{devicePixelRatio:window.devicePixelRatio,scaledCharWidth:e,scaledCharHeight:t,fontFamily:i.fontFamily,fontSize:i.fontSize,fontWeight:i.fontWeight,fontWeightBold:i.fontWeightBold,allowTransparency:i.allowTransparency,colors:n}},t.configEquals=function(e,t){for(var i=0;i<e.colors.ansi.length;i++)if(e.colors.ansi[i].rgba!==t.colors.ansi[i].rgba)return!1;return e.devicePixelRatio===t.devicePixelRatio&&e.fontFamily===t.fontFamily&&e.fontSize===t.fontSize&&e.fontWeight===t.fontWeight&&e.fontWeightBold===t.fontWeightBold&&e.allowTransparency===t.allowTransparency&&e.scaledCharWidth===t.scaledCharWidth&&e.scaledCharHeight===t.scaledCharHeight&&e.colors.foreground===t.colors.foreground&&e.colors.background===t.colors.background},t.is256Color=function(e){return e<r.DEFAULT_COLOR}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=c("#ffffff"),n=c("#000000"),s=c("#ffffff"),o=c("#000000"),a={css:"rgba(255, 255, 255, 0.3)",rgba:4294967159};function c(e){return{css:e,rgba:parseInt(e.slice(1),16)<<8|255}}function l(e){var t=e.toString(16);return t.length<2?"0"+t:t}t.DEFAULT_ANSI_COLORS=function(){for(var e=[c("#2e3436"),c("#cc0000"),c("#4e9a06"),c("#c4a000"),c("#3465a4"),c("#75507b"),c("#06989a"),c("#d3d7cf"),c("#555753"),c("#ef2929"),c("#8ae234"),c("#fce94f"),c("#729fcf"),c("#ad7fa8"),c("#34e2e2"),c("#eeeeec")],t=[0,95,135,175,215,255],i=0;i<216;i++){var r=t[i/36%6|0],n=t[i/6%6|0],s=t[i%6];e.push({css:"#"+l(r)+l(n)+l(s),rgba:(r<<24|n<<16|s<<8|255)>>>0})}for(i=0;i<24;i++){var o=8+10*i,a=l(o);e.push({css:"#"+a+a+a,rgba:(o<<24|o<<16|o<<8|255)>>>0})}return e}();var h=function(){function e(e,i){this.allowTransparency=i;var c=e.createElement("canvas");c.width=1,c.height=1;var l=c.getContext("2d");if(!l)throw new Error("Could not get rendering context");this._ctx=l,this._ctx.globalCompositeOperation="copy",this._litmusColor=this._ctx.createLinearGradient(0,0,1,1),this.colors={foreground:r,background:n,cursor:s,cursorAccent:o,selection:a,ansi:t.DEFAULT_ANSI_COLORS.slice()}}return e.prototype.setTheme=function(e){void 0===e&&(e={}),this.colors.foreground=this._parseColor(e.foreground,r),this.colors.background=this._parseColor(e.background,n),this.colors.cursor=this._parseColor(e.cursor,s,!0),this.colors.cursorAccent=this._parseColor(e.cursorAccent,o,!0),this.colors.selection=this._parseColor(e.selection,a,!0),this.colors.ansi[0]=this._parseColor(e.black,t.DEFAULT_ANSI_COLORS[0]),this.colors.ansi[1]=this._parseColor(e.red,t.DEFAULT_ANSI_COLORS[1]),this.colors.ansi[2]=this._parseColor(e.green,t.DEFAULT_ANSI_COLORS[2]),this.colors.ansi[3]=this._parseColor(e.yellow,t.DEFAULT_ANSI_COLORS[3]),this.colors.ansi[4]=this._parseColor(e.blue,t.DEFAULT_ANSI_COLORS[4]),this.colors.ansi[5]=this._parseColor(e.magenta,t.DEFAULT_ANSI_COLORS[5]),this.colors.ansi[6]=this._parseColor(e.cyan,t.DEFAULT_ANSI_COLORS[6]),this.colors.ansi[7]=this._parseColor(e.white,t.DEFAULT_ANSI_COLORS[7]),this.colors.ansi[8]=this._parseColor(e.brightBlack,t.DEFAULT_ANSI_COLORS[8]),this.colors.ansi[9]=this._parseColor(e.brightRed,t.DEFAULT_ANSI_COLORS[9]),this.colors.ansi[10]=this._parseColor(e.brightGreen,t.DEFAULT_ANSI_COLORS[10]),this.colors.ansi[11]=this._parseColor(e.brightYellow,t.DEFAULT_ANSI_COLORS[11]),this.colors.ansi[12]=this._parseColor(e.brightBlue,t.DEFAULT_ANSI_COLORS[12]),this.colors.ansi[13]=this._parseColor(e.brightMagenta,t.DEFAULT_ANSI_COLORS[13]),this.colors.ansi[14]=this._parseColor(e.brightCyan,t.DEFAULT_ANSI_COLORS[14]),this.colors.ansi[15]=this._parseColor(e.brightWhite,t.DEFAULT_ANSI_COLORS[15])},e.prototype._parseColor=function(e,t,i){if(void 0===i&&(i=this.allowTransparency),void 0===e)return t;if(this._ctx.fillStyle=this._litmusColor,this._ctx.fillStyle=e,"string"!=typeof this._ctx.fillStyle)return console.warn("Color: "+e+" is invalid using fallback "+t.css),t;this._ctx.fillRect(0,0,1,1);var r=this._ctx.getImageData(0,0,1,1).data;return i||255===r[3]?{css:e,rgba:(r[0]<<24|r[1]<<16|r[2]<<8|r[3])>>>0}:(console.warn("Color: "+e+" is using transparency, but allowTransparency is false. Using fallback "+t.css+"."),t)},e}();t.ColorManager=h},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.throwIfFalsy=function(e){if(!e)throw new Error("value must not be falsy");return e}},function(e,t,i){"use strict";var r,n=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(e,t)},function(e,t){function i(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)});Object.defineProperty(t,"__esModule",{value:!0});var s=i(6),o=i(3),a=i(4),c=function(e){function t(t,i,r){var n=e.call(this)||this;return n.content=0,n.combinedData="",n.fg=t.fg,n.bg=t.bg,n.combinedData=i,n._width=r,n}return n(t,e),t.prototype.isCombined=function(){return 2097152},t.prototype.getWidth=function(){return this._width},t.prototype.getChars=function(){return this.combinedData},t.prototype.getCode=function(){return 2097151},t.prototype.setFromCharData=function(e){throw new Error("not implemented")},t.prototype.getAsCharData=function(){return[this.fg,this.getChars(),this.getWidth(),this.getCode()]},t}(s.AttributeData);t.JoinedCellData=c;var l=function(){function e(e){this._bufferService=e,this._characterJoiners=[],this._nextCharacterJoinerId=0,this._workCell=new a.CellData}return e.prototype.registerCharacterJoiner=function(e){var t={id:this._nextCharacterJoinerId++,handler:e};return this._characterJoiners.push(t),t.id},e.prototype.deregisterCharacterJoiner=function(e){for(var t=0;t<this._characterJoiners.length;t++)if(this._characterJoiners[t].id===e)return this._characterJoiners.splice(t,1),!0;return!1},e.prototype.getJoinedCharacters=function(e){if(0===this._characterJoiners.length)return[];var t=this._bufferService.buffer.lines.get(e);if(!t||0===t.length)return[];for(var i=[],r=t.translateToString(!0),n=0,s=0,a=0,c=t.getFg(0),l=t.getBg(0),h=0;h<t.getTrimmedLength();h++)if(t.loadCell(h,this._workCell),0!==this._workCell.getWidth()){if(this._workCell.fg!==c||this._workCell.bg!==l){if(h-n>1)for(var u=this._getJoinedRanges(r,a,s,t,n),f=0;f<u.length;f++)i.push(u[f]);n=h,a=s,c=this._workCell.fg,l=this._workCell.bg}s+=this._workCell.getChars().length||o.WHITESPACE_CELL_CHAR.length}if(this._bufferService.cols-n>1)for(u=this._getJoinedRanges(r,a,s,t,n),f=0;f<u.length;f++)i.push(u[f]);return i},e.prototype._getJoinedRanges=function(t,i,r,n,s){for(var o=t.substring(i,r),a=this._characterJoiners[0].handler(o),c=1;c<this._characterJoiners.length;c++)for(var l=this._characterJoiners[c].handler(o),h=0;h<l.length;h++)e._mergeRanges(a,l[h]);return this._stringRangesToCellRanges(a,n,s),a},e.prototype._stringRangesToCellRanges=function(e,t,i){var r=0,n=!1,s=0,a=e[r];if(a){for(var c=i;c<this._bufferService.cols;c++){var l=t.getWidth(c),h=t.getString(c).length||o.WHITESPACE_CELL_CHAR.length;if(0!==l){if(!n&&a[0]<=s&&(a[0]=c,n=!0),a[1]<=s){if(a[1]=c,!(a=e[++r]))break;a[0]<=s?(a[0]=c,n=!0):n=!1}s+=h}}a&&(a[1]=this._bufferService.cols)}},e._mergeRanges=function(e,t){for(var i=!1,r=0;r<e.length;r++){var n=e[r];if(i){if(t[1]<=n[0])return e[r-1][1]=t[1],e;if(t[1]<=n[1])return e[r-1][1]=Math.max(t[1],n[1]),e.splice(r,1),e;e.splice(r,1),r--}else{if(t[1]<=n[0])return e.splice(r,0,t),e;if(t[1]<=n[1])return n[0]=Math.min(t[0],n[0]),e;t[0]<n[1]&&(n[0]=Math.min(t[0],n[0]),i=!0)}}return i?e[e.length-1][1]=t[1]:e.push(t),e},e}();t.CharacterJoinerRegistry=l},function(e,t,i){"use strict";function r(e,t){var i=t.getBoundingClientRect();return[e.clientX-i.left,e.clientY-i.top]}Object.defineProperty(t,"__esModule",{value:!0}),t.getCoordsRelativeToElement=r,t.getCoords=function(e,t,i,n,s,o,a,c){if(s){var l=r(e,t);if(l)return l[0]=Math.ceil((l[0]+(c?o/2:0))/o),l[1]=Math.ceil(l[1]/a),l[0]=Math.min(Math.max(l[0],1),i+(c?1:0)),l[1]=Math.min(Math.max(l[1],1),n),l}},t.getRawByteCoords=function(e){if(e)return{x:e[0]+32,y:e[1]+32}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e){this._renderCallback=e}return e.prototype.dispose=function(){this._animationFrame&&(window.cancelAnimationFrame(this._animationFrame),this._animationFrame=void 0)},e.prototype.refresh=function(e,t,i){var r=this;this._rowCount=i,e=void 0!==e?e:0,t=void 0!==t?t:this._rowCount-1,this._rowStart=void 0!==this._rowStart?Math.min(this._rowStart,e):e,this._rowEnd=void 0!==this._rowEnd?Math.max(this._rowEnd,t):t,this._animationFrame||(this._animationFrame=window.requestAnimationFrame(function(){return r._innerRefresh()}))},e.prototype._innerRefresh=function(){void 0!==this._rowStart&&void 0!==this._rowEnd&&void 0!==this._rowCount&&(this._rowStart=Math.max(this._rowStart,0),this._rowEnd=Math.min(this._rowEnd,this._rowCount-1),this._renderCallback(this._rowStart,this._rowEnd),this._rowStart=void 0,this._rowEnd=void 0,this._animationFrame=void 0)},e}();t.RenderDebouncer=r},function(e,t,i){"use strict";var r,n=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(e,t)},function(e,t){function i(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)});Object.defineProperty(t,"__esModule",{value:!0});var s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._currentDevicePixelRatio=window.devicePixelRatio,t}return n(t,e),t.prototype.setListener=function(e){var t=this;this._listener&&this.clearListener(),this._listener=e,this._outerListener=function(){t._listener&&(t._listener(window.devicePixelRatio,t._currentDevicePixelRatio),t._updateDpr())},this._updateDpr()},t.prototype.dispose=function(){e.prototype.dispose.call(this),this.clearListener()},t.prototype._updateDpr=function(){this._resolutionMediaMatchList&&this._outerListener&&(this._resolutionMediaMatchList.removeListener(this._outerListener),this._currentDevicePixelRatio=window.devicePixelRatio,this._resolutionMediaMatchList=window.matchMedia("screen and (resolution: "+window.devicePixelRatio+"dppx)"),this._resolutionMediaMatchList.addListener(this._outerListener))},t.prototype.clearListener=function(){this._resolutionMediaMatchList&&this._listener&&this._outerListener&&(this._resolutionMediaMatchList.removeListener(this._outerListener),this._resolutionMediaMatchList=void 0,this._listener=void 0,this._outerListener=void 0)},t}(i(2).Disposable);t.ScreenDprMonitor=s},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.clone=function e(t,i){if(void 0===i&&(i=5),"object"!=typeof t)return t;var r=Array.isArray(t)?[]:{};for(var n in t)r[n]=i<=1?t[n]:t[n]?e(t[n],i-1):t[n];return r}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(33),n=i(16),s=i(75),o=function(){function e(e){this._core=new r.Terminal(e),this._addonManager=new s.AddonManager}return Object.defineProperty(e.prototype,"onCursorMove",{get:function(){return this._core.onCursorMove},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onLineFeed",{get:function(){return this._core.onLineFeed},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onSelectionChange",{get:function(){return this._core.onSelectionChange},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onData",{get:function(){return this._core.onData},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onTitleChange",{get:function(){return this._core.onTitleChange},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onScroll",{get:function(){return this._core.onScroll},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onKey",{get:function(){return this._core.onKey},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onRender",{get:function(){return this._core.onRender},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onResize",{get:function(){return this._core.onResize},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"element",{get:function(){return this._core.element},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"parser",{get:function(){return this._parser||(this._parser=new h(this._core)),this._parser},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"textarea",{get:function(){return this._core.textarea},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"rows",{get:function(){return this._core.rows},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"cols",{get:function(){return this._core.cols},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"buffer",{get:function(){return new a(this._core.buffer)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"markers",{get:function(){return this._core.markers},enumerable:!0,configurable:!0}),e.prototype.blur=function(){this._core.blur()},e.prototype.focus=function(){this._core.focus()},e.prototype.resize=function(e,t){this._verifyIntegers(e,t),this._core.resize(e,t)},e.prototype.open=function(e){this._core.open(e)},e.prototype.attachCustomKeyEventHandler=function(e){this._core.attachCustomKeyEventHandler(e)},e.prototype.registerLinkMatcher=function(e,t,i){return this._core.registerLinkMatcher(e,t,i)},e.prototype.deregisterLinkMatcher=function(e){this._core.deregisterLinkMatcher(e)},e.prototype.registerCharacterJoiner=function(e){return this._core.registerCharacterJoiner(e)},e.prototype.deregisterCharacterJoiner=function(e){this._core.deregisterCharacterJoiner(e)},e.prototype.addMarker=function(e){return this._verifyIntegers(e),this._core.addMarker(e)},e.prototype.hasSelection=function(){return this._core.hasSelection()},e.prototype.select=function(e,t,i){this._verifyIntegers(e,t,i),this._core.select(e,t,i)},e.prototype.getSelection=function(){return this._core.getSelection()},e.prototype.getSelectionPosition=function(){return this._core.getSelectionPosition()},e.prototype.clearSelection=function(){this._core.clearSelection()},e.prototype.selectAll=function(){this._core.selectAll()},e.prototype.selectLines=function(e,t){this._verifyIntegers(e,t),this._core.selectLines(e,t)},e.prototype.dispose=function(){this._addonManager.dispose(),this._core.dispose()},e.prototype.scrollLines=function(e){this._verifyIntegers(e),this._core.scrollLines(e)},e.prototype.scrollPages=function(e){this._verifyIntegers(e),this._core.scrollPages(e)},e.prototype.scrollToTop=function(){this._core.scrollToTop()},e.prototype.scrollToBottom=function(){this._core.scrollToBottom()},e.prototype.scrollToLine=function(e){this._verifyIntegers(e),this._core.scrollToLine(e)},e.prototype.clear=function(){this._core.clear()},e.prototype.write=function(e,t){this._core.write(e,t)},e.prototype.writeUtf8=function(e,t){this._core.write(e,t)},e.prototype.writeln=function(e,t){this._core.write(e),this._core.write("\r\n",t)},e.prototype.paste=function(e){this._core.paste(e)},e.prototype.getOption=function(e){return this._core.optionsService.getOption(e)},e.prototype.setOption=function(e,t){this._core.optionsService.setOption(e,t)},e.prototype.refresh=function(e,t){this._verifyIntegers(e,t),this._core.refresh(e,t)},e.prototype.reset=function(){this._core.reset()},e.prototype.loadAddon=function(e){return this._addonManager.loadAddon(this,e)},Object.defineProperty(e,"strings",{get:function(){return n},enumerable:!0,configurable:!0}),e.prototype._verifyIntegers=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];e.forEach(function(e){if(e===1/0||isNaN(e)||e%1!=0)throw new Error("This API only accepts integers")})},e}();t.Terminal=o;var a=function(){function e(e){this._buffer=e}return Object.defineProperty(e.prototype,"cursorY",{get:function(){return this._buffer.y},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"cursorX",{get:function(){return this._buffer.x},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"viewportY",{get:function(){return this._buffer.ydisp},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"baseY",{get:function(){return this._buffer.ybase},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"length",{get:function(){return this._buffer.lines.length},enumerable:!0,configurable:!0}),e.prototype.getLine=function(e){var t=this._buffer.lines.get(e);if(t)return new c(t)},e}(),c=function(){function e(e){this._line=e}return Object.defineProperty(e.prototype,"isWrapped",{get:function(){return this._line.isWrapped},enumerable:!0,configurable:!0}),e.prototype.getCell=function(e){if(!(e<0||e>=this._line.length))return new l(this._line,e)},e.prototype.translateToString=function(e,t,i){return this._line.translateToString(e,t,i)},e}(),l=function(){function e(e,t){this._line=e,this._x=t}return Object.defineProperty(e.prototype,"char",{get:function(){return this._line.getString(this._x)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"width",{get:function(){return this._line.getWidth(this._x)},enumerable:!0,configurable:!0}),e}(),h=function(){function e(e){this._core=e}return e.prototype.addCsiHandler=function(e,t){return this._core.addCsiHandler(e,function(e){return t(e.toArray())})},e.prototype.addDcsHandler=function(e,t){return this._core.addDcsHandler(e,function(e,i){return t(e,i.toArray())})},e.prototype.addEscHandler=function(e,t){return this._core.addEscHandler(e,t)},e.prototype.addOscHandler=function(e,t){return this._core.addOscHandler(e,t)},e}()},function(e,t,i){"use strict";var r,n=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(e,t)},function(e,t){function i(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)});Object.defineProperty(t,"__esModule",{value:!0});var s=i(34),o=i(35),a=i(36),c=i(11),l=i(37),h=i(39),u=i(48),f=i(49),_=i(10),d=i(7),p=i(16),v=i(52),g=i(53),y=i(54),m=i(55),b=i(57),C=i(1),S=i(15),w=i(58),E=i(25),L=i(59),A=i(0),x=i(60),k=i(5),D=i(61),T=i(62),R=i(2),M=i(68),O=i(69),P=i(70),H=i(71),I=i(72),B=i(73),F=i(74),j="undefined"!=typeof window?window.document:null,W=function(e){function t(t){void 0===t&&(t={});var i=e.call(this)||this;return i.browser=_,i.mouseEvents=0,i._keyDownHandled=!1,i._blankLine=null,i._onCursorMove=new C.EventEmitter,i._onData=new C.EventEmitter,i._onKey=new C.EventEmitter,i._onLineFeed=new C.EventEmitter,i._onRender=new C.EventEmitter,i._onResize=new C.EventEmitter,i._onScroll=new C.EventEmitter,i._onSelectionChange=new C.EventEmitter,i._onTitleChange=new C.EventEmitter,i._onFocus=new C.EventEmitter,i._onBlur=new C.EventEmitter,i.onA11yCharEmitter=new C.EventEmitter,i.onA11yTabEmitter=new C.EventEmitter,i._instantiationService=new I.InstantiationService,i.optionsService=new x.OptionsService(t),i._instantiationService.setService(A.IOptionsService,i.optionsService),i._bufferService=i._instantiationService.createInstance(T.BufferService),i._instantiationService.setService(A.IBufferService,i._bufferService),i._logService=i._instantiationService.createInstance(P.LogService),i._instantiationService.setService(A.ILogService,i._logService),i._coreService=i._instantiationService.createInstance(O.CoreService,function(){return i.scrollToBottom()}),i._instantiationService.setService(A.ICoreService,i._coreService),i._coreService.onData(function(e){return i._onData.fire(e)}),i._coreMouseService=i._instantiationService.createInstance(B.CoreMouseService),i._instantiationService.setService(A.ICoreMouseService,i._coreMouseService),i._dirtyRowService=i._instantiationService.createInstance(H.DirtyRowService),i._instantiationService.setService(A.IDirtyRowService,i._dirtyRowService),i._setupOptionsListeners(),i._setup(),i._writeBuffer=new F.WriteBuffer(function(e){return i._inputHandler.parse(e)}),i}return n(t,e),Object.defineProperty(t.prototype,"options",{get:function(){return this.optionsService.options},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"cols",{get:function(){return this._bufferService.cols},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"rows",{get:function(){return this._bufferService.rows},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"onCursorMove",{get:function(){return this._onCursorMove.event},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"onData",{get:function(){return this._onData.event},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"onKey",{get:function(){return this._onKey.event},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"onLineFeed",{get:function(){return this._onLineFeed.event},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"onRender",{get:function(){return this._onRender.event},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"onResize",{get:function(){return this._onResize.event},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"onScroll",{get:function(){return this._onScroll.event},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"onSelectionChange",{get:function(){return this._onSelectionChange.event},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"onTitleChange",{get:function(){return this._onTitleChange.event},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"onFocus",{get:function(){return this._onFocus.event},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"onBlur",{get:function(){return this._onBlur.event},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"onA11yChar",{get:function(){return this.onA11yCharEmitter.event},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"onA11yTab",{get:function(){return this.onA11yTabEmitter.event},enumerable:!0,configurable:!0}),t.prototype.dispose=function(){this._isDisposed||(e.prototype.dispose.call(this),this._windowsMode&&(this._windowsMode.dispose(),this._windowsMode=void 0),this._renderService&&this._renderService.dispose(),this._customKeyEventHandler=null,this.write=function(){},this.element&&this.element.parentNode&&this.element.parentNode.removeChild(this.element))},t.prototype._setup=function(){var e=this;this._parent=j?j.body:null,this.cursorState=0,this.cursorHidden=!1,this._customKeyEventHandler=null,this.applicationKeypad=!1,this.originMode=!1,this.insertMode=!1,this.wraparoundMode=!0,this.bracketedPasteMode=!1,this.charset=null,this.gcharset=null,this.glevel=0,this.charsets=[null],this.curAttrData=S.DEFAULT_ATTR_DATA.clone(),this._eraseAttrData=S.DEFAULT_ATTR_DATA.clone(),this.params=[],this.currentParam=0,this._userScrolling=!1,this._inputHandler=new l.InputHandler(this,this._bufferService,this._coreService,this._dirtyRowService,this._logService,this.optionsService,this._coreMouseService),this._inputHandler.onCursorMove(function(){return e._onCursorMove.fire()}),this._inputHandler.onLineFeed(function(){return e._onLineFeed.fire()}),this.register(this._inputHandler),this.linkifier=this.linkifier||new u.Linkifier(this._bufferService,this._logService),this.options.windowsMode&&(this._windowsMode=w.applyWindowsMode(this))},Object.defineProperty(t.prototype,"buffer",{get:function(){return this.buffers.active},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"buffers",{get:function(){return this._bufferService.buffers},enumerable:!0,configurable:!0}),t.prototype.eraseAttrData=function(){return this._eraseAttrData.bg&=-67108864,this._eraseAttrData.bg|=67108863&this.curAttrData.bg,this._eraseAttrData},t.prototype.focus=function(){this.textarea&&this.textarea.focus({preventScroll:!0})},Object.defineProperty(t.prototype,"isFocused",{get:function(){return j.activeElement===this.textarea&&j.hasFocus()},enumerable:!0,configurable:!0}),t.prototype._setupOptionsListeners=function(){var e=this;this.optionsService.onOptionChange(function(t){switch(t){case"fontFamily":case"fontSize":e._renderService&&e._renderService.clear(),e._charSizeService&&e._charSizeService.measure();break;case"drawBoldTextInBrightColors":case"letterSpacing":case"lineHeight":case"fontWeight":case"fontWeightBold":e._renderService&&(e._renderService.clear(),e._renderService.onResize(e.cols,e.rows),e.refresh(0,e.rows-1));break;case"rendererType":e._renderService&&(e._renderService.setRenderer(e._createRenderer()),e._renderService.onResize(e.cols,e.rows));break;case"scrollback":e.buffers.resize(e.cols,e.rows),e.viewport&&e.viewport.syncScrollArea();break;case"screenReaderMode":e.optionsService.options.screenReaderMode?!e._accessibilityManager&&e._renderService&&(e._accessibilityManager=new y.AccessibilityManager(e,e._renderService)):e._accessibilityManager&&(e._accessibilityManager.dispose(),e._accessibilityManager=null);break;case"tabStopWidth":e.buffers.setupTabStops();break;case"theme":e._setTheme(e.optionsService.options.theme);break;case"windowsMode":e.optionsService.options.windowsMode?e._windowsMode||(e._windowsMode=w.applyWindowsMode(e)):e._windowsMode&&(e._windowsMode.dispose(),e._windowsMode=void 0)}})},t.prototype._onTextAreaFocus=function(e){this.sendFocus&&this._coreService.triggerDataEvent(c.C0.ESC+"[I"),this.updateCursorStyle(e),this.element.classList.add("focus"),this.showCursor(),this._onFocus.fire()},t.prototype.blur=function(){return this.textarea.blur()},t.prototype._onTextAreaBlur=function(){this.textarea.value="",this.refresh(this.buffer.y,this.buffer.y),this.sendFocus&&this._coreService.triggerDataEvent(c.C0.ESC+"[O"),this.element.classList.remove("focus"),this._onBlur.fire()},t.prototype._initGlobal=function(){var e=this;this._bindKeys(),this.register(d.addDisposableDomListener(this.element,"copy",function(t){e.hasSelection()&&a.copyHandler(t,e._selectionService)}));var t=function(t){return a.handlePasteEvent(t,e.textarea,e.bracketedPasteMode,e._coreService)};this.register(d.addDisposableDomListener(this.textarea,"paste",t)),this.register(d.addDisposableDomListener(this.element,"paste",t)),_.isFirefox?this.register(d.addDisposableDomListener(this.element,"mousedown",function(t){2===t.button&&a.rightClickHandler(t,e.textarea,e.screenElement,e._selectionService,e.options.rightClickSelectsWord)})):this.register(d.addDisposableDomListener(this.element,"contextmenu",function(t){a.rightClickHandler(t,e.textarea,e.screenElement,e._selectionService,e.options.rightClickSelectsWord)})),_.isLinux&&this.register(d.addDisposableDomListener(this.element,"auxclick",function(t){1===t.button&&a.moveTextAreaUnderMouseCursor(t,e.textarea,e.screenElement)}))},t.prototype._bindKeys=function(){var e=this;this.register(d.addDisposableDomListener(this.textarea,"keyup",function(t){return e._keyUp(t)},!0)),this.register(d.addDisposableDomListener(this.textarea,"keydown",function(t){return e._keyDown(t)},!0)),this.register(d.addDisposableDomListener(this.textarea,"keypress",function(t){return e._keyPress(t)},!0)),this.register(d.addDisposableDomListener(this.textarea,"compositionstart",function(){return e._compositionHelper.compositionstart()})),this.register(d.addDisposableDomListener(this.textarea,"compositionupdate",function(t){return e._compositionHelper.compositionupdate(t)})),this.register(d.addDisposableDomListener(this.textarea,"compositionend",function(){return e._compositionHelper.compositionend()})),this.register(this.onRender(function(){return e._compositionHelper.updateCompositionElements()})),this.register(this.onRender(function(t){return e._queueLinkification(t.start,t.end)}))},t.prototype.open=function(e){var t=this;if(this._parent=e||this._parent,!this._parent)throw new Error("Terminal requires a parent element.");j.body.contains(e)||this._logService.warn("Terminal.open was called on an element that was not attached to the DOM"),this._document=this._parent.ownerDocument,this.element=this._document.createElement("div"),this.element.dir="ltr",this.element.classList.add("terminal"),this.element.classList.add("xterm"),this.element.setAttribute("tabindex","0"),this._parent.appendChild(this.element);var i=j.createDocumentFragment();this._viewportElement=j.createElement("div"),this._viewportElement.classList.add("xterm-viewport"),i.appendChild(this._viewportElement),this._viewportScrollArea=j.createElement("div"),this._viewportScrollArea.classList.add("xterm-scroll-area"),this._viewportElement.appendChild(this._viewportScrollArea),this.screenElement=j.createElement("div"),this.screenElement.classList.add("xterm-screen"),this._helperContainer=j.createElement("div"),this._helperContainer.classList.add("xterm-helpers"),this.screenElement.appendChild(this._helperContainer),i.appendChild(this.screenElement),this.textarea=j.createElement("textarea"),this.textarea.classList.add("xterm-helper-textarea"),this.textarea.setAttribute("aria-label",p.promptLabel),this.textarea.setAttribute("aria-multiline","false"),this.textarea.setAttribute("autocorrect","off"),this.textarea.setAttribute("autocapitalize","off"),this.textarea.setAttribute("spellcheck","false"),this.textarea.tabIndex=0,this.register(d.addDisposableDomListener(this.textarea,"focus",function(e){return t._onTextAreaFocus(e)})),this.register(d.addDisposableDomListener(this.textarea,"blur",function(){return t._onTextAreaBlur()})),this._helperContainer.appendChild(this.textarea),this._charSizeService=this._instantiationService.createInstance(D.CharSizeService,this._document,this._helperContainer),this._instantiationService.setService(k.ICharSizeService,this._charSizeService),this._compositionView=j.createElement("div"),this._compositionView.classList.add("composition-view"),this._compositionHelper=this._instantiationService.createInstance(s.CompositionHelper,this.textarea,this._compositionView),this._helperContainer.appendChild(this._compositionView),this.element.appendChild(i),this._theme=this.options.theme||this._theme,this.options.theme=void 0,this._colorManager=new E.ColorManager(j,this.options.allowTransparency),this._colorManager.setTheme(this._theme);var r=this._createRenderer();this._renderService=this._instantiationService.createInstance(L.RenderService,r,this.rows,this.screenElement),this._instantiationService.setService(k.IRenderService,this._renderService),this._renderService.onRender(function(e){return t._onRender.fire(e)}),this.onResize(function(e){return t._renderService.resize(e.cols,e.rows)}),this._soundService=this._instantiationService.createInstance(v.SoundService),this._instantiationService.setService(k.ISoundService,this._soundService),this._mouseService=this._instantiationService.createInstance(M.MouseService),this._instantiationService.setService(k.IMouseService,this._mouseService),this.viewport=this._instantiationService.createInstance(o.Viewport,function(e,i){return t.scrollLines(e,i)},this._viewportElement,this._viewportScrollArea),this.viewport.onThemeChange(this._colorManager.colors),this.register(this.viewport),this.register(this.onCursorMove(function(){return t._renderService.onCursorMove()})),this.register(this.onResize(function(){return t._renderService.onResize(t.cols,t.rows)})),this.register(this.onBlur(function(){return t._renderService.onBlur()})),this.register(this.onFocus(function(){return t._renderService.onFocus()})),this.register(this._renderService.onDimensionsChange(function(){return t.viewport.syncScrollArea()})),this._selectionService=this._instantiationService.createInstance(f.SelectionService,function(e,i){return t.scrollLines(e,i)},this.element,this.screenElement),this._instantiationService.setService(k.ISelectionService,this._selectionService),this.register(this._selectionService.onSelectionChange(function(){return t._onSelectionChange.fire()})),this.register(this._selectionService.onRedrawRequest(function(e){return t._renderService.onSelectionChanged(e.start,e.end,e.columnSelectMode)})),this.register(this._selectionService.onLinuxMouseSelection(function(e){t.textarea.value=e,t.textarea.focus(),t.textarea.select()})),this.register(this.onScroll(function(){t.viewport.syncScrollArea(),t._selectionService.refresh()})),this.register(d.addDisposableDomListener(this._viewportElement,"scroll",function(){return t._selectionService.refresh()})),this._mouseZoneManager=this._instantiationService.createInstance(g.MouseZoneManager,this.element,this.screenElement),this.register(this._mouseZoneManager),this.register(this.onScroll(function(){return t._mouseZoneManager.clearAll()})),this.linkifier.attachToDom(this.element,this._mouseZoneManager),this.register(d.addDisposableDomListener(this.element,"mousedown",function(e){return t._selectionService.onMouseDown(e)})),this.mouseEvents?(this._selectionService.disable(),this.element.classList.add("enable-mouse-events")):this._selectionService.enable(),this.options.screenReaderMode&&(this._accessibilityManager=new y.AccessibilityManager(this,this._renderService)),this._charSizeService.measure(),this.refresh(0,this.rows-1),this._initGlobal(),this.bindMouse()},t.prototype._createRenderer=function(){switch(this.options.rendererType){case"canvas":return new h.Renderer(this._colorManager.colors,this,this._bufferService,this._charSizeService,this.optionsService);case"dom":return new m.DomRenderer(this,this._colorManager.colors,this._charSizeService,this.optionsService);default:throw new Error('Unrecognized rendererType "'+this.options.rendererType+'"')}},t.prototype._setTheme=function(e){this._theme=e,this._colorManager&&this._colorManager.setTheme(e),this._renderService&&this._renderService.setColors(this._colorManager.colors),this.viewport&&this.viewport.onThemeChange(this._colorManager.colors)},t.prototype.bindMouse=function(){var e=this,t=this,i=this.element;function r(e){var i,r,n;if(!(i=t._mouseService.getRawByteCoords(e,t.screenElement,t.cols,t.rows)))return!1;switch(e.overrideType||e.type){case"mousemove":n=32,void 0===e.buttons?(r=3,void 0!==e.button&&(r=e.button<3?e.button:3)):r=1&e.buttons?0:4&e.buttons?1:2&e.buttons?2:3;break;case"mouseup":n=0,r=e.button<3?e.button:3;break;case"mousedown":n=1,r=e.button<3?e.button:3;break;case"wheel":0!==e.deltaY&&(n=e.deltaY<0?0:1),r=4;break;default:return!1}return!(void 0===n||void 0===r||r>4)&&t._coreMouseService.triggerMouseEvent({col:i.x-33,row:i.y-33,button:r,action:n,ctrl:e.ctrlKey,alt:e.altKey,shift:e.shiftKey})}var n={mouseup:null,wheel:null,mousedrag:null,mousemove:null},s=function(t){return r(t),t.buttons||(e._document.removeEventListener("mouseup",n.mouseup),n.mousedrag&&e._document.removeEventListener("mousemove",n.mousedrag)),e.cancel(t)},o=function(t){return r(t),t.preventDefault(),e.cancel(t)},a=function(e){e.buttons&&r(e)},l=function(e){e.buttons||r(e)};this._coreMouseService.onProtocolChange(function(t){e.mouseEvents=t,t?("debug"===e.optionsService.options.logLevel&&e._logService.debug("Binding to mouse events:",e._coreMouseService.explainEvents(t)),e.element.classList.add("enable-mouse-events"),e._selectionService.disable()):(e._logService.debug("Unbinding from mouse events."),e.element.classList.remove("enable-mouse-events"),e._selectionService.enable()),8&t?n.mousemove||(i.addEventListener("mousemove",l),n.mousemove=l):(i.removeEventListener("mousemove",n.mousemove),n.mousemove=null),16&t?n.wheel||(i.addEventListener("wheel",o),n.wheel=o):(i.removeEventListener("wheel",n.wheel),n.wheel=null),2&t?n.mouseup||(n.mouseup=s):(e._document.removeEventListener("mouseup",n.mouseup),n.mouseup=null),4&t?n.mousedrag||(n.mousedrag=a):(e._document.removeEventListener("mousemove",n.mousedrag),n.mousedrag=null)}),this._coreMouseService.activeProtocol=this._coreMouseService.activeProtocol,this.register(d.addDisposableDomListener(i,"mousedown",function(t){if(t.preventDefault(),e.focus(),e.mouseEvents&&!e._selectionService.shouldForceSelection(t))return r(t),n.mouseup&&e._document.addEventListener("mouseup",n.mouseup),n.mousedrag&&e._document.addEventListener("mousemove",n.mousedrag),e.cancel(t)})),this.register(d.addDisposableDomListener(i,"wheel",function(t){if(n.wheel);else if(!e.buffer.hasScrollback){var i=e.viewport.getLinesScrolled(t);if(0===i)return;for(var r=c.C0.ESC+(e._coreService.decPrivateModes.applicationCursorKeys?"O":"[")+(t.deltaY<0?"A":"B"),s="",o=0;o<Math.abs(i);o++)s+=r;e._coreService.triggerDataEvent(s,!0)}})),this.register(d.addDisposableDomListener(i,"wheel",function(t){if(!n.wheel)return e.viewport.onWheel(t)?void 0:e.cancel(t)})),this.register(d.addDisposableDomListener(i,"touchstart",function(t){if(!e.mouseEvents)return e.viewport.onTouchStart(t),e.cancel(t)})),this.register(d.addDisposableDomListener(i,"touchmove",function(t){if(!e.mouseEvents)return e.viewport.onTouchMove(t)?void 0:e.cancel(t)}))},t.prototype.refresh=function(e,t){this._renderService&&this._renderService.refreshRows(e,t)},t.prototype._queueLinkification=function(e,t){this.linkifier&&this.linkifier.linkifyRows(e,t)},t.prototype.updateCursorStyle=function(e){this._selectionService&&this._selectionService.shouldColumnSelect(e)?this.element.classList.add("column-select"):this.element.classList.remove("column-select")},t.prototype.showCursor=function(){this.cursorState||(this.cursorState=1,this.refresh(this.buffer.y,this.buffer.y))},t.prototype.scroll=function(e){var t;void 0===e&&(e=!1),t=this._blankLine;var i=this.eraseAttrData();t&&t.length===this.cols&&t.getFg(0)===i.fg&&t.getBg(0)===i.bg||(t=this.buffer.getBlankLine(i,e),this._blankLine=t),t.isWrapped=e;var r=this.buffer.ybase+this.buffer.scrollTop,n=this.buffer.ybase+this.buffer.scrollBottom;if(0===this.buffer.scrollTop){var s=this.buffer.lines.isFull;n===this.buffer.lines.length-1?s?this.buffer.lines.recycle().copyFrom(t):this.buffer.lines.push(t.clone()):this.buffer.lines.splice(n+1,0,t.clone()),s?this._userScrolling&&(this.buffer.ydisp=Math.max(this.buffer.ydisp-1,0)):(this.buffer.ybase++,this._userScrolling||this.buffer.ydisp++)}else{var o=n-r+1;this.buffer.lines.shiftElements(r+1,o-1,-1),this.buffer.lines.set(n,t.clone())}this._userScrolling||(this.buffer.ydisp=this.buffer.ybase),this._dirtyRowService.markRangeDirty(this.buffer.scrollTop,this.buffer.scrollBottom),this._onScroll.fire(this.buffer.ydisp)},t.prototype.scrollLines=function(e,t){if(e<0){if(0===this.buffer.ydisp)return;this._userScrolling=!0}else e+this.buffer.ydisp>=this.buffer.ybase&&(this._userScrolling=!1);var i=this.buffer.ydisp;this.buffer.ydisp=Math.max(Math.min(this.buffer.ydisp+e,this.buffer.ybase),0),i!==this.buffer.ydisp&&(t||this._onScroll.fire(this.buffer.ydisp),this.refresh(0,this.rows-1))},t.prototype.scrollPages=function(e){this.scrollLines(e*(this.rows-1))},t.prototype.scrollToTop=function(){this.scrollLines(-this.buffer.ydisp)},t.prototype.scrollToBottom=function(){this.scrollLines(this.buffer.ybase-this.buffer.ydisp)},t.prototype.scrollToLine=function(e){var t=e-this.buffer.ydisp;0!==t&&this.scrollLines(t)},t.prototype.paste=function(e){a.paste(e,this.textarea,this.bracketedPasteMode,this._coreService)},t.prototype.attachCustomKeyEventHandler=function(e){this._customKeyEventHandler=e},t.prototype.addEscHandler=function(e,t){return this._inputHandler.addEscHandler(e,t)},t.prototype.addDcsHandler=function(e,t){return this._inputHandler.addDcsHandler(e,t)},t.prototype.addCsiHandler=function(e,t){return this._inputHandler.addCsiHandler(e,t)},t.prototype.addOscHandler=function(e,t){return this._inputHandler.addOscHandler(e,t)},t.prototype.registerLinkMatcher=function(e,t,i){var r=this.linkifier.registerLinkMatcher(e,t,i);return this.refresh(0,this.rows-1),r},t.prototype.deregisterLinkMatcher=function(e){this.linkifier.deregisterLinkMatcher(e)&&this.refresh(0,this.rows-1)},t.prototype.registerCharacterJoiner=function(e){var t=this._renderService.registerCharacterJoiner(e);return this.refresh(0,this.rows-1),t},t.prototype.deregisterCharacterJoiner=function(e){this._renderService.deregisterCharacterJoiner(e)&&this.refresh(0,this.rows-1)},Object.defineProperty(t.prototype,"markers",{get:function(){return this.buffer.markers},enumerable:!0,configurable:!0}),t.prototype.addMarker=function(e){if(this.buffer===this.buffers.normal)return this.buffer.addMarker(this.buffer.ybase+this.buffer.y+e)},t.prototype.hasSelection=function(){return!!this._selectionService&&this._selectionService.hasSelection},t.prototype.select=function(e,t,i){this._selectionService.setSelection(e,t,i)},t.prototype.getSelection=function(){return this._selectionService?this._selectionService.selectionText:""},t.prototype.getSelectionPosition=function(){if(this._selectionService.hasSelection)return{startColumn:this._selectionService.selectionStart[0],startRow:this._selectionService.selectionStart[1],endColumn:this._selectionService.selectionEnd[0],endRow:this._selectionService.selectionEnd[1]}},t.prototype.clearSelection=function(){this._selectionService&&this._selectionService.clearSelection()},t.prototype.selectAll=function(){this._selectionService&&this._selectionService.selectAll()},t.prototype.selectLines=function(e,t){this._selectionService&&this._selectionService.selectLines(e,t)},t.prototype._keyDown=function(e){if(this._keyDownHandled=!1,this._customKeyEventHandler&&!1===this._customKeyEventHandler(e))return!1;if(!this._compositionHelper.keydown(e))return this.buffer.ybase!==this.buffer.ydisp&&this.scrollToBottom(),!1;var t=b.evaluateKeyboardEvent(e,this._coreService.decPrivateModes.applicationCursorKeys,this.browser.isMac,this.options.macOptionIsMeta);if(this.updateCursorStyle(e),3===t.type||2===t.type){var i=this.rows-1;return this.scrollLines(2===t.type?-i:i),this.cancel(e,!0)}return 1===t.type&&this.selectAll(),!!this._isThirdLevelShift(this.browser,e)||(t.cancel&&this.cancel(e,!0),!t.key||(t.key!==c.C0.ETX&&t.key!==c.C0.CR||(this.textarea.value=""),this._onKey.fire({key:t.key,domEvent:e}),this.showCursor(),this._coreService.triggerDataEvent(t.key,!0),this.optionsService.options.screenReaderMode?void(this._keyDownHandled=!0):this.cancel(e,!0)))},t.prototype._isThirdLevelShift=function(e,t){var i=e.isMac&&!this.options.macOptionIsMeta&&t.altKey&&!t.ctrlKey&&!t.metaKey||e.isWindows&&t.altKey&&t.ctrlKey&&!t.metaKey;return"keypress"===t.type?i:i&&(!t.keyCode||t.keyCode>47)},t.prototype.setgLevel=function(e){this.glevel=e,this.charset=this.charsets[e]},t.prototype.setgCharset=function(e,t){this.charsets[e]=t,this.glevel===e&&(this.charset=t)},t.prototype._keyUp=function(e){this._customKeyEventHandler&&!1===this._customKeyEventHandler(e)||(function(e){return 16===e.keyCode||17===e.keyCode||18===e.keyCode}(e)||this.focus(),this.updateCursorStyle(e))},t.prototype._keyPress=function(e){var t;if(this._keyDownHandled)return!1;if(this._customKeyEventHandler&&!1===this._customKeyEventHandler(e))return!1;if(this.cancel(e),e.charCode)t=e.charCode;else if(null===e.which||void 0===e.which)t=e.keyCode;else{if(0===e.which||0===e.charCode)return!1;t=e.which}return!(!t||(e.altKey||e.ctrlKey||e.metaKey)&&!this._isThirdLevelShift(this.browser,e))&&(t=String.fromCharCode(t),this._onKey.fire({key:t,domEvent:e}),this.showCursor(),this._coreService.triggerDataEvent(t,!0),!0)},t.prototype.bell=function(){var e=this;this._soundBell()&&this._soundService.playBellSound(),this._visualBell()&&(this.element.classList.add("visual-bell-active"),clearTimeout(this._visualBellTimer),this._visualBellTimer=window.setTimeout(function(){e.element.classList.remove("visual-bell-active")},200))},t.prototype.resize=function(e,t){isNaN(e)||isNaN(t)||(e!==this.cols||t!==this.rows?(e<T.MINIMUM_COLS&&(e=T.MINIMUM_COLS),t<T.MINIMUM_ROWS&&(t=T.MINIMUM_ROWS),this.buffers.resize(e,t),this._bufferService.resize(e,t),this.buffers.setupTabStops(this.cols),this._charSizeService&&this._charSizeService.measure(),this.viewport.syncScrollArea(!0),this.refresh(0,this.rows-1),this._onResize.fire({cols:e,rows:t})):this._charSizeService&&!this._charSizeService.hasValidSize&&this._charSizeService.measure())},t.prototype.clear=function(){if(0!==this.buffer.ybase||0!==this.buffer.y){this.buffer.lines.set(0,this.buffer.lines.get(this.buffer.ybase+this.buffer.y)),this.buffer.lines.length=1,this.buffer.ydisp=0,this.buffer.ybase=0,this.buffer.y=0;for(var e=1;e<this.rows;e++)this.buffer.lines.push(this.buffer.getBlankLine(S.DEFAULT_ATTR_DATA));this.refresh(0,this.rows-1),this._onScroll.fire(this.buffer.ydisp)}},t.prototype.is=function(e){return 0===(this.options.termName+"").indexOf(e)},t.prototype.handleTitle=function(e){this._onTitleChange.fire(e)},t.prototype.reset=function(){this.options.rows=this.rows,this.options.cols=this.cols;var e=this._customKeyEventHandler,t=this._inputHandler,i=this.cursorState,r=this._userScrolling;this._setup(),this._bufferService.reset(),this._coreService.reset(),this._coreMouseService.reset(),this._selectionService&&this._selectionService.reset(),this._customKeyEventHandler=e,this._inputHandler=t,this.cursorState=i,this._userScrolling=r,this.refresh(0,this.rows-1),this.viewport&&this.viewport.syncScrollArea()},t.prototype.cancel=function(e,t){if(this.options.cancelEvents||t)return e.preventDefault(),e.stopPropagation(),!1},t.prototype._visualBell=function(){return!1},t.prototype._soundBell=function(){return"sound"===this.options.bellStyle},t.prototype.write=function(e,t){this._writeBuffer.write(e,t)},t.prototype.writeSync=function(e){this._writeBuffer.writeSync(e)},t}(R.Disposable);t.Terminal=W},function(e,t,i){"use strict";var r=this&&this.__decorate||function(e,t,i,r){var n,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(o=(s<3?n(o):s>3?n(t,i,o):n(t,i))||o);return s>3&&o&&Object.defineProperty(t,i,o),o},n=this&&this.__param||function(e,t){return function(i,r){t(i,r,e)}};Object.defineProperty(t,"__esModule",{value:!0});var s=i(5),o=i(0),a=function(){function e(e,t,i,r,n,s){this._textarea=e,this._compositionView=t,this._bufferService=i,this._optionsService=r,this._charSizeService=n,this._coreService=s,this._isComposing=!1,this._isSendingComposition=!1,this._compositionPosition={start:0,end:0}}return e.prototype.compositionstart=function(){this._isComposing=!0,this._compositionPosition.start=this._textarea.value.length,this._compositionView.textContent="",this._compositionView.classList.add("active")},e.prototype.compositionupdate=function(e){var t=this;this._compositionView.textContent=e.data,this.updateCompositionElements(),setTimeout(function(){t._compositionPosition.end=t._textarea.value.length},0)},e.prototype.compositionend=function(){this._finalizeComposition(!0)},e.prototype.keydown=function(e){if(this._isComposing||this._isSendingComposition){if(229===e.keyCode)return!1;if(16===e.keyCode||17===e.keyCode||18===e.keyCode)return!1;this._finalizeComposition(!1)}return 229!==e.keyCode||(this._handleAnyTextareaChanges(),!1)},e.prototype._finalizeComposition=function(e){var t=this;if(this._compositionView.classList.remove("active"),this._isComposing=!1,this._clearTextareaPosition(),e){var i={start:this._compositionPosition.start,end:this._compositionPosition.end};this._isSendingComposition=!0,setTimeout(function(){if(t._isSendingComposition){t._isSendingComposition=!1;var e=void 0;e=t._isComposing?t._textarea.value.substring(i.start,i.end):t._textarea.value.substring(i.start),t._coreService.triggerDataEvent(e,!0)}},0)}else{this._isSendingComposition=!1;var r=this._textarea.value.substring(this._compositionPosition.start,this._compositionPosition.end);this._coreService.triggerDataEvent(r,!0)}},e.prototype._handleAnyTextareaChanges=function(){var e=this,t=this._textarea.value;setTimeout(function(){if(!e._isComposing){var i=e._textarea.value.replace(t,"");i.length>0&&e._coreService.triggerDataEvent(i,!0)}},0)},e.prototype.updateCompositionElements=function(e){var t=this;if(this._isComposing){if(this._bufferService.buffer.isCursorInViewport){var i=Math.ceil(this._charSizeService.height*this._optionsService.options.lineHeight),r=this._bufferService.buffer.y*i,n=this._bufferService.buffer.x*this._charSizeService.width;this._compositionView.style.left=n+"px",this._compositionView.style.top=r+"px",this._compositionView.style.height=i+"px",this._compositionView.style.lineHeight=i+"px",this._compositionView.style.fontFamily=this._optionsService.options.fontFamily,this._compositionView.style.fontSize=this._optionsService.options.fontSize+"px";var s=this._compositionView.getBoundingClientRect();this._textarea.style.left=n+"px",this._textarea.style.top=r+"px",this._textarea.style.width=s.width+"px",this._textarea.style.height=s.height+"px",this._textarea.style.lineHeight=s.height+"px"}e||setTimeout(function(){return t.updateCompositionElements(!0)},0)}},e.prototype._clearTextareaPosition=function(){this._textarea.style.left="",this._textarea.style.top=""},e=r([n(2,o.IBufferService),n(3,o.IOptionsService),n(4,s.ICharSizeService),n(5,o.ICoreService)],e)}();t.CompositionHelper=a},function(e,t,i){"use strict";var r,n=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(e,t)},function(e,t){function i(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}),s=this&&this.__decorate||function(e,t,i,r){var n,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(o=(s<3?n(o):s>3?n(t,i,o):n(t,i))||o);return s>3&&o&&Object.defineProperty(t,i,o),o},o=this&&this.__param||function(e,t){return function(i,r){t(i,r,e)}};Object.defineProperty(t,"__esModule",{value:!0});var a=i(2),c=i(7),l=i(5),h=i(0),u=15,f=function(e){function t(t,i,r,n,s,o,a){var l=e.call(this)||this;return l._scrollLines=t,l._viewportElement=i,l._scrollArea=r,l._bufferService=n,l._optionsService=s,l._charSizeService=o,l._renderService=a,l.scrollBarWidth=0,l._currentRowHeight=0,l._lastRecordedBufferLength=0,l._lastRecordedViewportHeight=0,l._lastRecordedBufferHeight=0,l._lastTouchY=0,l._lastScrollTop=0,l._wheelPartialScroll=0,l._refreshAnimationFrame=null,l._ignoreNextScrollEvent=!1,l.scrollBarWidth=l._viewportElement.offsetWidth-l._scrollArea.offsetWidth||u,l.register(c.addDisposableDomListener(l._viewportElement,"scroll",l._onScroll.bind(l))),setTimeout(function(){return l.syncScrollArea()},0),l}return n(t,e),t.prototype.onThemeChange=function(e){this._viewportElement.style.backgroundColor=e.background.css},t.prototype._refresh=function(e){var t=this;if(e)return this._innerRefresh(),void(null!==this._refreshAnimationFrame&&cancelAnimationFrame(this._refreshAnimationFrame));null===this._refreshAnimationFrame&&(this._refreshAnimationFrame=requestAnimationFrame(function(){return t._innerRefresh()}))},t.prototype._innerRefresh=function(){if(this._charSizeService.height>0){this._currentRowHeight=this._renderService.dimensions.scaledCellHeight/window.devicePixelRatio,this._lastRecordedViewportHeight=this._viewportElement.offsetHeight;var e=Math.round(this._currentRowHeight*this._lastRecordedBufferLength)+(this._lastRecordedViewportHeight-this._renderService.dimensions.canvasHeight);this._lastRecordedBufferHeight!==e&&(this._lastRecordedBufferHeight=e,this._scrollArea.style.height=this._lastRecordedBufferHeight+"px")}var t=this._bufferService.buffer.ydisp*this._currentRowHeight;this._viewportElement.scrollTop!==t&&(this._ignoreNextScrollEvent=!0,this._viewportElement.scrollTop=t),this._refreshAnimationFrame=null},t.prototype.syncScrollArea=function(e){if(void 0===e&&(e=!1),this._lastRecordedBufferLength!==this._bufferService.buffer.lines.length)return this._lastRecordedBufferLength=this._bufferService.buffer.lines.length,void this._refresh(e);if(this._lastRecordedViewportHeight===this._renderService.dimensions.canvasHeight){var t=this._bufferService.buffer.ydisp*this._currentRowHeight;this._lastScrollTop===t&&this._lastScrollTop===this._viewportElement.scrollTop&&this._renderService.dimensions.scaledCellHeight/window.devicePixelRatio===this._currentRowHeight||this._refresh(e)}else this._refresh(e)},t.prototype._onScroll=function(e){if(this._lastScrollTop=this._viewportElement.scrollTop,this._viewportElement.offsetParent)if(this._ignoreNextScrollEvent)this._ignoreNextScrollEvent=!1;else{var t=Math.round(this._lastScrollTop/this._currentRowHeight)-this._bufferService.buffer.ydisp;this._scrollLines(t,!0)}},t.prototype._bubbleScroll=function(e,t){var i=this._viewportElement.scrollTop+this._lastRecordedViewportHeight;return!(t<0&&0!==this._viewportElement.scrollTop||t>0&&i<this._lastRecordedBufferHeight)||(e.cancelable&&e.preventDefault(),!1)},t.prototype.onWheel=function(e){var t=this._getPixelsScrolled(e);return 0!==t&&(this._viewportElement.scrollTop+=t,this._bubbleScroll(e,t))},t.prototype._getPixelsScrolled=function(e){if(0===e.deltaY)return 0;var t=this._applyScrollModifier(e.deltaY,e);return e.deltaMode===WheelEvent.DOM_DELTA_LINE?t*=this._currentRowHeight:e.deltaMode===WheelEvent.DOM_DELTA_PAGE&&(t*=this._currentRowHeight*this._bufferService.rows),t},t.prototype.getLinesScrolled=function(e){if(0===e.deltaY)return 0;var t=this._applyScrollModifier(e.deltaY,e);return e.deltaMode===WheelEvent.DOM_DELTA_PIXEL?(t/=this._currentRowHeight+0,this._wheelPartialScroll+=t,t=Math.floor(Math.abs(this._wheelPartialScroll))*(this._wheelPartialScroll>0?1:-1),this._wheelPartialScroll%=1):e.deltaMode===WheelEvent.DOM_DELTA_PAGE&&(t*=this._bufferService.rows),t},t.prototype._applyScrollModifier=function(e,t){var i=this._optionsService.options.fastScrollModifier;return"alt"===i&&t.altKey||"ctrl"===i&&t.ctrlKey||"shift"===i&&t.shiftKey?e*this._optionsService.options.fastScrollSensitivity*this._optionsService.options.scrollSensitivity:e*this._optionsService.options.scrollSensitivity},t.prototype.onTouchStart=function(e){this._lastTouchY=e.touches[0].pageY},t.prototype.onTouchMove=function(e){var t=this._lastTouchY-e.touches[0].pageY;return this._lastTouchY=e.touches[0].pageY,0!==t&&(this._viewportElement.scrollTop+=t,this._bubbleScroll(e,t))},t=s([o(3,h.IBufferService),o(4,h.IOptionsService),o(5,l.ICharSizeService),o(6,l.IRenderService)],t)}(a.Disposable);t.Viewport=f},function(e,t,i){"use strict";function r(e){return e.replace(/\r?\n/g,"\r")}function n(e,t){return t?"[200~"+e+"[201~":e}function s(e,t,i,s){e=n(e=r(e),i),s.triggerDataEvent(e,!0),t.value=""}function o(e,t,i){var r=i.getBoundingClientRect(),n=e.clientX-r.left-10,s=e.clientY-r.top-10;t.style.position="absolute",t.style.width="20px",t.style.height="20px",t.style.left=n+"px",t.style.top=s+"px",t.style.zIndex="1000",t.focus(),setTimeout(function(){t.style.position=null,t.style.width=null,t.style.height=null,t.style.left=null,t.style.top=null,t.style.zIndex=null},200)}Object.defineProperty(t,"__esModule",{value:!0}),t.prepareTextForTerminal=r,t.bracketTextForPaste=n,t.copyHandler=function(e,t){e.clipboardData&&e.clipboardData.setData("text/plain",t.selectionText),e.preventDefault()},t.handlePasteEvent=function(e,t,i,r){e.stopPropagation(),e.clipboardData&&s(e.clipboardData.getData("text/plain"),t,i,r)},t.paste=s,t.moveTextAreaUnderMouseCursor=o,t.rightClickHandler=function(e,t,i,r,n){o(e,t,i),n&&!r.isClickInSelection(e)&&r.selectWordAtCursor(e),t.value=r.selectionText,t.select()}},function(e,t,i){"use strict";var r,n=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(e,t)},function(e,t){function i(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)});Object.defineProperty(t,"__esModule",{value:!0});var s=i(11),o=i(17),a=i(18),c=i(38),l=i(2),h=i(14),u=i(8),f=i(15),_=i(1),d=i(3),p=i(4),v=i(6),g=i(20),y=i(22),m={"(":0,")":1,"*":2,"+":3,"-":1,".":2},b=function(){function e(e,t,i,r){this._bufferService=e,this._coreService=t,this._logService=i,this._optionsService=r,this._data=new Uint32Array(0)}return e.prototype.hook=function(e){this._data=new Uint32Array(0)},e.prototype.put=function(e,t,i){this._data=h.concat(this._data,e.subarray(t,i))},e.prototype.unhook=function(e){if(e){var t=u.utf32ToString(this._data);switch(this._data=new Uint32Array(0),t){case'"q':return this._coreService.triggerDataEvent(s.C0.ESC+'P1$r0"q'+s.C0.ESC+"\\");case'"p':return this._coreService.triggerDataEvent(s.C0.ESC+'P1$r61"p'+s.C0.ESC+"\\");case"r":var i=this._bufferService.buffer.scrollTop+1+";"+(this._bufferService.buffer.scrollBottom+1)+"r";return this._coreService.triggerDataEvent(s.C0.ESC+"P1$r"+i+s.C0.ESC+"\\");case"m":return this._coreService.triggerDataEvent(s.C0.ESC+"P1$r0m"+s.C0.ESC+"\\");case" q":var r={block:2,underline:4,bar:6}[this._optionsService.options.cursorStyle];return r-=this._optionsService.options.cursorBlink?1:0,this._coreService.triggerDataEvent(s.C0.ESC+"P1$r"+r+" q"+s.C0.ESC+"\\");default:this._logService.debug("Unknown DCS $q %s",t),this._coreService.triggerDataEvent(s.C0.ESC+"P0$r"+s.C0.ESC+"\\")}}else this._data=new Uint32Array(0)},e}(),C=function(e){function t(t,i,r,n,a,l,h,f){void 0===f&&(f=new c.EscapeSequenceParser);var d=e.call(this)||this;d._terminal=t,d._bufferService=i,d._coreService=r,d._dirtyRowService=n,d._logService=a,d._optionsService=l,d._coreMouseService=h,d._parser=f,d._parseBuffer=new Uint32Array(4096),d._stringDecoder=new u.StringToUtf32,d._utf8Decoder=new u.Utf8ToUtf32,d._workCell=new p.CellData,d._onCursorMove=new _.EventEmitter,d._onLineFeed=new _.EventEmitter,d._onScroll=new _.EventEmitter,d.register(d._parser),d._parser.setCsiHandlerFallback(function(e,t){d._logService.debug("Unknown CSI code: ",{identifier:d._parser.identToString(e),params:t.toArray()})}),d._parser.setEscHandlerFallback(function(e){d._logService.debug("Unknown ESC code: ",{identifier:d._parser.identToString(e)})}),d._parser.setExecuteHandlerFallback(function(e){d._logService.debug("Unknown EXECUTE code: ",{code:e})}),d._parser.setOscHandlerFallback(function(e,t,i){d._logService.debug("Unknown OSC code: ",{identifier:e,action:t,data:i})}),d._parser.setDcsHandlerFallback(function(e,t,i){"HOOK"===t&&(i=i.toArray()),d._logService.debug("Unknown DCS code: ",{identifier:d._parser.identToString(e),action:t,payload:i})}),d._parser.setPrintHandler(function(e,t,i){return d.print(e,t,i)}),d._parser.setCsiHandler({final:"@"},function(e){return d.insertChars(e)}),d._parser.setCsiHandler({intermediates:" ",final:"@"},function(e){return d.scrollLeft(e)}),d._parser.setCsiHandler({final:"A"},function(e){return d.cursorUp(e)}),d._parser.setCsiHandler({intermediates:" ",final:"A"},function(e){return d.scrollRight(e)}),d._parser.setCsiHandler({final:"B"},function(e){return d.cursorDown(e)}),d._parser.setCsiHandler({final:"C"},function(e){return d.cursorForward(e)}),d._parser.setCsiHandler({final:"D"},function(e){return d.cursorBackward(e)}),d._parser.setCsiHandler({final:"E"},function(e){return d.cursorNextLine(e)}),d._parser.setCsiHandler({final:"F"},function(e){return d.cursorPrecedingLine(e)}),d._parser.setCsiHandler({final:"G"},function(e){return d.cursorCharAbsolute(e)}),d._parser.setCsiHandler({final:"H"},function(e){return d.cursorPosition(e)}),d._parser.setCsiHandler({final:"I"},function(e){return d.cursorForwardTab(e)}),d._parser.setCsiHandler({final:"J"},function(e){return d.eraseInDisplay(e)}),d._parser.setCsiHandler({prefix:"?",final:"J"},function(e){return d.eraseInDisplay(e)}),d._parser.setCsiHandler({final:"K"},function(e){return d.eraseInLine(e)}),d._parser.setCsiHandler({prefix:"?",final:"K"},function(e){return d.eraseInLine(e)}),d._parser.setCsiHandler({final:"L"},function(e){return d.insertLines(e)}),d._parser.setCsiHandler({final:"M"},function(e){return d.deleteLines(e)}),d._parser.setCsiHandler({final:"P"},function(e){return d.deleteChars(e)}),d._parser.setCsiHandler({final:"S"},function(e){return d.scrollUp(e)}),d._parser.setCsiHandler({final:"T"},function(e){return d.scrollDown(e)}),d._parser.setCsiHandler({final:"X"},function(e){return d.eraseChars(e)}),d._parser.setCsiHandler({final:"Z"},function(e){return d.cursorBackwardTab(e)}),d._parser.setCsiHandler({final:"`"},function(e){return d.charPosAbsolute(e)}),d._parser.setCsiHandler({final:"a"},function(e){return d.hPositionRelative(e)}),d._parser.setCsiHandler({final:"b"},function(e){return d.repeatPrecedingCharacter(e)}),d._parser.setCsiHandler({final:"c"},function(e){return d.sendDeviceAttributesPrimary(e)}),d._parser.setCsiHandler({prefix:">",final:"c"},function(e){return d.sendDeviceAttributesSecondary(e)}),d._parser.setCsiHandler({final:"d"},function(e){return d.linePosAbsolute(e)}),d._parser.setCsiHandler({final:"e"},function(e){return d.vPositionRelative(e)}),d._parser.setCsiHandler({final:"f"},function(e){return d.hVPosition(e)}),d._parser.setCsiHandler({final:"g"},function(e){return d.tabClear(e)}),d._parser.setCsiHandler({final:"h"},function(e){return d.setMode(e)}),d._parser.setCsiHandler({prefix:"?",final:"h"},function(e){return d.setModePrivate(e)}),d._parser.setCsiHandler({final:"l"},function(e){return d.resetMode(e)}),d._parser.setCsiHandler({prefix:"?",final:"l"},function(e){return d.resetModePrivate(e)}),d._parser.setCsiHandler({final:"m"},function(e){return d.charAttributes(e)}),d._parser.setCsiHandler({final:"n"},function(e){return d.deviceStatus(e)}),d._parser.setCsiHandler({prefix:"?",final:"n"},function(e){return d.deviceStatusPrivate(e)}),d._parser.setCsiHandler({intermediates:"!",final:"p"},function(e){return d.softReset(e)}),d._parser.setCsiHandler({intermediates:" ",final:"q"},function(e){return d.setCursorStyle(e)}),d._parser.setCsiHandler({final:"r"},function(e){return d.setScrollRegion(e)}),d._parser.setCsiHandler({final:"s"},function(e){return d.saveCursor(e)}),d._parser.setCsiHandler({final:"u"},function(e){return d.restoreCursor(e)}),d._parser.setCsiHandler({intermediates:"'",final:"}"},function(e){return d.insertColumns(e)}),d._parser.setCsiHandler({intermediates:"'",final:"~"},function(e){return d.deleteColumns(e)}),d._parser.setExecuteHandler(s.C0.BEL,function(){return d.bell()}),d._parser.setExecuteHandler(s.C0.LF,function(){return d.lineFeed()}),d._parser.setExecuteHandler(s.C0.VT,function(){return d.lineFeed()}),d._parser.setExecuteHandler(s.C0.FF,function(){return d.lineFeed()}),d._parser.setExecuteHandler(s.C0.CR,function(){return d.carriageReturn()}),d._parser.setExecuteHandler(s.C0.BS,function(){return d.backspace()}),d._parser.setExecuteHandler(s.C0.HT,function(){return d.tab()}),d._parser.setExecuteHandler(s.C0.SO,function(){return d.shiftOut()}),d._parser.setExecuteHandler(s.C0.SI,function(){return d.shiftIn()}),d._parser.setExecuteHandler(s.C1.IND,function(){return d.index()}),d._parser.setExecuteHandler(s.C1.NEL,function(){return d.nextLine()}),d._parser.setExecuteHandler(s.C1.HTS,function(){return d.tabSet()}),d._parser.setOscHandler(0,new g.OscHandler(function(e){return d.setTitle(e)})),d._parser.setOscHandler(2,new g.OscHandler(function(e){return d.setTitle(e)})),d._parser.setEscHandler({final:"7"},function(){return d.saveCursor()}),d._parser.setEscHandler({final:"8"},function(){return d.restoreCursor()}),d._parser.setEscHandler({final:"D"},function(){return d.index()}),d._parser.setEscHandler({final:"E"},function(){return d.nextLine()}),d._parser.setEscHandler({final:"H"},function(){return d.tabSet()}),d._parser.setEscHandler({final:"M"},function(){return d.reverseIndex()}),d._parser.setEscHandler({final:"="},function(){return d.keypadApplicationMode()}),d._parser.setEscHandler({final:">"},function(){return d.keypadNumericMode()}),d._parser.setEscHandler({final:"c"},function(){return d.reset()}),d._parser.setEscHandler({final:"n"},function(){return d.setgLevel(2)}),d._parser.setEscHandler({final:"o"},function(){return d.setgLevel(3)}),d._parser.setEscHandler({final:"|"},function(){return d.setgLevel(3)}),d._parser.setEscHandler({final:"}"},function(){return d.setgLevel(2)}),d._parser.setEscHandler({final:"~"},function(){return d.setgLevel(1)}),d._parser.setEscHandler({intermediates:"%",final:"@"},function(){return d.selectDefaultCharset()}),d._parser.setEscHandler({intermediates:"%",final:"G"},function(){return d.selectDefaultCharset()});var v=function(e){y._parser.setEscHandler({intermediates:"(",final:e},function(){return d.selectCharset("("+e)}),y._parser.setEscHandler({intermediates:")",final:e},function(){return d.selectCharset(")"+e)}),y._parser.setEscHandler({intermediates:"*",final:e},function(){return d.selectCharset("*"+e)}),y._parser.setEscHandler({intermediates:"+",final:e},function(){return d.selectCharset("+"+e)}),y._parser.setEscHandler({intermediates:"-",final:e},function(){return d.selectCharset("-"+e)}),y._parser.setEscHandler({intermediates:".",final:e},function(){return d.selectCharset("."+e)}),y._parser.setEscHandler({intermediates:"/",final:e},function(){return d.selectCharset("/"+e)})},y=this;for(var m in o.CHARSETS)v(m);return d._parser.setEscHandler({intermediates:"#",final:"8"},function(){return d.screenAlignmentPattern()}),d._parser.setErrorHandler(function(e){return d._logService.error("Parsing error: ",e),e}),d._parser.setDcsHandler({intermediates:"$",final:"q"},new b(d._bufferService,d._coreService,d._logService,d._optionsService)),d}return n(t,e),Object.defineProperty(t.prototype,"onCursorMove",{get:function(){return this._onCursorMove.event},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"onLineFeed",{get:function(){return this._onLineFeed.event},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"onScroll",{get:function(){return this._onScroll.event},enumerable:!0,configurable:!0}),t.prototype.dispose=function(){e.prototype.dispose.call(this)},t.prototype.parse=function(e){var t=this._bufferService.buffer,i=t.x,r=t.y;if(this._logService.debug("parsing data",e),this._parseBuffer.length<e.length&&this._parseBuffer.length<131072&&(this._parseBuffer=new Uint32Array(Math.min(e.length,131072))),e.length>131072)for(var n=0;n<e.length;n+=131072){var s=n+131072<e.length?n+131072:e.length,o="string"==typeof e?this._stringDecoder.decode(e.substring(n,s),this._parseBuffer):this._utf8Decoder.decode(e.subarray(n,s),this._parseBuffer);this._parser.parse(this._parseBuffer,o)}else{o="string"==typeof e?this._stringDecoder.decode(e,this._parseBuffer):this._utf8Decoder.decode(e,this._parseBuffer);this._parser.parse(this._parseBuffer,o)}(t=this._bufferService.buffer).x===i&&t.y===r||this._onCursorMove.fire(),this._terminal.refresh(this._dirtyRowService.start,this._dirtyRowService.end)},t.prototype.print=function(e,t,i){var r,n,s=this._bufferService.buffer,o=this._terminal.charset,c=this._optionsService.options.screenReaderMode,l=this._bufferService.cols,h=this._terminal.wraparoundMode,f=this._terminal.insertMode,_=this._terminal.curAttrData,p=s.lines.get(s.y+s.ybase);this._dirtyRowService.markDirty(s.y);for(var v=t;v<i;++v){if(r=e[v],n=a.wcwidth(r),r<127&&o){var g=o[String.fromCharCode(r)];g&&(r=g.charCodeAt(0))}if(c&&this._terminal.onA11yCharEmitter.fire(u.stringFromCodePoint(r)),n||!s.x){if(s.x+n-1>=l)if(h)s.x=0,s.y++,s.y===s.scrollBottom+1?(s.y--,this._terminal.scroll(!0)):(s.y>=this._bufferService.rows&&(s.y=this._bufferService.rows-1),s.lines.get(s.y).isWrapped=!0),p=s.lines.get(s.y+s.ybase);else if(s.x=l-1,2===n)continue;if(f&&(p.insertCells(s.x,n,s.getNullCell(_)),2===p.getWidth(l-1)&&p.setCellFromCodePoint(l-1,d.NULL_CELL_CODE,d.NULL_CELL_WIDTH,_.fg,_.bg)),p.setCellFromCodePoint(s.x++,r,n,_.fg,_.bg),n>0)for(;--n;)p.setCellFromCodePoint(s.x++,0,0,_.fg,_.bg)}else p.getWidth(s.x-1)?p.addCodepointToCell(s.x-1,r):p.addCodepointToCell(s.x-2,r)}i&&(p.loadCell(s.x-1,this._workCell),2===this._workCell.getWidth()||this._workCell.getCode()>65535?this._parser.precedingCodepoint=0:this._workCell.isCombined()?this._parser.precedingCodepoint=this._workCell.getChars().charCodeAt(0):this._parser.precedingCodepoint=this._workCell.content),this._dirtyRowService.markDirty(s.y)},t.prototype.addCsiHandler=function(e,t){return this._parser.addCsiHandler(e,t)},t.prototype.addDcsHandler=function(e,t){return this._parser.addDcsHandler(e,new y.DcsHandler(t))},t.prototype.addEscHandler=function(e,t){return this._parser.addEscHandler(e,t)},t.prototype.addOscHandler=function(e,t){return this._parser.addOscHandler(e,new g.OscHandler(t))},t.prototype.bell=function(){this._terminal.bell()},t.prototype.lineFeed=function(){var e=this._bufferService.buffer;this._optionsService.options.convertEol&&(e.x=0),e.y++,e.y===e.scrollBottom+1?(e.y--,this._terminal.scroll()):e.y>=this._bufferService.rows&&(e.y=this._bufferService.rows-1),e.x>=this._bufferService.cols&&e.x--,this._onLineFeed.fire()},t.prototype.carriageReturn=function(){this._bufferService.buffer.x=0},t.prototype.backspace=function(){this._restrictCursor(),this._bufferService.buffer.x>0&&this._bufferService.buffer.x--},t.prototype.tab=function(){if(!(this._bufferService.buffer.x>=this._bufferService.cols)){var e=this._bufferService.buffer.x;this._bufferService.buffer.x=this._bufferService.buffer.nextStop(),this._optionsService.options.screenReaderMode&&this._terminal.onA11yTabEmitter.fire(this._bufferService.buffer.x-e)}},t.prototype.shiftOut=function(){this._terminal.setgLevel(1)},t.prototype.shiftIn=function(){this._terminal.setgLevel(0)},t.prototype._restrictCursor=function(){this._bufferService.buffer.x=Math.min(this._bufferService.cols-1,Math.max(0,this._bufferService.buffer.x)),this._bufferService.buffer.y=this._terminal.originMode?Math.min(this._bufferService.buffer.scrollBottom,Math.max(this._bufferService.buffer.scrollTop,this._bufferService.buffer.y)):Math.min(this._bufferService.rows-1,Math.max(0,this._bufferService.buffer.y))},t.prototype._setCursor=function(e,t){this._terminal.originMode?(this._bufferService.buffer.x=e,this._bufferService.buffer.y=this._bufferService.buffer.scrollTop+t):(this._bufferService.buffer.x=e,this._bufferService.buffer.y=t),this._restrictCursor()},t.prototype._moveCursor=function(e,t){this._restrictCursor(),this._setCursor(this._bufferService.buffer.x+e,this._bufferService.buffer.y+t)},t.prototype.cursorUp=function(e){var t=this._bufferService.buffer.y-this._bufferService.buffer.scrollTop;t>=0?this._moveCursor(0,-Math.min(t,e.params[0]||1)):this._moveCursor(0,-(e.params[0]||1))},t.prototype.cursorDown=function(e){var t=this._bufferService.buffer.scrollBottom-this._bufferService.buffer.y;t>=0?this._moveCursor(0,Math.min(t,e.params[0]||1)):this._moveCursor(0,e.params[0]||1)},t.prototype.cursorForward=function(e){this._moveCursor(e.params[0]||1,0)},t.prototype.cursorBackward=function(e){this._moveCursor(-(e.params[0]||1),0)},t.prototype.cursorNextLine=function(e){this.cursorDown(e),this._bufferService.buffer.x=0},t.prototype.cursorPrecedingLine=function(e){this.cursorUp(e),this._bufferService.buffer.x=0},t.prototype.cursorCharAbsolute=function(e){this._setCursor((e.params[0]||1)-1,this._bufferService.buffer.y)},t.prototype.cursorPosition=function(e){this._setCursor(e.length>=2?(e.params[1]||1)-1:0,(e.params[0]||1)-1)},t.prototype.charPosAbsolute=function(e){this._setCursor((e.params[0]||1)-1,this._bufferService.buffer.y)},t.prototype.hPositionRelative=function(e){this._moveCursor(e.params[0]||1,0)},t.prototype.linePosAbsolute=function(e){this._setCursor(this._bufferService.buffer.x,(e.params[0]||1)-1)},t.prototype.vPositionRelative=function(e){this._moveCursor(0,e.params[0]||1)},t.prototype.hVPosition=function(e){this.cursorPosition(e)},t.prototype.tabClear=function(e){var t=e.params[0];0===t?delete this._bufferService.buffer.tabs[this._bufferService.buffer.x]:3===t&&(this._bufferService.buffer.tabs={})},t.prototype.cursorForwardTab=function(e){if(!(this._bufferService.buffer.x>=this._bufferService.cols))for(var t=e.params[0]||1;t--;)this._bufferService.buffer.x=this._bufferService.buffer.nextStop()},t.prototype.cursorBackwardTab=function(e){if(!(this._bufferService.buffer.x>=this._bufferService.cols))for(var t=e.params[0]||1,i=this._bufferService.buffer;t--;)i.x=i.prevStop()},t.prototype._eraseInBufferLine=function(e,t,i,r){void 0===r&&(r=!1);var n=this._bufferService.buffer.lines.get(this._bufferService.buffer.ybase+e);n.replaceCells(t,i,this._bufferService.buffer.getNullCell(this._terminal.eraseAttrData())),r&&(n.isWrapped=!1)},t.prototype._resetBufferLine=function(e){var t=this._bufferService.buffer.lines.get(this._bufferService.buffer.ybase+e);t.fill(this._bufferService.buffer.getNullCell(this._terminal.eraseAttrData())),t.isWrapped=!1},t.prototype.eraseInDisplay=function(e){var t;switch(this._restrictCursor(),e.params[0]){case 0:for(t=this._bufferService.buffer.y,this._dirtyRowService.markDirty(t),this._eraseInBufferLine(t++,this._bufferService.buffer.x,this._bufferService.cols,0===this._bufferService.buffer.x);t<this._bufferService.rows;t++)this._resetBufferLine(t);this._dirtyRowService.markDirty(t);break;case 1:for(t=this._bufferService.buffer.y,this._dirtyRowService.markDirty(t),this._eraseInBufferLine(t,0,this._bufferService.buffer.x+1,!0),this._bufferService.buffer.x+1>=this._bufferService.cols&&(this._bufferService.buffer.lines.get(t+1).isWrapped=!1);t--;)this._resetBufferLine(t);this._dirtyRowService.markDirty(0);break;case 2:for(t=this._bufferService.rows,this._dirtyRowService.markDirty(t-1);t--;)this._resetBufferLine(t);this._dirtyRowService.markDirty(0);break;case 3:var i=this._bufferService.buffer.lines.length-this._bufferService.rows;i>0&&(this._bufferService.buffer.lines.trimStart(i),this._bufferService.buffer.ybase=Math.max(this._bufferService.buffer.ybase-i,0),this._bufferService.buffer.ydisp=Math.max(this._bufferService.buffer.ydisp-i,0),this._onScroll.fire(0))}},t.prototype.eraseInLine=function(e){switch(this._restrictCursor(),e.params[0]){case 0:this._eraseInBufferLine(this._bufferService.buffer.y,this._bufferService.buffer.x,this._bufferService.cols);break;case 1:this._eraseInBufferLine(this._bufferService.buffer.y,0,this._bufferService.buffer.x+1);break;case 2:this._eraseInBufferLine(this._bufferService.buffer.y,0,this._bufferService.cols)}this._dirtyRowService.markDirty(this._bufferService.buffer.y)},t.prototype.insertLines=function(e){this._restrictCursor();var t=e.params[0]||1,i=this._bufferService.buffer;if(!(i.y>i.scrollBottom||i.y<i.scrollTop)){for(var r=i.y+i.ybase,n=this._bufferService.rows-1-i.scrollBottom,s=this._bufferService.rows-1+i.ybase-n+1;t--;)i.lines.splice(s-1,1),i.lines.splice(r,0,i.getBlankLine(this._terminal.eraseAttrData()));this._dirtyRowService.markRangeDirty(i.y,i.scrollBottom),i.x=0}},t.prototype.deleteLines=function(e){this._restrictCursor();var t=e.params[0]||1,i=this._bufferService.buffer;if(!(i.y>i.scrollBottom||i.y<i.scrollTop)){var r,n=i.y+i.ybase;for(r=this._bufferService.rows-1-i.scrollBottom,r=this._bufferService.rows-1+i.ybase-r;t--;)i.lines.splice(n,1),i.lines.splice(r,0,i.getBlankLine(this._terminal.eraseAttrData()));this._dirtyRowService.markRangeDirty(i.y,i.scrollBottom),i.x=0}},t.prototype.insertChars=function(e){this._restrictCursor();var t=this._bufferService.buffer.lines.get(this._bufferService.buffer.y+this._bufferService.buffer.ybase);t&&(t.insertCells(this._bufferService.buffer.x,e.params[0]||1,this._bufferService.buffer.getNullCell(this._terminal.eraseAttrData())),this._dirtyRowService.markDirty(this._bufferService.buffer.y))},t.prototype.deleteChars=function(e){this._restrictCursor();var t=this._bufferService.buffer.lines.get(this._bufferService.buffer.y+this._bufferService.buffer.ybase);t&&(t.deleteCells(this._bufferService.buffer.x,e.params[0]||1,this._bufferService.buffer.getNullCell(this._terminal.eraseAttrData())),this._dirtyRowService.markDirty(this._bufferService.buffer.y))},t.prototype.scrollUp=function(e){for(var t=e.params[0]||1,i=this._bufferService.buffer;t--;)i.lines.splice(i.ybase+i.scrollTop,1),i.lines.splice(i.ybase+i.scrollBottom,0,i.getBlankLine(this._terminal.eraseAttrData()));this._dirtyRowService.markRangeDirty(i.scrollTop,i.scrollBottom)},t.prototype.scrollDown=function(e){for(var t=e.params[0]||1,i=this._bufferService.buffer;t--;)i.lines.splice(i.ybase+i.scrollBottom,1),i.lines.splice(i.ybase+i.scrollTop,0,i.getBlankLine(f.DEFAULT_ATTR_DATA));this._dirtyRowService.markRangeDirty(i.scrollTop,i.scrollBottom)},t.prototype.scrollLeft=function(e){var t=this._bufferService.buffer;if(!(t.y>t.scrollBottom||t.y<t.scrollTop)){for(var i=e.params[0]||1,r=t.scrollTop;r<=t.scrollBottom;++r){var n=t.lines.get(t.ybase+r);n.deleteCells(0,i,t.getNullCell(this._terminal.eraseAttrData())),n.isWrapped=!1}this._dirtyRowService.markRangeDirty(t.scrollTop,t.scrollBottom)}},t.prototype.scrollRight=function(e){var t=this._bufferService.buffer;if(!(t.y>t.scrollBottom||t.y<t.scrollTop)){for(var i=e.params[0]||1,r=t.scrollTop;r<=t.scrollBottom;++r){var n=t.lines.get(t.ybase+r);n.insertCells(0,i,t.getNullCell(this._terminal.eraseAttrData())),n.isWrapped=!1}this._dirtyRowService.markRangeDirty(t.scrollTop,t.scrollBottom)}},t.prototype.insertColumns=function(e){var t=this._bufferService.buffer;if(!(t.y>t.scrollBottom||t.y<t.scrollTop)){for(var i=e.params[0]||1,r=t.scrollTop;r<=t.scrollBottom;++r){var n=this._bufferService.buffer.lines.get(t.ybase+r);n.insertCells(t.x,i,t.getNullCell(this._terminal.eraseAttrData())),n.isWrapped=!1}this._dirtyRowService.markRangeDirty(t.scrollTop,t.scrollBottom)}},t.prototype.deleteColumns=function(e){var t=this._bufferService.buffer;if(!(t.y>t.scrollBottom||t.y<t.scrollTop)){for(var i=e.params[0]||1,r=t.scrollTop;r<=t.scrollBottom;++r){var n=t.lines.get(t.ybase+r);n.deleteCells(t.x,i,t.getNullCell(this._terminal.eraseAttrData())),n.isWrapped=!1}this._dirtyRowService.markRangeDirty(t.scrollTop,t.scrollBottom)}},t.prototype.eraseChars=function(e){this._restrictCursor();var t=this._bufferService.buffer.lines.get(this._bufferService.buffer.y+this._bufferService.buffer.ybase);t&&(t.replaceCells(this._bufferService.buffer.x,this._bufferService.buffer.x+(e.params[0]||1),this._bufferService.buffer.getNullCell(this._terminal.eraseAttrData())),this._dirtyRowService.markDirty(this._bufferService.buffer.y))},t.prototype.repeatPrecedingCharacter=function(e){if(this._parser.precedingCodepoint){for(var t=e.params[0]||1,i=new Uint32Array(t),r=0;r<t;++r)i[r]=this._parser.precedingCodepoint;this.print(i,0,i.length)}},t.prototype.sendDeviceAttributesPrimary=function(e){e.params[0]>0||(this._terminal.is("xterm")||this._terminal.is("rxvt-unicode")||this._terminal.is("screen")?this._coreService.triggerDataEvent(s.C0.ESC+"[?1;2c"):this._terminal.is("linux")&&this._coreService.triggerDataEvent(s.C0.ESC+"[?6c"))},t.prototype.sendDeviceAttributesSecondary=function(e){e.params[0]>0||(this._terminal.is("xterm")?this._coreService.triggerDataEvent(s.C0.ESC+"[>0;276;0c"):this._terminal.is("rxvt-unicode")?this._coreService.triggerDataEvent(s.C0.ESC+"[>85;95;0c"):this._terminal.is("linux")?this._coreService.triggerDataEvent(e.params[0]+"c"):this._terminal.is("screen")&&this._coreService.triggerDataEvent(s.C0.ESC+"[>83;40003;0c"))},t.prototype.setMode=function(e){for(var t=0;t<e.length;t++)switch(e.params[t]){case 4:this._terminal.insertMode=!0}},t.prototype.setModePrivate=function(e){for(var t=0;t<e.length;t++)switch(e.params[t]){case 1:this._coreService.decPrivateModes.applicationCursorKeys=!0;break;case 2:this._terminal.setgCharset(0,o.DEFAULT_CHARSET),this._terminal.setgCharset(1,o.DEFAULT_CHARSET),this._terminal.setgCharset(2,o.DEFAULT_CHARSET),this._terminal.setgCharset(3,o.DEFAULT_CHARSET);break;case 3:this._terminal.savedCols=this._bufferService.cols,this._terminal.resize(132,this._bufferService.rows),this._terminal.reset();break;case 6:this._terminal.originMode=!0,this._setCursor(0,0);break;case 7:this._terminal.wraparoundMode=!0;break;case 12:break;case 66:this._logService.debug("Serial port requested application keypad."),this._terminal.applicationKeypad=!0,this._terminal.viewport&&this._terminal.viewport.syncScrollArea();break;case 9:this._coreMouseService.activeProtocol="X10";break;case 1e3:this._coreMouseService.activeProtocol="VT200";break;case 1002:this._coreMouseService.activeProtocol="DRAG";break;case 1003:this._coreMouseService.activeProtocol="ANY";break;case 1004:this._terminal.sendFocus=!0;break;case 1005:this._logService.debug("DECSET 1005 not supported (see #2507)");break;case 1006:this._coreMouseService.activeEncoding="SGR";break;case 1015:this._logService.debug("DECSET 1015 not supported (see #2507)");break;case 25:this._terminal.cursorHidden=!1;break;case 1048:this.saveCursor();break;case 1049:this.saveCursor();case 47:case 1047:this._bufferService.buffers.activateAltBuffer(this._terminal.eraseAttrData()),this._terminal.refresh(0,this._bufferService.rows-1),this._terminal.viewport&&this._terminal.viewport.syncScrollArea(),this._terminal.showCursor();break;case 2004:this._terminal.bracketedPasteMode=!0}},t.prototype.resetMode=function(e){for(var t=0;t<e.length;t++)switch(e.params[t]){case 4:this._terminal.insertMode=!1}},t.prototype.resetModePrivate=function(e){for(var t=0;t<e.length;t++)switch(e.params[t]){case 1:this._coreService.decPrivateModes.applicationCursorKeys=!1;break;case 3:132===this._bufferService.cols&&this._terminal.savedCols&&this._terminal.resize(this._terminal.savedCols,this._bufferService.rows),delete this._terminal.savedCols,this._terminal.reset();break;case 6:this._terminal.originMode=!1,this._setCursor(0,0);break;case 7:this._terminal.wraparoundMode=!1;break;case 12:break;case 66:this._logService.debug("Switching back to normal keypad."),this._terminal.applicationKeypad=!1,this._terminal.viewport&&this._terminal.viewport.syncScrollArea();break;case 9:case 1e3:case 1002:case 1003:this._coreMouseService.activeProtocol="NONE";break;case 1004:this._terminal.sendFocus=!1;break;case 1005:this._logService.debug("DECRST 1005 not supported (see #2507)");break;case 1006:this._coreMouseService.activeEncoding="DEFAULT";break;case 1015:this._logService.debug("DECRST 1015 not supported (see #2507)");break;case 25:this._terminal.cursorHidden=!0;break;case 1048:this.restoreCursor();break;case 1049:case 47:case 1047:this._bufferService.buffers.activateNormalBuffer(),1049===e.params[t]&&this.restoreCursor(),this._terminal.refresh(0,this._bufferService.rows-1),this._terminal.viewport&&this._terminal.viewport.syncScrollArea(),this._terminal.showCursor();break;case 2004:this._terminal.bracketedPasteMode=!1}},t.prototype._extractColor=function(e,t,i){var r=[0,0,-1,0,0,0],n=0,s=0;do{if(r[s+n]=e.params[t+s],e.hasSubParams(t+s)){var o=e.getSubParams(t+s),a=0;do{5===r[1]&&(n=1),r[s+a+1+n]=o[a]}while(++a<o.length&&a+s+1+n<r.length);break}if(5===r[1]&&s+n>=2||2===r[1]&&s+n>=5)break;r[1]&&(n=1)}while(++s+t<e.length&&s+n<r.length);for(a=2;a<r.length;++a)-1===r[a]&&(r[a]=0);return 38===r[0]?2===r[1]?(i.fg|=50331648,i.fg&=-16777216,i.fg|=v.AttributeData.fromColorRGB([r[3],r[4],r[5]])):5===r[1]&&(i.fg&=-50331904,i.fg|=33554432|255&r[3]):48===r[0]&&(2===r[1]?(i.bg|=50331648,i.bg&=-16777216,i.bg|=v.AttributeData.fromColorRGB([r[3],r[4],r[5]])):5===r[1]&&(i.bg&=-50331904,i.bg|=33554432|255&r[3])),s},t.prototype.charAttributes=function(e){if(1===e.length&&0===e.params[0])return this._terminal.curAttrData.fg=f.DEFAULT_ATTR_DATA.fg,void(this._terminal.curAttrData.bg=f.DEFAULT_ATTR_DATA.bg);for(var t,i=e.length,r=this._terminal.curAttrData,n=0;n<i;n++)(t=e.params[n])>=30&&t<=37?(r.fg&=-50331904,r.fg|=16777216|t-30):t>=40&&t<=47?(r.bg&=-50331904,r.bg|=16777216|t-40):t>=90&&t<=97?(r.fg&=-50331904,r.fg|=16777224|t-90):t>=100&&t<=107?(r.bg&=-50331904,r.bg|=16777224|t-100):0===t?(r.fg=f.DEFAULT_ATTR_DATA.fg,r.bg=f.DEFAULT_ATTR_DATA.bg):1===t?r.fg|=134217728:3===t?r.bg|=67108864:4===t?r.fg|=268435456:5===t?r.fg|=536870912:7===t?r.fg|=67108864:8===t?r.fg|=1073741824:2===t?r.bg|=134217728:22===t?(r.fg&=-134217729,r.bg&=-134217729):23===t?r.bg&=-67108865:24===t?r.fg&=-268435457:25===t?r.fg&=-536870913:27===t?r.fg&=-67108865:28===t?r.fg&=-1073741825:39===t?(r.fg&=-67108864,r.fg|=16777215&f.DEFAULT_ATTR_DATA.fg):49===t?(r.bg&=-67108864,r.bg|=16777215&f.DEFAULT_ATTR_DATA.bg):38===t||48===t?n+=this._extractColor(e,n,r):100===t?(r.fg&=-67108864,r.fg|=16777215&f.DEFAULT_ATTR_DATA.fg,r.bg&=-67108864,r.bg|=16777215&f.DEFAULT_ATTR_DATA.bg):this._logService.debug("Unknown SGR attribute: %d.",t)},t.prototype.deviceStatus=function(e){switch(e.params[0]){case 5:this._coreService.triggerDataEvent(s.C0.ESC+"[0n");break;case 6:var t=this._bufferService.buffer.y+1,i=this._bufferService.buffer.x+1;this._coreService.triggerDataEvent(s.C0.ESC+"["+t+";"+i+"R")}},t.prototype.deviceStatusPrivate=function(e){switch(e.params[0]){case 6:var t=this._bufferService.buffer.y+1,i=this._bufferService.buffer.x+1;this._coreService.triggerDataEvent(s.C0.ESC+"[?"+t+";"+i+"R")}},t.prototype.softReset=function(e){this._terminal.cursorHidden=!1,this._terminal.insertMode=!1,this._terminal.originMode=!1,this._terminal.wraparoundMode=!0,this._terminal.applicationKeypad=!1,this._terminal.viewport&&this._terminal.viewport.syncScrollArea(),this._coreService.decPrivateModes.applicationCursorKeys=!1,this._bufferService.buffer.scrollTop=0,this._bufferService.buffer.scrollBottom=this._bufferService.rows-1,this._terminal.curAttrData=f.DEFAULT_ATTR_DATA.clone(),this._bufferService.buffer.x=this._bufferService.buffer.y=0,this._terminal.charset=null,this._terminal.glevel=0,this._terminal.charsets=[null]},t.prototype.setCursorStyle=function(e){var t=e.params[0]||1;switch(t){case 1:case 2:this._optionsService.options.cursorStyle="block";break;case 3:case 4:this._optionsService.options.cursorStyle="underline";break;case 5:case 6:this._optionsService.options.cursorStyle="bar"}var i=t%2==1;this._optionsService.options.cursorBlink=i},t.prototype.setScrollRegion=function(e){var t,i=e.params[0]||1;(e.length<2||(t=e.params[1])>this._bufferService.rows||0===t)&&(t=this._bufferService.rows),t>i&&(this._bufferService.buffer.scrollTop=i-1,this._bufferService.buffer.scrollBottom=t-1,this._setCursor(0,0))},t.prototype.saveCursor=function(e){this._bufferService.buffer.savedX=this._bufferService.buffer.x,this._bufferService.buffer.savedY=this._bufferService.buffer.ybase+this._bufferService.buffer.y,this._bufferService.buffer.savedCurAttrData.fg=this._terminal.curAttrData.fg,this._bufferService.buffer.savedCurAttrData.bg=this._terminal.curAttrData.bg,this._bufferService.buffer.savedCharset=this._terminal.charset},t.prototype.restoreCursor=function(e){this._bufferService.buffer.x=this._bufferService.buffer.savedX||0,this._bufferService.buffer.y=Math.max(this._bufferService.buffer.savedY-this._bufferService.buffer.ybase,0),this._terminal.curAttrData.fg=this._bufferService.buffer.savedCurAttrData.fg,this._terminal.curAttrData.bg=this._bufferService.buffer.savedCurAttrData.bg,this._terminal.charset=this._savedCharset,this._bufferService.buffer.savedCharset&&(this._terminal.charset=this._bufferService.buffer.savedCharset),this._restrictCursor()},t.prototype.setTitle=function(e){this._terminal.handleTitle(e)},t.prototype.nextLine=function(){this._bufferService.buffer.x=0,this.index()},t.prototype.keypadApplicationMode=function(){this._logService.debug("Serial port requested application keypad."),this._terminal.applicationKeypad=!0,this._terminal.viewport&&this._terminal.viewport.syncScrollArea()},t.prototype.keypadNumericMode=function(){this._logService.debug("Switching back to normal keypad."),this._terminal.applicationKeypad=!1,this._terminal.viewport&&this._terminal.viewport.syncScrollArea()},t.prototype.selectDefaultCharset=function(){this._terminal.setgLevel(0),this._terminal.setgCharset(0,o.DEFAULT_CHARSET)},t.prototype.selectCharset=function(e){2===e.length?"/"!==e[0]&&this._terminal.setgCharset(m[e[0]],o.CHARSETS[e[1]]||o.DEFAULT_CHARSET):this.selectDefaultCharset()},t.prototype.index=function(){this._restrictCursor();var e=this._bufferService.buffer;this._bufferService.buffer.y++,e.y===e.scrollBottom+1?(e.y--,this._terminal.scroll()):e.y>=this._bufferService.rows&&(e.y=this._bufferService.rows-1),this._restrictCursor()},t.prototype.tabSet=function(){this._bufferService.buffer.tabs[this._bufferService.buffer.x]=!0},t.prototype.reverseIndex=function(){this._restrictCursor();var e=this._bufferService.buffer;if(e.y===e.scrollTop){var t=e.scrollBottom-e.scrollTop;e.lines.shiftElements(e.y+e.ybase,t,1),e.lines.set(e.y+e.ybase,e.getBlankLine(this._terminal.eraseAttrData())),this._dirtyRowService.markRangeDirty(e.scrollTop,e.scrollBottom)}else e.y--,this._restrictCursor()},t.prototype.reset=function(){this._parser.reset(),this._terminal.reset()},t.prototype.setgLevel=function(e){this._terminal.setgLevel(e)},t.prototype.screenAlignmentPattern=function(){var e=new p.CellData;e.content=1<<22|"E".charCodeAt(0),e.fg=this._terminal.curAttrData.fg,e.bg=this._terminal.curAttrData.bg;var t=this._bufferService.buffer;this._setCursor(0,0);for(var i=0;i<this._bufferService.rows;++i){var r=t.y+t.ybase+i;t.lines.get(r).fill(e),t.lines.get(r).isWrapped=!1}this._dirtyRowService.markAllDirty(),this._setCursor(0,0)},t}(l.Disposable);t.InputHandler=C},function(e,t,i){"use strict";var r,n=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(e,t)},function(e,t){function i(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)});Object.defineProperty(t,"__esModule",{value:!0});var s=i(2),o=i(14),a=i(19),c=i(20),l=i(22),h=function(){function e(e){this.table=new Uint8Array(e)}return e.prototype.setDefault=function(e,t){o.fill(this.table,e<<4|t)},e.prototype.add=function(e,t,i,r){this.table[t<<8|e]=i<<4|r},e.prototype.addMany=function(e,t,i,r){for(var n=0;n<e.length;n++)this.table[t<<8|e[n]]=i<<4|r},e}();t.TransitionTable=h;t.VT500_TRANSITION_TABLE=function(){var e=new h(4095),t=Array.apply(null,Array(256)).map(function(e,t){return t}),i=function(e,i){return t.slice(e,i)},r=i(32,127),n=i(0,24);n.push(25),n.push.apply(n,i(28,32));var s,o=i(0,14);for(s in e.setDefault(1,0),e.addMany(r,0,2,0),o)e.addMany([24,26,153,154],s,3,0),e.addMany(i(128,144),s,3,0),e.addMany(i(144,152),s,3,0),e.add(156,s,0,0),e.add(27,s,11,1),e.add(157,s,4,8),e.addMany([152,158,159],s,0,7),e.add(155,s,11,3),e.add(144,s,11,9);return e.addMany(n,0,3,0),e.addMany(n,1,3,1),e.add(127,1,0,1),e.addMany(n,8,0,8),e.addMany(n,3,3,3),e.add(127,3,0,3),e.addMany(n,4,3,4),e.add(127,4,0,4),e.addMany(n,6,3,6),e.addMany(n,5,3,5),e.add(127,5,0,5),e.addMany(n,2,3,2),e.add(127,2,0,2),e.add(93,1,4,8),e.addMany(r,8,5,8),e.add(127,8,5,8),e.addMany([156,27,24,26,7],8,6,0),e.addMany(i(28,32),8,0,8),e.addMany([88,94,95],1,0,7),e.addMany(r,7,0,7),e.addMany(n,7,0,7),e.add(156,7,0,0),e.add(127,7,0,7),e.add(91,1,11,3),e.addMany(i(64,127),3,7,0),e.addMany(i(48,60),3,8,4),e.addMany([60,61,62,63],3,9,4),e.addMany(i(48,60),4,8,4),e.addMany(i(64,127),4,7,0),e.addMany([60,61,62,63],4,0,6),e.addMany(i(32,64),6,0,6),e.add(127,6,0,6),e.addMany(i(64,127),6,0,0),e.addMany(i(32,48),3,9,5),e.addMany(i(32,48),5,9,5),e.addMany(i(48,64),5,0,6),e.addMany(i(64,127),5,7,0),e.addMany(i(32,48),4,9,5),e.addMany(i(32,48),1,9,2),e.addMany(i(32,48),2,9,2),e.addMany(i(48,127),2,10,0),e.addMany(i(48,80),1,10,0),e.addMany(i(81,88),1,10,0),e.addMany([89,90,92],1,10,0),e.addMany(i(96,127),1,10,0),e.add(80,1,11,9),e.addMany(n,9,0,9),e.add(127,9,0,9),e.addMany(i(28,32),9,0,9),e.addMany(i(32,48),9,9,12),e.addMany(i(48,60),9,8,10),e.addMany([60,61,62,63],9,9,10),e.addMany(n,11,0,11),e.addMany(i(32,128),11,0,11),e.addMany(i(28,32),11,0,11),e.addMany(n,10,0,10),e.add(127,10,0,10),e.addMany(i(28,32),10,0,10),e.addMany(i(48,60),10,8,10),e.addMany([60,61,62,63],10,0,11),e.addMany(i(32,48),10,9,12),e.addMany(n,12,0,12),e.add(127,12,0,12),e.addMany(i(28,32),12,0,12),e.addMany(i(32,48),12,9,12),e.addMany(i(48,64),12,0,11),e.addMany(i(64,127),12,12,13),e.addMany(i(64,127),10,12,13),e.addMany(i(64,127),9,12,13),e.addMany(n,13,13,13),e.addMany(r,13,13,13),e.add(127,13,0,13),e.addMany([27,156,24,26],13,14,0),e.add(160,0,2,0),e.add(160,8,5,8),e.add(160,6,0,6),e.add(160,11,0,11),e.add(160,13,13,13),e}();var u=function(e){function i(i){void 0===i&&(i=t.VT500_TRANSITION_TABLE);var r=e.call(this)||this;return r.TRANSITIONS=i,r.initialState=0,r.currentState=r.initialState,r._params=new a.Params,r._params.addParam(0),r._collect=0,r.precedingCodepoint=0,r._printHandlerFb=function(e,t,i){},r._executeHandlerFb=function(e){},r._csiHandlerFb=function(e,t){},r._escHandlerFb=function(e){},r._errorHandlerFb=function(e){return e},r._printHandler=r._printHandlerFb,r._executeHandlers=Object.create(null),r._csiHandlers=Object.create(null),r._escHandlers=Object.create(null),r._oscParser=new c.OscParser,r._dcsParser=new l.DcsParser,r._errorHandler=r._errorHandlerFb,r.setEscHandler({final:"\\"},function(){}),r}return n(i,e),i.prototype._identifier=function(e,t){void 0===t&&(t=[64,126]);var i=0;if(e.prefix){if(e.prefix.length>1)throw new Error("only one byte as prefix supported");if((i=e.prefix.charCodeAt(0))&&60>i||i>63)throw new Error("prefix must be in range 0x3c .. 0x3f")}if(e.intermediates){if(e.intermediates.length>2)throw new Error("only two bytes as intermediates are supported");for(var r=0;r<e.intermediates.length;++r){var n=e.intermediates.charCodeAt(r);if(32>n||n>47)throw new Error("intermediate must be in range 0x20 .. 0x2f");i<<=8,i|=n}}if(1!==e.final.length)throw new Error("final must be a single byte");var s=e.final.charCodeAt(0);if(t[0]>s||s>t[1])throw new Error("final must be in range "+t[0]+" .. "+t[1]);return i<<=8,i|=s},i.prototype.identToString=function(e){for(var t=[];e;)t.push(String.fromCharCode(255&e)),e>>=8;return t.reverse().join("")},i.prototype.dispose=function(){this._csiHandlers=Object.create(null),this._executeHandlers=Object.create(null),this._escHandlers=Object.create(null),this._oscParser.dispose(),this._dcsParser.dispose()},i.prototype.setPrintHandler=function(e){this._printHandler=e},i.prototype.clearPrintHandler=function(){this._printHandler=this._printHandlerFb},i.prototype.addEscHandler=function(e,t){var i=this._identifier(e,[48,126]);void 0===this._escHandlers[i]&&(this._escHandlers[i]=[]);var r=this._escHandlers[i];return r.push(t),{dispose:function(){var e=r.indexOf(t);-1!==e&&r.splice(e,1)}}},i.prototype.setEscHandler=function(e,t){this._escHandlers[this._identifier(e,[48,126])]=[t]},i.prototype.clearEscHandler=function(e){this._escHandlers[this._identifier(e,[48,126])]&&delete this._escHandlers[this._identifier(e,[48,126])]},i.prototype.setEscHandlerFallback=function(e){this._escHandlerFb=e},i.prototype.setExecuteHandler=function(e,t){this._executeHandlers[e.charCodeAt(0)]=t},i.prototype.clearExecuteHandler=function(e){this._executeHandlers[e.charCodeAt(0)]&&delete this._executeHandlers[e.charCodeAt(0)]},i.prototype.setExecuteHandlerFallback=function(e){this._executeHandlerFb=e},i.prototype.addCsiHandler=function(e,t){var i=this._identifier(e);void 0===this._csiHandlers[i]&&(this._csiHandlers[i]=[]);var r=this._csiHandlers[i];return r.push(t),{dispose:function(){var e=r.indexOf(t);-1!==e&&r.splice(e,1)}}},i.prototype.setCsiHandler=function(e,t){this._csiHandlers[this._identifier(e)]=[t]},i.prototype.clearCsiHandler=function(e){this._csiHandlers[this._identifier(e)]&&delete this._csiHandlers[this._identifier(e)]},i.prototype.setCsiHandlerFallback=function(e){this._csiHandlerFb=e},i.prototype.addDcsHandler=function(e,t){return this._dcsParser.addHandler(this._identifier(e),t)},i.prototype.setDcsHandler=function(e,t){this._dcsParser.setHandler(this._identifier(e),t)},i.prototype.clearDcsHandler=function(e){this._dcsParser.clearHandler(this._identifier(e))},i.prototype.setDcsHandlerFallback=function(e){this._dcsParser.setHandlerFallback(e)},i.prototype.addOscHandler=function(e,t){return this._oscParser.addHandler(e,t)},i.prototype.setOscHandler=function(e,t){this._oscParser.setHandler(e,t)},i.prototype.clearOscHandler=function(e){this._oscParser.clearHandler(e)},i.prototype.setOscHandlerFallback=function(e){this._oscParser.setHandlerFallback(e)},i.prototype.setErrorHandler=function(e){this._errorHandler=e},i.prototype.clearErrorHandler=function(){this._errorHandler=this._errorHandlerFb},i.prototype.reset=function(){this.currentState=this.initialState,this._oscParser.reset(),this._dcsParser.reset(),this._params.reset(),this._params.addParam(0),this._collect=0,this.precedingCodepoint=0},i.prototype.parse=function(e,t){for(var i=0,r=0,n=this.currentState,s=this._oscParser,o=this._dcsParser,a=this._collect,c=this._params,l=this.TRANSITIONS.table,h=0;h<t;++h){switch((r=l[n<<8|((i=e[h])<160?i:160)])>>4){case 2:for(var u=h+1;;++u){if(u>=t||(i=e[u])<32||i>126&&i<160){this._printHandler(e,h,u),h=u-1;break}if(++u>=t||(i=e[u])<32||i>126&&i<160){this._printHandler(e,h,u),h=u-1;break}if(++u>=t||(i=e[u])<32||i>126&&i<160){this._printHandler(e,h,u),h=u-1;break}if(++u>=t||(i=e[u])<32||i>126&&i<160){this._printHandler(e,h,u),h=u-1;break}}break;case 3:this._executeHandlers[i]?this._executeHandlers[i]():this._executeHandlerFb(i),this.precedingCodepoint=0;break;case 0:break;case 1:if(this._errorHandler({position:h,code:i,currentState:n,collect:a,params:c,abort:!1}).abort)return;break;case 7:for(var f=this._csiHandlers[a<<8|i],_=f?f.length-1:-1;_>=0&&!1===f[_](c);_--);_<0&&this._csiHandlerFb(a<<8|i,c),this.precedingCodepoint=0;break;case 8:do{switch(i){case 59:c.addParam(0);break;case 58:c.addSubParam(-1);break;default:c.addDigit(i-48)}}while(++h<t&&(i=e[h])>47&&i<60);h--;break;case 9:a<<=8,a|=i;break;case 10:for(var d=this._escHandlers[a<<8|i],p=d?d.length-1:-1;p>=0&&!1===d[p]();p--);p<0&&this._escHandlerFb(a<<8|i),this.precedingCodepoint=0;break;case 11:c.reset(),c.addParam(0),a=0;break;case 12:o.hook(a<<8|i,c);break;case 13:for(var v=h+1;;++v)if(v>=t||24===(i=e[v])||26===i||27===i||i>127&&i<160){o.put(e,h,v),h=v-1;break}break;case 14:o.unhook(24!==i&&26!==i),27===i&&(r|=1),c.reset(),c.addParam(0),a=0,this.precedingCodepoint=0;break;case 4:s.start();break;case 5:for(var g=h+1;;g++)if(g>=t||(i=e[g])<32||i>127&&i<=159){s.put(e,h,g),h=g-1;break}break;case 6:s.end(24!==i&&26!==i),27===i&&(r|=1),c.reset(),c.addParam(0),a=0,this.precedingCodepoint=0}n=15&r}this._collect=a,this.currentState=n},i}(s.Disposable);t.EscapeSequenceParser=u},function(e,t,i){"use strict";var r,n=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(e,t)},function(e,t){function i(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)});Object.defineProperty(t,"__esModule",{value:!0});var s=i(40),o=i(45),a=i(46),c=i(47),l=i(27),h=i(2),u=i(23),f=1,_=function(e){function t(t,i,r,n,h){var u=e.call(this)||this;u._colors=t,u._terminal=i,u.bufferService=r,u._charSizeService=n,u.optionsService=h,u._id=f++;var _=u._terminal.options.allowTransparency;return u._characterJoinerRegistry=new l.CharacterJoinerRegistry(r),u._renderLayers=[new s.TextRenderLayer(u._terminal.screenElement,0,u._colors,u._characterJoinerRegistry,_,u._id,r,h),new o.SelectionRenderLayer(u._terminal.screenElement,1,u._colors,u._id,r,h),new c.LinkRenderLayer(u._terminal.screenElement,2,u._colors,u._id,u._terminal.linkifier,r,h),new a.CursorRenderLayer(u._terminal.screenElement,3,u._colors,u._terminal,u._id,r,h)],u.dimensions={scaledCharWidth:null,scaledCharHeight:null,scaledCellWidth:null,scaledCellHeight:null,scaledCharLeft:null,scaledCharTop:null,scaledCanvasWidth:null,scaledCanvasHeight:null,canvasWidth:null,canvasHeight:null,actualCellWidth:null,actualCellHeight:null},u._devicePixelRatio=window.devicePixelRatio,u._updateDimensions(),u.onOptionsChanged(),u}return n(t,e),t.prototype.dispose=function(){e.prototype.dispose.call(this),this._renderLayers.forEach(function(e){return e.dispose()}),u.removeTerminalFromCache(this._id)},t.prototype.onDevicePixelRatioChange=function(){this._devicePixelRatio!==window.devicePixelRatio&&(this._devicePixelRatio=window.devicePixelRatio,this.onResize(this._terminal.cols,this._terminal.rows))},t.prototype.setColors=function(e){var t=this;this._colors=e,this._renderLayers.forEach(function(e){e.setColors(t._colors),e.reset()})},t.prototype.onResize=function(e,t){var i=this;this._updateDimensions(),this._renderLayers.forEach(function(e){return e.resize(i.dimensions)}),this._terminal.screenElement.style.width=this.dimensions.canvasWidth+"px",this._terminal.screenElement.style.height=this.dimensions.canvasHeight+"px"},t.prototype.onCharSizeChanged=function(){this.onResize(this._terminal.cols,this._terminal.rows)},t.prototype.onBlur=function(){this._runOperation(function(e){return e.onBlur()})},t.prototype.onFocus=function(){this._runOperation(function(e){return e.onFocus()})},t.prototype.onSelectionChanged=function(e,t,i){void 0===i&&(i=!1),this._runOperation(function(r){return r.onSelectionChanged(e,t,i)})},t.prototype.onCursorMove=function(){this._runOperation(function(e){return e.onCursorMove()})},t.prototype.onOptionsChanged=function(){this._runOperation(function(e){return e.onOptionsChanged()})},t.prototype.clear=function(){this._runOperation(function(e){return e.reset()})},t.prototype._runOperation=function(e){this._renderLayers.forEach(function(t){return e(t)})},t.prototype.renderRows=function(e,t){this._renderLayers.forEach(function(i){return i.onGridChanged(e,t)})},t.prototype._updateDimensions=function(){this._charSizeService.hasValidSize&&(this.dimensions.scaledCharWidth=Math.floor(this._charSizeService.width*window.devicePixelRatio),this.dimensions.scaledCharHeight=Math.ceil(this._charSizeService.height*window.devicePixelRatio),this.dimensions.scaledCellHeight=Math.floor(this.dimensions.scaledCharHeight*this._terminal.options.lineHeight),this.dimensions.scaledCharTop=1===this._terminal.options.lineHeight?0:Math.round((this.dimensions.scaledCellHeight-this.dimensions.scaledCharHeight)/2),this.dimensions.scaledCellWidth=this.dimensions.scaledCharWidth+Math.round(this._terminal.options.letterSpacing),this.dimensions.scaledCharLeft=Math.floor(this._terminal.options.letterSpacing/2),this.dimensions.scaledCanvasHeight=this._terminal.rows*this.dimensions.scaledCellHeight,this.dimensions.scaledCanvasWidth=this._terminal.cols*this.dimensions.scaledCellWidth,this.dimensions.canvasHeight=Math.round(this.dimensions.scaledCanvasHeight/window.devicePixelRatio),this.dimensions.canvasWidth=Math.round(this.dimensions.scaledCanvasWidth/window.devicePixelRatio),this.dimensions.actualCellHeight=this.dimensions.canvasHeight/this._terminal.rows,this.dimensions.actualCellWidth=this.dimensions.canvasWidth/this._terminal.cols)},t.prototype.registerCharacterJoiner=function(e){return this._characterJoinerRegistry.registerCharacterJoiner(e)},t.prototype.deregisterCharacterJoiner=function(e){return this._characterJoinerRegistry.deregisterCharacterJoiner(e)},t}(h.Disposable);t.Renderer=_},function(e,t,i){"use strict";var r,n=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(e,t)},function(e,t){function i(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)});Object.defineProperty(t,"__esModule",{value:!0});var s=i(41),o=i(12),a=i(6),c=i(3),l=i(27),h=i(4),u=function(e){function t(t,i,r,n,o,a,c,l){var u=e.call(this,t,"text",i,o,r,a,c,l)||this;return u.bufferService=c,u.optionsService=l,u._characterWidth=0,u._characterFont="",u._characterOverlapCache={},u._workCell=new h.CellData,u._state=new s.GridCache,u._characterJoinerRegistry=n,u}return n(t,e),t.prototype.resize=function(t){e.prototype.resize.call(this,t);var i=this._getFont(!1,!1);this._characterWidth===t.scaledCharWidth&&this._characterFont===i||(this._characterWidth=t.scaledCharWidth,this._characterFont=i,this._characterOverlapCache={}),this._state.clear(),this._state.resize(this._bufferService.cols,this._bufferService.rows)},t.prototype.reset=function(){this._state.clear(),this._clearAll()},t.prototype._forEachCell=function(e,t,i,r){for(var n=e;n<=t;n++)for(var s=n+this._bufferService.buffer.ydisp,o=this._bufferService.buffer.lines.get(s),a=i?i.getJoinedCharacters(s):[],h=0;h<this._bufferService.cols;h++){o.loadCell(h,this._workCell);var u=this._workCell,f=!1,_=h;if(0!==u.getWidth()){if(a.length>0&&h===a[0][0]){f=!0;var d=a.shift();u=new l.JoinedCellData(this._workCell,o.translateToString(!0,d[0],d[1]),d[1]-d[0]),_=d[1]-1}!f&&this._isOverlapping(u)&&_<o.length-1&&o.getCodePoint(_+1)===c.NULL_CELL_CODE&&(u.content&=-12582913,u.content|=2<<22),r(u,h,n),h=_}}},t.prototype._drawBackground=function(e,t){var i=this,r=this._ctx,n=this._bufferService.cols,s=0,o=0,c=null;r.save(),this._forEachCell(e,t,null,function(e,t,l){var h=null;e.isInverse()?h=e.isFgDefault()?i._colors.foreground.css:e.isFgRGB()?"rgb("+a.AttributeData.toColorRGB(e.getFgColor()).join(",")+")":i._colors.ansi[e.getFgColor()].css:e.isBgRGB()?h="rgb("+a.AttributeData.toColorRGB(e.getBgColor()).join(",")+")":e.isBgPalette()&&(h=i._colors.ansi[e.getBgColor()].css),null===c&&(s=t,o=l),l!==o?(r.fillStyle=c||"",i._fillCells(s,o,n-s,1),s=t,o=l):c!==h&&(r.fillStyle=c||"",i._fillCells(s,o,t-s,1),s=t,o=l),c=h}),null!==c&&(r.fillStyle=c,this._fillCells(s,o,n-s,1)),r.restore()},t.prototype._drawForeground=function(e,t){var i=this;this._forEachCell(e,t,this._characterJoinerRegistry,function(e,t,r){if(!e.isInvisible()&&(i._drawChars(e,t,r),e.isUnderline())){if(i._ctx.save(),e.isInverse())e.isBgDefault()?i._ctx.fillStyle=i._colors.background.css:e.isBgRGB()?i._ctx.fillStyle="rgb("+a.AttributeData.toColorRGB(e.getBgColor()).join(",")+")":i._ctx.fillStyle=i._colors.ansi[e.getBgColor()].css;else if(e.isFgDefault())i._ctx.fillStyle=i._colors.foreground.css;else if(e.isFgRGB())i._ctx.fillStyle="rgb("+a.AttributeData.toColorRGB(e.getFgColor()).join(",")+")";else{var n=e.getFgColor();i._optionsService.options.drawBoldTextInBrightColors&&e.isBold()&&n<8&&(n+=8),i._ctx.fillStyle=i._colors.ansi[n].css}i._fillBottomLineAtCells(t,r,e.getWidth()),i._ctx.restore()}})},t.prototype.onGridChanged=function(e,t){0!==this._state.cache.length&&(this._charAtlas&&this._charAtlas.beginFrame(),this._clearCells(0,e,this._bufferService.cols,t-e+1),this._drawBackground(e,t),this._drawForeground(e,t))},t.prototype.onOptionsChanged=function(){this._setTransparency(this._optionsService.options.allowTransparency)},t.prototype._isOverlapping=function(e){if(1!==e.getWidth())return!1;if(e.getCode()<256)return!1;var t=e.getChars();if(this._characterOverlapCache.hasOwnProperty(t))return this._characterOverlapCache[t];this._ctx.save(),this._ctx.font=this._characterFont;var i=Math.floor(this._ctx.measureText(t).width)>this._characterWidth;return this._ctx.restore(),this._characterOverlapCache[t]=i,i},t}(o.BaseRenderLayer);t.TextRenderLayer=u},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){this.cache=[]}return e.prototype.resize=function(e,t){for(var i=0;i<e;i++){this.cache.length<=i&&this.cache.push([]);for(var r=this.cache[i].length;r<t;r++)this.cache[i].push(void 0);this.cache[i].length=t}this.cache.length=e},e.prototype.clear=function(){for(var e=0;e<this.cache.length;e++)for(var t=0;t<this.cache[e].length;t++)this.cache[e][t]=void 0},e}();t.GridCache=r},function(e,t,i){"use strict";var r,n=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(e,t)},function(e,t){function i(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)});Object.defineProperty(t,"__esModule",{value:!0});var s=i(9),o=i(43),a=i(25),c=i(44),l=i(10),h=i(26),u=1024,f=1024,_={css:"rgba(0, 0, 0, 0)",rgba:0};function d(e){return e.code<<21|e.bg<<12|e.fg<<3|(e.bold?0:4)+(e.dim?0:2)+(e.italic?0:1)}t.getGlyphCacheKey=d;var p=function(e){function t(t,i){var r=e.call(this)||this;r._config=i,r._drawToCacheCount=0,r._glyphsWaitingOnBitmap=[],r._bitmapCommitTimeout=null,r._bitmap=null,r._cacheCanvas=t.createElement("canvas"),r._cacheCanvas.width=u,r._cacheCanvas.height=f,r._cacheCtx=h.throwIfFalsy(r._cacheCanvas.getContext("2d",{alpha:!0}));var n=t.createElement("canvas");n.width=r._config.scaledCharWidth,n.height=r._config.scaledCharHeight,r._tmpCtx=h.throwIfFalsy(n.getContext("2d",{alpha:r._config.allowTransparency})),r._width=Math.floor(u/r._config.scaledCharWidth),r._height=Math.floor(f/r._config.scaledCharHeight);var s=r._width*r._height;return r._cacheMap=new c.LRUMap(s),r._cacheMap.prealloc(s),r}return n(t,e),t.prototype.dispose=function(){null!==this._bitmapCommitTimeout&&(window.clearTimeout(this._bitmapCommitTimeout),this._bitmapCommitTimeout=null)},t.prototype.beginFrame=function(){this._drawToCacheCount=0},t.prototype.draw=function(e,t,i,r){if(32===t.code)return!0;if(!this._canCache(t))return!1;var n=d(t),s=this._cacheMap.get(n);if(null!=s)return this._drawFromCache(e,s,i,r),!0;if(this._drawToCacheCount<100){var o=void 0;o=this._cacheMap.size<this._cacheMap.capacity?this._cacheMap.size:this._cacheMap.peek().index;var a=this._drawToCache(t,o);return this._cacheMap.set(n,a),this._drawFromCache(e,a,i,r),!0}return!1},t.prototype._canCache=function(e){return e.code<256},t.prototype._toCoordinateX=function(e){return e%this._width*this._config.scaledCharWidth},t.prototype._toCoordinateY=function(e){return Math.floor(e/this._width)*this._config.scaledCharHeight},t.prototype._drawFromCache=function(e,t,i,r){if(!t.isEmpty){var n=this._toCoordinateX(t.index),s=this._toCoordinateY(t.index);e.drawImage(t.inBitmap?this._bitmap:this._cacheCanvas,n,s,this._config.scaledCharWidth,this._config.scaledCharHeight,i,r,this._config.scaledCharWidth,this._config.scaledCharHeight)}},t.prototype._getColorFromAnsiIndex=function(e){return e<this._config.colors.ansi.length?this._config.colors.ansi[e]:a.DEFAULT_ANSI_COLORS[e]},t.prototype._getBackgroundColor=function(e){return this._config.allowTransparency?_:e.bg===s.INVERTED_DEFAULT_COLOR?this._config.colors.foreground:e.bg<256?this._getColorFromAnsiIndex(e.bg):this._config.colors.background},t.prototype._getForegroundColor=function(e){return e.fg===s.INVERTED_DEFAULT_COLOR?this._config.colors.background:e.fg<256?this._getColorFromAnsiIndex(e.fg):this._config.colors.foreground},t.prototype._drawToCache=function(e,t){this._drawToCacheCount++,this._tmpCtx.save();var i=this._getBackgroundColor(e);this._tmpCtx.globalCompositeOperation="copy",this._tmpCtx.fillStyle=i.css,this._tmpCtx.fillRect(0,0,this._config.scaledCharWidth,this._config.scaledCharHeight),this._tmpCtx.globalCompositeOperation="source-over";var r=e.bold?this._config.fontWeightBold:this._config.fontWeight,n=e.italic?"italic":"";this._tmpCtx.font=n+" "+r+" "+this._config.fontSize*this._config.devicePixelRatio+"px "+this._config.fontFamily,this._tmpCtx.textBaseline="middle",this._tmpCtx.fillStyle=this._getForegroundColor(e).css,e.dim&&(this._tmpCtx.globalAlpha=s.DIM_OPACITY),this._tmpCtx.fillText(e.chars,0,this._config.scaledCharHeight/2),this._tmpCtx.restore();var o=this._tmpCtx.getImageData(0,0,this._config.scaledCharWidth,this._config.scaledCharHeight),a=!1;this._config.allowTransparency||(a=function(e,t){for(var i=!0,r=t.rgba>>>24,n=t.rgba>>>16&255,s=t.rgba>>>8&255,o=0;o<e.data.length;o+=4)e.data[o]===r&&e.data[o+1]===n&&e.data[o+2]===s?e.data[o+3]=0:i=!1;return i}(o,i));var c=this._toCoordinateX(t),l=this._toCoordinateY(t);this._cacheCtx.putImageData(o,c,l);var h={index:t,isEmpty:a,inBitmap:!1};return this._addGlyphToBitmap(h),h},t.prototype._addGlyphToBitmap=function(e){var t=this;"createImageBitmap"in window&&!l.isFirefox&&!l.isSafari&&(this._glyphsWaitingOnBitmap.push(e),null===this._bitmapCommitTimeout&&(this._bitmapCommitTimeout=window.setTimeout(function(){return t._generateBitmap()},100)))},t.prototype._generateBitmap=function(){var e=this,t=this._glyphsWaitingOnBitmap;this._glyphsWaitingOnBitmap=[],window.createImageBitmap(this._cacheCanvas).then(function(i){e._bitmap=i;for(var r=0;r<t.length;r++){t[r].inBitmap=!0}}),this._bitmapCommitTimeout=null},t}(o.BaseCharAtlas);t.DynamicCharAtlas=p;var v=function(e){function t(t,i){return e.call(this)||this}return n(t,e),t.prototype.draw=function(e,t,i,r){return!1},t}(o.BaseCharAtlas);t.NoneCharAtlas=v},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){this._didWarmUp=!1}return e.prototype.dispose=function(){},e.prototype.warmUp=function(){this._didWarmUp||(this._doWarmUp(),this._didWarmUp=!0)},e.prototype._doWarmUp=function(){},e.prototype.beginFrame=function(){},e}();t.BaseCharAtlas=r},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e){this.capacity=e,this._map={},this._head=null,this._tail=null,this._nodePool=[],this.size=0}return e.prototype._unlinkNode=function(e){var t=e.prev,i=e.next;e===this._head&&(this._head=i),e===this._tail&&(this._tail=t),null!==t&&(t.next=i),null!==i&&(i.prev=t)},e.prototype._appendNode=function(e){var t=this._tail;null!==t&&(t.next=e),e.prev=t,e.next=null,this._tail=e,null===this._head&&(this._head=e)},e.prototype.prealloc=function(e){for(var t=this._nodePool,i=0;i<e;i++)t.push({prev:null,next:null,key:null,value:null})},e.prototype.get=function(e){var t=this._map[e];return void 0!==t?(this._unlinkNode(t),this._appendNode(t),t.value):null},e.prototype.peekValue=function(e){var t=this._map[e];return void 0!==t?t.value:null},e.prototype.peek=function(){var e=this._head;return null===e?null:e.value},e.prototype.set=function(e,t){var i=this._map[e];if(void 0!==i)i=this._map[e],this._unlinkNode(i),i.value=t;else if(this.size>=this.capacity)i=this._head,this._unlinkNode(i),delete this._map[i.key],i.key=e,i.value=t,this._map[e]=i;else{var r=this._nodePool;r.length>0?((i=r.pop()).key=e,i.value=t):i={prev:null,next:null,key:e,value:t},this._map[e]=i,this.size++}this._appendNode(i)},e}();t.LRUMap=r},function(e,t,i){"use strict";var r,n=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(e,t)},function(e,t){function i(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)});Object.defineProperty(t,"__esModule",{value:!0});var s=function(e){function t(t,i,r,n,s,o){var a=e.call(this,t,"selection",i,!0,r,n,s,o)||this;return a.bufferService=s,a.optionsService=o,a._clearState(),a}return n(t,e),t.prototype._clearState=function(){this._state={start:void 0,end:void 0,columnSelectMode:void 0,ydisp:void 0}},t.prototype.resize=function(t){e.prototype.resize.call(this,t),this._clearState()},t.prototype.reset=function(){this._state.start&&this._state.end&&(this._clearState(),this._clearAll())},t.prototype.onSelectionChanged=function(e,t,i){if(this._didStateChange(e,t,i,this._bufferService.buffer.ydisp))if(this._clearAll(),e&&t){var r=e[1]-this._bufferService.buffer.ydisp,n=t[1]-this._bufferService.buffer.ydisp,s=Math.max(r,0),o=Math.min(n,this._bufferService.rows-1);if(!(s>=this._bufferService.rows||o<0)){if(this._ctx.fillStyle=this._colors.selection.css,i){var a=e[0],c=t[0]-a,l=o-s+1;this._fillCells(a,s,c,l)}else{a=r===s?e[0]:0;var h=s===o?t[0]:this._bufferService.cols;this._fillCells(a,s,h-a,1);var u=Math.max(o-s-1,0);if(this._fillCells(0,s+1,this._bufferService.cols,u),s!==o){var f=n===o?t[0]:this._bufferService.cols;this._fillCells(0,o,f,1)}}this._state.start=[e[0],e[1]],this._state.end=[t[0],t[1]],this._state.columnSelectMode=i,this._state.ydisp=this._bufferService.buffer.ydisp}}else this._clearState()},t.prototype._didStateChange=function(e,t,i,r){return!this._areCoordinatesEqual(e,this._state.start)||!this._areCoordinatesEqual(t,this._state.end)||i!==this._state.columnSelectMode||r!==this._state.ydisp},t.prototype._areCoordinatesEqual=function(e,t){return!(!e||!t)&&(e[0]===t[0]&&e[1]===t[1])},t}(i(12).BaseRenderLayer);t.SelectionRenderLayer=s},function(e,t,i){"use strict";var r,n=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(e,t)},function(e,t){function i(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)});Object.defineProperty(t,"__esModule",{value:!0});var s=i(12),o=i(4),a=function(e){function t(t,i,r,n,s,a,c){var l=e.call(this,t,"cursor",i,!0,r,s,a,c)||this;return l._terminal=n,l.bufferService=a,l.optionsService=c,l._cell=new o.CellData,l._state={x:null,y:null,isFocused:null,style:null,width:null},l._cursorRenderers={bar:l._renderBarCursor.bind(l),block:l._renderBlockCursor.bind(l),underline:l._renderUnderlineCursor.bind(l)},l}return n(t,e),t.prototype.resize=function(t){e.prototype.resize.call(this,t),this._state={x:null,y:null,isFocused:null,style:null,width:null}},t.prototype.reset=function(){this._clearCursor(),this._cursorBlinkStateManager&&(this._cursorBlinkStateManager.dispose(),this._cursorBlinkStateManager=null,this.onOptionsChanged())},t.prototype.onBlur=function(){this._cursorBlinkStateManager&&this._cursorBlinkStateManager.pause(),this._terminal.refresh(this._bufferService.buffer.y,this._bufferService.buffer.y)},t.prototype.onFocus=function(){this._cursorBlinkStateManager?this._cursorBlinkStateManager.resume():this._terminal.refresh(this._bufferService.buffer.y,this._bufferService.buffer.y)},t.prototype.onOptionsChanged=function(){var e=this;this._optionsService.options.cursorBlink?this._cursorBlinkStateManager||(this._cursorBlinkStateManager=new c(this._terminal.isFocused,function(){e._render(!0)})):this._cursorBlinkStateManager&&(this._cursorBlinkStateManager.dispose(),this._cursorBlinkStateManager=null),this._terminal.refresh(this._bufferService.buffer.y,this._bufferService.buffer.y)},t.prototype.onCursorMove=function(){this._cursorBlinkStateManager&&this._cursorBlinkStateManager.restartBlinkAnimation()},t.prototype.onGridChanged=function(e,t){!this._cursorBlinkStateManager||this._cursorBlinkStateManager.isPaused?this._render(!1):this._cursorBlinkStateManager.restartBlinkAnimation()},t.prototype._render=function(e){if(this._terminal.cursorState&&!this._terminal.cursorHidden){var t=this._bufferService.buffer.ybase+this._bufferService.buffer.y,i=t-this._bufferService.buffer.ydisp;if(i<0||i>=this._bufferService.rows)this._clearCursor();else if(this._bufferService.buffer.lines.get(t).loadCell(this._bufferService.buffer.x,this._cell),void 0!==this._cell.content){if(!this._terminal.isFocused){this._clearCursor(),this._ctx.save(),this._ctx.fillStyle=this._colors.cursor.css;var r=this._optionsService.options.cursorStyle;return r&&"block"!==r?this._cursorRenderers[r](this._bufferService.buffer.x,i,this._cell):this._renderBlurCursor(this._bufferService.buffer.x,i,this._cell),this._ctx.restore(),this._state.x=this._bufferService.buffer.x,this._state.y=i,this._state.isFocused=!1,this._state.style=r,void(this._state.width=this._cell.getWidth())}if(!this._cursorBlinkStateManager||this._cursorBlinkStateManager.isCursorVisible){if(this._state){if(this._state.x===this._bufferService.buffer.x&&this._state.y===i&&this._state.isFocused===this._terminal.isFocused&&this._state.style===this._optionsService.options.cursorStyle&&this._state.width===this._cell.getWidth())return;this._clearCursor()}this._ctx.save(),this._cursorRenderers[this._optionsService.options.cursorStyle||"block"](this._bufferService.buffer.x,i,this._cell),this._ctx.restore(),this._state.x=this._bufferService.buffer.x,this._state.y=i,this._state.isFocused=!1,this._state.style=this._optionsService.options.cursorStyle,this._state.width=this._cell.getWidth()}else this._clearCursor()}}else this._clearCursor()},t.prototype._clearCursor=function(){this._state&&(this._clearCells(this._state.x,this._state.y,this._state.width,1),this._state={x:null,y:null,isFocused:null,style:null,width:null})},t.prototype._renderBarCursor=function(e,t,i){this._ctx.save(),this._ctx.fillStyle=this._colors.cursor.css,this._fillLeftLineAtCell(e,t),this._ctx.restore()},t.prototype._renderBlockCursor=function(e,t,i){this._ctx.save(),this._ctx.fillStyle=this._colors.cursor.css,this._fillCells(e,t,i.getWidth(),1),this._ctx.fillStyle=this._colors.cursorAccent.css,this._fillCharTrueColor(i,e,t),this._ctx.restore()},t.prototype._renderUnderlineCursor=function(e,t,i){this._ctx.save(),this._ctx.fillStyle=this._colors.cursor.css,this._fillBottomLineAtCells(e,t),this._ctx.restore()},t.prototype._renderBlurCursor=function(e,t,i){this._ctx.save(),this._ctx.strokeStyle=this._colors.cursor.css,this._strokeRectAtCell(e,t,i.getWidth(),1),this._ctx.restore()},t}(s.BaseRenderLayer);t.CursorRenderLayer=a;var c=function(){function e(e,t){this._renderCallback=t,this.isCursorVisible=!0,e&&this._restartInterval()}return Object.defineProperty(e.prototype,"isPaused",{get:function(){return!(this._blinkStartTimeout||this._blinkInterval)},enumerable:!0,configurable:!0}),e.prototype.dispose=function(){this._blinkInterval&&(window.clearInterval(this._blinkInterval),this._blinkInterval=null),this._blinkStartTimeout&&(window.clearTimeout(this._blinkStartTimeout),this._blinkStartTimeout=null),this._animationFrame&&(window.cancelAnimationFrame(this._animationFrame),this._animationFrame=null)},e.prototype.restartBlinkAnimation=function(){var e=this;this.isPaused||(this._animationTimeRestarted=Date.now(),this.isCursorVisible=!0,this._animationFrame||(this._animationFrame=window.requestAnimationFrame(function(){e._renderCallback(),e._animationFrame=null})))},e.prototype._restartInterval=function(e){var t=this;void 0===e&&(e=600),this._blinkInterval&&window.clearInterval(this._blinkInterval),this._blinkStartTimeout=setTimeout(function(){if(t._animationTimeRestarted){var e=600-(Date.now()-t._animationTimeRestarted);if(t._animationTimeRestarted=null,e>0)return void t._restartInterval(e)}t.isCursorVisible=!1,t._animationFrame=window.requestAnimationFrame(function(){t._renderCallback(),t._animationFrame=null}),t._blinkInterval=setInterval(function(){if(t._animationTimeRestarted){var e=600-(Date.now()-t._animationTimeRestarted);return t._animationTimeRestarted=null,void t._restartInterval(e)}t.isCursorVisible=!t.isCursorVisible,t._animationFrame=window.requestAnimationFrame(function(){t._renderCallback(),t._animationFrame=null})},600)},e)},e.prototype.pause=function(){this.isCursorVisible=!0,this._blinkInterval&&(window.clearInterval(this._blinkInterval),this._blinkInterval=null),this._blinkStartTimeout&&(window.clearTimeout(this._blinkStartTimeout),this._blinkStartTimeout=null),this._animationFrame&&(window.cancelAnimationFrame(this._animationFrame),this._animationFrame=null)},e.prototype.resume=function(){this._animationTimeRestarted=null,this._restartInterval(),this.restartBlinkAnimation()},e}()},function(e,t,i){"use strict";var r,n=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(e,t)},function(e,t){function i(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)});Object.defineProperty(t,"__esModule",{value:!0});var s=i(12),o=i(9),a=i(24),c=function(e){function t(t,i,r,n,s,o,a){var c=e.call(this,t,"link",i,!0,r,n,o,a)||this;return c.bufferService=o,c.optionsService=a,s.onLinkHover(function(e){return c._onLinkHover(e)}),s.onLinkLeave(function(e){return c._onLinkLeave(e)}),c}return n(t,e),t.prototype.resize=function(t){e.prototype.resize.call(this,t),this._state=void 0},t.prototype.reset=function(){this._clearCurrentLink()},t.prototype._clearCurrentLink=function(){if(this._state){this._clearCells(this._state.x1,this._state.y1,this._state.cols-this._state.x1,1);var e=this._state.y2-this._state.y1-1;e>0&&this._clearCells(0,this._state.y1+1,this._state.cols,e),this._clearCells(0,this._state.y2,this._state.x2,1),this._state=void 0}},t.prototype._onLinkHover=function(e){if(e.fg===o.INVERTED_DEFAULT_COLOR?this._ctx.fillStyle=this._colors.background.css:e.fg&&a.is256Color(e.fg)?this._ctx.fillStyle=this._colors.ansi[e.fg].css:this._ctx.fillStyle=this._colors.foreground.css,e.y1===e.y2)this._fillBottomLineAtCells(e.x1,e.y1,e.x2-e.x1);else{this._fillBottomLineAtCells(e.x1,e.y1,e.cols-e.x1);for(var t=e.y1+1;t<e.y2;t++)this._fillBottomLineAtCells(0,t,e.cols);this._fillBottomLineAtCells(0,e.y2,e.x2)}this._state=e},t.prototype._onLinkLeave=function(e){this._clearCurrentLink()},t}(s.BaseRenderLayer);t.LinkRenderLayer=c},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(18),n=i(1),s=function(){function e(e,t){this._bufferService=e,this._logService=t,this._linkMatchers=[],this._nextLinkMatcherId=0,this._onLinkHover=new n.EventEmitter,this._onLinkLeave=new n.EventEmitter,this._onLinkTooltip=new n.EventEmitter,this._rowsToLinkify={start:void 0,end:void 0}}return Object.defineProperty(e.prototype,"onLinkHover",{get:function(){return this._onLinkHover.event},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onLinkLeave",{get:function(){return this._onLinkLeave.event},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onLinkTooltip",{get:function(){return this._onLinkTooltip.event},enumerable:!0,configurable:!0}),e.prototype.attachToDom=function(e,t){this._element=e,this._mouseZoneManager=t},e.prototype.linkifyRows=function(t,i){var r=this;this._mouseZoneManager&&(void 0===this._rowsToLinkify.start||void 0===this._rowsToLinkify.end?(this._rowsToLinkify.start=t,this._rowsToLinkify.end=i):(this._rowsToLinkify.start=Math.min(this._rowsToLinkify.start,t),this._rowsToLinkify.end=Math.max(this._rowsToLinkify.end,i)),this._mouseZoneManager.clearAll(t,i),this._rowsTimeoutId&&clearTimeout(this._rowsTimeoutId),this._rowsTimeoutId=setTimeout(function(){return r._linkifyRows()},e._timeBeforeLatency))},e.prototype._linkifyRows=function(){this._rowsTimeoutId=void 0;var e=this._bufferService.buffer;if(void 0!==this._rowsToLinkify.start&&void 0!==this._rowsToLinkify.end){var t=e.ydisp+this._rowsToLinkify.start;if(!(t>=e.lines.length)){for(var i=e.ydisp+Math.min(this._rowsToLinkify.end,this._bufferService.rows)+1,r=Math.ceil(2e3/this._bufferService.cols),n=this._bufferService.buffer.iterator(!1,t,i,r,r);n.hasNext();)for(var s=n.next(),o=0;o<this._linkMatchers.length;o++)this._doLinkifyRow(s.range.first,s.content,this._linkMatchers[o]);this._rowsToLinkify.start=void 0,this._rowsToLinkify.end=void 0}}else this._logService.debug("_rowToLinkify was unset before _linkifyRows was called")},e.prototype.registerLinkMatcher=function(e,t,i){if(void 0===i&&(i={}),!t)throw new Error("handler must be defined");var r={id:this._nextLinkMatcherId++,regex:e,handler:t,matchIndex:i.matchIndex,validationCallback:i.validationCallback,hoverTooltipCallback:i.tooltipCallback,hoverLeaveCallback:i.leaveCallback,willLinkActivate:i.willLinkActivate,priority:i.priority||0};return this._addLinkMatcherToList(r),r.id},e.prototype._addLinkMatcherToList=function(e){if(0!==this._linkMatchers.length){for(var t=this._linkMatchers.length-1;t>=0;t--)if(e.priority<=this._linkMatchers[t].priority)return void this._linkMatchers.splice(t+1,0,e);this._linkMatchers.splice(0,0,e)}else this._linkMatchers.push(e)},e.prototype.deregisterLinkMatcher=function(e){for(var t=0;t<this._linkMatchers.length;t++)if(this._linkMatchers[t].id===e)return this._linkMatchers.splice(t,1),!0;return!1},e.prototype._doLinkifyRow=function(e,t,i){for(var r,n=this,s=new RegExp(i.regex.source,(i.regex.flags||"")+"g"),o=-1,a=function(){var a=r["number"!=typeof i.matchIndex?0:i.matchIndex];if(!a)return c._logService.debug("match found without corresponding matchIndex",r,i),"break";if(o=t.indexOf(a,o+1),s.lastIndex=o+a.length,o<0)return"break";var l=c._bufferService.buffer.stringIndexToBufferIndex(e,o);if(l[0]<0)return"break";var h=c._bufferService.buffer.lines.get(l[0]);if(!h)return"break";var u=h.getFg(l[1]),f=u?u>>9&511:void 0;i.validationCallback?i.validationCallback(a,function(e){n._rowsTimeoutId||e&&n._addLink(l[1],l[0]-n._bufferService.buffer.ydisp,a,i,f)}):c._addLink(l[1],l[0]-c._bufferService.buffer.ydisp,a,i,f)},c=this;null!==(r=s.exec(t));){if("break"===a())break}},e.prototype._addLink=function(e,t,i,n,s){var a=this;if(this._mouseZoneManager&&this._element){var c=r.getStringCellWidth(i),l=e%this._bufferService.cols,h=t+Math.floor(e/this._bufferService.cols),u=(l+c)%this._bufferService.cols,f=h+Math.floor((l+c)/this._bufferService.cols);0===u&&(u=this._bufferService.cols,f--),this._mouseZoneManager.add(new o(l+1,h+1,u+1,f+1,function(e){if(n.handler)return n.handler(e,i);window.open(i,"_blank")},function(){a._onLinkHover.fire(a._createLinkHoverEvent(l,h,u,f,s)),a._element.classList.add("xterm-cursor-pointer")},function(e){a._onLinkTooltip.fire(a._createLinkHoverEvent(l,h,u,f,s)),n.hoverTooltipCallback&&n.hoverTooltipCallback(e,i,{start:{x:l,y:h},end:{x:u,y:f}})},function(){a._onLinkLeave.fire(a._createLinkHoverEvent(l,h,u,f,s)),a._element.classList.remove("xterm-cursor-pointer"),n.hoverLeaveCallback&&n.hoverLeaveCallback()},function(e){return!n.willLinkActivate||n.willLinkActivate(e,i)}))}},e.prototype._createLinkHoverEvent=function(e,t,i,r,n){return{x1:e,y1:t,x2:i,y2:r,cols:this._bufferService.cols,fg:n}},e._timeBeforeLatency=200,e}();t.Linkifier=s;var o=function(e,t,i,r,n,s,o,a,c){this.x1=e,this.y1=t,this.x2=i,this.y2=r,this.clickCallback=n,this.hoverCallback=s,this.tooltipCallback=o,this.leaveCallback=a,this.willLinkActivate=c};t.MouseZone=o},function(e,t,i){"use strict";var r=this&&this.__decorate||function(e,t,i,r){var n,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(o=(s<3?n(o):s>3?n(t,i,o):n(t,i))||o);return s>3&&o&&Object.defineProperty(t,i,o),o},n=this&&this.__param||function(e,t){return function(i,r){t(i,r,e)}};Object.defineProperty(t,"__esModule",{value:!0});var s=i(10),o=i(50),a=i(4),c=i(1),l=i(5),h=i(0),u=i(28),f=i(51),_=String.fromCharCode(160),d=new RegExp(_,"g"),p=function(){function e(e,t,i,r,n,s,l,h){var u=this;this._scrollLines=e,this._element=t,this._screenElement=i,this._charSizeService=r,this._bufferService=n,this._coreService=s,this._mouseService=l,this._optionsService=h,this._dragScrollAmount=0,this._enabled=!0,this._workCell=new a.CellData,this._mouseDownTimeStamp=0,this._onLinuxMouseSelection=new c.EventEmitter,this._onRedrawRequest=new c.EventEmitter,this._onSelectionChange=new c.EventEmitter,this._mouseMoveListener=function(e){return u._onMouseMove(e)},this._mouseUpListener=function(e){return u._onMouseUp(e)},this._coreService.onUserInput(function(){u.hasSelection&&u.clearSelection()}),this._trimListener=this._bufferService.buffer.lines.onTrim(function(e){return u._onTrim(e)}),this._bufferService.buffers.onBufferActivate(function(e){return u._onBufferActivate(e)}),this.enable(),this._model=new o.SelectionModel(this._bufferService),this._activeSelectionMode=0}return Object.defineProperty(e.prototype,"onLinuxMouseSelection",{get:function(){return this._onLinuxMouseSelection.event},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onRedrawRequest",{get:function(){return this._onRedrawRequest.event},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onSelectionChange",{get:function(){return this._onSelectionChange.event},enumerable:!0,configurable:!0}),e.prototype.dispose=function(){this._removeMouseDownListeners()},e.prototype.reset=function(){this.clearSelection()},e.prototype.disable=function(){this.clearSelection(),this._enabled=!1},e.prototype.enable=function(){this._enabled=!0},Object.defineProperty(e.prototype,"selectionStart",{get:function(){return this._model.finalSelectionStart},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"selectionEnd",{get:function(){return this._model.finalSelectionEnd},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"hasSelection",{get:function(){var e=this._model.finalSelectionStart,t=this._model.finalSelectionEnd;return!(!e||!t)&&(e[0]!==t[0]||e[1]!==t[1])},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"selectionText",{get:function(){var e=this._model.finalSelectionStart,t=this._model.finalSelectionEnd;if(!e||!t)return"";var i=this._bufferService.buffer,r=[];if(3===this._activeSelectionMode){if(e[0]===t[0])return"";for(var n=e[1];n<=t[1];n++){var o=i.translateBufferLineToString(n,!0,e[0],t[0]);r.push(o)}}else{var a=e[1]===t[1]?t[0]:void 0;r.push(i.translateBufferLineToString(e[1],!0,e[0],a));for(n=e[1]+1;n<=t[1]-1;n++){var c=i.lines.get(n);o=i.translateBufferLineToString(n,!0);c&&c.isWrapped?r[r.length-1]+=o:r.push(o)}if(e[1]!==t[1]){c=i.lines.get(t[1]),o=i.translateBufferLineToString(t[1],!0,0,t[0]);c&&c.isWrapped?r[r.length-1]+=o:r.push(o)}}return r.map(function(e){return e.replace(d," ")}).join(s.isWindows?"\r\n":"\n")},enumerable:!0,configurable:!0}),e.prototype.clearSelection=function(){this._model.clearSelection(),this._removeMouseDownListeners(),this.refresh(),this._onSelectionChange.fire()},e.prototype.refresh=function(e){var t=this;(this._refreshAnimationFrame||(this._refreshAnimationFrame=window.requestAnimationFrame(function(){return t._refresh()})),s.isLinux&&e)&&(this.selectionText.length&&this._onLinuxMouseSelection.fire(this.selectionText))},e.prototype._refresh=function(){this._refreshAnimationFrame=void 0,this._onRedrawRequest.fire({start:this._model.finalSelectionStart,end:this._model.finalSelectionEnd,columnSelectMode:3===this._activeSelectionMode})},e.prototype.isClickInSelection=function(e){var t=this._getMouseBufferCoords(e),i=this._model.finalSelectionStart,r=this._model.finalSelectionEnd;return!!(i&&r&&t)&&this._areCoordsInSelection(t,i,r)},e.prototype._areCoordsInSelection=function(e,t,i){return e[1]>t[1]&&e[1]<i[1]||t[1]===i[1]&&e[1]===t[1]&&e[0]>=t[0]&&e[0]<i[0]||t[1]<i[1]&&e[1]===i[1]&&e[0]<i[0]||t[1]<i[1]&&e[1]===t[1]&&e[0]>=t[0]},e.prototype.selectWordAtCursor=function(e){var t=this._getMouseBufferCoords(e);t&&(this._selectWordAt(t,!1),this._model.selectionEnd=void 0,this.refresh(!0))},e.prototype.selectAll=function(){this._model.isSelectAllActive=!0,this.refresh(),this._onSelectionChange.fire()},e.prototype.selectLines=function(e,t){this._model.clearSelection(),e=Math.max(e,0),t=Math.min(t,this._bufferService.buffer.lines.length-1),this._model.selectionStart=[0,e],this._model.selectionEnd=[this._bufferService.cols,t],this.refresh(),this._onSelectionChange.fire()},e.prototype._onTrim=function(e){this._model.onTrim(e)&&this.refresh()},e.prototype._getMouseBufferCoords=function(e){var t=this._mouseService.getCoords(e,this._screenElement,this._bufferService.cols,this._bufferService.rows,!0);if(t)return t[0]--,t[1]--,t[1]+=this._bufferService.buffer.ydisp,t},e.prototype._getMouseEventScrollAmount=function(e){var t=u.getCoordsRelativeToElement(e,this._screenElement)[1],i=this._bufferService.rows*Math.ceil(this._charSizeService.height*this._optionsService.options.lineHeight);return t>=0&&t<=i?0:(t>i&&(t-=i),t=Math.min(Math.max(t,-50),50),(t/=50)/Math.abs(t)+Math.round(14*t))},e.prototype.shouldForceSelection=function(e){return s.isMac?e.altKey&&this._optionsService.options.macOptionClickForcesSelection:e.shiftKey},e.prototype.onMouseDown=function(e){if(this._mouseDownTimeStamp=e.timeStamp,(2!==e.button||!this.hasSelection)&&0===e.button){if(!this._enabled){if(!this.shouldForceSelection(e))return;e.stopPropagation()}e.preventDefault(),this._dragScrollAmount=0,this._enabled&&e.shiftKey?this._onIncrementalClick(e):1===e.detail?this._onSingleClick(e):2===e.detail?this._onDoubleClick(e):3===e.detail&&this._onTripleClick(e),this._addMouseDownListeners(),this.refresh(!0)}},e.prototype._addMouseDownListeners=function(){var e=this;this._screenElement.ownerDocument&&(this._screenElement.ownerDocument.addEventListener("mousemove",this._mouseMoveListener),this._screenElement.ownerDocument.addEventListener("mouseup",this._mouseUpListener)),this._dragScrollIntervalTimer=window.setInterval(function(){return e._dragScroll()},50)},e.prototype._removeMouseDownListeners=function(){this._screenElement.ownerDocument&&(this._screenElement.ownerDocument.removeEventListener("mousemove",this._mouseMoveListener),this._screenElement.ownerDocument.removeEventListener("mouseup",this._mouseUpListener)),clearInterval(this._dragScrollIntervalTimer),this._dragScrollIntervalTimer=void 0},e.prototype._onIncrementalClick=function(e){this._model.selectionStart&&(this._model.selectionEnd=this._getMouseBufferCoords(e))},e.prototype._onSingleClick=function(e){if(this._model.selectionStartLength=0,this._model.isSelectAllActive=!1,this._activeSelectionMode=this.shouldColumnSelect(e)?3:0,this._model.selectionStart=this._getMouseBufferCoords(e),this._model.selectionStart){this._model.selectionEnd=void 0;var t=this._bufferService.buffer.lines.get(this._model.selectionStart[1]);t&&t.length!==this._model.selectionStart[0]&&0===t.hasWidth(this._model.selectionStart[0])&&this._model.selectionStart[0]++}},e.prototype._onDoubleClick=function(e){var t=this._getMouseBufferCoords(e);t&&(this._activeSelectionMode=1,this._selectWordAt(t,!0))},e.prototype._onTripleClick=function(e){var t=this._getMouseBufferCoords(e);t&&(this._activeSelectionMode=2,this._selectLineAt(t[1]))},e.prototype.shouldColumnSelect=function(e){return e.altKey&&!(s.isMac&&this._optionsService.options.macOptionClickForcesSelection)},e.prototype._onMouseMove=function(e){if(e.stopImmediatePropagation(),this._model.selectionStart){var t=this._model.selectionEnd?[this._model.selectionEnd[0],this._model.selectionEnd[1]]:null;if(this._model.selectionEnd=this._getMouseBufferCoords(e),this._model.selectionEnd){2===this._activeSelectionMode?this._model.selectionEnd[1]<this._model.selectionStart[1]?this._model.selectionEnd[0]=0:this._model.selectionEnd[0]=this._bufferService.cols:1===this._activeSelectionMode&&this._selectToWordAt(this._model.selectionEnd),this._dragScrollAmount=this._getMouseEventScrollAmount(e),3!==this._activeSelectionMode&&(this._dragScrollAmount>0?this._model.selectionEnd[0]=this._bufferService.cols:this._dragScrollAmount<0&&(this._model.selectionEnd[0]=0));var i=this._bufferService.buffer;if(this._model.selectionEnd[1]<i.lines.length){var r=i.lines.get(this._model.selectionEnd[1]);r&&0===r.hasWidth(this._model.selectionEnd[0])&&this._model.selectionEnd[0]++}t&&t[0]===this._model.selectionEnd[0]&&t[1]===this._model.selectionEnd[1]||this.refresh(!0)}else this.refresh(!0)}},e.prototype._dragScroll=function(){if(this._model.selectionEnd&&this._model.selectionStart&&this._dragScrollAmount){this._scrollLines(this._dragScrollAmount,!1);var e=this._bufferService.buffer;this._dragScrollAmount>0?(3!==this._activeSelectionMode&&(this._model.selectionEnd[0]=this._bufferService.cols),this._model.selectionEnd[1]=Math.min(e.ydisp+this._bufferService.rows,e.lines.length-1)):(3!==this._activeSelectionMode&&(this._model.selectionEnd[0]=0),this._model.selectionEnd[1]=e.ydisp),this.refresh()}},e.prototype._onMouseUp=function(e){var t=e.timeStamp-this._mouseDownTimeStamp;if(this._removeMouseDownListeners(),this.selectionText.length<=1&&t<500){if(e.altKey&&this._bufferService.buffer.ybase===this._bufferService.buffer.ydisp){var i=this._mouseService.getCoords(e,this._element,this._bufferService.cols,this._bufferService.rows,!1);if(i&&void 0!==i[0]&&void 0!==i[1]){var r=f.moveToCellSequence(i[0]-1,i[1]-1,this._bufferService,this._coreService.decPrivateModes.applicationCursorKeys);this._coreService.triggerDataEvent(r,!0)}}}else this.hasSelection&&this._onSelectionChange.fire()},e.prototype._onBufferActivate=function(e){var t=this;this.clearSelection(),this._trimListener&&this._trimListener.dispose(),this._trimListener=e.activeBuffer.lines.onTrim(function(e){return t._onTrim(e)})},e.prototype._convertViewportColToCharacterIndex=function(e,t){for(var i=t[0],r=0;t[0]>=r;r++){var n=e.loadCell(r,this._workCell).getChars().length;0===this._workCell.getWidth()?i--:n>1&&t[0]!==r&&(i+=n-1)}return i},e.prototype.setSelection=function(e,t,i){this._model.clearSelection(),this._removeMouseDownListeners(),this._model.selectionStart=[e,t],this._model.selectionStartLength=i,this.refresh()},e.prototype._getWordAt=function(e,t,i,r){if(void 0===i&&(i=!0),void 0===r&&(r=!0),!(e[0]>=this._bufferService.cols)){var n=this._bufferService.buffer,s=n.lines.get(e[1]);if(s){var o=n.translateBufferLineToString(e[1],!1),a=this._convertViewportColToCharacterIndex(s,e),c=a,l=e[0]-a,h=0,u=0,f=0,_=0;if(" "===o.charAt(a)){for(;a>0&&" "===o.charAt(a-1);)a--;for(;c<o.length&&" "===o.charAt(c+1);)c++}else{var d=e[0],p=e[0];0===s.getWidth(d)&&(h++,d--),2===s.getWidth(p)&&(u++,p++);var v=s.getString(p).length;for(v>1&&(_+=v-1,c+=v-1);d>0&&a>0&&!this._isCharWordSeparator(s.loadCell(d-1,this._workCell));){s.loadCell(d-1,this._workCell);var g=this._workCell.getChars().length;0===this._workCell.getWidth()?(h++,d--):g>1&&(f+=g-1,a-=g-1),a--,d--}for(;p<s.length&&c+1<o.length&&!this._isCharWordSeparator(s.loadCell(p+1,this._workCell));){s.loadCell(p+1,this._workCell);var y=this._workCell.getChars().length;2===this._workCell.getWidth()?(u++,p++):y>1&&(_+=y-1,c+=y-1),c++,p++}}c++;var m=a+l-h+f,b=Math.min(this._bufferService.cols,c-a+h+u-f-_);if(t||""!==o.slice(a,c).trim()){if(i&&0===m&&32!==s.getCodePoint(0)){var C=n.lines.get(e[1]-1);if(C&&s.isWrapped&&32!==C.getCodePoint(this._bufferService.cols-1)){var S=this._getWordAt([this._bufferService.cols-1,e[1]-1],!1,!0,!1);if(S){var w=this._bufferService.cols-S.start;m-=w,b+=w}}}if(r&&m+b===this._bufferService.cols&&32!==s.getCodePoint(this._bufferService.cols-1)){var E=n.lines.get(e[1]+1);if(E&&E.isWrapped&&32!==E.getCodePoint(0)){var L=this._getWordAt([0,e[1]+1],!1,!1,!0);L&&(b+=L.length)}}return{start:m,length:b}}}}},e.prototype._selectWordAt=function(e,t){var i=this._getWordAt(e,t);if(i){for(;i.start<0;)i.start+=this._bufferService.cols,e[1]--;this._model.selectionStart=[i.start,e[1]],this._model.selectionStartLength=i.length}},e.prototype._selectToWordAt=function(e){var t=this._getWordAt(e,!0);if(t){for(var i=e[1];t.start<0;)t.start+=this._bufferService.cols,i--;if(!this._model.areSelectionValuesReversed())for(;t.start+t.length>this._bufferService.cols;)t.length-=this._bufferService.cols,i++;this._model.selectionEnd=[this._model.areSelectionValuesReversed()?t.start:t.start+t.length,i]}},e.prototype._isCharWordSeparator=function(e){return 0!==e.getWidth()&&this._optionsService.options.wordSeparator.indexOf(e.getChars())>=0},e.prototype._selectLineAt=function(e){var t=this._bufferService.buffer.getWrappedRangeForLine(e);this._model.selectionStart=[0,t.first],this._model.selectionEnd=[this._bufferService.cols,t.last],this._model.selectionStartLength=0},e=r([n(3,l.ICharSizeService),n(4,h.IBufferService),n(5,h.ICoreService),n(6,l.IMouseService),n(7,h.IOptionsService)],e)}();t.SelectionService=p},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e){this._bufferService=e,this.isSelectAllActive=!1,this.selectionStartLength=0}return e.prototype.clearSelection=function(){this.selectionStart=void 0,this.selectionEnd=void 0,this.isSelectAllActive=!1,this.selectionStartLength=0},Object.defineProperty(e.prototype,"finalSelectionStart",{get:function(){return this.isSelectAllActive?[0,0]:this.selectionEnd&&this.selectionStart&&this.areSelectionValuesReversed()?this.selectionEnd:this.selectionStart},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"finalSelectionEnd",{get:function(){if(this.isSelectAllActive)return[this._bufferService.cols,this._bufferService.buffer.ybase+this._bufferService.rows-1];if(this.selectionStart){if(!this.selectionEnd||this.areSelectionValuesReversed()){var e=this.selectionStart[0]+this.selectionStartLength;return e>this._bufferService.cols?[e%this._bufferService.cols,this.selectionStart[1]+Math.floor(e/this._bufferService.cols)]:[e,this.selectionStart[1]]}return this.selectionStartLength&&this.selectionEnd[1]===this.selectionStart[1]?[Math.max(this.selectionStart[0]+this.selectionStartLength,this.selectionEnd[0]),this.selectionEnd[1]]:this.selectionEnd}},enumerable:!0,configurable:!0}),e.prototype.areSelectionValuesReversed=function(){var e=this.selectionStart,t=this.selectionEnd;return!(!e||!t)&&(e[1]>t[1]||e[1]===t[1]&&e[0]>t[0])},e.prototype.onTrim=function(e){return this.selectionStart&&(this.selectionStart[1]-=e),this.selectionEnd&&(this.selectionEnd[1]-=e),this.selectionEnd&&this.selectionEnd[1]<0?(this.clearSelection(),!0):(this.selectionStart&&this.selectionStart[1]<0&&(this.selectionStart[1]=0),!1)},e}();t.SelectionModel=r},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(11);function n(e,t,i,r){var n=e-s(i,e),o=t-s(i,t);return h(Math.abs(n-o)-function(e,t,i){for(var r=0,n=e-s(i,e),o=t-s(i,t),c=0;c<Math.abs(n-o);c++){var l="A"===a(e,t)?-1:1,h=i.buffer.lines.get(n+l*c);h&&h.isWrapped&&r++}return r}(e,t,i),l(a(e,t),r))}function s(e,t){for(var i=0,r=e.buffer.lines.get(t),n=r&&r.isWrapped;n&&t>=0&&t<e.rows;)i++,n=(r=e.buffer.lines.get(--t))&&r.isWrapped;return i}function o(e,t,i,r,o,a){var c;return c=n(i,r,o,a).length>0?r-s(o,r):t,e<i&&c<=r||e>=i&&c<r?"C":"D"}function a(e,t){return e>t?"A":"B"}function c(e,t,i,r,n,s){for(var o=e,a=t,c="";o!==i||a!==r;)o+=n?1:-1,n&&o>s.cols-1?(c+=s.buffer.translateBufferLineToString(a,!1,e,o),o=0,e=0,a++):!n&&o<0&&(c+=s.buffer.translateBufferLineToString(a,!1,0,e+1),e=o=s.cols-1,a--);return c+s.buffer.translateBufferLineToString(a,!1,e,o)}function l(e,t){var i=t?"O":"[";return r.C0.ESC+i+e}function h(e,t){e=Math.floor(e);for(var i="",r=0;r<e;r++)i+=t;return i}t.moveToCellSequence=function(e,t,i,r){var a=i.buffer.x,u=i.buffer.y;return i.buffer.hasScrollback?function(e,t,i,r,n,s){var a=o(e,t,i,r,n,s);return h(Math.abs(e-i),l(a,s))}(a,u,e,t,i,r):function(e,t,i,r,o,a){if(0===n(t,r,o,a).length)return"";return h(c(e,t,e,t-s(o,t),!1,o).length,l("D",a))}(a,u,0,t,i,r)+n(u,t,i,r)+function(e,t,i,r,a,u){var f;f=n(t,r,a,u).length>0?r-s(a,r):t;var _=r,d=o(e,t,i,r,a,u);return h(c(e,f,i,_,"C"===d,a).length,l(d,u))}(a,u,e,t,i,r)}},function(e,t,i){"use strict";var r=this&&this.__decorate||function(e,t,i,r){var n,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(o=(s<3?n(o):s>3?n(t,i,o):n(t,i))||o);return s>3&&o&&Object.defineProperty(t,i,o),o},n=this&&this.__param||function(e,t){return function(i,r){t(i,r,e)}};Object.defineProperty(t,"__esModule",{value:!0});var s=i(0),o=function(){function e(e){this._optionsService=e}return Object.defineProperty(e,"audioContext",{get:function(){if(!e._audioContext){var t=window.AudioContext||window.webkitAudioContext;if(!t)return console.warn("Web Audio API is not supported by this browser. Consider upgrading to the latest version"),null;e._audioContext=new t}return e._audioContext},enumerable:!0,configurable:!0}),e.prototype.playBellSound=function(){var t=e.audioContext;if(t){var i=t.createBufferSource();t.decodeAudioData(this._base64ToArrayBuffer(this._removeMimeType(this._optionsService.options.bellSound)),function(e){i.buffer=e,i.connect(t.destination),i.start(0)})}},e.prototype._base64ToArrayBuffer=function(e){for(var t=window.atob(e),i=t.length,r=new Uint8Array(i),n=0;n<i;n++)r[n]=t.charCodeAt(n);return r.buffer},e.prototype._removeMimeType=function(e){return e.split(",")[1]},e=r([n(0,s.IOptionsService)],e)}();t.SoundService=o},function(e,t,i){"use strict";var r,n=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(e,t)},function(e,t){function i(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}),s=this&&this.__decorate||function(e,t,i,r){var n,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(o=(s<3?n(o):s>3?n(t,i,o):n(t,i))||o);return s>3&&o&&Object.defineProperty(t,i,o),o},o=this&&this.__param||function(e,t){return function(i,r){t(i,r,e)}};Object.defineProperty(t,"__esModule",{value:!0});var a=i(2),c=i(7),l=i(5),h=i(0),u=function(e){function t(t,i,r,n,s){var o=e.call(this)||this;return o._element=t,o._screenElement=i,o._bufferService=r,o._mouseService=n,o._selectionService=s,o._zones=[],o._areZonesActive=!1,o._lastHoverCoords=[void 0,void 0],o._initialSelectionLength=0,o.register(c.addDisposableDomListener(o._element,"mousedown",function(e){return o._onMouseDown(e)})),o._mouseMoveListener=function(e){return o._onMouseMove(e)},o._mouseLeaveListener=function(e){return o._onMouseLeave(e)},o._clickListener=function(e){return o._onClick(e)},o}return n(t,e),t.prototype.dispose=function(){e.prototype.dispose.call(this),this._deactivate()},t.prototype.add=function(e){this._zones.push(e),1===this._zones.length&&this._activate()},t.prototype.clearAll=function(e,t){if(0!==this._zones.length){e&&t||(e=0,t=this._bufferService.rows-1);for(var i=0;i<this._zones.length;i++){var r=this._zones[i];(r.y1>e&&r.y1<=t+1||r.y2>e&&r.y2<=t+1||r.y1<e&&r.y2>t+1)&&(this._currentZone&&this._currentZone===r&&(this._currentZone.leaveCallback(),this._currentZone=void 0),this._zones.splice(i--,1))}0===this._zones.length&&this._deactivate()}},t.prototype._activate=function(){this._areZonesActive||(this._areZonesActive=!0,this._element.addEventListener("mousemove",this._mouseMoveListener),this._element.addEventListener("mouseleave",this._mouseLeaveListener),this._element.addEventListener("click",this._clickListener))},t.prototype._deactivate=function(){this._areZonesActive&&(this._areZonesActive=!1,this._element.removeEventListener("mousemove",this._mouseMoveListener),this._element.removeEventListener("mouseleave",this._mouseLeaveListener),this._element.removeEventListener("click",this._clickListener))},t.prototype._onMouseMove=function(e){this._lastHoverCoords[0]===e.pageX&&this._lastHoverCoords[1]===e.pageY||(this._onHover(e),this._lastHoverCoords=[e.pageX,e.pageY])},t.prototype._onHover=function(e){var t=this,i=this._findZoneEventAt(e);i!==this._currentZone&&(this._currentZone&&(this._currentZone.leaveCallback(),this._currentZone=void 0,this._tooltipTimeout&&clearTimeout(this._tooltipTimeout)),i&&(this._currentZone=i,i.hoverCallback&&i.hoverCallback(e),this._tooltipTimeout=setTimeout(function(){return t._onTooltip(e)},500)))},t.prototype._onTooltip=function(e){this._tooltipTimeout=void 0;var t=this._findZoneEventAt(e);t&&t.tooltipCallback&&t.tooltipCallback(e)},t.prototype._onMouseDown=function(e){if(this._initialSelectionLength=this._getSelectionLength(),this._areZonesActive){var t=this._findZoneEventAt(e);t&&t.willLinkActivate(e)&&(e.preventDefault(),e.stopImmediatePropagation())}},t.prototype._onMouseLeave=function(e){this._currentZone&&(this._currentZone.leaveCallback(),this._currentZone=void 0,this._tooltipTimeout&&clearTimeout(this._tooltipTimeout))},t.prototype._onClick=function(e){var t=this._findZoneEventAt(e),i=this._getSelectionLength();t&&i===this._initialSelectionLength&&(t.clickCallback(e),e.preventDefault(),e.stopImmediatePropagation())},t.prototype._getSelectionLength=function(){var e=this._selectionService.selectionText;return e?e.length:0},t.prototype._findZoneEventAt=function(e){var t=this._mouseService.getCoords(e,this._screenElement,this._bufferService.cols,this._bufferService.rows);if(t)for(var i=t[0],r=t[1],n=0;n<this._zones.length;n++){var s=this._zones[n];if(s.y1===s.y2){if(r===s.y1&&i>=s.x1&&i<s.x2)return s}else if(r===s.y1&&i>=s.x1||r===s.y2&&i<s.x2||r>s.y1&&r<s.y2)return s}},t=s([o(2,h.IBufferService),o(3,l.IMouseService),o(4,l.ISelectionService)],t)}(a.Disposable);t.MouseZoneManager=u},function(e,t,i){"use strict";var r,n=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(e,t)},function(e,t){function i(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)});Object.defineProperty(t,"__esModule",{value:!0});var s=i(16),o=i(10),a=i(29),c=i(7),l=i(2),h=i(30),u=function(e){function t(t,i){var r=e.call(this)||this;r._terminal=t,r._renderService=i,r._liveRegionLineCount=0,r._charsToConsume=[],r._charsToAnnounce="",r._accessibilityTreeRoot=document.createElement("div"),r._accessibilityTreeRoot.classList.add("xterm-accessibility"),r._rowContainer=document.createElement("div"),r._rowContainer.classList.add("xterm-accessibility-tree"),r._rowElements=[];for(var n=0;n<r._terminal.rows;n++)r._rowElements[n]=r._createAccessibilityTreeNode(),r._rowContainer.appendChild(r._rowElements[n]);return r._topBoundaryFocusListener=function(e){return r._onBoundaryFocus(e,0)},r._bottomBoundaryFocusListener=function(e){return r._onBoundaryFocus(e,1)},r._rowElements[0].addEventListener("focus",r._topBoundaryFocusListener),r._rowElements[r._rowElements.length-1].addEventListener("focus",r._bottomBoundaryFocusListener),r._refreshRowsDimensions(),r._accessibilityTreeRoot.appendChild(r._rowContainer),r._renderRowsDebouncer=new a.RenderDebouncer(r._renderRows.bind(r)),r._refreshRows(),r._liveRegion=document.createElement("div"),r._liveRegion.classList.add("live-region"),r._liveRegion.setAttribute("aria-live","assertive"),r._accessibilityTreeRoot.appendChild(r._liveRegion),r._terminal.element.insertAdjacentElement("afterbegin",r._accessibilityTreeRoot),r.register(r._renderRowsDebouncer),r.register(r._terminal.onResize(function(e){return r._onResize(e.rows)})),r.register(r._terminal.onRender(function(e){return r._refreshRows(e.start,e.end)})),r.register(r._terminal.onScroll(function(){return r._refreshRows()})),r.register(r._terminal.onA11yChar(function(e){return r._onChar(e)})),r.register(r._terminal.onLineFeed(function(){return r._onChar("\n")})),r.register(r._terminal.onA11yTab(function(e){return r._onTab(e)})),r.register(r._terminal.onKey(function(e){return r._onKey(e.key)})),r.register(r._terminal.onBlur(function(){return r._clearLiveRegion()})),r.register(r._renderService.onDimensionsChange(function(){return r._refreshRowsDimensions()})),r._screenDprMonitor=new h.ScreenDprMonitor,r.register(r._screenDprMonitor),r._screenDprMonitor.setListener(function(){return r._refreshRowsDimensions()}),r.register(c.addDisposableDomListener(window,"resize",function(){return r._refreshRowsDimensions()})),r}return n(t,e),t.prototype.dispose=function(){e.prototype.dispose.call(this),this._terminal.element.removeChild(this._accessibilityTreeRoot),this._rowElements.length=0},t.prototype._onBoundaryFocus=function(e,t){var i=e.target,r=this._rowElements[0===t?1:this._rowElements.length-2];if(i.getAttribute("aria-posinset")!==(0===t?"1":""+this._terminal.buffer.lines.length)&&e.relatedTarget===r){var n,s;if(0===t?(n=i,s=this._rowElements.pop(),this._rowContainer.removeChild(s)):(n=this._rowElements.shift(),s=i,this._rowContainer.removeChild(n)),n.removeEventListener("focus",this._topBoundaryFocusListener),s.removeEventListener("focus",this._bottomBoundaryFocusListener),0===t){var o=this._createAccessibilityTreeNode();this._rowElements.unshift(o),this._rowContainer.insertAdjacentElement("afterbegin",o)}else{o=this._createAccessibilityTreeNode();this._rowElements.push(o),this._rowContainer.appendChild(o)}this._rowElements[0].addEventListener("focus",this._topBoundaryFocusListener),this._rowElements[this._rowElements.length-1].addEventListener("focus",this._bottomBoundaryFocusListener),this._terminal.scrollLines(0===t?-1:1),this._rowElements[0===t?1:this._rowElements.length-2].focus(),e.preventDefault(),e.stopImmediatePropagation()}},t.prototype._onResize=function(e){this._rowElements[this._rowElements.length-1].removeEventListener("focus",this._bottomBoundaryFocusListener);for(var t=this._rowContainer.children.length;t<this._terminal.rows;t++)this._rowElements[t]=this._createAccessibilityTreeNode(),this._rowContainer.appendChild(this._rowElements[t]);for(;this._rowElements.length>e;)this._rowContainer.removeChild(this._rowElements.pop());this._rowElements[this._rowElements.length-1].addEventListener("focus",this._bottomBoundaryFocusListener),this._refreshRowsDimensions()},t.prototype._createAccessibilityTreeNode=function(){var e=document.createElement("div");return e.setAttribute("role","listitem"),e.tabIndex=-1,this._refreshRowDimensions(e),e},t.prototype._onTab=function(e){for(var t=0;t<e;t++)this._onChar(" ")},t.prototype._onChar=function(e){var t=this;if(this._liveRegionLineCount<21){if(this._charsToConsume.length>0)this._charsToConsume.shift()!==e&&(this._charsToAnnounce+=e);else this._charsToAnnounce+=e;"\n"===e&&(this._liveRegionLineCount++,21===this._liveRegionLineCount&&(this._liveRegion.textContent+=s.tooMuchOutput)),o.isMac&&this._liveRegion.textContent&&this._liveRegion.textContent.length>0&&!this._liveRegion.parentNode&&setTimeout(function(){t._accessibilityTreeRoot.appendChild(t._liveRegion)},0)}},t.prototype._clearLiveRegion=function(){this._liveRegion.textContent="",this._liveRegionLineCount=0,o.isMac&&this._liveRegion.parentNode&&this._accessibilityTreeRoot.removeChild(this._liveRegion)},t.prototype._onKey=function(e){this._clearLiveRegion(),this._charsToConsume.push(e)},t.prototype._refreshRows=function(e,t){this._renderRowsDebouncer.refresh(e,t,this._terminal.rows)},t.prototype._renderRows=function(e,t){for(var i=this._terminal.buffer,r=i.lines.length.toString(),n=e;n<=t;n++){var s=i.translateBufferLineToString(i.ydisp+n,!0),o=(i.ydisp+n+1).toString(),a=this._rowElements[n];a&&(0===s.length?a.innerHTML="&nbsp;":a.textContent=s,a.setAttribute("aria-posinset",o),a.setAttribute("aria-setsize",r))}this._announceCharacters()},t.prototype._refreshRowsDimensions=function(){if(this._renderService.dimensions.actualCellHeight){this._rowElements.length!==this._terminal.rows&&this._onResize(this._terminal.rows);for(var e=0;e<this._terminal.rows;e++)this._refreshRowDimensions(this._rowElements[e])}},t.prototype._refreshRowDimensions=function(e){e.style.height=this._renderService.dimensions.actualCellHeight+"px"},t.prototype._announceCharacters=function(){0!==this._charsToAnnounce.length&&(this._liveRegion.textContent+=this._charsToAnnounce,this._charsToAnnounce="")},t}(l.Disposable);t.AccessibilityManager=u},function(e,t,i){"use strict";var r,n=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(e,t)},function(e,t){function i(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)});Object.defineProperty(t,"__esModule",{value:!0});var s=i(56),o=i(9),a=i(2),c="xterm-dom-renderer-owner-",l="xterm-rows",h="xterm-selection",u=1,f=function(e){function t(t,i,r,n){var o=e.call(this)||this;return o._terminal=t,o._colors=i,o._charSizeService=r,o._optionsService=n,o._terminalClass=u++,o._rowElements=[],o._rowContainer=document.createElement("div"),o._rowContainer.classList.add(l),o._rowContainer.style.lineHeight="normal",o._rowContainer.setAttribute("aria-hidden","true"),o._refreshRowElements(o._terminal.cols,o._terminal.rows),o._selectionContainer=document.createElement("div"),o._selectionContainer.classList.add(h),o._selectionContainer.setAttribute("aria-hidden","true"),o.dimensions={scaledCharWidth:null,scaledCharHeight:null,scaledCellWidth:null,scaledCellHeight:null,scaledCharLeft:null,scaledCharTop:null,scaledCanvasWidth:null,scaledCanvasHeight:null,canvasWidth:null,canvasHeight:null,actualCellWidth:null,actualCellHeight:null},o._updateDimensions(),o._injectCss(),o._rowFactory=new s.DomRendererRowFactory(document,o._optionsService),o._terminal.element.classList.add(c+o._terminalClass),o._terminal.screenElement.appendChild(o._rowContainer),o._terminal.screenElement.appendChild(o._selectionContainer),o._terminal.linkifier.onLinkHover(function(e){return o._onLinkHover(e)}),o._terminal.linkifier.onLinkLeave(function(e){return o._onLinkLeave(e)}),o}return n(t,e),t.prototype.dispose=function(){this._terminal.element.classList.remove(c+this._terminalClass),this._terminal.screenElement.removeChild(this._rowContainer),this._terminal.screenElement.removeChild(this._selectionContainer),this._terminal.screenElement.removeChild(this._themeStyleElement),this._terminal.screenElement.removeChild(this._dimensionsStyleElement),e.prototype.dispose.call(this)},t.prototype._updateDimensions=function(){var e=this;this.dimensions.scaledCharWidth=this._charSizeService.width*window.devicePixelRatio,this.dimensions.scaledCharHeight=Math.ceil(this._charSizeService.height*window.devicePixelRatio),this.dimensions.scaledCellWidth=this.dimensions.scaledCharWidth+Math.round(this._terminal.options.letterSpacing),this.dimensions.scaledCellHeight=Math.floor(this.dimensions.scaledCharHeight*this._terminal.options.lineHeight),this.dimensions.scaledCharLeft=0,this.dimensions.scaledCharTop=0,this.dimensions.scaledCanvasWidth=this.dimensions.scaledCellWidth*this._terminal.cols,this.dimensions.scaledCanvasHeight=this.dimensions.scaledCellHeight*this._terminal.rows,this.dimensions.canvasWidth=Math.round(this.dimensions.scaledCanvasWidth/window.devicePixelRatio),this.dimensions.canvasHeight=Math.round(this.dimensions.scaledCanvasHeight/window.devicePixelRatio),this.dimensions.actualCellWidth=this.dimensions.canvasWidth/this._terminal.cols,this.dimensions.actualCellHeight=this.dimensions.canvasHeight/this._terminal.rows,this._rowElements.forEach(function(t){t.style.width=e.dimensions.canvasWidth+"px",t.style.height=e.dimensions.actualCellHeight+"px",t.style.lineHeight=e.dimensions.actualCellHeight+"px",t.style.overflow="hidden"}),this._dimensionsStyleElement||(this._dimensionsStyleElement=document.createElement("style"),this._terminal.screenElement.appendChild(this._dimensionsStyleElement));var t=this._terminalSelector+" ."+l+" span { display: inline-block; height: 100%; vertical-align: top; width: "+this.dimensions.actualCellWidth+"px}";this._dimensionsStyleElement.innerHTML=t,this._selectionContainer.style.height=this._terminal._viewportElement.style.height,this._terminal.screenElement.style.width=this.dimensions.canvasWidth+"px",this._terminal.screenElement.style.height=this.dimensions.canvasHeight+"px"},t.prototype.setColors=function(e){this._colors=e,this._injectCss()},t.prototype._injectCss=function(){var e=this;this._themeStyleElement||(this._themeStyleElement=document.createElement("style"),this._terminal.screenElement.appendChild(this._themeStyleElement));var t=this._terminalSelector+" ."+l+" { color: "+this._colors.foreground.css+"; background-color: "+this._colors.background.css+"; font-family: "+this._terminal.options.fontFamily+"; font-size: "+this._terminal.options.fontSize+"px;}";t+=this._terminalSelector+" span:not(."+s.BOLD_CLASS+") { font-weight: "+this._terminal.options.fontWeight+";}"+this._terminalSelector+" span."+s.BOLD_CLASS+" { font-weight: "+this._terminal.options.fontWeightBold+";}"+this._terminalSelector+" span."+s.ITALIC_CLASS+" { font-style: italic;}",t+="@keyframes blink_box_shadow { 50% {  box-shadow: none; }}",t+="@keyframes blink_block { 0% {  background-color: "+this._colors.cursor.css+";  color: "+this._colors.cursorAccent.css+"; } 50% {  background-color: "+this._colors.cursorAccent.css+";  color: "+this._colors.cursor.css+"; }}",t+=this._terminalSelector+" ."+l+":not(.xterm-focus) ."+s.CURSOR_CLASS+"."+s.CURSOR_STYLE_BLOCK_CLASS+" { outline: 1px solid "+this._colors.cursor.css+"; outline-offset: -1px;}"+this._terminalSelector+" ."+l+".xterm-focus ."+s.CURSOR_CLASS+"."+s.CURSOR_BLINK_CLASS+":not(."+s.CURSOR_STYLE_BLOCK_CLASS+") { animation: blink_box_shadow 1s step-end infinite;}"+this._terminalSelector+" ."+l+".xterm-focus ."+s.CURSOR_CLASS+"."+s.CURSOR_BLINK_CLASS+"."+s.CURSOR_STYLE_BLOCK_CLASS+" { animation: blink_block 1s step-end infinite;}"+this._terminalSelector+" ."+l+".xterm-focus ."+s.CURSOR_CLASS+"."+s.CURSOR_STYLE_BLOCK_CLASS+" { background-color: "+this._colors.cursor.css+"; color: "+this._colors.cursorAccent.css+";}"+this._terminalSelector+" ."+l+" ."+s.CURSOR_CLASS+"."+s.CURSOR_STYLE_BAR_CLASS+" { box-shadow: 1px 0 0 "+this._colors.cursor.css+" inset;}"+this._terminalSelector+" ."+l+" ."+s.CURSOR_CLASS+"."+s.CURSOR_STYLE_UNDERLINE_CLASS+" { box-shadow: 0 -1px 0 "+this._colors.cursor.css+" inset;}",t+=this._terminalSelector+" ."+h+" { position: absolute; top: 0; left: 0; z-index: 1; pointer-events: none;}"+this._terminalSelector+" ."+h+" div { position: absolute; background-color: "+this._colors.selection.css+";}",this._colors.ansi.forEach(function(i,r){t+=e._terminalSelector+" .xterm-fg-"+r+" { color: "+i.css+"; }"+e._terminalSelector+" .xterm-bg-"+r+" { background-color: "+i.css+"; }"}),t+=this._terminalSelector+" .xterm-fg-"+o.INVERTED_DEFAULT_COLOR+" { color: "+this._colors.background.css+"; }"+this._terminalSelector+" .xterm-bg-"+o.INVERTED_DEFAULT_COLOR+" { background-color: "+this._colors.foreground.css+"; }",this._themeStyleElement.innerHTML=t},t.prototype.onDevicePixelRatioChange=function(){this._updateDimensions()},t.prototype._refreshRowElements=function(e,t){for(var i=this._rowElements.length;i<=t;i++){var r=document.createElement("div");this._rowContainer.appendChild(r),this._rowElements.push(r)}for(;this._rowElements.length>t;)this._rowContainer.removeChild(this._rowElements.pop())},t.prototype.onResize=function(e,t){this._refreshRowElements(e,t),this._updateDimensions()},t.prototype.onCharSizeChanged=function(){this._updateDimensions()},t.prototype.onBlur=function(){this._rowContainer.classList.remove("xterm-focus")},t.prototype.onFocus=function(){this._rowContainer.classList.add("xterm-focus")},t.prototype.onSelectionChanged=function(e,t,i){for(;this._selectionContainer.children.length;)this._selectionContainer.removeChild(this._selectionContainer.children[0]);if(e&&t){var r=e[1]-this._terminal.buffer.ydisp,n=t[1]-this._terminal.buffer.ydisp,s=Math.max(r,0),o=Math.min(n,this._terminal.rows-1);if(!(s>=this._terminal.rows||o<0)){var a=document.createDocumentFragment();if(i)a.appendChild(this._createSelectionElement(s,e[0],t[0],o-s+1));else{var c=r===s?e[0]:0,l=s===o?t[0]:this._terminal.cols;a.appendChild(this._createSelectionElement(s,c,l));var h=o-s-1;if(a.appendChild(this._createSelectionElement(s+1,0,this._terminal.cols,h)),s!==o){var u=n===o?t[0]:this._terminal.cols;a.appendChild(this._createSelectionElement(o,0,u))}}this._selectionContainer.appendChild(a)}}},t.prototype._createSelectionElement=function(e,t,i,r){void 0===r&&(r=1);var n=document.createElement("div");return n.style.height=r*this.dimensions.actualCellHeight+"px",n.style.top=e*this.dimensions.actualCellHeight+"px",n.style.left=t*this.dimensions.actualCellWidth+"px",n.style.width=this.dimensions.actualCellWidth*(i-t)+"px",n},t.prototype.onCursorMove=function(){},t.prototype.onOptionsChanged=function(){this._updateDimensions(),this._injectCss(),this._terminal.refresh(0,this._terminal.rows-1)},t.prototype.clear=function(){this._rowElements.forEach(function(e){return e.innerHTML=""})},t.prototype.renderRows=function(e,t){for(var i=this._terminal,r=i.buffer.ybase+i.buffer.y,n=this._terminal.buffer.x,s=this._terminal.options.cursorBlink,o=e;o<=t;o++){var a=this._rowElements[o];a.innerHTML="";var c=o+i.buffer.ydisp,l=i.buffer.lines.get(c),h=i.options.cursorStyle;a.appendChild(this._rowFactory.createRow(l,c===r,h,n,s,this.dimensions.actualCellWidth,i.cols))}},Object.defineProperty(t.prototype,"_terminalSelector",{get:function(){return"."+c+this._terminalClass},enumerable:!0,configurable:!0}),t.prototype.registerCharacterJoiner=function(e){return-1},t.prototype.deregisterCharacterJoiner=function(e){return!1},t.prototype._onLinkHover=function(e){this._setCellUnderline(e.x1,e.x2,e.y1,e.y2,e.cols,!0)},t.prototype._onLinkLeave=function(e){this._setCellUnderline(e.x1,e.x2,e.y1,e.y2,e.cols,!1)},t.prototype._setCellUnderline=function(e,t,i,r,n,s){for(;e!==t||i!==r;){var o=this._rowElements[i];if(!o)return;var a=o.children[e];a&&(a.style.textDecoration=s?"underline":"none"),++e>=n&&(e=0,i++)}},t}(a.Disposable);t.DomRenderer=f},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(9),n=i(6),s=i(3),o=i(4);t.BOLD_CLASS="xterm-bold",t.DIM_CLASS="xterm-dim",t.ITALIC_CLASS="xterm-italic",t.UNDERLINE_CLASS="xterm-underline",t.CURSOR_CLASS="xterm-cursor",t.CURSOR_BLINK_CLASS="xterm-cursor-blink",t.CURSOR_STYLE_BLOCK_CLASS="xterm-cursor-block",t.CURSOR_STYLE_BAR_CLASS="xterm-cursor-bar",t.CURSOR_STYLE_UNDERLINE_CLASS="xterm-cursor-underline";var a=function(){function e(e,t){this._document=e,this._optionsService=t,this._workCell=new o.CellData}return e.prototype.createRow=function(e,i,o,a,c,l,h){for(var u=this._document.createDocumentFragment(),f=0,_=Math.min(e.length,h)-1;_>=0;_--)if(e.loadCell(_,this._workCell).getCode()!==s.NULL_CELL_CODE||i&&_===a){f=_+1;break}for(_=0;_<f;_++){e.loadCell(_,this._workCell);var d=this._workCell.getWidth();if(0!==d){var p=this._document.createElement("span");if(d>1&&(p.style.width=l*d+"px"),i&&_===a)switch(p.classList.add(t.CURSOR_CLASS),c&&p.classList.add(t.CURSOR_BLINK_CLASS),o){case"bar":p.classList.add(t.CURSOR_STYLE_BAR_CLASS);break;case"underline":p.classList.add(t.CURSOR_STYLE_UNDERLINE_CLASS);break;default:p.classList.add(t.CURSOR_STYLE_BLOCK_CLASS)}this._workCell.isBold()&&p.classList.add(t.BOLD_CLASS),this._workCell.isItalic()&&p.classList.add(t.ITALIC_CLASS),this._workCell.isDim()&&p.classList.add(t.DIM_CLASS),this._workCell.isUnderline()&&p.classList.add(t.UNDERLINE_CLASS),p.textContent=this._workCell.getChars()||s.WHITESPACE_CELL_CHAR;var v=this._workCell.isInverse();if(this._workCell.isFgRGB()){var g=p.getAttribute("style")||"";g+=(v?"background-":"")+"color:rgb("+n.AttributeData.toColorRGB(this._workCell.getFgColor()).join(",")+");",p.setAttribute("style",g)}else if(this._workCell.isFgPalette()){var y=this._workCell.getFgColor();this._workCell.isBold()&&y<8&&!v&&this._optionsService.options.drawBoldTextInBrightColors&&(y+=8),p.classList.add("xterm-"+(v?"b":"f")+"g-"+y)}else v&&p.classList.add("xterm-bg-"+r.INVERTED_DEFAULT_COLOR);if(this._workCell.isBgRGB()){g=p.getAttribute("style")||"";g+=(v?"":"background-")+"color:rgb("+n.AttributeData.toColorRGB(this._workCell.getBgColor()).join(",")+");",p.setAttribute("style",g)}else this._workCell.isBgPalette()?p.classList.add("xterm-"+(v?"f":"b")+"g-"+this._workCell.getBgColor()):v&&p.classList.add("xterm-fg-"+r.INVERTED_DEFAULT_COLOR);u.appendChild(p)}}return u},e}();t.DomRendererRowFactory=a},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(11),n={48:["0",")"],49:["1","!"],50:["2","@"],51:["3","#"],52:["4","$"],53:["5","%"],54:["6","^"],55:["7","&"],56:["8","*"],57:["9","("],186:[";",":"],187:["=","+"],188:[",","<"],189:["-","_"],190:[".",">"],191:["/","?"],192:["`","~"],219:["[","{"],220:["\\","|"],221:["]","}"],222:["'",'"']};t.evaluateKeyboardEvent=function(e,t,i,s){var o={type:0,cancel:!1,key:void 0},a=(e.shiftKey?1:0)|(e.altKey?2:0)|(e.ctrlKey?4:0)|(e.metaKey?8:0);switch(e.keyCode){case 0:"UIKeyInputUpArrow"===e.key?o.key=t?r.C0.ESC+"OA":r.C0.ESC+"[A":"UIKeyInputLeftArrow"===e.key?o.key=t?r.C0.ESC+"OD":r.C0.ESC+"[D":"UIKeyInputRightArrow"===e.key?o.key=t?r.C0.ESC+"OC":r.C0.ESC+"[C":"UIKeyInputDownArrow"===e.key&&(o.key=t?r.C0.ESC+"OB":r.C0.ESC+"[B");break;case 8:if(e.shiftKey){o.key=r.C0.BS;break}if(e.altKey){o.key=r.C0.ESC+r.C0.DEL;break}o.key=r.C0.DEL;break;case 9:if(e.shiftKey){o.key=r.C0.ESC+"[Z";break}o.key=r.C0.HT,o.cancel=!0;break;case 13:o.key=r.C0.CR,o.cancel=!0;break;case 27:o.key=r.C0.ESC,o.cancel=!0;break;case 37:if(e.metaKey)break;a?(o.key=r.C0.ESC+"[1;"+(a+1)+"D",o.key===r.C0.ESC+"[1;3D"&&(o.key=r.C0.ESC+(i?"b":"[1;5D"))):o.key=t?r.C0.ESC+"OD":r.C0.ESC+"[D";break;case 39:if(e.metaKey)break;a?(o.key=r.C0.ESC+"[1;"+(a+1)+"C",o.key===r.C0.ESC+"[1;3C"&&(o.key=r.C0.ESC+(i?"f":"[1;5C"))):o.key=t?r.C0.ESC+"OC":r.C0.ESC+"[C";break;case 38:if(e.metaKey)break;a?(o.key=r.C0.ESC+"[1;"+(a+1)+"A",i||o.key!==r.C0.ESC+"[1;3A"||(o.key=r.C0.ESC+"[1;5A")):o.key=t?r.C0.ESC+"OA":r.C0.ESC+"[A";break;case 40:if(e.metaKey)break;a?(o.key=r.C0.ESC+"[1;"+(a+1)+"B",i||o.key!==r.C0.ESC+"[1;3B"||(o.key=r.C0.ESC+"[1;5B")):o.key=t?r.C0.ESC+"OB":r.C0.ESC+"[B";break;case 45:e.shiftKey||e.ctrlKey||(o.key=r.C0.ESC+"[2~");break;case 46:o.key=a?r.C0.ESC+"[3;"+(a+1)+"~":r.C0.ESC+"[3~";break;case 36:o.key=a?r.C0.ESC+"[1;"+(a+1)+"H":t?r.C0.ESC+"OH":r.C0.ESC+"[H";break;case 35:o.key=a?r.C0.ESC+"[1;"+(a+1)+"F":t?r.C0.ESC+"OF":r.C0.ESC+"[F";break;case 33:e.shiftKey?o.type=2:o.key=r.C0.ESC+"[5~";break;case 34:e.shiftKey?o.type=3:o.key=r.C0.ESC+"[6~";break;case 112:o.key=a?r.C0.ESC+"[1;"+(a+1)+"P":r.C0.ESC+"OP";break;case 113:o.key=a?r.C0.ESC+"[1;"+(a+1)+"Q":r.C0.ESC+"OQ";break;case 114:o.key=a?r.C0.ESC+"[1;"+(a+1)+"R":r.C0.ESC+"OR";break;case 115:o.key=a?r.C0.ESC+"[1;"+(a+1)+"S":r.C0.ESC+"OS";break;case 116:o.key=a?r.C0.ESC+"[15;"+(a+1)+"~":r.C0.ESC+"[15~";break;case 117:o.key=a?r.C0.ESC+"[17;"+(a+1)+"~":r.C0.ESC+"[17~";break;case 118:o.key=a?r.C0.ESC+"[18;"+(a+1)+"~":r.C0.ESC+"[18~";break;case 119:o.key=a?r.C0.ESC+"[19;"+(a+1)+"~":r.C0.ESC+"[19~";break;case 120:o.key=a?r.C0.ESC+"[20;"+(a+1)+"~":r.C0.ESC+"[20~";break;case 121:o.key=a?r.C0.ESC+"[21;"+(a+1)+"~":r.C0.ESC+"[21~";break;case 122:o.key=a?r.C0.ESC+"[23;"+(a+1)+"~":r.C0.ESC+"[23~";break;case 123:o.key=a?r.C0.ESC+"[24;"+(a+1)+"~":r.C0.ESC+"[24~";break;default:if(!e.ctrlKey||e.shiftKey||e.altKey||e.metaKey)if(i&&!s||!e.altKey||e.metaKey)i&&!e.altKey&&!e.ctrlKey&&e.metaKey?65===e.keyCode&&(o.type=1):e.key&&!e.ctrlKey&&!e.altKey&&!e.metaKey&&e.keyCode>=48&&1===e.key.length?o.key=e.key:e.key&&e.ctrlKey&&"_"===e.key&&(o.key=r.C0.US);else{var c=n[e.keyCode],l=c&&c[e.shiftKey?1:0];if(l)o.key=r.C0.ESC+l;else if(e.keyCode>=65&&e.keyCode<=90){var h=e.ctrlKey?e.keyCode-64:e.keyCode+32;o.key=r.C0.ESC+String.fromCharCode(h)}}else e.keyCode>=65&&e.keyCode<=90?o.key=String.fromCharCode(e.keyCode-64):32===e.keyCode?o.key=r.C0.NUL:e.keyCode>=51&&e.keyCode<=55?o.key=String.fromCharCode(e.keyCode-51+27):56===e.keyCode?o.key=r.C0.DEL:219===e.keyCode?o.key=r.C0.ESC:220===e.keyCode?o.key=r.C0.FS:221===e.keyCode&&(o.key=r.C0.GS)}return o}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(3);t.applyWindowsMode=function(e){return e.onLineFeed(function(){var t=e.buffer.lines.get(e.buffer.ybase+e.buffer.y-1).get(e.cols-1);e.buffer.lines.get(e.buffer.ybase+e.buffer.y).isWrapped=t[r.CHAR_DATA_CODE_INDEX]!==r.NULL_CELL_CODE&&t[r.CHAR_DATA_CODE_INDEX]!==r.WHITESPACE_CELL_CODE})}},function(e,t,i){"use strict";var r,n=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(e,t)},function(e,t){function i(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}),s=this&&this.__decorate||function(e,t,i,r){var n,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(o=(s<3?n(o):s>3?n(t,i,o):n(t,i))||o);return s>3&&o&&Object.defineProperty(t,i,o),o},o=this&&this.__param||function(e,t){return function(i,r){t(i,r,e)}};Object.defineProperty(t,"__esModule",{value:!0});var a=i(29),c=i(1),l=i(2),h=i(30),u=i(7),f=i(0),_=i(5),d=function(e){function t(t,i,r,n,s){var o=e.call(this)||this;if(o._renderer=t,o._rowCount=i,o.screenElement=r,o.optionsService=n,o.charSizeService=s,o._isPaused=!1,o._needsFullRefresh=!1,o._canvasWidth=0,o._canvasHeight=0,o._onDimensionsChange=new c.EventEmitter,o._onRender=new c.EventEmitter,o._onRefreshRequest=new c.EventEmitter,o._renderDebouncer=new a.RenderDebouncer(function(e,t){return o._renderRows(e,t)}),o.register(o._renderDebouncer),o._screenDprMonitor=new h.ScreenDprMonitor,o._screenDprMonitor.setListener(function(){return o.onDevicePixelRatioChange()}),o.register(o._screenDprMonitor),o.register(n.onOptionChange(function(){return o._renderer.onOptionsChanged()})),o.register(s.onCharSizeChange(function(){return o.onCharSizeChanged()})),o.register(u.addDisposableDomListener(window,"resize",function(){return o.onDevicePixelRatioChange()})),"IntersectionObserver"in window){var l=new IntersectionObserver(function(e){return o._onIntersectionChange(e[e.length-1])},{threshold:0});l.observe(r),o.register({dispose:function(){return l.disconnect()}})}return o}return n(t,e),Object.defineProperty(t.prototype,"onDimensionsChange",{get:function(){return this._onDimensionsChange.event},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"onRender",{get:function(){return this._onRender.event},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"onRefreshRequest",{get:function(){return this._onRefreshRequest.event},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"dimensions",{get:function(){return this._renderer.dimensions},enumerable:!0,configurable:!0}),t.prototype._onIntersectionChange=function(e){this._isPaused=0===e.intersectionRatio,!this._isPaused&&this._needsFullRefresh&&(this.refreshRows(0,this._rowCount-1),this._needsFullRefresh=!1)},t.prototype.refreshRows=function(e,t){this._isPaused?this._needsFullRefresh=!0:this._renderDebouncer.refresh(e,t,this._rowCount)},t.prototype._renderRows=function(e,t){this._renderer.renderRows(e,t),this._onRender.fire({start:e,end:t})},t.prototype.resize=function(e,t){this._rowCount=t,this._fireOnCanvasResize()},t.prototype.changeOptions=function(){this._renderer.onOptionsChanged(),this._fireOnCanvasResize()},t.prototype._fireOnCanvasResize=function(){this._renderer.dimensions.canvasWidth===this._canvasWidth&&this._renderer.dimensions.canvasHeight===this._canvasHeight||this._onDimensionsChange.fire(this._renderer.dimensions)},t.prototype.dispose=function(){this._renderer.dispose()},t.prototype.setRenderer=function(e){this._renderer.dispose(),this._renderer=e,this.refreshRows(0,this._rowCount-1)},t.prototype._fullRefresh=function(){this._isPaused?this._needsFullRefresh=!0:this.refreshRows(0,this._rowCount-1)},t.prototype.setColors=function(e){this._renderer.setColors(e),this._fullRefresh()},t.prototype.onDevicePixelRatioChange=function(){this._renderer.onDevicePixelRatioChange(),this.refreshRows(0,this._rowCount-1)},t.prototype.onResize=function(e,t){this._renderer.onResize(e,t),this._fullRefresh()},t.prototype.onCharSizeChanged=function(){this._renderer.onCharSizeChanged()},t.prototype.onBlur=function(){this._renderer.onBlur()},t.prototype.onFocus=function(){this._renderer.onFocus()},t.prototype.onSelectionChanged=function(e,t,i){this._renderer.onSelectionChanged(e,t,i)},t.prototype.onCursorMove=function(){this._renderer.onCursorMove()},t.prototype.clear=function(){this._renderer.clear()},t.prototype.registerCharacterJoiner=function(e){return this._renderer.registerCharacterJoiner(e)},t.prototype.deregisterCharacterJoiner=function(e){return this._renderer.deregisterCharacterJoiner(e)},t=s([o(3,f.IOptionsService),o(4,_.ICharSizeService)],t)}(l.Disposable);t.RenderService=d},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(1),n=i(10),s=i(31);t.DEFAULT_BELL_SOUND="data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4LjMyLjEwNAAAAAAAAAAAAAAA//tQxAADB8AhSmxhIIEVCSiJrDCQBTcu3UrAIwUdkRgQbFAZC1CQEwTJ9mjRvBA4UOLD8nKVOWfh+UlK3z/177OXrfOdKl7pyn3Xf//WreyTRUoAWgBgkOAGbZHBgG1OF6zM82DWbZaUmMBptgQhGjsyYqc9ae9XFz280948NMBWInljyzsNRFLPWdnZGWrddDsjK1unuSrVN9jJsK8KuQtQCtMBjCEtImISdNKJOopIpBFpNSMbIHCSRpRR5iakjTiyzLhchUUBwCgyKiweBv/7UsQbg8isVNoMPMjAAAA0gAAABEVFGmgqK////9bP/6XCykxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",t.DEFAULT_OPTIONS=Object.freeze({cols:80,rows:24,cursorBlink:!1,cursorStyle:"block",bellSound:t.DEFAULT_BELL_SOUND,bellStyle:"none",drawBoldTextInBrightColors:!0,fastScrollModifier:"alt",fastScrollSensitivity:5,fontFamily:"courier-new, courier, monospace",fontSize:15,fontWeight:"normal",fontWeightBold:"bold",lineHeight:1,letterSpacing:0,logLevel:"info",scrollback:1e3,scrollSensitivity:1,screenReaderMode:!1,macOptionIsMeta:!1,macOptionClickForcesSelection:!1,disableStdin:!1,allowTransparency:!1,tabStopWidth:8,theme:{},rightClickSelectsWord:n.isMac,rendererType:"canvas",windowsMode:!1,convertEol:!1,termName:"xterm",screenKeys:!1,cancelEvents:!1,useFlowControl:!1,wordSeparator:" ()[]{}',:;\""});var o=["cols","rows"],a=function(){function e(e){var i=this;this._onOptionChange=new r.EventEmitter,this.options=s.clone(t.DEFAULT_OPTIONS),Object.keys(e).forEach(function(t){if(t in i.options){var r=e[t];i.options[t]=r}})}return Object.defineProperty(e.prototype,"onOptionChange",{get:function(){return this._onOptionChange.event},enumerable:!0,configurable:!0}),e.prototype.setOption=function(e,i){if(!(e in t.DEFAULT_OPTIONS))throw new Error('No option with key "'+e+'"');if(-1!==o.indexOf(e))throw new Error('Option "'+e+'" can only be set in the constructor');this.options[e]!==i&&(i=this._sanitizeAndValidateOption(e,i),this.options[e]!==i&&(this.options[e]=i,this._onOptionChange.fire(e)))},e.prototype._sanitizeAndValidateOption=function(e,i){switch(e){case"bellStyle":case"cursorStyle":case"fontWeight":case"fontWeightBold":case"rendererType":case"wordSeparator":i||(i=t.DEFAULT_OPTIONS[e]);break;case"lineHeight":case"tabStopWidth":if(i<1)throw new Error(e+" cannot be less than 1, value: "+i);break;case"scrollback":if((i=Math.min(i,4294967295))<0)throw new Error(e+" cannot be less than 0, value: "+i);break;case"fastScrollSensitivity":case"scrollSensitivity":if(i<=0)throw new Error(e+" cannot be less than or equal to 0, value: "+i)}return i},e.prototype.getOption=function(e){if(!(e in t.DEFAULT_OPTIONS))throw new Error('No option with key "'+e+'"');return this.options[e]},e}();t.OptionsService=a},function(e,t,i){"use strict";var r=this&&this.__decorate||function(e,t,i,r){var n,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(o=(s<3?n(o):s>3?n(t,i,o):n(t,i))||o);return s>3&&o&&Object.defineProperty(t,i,o),o},n=this&&this.__param||function(e,t){return function(i,r){t(i,r,e)}};Object.defineProperty(t,"__esModule",{value:!0});var s=i(0),o=i(1),a=function(){function e(e,t,i){this.document=e,this.parentElement=t,this._optionsService=i,this.width=0,this.height=0,this._onCharSizeChange=new o.EventEmitter,this._measureStrategy=new c(e,t,this._optionsService)}return Object.defineProperty(e.prototype,"hasValidSize",{get:function(){return this.width>0&&this.height>0},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onCharSizeChange",{get:function(){return this._onCharSizeChange.event},enumerable:!0,configurable:!0}),e.prototype.measure=function(){var e=this._measureStrategy.measure();e.width===this.width&&e.height===this.height||(this.width=e.width,this.height=e.height,this._onCharSizeChange.fire())},e=r([n(2,s.IOptionsService)],e)}();t.CharSizeService=a;var c=function(){function e(e,t,i){this._document=e,this._parentElement=t,this._optionsService=i,this._result={width:0,height:0},this._measureElement=this._document.createElement("span"),this._measureElement.classList.add("xterm-char-measure-element"),this._measureElement.textContent="W",this._measureElement.setAttribute("aria-hidden","true"),this._parentElement.appendChild(this._measureElement)}return e.prototype.measure=function(){this._measureElement.style.fontFamily=this._optionsService.options.fontFamily,this._measureElement.style.fontSize=this._optionsService.options.fontSize+"px";var e=this._measureElement.getBoundingClientRect();return 0!==e.width&&0!==e.height&&(this._result.width=e.width,this._result.height=Math.ceil(e.height)),this._result},e}()},function(e,t,i){"use strict";var r=this&&this.__decorate||function(e,t,i,r){var n,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(o=(s<3?n(o):s>3?n(t,i,o):n(t,i))||o);return s>3&&o&&Object.defineProperty(t,i,o),o},n=this&&this.__param||function(e,t){return function(i,r){t(i,r,e)}};Object.defineProperty(t,"__esModule",{value:!0});var s=i(0),o=i(63);t.MINIMUM_COLS=2,t.MINIMUM_ROWS=1;var a=function(){function e(e){this._optionsService=e,this.cols=Math.max(e.options.cols,t.MINIMUM_COLS),this.rows=Math.max(e.options.rows,t.MINIMUM_ROWS),this.buffers=new o.BufferSet(e,this)}return Object.defineProperty(e.prototype,"buffer",{get:function(){return this.buffers.active},enumerable:!0,configurable:!0}),e.prototype.resize=function(e,t){this.cols=e,this.rows=t},e.prototype.reset=function(){this.buffers=new o.BufferSet(this._optionsService,this)},e=r([n(0,s.IOptionsService)],e)}();t.BufferService=a},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(64),n=i(1),s=function(){function e(e,t){this.optionsService=e,this.bufferService=t,this._onBufferActivate=new n.EventEmitter,this._normal=new r.Buffer(!0,e,t),this._normal.fillViewportRows(),this._alt=new r.Buffer(!1,e,t),this._activeBuffer=this._normal,this.setupTabStops()}return Object.defineProperty(e.prototype,"onBufferActivate",{get:function(){return this._onBufferActivate.event},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"alt",{get:function(){return this._alt},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"active",{get:function(){return this._activeBuffer},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"normal",{get:function(){return this._normal},enumerable:!0,configurable:!0}),e.prototype.activateNormalBuffer=function(){this._activeBuffer!==this._normal&&(this._normal.x=this._alt.x,this._normal.y=this._alt.y,this._alt.clear(),this._activeBuffer=this._normal,this._onBufferActivate.fire({activeBuffer:this._normal,inactiveBuffer:this._alt}))},e.prototype.activateAltBuffer=function(e){this._activeBuffer!==this._alt&&(this._alt.fillViewportRows(e),this._alt.x=this._normal.x,this._alt.y=this._normal.y,this._activeBuffer=this._alt,this._onBufferActivate.fire({activeBuffer:this._alt,inactiveBuffer:this._normal}))},e.prototype.resize=function(e,t){this._normal.resize(e,t),this._alt.resize(e,t)},e.prototype.setupTabStops=function(e){this._normal.setupTabStops(e),this._alt.setupTabStops(e)},e}();t.BufferSet=s},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(65),n=i(15),s=i(4),o=i(3),a=i(66),c=i(67),l=i(17);t.MAX_BUFFER_SIZE=4294967295;var h=function(){function e(e,t,i){this._hasScrollback=e,this._optionsService=t,this._bufferService=i,this.ydisp=0,this.ybase=0,this.y=0,this.x=0,this.savedY=0,this.savedX=0,this.savedCurAttrData=n.DEFAULT_ATTR_DATA.clone(),this.savedCharset=l.DEFAULT_CHARSET,this.markers=[],this._nullCell=s.CellData.fromCharData([0,o.NULL_CELL_CHAR,o.NULL_CELL_WIDTH,o.NULL_CELL_CODE]),this._whitespaceCell=s.CellData.fromCharData([0,o.WHITESPACE_CELL_CHAR,o.WHITESPACE_CELL_WIDTH,o.WHITESPACE_CELL_CODE]),this._cols=this._bufferService.cols,this._rows=this._bufferService.rows,this.lines=new r.CircularList(this._getCorrectBufferLength(this._rows)),this.scrollTop=0,this.scrollBottom=this._rows-1,this.setupTabStops()}return e.prototype.getNullCell=function(e){return e?(this._nullCell.fg=e.fg,this._nullCell.bg=e.bg):(this._nullCell.fg=0,this._nullCell.bg=0),this._nullCell},e.prototype.getWhitespaceCell=function(e){return e?(this._whitespaceCell.fg=e.fg,this._whitespaceCell.bg=e.bg):(this._whitespaceCell.fg=0,this._whitespaceCell.bg=0),this._whitespaceCell},e.prototype.getBlankLine=function(e,t){return new n.BufferLine(this._bufferService.cols,this.getNullCell(e),t)},Object.defineProperty(e.prototype,"hasScrollback",{get:function(){return this._hasScrollback&&this.lines.maxLength>this._rows},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isCursorInViewport",{get:function(){var e=this.ybase+this.y-this.ydisp;return e>=0&&e<this._rows},enumerable:!0,configurable:!0}),e.prototype._getCorrectBufferLength=function(e){if(!this._hasScrollback)return e;var i=e+this._optionsService.options.scrollback;return i>t.MAX_BUFFER_SIZE?t.MAX_BUFFER_SIZE:i},e.prototype.fillViewportRows=function(e){if(0===this.lines.length){void 0===e&&(e=n.DEFAULT_ATTR_DATA);for(var t=this._rows;t--;)this.lines.push(this.getBlankLine(e))}},e.prototype.clear=function(){this.ydisp=0,this.ybase=0,this.y=0,this.x=0,this.lines=new r.CircularList(this._getCorrectBufferLength(this._rows)),this.scrollTop=0,this.scrollBottom=this._rows-1,this.setupTabStops()},e.prototype.resize=function(e,t){var i=this.getNullCell(n.DEFAULT_ATTR_DATA),r=this._getCorrectBufferLength(t);if(r>this.lines.maxLength&&(this.lines.maxLength=r),this.lines.length>0){if(this._cols<e)for(var s=0;s<this.lines.length;s++)this.lines.get(s).resize(e,i);var o=0;if(this._rows<t)for(var a=this._rows;a<t;a++)this.lines.length<t+this.ybase&&(this._optionsService.options.windowsMode?this.lines.push(new n.BufferLine(e,i)):this.ybase>0&&this.lines.length<=this.ybase+this.y+o+1?(this.ybase--,o++,this.ydisp>0&&this.ydisp--):this.lines.push(new n.BufferLine(e,i)));else for(a=this._rows;a>t;a--)this.lines.length>t+this.ybase&&(this.lines.length>this.ybase+this.y+1?this.lines.pop():(this.ybase++,this.ydisp++));if(r<this.lines.maxLength){var c=this.lines.length-r;c>0&&(this.lines.trimStart(c),this.ybase=Math.max(this.ybase-c,0),this.ydisp=Math.max(this.ydisp-c,0),this.savedY=Math.max(this.savedY-c,0)),this.lines.maxLength=r}this.x=Math.min(this.x,e-1),this.y=Math.min(this.y,t-1),o&&(this.y+=o),this.savedX=Math.min(this.savedX,e-1),this.scrollTop=0}if(this.scrollBottom=t-1,this._isReflowEnabled&&(this._reflow(e,t),this._cols>e))for(s=0;s<this.lines.length;s++)this.lines.get(s).resize(e,i);this._cols=e,this._rows=t},Object.defineProperty(e.prototype,"_isReflowEnabled",{get:function(){return this._hasScrollback&&!this._optionsService.options.windowsMode},enumerable:!0,configurable:!0}),e.prototype._reflow=function(e,t){this._cols!==e&&(e>this._cols?this._reflowLarger(e,t):this._reflowSmaller(e,t))},e.prototype._reflowLarger=function(e,t){var i=a.reflowLargerGetLinesToRemove(this.lines,this._cols,e,this.ybase+this.y,this.getNullCell(n.DEFAULT_ATTR_DATA));if(i.length>0){var r=a.reflowLargerCreateNewLayout(this.lines,i);a.reflowLargerApplyNewLayout(this.lines,r.layout),this._reflowLargerAdjustViewport(e,t,r.countRemoved)}},e.prototype._reflowLargerAdjustViewport=function(e,t,i){for(var r=this.getNullCell(n.DEFAULT_ATTR_DATA),s=i;s-- >0;)0===this.ybase?(this.y>0&&this.y--,this.lines.length<t&&this.lines.push(new n.BufferLine(e,r))):(this.ydisp===this.ybase&&this.ydisp--,this.ybase--);this.savedY=Math.max(this.savedY-i,0)},e.prototype._reflowSmaller=function(e,t){for(var i=this.getNullCell(n.DEFAULT_ATTR_DATA),r=[],s=0,o=this.lines.length-1;o>=0;o--){var c=this.lines.get(o);if(!(!c||!c.isWrapped&&c.getTrimmedLength()<=e)){for(var l=[c];c.isWrapped&&o>0;)c=this.lines.get(--o),l.unshift(c);var h=this.ybase+this.y;if(!(h>=o&&h<o+l.length)){var u=l[l.length-1].getTrimmedLength(),f=a.reflowSmallerGetNewLineLengths(l,this._cols,e),_=f.length-l.length,d=void 0;d=0===this.ybase&&this.y!==this.lines.length-1?Math.max(0,this.y-this.lines.maxLength+_):Math.max(0,this.lines.length-this.lines.maxLength+_);for(var p=[],v=0;v<_;v++){var g=this.getBlankLine(n.DEFAULT_ATTR_DATA,!0);p.push(g)}p.length>0&&(r.push({start:o+l.length+s,newLines:p}),s+=p.length),l.push.apply(l,p);var y=f.length-1,m=f[y];0===m&&(m=f[--y]);for(var b=l.length-_-1,C=u;b>=0;){var S=Math.min(C,m);if(l[y].copyCellsFrom(l[b],C-S,m-S,S,!0),0===(m-=S)&&(m=f[--y]),0===(C-=S)){b--;var w=Math.max(b,0);C=a.getWrappedLineTrimmedLength(l,w,this._cols)}}for(v=0;v<l.length;v++)f[v]<e&&l[v].setCell(f[v],i);for(var E=_-d;E-- >0;)0===this.ybase?this.y<t-1?(this.y++,this.lines.pop()):(this.ybase++,this.ydisp++):this.ybase<Math.min(this.lines.maxLength,this.lines.length+s)-t&&(this.ybase===this.ydisp&&this.ydisp++,this.ybase++);this.savedY=Math.min(this.savedY+_,this.ybase+t-1)}}}if(r.length>0){var L=[],A=[];for(v=0;v<this.lines.length;v++)A.push(this.lines.get(v));var x=this.lines.length,k=x-1,D=0,T=r[D];this.lines.length=Math.min(this.lines.maxLength,this.lines.length+s);var R=0;for(v=Math.min(this.lines.maxLength-1,x+s-1);v>=0;v--)if(T&&T.start>k+R){for(var M=T.newLines.length-1;M>=0;M--)this.lines.set(v--,T.newLines[M]);v++,L.push({index:k+1,amount:T.newLines.length}),R+=T.newLines.length,T=r[++D]}else this.lines.set(v,A[k--]);var O=0;for(v=L.length-1;v>=0;v--)L[v].index+=O,this.lines.onInsertEmitter.fire(L[v]),O+=L[v].amount;var P=Math.max(0,x+s-this.lines.maxLength);P>0&&this.lines.onTrimEmitter.fire(P)}},e.prototype.stringIndexToBufferIndex=function(e,t,i){for(void 0===i&&(i=!1);t;){var r=this.lines.get(e);if(!r)return[-1,-1];for(var n=i?r.getTrimmedLength():r.length,s=0;s<n;++s)if(r.get(s)[o.CHAR_DATA_WIDTH_INDEX]&&(t-=r.get(s)[o.CHAR_DATA_CHAR_INDEX].length||1),t<0)return[e,s];e++}return[e,0]},e.prototype.translateBufferLineToString=function(e,t,i,r){void 0===i&&(i=0);var n=this.lines.get(e);return n?n.translateToString(t,i,r):""},e.prototype.getWrappedRangeForLine=function(e){for(var t=e,i=e;t>0&&this.lines.get(t).isWrapped;)t--;for(;i+1<this.lines.length&&this.lines.get(i+1).isWrapped;)i++;return{first:t,last:i}},e.prototype.setupTabStops=function(e){for(null!=e?this.tabs[e]||(e=this.prevStop(e)):(this.tabs={},e=0);e<this._cols;e+=this._optionsService.options.tabStopWidth)this.tabs[e]=!0},e.prototype.prevStop=function(e){for(null==e&&(e=this.x);!this.tabs[--e]&&e>0;);return e>=this._cols?this._cols-1:e<0?0:e},e.prototype.nextStop=function(e){for(null==e&&(e=this.x);!this.tabs[++e]&&e<this._cols;);return e>=this._cols?this._cols-1:e<0?0:e},e.prototype.addMarker=function(e){var t=this,i=new c.Marker(e);return this.markers.push(i),i.register(this.lines.onTrim(function(e){i.line-=e,i.line<0&&i.dispose()})),i.register(this.lines.onInsert(function(e){i.line>=e.index&&(i.line+=e.amount)})),i.register(this.lines.onDelete(function(e){i.line>=e.index&&i.line<e.index+e.amount&&i.dispose(),i.line>e.index&&(i.line-=e.amount)})),i.register(i.onDispose(function(){return t._removeMarker(i)})),i},e.prototype._removeMarker=function(e){this.markers.splice(this.markers.indexOf(e),1)},e.prototype.iterator=function(e,t,i,r,n){return new u(this,e,t,i,r,n)},e}();t.Buffer=h;var u=function(){function e(e,t,i,r,n,s){void 0===i&&(i=0),void 0===r&&(r=e.lines.length),void 0===n&&(n=0),void 0===s&&(s=0),this._buffer=e,this._trimRight=t,this._startIndex=i,this._endIndex=r,this._startOverscan=n,this._endOverscan=s,this._startIndex<0&&(this._startIndex=0),this._endIndex>this._buffer.lines.length&&(this._endIndex=this._buffer.lines.length),this._current=this._startIndex}return e.prototype.hasNext=function(){return this._current<this._endIndex},e.prototype.next=function(){var e=this._buffer.getWrappedRangeForLine(this._current);e.first<this._startIndex-this._startOverscan&&(e.first=this._startIndex-this._startOverscan),e.last>this._endIndex+this._endOverscan&&(e.last=this._endIndex+this._endOverscan),e.first=Math.max(e.first,0),e.last=Math.min(e.last,this._buffer.lines.length);for(var t="",i=e.first;i<=e.last;++i)t+=this._buffer.translateBufferLineToString(i,this._trimRight);return this._current=e.last+1,{range:e,content:t}},e}();t.BufferStringIterator=u},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(1),n=function(){function e(e){this._maxLength=e,this.onDeleteEmitter=new r.EventEmitter,this.onInsertEmitter=new r.EventEmitter,this.onTrimEmitter=new r.EventEmitter,this._array=new Array(this._maxLength),this._startIndex=0,this._length=0}return Object.defineProperty(e.prototype,"onDelete",{get:function(){return this.onDeleteEmitter.event},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onInsert",{get:function(){return this.onInsertEmitter.event},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onTrim",{get:function(){return this.onTrimEmitter.event},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"maxLength",{get:function(){return this._maxLength},set:function(e){if(this._maxLength!==e){for(var t=new Array(e),i=0;i<Math.min(e,this.length);i++)t[i]=this._array[this._getCyclicIndex(i)];this._array=t,this._maxLength=e,this._startIndex=0}},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"length",{get:function(){return this._length},set:function(e){if(e>this._length)for(var t=this._length;t<e;t++)this._array[t]=void 0;this._length=e},enumerable:!0,configurable:!0}),e.prototype.get=function(e){return this._array[this._getCyclicIndex(e)]},e.prototype.set=function(e,t){this._array[this._getCyclicIndex(e)]=t},e.prototype.push=function(e){this._array[this._getCyclicIndex(this._length)]=e,this._length===this._maxLength?(this._startIndex=++this._startIndex%this._maxLength,this.onTrimEmitter.fire(1)):this._length++},e.prototype.recycle=function(){if(this._length!==this._maxLength)throw new Error("Can only recycle when the buffer is full");return this._startIndex=++this._startIndex%this._maxLength,this.onTrimEmitter.fire(1),this._array[this._getCyclicIndex(this._length-1)]},Object.defineProperty(e.prototype,"isFull",{get:function(){return this._length===this._maxLength},enumerable:!0,configurable:!0}),e.prototype.pop=function(){return this._array[this._getCyclicIndex(this._length---1)]},e.prototype.splice=function(e,t){for(var i=[],r=2;r<arguments.length;r++)i[r-2]=arguments[r];if(t){for(var n=e;n<this._length-t;n++)this._array[this._getCyclicIndex(n)]=this._array[this._getCyclicIndex(n+t)];this._length-=t}for(n=this._length-1;n>=e;n--)this._array[this._getCyclicIndex(n+i.length)]=this._array[this._getCyclicIndex(n)];for(n=0;n<i.length;n++)this._array[this._getCyclicIndex(e+n)]=i[n];if(this._length+i.length>this._maxLength){var s=this._length+i.length-this._maxLength;this._startIndex+=s,this._length=this._maxLength,this.onTrimEmitter.fire(s)}else this._length+=i.length},e.prototype.trimStart=function(e){e>this._length&&(e=this._length),this._startIndex+=e,this._length-=e,this.onTrimEmitter.fire(e)},e.prototype.shiftElements=function(e,t,i){if(!(t<=0)){if(e<0||e>=this._length)throw new Error("start argument out of range");if(e+i<0)throw new Error("Cannot shift elements in list beyond index 0");if(i>0){for(var r=t-1;r>=0;r--)this.set(e+r+i,this.get(e+r));var n=e+t+i-this._length;if(n>0)for(this._length+=n;this._length>this._maxLength;)this._length--,this._startIndex++,this.onTrimEmitter.fire(1)}else for(r=0;r<t;r++)this.set(e+r+i,this.get(e+r))}},e.prototype._getCyclicIndex=function(e){return(this._startIndex+e)%this._maxLength},e}();t.CircularList=n},function(e,t,i){"use strict";function r(e,t,i){if(t===e.length-1)return e[t].getTrimmedLength();var r=!e[t].hasContent(i-1)&&1===e[t].getWidth(i-1),n=2===e[t+1].getWidth(0);return r&&n?i-1:i}Object.defineProperty(t,"__esModule",{value:!0}),t.reflowLargerGetLinesToRemove=function(e,t,i,n,s){for(var o=[],a=0;a<e.length-1;a++){var c=a,l=e.get(++c);if(l.isWrapped){for(var h=[e.get(a)];c<e.length&&l.isWrapped;)h.push(l),l=e.get(++c);if(n>=a&&n<c)a+=h.length-1;else{for(var u=0,f=r(h,u,t),_=1,d=0;_<h.length;){var p=r(h,_,t),v=p-d,g=i-f,y=Math.min(v,g);h[u].copyCellsFrom(h[_],d,f,y,!1),(f+=y)===i&&(u++,f=0),(d+=y)===p&&(_++,d=0),0===f&&0!==u&&2===h[u-1].getWidth(i-1)&&(h[u].copyCellsFrom(h[u-1],i-1,f++,1,!1),h[u-1].setCell(i-1,s))}h[u].replaceCells(f,i,s);for(var m=0,b=h.length-1;b>0&&(b>u||0===h[b].getTrimmedLength());b--)m++;m>0&&(o.push(a+h.length-m),o.push(m)),a+=h.length-1}}}return o},t.reflowLargerCreateNewLayout=function(e,t){for(var i=[],r=0,n=t[r],s=0,o=0;o<e.length;o++)if(n===o){var a=t[++r];e.onDeleteEmitter.fire({index:o-s,amount:a}),o+=a-1,s+=a,n=t[++r]}else i.push(o);return{layout:i,countRemoved:s}},t.reflowLargerApplyNewLayout=function(e,t){for(var i=[],r=0;r<t.length;r++)i.push(e.get(t[r]));for(r=0;r<i.length;r++)e.set(r,i[r]);e.length=t.length},t.reflowSmallerGetNewLineLengths=function(e,t,i){for(var n=[],s=e.map(function(i,n){return r(e,n,t)}).reduce(function(e,t){return e+t}),o=0,a=0,c=0;c<s;){if(s-c<i){n.push(s-c);break}o+=i;var l=r(e,a,t);o>l&&(o-=l,a++);var h=2===e[a].getWidth(o-1);h&&o--;var u=h?i-1:i;n.push(u),c+=u}return n},t.getWrappedLineTrimmedLength=r},function(e,t,i){"use strict";var r,n=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(e,t)},function(e,t){function i(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)});Object.defineProperty(t,"__esModule",{value:!0});var s=i(1),o=function(e){function t(i){var r=e.call(this)||this;return r.line=i,r._id=t._nextId++,r.isDisposed=!1,r._onDispose=new s.EventEmitter,r}return n(t,e),Object.defineProperty(t.prototype,"id",{get:function(){return this._id},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"onDispose",{get:function(){return this._onDispose.event},enumerable:!0,configurable:!0}),t.prototype.dispose=function(){this.isDisposed||(this.isDisposed=!0,this.line=-1,this._onDispose.fire())},t._nextId=1,t}(i(2).Disposable);t.Marker=o},function(e,t,i){"use strict";var r=this&&this.__decorate||function(e,t,i,r){var n,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(o=(s<3?n(o):s>3?n(t,i,o):n(t,i))||o);return s>3&&o&&Object.defineProperty(t,i,o),o},n=this&&this.__param||function(e,t){return function(i,r){t(i,r,e)}};Object.defineProperty(t,"__esModule",{value:!0});var s=i(5),o=i(28),a=function(){function e(e,t){this._renderService=e,this._charSizeService=t}return e.prototype.getCoords=function(e,t,i,r,n){return o.getCoords(e,t,i,r,this._charSizeService.hasValidSize,this._renderService.dimensions.actualCellWidth,this._renderService.dimensions.actualCellHeight,n)},e.prototype.getRawByteCoords=function(e,t,i,r){var n=this.getCoords(e,t,i,r);return o.getRawByteCoords(n)},e=r([n(0,s.IRenderService),n(1,s.ICharSizeService)],e)}();t.MouseService=a},function(e,t,i){"use strict";var r=this&&this.__decorate||function(e,t,i,r){var n,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(o=(s<3?n(o):s>3?n(t,i,o):n(t,i))||o);return s>3&&o&&Object.defineProperty(t,i,o),o},n=this&&this.__param||function(e,t){return function(i,r){t(i,r,e)}};Object.defineProperty(t,"__esModule",{value:!0});var s=i(0),o=i(1),a=i(31),c=Object.freeze({applicationCursorKeys:!1}),l=function(){function e(e,t,i,r){this._scrollToBottom=e,this._bufferService=t,this._logService=i,this._optionsService=r,this._onData=new o.EventEmitter,this._onUserInput=new o.EventEmitter,this.decPrivateModes=a.clone(c)}return Object.defineProperty(e.prototype,"onData",{get:function(){return this._onData.event},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onUserInput",{get:function(){return this._onUserInput.event},enumerable:!0,configurable:!0}),e.prototype.reset=function(){this.decPrivateModes=a.clone(c)},e.prototype.triggerDataEvent=function(e,t){if(void 0===t&&(t=!1),!this._optionsService.options.disableStdin){var i=this._bufferService.buffer;i.ybase!==i.ydisp&&this._scrollToBottom(),t&&this._onUserInput.fire(),this._logService.debug('sending data "'+e+'"',function(){return e.split("").map(function(e){return e.charCodeAt(0)})}),this._onData.fire(e)}},e=r([n(1,s.IBufferService),n(2,s.ILogService),n(3,s.IOptionsService)],e)}();t.CoreService=l},function(e,t,i){"use strict";var r=this&&this.__decorate||function(e,t,i,r){var n,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(o=(s<3?n(o):s>3?n(t,i,o):n(t,i))||o);return s>3&&o&&Object.defineProperty(t,i,o),o},n=this&&this.__param||function(e,t){return function(i,r){t(i,r,e)}},s=this&&this.__spreadArrays||function(){for(var e=0,t=0,i=arguments.length;t<i;t++)e+=arguments[t].length;var r=Array(e),n=0;for(t=0;t<i;t++)for(var s=arguments[t],o=0,a=s.length;o<a;o++,n++)r[n]=s[o];return r};Object.defineProperty(t,"__esModule",{value:!0});var o,a=i(0);!function(e){e[e.DEBUG=0]="DEBUG",e[e.INFO=1]="INFO",e[e.WARN=2]="WARN",e[e.ERROR=3]="ERROR",e[e.OFF=4]="OFF"}(o=t.LogLevel||(t.LogLevel={}));var c={debug:o.DEBUG,info:o.INFO,warn:o.WARN,error:o.ERROR,off:o.OFF},l=function(){function e(e){var t=this;this._optionsService=e,this._updateLogLevel(),this._optionsService.onOptionChange(function(e){"logLevel"===e&&t._updateLogLevel()})}return e.prototype._updateLogLevel=function(){this._logLevel=c[this._optionsService.options.logLevel]},e.prototype._evalLazyOptionalParams=function(e){for(var t=0;t<e.length;t++)"function"==typeof e[t]&&(e[t]=e[t]())},e.prototype._log=function(e,t,i){this._evalLazyOptionalParams(i),e.call.apply(e,s([console,"xterm.js: "+t],i))},e.prototype.debug=function(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];this._logLevel<=o.DEBUG&&this._log(console.log,e,t)},e.prototype.info=function(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];this._logLevel<=o.INFO&&this._log(console.info,e,t)},e.prototype.warn=function(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];this._logLevel<=o.WARN&&this._log(console.warn,e,t)},e.prototype.error=function(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];this._logLevel<=o.ERROR&&this._log(console.error,e,t)},e=r([n(0,a.IOptionsService)],e)}();t.LogService=l},function(e,t,i){"use strict";var r=this&&this.__decorate||function(e,t,i,r){var n,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(o=(s<3?n(o):s>3?n(t,i,o):n(t,i))||o);return s>3&&o&&Object.defineProperty(t,i,o),o},n=this&&this.__param||function(e,t){return function(i,r){t(i,r,e)}};Object.defineProperty(t,"__esModule",{value:!0});var s=i(0),o=function(){function e(e){this._bufferService=e,this.clearRange()}return Object.defineProperty(e.prototype,"start",{get:function(){return this._start},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"end",{get:function(){return this._end},enumerable:!0,configurable:!0}),e.prototype.clearRange=function(){this._start=this._bufferService.buffer.y,this._end=this._bufferService.buffer.y},e.prototype.markDirty=function(e){e<this._start?this._start=e:e>this._end&&(this._end=e)},e.prototype.markRangeDirty=function(e,t){if(e>t){var i=e;e=t,t=i}e<this._start&&(this._start=e),t>this._end&&(this._end=t)},e.prototype.markAllDirty=function(){this.markRangeDirty(0,this._bufferService.rows-1)},e=r([n(0,s.IBufferService)],e)}();t.DirtyRowService=o},function(e,t,i){"use strict";var r=this&&this.__spreadArrays||function(){for(var e=0,t=0,i=arguments.length;t<i;t++)e+=arguments[t].length;var r=Array(e),n=0;for(t=0;t<i;t++)for(var s=arguments[t],o=0,a=s.length;o<a;o++,n++)r[n]=s[o];return r};Object.defineProperty(t,"__esModule",{value:!0});var n=i(0),s=i(13),o=function(){function e(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._entries=new Map;for(var i=0,r=e;i<r.length;i++){var n=r[i],s=n[0],o=n[1];this.set(s,o)}}return e.prototype.set=function(e,t){var i=this._entries.get(e);return this._entries.set(e,t),i},e.prototype.forEach=function(e){this._entries.forEach(function(t,i){return e(i,t)})},e.prototype.has=function(e){return this._entries.has(e)},e.prototype.get=function(e){return this._entries.get(e)},e}();t.ServiceCollection=o;var a=function(){function e(){this._services=new o,this._services.set(n.IInstantiationService,this)}return e.prototype.setService=function(e,t){this._services.set(e,t)},e.prototype.createInstance=function(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];for(var n=s.getServiceDependencies(e).sort(function(e,t){return e.index-t.index}),o=[],a=0,c=n;a<c.length;a++){var l=c[a],h=this._services.get(l.id);if(!h)throw new Error("[createInstance] "+e.name+" depends on UNKNOWN service "+l.id+".");o.push(h)}var u=n.length>0?n[0].index:t.length;if(t.length!==u)throw new Error("[createInstance] First service dependency of "+e.name+" at position "+(u+1)+" conflicts with "+t.length+" static arguments");return new(e.bind.apply(e,r([void 0],r(t,o))))},e}();t.InstantiationService=a},function(e,t,i){"use strict";var r=this&&this.__decorate||function(e,t,i,r){var n,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(o=(s<3?n(o):s>3?n(t,i,o):n(t,i))||o);return s>3&&o&&Object.defineProperty(t,i,o),o},n=this&&this.__param||function(e,t){return function(i,r){t(i,r,e)}};Object.defineProperty(t,"__esModule",{value:!0});var s=i(0),o=i(1),a={NONE:{events:0,restrict:function(){return!1}},X10:{events:1,restrict:function(e){return 4!==e.button&&1===e.action&&(e.ctrl=!1,e.alt=!1,e.shift=!1,!0)}},VT200:{events:19,restrict:function(e){return 32!==e.action}},DRAG:{events:23,restrict:function(e){return 32!==e.action||3!==e.button}},ANY:{events:31,restrict:function(e){return!0}}};function c(e,t){var i=(e.ctrl?16:0)|(e.shift?4:0)|(e.alt?8:0);return 4===e.button?(i|=64,i|=e.action):(i|=3&e.button,4&e.button&&(i|=64),8&e.button&&(i|=128),32===e.action?i|=32:0!==e.action||t||(i|=3)),i}var l=String.fromCharCode,h={DEFAULT:function(e){var t=[c(e,!1)+32,e.col+32,e.row+32];return t=t.map(function(e){return e>127?127:e}),"[M"+l(t[0])+l(t[1])+l(t[2])},SGR:function(e){var t=0===e.action&&4!==e.button?"m":"M";return"[<"+c(e,!0)+";"+e.col+";"+e.row+t}},u=function(){function e(e,t){var i=this;this._bufferService=e,this._coreService=t,this._protocols={},this._encodings={},this._activeProtocol="",this._activeEncoding="",this._onProtocolChange=new o.EventEmitter,this._lastEvent=null,Object.keys(a).forEach(function(e){return i.addProtocol(e,a[e])}),Object.keys(h).forEach(function(e){return i.addEncoding(e,h[e])}),this.reset()}return e.prototype.addProtocol=function(e,t){this._protocols[e]=t},e.prototype.addEncoding=function(e,t){this._encodings[e]=t},Object.defineProperty(e.prototype,"activeProtocol",{get:function(){return this._activeProtocol},set:function(e){if(!this._protocols[e])throw new Error('unknown protocol "'+e+'"');this._activeProtocol=e,this._onProtocolChange.fire(this._protocols[e].events)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"activeEncoding",{get:function(){return this._activeEncoding},set:function(e){if(!this._encodings[e])throw new Error('unknown encoding "'+e+'"');this._activeEncoding=e},enumerable:!0,configurable:!0}),e.prototype.reset=function(){this.activeProtocol="NONE",this.activeEncoding="DEFAULT",this._lastEvent=null},Object.defineProperty(e.prototype,"onProtocolChange",{get:function(){return this._onProtocolChange.event},enumerable:!0,configurable:!0}),e.prototype.triggerMouseEvent=function(e){if(e.col<0||e.col>=this._bufferService.cols||e.row<0||e.row>=this._bufferService.rows)return!1;if(4===e.button&&32===e.action)return!1;if(3===e.button&&32!==e.action)return!1;if(4!==e.button&&(2===e.action||3===e.action))return!1;if(e.col++,e.row++,32===e.action&&this._lastEvent&&this._compareEvents(this._lastEvent,e))return!1;if(!this._protocols[this._activeProtocol].restrict(e))return!1;var t=this._encodings[this._activeEncoding](e);return this._coreService.triggerDataEvent(t,!0),this._lastEvent=e,!0},e.prototype.explainEvents=function(e){return{DOWN:!!(1&e),UP:!!(2&e),DRAG:!!(4&e),MOVE:!!(8&e),WHEEL:!!(16&e)}},e.prototype._compareEvents=function(e,t){return e.col===t.col&&(e.row===t.row&&(e.button===t.button&&(e.action===t.action&&(e.ctrl===t.ctrl&&(e.alt===t.alt&&e.shift===t.shift)))))},e=r([n(0,s.IBufferService),n(1,s.ICoreService)],e)}();t.CoreMouseService=u},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e){this._action=e,this._writeBuffer=[],this._callbacks=[],this._pendingData=0,this._bufferOffset=0}return e.prototype.writeSync=function(e){if(this._writeBuffer.length){for(var t=this._bufferOffset;t<this._writeBuffer.length;++t){var i=this._writeBuffer[t],r=this._callbacks[t];this._action(i),r&&r()}this._writeBuffer=[],this._callbacks=[],this._pendingData=0,this._bufferOffset=2147483647}this._action(e)},e.prototype.write=function(e,t){var i=this;if(this._pendingData>5e7)throw new Error("write data discarded, use flow control to avoid losing data");this._writeBuffer.length||(this._bufferOffset=0,setTimeout(function(){return i._innerWrite()})),this._pendingData+=e.length,this._writeBuffer.push(e),this._callbacks.push(t)},e.prototype._innerWrite=function(){for(var e=this,t=Date.now();this._writeBuffer.length>this._bufferOffset;){var i=this._writeBuffer[this._bufferOffset],r=this._callbacks[this._bufferOffset];if(this._bufferOffset++,this._action(i),this._pendingData-=i.length,r&&r(),Date.now()-t>=12)break}this._writeBuffer.length>this._bufferOffset?(this._bufferOffset>50&&(this._writeBuffer=this._writeBuffer.slice(this._bufferOffset),this._callbacks=this._callbacks.slice(this._bufferOffset),this._bufferOffset=0),setTimeout(function(){return e._innerWrite()},0)):(this._writeBuffer=[],this._callbacks=[],this._pendingData=0,this._bufferOffset=0)},e}();t.WriteBuffer=r},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){this._addons=[]}return e.prototype.dispose=function(){for(var e=this._addons.length-1;e>=0;e--)this._addons[e].instance.dispose()},e.prototype.loadAddon=function(e,t){var i=this,r={instance:t,dispose:t.dispose,isDisposed:!1};this._addons.push(r),t.dispose=function(){return i._wrappedAddonDispose(r)},t.activate(e)},e.prototype._wrappedAddonDispose=function(e){if(!e.isDisposed){for(var t=-1,i=0;i<this._addons.length;i++)if(this._addons[i]===e){t=i;break}if(-1===t)throw new Error("Could not dispose an addon that has not been loaded");e.isDisposed=!0,e.dispose.apply(e.instance),this._addons.splice(t,1)}},e}();t.AddonManager=r}])});

},{}],"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"node_modules/xterm/css/xterm.css":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/TerminalUI.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TerminalUI = void 0;

var _xterm = require("xterm");

require("xterm/css/xterm.css");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TerminalUI = /*#__PURE__*/function () {
  function TerminalUI(socket) {
    _classCallCheck(this, TerminalUI);

    this.terminal = new _xterm.Terminal();
    /* You can make your terminals colorful :) */

    this.terminal.setOption("theme", {
      background: "#202B33",
      foreground: "#F5F8FA"
    });
    this.socket = socket;
  }
  /**
   * Attach event listeners for terminal UI and socket.io client
   */


  _createClass(TerminalUI, [{
    key: "startListening",
    value: function startListening() {
      var _this = this;

      this.terminal.onData(function (data) {
        return _this.sendInput(data);
      });
      this.socket.on("output", function (data) {
        // When there is data from PTY on server, print that on Terminal.
        _this.write(data);
      });
    }
    /**
     * Print something to terminal UI.
     */

  }, {
    key: "write",
    value: function write(text) {
      this.terminal.write(text);
    }
    /**
     * Utility function to print new line on terminal.
     */

  }, {
    key: "prompt",
    value: function prompt() {
      this.terminal.write("\r\n$ ");
    }
    /**
     * Send whatever you type in Terminal UI to PTY process in server.
     * @param {*} input Input to send to server
     */

  }, {
    key: "sendInput",
    value: function sendInput(input) {
      this.socket.emit("input", input);
    }
    /**
     *
     * @param {HTMLElement} container HTMLElement where xterm can attach terminal ui instance.
     */

  }, {
    key: "attachTo",
    value: function attachTo(container) {
      this.terminal.open(container); // Default text to display on terminal.

      this.terminal.write("Terminal Connected");
      this.terminal.write("");
      this.prompt();
    }
  }, {
    key: "clear",
    value: function clear() {
      this.terminal.clear();
    }
  }]);

  return TerminalUI;
}();

exports.TerminalUI = TerminalUI;
},{"xterm":"node_modules/xterm/lib/xterm.js","xterm/css/xterm.css":"node_modules/xterm/css/xterm.css"}],"node_modules/parseuri/index.js":[function(require,module,exports) {
/**
 * Parses an URI
 *
 * @author Steven Levithan <stevenlevithan.com> (MIT license)
 * @api private
 */

var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;

var parts = [
    'source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'
];

module.exports = function parseuri(str) {
    var src = str,
        b = str.indexOf('['),
        e = str.indexOf(']');

    if (b != -1 && e != -1) {
        str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
    }

    var m = re.exec(str || ''),
        uri = {},
        i = 14;

    while (i--) {
        uri[parts[i]] = m[i] || '';
    }

    if (b != -1 && e != -1) {
        uri.source = src;
        uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
        uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
        uri.ipv6uri = true;
    }

    return uri;
};

},{}],"node_modules/ms/index.js":[function(require,module,exports) {
/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function (val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}

},{}],"node_modules/debug/src/common.js":[function(require,module,exports) {

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */

function setup(env) {
	createDebug.debug = createDebug;
	createDebug.default = createDebug;
	createDebug.coerce = coerce;
	createDebug.disable = disable;
	createDebug.enable = enable;
	createDebug.enabled = enabled;
	createDebug.humanize = require('ms');

	Object.keys(env).forEach(key => {
		createDebug[key] = env[key];
	});

	/**
	* Active `debug` instances.
	*/
	createDebug.instances = [];

	/**
	* The currently active debug mode names, and names to skip.
	*/

	createDebug.names = [];
	createDebug.skips = [];

	/**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/
	createDebug.formatters = {};

	/**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/
	function selectColor(namespace) {
		let hash = 0;

		for (let i = 0; i < namespace.length; i++) {
			hash = ((hash << 5) - hash) + namespace.charCodeAt(i);
			hash |= 0; // Convert to 32bit integer
		}

		return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
	}
	createDebug.selectColor = selectColor;

	/**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/
	function createDebug(namespace) {
		let prevTime;

		function debug(...args) {
			// Disabled?
			if (!debug.enabled) {
				return;
			}

			const self = debug;

			// Set `diff` timestamp
			const curr = Number(new Date());
			const ms = curr - (prevTime || curr);
			self.diff = ms;
			self.prev = prevTime;
			self.curr = curr;
			prevTime = curr;

			args[0] = createDebug.coerce(args[0]);

			if (typeof args[0] !== 'string') {
				// Anything else let's inspect with %O
				args.unshift('%O');
			}

			// Apply any `formatters` transformations
			let index = 0;
			args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
				// If we encounter an escaped % then don't increase the array index
				if (match === '%%') {
					return match;
				}
				index++;
				const formatter = createDebug.formatters[format];
				if (typeof formatter === 'function') {
					const val = args[index];
					match = formatter.call(self, val);

					// Now we need to remove `args[index]` since it's inlined in the `format`
					args.splice(index, 1);
					index--;
				}
				return match;
			});

			// Apply env-specific formatting (colors, etc.)
			createDebug.formatArgs.call(self, args);

			const logFn = self.log || createDebug.log;
			logFn.apply(self, args);
		}

		debug.namespace = namespace;
		debug.enabled = createDebug.enabled(namespace);
		debug.useColors = createDebug.useColors();
		debug.color = selectColor(namespace);
		debug.destroy = destroy;
		debug.extend = extend;
		// Debug.formatArgs = formatArgs;
		// debug.rawLog = rawLog;

		// env-specific initialization logic for debug instances
		if (typeof createDebug.init === 'function') {
			createDebug.init(debug);
		}

		createDebug.instances.push(debug);

		return debug;
	}

	function destroy() {
		const index = createDebug.instances.indexOf(this);
		if (index !== -1) {
			createDebug.instances.splice(index, 1);
			return true;
		}
		return false;
	}

	function extend(namespace, delimiter) {
		const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
		newDebug.log = this.log;
		return newDebug;
	}

	/**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/
	function enable(namespaces) {
		createDebug.save(namespaces);

		createDebug.names = [];
		createDebug.skips = [];

		let i;
		const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
		const len = split.length;

		for (i = 0; i < len; i++) {
			if (!split[i]) {
				// ignore empty strings
				continue;
			}

			namespaces = split[i].replace(/\*/g, '.*?');

			if (namespaces[0] === '-') {
				createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
			} else {
				createDebug.names.push(new RegExp('^' + namespaces + '$'));
			}
		}

		for (i = 0; i < createDebug.instances.length; i++) {
			const instance = createDebug.instances[i];
			instance.enabled = createDebug.enabled(instance.namespace);
		}
	}

	/**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/
	function disable() {
		const namespaces = [
			...createDebug.names.map(toNamespace),
			...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)
		].join(',');
		createDebug.enable('');
		return namespaces;
	}

	/**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/
	function enabled(name) {
		if (name[name.length - 1] === '*') {
			return true;
		}

		let i;
		let len;

		for (i = 0, len = createDebug.skips.length; i < len; i++) {
			if (createDebug.skips[i].test(name)) {
				return false;
			}
		}

		for (i = 0, len = createDebug.names.length; i < len; i++) {
			if (createDebug.names[i].test(name)) {
				return true;
			}
		}

		return false;
	}

	/**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/
	function toNamespace(regexp) {
		return regexp.toString()
			.substring(2, regexp.toString().length - 2)
			.replace(/\.\*\?$/, '*');
	}

	/**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/
	function coerce(val) {
		if (val instanceof Error) {
			return val.stack || val.message;
		}
		return val;
	}

	createDebug.enable(createDebug.load());

	return createDebug;
}

module.exports = setup;

},{"ms":"node_modules/ms/index.js"}],"node_modules/process/browser.js":[function(require,module,exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};
},{}],"node_modules/debug/src/browser.js":[function(require,module,exports) {
var process = require("process");
/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
/**
 * Colors.
 */

exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */
// eslint-disable-next-line complexity

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
    return true;
  } // Internet Explorer and Edge do not support colors.


  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  } // Is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632


  return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
  typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */


function formatArgs(args) {
  args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);

  if (!this.useColors) {
    return;
  }

  const c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit'); // The final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into

  let index = 0;
  let lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, match => {
    if (match === '%%') {
      return;
    }

    index++;

    if (match === '%c') {
      // We only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });
  args.splice(lastC, 0, c);
}
/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */


function log(...args) {
  // This hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return typeof console === 'object' && console.log && console.log(...args);
}
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */


function save(namespaces) {
  try {
    if (namespaces) {
      exports.storage.setItem('debug', namespaces);
    } else {
      exports.storage.removeItem('debug');
    }
  } catch (error) {// Swallow
    // XXX (@Qix-) should we be logging these?
  }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */


function load() {
  let r;

  try {
    r = exports.storage.getItem('debug');
  } catch (error) {// Swallow
    // XXX (@Qix-) should we be logging these?
  } // If debug isn't set in LS, and we're in Electron, try to load $DEBUG


  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = undefined;
  }

  return r;
}
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */


function localstorage() {
  try {
    // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
    // The Browser also has localStorage in the global context.
    return localStorage;
  } catch (error) {// Swallow
    // XXX (@Qix-) should we be logging these?
  }
}

module.exports = require('./common')(exports);
const {
  formatters
} = module.exports;
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
  try {
    return JSON.stringify(v);
  } catch (error) {
    return '[UnexpectedJSONParseError]: ' + error.message;
  }
};
},{"./common":"node_modules/debug/src/common.js","process":"node_modules/process/browser.js"}],"node_modules/socket.io-client/lib/url.js":[function(require,module,exports) {

/**
 * Module dependencies.
 */

var parseuri = require('parseuri');
var debug = require('debug')('socket.io-client:url');

/**
 * Module exports.
 */

module.exports = url;

/**
 * URL parser.
 *
 * @param {String} url
 * @param {Object} An object meant to mimic window.location.
 *                 Defaults to window.location.
 * @api public
 */

function url (uri, loc) {
  var obj = uri;

  // default to window.location
  loc = loc || (typeof location !== 'undefined' && location);
  if (null == uri) uri = loc.protocol + '//' + loc.host;

  // relative path support
  if ('string' === typeof uri) {
    if ('/' === uri.charAt(0)) {
      if ('/' === uri.charAt(1)) {
        uri = loc.protocol + uri;
      } else {
        uri = loc.host + uri;
      }
    }

    if (!/^(https?|wss?):\/\//.test(uri)) {
      debug('protocol-less url %s', uri);
      if ('undefined' !== typeof loc) {
        uri = loc.protocol + '//' + uri;
      } else {
        uri = 'https://' + uri;
      }
    }

    // parse
    debug('parse %s', uri);
    obj = parseuri(uri);
  }

  // make sure we treat `localhost:80` and `localhost` equally
  if (!obj.port) {
    if (/^(http|ws)$/.test(obj.protocol)) {
      obj.port = '80';
    } else if (/^(http|ws)s$/.test(obj.protocol)) {
      obj.port = '443';
    }
  }

  obj.path = obj.path || '/';

  var ipv6 = obj.host.indexOf(':') !== -1;
  var host = ipv6 ? '[' + obj.host + ']' : obj.host;

  // define unique id
  obj.id = obj.protocol + '://' + host + ':' + obj.port;
  // define href
  obj.href = obj.protocol + '://' + host + (loc && loc.port === obj.port ? '' : (':' + obj.port));

  return obj;
}

},{"parseuri":"node_modules/parseuri/index.js","debug":"node_modules/debug/src/browser.js"}],"node_modules/socket.io-parser/node_modules/ms/index.js":[function(require,module,exports) {
/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}

},{}],"node_modules/socket.io-parser/node_modules/debug/src/debug.js":[function(require,module,exports) {

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = require('ms');

/**
 * Active `debug` instances.
 */
exports.instances = [];

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  var prevTime;

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);
  debug.destroy = destroy;

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  exports.instances.push(debug);

  return debug;
}

function destroy () {
  var index = exports.instances.indexOf(this);
  if (index !== -1) {
    exports.instances.splice(index, 1);
    return true;
  } else {
    return false;
  }
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var i;
  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }

  for (i = 0; i < exports.instances.length; i++) {
    var instance = exports.instances[i];
    instance.enabled = exports.enabled(instance.namespace);
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  if (name[name.length - 1] === '*') {
    return true;
  }
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}

},{"ms":"node_modules/socket.io-parser/node_modules/ms/index.js"}],"node_modules/socket.io-parser/node_modules/debug/src/browser.js":[function(require,module,exports) {
var process = require("process");
/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */
exports = module.exports = require('./debug');
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome && 'undefined' != typeof chrome.storage ? chrome.storage.local : localstorage();
/**
 * Colors.
 */

exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  } // Internet Explorer and Edge do not support colors.


  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  } // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632


  return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // is firebug? http://stackoverflow.com/a/398120/376773
  typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || // is firefox >= v31?
  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // double check webkit in userAgent just in case we are in a worker
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */


exports.formatters.j = function (v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */


function formatArgs(args) {
  var useColors = this.useColors;
  args[0] = (useColors ? '%c' : '') + this.namespace + (useColors ? ' %c' : ' ') + args[0] + (useColors ? '%c ' : ' ') + '+' + exports.humanize(this.diff);
  if (!useColors) return;
  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit'); // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into

  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function (match) {
    if ('%%' === match) return;
    index++;

    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });
  args.splice(lastC, 0, c);
}
/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */


function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
}
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */


function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch (e) {}
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */


function load() {
  var r;

  try {
    r = exports.storage.debug;
  } catch (e) {} // If debug isn't set in LS, and we're in Electron, try to load $DEBUG


  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = undefined;
  }

  return r;
}
/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */


exports.enable(load());
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}
},{"./debug":"node_modules/socket.io-parser/node_modules/debug/src/debug.js","process":"node_modules/process/browser.js"}],"node_modules/socket.io-parser/node_modules/component-emitter/index.js":[function(require,module,exports) {

/**
 * Expose `Emitter`.
 */

if (typeof module !== 'undefined') {
  module.exports = Emitter;
}

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }

  // Remove event specific arrays for event types that no
  // one is subscribed for to avoid memory leak.
  if (callbacks.length === 0) {
    delete this._callbacks['$' + event];
  }

  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};

  var args = new Array(arguments.length - 1)
    , callbacks = this._callbacks['$' + event];

  for (var i = 1; i < arguments.length; i++) {
    args[i - 1] = arguments[i];
  }

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};

},{}],"node_modules/isarray/index.js":[function(require,module,exports) {
var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

},{}],"node_modules/base64-js/index.js":[function(require,module,exports) {
'use strict'

exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}

},{}],"node_modules/ieee754/index.js":[function(require,module,exports) {
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

},{}],"node_modules/buffer/node_modules/isarray/index.js":[function(require,module,exports) {
var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

},{}],"node_modules/buffer/index.js":[function(require,module,exports) {

var global = arguments[3];
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

'use strict'

var base64 = require('base64-js')
var ieee754 = require('ieee754')
var isArray = require('isarray')

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

},{"base64-js":"node_modules/base64-js/index.js","ieee754":"node_modules/ieee754/index.js","isarray":"node_modules/buffer/node_modules/isarray/index.js","buffer":"node_modules/buffer/index.js"}],"node_modules/socket.io-parser/is-buffer.js":[function(require,module,exports) {
var Buffer = require("buffer").Buffer;

module.exports = isBuf;

var withNativeBuffer = typeof Buffer === 'function' && typeof Buffer.isBuffer === 'function';
var withNativeArrayBuffer = typeof ArrayBuffer === 'function';

var isView = function (obj) {
  return typeof ArrayBuffer.isView === 'function' ? ArrayBuffer.isView(obj) : (obj.buffer instanceof ArrayBuffer);
};

/**
 * Returns true if obj is a buffer or an arraybuffer.
 *
 * @api private
 */

function isBuf(obj) {
  return (withNativeBuffer && Buffer.isBuffer(obj)) ||
          (withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj)));
}

},{"buffer":"node_modules/buffer/index.js"}],"node_modules/socket.io-parser/binary.js":[function(require,module,exports) {
/*global Blob,File*/

/**
 * Module requirements
 */

var isArray = require('isarray');
var isBuf = require('./is-buffer');
var toString = Object.prototype.toString;
var withNativeBlob = typeof Blob === 'function' || (typeof Blob !== 'undefined' && toString.call(Blob) === '[object BlobConstructor]');
var withNativeFile = typeof File === 'function' || (typeof File !== 'undefined' && toString.call(File) === '[object FileConstructor]');

/**
 * Replaces every Buffer | ArrayBuffer in packet with a numbered placeholder.
 * Anything with blobs or files should be fed through removeBlobs before coming
 * here.
 *
 * @param {Object} packet - socket.io event packet
 * @return {Object} with deconstructed packet and list of buffers
 * @api public
 */

exports.deconstructPacket = function(packet) {
  var buffers = [];
  var packetData = packet.data;
  var pack = packet;
  pack.data = _deconstructPacket(packetData, buffers);
  pack.attachments = buffers.length; // number of binary 'attachments'
  return {packet: pack, buffers: buffers};
};

function _deconstructPacket(data, buffers) {
  if (!data) return data;

  if (isBuf(data)) {
    var placeholder = { _placeholder: true, num: buffers.length };
    buffers.push(data);
    return placeholder;
  } else if (isArray(data)) {
    var newData = new Array(data.length);
    for (var i = 0; i < data.length; i++) {
      newData[i] = _deconstructPacket(data[i], buffers);
    }
    return newData;
  } else if (typeof data === 'object' && !(data instanceof Date)) {
    var newData = {};
    for (var key in data) {
      newData[key] = _deconstructPacket(data[key], buffers);
    }
    return newData;
  }
  return data;
}

/**
 * Reconstructs a binary packet from its placeholder packet and buffers
 *
 * @param {Object} packet - event packet with placeholders
 * @param {Array} buffers - binary buffers to put in placeholder positions
 * @return {Object} reconstructed packet
 * @api public
 */

exports.reconstructPacket = function(packet, buffers) {
  packet.data = _reconstructPacket(packet.data, buffers);
  packet.attachments = undefined; // no longer useful
  return packet;
};

function _reconstructPacket(data, buffers) {
  if (!data) return data;

  if (data && data._placeholder) {
    return buffers[data.num]; // appropriate buffer (should be natural order anyway)
  } else if (isArray(data)) {
    for (var i = 0; i < data.length; i++) {
      data[i] = _reconstructPacket(data[i], buffers);
    }
  } else if (typeof data === 'object') {
    for (var key in data) {
      data[key] = _reconstructPacket(data[key], buffers);
    }
  }

  return data;
}

/**
 * Asynchronously removes Blobs or Files from data via
 * FileReader's readAsArrayBuffer method. Used before encoding
 * data as msgpack. Calls callback with the blobless data.
 *
 * @param {Object} data
 * @param {Function} callback
 * @api private
 */

exports.removeBlobs = function(data, callback) {
  function _removeBlobs(obj, curKey, containingObject) {
    if (!obj) return obj;

    // convert any blob
    if ((withNativeBlob && obj instanceof Blob) ||
        (withNativeFile && obj instanceof File)) {
      pendingBlobs++;

      // async filereader
      var fileReader = new FileReader();
      fileReader.onload = function() { // this.result == arraybuffer
        if (containingObject) {
          containingObject[curKey] = this.result;
        }
        else {
          bloblessData = this.result;
        }

        // if nothing pending its callback time
        if(! --pendingBlobs) {
          callback(bloblessData);
        }
      };

      fileReader.readAsArrayBuffer(obj); // blob -> arraybuffer
    } else if (isArray(obj)) { // handle array
      for (var i = 0; i < obj.length; i++) {
        _removeBlobs(obj[i], i, obj);
      }
    } else if (typeof obj === 'object' && !isBuf(obj)) { // and object
      for (var key in obj) {
        _removeBlobs(obj[key], key, obj);
      }
    }
  }

  var pendingBlobs = 0;
  var bloblessData = data;
  _removeBlobs(bloblessData);
  if (!pendingBlobs) {
    callback(bloblessData);
  }
};

},{"isarray":"node_modules/isarray/index.js","./is-buffer":"node_modules/socket.io-parser/is-buffer.js"}],"node_modules/socket.io-parser/index.js":[function(require,module,exports) {

/**
 * Module dependencies.
 */

var debug = require('debug')('socket.io-parser');
var Emitter = require('component-emitter');
var binary = require('./binary');
var isArray = require('isarray');
var isBuf = require('./is-buffer');

/**
 * Protocol version.
 *
 * @api public
 */

exports.protocol = 4;

/**
 * Packet types.
 *
 * @api public
 */

exports.types = [
  'CONNECT',
  'DISCONNECT',
  'EVENT',
  'ACK',
  'ERROR',
  'BINARY_EVENT',
  'BINARY_ACK'
];

/**
 * Packet type `connect`.
 *
 * @api public
 */

exports.CONNECT = 0;

/**
 * Packet type `disconnect`.
 *
 * @api public
 */

exports.DISCONNECT = 1;

/**
 * Packet type `event`.
 *
 * @api public
 */

exports.EVENT = 2;

/**
 * Packet type `ack`.
 *
 * @api public
 */

exports.ACK = 3;

/**
 * Packet type `error`.
 *
 * @api public
 */

exports.ERROR = 4;

/**
 * Packet type 'binary event'
 *
 * @api public
 */

exports.BINARY_EVENT = 5;

/**
 * Packet type `binary ack`. For acks with binary arguments.
 *
 * @api public
 */

exports.BINARY_ACK = 6;

/**
 * Encoder constructor.
 *
 * @api public
 */

exports.Encoder = Encoder;

/**
 * Decoder constructor.
 *
 * @api public
 */

exports.Decoder = Decoder;

/**
 * A socket.io Encoder instance
 *
 * @api public
 */

function Encoder() {}

var ERROR_PACKET = exports.ERROR + '"encode error"';

/**
 * Encode a packet as a single string if non-binary, or as a
 * buffer sequence, depending on packet type.
 *
 * @param {Object} obj - packet object
 * @param {Function} callback - function to handle encodings (likely engine.write)
 * @return Calls callback with Array of encodings
 * @api public
 */

Encoder.prototype.encode = function(obj, callback){
  debug('encoding packet %j', obj);

  if (exports.BINARY_EVENT === obj.type || exports.BINARY_ACK === obj.type) {
    encodeAsBinary(obj, callback);
  } else {
    var encoding = encodeAsString(obj);
    callback([encoding]);
  }
};

/**
 * Encode packet as string.
 *
 * @param {Object} packet
 * @return {String} encoded
 * @api private
 */

function encodeAsString(obj) {

  // first is type
  var str = '' + obj.type;

  // attachments if we have them
  if (exports.BINARY_EVENT === obj.type || exports.BINARY_ACK === obj.type) {
    str += obj.attachments + '-';
  }

  // if we have a namespace other than `/`
  // we append it followed by a comma `,`
  if (obj.nsp && '/' !== obj.nsp) {
    str += obj.nsp + ',';
  }

  // immediately followed by the id
  if (null != obj.id) {
    str += obj.id;
  }

  // json data
  if (null != obj.data) {
    var payload = tryStringify(obj.data);
    if (payload !== false) {
      str += payload;
    } else {
      return ERROR_PACKET;
    }
  }

  debug('encoded %j as %s', obj, str);
  return str;
}

function tryStringify(str) {
  try {
    return JSON.stringify(str);
  } catch(e){
    return false;
  }
}

/**
 * Encode packet as 'buffer sequence' by removing blobs, and
 * deconstructing packet into object with placeholders and
 * a list of buffers.
 *
 * @param {Object} packet
 * @return {Buffer} encoded
 * @api private
 */

function encodeAsBinary(obj, callback) {

  function writeEncoding(bloblessData) {
    var deconstruction = binary.deconstructPacket(bloblessData);
    var pack = encodeAsString(deconstruction.packet);
    var buffers = deconstruction.buffers;

    buffers.unshift(pack); // add packet info to beginning of data list
    callback(buffers); // write all the buffers
  }

  binary.removeBlobs(obj, writeEncoding);
}

/**
 * A socket.io Decoder instance
 *
 * @return {Object} decoder
 * @api public
 */

function Decoder() {
  this.reconstructor = null;
}

/**
 * Mix in `Emitter` with Decoder.
 */

Emitter(Decoder.prototype);

/**
 * Decodes an encoded packet string into packet JSON.
 *
 * @param {String} obj - encoded packet
 * @return {Object} packet
 * @api public
 */

Decoder.prototype.add = function(obj) {
  var packet;
  if (typeof obj === 'string') {
    packet = decodeString(obj);
    if (exports.BINARY_EVENT === packet.type || exports.BINARY_ACK === packet.type) { // binary packet's json
      this.reconstructor = new BinaryReconstructor(packet);

      // no attachments, labeled binary but no binary data to follow
      if (this.reconstructor.reconPack.attachments === 0) {
        this.emit('decoded', packet);
      }
    } else { // non-binary full packet
      this.emit('decoded', packet);
    }
  } else if (isBuf(obj) || obj.base64) { // raw binary data
    if (!this.reconstructor) {
      throw new Error('got binary data when not reconstructing a packet');
    } else {
      packet = this.reconstructor.takeBinaryData(obj);
      if (packet) { // received final buffer
        this.reconstructor = null;
        this.emit('decoded', packet);
      }
    }
  } else {
    throw new Error('Unknown type: ' + obj);
  }
};

/**
 * Decode a packet String (JSON data)
 *
 * @param {String} str
 * @return {Object} packet
 * @api private
 */

function decodeString(str) {
  var i = 0;
  // look up type
  var p = {
    type: Number(str.charAt(0))
  };

  if (null == exports.types[p.type]) {
    return error('unknown packet type ' + p.type);
  }

  // look up attachments if type binary
  if (exports.BINARY_EVENT === p.type || exports.BINARY_ACK === p.type) {
    var buf = '';
    while (str.charAt(++i) !== '-') {
      buf += str.charAt(i);
      if (i == str.length) break;
    }
    if (buf != Number(buf) || str.charAt(i) !== '-') {
      throw new Error('Illegal attachments');
    }
    p.attachments = Number(buf);
  }

  // look up namespace (if any)
  if ('/' === str.charAt(i + 1)) {
    p.nsp = '';
    while (++i) {
      var c = str.charAt(i);
      if (',' === c) break;
      p.nsp += c;
      if (i === str.length) break;
    }
  } else {
    p.nsp = '/';
  }

  // look up id
  var next = str.charAt(i + 1);
  if ('' !== next && Number(next) == next) {
    p.id = '';
    while (++i) {
      var c = str.charAt(i);
      if (null == c || Number(c) != c) {
        --i;
        break;
      }
      p.id += str.charAt(i);
      if (i === str.length) break;
    }
    p.id = Number(p.id);
  }

  // look up json data
  if (str.charAt(++i)) {
    var payload = tryParse(str.substr(i));
    var isPayloadValid = payload !== false && (p.type === exports.ERROR || isArray(payload));
    if (isPayloadValid) {
      p.data = payload;
    } else {
      return error('invalid payload');
    }
  }

  debug('decoded %s as %j', str, p);
  return p;
}

function tryParse(str) {
  try {
    return JSON.parse(str);
  } catch(e){
    return false;
  }
}

/**
 * Deallocates a parser's resources
 *
 * @api public
 */

Decoder.prototype.destroy = function() {
  if (this.reconstructor) {
    this.reconstructor.finishedReconstruction();
  }
};

/**
 * A manager of a binary event's 'buffer sequence'. Should
 * be constructed whenever a packet of type BINARY_EVENT is
 * decoded.
 *
 * @param {Object} packet
 * @return {BinaryReconstructor} initialized reconstructor
 * @api private
 */

function BinaryReconstructor(packet) {
  this.reconPack = packet;
  this.buffers = [];
}

/**
 * Method to be called when binary data received from connection
 * after a BINARY_EVENT packet.
 *
 * @param {Buffer | ArrayBuffer} binData - the raw binary data received
 * @return {null | Object} returns null if more binary data is expected or
 *   a reconstructed packet object if all buffers have been received.
 * @api private
 */

BinaryReconstructor.prototype.takeBinaryData = function(binData) {
  this.buffers.push(binData);
  if (this.buffers.length === this.reconPack.attachments) { // done with buffer list
    var packet = binary.reconstructPacket(this.reconPack, this.buffers);
    this.finishedReconstruction();
    return packet;
  }
  return null;
};

/**
 * Cleans up binary packet reconstruction variables.
 *
 * @api private
 */

BinaryReconstructor.prototype.finishedReconstruction = function() {
  this.reconPack = null;
  this.buffers = [];
};

function error(msg) {
  return {
    type: exports.ERROR,
    data: 'parser error: ' + msg
  };
}

},{"debug":"node_modules/socket.io-parser/node_modules/debug/src/browser.js","component-emitter":"node_modules/socket.io-parser/node_modules/component-emitter/index.js","./binary":"node_modules/socket.io-parser/binary.js","isarray":"node_modules/isarray/index.js","./is-buffer":"node_modules/socket.io-parser/is-buffer.js"}],"node_modules/has-cors/index.js":[function(require,module,exports) {

/**
 * Module exports.
 *
 * Logic borrowed from Modernizr:
 *
 *   - https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cors.js
 */

try {
  module.exports = typeof XMLHttpRequest !== 'undefined' &&
    'withCredentials' in new XMLHttpRequest();
} catch (err) {
  // if XMLHttp support is disabled in IE then it will throw
  // when trying to create
  module.exports = false;
}

},{}],"node_modules/engine.io-client/lib/globalThis.browser.js":[function(require,module,exports) {
module.exports = (function () {
  if (typeof self !== 'undefined') {
    return self;
  } else if (typeof window !== 'undefined') {
    return window;
  } else {
    return Function('return this')(); // eslint-disable-line no-new-func
  }
})();

},{}],"node_modules/engine.io-client/lib/xmlhttprequest.js":[function(require,module,exports) {
// browser shim for xmlhttprequest module

var hasCORS = require('has-cors');
var globalThis = require('./globalThis');

module.exports = function (opts) {
  var xdomain = opts.xdomain;

  // scheme must be same when usign XDomainRequest
  // http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx
  var xscheme = opts.xscheme;

  // XDomainRequest has a flow of not sending cookie, therefore it should be disabled as a default.
  // https://github.com/Automattic/engine.io-client/pull/217
  var enablesXDR = opts.enablesXDR;

  // XMLHttpRequest can be disabled on IE
  try {
    if ('undefined' !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
      return new XMLHttpRequest();
    }
  } catch (e) { }

  // Use XDomainRequest for IE8 if enablesXDR is true
  // because loading bar keeps flashing when using jsonp-polling
  // https://github.com/yujiosaka/socke.io-ie8-loading-example
  try {
    if ('undefined' !== typeof XDomainRequest && !xscheme && enablesXDR) {
      return new XDomainRequest();
    }
  } catch (e) { }

  if (!xdomain) {
    try {
      return new globalThis[['Active'].concat('Object').join('X')]('Microsoft.XMLHTTP');
    } catch (e) { }
  }
};

},{"has-cors":"node_modules/has-cors/index.js","./globalThis":"node_modules/engine.io-client/lib/globalThis.browser.js"}],"node_modules/engine.io-parser/lib/keys.js":[function(require,module,exports) {

/**
 * Gets the keys for an object.
 *
 * @return {Array} keys
 * @api private
 */

module.exports = Object.keys || function keys (obj){
  var arr = [];
  var has = Object.prototype.hasOwnProperty;

  for (var i in obj) {
    if (has.call(obj, i)) {
      arr.push(i);
    }
  }
  return arr;
};

},{}],"node_modules/has-binary2/index.js":[function(require,module,exports) {
var Buffer = require("buffer").Buffer;
/* global Blob File */

/*
 * Module requirements.
 */

var isArray = require('isarray');

var toString = Object.prototype.toString;
var withNativeBlob = typeof Blob === 'function' ||
                        typeof Blob !== 'undefined' && toString.call(Blob) === '[object BlobConstructor]';
var withNativeFile = typeof File === 'function' ||
                        typeof File !== 'undefined' && toString.call(File) === '[object FileConstructor]';

/**
 * Module exports.
 */

module.exports = hasBinary;

/**
 * Checks for binary data.
 *
 * Supports Buffer, ArrayBuffer, Blob and File.
 *
 * @param {Object} anything
 * @api public
 */

function hasBinary (obj) {
  if (!obj || typeof obj !== 'object') {
    return false;
  }

  if (isArray(obj)) {
    for (var i = 0, l = obj.length; i < l; i++) {
      if (hasBinary(obj[i])) {
        return true;
      }
    }
    return false;
  }

  if ((typeof Buffer === 'function' && Buffer.isBuffer && Buffer.isBuffer(obj)) ||
    (typeof ArrayBuffer === 'function' && obj instanceof ArrayBuffer) ||
    (withNativeBlob && obj instanceof Blob) ||
    (withNativeFile && obj instanceof File)
  ) {
    return true;
  }

  // see: https://github.com/Automattic/has-binary/pull/4
  if (obj.toJSON && typeof obj.toJSON === 'function' && arguments.length === 1) {
    return hasBinary(obj.toJSON(), true);
  }

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
      return true;
    }
  }

  return false;
}

},{"isarray":"node_modules/isarray/index.js","buffer":"node_modules/buffer/index.js"}],"node_modules/arraybuffer.slice/index.js":[function(require,module,exports) {
/**
 * An abstraction for slicing an arraybuffer even when
 * ArrayBuffer.prototype.slice is not supported
 *
 * @api public
 */

module.exports = function(arraybuffer, start, end) {
  var bytes = arraybuffer.byteLength;
  start = start || 0;
  end = end || bytes;

  if (arraybuffer.slice) { return arraybuffer.slice(start, end); }

  if (start < 0) { start += bytes; }
  if (end < 0) { end += bytes; }
  if (end > bytes) { end = bytes; }

  if (start >= bytes || start >= end || bytes === 0) {
    return new ArrayBuffer(0);
  }

  var abv = new Uint8Array(arraybuffer);
  var result = new Uint8Array(end - start);
  for (var i = start, ii = 0; i < end; i++, ii++) {
    result[ii] = abv[i];
  }
  return result.buffer;
};

},{}],"node_modules/after/index.js":[function(require,module,exports) {
module.exports = after

function after(count, callback, err_cb) {
    var bail = false
    err_cb = err_cb || noop
    proxy.count = count

    return (count === 0) ? callback() : proxy

    function proxy(err, result) {
        if (proxy.count <= 0) {
            throw new Error('after called too many times')
        }
        --proxy.count

        // after first error, rest are passed to err_cb
        if (err) {
            bail = true
            callback(err)
            // future error callbacks will go to error handler
            callback = err_cb
        } else if (proxy.count === 0 && !bail) {
            callback(null, result)
        }
    }
}

function noop() {}

},{}],"node_modules/engine.io-parser/lib/utf8.js":[function(require,module,exports) {
/*! https://mths.be/utf8js v2.1.2 by @mathias */

var stringFromCharCode = String.fromCharCode;

// Taken from https://mths.be/punycode
function ucs2decode(string) {
	var output = [];
	var counter = 0;
	var length = string.length;
	var value;
	var extra;
	while (counter < length) {
		value = string.charCodeAt(counter++);
		if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
			// high surrogate, and there is a next character
			extra = string.charCodeAt(counter++);
			if ((extra & 0xFC00) == 0xDC00) { // low surrogate
				output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
			} else {
				// unmatched surrogate; only append this code unit, in case the next
				// code unit is the high surrogate of a surrogate pair
				output.push(value);
				counter--;
			}
		} else {
			output.push(value);
		}
	}
	return output;
}

// Taken from https://mths.be/punycode
function ucs2encode(array) {
	var length = array.length;
	var index = -1;
	var value;
	var output = '';
	while (++index < length) {
		value = array[index];
		if (value > 0xFFFF) {
			value -= 0x10000;
			output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
			value = 0xDC00 | value & 0x3FF;
		}
		output += stringFromCharCode(value);
	}
	return output;
}

function checkScalarValue(codePoint, strict) {
	if (codePoint >= 0xD800 && codePoint <= 0xDFFF) {
		if (strict) {
			throw Error(
				'Lone surrogate U+' + codePoint.toString(16).toUpperCase() +
				' is not a scalar value'
			);
		}
		return false;
	}
	return true;
}
/*--------------------------------------------------------------------------*/

function createByte(codePoint, shift) {
	return stringFromCharCode(((codePoint >> shift) & 0x3F) | 0x80);
}

function encodeCodePoint(codePoint, strict) {
	if ((codePoint & 0xFFFFFF80) == 0) { // 1-byte sequence
		return stringFromCharCode(codePoint);
	}
	var symbol = '';
	if ((codePoint & 0xFFFFF800) == 0) { // 2-byte sequence
		symbol = stringFromCharCode(((codePoint >> 6) & 0x1F) | 0xC0);
	}
	else if ((codePoint & 0xFFFF0000) == 0) { // 3-byte sequence
		if (!checkScalarValue(codePoint, strict)) {
			codePoint = 0xFFFD;
		}
		symbol = stringFromCharCode(((codePoint >> 12) & 0x0F) | 0xE0);
		symbol += createByte(codePoint, 6);
	}
	else if ((codePoint & 0xFFE00000) == 0) { // 4-byte sequence
		symbol = stringFromCharCode(((codePoint >> 18) & 0x07) | 0xF0);
		symbol += createByte(codePoint, 12);
		symbol += createByte(codePoint, 6);
	}
	symbol += stringFromCharCode((codePoint & 0x3F) | 0x80);
	return symbol;
}

function utf8encode(string, opts) {
	opts = opts || {};
	var strict = false !== opts.strict;

	var codePoints = ucs2decode(string);
	var length = codePoints.length;
	var index = -1;
	var codePoint;
	var byteString = '';
	while (++index < length) {
		codePoint = codePoints[index];
		byteString += encodeCodePoint(codePoint, strict);
	}
	return byteString;
}

/*--------------------------------------------------------------------------*/

function readContinuationByte() {
	if (byteIndex >= byteCount) {
		throw Error('Invalid byte index');
	}

	var continuationByte = byteArray[byteIndex] & 0xFF;
	byteIndex++;

	if ((continuationByte & 0xC0) == 0x80) {
		return continuationByte & 0x3F;
	}

	// If we end up here, it’s not a continuation byte
	throw Error('Invalid continuation byte');
}

function decodeSymbol(strict) {
	var byte1;
	var byte2;
	var byte3;
	var byte4;
	var codePoint;

	if (byteIndex > byteCount) {
		throw Error('Invalid byte index');
	}

	if (byteIndex == byteCount) {
		return false;
	}

	// Read first byte
	byte1 = byteArray[byteIndex] & 0xFF;
	byteIndex++;

	// 1-byte sequence (no continuation bytes)
	if ((byte1 & 0x80) == 0) {
		return byte1;
	}

	// 2-byte sequence
	if ((byte1 & 0xE0) == 0xC0) {
		byte2 = readContinuationByte();
		codePoint = ((byte1 & 0x1F) << 6) | byte2;
		if (codePoint >= 0x80) {
			return codePoint;
		} else {
			throw Error('Invalid continuation byte');
		}
	}

	// 3-byte sequence (may include unpaired surrogates)
	if ((byte1 & 0xF0) == 0xE0) {
		byte2 = readContinuationByte();
		byte3 = readContinuationByte();
		codePoint = ((byte1 & 0x0F) << 12) | (byte2 << 6) | byte3;
		if (codePoint >= 0x0800) {
			return checkScalarValue(codePoint, strict) ? codePoint : 0xFFFD;
		} else {
			throw Error('Invalid continuation byte');
		}
	}

	// 4-byte sequence
	if ((byte1 & 0xF8) == 0xF0) {
		byte2 = readContinuationByte();
		byte3 = readContinuationByte();
		byte4 = readContinuationByte();
		codePoint = ((byte1 & 0x07) << 0x12) | (byte2 << 0x0C) |
			(byte3 << 0x06) | byte4;
		if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
			return codePoint;
		}
	}

	throw Error('Invalid UTF-8 detected');
}

var byteArray;
var byteCount;
var byteIndex;
function utf8decode(byteString, opts) {
	opts = opts || {};
	var strict = false !== opts.strict;

	byteArray = ucs2decode(byteString);
	byteCount = byteArray.length;
	byteIndex = 0;
	var codePoints = [];
	var tmp;
	while ((tmp = decodeSymbol(strict)) !== false) {
		codePoints.push(tmp);
	}
	return ucs2encode(codePoints);
}

module.exports = {
	version: '2.1.2',
	encode: utf8encode,
	decode: utf8decode
};

},{}],"node_modules/engine.io-parser/node_modules/base64-arraybuffer/lib/base64-arraybuffer.js":[function(require,module,exports) {
/*
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */
(function (chars) {
  "use strict";

  exports.encode = function (arraybuffer) {
    var bytes = new Uint8Array(arraybuffer),
        i,
        len = bytes.length,
        base64 = "";

    for (i = 0; i < len; i += 3) {
      base64 += chars[bytes[i] >> 2];
      base64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
      base64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
      base64 += chars[bytes[i + 2] & 63];
    }

    if (len % 3 === 2) {
      base64 = base64.substring(0, base64.length - 1) + "=";
    } else if (len % 3 === 1) {
      base64 = base64.substring(0, base64.length - 2) + "==";
    }

    return base64;
  };

  exports.decode = function (base64) {
    var bufferLength = base64.length * 0.75,
        len = base64.length,
        i,
        p = 0,
        encoded1,
        encoded2,
        encoded3,
        encoded4;

    if (base64[base64.length - 1] === "=") {
      bufferLength--;

      if (base64[base64.length - 2] === "=") {
        bufferLength--;
      }
    }

    var arraybuffer = new ArrayBuffer(bufferLength),
        bytes = new Uint8Array(arraybuffer);

    for (i = 0; i < len; i += 4) {
      encoded1 = chars.indexOf(base64[i]);
      encoded2 = chars.indexOf(base64[i + 1]);
      encoded3 = chars.indexOf(base64[i + 2]);
      encoded4 = chars.indexOf(base64[i + 3]);
      bytes[p++] = encoded1 << 2 | encoded2 >> 4;
      bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
      bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
    }

    return arraybuffer;
  };
})("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");
},{}],"node_modules/blob/index.js":[function(require,module,exports) {
/**
 * Create a blob builder even when vendor prefixes exist
 */

var BlobBuilder = typeof BlobBuilder !== 'undefined' ? BlobBuilder :
  typeof WebKitBlobBuilder !== 'undefined' ? WebKitBlobBuilder :
  typeof MSBlobBuilder !== 'undefined' ? MSBlobBuilder :
  typeof MozBlobBuilder !== 'undefined' ? MozBlobBuilder : 
  false;

/**
 * Check if Blob constructor is supported
 */

var blobSupported = (function() {
  try {
    var a = new Blob(['hi']);
    return a.size === 2;
  } catch(e) {
    return false;
  }
})();

/**
 * Check if Blob constructor supports ArrayBufferViews
 * Fails in Safari 6, so we need to map to ArrayBuffers there.
 */

var blobSupportsArrayBufferView = blobSupported && (function() {
  try {
    var b = new Blob([new Uint8Array([1,2])]);
    return b.size === 2;
  } catch(e) {
    return false;
  }
})();

/**
 * Check if BlobBuilder is supported
 */

var blobBuilderSupported = BlobBuilder
  && BlobBuilder.prototype.append
  && BlobBuilder.prototype.getBlob;

/**
 * Helper function that maps ArrayBufferViews to ArrayBuffers
 * Used by BlobBuilder constructor and old browsers that didn't
 * support it in the Blob constructor.
 */

function mapArrayBufferViews(ary) {
  return ary.map(function(chunk) {
    if (chunk.buffer instanceof ArrayBuffer) {
      var buf = chunk.buffer;

      // if this is a subarray, make a copy so we only
      // include the subarray region from the underlying buffer
      if (chunk.byteLength !== buf.byteLength) {
        var copy = new Uint8Array(chunk.byteLength);
        copy.set(new Uint8Array(buf, chunk.byteOffset, chunk.byteLength));
        buf = copy.buffer;
      }

      return buf;
    }

    return chunk;
  });
}

function BlobBuilderConstructor(ary, options) {
  options = options || {};

  var bb = new BlobBuilder();
  mapArrayBufferViews(ary).forEach(function(part) {
    bb.append(part);
  });

  return (options.type) ? bb.getBlob(options.type) : bb.getBlob();
};

function BlobConstructor(ary, options) {
  return new Blob(mapArrayBufferViews(ary), options || {});
};

if (typeof Blob !== 'undefined') {
  BlobBuilderConstructor.prototype = Blob.prototype;
  BlobConstructor.prototype = Blob.prototype;
}

module.exports = (function() {
  if (blobSupported) {
    return blobSupportsArrayBufferView ? Blob : BlobConstructor;
  } else if (blobBuilderSupported) {
    return BlobBuilderConstructor;
  } else {
    return undefined;
  }
})();

},{}],"node_modules/engine.io-parser/lib/browser.js":[function(require,module,exports) {
/**
 * Module dependencies.
 */

var keys = require('./keys');
var hasBinary = require('has-binary2');
var sliceBuffer = require('arraybuffer.slice');
var after = require('after');
var utf8 = require('./utf8');

var base64encoder;
if (typeof ArrayBuffer !== 'undefined') {
  base64encoder = require('base64-arraybuffer');
}

/**
 * Check if we are running an android browser. That requires us to use
 * ArrayBuffer with polling transports...
 *
 * http://ghinda.net/jpeg-blob-ajax-android/
 */

var isAndroid = typeof navigator !== 'undefined' && /Android/i.test(navigator.userAgent);

/**
 * Check if we are running in PhantomJS.
 * Uploading a Blob with PhantomJS does not work correctly, as reported here:
 * https://github.com/ariya/phantomjs/issues/11395
 * @type boolean
 */
var isPhantomJS = typeof navigator !== 'undefined' && /PhantomJS/i.test(navigator.userAgent);

/**
 * When true, avoids using Blobs to encode payloads.
 * @type boolean
 */
var dontSendBlobs = isAndroid || isPhantomJS;

/**
 * Current protocol version.
 */

exports.protocol = 3;

/**
 * Packet types.
 */

var packets = exports.packets = {
    open:     0    // non-ws
  , close:    1    // non-ws
  , ping:     2
  , pong:     3
  , message:  4
  , upgrade:  5
  , noop:     6
};

var packetslist = keys(packets);

/**
 * Premade error packet.
 */

var err = { type: 'error', data: 'parser error' };

/**
 * Create a blob api even for blob builder when vendor prefixes exist
 */

var Blob = require('blob');

/**
 * Encodes a packet.
 *
 *     <packet type id> [ <data> ]
 *
 * Example:
 *
 *     5hello world
 *     3
 *     4
 *
 * Binary is encoded in an identical principle
 *
 * @api private
 */

exports.encodePacket = function (packet, supportsBinary, utf8encode, callback) {
  if (typeof supportsBinary === 'function') {
    callback = supportsBinary;
    supportsBinary = false;
  }

  if (typeof utf8encode === 'function') {
    callback = utf8encode;
    utf8encode = null;
  }

  var data = (packet.data === undefined)
    ? undefined
    : packet.data.buffer || packet.data;

  if (typeof ArrayBuffer !== 'undefined' && data instanceof ArrayBuffer) {
    return encodeArrayBuffer(packet, supportsBinary, callback);
  } else if (typeof Blob !== 'undefined' && data instanceof Blob) {
    return encodeBlob(packet, supportsBinary, callback);
  }

  // might be an object with { base64: true, data: dataAsBase64String }
  if (data && data.base64) {
    return encodeBase64Object(packet, callback);
  }

  // Sending data as a utf-8 string
  var encoded = packets[packet.type];

  // data fragment is optional
  if (undefined !== packet.data) {
    encoded += utf8encode ? utf8.encode(String(packet.data), { strict: false }) : String(packet.data);
  }

  return callback('' + encoded);

};

function encodeBase64Object(packet, callback) {
  // packet data is an object { base64: true, data: dataAsBase64String }
  var message = 'b' + exports.packets[packet.type] + packet.data.data;
  return callback(message);
}

/**
 * Encode packet helpers for binary types
 */

function encodeArrayBuffer(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  var data = packet.data;
  var contentArray = new Uint8Array(data);
  var resultBuffer = new Uint8Array(1 + data.byteLength);

  resultBuffer[0] = packets[packet.type];
  for (var i = 0; i < contentArray.length; i++) {
    resultBuffer[i+1] = contentArray[i];
  }

  return callback(resultBuffer.buffer);
}

function encodeBlobAsArrayBuffer(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  var fr = new FileReader();
  fr.onload = function() {
    exports.encodePacket({ type: packet.type, data: fr.result }, supportsBinary, true, callback);
  };
  return fr.readAsArrayBuffer(packet.data);
}

function encodeBlob(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  if (dontSendBlobs) {
    return encodeBlobAsArrayBuffer(packet, supportsBinary, callback);
  }

  var length = new Uint8Array(1);
  length[0] = packets[packet.type];
  var blob = new Blob([length.buffer, packet.data]);

  return callback(blob);
}

/**
 * Encodes a packet with binary data in a base64 string
 *
 * @param {Object} packet, has `type` and `data`
 * @return {String} base64 encoded message
 */

exports.encodeBase64Packet = function(packet, callback) {
  var message = 'b' + exports.packets[packet.type];
  if (typeof Blob !== 'undefined' && packet.data instanceof Blob) {
    var fr = new FileReader();
    fr.onload = function() {
      var b64 = fr.result.split(',')[1];
      callback(message + b64);
    };
    return fr.readAsDataURL(packet.data);
  }

  var b64data;
  try {
    b64data = String.fromCharCode.apply(null, new Uint8Array(packet.data));
  } catch (e) {
    // iPhone Safari doesn't let you apply with typed arrays
    var typed = new Uint8Array(packet.data);
    var basic = new Array(typed.length);
    for (var i = 0; i < typed.length; i++) {
      basic[i] = typed[i];
    }
    b64data = String.fromCharCode.apply(null, basic);
  }
  message += btoa(b64data);
  return callback(message);
};

/**
 * Decodes a packet. Changes format to Blob if requested.
 *
 * @return {Object} with `type` and `data` (if any)
 * @api private
 */

exports.decodePacket = function (data, binaryType, utf8decode) {
  if (data === undefined) {
    return err;
  }
  // String data
  if (typeof data === 'string') {
    if (data.charAt(0) === 'b') {
      return exports.decodeBase64Packet(data.substr(1), binaryType);
    }

    if (utf8decode) {
      data = tryDecode(data);
      if (data === false) {
        return err;
      }
    }
    var type = data.charAt(0);

    if (Number(type) != type || !packetslist[type]) {
      return err;
    }

    if (data.length > 1) {
      return { type: packetslist[type], data: data.substring(1) };
    } else {
      return { type: packetslist[type] };
    }
  }

  var asArray = new Uint8Array(data);
  var type = asArray[0];
  var rest = sliceBuffer(data, 1);
  if (Blob && binaryType === 'blob') {
    rest = new Blob([rest]);
  }
  return { type: packetslist[type], data: rest };
};

function tryDecode(data) {
  try {
    data = utf8.decode(data, { strict: false });
  } catch (e) {
    return false;
  }
  return data;
}

/**
 * Decodes a packet encoded in a base64 string
 *
 * @param {String} base64 encoded message
 * @return {Object} with `type` and `data` (if any)
 */

exports.decodeBase64Packet = function(msg, binaryType) {
  var type = packetslist[msg.charAt(0)];
  if (!base64encoder) {
    return { type: type, data: { base64: true, data: msg.substr(1) } };
  }

  var data = base64encoder.decode(msg.substr(1));

  if (binaryType === 'blob' && Blob) {
    data = new Blob([data]);
  }

  return { type: type, data: data };
};

/**
 * Encodes multiple messages (payload).
 *
 *     <length>:data
 *
 * Example:
 *
 *     11:hello world2:hi
 *
 * If any contents are binary, they will be encoded as base64 strings. Base64
 * encoded strings are marked with a b before the length specifier
 *
 * @param {Array} packets
 * @api private
 */

exports.encodePayload = function (packets, supportsBinary, callback) {
  if (typeof supportsBinary === 'function') {
    callback = supportsBinary;
    supportsBinary = null;
  }

  var isBinary = hasBinary(packets);

  if (supportsBinary && isBinary) {
    if (Blob && !dontSendBlobs) {
      return exports.encodePayloadAsBlob(packets, callback);
    }

    return exports.encodePayloadAsArrayBuffer(packets, callback);
  }

  if (!packets.length) {
    return callback('0:');
  }

  function setLengthHeader(message) {
    return message.length + ':' + message;
  }

  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, !isBinary ? false : supportsBinary, false, function(message) {
      doneCallback(null, setLengthHeader(message));
    });
  }

  map(packets, encodeOne, function(err, results) {
    return callback(results.join(''));
  });
};

/**
 * Async array map using after
 */

function map(ary, each, done) {
  var result = new Array(ary.length);
  var next = after(ary.length, done);

  var eachWithIndex = function(i, el, cb) {
    each(el, function(error, msg) {
      result[i] = msg;
      cb(error, result);
    });
  };

  for (var i = 0; i < ary.length; i++) {
    eachWithIndex(i, ary[i], next);
  }
}

/*
 * Decodes data when a payload is maybe expected. Possible binary contents are
 * decoded from their base64 representation
 *
 * @param {String} data, callback method
 * @api public
 */

exports.decodePayload = function (data, binaryType, callback) {
  if (typeof data !== 'string') {
    return exports.decodePayloadAsBinary(data, binaryType, callback);
  }

  if (typeof binaryType === 'function') {
    callback = binaryType;
    binaryType = null;
  }

  var packet;
  if (data === '') {
    // parser error - ignoring payload
    return callback(err, 0, 1);
  }

  var length = '', n, msg;

  for (var i = 0, l = data.length; i < l; i++) {
    var chr = data.charAt(i);

    if (chr !== ':') {
      length += chr;
      continue;
    }

    if (length === '' || (length != (n = Number(length)))) {
      // parser error - ignoring payload
      return callback(err, 0, 1);
    }

    msg = data.substr(i + 1, n);

    if (length != msg.length) {
      // parser error - ignoring payload
      return callback(err, 0, 1);
    }

    if (msg.length) {
      packet = exports.decodePacket(msg, binaryType, false);

      if (err.type === packet.type && err.data === packet.data) {
        // parser error in individual packet - ignoring payload
        return callback(err, 0, 1);
      }

      var ret = callback(packet, i + n, l);
      if (false === ret) return;
    }

    // advance cursor
    i += n;
    length = '';
  }

  if (length !== '') {
    // parser error - ignoring payload
    return callback(err, 0, 1);
  }

};

/**
 * Encodes multiple messages (payload) as binary.
 *
 * <1 = binary, 0 = string><number from 0-9><number from 0-9>[...]<number
 * 255><data>
 *
 * Example:
 * 1 3 255 1 2 3, if the binary contents are interpreted as 8 bit integers
 *
 * @param {Array} packets
 * @return {ArrayBuffer} encoded payload
 * @api private
 */

exports.encodePayloadAsArrayBuffer = function(packets, callback) {
  if (!packets.length) {
    return callback(new ArrayBuffer(0));
  }

  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, true, true, function(data) {
      return doneCallback(null, data);
    });
  }

  map(packets, encodeOne, function(err, encodedPackets) {
    var totalLength = encodedPackets.reduce(function(acc, p) {
      var len;
      if (typeof p === 'string'){
        len = p.length;
      } else {
        len = p.byteLength;
      }
      return acc + len.toString().length + len + 2; // string/binary identifier + separator = 2
    }, 0);

    var resultArray = new Uint8Array(totalLength);

    var bufferIndex = 0;
    encodedPackets.forEach(function(p) {
      var isString = typeof p === 'string';
      var ab = p;
      if (isString) {
        var view = new Uint8Array(p.length);
        for (var i = 0; i < p.length; i++) {
          view[i] = p.charCodeAt(i);
        }
        ab = view.buffer;
      }

      if (isString) { // not true binary
        resultArray[bufferIndex++] = 0;
      } else { // true binary
        resultArray[bufferIndex++] = 1;
      }

      var lenStr = ab.byteLength.toString();
      for (var i = 0; i < lenStr.length; i++) {
        resultArray[bufferIndex++] = parseInt(lenStr[i]);
      }
      resultArray[bufferIndex++] = 255;

      var view = new Uint8Array(ab);
      for (var i = 0; i < view.length; i++) {
        resultArray[bufferIndex++] = view[i];
      }
    });

    return callback(resultArray.buffer);
  });
};

/**
 * Encode as Blob
 */

exports.encodePayloadAsBlob = function(packets, callback) {
  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, true, true, function(encoded) {
      var binaryIdentifier = new Uint8Array(1);
      binaryIdentifier[0] = 1;
      if (typeof encoded === 'string') {
        var view = new Uint8Array(encoded.length);
        for (var i = 0; i < encoded.length; i++) {
          view[i] = encoded.charCodeAt(i);
        }
        encoded = view.buffer;
        binaryIdentifier[0] = 0;
      }

      var len = (encoded instanceof ArrayBuffer)
        ? encoded.byteLength
        : encoded.size;

      var lenStr = len.toString();
      var lengthAry = new Uint8Array(lenStr.length + 1);
      for (var i = 0; i < lenStr.length; i++) {
        lengthAry[i] = parseInt(lenStr[i]);
      }
      lengthAry[lenStr.length] = 255;

      if (Blob) {
        var blob = new Blob([binaryIdentifier.buffer, lengthAry.buffer, encoded]);
        doneCallback(null, blob);
      }
    });
  }

  map(packets, encodeOne, function(err, results) {
    return callback(new Blob(results));
  });
};

/*
 * Decodes data when a payload is maybe expected. Strings are decoded by
 * interpreting each byte as a key code for entries marked to start with 0. See
 * description of encodePayloadAsBinary
 *
 * @param {ArrayBuffer} data, callback method
 * @api public
 */

exports.decodePayloadAsBinary = function (data, binaryType, callback) {
  if (typeof binaryType === 'function') {
    callback = binaryType;
    binaryType = null;
  }

  var bufferTail = data;
  var buffers = [];

  while (bufferTail.byteLength > 0) {
    var tailArray = new Uint8Array(bufferTail);
    var isString = tailArray[0] === 0;
    var msgLength = '';

    for (var i = 1; ; i++) {
      if (tailArray[i] === 255) break;

      // 310 = char length of Number.MAX_VALUE
      if (msgLength.length > 310) {
        return callback(err, 0, 1);
      }

      msgLength += tailArray[i];
    }

    bufferTail = sliceBuffer(bufferTail, 2 + msgLength.length);
    msgLength = parseInt(msgLength);

    var msg = sliceBuffer(bufferTail, 0, msgLength);
    if (isString) {
      try {
        msg = String.fromCharCode.apply(null, new Uint8Array(msg));
      } catch (e) {
        // iPhone Safari doesn't let you apply to typed arrays
        var typed = new Uint8Array(msg);
        msg = '';
        for (var i = 0; i < typed.length; i++) {
          msg += String.fromCharCode(typed[i]);
        }
      }
    }

    buffers.push(msg);
    bufferTail = sliceBuffer(bufferTail, msgLength);
  }

  var total = buffers.length;
  buffers.forEach(function(buffer, i) {
    callback(exports.decodePacket(buffer, binaryType, true), i, total);
  });
};

},{"./keys":"node_modules/engine.io-parser/lib/keys.js","has-binary2":"node_modules/has-binary2/index.js","arraybuffer.slice":"node_modules/arraybuffer.slice/index.js","after":"node_modules/after/index.js","./utf8":"node_modules/engine.io-parser/lib/utf8.js","base64-arraybuffer":"node_modules/engine.io-parser/node_modules/base64-arraybuffer/lib/base64-arraybuffer.js","blob":"node_modules/blob/index.js"}],"node_modules/engine.io-client/node_modules/component-emitter/index.js":[function(require,module,exports) {

/**
 * Expose `Emitter`.
 */

if (typeof module !== 'undefined') {
  module.exports = Emitter;
}

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }

  // Remove event specific arrays for event types that no
  // one is subscribed for to avoid memory leak.
  if (callbacks.length === 0) {
    delete this._callbacks['$' + event];
  }

  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};

  var args = new Array(arguments.length - 1)
    , callbacks = this._callbacks['$' + event];

  for (var i = 1; i < arguments.length; i++) {
    args[i - 1] = arguments[i];
  }

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};

},{}],"node_modules/engine.io-client/lib/transport.js":[function(require,module,exports) {
/**
 * Module dependencies.
 */

var parser = require('engine.io-parser');
var Emitter = require('component-emitter');

/**
 * Module exports.
 */

module.exports = Transport;

/**
 * Transport abstract constructor.
 *
 * @param {Object} options.
 * @api private
 */

function Transport (opts) {
  this.path = opts.path;
  this.hostname = opts.hostname;
  this.port = opts.port;
  this.secure = opts.secure;
  this.query = opts.query;
  this.timestampParam = opts.timestampParam;
  this.timestampRequests = opts.timestampRequests;
  this.readyState = '';
  this.agent = opts.agent || false;
  this.socket = opts.socket;
  this.enablesXDR = opts.enablesXDR;
  this.withCredentials = opts.withCredentials;

  // SSL options for Node.js client
  this.pfx = opts.pfx;
  this.key = opts.key;
  this.passphrase = opts.passphrase;
  this.cert = opts.cert;
  this.ca = opts.ca;
  this.ciphers = opts.ciphers;
  this.rejectUnauthorized = opts.rejectUnauthorized;
  this.forceNode = opts.forceNode;

  // results of ReactNative environment detection
  this.isReactNative = opts.isReactNative;

  // other options for Node.js client
  this.extraHeaders = opts.extraHeaders;
  this.localAddress = opts.localAddress;
}

/**
 * Mix in `Emitter`.
 */

Emitter(Transport.prototype);

/**
 * Emits an error.
 *
 * @param {String} str
 * @return {Transport} for chaining
 * @api public
 */

Transport.prototype.onError = function (msg, desc) {
  var err = new Error(msg);
  err.type = 'TransportError';
  err.description = desc;
  this.emit('error', err);
  return this;
};

/**
 * Opens the transport.
 *
 * @api public
 */

Transport.prototype.open = function () {
  if ('closed' === this.readyState || '' === this.readyState) {
    this.readyState = 'opening';
    this.doOpen();
  }

  return this;
};

/**
 * Closes the transport.
 *
 * @api private
 */

Transport.prototype.close = function () {
  if ('opening' === this.readyState || 'open' === this.readyState) {
    this.doClose();
    this.onClose();
  }

  return this;
};

/**
 * Sends multiple packets.
 *
 * @param {Array} packets
 * @api private
 */

Transport.prototype.send = function (packets) {
  if ('open' === this.readyState) {
    this.write(packets);
  } else {
    throw new Error('Transport not open');
  }
};

/**
 * Called upon open
 *
 * @api private
 */

Transport.prototype.onOpen = function () {
  this.readyState = 'open';
  this.writable = true;
  this.emit('open');
};

/**
 * Called with data.
 *
 * @param {String} data
 * @api private
 */

Transport.prototype.onData = function (data) {
  var packet = parser.decodePacket(data, this.socket.binaryType);
  this.onPacket(packet);
};

/**
 * Called with a decoded packet.
 */

Transport.prototype.onPacket = function (packet) {
  this.emit('packet', packet);
};

/**
 * Called upon close.
 *
 * @api private
 */

Transport.prototype.onClose = function () {
  this.readyState = 'closed';
  this.emit('close');
};

},{"engine.io-parser":"node_modules/engine.io-parser/lib/browser.js","component-emitter":"node_modules/engine.io-client/node_modules/component-emitter/index.js"}],"node_modules/engine.io-client/node_modules/parseqs/index.js":[function(require,module,exports) {
/**
 * Compiles a querystring
 * Returns string representation of the object
 *
 * @param {Object}
 * @api private
 */

exports.encode = function (obj) {
  var str = '';

  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      if (str.length) str += '&';
      str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
    }
  }

  return str;
};

/**
 * Parses a simple querystring into an object
 *
 * @param {String} qs
 * @api private
 */

exports.decode = function(qs){
  var qry = {};
  var pairs = qs.split('&');
  for (var i = 0, l = pairs.length; i < l; i++) {
    var pair = pairs[i].split('=');
    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }
  return qry;
};

},{}],"node_modules/component-inherit/index.js":[function(require,module,exports) {

module.exports = function(a, b){
  var fn = function(){};
  fn.prototype = b.prototype;
  a.prototype = new fn;
  a.prototype.constructor = a;
};
},{}],"node_modules/yeast/index.js":[function(require,module,exports) {
'use strict';

var alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split('')
  , length = 64
  , map = {}
  , seed = 0
  , i = 0
  , prev;

/**
 * Return a string representing the specified number.
 *
 * @param {Number} num The number to convert.
 * @returns {String} The string representation of the number.
 * @api public
 */
function encode(num) {
  var encoded = '';

  do {
    encoded = alphabet[num % length] + encoded;
    num = Math.floor(num / length);
  } while (num > 0);

  return encoded;
}

/**
 * Return the integer value specified by the given string.
 *
 * @param {String} str The string to convert.
 * @returns {Number} The integer value represented by the string.
 * @api public
 */
function decode(str) {
  var decoded = 0;

  for (i = 0; i < str.length; i++) {
    decoded = decoded * length + map[str.charAt(i)];
  }

  return decoded;
}

/**
 * Yeast: A tiny growing id generator.
 *
 * @returns {String} A unique id.
 * @api public
 */
function yeast() {
  var now = encode(+new Date());

  if (now !== prev) return seed = 0, prev = now;
  return now +'.'+ encode(seed++);
}

//
// Map each character to its index.
//
for (; i < length; i++) map[alphabet[i]] = i;

//
// Expose the `yeast`, `encode` and `decode` functions.
//
yeast.encode = encode;
yeast.decode = decode;
module.exports = yeast;

},{}],"node_modules/engine.io-client/node_modules/ms/index.js":[function(require,module,exports) {
/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}

},{}],"node_modules/engine.io-client/node_modules/debug/src/debug.js":[function(require,module,exports) {

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = require('ms');

/**
 * Active `debug` instances.
 */
exports.instances = [];

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  var prevTime;

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);
  debug.destroy = destroy;

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  exports.instances.push(debug);

  return debug;
}

function destroy () {
  var index = exports.instances.indexOf(this);
  if (index !== -1) {
    exports.instances.splice(index, 1);
    return true;
  } else {
    return false;
  }
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var i;
  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }

  for (i = 0; i < exports.instances.length; i++) {
    var instance = exports.instances[i];
    instance.enabled = exports.enabled(instance.namespace);
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  if (name[name.length - 1] === '*') {
    return true;
  }
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}

},{"ms":"node_modules/engine.io-client/node_modules/ms/index.js"}],"node_modules/engine.io-client/node_modules/debug/src/browser.js":[function(require,module,exports) {
var process = require("process");
/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */
exports = module.exports = require('./debug');
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome && 'undefined' != typeof chrome.storage ? chrome.storage.local : localstorage();
/**
 * Colors.
 */

exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  } // Internet Explorer and Edge do not support colors.


  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  } // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632


  return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // is firebug? http://stackoverflow.com/a/398120/376773
  typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || // is firefox >= v31?
  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // double check webkit in userAgent just in case we are in a worker
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */


exports.formatters.j = function (v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */


function formatArgs(args) {
  var useColors = this.useColors;
  args[0] = (useColors ? '%c' : '') + this.namespace + (useColors ? ' %c' : ' ') + args[0] + (useColors ? '%c ' : ' ') + '+' + exports.humanize(this.diff);
  if (!useColors) return;
  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit'); // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into

  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function (match) {
    if ('%%' === match) return;
    index++;

    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });
  args.splice(lastC, 0, c);
}
/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */


function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
}
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */


function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch (e) {}
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */


function load() {
  var r;

  try {
    r = exports.storage.debug;
  } catch (e) {} // If debug isn't set in LS, and we're in Electron, try to load $DEBUG


  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = undefined;
  }

  return r;
}
/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */


exports.enable(load());
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}
},{"./debug":"node_modules/engine.io-client/node_modules/debug/src/debug.js","process":"node_modules/process/browser.js"}],"node_modules/engine.io-client/lib/transports/polling.js":[function(require,module,exports) {
/**
 * Module dependencies.
 */

var Transport = require('../transport');
var parseqs = require('parseqs');
var parser = require('engine.io-parser');
var inherit = require('component-inherit');
var yeast = require('yeast');
var debug = require('debug')('engine.io-client:polling');

/**
 * Module exports.
 */

module.exports = Polling;

/**
 * Is XHR2 supported?
 */

var hasXHR2 = (function () {
  var XMLHttpRequest = require('xmlhttprequest-ssl');
  var xhr = new XMLHttpRequest({ xdomain: false });
  return null != xhr.responseType;
})();

/**
 * Polling interface.
 *
 * @param {Object} opts
 * @api private
 */

function Polling (opts) {
  var forceBase64 = (opts && opts.forceBase64);
  if (!hasXHR2 || forceBase64) {
    this.supportsBinary = false;
  }
  Transport.call(this, opts);
}

/**
 * Inherits from Transport.
 */

inherit(Polling, Transport);

/**
 * Transport name.
 */

Polling.prototype.name = 'polling';

/**
 * Opens the socket (triggers polling). We write a PING message to determine
 * when the transport is open.
 *
 * @api private
 */

Polling.prototype.doOpen = function () {
  this.poll();
};

/**
 * Pauses polling.
 *
 * @param {Function} callback upon buffers are flushed and transport is paused
 * @api private
 */

Polling.prototype.pause = function (onPause) {
  var self = this;

  this.readyState = 'pausing';

  function pause () {
    debug('paused');
    self.readyState = 'paused';
    onPause();
  }

  if (this.polling || !this.writable) {
    var total = 0;

    if (this.polling) {
      debug('we are currently polling - waiting to pause');
      total++;
      this.once('pollComplete', function () {
        debug('pre-pause polling complete');
        --total || pause();
      });
    }

    if (!this.writable) {
      debug('we are currently writing - waiting to pause');
      total++;
      this.once('drain', function () {
        debug('pre-pause writing complete');
        --total || pause();
      });
    }
  } else {
    pause();
  }
};

/**
 * Starts polling cycle.
 *
 * @api public
 */

Polling.prototype.poll = function () {
  debug('polling');
  this.polling = true;
  this.doPoll();
  this.emit('poll');
};

/**
 * Overloads onData to detect payloads.
 *
 * @api private
 */

Polling.prototype.onData = function (data) {
  var self = this;
  debug('polling got data %s', data);
  var callback = function (packet, index, total) {
    // if its the first message we consider the transport open
    if ('opening' === self.readyState) {
      self.onOpen();
    }

    // if its a close packet, we close the ongoing requests
    if ('close' === packet.type) {
      self.onClose();
      return false;
    }

    // otherwise bypass onData and handle the message
    self.onPacket(packet);
  };

  // decode payload
  parser.decodePayload(data, this.socket.binaryType, callback);

  // if an event did not trigger closing
  if ('closed' !== this.readyState) {
    // if we got data we're not polling
    this.polling = false;
    this.emit('pollComplete');

    if ('open' === this.readyState) {
      this.poll();
    } else {
      debug('ignoring poll - transport state "%s"', this.readyState);
    }
  }
};

/**
 * For polling, send a close packet.
 *
 * @api private
 */

Polling.prototype.doClose = function () {
  var self = this;

  function close () {
    debug('writing close packet');
    self.write([{ type: 'close' }]);
  }

  if ('open' === this.readyState) {
    debug('transport open - closing');
    close();
  } else {
    // in case we're trying to close while
    // handshaking is in progress (GH-164)
    debug('transport not open - deferring close');
    this.once('open', close);
  }
};

/**
 * Writes a packets payload.
 *
 * @param {Array} data packets
 * @param {Function} drain callback
 * @api private
 */

Polling.prototype.write = function (packets) {
  var self = this;
  this.writable = false;
  var callbackfn = function () {
    self.writable = true;
    self.emit('drain');
  };

  parser.encodePayload(packets, this.supportsBinary, function (data) {
    self.doWrite(data, callbackfn);
  });
};

/**
 * Generates uri for connection.
 *
 * @api private
 */

Polling.prototype.uri = function () {
  var query = this.query || {};
  var schema = this.secure ? 'https' : 'http';
  var port = '';

  // cache busting is forced
  if (false !== this.timestampRequests) {
    query[this.timestampParam] = yeast();
  }

  if (!this.supportsBinary && !query.sid) {
    query.b64 = 1;
  }

  query = parseqs.encode(query);

  // avoid port if default for schema
  if (this.port && (('https' === schema && Number(this.port) !== 443) ||
     ('http' === schema && Number(this.port) !== 80))) {
    port = ':' + this.port;
  }

  // prepend ? to query
  if (query.length) {
    query = '?' + query;
  }

  var ipv6 = this.hostname.indexOf(':') !== -1;
  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
};

},{"../transport":"node_modules/engine.io-client/lib/transport.js","parseqs":"node_modules/engine.io-client/node_modules/parseqs/index.js","engine.io-parser":"node_modules/engine.io-parser/lib/browser.js","component-inherit":"node_modules/component-inherit/index.js","yeast":"node_modules/yeast/index.js","debug":"node_modules/engine.io-client/node_modules/debug/src/browser.js","xmlhttprequest-ssl":"node_modules/engine.io-client/lib/xmlhttprequest.js"}],"node_modules/engine.io-client/lib/transports/polling-xhr.js":[function(require,module,exports) {
/* global attachEvent */

/**
 * Module requirements.
 */

var XMLHttpRequest = require('xmlhttprequest-ssl');
var Polling = require('./polling');
var Emitter = require('component-emitter');
var inherit = require('component-inherit');
var debug = require('debug')('engine.io-client:polling-xhr');
var globalThis = require('../globalThis');

/**
 * Module exports.
 */

module.exports = XHR;
module.exports.Request = Request;

/**
 * Empty function
 */

function empty () {}

/**
 * XHR Polling constructor.
 *
 * @param {Object} opts
 * @api public
 */

function XHR (opts) {
  Polling.call(this, opts);
  this.requestTimeout = opts.requestTimeout;
  this.extraHeaders = opts.extraHeaders;

  if (typeof location !== 'undefined') {
    var isSSL = 'https:' === location.protocol;
    var port = location.port;

    // some user agents have empty `location.port`
    if (!port) {
      port = isSSL ? 443 : 80;
    }

    this.xd = (typeof location !== 'undefined' && opts.hostname !== location.hostname) ||
      port !== opts.port;
    this.xs = opts.secure !== isSSL;
  }
}

/**
 * Inherits from Polling.
 */

inherit(XHR, Polling);

/**
 * XHR supports binary
 */

XHR.prototype.supportsBinary = true;

/**
 * Creates a request.
 *
 * @param {String} method
 * @api private
 */

XHR.prototype.request = function (opts) {
  opts = opts || {};
  opts.uri = this.uri();
  opts.xd = this.xd;
  opts.xs = this.xs;
  opts.agent = this.agent || false;
  opts.supportsBinary = this.supportsBinary;
  opts.enablesXDR = this.enablesXDR;
  opts.withCredentials = this.withCredentials;

  // SSL options for Node.js client
  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;
  opts.requestTimeout = this.requestTimeout;

  // other options for Node.js client
  opts.extraHeaders = this.extraHeaders;

  return new Request(opts);
};

/**
 * Sends data.
 *
 * @param {String} data to send.
 * @param {Function} called upon flush.
 * @api private
 */

XHR.prototype.doWrite = function (data, fn) {
  var isBinary = typeof data !== 'string' && data !== undefined;
  var req = this.request({ method: 'POST', data: data, isBinary: isBinary });
  var self = this;
  req.on('success', fn);
  req.on('error', function (err) {
    self.onError('xhr post error', err);
  });
  this.sendXhr = req;
};

/**
 * Starts a poll cycle.
 *
 * @api private
 */

XHR.prototype.doPoll = function () {
  debug('xhr poll');
  var req = this.request();
  var self = this;
  req.on('data', function (data) {
    self.onData(data);
  });
  req.on('error', function (err) {
    self.onError('xhr poll error', err);
  });
  this.pollXhr = req;
};

/**
 * Request constructor
 *
 * @param {Object} options
 * @api public
 */

function Request (opts) {
  this.method = opts.method || 'GET';
  this.uri = opts.uri;
  this.xd = !!opts.xd;
  this.xs = !!opts.xs;
  this.async = false !== opts.async;
  this.data = undefined !== opts.data ? opts.data : null;
  this.agent = opts.agent;
  this.isBinary = opts.isBinary;
  this.supportsBinary = opts.supportsBinary;
  this.enablesXDR = opts.enablesXDR;
  this.withCredentials = opts.withCredentials;
  this.requestTimeout = opts.requestTimeout;

  // SSL options for Node.js client
  this.pfx = opts.pfx;
  this.key = opts.key;
  this.passphrase = opts.passphrase;
  this.cert = opts.cert;
  this.ca = opts.ca;
  this.ciphers = opts.ciphers;
  this.rejectUnauthorized = opts.rejectUnauthorized;

  // other options for Node.js client
  this.extraHeaders = opts.extraHeaders;

  this.create();
}

/**
 * Mix in `Emitter`.
 */

Emitter(Request.prototype);

/**
 * Creates the XHR object and sends the request.
 *
 * @api private
 */

Request.prototype.create = function () {
  var opts = { agent: this.agent, xdomain: this.xd, xscheme: this.xs, enablesXDR: this.enablesXDR };

  // SSL options for Node.js client
  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;

  var xhr = this.xhr = new XMLHttpRequest(opts);
  var self = this;

  try {
    debug('xhr open %s: %s', this.method, this.uri);
    xhr.open(this.method, this.uri, this.async);
    try {
      if (this.extraHeaders) {
        xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
        for (var i in this.extraHeaders) {
          if (this.extraHeaders.hasOwnProperty(i)) {
            xhr.setRequestHeader(i, this.extraHeaders[i]);
          }
        }
      }
    } catch (e) {}

    if ('POST' === this.method) {
      try {
        if (this.isBinary) {
          xhr.setRequestHeader('Content-type', 'application/octet-stream');
        } else {
          xhr.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
        }
      } catch (e) {}
    }

    try {
      xhr.setRequestHeader('Accept', '*/*');
    } catch (e) {}

    // ie6 check
    if ('withCredentials' in xhr) {
      xhr.withCredentials = this.withCredentials;
    }

    if (this.requestTimeout) {
      xhr.timeout = this.requestTimeout;
    }

    if (this.hasXDR()) {
      xhr.onload = function () {
        self.onLoad();
      };
      xhr.onerror = function () {
        self.onError(xhr.responseText);
      };
    } else {
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 2) {
          try {
            var contentType = xhr.getResponseHeader('Content-Type');
            if (self.supportsBinary && contentType === 'application/octet-stream' || contentType === 'application/octet-stream; charset=UTF-8') {
              xhr.responseType = 'arraybuffer';
            }
          } catch (e) {}
        }
        if (4 !== xhr.readyState) return;
        if (200 === xhr.status || 1223 === xhr.status) {
          self.onLoad();
        } else {
          // make sure the `error` event handler that's user-set
          // does not throw in the same tick and gets caught here
          setTimeout(function () {
            self.onError(typeof xhr.status === 'number' ? xhr.status : 0);
          }, 0);
        }
      };
    }

    debug('xhr data %s', this.data);
    xhr.send(this.data);
  } catch (e) {
    // Need to defer since .create() is called directly fhrom the constructor
    // and thus the 'error' event can only be only bound *after* this exception
    // occurs.  Therefore, also, we cannot throw here at all.
    setTimeout(function () {
      self.onError(e);
    }, 0);
    return;
  }

  if (typeof document !== 'undefined') {
    this.index = Request.requestsCount++;
    Request.requests[this.index] = this;
  }
};

/**
 * Called upon successful response.
 *
 * @api private
 */

Request.prototype.onSuccess = function () {
  this.emit('success');
  this.cleanup();
};

/**
 * Called if we have data.
 *
 * @api private
 */

Request.prototype.onData = function (data) {
  this.emit('data', data);
  this.onSuccess();
};

/**
 * Called upon error.
 *
 * @api private
 */

Request.prototype.onError = function (err) {
  this.emit('error', err);
  this.cleanup(true);
};

/**
 * Cleans up house.
 *
 * @api private
 */

Request.prototype.cleanup = function (fromError) {
  if ('undefined' === typeof this.xhr || null === this.xhr) {
    return;
  }
  // xmlhttprequest
  if (this.hasXDR()) {
    this.xhr.onload = this.xhr.onerror = empty;
  } else {
    this.xhr.onreadystatechange = empty;
  }

  if (fromError) {
    try {
      this.xhr.abort();
    } catch (e) {}
  }

  if (typeof document !== 'undefined') {
    delete Request.requests[this.index];
  }

  this.xhr = null;
};

/**
 * Called upon load.
 *
 * @api private
 */

Request.prototype.onLoad = function () {
  var data;
  try {
    var contentType;
    try {
      contentType = this.xhr.getResponseHeader('Content-Type');
    } catch (e) {}
    if (contentType === 'application/octet-stream' || contentType === 'application/octet-stream; charset=UTF-8') {
      data = this.xhr.response || this.xhr.responseText;
    } else {
      data = this.xhr.responseText;
    }
  } catch (e) {
    this.onError(e);
  }
  if (null != data) {
    this.onData(data);
  }
};

/**
 * Check if it has XDomainRequest.
 *
 * @api private
 */

Request.prototype.hasXDR = function () {
  return typeof XDomainRequest !== 'undefined' && !this.xs && this.enablesXDR;
};

/**
 * Aborts the request.
 *
 * @api public
 */

Request.prototype.abort = function () {
  this.cleanup();
};

/**
 * Aborts pending requests when unloading the window. This is needed to prevent
 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
 * emitted.
 */

Request.requestsCount = 0;
Request.requests = {};

if (typeof document !== 'undefined') {
  if (typeof attachEvent === 'function') {
    attachEvent('onunload', unloadHandler);
  } else if (typeof addEventListener === 'function') {
    var terminationEvent = 'onpagehide' in globalThis ? 'pagehide' : 'unload';
    addEventListener(terminationEvent, unloadHandler, false);
  }
}

function unloadHandler () {
  for (var i in Request.requests) {
    if (Request.requests.hasOwnProperty(i)) {
      Request.requests[i].abort();
    }
  }
}

},{"xmlhttprequest-ssl":"node_modules/engine.io-client/lib/xmlhttprequest.js","./polling":"node_modules/engine.io-client/lib/transports/polling.js","component-emitter":"node_modules/engine.io-client/node_modules/component-emitter/index.js","component-inherit":"node_modules/component-inherit/index.js","debug":"node_modules/engine.io-client/node_modules/debug/src/browser.js","../globalThis":"node_modules/engine.io-client/lib/globalThis.browser.js"}],"node_modules/engine.io-client/lib/transports/polling-jsonp.js":[function(require,module,exports) {
/**
 * Module requirements.
 */

var Polling = require('./polling');
var inherit = require('component-inherit');
var globalThis = require('../globalThis');

/**
 * Module exports.
 */

module.exports = JSONPPolling;

/**
 * Cached regular expressions.
 */

var rNewline = /\n/g;
var rEscapedNewline = /\\n/g;

/**
 * Global JSONP callbacks.
 */

var callbacks;

/**
 * Noop.
 */

function empty () { }

/**
 * JSONP Polling constructor.
 *
 * @param {Object} opts.
 * @api public
 */

function JSONPPolling (opts) {
  Polling.call(this, opts);

  this.query = this.query || {};

  // define global callbacks array if not present
  // we do this here (lazily) to avoid unneeded global pollution
  if (!callbacks) {
    // we need to consider multiple engines in the same page
    callbacks = globalThis.___eio = (globalThis.___eio || []);
  }

  // callback identifier
  this.index = callbacks.length;

  // add callback to jsonp global
  var self = this;
  callbacks.push(function (msg) {
    self.onData(msg);
  });

  // append to query string
  this.query.j = this.index;

  // prevent spurious errors from being emitted when the window is unloaded
  if (typeof addEventListener === 'function') {
    addEventListener('beforeunload', function () {
      if (self.script) self.script.onerror = empty;
    }, false);
  }
}

/**
 * Inherits from Polling.
 */

inherit(JSONPPolling, Polling);

/*
 * JSONP only supports binary as base64 encoded strings
 */

JSONPPolling.prototype.supportsBinary = false;

/**
 * Closes the socket.
 *
 * @api private
 */

JSONPPolling.prototype.doClose = function () {
  if (this.script) {
    this.script.parentNode.removeChild(this.script);
    this.script = null;
  }

  if (this.form) {
    this.form.parentNode.removeChild(this.form);
    this.form = null;
    this.iframe = null;
  }

  Polling.prototype.doClose.call(this);
};

/**
 * Starts a poll cycle.
 *
 * @api private
 */

JSONPPolling.prototype.doPoll = function () {
  var self = this;
  var script = document.createElement('script');

  if (this.script) {
    this.script.parentNode.removeChild(this.script);
    this.script = null;
  }

  script.async = true;
  script.src = this.uri();
  script.onerror = function (e) {
    self.onError('jsonp poll error', e);
  };

  var insertAt = document.getElementsByTagName('script')[0];
  if (insertAt) {
    insertAt.parentNode.insertBefore(script, insertAt);
  } else {
    (document.head || document.body).appendChild(script);
  }
  this.script = script;

  var isUAgecko = 'undefined' !== typeof navigator && /gecko/i.test(navigator.userAgent);

  if (isUAgecko) {
    setTimeout(function () {
      var iframe = document.createElement('iframe');
      document.body.appendChild(iframe);
      document.body.removeChild(iframe);
    }, 100);
  }
};

/**
 * Writes with a hidden iframe.
 *
 * @param {String} data to send
 * @param {Function} called upon flush.
 * @api private
 */

JSONPPolling.prototype.doWrite = function (data, fn) {
  var self = this;

  if (!this.form) {
    var form = document.createElement('form');
    var area = document.createElement('textarea');
    var id = this.iframeId = 'eio_iframe_' + this.index;
    var iframe;

    form.className = 'socketio';
    form.style.position = 'absolute';
    form.style.top = '-1000px';
    form.style.left = '-1000px';
    form.target = id;
    form.method = 'POST';
    form.setAttribute('accept-charset', 'utf-8');
    area.name = 'd';
    form.appendChild(area);
    document.body.appendChild(form);

    this.form = form;
    this.area = area;
  }

  this.form.action = this.uri();

  function complete () {
    initIframe();
    fn();
  }

  function initIframe () {
    if (self.iframe) {
      try {
        self.form.removeChild(self.iframe);
      } catch (e) {
        self.onError('jsonp polling iframe removal error', e);
      }
    }

    try {
      // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
      var html = '<iframe src="javascript:0" name="' + self.iframeId + '">';
      iframe = document.createElement(html);
    } catch (e) {
      iframe = document.createElement('iframe');
      iframe.name = self.iframeId;
      iframe.src = 'javascript:0';
    }

    iframe.id = self.iframeId;

    self.form.appendChild(iframe);
    self.iframe = iframe;
  }

  initIframe();

  // escape \n to prevent it from being converted into \r\n by some UAs
  // double escaping is required for escaped new lines because unescaping of new lines can be done safely on server-side
  data = data.replace(rEscapedNewline, '\\\n');
  this.area.value = data.replace(rNewline, '\\n');

  try {
    this.form.submit();
  } catch (e) {}

  if (this.iframe.attachEvent) {
    this.iframe.onreadystatechange = function () {
      if (self.iframe.readyState === 'complete') {
        complete();
      }
    };
  } else {
    this.iframe.onload = complete;
  }
};

},{"./polling":"node_modules/engine.io-client/lib/transports/polling.js","component-inherit":"node_modules/component-inherit/index.js","../globalThis":"node_modules/engine.io-client/lib/globalThis.browser.js"}],"node_modules/parcel-bundler/src/builtins/_empty.js":[function(require,module,exports) {

},{}],"node_modules/engine.io-client/lib/transports/websocket.js":[function(require,module,exports) {
var Buffer = require("buffer").Buffer;
/**
 * Module dependencies.
 */

var Transport = require('../transport');
var parser = require('engine.io-parser');
var parseqs = require('parseqs');
var inherit = require('component-inherit');
var yeast = require('yeast');
var debug = require('debug')('engine.io-client:websocket');

var BrowserWebSocket, NodeWebSocket;

if (typeof WebSocket !== 'undefined') {
  BrowserWebSocket = WebSocket;
} else if (typeof self !== 'undefined') {
  BrowserWebSocket = self.WebSocket || self.MozWebSocket;
}

if (typeof window === 'undefined') {
  try {
    NodeWebSocket = require('ws');
  } catch (e) { }
}

/**
 * Get either the `WebSocket` or `MozWebSocket` globals
 * in the browser or try to resolve WebSocket-compatible
 * interface exposed by `ws` for Node-like environment.
 */

var WebSocketImpl = BrowserWebSocket || NodeWebSocket;

/**
 * Module exports.
 */

module.exports = WS;

/**
 * WebSocket transport constructor.
 *
 * @api {Object} connection options
 * @api public
 */

function WS (opts) {
  var forceBase64 = (opts && opts.forceBase64);
  if (forceBase64) {
    this.supportsBinary = false;
  }
  this.perMessageDeflate = opts.perMessageDeflate;
  this.usingBrowserWebSocket = BrowserWebSocket && !opts.forceNode;
  this.protocols = opts.protocols;
  if (!this.usingBrowserWebSocket) {
    WebSocketImpl = NodeWebSocket;
  }
  Transport.call(this, opts);
}

/**
 * Inherits from Transport.
 */

inherit(WS, Transport);

/**
 * Transport name.
 *
 * @api public
 */

WS.prototype.name = 'websocket';

/*
 * WebSockets support binary
 */

WS.prototype.supportsBinary = true;

/**
 * Opens socket.
 *
 * @api private
 */

WS.prototype.doOpen = function () {
  if (!this.check()) {
    // let probe timeout
    return;
  }

  var uri = this.uri();
  var protocols = this.protocols;

  var opts = {};

  if (!this.isReactNative) {
    opts.agent = this.agent;
    opts.perMessageDeflate = this.perMessageDeflate;

    // SSL options for Node.js client
    opts.pfx = this.pfx;
    opts.key = this.key;
    opts.passphrase = this.passphrase;
    opts.cert = this.cert;
    opts.ca = this.ca;
    opts.ciphers = this.ciphers;
    opts.rejectUnauthorized = this.rejectUnauthorized;
  }

  if (this.extraHeaders) {
    opts.headers = this.extraHeaders;
  }
  if (this.localAddress) {
    opts.localAddress = this.localAddress;
  }

  try {
    this.ws =
      this.usingBrowserWebSocket && !this.isReactNative
        ? protocols
          ? new WebSocketImpl(uri, protocols)
          : new WebSocketImpl(uri)
        : new WebSocketImpl(uri, protocols, opts);
  } catch (err) {
    return this.emit('error', err);
  }

  if (this.ws.binaryType === undefined) {
    this.supportsBinary = false;
  }

  if (this.ws.supports && this.ws.supports.binary) {
    this.supportsBinary = true;
    this.ws.binaryType = 'nodebuffer';
  } else {
    this.ws.binaryType = 'arraybuffer';
  }

  this.addEventListeners();
};

/**
 * Adds event listeners to the socket
 *
 * @api private
 */

WS.prototype.addEventListeners = function () {
  var self = this;

  this.ws.onopen = function () {
    self.onOpen();
  };
  this.ws.onclose = function () {
    self.onClose();
  };
  this.ws.onmessage = function (ev) {
    self.onData(ev.data);
  };
  this.ws.onerror = function (e) {
    self.onError('websocket error', e);
  };
};

/**
 * Writes data to socket.
 *
 * @param {Array} array of packets.
 * @api private
 */

WS.prototype.write = function (packets) {
  var self = this;
  this.writable = false;

  // encodePacket efficient as it uses WS framing
  // no need for encodePayload
  var total = packets.length;
  for (var i = 0, l = total; i < l; i++) {
    (function (packet) {
      parser.encodePacket(packet, self.supportsBinary, function (data) {
        if (!self.usingBrowserWebSocket) {
          // always create a new object (GH-437)
          var opts = {};
          if (packet.options) {
            opts.compress = packet.options.compress;
          }

          if (self.perMessageDeflate) {
            var len = 'string' === typeof data ? Buffer.byteLength(data) : data.length;
            if (len < self.perMessageDeflate.threshold) {
              opts.compress = false;
            }
          }
        }

        // Sometimes the websocket has already been closed but the browser didn't
        // have a chance of informing us about it yet, in that case send will
        // throw an error
        try {
          if (self.usingBrowserWebSocket) {
            // TypeError is thrown when passing the second argument on Safari
            self.ws.send(data);
          } else {
            self.ws.send(data, opts);
          }
        } catch (e) {
          debug('websocket closed before onclose event');
        }

        --total || done();
      });
    })(packets[i]);
  }

  function done () {
    self.emit('flush');

    // fake drain
    // defer to next tick to allow Socket to clear writeBuffer
    setTimeout(function () {
      self.writable = true;
      self.emit('drain');
    }, 0);
  }
};

/**
 * Called upon close
 *
 * @api private
 */

WS.prototype.onClose = function () {
  Transport.prototype.onClose.call(this);
};

/**
 * Closes socket.
 *
 * @api private
 */

WS.prototype.doClose = function () {
  if (typeof this.ws !== 'undefined') {
    this.ws.close();
  }
};

/**
 * Generates uri for connection.
 *
 * @api private
 */

WS.prototype.uri = function () {
  var query = this.query || {};
  var schema = this.secure ? 'wss' : 'ws';
  var port = '';

  // avoid port if default for schema
  if (this.port && (('wss' === schema && Number(this.port) !== 443) ||
    ('ws' === schema && Number(this.port) !== 80))) {
    port = ':' + this.port;
  }

  // append timestamp to URI
  if (this.timestampRequests) {
    query[this.timestampParam] = yeast();
  }

  // communicate binary support capabilities
  if (!this.supportsBinary) {
    query.b64 = 1;
  }

  query = parseqs.encode(query);

  // prepend ? to query
  if (query.length) {
    query = '?' + query;
  }

  var ipv6 = this.hostname.indexOf(':') !== -1;
  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
};

/**
 * Feature detection for WebSocket.
 *
 * @return {Boolean} whether this transport is available.
 * @api public
 */

WS.prototype.check = function () {
  return !!WebSocketImpl && !('__initialize' in WebSocketImpl && this.name === WS.prototype.name);
};

},{"../transport":"node_modules/engine.io-client/lib/transport.js","engine.io-parser":"node_modules/engine.io-parser/lib/browser.js","parseqs":"node_modules/engine.io-client/node_modules/parseqs/index.js","component-inherit":"node_modules/component-inherit/index.js","yeast":"node_modules/yeast/index.js","debug":"node_modules/engine.io-client/node_modules/debug/src/browser.js","ws":"node_modules/parcel-bundler/src/builtins/_empty.js","buffer":"node_modules/buffer/index.js"}],"node_modules/engine.io-client/lib/transports/index.js":[function(require,module,exports) {
/**
 * Module dependencies
 */

var XMLHttpRequest = require('xmlhttprequest-ssl');
var XHR = require('./polling-xhr');
var JSONP = require('./polling-jsonp');
var websocket = require('./websocket');

/**
 * Export transports.
 */

exports.polling = polling;
exports.websocket = websocket;

/**
 * Polling transport polymorphic constructor.
 * Decides on xhr vs jsonp based on feature detection.
 *
 * @api private
 */

function polling (opts) {
  var xhr;
  var xd = false;
  var xs = false;
  var jsonp = false !== opts.jsonp;

  if (typeof location !== 'undefined') {
    var isSSL = 'https:' === location.protocol;
    var port = location.port;

    // some user agents have empty `location.port`
    if (!port) {
      port = isSSL ? 443 : 80;
    }

    xd = opts.hostname !== location.hostname || port !== opts.port;
    xs = opts.secure !== isSSL;
  }

  opts.xdomain = xd;
  opts.xscheme = xs;
  xhr = new XMLHttpRequest(opts);

  if ('open' in xhr && !opts.forceJSONP) {
    return new XHR(opts);
  } else {
    if (!jsonp) throw new Error('JSONP disabled');
    return new JSONP(opts);
  }
}

},{"xmlhttprequest-ssl":"node_modules/engine.io-client/lib/xmlhttprequest.js","./polling-xhr":"node_modules/engine.io-client/lib/transports/polling-xhr.js","./polling-jsonp":"node_modules/engine.io-client/lib/transports/polling-jsonp.js","./websocket":"node_modules/engine.io-client/lib/transports/websocket.js"}],"node_modules/indexof/index.js":[function(require,module,exports) {

var indexOf = [].indexOf;

module.exports = function(arr, obj){
  if (indexOf) return arr.indexOf(obj);
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }
  return -1;
};
},{}],"node_modules/engine.io-client/node_modules/parseuri/index.js":[function(require,module,exports) {
/**
 * Parses an URI
 *
 * @author Steven Levithan <stevenlevithan.com> (MIT license)
 * @api private
 */

var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;

var parts = [
    'source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'
];

module.exports = function parseuri(str) {
    var src = str,
        b = str.indexOf('['),
        e = str.indexOf(']');

    if (b != -1 && e != -1) {
        str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
    }

    var m = re.exec(str || ''),
        uri = {},
        i = 14;

    while (i--) {
        uri[parts[i]] = m[i] || '';
    }

    if (b != -1 && e != -1) {
        uri.source = src;
        uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
        uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
        uri.ipv6uri = true;
    }

    uri.pathNames = pathNames(uri, uri['path']);
    uri.queryKey = queryKey(uri, uri['query']);

    return uri;
};

function pathNames(obj, path) {
    var regx = /\/{2,9}/g,
        names = path.replace(regx, "/").split("/");

    if (path.substr(0, 1) == '/' || path.length === 0) {
        names.splice(0, 1);
    }
    if (path.substr(path.length - 1, 1) == '/') {
        names.splice(names.length - 1, 1);
    }

    return names;
}

function queryKey(uri, query) {
    var data = {};

    query.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function ($0, $1, $2) {
        if ($1) {
            data[$1] = $2;
        }
    });

    return data;
}

},{}],"node_modules/engine.io-client/lib/socket.js":[function(require,module,exports) {
/**
 * Module dependencies.
 */

var transports = require('./transports/index');
var Emitter = require('component-emitter');
var debug = require('debug')('engine.io-client:socket');
var index = require('indexof');
var parser = require('engine.io-parser');
var parseuri = require('parseuri');
var parseqs = require('parseqs');

/**
 * Module exports.
 */

module.exports = Socket;

/**
 * Socket constructor.
 *
 * @param {String|Object} uri or options
 * @param {Object} options
 * @api public
 */

function Socket (uri, opts) {
  if (!(this instanceof Socket)) return new Socket(uri, opts);

  opts = opts || {};

  if (uri && 'object' === typeof uri) {
    opts = uri;
    uri = null;
  }

  if (uri) {
    uri = parseuri(uri);
    opts.hostname = uri.host;
    opts.secure = uri.protocol === 'https' || uri.protocol === 'wss';
    opts.port = uri.port;
    if (uri.query) opts.query = uri.query;
  } else if (opts.host) {
    opts.hostname = parseuri(opts.host).host;
  }

  this.secure = null != opts.secure ? opts.secure
    : (typeof location !== 'undefined' && 'https:' === location.protocol);

  if (opts.hostname && !opts.port) {
    // if no port is specified manually, use the protocol default
    opts.port = this.secure ? '443' : '80';
  }

  this.agent = opts.agent || false;
  this.hostname = opts.hostname ||
    (typeof location !== 'undefined' ? location.hostname : 'localhost');
  this.port = opts.port || (typeof location !== 'undefined' && location.port
      ? location.port
      : (this.secure ? 443 : 80));
  this.query = opts.query || {};
  if ('string' === typeof this.query) this.query = parseqs.decode(this.query);
  this.upgrade = false !== opts.upgrade;
  this.path = (opts.path || '/engine.io').replace(/\/$/, '') + '/';
  this.forceJSONP = !!opts.forceJSONP;
  this.jsonp = false !== opts.jsonp;
  this.forceBase64 = !!opts.forceBase64;
  this.enablesXDR = !!opts.enablesXDR;
  this.withCredentials = false !== opts.withCredentials;
  this.timestampParam = opts.timestampParam || 't';
  this.timestampRequests = opts.timestampRequests;
  this.transports = opts.transports || ['polling', 'websocket'];
  this.transportOptions = opts.transportOptions || {};
  this.readyState = '';
  this.writeBuffer = [];
  this.prevBufferLen = 0;
  this.policyPort = opts.policyPort || 843;
  this.rememberUpgrade = opts.rememberUpgrade || false;
  this.binaryType = null;
  this.onlyBinaryUpgrades = opts.onlyBinaryUpgrades;
  this.perMessageDeflate = false !== opts.perMessageDeflate ? (opts.perMessageDeflate || {}) : false;

  if (true === this.perMessageDeflate) this.perMessageDeflate = {};
  if (this.perMessageDeflate && null == this.perMessageDeflate.threshold) {
    this.perMessageDeflate.threshold = 1024;
  }

  // SSL options for Node.js client
  this.pfx = opts.pfx || null;
  this.key = opts.key || null;
  this.passphrase = opts.passphrase || null;
  this.cert = opts.cert || null;
  this.ca = opts.ca || null;
  this.ciphers = opts.ciphers || null;
  this.rejectUnauthorized = opts.rejectUnauthorized === undefined ? true : opts.rejectUnauthorized;
  this.forceNode = !!opts.forceNode;

  // detect ReactNative environment
  this.isReactNative = (typeof navigator !== 'undefined' && typeof navigator.product === 'string' && navigator.product.toLowerCase() === 'reactnative');

  // other options for Node.js or ReactNative client
  if (typeof self === 'undefined' || this.isReactNative) {
    if (opts.extraHeaders && Object.keys(opts.extraHeaders).length > 0) {
      this.extraHeaders = opts.extraHeaders;
    }

    if (opts.localAddress) {
      this.localAddress = opts.localAddress;
    }
  }

  // set on handshake
  this.id = null;
  this.upgrades = null;
  this.pingInterval = null;
  this.pingTimeout = null;

  // set on heartbeat
  this.pingIntervalTimer = null;
  this.pingTimeoutTimer = null;

  this.open();
}

Socket.priorWebsocketSuccess = false;

/**
 * Mix in `Emitter`.
 */

Emitter(Socket.prototype);

/**
 * Protocol version.
 *
 * @api public
 */

Socket.protocol = parser.protocol; // this is an int

/**
 * Expose deps for legacy compatibility
 * and standalone browser access.
 */

Socket.Socket = Socket;
Socket.Transport = require('./transport');
Socket.transports = require('./transports/index');
Socket.parser = require('engine.io-parser');

/**
 * Creates transport of the given type.
 *
 * @param {String} transport name
 * @return {Transport}
 * @api private
 */

Socket.prototype.createTransport = function (name) {
  debug('creating transport "%s"', name);
  var query = clone(this.query);

  // append engine.io protocol identifier
  query.EIO = parser.protocol;

  // transport name
  query.transport = name;

  // per-transport options
  var options = this.transportOptions[name] || {};

  // session id if we already have one
  if (this.id) query.sid = this.id;

  var transport = new transports[name]({
    query: query,
    socket: this,
    agent: options.agent || this.agent,
    hostname: options.hostname || this.hostname,
    port: options.port || this.port,
    secure: options.secure || this.secure,
    path: options.path || this.path,
    forceJSONP: options.forceJSONP || this.forceJSONP,
    jsonp: options.jsonp || this.jsonp,
    forceBase64: options.forceBase64 || this.forceBase64,
    enablesXDR: options.enablesXDR || this.enablesXDR,
    withCredentials: options.withCredentials || this.withCredentials,
    timestampRequests: options.timestampRequests || this.timestampRequests,
    timestampParam: options.timestampParam || this.timestampParam,
    policyPort: options.policyPort || this.policyPort,
    pfx: options.pfx || this.pfx,
    key: options.key || this.key,
    passphrase: options.passphrase || this.passphrase,
    cert: options.cert || this.cert,
    ca: options.ca || this.ca,
    ciphers: options.ciphers || this.ciphers,
    rejectUnauthorized: options.rejectUnauthorized || this.rejectUnauthorized,
    perMessageDeflate: options.perMessageDeflate || this.perMessageDeflate,
    extraHeaders: options.extraHeaders || this.extraHeaders,
    forceNode: options.forceNode || this.forceNode,
    localAddress: options.localAddress || this.localAddress,
    requestTimeout: options.requestTimeout || this.requestTimeout,
    protocols: options.protocols || void (0),
    isReactNative: this.isReactNative
  });

  return transport;
};

function clone (obj) {
  var o = {};
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = obj[i];
    }
  }
  return o;
}

/**
 * Initializes transport to use and starts probe.
 *
 * @api private
 */
Socket.prototype.open = function () {
  var transport;
  if (this.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf('websocket') !== -1) {
    transport = 'websocket';
  } else if (0 === this.transports.length) {
    // Emit error on next tick so it can be listened to
    var self = this;
    setTimeout(function () {
      self.emit('error', 'No transports available');
    }, 0);
    return;
  } else {
    transport = this.transports[0];
  }
  this.readyState = 'opening';

  // Retry with the next transport if the transport is disabled (jsonp: false)
  try {
    transport = this.createTransport(transport);
  } catch (e) {
    this.transports.shift();
    this.open();
    return;
  }

  transport.open();
  this.setTransport(transport);
};

/**
 * Sets the current transport. Disables the existing one (if any).
 *
 * @api private
 */

Socket.prototype.setTransport = function (transport) {
  debug('setting transport %s', transport.name);
  var self = this;

  if (this.transport) {
    debug('clearing existing transport %s', this.transport.name);
    this.transport.removeAllListeners();
  }

  // set up transport
  this.transport = transport;

  // set up transport listeners
  transport
  .on('drain', function () {
    self.onDrain();
  })
  .on('packet', function (packet) {
    self.onPacket(packet);
  })
  .on('error', function (e) {
    self.onError(e);
  })
  .on('close', function () {
    self.onClose('transport close');
  });
};

/**
 * Probes a transport.
 *
 * @param {String} transport name
 * @api private
 */

Socket.prototype.probe = function (name) {
  debug('probing transport "%s"', name);
  var transport = this.createTransport(name, { probe: 1 });
  var failed = false;
  var self = this;

  Socket.priorWebsocketSuccess = false;

  function onTransportOpen () {
    if (self.onlyBinaryUpgrades) {
      var upgradeLosesBinary = !this.supportsBinary && self.transport.supportsBinary;
      failed = failed || upgradeLosesBinary;
    }
    if (failed) return;

    debug('probe transport "%s" opened', name);
    transport.send([{ type: 'ping', data: 'probe' }]);
    transport.once('packet', function (msg) {
      if (failed) return;
      if ('pong' === msg.type && 'probe' === msg.data) {
        debug('probe transport "%s" pong', name);
        self.upgrading = true;
        self.emit('upgrading', transport);
        if (!transport) return;
        Socket.priorWebsocketSuccess = 'websocket' === transport.name;

        debug('pausing current transport "%s"', self.transport.name);
        self.transport.pause(function () {
          if (failed) return;
          if ('closed' === self.readyState) return;
          debug('changing transport and sending upgrade packet');

          cleanup();

          self.setTransport(transport);
          transport.send([{ type: 'upgrade' }]);
          self.emit('upgrade', transport);
          transport = null;
          self.upgrading = false;
          self.flush();
        });
      } else {
        debug('probe transport "%s" failed', name);
        var err = new Error('probe error');
        err.transport = transport.name;
        self.emit('upgradeError', err);
      }
    });
  }

  function freezeTransport () {
    if (failed) return;

    // Any callback called by transport should be ignored since now
    failed = true;

    cleanup();

    transport.close();
    transport = null;
  }

  // Handle any error that happens while probing
  function onerror (err) {
    var error = new Error('probe error: ' + err);
    error.transport = transport.name;

    freezeTransport();

    debug('probe transport "%s" failed because of error: %s', name, err);

    self.emit('upgradeError', error);
  }

  function onTransportClose () {
    onerror('transport closed');
  }

  // When the socket is closed while we're probing
  function onclose () {
    onerror('socket closed');
  }

  // When the socket is upgraded while we're probing
  function onupgrade (to) {
    if (transport && to.name !== transport.name) {
      debug('"%s" works - aborting "%s"', to.name, transport.name);
      freezeTransport();
    }
  }

  // Remove all listeners on the transport and on self
  function cleanup () {
    transport.removeListener('open', onTransportOpen);
    transport.removeListener('error', onerror);
    transport.removeListener('close', onTransportClose);
    self.removeListener('close', onclose);
    self.removeListener('upgrading', onupgrade);
  }

  transport.once('open', onTransportOpen);
  transport.once('error', onerror);
  transport.once('close', onTransportClose);

  this.once('close', onclose);
  this.once('upgrading', onupgrade);

  transport.open();
};

/**
 * Called when connection is deemed open.
 *
 * @api public
 */

Socket.prototype.onOpen = function () {
  debug('socket open');
  this.readyState = 'open';
  Socket.priorWebsocketSuccess = 'websocket' === this.transport.name;
  this.emit('open');
  this.flush();

  // we check for `readyState` in case an `open`
  // listener already closed the socket
  if ('open' === this.readyState && this.upgrade && this.transport.pause) {
    debug('starting upgrade probes');
    for (var i = 0, l = this.upgrades.length; i < l; i++) {
      this.probe(this.upgrades[i]);
    }
  }
};

/**
 * Handles a packet.
 *
 * @api private
 */

Socket.prototype.onPacket = function (packet) {
  if ('opening' === this.readyState || 'open' === this.readyState ||
      'closing' === this.readyState) {
    debug('socket receive: type "%s", data "%s"', packet.type, packet.data);

    this.emit('packet', packet);

    // Socket is live - any packet counts
    this.emit('heartbeat');

    switch (packet.type) {
      case 'open':
        this.onHandshake(JSON.parse(packet.data));
        break;

      case 'pong':
        this.setPing();
        this.emit('pong');
        break;

      case 'error':
        var err = new Error('server error');
        err.code = packet.data;
        this.onError(err);
        break;

      case 'message':
        this.emit('data', packet.data);
        this.emit('message', packet.data);
        break;
    }
  } else {
    debug('packet received with socket readyState "%s"', this.readyState);
  }
};

/**
 * Called upon handshake completion.
 *
 * @param {Object} handshake obj
 * @api private
 */

Socket.prototype.onHandshake = function (data) {
  this.emit('handshake', data);
  this.id = data.sid;
  this.transport.query.sid = data.sid;
  this.upgrades = this.filterUpgrades(data.upgrades);
  this.pingInterval = data.pingInterval;
  this.pingTimeout = data.pingTimeout;
  this.onOpen();
  // In case open handler closes socket
  if ('closed' === this.readyState) return;
  this.setPing();

  // Prolong liveness of socket on heartbeat
  this.removeListener('heartbeat', this.onHeartbeat);
  this.on('heartbeat', this.onHeartbeat);
};

/**
 * Resets ping timeout.
 *
 * @api private
 */

Socket.prototype.onHeartbeat = function (timeout) {
  clearTimeout(this.pingTimeoutTimer);
  var self = this;
  self.pingTimeoutTimer = setTimeout(function () {
    if ('closed' === self.readyState) return;
    self.onClose('ping timeout');
  }, timeout || (self.pingInterval + self.pingTimeout));
};

/**
 * Pings server every `this.pingInterval` and expects response
 * within `this.pingTimeout` or closes connection.
 *
 * @api private
 */

Socket.prototype.setPing = function () {
  var self = this;
  clearTimeout(self.pingIntervalTimer);
  self.pingIntervalTimer = setTimeout(function () {
    debug('writing ping packet - expecting pong within %sms', self.pingTimeout);
    self.ping();
    self.onHeartbeat(self.pingTimeout);
  }, self.pingInterval);
};

/**
* Sends a ping packet.
*
* @api private
*/

Socket.prototype.ping = function () {
  var self = this;
  this.sendPacket('ping', function () {
    self.emit('ping');
  });
};

/**
 * Called on `drain` event
 *
 * @api private
 */

Socket.prototype.onDrain = function () {
  this.writeBuffer.splice(0, this.prevBufferLen);

  // setting prevBufferLen = 0 is very important
  // for example, when upgrading, upgrade packet is sent over,
  // and a nonzero prevBufferLen could cause problems on `drain`
  this.prevBufferLen = 0;

  if (0 === this.writeBuffer.length) {
    this.emit('drain');
  } else {
    this.flush();
  }
};

/**
 * Flush write buffers.
 *
 * @api private
 */

Socket.prototype.flush = function () {
  if ('closed' !== this.readyState && this.transport.writable &&
    !this.upgrading && this.writeBuffer.length) {
    debug('flushing %d packets in socket', this.writeBuffer.length);
    this.transport.send(this.writeBuffer);
    // keep track of current length of writeBuffer
    // splice writeBuffer and callbackBuffer on `drain`
    this.prevBufferLen = this.writeBuffer.length;
    this.emit('flush');
  }
};

/**
 * Sends a message.
 *
 * @param {String} message.
 * @param {Function} callback function.
 * @param {Object} options.
 * @return {Socket} for chaining.
 * @api public
 */

Socket.prototype.write =
Socket.prototype.send = function (msg, options, fn) {
  this.sendPacket('message', msg, options, fn);
  return this;
};

/**
 * Sends a packet.
 *
 * @param {String} packet type.
 * @param {String} data.
 * @param {Object} options.
 * @param {Function} callback function.
 * @api private
 */

Socket.prototype.sendPacket = function (type, data, options, fn) {
  if ('function' === typeof data) {
    fn = data;
    data = undefined;
  }

  if ('function' === typeof options) {
    fn = options;
    options = null;
  }

  if ('closing' === this.readyState || 'closed' === this.readyState) {
    return;
  }

  options = options || {};
  options.compress = false !== options.compress;

  var packet = {
    type: type,
    data: data,
    options: options
  };
  this.emit('packetCreate', packet);
  this.writeBuffer.push(packet);
  if (fn) this.once('flush', fn);
  this.flush();
};

/**
 * Closes the connection.
 *
 * @api private
 */

Socket.prototype.close = function () {
  if ('opening' === this.readyState || 'open' === this.readyState) {
    this.readyState = 'closing';

    var self = this;

    if (this.writeBuffer.length) {
      this.once('drain', function () {
        if (this.upgrading) {
          waitForUpgrade();
        } else {
          close();
        }
      });
    } else if (this.upgrading) {
      waitForUpgrade();
    } else {
      close();
    }
  }

  function close () {
    self.onClose('forced close');
    debug('socket closing - telling transport to close');
    self.transport.close();
  }

  function cleanupAndClose () {
    self.removeListener('upgrade', cleanupAndClose);
    self.removeListener('upgradeError', cleanupAndClose);
    close();
  }

  function waitForUpgrade () {
    // wait for upgrade to finish since we can't send packets while pausing a transport
    self.once('upgrade', cleanupAndClose);
    self.once('upgradeError', cleanupAndClose);
  }

  return this;
};

/**
 * Called upon transport error
 *
 * @api private
 */

Socket.prototype.onError = function (err) {
  debug('socket error %j', err);
  Socket.priorWebsocketSuccess = false;
  this.emit('error', err);
  this.onClose('transport error', err);
};

/**
 * Called upon transport close.
 *
 * @api private
 */

Socket.prototype.onClose = function (reason, desc) {
  if ('opening' === this.readyState || 'open' === this.readyState || 'closing' === this.readyState) {
    debug('socket close with reason: "%s"', reason);
    var self = this;

    // clear timers
    clearTimeout(this.pingIntervalTimer);
    clearTimeout(this.pingTimeoutTimer);

    // stop event from firing again for transport
    this.transport.removeAllListeners('close');

    // ensure transport won't stay open
    this.transport.close();

    // ignore further transport communication
    this.transport.removeAllListeners();

    // set ready state
    this.readyState = 'closed';

    // clear session id
    this.id = null;

    // emit close event
    this.emit('close', reason, desc);

    // clean buffers after, so users can still
    // grab the buffers on `close` event
    self.writeBuffer = [];
    self.prevBufferLen = 0;
  }
};

/**
 * Filters upgrades, returning only those matching client transports.
 *
 * @param {Array} server upgrades
 * @api private
 *
 */

Socket.prototype.filterUpgrades = function (upgrades) {
  var filteredUpgrades = [];
  for (var i = 0, j = upgrades.length; i < j; i++) {
    if (~index(this.transports, upgrades[i])) filteredUpgrades.push(upgrades[i]);
  }
  return filteredUpgrades;
};

},{"./transports/index":"node_modules/engine.io-client/lib/transports/index.js","component-emitter":"node_modules/engine.io-client/node_modules/component-emitter/index.js","debug":"node_modules/engine.io-client/node_modules/debug/src/browser.js","indexof":"node_modules/indexof/index.js","engine.io-parser":"node_modules/engine.io-parser/lib/browser.js","parseuri":"node_modules/engine.io-client/node_modules/parseuri/index.js","parseqs":"node_modules/engine.io-client/node_modules/parseqs/index.js","./transport":"node_modules/engine.io-client/lib/transport.js"}],"node_modules/engine.io-client/lib/index.js":[function(require,module,exports) {

module.exports = require('./socket');

/**
 * Exports parser
 *
 * @api public
 *
 */
module.exports.parser = require('engine.io-parser');

},{"./socket":"node_modules/engine.io-client/lib/socket.js","engine.io-parser":"node_modules/engine.io-parser/lib/browser.js"}],"node_modules/component-emitter/index.js":[function(require,module,exports) {

/**
 * Expose `Emitter`.
 */

if (typeof module !== 'undefined') {
  module.exports = Emitter;
}

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1)
    , callbacks = this._callbacks['$' + event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};

},{}],"node_modules/to-array/index.js":[function(require,module,exports) {
module.exports = toArray

function toArray(list, index) {
    var array = []

    index = index || 0

    for (var i = index || 0; i < list.length; i++) {
        array[i - index] = list[i]
    }

    return array
}

},{}],"node_modules/socket.io-client/lib/on.js":[function(require,module,exports) {

/**
 * Module exports.
 */

module.exports = on;

/**
 * Helper for subscriptions.
 *
 * @param {Object|EventEmitter} obj with `Emitter` mixin or `EventEmitter`
 * @param {String} event name
 * @param {Function} callback
 * @api public
 */

function on (obj, ev, fn) {
  obj.on(ev, fn);
  return {
    destroy: function () {
      obj.removeListener(ev, fn);
    }
  };
}

},{}],"node_modules/component-bind/index.js":[function(require,module,exports) {
/**
 * Slice reference.
 */

var slice = [].slice;

/**
 * Bind `obj` to `fn`.
 *
 * @param {Object} obj
 * @param {Function|String} fn or string
 * @return {Function}
 * @api public
 */

module.exports = function(obj, fn){
  if ('string' == typeof fn) fn = obj[fn];
  if ('function' != typeof fn) throw new Error('bind() requires a function');
  var args = slice.call(arguments, 2);
  return function(){
    return fn.apply(obj, args.concat(slice.call(arguments)));
  }
};

},{}],"node_modules/parseqs/index.js":[function(require,module,exports) {
/**
 * Compiles a querystring
 * Returns string representation of the object
 *
 * @param {Object}
 * @api private
 */

exports.encode = function (obj) {
  var str = '';

  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      if (str.length) str += '&';
      str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
    }
  }

  return str;
};

/**
 * Parses a simple querystring into an object
 *
 * @param {String} qs
 * @api private
 */

exports.decode = function(qs){
  var qry = {};
  var pairs = qs.split('&');
  for (var i = 0, l = pairs.length; i < l; i++) {
    var pair = pairs[i].split('=');
    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }
  return qry;
};

},{}],"node_modules/socket.io-client/lib/socket.js":[function(require,module,exports) {

/**
 * Module dependencies.
 */

var parser = require('socket.io-parser');
var Emitter = require('component-emitter');
var toArray = require('to-array');
var on = require('./on');
var bind = require('component-bind');
var debug = require('debug')('socket.io-client:socket');
var parseqs = require('parseqs');
var hasBin = require('has-binary2');

/**
 * Module exports.
 */

module.exports = exports = Socket;

/**
 * Internal events (blacklisted).
 * These events can't be emitted by the user.
 *
 * @api private
 */

var events = {
  connect: 1,
  connect_error: 1,
  connect_timeout: 1,
  connecting: 1,
  disconnect: 1,
  error: 1,
  reconnect: 1,
  reconnect_attempt: 1,
  reconnect_failed: 1,
  reconnect_error: 1,
  reconnecting: 1,
  ping: 1,
  pong: 1
};

/**
 * Shortcut to `Emitter#emit`.
 */

var emit = Emitter.prototype.emit;

/**
 * `Socket` constructor.
 *
 * @api public
 */

function Socket (io, nsp, opts) {
  this.io = io;
  this.nsp = nsp;
  this.json = this; // compat
  this.ids = 0;
  this.acks = {};
  this.receiveBuffer = [];
  this.sendBuffer = [];
  this.connected = false;
  this.disconnected = true;
  this.flags = {};
  if (opts && opts.query) {
    this.query = opts.query;
  }
  if (this.io.autoConnect) this.open();
}

/**
 * Mix in `Emitter`.
 */

Emitter(Socket.prototype);

/**
 * Subscribe to open, close and packet events
 *
 * @api private
 */

Socket.prototype.subEvents = function () {
  if (this.subs) return;

  var io = this.io;
  this.subs = [
    on(io, 'open', bind(this, 'onopen')),
    on(io, 'packet', bind(this, 'onpacket')),
    on(io, 'close', bind(this, 'onclose'))
  ];
};

/**
 * "Opens" the socket.
 *
 * @api public
 */

Socket.prototype.open =
Socket.prototype.connect = function () {
  if (this.connected) return this;

  this.subEvents();
  this.io.open(); // ensure open
  if ('open' === this.io.readyState) this.onopen();
  this.emit('connecting');
  return this;
};

/**
 * Sends a `message` event.
 *
 * @return {Socket} self
 * @api public
 */

Socket.prototype.send = function () {
  var args = toArray(arguments);
  args.unshift('message');
  this.emit.apply(this, args);
  return this;
};

/**
 * Override `emit`.
 * If the event is in `events`, it's emitted normally.
 *
 * @param {String} event name
 * @return {Socket} self
 * @api public
 */

Socket.prototype.emit = function (ev) {
  if (events.hasOwnProperty(ev)) {
    emit.apply(this, arguments);
    return this;
  }

  var args = toArray(arguments);
  var packet = {
    type: (this.flags.binary !== undefined ? this.flags.binary : hasBin(args)) ? parser.BINARY_EVENT : parser.EVENT,
    data: args
  };

  packet.options = {};
  packet.options.compress = !this.flags || false !== this.flags.compress;

  // event ack callback
  if ('function' === typeof args[args.length - 1]) {
    debug('emitting packet with ack id %d', this.ids);
    this.acks[this.ids] = args.pop();
    packet.id = this.ids++;
  }

  if (this.connected) {
    this.packet(packet);
  } else {
    this.sendBuffer.push(packet);
  }

  this.flags = {};

  return this;
};

/**
 * Sends a packet.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.packet = function (packet) {
  packet.nsp = this.nsp;
  this.io.packet(packet);
};

/**
 * Called upon engine `open`.
 *
 * @api private
 */

Socket.prototype.onopen = function () {
  debug('transport is open - connecting');

  // write connect packet if necessary
  if ('/' !== this.nsp) {
    if (this.query) {
      var query = typeof this.query === 'object' ? parseqs.encode(this.query) : this.query;
      debug('sending connect packet with query %s', query);
      this.packet({type: parser.CONNECT, query: query});
    } else {
      this.packet({type: parser.CONNECT});
    }
  }
};

/**
 * Called upon engine `close`.
 *
 * @param {String} reason
 * @api private
 */

Socket.prototype.onclose = function (reason) {
  debug('close (%s)', reason);
  this.connected = false;
  this.disconnected = true;
  delete this.id;
  this.emit('disconnect', reason);
};

/**
 * Called with socket packet.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.onpacket = function (packet) {
  var sameNamespace = packet.nsp === this.nsp;
  var rootNamespaceError = packet.type === parser.ERROR && packet.nsp === '/';

  if (!sameNamespace && !rootNamespaceError) return;

  switch (packet.type) {
    case parser.CONNECT:
      this.onconnect();
      break;

    case parser.EVENT:
      this.onevent(packet);
      break;

    case parser.BINARY_EVENT:
      this.onevent(packet);
      break;

    case parser.ACK:
      this.onack(packet);
      break;

    case parser.BINARY_ACK:
      this.onack(packet);
      break;

    case parser.DISCONNECT:
      this.ondisconnect();
      break;

    case parser.ERROR:
      this.emit('error', packet.data);
      break;
  }
};

/**
 * Called upon a server event.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.onevent = function (packet) {
  var args = packet.data || [];
  debug('emitting event %j', args);

  if (null != packet.id) {
    debug('attaching ack callback to event');
    args.push(this.ack(packet.id));
  }

  if (this.connected) {
    emit.apply(this, args);
  } else {
    this.receiveBuffer.push(args);
  }
};

/**
 * Produces an ack callback to emit with an event.
 *
 * @api private
 */

Socket.prototype.ack = function (id) {
  var self = this;
  var sent = false;
  return function () {
    // prevent double callbacks
    if (sent) return;
    sent = true;
    var args = toArray(arguments);
    debug('sending ack %j', args);

    self.packet({
      type: hasBin(args) ? parser.BINARY_ACK : parser.ACK,
      id: id,
      data: args
    });
  };
};

/**
 * Called upon a server acknowlegement.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.onack = function (packet) {
  var ack = this.acks[packet.id];
  if ('function' === typeof ack) {
    debug('calling ack %s with %j', packet.id, packet.data);
    ack.apply(this, packet.data);
    delete this.acks[packet.id];
  } else {
    debug('bad ack %s', packet.id);
  }
};

/**
 * Called upon server connect.
 *
 * @api private
 */

Socket.prototype.onconnect = function () {
  this.connected = true;
  this.disconnected = false;
  this.emit('connect');
  this.emitBuffered();
};

/**
 * Emit buffered events (received and emitted).
 *
 * @api private
 */

Socket.prototype.emitBuffered = function () {
  var i;
  for (i = 0; i < this.receiveBuffer.length; i++) {
    emit.apply(this, this.receiveBuffer[i]);
  }
  this.receiveBuffer = [];

  for (i = 0; i < this.sendBuffer.length; i++) {
    this.packet(this.sendBuffer[i]);
  }
  this.sendBuffer = [];
};

/**
 * Called upon server disconnect.
 *
 * @api private
 */

Socket.prototype.ondisconnect = function () {
  debug('server disconnect (%s)', this.nsp);
  this.destroy();
  this.onclose('io server disconnect');
};

/**
 * Called upon forced client/server side disconnections,
 * this method ensures the manager stops tracking us and
 * that reconnections don't get triggered for this.
 *
 * @api private.
 */

Socket.prototype.destroy = function () {
  if (this.subs) {
    // clean subscriptions to avoid reconnections
    for (var i = 0; i < this.subs.length; i++) {
      this.subs[i].destroy();
    }
    this.subs = null;
  }

  this.io.destroy(this);
};

/**
 * Disconnects the socket manually.
 *
 * @return {Socket} self
 * @api public
 */

Socket.prototype.close =
Socket.prototype.disconnect = function () {
  if (this.connected) {
    debug('performing disconnect (%s)', this.nsp);
    this.packet({ type: parser.DISCONNECT });
  }

  // remove socket from pool
  this.destroy();

  if (this.connected) {
    // fire events
    this.onclose('io client disconnect');
  }
  return this;
};

/**
 * Sets the compress flag.
 *
 * @param {Boolean} if `true`, compresses the sending data
 * @return {Socket} self
 * @api public
 */

Socket.prototype.compress = function (compress) {
  this.flags.compress = compress;
  return this;
};

/**
 * Sets the binary flag
 *
 * @param {Boolean} whether the emitted data contains binary
 * @return {Socket} self
 * @api public
 */

Socket.prototype.binary = function (binary) {
  this.flags.binary = binary;
  return this;
};

},{"socket.io-parser":"node_modules/socket.io-parser/index.js","component-emitter":"node_modules/component-emitter/index.js","to-array":"node_modules/to-array/index.js","./on":"node_modules/socket.io-client/lib/on.js","component-bind":"node_modules/component-bind/index.js","debug":"node_modules/debug/src/browser.js","parseqs":"node_modules/parseqs/index.js","has-binary2":"node_modules/has-binary2/index.js"}],"node_modules/backo2/index.js":[function(require,module,exports) {

/**
 * Expose `Backoff`.
 */

module.exports = Backoff;

/**
 * Initialize backoff timer with `opts`.
 *
 * - `min` initial timeout in milliseconds [100]
 * - `max` max timeout [10000]
 * - `jitter` [0]
 * - `factor` [2]
 *
 * @param {Object} opts
 * @api public
 */

function Backoff(opts) {
  opts = opts || {};
  this.ms = opts.min || 100;
  this.max = opts.max || 10000;
  this.factor = opts.factor || 2;
  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
  this.attempts = 0;
}

/**
 * Return the backoff duration.
 *
 * @return {Number}
 * @api public
 */

Backoff.prototype.duration = function(){
  var ms = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var rand =  Math.random();
    var deviation = Math.floor(rand * this.jitter * ms);
    ms = (Math.floor(rand * 10) & 1) == 0  ? ms - deviation : ms + deviation;
  }
  return Math.min(ms, this.max) | 0;
};

/**
 * Reset the number of attempts.
 *
 * @api public
 */

Backoff.prototype.reset = function(){
  this.attempts = 0;
};

/**
 * Set the minimum duration
 *
 * @api public
 */

Backoff.prototype.setMin = function(min){
  this.ms = min;
};

/**
 * Set the maximum duration
 *
 * @api public
 */

Backoff.prototype.setMax = function(max){
  this.max = max;
};

/**
 * Set the jitter
 *
 * @api public
 */

Backoff.prototype.setJitter = function(jitter){
  this.jitter = jitter;
};


},{}],"node_modules/socket.io-client/lib/manager.js":[function(require,module,exports) {

/**
 * Module dependencies.
 */

var eio = require('engine.io-client');
var Socket = require('./socket');
var Emitter = require('component-emitter');
var parser = require('socket.io-parser');
var on = require('./on');
var bind = require('component-bind');
var debug = require('debug')('socket.io-client:manager');
var indexOf = require('indexof');
var Backoff = require('backo2');

/**
 * IE6+ hasOwnProperty
 */

var has = Object.prototype.hasOwnProperty;

/**
 * Module exports
 */

module.exports = Manager;

/**
 * `Manager` constructor.
 *
 * @param {String} engine instance or engine uri/opts
 * @param {Object} options
 * @api public
 */

function Manager (uri, opts) {
  if (!(this instanceof Manager)) return new Manager(uri, opts);
  if (uri && ('object' === typeof uri)) {
    opts = uri;
    uri = undefined;
  }
  opts = opts || {};

  opts.path = opts.path || '/socket.io';
  this.nsps = {};
  this.subs = [];
  this.opts = opts;
  this.reconnection(opts.reconnection !== false);
  this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
  this.reconnectionDelay(opts.reconnectionDelay || 1000);
  this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
  this.randomizationFactor(opts.randomizationFactor || 0.5);
  this.backoff = new Backoff({
    min: this.reconnectionDelay(),
    max: this.reconnectionDelayMax(),
    jitter: this.randomizationFactor()
  });
  this.timeout(null == opts.timeout ? 20000 : opts.timeout);
  this.readyState = 'closed';
  this.uri = uri;
  this.connecting = [];
  this.lastPing = null;
  this.encoding = false;
  this.packetBuffer = [];
  var _parser = opts.parser || parser;
  this.encoder = new _parser.Encoder();
  this.decoder = new _parser.Decoder();
  this.autoConnect = opts.autoConnect !== false;
  if (this.autoConnect) this.open();
}

/**
 * Propagate given event to sockets and emit on `this`
 *
 * @api private
 */

Manager.prototype.emitAll = function () {
  this.emit.apply(this, arguments);
  for (var nsp in this.nsps) {
    if (has.call(this.nsps, nsp)) {
      this.nsps[nsp].emit.apply(this.nsps[nsp], arguments);
    }
  }
};

/**
 * Update `socket.id` of all sockets
 *
 * @api private
 */

Manager.prototype.updateSocketIds = function () {
  for (var nsp in this.nsps) {
    if (has.call(this.nsps, nsp)) {
      this.nsps[nsp].id = this.generateId(nsp);
    }
  }
};

/**
 * generate `socket.id` for the given `nsp`
 *
 * @param {String} nsp
 * @return {String}
 * @api private
 */

Manager.prototype.generateId = function (nsp) {
  return (nsp === '/' ? '' : (nsp + '#')) + this.engine.id;
};

/**
 * Mix in `Emitter`.
 */

Emitter(Manager.prototype);

/**
 * Sets the `reconnection` config.
 *
 * @param {Boolean} true/false if it should automatically reconnect
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnection = function (v) {
  if (!arguments.length) return this._reconnection;
  this._reconnection = !!v;
  return this;
};

/**
 * Sets the reconnection attempts config.
 *
 * @param {Number} max reconnection attempts before giving up
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnectionAttempts = function (v) {
  if (!arguments.length) return this._reconnectionAttempts;
  this._reconnectionAttempts = v;
  return this;
};

/**
 * Sets the delay between reconnections.
 *
 * @param {Number} delay
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnectionDelay = function (v) {
  if (!arguments.length) return this._reconnectionDelay;
  this._reconnectionDelay = v;
  this.backoff && this.backoff.setMin(v);
  return this;
};

Manager.prototype.randomizationFactor = function (v) {
  if (!arguments.length) return this._randomizationFactor;
  this._randomizationFactor = v;
  this.backoff && this.backoff.setJitter(v);
  return this;
};

/**
 * Sets the maximum delay between reconnections.
 *
 * @param {Number} delay
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnectionDelayMax = function (v) {
  if (!arguments.length) return this._reconnectionDelayMax;
  this._reconnectionDelayMax = v;
  this.backoff && this.backoff.setMax(v);
  return this;
};

/**
 * Sets the connection timeout. `false` to disable
 *
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.timeout = function (v) {
  if (!arguments.length) return this._timeout;
  this._timeout = v;
  return this;
};

/**
 * Starts trying to reconnect if reconnection is enabled and we have not
 * started reconnecting yet
 *
 * @api private
 */

Manager.prototype.maybeReconnectOnOpen = function () {
  // Only try to reconnect if it's the first time we're connecting
  if (!this.reconnecting && this._reconnection && this.backoff.attempts === 0) {
    // keeps reconnection from firing twice for the same reconnection loop
    this.reconnect();
  }
};

/**
 * Sets the current transport `socket`.
 *
 * @param {Function} optional, callback
 * @return {Manager} self
 * @api public
 */

Manager.prototype.open =
Manager.prototype.connect = function (fn, opts) {
  debug('readyState %s', this.readyState);
  if (~this.readyState.indexOf('open')) return this;

  debug('opening %s', this.uri);
  this.engine = eio(this.uri, this.opts);
  var socket = this.engine;
  var self = this;
  this.readyState = 'opening';
  this.skipReconnect = false;

  // emit `open`
  var openSub = on(socket, 'open', function () {
    self.onopen();
    fn && fn();
  });

  // emit `connect_error`
  var errorSub = on(socket, 'error', function (data) {
    debug('connect_error');
    self.cleanup();
    self.readyState = 'closed';
    self.emitAll('connect_error', data);
    if (fn) {
      var err = new Error('Connection error');
      err.data = data;
      fn(err);
    } else {
      // Only do this if there is no fn to handle the error
      self.maybeReconnectOnOpen();
    }
  });

  // emit `connect_timeout`
  if (false !== this._timeout) {
    var timeout = this._timeout;
    debug('connect attempt will timeout after %d', timeout);

    // set timer
    var timer = setTimeout(function () {
      debug('connect attempt timed out after %d', timeout);
      openSub.destroy();
      socket.close();
      socket.emit('error', 'timeout');
      self.emitAll('connect_timeout', timeout);
    }, timeout);

    this.subs.push({
      destroy: function () {
        clearTimeout(timer);
      }
    });
  }

  this.subs.push(openSub);
  this.subs.push(errorSub);

  return this;
};

/**
 * Called upon transport open.
 *
 * @api private
 */

Manager.prototype.onopen = function () {
  debug('open');

  // clear old subs
  this.cleanup();

  // mark as open
  this.readyState = 'open';
  this.emit('open');

  // add new subs
  var socket = this.engine;
  this.subs.push(on(socket, 'data', bind(this, 'ondata')));
  this.subs.push(on(socket, 'ping', bind(this, 'onping')));
  this.subs.push(on(socket, 'pong', bind(this, 'onpong')));
  this.subs.push(on(socket, 'error', bind(this, 'onerror')));
  this.subs.push(on(socket, 'close', bind(this, 'onclose')));
  this.subs.push(on(this.decoder, 'decoded', bind(this, 'ondecoded')));
};

/**
 * Called upon a ping.
 *
 * @api private
 */

Manager.prototype.onping = function () {
  this.lastPing = new Date();
  this.emitAll('ping');
};

/**
 * Called upon a packet.
 *
 * @api private
 */

Manager.prototype.onpong = function () {
  this.emitAll('pong', new Date() - this.lastPing);
};

/**
 * Called with data.
 *
 * @api private
 */

Manager.prototype.ondata = function (data) {
  this.decoder.add(data);
};

/**
 * Called when parser fully decodes a packet.
 *
 * @api private
 */

Manager.prototype.ondecoded = function (packet) {
  this.emit('packet', packet);
};

/**
 * Called upon socket error.
 *
 * @api private
 */

Manager.prototype.onerror = function (err) {
  debug('error', err);
  this.emitAll('error', err);
};

/**
 * Creates a new socket for the given `nsp`.
 *
 * @return {Socket}
 * @api public
 */

Manager.prototype.socket = function (nsp, opts) {
  var socket = this.nsps[nsp];
  if (!socket) {
    socket = new Socket(this, nsp, opts);
    this.nsps[nsp] = socket;
    var self = this;
    socket.on('connecting', onConnecting);
    socket.on('connect', function () {
      socket.id = self.generateId(nsp);
    });

    if (this.autoConnect) {
      // manually call here since connecting event is fired before listening
      onConnecting();
    }
  }

  function onConnecting () {
    if (!~indexOf(self.connecting, socket)) {
      self.connecting.push(socket);
    }
  }

  return socket;
};

/**
 * Called upon a socket close.
 *
 * @param {Socket} socket
 */

Manager.prototype.destroy = function (socket) {
  var index = indexOf(this.connecting, socket);
  if (~index) this.connecting.splice(index, 1);
  if (this.connecting.length) return;

  this.close();
};

/**
 * Writes a packet.
 *
 * @param {Object} packet
 * @api private
 */

Manager.prototype.packet = function (packet) {
  debug('writing packet %j', packet);
  var self = this;
  if (packet.query && packet.type === 0) packet.nsp += '?' + packet.query;

  if (!self.encoding) {
    // encode, then write to engine with result
    self.encoding = true;
    this.encoder.encode(packet, function (encodedPackets) {
      for (var i = 0; i < encodedPackets.length; i++) {
        self.engine.write(encodedPackets[i], packet.options);
      }
      self.encoding = false;
      self.processPacketQueue();
    });
  } else { // add packet to the queue
    self.packetBuffer.push(packet);
  }
};

/**
 * If packet buffer is non-empty, begins encoding the
 * next packet in line.
 *
 * @api private
 */

Manager.prototype.processPacketQueue = function () {
  if (this.packetBuffer.length > 0 && !this.encoding) {
    var pack = this.packetBuffer.shift();
    this.packet(pack);
  }
};

/**
 * Clean up transport subscriptions and packet buffer.
 *
 * @api private
 */

Manager.prototype.cleanup = function () {
  debug('cleanup');

  var subsLength = this.subs.length;
  for (var i = 0; i < subsLength; i++) {
    var sub = this.subs.shift();
    sub.destroy();
  }

  this.packetBuffer = [];
  this.encoding = false;
  this.lastPing = null;

  this.decoder.destroy();
};

/**
 * Close the current socket.
 *
 * @api private
 */

Manager.prototype.close =
Manager.prototype.disconnect = function () {
  debug('disconnect');
  this.skipReconnect = true;
  this.reconnecting = false;
  if ('opening' === this.readyState) {
    // `onclose` will not fire because
    // an open event never happened
    this.cleanup();
  }
  this.backoff.reset();
  this.readyState = 'closed';
  if (this.engine) this.engine.close();
};

/**
 * Called upon engine close.
 *
 * @api private
 */

Manager.prototype.onclose = function (reason) {
  debug('onclose');

  this.cleanup();
  this.backoff.reset();
  this.readyState = 'closed';
  this.emit('close', reason);

  if (this._reconnection && !this.skipReconnect) {
    this.reconnect();
  }
};

/**
 * Attempt a reconnection.
 *
 * @api private
 */

Manager.prototype.reconnect = function () {
  if (this.reconnecting || this.skipReconnect) return this;

  var self = this;

  if (this.backoff.attempts >= this._reconnectionAttempts) {
    debug('reconnect failed');
    this.backoff.reset();
    this.emitAll('reconnect_failed');
    this.reconnecting = false;
  } else {
    var delay = this.backoff.duration();
    debug('will wait %dms before reconnect attempt', delay);

    this.reconnecting = true;
    var timer = setTimeout(function () {
      if (self.skipReconnect) return;

      debug('attempting reconnect');
      self.emitAll('reconnect_attempt', self.backoff.attempts);
      self.emitAll('reconnecting', self.backoff.attempts);

      // check again for the case socket closed in above events
      if (self.skipReconnect) return;

      self.open(function (err) {
        if (err) {
          debug('reconnect attempt error');
          self.reconnecting = false;
          self.reconnect();
          self.emitAll('reconnect_error', err.data);
        } else {
          debug('reconnect success');
          self.onreconnect();
        }
      });
    }, delay);

    this.subs.push({
      destroy: function () {
        clearTimeout(timer);
      }
    });
  }
};

/**
 * Called upon successful reconnect.
 *
 * @api private
 */

Manager.prototype.onreconnect = function () {
  var attempt = this.backoff.attempts;
  this.reconnecting = false;
  this.backoff.reset();
  this.updateSocketIds();
  this.emitAll('reconnect', attempt);
};

},{"engine.io-client":"node_modules/engine.io-client/lib/index.js","./socket":"node_modules/socket.io-client/lib/socket.js","component-emitter":"node_modules/component-emitter/index.js","socket.io-parser":"node_modules/socket.io-parser/index.js","./on":"node_modules/socket.io-client/lib/on.js","component-bind":"node_modules/component-bind/index.js","debug":"node_modules/debug/src/browser.js","indexof":"node_modules/indexof/index.js","backo2":"node_modules/backo2/index.js"}],"node_modules/socket.io-client/lib/index.js":[function(require,module,exports) {

/**
 * Module dependencies.
 */

var url = require('./url');
var parser = require('socket.io-parser');
var Manager = require('./manager');
var debug = require('debug')('socket.io-client');

/**
 * Module exports.
 */

module.exports = exports = lookup;

/**
 * Managers cache.
 */

var cache = exports.managers = {};

/**
 * Looks up an existing `Manager` for multiplexing.
 * If the user summons:
 *
 *   `io('http://localhost/a');`
 *   `io('http://localhost/b');`
 *
 * We reuse the existing instance based on same scheme/port/host,
 * and we initialize sockets for each namespace.
 *
 * @api public
 */

function lookup (uri, opts) {
  if (typeof uri === 'object') {
    opts = uri;
    uri = undefined;
  }

  opts = opts || {};

  var parsed = url(uri);
  var source = parsed.source;
  var id = parsed.id;
  var path = parsed.path;
  var sameNamespace = cache[id] && path in cache[id].nsps;
  var newConnection = opts.forceNew || opts['force new connection'] ||
                      false === opts.multiplex || sameNamespace;

  var io;

  if (newConnection) {
    debug('ignoring socket cache for %s', source);
    io = Manager(source, opts);
  } else {
    if (!cache[id]) {
      debug('new io instance for %s', source);
      cache[id] = Manager(source, opts);
    }
    io = cache[id];
  }
  if (parsed.query && !opts.query) {
    opts.query = parsed.query;
  }
  return io.socket(parsed.path, opts);
}

/**
 * Protocol version.
 *
 * @api public
 */

exports.protocol = parser.protocol;

/**
 * `connect`.
 *
 * @param {String} uri
 * @api public
 */

exports.connect = lookup;

/**
 * Expose constructors for standalone build.
 *
 * @api public
 */

exports.Manager = require('./manager');
exports.Socket = require('./socket');

},{"./url":"node_modules/socket.io-client/lib/url.js","socket.io-parser":"node_modules/socket.io-parser/index.js","./manager":"node_modules/socket.io-client/lib/manager.js","debug":"node_modules/debug/src/browser.js","./socket":"node_modules/socket.io-client/lib/socket.js"}],"src/index.js":[function(require,module,exports) {
"use strict";

var _TerminalUI = require("./TerminalUI");

var _socket = _interopRequireDefault(require("socket.io-client"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// index.js
// IMPORTANT: Make sure you replace this address with your server address.
var serverAddress = "http://localhost:8080"; //Server sandbox available at https://codesandbox.io/s/web-terminal-tutorial-server-g2ihu

function connectToSocket(serverAddress) {
  return new Promise(function (res) {
    var socket = (0, _socket.default)(serverAddress);
    res(socket);
  });
}

function startTerminal(container, socket) {
  // Create an xterm.js instance (TerminalUI class is a wrapper with some utils. Check that file for info.)
  var terminal = new _TerminalUI.TerminalUI(socket); // Attach created terminal to a DOM element.

  terminal.attachTo(container); // When terminal attached to DOM, start listening for input, output events.
  // Check TerminalUI startListening() function for details.

  terminal.startListening();
}

function start() {
  var container = document.getElementById("terminal-container"); // Connect to socket and when it is available, start terminal.

  connectToSocket(serverAddress).then(function (socket) {
    startTerminal(container, socket);
  });
} // Better to start on DOMContentLoaded. So, we know terminal-container is loaded


start();
},{"./TerminalUI":"src/TerminalUI.js","socket.io-client":"node_modules/socket.io-client/lib/index.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55935" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map