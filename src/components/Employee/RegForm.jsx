import React from 'react'

function RegForm() {
  return (
    <div>
      <form action="">
        <h1>Registration Form</h1>
        <label htmlFor="EmployeeName">Employee Name</label>
        <input type="text" value={DataTransfer.EmployeeName} />
      </form>
    </div>
  )
}

export default RegForm

