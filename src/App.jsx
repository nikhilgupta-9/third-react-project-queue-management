import { useState } from "react";
import "./App.css";
import QueueForm from "./components/QueueForm";
import QueueDisplay from "./components/QueueDisplay";

export default function App(){
  const [queue, setQueue] = useState([]);
  
  const addToQueue = (customer) => {
    // add data in queue 
    setQueue([...queue, {...customer, id : Date.now(), status : "waiting"}])
  }
  const updateQueue = (id, newStatus) => {
    // change data in queue 
    setQueue(queue.map(customer =>
      customer.id === id ? {...customer, status: newStatus} : customer
    ))
  }
  const removeFromQueue = (id) => {
    setQueue(queue.filter(customer => customer.id !== id))
  }

  return(
    <div className="app">
      <header>
       <h1>Queue Management System</h1>
       <p>Manage your customers Efficiently</p>
      </header>
      <main>
        <QueueForm onAdd={addToQueue} />
        <QueueDisplay
        queue={queue}
        onUpdateStatus={updateQueue}
        onRemove={removeFromQueue}
         />
      </main>
    </div>
  )
}