import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from '@/views/MainView.vue';
import TeamView from '@/views/TeamView.vue';
import HistoryView from '@/views/HistoryView.vue';
import ScheduleView from '@/views/ScheduleView.vue';
import BoardView from '@/views/BoardView.vue';
import RegisterView from '@/views/RegisterView.vue';
import LoginView from '@/views/LoginView.vue';
import AdminView from '@/views/AdminView.vue';
import League from '@/views/admin/League.vue';
import Matches from '@/views/admin/Matches.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: MainView
  },
  {
    path: '/team',
    name: 'Team',
    component: TeamView
  },
  {
    path: '/history',
    name: 'History',
    component: HistoryView
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: ScheduleView
  },
  {
    path: '/board',
    name: 'Board',
    component: BoardView
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterView
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/admin',
    name: 'Admin',
    component: AdminView
  },
  {
    path: '/admin/league',
    name: 'AdminLeague',
    component: League
  },
  {
    path: '/admin/matches',
    name: 'AdminMatches',
    component: Matches
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
