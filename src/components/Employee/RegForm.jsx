import React from 'react'

function RegForm() {
  const data = { name: '', email: '', password: '' }
  const [formData, setFormData] = useState(data)
  const [flag, isReg] = useState(false)

  const handleSubmit = (e) => {
      e.preventDefault()
      if (!formData.name || !formData.email || !formData.password) {
          alert('Please fill all the fields')
      }
      else {
          isReg(true)
          console.log("User Data submitted successfully..")
      }

      const handleChange = (e) => {
          setFormData({ ...formData, [e.target.name]: e.target.value })
      } 
    }
  return (
    <div>
      <h1>Hello World !</h1>
      <form onSubmit={handleSubmit}>
                   {flag && <pre> Hi {formData.name}, Your have registered successfully !!!!</pre>}
                    <div>
                        <h1>Registration Form</h1>
                    </div>
                    <div>
                        <label>Name:</label>
                        <input type="text" name='name' onChange={handleChange} value={formData.name} placeholder='Enter Name' />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="email" name='email' onChange={handleChange} value={formData.email} placeholder='Enter Email' />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" name='password' onChange={handleChange} value={formData.password} placeholder='Enter Password' />
                    </div>
                    <button type='submit'>Submit</button>
                </form>

    </div>
  )
}

export default RegForm
