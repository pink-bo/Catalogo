<template>
  <div class="card">
    <!-- IMAGEN -->
    <div class="image-container" @click="openModal">
      <img :src="currentImage" :alt="product.name" />
    </div>

    <!-- NOMBRE -->
    <h2>{{ product.name }}</h2>

    <!-- PRECIO + TALLAS (EN LÍNEA) -->
    <p class="info-line">
      <span class="price">{{ formatPrice(product.price) }}</span>
      <span class="separator">•</span>
      <span class="sizes">Tallas: {{ product.sizes.join(', ') }}</span>
    </p>

    <!-- COLORES -->
    <div class="colors">
      <span
        v-for="variant in product.variants"
        :key="variant.color"
        :style="{ backgroundColor: variant.color }"
        @click.stop="selectVariant(variant)"
        :class="{ selected: selectedVariant?.color === variant.color }"
      ></span>
    </div>

    <!-- WHATSAPP -->
    <a
      :href="whatsappLink"
      target="_blank"
      class="btn-whatsapp"
      @click.stop
    >
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/500px-WhatsApp_icon.png" alt="WhatsApp" />
      Pedir
    </a>
  </div>
</template>

<script>
export default {
  props: ["product"],
  data() {
    return {
      selectedVariant: null
    }
  },
  computed: {
    currentImage() {
      return this.selectedVariant?.image || this.product.variants[0]?.image
    },
    whatsappLink() {
  const variant = this.selectedVariant || this.product.variants[0]
  const colorName = variant.colorName || 'Sin color'
  const price = this.formatPrice(this.product.price)

  const message = 
    `Hola!%0A` +
    `Quiero el producto: ${encodeURIComponent(this.product.name)}%0A` +
    `Color: ${encodeURIComponent(colorName)}%0A` +
    `Precio: ${encodeURIComponent(price)}%0A` +
    `En la siguiente talla:`

  return `https://wa.me/59177708844?text=${message}`
}

  },
  methods: {
    selectVariant(variant) {
      this.selectedVariant = variant
    },
    openModal() {
      this.$emit("show-modal", this.currentImage)
    },
    formatPrice(value) {
      return `${value} Bs.`
    }
  },
  mounted() {
    this.selectedVariant = this.product.variants[0]
  }
}
</script>

<style scoped>
.card { 
  border-radius: 15px; 
  overflow: hidden; 
  padding: 12px; 
  width: 380px; 
  background-color: #fefefe; 
  text-align: center; 
  transition: all 0.3s; 
  box-shadow: 0 3px 8px rgba(0,0,0,0.05);
}
.card:hover { 
  transform: translateY(-6px); 
  box-shadow: 0 12px 24px rgba(0,0,0,0.12); 
}

.image-container { 
  height: 350px;
  display: flex; 
  align-items: center; 
  justify-content: center; 
  overflow: hidden; 
  border-radius: 15px; 
  cursor: zoom-in; 
  margin-bottom: 8px;
  background: #f9f9f9;
}
.image-container img { 
  max-height: 100%; 
  width: auto; 
  object-fit: cover; 
  transition: transform 0.3s; 
}
.image-container img:hover { 
  transform: scale(1.05); 
}

/* NOMBRE – MÁS COMPACTO */
h2 { 
  font-size: 1.5rem; 
  margin: 4px 0; 
  color: #333; 
  font-weight: 700; 
  min-height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.3;
}

/* PRECIO + TALLAS – MÁS CERCA */
.info-line {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 0.92rem;
  margin: 4px 0 8px;
  flex-wrap: wrap;
  color: #555;
}

.price {
  font-weight: 900;
  color: #e91e63;
  font-size: 1.2rem;
  font-family: 'Arial Black', sans-serif;
}

.separator {
  color: #ccc;
  font-weight: bold;
  font-size: 1.1rem;
}

.sizes {
  color: #666;
  font-weight: 500;
}

/* COLORES – MÁS JUNTOS */
.colors { 
  display: flex; 
  justify-content: center; 
  gap: 5px; 
  margin: 8px 0 10px; 
}
.colors span { 
  width: 28px; 
  height: 28px; 
  border-radius: 50%; 
  border: 2.5px solid #ddd; 
  cursor: pointer; 
  transition: all 0.2s; 
}
.colors span:hover { 
  transform: scale(1.25); 
  border-color: #ff66b2; 
}
.colors span.selected { 
  border-color: #ff66b2; 
  box-shadow: 0 0 8px rgba(255,102,178,0.6); 
  transform: scale(1.15);
}

/* BOTÓN WHATSAPP – MÁS INTEGRADO */
.btn-whatsapp { 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  gap: 8px; 
  background: linear-gradient(135deg, #25d366, #1ebe5e); 
  color: white; 
  font-weight: bold; 
  padding: 11px; 
  border-radius: 12px; 
  text-decoration: none; 
  width: 190px; 
  margin: 8px auto 0; 
  font-size: 0.95rem;
  box-shadow: 0 3px 6px rgba(37,211,102,0.3);
  transition: all 0.2s;
}
.btn-whatsapp:hover { 
  background: linear-gradient(135deg, #1ebe5e, #128c47); 
  transform: translateY(-1px);
  box-shadow: 0 5px 10px rgba(37,211,102,0.4);
}
.btn-whatsapp img { 
  width: 22px; 
  height: 22px; 
}
</style>