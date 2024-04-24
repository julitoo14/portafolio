<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const mobile = ref(false);

const handleResize = () => {
    if(window.innerWidth <= 768){
        mobile.value = true;
    }else{
        mobile.value = false;
    }
}

onMounted(() => {
    window.addEventListener('resize', handleResize);
    // Llama a handleResize en la montura para manejar el tamaño inicial de la ventana
    handleResize();
});

onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
});
</script>

<template>
    <div>
        <nav class="navbar">
            <div class="left-nav">
                <div class="logo">
                    <img draggable="false" class="icon" src="/dev.svg" alt="">
                    <h2>  Julian Garcia - Web Developer</h2>
                        
                </div>           
            </div>

            <div v-if="mobile === false" class="right-nav">
                <ul class="social">
                    <li class="icon-item">
                        <a target="_blank" href="https://github.com/julitoo14">
                            <img draggable="false" class="icon" src="/github.svg" alt="">
                        </a>
                    </li>
                    <li class="icon-item">
                        <a target="_blank" href="https://www.linkedin.com/in/juliangarciasuarez/">
                            <img draggable="false" class="icon" src="/linkedin.svg" alt="">
                        </a>
                    </li>
                </ul>
            </div>

            <ul></ul>
        </nav>
    </div>
    
</template>

<style scoped>

.navbar{
    box-sizing: border-box;
    background-color: rgb(11, 1, 60);
    padding: 20px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    position: fixed;
    z-index: 1;
}

.social{
    display: flex;
    gap: 10px;
    width: max-content;
    background-color: rgba(121, 120, 120, 0.197);
    padding: 0.5em;
    border-radius: 10px;
}

.logo {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(121, 120, 120, 0.197);
    padding: 0.5em;
    border-radius: 10px;
    gap: 10px;
    width: max-content;
}

.left-nav{
    width: 50%;
}

.right-nav{
    width: 50%;
    display: flex;
    justify-content: flex-end;
}



.logo h3, h5 {
    text-align: center;
}

.icon-item{
    background: none;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: max-content;
    cursor: pointer;
}

.icon{
    height: 2em;
}

@media (max-width: 768px){

    .navbar{
      width: 100%;
      align-items: center;
      justify-content: center;

    }

    .left-nav{
      width: 100%;
      display: flex;
      justify-content: center;
      font-size: 0.9em;
    }
}

</style>