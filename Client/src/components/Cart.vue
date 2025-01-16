<template>
    <div>
      <h2>Mi Carrito de Compras</h2>
  
      <!-- Mostrar productos del carrito -->
      <ul>
        <li v-for="(producto, index) in carrito" :key="producto.id">
          <span>{{ producto.nombre }} - ${{ producto.precio }} x {{ producto.cantidad }}</span>
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
  
      <!-- Mostrar los productos disponibles para agregar -->
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
  import { auth, db } from '../firebase'; // Asegúrate de tener configurado Firebase correctamente
  import { doc, setDoc, getDoc } from 'firebase/firestore'; // Funciones de Firestore
  
  export default {
    setup() {
      const carrito = ref([]);
      const productosDisponibles = ref([
        { id: 1, nombre: 'Producto 1', precio: 100 },
        { id: 2, nombre: 'Producto 2', precio: 150 },
        { id: 3, nombre: 'Producto 3', precio: 200 }
      ]);
      const user = auth.currentUser;  // Obtener el usuario autenticado
  
      // Función para calcular el total del carrito
      function calcularTotal() {
        return carrito.value.reduce((total, producto) => {
          return total + producto.precio * producto.cantidad;
        }, 0);
      }
  
      // Función para agregar un producto al carrito
      function agregarAlCarrito(producto) {
        // Verificar si el producto ya está en el carrito
        const index = carrito.value.findIndex(item => item.id === producto.id);
        if (index !== -1) {
          carrito.value[index].cantidad++;  // Si ya está, solo aumentar la cantidad
        } else {
          carrito.value.push({ ...producto, cantidad: 1 });  // Si no está, agregarlo al carrito
        }
  
        guardarCarritoEnFirestore(carrito.value);  // Guardar el carrito actualizado en Firestore
      }
  
      // Función para eliminar un producto del carrito
      function eliminarProducto(index) {
        carrito.value.splice(index, 1);  // Eliminar el producto del carrito
        guardarCarritoEnFirestore(carrito.value);  // Guardar el carrito actualizado en Firestore
      }
  
      // Función para vaciar el carrito
      function vaciarCarrito() {
        carrito.value = [];  // Vaciar el carrito
        guardarCarritoEnFirestore(carrito.value);  // Guardar el carrito vacío en Firestore
      }
  
      // Función para guardar el carrito en Firestore
      async function guardarCarritoEnFirestore(carrito) {
        if (user) {
          const carritoRef = doc(db, 'carrito', user.uid);  // Crear documento con el UID del usuario
          await setDoc(carritoRef, {
            productos: carrito,  // Array de productos en el carrito
            fecha: new Date().toISOString()  // Fecha de la actualización
          }, { merge: true });  // Usar 'merge: true' para no sobrescribir el documento si ya existe
          console.log('Carrito guardado en Firestore');
        } else {
          console.error('Usuario no autenticado');
        }
      }
  
      // Función para obtener el carrito de Firestore cuando se monta el componente
      async function obtenerCarritoDeFirestore() {
        if (user) {
          const carritoRef = doc(db, 'carrito', user.uid);
          const docSnap = await getDoc(carritoRef);
          if (docSnap.exists()) {
            carrito.value = docSnap.data().productos || [];  // Cargar el carrito desde Firestore
          } else {
            carrito.value = [];  // Si no hay carrito, usar un carrito vacío
          }
        }
      }
  
      // Cargar el carrito al montar el componente
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
  /* Agregar aquí los estilos para tu carrito de compras */
  </style>
  