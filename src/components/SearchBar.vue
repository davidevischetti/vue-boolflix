<template>
  <header>
    <h1>BOOLFLIX</h1>
    <div>
      <input type="text" placeholder="Cerca film e altro..." v-model="userText" @keyup.enter="$emit('search', userText)">
      <button @click.prevent="$emit('search', userText)"><font-awesome-icon icon="fa-solid fa-magnifying-glass"/></button>
    </div>
  </header>
</template>

<script>
export default {
    name: "SearchBar",
    data () {
        return {
            userText :''
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
header {
  height: 8vh;
  background-color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: #900;
    margin-left: 20px;
    font-size: 40px;
  }

  div {
    margin-right: 50px;

    input {
      height: 40px;
      width: 300px;
      border: 2px solid #222;
      padding-left: 5px;
      background-color: #444;
      color: #fff;

      &:focus {
        outline:none;
      }
    }

    button {
      height: 40px;
      width: 50px;
      border: 2px solid #222;
      border-left: none;
      color: #ddd;
      background-color: #900;
    }
  }
}
</style>
