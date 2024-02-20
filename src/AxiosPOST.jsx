import React, { useState } from 'react';
import axios from 'axios';

function AxiosPOST() {
  const [postData, setPostData] = useState(null);

  const handleSubmit = () => {
    axios.post('https://jsonplaceholder.typicode.com/posts', {
      title: 'Code_RED',
      body: 'Hello World..!',
      userId: 1,
    })
    .then(response => {
      setPostData(response.data);
    })
    .catch(error => console.error("There was an error!", error));
  };

  return (
    <div> <hr />
      <button onClick={handleSubmit}>Send POST Request</button>
      {postData && <div>
        <p>Post ID: {postData.id}</p>
        <p>Title: {postData.title}</p>
        <p>Body: {postData.body}</p>
      </div>}
    </div>
  );
}

export default AxiosPOST;