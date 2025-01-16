<!-- 
 
  <template>
    <div>
     
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <router-link to="#" class="navbar-brand">Fitness<span class="text-primary">Hub</span></router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto text-center">
            
              <li class="nav-item">
                <router-link class="nav-link" to="/cart" aria-label="Ir al carrito">
                  <i class="fas fa-shopping-cart"></i> Carrito
                </router-link>
              </li>
  
              
              <li class="nav-item">
                <router-link class="nav-link" to="/profile" aria-label="Ir al perfil de usuario">
                  <i class="fas fa-user"></i> Usuario
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  
     
      <div class="container py-5">
        <h2 class="text-center mb-5">Productos Disponibles</h2>
        <div class="row">
          <div class="col-md-4 mb-4" v-for="producto in productos" :key="producto.id">
            <div class="card shadow-lg border-light rounded">
              <img :src="producto.imagen" class="card-img-top rounded-top" alt="Imagen del Producto" />
              <div class="card-body">
                <h5 class="card-title">{{ producto.nombre }}</h5>
                <p class="card-text text-muted">
                  ${{ producto.precio.toFixed(2) }}
                </p>
                <button 
                  class="btn btn-primary btn-block" 
                  @click="agregarAlCarrito(producto)" 
                  :disabled="isInCart(producto)"
                >
                  <span v-if="isInCart(producto)">✔ Agregado</span>
                  <span v-else>Agregar al carrito</span>
                </button>
              </div>
            </div>
          </div>
        </div>
    
    
        <div v-if="productoAgregado" class="alert alert-success fixed-bottom mb-3 mx-5 text-center">
          <strong>Producto agregado al carrito</strong>
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
        carrito: [],
        productoAgregado: false,
      };
    },
    methods: {
      agregarAlCarrito(producto) {
        this.carrito.push(producto);
        this.productoAgregado = true;
        setTimeout(() => this.productoAgregado = false, 3000); 
      },
      isInCart(producto) {
        return this.carrito.some(item => item.id === producto.id);
      }
    },
  };
  </script>
  
  <style scoped>
  .card {
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease;
  }
  
  .card:hover {
    transform: translateY(-10px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  .card-img-top {
    object-fit: cover;
    height: 220px;
    border-top-left-radius: 0.375rem;
    border-top-right-radius: 0.375rem;
  }
  
  .card-body {
    padding: 1.5rem;
  }
  
  .card-title {
    font-size: 1.4rem;
    font-weight: 600;
    color: #333;
  }
  
  .card-text {
    font-size: 1.1rem;
    color: #555;
  }
  
  .btn-primary {
    font-size: 1rem;
    padding: 0.75rem;
    background-color: #007bff;
    border: none;
    width: 100%;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }
  
  .btn-primary:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }
  
  .btn-primary:disabled {
    background-color: #d6e1f0;
    color: #9b9b9b;
  }
  
  .alert {
    background-color: #28a745;
    color: white;
    font-size: 1.2rem;
    border-radius: 10px;
    opacity: 0.9;
  }
  
  @media (max-width: 768px) {
    .card {
      margin: 0 15px;
    }
    .card-body {
      padding: 1.2rem;
    }
  }
  </style>
   -->






















































   <template>
    <div>
      <!-- Navbar -->
      <nav class="navbar navbar-expand-lg navbar-dark bg-black">
        <div class="container">
          <router-link to="#" class="navbar-brand">Fitness<span class="text-primary">Hub</span></router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto text-center">
              <!-- Carrito -->
              <li class="nav-item">
                <router-link class="nav-link" to="/cart" aria-label="Ir al carrito">
                  <i class="fas fa-shopping-cart"></i> 
                  Carrito <span v-if="carritoCount > 0" class="badge bg-primary">{{ carritoCount }}</span>
                </router-link>
              </li>
  
              <!-- Perfil -->
              <li class="nav-item">
                <router-link class="nav-link" to="/profile" aria-label="Ir al perfil de usuario">
                  <i class="fas fa-user"></i> Usuario
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  
      <!-- Productos Disponibles -->
      <div class="container py-5">
        <h2 class="text-center mb-5">Productos Disponibles</h2>
        <div class="row">
          <div class="col-md-4 mb-4" v-for="producto in productosDisponibles" :key="producto.id">
            <div class="card shadow-lg border-light rounded">
              <img :src="producto.imagen" class="card-img-top rounded-top" alt="Imagen del Producto" />
              <div class="card-body">
                <h5 class="card-title">{{ producto.nombre }}</h5>
                <p class="card-text text-muted">
                  ${{ producto.precio.toFixed(2) }}
                </p>
                <button 
                  class="btn btn-primary btn-block" 
                  @click="agregarAlCarrito(producto)" 
                  :disabled="isInCart(producto)"
                >
                  <span v-if="isInCart(producto)">✔ Agregado</span>
                  <span v-else>Agregar al carrito</span>
                </button>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Confirmación de agregado al carrito -->
        <div v-if="productoAgregado" class="alert alert-success fixed-bottom mb-3 mx-5 text-center">
          <strong>Producto agregado al carrito</strong>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  
  export default {
    name: 'Productos',
    setup() {
      const carrito = ref([]);
      const productosDisponibles = ref([
        { id: 1, nombre: 'Producto 1', precio: 100, imagen: 'url-imagen-1' },
        { id: 2, nombre: 'Producto 2', precio: 150, imagen: 'url-imagen-2' },
        { id: 3, nombre: 'Producto 3', precio: 200, imagen: 'url-imagen-3' }
      ]);
      const carritoCount = ref(0);
      const productoAgregado = ref(false);
  
      // Cargar el carrito desde localStorage al montar el componente
      onMounted(() => {
        const carritoGuardado = JSON.parse(localStorage.getItem('carrito'));
        if (carritoGuardado) {
          carrito.value = carritoGuardado;
          carritoCount.value = carrito.value.length;
        }
      });
  
      function agregarAlCarrito(producto) {
        carrito.value.push(producto);
        carritoCount.value = carrito.value.length;
        productoAgregado.value = true;
  
        // Guardar el carrito actualizado en localStorage
        localStorage.setItem('carrito', JSON.stringify(carrito.value));
  
        // Desaparecer el mensaje después de 3 segundos
        setTimeout(() => productoAgregado.value = false, 3000);
      }
  
      function isInCart(producto) {
        return carrito.value.some(item => item.id === producto.id);
      }
  
      return {
        productosDisponibles,
        carritoCount,
        agregarAlCarrito,
        isInCart,
        productoAgregado
      };
    }
  };
  </script>
  
  <style scoped>
  .card {
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease;
  }
  
  .card:hover {
    transform: translateY(-10px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  .card-img-top {
    object-fit: cover;
    height: 220px;
    border-top-left-radius: 0.375rem;
    border-top-right-radius: 0.375rem;
  }
  
  .card-body {
    padding: 1.5rem;
  }
  
  .card-title {
    font-size: 1.4rem;
    font-weight: 600;
    color: #333;
  }
  
  .card-text {
    font-size: 1.1rem;
    color: #555;
  }
  
  .btn-primary {
    font-size: 1rem;
    padding: 0.75rem;
    background-color: #007bff;
    border: none;
    width: 100%;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }
  
  .btn-primary:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }
  
  .btn-primary:disabled {
    background-color: #d6e1f0;
    color: #9b9b9b;
  }
  
  .alert {
    background-color: #28a745;
    color: white;
    font-size: 1.2rem;
    border-radius: 10px;
    opacity: 0.9;
  }
  </style>
  