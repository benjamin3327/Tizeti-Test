import React from 'react';
import './App.css';
import ResidentsList from './Components/ResidentsList';
import 'h8k-components';

const title = "Tizeti";
function App() {
  return (
    <div className="App">
        <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-column justify-content-center align-items-center w-50 mx-auto">
        <ResidentsList/>
      </div>
    </div>
  );
}

export default App;
