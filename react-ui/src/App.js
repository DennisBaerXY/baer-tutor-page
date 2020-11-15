import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    const initData = async () => {
      let response = await fetch("/api");
      if (response.ok) {
        let jsonData = await response.json();
        console.log(jsonData);
        setData(jsonData);
      }
    };

    initData();
  }, []);
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>

        <p>
          {data ? (
            <span>Server response: {data.message}</span>
          ) : (
            <span>Loading...</span>
          )}
        </p>
      </header>
    </div>
  );
}

export default App;
