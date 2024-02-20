import React, { useState } from 'react';
import axios from 'axios';

function AxiosPUT() {
  const [updateData, setUpdateData] = useState(null);

  const handleUpdate = () => {
    axios.put('https://jsonplaceholder.typicode.com/posts/1', {
      id: 1,
      title: 'Code_RED',
      body: `Hi now it's updated... and Hello World Again..!!`,
      userId: 2,
    })
    .then(response => {
      console.log(response.data)
      setUpdateData(response.data);
    })
    .catch(error => console.error("There was an error!", error));
  };

  return (
    <div> <hr />
        <h2>Below is an example of Axios PUT. (Updating Data) | (AxiosPUT.jsx)</h2>
      <button onClick={handleUpdate}>Send PUT Request</button>
      {updateData && <div>
        <p>Post ID: {updateData.id}</p>
        <p>Title: {updateData.title}</p>
        <p>Body: {updateData.body}</p>
      </div>}
    </div>
  );
}

export default AxiosPUT;