import { defineStore } from 'pinia'

import { ref, computed, watch } from 'vue'

export const useInventoryStore = defineStore(
  'inventory',
  () => {

    // DATA PRODUK
    const products = ref([
      {
        id: 1,
        name: 'Laptop Asus',
        category: 'Elektronik',
        stock: 5,
      },

      {
        id: 2,
        name: 'Printer Epson',
        category: 'Elektronik',
        stock: 15,
      },

      {
        id: 3,
        name: 'Mouse Logitech',
        category: 'Aksesoris',
        stock: 20,
      },
    ])

    // DATA RIWAYAT
    const histories = ref([])

    // TOTAL PRODUK
    const totalProducts = computed(() => {
      return products.value.length
    })

    // TOTAL SEMUA STOCK
    const totalStock = computed(() => {

      return products.value.reduce(
        (total, item) => total + item.stock,
        0
      )
    })

    // STOCK MENIPIS
    const lowStock = computed(() => {

      return products.value.filter(
        (item) => item.stock < 10
      )
    })

    // TAMBAH PRODUK
    function addProduct(product) {

      products.value.push({
        id: Date.now(),
        name: product.name,
        category: product.category,
        stock: Number(product.stock),
      })
    }

    // HAPUS PRODUK
    function deleteProduct(id) {

      products.value = products.value.filter(
        (item) => item.id !== id
      )
    }

    // UPDATE PRODUK
    function updateProduct(updatedProduct) {

      const index = products.value.findIndex(
        (item) => item.id === updatedProduct.id
      )

      if (index !== -1) {

        products.value[index] = {
          ...updatedProduct,
          stock: Number(updatedProduct.stock),
        }
      }
    }

    // TAMBAH STOCK / BARANG MASUK
    function addStock(id, qty) {

      const product = products.value.find(
        (item) => item.id === id
      )

      qty = Number(qty)

      if (product && qty > 0) {

        product.stock += qty

        histories.value.push({
          id: Date.now(),
          type: 'Masuk',
          name: product.name,
          qty: qty,
          date: new Date().toLocaleString(),
        })
      }
    }

    // KURANGI STOCK / BARANG KELUAR
    function reduceStock(id, qty) {

      const product = products.value.find(
        (item) => item.id === id
      )

      qty = Number(qty)

      if (
        product &&
        qty > 0 &&
        product.stock >= qty
      ) {

        product.stock -= qty

        histories.value.push({
          id: Date.now(),
          type: 'Keluar',
          name: product.name,
          qty: qty,
          date: new Date().toLocaleString(),
        })
      }

      else {

        alert('Stock tidak mencukupi!')
      }
    }

    // WATCH STOCK MENIPIS
    watch(
      lowStock,
      (newValue) => {

        if (newValue.length > 0) {

          console.log(
            'Ada barang dengan stock menipis'
          )
        }
      },
      {
        deep: true,
      }
    )

    // RETURN
    return {
      products,
      histories,
      totalProducts,
      totalStock,
      lowStock,
      addProduct,
      deleteProduct,
      updateProduct,
      addStock,
      reduceStock,
    }
  }
)
