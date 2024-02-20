import React, { useState } from 'react';
import axios from 'axios';

function AxiosDELETE() {
  const [deleteStatus, setDeleteStatus] = useState('');

  const handleDelete = () => {
    axios.delete('https://jsonplaceholder.typicode.com/posts/1')
    .then(() => {
      setDeleteStatus('Delete successful');
    })
    .catch(error => console.error("There was an error!", error));
  };

  return (
    <div> <hr />
      <button onClick={handleDelete}>Send DELETE Request</button>
      {deleteStatus && <p>{deleteStatus}</p>}
    </div>
  );
}

export default AxiosDELETE;