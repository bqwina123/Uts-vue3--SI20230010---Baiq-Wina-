<script setup>
import { ref } from "vue";

import { useRouter } from "vue-router";

const router = useRouter();

const email = ref("");
const password = ref("");

function login() {
  if (email.value === "admin@gmail.com" && password.value === "12345") {
    router.push("/dashboard");
  } else {
    alert("Email atau password salah");
  }
}
</script>

<template>
  <div class="login-container">
    <div class="login-box">
      <h1>📦 SIINVENTARIS</h1>

      <p>Sistem Inventaris Modern</p>

      <input v-model="email" type="email" placeholder="Email" />

      <input v-model="password" type="password" placeholder="Password" />

      <button @click="login">Login</button>
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
}

.login-container {
  height: 100vh;

  display: flex;

  justify-content: center;

  align-items: center;

  background: linear-gradient(to right, #1e3a8a, #2563eb);
}

.login-box {
  background: white;

  padding: 35px;

  border-radius: 20px;

  width: 350px;

  text-align: center;
}

.login-box input {
  width: 100%;

  padding: 12px;

  margin-bottom: 15px;

  box-sizing: border-box;
}

.login-box button {
  width: 100%;

  padding: 12px;

  background: #2563eb;

  color: white;

  border: none;
}
</style>
