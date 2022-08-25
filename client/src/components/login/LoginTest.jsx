import React, { useState } from 'react';
import axios from 'axios';

const LoginTest = () => {
  const [user, setUser] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: 'post',
      url: 'http://localhost:3000/users/login',
      data: user,
      withCredentials: true
    })
      .then(console.log('done'))
      .catch((err) => console.log(err));
  };

  const testUser = () =>{
    axios.get('http://localhost:3000/user', { withCredentials: true })
      .then(res => console.log(res.data[0]))
      .catch(err => console.log(err));
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="email" onChange={handleChange} />
        <input type="text" name="password" onChange={handleChange} />
        <input type="submit" value="submit" />
      </form>
      <button onClick={testUser}>Get User</button>
    </div>
  );
};

export default LoginTest;
