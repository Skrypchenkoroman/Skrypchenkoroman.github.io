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

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // syntax #1
    // This binding is necessary to make `this` work in the callback    
    this.handleClick = this.handleClick.bind(this);
  }

  // usually we'd like to create a separate method in class
  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      // syntax #2
      // If you aren’t using class fields syntax, you can use an arrow function in the callback:
      // <button onClick={(e) => this.handleClick(e)}>
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.querySelector('.toggle')
);