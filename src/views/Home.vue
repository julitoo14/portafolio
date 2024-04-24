<template>
    <div class="home-message">
        <div class="container">
            <h1 class="hi-message">Hi! My name is Julian Garcia</h1>
            <h2 class="carreer">I'm a web developer</h2>
        </div>
    </div>
    <About />
    <Projects />
    <Contact />
    <Skills/>

</template>

<script setup>
import Skills from '../components/Skills.vue';
import Projects from '../components/Projects.vue';
import About from '../components/About.vue';
import Contact from "../components/Contact.vue";
</script>


<style scoped>

.container{
    background-color: rgba(121, 120, 120, 0.157);
    padding: 1em;
    width: max-content;
    margin: auto;
    border-radius: 20px;
}

.home-message{
    padding-top: 6em;
    text-align: center;
}

.hi-message{
    font-size: 3em;
    font-family: 'Noto Sans Display', monospace;
}

.carreer{
    font-size: 2.5em;
    font-family: 'Noto Sans Display', monospace;
}

@media (max-width: 768px){
    .hi-message{
        font-size: 1.8em;
    }

    .carreer{
        font-size: 1.2em;
    }

    .container{
        width: 95%;
    }
}


</style>
