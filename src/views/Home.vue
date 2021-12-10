<template>
  <div class="home">
    <div class="home-title"> <h2>Ordena2</h2> </div>
    <div class="players-container">
      <div class="left-container">

        <Jugador 
          name="Ana"
          :imagen="jugador01"
          @click="cargarJuego()"
        />
        <Jugador
          name="Laura"
          :imagen="jugador02"
        />
        <Jugador
          name="Lina"
          :imagen="jugador03"
        />
      </div>
      <div class="right-container">
        
        <Jugador 
          name="Guille"
          :imagen="jugador04"
        />
        <Jugador
          name="Ángel"
          :imagen="jugador05"
        />
        <Jugador
          name="Jose"
          :imagen="jugador06"
        />
      </div>
    </div>
    <div class="footer">
      <p>Paradigmas de programación</p>
      <p>Politecnico Grancolombiano</p>
    </div>
   
  </div>
</template>


<script>
import Jugador from '../components/Jugador.vue'
export default {
  name: "Home",
  components: {
    Jugador
  },

  data(){
    return{
      jugador01:require('../assets/jugador01.svg'),
      jugador02:require('../assets/jugador02.svg'),
      jugador03:require('../assets/jugador03.svg'),
      jugador04:require('../assets/jugador04.svg'),
      jugador05:require('../assets/jugador05.svg'),
      jugador06:require('../assets/jugador06.svg'),
    }
  },


};
</script>


<style scoped>
.home{
  width: 100vw;
  height: 100vh;
  background:url('../assets/imagenFondoPpal.svg');
  background-color: var(--main-blue); 
  background-repeat: no-repeat;
  background-position: center;
  padding-top: 48px;
  padding-left:64px;
  padding-right: 64px;
}

.home-title{
  font-size: 78px;
  color: var(--main-yellow);
  font-weight: bolder;  
}
.players-container{
  display: flex;
  justify-content: space-between;
}
.left-container,.right-container{
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.footer{
  font-size: 32px;
  color: white;
  text-align: center;
  margin-top: 32px;

}
</style>