// here I'd like to show up that inheritance is not as great for React. Try to always use composition because its great.

function FancyBorder(props) {
    return (
      <div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}
      </div>
    );
  }

  function WelcomeDialog() {
    return (
        // all items under FancyBorder will be passed as props.children and rendered
        // as described in return statement of FancyBorder function
      <FancyBorder color="blue">
        <h1 className="Dialog-title">Welcome</h1>
        <p className="Dialog-message">          Thank you for visiting our spacecraft!        </p>
      </FancyBorder>
    );
  }


  // case 2: we could create our custom props and store inside of them:
  function SplitPane(props) {
    return (
      <div className="SplitPane">        
        <div className="SplitPane-left">          {props.left}        </div>
        <div className="SplitPane-right">          {props.right}        </div>
      </div>
    );
  }
  
  function App() {
    return (
      <SplitPane
        left={
          <Contacts />
        }
        right={
          <Chat />
        } />
    );
  }


  // case 3: specification by compositioin is more preferable than inheritance. Just create another class 
  function Dialog(props) {
    return (
      <FancyBorder color="blue">
        <h1 className="Dialog-title">          {props.title}        </h1>
        <p className="Dialog-message">          {props.message}        </p>
      </FancyBorder>
    );
  }
  
  function WelcomeDialog() {
    return (
      <Dialog
        title="Welcome"
        message="Thank you for visiting our spacecraft!" />  
    );
  }