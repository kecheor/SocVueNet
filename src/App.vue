<template>
 
<div  id="app" class="container">
  <div class="row">
    <div class="col-sm" />
    <div class="col-sm">
      <img alt="Vue logo" src="./assets/logo.png" class="logo" />
    </div>
    <div class="col-sm"/>
  </div>
  <div class="row">
    <div class="col-sm" />
    <div class="col-sm">
     <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    </div>
    <div class="col-sm"/>
  </div>
  <div class="row">
    <div class="col-sm" />
    <div class="col-sm">
      <router-view/>
    </div>
    <div class="col-sm"/>
  </div>
</div>

</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
