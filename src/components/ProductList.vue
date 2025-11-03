<template>
  <div class="product-list">
    <!-- Product Cards -->
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
      @show-modal="openImageModal"
    />

    <!-- MODAL OPTIMIZADO -->
    <div v-if="modalImage" class="modal" @click.self="closeModal">
      <div class="modal-header">
        <span class="close" @click="closeModal">×</span>
      </div>
      <div class="modal-body" @click.stop>
        <img
          :src="modalImage"
          alt="Imagen ampliada"
          class="modal-img"
          :style="imgStyle"
          @touchstart="startTouch"
          @touchmove="handleTouch"
          @touchend="endTouch"
          @gesturestart="handleGesture"
          @gesturechange="handleGesture"
          @gestureend="handleGesture"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue'

export default {
  components: { ProductCard },
  props: ["products"],
  data() {
    return {
      modalImage: null,
      scale: 1,
      panX: 0,
      panY: 0,
      startX: 0,
      startY: 0,
      startDist: 0,
      isPanning: false,
      lastScale: 1
    }
  },
  computed: {
    imgStyle() {
      return {
        transform: `translate(${this.panX}px, ${this.panY}px) scale(${this.scale})`,
        transition: this.isPanning ? 'none' : 'transform 0.2s ease-out'
      }
    }
  },
  methods: {
    openImageModal(image) {
      this.modalImage = image
      this.resetZoom()
      document.body.style.overflow = 'hidden'
      this.updateViewport(true)
    },
    closeModal() {
      this.modalImage = null
      document.body.style.overflow = 'auto'
      this.updateViewport(false)
    },
    resetZoom() {
      this.scale = 1
      this.panX = 0
      this.panY = 0
      this.lastScale = 1
    },
    updateViewport(zoomable) {
      const viewport = document.querySelector('meta[name="viewport"]')
      if (viewport) {
        viewport.setAttribute(
          'content',
          zoomable
            ? 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes'
            : 'width=device-width, initial-scale=1.0'
        )
      }
    },

    // === TOUCH EVENTS (MÓVIL) ===
    startTouch(e) {
      if (e.touches.length === 1) {
        this.isPanning = true
        this.startX = e.touches[0].clientX - this.panX
        this.startY = e.touches[0].clientY - this.panY
      } else if (e.touches.length === 2) {
        this.isPanning = false
        const t1 = e.touches[0]
        const t2 = e.touches[1]
        this.startDist = Math.hypot(t1.clientX - t2.clientX, t1.clientY - t2.clientY)
        this.lastScale = this.scale
      }
    },
    handleTouch(e) {
      if (e.touches.length === 1 && this.isPanning) {
        this.panX = e.touches[0].clientX - this.startX
        this.panY = e.touches[0].clientY - this.startY
      } else if (e.touches.length === 2) {
        const t1 = e.touches[0]
        const t2 = e.touches[1]
        const currentDist = Math.hypot(t1.clientX - t2.clientX, t1.clientY - t2.clientY)
        this.scale = Math.min(Math.max(this.lastScale * (currentDist / this.startDist), 1), 4)
      }
    },
    endTouch() {
      this.isPanning = false
    },

    // === GESTURE EVENTS (iOS) ===
    handleGesture(e) {
      e.preventDefault()
      this.scale = Math.min(Math.max(e.scale * this.lastScale, 1), 4)
    },

    // === TECLA ESCAPE ===
    handleEscape(e) {
      if (e.key === 'Escape' && this.modalImage) {
        this.closeModal()
      }
    }
  },

  // === CICLO DE VIDA ===
  mounted() {
    window.addEventListener('keydown', this.handleEscape)
  },
  beforeUnmount() {
    document.body.style.overflow = 'auto'
    window.removeEventListener('keydown', this.handleEscape)
  },

  // === CERRAR MODAL AL CAMBIAR RUTA ===
  watch: {
    '$route'(newRoute, oldRoute) {
      if (newRoute.path !== oldRoute.path && this.modalImage) {
        this.closeModal()
      }
    }
  }
}
</script>

<style scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 10px;
  margin: 0;
}

/* === MODAL === */
.modal {
  position: fixed;
  inset: 0;
  background: #000;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.modal-header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 15px;
  z-index: 10;
}

.close {
  color: white;
  font-size: 32px;
  font-weight: bold;
  padding: 8px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;
}

.modal-body {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  touch-action: none;
}

.modal-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  user-select: none;
  touch-action: pan-x pan-y pinch-zoom;
}
</style>