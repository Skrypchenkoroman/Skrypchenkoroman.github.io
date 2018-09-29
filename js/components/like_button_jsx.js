// HOW TO USE JSX and small Props stuff
// 1. React elements are immutable. So when you've created them - they should be the same;
// avoid changing / updating them like having a function which sets some props
// or updates property of props as increment / decrement; Use state instead.

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Hello = function (_React$Component) {
  _inherits(Hello, _React$Component);

  function Hello() {
    _classCallCheck(this, Hello);

    return _possibleConstructorReturn(this, (Hello.__proto__ || Object.getPrototypeOf(Hello)).apply(this, arguments));
  }

  _createClass(Hello, [{
    key: 'render',
    value: function render() {
      // as you can see this is instead of this.state.toWhat
      // also, we could use Javascript here easly. Use && operator
      // because in Javascript boolean && expression = expression if boolean true; and false if boolean false
      return React.createElement(
        'div',
        null,
        'Hello ',
        this.props.toWhat,
        ' ',
        this.props.someValue > 0 && React.createElement('div', null)
      );
    }
  }]);

  return Hello;
}(React.Component);

var domContainer = document.querySelector('#like_button_container-jsx');
ReactDOM.render(
// this is where JSX comes to play
// by using command like: npx babel --watch src --out-dir . --presets react-app/prod
// you will precompile this JSX to javascript;
React.createElement(Hello, { toWhat: 'World' }), domContainer);