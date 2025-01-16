

<template>
  <div class="container mt-4">
   
    <button class="btn btn-secondary" @click="goToDashboard">Volver Atras</button>

    <h2>Perfil de Usuario</h2>
    <p>Mis datos personales sobre detalles de la compra y configuraciones del usuario.</p>

   
    <div v-if="user" class="card mb-3">
      <div class="card-body">
        <h5 class="card-title">información del Usuario</h5>
        <p class="card-text"><strong>Email:</strong> {{ user.email }}</p>
        <p class="card-text"><strong>Name:</strong> {{ user.displayName || 'Not set' }}</p>
        <p class="card-text"><strong>Phone Number:</strong> {{ user.phoneNumber || 'Not set' }}</p>
        <p class="card-text"><strong>Address:</strong> {{ user.address || 'Not set' }}</p>
      </div>
    </div>

    <div v-else>
      <p>Loading user information...</p>
    </div>

    <!-- Change Password Button -->
    <button class="btn btn-primary" @click="handleChangePassword">Cambiar Contraseña</button>

    <!-- Purchase History -->
    <div v-if="orders.length > 0" class="mt-4">
      <h5>Your Purchase History</h5>
      <ul class="list-group">
        <li v-for="order in orders" :key="order.id" class="list-group-item">
          <strong>Order ID:</strong> {{ order.id }} | <strong>Total:</strong> ${{ order.total }}
        </li>
      </ul>
    </div>

    <!-- Recommended Products -->
    <div class="mt-4">
      <h5>Recommended Products</h5>
      <div class="row">
        <div v-for="product in recommendedProducts" :key="product.id" class="col-md-4">
          <div class="card">
            <img :src="product.imageUrl" class="card-img-top" alt="product image">
            <div class="card-body">
              <h5 class="card-title">{{ product.name }}</h5>
              <p class="card-text">${{ product.price }}</p>
              <button class="btn btn-success">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    
    <button class="btn btn-danger mt-4" @click="handleDeleteAccount">Borrar Cuenta</button>
  </div>
</template>







<script setup>
import { getAuth, deleteUser, updatePassword } from 'firebase/auth';
import { useRouter } from 'vue-router';
import { auth } from '../firebase';
import { ref, onMounted, watch } from 'vue';

const router = useRouter();

// Store user information and orders
const user = ref(null);
const orders = ref([]);  // Placeholder for order history
const recommendedProducts = ref([
  { id: 1, name: 'Protein Powder', price: 29.99, imageUrl: '/images/protein.jpg' },
  { id: 2, name: 'Yoga Mat', price: 19.99, imageUrl: '/images/yoga-mat.jpg' },
  { id: 3, name: 'Dumbbells Set', price: 49.99, imageUrl: '/images/dumbbells.jpg' }
]);  // Sample recommended products

// Handle account deletion
const handleDeleteAccount = async () => {
  const currentUser = auth.currentUser;

  if (currentUser) {
    try {
      // Ask for confirmation before deleting the account
      const confirmation = window.confirm('Are you sure you want to delete your account? This action cannot be undone.');

      if (confirmation) {
        await deleteUser(currentUser);  // This will delete the Firebase user account
        router.push('/login'); // Redirect to login page after account deletion
      }
    } catch (error) {
      console.error('Error deleting account: ', error.message);
    }
  } else {
    console.error('No user is logged in.');
  }
};

// Handle password change
const handleChangePassword = async () => {
  const currentUser = auth.currentUser;

  if (currentUser) {
    const newPassword = prompt('Enter your new password:');

    if (newPassword) {
      try {
        await updatePassword(currentUser, newPassword);
        alert('Password changed successfully!');
      } catch (error) {
        console.error('Error changing password: ', error.message);
      }
    }
  } else {
    console.error('No user is logged in.');
  }
};

// Listen for authentication state changes
onMounted(() => {
  auth.onAuthStateChanged((currentUser) => {
    if (currentUser) {
      user.value = currentUser;  // Set user information once Firebase is ready
    } else {
      console.log('No user is authenticated');
    }
  });
});

// Fetch order history (placeholder for now)
onMounted(() => {
  orders.value = [
    { id: '12345', total: 99.99 },
    { id: '67890', total: 49.99 }
  ];
});

// Redirige al Dashboard
const goToDashboard = () => {
  router.push('/dashboard'); // Cambia '/dashboard' por la ruta real de tu dashboard
};
</script>

<style scoped>
/* Style for the profile page */
.card {
  width: 100%;
}

.card-title {
  font-size: 1.25rem;
  font-weight: bold;
}

.card-text {
  font-size: 1rem;
}

h2 {
  margin-bottom: 20px;
}

.btn-danger, .btn-primary, .btn-success, .btn-secondary {
  margin-top: 20px;
  padding: 10px 15px;
}

.list-group-item {
  margin-bottom: 10px;
}

.row {
  margin-top: 20px;
}

.card-img-top {
  max-height: 200px;
  object-fit: cover;
}

.card-body {
  text-align: center;
}
</style>


