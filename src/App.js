import React, {useEffect, useState} from 'react';
import './App.css';
import User from "./components/User";
import {base_url_1} from "./components/utils";

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(base_url_1)
            .then(response => response.json())
            .then(data => setUsers(data.results))
    }, [])

  return (
      <div className='container' >
          {users.map(item => <User key={item.cell} profile={item}/>)}
      </div>
  );
}

export default App;
