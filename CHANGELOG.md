# CHANGELOG
## [1.2.0] - 2025-07-23
### Added
- Registro de productos completamente funcional: el formulario de registro ahora envía los datos al backend y la imagen se almacena con una URL que incluye el ID del producto, permitiendo su visualización y gestión correcta en el catálogo.
- Integración con el microservicio Serv_GestionEstadisticas: las operaciones relevantes ahora notifican y consultan estadísticas en tiempo real, permitiendo análisis y reportes automáticos desde el frontend.
- El formulario de registro de productos fue rediseñado para estar perfectamente centrado respecto a la imagen de fondo, mejorando la experiencia visual y de usuario.
- Mejoras visuales en la interfaz de registro y catálogo, eliminando espacios vacíos y asegurando responsividad total en todos los dispositivos.
- El nombre de usuario autenticado se muestra correctamente en la barra de navegación, con lógica robusta para ocultar el botón de login si el usuario ya está autenticado.
- Validaciones adicionales en el formulario de productos para evitar envíos incompletos o erróneos.
- Mensajes de éxito y error más claros y descriptivos en el registro de productos y otras operaciones clave.

### Changed
- El manejo de imágenes de productos ahora utiliza rutas absolutas generadas dinámicamente según el ID del producto, eliminando problemas de visualización y carga en el catálogo y detalles de producto.
- Refactorización de la lógica de estado y manejo de formularios para mayor robustez y mantenibilidad.
- Ajustes en la estructura de carpetas y componentes para facilitar futuras integraciones y mantenimientos.
- Mejoras en la gestión de autenticación y persistencia de sesión usando localStorage.

### Fixed
- Se corrigió el centrado vertical y horizontal del formulario de registro de productos respecto a la imagen, eliminando espacios vacíos en la parte inferior de la pantalla.
- Se solucionaron problemas menores de visualización en dispositivos móviles y pantallas grandes.
- Corrección de errores en la integración con el backend para el registro y visualización de productos, asegurando que la URL de la imagen sea siempre válida.
- Se resolvieron problemas de sincronización y comunicación con el microservicio de estadísticas.

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