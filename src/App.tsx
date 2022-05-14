import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const initialStatus = { name: '', success: false };
  const [stats, setStats] = useState(initialStatus);
  const connect = () => {
    fetch('https://df62-91-129-110-254.ngrok.io/rein')
    .then(resp => resp.json())
    .then(data => setStats(data));

  }

  const disconnect = () => {
    setStats(initialStatus);
  }
  return (
    <div className="text-3xl font-bold underline">
      <p>Current status - {stats.success ? 'Connected' : 'Disconnected'}</p>
      {stats.success ?  <button onClick={disconnect}>Disconnect API</button> :  <button onClick={connect}>Connect API</button>
      }
     
        <p>{stats?.name}</p>
    </div>
  );
}

export default App;
