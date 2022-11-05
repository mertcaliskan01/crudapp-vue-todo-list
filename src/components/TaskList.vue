<template>
  <div class="card fadeIn">
    <div class="card-body">
      <h5 class="card-title">Todo List</h5>
      <div class="list row">
        <div class="col-md-1">
          <a href="#" class="btn btn-success">Add</a>
        </div>
        <div class="col-md-11">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Search by title"
              v-model="title"
            />
            <div class="input-group-append">
              <button
                class="btn btn-outline-success"
                type="button"
                @click="searchTitle"
              >
                Search
              </button>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <h4>List</h4>
          <ul class="list-group">
            <li
              class="list-group-item"
              :class="{ active: index == currentIndex }"
              v-for="(todo, index) in todoList"
              :key="index"
              @click="setActiveTutorial(todo, index)"
            >
              {{ todo.title }}
            </li>
          </ul>

          <button class="m-3 btn btn-sm btn-danger" @click="removeAllTasks">
            Remove All
          </button>
        </div>
        <div class="col-md-6">
          <h4>Detail</h4>
          <div v-if="currentTask">
            <h4>Task</h4>
            <div>
              <label><strong>Title:</strong></label> {{ currentTask.title }}
            </div>
            <div>
              <label><strong>Description:</strong></label>
              {{ currentTask.description }}
            </div>
            <div>
              <label><strong>Status:</strong></label>
              {{ currentTask.published ? "Completed" : "Pending" }}
            </div>

            <router-link
              :to="'/tasks/' + currentTask.id"
              class="badge badge-warning"
              >Edit</router-link
            >
          </div>
          <div v-else>
            <br />
            <p>Please click on a Tutorial...</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "tutorials-list",
  data() {
    return {
      todoList: [],
      currentTask: null,
      currentIndex: -1,
      title: "",
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

    refreshList() {
      this.retrieveTutorials();
      this.currentTask = null;
      this.currentIndex = -1;
    },

    setActiveTutorial(activeTask, index) {
      this.currentTask = activeTask;
      this.currentIndex = activeTask ? index : -1;
    },

    removeAllTasks() {
      this.$store.dispatch("task/deleteAll").then(
        () => {
          this.refreshList();
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

    searchTitle() {
      this.$store.dispatch("task/findByTitle", this.title).then(
        (response) => {
          this.todoList = response.data;
          this.setActiveTutorial(null);
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

