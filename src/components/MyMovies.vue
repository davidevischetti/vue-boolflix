<template>
    <ul id="movie-list">
      <li class="movie-card" v-for="(film,i) in list" :key="i" >
        <ul>
          <li>{{film.original_title}}</li>
          <li>{{film.title}}</li>
          <li>{{film.original_language}}</li>
          <li>{{film.vote_average}}</li>
        </ul>
      </li>
    </ul>
</template>

<script>
export default {
  name: 'MyMovies',
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
        height: 150px;
        margin: 20px calc((100% - (12% * 6)) / 12);
    }
  }
</style>
