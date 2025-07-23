import React from 'react';
import { useState } from 'react';
import RegisProductImg from '/src/assets/RegisProduct.jpg';
import iconimg from '/src/assets/icon.png';
import Navbar from './Navbar';

const RegistrationProducts = () => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    unit: '',
    imageUrl: null,
    stock: '',
    origin: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({
        ...formData,
        imageUrl: files[0]
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const data = new FormData();
      data.append('name', formData.name);
      data.append('category', formData.category);
      data.append('price', formData.price);
      data.append('unit', formData.unit);
      data.append('stock', formData.stock);
      data.append('origin', formData.origin);
      data.append('description', formData.description);
      if (formData.imageUrl) {
        data.append('image', formData.imageUrl);
      }
      // Adjuntar el userDocument desde localStorage
      const userDocument = localStorage.getItem('userDocument');
      if (userDocument) {
        data.append('user_id', userDocument);
      }
      const response = await fetch('http://localhost:5000/products', {
        method: 'POST',
        body: data
      });
      if (response.ok) {
        alert('Producto registrado con éxito');
        setFormData({
          name: '',
          category: '',
          price: '',
          unit: '',
          imageUrl: null,
          stock: '',
          origin: '',
          description: ''
        });
      } else {
        alert('Error al registrar el producto');
      }
    } catch (error) {
      alert('Error de red al registrar el producto');
    } finally {
      setIsSubmitting(false);
    }
  };

  const departamentos = [
    "Amazonas", "Antioquia", "Arauca", "Atlántico", "Bolívar", "Boyacá", "Caldas",
    "Caquetá", "Casanare", "Cauca", "Cesar", "Chocó", "Córdoba", "Cundinamarca",
    "Guainía", "Guaviare", "Huila", "La Guajira", "Magdalena", "Meta", "Nariño",
    "Norte de Santander", "Putumayo", "Quindío", "Risaralda", "San Andrés y Providencia",
    "Santander", "Sucre", "Tolima", "Valle del Cauca", "Vaupés", "Vichada"
  ];

  // Obtener el nombre del usuario del localStorage
  const userName = typeof window !== 'undefined' ? localStorage.getItem('userName') : null;

  return (
    <div className="container-fluid p-0" style={{ height: '100vh', overflow: 'hidden' }}>
      {/* Navbar arriba */}
      <Navbar userName={userName} />
      <div className="row g-0 h-100" style={{ marginTop: '0px', height: '100%' }}>
        {/* Columna del formulario */}
        <div className="col-lg-6 d-flex align-items-center justify-content-center h-100 bg-light" style={{ minHeight: 0 }}>
          <div 
            className="card shadow-lg border-0 w-100"
            style={{
              maxWidth: '800px',
              borderRadius: '1.5rem',
              background: 'rgba(255,255,255,0.9)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.3)'
            }}
          >
            <div className="card-body p-3 p-md-5">
              <div className="text-center mb-4">
                <h2 className="fw-bold text-success mb-0" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
                  Registra tu producto en{' '}
                  <span className="d-inline-flex align-items-center">
                    AgroWeb{' '}
                    <img 
                      src={iconimg} 
                      alt="Logo AgroWeb" 
                      style={{ 
                        width: 'clamp(25px, 3vw, 35px)', 
                        height: 'clamp(25px, 3vw, 35px)',
                        marginLeft: '8px'
                      }} 
                    />
                  </span>
                </h2>
              </div>
              <form onSubmit={handleSubmit} autoComplete="off">
                <div className="row g-3">
                  <div className="col-12 col-md-6">
                    <label className="form-label fw-semibold">Nombre del producto</label>
                    <input 
                      type="text" 
                      className="form-control rounded-pill shadow-sm px-3 py-2" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="form-label fw-semibold">Categoría</label>
                    <select
                      className="form-select rounded-pill shadow-sm px-3 py-2"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Seleccione...</option>
                      <option value="Frutas">Frutas</option>
                      <option value="Verduras">Verduras</option>
                      <option value="Lácteos">Lácteos</option>
                      <option value="Carnes">Carnes</option>
                      <option value="Bebidas">Bebidas</option>
                      <option value="Cereales">Cereales</option>
                      <option value="Especias">Especias</option>
                      <option value="Huevos">Huevos</option>
                      <option value="Otros">Otros</option>
                    </select>
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="form-label fw-semibold">Precio</label>
                    <div className="input-group">
                      <span className="input-group-text">$</span>
                      <input 
                        type="number" 
                        className="form-control rounded-pill shadow-sm px-3 py-2" 
                        name="price" 
                        value={formData.price} 
                        onChange={handleChange} 
                        required 
                        min="0" 
                        step="0.01" 
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="form-label fw-semibold">Unidad de venta</label>
                    <select
                      className="form-select rounded-pill shadow-sm px-3 py-2"
                      name="unit"
                      value={formData.unit}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Seleccione...</option>
                      <option value="Libra">Libra</option>
                      <option value="Kilo">Kilo</option>
                      <option value="Gramo">Gramo</option>
                      <option value="Litro">Litro</option>
                      <option value="Mililitro">Mililitro</option>
                      <option value="Unidad">Unidad</option>
                    </select>
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="form-label fw-semibold">Stock disponible</label>
                    <input 
                      type="number" 
                      className="form-control rounded-pill shadow-sm px-3 py-2" 
                      name="stock" 
                      value={formData.stock} 
                      onChange={handleChange} 
                      required 
                      min="1" 
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="form-label fw-semibold">Origen del producto</label>
                    <select
                      className="form-select rounded-pill shadow-sm px-3 py-2"
                      name="origin"
                      value={formData.origin}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Seleccione un departamento</option>
                      {departamentos.map(dep => (
                        <option key={dep} value={dep}>{dep}</option>
                      ))}
                    </select>
                  </div>
                  <div className="col-12">
                    <label className="form-label fw-semibold">Imagen del producto</label>
                    <input 
                      type="file" 
                      className="form-control rounded-pill shadow-sm px-3 py-2" 
                      name="imageUrl" 
                      accept="image/*" 
                      onChange={handleChange} 
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label fw-semibold">Descripción del producto</label>
                    <textarea 
                      className="form-control rounded-3 shadow-sm px-3 py-2" 
                      name="description" 
                      value={formData.description} 
                      onChange={handleChange} 
                      required 
                      rows="4"
                    />
                  </div>
                  <div className="col-12 d-grid mt-3">
                    <button 
                      type="submit" 
                      className="btn btn-success btn-lg py-3 rounded-pill"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Registrando...
                        </>
                      ) : 'Registrar Producto'}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Columna de la imagen - oculta en móviles */}
        <div className="col-lg-6 d-none d-lg-flex p-0">
          <img
            src={RegisProductImg}
            alt="Productos agrícolas"
            className="img-fluid w-100"
            style={{
              height: 'calc(100vh - 70px)', // 70px is an estimated navbar height
              maxHeight: 'calc(100vh - 70px)',
              objectFit: 'cover',
              borderRadius: '0', // Remove bottom radius to avoid space
              display: 'block'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default RegistrationProducts;
