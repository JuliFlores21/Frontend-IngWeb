<template>
  <div class="editar-estudiante-container">
    <h2 class="title">Editar Estudiante</h2>
    <form @submit.prevent="editarEstudiante" class="form">
      <div class="form-group">
        <label for="nombre">Nombre</label>
        <input id="nombre" v-model="estudiante.name" placeholder="Nombre" required class="input-field"/>
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input id="email" v-model="estudiante.email" placeholder="Email" required class="input-field"/>
      </div>

      <div class="form-group">
        <label for="edad">Edad</label>
        <input id="edad" v-model="estudiante.edad" type="number" placeholder="Edad" required class="input-field"/>
      </div>

      <button type="submit" class="btn-submit">Guardar Cambios</button>
    </form>

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
    async editarEstudiante() {
      await axios.put(`http://localhost:5096/api/estudiante/${this.estudiante.id}`, this.estudiante);
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
.editar-estudiante-container {
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

.form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

.label {
  margin-bottom: 5px;
  color: #555;
}

.input-field {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
}

.btn-submit {
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-submit:hover {
  background-color: #45a049;
}

.btn-back {
  display: block;
  text-align: center;
  margin-top: 20px;
  color: #007bff;
  text-decoration: none;
}

.btn-back:hover {
  text-decoration: underline;
}
</style>
