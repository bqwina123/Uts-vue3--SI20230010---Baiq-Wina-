<script setup>
import { computed, ref } from "vue";

import { useInventoryStore } from "../stores/inventory";

const store = useInventoryStore();

const filter = ref("");

const qtyInput = ref({});

const editMode = ref(false);

const editData = ref({
  id: null,
  name: "",
  category: "",
  stock: 0,
});

const filteredProducts = computed(() => {
  return store.products.filter((item) => {
    return (
      item.name.toLowerCase().includes(filter.value.toLowerCase()) ||
      item.category.toLowerCase().includes(filter.value.toLowerCase())
    );
  });
});

function tambahStok(id) {
  const qty = Number(qtyInput.value[id] || 0);

  if (qty <= 0) {
    alert("Isi qty");
    return;
  }

  store.addStock(id, qty);

  qtyInput.value[id] = "";
}

function kurangiStok(id) {
  const qty = Number(qtyInput.value[id] || 0);

  if (qty <= 0) {
    alert("Isi qty");
    return;
  }

  store.reduceStock(id, qty);

  qtyInput.value[id] = "";
}

function editProduct(product) {
  editMode.value = true;

  editData.value = {
    ...product,
  };
}

function updateData() {
  store.updateProduct({
    ...editData.value,
  });

  editMode.value = false;
}
</script>

<template>
  <div>
    <input v-model="filter" type="text" placeholder="Cari barang / kategori" />

    <br /><br />

    <div v-if="editMode">
      <h3>Edit Barang</h3>

      <input v-model="editData.name" type="text" />

      <input v-model="editData.category" type="text" />

      <input v-model="editData.stock" type="number" />

      <button @click="updateData">Update</button>
    </div>

    <br />

    <table border="1">
      <thead>
        <tr>
          <th>Nama</th>
          <th>Kategori</th>
          <th>Stock</th>
          <th>Qty</th>
          <th>Aksi</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in filteredProducts" :key="item.id">
          <td>{{ item.name }}</td>

          <td>{{ item.category }}</td>

          <td>{{ item.stock }}</td>

          <td>
            <input v-model="qtyInput[item.id]" type="number" placeholder="Qty" />
          </td>

          <td>
            <button @click="tambahStok(item.id)">Masuk</button>

            <button @click="kurangiStok(item.id)">Keluar</button>

            <button @click="editProduct(item)">Edit</button>

            <button @click="store.deleteProduct(item.id)">Hapus</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
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

input {
  padding: 8px;
}

button {
  padding: 8px;

  margin-right: 5px;
}
</style>
