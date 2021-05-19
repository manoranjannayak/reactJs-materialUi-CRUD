import React from "react";
import { useForm } from "react-hook-form";

 const Form = () => {

  const UserRegister = (requestOptions) => {
    fetch('http://localhost:4000/api/users/create',requestOptions)
      .then = (results) =>{
        // console.log("data",data);
        this.setState({ person: results });
      } 
  }

  const { register, handleSubmit } = useForm();
  
  const onSubmit = data => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: data.userName,
        email: data.email,
        password: data.password
      })
  };

  UserRegister(requestOptions);

  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <label>Username</label>
      <input name="userName" ref={register} />
      <label>Email</label>
      <input name="email" ref={register} />
      <label>Password</label>
      <input name="password" ref={register} />
      <input type="submit" />
    </form>
  );

  

}

 export default Form;