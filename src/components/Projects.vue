<template>
    <div class="projects">
        <h1>PROJECTS</h1>
        <div class="projects-container">
            <div class="project">
                <img draggable="false" class="project-image" src="/soundJam.png" alt="">
                <h2>Soundjam - Music App</h2>
                <div class="project-links">
                    <a href=""><img draggable="false" class='icon' src="/site.svg" alt=""></a>
                    <a target="_blank" href="https://github.com/julitoo14/api-music"><img draggable="false" class='icon' src="/github.svg" alt=""></a>
                </div>
            </div>
            <div class="project">
                <img draggable="false" class="project-image" src="/product.png" alt="">
                <h2>Product Page</h2>
                <div class="project-links">
                    <a target="_blank" href="https://productpagenvidia.netlify.app/#Inicio"><img draggable="false" class='icon' src="/site.svg" alt=""></a>
                    <a target="_blank" href="https://github.com/julitoo14/productPage"><img draggable="false" class='icon' src="/github.svg" alt=""></a>
                </div>
            </div>
            <div class="project">
                <img draggable="false" class="project-image" src="/pokemon.png" alt="">
                <h2>Pokemon Team Builder</h2>
                <div class="project-links">
                    <a target="_blank" href="https://pokemon-app-julitoo14.vercel.app/"><img draggable="false" class='icon' src="/site.svg" alt=""></a>
                    <a target="_blank" href="https://github.com/julitoo14/ApiPokemon"><img draggable="false" class='icon' src="/github.svg" alt=""></a>
                </div>
            </div>
            <div class="project">
                <img draggable="false" class="project-image" src="/blackjack.png" alt="">
                <h2>Blackjack</h2>
                <div class="project-links">
                    <a target="_blank" href="https://julitoo14.github.io"><img draggable="false" class='icon' src="/site.svg" alt=""></a>
                    <a target="_blank" href="https://github.com/julitoo14/julitoo14.github.io"><img draggable="false" class='icon' src="/github.svg" alt=""></a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.projects{
    text-align: center;
    margin-top: 4em;
}

h2{
    margin-top: 0.5em;

}

.icon{
    width: 2em;
}

.project-links{
    margin-top: 1em;
    display: flex;
    justify-content: center;
    gap: 3em;
}

.projects-container{
    padding: 0.5em;
    width: 80%;
    margin: auto;
    border-radius: 20px;
    margin-top: 2em;
    display: flex;
    justify-content: space-evenly;
    overflow-x: auto;
    background-color: rgba(121, 120, 120, 0.157);
    margin-bottom: 2em;
}

.project{
    padding: 0.5em;
    border-radius: 10px;
}

.project-image{
    width: 20em;
    height: 15em;
    border-radius: 10px;
}

::-webkit-scrollbar {
    height: 5px;
}

::-webkit-scrollbar-track {
    background-color: rgb(11, 1, 60);
}

::-webkit-scrollbar-thumb {
    background: #2a16c8;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
    background: #4a39c5;
}

@media (max-width: 768px){
    .projects-container{
        width: 95%;
    }
}

</style>