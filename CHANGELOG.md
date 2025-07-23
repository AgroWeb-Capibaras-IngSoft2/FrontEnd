# CHANGELOG

## [1.2.0] - 2025-07-23
### Added
- **Sistema completo de carrito de compras**: Integración completa con el microservicio de carrito, permitiendo crear carrito, añadir productos, modificar cantidades y eliminar productos.
- **Gestión de tipos de usuario**: Implementación del sistema `userType` que diferencia entre usuarios "Vendedor" y "Comprador".
- **Dashboard administrativo**: Nuevo dashboard con componentes para visualización de ventas, clientes, productos más vendidos y órdenes recientes.
- **Navegación basada en rol**: El navbar ahora muestra opciones específicas según el tipo de usuario (vendedores pueden acceder a funcionalidades adicionales).
- **Servicios de carrito**: API completa para interactuar con el microservicio de carrito incluyendo obtener items, añadir productos, actualizar cantidades y eliminar productos.

### Changed
- **Mejoras en el registro de usuarios**: El formulario de registro ahora incluye la selección del tipo de usuario y almacena esta información en `localStorage`.
- **Navbar responsivo mejorado**: Refactorización del componente navbar con mejor manejo del estado de autenticación y navegación condicional.
- **Integración de imágenes en el carrito**: Los productos en el carrito ahora muestran sus imágenes correspondientes obtenidas del microservicio de productos.
- **Manejo de estado del carrito**: Implementación de lógica para persistir y gestionar el estado del carrito a través de las sesiones.

### Fixed
- **Manejo de errores en servicios**: Mejores mensajes de error y manejo de excepciones en los servicios de carrito y productos.
- **Validaciones de usuario**: Correcciones en las validaciones del formulario de registro y login.

## [1.1.0] - 2025-06-18
### Changed
- Integración completa con el microservicio de productos: el catálogo ahora consume los productos dinámicamente desde el backend.
- Eliminación de datos estáticos de productos en el frontend.
- Visualización del nombre de usuario autenticado en la barra de navegación (en verde y subrayado), ocultando el botón "Iniciar Sesión" si el usuario está logueado.
- Mejoras en la gestión del estado de autenticación usando `localStorage`.
- Ajuste de la lógica para mostrar mensajes de error claros en login y conexión.
- Mejoras visuales y de usabilidad en el catálogo y formularios.
- Sección de configuración de la API documentada en el README.
- Inclusión de capturas de pantalla en el README.
- Manejo automático de rutas relativas en `imageUrl` para imágenes de productos: el frontend ahora convierte rutas relativas a URLs absolutas usando la variable de entorno del backend.
- Mejora en el manejo del estado `loading` para evitar quedarse en "Cargando productos..." indefinidamente.
- Mensajes de error más claros para carga de productos e imágenes.

## [1.0.1] - 2025-06-16
### Added
- Formulario de registro de usuario con validaciones y hash de contraseña.
- Consumo del microservicio de usuarios para login y registro.
- Navegación SPA entre catálogo, login y registro.
- Estilos responsivos y modernos usando Tailwind CSS y HeroUI.

## [1.0.0] - 2025-06-12
### Added
- Estructura inicial del frontend de AgroWeb con React, TypeScript y Vite.
- Catálogo de productos con filtrado, búsqueda y paginación (usando datos estáticos).
- Primeros componentes visuales y estructura de carpetas.