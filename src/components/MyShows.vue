<template>

  <section>
    <h2>SERIE TV</h2>
    <ul id="tv-show-list">
      <li class="tv-show-card" v-for="(show,i) in list" :key="i" >       
        <ul>          
          <li>{{show.original_name}}</li>
          <!-- <li>{{show.name}}</li> -->
          <li>O.V.  <lang-flag :iso='show.original_language'/></li>
          <li>
            <span>
               <i v-for="i in Math.round(show.vote_average / 2)" :key="i"><font-awesome-icon icon="fa-solid fa-star" class="yellow-star"/></i>
            </span>
            <span>
              <i v-for="i in (5 - Math.round(show.vote_average / 2))" :key="i"><font-awesome-icon icon="fa-solid fa-star" class="grey-star"/></i>
            </span>
          </li>
           <li class="overview">OverView: <span>{{show.overview}}</span></li>
          <li><img class="bg-img" :src="'http://image.tmdb.org/t/p/w300/' + show.poster_path" :alt="show.name +'-poster'"></li>          
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
  props : ['list'],

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
section {
  padding-left: 100px;
  padding-right: 100px;


  #tv-show-list {
    list-style-type: none;
    display: flex;
    overflow-x: scroll;


    .tv-show-card {
        background-color: #fff;
        min-width: 20%;
        height: 400px;
        border: 2px solid #222;
        position: relative;
        background-color: #000;
        padding: 100px 20px;
        padding-bottom: 0;
        font-size: 15px;
        font-weight: 600;
        color: #fff;
        cursor: pointer;

        li {
          margin: 10px 0;
        }

        .overview {
          line-height: 18px;
          max-height: calc(18px * 6);
          overflow-y: hidden;
          margin-top: 30px;

          span {
          font-weight: 400;
          }
        }

        .bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          top: 0;
          left: 0;
        }

        &:hover {
          .bg-img {
            opacity: 0.2;
            transition: all 0.3s;
          }
        }
    }
  }
}
  
</style>
