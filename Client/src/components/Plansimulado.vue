<template>
    <div class="container py-5">
      <h2 class="text-center text-primary mb-5">Plan Simulado</h2>
      <div class="row">
        <div class="col-md-12">
          <div class="card shadow-lg border-0 rounded-lg">
            <div class="card-body">
              <h3 class="card-title text-primary mb-4">Tu plan personalizado</h3>
              <p class="card-text">
                Este es un plan simulado para que puedas ver cómo estructuramos tus rutinas de entrenamiento, basándonos en tus objetivos y necesidades.
                ¡Personaliza tu propio plan y empieza a trabajar en tus metas ahora mismo!
              </p>
              <p><strong>Ejemplo de Rutina:</strong></p>
              <ul>
                <li>Cardio: 30 minutos</li>
                <li>Entrenamiento de fuerza: 45 minutos (pesas y ejercicios funcionales)</li>
                <li>Estiramientos: 10 minutos</li>
              </ul>
              <a href="/form" class="btn btn-primary mt-3">Contáctanos para tu plan real</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "PlanSimulado",
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
  
