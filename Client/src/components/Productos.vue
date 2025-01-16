<template>
    <div class="container py-5">
      <h2 class="text-center mb-4">Productos Disponibles</h2>
      <div class="row">
        <div class="col-md-4" v-for="producto in productos" :key="producto.id">
          <div class="card">
            <img :src="producto.imagen" class="card-img-top" alt="Producto">
            <div class="card-body">
              <h5 class="card-title">{{ producto.nombre }}</h5>
              <p class="card-text">${{ producto.precio }}</p>
              <button class="btn btn-primary" @click="agregarAlCarrito(producto)">Agregar al carrito</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductosPage',
    data() {
      return {
        productos: [
          { id: 1, nombre: 'Protein A', precio: 20, imagen: '/src/assets/protein_a.jpg' },
          { id: 2, nombre: 'Protein B', precio: 30, imagen: '/src/assets/protein_b.jpg' },
          { id: 3, nombre: 'Protein C', precio: 40, imagen: '/src/assets/protein_c.jpg' },
        ],
      };
    },
    methods: {
      agregarAlCarrito(producto) {
        console.log('Producto agregado al carrito:', producto);
        // Aquí puedes implementar la lógica para agregar el producto al carrito
      },
    },
  };
  </script>
  
  <style scoped>
  .card {
    margin-bottom: 20px;
  }
  </style>