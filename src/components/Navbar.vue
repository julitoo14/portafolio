<template>
        
        <div>
            <nav class="navbar navbar-expand-md navbar-light bg-light border-3 border-bottom border-primary">
               <div class="container-fluid">
                <a href="#" class="navbar-brand"> <img class='logo' src="/Logo.jpeg" alt=""> </a>
                <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#Menu">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div id="Menu" class="navbar-collapse collapse text-center">
                    <ul class="navbar-nav ms-3">
                        <li class="nav-item">
                            <RouterLink class="nav-link" to="/">Inicio</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink class="nav-link" to="/About">Sobre Mi</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink class="nav-link" to="/Projects">Proyectos</RouterLink>
                        </li>
                    </ul>
                </div>
               </div> 
            </nav>
        </div>
    
</template>



<style scoped>

.logo{
    height: 5em;
}

.nav-link{
    font-size: 2em;
}

</style>