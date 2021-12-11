<template>
  
    <div class="main-alfabeto">   
      
      <draggable class="list-group" :list="list1" group="people">
        <Carta
          v-for="(element, index) in list1"
          class="cartas"
          :key="element.name"          
          :letra="element.name" 
          :id="element.id"        
          :index="index"
          @cambio="verificar"
        />        
      </draggable>

    </div>  

</template>

<script>

import Carta from '../components/Carta'
import draggable from "vuedraggable";
export default {
 
  components: {
    draggable,
    Carta
  },

  data() {
    return {
      list1: [
        { name: "A", id: 0 },
        { name: "B", id: 1 },
        { name: "C", id: 2 },
        { name: "D", id: 3 },
        { name: "E", id: 4 },
        { name: "F", id: 5 },
        { name: "G", id: 6 },
        { name: "H", id: 7 },
        { name: "I", id: 8 },
        { name: "J", id: 9 },
        { name: "K", id: 10 },
        { name: "L", id: 11},
        { name: "M", id: 12 },
        { name: "N", id: 13 },
        { name: "O", id: 14 },
        { name: "P", id: 15 },
        { name: "Q", id: 16 },
        { name: "R", id: 17 },
        { name: "S", id: 18 },
        { name: "T", id: 19 },
        { name: "U", id: 20 },
        { name: "V", id: 21 },
        { name: "W", id: 22 },
        { name: "X", id: 23 },
        { name: "Y", id: 24 },
        { name: "Z", id: 25 },
      ],
      
    };
  },
 

  created(){
    this.shuffledArray(this.list1);
    this.uptateCounter()
    this.$bus.$on("newGame", this.shuffledArray(this.list1))
  },

  
    /**
    * Summary.Llama actualizar contador
    * Description. LLama el método actualizar contador siempre que se detecte una actualización en el componente
    */
  updated(){
    this.uptateCounter()    
  },

  methods: {     
 
    /**
    * Summary.Desordena el arreglo
    * Description.Desordena el arreglo en una posición random para que nunca se tenga el mismo juego
    */
    shuffledArray(array){
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }  
      this.list1 = array; 
    },
 
    /**
    * Summary.Actualiza el contador
    * Description.Actualiza el contador que lleva el número de movimientos que ha hecho el jugador hasta llegar al final
    */
    uptateCounter(){
      const card = document.querySelectorAll('.cartas')
      let counter = 0
      card.forEach(c => {
        if(c.classList.contains('green')) {
          counter +=1;
        }
      })
      if(counter === this.list1.length){
        this.$emit('gano')
      }
    },

    verificar(){
      this.$store.dispatch("incrementar")  
    }

  }
};
</script>

<style scoped>
.list-group {
  display: flex;
  padding: 8px;
  justify-content: center;
  gap: 32px;
  flex-wrap: wrap;
}

.main-alfabeto{
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}
</style>