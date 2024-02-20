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
            <h2>Below is an example of Axios DELETE. (Delete Data) | (AxiosDELETE.jsx)</h2>
      <button onClick={handleDelete}>Send DELETE Request</button>
      {deleteStatus && <p>{deleteStatus}</p>}
    </div>
  );
}

export default AxiosDELETE;