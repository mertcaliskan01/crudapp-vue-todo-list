<template>
  <div class="container-fluid">
    <div class="container py-3 fadeInDown">
      <div class="card bg-dark text-white" style="border-radius: 1rem">
        <div class="card-body p-3 text-center">
          <h3>
            <strong>Todo List</strong>
          </h3>
        </div>
      </div>
      <div class="card bg-dark mt-3 p-2">
        <div class="card-body">
          <div class="row text-center">
            <div class="col-sm-3 p-2">
              <router-link :to="'/newTask'" class="btn btn-success"
                >New Task</router-link
              >
            </div>
            <div class="col-sm-6 p-2">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  v-on:keyup.enter="searchTitle"
                  placeholder="Search by title"
                  v-model="title"
                />
                <div class="input-group-append">
                  <button
                    class="btn btn-success"
                    type="button"
                    @click="searchTitle"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
            <div class="col-sm-3 p-2">
              <button
                v-if="todoList.length"
                class="btn btn-danger"
                @click="removeAllTasks"
              >
                Remove All
              </button>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 p-4">
              <h4 class="text-white">List</h4>
              <ul class="list-group">
                <li
                  class="list-group-item"
                  :class="{ active: index == currentIndex }"
                  v-for="(todo, index) in todoList"
                  :key="index"
                  @click="setActiveTutorial(todo, index)"
                >
                  <div class="row">
                    <div class="col">
                      {{ todo.title }}
                    </div>
                    <div class="col-2">
                      <font-awesome-icon v-if="todo.completed" icon="check" class="fa-lg"/>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="col-md-6 p-4 text-white">
              <h4>Detail</h4>
              <div v-if="currentTask" class="p-4 custom-border">
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
                  {{ currentTask.completed ? "Completed" : "Not Completed" }}
                </div>

                <div class="d-flex justify-content-around">
                  <div>
                    <router-link
                      :to="'/editTask/' + currentTask.id"
                      class="btn btn-warning m-2"
                      >Edit</router-link
                    >
                  </div>
                  <button class="btn btn-danger m-2" @click="deleteTask">
                    Delete
                  </button>
                </div>
              </div>
              <div v-else>
                <br />
                <p>Please click on a Task...</p>
              </div>
            </div>
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

    deleteTask() {
      this.$store
        .dispatch("task/delete", this.currentTask.id)
        .then((response) => {
          console.log(response.data);
          this.retrieveTutorials();
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrieveTutorials();
  },
};
</script>
<style scoped>
.custom-border {
  border-style: solid;
  border-color: #c8d4e4;
  border-width: 2px;
}

.active {
  background-color: #555b66;
  border-color: #555b66;
  color: white;
}
</style>