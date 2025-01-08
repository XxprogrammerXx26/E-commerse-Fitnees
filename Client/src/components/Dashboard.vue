<!-- src/components/Dashboard.vue -->
<template>
    <div>
      <h2>Welcome to your Dashboard</h2>
      <button @click="handleLogout">Logout</button>
    </div>
  </template>
  
  <script setup>
  // Elimina la importación innecesaria de 'errorMessages'
  import { getAuth, signOut } from 'firebase/auth';
  import { useRouter } from 'vue-router'; // Correcta importación de useRouter
  import { auth } from '../firebase';
  
  const router = useRouter(); // Declarar router una sola vez
  
  const handleLogout = async () => {
    try {
      await signOut(auth);  // Cerrar sesión con Firebase
      router.push('/login'); // Redirigir al login después de cerrar sesión
    } catch (error) {
      console.error('Error logging out: ', error.message);
    }
  };
  </script>
  