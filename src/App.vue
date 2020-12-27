<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import login from "components/content/login";
export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
body {
  background-color: rebeccapurple;
  padding: 0;
  margin: 0;
}
</style>
