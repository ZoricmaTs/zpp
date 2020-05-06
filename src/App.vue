<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/register">register</router-link>|
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
@import '/assets/scss/main.scss';
</style>
