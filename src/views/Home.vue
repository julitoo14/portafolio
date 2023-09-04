<template>
    <div class="fullscreen">
        <div><h1><b>Hola! Soy Julian Garcia Suarez</b></h1></div>
        <h2><b>Desarrollador Web</b></h2>
        <button>
            <RouterLink to="/projects" class="link">
                <Portfolio /><b>Portafolio</b>
            </RouterLink>
        </button>
        <button>
            <RouterLink to="/about" class="link">
                <Me /><b>Sobre Mi</b>
            </RouterLink>
        </button>
    </div>
</template>

<script setup>
import Portfolio from '../components/icons/portfolio.vue'
import Me from '../components/icons/me.vue'

</script>


<style scoped>

@media  screen and (min-width: 800px) {
    h1 {
    font-size: 2.8em;
    overflow: hidden;
    /* Ensures the content is not revealed until the animation */
    border-right: .15em solid orange;
    /* The typwriter cursor */
    white-space: nowrap;
    /* Keeps the content on a single line */
    margin: 0 auto;
    /* Gives that scrolling effect as the typing happens */
    letter-spacing: .15em;
    /* Adjust as needed */
    animation:
        typing 3s steps(40, end),
        blink-caret .75s step-end infinite;
}

/* The typing effect */
@keyframes typing {
    from {
        width: 0
    }

    to {
        width: 100%
    }
}

/* The typewriter cursor effect */
@keyframes blink-caret {

    from,
    to {
        border-color: transparent
    }

    50% {
        border-color: rgb(255, 255, 255);
    }
}


h2 {
    font-size: 2.5em;
}
}
.fullscreen * {
    background: none;
    color: rgb(0, 0, 0);
}

.link {
    text-decoration: none;
    font-size: 1.3em;
}

button:hover {
    color: #cccccc;
    border: #cccccc 2px solid;
}

button {
    width: 10em;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    border: black solid 2px;
    margin-bottom: 1em;
}



.fullscreen {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url('/background.jpeg');
    background-color: #cccccc;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    box-sizing: border-box;
}</style>
