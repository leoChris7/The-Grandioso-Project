import { onBeforeMount, ref } from 'vue';
export function useMousePosition(){

function onMouseMove(event){
    x.value = event.x;
    y.value = event.y;
}

const x = ref(0);
const y = ref(0);

window.addEventListener('mousemove', onMouseMove);

onBeforeMount(()=>{
    window.removeEventListener("mouseMove", onMouseMove())
})

return {
    x,y
}
}