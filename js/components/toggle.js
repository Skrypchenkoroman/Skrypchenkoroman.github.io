var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// HOW TO USE EVENTS BINDING
// 1. The problem with syntax #2 is that a different callback is created each time the LoggingButton renders.
// In most cases, this is fine. However, if this callback is passed as a prop to lower components, 
// those components might do an extra re-rendering. We generally recommend binding in the constructor or using the class 
// fields syntax, to avoid this sort of performance problem.
// 2. The below two lines are equivalent, and use arrow functions and Function.prototype.bind respectively.
// In both cases, the e argument representing the React event will be passed as a second argument after the ID.
// With an arrow function, we have to pass it explicitly, but with bind any further arguments are automatically forwarded.
// <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
// <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>

var Toggle = function (_React$Component) {
  _inherits(Toggle, _React$Component);

  function Toggle(props) {
    _classCallCheck(this, Toggle);

    var _this = _possibleConstructorReturn(this, (Toggle.__proto__ || Object.getPrototypeOf(Toggle)).call(this, props));

    _this.state = { isToggleOn: true };

    // syntax #1
    // This binding is necessary to make `this` work in the callback    
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  // usually we'd like to create a separate method in class


  _createClass(Toggle, [{
    key: 'handleClick',
    value: function handleClick() {
      this.setState(function (state) {
        return {
          isToggleOn: !state.isToggleOn
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return (
        // syntax #2
        // If you aren’t using class fields syntax, you can use an arrow function in the callback:
        // <button onClick={(e) => this.handleClick(e)}>
        React.createElement(
          'button',
          { onClick: this.handleClick },
          this.state.isToggleOn ? 'ON' : 'OFF'
        )
      );
    }
  }]);

  return Toggle;
}(React.Component);

ReactDOM.render(React.createElement(Toggle, null), document.querySelector('.toggle'));