import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from '@/views/MainView.vue';
import ClubView from '@/views/ClubView.vue';
import IntroduceView from '@/views/IntroduceView.vue';
import AchievementView from '@/views/AchievementView.vue';
import HonorView from '@/views/HonorView.vue';
import ScheduleView from '@/views/ScheduleView.vue';
import BoardView from '@/views/BoardView.vue';
import MediaView from '@/views/MediaView.vue';
import RegisterView from '@/views/RegisterView.vue';
import LoginView from '@/views/LoginView.vue';
import AdminView from '@/views/AdminView.vue';
import League from '@/views/admin/League.vue';
import Matches from '@/views/admin/Matches.vue';
import Player from '@/views/admin/Player.vue';
import EditPlayer from '@/views/admin/PlayerEdit.vue'

Vue.use(VueRouter)

const routes = [  
  {
    path: '/club',
    name: 'Club',
    component: ClubView
  },
  {
    path: '/introduce',
    name: 'Introduce',
    component: IntroduceView
  },
  {
    path: '/achievement',
    name: 'Achievement',
    component: AchievementView
  },
  {
    path: '/honor',
    name: 'Honor',
    component: HonorView
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
    path: '/media',
    name: 'Media',
    component: MediaView
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
  {
    path: '/admin/player',
    name: 'AdminPlayer',
    component: Player
  },
  {
    path: '/admin/player/edit/:player',
    name: 'EditPlayer',
    component: EditPlayer
  },
  {
    path: '/',
    name: 'Main',
    component: MainView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
