<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Step1</router-link> |
      <router-link to="/Step2">Step2</router-link> |
      <router-link to="/Step3">Step3</router-link> |
      <router-link to="/Step4">Step4</router-link> |
      <router-link to="/Step5">Step5</router-link> |
      <router-link to="/Step6">Step6</router-link> |
      <router-link to="/Step7">Step7</router-link> |
      <router-link to="/Step8">Step8</router-link> | -->
      <router-link to="/Step9">Step9</router-link> |
      <!-- <router-link to="/Step10">Step10</router-link> -->
    </div>
    <router-view/>
    <!-- <button>Back</button>
    <button>Next</button> -->
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
