
   <template>
    <div class="container py-5">
      <h2 class="text-center text-danger mb-5">Clases en Vivo</h2>
      <div class="row">
        <div class="col-md-12">
          <div class="card shadow-lg border-0 rounded-lg">
            <div class="card-body">
              <h3 class="card-title text-danger mb-4">Únete a nuestras clases en vivo</h3>
              <p class="card-text">
                Nuestras clases en vivo te permiten entrenar desde cualquier lugar y en cualquier momento. Con la orientación de nuestros entrenadores en tiempo real,
                ¡puedes sentir la motivación y el apoyo necesario para alcanzar tus objetivos!
              </p>
              <p><strong>¿Qué clases ofrecemos?</strong></p>
              <ul>
                <li>Yoga en vivo</li>
                <li>Entrenamientos de alta intensidad (HIIT)</li>
                <li>Clases de cardio y tonificación</li>
                <li>Entrenamientos personalizados en grupo</li>
              </ul>
              <p class="mt-3">¡Únete ahora y comienza tu entrenamiento con nosotros!</p>
              <button @click="unirseClase" class="btn btn-danger mt-3">Únete a la clase en vivo</button>
            </div>
          </div>
        </div>
      </div>
  
      <div v-if="claseEnVivo" class="modal-overlay">
        <div class="modal-content">
          <h3 class="text-center">Estás en una clase en vivo</h3>
          <p class="text-center">¡Bienvenido! Estás participando en una clase en vivo de Yoga. Disfruta de la sesión con tu entrenador.</p>
          <div class="text-center mt-4">
            <button @click="cerrarClase" class="btn btn-danger">Salir de la clase</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ClasesEnVivo",
    data() {
      return {
        claseEnVivo: false, 
      };
    },
    methods: {
   
      unirseClase() {
        this.claseEnVivo = true;
      },
     
      cerrarClase() {
        this.claseEnVivo = false;
      },
    },
  };
  </script>
  
  <style scoped>
  
  .container {
    max-width: 900px;
  }
  
  .card {
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    width: 80%;
    max-width: 500px;
  }
  
  .btn-danger {
    background-color: #dc3545;
    border-color: #dc3545;
  }
  
  .btn-danger:hover {
    background-color: #c82333;
  }
  
  .text-center {
    text-align: center;
  }
  </style>
  