<template>
  <div>
    <!-- Título -->
    <h1 style="text-align:center; margin-top: 20px;font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;font-weight: 800;">Productos Destacados</h1>

    <!-- Lista de productos -->
    <ProductList :products="featuredProducts" />


    <div class="ubi container text-center bg-light" >
        <p>Edificio Handal PB local #6, Av. Mariscal Sta. Cruz esquina, La Paz, Bolivia</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.554188521711!2d-68.1353986!3d-16.4980965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f20716be7ca63%3A0x5edb28bf011de1bf!2sPunto%20Boliviano!5e0!3m2!1ses!2sbo!4v1762072843965!5m2!1ses!2sbo" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

    </div>
    <!-- Footer -->
    <footer class="bg-light text-dark mt-5 pt-4 pb-3">
      <div class="container text-center">

        <h5 class="mb-3 mt-4">Contacto</h5>
        <p>Teléfono: +591 77708844</p>
        <h5 class="mb-3 mt-4">Síguenos</h5>
        <div class="d-flex justify-content-center gap-3">
          <a href="#" class="text-dark">Facebook</a>
          <a href="#" class="text-dark">Instagram</a>
          <a href="#" class="text-dark">WhatsApp</a>
        </div>

        <p class="mt-4 mb-0">&copy; 2025 Pink. Todos los derechos reservados.</p>
      </div>
    </footer>
  </div>
</template>

<!-- Home.vue -->
<script>
import ProductList from '../components/ProductList.vue'
import products from '../data/products.js'

export default {
  components: { ProductList },
  data() {
    return {
      featuredProducts: products
    }
  }
}
</script>


<style>
footer {
  font-size: 0.95rem;
}
.ubi
{
    font-weight: 550;
    font-family:  'Trebuchet MS';
}
/* Links hover */
footer a:hover {
  text-decoration: underline;
}
</style>
