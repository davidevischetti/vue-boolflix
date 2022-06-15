<template>
  <div id="app">
    <MyContent/>
  </div>
</template>

<script>
import MyContent from './components/MyContent.vue';

export default {
  name: 'App',
  components: {
    MyContent
}
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
 width: 100%;
 min-height: 100vh;
 background-color: #444;
 display: flex; 
 justify-content: center;
 align-items: center;

ul {
  list-style-type: none;
}

h2 {
  color: #fff;
  margin-top: 30px;
}

}
</style>
