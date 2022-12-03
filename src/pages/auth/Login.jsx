import React from 'react'

function Login() {
  return (
    <>
    <body class="h-100">
      <div class="container h-100">
        <div clas="row h-100 justify-content-center align-items-center">
          <form className="w-25 p-3" >
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
          </form>
        </div>
        </div>
      </body>
      
    </>
  );
}

export default Login


//CODIGO DEL REPOSITORIO

/* import { useState, useContext } from 'react';
import Swal from 'sweetalert2'
import { loginService } from '../../services/userService';
import { UserContext } from "../../context/UserContext";
import LoadingButton from '../../components/LoadingButton';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const { login } = useContext(UserContext);

  const [isLoading, setIsLoading] = useState(false);

  const [formulario, setFormulario] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (event) => {
    setFormulario({
      ...formulario,
      [event.target.name]: event.target.value
    });
  }

  async function loginForm(event) {
    setIsLoading(true);
    event.preventDefault();


    try {
      const user = await loginService(formulario);
      login(user);
      navigate("/products");
    } catch (err) {
      Swal.fire(
        'Mensaje',
        err.response.data.msg,
        'error'
      )
      setIsLoading(false);
    }
  }


  return (
    <main className="form-signin w-100 m-auto">
      <form onSubmit={loginForm}>
        <h3 className="mt-6 mb-4 display-5 text-center">Inicio de sesión</h3>
        <div className="form-floating mb-4">
          <input type="email" className="form-control" id="floatingInput" name="email" placeholder="name@example.com" value={formulario.email} onChange={handleInputChange} />
          <label htmlFor="floatingInput">Correo</label>
        </div>
        <div className="form-floating  mb-4">
          <input type="password" className="form-control" id="floatingPassword" name="password" placeholder="Password" value={formulario.password} onChange={handleInputChange} />
          <label htmlFor="floatingPassword">Contraseña</label>
        </div>
         <LoadingButton isLoading={isLoading} text="Continuar"/>
      </form>
    </main>

  )
}

export default Login
 */