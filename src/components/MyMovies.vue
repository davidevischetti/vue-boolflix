<template>

  <section>
    <h2>FILM</h2>
    <ul id="movie-list">
      <li class="movie-card" v-for="(film,i) in list" :key="i" >
        <ul>
          <li><img :src="'http://image.tmdb.org/t/p/w92/' + film.poster_path" :alt="film.title +'-poster'"></li>
          <li>{{film.original_title}}</li>
          <li>{{film.title}}</li>
          <li><lang-flag :iso='film.original_language'/></li>
          <li>
            <span>
               <i v-for="(star,i) in Math.round(film.vote_average / 2)" :key="i"><font-awesome-icon icon="fa-solid fa-star" class="yellow-star"/></i>
            </span>
            <span>
              <i v-for="(star,i) in (5 - Math.round(film.vote_average / 2))" :key="i"><font-awesome-icon icon="fa-solid fa-star" class="grey-star"/></i>
            </span>
          </li>
        </ul>
      </li>
    </ul>
  </section>

</template>

<script>
import LangFlag from 'vue-lang-code-flags'

export default {
  name: 'MyMovies',
  components:{ LangFlag },
  props : ['list']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

#movie-list {
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;


    .movie-card {
        background-color: #fff;
        flex-basis: 12%;
        min-height: 150px;
        margin: 20px calc((100% - (12% * 6)) / 12);
    }
  }
</style>
