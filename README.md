
# Plataforma de Compra-Venta

Proyecto de Arquitectura de Software II - Trabajo Práctico 2025.

Implementación de una plataforma de compra y venta de productos utilizando **Arquitectura Hexagonal** y **DDD (Domain-Driven Design)**, persistiendo los datos en **MongoDB Atlas** y exponiendo un API REST.

---

## 📋 Requisitos

- Node.js v18 o superior (recomendado v20+)
- MongoDB Atlas (o una instancia local de MongoDB)
- npm

---

## ⚙️ Instalación

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/JeremiasFuentes/unq-arqs2-jeremias-fuentes.git
   cd unq-arqs2-jeremias-fuentes/marketplace-app
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Crear un archivo `.env` en la raíz del proyecto con el siguiente contenido (O usar el que ya esta configurado para test):
   ```
   MONGO_URI=<uri_de_mongo_atlas>
   PORT=3000
   ```

---

## 🚀 Ejecución

Para levantar el servidor en modo desarrollo:

```bash
npx ts-node src/index.ts
```

El servidor quedará disponible en:

```
http://localhost:3000
```

---

## 📚 Endpoints Disponibles

### Usuarios

- `POST /usuarios` ➔ Crear un usuario
- `PUT /usuarios/:id` ➔ Modificar un usuario
- `DELETE /usuarios/:id` ➔ Eliminar un usuario

### Vendedores

- `POST /vendedores` ➔ Crear un vendedor
- `PUT /vendedores/:id` ➔ Modificar un vendedor
- `DELETE /vendedores/:id` ➔ Eliminar un vendedor

### Productos

- `POST /productos` ➔ Crear un producto
- `PUT /productos/:id` ➔ Modificar un producto
- `DELETE /productos/:id` ➔ Eliminar un producto
- `GET /productos/buscar?nombre=<nombre>` ➔ Buscar productos por nombre
- `GET /productos/filtrar?min=<precio_min>&max=<precio_max>` ➔ Filtrar productos por precio

### Ventas

- `POST /ventas` ➔ Procesar la venta de un producto

---

## 🧪 Testing

Para correr los tests unitarios:

```bash
npx test
```


## ✨ Arquitectura

El proyecto implementa:
- Arquitectura Hexagonal
- DDD (Domain-Driven Design)
- Separación en capas:
  - Dominio
  - Aplicación (Use Cases)
  - Infraestructura (MongoDB, Controllers, Rutas)
  - API REST

---

## 👤 Autor

Trabajo práctico individual - **Entrega 1**  
Arquitectura de Software II - **Universidad Nacional de Quilmes**  
Abril 2025
