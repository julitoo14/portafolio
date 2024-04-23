<template>
    <div class="skills">
            <h1 class="skills-title">Skills</h1>
            <div class="skills-container">

                    <div class="tec-container">
                      <img draggable="false" class="tec" src="/php.svg" alt="">
                      <h3>Php</h3>
                    </div>

                    <div class="tec-container">
                        <img draggable="false" class="tec node" src="/node.svg" alt="">
                        <h3>Node.js</h3>
                    </div>

                    <div class="tec-container">
                        <img draggable="false" class="tec" src="/express.svg" alt="">
                        <h3>Express.js</h3>
                    </div>

                    <div class="tec-container">
                        <img draggable="false" class="tec" src="/javascript.svg" alt="">
                        <h3>javaScript</h3>
                    </div>      
                    <div class="tec-container">
                        <img draggable="false" class="tec" src="/bootstrap.svg" alt="">
                        <h3>Bootstrap</h3>
                    </div> 
                    
                    <div class="tec-container">
                        <img draggable="false" class="tec" src="/vue.svg" alt="">
                        <h3>Vue.js</h3>
                    </div>

                    <div class="tec-container">
                        <img draggable="false" class="tec" src="/mongo.svg" alt="">
                        <h3>MongoDB</h3>
                    </div>

                    <div class="tec-container">
                        <img draggable="false" class="tec" src="/git.svg" alt="">
                        <h3>Git</h3>
                    </div>



            </div>
    </div>
</template>


<style>
.skills-container{
    padding: 0.5em;
    width: 85%;
  border-radius: 20px;
  margin: 2em auto auto;
  display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}

.skills{
    text-align: center;
    margin-top: 4em;
}

.skills-title{
    font-size: 2em;
    color: #fff;
    margin-top: 1.5em;
}

.tec-container{
    background-color: rgba(121, 120, 120, 0.157);
    padding: 0.5em;
    border-radius: 10px;
    margin: 0.5em;
}

.tec{
    width: 10em;
}
</style>
<script setup>
</script>