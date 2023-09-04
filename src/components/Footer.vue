<template>
    <footer class="container-fluid bg-light">

        <div class="row footer mt-2">
            <div class="col links text-center text-white">
                <div class="row">
                    <RouterLink class="col nav-link" to="/">Inicio</RouterLink>
                </div>
                <div class="row">
                    <RouterLink class=" col nav-link" to="/About">Sobre Mi </RouterLink>
                </div>
                <div class="row">
                    <RouterLink class="col nav-link" to="/Projects">Portafolio</RouterLink>
                </div>
            </div>
            <div class="col contact text-center ">
                <a class="nav-link" href="https://github.com/julitoo14" target="_blank">Github</a>
                <a class="nav-link" href="https://www.linkedin.com/in/juliangarciasuarez/" target="_blank">Linkedin</a>
                <p>Email: juuligarcia2208@gmail.com</p>
            </div>
        </div>
    </footer>

</template>

<script setup></script>

<style>


.nav-link:hover() {
    color: gray;
}
</style>
