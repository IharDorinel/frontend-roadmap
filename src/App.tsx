import './App.css';
import HTMLReactHookForm from "./HTML/index";
import HTMLFormik from "./HTMLFormik/index";
import '../src/styles/HTML.css';


function App() {


  return (

    <div className="App" id="app" data-testid="app">
      <h1>Frontend Roadmap</h1>
      <HTMLReactHookForm/>
      <HTMLFormik/>
    </div>
  );
}

export default App;
