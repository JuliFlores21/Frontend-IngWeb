import { createRouter, createWebHistory } from 'vue-router';
import EstudiantesList from '../components/EstudiantesList.vue';
import EstudianteDetails from '../components/EstudianteDetails.vue'; // Asegúrate de que el nombre sea correcto
import AgregarEstudiante from '../components/AgregarEstudiante.vue';
import EditarEstudiante from '../components/EditarEstudiante.vue';

const routes = [
  { path: '/', component: EstudiantesList, name: 'EstudiantesList' },
  { path: '/estudiante/:id', component: EstudianteDetails, name: 'EstudianteDetails' },
  { path: '/estudiante/editar/:id', component: EditarEstudiante, name: 'EditarEstudiante' },
  { path: '/agregar-estudiante', component: AgregarEstudiante, name: 'AgregarEstudiante' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
