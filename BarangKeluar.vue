<script setup>
import Navbar from "../components/Navbar.vue";

import { useInventoryStore } from "../stores/inventory";

const store = useInventoryStore();
</script>

<template>
  <Navbar />

  <div class="container">
    <h1>📤 Riwayat Barang Keluar</h1>

    <table border="1">
      <thead>
        <tr>
          <th>No</th>
          <th>Nama Barang</th>
          <th>Jumlah</th>
          <th>Tanggal</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="(item, index) in store.histories.filter((h) => h.type === 'Keluar')"
          :key="item.id"
        >
          <td>{{ index + 1 }}</td>

          <td>{{ item.name }}</td>

          <td>{{ item.qty }}</td>

          <td>{{ item.date }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
.container {
  padding: 20px;

  background: #f1f5f9;

  min-height: 100vh;
}

table {
  width: 100%;

  border-collapse: collapse;

  background: white;
}

th,
td {
  padding: 12px;

  text-align: center;
}

th {
  background: #dc2626;

  color: white;
}
</style>
