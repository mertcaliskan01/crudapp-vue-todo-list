<template>
  <div class="container-fluid fadeInDown ">
    <div class="container py-5">
      <div class="card bg-dark text-white" style="border-radius: 1rem">
        <div class="card-body p-5 text-center">
          <h3>
            <strong>Edit Task</strong>
          </h3>
        </div>
      </div>

      <div class="card bg-dark text-white mt-5 p-5">
        <div class="card-body">
          <div v-if="currentTask" class="edit-form">
            <h4>Task</h4>
            <form>
              <div class="form-group">
                <label for="title">Title</label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  v-model="currentTask.title"
                />
              </div>
              <div class="form-group">
                <label for="description">Description</label>
                <input
                  type="text"
                  class="form-control"
                  id="description"
                  v-model="currentTask.description"
                />
              </div>

              <div class="form-group d-flex justify-content-around">

                <div class="form-check form-switch checkbox-xl">

                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                    v-model="currentTask.completed"
                  />
                  
                  <label
                    class="form-check-label ml-4"
                    for="flexSwitchCheckDefault"
                    >{{
                      currentTask.completed ? " Completed" : " Not Completed"
                    }}</label
                  >
                </div>
                
              </div>
            </form>

            <div class="d-flex justify-content-around">
              <button class="btn btn-danger m-2" @click="deleteTask">
                Delete
              </button>

              <button
                type="submit"
                class="btn btn-success m-2"
                @click="updateTask"
              >
                Update
              </button>
            </div>

            <h4 v v-if="success" class="text-success">{{ message }}</h4>
            <h4 v v-else class="text-danger">{{ message }}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "task",
  data() {
    return {
      success: false,
      currentTask: null,
      message: "",
    };
  },
  methods: {
    getTask(id) {
      this.$store
        .dispatch("task/get", id)
        .then((response) => {
          this.currentTask = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    updateCompleted() {
      this.currentTask.completed = !this.currentTask.completed;
    },

    updateTask() {
      this.$store
        .dispatch("task/update", this.currentTask)
        .then((response) => {
          console.log(response.data);
          this.success = true;
          this.message = "The task was updated successfully!";
        })
        .catch((e) => {
          this.success = false;
          this.message = "An error occurred please try again later";
          console.log(e);
        });
    },

    deleteTask() {
      this.$store
        .dispatch("task/delete", this.currentTask.id)
        .then((response) => {
          console.log(response.data);
          this.$router.push({ name: "tasks" });
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = "";
    this.getTask(this.$route.params.id);
  },
};
</script>
