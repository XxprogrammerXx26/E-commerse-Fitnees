<template>
    <div class="container py-5">
      <h2>Formulario de Pago</h2>
  
      <form @submit.prevent="procesarPago">
        <div class="mb-3">
          <label for="nombre" class="form-label">Nombre Completo</label>
          <input type="text" id="nombre" class="form-control" v-model="nombre" required />
        </div>
        <div class="mb-3">
          <label for="tarjeta" class="form-label">Número de Tarjeta</label>
          <input type="text" id="tarjeta" class="form-control" v-model="tarjeta" required />
        </div>
        <div class="mb-3">
          <label for="fecha" class="form-label">Fecha de Vencimiento</label>
          <input type="month" id="fecha" class="form-control" v-model="fecha" required />
        </div>
        <div class="mb-3">
          <label for="cvv" class="form-label">CVV</label>
          <input type="text" id="cvv" class="form-control" v-model="cvv" required />
        </div>
  
        <button type="submit" class="btn btn-primary">Pagar</button>
      </form>
  
      <div v-if="pagoExitoso" class="alert alert-success mt-3">
        <strong>¡Pago realizado con éxito!</strong> ¡Gracias por tu compra!
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'Pago',
    setup() {
      const nombre = ref('');
      const tarjeta = ref('');
      const fecha = ref('');
      const cvv = ref('');
      const pagoExitoso = ref(false);
  
      const procesarPago = () => {
        // Aquí simula el proceso de pago
        setTimeout(() => {
          pagoExitoso.value = true; // Simula un pago exitoso
        }, 2000);
      };
  
      return {
        nombre,
        tarjeta,
        fecha,
        cvv,
        pagoExitoso,
        procesarPago
      };
    }
  };
  </script>
  
  <style scoped>
  /* Estilos opcionales para el formulario de pago */
  .container {
    max-width: 500px;
  }
  
  form {
    background-color: #f9f9f9;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  input {
    margin-bottom: 10px;
  }
  </style>
  