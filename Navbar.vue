<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function logout() {
  const confirmLogout = confirm("Yakin ingin logout?");

  if (confirmLogout) {
    router.push("/");
  }
}
</script>

<template>
  <nav class="navbar">
    <h2>📦 SiInventaris</h2>

    <div class="menu">
      <router-link to="/dashboard"> Dashboard </router-link>

      <router-link to="/barang-masuk"> Barang Masuk </router-link>

      <router-link to="/barang-keluar"> Barang Keluar </router-link>

      <button @click="logout">Logout</button>
    </div>
  </nav>
</template>

<style>
.navbar {
  background: linear-gradient(to right, #2563eb, #1e3a8a);

  padding: 20px;

  display: flex;

  justify-content: space-between;

  align-items: center;

  color: white;
}

.menu {
  display: flex;
  gap: 15px;
  align-items: center;
}

.menu a {
  color: white;

  text-decoration: none;

  font-weight: bold;
}

.menu button {
  background: red;

  color: white;

  border: none;

  padding: 10px;

  border-radius: 8px;

  cursor: pointer;
}
</style>
