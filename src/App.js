// src/App.js
import React from 'react';
import DataFetcher from './DataFetcher';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Task Integrasi API menggunakan Fetch</h1>
      </header>
      <main>
        <DataFetcher />
      </main>
    </div>
  );
}

export default App;
