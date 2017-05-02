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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 31);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var randomizeList = function randomizeList(list) {
  return list.sort(function () {
    return 0.5 - Math.random();
  });
};

var prettyTime = function prettyTime(time) {
  var hours = Math.floor(time / 3600);
  var mins = '' + Math.floor(time % 3600 / 60);
  var secs = '0' + Math.floor(time % 60);
  mins = mins.substr(mins.length - 2);
  secs = secs.substr(secs.length - 2);
  if (!isNaN(secs)) {
    if (hours) {
      return hours + ':' + mins + ':' + secs;
    }
    return mins + ':' + secs;
  }
  return '0:00';
};

var takeFirst = function takeFirst(arr) {
  return arr[0];
};

var asNumber = function asNumber(n) {
  return parseInt(n, 10);
};

var copyTextToClipboard = function copyTextToClipboard(text) {
  var textArea = document.createElement('textarea');

  textArea.style.position = 'fixed';
  textArea.style.top = 0;
  textArea.style.left = 0;

  textArea.style.width = '2em';
  textArea.style.height = '2em';

  textArea.style.padding = 0;

  textArea.style.border = 'none';
  textArea.style.outline = 'none';
  textArea.style.boxShadow = 'none';

  textArea.style.background = 'transparent';
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }
  document.body.removeChild(textArea);
};

var getSoundById = function getSoundById(id, sounds) {
  var sameID = function sameID(sound) {
    return asNumber(sound.id) === asNumber(id);
  };
  var item = takeFirst(sounds.filter(sameID));
  return item;
};

var getSoundByTitle = function getSoundByTitle(permalink, sounds) {
  var sameTitle = function sameTitle(sound) {
    return sound.permalink === permalink;
  };
  var item = takeFirst(sounds.filter(sameTitle));
  return item;
};

var isDigitOnly = function isDigitOnly(s) {
  return (/^\d+$/.test(s)
  );
};

var filterList = function filterList(prevState, props) {
  var isFilterInItem = function isFilterInItem(filter) {
    return function (item) {
      return item.toLowerCase().search(filter) !== -1;
    };
  };
  var isNotIn = isFilterInItem(prevState.filter);

  var filteredSounds = props.sounds.filter(function (item) {
    return isNotIn(item.info.opis) || isNotIn(item.info.author) || isNotIn(item.userName) || isNotIn(item.title) || isNotIn(item.info.gear);
  });

  return {
    sounds: filteredSounds
  };
};

exports.randomizeList = randomizeList;
exports.prettyTime = prettyTime;
exports.takeFirst = takeFirst;
exports.asNumber = asNumber;
exports.copyTextToClipboard = copyTextToClipboard;
exports.getSoundById = getSoundById;
exports.getSoundByTitle = getSoundByTitle;
exports.isDigitOnly = isDigitOnly;
exports.filterList = filterList;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ['/', '/:id/info', '/:id/map', '/:id/photos'];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
  padding: '16px',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
};

exports.default = function (_ref) {
  var message = _ref.message;
  return _react2.default.createElement(
    'div',
    { style: style },
    _react2.default.createElement(
      'h1',
      null,
      'This request does NOT match any resource!'
    ),
    _react2.default.createElement(
      'a',
      { href: '/' },
      'home'
    )
  );
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (req, res) {
  return res.status(200).send({ 'message': 'hello there ;)' });
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _fsReadfilePromise = __webpack_require__(26);

var _fsReadfilePromise2 = _interopRequireDefault(_fsReadfilePromise);

var _server = __webpack_require__(27);

var _reactRouter = __webpack_require__(30);

var _App = __webpack_require__(12);

var _App2 = _interopRequireDefault(_App);

var _Error = __webpack_require__(14);

var _Error2 = _interopRequireDefault(_Error);

var _NoMatch = __webpack_require__(4);

var _NoMatch2 = _interopRequireDefault(_NoMatch);

var _routes = __webpack_require__(3);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, res, next) {
  var checkRoutes = function checkRoutes(routes) {
    return routes.filter(function (r) {
      return (0, _reactRouter.matchPath)(req.url, { path: r, exact: true });
    });
  };
  var routeMatches = checkRoutes(_routes2.default).length !== 0;

  var generateHtml = function generateHtml(data) {
    var appString = (0, _server.renderToString)(_react2.default.createElement(
      _reactRouter.StaticRouter,
      { context: {}, location: req.url },
      _react2.default.createElement(_App2.default, { sounds: data })
    ));
    var dataString = JSON.stringify(data);
    var html = (0, _fsReadfilePromise2.default)('./dist/index.html', 'utf-8').then(function (s) {
      return s.replace('{{APP}}', appString);
    }).then(function (s) {
      return s.replace('{{DATA}}', 'window.__sounds__ = ' + dataString);
    });
    return html;
  };

  if (routeMatches) {
    (0, _fsReadfilePromise2.default)('./src/shared/assets/tracks.json', 'utf-8').then(JSON.parse).then(generateHtml).then(function (html) {
      return res.status(200).send(html);
    }).catch(function () {
      return res.status(500).send((0, _server.renderToString)(_react2.default.createElement(_Error2.default, null)));
    });
  } else {
    res.status(404).send((0, _server.renderToString)(_react2.default.createElement(_NoMatch2.default, null)));
  }
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("source-map-support");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

var _Mapa = __webpack_require__(17);

var _Mapa2 = _interopRequireDefault(_Mapa);

var _List = __webpack_require__(16);

var _List2 = _interopRequireDefault(_List);

var _Menu = __webpack_require__(18);

var _Menu2 = _interopRequireDefault(_Menu);

var _Welcome = __webpack_require__(23);

var _Welcome2 = _interopRequireDefault(_Welcome);

var _SearchField = __webpack_require__(21);

var _SearchField2 = _interopRequireDefault(_SearchField);

var _Sound = __webpack_require__(22);

var _Sound2 = _interopRequireDefault(_Sound);

var _Photos = __webpack_require__(19);

var _Photos2 = _interopRequireDefault(_Photos);

var _Info = __webpack_require__(15);

var _Info2 = _interopRequireDefault(_Info);

var _NoMatch = __webpack_require__(4);

var _NoMatch2 = _interopRequireDefault(_NoMatch);

var _helpers = __webpack_require__(1);

__webpack_require__(25);

__webpack_require__(24);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      isPlaying: false,
      filter: '',
      reset: false,
      sounds: [],
      redirectPath: ''
    };
    _this.playClick = _this.playClick.bind(_this);
    _this.listClick = _this.listClick.bind(_this);
    _this.markerClick = _this.markerClick.bind(_this);
    _this.onEnded = _this.onEnded.bind(_this);
    _this.searchChange = _this.searchChange.bind(_this);
    _this.searchSubmit = _this.searchSubmit.bind(_this);
    _this.searchReset = _this.searchReset.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'onEnded',
    value: function onEnded(e) {
      this.setState({ isPlaying: false });
    }
  }, {
    key: 'playClick',
    value: function playClick(e) {
      var audioElem = this.Sound.Player.audioEl;
      if (this.state.isPlaying) {
        audioElem.pause();
      } else {
        audioElem.play();
      }
      this.setState(function (prevState) {
        return { isPlaying: !prevState.isPlaying };
      });
    }
  }, {
    key: 'markerClick',
    value: function markerClick(index) {
      this.setState({ isPlaying: false });
      this.setState({ redirectPath: '' });

      var currentSound = document.getElementById('snd' + index);
      currentSound.scrollIntoView();

      var pathToRedirect = '/' + this.state.sounds[index].permalink + '/map';
      this.setState({ redirectPath: pathToRedirect });
    }
  }, {
    key: 'listClick',
    value: function listClick(e) {
      this.setState({ isPlaying: false });
    }
  }, {
    key: 'searchChange',
    value: function searchChange(e) {
      this.setState({ reset: true });
      this.setState({ filter: e.target.value.toLowerCase() });
      this.setState(_helpers.filterList);
    }
  }, {
    key: 'searchSubmit',
    value: function searchSubmit(e) {
      e.preventDefault();
      this.setState({ reset: true });
      this.setState({ filter: '' });
      this.setState(function (prevState) {
        return { sounds: prevState.sounds };
      });
    }
  }, {
    key: 'searchReset',
    value: function searchReset(e) {
      this.setState({ reset: false });
      this.setState(_helpers.filterList);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      fetch('/api').then(function (res) {
        return res.json();
      }).then(function (res) {
        return console.log(res);
      }).catch(function (err) {
        return console.log(err);
      });
      this.setState(function (prevState, props) {
        return { sounds: props.sounds };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactRouterDom.Switch,
          null,
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Welcome2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true,
            path: '/:permalink/:sub',
            render: function render(_ref) {
              var match = _ref.match;

              var snd = (0, _helpers.getSoundByTitle)(match.params.permalink, _this2.props.sounds);
              return _react2.default.createElement(
                'div',
                { className: 'App flex flex-column flex-row-ns f5 f4-l black-80 bg-white' },
                _this2.state.redirectPath ? _react2.default.createElement(_reactRouterDom.Redirect, { to: _this2.state.redirectPath }) : null,
                _react2.default.createElement(_SearchField2.default, {
                  filter: _this2.state.filter,
                  handleSubmit: _this2.searchSubmit,
                  handleChange: _this2.searchChange,
                  handleReset: _this2.searchReset,
                  reset: _this2.state.reset
                }),
                _react2.default.createElement(_Menu2.default, { id: match.params.permalink }),
                match.params.sub === 'photos' ? _react2.default.createElement(_Photos2.default, { id: snd.id, defaultPic: snd.artwork_url || snd.userPic, images: snd.images }) : null,
                match.params.sub === 'info' ? _react2.default.createElement(_Info2.default, { currentSound: snd }) : null,
                match.params.sub === 'map' ? _react2.default.createElement(_Mapa2.default, {
                  onClick: _this2.markerClick,
                  sounds: _this2.state.sounds,
                  currentSound: snd
                }) : null,
                _react2.default.createElement(
                  'div',
                  { className: 'flex flex-column sideBar vh-60 vh-100-ns w-100 mw6-ns ph1 bl-m bl-l fadeIn animated' },
                  _react2.default.createElement(_Sound2.default, {
                    ref: function ref(_ref2) {
                      return _this2.Sound = _ref2;
                    },
                    currentSound: snd,
                    onEnded: _this2.onEnded,
                    playClick: _this2.playClick,
                    isPlaying: _this2.state.isPlaying
                  }),
                  _react2.default.createElement(_List2.default, {
                    onClick: _this2.listClick,
                    sounds: _this2.state.sounds,
                    currentId: snd.id,
                    linkTo: match.params.sub
                  })
                )
              );
            }
          }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '*', component: _NoMatch2.default })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Description = function Description(_ref) {
  var selectedSound = _ref.selectedSound;
  return _react2.default.createElement(
    'div',
    { className: 'flex flex-row justify-start items-start dn-sh mt1 bg-near-white' },
    _react2.default.createElement('img', {
      className: 'br2',
      style: { maxWidth: '80px', maxHeight: '80px', minWidth: '80px', minHeight: '80px' },
      src: selectedSound.artwork_url || selectedSound.userPic,
      alt: 'artwork'
    }),
    _react2.default.createElement(
      'div',
      { className: 'overflow-auto pl2' },
      _react2.default.createElement(
        'p',
        { className: 'infoHeight lh-title f5' },
        selectedSound.info.opis
      )
    )
  );
};

exports.default = Description;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  padding: '16px'
};

exports.default = function () {
  return _react2.default.createElement(
    'div',
    { style: style },
    _react2.default.createElement(
      'h1',
      null,
      'this id does Not match any of our sounds'
    ),
    _react2.default.createElement(
      'h2',
      null,
      'try ',
      _react2.default.createElement(
        'a',
        { href: '/stacja-kolejowa-mikolajow02/info' },
        'this'
      )
    )
  );
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var currentSound = _ref.currentSound;

  return _react2.default.createElement(
    'div',
    { className: 'center pa2 pa4-m pa5-l vh-100-ns vh-40 mw7-m mw8-l bg-near-white overflow-auto' },
    _react2.default.createElement(
      'div',
      { className: 'flex mb2 w-90 w-100-ns' },
      _react2.default.createElement('img', {
        title: 'user avatar',
        className: 'br-100 h3 w3 h4-l w4-l dib ba b--black-05 pa1',
        src: currentSound.userPic
      }),
      _react2.default.createElement(
        'div',
        { className: 'flex flex-column pt4-l pl4-l pt2 pl2' },
        _react2.default.createElement(
          'h2',
          { className: 'f3-ns f4 mb1' },
          currentSound.userName
        ),
        _react2.default.createElement(
          'h3',
          { className: 'f5 f4-l fw4 gray mt0' },
          currentSound.title
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'flex flex-column measure lh-copy w-90 w-100-l' },
      _react2.default.createElement(
        'p',
        null,
        _react2.default.createElement(
          'b',
          null,
          'autor nagrania: '
        ),
        currentSound.info.author
      ),
      _react2.default.createElement(
        'p',
        null,
        _react2.default.createElement(
          'b',
          null,
          'lokalizacja: '
        ),
        currentSound.info.localization
      ),
      _react2.default.createElement(
        'p',
        null,
        _react2.default.createElement(
          'b',
          null,
          'gps: '
        ),
        currentSound.info.gps.lat + ' - ' + currentSound.info.gps.lng
      ),
      _react2.default.createElement(
        'p',
        null,
        _react2.default.createElement(
          'b',
          null,
          'sprz\u0119t: '
        ),
        currentSound.info.gear
      ),
      _react2.default.createElement(
        'p',
        null,
        _react2.default.createElement(
          'b',
          null,
          'data: '
        ),
        currentSound.info.date
      ),
      _react2.default.createElement(
        'p',
        null,
        _react2.default.createElement(
          'b',
          null,
          'czas: '
        ),
        currentSound.info.time
      ),
      _react2.default.createElement(
        'p',
        null,
        _react2.default.createElement(
          'b',
          null,
          'opis: '
        ),
        currentSound.info.opis
      )
    )
  );
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

var _index = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var List = function List(_ref) {
  var currentId = _ref.currentId,
      sounds = _ref.sounds,
      onClick = _ref.onClick,
      linkTo = _ref.linkTo;
  return _react2.default.createElement(
    'ul',
    { className: 'bg-near-white overflow-auto mt1 z-1' },
    sounds.map(function (elem, index) {
      return _react2.default.createElement(
        _reactRouterDom.Link,
        { className: 'link', key: index, to: '/' + elem.permalink + '/' + (linkTo || 'info') },
        _react2.default.createElement(
          'li',
          {
            id: 'snd' + index,
            onClick: onClick,
            className: (0, _index.asNumber)(currentId) === (0, _index.asNumber)(elem.id) ? 'white bg-black-60 truncate pl1 pv1' : 'black-80 hover-near-white bg-animate hover-bg-black-60 truncate pl1 pv1'
          },
          _react2.default.createElement(
            'span',
            null,
            elem.title
          )
        )
      );
    })
  );
};

exports.default = List;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactGmaps = __webpack_require__(28);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var params = { v: '3', key: 'AIzaSyB7GQAjLtFuxLYjfSQq3PLX3o0mX6qT-CU', language: 'pl', region: 'PL' };

var SoundMap = function (_Component) {
  _inherits(SoundMap, _Component);

  function SoundMap() {
    _classCallCheck(this, SoundMap);

    return _possibleConstructorReturn(this, (SoundMap.__proto__ || Object.getPrototypeOf(SoundMap)).apply(this, arguments));
  }

  _createClass(SoundMap, [{
    key: 'onMapCreated',
    value: function onMapCreated(map) {
      map.setOptions({
        disableDefaultUI: false,
        mapTypeId: 'satellite',
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: true,
        tilt: 0,
        zoom: 15
      });
    }
  }, {
    key: 'onMarkerClick',
    value: function onMarkerClick(index) {
      this.props.onClick(index);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var current = this.props.currentSound;
      return _react2.default.createElement(
        _reactGmaps.Gmaps,
        {
          ref: 'mapa',
          width: '100%',
          className: 'flex justify-end-ns w-100 vh-40 vh-100-ns fadeIn animated ph1 pt1 fadeIn animated',
          lat: current.info.gps.lat,
          lng: current.info.gps.lng,
          params: params,
          onMapCreated: this.onMapCreated
        },
        this.props.sounds.map(function (sound, index) {
          return _react2.default.createElement(_reactGmaps.Marker, {
            animation: current.id === sound.id ? 1 : 0,
            lat: sound.info.gps.lat,
            lng: sound.info.gps.lng,
            onClick: _this2.onMarkerClick.bind(_this2, index),
            key: index
          });
        })
      );
    }
  }]);

  return SoundMap;
}(_react.Component);

exports.default = SoundMap;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Menu = function Menu(_ref) {
  var id = _ref.id;

  return _react2.default.createElement(
    'div',
    { className: 'onTop menuPosition' },
    _react2.default.createElement(
      'div',
      { className: 'flex flex-column content-end animated fadeIn' },
      _react2.default.createElement(
        _reactRouterDom.Link,
        {
          to: '/',
          title: 'Home',
          className: 'f5 w1-8 no-underline black bg-white bg-animate hover-bg-black hover-white inline-flex items-center pa1 ba border-box mb1 mr1' },
        _react2.default.createElement(
          'svg',
          { className: 'w1-8', viewBox: '0 0 32 32', fill: 'currentcolor' },
          _react2.default.createElement(
            'title',
            null,
            'Home icon'
          ),
          _react2.default.createElement('path', { d: 'M16 0 L32 16 L28 16 L28 30 L20 30 L20 20 L12 20 L12 30 L4 30 L4 16 L0 16 Z' })
        )
      ),
      _react2.default.createElement(
        _reactRouterDom.Link,
        {
          to: '/' + id + '/map',
          title: 'Mapa',
          className: 'f5 w1-8 no-underline black bg-white bg-animate hover-bg-black hover-white inline-flex items-center pa1 ba border-box mb1 mr1' },
        _react2.default.createElement(
          'svg',
          { className: 'w1-8', viewBox: '0 0 24 24', fill: 'currentcolor' },
          _react2.default.createElement('path', { d: 'M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z' })
        )
      ),
      _react2.default.createElement(
        _reactRouterDom.Link,
        {
          to: '/' + id + '/info',
          title: 'Info',
          className: 'f5 w1-8 no-underline black bg-white bg-animate hover-bg-black hover-white inline-flex items-center pa1 ba border-box mb1 mr1' },
        _react2.default.createElement(
          'svg',
          { className: 'w1-8', viewBox: '0 0 24 24', fill: 'currentcolor' },
          _react2.default.createElement('path', { d: 'M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z' })
        )
      ),
      _react2.default.createElement(
        _reactRouterDom.Link,
        {
          to: '/' + id + '/photos',
          title: 'Zdjęcia',
          className: 'f5 w1-8 no-underline black bg-white bg-animate hover-bg-black hover-white inline-flex items-center pa1 ba border-box mb1 mr1' },
        _react2.default.createElement(
          'svg',
          { className: 'w1-8', viewBox: '0 0 24 24', fill: 'currentcolor' },
          _react2.default.createElement('path', { d: 'M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z' })
        )
      )
    )
  );
};

exports.default = Menu;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactImage = __webpack_require__(29);

var _reactImage2 = _interopRequireDefault(_reactImage);

var _helpers = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Loader = function Loader() {
  return _react2.default.createElement(
    'div',
    null,
    'Pobieram obrazek...'
  );
};
var LoaderSmall = function LoaderSmall() {
  return _react2.default.createElement(
    'div',
    null,
    ' * '
  );
};

var Photos = function (_React$Component) {
  _inherits(Photos, _React$Component);

  function Photos(props) {
    _classCallCheck(this, Photos);

    var _this = _possibleConstructorReturn(this, (Photos.__proto__ || Object.getPrototypeOf(Photos)).call(this, props));

    _this.state = {
      selected: 0
    };
    _this.imageClick = _this.imageClick.bind(_this);
    return _this;
  }

  _createClass(Photos, [{
    key: 'imageClick',
    value: function imageClick(e) {
      this.setState({ selected: (0, _helpers.asNumber)(e.target.id) });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
      this.setState({ selected: 0 });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'center ph3 pt1 ph4-m pt3-m pa5-l w-100 vh-100-ns vh-40 mw7-m mw8-l bg-near-white overflow-auto' },
        this.props.images[0] ? _react2.default.createElement(
          'div',
          { className: 'flex flex-wrap', onClick: this.imageClick },
          this.props.images.map(function (item, index) {
            return _react2.default.createElement(_reactImage2.default, {
              key: index,
              id: index,
              loader: _react2.default.createElement(LoaderSmall, null),
              className: _this2.state.selected === index ? 'mr2 mb2 w2 h2 w3-l h3-l dim ba bw2 b--green' : 'mr2 mb2 w2 h2 h2 w3-l h3-l dim',
              src: 'https://res.cloudinary.com/endziu/image/upload/w_64,h_64,c_thumb,c_fill/mapa/' + item,
              alt: 'image' + index });
          })
        ) : _react2.default.createElement(
          'div',
          { className: 'flex flex-wrap', onClick: this.imageClick },
          _react2.default.createElement(_reactImage2.default, { loader: _react2.default.createElement(LoaderSmall, null), id: 'avatar', className: 'mr2 mb2 w2 h2 w3-l h3-l dim ba bw2 b--green', src: this.props.defaultPic, alt: 'avatar' })
        ),
        this.props.images[this.state.selected] ? _react2.default.createElement(_reactImage2.default, { loader: _react2.default.createElement(Loader, null), className: 'w-90 w-100-l', src: 'https://res.cloudinary.com/endziu/image/upload/mapa/' + this.props.images[this.state.selected], alt: 'big picture' }) : _react2.default.createElement(_reactImage2.default, { loader: _react2.default.createElement(Loader, null), src: this.props.defaultPic.substring(0, this.props.defaultPic.indexOf('-large.jpg')).concat('-t500x500.jpg'), alt: 'artwork' })
      );
    }
  }]);

  return Photos;
}(_react2.default.Component);

exports.default = Photos;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Player = function (_Component) {
  _inherits(Player, _Component);

  function Player() {
    _classCallCheck(this, Player);

    var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this));

    _this.state = {
      duration: 0,
      currentTime: 0,
      percentPlayed: 0
    };
    _this.onTimeUpdate = _this.onTimeUpdate.bind(_this);
    _this.setPosition = _this.setPosition.bind(_this);
    _this.onEnded = _this.onEnded.bind(_this);
    _this.recReady = _this.recReady.bind(_this);
    return _this;
  }

  _createClass(Player, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.audioEl.addEventListener('onTimeUpdate', function (e) {
        return _this2.props.onTimeUpdate && _this2.props.onTimeUpdate(e);
      });

      this.audioEl.addEventListener('onEnded', function (e) {
        return _this2.onEnded(e);
      });
    }
  }, {
    key: 'recReady',
    value: function recReady() {
      this.setState({ duration: this.audioEl.duration });
    }
  }, {
    key: 'onEnded',
    value: function onEnded(e) {
      this.props.onEnded(e);
    }
  }, {
    key: 'onTimeUpdate',
    value: function onTimeUpdate(e) {
      this.setState({
        duration: this.audioEl.duration || 0,
        currentTime: this.audioEl.currentTime || 0,
        percentPlayed: (this.audioEl.currentTime / this.audioEl.duration).toFixed(3) * 100 || 0
      });
    }
  }, {
    key: 'setPosition',
    value: function setPosition(e) {
      var currentPosition = (e.clientX - e.target.x) / e.target.width * 100;
      this.audioEl.currentTime = parseFloat(currentPosition * 0.01 * this.audioEl.duration);
      this.setState({ percentPlayed: currentPosition });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          isPlaying = _props.isPlaying,
          selectedSound = _props.selectedSound;

      return _react2.default.createElement(
        'div',
        { className: 'App-Player bg-near-white pt1' },
        _react2.default.createElement('audio', {
          onTimeUpdate: this.onTimeUpdate,
          onEnded: this.onEnded,
          onLoadedMetadata: this.recReady,

          ref: function ref(_ref) {
            return _this3.audioEl = _ref;
          },
          preload: 'metadata',
          src: selectedSound.stream_url + '?client_id=33c73dacce84dddddbc15117e071b6ce'
        }),
        _react2.default.createElement(
          'div',
          { className: 'flex flex-row' },
          _react2.default.createElement(
            'div',
            { className: 'PlayButton grow black bg-white w3 h3 ba br-100', onClick: this.props.playClick },
            _react2.default.createElement(
              'svg',
              { viewBox: '0 0 32 32', className: 'h3 w3' },
              isPlaying ? _react2.default.createElement(
                'g',
                null,
                _react2.default.createElement('polygon', { points: '9,8 9,24 13,24 13,8', fill: '#000' }),
                _react2.default.createElement('polygon', { points: '17,8 17,24 21,24 21,8', fill: '#000' })
              ) : _react2.default.createElement('polygon', { points: '10,8 10,24 24,16', fill: '#000' })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'h3 pl2 w-100', onClick: this.setPosition },
            _react2.default.createElement('div', {
              className: 'h3',
              style: {
                width: this.state.percentPlayed + '%',
                background: '#000'
              }
            }),
            _react2.default.createElement('img', {
              className: 'relative bottom-4 h3 w-100 bg-black-20',
              src: selectedSound.waveform_url,
              alt: 'waveform'
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'flex flex-row justify-between' },
          _react2.default.createElement(
            'span',
            { className: 'link black truncate pointer pv1 pr1 f5 fw6' },
            '' + selectedSound.title
          ),
          _react2.default.createElement(
            'span',
            { className: 'black br1 f5 pv1' },
            (0, _index.prettyTime)(this.state.currentTime) + '/' + (0, _index.prettyTime)(this.state.duration)
          )
        )
      );
    }
  }]);

  return Player;
}(_react.Component);

exports.default = Player;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchField = function SearchField(_ref) {
  var handleSubmit = _ref.handleSubmit,
      handleChange = _ref.handleChange,
      handleReset = _ref.handleReset,
      filter = _ref.filter,
      reset = _ref.reset;

  return _react2.default.createElement(
    'form',
    {
      onSubmit: handleSubmit,
      className: 'ml1 mt1 ma0-ns ba f6 flex pointer searchPos' },
    _react2.default.createElement('input', {
      value: filter,
      onChange: handleChange,
      onClick: handleReset,
      className: 'input-reset bn',
      id: 'search',
      placeholder: reset ? '❌  Pokaż wszystkie' : '🔎  Szukaj dźwięków',
      type: 'text' })
  );
};

exports.default = SearchField;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Player = __webpack_require__(20);

var _Player2 = _interopRequireDefault(_Player);

var _Description = __webpack_require__(13);

var _Description2 = _interopRequireDefault(_Description);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sound = function (_Component) {
  _inherits(Sound, _Component);

  function Sound() {
    _classCallCheck(this, Sound);

    return _possibleConstructorReturn(this, (Sound.__proto__ || Object.getPrototypeOf(Sound)).apply(this, arguments));
  }

  _createClass(Sound, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var currentSound = this.props.currentSound;

      return currentSound ? _react2.default.createElement(
        'div',
        { className: 'fadeIn animated pt1' },
        _react2.default.createElement(_Player2.default, {
          ref: function ref(_ref) {
            return _this2.Player = _ref;
          },
          playClick: this.props.playClick,
          onEnded: this.props.onEnded,
          selectedSound: currentSound,
          isPlaying: this.props.isPlaying
        }),
        _react2.default.createElement(_Description2.default, { selectedSound: currentSound })
      ) : null;
    }
  }]);

  return Sound;
}(_react.Component);

exports.default = Sound;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var urlBase = 'https://images.unsplash.com/photo-1470326032834-47d8a3054bb4';
var urlParams = '?dpr=1&auto=compress,format&fit=crop&w=1920&h=1080&q=60&cs=tinysrgb&crop=&bg=';
var unsplashUrl = '' + urlBase + urlParams;

var Welcome = function Welcome() {
  return _react2.default.createElement(
    'header',
    { className: 'vh-100 w-100' },
    _react2.default.createElement(
      'div',
      {
        className: 'bg-near-white h-100',
        style: {
          backgroundImage: 'url(' + unsplashUrl + ')',
          backgroundSize: 'cover',
          backgroundPosition: 'left',
          backgroundRepeat: 'no-repeat'
        }
      },
      _react2.default.createElement(
        'div',
        { className: 'pa3' },
        _react2.default.createElement(
          'h1',
          { className: 'f2 f1-m f-headline-l fw2 black-80 mt2 mb3 lh-title' },
          _react2.default.createElement(
            'a',
            { className: 'link' },
            'd\u017Awi\u0119kowa mapa Wroc\u0142awia'
          )
        ),
        _react2.default.createElement(
          'h2',
          { className: 'fw1 f2-l f3 black-60 mv3' },
          'kolekcja nagra\u0144 audiosfery miasta'
        ),
        _react2.default.createElement(
          _reactRouterDom.Link,
          {
            to: '/fontanna_rynek/map',
            className: 'v-mid f5 no-underline black bg-white bg-animate hover-bg-black hover-white inline-flex items-center pa2 ba border-box mv3' },
          _react2.default.createElement(
            'svg',
            { className: 'w1', viewBox: '0 0 24 24', style: { fill: 'currentcolor' } },
            _react2.default.createElement(
              'title',
              null,
              'Map icon'
            ),
            _react2.default.createElement('path', { d: 'M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z' })
          ),
          _react2.default.createElement(
            'span',
            { className: 'pl1' },
            'Pos\u0142uchaj'
          )
        ),
        _react2.default.createElement(
          'footer',
          { className: 'absolute bottom-0 right-0 left-0 f6 pa2 white', style: { background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8) )' } },
          _react2.default.createElement(
            'span',
            { className: 'fr' },
            'built with \u2764\uFE0F\uFE0F by: ',
            _react2.default.createElement(
              'a',
              { href: 'https://endziu.xyz', className: 'link white hover-bg-white hover-black' },
              'endziu.xyz'
            )
          )
        )
      )
    )
  );
};

exports.default = Welcome;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 25 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("fs-readfile-promise");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("react-gmaps");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("react-image");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(8);

var _express2 = _interopRequireDefault(_express);

var _morgan = __webpack_require__(10);

var _morgan2 = _interopRequireDefault(_morgan);

var _helmet = __webpack_require__(9);

var _helmet2 = _interopRequireDefault(_helmet);

var _compression = __webpack_require__(7);

var _compression2 = _interopRequireDefault(_compression);

var _sourceMapSupport = __webpack_require__(11);

var _sourceMapSupport2 = _interopRequireDefault(_sourceMapSupport);

var _api = __webpack_require__(5);

var _api2 = _interopRequireDefault(_api);

var _routes = __webpack_require__(3);

var _routes2 = _interopRequireDefault(_routes);

var _render = __webpack_require__(6);

var _render2 = _interopRequireDefault(_render);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_sourceMapSupport2.default.install();

var PORT = process.env.PORT || 3000;

var server = (0, _express2.default)();
server.use((0, _helmet2.default)());
server.use((0, _compression2.default)());
server.use((0, _morgan2.default)(':status :method :url'));
server.use('/api', _api2.default);
server.use('/static', _express2.default.static('./dist'));
server.use('/favicon.ico', _express2.default.static('public/favicon.ico'));
server.use(_routes2.default, _render2.default);
server.listen(PORT, function () {
  return console.log('dzwiekowa-mapa is listening on port ' + PORT);
});

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map