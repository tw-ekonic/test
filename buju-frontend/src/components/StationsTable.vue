<template>
  <div>
    <h1 class=" text-3xl mb-10">Stationsliste</h1>
    <div>
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Station hinzufügen
      </label>
      <div class="flex flex-row">
        <input @keyup.enter="onSubmit('stations', 'stationName', 'stations')" v-on:input="onInputChange($event, 'stationName')" v-bind:value="stationName" class="shadow appearance-none border rounded w-2/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Name der Station">
        <div class="relative w-2/4">
        <select v-on:change="selectStationValue" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option disabled selected value> -- Wert wählen -- </option>
          <option> Sekunden </option>
          <option> Meter </option>
        </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>
        <button v-on:click="onSubmit('stations', 'stationName', 'stations')" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          Speichern
        </button>
      </div>
    </div>
    <div>
      <ul class="py-16">
        <SearchBar/>
        <li class="w-full p-4 pr-8 pl-8 flex items-center justify-between border-b border-gray-300" v-bind:key="station" v-for="station in stations">
          <div>
            {{ station.name }} (in {{ station.value }})
          </div>
          <div class="flex">
            <svg v-on:click="toggleModal(station, 'Station bearbeiten', 'Name der Station', 'stations', 'stations')" xmlns="http://www.w3.org/2000/svg" class="h-5 mr-4 w-5 cursor-pointer hover:text-green-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
            <svg v-on:click="deleteStation(station.id)" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 cursor-pointer hover:text-red-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";

export default {
  name: 'StationsTable.vue',
  props: {
    stations: Array,
    stationName: String,
    selectedStationValue: String,
    selectStationValue: Function,
    onInputChange: Function,
    onSubmit: Function,
    deleteStation: Function,
    toggleModal: Function,
    onSearch: Function,
  },
  components: {
    SearchBar
  }
}
</script>
