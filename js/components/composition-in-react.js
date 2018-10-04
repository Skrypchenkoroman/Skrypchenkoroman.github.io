// here I'd like to show up that inheritance is not as great for React. Try to always use composition because its great.

function FancyBorder(props) {
  return React.createElement(
    "div",
    { className: 'FancyBorder FancyBorder-' + props.color },
    props.children
  );
}

function WelcomeDialog() {
  return (
    // all items under FancyBorder will be passed as props.children and rendered
    // as described in return statement of FancyBorder function
    React.createElement(
      FancyBorder,
      { color: "blue" },
      React.createElement(
        "h1",
        { className: "Dialog-title" },
        "Welcome"
      ),
      React.createElement(
        "p",
        { className: "Dialog-message" },
        "          Thank you for visiting our spacecraft!        "
      )
    )
  );
}

// case 2: we could create our custom props and store inside of them:
function SplitPane(props) {
  return React.createElement(
    "div",
    { className: "SplitPane" },
    React.createElement(
      "div",
      { className: "SplitPane-left" },
      "          ",
      props.left,
      "        "
    ),
    React.createElement(
      "div",
      { className: "SplitPane-right" },
      "          ",
      props.right,
      "        "
    )
  );
}

function App() {
  return React.createElement(SplitPane, {
    left: React.createElement(Contacts, null),
    right: React.createElement(Chat, null) });
}

// case 3: specification by compositioin is more preferable than inheritance. Just create another class 
function Dialog(props) {
  return React.createElement(
    FancyBorder,
    { color: "blue" },
    React.createElement(
      "h1",
      { className: "Dialog-title" },
      "          ",
      props.title,
      "        "
    ),
    React.createElement(
      "p",
      { className: "Dialog-message" },
      "          ",
      props.message,
      "        "
    )
  );
}

function WelcomeDialog() {
  return React.createElement(Dialog, {
    title: "Welcome",
    message: "Thank you for visiting our spacecraft!" });
}