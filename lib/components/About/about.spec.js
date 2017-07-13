'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _chai = require('chai');

var _enzyme = require('enzyme');

var _ = require('./');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<About />', function () {
  var wrapper = void 0;
  var name = "lorem";
  var version = "1.0";

  beforeEach(function () {
    wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, { name: name, version: version }));
  });

  it('wraps the component in an about class', function () {
    (0, _chai.expect)(wrapper.find('.about')).to.have.length(1);
  });

  it('wraps the name prop in an H2', function () {
    (0, _chai.expect)(wrapper.find('h2').first().text()).to.equal(name);
  });
});