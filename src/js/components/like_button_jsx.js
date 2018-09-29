// HOW TO USE JSX and small Props stuff
// 1. React elements are immutable. So when you've created them - they should be the same;
// avoid changing / updating them like having a function which sets some props
// or updates property of props as increment / decrement; Use state instead.

'use strict';

class Hello extends React.Component {
  render() {
    // as you can see this is instead of this.state.toWhat
    // also, we could use Javascript here easly. Use && operator
    // because in Javascript boolean && expression = expression if boolean true; and false if boolean false
    return <div>Hello {this.props.toWhat} {this.props.someValue > 0 && <div></div>}</div>;
  }
}

const domContainer = document.querySelector('#like_button_container-jsx');
ReactDOM.render(
  // this is where JSX comes to play
  // by using command like: npx babel --watch src --out-dir . --presets react-app/prod
  // you will precompile this JSX to javascript;
  <Hello toWhat="World" />,
  domContainer
);