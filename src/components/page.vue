<template>

    <ul v-if="pages">
      <li>
        <span>{{ page.id }}</span>
        {{ page.name }}
        <figure>
          <img :src="page.image_url" :alt="page.name">
        </figure>
        <p>{{ page.description }}</p>
        <p>{{ page.brewers_tips }}</p>
      </li>
    </ul>

</template>


