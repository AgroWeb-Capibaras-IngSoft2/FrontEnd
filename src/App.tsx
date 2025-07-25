// src/App.ts
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import Cart from './components/cart/Cart';
import Catalog from './components/catalog';
import Login from './components/loginservice';
import Registro from './components/registrationservice';
import RegistrationProducts from './components/RegistrationProducts';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Registro />} />
        <Route path="/registrar-producto" element={<RegistrationProducts />} />
        <Route path="/cart" element={<Cart />} />
         <Route path="/dashboard" element={<Dashboard />} />

        {/* otras rutas: */}
      </Routes>
    </Router>
  );
}

export default App;
