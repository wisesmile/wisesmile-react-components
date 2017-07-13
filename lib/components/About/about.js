"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * About Component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * presentational component lightweight functions
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * purpose: How things look (markup, styles)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * aware of flux: No
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Read data through props
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Inline style here provided only as an example of the possibilities
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var About = function (_React$Component) {
  _inherits(About, _React$Component);

  function About(props) {
    _classCallCheck(this, About);

    return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).call(this, props));
  }

  _createClass(About, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "about" },
        _react2.default.createElement(
          "h2",
          { className: "title" },
          this.props.name
        ),
        _react2.default.createElement(
          "h2",
          { className: "version" },
          this.props.version
        )
      );
    }
  }]);

  return About;
}(_react2.default.Component);

About.propTypes = {
  name: _react2.default.PropTypes.string.isRequired,
  version: _react2.default.PropTypes.string.isRequired
};

exports.default = About;