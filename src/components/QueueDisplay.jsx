import React from 'react'

const QueueDisplay = (queue, onUpdateStatus, onRemove) => {
    const getStatusColor = (status) =>{
        switch(status){
            case "waiting":
                return "var(--warning)";
            case "serving":
                return "var(--success)";
            case "completed":
                return "var(--info)";
            default :
                return "var(--text)"
        }
    }
  return (
    <div className='queue-display'>
        <h2>Current Queue</h2>
          {queue.length === 0 ? (
            <p className='empty-queue'>No Customer Available</p>
            ) : (
            <div className='queue-list'>
                {queue.map((customer)=>(
                    <div className='queue-item' key={customer.id}>
                        <div className='customer-info'>
                            <h3>{customer.name}</h3>
                            <p>{customer.service}</p>
                        </div>
                    </div>
                ))}
            </div>
            )}
    </div>
  )
}

export default QueueDisplay
