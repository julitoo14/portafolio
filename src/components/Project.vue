<template>
    <div class="container-fluid mb-5">
        <div class="row mt-5 mb-5">
            <h2 class="text-center"> <slot name="title" /> </h2>
        </div>
        
        <div class="row">
            <div class="col-sm-12 col-lg-6 ">
                <a :href=link target="_blank" > <img :src= src alt="" class="center-block"></a>
            </div>
            <div class="col-sm-12 col-lg-6 descripcion">
                <p class="text-center w-100"><slot name="descripcion" ></slot></p>
                <div class="text-center logos"><slot name="tecs"></slot></div>
            </div>
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


img {
    width: 100%;
    height: 30em;
    border-radius: 20px;
    border: solid 2px black;
    
}


@media  screen and (max-width: 800px) {
    img{
        height: 20em;
    }
}

    
</style>