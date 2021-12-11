<template>
  <!-- Interface gráfica de la clase jugador -->
  <div 
    class="player-container"
    @click="cargarJuego()"
  >
    <div class="avatar">
      <img :src="imagen" alt="jugador01">
    </div>
    <div>
      <div claas="player-info">
        <img class="player-pointer" src="../assets/dedoBLanco.svg" alt="">
      </div>
      <div>
        <p class="player-name">{{ name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Jugador',
  /**
   * Propiedades que recibe la clase jugador del componente padre
   */
  props:{
    name:{
      type: String,
      required: true
    },
    imagen:{
      type: String,
      required: true
    }
  },

  methods: {
    /**
     * Summary. Método para cargar el juego
     * Description.Recibe el evento click asociado a la clase jugar y carga el juego enviando tres parámetros, el nombre, los intentos y la imagen
     */
    cargarJuego(){
      this.$router.push({ name: 'Juego', params:{ 
        name: this.name, 
        imagen: this.imagen  
      }})
    }
  }

}
</script>

<style scoped>
.player-container{
  height: 20vh;
  min-width: 280px;  
  border-radius: 16px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;  
  cursor: pointer;
  transition: all 300ms ease-in;
}
.player-container:hover{
  background-color: var(--main-purple);
  box-shadow: 3px 2px 2px rgba(0,0,0,0.3) ;
  
}
.player-container:active{
  transform: scale(0.9);
}
.avatar{
  height: 100%;
  display: flex;
  padding: 8px;
  width: 50%;
}
.player-info {
  width: 100%;
}
.player-name{
  font-size: 48px;
  color: white;
  font-weight: bolder;
  opacity: 0;
  transition: all 300ms ease-in;
}
.player-pointer{
  opacity: 0;
   transition: all 300ms ease-in;
   
}

@keyframes puntero{
  0%{
    transform: scale(1);
  }
  50%{
    transform: scale(0.9);
  }
  100%{
    transform: scale(1);
  }
}
.player-container:hover .player-name{
  opacity: 1;
}
.player-container:hover .player-pointer{
  animation: puntero 1000ms infinite ease;
  opacity: 1;
}


</style>