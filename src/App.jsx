import { useState } from "react";
import "./App.css";
import QueueForm from "./components/QueueForm";

export default function App(){
  const [queue, setQueue] = useState([]);
  
  const addToQueue = (customer) => {
    // add data in queue 
  }
  const updateQueue = (id, newStatus) => {
    // change data in queue 
  }
  const removeFromQueue = (id) => {
    // add data in queue 
  }

  return(
    <div className="app">
      <header>
       <h1>Queue Management System</h1>
       <p>Manage your customers Efficiently</p>
      </header>
      <main>
        <QueueForm onAdd={addToQueue} />
        <h1>Display Queue</h1>
      </main>
    </div>
  )
}