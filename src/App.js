import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Messages from './components/Messages';
import { useEffect, useState } from 'react';
import Spinner from './components/Spinner';
import Card from './components/Card';
import url from '../src/data';
import axios from 'axios';

function App() {
  const [Loading,setLoading]=useState(false);
  const [Message,setMessage]=useState([]);

  async function fetchData(){
    const uri = url;
    setLoading(true);
    try{
      const response = await axios.get(uri);
      setMessage(response.data);
    }
    catch{
      console.log("error in fetching the data");
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchData();
  },[]);

  return (
    <div className="App">
      <div>
      <Navbar></Navbar>
      </div>

      <div>
        <Messages Message={Message}></Messages>
      </div>

      <div>
        {
          Loading ? (<Spinner/>):(<Card/>)
        }
      </div>
      
    </div>
  );
}

export default App;
