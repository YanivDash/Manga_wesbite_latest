import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../../styles/loginCss/login.css";
const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  axios.defaults.withCredentials = true;
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`${import.meta.env.VITE_BASE_URL}/login`, values)

      .then((res) => {
        if (res.data.Status === "success") {
          navigate("/createManga");
        } else {
          alert(res.data.Error);
        }
      })
      .then((err) => console.log(err));
  };

  return (
    <div className='login_container'>
      <h2>Login</h2>
      <form className='login_form' onSubmit={handleSubmit}>
        <div className='login_form_item'>
          <label htmlFor='email'>
            {" "}
            <strong>Email</strong>
          </label>
          <input
            type='email'
            placeholder='Enter email'
            name='email'
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
        </div>

        <div className='login_form_item'>
          <label htmlFor='password'>
            {" "}
            <strong>Password</strong>
          </label>
          <input
            type='password'
            placeholder='Enter Password'
            name='password'
            onChange={(e) => setValues({ ...values, password: e.target.value })}
          />
        </div>
        <button type='submit'>Login</button>
      </form>
      {/* <div>
        <Link to='/'>
          <h1>home</h1>
        </Link>
      </div> */}
    </div>
  );
};

export default Login;
