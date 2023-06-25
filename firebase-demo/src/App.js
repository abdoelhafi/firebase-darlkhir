import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
// Import initializeApp from firebase
import firebase from 'firebase/app';
import 'firebase/database'
import './App.css';
// firebase config object
const firebaseConfig = {

  apiKey: "AIzaSyBkP44I11K_3f8bWdlbSsmVKiolVEs7HK8",
  authDomain: "fir-demo-workshop-a6de4.firebaseapp.com",
  projectId: "fir-demo-workshop-a6de4",
  storageBucket: "fir-demo-workshop-a6de4.appspot.com",
  messagingSenderId: "98054027226",
  appId: "1:98054027226:web:28deffd0c11356fec0f2e3"

};


function App() {

  // Initialize Firebase APP
  //console.log(firebase)
  console.log(firebase.apps)
  if (firebase.apps.length == 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetchItems();
  }, []);

  // GET REQUEST : FETCH DATA FROM THE DATABASE
 
  const fetchItems = async () => {
    try {
      firebase.database().ref("/activities").on("value",res => {

        const eltValue = res.val()
        setItems(eltValue)
        setLoading(false)
        console.log("the result", items)
      })
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  // ADD DATA TO THE DATABASE
  const addItems = () => {

  }
  // DELETE FROM DATABASE
  const DeleteItems = () => {
    
  }

  return (
     loading ? <h1>LOADING</h1> : <div className="App">
      <div className="App-header">
        <h1>Darlkhir Firebase Demo</h1>
        <h4>Fetch results: Get Request. </h4>
        <div className="item-list" style={{ display: 'flex', flexWrap:'wrap',margin:"auto"}}>
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
    <button style={buttonStyles}>Create Activity</button>
      </div>
    </div>
  );
}
const buttonStyles = {
  padding: '10px 20px',
  backgroundColor: '#4CAF50',
  color: 'white',
  fontSize: '16px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};
export default App;
