var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// HOW TO WORK WITH STATE:
// 1. Do Not Modify State Directly.
// wrong -  this.state.comment = 'Hello';
// correct - this.setState({comment: 'Hello'});
// 2. State Updates May Be Asynchronous. React may batch multiple setState() calls into a single update for performance.
// wrong - this.setState({  counter: this.state.counter + this.props.increment, });
// correct - this.setState((state, props) => ({   counter: state.counter + props.increment }));
// 3. State Updates are Merged. When you call setState(), React merges the object you provide into the current state.
// F.e. if state has 2 props and we have 2 functions which updates different props of state.
// they will be merged correctly.


// this is function declaration instead of class declaration as we used before. Don't do that.
function ActionLink() {
  function handleClick(e) {
    // return false; is not working to prevent default behavior of the element for React
    // but such approach works for onClick in HTML element directly.
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    // as you can see in HTML we usually use method as a string: <a href="#" onClick="handleClick()">
    // in react we are using as a event handler
    React.createElement(
      'a',
      { href: '#', onClick: handleClick },
      'Click me'
    )
  );
}

var Clock = function (_React$Component) {
  _inherits(Clock, _React$Component);

  function Clock(props) {
    _classCallCheck(this, Clock);

    var _this = _possibleConstructorReturn(this, (Clock.__proto__ || Object.getPrototypeOf(Clock)).call(this, props));

    _this.state = { date: new Date(), numberOfIncr: 0 };
    return _this;
  }

  // These 2 methods are called “lifecycle hooks”.
  // We want to set up a timer whenever the Clock is rendered to the DOM for the first time. This is called “mounting” in React.
  // The componentDidMount() hook runs after the component output has been rendered to the DOM. 
  // This is a good place to set up a timer:


  _createClass(Clock, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.timerID = setInterval(function () {
        return _this2.tick();
      }, 1000);
    }

    // We also want to clear that timer whenever the DOM produced by the Clock is removed. This is called “unmounting” in React.
    // We will tear down the timer in the componentWillUnmount() lifecycle hook:

  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.timerID);
    }

    // Finally, we will implement a method called tick() that the Clock component will run every second.
    // It will use this.setState() to schedule updates to the component local state:

  }, {
    key: 'tick',
    value: function tick() {
      // this might work for such timer and similar code will work in HTML inline onclick to prevent default for link / button
      // but it won't work as a prevent-default for React. So you should call e.preventDefault(); directly.
      if (this.state.numberOfIncr >= 10) {
        return false;
      }

      console.log(this.state.numberOfIncr);

      // Thanks to the setState() call, React knows the state has changed, and calls the render() method 
      // again to learn what should be on the screen. This time, this.state.date in the render() method 
      // will be different, and so the render output will include the updated time. React updates the DOM accordingly.
      this.setState({
        date: new Date()
      });

      this.setState(function (state, props) {
        numberOfIncr: state.numberOfIncr++;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return (
        // here is an example of nested react elements
        React.createElement(
          'div',
          null,
          React.createElement(
            'h1',
            null,
            'Hello, world!'
          ),
          React.createElement(
            'h2',
            null,
            'It is ',
            this.state.date.toLocaleTimeString(),
            '.'
          ),
          React.createElement(
            'div',
            null,
            React.createElement(ActionLink, null)
          )
        )
      );
    }
  }]);

  return Clock;
}(React.Component);

ReactDOM.render(
// Note that as a first parameter of render method it should be a single tag. So if you want to have 3 clocks - wrap them up.
// also, you can pass this.state.data as a attribute as we described in like_button_jsx for props.
// This is commonly called a “top-down” or “unidirectional” data flow. Any state is always owned by some specific component, 
// and any data or UI derived from that state can only affect components “below” them in the tree.
React.createElement(
  'div',
  null,
  React.createElement(Clock, null),
  React.createElement(Clock, null),
  React.createElement(Clock, null)
), document.querySelector('.custom-clock'));