<!-- Please remove this file from your project -->
<template>
  <div class="custom-background">
    <div class="sidebar">
      <div class="chip">
        <img src="../assets/logo.png" alt="Person" />
        Mtcn
      </div>

      <div class="chip-card">
        <img src="../assets/avatar/avatar_01.png" alt="Person" />
        <div v-if="currentUser">
          {{ currentUser.first_name }} {{ currentUser.last_name }}
        </div>
      </div>

      <a class="active" href="/"><i class="bi bi-telephone"></i> Calls</a>
      <a href="/"><i class="bi bi-calendar-heart"></i> Streams</a>
      <a href="/"><i class="bi bi-collection-play"></i> Series</a>
      <a href="/"><i class="bi bi-people"></i> Subscriptions</a>
      <a href="/"><i class="bi bi-chat-left-text"></i> Messages</a>

      <h5>ACCOUNT</h5>
      <a href="/"><i class="bi bi-person"></i> Profile</a>
      <a href="/"><i class="bi bi-card-checklist"></i> Availability</a>
      <a href="/"><i class="bi bi-wallet"></i> Payout</a>
      <a href="/"><i class="bi bi-calendar"></i> Calendar</a>
      <a href="/"><i class="bi bi-bell"></i> Notifications</a>
      <a href="/"><i class="bi bi-ticket"></i> Discount codes</a>
      <a href="/"><i class="bi bi-credit-card"></i> Payment</a>
      <a href="/"><i class="bi bi-gear"></i> Settings</a>

      <h5>SUPPORT</h5>
      <a href="/"><i class="bi bi-patch-que"></i> FAQs</a>
      <a href="/"><i class="bi bi-gift"></i> What's New</a>
      <a href="/"><i class="bi bi-envelope-paper"></i> Give Feedback</a>
      <a href="/"><i class="bi bi-box-arrow-right"></i> Logout</a>
    </div>

    <div class="sidebar-content">
      <div class="container">
        <div class="data-card-header">
          <h3>{{ this.title }}</h3>
          <div class="top-header">
            <h4 class="active">Bookings</h4>
            <h4>Services</h4>
          </div>
          <div class="header">
            <h5>New</h5>
            <h5 class="active">Upcoming {{ todoList.length }}</h5>
            <h5>Post</h5>
          </div>
        </div>

        <div
          class="page-contain"
          v-for="(todo, index) in todoList"
          :key="index"
        >
          <div class="data-card">
            <div id="custom-flex" class="header">
              <h3><i class="bi bi-calendarr"></i>Thu, 28 Jul, 2022</h3>
              <h3><i class="bi bi-calendar"></i>10:15AM - 10:30AM</h3>
              <h3><i class="bi bi-calendar"></i>$20</h3>
              <div>
                <router-link :to="'/editTask/' + todo.id"
                  ><i class="bi bi-three-dots"></i
                ></router-link>
              </div>
            </div>

            <p>{{ todo.title }} - Quick chat (15 min)</p>
            <p class="low-opacity">What would you like the call to be about?</p>
            <p class="medium-opacity">{{ todo.description }}</p>
            <p v-if="todo.completed">Completed</p>
            <p v-else>Not Completed</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      todoList: [],
      title: "1:1 Calls",
    };
  },
  methods: {
    retrieveTutorials() {
      this.$store.dispatch("task/getAll").then(
        (response) => {
          this.todoList = response.data;
        },
        (error) => {
          this.content =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
    },
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  mounted() {
    this.retrieveTutorials();
  },
};
</script>

