<template>
  <div 
    @drop="contains()" 
    class="carta"
    :class=" {green: id == index}"
  >
    <p class="letra">{{ letra }}</p>
    
  </div>
</template>

<script>
export default {
  name:  'Carta',

  props:{
    letra:{
      require: true
    },
    index:{
      required: true,
    },
    id: {
      required:true
    }
  },

  computed:{
    newIndex(){
      if(this.id == this.index){
        return this.index
      }
      return this.index
    },

  },


  methods:{
    /**
    * Summary.Verifica si la carta está en la ubicación correcta
    * Description.Emite un evento siempre que se detecte un movimiento de carta
    */
    contains(){
      this.$emit('cambio',{idx:this.newIndex,id:this.id })
    }
  }
  


}
</script>

<style scoped>
.carta{
  width: 100px;
  height: 100px;
  border:10px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: var(--secondary-blue);
  color: white;
  font-weight: bolder;
  cursor: pointer;
}
.letra{
  font-size: 64px;
}

.green{
  border: 10px solid green;
}

@media screen and (max-width: 1080px){
  .carta{
     width: 75px;
    height: 75px;
  }
}

</style>