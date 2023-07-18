<template>
    <nav class="navbar">
        <div class="logo">
            <h2><b> Julian Garcia Suarez</b></h2>
        </div>
        <ul>
            <li><RouterLink class="link" to="/"><b>Home</b></RouterLink></li>
            <li><RouterLink class="link" to="/About"><b>Sobre Mi</b></RouterLink></li>
            <li><RouterLink class="link" to="/Projects"><b>Portafolio</b></RouterLink></li>
        </ul>
    </nav>
</template>



<style scoped>
    .navbar{
        background-color: white;
        width: 100%;
        display: flex;
        height: 60px;
        justify-content: space-evenly;
        align-items: center;
        position: fixed;
        box-shadow: 0px 1px 2px rgba(80, 224, 250, 0.5), 
              0px 2px 4px rgba(80, 224, 250, 0.5), 
              0px 4px 8px rgba(80, 224, 250, 0.5), 
              0px 8px 16px rgba(80, 224, 250, 0.5);
    }
    
    *{
        background-color: white;
    }
    .logo{
        margin-left: 20px;
        color: whitesmoke;
    }

    ul{
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
        font-size: 1.5em;
        margin: 0;
    }


    ul li .link {
        text-decoration: none;
        margin-right: 20px;
        cursor: pointer;
        color: black;
    }

    .link:hover{
        color: rgba(0,255,255,0.5);
    }
</style>