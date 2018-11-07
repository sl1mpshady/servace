<template>
  <div id="app">
    <Navigation v-show="($route.name !== 'FrontPage')"/>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
export default {
  name: 'app',
  components: {
    Navigation
  }
}
</script>

<style>

@font-face {
  font-family: 'Product Sans Bold';
  src: url('./assets/fonts/Product-Sans-Bold.ttf');
}

@font-face {
  font-family: 'Samsung Sharp Sans Bold';
  src: url('./assets/fonts/SamsungSharpSans-Bold.woff');
}

@font-face {
  font-family: 'Lineto Circular Book';
  src: url('./assets/fonts/lineto-circular-book.woff');
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.full-container {
  height: 100vh;
  width: 100%;
}

.custom-control-label::after {
  position: absolute;
  top: 0.25rem;
  left: -1.5rem;
  display: block;
  width: 1rem;
  height: 1rem;
  content: "";
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
  border: 1px solid #007bff;
  border-radius: 0.25rem;
  cursor: pointer;
}

input, select, button, tr, p, h4, b {
  font-family: 'Lineto Circular Book', sans-serif !important;
}

.dropdown-toggle:after {
  display: none !important;
}
</style>
