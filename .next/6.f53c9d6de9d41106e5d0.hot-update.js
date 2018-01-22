webpackHotUpdate(6,{

/***/ 415:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/elvischan/Desktop/coding projects/bitcoin-prices/components/Prices.js";


var Prices = function (_React$Component) {
  (0, _inherits3.default)(Prices, _React$Component);

  function Prices() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Prices);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Prices.__proto__ || (0, _getPrototypeOf2.default)(Prices)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      currency: 'USD' // default
    }, _this.getPrice = function () {
      var currency = _this.state.currency;

      return _react2.default.createElement("li", { className: "list-group-item", __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, "Bitcoin rate for ", _this.props.bpi[currency].description, ":", _react2.default.createElement("span", { "class": "badge badge-primary", __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, _this.props.bpi[currency].code), _react2.default.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, _this.props.bpi[currency].rate));
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Prices, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement("select", {
        onChange: function onChange(e) {
          return _this2.setState({ currency: e.target.value });
        },
        className: "form-control",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement("option", { value: "USD", __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, "USD"), _react2.default.createElement("option", { value: "GBP", __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, "GBP"), _react2.default.createElement("option", { value: "EUR", __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, "EUR")), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }), _react2.default.createElement("ul", { className: "list-group", __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, this.getPrice()));
    }
  }]);

  return Prices;
}(_react2.default.Component);

exports.default = Prices;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUHJpY2VzLmpzIl0sIm5hbWVzIjpbIlByaWNlcyIsInN0YXRlIiwiY3VycmVuY3kiLCJnZXRQcmljZSIsInByb3BzIiwiYnBpIiwiZGVzY3JpcHRpb24iLCJjb2RlIiwicmF0ZSIsInNldFN0YXRlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQU0sQTs7Ozs7Ozs7Ozs7Ozs7NE0sQUFDSjtnQkFBUSxBQUNJLE1BREosQUFDVyxBO0FBRFgsQUFDTixhQUdGLEEsV0FBVyxZQUFNO1VBQUEsQUFDUCxXQUFhLE1BRE4sQUFDVyxNQURYLEFBQ1AsQUFDUjs7NkJBQ0UsY0FBQSxRQUFJLFdBQUosQUFBYztvQkFBZDtzQkFBQTtBQUFBO09BQUEsRUFDb0IsMkJBQUEsQUFBSyxNQUFMLEFBQVcsSUFBWCxBQUFlLFVBRG5DLEFBQzZDLGFBQzNDLHFCQUFBLGNBQUEsVUFBTSxTQUFOLEFBQVk7b0JBQVo7c0JBQUEsQUFBbUM7QUFBbkM7ZUFBbUMsQUFBSyxNQUFMLEFBQVcsSUFBWCxBQUFlLFVBRnBELEFBRUUsQUFBNEQsQUFDNUQsdUJBQUEsY0FBQTs7b0JBQUE7c0JBQUEsQUFBUztBQUFUO0FBQUEsZUFBUyxBQUFLLE1BQUwsQUFBVyxJQUFYLEFBQWUsVUFKNUIsQUFDRSxBQUdFLEFBQWtDLEFBR3ZDO0E7Ozs7OzZCQUVRO21CQUNQOzs2QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7a0JBQ1kscUJBQUE7aUJBQUssT0FBQSxBQUFLLFNBQVMsRUFBRSxVQUFVLEVBQUEsQUFBRSxPQUFqQyxBQUFLLEFBQWMsQUFBcUI7QUFEcEQsQUFFRTttQkFGRixBQUVZOztvQkFGWjtzQkFBQSxBQUlFO0FBSkY7QUFDRSx5QkFHQSxjQUFBLFlBQVEsT0FBUixBQUFjO29CQUFkO3NCQUFBO0FBQUE7U0FKRixBQUlFLEFBQ0Esd0JBQUEsY0FBQSxZQUFRLE9BQVIsQUFBYztvQkFBZDtzQkFBQTtBQUFBO1NBTEYsQUFLRSxBQUNBLHdCQUFBLGNBQUEsWUFBUSxPQUFSLEFBQWM7b0JBQWQ7c0JBQUE7QUFBQTtTQVBKLEFBQ0UsQUFNRSxBQUVGOztvQkFBQTtzQkFURixBQVNFLEFBQ0E7QUFEQTtBQUFBLDBCQUNBLGNBQUEsUUFBSSxXQUFKLEFBQWM7b0JBQWQ7c0JBQUEsQUFBNEI7QUFBNUI7Y0FYSixBQUNFLEFBVUUsQUFBNEIsQUFBSyxBQUd0Qzs7Ozs7RUEvQmtCLGdCQUFNLEEsQUFrQzNCOztrQkFBQSxBQUFlIiwiZmlsZSI6IlByaWNlcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZWx2aXNjaGFuL0Rlc2t0b3AvY29kaW5nIHByb2plY3RzL2JpdGNvaW4tcHJpY2VzIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/elvischan/Desktop/coding projects/bitcoin-prices/components/Prices.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/elvischan/Desktop/coding projects/bitcoin-prices/components/Prices.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5mNTNjOWQ2ZGU5ZDQxMTA2ZTVkMC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QcmljZXMuanM/ZTJhMDFmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQcmljZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBjdXJyZW5jeTogJ1VTRCcsIC8vIGRlZmF1bHRcbiAgfTtcblxuICBnZXRQcmljZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IGN1cnJlbmN5IH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+XG4gICAgICAgIEJpdGNvaW4gcmF0ZSBmb3Ige3RoaXMucHJvcHMuYnBpW2N1cnJlbmN5XS5kZXNjcmlwdGlvbn06XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2UgYmFkZ2UtcHJpbWFyeVwiPnt0aGlzLnByb3BzLmJwaVtjdXJyZW5jeV0uY29kZX08L3NwYW4+XG4gICAgICAgIDxzdHJvbmc+e3RoaXMucHJvcHMuYnBpW2N1cnJlbmN5XS5yYXRlfTwvc3Ryb25nPlxuICAgICAgPC9saT5cbiAgICApO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHNlbGVjdFxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0U3RhdGUoeyBjdXJyZW5jeTogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJVU0RcIj5VU0Q8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiR0JQXCI+R0JQPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkVVUlwiPkVVUjwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwXCI+e3RoaXMuZ2V0UHJpY2UoKX08L3VsPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcmljZXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1ByaWNlcy5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTs7QUFGQTtBQUlBO0FBSkE7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUdBOzs7OztBQS9CQTtBQUNBO0FBaUNBOzs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=