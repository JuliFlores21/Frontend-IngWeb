<template>
  <div class="detalles-estudiante-container">
    <h2 class="title">Detalles del Estudiante</h2>
    <div class="details-card">
      <p><strong>Nombre:</strong> {{ estudiante.name }}</p>
      <p><strong>Email:</strong> {{ estudiante.email }}</p>
      <p><strong>Edad:</strong> {{ estudiante.edad }}</p>
    </div>
    <router-link to="/" class="btn-back">Volver a la lista</router-link>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      estudiante: {},
    };
  },
  mounted() {
    this.obtenerEstudiante();
  },
  methods: {
    async obtenerEstudiante() {
      const id = this.$route.params.id;
      const response = await axios.get(`http://localhost:5096/api/estudiante/${id}`);
      this.estudiante = response.data;
    },
  },
};
</script>

<style scoped>
.detalles-estudiante-container {
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.title {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.details-card {
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.details-card p {
  font-size: 16px;
  margin: 10px 0;
  color: #555;
}

.btn-back {
  display: block;
  text-align: center;
  color: #007bff;
  text-decoration: none;
}

.btn-back:hover {
  text-decoration: underline;
}
</style>
