// import React, { useState, useEffect } from 'react';

// function ListItems() {
//   const [items, setItems] = useState([]);
//   const [inputValue, setInputValue] = useState('');

//   const addItem = () => {
//     setItems([...items, inputValue]);
//     setInputValue('');
//   };

//   useEffect(() => {
//     console.log('Component ListItems updated');
//   }, [items]);

//   return (
//     <div>
//       <input 
//         type="text" 
//         value={inputValue} 
//         onChange={(e) => setInputValue(e.target.value)} 
//       />
//       <button onClick={addItem}>Add Item</button>
//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ListItems;

// добавление хука useEffect B ListItems "jsx"
import React, { useState, useEffect } from 'react';

function ListItems() {
    const [inputValue, setInputValue] = useState('');
    const [items, setItems] = useState([]);

    useEffect(() => {
        console.log('Component ListItems updated');
    }, [items]);

    const addItem = () => {
        setItems([...items, inputValue]);
        setInputValue('');
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={addItem}>Add Item</button>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default ListItems;
