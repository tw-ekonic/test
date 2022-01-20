<template>
  <div>
    <h1 class=" text-3xl mb-10">Schülerliste</h1>
    <div>
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Schüler hinzufügen
      </label>
      <div class="flex flex-row">
        <input @keyup.enter="onSubmit('users', 'studentName', 'students')" v-on:input="onInputChange($event, 'studentName')" v-bind:value="studentName" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Name des Schülers">
        <button v-on:click="onSubmit('users', 'studentName', 'students')" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          Speichern
        </button>
      </div>
    </div>
    <div>
      <ul class="py-16">
        <SearchBar
            all-type="allStudents"
            search-type="students"
            v-bind:on-search="onSearch"
        />
        <li class="w-full p-4 pr-8 pl-8 flex items-center justify-between border-b border-gray-300" v-bind:key="student.id" v-for="student in students">
          <div>
            {{ student.name }}
          </div>
          <div class="flex">
            <svg v-on:click="toggleModal(student, 'Schüler bearbeiten', 'Name des Schülers', 'users', 'students')" xmlns="http://www.w3.org/2000/svg" class="h-5 mr-4 w-5 cursor-pointer hover:text-green-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
            <svg v-on:click="deleteStudent(student.id)" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 cursor-pointer hover:text-red-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
  name: 'StudentsTable.vue',
  props: {
      students: Array,
      studentName: String,
      onInputChange: Function,
      onSubmit: Function,
      deleteStudent: Function,
      toggleModal: Function,
      onSearch: Function,
  },
  components: {
    SearchBar
  }
}
</script>
