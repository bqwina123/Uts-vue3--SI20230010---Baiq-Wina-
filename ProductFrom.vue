<script setup>
import { ref } from "vue";

import { useInventoryStore } from "../stores/inventory";

const store = useInventoryStore();

const name = ref("");
const category = ref("");
const stock = ref("");

function submitForm() {
  // VALIDASI
  if (name.value.trim() === "" || category.value.trim() === "" || stock.value === "") {
    alert("Semua field wajib diisi");
    return;
  }

  // VALIDASI STOCK
  if (Number(stock.value) <= 0) {
    alert("Stock harus lebih dari 0");
    return;
  }

  // TAMBAH PRODUK
  store.addProduct({
    name: name.value,
    category: category.value,
    stock: Number(stock.value),
  });

  // RESET FORM
  name.value = "";
  category.value = "";
  stock.value = "";

  alert("Barang berhasil ditambahkan");
}
</script>

<template>
  <div class="form-box">
    <h2>Tambah Barang</h2>

    <input v-model="name" type="text" placeholder="Nama Barang" />

    <input v-model="category" type="text" placeholder="Kategori" />

    <input v-model="stock" type="number" placeholder="Stock" />

    <button @click="submitForm">Tambah Barang</button>
  </div>
</template>

<style>
.form-box {
  background: white;

  padding: 20px;

  border-radius: 15px;

  margin-bottom: 20px;

  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.form-box h2 {
  margin-bottom: 15px;
}

.form-box input {
  padding: 10px;

  margin-right: 10px;

  margin-bottom: 10px;

  border-radius: 8px;

  border: 1px solid #ccc;
}

.form-box button {
  padding: 10px 15px;

  background: #2563eb;

  color: white;

  border: none;

  border-radius: 8px;

  cursor: pointer;
}
</style>
