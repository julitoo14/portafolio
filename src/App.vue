<template>
  <header>
    <Navbar />
  </header>
  <main>
    <RouterView />
  </main>
  <footer>
    
  </footer>
</template>



<script setup>
import Navbar from './components/Navbar.vue';


</script>

<style scoped>
header{
  height: 60px;
}

</style>


