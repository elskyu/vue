<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

// Define state for email and password
const email = ref('');
const password = ref('');

// Get router instance
const router = useRouter();

// Function to handle login
const handleLogin = async () => {
    try {
        // Send a POST request to the login endpoint
        const response = await axios.post('http://localhost:8000/api/login', {
            email: email.value,
            password: password.value
        });

        // If login is successful, save the token and user data
        if (response.data.success) {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));

            // Redirect the user to the home page
            router.push({ name: 'home' });
        } else {
            alert(response.data.message);
        }
    } catch (error) {
        // Handle error
        if (error.response && error.response.data) {
            alert(error.response.data.message);
        } else {
            alert('An error occurred. Please try again.');
        }
    }
};
</script>

<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <h4 class="card-title text-center mb-4">LOGIN</h4>
                        <form @submit.prevent="handleLogin">
                            <div class="mb-3">
                                <label for="email" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="email" v-model="email" required>
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" class="form-control" id="password" v-model="password" required>
                            </div>
                            <button type="submit" class="btn btn-primary w-100">LOGIN</button>
                        </form>
                        <router-link :to="{ name: 'register' }" class="d-block mt-3 text-end">
                            REGISTER
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
