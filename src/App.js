
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [idea, setIdea] = useState("");

  useEffect(()=> {
    fetchIdea();
  }, [])

  const fetchIdea = async()=>{
    const response = await fetch(`http://www.boredapi.com/api/activity/`);
    const data = await response.json();
    setIdea(data.activity);
  }

  return (
    <div className="App">
      <h1>Bored?</h1>
      <h2>Let's find you something to do</h2>
      <div className="btn">
        <button onClick={fetchIdea}>Click here</button>
      </div>
      <p>{idea}</p>
    </div>
  );
}

export default App;
