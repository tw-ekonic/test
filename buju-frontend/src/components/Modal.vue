<template>
  <div class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
    <div
        class="relative top-40 mx-auto p-5 border w-2/4 shadow-lg rounded-md bg-white"
    >
      <svg v-on:click="closeModal" xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 cursor-pointer text-red-600 absolute top-minus10 left-minus10" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
      </svg>
      <div class="px-5 py-8">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
          {{ label }}
        </label>
        <div class="flex flex-row">
          <input v-on:input="onChange" v-bind:value="modalObject.data.name" class="shadow appearance-none border rounded w-2/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" v-bind:placeholder="modalObject.placeholder">
          <div v-if="modalObject.endpoint === 'stations'" class="relative w-2/4">
            <select v-on:change="changeSelectedStationValue" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
              <option :selected="selectedStationValue === 'Sekunden'"> Sekunden </option>
              <option :selected="selectedStationValue === 'Meter'"> Meter </option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
          <button v-on:click="saveInput(modalObject.endpoint, modalObject.type)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Speichern
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

let inputVal = '';

export default {
  name: 'Modal.vue',
  props: {
    closeModal: Function,
    modalObject: Object,
    save: Function
  },
  data() {
    return {
      selectedStationValue: '',
    }
  },
  mounted() {
    inputVal = this.$props.modalObject.data.name;
    this.selectedStationValue = this.$props.modalObject.data.value;
  },
  methods: {
    onChange(e) {
      inputVal = e.target.value;
    },
    saveInput(endpoint, type) {
        if (endpoint === "stations") {
          console.log(this.selectedStationValue);
          this.$props.save(this.$props.modalObject.data.id, inputVal, endpoint, type, this.selectedStationValue);
        }
        else this.$props.save(this.$props.modalObject.data.id, inputVal, endpoint, type);
    },
    changeSelectedStationValue(e) {
      this.selectedStationValue = e.target.value;
    }
  }
}
</script>
