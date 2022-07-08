import './App.css';
import HTMLReactHookForm from "./HTML";
import HTMLFormik from "./HTMLFormik";
import '../src/styles/HTML.css';
import {useEffect, useState} from "react";


function App() {


  return (
    <div className="App">
      <h1>Frontend Roadmap</h1>
      <HTMLReactHookForm/>
      <HTMLFormik/>
    </div>
  );
}

export default App;
