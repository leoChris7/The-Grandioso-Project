import { onBeforeUnmount, toValue, watch } from "vue";
import {tryOrBeforeUnmount} from "vueuse/core";

export function useEventListener(target, name, callback){
    // problème: on veut pouvoir utiliser des refs pour écouter les évènements.

    // outil pour pouvoir utiliser les refs
    // ===> toValue(target);
    // si variable normale: renvoie la variable normale sinon renvoie la valeur de la ref
    
    let listenerCreated = false;

    stopWatch = watch(()=>{
        toValue(target), (targetResult)=>{
            // si listener pas créé et targetResult existe
            if (!listenerCreated && targetResult){
                targetResult.addEventListener(name, callback);
                
                // on arrête
                listenerCreated = true;
            }
        },{
            immediate:true
        }
    })
    
    // permet de désactiver l'élément et d'optimiser:
    onBeforeUnmount(()=>{
        if (toValue(target)){
            toValue(target).removeEventListener(name, callback);
        }
    })

    tryOrBeforeUnmount() // permet de faire l'unmount si c'est un composant..


}