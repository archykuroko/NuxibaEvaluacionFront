# Nuxiba Frontend - Evaluación Técnica

Aplicación web desarrollada como parte de la evaluación técnica para la posición de desarrollador en Nuxiba.

La aplicación consume la API pública de JSONPlaceholder y permite consultar usuarios, visualizar sus publicaciones y comentarios, consultar sus tareas y registrar nuevas tareas.

## Tecnologías utilizadas

- React
- JavaScript
- Vite
- Redux Toolkit
- React Redux
- Material UI
- JSONPlaceholder API

## Funcionalidades

### Usuarios

- Consulta de los 10 usuarios disponibles en JSONPlaceholder.
- Los usuarios se almacenan en el estado global mediante Redux.
- Selección dinámica de usuarios.
- Visualización de información del usuario seleccionado:
  - Nombre
  - Username
  - Email
  - Teléfono
  - Sitio web
  - Compañía
  - Ciudad

### Posts

- Consulta de publicaciones correspondientes al usuario seleccionado.
- Las publicaciones se obtienen mediante acciones de Redux.
- Cada publicación muestra sus comentarios relacionados.
- Al cambiar de usuario, la información mostrada se actualiza para evitar conservar datos del usuario anterior.

### Todos

- Consulta de tareas correspondientes al usuario seleccionado.
- Las tareas se obtienen mediante acciones de Redux.
- Se ordenan por `id` de mayor a menor.
- Se diferencia visualmente entre tareas completadas y pendientes.
- Al cambiar de usuario, la información se actualiza dinámicamente.

### Creación de tareas

La aplicación incluye un formulario para registrar una nueva tarea para el usuario seleccionado.

El formulario permite ingresar:

- Título de la tarea.
- Estado de completado.

La información se envía a JSONPlaceholder mediante una petición HTTP `POST`.

JSONPlaceholder simula la creación del recurso y devuelve el objeto generado con el identificador:

```text
id: 201
```

La aplicación muestra el ID devuelto por el servidor para confirmar que la petición se realizó correctamente.

## Manejo de estado

Se utilizó Redux Toolkit para centralizar el estado de la aplicación.

El estado se divide principalmente en:

- `users`
- `posts`
- `todos`

Las peticiones asíncronas se manejan mediante `createAsyncThunk`, permitiendo controlar los estados de carga, éxito y error de las solicitudes.

## Estructura principal

```text
src/
├── app/
│   └── store.js
│
├── components/
│   ├── UserList.jsx
│   ├── UserDetails.jsx
│   ├── PostsList.jsx
│   ├── TodosList.jsx
│   └── TodoForm.jsx
│
├── features/
│   ├── users/
│   │   └── usersSlice.js
│   ├── posts/
│   │   └── postsSlice.js
│   └── todos/
│       └── todosSlice.js
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/archykuroko/NuxibaEvaluacionFront
```

Entrar al directorio del proyecto:

```bash
cd TestDevFrontMiddle
```

Instalar las dependencias:

```bash
npm install
```

Ejecutar el proyecto en modo desarrollo:

```bash
npm run dev
```

Vite mostrará la dirección local donde se encuentra disponible la aplicación, normalmente:

```text
http://localhost:5173
```

## Build de producción

Para generar el build de producción:

```bash
npm run build
```

Los archivos generados se almacenarán en el directorio:

```text
dist/
```

## API utilizada

La aplicación consume los servicios públicos de JSONPlaceholder.

Endpoints principales utilizados:

```text
GET /users
GET /users/{userId}/posts
GET /posts/{postId}/comments
GET /users/{userId}/todos
POST /todos
```

## Interfaz

La interfaz fue desarrollada utilizando Material UI y estilos personalizados.

Se implementó un diseño responsive con:

- Panel de selección de usuarios.
- Información detallada del usuario.
- Visualización de publicaciones y comentarios.
- Visualización de tareas.
- Formulario para creación de tareas.
- Estados visuales para tareas completadas.
- Transiciones y microinteracciones.
- Adaptación para diferentes tamaños de pantalla.

## Autor

Steven Arturo Escárcega Hernández