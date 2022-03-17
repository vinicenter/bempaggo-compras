<script setup>
import Navbar from '@/components/composition/Navbar.vue';
</script>

<script>
export default {
  components: { Navbar }
}
</script>

<template>
  <Navbar />

  <div class="container">
    <RouterView />
  </div>
</template>