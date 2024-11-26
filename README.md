# Prueba Técnica Frontend - Nivel Medio

## Objetivo del Proyecto
Diseñar e implementar una aplicación frontend en Vue.js que gestione un catálogo de productos y pedidos, con funcionalidades completas de CRUD (Crear, Leer, Actualizar, Eliminar), utilizando datos simulados a través de un archivo JSON local o un mock de API. La aplicación debe permitir la reutilización de componentes y un diseño responsive y atractivo usando Tailwind CSS.

## Tecnologías Utilizadas
- **Frontend**: Vue.js
- **Estilos**: Tailwind CSS
- **Datos simulados**: JSON local para simular interacción con un backend
- **Despliegue (opcional)**: Vercel (opcional)
- **Contenerización (opcional)**: Docker

## Instrucciones para Ejecutar el Proyecto Localmente

1. **Clonar el repositorio**
   ```
   git clone <url-del-repositorio>
   cd <nombre-del-repositorio>
   ```

2. **Instalar las dependencias**
   ```npm install```

3. **Ejecutar la aplicación**
   ```npm run dev```

   La aplicación estará disponible en `http://localhost:5173/` (o el puerto especificado).

## Estructura del Proyecto

- **`src/`**: Contiene los archivos de la aplicación Vue.js.
  - **`components/`**: Componentes reutilizables (por ejemplo, lista de productos y pedidos, formulario de productos y pedidos).
  - **`store/`**: Configuración de Vuex para el manejo del estado global.
  - **`assets/`**: Archivos de estilo y recursos.
  
- **`public/`**: Archivos estáticos como json.

## Características de la Aplicación

1. **Gestión de Productos**
   - Listado de productos con opción de agregar, editar o eliminar.
   - Formularios para crear y editar productos.
   - Los productos se simulan con datos locales en un archivo JSON.

2. **Gestión de Pedidos**
   - Listado de pedidos con opción de agregar, editar o eliminar.
   - Formularios reutilizables para crear y editar pedidos.

3. **Manejo de Estado**
   - Los datos se simulan mediante JSON local, permitiendo realizar operaciones de CRUD en los productos y pedidos.

4. **Diseño Responsive**
   - La aplicación es responsive y se adapta a diferentes tamaños de pantalla utilizando Tailwind CSS.

## Despliegue (Opcional)

La aplicación se encuentra desplegada en Vercel y se puede acceder a través del siguiente link: [https://product-order-management-umber.vercel.app/]

## Portafolio

Puedes acceder a mi portafolio personal a través del siguiente enlace: [https://portfolio-livid-rho-27.vercel.app/] Actualmente, algunas partes están en construcción y las iré agregando gradualmente.
