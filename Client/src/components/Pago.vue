
   <template>
    <div class="container py-5">
      <h2 class="text-center mb-4">Formulario de Pago</h2>
  
      <form @submit.prevent="procesarPago">
     
        <div class="mb-3">
          <label for="metodoPago" class="form-label">Método de Pago</label>
          <select id="metodoPago" class="form-control" v-model="metodoPago" required>
            <option value="tarjeta">Tarjeta de Crédito/Débito</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>
  
    
        <div class="mb-3">
          <label for="nombre" class="form-label">Nombre Completo</label>
          <input type="text" id="nombre" class="form-control" v-model="nombre" required />
        </div>
  
        
        <div v-if="metodoPago === 'tarjeta'" class="mb-3">
          <label for="tarjeta" class="form-label">Número de Tarjeta</label>
          <input type="text" id="tarjeta" class="form-control" v-model="tarjeta" required placeholder="1234 5678 9012 3456" />
        </div>
  
     
        <div v-if="metodoPago === 'tarjeta'" class="mb-3">
          <label for="fecha" class="form-label">Fecha de Vencimiento</label>
          <input type="month" id="fecha" class="form-control" v-model="fecha" required />
        </div>
  
        
        <div v-if="metodoPago === 'tarjeta'" class="mb-3">
          <label for="cvv" class="form-label">CVV</label>
          <input type="text" id="cvv" class="form-control" v-model="cvv" required placeholder="123" />
        </div>
  
       
        <div v-if="metodoPago === 'paypal'" class="mb-3">
          <label for="paypalEmail" class="form-label">Correo electrónico de PayPal</label>
          <input type="email" id="paypalEmail" class="form-control" v-model="paypalEmail" required placeholder="tu-email@paypal.com" />
        </div>
  
        <button type="submit" class="btn btn-primary w-100">Pagar</button>
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
      const metodoPago = ref('tarjeta'); 
      const paypalEmail = ref('');
      const pagoExitoso = ref(false);
  
      const procesarPago = () => {
       
        setTimeout(() => {
          pagoExitoso.value = true;
        }, 2000);
      };
  
      return {
        nombre,
        tarjeta,
        fecha,
        cvv,
        metodoPago,
        paypalEmail,
        pagoExitoso,
        procesarPago
      };
    }
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 600px;
  }
  
  h2 {
    font-family: 'Arial', sans-serif;
  }
  
  form {
    background-color: #ffffff;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  input, select {
    margin-bottom: 15px;
  }
  
  button {
    font-weight: bold;
  }
  
  .alert {
    text-align: center;
    font-size: 1.1rem;
  }
  
  input[type="text"], input[type="email"], input[type="month"] {
    font-size: 1rem;
  }
  
  select {
    font-size: 1rem;
  }
  </style>
  