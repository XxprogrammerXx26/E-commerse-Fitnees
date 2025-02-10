<!-- 
<template>
  <div>
    <h2>Mi Carrito de Compras</h2>

    <ul>
      <li v-for="(producto, index) in carrito" :key="producto.id">
        <span>{{ producto.nombre }} - ${{ producto.precio }} x 1</span>
        <button @click="eliminarProducto(index)">Eliminar</button>
      </li>
    </ul>

    <p v-if="carrito.length === 0">Tu carrito está vacío.</p>

    <div v-if="carrito.length > 0">
      <p>Total: ${{ calcularTotal() }}</p>
      <button @click="vaciarCarrito">Vaciar Carrito</button>
      <router-link to="/pago">
        <button class="btn-pago">Forma de Pago</button>
      </router-link>
    </div>

    <div v-if="pagoExitoso" class="alert alert-success mt-3">
      <strong>¡Pago realizado con éxito!</strong> ¡Gracias por tu compra!
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'Cart',
  setup() {
    const carrito = ref([]);

    onMounted(() => {
      const carritoGuardado = JSON.parse(localStorage.getItem('carrito'));
      if (carritoGuardado) {
        carrito.value = carritoGuardado;
      }
    });

    function eliminarProducto(index) {
      carrito.value.splice(index, 1); 
      localStorage.setItem('carrito', JSON.stringify(carrito.value)); 
    }

    function vaciarCarrito() {
      carrito.value = []; 
      localStorage.removeItem('carrito'); 
    }

    function calcularTotal() {
      return carrito.value.reduce((total, producto) => total + producto.precio, 0);
    }

    return {
      carrito,
      eliminarProducto,
      vaciarCarrito,
      calcularTotal
    };
  }
};
</script>

<style scoped>

.btn-pago {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.btn-pago:hover {
  background-color: #218838;
  transform: scale(1.05);
}
</style> -->









































<template>
  <div class="cart-container">
    <h2 class="cart-title">Mi Carrito de Compras</h2>

    <ul v-if="carrito.length > 0" class="cart-items">
      <li v-for="(producto, index) in carrito" :key="producto.id" class="cart-item">
        <div class="cart-item-info">
          <span class="product-name">{{ producto.nombre }}</span>
          <span class="product-price">${{ producto.precio.toFixed(2) }} x 1</span>
        </div>
        <button @click="eliminarProducto(index)" class="btn-remove">
          <i class="fas fa-trash-alt"></i> Eliminar
        </button>
      </li>
    </ul>

    <p v-if="carrito.length === 0" class="empty-cart-message">Tu carrito está vacío.</p>

    <div v-if="carrito.length > 0" class="cart-summary">
      <p class="total-price">Total: ${{ calcularTotal().toFixed(2) }}</p>
      <button @click="vaciarCarrito" class="btn-clear">Vaciar Carrito</button>
      <router-link to="/pago">
        <button class="btn-pago">Forma de Pago</button>
      </router-link>
    </div>

    <div v-if="pagoExitoso" class="alert alert-success mt-3">
      <strong>¡Pago realizado con éxito!</strong> ¡Gracias por tu compra!
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'Cart',
  setup() {
    const carrito = ref([]);
    const pagoExitoso = ref(false);

    onMounted(() => {
      const carritoGuardado = JSON.parse(localStorage.getItem('carrito'));
      if (carritoGuardado) {
        carrito.value = carritoGuardado;
      }
    });

    function eliminarProducto(index) {
      carrito.value.splice(index, 1);
      localStorage.setItem('carrito', JSON.stringify(carrito.value));
    }

    function vaciarCarrito() {
      carrito.value = [];
      localStorage.removeItem('carrito');
    }

    function calcularTotal() {
      return carrito.value.reduce((total, producto) => total + producto.precio, 0);
    }

    return {
      carrito,
      eliminarProducto,
      vaciarCarrito,
      calcularTotal,
      pagoExitoso,
    };
  },
};
</script>

<style scoped>
.cart-container {
  max-width: 900px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.cart-title {
  font-size: 2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
}

.cart-items {
  list-style: none;
  padding: 0;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  margin-bottom: 15px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.cart-item-info {
  display: flex;
  flex-direction: column;
}

.product-name {
  font-size: 1.2rem;
  font-weight: 500;
  color: #333;
}

.product-price {
  font-size: 1rem;
  color: #777;
}

.btn-remove {
  background-color: #ff4e42;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.btn-remove:hover {
  background-color: #e02d1c;
  transform: scale(1.05);
}

.empty-cart-message {
  text-align: center;
  color: #888;
  font-size: 1.2rem;
}

.cart-summary {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.total-price {
  font-size: 1.4rem;
  font-weight: 600;
  color: #333;
}

.btn-clear {
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 12px 20px;
  font-size: 1.1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.btn-clear:hover {
  background-color: #c82333;
  transform: scale(1.05);
}

.btn-pago {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 1.2rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.btn-pago:hover {
  background-color: #218838;
  transform: scale(1.05);
}

.alert {
  background-color: #28a745;
  color: white;
  font-size: 1.2rem;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  opacity: 0.9;
}
</style>









