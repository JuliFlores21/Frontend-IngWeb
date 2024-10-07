<template>
  <div class="estudiantes-list-container">
    <h1 class="title">Lista de Estudiantes</h1>
    <table class="styled-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Email</th>
          <th>Edad</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="estudiante in estudiantes" :key="estudiante.id">
          <td>{{ estudiante.id }}</td>
          <td>{{ estudiante.name }}</td>
          <td>{{ estudiante.email }}</td>
          <td>{{ estudiante.edad }}</td>
          <td class="action-buttons">
            <router-link :to="{ name: 'EstudianteDetails', params: { id: estudiante.id } }" class="btn-details">Ver</router-link>
            <router-link :to="{ name: 'EditarEstudiante', params: { id: estudiante.id } }" class="btn-edit">Editar</router-link>
            <button @click="eliminarEstudiante(estudiante.id)" class="btn-delete">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
    
    <h2 class="form-title">Agregar Estudiante</h2>
    <form @submit.prevent="agregarEstudiante" class="add-student-form">
      <input v-model="nuevoEstudiante.name" placeholder="Nombre" required />
      <input v-model="nuevoEstudiante.email" placeholder="Email" required />
      <input v-model="nuevoEstudiante.edad" type="number" placeholder="Edad" required />
      <button type="submit" class="btn-submit">Agregar</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      estudiantes: [],
      nuevoEstudiante: {
        name: '',
        email: '',
        edad: null,
      },
    };
  },
  mounted() {
    this.obtenerEstudiantes();
  },
  methods: {
    async obtenerEstudiantes() {
      const response = await axios.get('http://localhost:5096/api/estudiante');
      this.estudiantes = response.data;
    },
    async agregarEstudiante() {
      await axios.post('http://localhost:5096/api/estudiante', this.nuevoEstudiante);
      this.nuevoEstudiante = { name: '', email: '', edad: null };
      this.obtenerEstudiantes();
    },
    async eliminarEstudiante(id) {
      await axios.delete(`http://localhost:5096/api/estudiante/${id}`);
      this.obtenerEstudiantes();
    },
  },
};
</script>

<style scoped>
.estudiantes-list-container {
  max-width: 800px;
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

.styled-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

.styled-table th,
.styled-table td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.styled-table thead {
  background-color: #007bff;
  color: white;
}

.styled-table tbody tr:hover {
  background-color: #f1f1f1;
}

.action-buttons {
  display: flex;
  gap: 10px;
}

.btn-details, .btn-edit, .btn-delete {
  background-color: transparent;
  border: none;
  color: #007bff;
  cursor: pointer;
}

.btn-details:hover,
.btn-edit:hover,
.btn-delete:hover {
  text-decoration: underline;
}

.btn-delete {
  color: #dc3545;
}

.form-title {
  margin-bottom: 15px;
  color: #007bff;
  text-align: center;
}

.add-student-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 400px;
  margin: 0 auto;
}

.add-student-form input {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.btn-submit {
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn-submit:hover {
  background-color: #218838;
}
</style>
