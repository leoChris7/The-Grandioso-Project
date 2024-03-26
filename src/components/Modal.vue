<script setup>

</script>

<template>

</template>

<style scoped>
.modal{
    position:absolute;
    inset:0;
    background-color:rgba(0, 0, 0, 0.5);
    display:flex;
    justify-content:center;
    align-items:center;
  }
</style>

<!--
Exemple d'utilisation de teleport pour une boite modale. Le teleport arrive après le rendu, ce qui est utile pour une boite modale.

Si le target du Teleport n'existe pas ça va planter.

/ ! \ Exemple incomplet !
-->