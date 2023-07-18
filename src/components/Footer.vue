<template>
    <footer>
        <div class="links">
            <RouterLink class="link" to="/">Inicio</RouterLink>
            <RouterLink class="link" to="/About">Sobre Mi </RouterLink>
            <RouterLink class="link" to="/Projects">Portafolio</RouterLink>
        </div>
        <div class="contact">
            <a class="link" href="https://github.com/julitoo14" target="_blank">Github</a>
            <a class="link" href="https://www.linkedin.com/in/juliangarciasuarez/">Linkedin</a>
            <p>Email: juuligarcia2208@gmail.com</p>
        </div>
    </footer>

</template>

<script setup></script>

<style>
footer {
  background-color: #cccccc;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 80px;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.links {
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.2em;
}

.link{
    text-decoration: none;
    color: black;
}

.link:hover{
    color: aqua;
}

.contact{
    display: flex;
    flex-direction: column;
    width: 40%;
    justify-content: center;
    align-items: center;
    font-size: 1.2em;
}
</style>
