var CustomYouTube =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);
	
	__webpack_require__(2);
	
	var _constants = __webpack_require__(3);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	var _mainController = __webpack_require__(4);
	
	var _mainController2 = _interopRequireDefault(_mainController);
	
	var _resizeController = __webpack_require__(7);
	
	var _renderNav = __webpack_require__(8);
	
	var _renderNav2 = _interopRequireDefault(_renderNav);
	
	__webpack_require__(9);
	
	__webpack_require__(10);
	
	__webpack_require__(13);
	
	__webpack_require__(14);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var BUTTON = _constants2.default.BUTTON,
	    MAIN_BLOCK = _constants2.default.MAIN_BLOCK,
	    NAV_LIST = _constants2.default.NAV_LIST;
	
	
	function loadVideos() {
	    MAIN_BLOCK.innerHTML = '';
	    NAV_LIST.innerHTML = '';
	    (0, _mainController2.default)();
	
	    var resize = new _resizeController.Resize();
	    resize.countPreviewsCalc();
	
	    _renderNav2.default.renderNav(_resizeController.itemsCount);
	}
	
	BUTTON.addEventListener('click', function () {
	    loadVideos();
	});
	
	document.addEventListener('keydown', function (e) {
	    if (e.keyCode === 13) {
	        loadVideos();
	    }
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	(function(self) {
	  'use strict';
	
	  if (self.fetch) {
	    return
	  }
	
	  var support = {
	    searchParams: 'URLSearchParams' in self,
	    iterable: 'Symbol' in self && 'iterator' in Symbol,
	    blob: 'FileReader' in self && 'Blob' in self && (function() {
	      try {
	        new Blob()
	        return true
	      } catch(e) {
	        return false
	      }
	    })(),
	    formData: 'FormData' in self,
	    arrayBuffer: 'ArrayBuffer' in self
	  }
	
	  if (support.arrayBuffer) {
	    var viewClasses = [
	      '[object Int8Array]',
	      '[object Uint8Array]',
	      '[object Uint8ClampedArray]',
	      '[object Int16Array]',
	      '[object Uint16Array]',
	      '[object Int32Array]',
	      '[object Uint32Array]',
	      '[object Float32Array]',
	      '[object Float64Array]'
	    ]
	
	    var isDataView = function(obj) {
	      return obj && DataView.prototype.isPrototypeOf(obj)
	    }
	
	    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
	      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
	    }
	  }
	
	  function normalizeName(name) {
	    if (typeof name !== 'string') {
	      name = String(name)
	    }
	    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
	      throw new TypeError('Invalid character in header field name')
	    }
	    return name.toLowerCase()
	  }
	
	  function normalizeValue(value) {
	    if (typeof value !== 'string') {
	      value = String(value)
	    }
	    return value
	  }
	
	  // Build a destructive iterator for the value list
	  function iteratorFor(items) {
	    var iterator = {
	      next: function() {
	        var value = items.shift()
	        return {done: value === undefined, value: value}
	      }
	    }
	
	    if (support.iterable) {
	      iterator[Symbol.iterator] = function() {
	        return iterator
	      }
	    }
	
	    return iterator
	  }
	
	  function Headers(headers) {
	    this.map = {}
	
	    if (headers instanceof Headers) {
	      headers.forEach(function(value, name) {
	        this.append(name, value)
	      }, this)
	
	    } else if (headers) {
	      Object.getOwnPropertyNames(headers).forEach(function(name) {
	        this.append(name, headers[name])
	      }, this)
	    }
	  }
	
	  Headers.prototype.append = function(name, value) {
	    name = normalizeName(name)
	    value = normalizeValue(value)
	    var oldValue = this.map[name]
	    this.map[name] = oldValue ? oldValue+','+value : value
	  }
	
	  Headers.prototype['delete'] = function(name) {
	    delete this.map[normalizeName(name)]
	  }
	
	  Headers.prototype.get = function(name) {
	    name = normalizeName(name)
	    return this.has(name) ? this.map[name] : null
	  }
	
	  Headers.prototype.has = function(name) {
	    return this.map.hasOwnProperty(normalizeName(name))
	  }
	
	  Headers.prototype.set = function(name, value) {
	    this.map[normalizeName(name)] = normalizeValue(value)
	  }
	
	  Headers.prototype.forEach = function(callback, thisArg) {
	    for (var name in this.map) {
	      if (this.map.hasOwnProperty(name)) {
	        callback.call(thisArg, this.map[name], name, this)
	      }
	    }
	  }
	
	  Headers.prototype.keys = function() {
	    var items = []
	    this.forEach(function(value, name) { items.push(name) })
	    return iteratorFor(items)
	  }
	
	  Headers.prototype.values = function() {
	    var items = []
	    this.forEach(function(value) { items.push(value) })
	    return iteratorFor(items)
	  }
	
	  Headers.prototype.entries = function() {
	    var items = []
	    this.forEach(function(value, name) { items.push([name, value]) })
	    return iteratorFor(items)
	  }
	
	  if (support.iterable) {
	    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
	  }
	
	  function consumed(body) {
	    if (body.bodyUsed) {
	      return Promise.reject(new TypeError('Already read'))
	    }
	    body.bodyUsed = true
	  }
	
	  function fileReaderReady(reader) {
	    return new Promise(function(resolve, reject) {
	      reader.onload = function() {
	        resolve(reader.result)
	      }
	      reader.onerror = function() {
	        reject(reader.error)
	      }
	    })
	  }
	
	  function readBlobAsArrayBuffer(blob) {
	    var reader = new FileReader()
	    var promise = fileReaderReady(reader)
	    reader.readAsArrayBuffer(blob)
	    return promise
	  }
	
	  function readBlobAsText(blob) {
	    var reader = new FileReader()
	    var promise = fileReaderReady(reader)
	    reader.readAsText(blob)
	    return promise
	  }
	
	  function readArrayBufferAsText(buf) {
	    var view = new Uint8Array(buf)
	    var chars = new Array(view.length)
	
	    for (var i = 0; i < view.length; i++) {
	      chars[i] = String.fromCharCode(view[i])
	    }
	    return chars.join('')
	  }
	
	  function bufferClone(buf) {
	    if (buf.slice) {
	      return buf.slice(0)
	    } else {
	      var view = new Uint8Array(buf.byteLength)
	      view.set(new Uint8Array(buf))
	      return view.buffer
	    }
	  }
	
	  function Body() {
	    this.bodyUsed = false
	
	    this._initBody = function(body) {
	      this._bodyInit = body
	      if (!body) {
	        this._bodyText = ''
	      } else if (typeof body === 'string') {
	        this._bodyText = body
	      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
	        this._bodyBlob = body
	      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
	        this._bodyFormData = body
	      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	        this._bodyText = body.toString()
	      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
	        this._bodyArrayBuffer = bufferClone(body.buffer)
	        // IE 10-11 can't handle a DataView body.
	        this._bodyInit = new Blob([this._bodyArrayBuffer])
	      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
	        this._bodyArrayBuffer = bufferClone(body)
	      } else {
	        throw new Error('unsupported BodyInit type')
	      }
	
	      if (!this.headers.get('content-type')) {
	        if (typeof body === 'string') {
	          this.headers.set('content-type', 'text/plain;charset=UTF-8')
	        } else if (this._bodyBlob && this._bodyBlob.type) {
	          this.headers.set('content-type', this._bodyBlob.type)
	        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
	        }
	      }
	    }
	
	    if (support.blob) {
	      this.blob = function() {
	        var rejected = consumed(this)
	        if (rejected) {
	          return rejected
	        }
	
	        if (this._bodyBlob) {
	          return Promise.resolve(this._bodyBlob)
	        } else if (this._bodyArrayBuffer) {
	          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as blob')
	        } else {
	          return Promise.resolve(new Blob([this._bodyText]))
	        }
	      }
	
	      this.arrayBuffer = function() {
	        if (this._bodyArrayBuffer) {
	          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
	        } else {
	          return this.blob().then(readBlobAsArrayBuffer)
	        }
	      }
	    }
	
	    this.text = function() {
	      var rejected = consumed(this)
	      if (rejected) {
	        return rejected
	      }
	
	      if (this._bodyBlob) {
	        return readBlobAsText(this._bodyBlob)
	      } else if (this._bodyArrayBuffer) {
	        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
	      } else if (this._bodyFormData) {
	        throw new Error('could not read FormData body as text')
	      } else {
	        return Promise.resolve(this._bodyText)
	      }
	    }
	
	    if (support.formData) {
	      this.formData = function() {
	        return this.text().then(decode)
	      }
	    }
	
	    this.json = function() {
	      return this.text().then(JSON.parse)
	    }
	
	    return this
	  }
	
	  // HTTP methods whose capitalization should be normalized
	  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']
	
	  function normalizeMethod(method) {
	    var upcased = method.toUpperCase()
	    return (methods.indexOf(upcased) > -1) ? upcased : method
	  }
	
	  function Request(input, options) {
	    options = options || {}
	    var body = options.body
	
	    if (typeof input === 'string') {
	      this.url = input
	    } else {
	      if (input.bodyUsed) {
	        throw new TypeError('Already read')
	      }
	      this.url = input.url
	      this.credentials = input.credentials
	      if (!options.headers) {
	        this.headers = new Headers(input.headers)
	      }
	      this.method = input.method
	      this.mode = input.mode
	      if (!body && input._bodyInit != null) {
	        body = input._bodyInit
	        input.bodyUsed = true
	      }
	    }
	
	    this.credentials = options.credentials || this.credentials || 'omit'
	    if (options.headers || !this.headers) {
	      this.headers = new Headers(options.headers)
	    }
	    this.method = normalizeMethod(options.method || this.method || 'GET')
	    this.mode = options.mode || this.mode || null
	    this.referrer = null
	
	    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
	      throw new TypeError('Body not allowed for GET or HEAD requests')
	    }
	    this._initBody(body)
	  }
	
	  Request.prototype.clone = function() {
	    return new Request(this, { body: this._bodyInit })
	  }
	
	  function decode(body) {
	    var form = new FormData()
	    body.trim().split('&').forEach(function(bytes) {
	      if (bytes) {
	        var split = bytes.split('=')
	        var name = split.shift().replace(/\+/g, ' ')
	        var value = split.join('=').replace(/\+/g, ' ')
	        form.append(decodeURIComponent(name), decodeURIComponent(value))
	      }
	    })
	    return form
	  }
	
	  function parseHeaders(rawHeaders) {
	    var headers = new Headers()
	    rawHeaders.split('\r\n').forEach(function(line) {
	      var parts = line.split(':')
	      var key = parts.shift().trim()
	      if (key) {
	        var value = parts.join(':').trim()
	        headers.append(key, value)
	      }
	    })
	    return headers
	  }
	
	  Body.call(Request.prototype)
	
	  function Response(bodyInit, options) {
	    if (!options) {
	      options = {}
	    }
	
	    this.type = 'default'
	    this.status = 'status' in options ? options.status : 200
	    this.ok = this.status >= 200 && this.status < 300
	    this.statusText = 'statusText' in options ? options.statusText : 'OK'
	    this.headers = new Headers(options.headers)
	    this.url = options.url || ''
	    this._initBody(bodyInit)
	  }
	
	  Body.call(Response.prototype)
	
	  Response.prototype.clone = function() {
	    return new Response(this._bodyInit, {
	      status: this.status,
	      statusText: this.statusText,
	      headers: new Headers(this.headers),
	      url: this.url
	    })
	  }
	
	  Response.error = function() {
	    var response = new Response(null, {status: 0, statusText: ''})
	    response.type = 'error'
	    return response
	  }
	
	  var redirectStatuses = [301, 302, 303, 307, 308]
	
	  Response.redirect = function(url, status) {
	    if (redirectStatuses.indexOf(status) === -1) {
	      throw new RangeError('Invalid status code')
	    }
	
	    return new Response(null, {status: status, headers: {location: url}})
	  }
	
	  self.Headers = Headers
	  self.Request = Request
	  self.Response = Response
	
	  self.fetch = function(input, init) {
	    return new Promise(function(resolve, reject) {
	      var request = new Request(input, init)
	      var xhr = new XMLHttpRequest()
	
	      xhr.onload = function() {
	        var options = {
	          status: xhr.status,
	          statusText: xhr.statusText,
	          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
	        }
	        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
	        var body = 'response' in xhr ? xhr.response : xhr.responseText
	        resolve(new Response(body, options))
	      }
	
	      xhr.onerror = function() {
	        reject(new TypeError('Network request failed'))
	      }
	
	      xhr.ontimeout = function() {
	        reject(new TypeError('Network request failed'))
	      }
	
	      xhr.open(request.method, request.url, true)
	
	      if (request.credentials === 'include') {
	        xhr.withCredentials = true
	      }
	
	      if ('responseType' in xhr && support.blob) {
	        xhr.responseType = 'blob'
	      }
	
	      request.headers.forEach(function(value, name) {
	        xhr.setRequestHeader(name, value)
	      })
	
	      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
	    })
	  }
	  self.fetch.polyfill = true
	})(typeof self !== 'undefined' ? self : this);


/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	document.body.innerHTML = "<header>\n                            <input type=\"text\" id=\"input\">\n                                <button type=\"submit\" id=\"search\">search</button>\n                            </header>\n                            <div class=\"wrap\">\n                                <div class=\"main-block\"></div>\n                            </div>\n                            <footer>\n                                <div class=\"pagination-wrap\">\n                                    <ul class=\"pagination-list\"></ul>\n                                </div>\n                            </footer>";

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var constants = {
	    WIDTH_OF_PREVIEW: 320,
	    WIDTH_OF_NAV: 270,
	    WIDTH_PAGINATION: 25,
	    KEY: 'AIzaSyCqW6b0Ybs3eD0R827A1cfhkG-nwWQ111Q',
	    BASE_URL: 'https://www.googleapis.com/youtube/v3/',
	    BODY: document.querySelector('body'),
	    BUTTON: document.querySelector('button'),
	    FOOTER: document.querySelector('footer'),
	    WRAP: document.querySelector('.wrap'),
	    MAIN_BLOCK: document.querySelector('.main-block'),
	    NAV_LIST: document.querySelector('.pagination-list'),
	    NAV_LIST_WRAP: document.querySelector('.pagination-wrap'),
	    INPUT: document.querySelector('input')
	};
	
	exports.default = constants;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _getVideoController = __webpack_require__(5);
	
	var _getVideoController2 = _interopRequireDefault(_getVideoController);
	
	var _renderVideo = __webpack_require__(6);
	
	var _renderVideo2 = _interopRequireDefault(_renderVideo);
	
	var _constants = __webpack_require__(3);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var MAIN_BLOCK = _constants2.default.MAIN_BLOCK,
	    INPUT = _constants2.default.INPUT;
	
	
	var nextPageToken = '';
	
	function normalizeObj(data) {
	    var snippetPath = data.snippet;
	    return {
	        previewUrl: snippetPath.thumbnails.medium.url,
	        previewTitle: snippetPath.title,
	        previewDate: snippetPath.publishedAt.substring(0, 10),
	        previewAuthor: snippetPath.channelTitle,
	        previewId: data.id.videoId,
	        previewViewers: '',
	        previewDesc: snippetPath.description
	    };
	}
	
	function createRequest() {
	    var videoList = new _getVideoController2.default();
	    var query = INPUT.value || 'the+rolling+scopes';
	    var str = '';
	    var normalizedObjArr = [];
	    videoList.requestMain(query, nextPageToken).then(function (res) {
	        var idArr = [];
	        nextPageToken = res.nextPageToken;
	        for (var i = 0; i < res.items.length; i += 1) {
	            var normilizedObj = normalizeObj(res.items[i]);
	            normalizedObjArr.push(normilizedObj);
	            idArr.push(normilizedObj.previewId);
	        }
	        return idArr.join(',');
	    }).then(function (obj) {
	        videoList.requestStatistics(obj).then(function (data) {
	            for (var i = 0; i < data.items.length; i += 1) {
	                normalizedObjArr[i].previewViewers = data.items[i].statistics.viewCount;
	                str += _renderVideo2.default.renderItems(normalizedObjArr[i]);
	            }
	            return str;
	        }).then(function (htmlStr) {
	            MAIN_BLOCK.innerHTML += htmlStr;
	        });
	    });
	}
	
	exports.default = createRequest;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _constants = __webpack_require__(3);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var BASE_URL = _constants2.default.BASE_URL,
	    KEY = _constants2.default.KEY;
	
	var GetVideo = function () {
	    function GetVideo() {
	        _classCallCheck(this, GetVideo);
	    }
	
	    _createClass(GetVideo, [{
	        key: 'requestMain',
	        value: function requestMain(query, pageToken) {
	            // eslint-disable-line
	            return fetch(BASE_URL + 'search?pageToken=' + pageToken + '&key=' + KEY + '&type=video&part=snippet&maxResults=15&q=' + query).then(function (res) {
	                return res.json();
	            });
	        }
	    }, {
	        key: 'requestStatistics',
	        value: function requestStatistics(id) {
	            // eslint-disable-line
	            return fetch(BASE_URL + 'videos?key=' + KEY + '&id=' + id + '&part=snippet,statistics').then(function (response) {
	                if (response.status !== 200) {
	                    return;
	                }
	                return response;
	            }).then(function (res) {
	                return res.json();
	            });
	        }
	    }]);
	
	    return GetVideo;
	}();
	
	exports.default = GetVideo;

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var videosIndex = 0;
	
	var Preview = function () {
	    function Preview() {
	        _classCallCheck(this, Preview);
	    }
	
	    _createClass(Preview, [{
	        key: "renderItems",
	        value: function renderItems(item) {
	            // eslint-disable-line
	
	            videosIndex += 1;
	            return "<div class=\"preview-block\" id=\"" + videosIndex + "\">\n            <div class=\"preview-block-wrap\">\n                <div class=\"imgBlock\">\n                    <img src=\"" + item.previewUrl + "\" class=\"preview-img\">\n                    <h2 class=\"preview-title\">\n                        <a href=\"https://www.youtube.com/watch?v=" + item.previewId + "\">" + item.previewTitle + "</a>\n                    </h2>\n                </div>\n                <ul class=\"info-box\">\n                    <li><b>Date: </b>" + item.previewDate + "</li>\n                    <li><b>Author: </b>" + item.previewAuthor + "</li>\n                    <li><b>Viewed: </b>" + item.previewViewers + "</li>\n                </ul>\n                <p class=\"preview-description\">" + item.previewDesc + "</p>\n            </div>\n            </div>";
	        }
	    }]);
	
	    return Preview;
	}();
	
	exports.default = new Preview();

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.itemsCount = exports.countView = exports.Resize = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _constants = __webpack_require__(3);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MAIN_BLOCK = _constants2.default.MAIN_BLOCK;
	
	
	var countView = void 0; // eslint-disable-line
	var itemsCount = 15; // eslint-disable-line
	
	var Resize = function () {
	    function Resize() {
	        _classCallCheck(this, Resize);
	    }
	
	    _createClass(Resize, [{
	        key: 'countPreviewsCalc',
	        value: function countPreviewsCalc() {
	            // eslint-disable-line
	            var width = document.body.clientWidth;
	            if (width < 750) {
	                MAIN_BLOCK.style.width = 'calc(100vw*' + itemsCount + ')';
	                exports.countView = countView = 1;
	            } else if (width < 1200) {
	                MAIN_BLOCK.style.width = 'calc(50vw*' + itemsCount + ')';
	                exports.countView = countView = 2;
	            } else {
	                MAIN_BLOCK.style.width = 'calc(33vw*' + itemsCount + ')';
	                exports.countView = countView = 3;
	            }
	        }
	    }, {
	        key: 'addNewVideoPart',
	        value: function addNewVideoPart() {
	            // eslint-disable-line
	            exports.itemsCount = itemsCount += 15;
	        }
	    }]);
	
	    return Resize;
	}();
	
	exports.Resize = Resize;
	exports.countView = countView;
	exports.itemsCount = itemsCount;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _resizeController = __webpack_require__(7);
	
	var _constants = __webpack_require__(3);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var NAV_LIST = _constants2.default.NAV_LIST;
	
	var prevCountView = void 0;
	
	var Pagination = function () {
	    function Pagination() {
	        _classCallCheck(this, Pagination);
	    }
	
	    _createClass(Pagination, [{
	        key: 'renderNav',
	        value: function renderNav(countOnPage) {
	            // eslint-disable-line
	            var countPaginationItems = document.querySelectorAll('.pagination').length;
	            var activePage = document.querySelector('.active');
	            var str = '';
	            var activePageData = void 0;
	
	            if (_resizeController.countView === prevCountView && Math.floor(countOnPage / _resizeController.countView) === countPaginationItems) {
	                return;
	            }
	
	            if (activePage) {
	                activePageData = activePage.getAttribute('data-scroll-to');
	            }
	
	            for (var i = 1; i <= countOnPage / _resizeController.countView; i += 1) {
	                str += '<li><a href="#" class="pagination" data-scroll-to="' + ((i - 1) * _resizeController.countView + 1) + '">' + i + '</a></li>';
	            }
	            NAV_LIST.innerHTML = str;
	
	            if (!activePage) {
	                NAV_LIST.firstElementChild.firstElementChild.classList.add('active');
	                activePageData = 1;
	            }
	            var navItems = document.querySelectorAll('.pagination');
	            var newActivePage = Math.ceil(activePageData / _resizeController.countView);
	            navItems[newActivePage - 1].classList.add('active');
	            prevCountView = _resizeController.countView;
	        }
	    }]);
	
	    return Pagination;
	}();
	
	exports.default = new Pagination();

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _constants = __webpack_require__(3);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var NAV_LIST = _constants2.default.NAV_LIST;
	
	var tooltipShowing = void 0;
	
	function createTooltip(el) {
	    var tooltip = document.createElement('span');
	    tooltip.classList.add('tooltip');
	    tooltip.innerHTML = '' + el.innerHTML;
	    el.parentElement.appendChild(tooltip);
	    return tooltip;
	}
	
	NAV_LIST.addEventListener('mouseover', function (e) {
	    var target = e.target;
	    if (target.hasAttribute('data-scroll-to')) {
	        tooltipShowing = createTooltip(target);
	    }
	});
	
	NAV_LIST.addEventListener('mouseout', function (e) {
	    var parent = e.target.parentElement;
	    if (tooltipShowing) {
	        parent.removeChild(tooltipShowing);
	        tooltipShowing = false;
	    }
	});

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _constants = __webpack_require__(3);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	var _paginationController = __webpack_require__(11);
	
	var _paginationController2 = _interopRequireDefault(_paginationController);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var NAV_LIST = _constants2.default.NAV_LIST;
	
	
	NAV_LIST.addEventListener('click', function (e) {
	    var target = e.target;
	    if (target.hasAttribute('data-scroll-to')) {
	        _paginationController2.default.countPageCalc(target);
	    }
	});

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _constants = __webpack_require__(3);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	var _resizeController = __webpack_require__(7);
	
	var _addVideoController = __webpack_require__(12);
	
	var _addVideoController2 = _interopRequireDefault(_addVideoController);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var WIDTH_OF_PREVIEW = _constants2.default.WIDTH_OF_PREVIEW,
	    MAIN_BLOCK = _constants2.default.MAIN_BLOCK,
	    NAV_LIST = _constants2.default.NAV_LIST,
	    WIDTH_OF_NAV = _constants2.default.WIDTH_OF_NAV,
	    WIDTH_PAGINATION = _constants2.default.WIDTH_PAGINATION;
	
	var PaginationController = function () {
	    function PaginationController() {
	        _classCallCheck(this, PaginationController);
	    }
	
	    _createClass(PaginationController, [{
	        key: 'countPageCalc',
	        value: function countPageCalc(el) {
	            var prevActive = document.querySelector('.active');
	            this.nextPage(el);
	            prevActive.classList.remove('active');
	            el.classList.add('active');
	            _addVideoController2.default.addNewVideo();
	            this.scrollNav();
	        }
	    }, {
	        key: 'nextPage',
	        value: function nextPage(el) {
	            // eslint-disable-line
	            var width = document.body.clientWidth;
	            var firstEl = document.getElementById(el.dataset.scrollTo);
	            var indent = (width - _resizeController.countView * WIDTH_OF_PREVIEW) / (2 * _resizeController.countView);
	            var coordX = firstEl.offsetLeft - indent;
	
	            MAIN_BLOCK.style.transition = 'transform 1s ease';
	            MAIN_BLOCK.style.transform = 'translateX(' + -coordX + 'px)';
	        }
	    }, {
	        key: 'scrollNav',
	        value: function scrollNav() {
	            // eslint-disable-line
	            var activePage = document.querySelector('.active').parentNode;
	            var coordX = activePage.offsetLeft - WIDTH_OF_NAV / 2 + WIDTH_PAGINATION / 2;
	
	            NAV_LIST.style.transform = 'translateX(' + -coordX + 'px)';
	        }
	    }]);
	
	    return PaginationController;
	}();
	
	exports.default = new PaginationController();

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _resizeController = __webpack_require__(7);
	
	var _mainController = __webpack_require__(4);
	
	var _mainController2 = _interopRequireDefault(_mainController);
	
	var _renderNav = __webpack_require__(8);
	
	var _renderNav2 = _interopRequireDefault(_renderNav);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var NewVideo = function () {
	    function NewVideo() {
	        _classCallCheck(this, NewVideo);
	    }
	
	    _createClass(NewVideo, [{
	        key: 'addNewVideo',
	        value: function addNewVideo() {
	            // eslint-disable-line
	            var paging = document.querySelectorAll('.pagination');
	            var lastPage = paging[paging.length - 1];
	            var preLastPage = paging[paging.length - 2];
	            var resizeWindow = void 0;
	
	            if (lastPage.classList.contains('active') || preLastPage.classList.contains('active')) {
	                (0, _mainController2.default)();
	                resizeWindow = new _resizeController.Resize();
	                resizeWindow.addNewVideoPart();
	                resizeWindow.countPreviewsCalc();
	                _renderNav2.default.renderNav(_resizeController.itemsCount);
	            }
	        }
	    }]);
	
	    return NewVideo;
	}();
	
	exports.default = new NewVideo();

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _constants = __webpack_require__(3);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	var _resizeController = __webpack_require__(7);
	
	var _paginationController = __webpack_require__(11);
	
	var _paginationController2 = _interopRequireDefault(_paginationController);
	
	var _addVideoController = __webpack_require__(12);
	
	var _addVideoController2 = _interopRequireDefault(_addVideoController);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var WRAP = _constants2.default.WRAP;
	
	var coordStart = null;
	var coordEnd = null;
	
	WRAP.addEventListener('mousedown', function (eDown) {
	    eDown.preventDefault();
	    coordStart = eDown.clientX;
	});
	
	WRAP.addEventListener('mouseup', function (eUp) {
	    var prevActive = document.querySelector('.active');
	    var newActive = void 0;
	    coordEnd = eUp.clientX;
	
	    if (coordEnd - coordStart > 15) {
	        newActive = prevActive.parentElement.previousElementSibling.firstElementChild;
	    } else if (coordEnd - coordStart < -15) {
	        newActive = prevActive.parentElement.nextElementSibling.firstElementChild;
	    }
	    _paginationController2.default.nextPage(newActive);
	    prevActive.classList.remove('active');
	    newActive.classList.add('active');
	    _addVideoController2.default.addNewVideo(_resizeController.countView);
	    _paginationController2.default.scrollNav();
	});
	
	WRAP.addEventListener('touchstart', function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	    coordStart = e.changedTouches[0];
	}, false);
	
	WRAP.addEventListener('touchend', function (e) {
	    e.preventDefault();
	    e.stopPropagation();
	    var prevActive = document.querySelector('.active');
	    var newActive = void 0;
	    coordEnd = e.changedTouches[0];
	
	    if (coordEnd.pageX - coordStart.pageX > 15) {
	        newActive = prevActive.parentElement.previousElementSibling.firstElementChild;
	    } else if (coordEnd.pageX - coordStart.pageX < -15) {
	        newActive = prevActive.parentElement.nextElementSibling.firstElementChild;
	    }
	    _paginationController2.default.nextPage(newActive);
	    prevActive.classList.remove('active');
	    newActive.classList.add('active');
	    _addVideoController2.default.addNewVideo(_resizeController.countView);
	    _paginationController2.default.scrollNav();
	});

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _resizeController = __webpack_require__(7);
	
	var _renderNav = __webpack_require__(8);
	
	var _renderNav2 = _interopRequireDefault(_renderNav);
	
	var _constants = __webpack_require__(3);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	var _paginationController = __webpack_require__(11);
	
	var _paginationController2 = _interopRequireDefault(_paginationController);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var MAIN_BLOCK = _constants2.default.MAIN_BLOCK,
	    WIDTH_OF_PREVIEW = _constants2.default.WIDTH_OF_PREVIEW;
	
	
	window.addEventListener('resize', function () {
	    var width = document.body.clientWidth;
	    var resizeWindow = new _resizeController.Resize();
	    resizeWindow.countPreviewsCalc();
	    var activePage = document.querySelector('.active').dataset.scrollTo;
	    var firstEl = document.getElementById(activePage);
	    var indent = (width - _resizeController.countView * WIDTH_OF_PREVIEW) / (2 * _resizeController.countView);
	
	    MAIN_BLOCK.style.transition = 'transform 0s ease';
	    MAIN_BLOCK.style.transform = 'translateX(' + -(firstEl.offsetLeft - indent) + 'px)';
	
	    _renderNav2.default.renderNav(_resizeController.itemsCount);
	    _paginationController2.default.scrollNav();
	});

/***/ }
/******/ ]);
//# sourceMappingURL=build.js.map