import { useState, useEffect, useContext } from 'react';
import Swal from 'sweetalert2'
import { putUserService, getUserService } from '../../services/userService';
import LoadingButton from '../../components/LoadingButton.jsx';
import { UserContext } from '../../context/UserContext';


function Profile() {

  const { user } = useContext(UserContext);

  const [isLoading, setIsLoading] = useState(false);

  const [formulario, setFormulario] = useState({
    name: '',
    lastName: '',
    email: '',
    country: '',
    address: '',
    city: '',
    state: '',
    cp: '',
    password: '',
    phone: ''
  });

  const handleInputChange = (event) => {

    setFormulario({
      ...formulario,
      [event.target.name]: event.target.value
    });
  }


  

  async function getProfile() {
    console.log(user.uid);
    try {
      const data = await getUserService(user.uid);
      console.log(data);
      setFormulario(data);
    } catch (err) {
      Swal.fire(
        'Mensaje',
        err.response.data.msg,
        'error'
      )
    }
  }


  
  useEffect(() => {
    getProfile();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function save(event) {
    setIsLoading(true);
    event.preventDefault();

    try {
      console.log(formulario);
      await putUserService(user.uid, formulario);
      Swal.fire(
        'Mensaje',
        'Datos actualizados',
        'success'
      )
      setIsLoading(false);
    } catch (err) {
      Swal.fire(
        'Mensaje',
        err.response.data.errors[0].msg,
        'error'
      )
      setIsLoading(false);
    }
  }


  return (

    <div class="container h-100">
      <main className="form-profile w-100 m-auto animate__animated animate__fadeIn">
        <form onSubmit={save}>
          <h3 className="mt-6 mb-4 display-5 text-center">Pérfil</h3>
          <div className="row">
            <div className="mb-4  col-md-6">
              <label >Nombre</label>
              <input type="text" className="form-control" name="name" value={formulario.name} onChange={handleInputChange} />
            </div>
            <div className="mb-4 col-md-6">
              <label >Apellidos</label>
              <input type="text" className="form-control" name="lastName" value={formulario.lastName} onChange={handleInputChange} />
            </div>
          </div>
          <div className="mb-4">
            <label >Correo</label>
            <input type="email" className="form-control" name="email" placeholder="name@example.com" value={formulario.email} onChange={handleInputChange} />
          </div>
          <div className="mb-4">
            <label >Contraseña</label>
            <input type="password" className="form-control" name="password" value={formulario.password} onChange={handleInputChange} />
          </div>
          <div className='mb-4'>
            <label >Dirección</label>
            <input type="text" className="form-control" name="address" value={formulario.address} onChange={handleInputChange} />
          </div>

          <div className="row">
            <div className="mb-4 col-md-6">
              <label >C.P</label>
              <input type="text" className="form-control" name="cp" value={formulario.cp} onChange={handleInputChange} />
            </div>
            <div className="mb-4 col-md-6">
              <label >Telefono</label>
              <input type="text" className="form-control" name="phone" value={formulario.phone} onChange={handleInputChange} />
            </div>
          </div>
          <div className="row">
            <div className="mb-4 col-md-6">
              <label >Ciudad</label>
              <input type="text" className="form-control" name="city" value={formulario.city} onChange={handleInputChange} />
            </div>
            <div className="mb-4 col-md-6">
              <label >Estado</label>
              <input type="text" className="form-control" name="state" value={formulario.state} onChange={handleInputChange} />
            </div>
          </div>
          <div className="mb-4">
            <label >País</label>
            <input type="text" className="form-control" name="country" value={formulario.country} onChange={handleInputChange} />
          </div>
          <LoadingButton isLoading={isLoading} text="Guardar" />
        </form>
      </main>
    </div>
  )
}

export default Profile