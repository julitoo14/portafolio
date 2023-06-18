<template>
    <div class="contenedor">
        <a :href=link target="_blank" > <img :src= src alt=""></a>

        <div class="descripcion">
            <h2> <slot name="title" /> </h2>
            <p><slot name="descripcion" ></slot></p>
            <div class="logos"><slot name="tecs"></slot></div>
        </div>
    </div>
</template>

<script setup>


    const props = defineProps({
        src : '',
        link : '',
        tecs: ''
    });
</script>

<style scoped>
    .contenedor{
        border-radius: 10px;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: flex-start;
        color: white;
    }

    img {
        width: 80%;
        height: 30em;
        border-radius: 20px;
        border: solid 2px black;
        
    }

    a{
        width: 58%;
        text-align: center;
    }
    
    .descripcion {
        display: flex;
        flex-direction: column;

        width: 38%;
    }

    .descripcion *{
        text-align: center;
    }

    
</style>