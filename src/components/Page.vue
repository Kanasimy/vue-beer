<template>
      <li>
        <span>{{ page.id }}</span>
        <figure>
          <img height="100px" :src="page.image_url" :alt="page.name">
        </figure>
        <p>{{ page.description }}</p>
        <p>{{ page.brewers_tips }}</p>
      </li>
</template>

<script>
export default {
  props: {
    page: Object,
  }
}
</script>



