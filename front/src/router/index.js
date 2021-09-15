import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from '@/views/MainView.vue';
import TeamView from '@/views/TeamView.vue';
import HistoryView from '@/views/HistoryView.vue';
import ScheduleView from '@/views/ScheduleView.vue';
import BoardView from '@/views/BoardView.vue';

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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
