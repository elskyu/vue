<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<style scoped>
.card {
  height: 100%;
}
.card-body {
  padding: 1rem;
}
.list-group-item {
  cursor: pointer;
}
</style>

<template>
    <div class="container mt-4">
      <div class="row">
        <div class="col-md-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Employee Dashboard</h5>
              <ul class="list-group">
                <li class="list-group-item"><router-link to="/dashboard/profile">My Profile</router-link></li>
                <li class="list-group-item"><router-link to="/dashboard/schedule">My Schedule</router-link></li>
                <li class="list-group-item"><router-link to="/dashboard/tasks">My Tasks</router-link></li>
                <li class="list-group-item"><router-link to="/dashboard/leave">Leave Requests</router-link></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-9">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </template>
  

  