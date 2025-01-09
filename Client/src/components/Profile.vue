<template>
  <div class="container mt-4">
    <!-- Profile Content -->
    <h2>Your Profile</h2>
    <p>Manage your personal details and account settings.</p>

    <!-- Display user info -->
    <div class="card mb-3">
      <div class="card-body">
        <h5 class="card-title">User Information</h5>
        <p class="card-text"><strong>Email:</strong> {{ user?.email }}</p>
        <p class="card-text"><strong>Name:</strong> {{ user?.displayName || 'Not set' }}</p>
      </div>
    </div>

    <!-- Delete Account Button -->
    <button class="btn btn-danger" @click="handleDeleteAccount">Delete Account</button>
  </div>
</template>

<script setup>
import { getAuth, deleteUser } from 'firebase/auth';
import { useRouter } from 'vue-router';
import { auth } from '../firebase';
import { ref, onMounted } from 'vue';

const router = useRouter();

// Store user information
const user = ref(null);

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

// Get current user info when component mounts
onMounted(() => {
  const currentUser = auth.currentUser;
  if (currentUser) {
    user.value = currentUser;
  }
});
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

.btn-danger {
  margin-top: 20px;
  padding: 10px 15px;
}
</style>
