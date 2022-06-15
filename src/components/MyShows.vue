<template>

  <section>
    <h2>SERIE TV</h2>
    <ul id="tv-show-list">
      <li class="tv-show-card" v-for="(show,i) in list" :key="i" >
        <ul>
          <li><img :src="'http://image.tmdb.org/t/p/w92/' + show.poster_path" :alt="show.name +'-poster'"></li>
          <li>{{show.original_name}}</li>
          <li>{{show.name}}</li>
          <li><lang-flag :iso='show.original_language'/></li>
          <li>{{show.vote_average}}</li>
        </ul>
      </li>
    </ul>
  </section>

</template>

<script>
import LangFlag from 'vue-lang-code-flags'

export default {
  name: 'MyShows',
  components: { LangFlag },
  props : ['list']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

#tv-show-list {
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;


    .tv-show-card {
        background-color: #fff;
        flex-basis: 12%;
        min-height: 150px;
        margin: 20px calc((100% - (12% * 6)) / 12);
    }
  }
</style>
