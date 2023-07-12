<template>
  <header>
    <Navbar />
  </header>
  <main>
    <RouterView />
  </main>
  <Footer />
</template>



<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';


</script>

<style scoped>
header{
  height: 60px;
}

</style>


