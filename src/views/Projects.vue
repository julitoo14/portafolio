<template>
    <div class="contenedor">
        <div>
            <Project src="/pokemon.png " link="https://pokemon-app-julitoo14.vercel.app">
                <template v-slot:title> <b>Pokemon app</b> </template>
                <template v-slot:descripcion><p>Aplicacion desarrollada con <b>NodeJs</b> conectada a una base de datos <b>MongoDb</b> que posee registro y validacion de datos del usuario
                    con JwtPassport en el backend y consume la pokeApi. Permite al usuario registrado crear un equipo de maximo 6 pokemones.
                    El front esta realizado con <b>Vue</b> y vue-router.</p></template>
                <template v-slot:tecs><b>Tecnologias usadas: </b><Vue /> <Nodejs /> <Mongo /></template>
            </Project>
            <Separator />

            <Project src="/blackjack.png " link="https://julitoo14.github.io">
                <template v-slot:title > <b>Blackjack</b> </template>
                <template v-slot:descripcion><p>Juego de blackjack que realiza un inicio de sesion mediante LocalStorage, realizado completamente en el cliente, con la finalidad de practicar <b>Javascript</b> </p></template>
                <template v-slot:tecs> <b>Tecnologias usadas: </b><Html /> <Css /> <Javascript /></template>
            </Project>
            <Separator />

            
            <Project src="/product.png " link="https://productpagenvidia.netlify.app/">
                <template v-slot:title> <b>Product Page</b> </template>
                <template v-slot:descripcion> <p>Pagina Imitacion del fabricante Nvidia, realizada con <b>Html y Css</b> puro.</p></template>
                <template v-slot:tecs><b>Tecnologias usadas: </b><Html /> <Css /></template>
            </Project>

            <Separator />
        </div>
    </div>
</template>

<script setup>
import Project from '../components/Project.vue';
import Css from '../components/icons/css.vue';
import Html from '../components/icons/html.vue';
import Javascript from '../components/icons/javascript.vue';
import Mongo from '../components/icons/mongo.vue';
import Nodejs from '../components/icons/nodejs.vue';
import Vue from '../components/icons/vue.vue';
import Separator from '../components/Separator.vue';
</script>

<style scoped>
.contenedor {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
    flex: 1;
}

h1{
    margin: auto;
    margin-bottom: 20px;
    margin-top: 20px;
}

p{
    font-size: 1.5em;
    text-align: justify;
    margin-top: 2em;
    margin-bottom: 2em;
}


</style>