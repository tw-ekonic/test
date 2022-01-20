<template>
    <input v-on:input="onSearch(searchType, allType, $event)" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Suchen...">
</template>

<script>

export default {
  name: 'SearchBar.vue',
  props: {
    searchType: String,
    allType: String,
    onSearch: Function,
  },
}
</script>
