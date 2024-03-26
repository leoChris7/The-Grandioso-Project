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

