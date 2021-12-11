<template>
  <div id="app">
    <router-view />    
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root{
  --main-blue: #7BD7F2;
  --aqua-blue: #04d9c4;
  --main-yellow:#FFD962;
  --main-purple: #B65BC7;
  --alert: #f20530;
  --success: #A6EC8A;
  --secondary-blue: #59a1eb;
}

</style>
