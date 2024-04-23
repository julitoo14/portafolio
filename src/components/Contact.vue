<script setup>
import { ref } from 'vue';

const copyEmail = () => {
  navigator.clipboard.writeText("juuligarcia2208@gmail.com");
}

const copyPhone = () => {
  navigator.clipboard.writeText("+5491165097776");
}
</script>

<template>
  <div class="contact">
    <h1 class="contact-title">Contact</h1>
    <div class="contact-info">
      <div class="item">
        <img  draggable="false" src="/mail.svg" />
        <p>juuligarcia2208@gmail.com</p>
        <button class="copy-btn" @click="copyEmail">
          Copy
        </button>
      </div>
      <div class="item">
        <img draggable="false" src="/phone.svg" />
        <p>+5491165097776</p>
        <button class="copy-btn" @click="copyPhone">
          Copy
        </button>
      </div>
      <a class="link" href="https://www.linkedin.com/in/juliangarciasuarez/" target="_blank">  <img draggable="false" src="/linkedin.svg" />Linkedin </a>
      <a class="link" href="https://github.com/julitoo14" target="_blank"> <img draggable="false" src="/github.svg" /> Github  </a>
    </div>
  </div>
</template>

<style scoped>

  img{
    width: 1.5em;
  }

  .item{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1em;
  }

  .link{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1em;
    cursor: pointer;
    text-decoration: none;
  }

  .contact-info{
    text-align: left;
    background-color: rgba(121, 120, 120, 0.157);
    border-radius: 20px;
    font-size: 1.3em;
    padding: 1em;
    margin: auto;
    width: max-content;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;
  }

  .copy-btn{
    font-size: 1em;
    padding: 5px;
    border-radius: 10px;
    background-color: rgba(121, 117, 117, 0.42);
    border: none;
    cursor: pointer;
  }

  .contact{
    margin: 3em auto auto;
    width: 80%;
  }

  .contact-title{
    text-align: center;
  }
</style>