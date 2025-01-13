    <template>

  <div class="full-screen-bg">
    <div class="container d-flex justify-content-center align-items-center min-vh-100">
      <div class="row g-0" style="max-width: 900px; width: 100%;">
       
        <div class="col-md-6 bg-dark p-5 d-flex flex-column justify-content-center">
          <h2 class="text-center mb-4 text-white">Regístrate</h2>
          <form @submit.prevent="handleRegister">
            <div class="mb-3">
              <label for="registerEmail" class="form-label text-white">Correo Electrónico</label>
              <input
                type="email"
                v-model="email"
                id="registerEmail"
                class="form-control"
                placeholder="Ingresa tu correo"
                required
              />
            </div>
            <div class="mb-3">
              <label for="registerPassword" class="form-label text-white">Contraseña</label>
              <input
                type="password"
                v-model="password"
                id="registerPassword"
                class="form-control"
                placeholder="Crea una contraseña"
                required
              />
            </div>
            <div class="mb-3">
              <label for="confirmPassword" class="form-label text-white">Confirmar Contraseña</label>
              <input
                type="password"
                v-model="confirmPassword"
                id="confirmPassword"
                class="form-control"
                placeholder="Confirma tu contraseña"
                required
              />
            </div>
            <button type="submit" class="btn btn-primary w-100">Registrarse</button>
          </form>
          <p class="text-center mt-3 text-white">
            ¿Ya tienes una cuenta? <router-link to="/login" class="text-decoration-none">Inicia sesión aquí</router-link>
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
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const router = useRouter();

const handleRegister = async () => {
 
  if (password.value !== confirmPassword.value) {
    alert('Las contraseñas no coinciden. Por favor, verifica.');
    return;
  }

  const authInstance = getAuth();
  try {
    await createUserWithEmailAndPassword(authInstance, email.value, password.value);
    alert('¡Registro exitoso! Redirigiendo a iniciar sesión...');
    router.push('/login');
  } catch (error) {
    console.error('Error al registrarse:', error.message);
    alert('Error al registrarse. Por favor, inténtalo de nuevo.');
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
  background-color: #141414;
}

.form-label {
  color: #fff;
}

.btn-primary {
  background-color: #00ffcc;
  border: none;
  color: #000;
  font-weight: bold;
}

.btn-primary:hover {
  background-color: #00e6b3;
}

.img-fluid {
  border-radius: 0 12px 12px 0;
}
</style>
