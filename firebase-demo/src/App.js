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
  if (firebase.apps.length == 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchItems();
  }, []);

  // GET REQUEST : FETCH DATA FROM THE DATABASE
  const fetchItems = () => {
    try {
      firebase.database().ref("/activities").on("value",res => {
        let resData = []
        const dataObject = res.val()
        for (var elementKey in dataObject){
          resData.push(dataObject[elementKey])
        }
        setItems(resData)
        setLoading(false)
      })
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  // ADD DATA TO THE DATABASE
  const addItem = () => {
    const dataToAdd = {
      photo: "https://static.vecteezy.com/system/resources/previews/002/774/528/original/teamwork-illustration-concept-worker-helping-each-other-for-business-group-free-vector.jpg",
      title: "let's make morooco great again",
      description: "activity of making morocco  great again"
    }
    firebase.database().ref("/activities").push(dataToAdd, error => {
      if(!error) {
        console.log("succeffuly added item to the database")
      }else{
        console.log("error occured")
      }
    })
  }
  // DELETE FROM DATABASE
  const DeleteItem = () => {
    const itemToDeleteId = "-NYn_T_UyfD-ud1lmHnu"
    firebase.
    database()
    .ref("/activities")
    .child(itemToDeleteId)
    .remove()
    .then(()=>{
      console.log("succefully deleted item with Id:", itemToDeleteId )
    }).catch(error =>{
      console.log(error)
    });
  }

  return (
     loading ? <h1>LOADING</h1> : <div className="App">
      <div className="App-header">
        <h1>Darlkhir Firebase workshop</h1>
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
    <button onClick={addItem} style={addButtonStyles}>Create Activity</button>
    <button onClick={DeleteItem} style={deleteButtonStyles}>delete Activity</button>

      </div>
    </div>
  );
}
const addButtonStyles = {
  padding: '10px 20px',
  backgroundColor: '#4CAF50',
  color: 'white',
  fontSize: '16px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};
const deleteButtonStyles = {
  padding: '10px 20px',
  backgroundColor: '#yellow',
  color: 'red',
  fontSize: '16px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};
export default App;
