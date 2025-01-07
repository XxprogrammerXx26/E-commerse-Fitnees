
 <template>
    <div class="auth-page">
      <div class="auth-container">
       
        <div class="form-container">
          <h2 v-if="isLogin">Log In</h2>
          <h2 v-else>Register</h2>
          <p v-if="isLogin">Welcome back! Please enter your details.</p>
          <p v-else>Create your account to get started.</p>
  
          <form @submit.prevent="handleSubmit">
            <div class="input-group">
              <label for="email">Email</label>
              <input type="email" id="email" v-model="form.email" required />
            </div>
            <div class="input-group">
              <label for="password">Password</label>
              <input type="password" id="password" v-model="form.password" required />
            </div>
            <div v-if="!isLogin" class="input-group">
              <label for="confirmPassword">Confirm Password</label>
              <input type="password" id="confirmPassword" v-model="form.confirmPassword" required />
            </div>
            <button type="submit">{{ isLogin ? 'Log In' : 'Sign Up' }}</button>
          </form>
  
          <p v-if="isLogin">
            <a href="#">Forgot password?</a>
          </p>
          <p>
            {{ isLogin ? "Don't have an account?" : "Already have an account?" }}
            <a href="#" @click.prevent="toggleAuthMode">{{ isLogin ? 'Sign up' : 'Log in' }}</a>
          </p>
        </div>
  
        <!-- Right Side (Image) -->

        <div class="image-container">
          <img src="/src/assets/fitness_gym_logo-removebg-preview.png" alt="Fitness Image" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isLogin: true,
        form: {
          email: '',
          password: '',
          confirmPassword: '',
        },
      };
    },
    methods: {
      toggleAuthMode() {
        this.isLogin = !this.isLogin;
      },
      handleSubmit() {
        if (!this.isLogin && this.form.password !== this.form.confirmPassword) {
          alert('Passwords do not match!');
          return;
        }
        console.log(this.form);
        alert(this.isLogin ? 'Logged in!' : 'Registered!');
      },
    },
  };
  </script>
  
  <style scoped>

  
 
  .auth-page {
    
    display: flex;
    justify-content: center;
    align-items: center;
   
    min-height: 100vh;   
   /* background-color: #3c0b86;  */
    background-image: url(/src/assets/fitness-2e1dufzgv4p5mtk6.jpg );
     background-size: cover; 
    background-repeat: no-repeat;
    background-position: center; 
    

  }
  
  .auth-container {
    display: flex;
    width: 90%;
    max-width: 900px;
    background: #fff;
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }
  
  .form-container,
  .image-container {
    flex: 1;
    padding: 2rem;
  }
  
  .form-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  h2 {
    font-size: 2rem;
    color: #333;
  }
  
  p {
    margin-top: 0.5rem;
    color: #666;
  }
  
  a {
    color: #7c3aed;
    text-decoration: none;
    font-weight: 500;
  }
  
  a:hover {
    text-decoration: underline;
  }
  
  .input-group {
    margin-bottom: 1.5rem;
  }
  
  label {
    display: block;
    font-size: 0.9rem;
    color: #666;
    margin-bottom: 0.5rem;
  }
  
  input {
    width: 100%;
    padding: 0.8rem;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    outline: none;
  }
  
  button {
    width: 100%;
    padding: 0.8rem;
    font-size: 1rem;
    color: #fff;
    background: #0e096a ;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }
  
  button:hover {
    background: #110b8d ;
  }
  
  .image-container {
    display: flex;
    align-items: center;
    justify-content: center;
    
 /*   background: linear-gradient(135deg, #7c3aed 50%, #f9f5ff 50%);*/

    background: linear-gradient(135deg, #7c3aed 50%, #f9f5ff 50%);
  }
  
  .image-container img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 8px;


  }
  </style>
  

