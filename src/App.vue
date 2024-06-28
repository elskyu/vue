<script>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();

    const showNavbar = computed(() => {
        return route.name !== 'login' && route.name !== 'register'; // Tambahkan kondisi untuk halaman register
});

    const logout = () => {
      localStorage.removeItem('auth'); // Example of clearing authentication
      router.push({ name: 'login' });
    };

    return {
      showNavbar,
      logout,
    };
  }
}
</script>


<template>
  <div>
    <nav v-if="showNavbar" class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div class="container">
        <router-link :to="{ name: 'home' }" class="navbar-brand">HOME</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link :to="{ name: 'posts.index' }" class="nav-link active" aria-current="page">POSTS</router-link>
            </li>
          </ul>
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0" role="search">
            <a @click="logout" class="btn btn-success">LOGOUT</a>
          </ul>
        </div>
      </div>
    </nav>

    <!--- render router view -->
    <router-view></router-view>
  </div>
</template>

