<template>
  <h1 class="mt-28 text-3xl mb-10">Ergebnis hinzufügen</h1>
  <div class="flex  flex-col w-full justify-between">
    <div class="w-full">
      <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        Schüler
      </label>
      <div class="flex flex-col">
        <div class="w-full">
          <div class="relative">
            <select  v-on:change="selectStudent" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
              <option disabled selected value> -- Schüler wählen -- </option>
              <option v-bind:key="student.id" :value="student.id" v-for="student in students">{{ student.name }}</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full">
      <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        Station
      </label>
      <div class="flex flex-row">
        <div class="w-full">
          <div class="relative">
            <select v-on:change="selectStation" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
              <option disabled selected value> -- Station wählen -- </option>
              <option v-bind:key="station.id" :value="station.id" v-for="station in stations">{{ station.name }}</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Ergebnis
      </label>
      <div class="flex flex-row">
        <input v-on:input="onResultChange" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Ergebnis eingeben">
        <button v-on:click="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          Speichern
        </button>
      </div>
    </div>
  </div>
  <div v-if="results">
    <h1 class="mt-28 text-3xl mb-10">Liste aller Ergebnisse</h1>
    <table class="table-auto w-full">
      <thead>
      <tr class="text-left">
        <th class="p-4 border-b-2">Schüler</th>
        <th class="p-4 border-b-2">Station</th>
        <th class="p-4 border-b-2">Ergebnis</th>
        <th class="p-4 border-b-2">Funktion</th>
      </tr>
      </thead>
      <tbody>
      <tr v-bind:key="result.id" v-for="result in results">
        <td class="p-4 border-b">{{ result.user?.name }}</td>
        <td class="p-4 border-b">{{ result.station?.name }}</td>
        <td class="p-4 border-b">{{ result.score }}</td>
        <td class="p-4 border-b-2">
          <svg v-on:click="toggleModal(result, 'Ergebnis bearbeiten', 'Ergebniswert', 'scores', 'results')" xmlns="http://www.w3.org/2000/svg" class="h-5 inline mr-4 w-5 cursor-pointer hover:text-green-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
          <svg v-on:click="deleteResult(result.id)" xmlns="http://www.w3.org/2000/svg" class="h-5 inline w-5 cursor-pointer hover:text-red-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

let activeResult = {
  student: "",
  station: "",
  result: "",
}

export default {
  name: 'ResultsTable.vue',
  methods: {
    selectStudent(e) {
        activeResult.student = e.target.value;
        console.log(e);
    },
    selectStation(e) {
      activeResult.station = e.target.value;
    },
    onResultChange(e) {
      activeResult.result = e.target.value;
    },
    submit() {
      this.$props.onResultSubmit(activeResult);
      activeResult = Object.create(activeResult);
    }
  },
  props: {
    deleteResult: Function,
    students: Array,
    toggleModal: Function,
    stations: Array,
    results: Array,
    resultName: String,
    onInputChange: Function,
    onResultSubmit: Function,
  },
}
</script>
