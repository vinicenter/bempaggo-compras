<script setup>
import Logo from '@/components/core/Logo.vue';

import messages from '@/data/messages.json'
</script>

<script>
export default {
  components: { Logo }
}
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <RouterLink to="/">
          <Logo class="d-inline-block align-text-top" />
        </RouterLink>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link">{{ messages.components.Navbar.buy }}</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/sobre" class="nav-link">{{ messages.components.Navbar.about }}</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>

.nav-link {
  font-size: 18px !important;
  font-weight: 600 !important;
  font-style: normal !important;
  letter-spacing: -0.2px !important;
  color: #23A8C3 !important;
}

.nav-link:hover {
  color: #00449F !important;
}

@media (max-width: 991px) {
  .navbar .navbar-nav {
    display: inline-block;
    float: none;
    vertical-align: top;
    width: 100%;
  }

  .navbar .navbar-collapse {
    text-align: center;
  }
}

</style>