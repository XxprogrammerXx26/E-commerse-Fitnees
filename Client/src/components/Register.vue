    <template>
    <div class="full-screen-bg">
      <div class="container d-flex justify-content-center align-items-center min-vh-100">
        <div class="card p-4 form-container" style="max-width: 400px; width: 100%; box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);">
          <h2 class="text-center mb-4">Register</h2>
  
         
          <div v-if="successMessage" class="alert alert-success alert-dismissible fade show custom-ticket" role="alert">
            <strong>Success!</strong> {{ successMessage }}
            <button type="button" class="btn-close" @click="successMessage = ''"></button>
          </div>
  
         
          <div v-if="errorMessage" class="alert alert-danger alert-dismissible fade show custom-error" role="alert">
            <strong>Error!</strong> {{ errorMessage }}
            <button type="button" class="btn-close" @click="errorMessage = ''"></button>
          </div>
  
          <form @submit.prevent="handleRegister" class="form-content">
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input
                type="email"
                v-model="email"
                id="email"
                class="form-control"
                placeholder="Enter your email"
                required
              />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input
                type="password"
                v-model="password"
                id="password"
                class="form-control"
                placeholder="Enter your password"
                required
              />
            </div>
            <div class="mb-3">
              <label for="confirmPassword" class="form-label">Confirm Password</label>
              <input
                type="password"
                v-model="confirmPassword"
                id="confirmPassword"
                class="form-control"
                placeholder="Confirm your password"
                required
              />
            </div>
            <button type="submit" class="btn btn-primary w-100">Register</button>
          </form>
          <p class="text-center mt-3">
            Already have an account? <router-link to="/login" class="text-decoration-none">Login here</router-link>
          </p>
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
  const successMessage = ref('');
  const errorMessage = ref('');
  const router = useRouter();
  
  const handleRegister = async () => {
    if (password.value !== confirmPassword.value) {
      errorMessage.value = "Passwords do not match!";
      return;
    }
  
    const authInstance = getAuth();
    try {
      await createUserWithEmailAndPassword(authInstance, email.value, password.value);
      successMessage.value = "Registration successful! Redirecting to login...";
      setTimeout(() => {
        router.push('/login');
      }, 2000); 
    } catch (error) {
      console.error('Error registering: ', error.message);
      errorMessage.value = 'Registration failed. Please try again.';
    }
  };
  </script>
  
  <style scoped>
  
  .full-screen-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/src/assets/fitness-2e1dufzgv4p5mtk6.jpg'); 
    background-size: cover; 
    background-position: center; 
    background-attachment: fixed; 
    z-index: -1; 
  }

  .form-container {
    background: rgba(255, 255, 255, 0.6); /* 60% opacity for a semi-transparent background */
    border-radius: 12px;
    backdrop-filter: blur(10px); 
  }
  
 
  .custom-ticket {                                                  /*ALERT SUCCESS*/
    background: linear-gradient(145deg, #c1e8c1, #a1d7a1);
    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.1), -4px -4px 6px rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    animation: popin 0.3s ease-out;
  }
  
  
  .custom-error {
    background: linear-gradient(145deg, #c7444f, #f5c6cb);
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2), -4px -4px 8px rgba(255, 255, 255, 0.3);
    border-radius: 8px;
    animation: popin 0.3s ease-out;
  }
  
                                                                      /*ALERT ERROR THE LOGIN */
  .custom-ticket .btn-close,
  .custom-error .btn-close {
    background-color: #fefafa;
    border: none;
  }
  
  @keyframes popin {
    0% {
      opacity: 0;
      transform: scale(0.8);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
  
 
  .btn-primary {
    background: linear-gradient(145deg, #007bff, #0056b3);
    border: none;
    box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.1), -4px -4px 6px rgba(255, 255, 255, 0.1);
  }
  
  .btn-primary:hover {
    background: linear-gradient(145deg, #0056b3, #004085);
    transform: translateY(-2px);
  }
  
  .btn-primary:active {
    background: linear-gradient(145deg, #004085, #003366);
    transform: translateY(2px);
  }
  

  .form-content input {
    background: rgba(255, 255, 255, 0.8); 
    border-radius: 6px;
    border: 1px solid #ccc;
  }
  
 
  .form-content input:focus {
    border-color: #007bff;
    box-shadow: 0 0 10px rgba(0, 123, 255, 0.5);
  }
  </style>
  