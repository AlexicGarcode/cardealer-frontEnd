import React from 'react'

const SignInForm = () => {
  return (
    <>
      <div className="row align-items-center g-lg-5 py-5">
        <div className="col-lg-7 text-center text-lg-start">
          <h1 className="display-4 fw-bold lh-1 mb-3">
            Listo para comenzar el viaje?
          </h1>
          <p className="col-lg-10 fs-4">
            Estas a un paso de manejar el auto de tus sueños
          </p>
        </div>

        <div className="col-md-10 mx-auto col-lg-5">
          <form className="p-4 p-md-5 border rounded-3 bg-light">

            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingPassword"
                placeholder="FirstName"
              />
              <label htmlFor="floatingPassword">First Name</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingPassword"
                placeholder="LastName"
              />
              <label htmlFor="floatingPassword">Last Name</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="tel"
                className="form-control"
                id="floatingInput"
                placeholder="555-555-1245"
              />
              <label htmlFor="floatingInput">Phone Number</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>

            
            
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" defaultValue="remember-me" /> Remember me
              </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Sign up
            </button>
            <hr className="my-4" />
            <small className="text-muted">
              By clicking Sign up, you agree to the terms of use.
            </small>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignInForm


//CODIGO DEL REPOSITORIO

/* import { useState } from 'react';
import Swal from 'sweetalert2'
import { signupService } from '../../services/userService';
import { useNavigate } from 'react-router-dom';
import LoadingButton from '../../components/LoadingButton';


function Account() {

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [formulario, setFormulario] = useState({
    name: '',
    lastName: '',
    email: '',
    password: ''
  });


  const handleInputChange = (event) => {
    setFormulario({
      ...formulario,
      [event.target.name]: event.target.value
    });
  }

  async function createUser(event) {
    setIsLoading(true);
    event.preventDefault();

    try {
      const user = await signupService(formulario);
      console.log(user);
      //antes se usaba el history.push('/ruta') antes de la version 6 de react-router-dom
      navigate("/login");
    } catch (err) {
      console.log(err.response.data);
      Swal.fire(
        'Mensaje',
        err.response.data.errors[0].msg,
        'error'
      )
      setIsLoading(false);
    }

  }

  return (

    <main className="form-signin w-100 m-auto">
      <form onSubmit={createUser}>
        <h3 className="mt-6 mb-4 display-5 text-center">Registrarse</h3>
        <div className="form-floating mb-4">
          <input type="text" className="form-control" id="floatingName" name="name" placeholder="Nombre" value={formulario.name} onChange={handleInputChange} />
          <label htmlFor="floatingName">Nombre</label>
        </div>
        <div className="form-floating mb-4">
          <input type="text" className="form-control" id="floatingLastName" name="lastName" placeholder="Apellido" value={formulario.lastName} onChange={handleInputChange} />
          <label htmlFor="floatingLastName">Apellido</label>
        </div>
        <div className="form-floating mb-4">
          <input type="text" className="form-control" id="floatingEmail" name="email" placeholder="name@example.com" value={formulario.email} onChange={handleInputChange} />
          <label htmlFor="floatingEmail">Email address</label>
        </div>
        <div className="form-floating  mb-4">
          <input type="password" className="form-control" id="floatingPassword" name="password" placeholder="Password" value={formulario.password} onChange={handleInputChange} />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <LoadingButton isLoading={isLoading} text="Unirse" />
      </form>
    </main>


  )
}

export default Account */