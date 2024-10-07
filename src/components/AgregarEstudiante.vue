<template>
    <div>
      <h2>Agregar Estudiante</h2>
      <form @submit.prevent="agregarEstudiante">
        <input v-model="nuevoEstudiante.name" placeholder="Nombre" required />
        <input v-model="nuevoEstudiante.email" placeholder="Email" required />
        <input v-model="nuevoEstudiante.edad" type="number" placeholder="Edad" required />
        <button type="submit">Agregar Estudiante</button>
      </form>
      <router-link to="/">Volver a la lista</router-link>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        nuevoEstudiante: {
          name: '',
          email: '',
          edad: null,
        },
      };
    },
    methods: {
      async agregarEstudiante() {
        await axios.post('http://localhost:5096/api/estudiante', this.nuevoEstudiante);
        this.$router.push('/');
      },
    },
  };
  </script>
  