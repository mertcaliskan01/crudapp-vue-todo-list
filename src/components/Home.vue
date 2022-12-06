<!-- Please remove this file from your project -->
<template>
  <div class="gradient-custom">
    <div class="sidebar">
      <div class="chip">
        <img src="../assets/logo.png" alt="Person" />
        Superpeer
      </div>

      <div class="chip-card">
        <img src="../assets/avatar/avatar_01.png" alt="Person" />
        Jane Doe
      </div>

      <a class="active" href="/"><i class="fa fa-fw fa-phone"></i> Home</a>
      <a href="/"><i class="fa fa-fw fa-calendar"></i> Streams</a>
      <a href="/"><i class="fa fa-fw fa-play"></i> Series</a>
      <a href="/"><i class="fa fa-fw fa-user"></i> Subscriptions</a>
      <a href="/"><i class="fa fa-fw fa-newspaper-o"></i> Messages</a>

      <h5>ACCOUNT</h5>
      <a href="/"><i class="fa fa-fw fa-home"></i> Profile</a>
      <a href="/"><i class="fa fa-fw fa-home"></i> Availability</a>
      <a href="/"><i class="fa fa-fw fa-home"></i> Payout</a>
      <a href="/"><i class="fa fa-fw fa-home"></i> Calendar</a>
      <a href="/"><i class="fa fa-fw fa-home"></i> Notifications</a>
      <a href="/"><i class="fa fa-fw fa-home"></i> Discount codes</a>
      <a href="/"><i class="fa fa-fw fa-home"></i> Payment</a>
      <a href="/"><i class="fa fa-fw fa-home"></i> Settings</a>

      <h5>SUPPORT</h5>
      <a href="/"><i class="fa fa-fw fa-home"></i> FAQs</a>
      <a href="/"><i class="fa fa-fw fa-home"></i> What's New</a>
      <a href="/"><i class="fa fa-fw fa-home"></i> Give Feedback</a>
      <a href="/"><i class="fa fa-fw fa-home"></i> Logout</a>
    </div>

    <div class="content">
      <div class="container">
        <h3>{{ this.title }}</h3>

        <section
          class="page-contain"
          v-for="(todo, index) in todoList"
          :key="index"
        >
          <div class="data-card">
            <router-link
              :to="'/editTask/' + todo.id"
              class="btn-right fa fa-bars"
            ></router-link>

            <h3>{{ todo.title }}</h3>
            <h4>{{ todo.description }}</h4>
            <p v-if="todo.completed">Completed</p>
            <p v-else>Not Completed</p>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      todoList: [],
      title: "Todo List"
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
  mounted() {
    this.retrieveTutorials();
  },
};
</script>

