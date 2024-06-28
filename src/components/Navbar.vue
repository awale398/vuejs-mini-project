<template>
    <h1>NavBar</h1>
    <v-app-bar :elevation="2" color="orange">
  <template v-slot:prepend>
    <v-app-bar-nav-icon></v-app-bar-nav-icon> 
  </template>

  <v-app-bar-title>RESTO MANAGEMENT</v-app-bar-title>
  <v-btn to="/">Home</v-btn>

<v-btn to="/products">Products</v-btn>
<v-btn to="/AboutUs">AboutUs</v-btn>
<v-btn to="/menu">menu></v-btn>
<v-btn to="/cart">cart</v-btn>
<v-btn to="/Shop">Shop</v-btn>
<v-btn to="/Location">Location</v-btn>
<v-btn to="/Catering">Catering</v-btn>
<v-btn to="/Franchising">Franchising</v-btn>


</v-app-bar>
</template>
<script>
export default {

} 
</script>

    

