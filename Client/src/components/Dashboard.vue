   
   <template>

  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-black">
      <div class="container">
        <a href="#" class="navbar-brand">Fitness<span class="text-primary">Hub</span></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto  text-center ">
            <!-- <li class="nav-item"><a class="nav-link" href="#">Inicio</a></li> -->
            <!-- <li class="nav-item"><a class="nav-link" href="#sobre-nosotros">Sobre Nosotros</a></li>
            <li class="nav-item"><a class="nav-link" href="#productos">Productos</a></li>
            <li class="nav-item"><a class="nav-link" href="#servicios">Servicios</a></li>
            
             -->
            <!-- <li class="nav-item"><a class="nav-link" href="/Cart">Carrito</a></li> -->



            <li class="nav-item">
              <a class="nav-link" href="#"><i class="fas fa-home"></i> Inicio</a>
            </li>



            <li class="nav-item">
              <a class="nav-link" href="#sobre-nosotros"><i class="fas fa-users"></i> Sobre Nosotros</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#productos"><i class="fas fa-box"></i> Productos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#servicios"><i class="fas fa-concierge-bell"></i> Servicios</a>
            </li>



            <!-- <li class="nav-item">
              <a class="nav-link" href="/Cart"><i class="fas fa-shopping-cart"></i> Carrito</a>
            </li> -->

            <!-- <li class="nav-item"><a  class="nav-link" href="/Profile">Usuario</a></li>
            <li class="nav-item"><a class="nav-link" href="#contactanos">Contáctanos</a></li> -->
          

<!-- 
            <li class="nav-item">
              <a class="nav-link" href="/Profile"><i class="fas fa-user"></i> Usuario</a>
            </li> -->
            <li class="nav-item">
              <a class="nav-link" href="#contactanos"><i class="fas fa-envelope"></i> Contáctanos</a>
            </li>





             <!-- <li class="nav-item"><a class="nav-link" href="/login">Cerrar Sesion</a></li> -->



             <li class="nav-item">
              <a class="nav-link" href="/login"><i class="fas fa-sign-out-alt"></i> Cerrar Sesión</a>
            </li>


          </ul>
        </div>
      </div>
    </nav>

   
    <section class="hero d-flex align-items-center justify-content-center text-center text-white" style="background: url('/src/assets/totalfit-benefit.6bbbb44a.jpeg') no-repeat center center/cover; height: 80vh;">
      <div class="hero-content">
        <h1 class="display-3 text-uppercase"></h1>
        <p class="lead custom-background">FitnessHub, tu casa es el nuevo gym</p>
        <button class="btn btn-primary btn-lg">¡Empieza Hoy!</button>
      </div>
    </section>

   
 
    <!-- <section id="sobre-nosotros" class="py-5">
      <div class="container text-center">
        <h2 class="text-primary mb-4">Sobre Nosotros</h2>
        <p>En FitnessHub, creemos en un estilo de vida saludable y accesible. Nuestra misión es proporcionarte herramientas, productos y servicios para alcanzar tus metas desde la comodidad de tu hogar.</p>
      </div>
    </section> -->







    <section id="sobre-nosotros" class="py-5">
  <div class="container text-center">
    <h2 class="text-primary mb-4">Sobre Nosotros</h2>
    <p class="lead mb-4">En FitnessHub, creemos en un estilo de vida saludable y accesible. Nuestra misión es proporcionarte herramientas, productos y servicios para alcanzar tus metas desde la comodidad de tu hogar.</p>

    <div class="row">
      <div class="col-md-4">
        <h3 class="text-primary">Nuestra Visión</h3>
        <p>Ser la plataforma líder en el bienestar físico y mental, brindando a nuestros usuarios acceso a entrenamientos de calidad, nutrición personalizada y apoyo constante en su camino hacia una vida más saludable.</p>
      </div>
      <div class="col-md-4">
        <h3 class="text-primary">Nuestros Valores</h3>
        <ul class="list-unstyled">
          <li><i class="fas fa-check-circle text-success"></i> Compromiso con la salud</li>
          <li><i class="fas fa-check-circle text-success"></i> Accesibilidad para todos</li>
          <li><i class="fas fa-check-circle text-success"></i> Innovación constante</li>
          <li><i class="fas fa-check-circle text-success"></i> Trabajo en comunidad</li>
        </ul>
      </div>
      <div class="col-md-4">
        <h3 class="text-primary">¿Por qué elegirnos?</h3>
        <p>Porque ofrecemos un enfoque integral para tu bienestar, combinando entrenamiento personalizado, asesoría nutricional y el acompañamiento que necesitas para alcanzar tus objetivos.</p>
      </div>
    </div>






    <div class="mt-5">
      <h3 class="text-primary">Nuestro Equipo</h3>
      <p>Contamos con un equipo de profesionales apasionados por el fitness y la salud. Cada uno de ellos está comprometido a ayudarte a alcanzar tus metas de la manera más efectiva y segura posible.</p>
      <div class="row">
        <div class="col-md-4">
          <div class="card">
            <img src="/src/assets/AlexVargas.webp" class="card-img-top" alt="JuanPerez">
            <div class="card-body">
              <h5 class="card-title">Juan Pérez</h5>
              <p class="card-text">Entrenador personal certificado con más de 10 años de experiencia ayudando a personas a transformar su cuerpo y su mente.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <img src="/src/assets/Female-Fitness-Download-Transparent-PNG-Image.png" class="card-img-top" alt="MariaGarcia">
            <div class="card-body">
              <h5 class="card-title">María García</h5>
              <p class="card-text">Nutricionista deportiva con un enfoque personalizado para cada cliente, ayudando a optimizar su rendimiento y salud.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <img src="/src/assets/CarlosDiaz.webp" class="card-img-top" alt="Carlos Diaz">
            <div class="card-body">
              <h5 class="card-title">Carlos Díaz</h5>
              <p class="card-text">Especialista en entrenamiento funcional y bienestar, con un enfoque en mejorar la movilidad y prevención de lesiones.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


















 <section id="productos" class="products py-5 bg-dark text-white">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6">
            <img src="/src/assets/blog_65_480x480.webp" alt="Protein" class="img-fluid rounded">
          </div>
          <div class="col-md-6">
            <h2 class="text text-primary">Suplementos</h2>
            <p>Complementa tu entrenamiento y acelera tus resultados con FitnessHub Protein...</p>
            <!-- <button class="btn btn-primary">Compra tu proteína aquí</button> -->
            
            <router-link to="/productos">
            <button class="btn btn-primary">Compra tu proteína aquí</button>
            </router-link>
          
          </div>

          
        </div>
      </div>
    </section>






    <section id="servicios" class="py-5 bg-light">
  <div class="container text-center">
    <h2 class="text-primary mb-5">Nuestros Servicios</h2>
    <div class="row">
      
      
      <div class="col-md-4 mb-4">
        <div class="card h-100 shadow-lg border-0 rounded-lg">
          <div class="card-body">
            <div class="d-flex justify-content-center mb-3">
              <i class="fas fa-dumbbell fa-3x text-primary"></i>
            </div>
            <h3 class="card-title text-primary mb-3">Entrenamientos Personalizados</h3>
            <p class="card-text">Diseñamos rutinas específicas para alcanzar tus metas. Ya sea perder peso, ganar masa muscular o mejorar tu resistencia, te acompañamos en cada paso.</p>
            <a href="#contacto" class="btn btn-primary mt-3">Solicita tu plan</a>
          </div>
        </div>
      </div>

    
      <div class="col-md-4 mb-4">
        <div class="card h-100 shadow-lg border-0 rounded-lg">
          <div class="card-body">
            <div class="d-flex justify-content-center mb-3">
              <i class="fas fa-apple-alt fa-3x text-success"></i>
            </div>
            <h3 class="card-title text-success mb-3">Asesoramiento Nutricional</h3>
            <p class="card-text">Con nuestros planes nutricionales, optimizamos tu alimentación para que puedas mejorar tu rendimiento físico y alcanzar tus objetivos más rápido.</p>
            <a href="#contacto" class="btn btn-success mt-3">Más información</a>
          </div>
        </div>
      </div>

     
      <div class="col-md-4 mb-4">
        <div class="card h-100 shadow-lg border-0 rounded-lg">
          <div class="card-body">
            <div class="d-flex justify-content-center mb-3">
              <i class="fas fa-video fa-3x text-danger"></i>
            </div>
            <h3 class="card-title text-danger mb-3">Clases en Vivo</h3>
            <p class="card-text">Participa en nuestras clases en línea desde cualquier lugar, con entrenadores expertos que te guiarán en tiempo real. ¡Siente la motivación de entrenar con nosotros!</p>
            <a href="#contacto" class="btn btn-danger mt-3">Únete ahora</a>
          
        
          </div>
        </div>
      </div>

    </div>
  </div>
</section>





















 
    <section id="contactanos" class="py-5 bg-dark text-white">
      <div class="container text-center">
        <h2 class="text-primary mb-4">Contáctanos</h2>
        <p>¿Tienes preguntas o necesitas más información? Escríbenos y con gusto te ayudaremos.</p>

        <router-link to="/form">
            <button class="btn btn-primary">Contáctanos Aquí</button>
        </router-link>

      </div>
    </section>
  </div>
</template>

<script setup>

</script>






<style scoped>






.brand-text {
  color: #00ffcc;
}


.custom-btn {
  background-color: #00ffcc;
  border-color: #00ffcc;
  color: #000; /* Color de texto negro, puedes ajustarlo si lo prefieres */
}

.custom-btn:hover {
  background-color: #00e6b3; /* Color ligeramente más oscuro al pasar el mouse */
  border-color: #00e6b3;
}

.custom-text {
  color: #00ffcc;
}






.hero {
  background: url('/src/assets/totalfit-benefit.6bbbb44a.jpeg') no-repeat center center/cover;
  color: #fff;
  text-align: center;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.hero-content h1 {
  font-size: 3rem;
  text-transform: uppercase;
  margin-bottom: 1rem;
}
.hero-content p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

/* Products Section */
.products {
  background-color: #000;
  color: #fff;
  padding: 4rem 2rem;
}
.products .product-item img {
  width: 300px;
  border-radius: 10px;
}






.custom-background {
  background-color: #00000069; /* Azul personalizado */
  color: white;
  border-radius: 50px;

}






.card {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.card-img-top {
  width: 100%;
  height: 350px; /* Ajusta la altura según tus necesidades */
  object-fit: cover;
}

.card-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}



</style>
