<template>
  <ul>
    <li v-for="item in beers">
      <span>{{ item.id }}</span>
      {{ item.name }}
      <figure>
        <img :src="item.image_url" :alt="item.name">
      </figure>
      <p>{{ item.description }}</p>
      <p>{{ item.brewers_tips }}</p>
    </li>
  </ul>
</template>

<script>
import axios from 'axios';
export default {
  props: ['id'],
  data() {
    return {
      item: null,
      endpoint: 'https://api.punkapi.com/v2/',
    }
  },
  methods: {
    getPage(id) {
      axios(this.endpoint +'?page=' + id)
        .then(response => {
          this.item = response.data
        })
        .catch( error => {
          console.log('-----error-------');
          console.log(error)
        })
    }
  },

  created() {
    this.getPage(this.id);
  },
  watch: {
    '$route'() {
      this.getPage(this.id);
    }
  }
}
</script>
