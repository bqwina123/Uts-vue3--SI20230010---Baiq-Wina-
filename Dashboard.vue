<script setup>
import Navbar from "../components/Navbar.vue";

import ProductForm from "../components/ProductForm.vue";

import ProductTable from "../components/ProductTable.vue";

import { useInventoryStore } from "../stores/inventory";

const store = useInventoryStore();
</script>

<template>
  <Navbar />

  <div class="container">
    <h1>Dashboard SiInventaris</h1>

    <div class="card-box">
      <div class="card">
        <h3>Total Produk</h3>
        <p>{{ store.totalProducts }}</p>
      </div>

      <div class="card">
        <h3>Total Stock</h3>
        <p>{{ store.totalStock }}</p>
      </div>

      <div class="card">
        <h3>Stock Menipis</h3>
        <p>{{ store.lowStock.length }}</p>
      </div>
    </div>

    <ProductForm />

    <ProductTable />
  </div>
</template>

<style>
.container {
  padding: 20px;

  background: #f1f5f9;

  min-height: 100vh;
}

.card-box {
  display: flex;

  gap: 20px;

  margin-bottom: 20px;
}

.card {
  background: white;

  padding: 20px;

  border-radius: 15px;

  width: 200px;
}
</style>
