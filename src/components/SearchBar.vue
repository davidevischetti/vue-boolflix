<template>
  <div>
    <input type="text" placeholder="Cerca film e altro..." v-model="userText" @keyup.enter="$emit('search', userText)" >
    <button @click.prevent="$emit('search', userText)">Cerca</button>
  </div>
</template>

<script>
export default {
    name: "SearchBar",
    data () {
        return {
            userText :''
        }
    },

    created () {
        console.log('ciao');
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
