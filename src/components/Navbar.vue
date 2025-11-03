<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand d-flex align-items-center" href="#">
        <img src="/public/img/logo.png" alt="Logo" class="logo" />
      </a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav justify-content-end text-center w-100">
          <li class="nav-item">
            <router-link to="/" class="nav-link" :class="{ active: $route.path === '/' }">
              INICIO
            </router-link>
          </li>
          <li class="nav-item" v-for="cat in categories" :key="cat">
            <router-link 
              :to="`/category/${cat.toLowerCase()}`" 
              class="nav-link" 
              :class="{ active: $route.params.name?.toLowerCase() === cat.toLowerCase() }"
            >
              {{ cat }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      categories: ["ABRIGOS", "BLAZERS", "BLUSAS", "PANTALONES"]
    }
  }
}
</script>

<style scoped>
.navbar { background-color: #f6e8f495 !important; width: 100% !important; }
.logo { height: 60px; width: auto; }

.nav-link {
  font-size: 1.1rem !important;
  font-weight: 850 !important;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  margin: 0 25px !important;
  color: #555 !important;
  position: relative;
  transition: all 0.3s;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 50%;
  width: 0;
  height: 3px;
  background: #ff66b2;
  transition: all 0.3s;
  transform: translateX(-50%);
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 80%;
}

.nav-link.active {
  color: #ff66b2 !important;
  font-weight: 900;
}

.navbar-nav {
  gap: 20px;
  justify-content: center;
}

@media (max-width: 576px) {
  .logo { height: 50px; }
  .nav-link { font-size: 1rem; margin: 0 10px !important; }
  .navbar-nav { flex-direction: column; gap: 8px; }
}
</style>