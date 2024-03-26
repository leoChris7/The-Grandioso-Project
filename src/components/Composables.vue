<script setup>
import { useMousePosition } from "../composables/useMousePosition";
const {x, y} = useMousePosition();
</script>

<template>
    <div>
        <ul>
            <li>x: {{ x }}</li>
            <li>y: {{ y }}</li>
        </ul>
    </div>
</template>

<!-- 
Les composables permettent de factoriser BEAUCOUP de code en intéragissant avec la réactivité de Vue.Js (onBeforeMount)

-- VUE USE FAIT TOUT CA : A INSTALLER npm i @vueuse/core--

1. Créer un dossier composables.
2. Ajouter des composables de façon: use[EVENEMENT].js.

 -->