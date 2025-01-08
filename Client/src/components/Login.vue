<template>
    <div>
      <h2>Login</h2>
      <form @submit.prevent="handleLogin">
        <div>
          <label for="email">Email</label>
          <input type="email" v-model="email" required />
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" v-model="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <router-link to="/register">Register here</router-link>
      </p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
  import { useRouter } from 'vue-router'; // Solo importar una vez
  
  const email = ref('');
  const password = ref('');
  const router = useRouter(); // Declarar router una sola vez
  
  const handleLogin = async () => {
    const authInstance = getAuth();
    try {
      await signInWithEmailAndPassword(authInstance, email.value, password.value);
      router.push('/dashboard'); // Redirige a dashboard después del login
    } catch (error) {
      console.error('Error logging in: ', error.message);
      alert('Login failed. Please check your credentials.');
    }
  };
  </script>
  