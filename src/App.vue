<template>
  <div id="app">
    <!-- app-header -->
    <app-header />
    <b-container>
      <router-view />
    </b-container>
    <!-- app-footer -->
    <app-footer />
  </div>
</template>

<script>
import appHeader from "@/components/header";
import appFooter from "@/components/footer";
export default {
  components: {
    appHeader,
    appFooter
  }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
