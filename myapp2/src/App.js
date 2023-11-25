import React, { useState } from 'react';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  let throttleFlag=false;

  let debounceTimeout;

  const handleInputChange = (event) => {
    const value = event.target.value;

 

    // Debounce
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => filterItems(value), 300);

    // Throttle
    if (!throttleFlag) {
      throttleFlag = true;
      setTimeout(() => {
        filterItems(value);
        throttleFlag = false;
      }, 300);
    }

    setInputValue(value);
  };

  const filterItems = (value) => {
    // Replace this with your actual filtering logic
    const filtered = items.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Grapes', 'Lemon', 'Orange', 'Peach'];

  return (
    <div>
      <h1>Debounce and Throttle Demo</h1>
      <input
        type="text"
        placeholder="Search..."
        value={inputValue}
        onChange={handleInputChange}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;

