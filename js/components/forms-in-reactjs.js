var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// try to always use Controlled Components for <input>, <textarea>, <select>
// in HTML they are controlled by DOM;
// in react we should use state to update value, display options, etc.
// some form elements like input file couldn't been manageble via React. <input type="file" />

// If you need to have multiple similar form components you could use name:
// this.setState({   [name]: value });
var NameForm = function (_React$Component) {
  _inherits(NameForm, _React$Component);

  function NameForm(props) {
    _classCallCheck(this, NameForm);

    var _this = _possibleConstructorReturn(this, (NameForm.__proto__ || Object.getPrototypeOf(NameForm)).call(this, props));

    _this.state = { value: '' };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(NameForm, [{
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState({ value: event.target.value });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'form',
        { onSubmit: this.handleSubmit },
        React.createElement(
          'label',
          null,
          'Name:',
          React.createElement('input', { type: 'text', value: this.state.value, onChange: this.handleChange })
        ),
        React.createElement('input', { type: 'submit', value: 'Submit' })
      );
    }
  }]);

  return NameForm;
}(React.Component);

// This is textareas example


var EssayForm = function (_React$Component2) {
  _inherits(EssayForm, _React$Component2);

  function EssayForm(props) {
    _classCallCheck(this, EssayForm);

    var _this2 = _possibleConstructorReturn(this, (EssayForm.__proto__ || Object.getPrototypeOf(EssayForm)).call(this, props));

    _this2.state = {
      value: 'Please write an essay about your favorite DOM element.'
    };

    _this2.handleChange = _this2.handleChange.bind(_this2);
    _this2.handleSubmit = _this2.handleSubmit.bind(_this2);
    return _this2;
  }

  _createClass(EssayForm, [{
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState({ value: event.target.value });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      alert('An essay was submitted: ' + this.state.value);
      event.preventDefault();
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'form',
        { onSubmit: this.handleSubmit },
        React.createElement(
          'label',
          null,
          'Essay:',
          React.createElement('textarea', { value: this.state.value, onChange: this.handleChange })
        ),
        React.createElement('input', { type: 'submit', value: 'Submit' })
      );
    }
  }]);

  return EssayForm;
}(React.Component);

//
// And this is select:
// IN react you can setup value for <select> element to select 1 or more options.
// its more convenient than setting up for each <option>.
// to setup more than 1 option: <select multiple={true} value={['B', 'C']}>

var FlavorForm = function (_React$Component3) {
  _inherits(FlavorForm, _React$Component3);

  function FlavorForm(props) {
    _classCallCheck(this, FlavorForm);

    var _this3 = _possibleConstructorReturn(this, (FlavorForm.__proto__ || Object.getPrototypeOf(FlavorForm)).call(this, props));

    _this3.state = { value: 'coconut' };

    _this3.handleChange = _this3.handleChange.bind(_this3);
    _this3.handleSubmit = _this3.handleSubmit.bind(_this3);
    return _this3;
  }

  _createClass(FlavorForm, [{
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState({ value: event.target.value });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      alert('Your favorite flavor is: ' + this.state.value);
      event.preventDefault();
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'form',
        { onSubmit: this.handleSubmit },
        React.createElement(
          'label',
          null,
          'Pick your favorite flavor:',
          React.createElement(
            'select',
            { value: this.state.value, onChange: this.handleChange },
            React.createElement(
              'option',
              { value: 'grapefruit' },
              'Grapefruit'
            ),
            React.createElement(
              'option',
              { value: 'lime' },
              'Lime'
            ),
            React.createElement(
              'option',
              { value: 'coconut' },
              'Coconut'
            ),
            React.createElement(
              'option',
              { value: 'mango' },
              'Mango'
            )
          )
        ),
        React.createElement('input', { type: 'submit', value: 'Submit' })
      );
    }
  }]);

  return FlavorForm;
}(React.Component);