<template>
  <div class="fullscreen p-5 bg-light">
    <div class="box bg-light rounded border border-black border-2">
      <h1 class="text-center"><b>Sobre Mi</b></h1>
      <div class="row img-info p-3 mb-5">
        <img class="col-sm-12 col-lg-6 " src="/photo.jpeg" alt="" />
        <div class="col-sm-12 col-lg-6 text-center info ">
          <p>Julian Garcia Suarez</p>
          <p>Buenos Aires, Argentina</p>
          <p>Web Developer</p>
          <p>juuligarcia2208@gmail.com</p>
          <p><a class="nav-link" href="https://github.com/julitoo14">Github</a></p>
          <p><a class="nav-link" href="https://www.linkedin.com/in/juliangarciasuarez/">Linkedin</a></p>  
        </div> 

      </div>
      <Separator></Separator>
      <h1 class="mt-5"><b>Tecnologias</b></h1>
      <div class="skills row text-center p-5">
        <div class="tec col-sm-6 col-lg-3">
          <Css/>
          <p>CSS</p>
        </div>
        <div class="tec col-sm-6 col-lg-3">
          <Html/>
          <p>HTML5</p>
        </div>
        <div class="tec col-sm-6 col-lg-3">
          <Javascript/>
          <p>Javascript</p>
        </div>
        <div class="tec col-sm-6 col-lg-3">
          <Nodejs/>
          <p>NodeJs</p>
        </div>
        <div class="tec col-sm-6 col-lg-3">
          <Mongo/>
          <p>MongoDB</p>
        </div>
        <div class="tec col-sm-6 col-lg-3">
          <Sql/>
          <p>MySQL</p>
        </div>
        <div class="tec col-sm-6 col-lg-3">
          <Vue/>
          <p>Vue</p>
        </div>
        <div class="tec col-sm-6 col-lg-3">
          <Git/>
          <p>Git</p>
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
import Separator from '../components/Separator.vue';
</script>

<style>


.info{
  font-size: 1.5em;
}

*{
  background: none;
}

.link{
  text-decoration: none;
}

.box{
  margin: auto;
  width: 80%;
}

.tec{
  font-size: 1.3em;
}

.fullscreen {
  background-image: url('/background.jpeg');
  background-position: center;
  background-repeat: repeat;
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

.img-info img {
  width: 15em;
  height: 20em;
  display: flex;
  margin: auto;
}

@media  screen and (max-width: 800px) {
 .box{
  width: 100%;
 }
}
</style>
