<template>
<div class="game-container">
  <div class="game-header">
    <div class="player-avatar-container">
      <p class="player-name">{{ name }}</p>
      <img class="player-avatar" :src="imagen" alt="">
    </div>
     <p class="contador">Movimientos: {{ movimientos }}</p>
    <div >
      <img  
        class="home-btn"
        src="../assets/homeBtn.svg" alt=""
        @click="volverInicio()"  
      >
    </div>
  </div>

  <div class="main-game">
    <div class="main-game-container">
      <div class="alphabet-game">
        <Alfabeto
          @gano="gano"
          :intentos="intentos"
        />
      </div>
    </div>
  </div>

  <div 
    v-if="mostrarMensaje === true"
    class="mostrar-mensaje"  
  >
    <div class="mensaje">
      <div v-if="movimientos <= 30">
       <div class="estrellas">
         <p class="mensaje-texto">Gran trabajo!</p>
         <img src="../assets/3Stars.svg" alt="">
       </div>
      </div>

      <div v-else-if="((movimientos > 30) && (movimientos <= 50))">
       <div class="estrellas">
         <p class="mensaje-texto">Puedes mejorar!</p>
         <img src="../assets/2stars.svg" alt="">
       </div>
      </div>

      <div v-else>
       <div class="estrellas">
         <p class="mensaje-texto">No te rindas!</p>
         <img src="../assets/1star.svg" alt="">
       </div>
      </div>   

      <button
        class="empezar-btn"
        @click="nuevoIntento()"
      >Empezar de nuevo</button>
    </div>
    
  </div>
  
 
  
  </div>
  
</template>

<script>
import Alfabeto from '../components/Alfabeto';
import { mapState } from 'vuex'
export default {

  components:{
    Alfabeto,
  },

  props:{
    name:{
      required: true
    },
    intentos:{
      required:true
    },
    imagen:{
      required:true
    }
  },

  data(){
    return{
      // movimientos: 0,
      mostrarMensaje: false,

    }
  },
  computed:{
    ...mapState(['tries','movimientos','total'])
  },

  created(){
    this.$store.dispatch("reset")
  },

  methods:{
    volverInicio(){
      this.$router.push({ name: 'Home'})
    },
    incrementarIntento(){
      this.$store.dispatch("incrementar")
    },
    gano(){
      this.mostrarMensaje = true;
    },
    nuevoIntento(){
      this.$store.dispatch("reset")
      this.mostrarMensaje = false;
      this.$router.push('/')
    }

  }

}
</script>

<style scoped>
.game-container{
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: var(--main-blue);
  padding: 32px;
  overflow: hidden;
}

.game-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  
}
.player-avatar-container{
  display: flex;
  height: 100px;
  align-items: center;
  background-color: var(--secondary-blue);
  border-radius: 8px;
  padding: 16px;
}
.player-name{
  color: white;
  font-size: 24px;
}
.player-avatar{
  transform: scale(0.5);
}
.home-btn{
  cursor: pointer;
}
.home-btn:active{
  transform: scale(0.95);
}
.main-game{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 64px;  
}

.main-game-container{
  width: 90%;
  height: 75%;
  background-color: var(--main-yellow);
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px;
}
.alphabet-game{
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 12px;
}

.contador{
  color: #f20530;
  font-size: 32px;
  background-color: var(--main-yellow);
  padding: 16px 32px;
  border-radius: 16px;
}

.mostrar-mensaje{
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.mensaje{
  width: auto;
  padding: 32px;
  background-color: white;
  border: 15px solid var(--success);
  color: white;
  border-radius: 16px;

}
.mensaje-texto {
  color: var(--success);
  font-size: 32px;
  margin-bottom: 16px;  
  font-weight: bolder;
}
.estrellas {
  margin-bottom: 16px;
}
.empezar-btn{
  padding: 32px 16px;
  border: none;
  outline: none;
  border-radius: 16px;
  background-color: var(--success);
  color: white;
  font-weight: bolder;
  cursor: pointer;
}

</style>