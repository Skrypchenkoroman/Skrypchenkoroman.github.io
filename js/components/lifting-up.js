var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// In case when we have 2 inputs and they should both update each others;

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return React.createElement(
            'p',
            null,
            'The water would boil.'
        );
    }
    return React.createElement(
        'p',
        null,
        'The water would not boil.'
    );
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
}

function tryConvert(temperature, convert) {
    var input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    var output = convert(input);
    var rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

var scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

var TemperatureInput = function (_React$Component) {
    _inherits(TemperatureInput, _React$Component);

    function TemperatureInput(props) {
        _classCallCheck(this, TemperatureInput);

        var _this = _possibleConstructorReturn(this, (TemperatureInput.__proto__ || Object.getPrototypeOf(TemperatureInput)).call(this, props));

        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }

    _createClass(TemperatureInput, [{
        key: 'handleChange',
        value: function handleChange(e) {
            // here we have function in props: onTemperatureChange. And we can use that to update parent.
            // that will call methods from Calculator class like handleCelsiusChange / handleFahrenheitChange
            this.props.onTemperatureChange(e.target.value);
        }
    }, {
        key: 'render',
        value: function render() {
            var temperature = this.props.temperature;
            var scale = this.props.scale;
            return React.createElement(
                'fieldset',
                null,
                React.createElement(
                    'legend',
                    null,
                    'Enter temperature in ',
                    scaleNames[scale],
                    ':'
                ),
                React.createElement('input', { value: temperature,
                    onChange: this.handleChange })
            );
        }
    }]);

    return TemperatureInput;
}(React.Component);

var Calculator = function (_React$Component2) {
    _inherits(Calculator, _React$Component2);

    function Calculator(props) {
        _classCallCheck(this, Calculator);

        // register handlers
        var _this2 = _possibleConstructorReturn(this, (Calculator.__proto__ || Object.getPrototypeOf(Calculator)).call(this, props));

        _this2.handleCelsiusChange = _this2.handleCelsiusChange.bind(_this2);
        _this2.handleFahrenheitChange = _this2.handleFahrenheitChange.bind(_this2);
        _this2.state = { temperature: '', scale: 'c' };
        return _this2;
    }

    _createClass(Calculator, [{
        key: 'handleCelsiusChange',
        value: function handleCelsiusChange(temperature) {
            this.setState({ scale: 'c', temperature: temperature });
        }
    }, {
        key: 'handleFahrenheitChange',
        value: function handleFahrenheitChange(temperature) {
            this.setState({ scale: 'f', temperature: temperature });
        }
    }, {
        key: 'render',
        value: function render() {
            var scale = this.state.scale;
            var temperature = this.state.temperature;
            var celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
            var fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

            return React.createElement(
                'div',
                null,
                React.createElement(TemperatureInput, {
                    scale: 'c',
                    temperature: celsius,
                    onTemperatureChange: this.handleCelsiusChange }),
                React.createElement(TemperatureInput, {
                    scale: 'f',
                    temperature: fahrenheit,
                    onTemperatureChange: this.handleFahrenheitChange }),
                React.createElement(BoilingVerdict, {
                    celsius: parseFloat(celsius) })
            );
        }
    }]);

    return Calculator;
}(React.Component);

ReactDOM.render(React.createElement(Calculator, null), document.querySelector('.calculator'));

// To recap:
// 1. React calls the function specified as onChange on the DOM <input>. In our case, this is the handleChange method in the TemperatureInput component.
// 2. The handleChange method in the TemperatureInput component calls this.props.onTemperatureChange() with the new desired value. Its props, including onTemperatureChange, were provided by its parent component, the Calculator.
// 3. When it previously rendered, the Calculator has specified that onTemperatureChange of the Celsius TemperatureInput is the Calculator’s handleCelsiusChange method, and onTemperatureChange of the Fahrenheit TemperatureInput is the Calculator’s handleFahrenheitChange method. So either of these two Calculator methods gets called depending on which input we edited.
// 4. Inside these methods, the Calculator component asks React to re-render itself by calling this.setState() with the new input value and the current scale of the input we just edited.
// 5. React calls the Calculator component’s render method to learn what the UI should look like. The values of both inputs are recomputed based on the current temperature and the active scale. The temperature conversion is performed here.
// 6. React calls the render methods of the individual TemperatureInput components with their new props specified by the Calculator. It learns what their UI should look like.
// 7. React calls the render method of the BoilingVerdict component, passing the temperature in Celsius as its props.
// 8. React DOM updates the DOM with the boiling verdict and to match the desired input values. The input we just edited receives its current value, and the other input is updated to the temperature after conversion.