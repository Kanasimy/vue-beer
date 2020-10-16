<template>
  <div id="app">
    <p>Мы показываем страницу {{ id }}</p>
<!--page не передаётся в компонент автоматически,
в том, что это сделает компонент жёстко связанным с логикой работы v-for.
Но если указывать источник данных явно, компонент можно будет использовать и
в других ситуациях. -->
    <ul v-if="pages">
    <page
      v-bind:page="page"
      v-bind:key="page.id"
      v-for="page in pages"
      v-bind:name="page.name"
    ></page>
    </ul>
    <button v-on:click="id += 1">{{ button }}</button>
  </div>
</template>

<script>
  import page from './components/page.vue';
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
        page: '',
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
      }
    },

    created() {
      this.getPost(this.id);
    }
  }
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
