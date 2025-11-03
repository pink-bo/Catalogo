<!-- Category.vue -->
<template>
  <div>
    <ProductList v-if="categoryProducts.length" :products="categoryProducts" />
    <p v-else style="text-align:center; color:#aaa; margin:50px;">
      No hay productos en esta categoría
    </p>
  </div>
</template>

<script>
import ProductList from '../components/ProductList.vue'

// IMPORTS ESTÁTICOS
import abrigos from '../data/abrigos.js'
import blazers from '../data/blazers.js'
import pantalones from '../data/pantalones.js'
import blusas from '../data/blusas.js'

const categoriesMap = {
  abrigos: abrigos,
  blazers: blazers,
  pantalones: pantalones,
  blusas: blusas
}

export default {
  components: { ProductList },
  data() {
    return {
      categoryName: '',
      categoryProducts: []
    }
  },
  created() {
    this.updateCategory()
  },
  watch: {
    '$route.params.name'() {
      this.updateCategory()
    }
  },
  methods: {
    updateCategory() {
      const name = this.$route.params.name?.toLowerCase()
      this.categoryName = name ? name.toUpperCase() : 'CATEGORÍA'
      
      const data = categoriesMap[name]
      this.categoryProducts = data ? data : []
    }
  }
}
</script>