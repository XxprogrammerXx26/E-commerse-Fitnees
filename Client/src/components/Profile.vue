
<template>
  <div class="container mt-4">
    <h2 class="text-center">Perfil de Usuario</h2>
    <p class="text-center text-muted">Mis datos personales sobre detalles de la compra y configuraciones del usuario.</p>

    <div v-if="user" class="card shadow mb-3">
      <div class="card-body">
        <h5 class="card-title text-center">Información del Usuario</h5>
        <p class="card-text"><strong>Conectado:</strong> {{ user.email }}</p>
      </div>
    </div>

    <div v-else>
      <p class="text-center">Cargando información del usuario...</p>
    </div>

    <div class="d-flex justify-content-center mt-4">
      <!-- <button class="btn btn-primary mx-2" @click="handleChangePassword">Cambiar Contraseña</button> -->
      <button class="btn btn-danger mx-2" @click="handleDeleteAccount">Borrar Cuenta</button>
    </div>
  </div>
</template>

<script setup>
import { getAuth, deleteUser, updatePassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'vue-router';
import { auth } from '../firebase';
import { ref, onMounted } from 'vue';

const router = useRouter();

const user = ref(null);

const handleDeleteAccount = async () => {
  const currentUser = auth.currentUser;

  if (currentUser) {
    try {
      const confirmation = window.confirm('¿Estás seguro de borrar esta cuenta?');

      if (confirmation) {
        await deleteUser(currentUser);
        router.push('/login');
      }
    } catch (error) {
      console.error('Error al borrar la cuenta: ', error.message);
    }
  } else {
    console.error('No hay usuario autenticado.');
  }
};

const handleChangePassword = async () => {
  const currentUser = auth.currentUser;

  if (currentUser) {
    const newPassword = prompt('Ingresa tu nueva contraseña:');

    if (newPassword) {
      try {
     
        const userCredential = await signInWithEmailAndPassword(currentUser.email, 'password'); 

        await updatePassword(currentUser, newPassword);
        alert('¡Contraseña cambiada con éxito!');
      } catch (error) {
        if (error.code === 'auth/requires-recent-login') {
          alert('Debes iniciar sesión nuevamente para cambiar tu contraseña.');
         
          router.push('/login');
        } else {
          console.error('Error al cambiar la contraseña: ', error.message);
        }
      }
    }
  } else {
    console.error('No hay usuario autenticado.');
  }
};

onMounted(() => {
  auth.onAuthStateChanged((currentUser) => {
    if (currentUser) {
      user.value = currentUser;
    } else {
      console.log('No hay usuario autenticado');
    }
  });
});
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
}

h2 {
  margin-bottom: 20px;
}

.card {
  border-radius: 8px;
}

.card-body {
  text-align: center;
}

.card-title {
  font-size: 1.5rem;
  font-weight: 600;
}

.card-text {
  font-size: 1rem;
}

.btn {
  width: 150px;
  padding: 12px;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:hover {
  background-color: #0056b3;
  border-color: #004085;
}

.btn-danger {
  background-color: #dc3545;
  border-color: #dc3545;
}

.btn-danger:hover {
  background-color: #c82333;
  border-color: #bd2130;
}

.d-flex {
  display: flex;
  justify-content: center;
}

.mx-2 {
  margin-left: 8px;
  margin-right: 8px;
}
</style>











