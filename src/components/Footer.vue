<template>
    <footer>
        <div class="links">
            <RouterLink class="link" to="Inicio">Inicio</RouterLink>
            <RouterLink class="link" to="Sobre Mi">Sobre Mi </RouterLink>
            <RouterLink class="link" to="Portafolio">Portafolio</RouterLink>
        </div>
    </footer>

</template>

<script setup></script>

<style>
footer {
  background-color: rgb(253, 253, 253);
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 80px;
  color: white;
  display: flex;
  flex-direction: column;
}
</style>
