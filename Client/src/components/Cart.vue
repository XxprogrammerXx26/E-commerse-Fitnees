<!-- 
   <template>
    <div>
      <h2>Mi Carrito de Compras</h2>
  
     
      <ul>
        <li v-for="(producto, index) in carrito" :key="producto.id">
          <span>{{ producto.nombre }} - ${{ producto.precio }} x {{ producto.cantidad }}</span>
          <button @click="eliminarProducto(index)">Eliminar</button>
        </li>
      </ul>
  
      <p v-if="carrito.length === 0">Tu carrito está vacío.</p>
  
     
      <div v-if="carrito.length > 0">
        <p>Total: ${{ calcularTotal() }}</p>
        <button @click="vaciarCarrito">Vaciar Carrito</button>
      </div>
  
      
      <div>
        <h3>Productos disponibles</h3>
        <ul>
          <li v-for="producto in productosDisponibles" :key="producto.id">
            <span>{{ producto.nombre }} - ${{ producto.precio }}</span>
            <button @click="agregarAlCarrito(producto)">Agregar al carrito</button>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { auth, db } from '../firebase'; 
  import { doc, setDoc, getDoc } from 'firebase/firestore'; 
  
  export default {
    setup() {
      const carrito = ref([]);
      const productosDisponibles = ref([
        { id: 1, nombre: 'Producto 1', precio: 100 },
        { id: 2, nombre: 'Producto 2', precio: 150 },
        { id: 3, nombre: 'Producto 3', precio: 200 }
      ]);
  
     
      const user = auth.currentUser;
  
     
      function calcularTotal() {
        return carrito.value.reduce((total, producto) => {
          return total + producto.precio * producto.cantidad;
        }, 0);
      }
  
      
      function agregarAlCarrito(producto) {
      
        const index = carrito.value.findIndex(item => item.id === producto.id);
        if (index !== -1) {
          carrito.value[index].cantidad++;  
        } else {
          carrito.value.push({ ...producto, cantidad: 1 });  
        }
  
        guardarCarritoEnFirestore(carrito.value);  
      }
  
    
      function eliminarProducto(index) {
        carrito.value.splice(index, 1);  
        guardarCarritoEnFirestore(carrito.value); 
      }
  
     
      function vaciarCarrito() {
        carrito.value = [];  
        guardarCarritoEnFirestore(carrito.value);  
      }
  
    
      async function guardarCarritoEnFirestore(carrito) {
        if (user) {
          const carritoRef = doc(db, 'carrito', user.uid);  
          await setDoc(carritoRef, {
            productos: carrito,  
            fecha: new Date().toISOString()  
          }, { merge: true });  
          console.log('Carrito guardado en Firestore');
        } else {
          console.error('Usuario no autenticado');
        }
      }
  
     
      async function obtenerCarritoDeFirestore() {
        if (user) {
          const carritoRef = doc(db, 'carrito', user.uid);
          const docSnap = await getDoc(carritoRef);
          if (docSnap.exists()) {
            carrito.value = docSnap.data().productos || [];  
          } else {
            carrito.value = [];  
          }
        }
      }
  
     
      onMounted(() => {
        obtenerCarritoDeFirestore();
      });
  
      return {
        carrito,
        productosDisponibles,
        agregarAlCarrito,
        eliminarProducto,
        vaciarCarrito,
        calcularTotal
      };
    }
  };
  </script>
  
  <style scoped>

  </style>
  
 -->































 <template>
  <div>
    <h2>Mi Carrito de Compras</h2>

    <!-- Mostrar productos del carrito -->
    <ul>
      <li v-for="(producto, index) in carrito" :key="producto.id">
        <span>{{ producto.nombre }} - ${{ producto.precio }} x 1</span>
        <button @click="eliminarProducto(index)">Eliminar</button>
      </li>
    </ul>

    <!-- Mostrar mensaje si el carrito está vacío -->
    <p v-if="carrito.length === 0">Tu carrito está vacío.</p>

    <!-- Mostrar total -->
    <div v-if="carrito.length > 0">
      <p>Total: ${{ calcularTotal() }}</p>
      <button @click="vaciarCarrito">Vaciar Carrito</button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'Cart',
  setup() {
    const carrito = ref([]);

    // Cargar el carrito desde localStorage al montar el componente
    onMounted(() => {
      const carritoGuardado = JSON.parse(localStorage.getItem('carrito'));
      if (carritoGuardado) {
        carrito.value = carritoGuardado;
      }
    });

    function eliminarProducto(index) {
      carrito.value.splice(index, 1); // Eliminar el producto del carrito
      localStorage.setItem('carrito', JSON.stringify(carrito.value)); // Guardar el carrito actualizado en localStorage
    }

    function vaciarCarrito() {
      carrito.value = []; // Vaciar el carrito
      localStorage.removeItem('carrito'); // Eliminar carrito de localStorage
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
/* Agregar aquí los estilos para tu carrito de compras */
</style>
