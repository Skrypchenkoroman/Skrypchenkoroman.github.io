// KEYS
// 0. Keys help React identify which items have changed, are added, or are removed.
// Keys should be given to the elements inside the array to give the elements a stable identity;
// 1. A good rule of thumb is that elements inside the map() call need keys.
// 2. Keys Must Only Be Unique Among Siblings.
// Keys used within arrays should be unique among their siblings.
// However they don’t need to be globally unique.
// We can use the same keys when we produce two different arrays.
// 3. If no unique info - you should define it and avoid using index as a key because order could be changed.
// 4. Last but not least, you could pass the key directly by using attributes: <Post key={post.id}, id={post.id}} />
// and you cant reach this.props.key inside;


function ListItem(props) {
    // Correct! There is no need to specify the key here:
    return <li>{props.value}</li>;
  }
  
  function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      // Correct! Key should be specified inside the array.
      <ListItem key={number.toString()}
                value={number} />
  
    );
    return (
      <ul>
        {listItems}
      </ul>
    );
  }
  
  const numbers = [1, 2, 3, 4, 5];
  ReactDOM.render(
    <NumberList numbers={numbers} />,
    document.getElementById('root')
  );