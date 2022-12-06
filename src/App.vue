<template>
  <div id="app">
    <nav class=" navbar navbar-expand-lg navbar-dark bg-dark">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/home" class="nav-link">
              <font-awesome-icon icon="home" /> Home
            </router-link>
          </li>

          <li v-if="showTaskList" class="nav-item">
            <router-link to="/tasks" class="nav-link"
              ><font-awesome-icon icon="tasks" /> TodoList</router-link
            >
          </li>
        </ul>

        <div class="form-inline ">
          <div v-if="!currentUser" class="navbar-nav ">
            <li class="nav-item">
              <router-link to="/register" class="nav-link">
                <font-awesome-icon icon="user-plus" /> Sign Up
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/login" class="nav-link">
                <font-awesome-icon icon="sign-in-alt" /> Login
              </router-link>
            </li>
          </div>

          <div v-if="currentUser" class="navbar-nav ">
            <li class="nav-item">
              <router-link to="/profile" class="nav-link">
                <font-awesome-icon icon="user" />
                {{ currentUser.first_name }}
              </router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" type="button" @click.prevent="logOut">
                <font-awesome-icon icon="sign-out-alt" /> LogOut
              </a>
            </li>
          </div>
        </div>
        
      </div>
    </nav>

    <div >
      <router-view />
      <footer-section />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showTaskList() {
      if (this.currentUser && this.currentUser.token) {
        return true;
      }
      return false;
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/login");
    },
  },
  components: {
    "footer-section": require("./components/Footer.vue").default,
  },
};
</script>


<style lang="scss" scoped>

</style>
