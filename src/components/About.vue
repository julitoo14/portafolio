<template>
    <div class="about-container">
        <div class="about">
            <h1 class="about-title">ABOUT ME</h1>
            <p class="about-text">
              Hi, I'm Julian, a web developer currently pursuing a Web Development Associate's Degree at the National University of La Matanza. I'm proficient in backend technologies like Node.js, Php, Express, and MongoDB, as well as essential frontend tools including HTML, CSS, and JavaScript with some experience in Vue.js. I'm passionate about crafting user-centered solutions and enjoy collaborating in teams to tackle new challenges.
            </p>
        </div>
    </div>
</template>

<style>
.about-container{
    text-align: center;
    width: 80%;
    margin: 3em auto auto;
}

.about-text{
    text-align: left;
    background-color: rgba(121, 120, 120, 0.157);
    border-radius: 20px;
    font-size: 1.3em;
    padding: 1em;
    line-height: 1.5em;
    width: 80%;
    margin: auto;
}

@media (max-width: 768px){
    .about-text{
        font-size: 1.1em;
        text-align: left;
        width: 95%;
    }

    .about-container{
        width: 100%;
    }
}


</style>