<template>
  <div id="content"></div>
</template>

<script>
export default {
  name: 'MyContent',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#content {
  width: calc(100% - 200px);
  height: calc(100vh - 100px);
  background-color: #222;
}
</style>
