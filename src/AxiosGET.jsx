import './App.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function AxiosGET() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        console.log(response.data)
        setUserData(response.data);
      })
      .catch(error => console.error("There was an error!", error));
  }, []);

  return (
    <div> <hr />
        <h2>Below is an example of Axios GET. (Fetching Data) | (AxiosGET.jsx)</h2>
      {userData.map(user => (
        <div key={user.id}>
          <p>{user.name}</p>
        </div>
      ))}
    </div>
  )
}

export default AxiosGET