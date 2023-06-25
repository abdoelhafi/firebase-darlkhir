import logo from './logo.svg';
import React, { useEffect, useState } from 'react';

import './App.css';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      //const response = await fetch('https://api.example.com/items');
      //const data = await response.json();
      const data = [{
        photo: "https://static.vecteezy.com/system/resources/previews/002/774/528/original/teamwork-illustration-concept-worker-helping-each-other-for-business-group-free-vector.jpg",
        title: "let's make morooco great again",
        description: "activity of making morocco  great again"
      },
      {
        photo: "https://static.vecteezy.com/system/resources/previews/002/774/528/original/teamwork-illustration-concept-worker-helping-each-other-for-business-group-free-vector.jpg",
        title: "let's make morooco great again",
        description: "activity of making morocco  great again"
      },
      {
        photo: "https://static.vecteezy.com/system/resources/previews/002/774/528/original/teamwork-illustration-concept-worker-helping-each-other-for-business-group-free-vector.jpg",
        title: "let's make morooco great again",
        description: "activity of making morocco  great again"
      }]
      setItems(data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  return (
    <div className="App">
      <div className="App-header">
        <h1>Darlkhir Firebase Demo</h1>
        <h4>Fetch results: Get Request. </h4>
        <div className="item-list" style={{ display: 'flex', "flex-wrap":'wrap',margin:"auto"}}>
      {items.map((item, index) => (
        <div className="item" key={index}>
          <img
            className="item-photo"
            src={item.photo}
            alt="Item"
            style={{ width: '200px', height: '200px' }}
          />
          <h3 className="item-title" style={{ fontSize: '18px', margin: '10px' }}>
            {item.title}
          </h3>
          <p className="item-description" style={{ fontSize: '14px', color: '#666' }}>
            {item.description}
          </p>
        </div>
      ))}
    </div>
      </div>
    </div>
  );
}

export default App;
