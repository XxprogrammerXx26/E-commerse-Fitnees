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
              <a href="#" class="btn btn-danger mt-3">Únete a la clase en vivo</a>   <!--AQUI HAY QUE MANEJAR LA CLASES EN VIVO-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ClasesEnVivo",
  };
  </script>
  
  <style scoped>
  /* Estilos opcionales */
  .container {
    max-width: 900px;
  }
  .card {
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
  </style>
  
