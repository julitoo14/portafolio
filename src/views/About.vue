<template>
  <div class="fullscreen">
    <h1><b>SOBRE MI</b></h1>
    <div class="box">
      <div class="img-info">
        <img src="/photo.jpeg" alt="" />
        <p>Nombre: Julian Garcia Suarez</p>
        <p>Residencia: Buenos Aires, Argentina</p>
        <p>Perfil: Web Developer</p>
        <p>Email: juuligarcia2208@gmail.com</p>
        <p>Github: <a class="link" href="https://github.com/julitoo14"> https://github.com/julitoo14</a></p>
        <p>Linkedin: <a class="link" href="https://www.linkedin.com/in/juliangarciasuarez/">https://www.linkedin.com/in/juliangarciasuarez/</a></p>
        
        
        
      </div>
      <div class="skills">
        <h1>Tecnologias</h1>
        <div class="tec">
          <Css></Css>
          <Html></Html>
        </div>
        <div class="tec">
          <Javascript></Javascript>
          <Mongo></Mongo>
        </div>
        <div class="tec">
          <Nodejs></Nodejs>
          <Vue></Vue>
        </div>
        <div class="tec">
          <Git></Git>
          <Sql></Sql>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Css from '../components/icons/css.vue';
import Html from '../components/icons/html.vue';
import Javascript from '../components/icons/javascript.vue';
import Mongo from '../components/icons/mongo.vue';
import Nodejs from '../components/icons/nodejs.vue';
import Vue from '../components/icons/vue.vue';
import Git from '../components/icons/git.vue';
import Sql from '../components/icons/sql.vue';
</script>

<style>

*{
    background: none;
}

.link{
  text-decoration: none;
}

.fullscreen {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url('/background.jpeg');
    background-color: #cccccc;
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    box-sizing: border-box;
}

h1 {
  font-size: 3em;
  text-align: center;
  margin-top: 1em;
  background: none;
}

.box {
  width: 50%;
  background-color: rgb(255, 255, 255);
  position: relative;
  height: 40em;
  margin: auto;
  margin-top: 3em;
  display: flex;
  box-shadow: -1px 1px 1px -1px black;
  border: gray solid 3px;
  margin-bottom: 10em;
  
}

.img-info {
  width: 50%;
  display: flex;
  background: none;
  align-items: center;
  justify-content: space-evenly;
  padding: 3em;
  flex-direction: column;
  background-color: #cccccc;
  font-size: 1em;
}


.img-info img {
  width: 10em;
  height: 15em;
  display: flex;
  border: solid black 2px;
  margin: auto;
}

.tec{
  display: flex;
  margin-bottom: 1em;
  margin-top: 1em;
}

.skills {
  background: none;
  width: 50%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
</style>
