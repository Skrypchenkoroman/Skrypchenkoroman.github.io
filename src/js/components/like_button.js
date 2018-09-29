// tip: "return null;" if you want to avoid rendering of React component

'use strict';

const e = React.createElement;

// 1. instead of class we also could use function LikeButton(props){ return ...}
// but function doesnt have state.
// always try to extend React.Component, call super(props) in constructor.
// 2. name this with CapitalLetter because you will easly define it as <LikeButton /> while render to DOM.
class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    // we could use this.props.liked if it should be set up directly to React element
    if (this.state.liked) {
      return 'You liked this.';
    }

    // default React.createElement signature;
    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
// by using this method we will render LikeButton to domContainer.
ReactDOM.render(e(LikeButton), domContainer);