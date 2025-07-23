import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisImg from '/src/assets/Regis.jpg';
import iconimg from '/src/assets/icon.png';
import bcrypt from 'bcryptjs';
import '../index.css';
import { crearCarrito } from '../services/cartservices';

const usersApiUrl = import.meta.env.VITE_API_USERS_URL;

const Registro = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: '',
    segundoNombre: '',
    apellido1: '',
    apellido2: '',
    fechaNacimiento: '',
    departamento: '',
    municipio: '',
    ruta: '',
    correo: '',
    tipoDocumento: '',
    numeroDocumento: '',
    telefono: '',
    contrasena: '',
    repetirContrasena: '',
    nombreUsuario: '',
    tipoUsuario: '',
    aceptoTerminos: false
  });
  const departamentos = [
    'Amazonas', 'Antioquia', 'Arauca', 'Atlántico', 'Bolívar', 'Boyacá', 'Caldas',
    'Caquetá', 'Casanare', 'Cauca', 'Cesar', 'Chocó', 'Córdoba', 'Cundinamarca',
    'Guainía', 'Guaviare', 'Huila', 'La Guajira', 'Magdalena', 'Meta', 'Nariño',
    'Norte de Santander', 'Putumayo', 'Quindío', 'Risaralda', 'San Andrés y Providencia',
    'Santander', 'Sucre', 'Tolima', 'Valle del Cauca', 'Vaupés', 'Vichada'
  ];
  const campos = [
    { label: 'Nombre', name: 'nombre' },
    { label: 'Segundo nombre', name: 'segundoNombre' },
    { label: 'Primer apellido', name: 'apellido1' },
    { label: 'Segundo apellido', name: 'apellido2' },
    { label: 'Fecha de nacimiento', name: 'fechaNacimiento', type: 'date', inputMode: 'numeric', pattern: '\\d{4}-\\d{2}-\\d{2}' },
    { label: 'Departamento', name: 'departamento', type: 'select' },
    { label: 'Municipio', name: 'municipio' },
    { label: 'Ruta', name: 'ruta' },
    { label: 'Correo electrónico', name: 'correo', type: 'email' },
    { label: 'Número de teléfono', name: 'telefono' },
    { label: 'Nombre de usuario', name: 'nombreUsuario' },
    { label: 'Contraseña', name: 'contrasena', type: 'password' },
    { label: 'Repetir contraseña', name: 'repetirContrasena', type: 'password' }
  ];

  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.contrasena !== formData.repetirContrasena) {
      alert('Las contraseñas no coinciden.');
      return;
    }
    if (!formData.aceptoTerminos) {
      alert('Debes aceptar los términos y condiciones.');
      return;
    }

    try {
      const response = await fetch(`${usersApiUrl}/users/register`, {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: formData.nombre,
          middleName: formData.segundoNombre,
          surName1: formData.apellido1,
          surName2: formData.apellido2,
          bornDate: formData.fechaNacimiento,
          department: formData.departamento,
          municipality: formData.municipio,
          trail: formData.ruta,
          email: formData.correo,
          typeDocument: formData.tipoDocumento,
          numberDocument: formData.numeroDocumento,
          phoneNumber: formData.telefono,
          hashPassword: formData.contrasena,
          username: formData.nombreUsuario,
          userType: formData.tipoUsuario
        })
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('userType', formData.tipoUsuario);
        alert('¡Registro exitoso!');
        try {
          const res = await crearCarrito(formData.numeroDocumento, formData.tipoDocumento);
          console.log('Create carrito response: ', res);
        } catch (error) {
          console.error('Error obtieniendo carrito:', error);
        }
        console.log('Respuesta del servidor:', data);
        navigate('/');
      } else {
        const errorData = await response.json();
        alert('Error en el registro: ' + (errorData.error || response.statusText));
      }
    } catch (error: any) {
      alert('Error de red: ' + error.message);
    }
  };

  const handleIrAlLogin = () => {
    navigate('/');
  };

  return (
    <div className="container-fluid p-0">
      <div className="row g-0 align-items-stretch min-vh-100">
        {/* Columna de la imagen - oculta en móviles */}
        <div className="col-lg-6 d-none d-lg-flex p-0">
          <img
            src={RegisImg}
            alt="Granja"
            className="img-fluid h-100 w-100 object-fit-cover"
            style={{ borderRadius: '0 0 0 1.5rem' }}
          />
        </div>
        {/* Columna del formulario */}
        <div className="col-lg-6 d-flex align-items-center justify-content-center bg-light p-3 p-lg-5">
          <div
            className="card shadow-lg w-100 border-0 my-3 my-lg-0"
            style={{
              maxWidth: '750px',
              borderRadius: '1.5rem',
              background: 'rgba(255,255,255,0.85)',
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.3)'
            }}
          >
            <div className="card-body p-3 p-md-5">
              <div className="fw-bold mb-4 text-center text-success d-flex justify-content-center align-items-center flex-wrap" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
                Crea una cuenta en
                <span className="d-inline-flex align-items-center ms-2">
                  AgroWeb
                  <img src={iconimg} alt="AgroWeb icon" style={{ width: 'clamp(25px, 3vw, 35px)', marginLeft: '8px' }} />
                </span>
              </div>
              <form onSubmit={handleSubmit} autoComplete="off">
                <div className="row g-2 g-md-3">
                  {campos.map(({ label, name, type = 'text', inputMode, pattern }) => (
                    <div className="col-12 col-sm-6" key={name}>
                      <label className="form-label fw-semibold text-secondary small mb-1">{label}</label>
                      {name === 'departamento' ? (
                        <select
                          className="form-select rounded-pill shadow-sm px-3 py-2"
                          name="departamento"
                          value={formData.departamento}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Seleccione...</option>
                          {departamentos.map(dep => (
                            <option key={dep} value={dep}>{dep}</option>
                          ))}
                        </select>
                      ) : name === 'contrasena' ? (
                        <div className="position-relative">
                          <input
                            type={showPassword ? 'text' : 'password'}
                            className="form-control rounded-pill shadow-sm px-3 py-2"
                            name={name}
                            value={formData[name]}
                            onChange={handleChange}
                            required
                            {...(inputMode ? { inputMode } : {})}
                            {...(pattern ? { pattern } : {})}
                          />
                          <span
                            className="position-absolute top-50 end-0 translate-middle-y me-3"
                            style={{ cursor: 'pointer', zIndex: 10 }}
                            onClick={() => setShowPassword((prev) => !prev)}
                            tabIndex={0}
                          >
                            {showPassword ? '🙈' : '👁'}
                          </span>
                        </div>
                      ) : name === 'repetirContrasena' ? (
                        <div className="position-relative">
                          <input
                            type={showRepeatPassword ? 'text' : 'password'}
                            className="form-control rounded-pill shadow-sm px-3 py-2"
                            name={name}
                            value={formData[name]}
                            onChange={handleChange}
                            required
                            {...(inputMode ? { inputMode } : {})}
                            {...(pattern ? { pattern } : {})}
                          />
                          <span
                            className="position-absolute top-50 end-0 translate-middle-y me-3"
                            style={{ cursor: 'pointer', zIndex: 10 }}
                            onClick={() => setShowRepeatPassword((prev) => !prev)}
                            tabIndex={0}
                          >
                            {showRepeatPassword ? '🙈' : '👁'}
                          </span>
                        </div>
                      ) : (
                        <input
                          type={type}
                          className="form-control rounded-pill shadow-sm px-3 py-2"
                          name={name}
                          value={formData[name]}
                          onChange={handleChange}
                          required
                          {...(inputMode ? { inputMode } : {})}
                          {...(pattern ? { pattern } : {})}
                        />
                      )}
                    </div>
                  ))}
                  <div className="col-12 col-sm-6">
                    <label className="form-label fw-semibold text-secondary small mb-1">Tipo de documento</label>
                    <select
                      className="form-select rounded-pill shadow-sm px-3 py-2"
                      name="tipoDocumento"
                      value={formData.tipoDocumento}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Seleccione...</option>
                      <option value="C.C">C.C</option>
                      <option value="T.I">T.I</option>
                      <option value="Cedula extranjera">Cedula Extranjera</option>
                    </select>
                  </div>
                  <div className="col-12 col-sm-6">
                    <label className="form-label fw-semibold text-secondary small mb-1">Número de documento</label>
                    <input
                      type="text"
                      className="form-control rounded-pill shadow-sm px-3 py-2"
                      name="numeroDocumento"
                      value={formData.numeroDocumento}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12 col-sm-6">
                    <label className="form-label fw-semibold text-secondary small mb-1">Tipo de Usuario</label>
                    <select
                      className="form-select rounded-pill shadow-sm px-3 py-2"
                      name="tipoUsuario"
                      value={formData.tipoUsuario}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Seleccione...</option>
                      <option value="buyer">Comprador</option>
                      <option value="seller">Vendedor</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="aceptoTerminos"
                        checked={formData.aceptoTerminos}
                        onChange={handleChange}
                        id="aceptoTerminos"
                      />
                      <label className="form-check-label small text-secondary" htmlFor="aceptoTerminos">
                        Acepto los <a href="#" className="text-success text-decoration-underline">términos y condiciones</a> de servicio
                      </label>
                    </div>
                  </div>
                  <div className="col-12 d-grid gap-2 mt-3">
                    <button type="submit" className="btn btn-success btn-lg py-3">
                      Registrarme
                    </button>
                    <button type="button" className="btn btn-outline-success btn-lg py-3" onClick={handleIrAlLogin}>
                      Ya tengo cuenta
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Registro;
