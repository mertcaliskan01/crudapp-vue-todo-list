import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
// lazy-loaded
const Profile = () => import("./components/Profile.vue")
const TaskList = () => import("./components/TaskList.vue")
const TaskAdd = () => import("./components/AddTask.vue")
const TaskEdit = () => import("./components/EditTask.vue")

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      title:"Home"
    },
  },
  {
    path: "/home",
    component: Home,
    meta: {
      title:"Home"
    },
  },
  {
    path: "/login",
    component: Login,
    meta: {
      title:"Sign In"
    },
  },
  {
    path: "/register",
    component: Register,
    meta: {
      title:"Sign Up"
    },
  },
  {
    path: "/profile",
    name: "profile",
    meta: {
      title:"Profile"
    },
    // lazy-loaded
    component: Profile,
  },
  {
    path: "/tasks",
    name: "tasks",
    meta: {
      title:"Todo List"
    },
    // lazy-loaded
    component: TaskList,
  },
  {
    path: "/newTask",
    name: "newTask",
    meta: {
      title:"New Todo"
    },
    // lazy-loaded
    component: TaskAdd,
  },
  {
    path: "/editTask/:id",
    name: "editTask",
    meta: {
      title:"Edit Todo"
    },
    // lazy-loaded
    component: TaskEdit,
  },
]; 

const router = createRouter({
  history: createWebHistory(),
  routes,
});

/* Page Title Changing*/
router.beforeEach((to,from,next) => {
  document.title = `${to.meta.title}`;
  next();
});

router.beforeEach((to, from, next) => {
    const publicPages = ['/login', '/register', '/home'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');
  
    // trying to access a restricted page + not logged in
    // redirect to login page
    if (authRequired && !loggedIn) {
      next('/login');
    } else {
      next();
    }
  });

export default router;