import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

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
      .post("http://localhost:8061/login", values)
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
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100 vw-100'>
      <div className='bg-white p-3 rounded '>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='email'>
              {" "}
              <strong>Email</strong>
            </label>
            <input
              type='email'
              placeholder='Enter email'
              name='email'
              className='form-control rounded-0'
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>

          <div className='mb-3'>
            <label htmlFor='password'>
              {" "}
              <strong>Password</strong>
            </label>
            <input
              type='password'
              placeholder='Enter Password'
              name='password'
              className='form-control rounded-0'
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
            />
          </div>
          <button type='submit' className='btn btn-success rounded-0 w-100'>
            Login
          </button>
          <p>you agree to our terms and condition</p>
          <Link to='/register'>
            <button className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>
              Sign up
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
