<template>
    <div class="contenedor">
        <div>
            <Project src="/soundJam.png" link="https://juliangarciasuarez.tech">
                <template v-slot:title> <b>SoundJam</b> </template>
                <template v-slot:descripcion><p>Aplicacion web para subir y escuchar musica. Realizada con <b>Vue</b> y <b>Vue-router</b> en el front y <b>NodeJs</b> con Express en el backend.</p></template>
                <template v-slot:tecs> <Vue /> <Nodejs /> <Mongo /> <Javascript /></template>
            </Project>
            <Separator />

            <Project src="/urlShortener.png " link="https://url-shortener-front-vert.vercel.app/">
                <template v-slot:title> <b>Url Shortener App</b> </template>
                <template v-slot:descripcion><p>Web que consume una api para acortar urls, realizada con <b>NodeJs</b> con Express y <b>MongoDB</b> .</p></template>
                <template v-slot:tecs> <Mongo /> <Nodejs /></template>
            </Project>
            <Separator />

            <Project src="/pokemon.png " link="https://pokemon-app-julitoo14.vercel.app">
                <template v-slot:title> <b>Pokemon app</b> </template>
                <template v-slot:descripcion><p>Aplicacion desarrollada con <b>NodeJs</b> conectada a una base de datos <b>MongoDb</b> que posee registro y validacion de datos del usuario
                    con JwtPassport en el backend y consume la pokeApi. Permite al usuario registrado crear un equipo de maximo 6 pokemones.
                    El front esta realizado con <b>Vue</b> y vue-router.</p></template>
                <template v-slot:tecs><Vue /> <Nodejs /> <Mongo /></template>
            </Project>
            <Separator />

            <Project src="/blackjack.png " link="https://julitoo14.github.io">
                <template v-slot:title > <b>Blackjack</b> </template>
                <template v-slot:descripcion><p>Juego de blackjack que realiza un inicio de sesion mediante LocalStorage, realizado completamente en el cliente, con la finalidad de practicar <b>Javascript</b> </p></template>
                <template v-slot:tecs> <Html /> <Css /> <Javascript /></template>
            </Project>
            <Separator />

            
            <Project src="/product.png " link="https://productpagenvidia.netlify.app/">
                <template v-slot:title> <b>Product Page</b> </template>
                <template v-slot:descripcion> <p>Pagina Imitacion del fabricante Nvidia, realizada con <b>Html y Css</b> puro.</p></template>
                <template v-slot:tecs><Html /> <Css /></template>
            </Project>

            
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


p{
    font-size: 1.5em;
    text-align: center;
    margin-top: 2em;
    margin-bottom: 2em;
}


</style>