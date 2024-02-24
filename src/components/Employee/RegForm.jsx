import React from 'react'

function RegForm() {
  return (
<div>
<h1>Registration Form</h1>
<form action="/register" method='post'>
  <label htmlFor="usename">Username</label>
  <input type="text" name="username" id="username"/>
  
</form>
</div>

  )
}

export default RegForm


// import React from 'react';

// function RegForm() {
//   return (
//     <div>
//       <h1>Registration Form</h1>
//       <form action="/register" method="post">
//         <label htmlFor="username">Username: </label>
//         <input type="text" name="username" id="username" /><br />
//         <label htmlFor="password">Password: </label>
//         <input type="password" name="password" id="password" /><br />
//         <input type="submit" value="Register" />
//       </form>
//     </div>
//   );
// }

// export default RegForm;