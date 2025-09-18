import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';


function App() {
  // const fetchAPI = async () => {
  //   const response = await axios.get('http://localhost:8080/classes');
  //   setArray(response.data.classes);
  //   setYear(response.data.year);
  //   setGPA(response.data.GPA);
  //   console.log(response.data);
  // };

  // const testPost = async () => {
  //     const response = await axios.post('http://localhost:8080/signup', { email: 'foo@bar.com', name: 'foo' })
  //     console.log(response.data);
  // };

  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    plaintext: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

  try {
    const response = await axios.post('http://localhost:8080/signup', formData);
    console.log('Form data submitted successfully:', response.data);
  } catch (error) {
    console.error('Error submitting form data:', error);
  }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Username:</label>
      <br/>
      <input 
        type="text"
        name="userName"
        placeholder="Enter Username"
        value={formData.userName}
        onChange={handleChange}
      />
      <br/>

      <label>Email:</label>
      <br/>
      <input 
        type="email"
        name="email"
        placeholder="foo@bar.com"
        value={formData.email}
        onChange={handleChange}
      />
      <br/>
      <label>Password:</label>
      <br/>
      <input 
        type="password"
        name="plaintext"
        placeholder="Enter Password"
        value={formData.plaintext}
        onChange={handleChange}
      />
      <br/>
      <input type="submit"/>
    </form> 
  )
}

export default App
