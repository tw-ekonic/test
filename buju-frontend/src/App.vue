<template>
  <div class="w-10/12 m-auto my-20">
    <div class="flex justify-between flex-row flex-wrap">
      <StudentsTable class="w-5/12"
                     v-bind:on-input-change="onInputChange"
                     v-bind:delete-student="deleteStudent"
                     v-bind:students="students"
                     v-bind:on-submit="onSubmit"
                     v-bind:studentName="studentName"
                     v-bind:toggle-modal="openModal"
                     v-bind:on-search="onSearch"
      />
      <StationsTable class="w-5/12"
                     v-bind:on-input-change="onInputChange"
                     v-bind:delete-station="deleteStation"
                     v-bind:stations="stations"
                     v-bind:on-submit="onSubmit"
                     v-bind:stationName="stationName"
                     v-bind:toggle-modal="openModal"
                     v-bind:on-search="onSearch"
                     v-bind:selected-station-value="selectedStationValue"
                     v-bind:select-station-value="selectStationValue"
      />
    </div>
    <ResultsTable
                  v-bind:stations="stations"
                  v-bind:students="students"
                  v-bind:results="results"
                  v-bind:resultName="resultName"
                  v-bind:on-result-submit="onResultSubmit"
                  v-bind:on-input-change="onInputChange"
                  v-bind:delete-result="deleteResult"
    />
    <Modal
        v-if="showModal"
        v-bind:close-modal="closeModal"
        v-bind:modal-object="modalData"
        v-bind:save="patchValue"
    />
  </div>
</template>

<script>

import StationsTable from "@/components/StationsTable"
import StudentsTable from "@/components/StudentsTable";
import ResultsTable from "@/components/ResultsTable";
import Modal from "@/components/Modal";

const axios = require("axios");

export default {
  name: 'App',
  data() {
    return {
      stations: [],
      allStations: [],
      stationName: '',
      selectedStationValue: '',
      students: [],
      allStudents: [],
      studentName: '',
      results: [],
      resultName: '',
      showModal: false,
      modalData: {
        data: '',
        label: '',
        placeholder: '',
        endpoint: '',
        type: '',
      },
    }
  },
  mounted() {
    axios.get("http://localhost:3000/users")
        .then((students) => {
          this.students = students.data.users;
          this.allStudents = this.students;
        })
        .catch((e) => console.log(e));
    axios.get("http://localhost:3000/stations")
        .then((stations) => {
          this.stations = stations.data.stations;
          this.allStations = this.stations;
        })
        .catch((e) => console.log(e));
    axios.get("http://localhost:3000/scores")
        .then((results) => {
          this.results = results.data.scores;
          console.log(this.results);
        })
        .catch((e) => console.log(e));
  },
  methods: {
    onInputChange(e, value) {
      this[value] = e.target.value;
    },
    onSubmit(endpoint, name, type) {
      if (endpoint === "stations" && this[name].length) {
        axios.post(`http://localhost:3000/${endpoint}`, {
          name: this[name],
          value: this.selectedStationValue,
        })
            .then(() => {
              this[name] = '';
              axios.get(`http://localhost:3000/${ endpoint }`)
                  .then((data) => this[type] = data.data[endpoint]);
            })
      }
      else if (this[name].length) {
        axios.post(`http://localhost:3000/${endpoint}`, {
          name: this[name],
        })
            .then(() => {
              this[name] = '';
              axios.get(`http://localhost:3000/${ endpoint }`)
                  .then((data) => this[type] = data.data[endpoint]);
            })
      }
    },
    selectStationValue(e) {
      this.selectedStationValue = e.target.value;
    },
    onResultSubmit(result) {
      axios.post(`http://localhost:3000/scores`, {
        user_id: result.student,
        station_id: result.station,
        score: result.result,
      }).then(() => {
        axios.get("http://localhost:3000/scores")
            .then((results) => {
              this.results = results.data.scores;
            })
            .catch((e) => console.log(e));
      })
    },
    deleteResult(id) {
      axios.delete(`http://localhost:3000/scores/${id}`)
          .then((results) => {
            this.results = results.data.scores;
            console.log(this.results);
          })
          .catch((e) => console.log(e));
    },
    deleteStation(id) {
      axios.delete(`http://localhost:3000/stations/${id}`)
          .then((data) => this.stations = data.data.stations);
    },
    deleteStudent(id) {
      axios.delete(`http://localhost:3000/users/${id}`)
          .then((data) => this.students = data.data.users);
    },
    openModal(data, label, placeholder, endpoint, type) {
      this.modalData = {
        data,
        label,
        placeholder,
        endpoint,
        type
      }
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    patchValue(id, newValue, endpoint, type, selectedStationValue) {
      if (newValue.length && endpoint === "stations") {
        axios.patch(`http://localhost:3000/${endpoint}/${id}`, {
          name: newValue,
          value: selectedStationValue
        }).then((data) => this[type] = data.data[endpoint])
      }
      else if (newValue.length) {
        axios.patch(`http://localhost:3000/${endpoint}/${id}`, {
          name: newValue,
        }).then((data) => this[type] = data.data[endpoint])
      }
      this.closeModal();
    },
    onSearch(type, allType, e) {
      this[type] = this[allType].filter((data) => data.name.toUpperCase().includes(e.target.value.toUpperCase()));
    }
  },
  components: {
    StationsTable,
    StudentsTable,
    ResultsTable,
    Modal
  }
}
</script>

<style>
#app {
  font-family: "Montserrat";
}
</style>
