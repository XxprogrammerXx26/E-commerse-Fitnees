 <!-- <template>

  <div class="full-screen-bg">
    <div class="container d-flex justify-content-center align-items-center min-vh-100">
      <div class="row g-0" style="max-width: 900px; width: 100%;">
    
        <div class="col-md-6 bg-dark p-5 d-flex flex-column justify-content-center">
          <h2 class="text-center mb-4 text-white">Iniciar Sesión</h2>
          <form @submit.prevent="handleLogin">
            <div class="mb-3">
              <label for="loginEmail" class="form-label text-white">Correo Electrónico</label>
              <input
                type="email"
                v-model="email"
                id="loginEmail"
                class="form-control"
                placeholder="Ingresa tu correo"
                required
              />
            </div>
            <div class="mb-3">
              <label for="loginPassword" class="form-label text-white">Contraseña</label>
              <input
                type="password"
                v-model="password"
                id="loginPassword"
                class="form-control"
                placeholder="Ingresa tu contraseña"
                required
              />
            </div>
            <button type="submit" class="btn btn-primary w-100">Iniciar Sesión</button>
          </form>
          <p class="text-center mt-3 text-white">
            ¿No tienes una cuenta? <router-link to="/register" class="text-decoration-none">Regístrate aquí</router-link>
          </p>
        </div>

                                                                
        <div class="col-md-6">
          <img
            src="/src/assets/totalfit-benefit.6bbbb44a.jpeg"
            alt="Fitness Image"
            class="img-fluid h-100 w-100"
            style="object-fit: cover;"
          />
        </div>
      </div>
    </div>
  </div>

</template>







<script setup>
import { ref } from 'vue';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const router = useRouter();

const handleLogin = async () => {
  const authInstance = getAuth();
  try {
    await signInWithEmailAndPassword(authInstance, email.value, password.value);
    alert("¡Inicio de sesión exitoso!");
    router.push('/dashboard');
  } catch (error) {
    console.error('Error al iniciar sesión:', error.message);
    alert('Error al iniciar sesión. Por favor, verifica tus credenciales.');
  }
};
</script>





 <style scoped>
 .full-screen-bg {
   background-color: #000;
   color: #fff;
   min-height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
 }
 
 .bg-dark {
   background-color: #ffffff;
 }
 
 .form-label {
   color: #fff;
 }
 
 .btn-primary {
   background-color: #000ba1;
   border: none;
   color: #ffffff;
   font-weight: bold;
 }
 
 .btn-primary:hover {
   background-color: #041586;
 }
 
 .img-fluid {
   border-radius: 0 12px 12px 0;
 }
 </style>
 -->

























 <template>
  <div class="full-screen-bg">
    <div class="container d-flex justify-content-center align-items-center min-vh-100">
      <div class="row g-0" style="max-width: 900px; width: 100%;">
    
        <div class="col-md-6 bg-dark p-5 d-flex flex-column justify-content-center">
          <h2 class="text-center mb-4 text-white">Iniciar Sesión</h2>
          <form @submit.prevent="handleLogin">
            <div class="mb-3">
              <label for="loginEmail" class="form-label text-white">Correo Electrónico</label>
              <input
                type="email"
                v-model="email"
                id="loginEmail"
                class="form-control"
                placeholder="Ingresa tu correo"
                required
              />
            </div>
            <div class="mb-3">
              <label for="loginPassword" class="form-label text-white">Contraseña</label>
              <input
                type="password"
                v-model="password"
                id="loginPassword"
                class="form-control"
                placeholder="Ingresa tu contraseña"
                required
              />
            </div>
            <button type="submit" class="btn btn-primary w-100">Iniciar Sesión</button>
          </form>
          <p class="text-center mt-3 text-white">
            ¿No tienes una cuenta? <router-link to="/register" class="text-decoration-none">Regístrate aquí</router-link>
          </p>
        </div>

        <!-- Img lateral -->
        <div class="col-md-6">
          <img
            src="/src/assets/totalfit-benefit.6bbbb44a.jpeg"
            alt="Fitness Image"
            class="img-fluid h-100 w-100"
            style="object-fit: cover;"
          />
        </div>
      </div>
    </div>

    <!-- Alerta de éxito -->
    <div v-if="showSuccessAlert" class="alert alert-success alert-dismissible fade show" role="alert">
      <strong>¡Inicio de sesión exitoso!</strong>
      <button type="button" class="btn-close" @click="showSuccessAlert = false"></button>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const showSuccessAlert = ref(false); // Estado para la alerta
const router = useRouter();

const handleLogin = async () => {
  const authInstance = getAuth();
  try {
    await signInWithEmailAndPassword(authInstance, email.value, password.value);
    showSuccessAlert.value = true;  // Mostrar alerta de éxito
    setTimeout(() => {
      router.push('/dashboard');
    }, 2000); // Redirigir después de 2 segundos
  } catch (error) {
    console.error('Error al iniciar sesión:', error.message);
    alert('Error al iniciar sesión. Por favor, verifica tus credenciales.');
  }
};
</script>


<style scoped>
.full-screen-bg {
   background-color: #000;
   color: #fff;
   min-height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
}

.bg-dark {
   background-color: #ffffff;
}

.form-label {
   color: #fff;
}

.btn-primary {
   background-color: #000ba1;
   border: none;
   color: #ffffff;
   font-weight: bold;
}

.btn-primary:hover {
   background-color: #041586;
}

.img-fluid {
   border-radius: 0 12px 12px 0;
}


.alert {
   position: fixed;
   top: 20px;
   left: 50%;
   transform: translateX(-50%);
   z-index: 1050;
   width: 80%;
   max-width: 400px;
   margin: 0 auto;
}

.alert .btn-close {
   background-color: transparent;
   border: none;
   color: white;
   font-size: 1.2rem;
}
</style>
