<template>
  <div class="container-fluid fadeInDown ">
    <div class="container py-5">
      <div class="card bg-dark text-white" style="border-radius: 1rem">
        <div class="card-body p-5 text-center">
          <h3>
            <strong>New Task</strong>
          </h3>
        </div>
      </div>

      <div class="card bg-dark text-white mt-5 p-5">
        <div class="card-body">
          <div v-if="!submitted">
            <Form @submit="saveTask" :validation-schema="schema">
              <div class="form-group">
                <label for="title">Title</label>
                <Field name="title" type="text" class="form-control" />
                <ErrorMessage name="title" class="error-feedback text-danger" />
              </div>
              <div class="form-group">
                <label for="description">Description</label>
                <Field name="description" type="text" class="form-control" />
                <ErrorMessage
                  name="description"
                  class="error-feedback text-danger"
                />
              </div>

              <div class="form-group mt-5">
                <button class="btn btn-success btn-block" :disabled="loading">
                  <span
                    v-show="loading"
                    class="spinner-border spinner-border-sm"
                  ></span>
                  <span>Add</span>
                </button>
              </div>

              <div class="form-group">
                <div v-if="message" class="alert alert-danger" role="alert">
                  {{ message }}
                </div>
              </div>
            </Form>
          </div>
          <div v-if="submitted">
            <h4 class="text-success">{{ successMessage }}</h4>

            <button class="btn btn-success" @click="newTask">New Task</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      title: yup.string().required("Title is required!"),
      description: yup.string().required("Description is required!"),
    });

    return {
      successMessage: "",
      submitted: false,
      loading: false,
      message: "",
      schema,
    };
  },
  methods: {
    saveTask(user) {
      this.loading = true;

      this.$store.dispatch("task/create", user).then(
        (response) => {
          this.successMessage =
            "You submitted successfully! " + response.data.title;
          this.submitted = true;
          this.loading = false;
        },
        () => {
          this.loading = false;
          this.message = "An error occurred please try again later";
        }
      );
    },
    newTask() {
      this.submitted = false;
    },
  },
};
</script>
