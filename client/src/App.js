import React, {useState, useEffect} from "react";

function App() {
  const [user, setUser] = useState('');
  const [mes, setMes]= useState('');
  const handleSubmit = () => {
    const d = {
      'user': user,
    }
    fetch('/create',{
            'method':'POST',
             headers : {
            'Content-Type':'application/json'
      },
      body:JSON.stringify(d)
    })
    .then(async (response) =>{
      const data = await response.json();
      setMes(data.message);
      setUser('');
    })
    .catch(error => console.log(error))
  }
  return (
    <div className="App">
      <div>X-FORCE</div>
      <div>
        <div>Enter Username: </div>
        <input type="text" value={user} onChange={(e) => setUser(e.target.value)}/>
        <button onClick= {handleSubmit}>Submit</button>
      </div>
      {mes}
    </div>
  );
}

export default App;
