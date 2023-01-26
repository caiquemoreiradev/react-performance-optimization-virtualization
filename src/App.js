import { useState } from 'react';
import './App.css';

function App() {

  const [count] = useState(1000);
  const [scrollTop, setScrollTop] = useState(0);

  const itemHeight = 30;
  const windowHeight = 500;
  const innerHeight = count * itemHeight;

  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - 3);
  const endIndex = Math.min(Math.floor((scrollTop + windowHeight) / itemHeight) + 3, count);

  const items = Array.from({ length: count }, (_, i) => {
    return {
      index: i + 1,
      name: `Movie ${i + 1}`
    }
  });

  function displayItems() {

    const displayedItems = items.slice(startIndex, endIndex);

    const itemsList = displayedItems.map((item) => {

      return (
        <div
          key={item.id}
          style={{
            height: itemHeight,
            position: 'absolute',
            width: '100%',
            top: `${item.index * itemHeight}px`
          }}>
          {item.name}
        </div>
      )
    })

    return itemsList;
  };

  function onScroll(event) {

    setScrollTop(event.target.scrollTop);
  }

  return (
    <div className="App">
      <h1>Movies List</h1>

      <div
        className='outerbox'
        style={{
          border: '1px solid red',
          overflowY: 'scroll',
          height: windowHeight,
          width: 300,
          margin: '0 auto'
        }}
        onScroll={onScroll}
      >
        <div
          className="innerbox"
          style={{
            height: innerHeight,
            position: 'relative'
          }}
        >
          {displayItems()}
        </div>
      </div>
    </div>
  );
}

export default App;
