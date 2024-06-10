<template>
    <div class="container-md">
        <h1>Welcome</h1>
         </div>

    <div id="aboutme">
        <h2>About Us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, velit ac aliquam tincidunt, nunc mauris aliquet nunc, id lacinia nisl nunc vitae nunc. Nulla facilisi. Nulla facilisi. Sed euismod, velit ac aliquam tincidunt, nunc mauris aliquet nunc, id lacinia nisl nunc vitae nunc. Nulla facilisi. Nulla facilisi. Sed euismod, velit ac aliquam tincidunt, nunc mauris aliquet nunc, id lacinia nisl nunc vitae nunc. Nulla facilisi. Nulla facilisi.</p>
    </div>


</template>

<script>
import { ref } from 'vue';

</script>

<style scoped>

.container-md {
    margin: 40px auto;
    width: 80%;
    max-width: 800px;
    padding: 20px;
    background-color: white;
    border-width: 0px 0px 4px 0px ;
    border-bottom: solid rgb(3, 87, 43); 
    border-radius: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

#aboutme {
    margin: 0px auto;
    width: 80%;
    max-width: 800px;
    background-color: white;
    border-width: 0px 0px 4px 0px ;
    border-radius: 0px;
    display: flex;
    flex-direction: column;
    text-align: justify;
}
</style>