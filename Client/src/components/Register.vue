<template>
    <div>
        <h2>Register</h2>
        <form @submit.prevent="handleRegister">
            <div>
                <label for="email">Email</label>
                <input type="email" v-model="email" required />
            </div>
            
            <div>
                <label for="password">Password</label>
                <input type="password" v-model="password" required />
            </div>

            <button type="submit">Register</button>
        </form>
        <p>
            Already have an account? <RouterLink to="/login">Login here</RouterLink>
        </p>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const router = useRouter(); // No se debe pasar ningún argumento a useRouter()

const handleRegister = async () => {
    const authInstance = getAuth();

    try {
        await createUserWithEmailAndPassword(authInstance, email.value, password.value);
        router.push('/dashboard');  // Redirige a dashboard después del registro
    } catch (error) {
        console.error('Error registering: ', error.message);  // Accede a error.message
        alert('Registration failed. Please check your input.');
    }
};
</script>
