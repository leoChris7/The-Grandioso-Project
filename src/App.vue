<script setup>
import { Teleport, onBeforeUnmount, ref, watch, watchEffect } from 'vue';
import ListItem from './components/ListItem.vue';
import Composables from './components/Composables.vue';

                // initialisé à null
const testDiv = ref(null);

const ListElements = ref([]);

const maList = [
  "test1", "test2", "test3", "test30"
]

// permet d'écouter la valeur des objets
watchEffect(()=>{
// tout ce qui est dans le watchEffect et qui est modifié va trigger le WatchEffect.
  console.log(testDiv.value);
  console.log(ListElements.value);

},{deep:true});

// watch: on vérifie le contenu de testDiv: s'il existe, ...
const stopWatch = watch(testDiv, (div)=>{
  if (div != null){
    console.log(div.offsetWidth)
  }//,{deep:true} pour les listes /// once:true pour qu'il se trigger qu'une fois
})

// assigner une variable à watch (ligne 15) permet de pouvoir arrêter le watch quand on veut exemple:
onBeforeUnmount(()=>{
  stopWatch();
});

<Teleport to="#IDDELELEMENTQUONVAACCEDER"></Teleport>

</script>

<template>
  <Modal>Test</Modal>
  <Composables></Composables>
  <div ref="testDiv">Je suis une div magique.<p>3, 2, 1, LET'S A GO!! SPAGHETTIS</p></div>
  <ul>
    <ListItem v-for="item in maListe" ref="ListElements">{{ item }}</ListItem>
  </ul>

</template>

<style scoped>


</style>

<!--
UTILISER UN TEMPLATE: On peut le faire avec un v-for, avec un seul élément...
  
1. Initialiser une const .. initialisé à ref(null)
2. Rajouter ref=".." à l'élément qu'on veut récupérer.
3. Eventuellement ajouter un watcher (voir ligne 13)

Dans le cas où on met un component en ref, on récupère le composant et non son contenu.
-->
