"use client"; 

import React, { FormEvent } from 'react'; 

const handleSubmit = async (e:FormEvent<HTMLFormElement>) => { 
    e.preventDefault();
};

const Form = () => {
  return (
      <form onSubmit={ handleSubmit }>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" name="confirmPassword" id="confirmPassword" />
        </div>
        <button type="submit">Register</button>
    </form>
  )
}

export default Form;