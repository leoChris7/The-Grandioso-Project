<script setup>
import { ref } from 'vue';

defineProps({
    item:String
});

const element = ref(null);

// définit ce qui sera visible dans l'élément à l'extérieur, dans une ref par exemple.
defineExpose({
    element
})
</script>

<template>
    <li ref="element">{{ item }}</li>
</template>