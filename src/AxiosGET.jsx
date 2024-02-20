import './App.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function AxiosGET() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUserData(response.data);
      })
      .catch(error => console.error("There was an error!", error));
  }, []);

  return (
    <div> <hr />
      {userData.map(user => (
        <div key={user.id}>
          <p>Index is {user.id} {user.name}</p>
        </div>
      ))}
    </div>
  )
}

export default AxiosGET