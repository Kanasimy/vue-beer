<template>
  <div id="app">
    <header id="pageHeader">
      <h1>{{ msg }}</h1>
    </header>

    <nav id="pageNav">
      Меню
    </nav>
    <article id="pageArticle">
      <!--page не передаётся в компонент автоматически,
в том, что это сделает компонент жёстко связанным с логикой работы v-for.
Но если указывать источник данных явно, компонент можно будет использовать и
в других ситуациях. -->
      <ul v-if="pages">
        <page
          v-for="page in pages"
          v-bind:page="page"
          v-bind:key="page.id"
        ></page>
      </ul>
    </article>
    <aside id="pageAside">
      <button v-on:click="id += 1">{{ button }}</button>
    </aside>
    <footer id="pageFooter">
      Мы показываем страницу {{ id }}
    </footer>
  </div>
</template>

<script>
  import page from './components/Page.vue';
  import axios from "axios";
  export default {
    name: 'app',
    components: {
     page,
    },
    data () {
      return {
        msg: 'I like BEER',
        button: 'Show next',
        endpoint: 'https://api.punkapi.com/v2/beers?page=',
        pages: [],
        id: 1,
      }
    },

    methods: {
      getPost(id) {
        axios(this.endpoint + id)
          .then(response => {
            this.pages = response.data;
            console.log(this.pages)
          })
          .catch( error => {
            console.log('-----error-------');
            console.log(error)
          })
      },
      addPost(){},

    },

    created() {
      this.getPost(this.id);
    }
  }
</script>

<style lang="scss">

</style>
