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
  return React.createElement(
    'li',
    null,
    props.value
  );
}

function NumberList(props) {
  var numbers = props.numbers;
  var listItems = numbers.map(function (number) {
    return (
      // Correct! Key should be specified inside the array.
      React.createElement(ListItem, { key: number.toString(),
        value: number })
    );
  });
  return React.createElement(
    'ul',
    null,
    listItems
  );
}

var numbers = [1, 2, 3, 4, 5];
ReactDOM.render(React.createElement(NumberList, { numbers: numbers }), document.getElementById('root'));