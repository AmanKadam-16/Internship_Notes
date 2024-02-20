import React, { useState } from 'react';
import axios from 'axios';

function AxiosPOST() {
  const [postData, setPostData] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [userId, setUserId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://jsonplaceholder.typicode.com/posts', {
      title,
      body,
      userId,
    })
    .then(response => {
      console.log(response.data)
      setPostData(response.data);
    })
    .catch(error => console.error("There was an error!", error));
  };

  return (
    <div> <hr /> 
    <h2>Below is an example of Axios POST. (Inserting Data) | (AxiosPOST.jsx)</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} /> <br /> <br />

        <textarea placeholder="Body" value={body} onChange={(e) => setBody(e.target.value)}></textarea> <br /> <br />

        <input type="number" placeholder="User ID" value={userId} onChange={(e) => setUserId(e.target.value)} /> <br /> <br />

        <button type="submit">Send POST Request</button>
      </form>
      {postData && <div>
        <p>Post ID: {postData.id}</p>
        <p>Title: {postData.title}</p>
        <p>Body: {postData.body}</p>
      </div>}
    </div>
  );
}

export default AxiosPOST;