import { onBeforeMount, ref } from 'vue';
import { useEventListener } from './useEventListener';
export function useMousePosition(){

const x = ref(0);
const y = ref(0);

useEventListener(window, "mousemove", (event)=>{
    x.value = event.x;
    y.value = event.y;
})

return {
    x,y
}
}