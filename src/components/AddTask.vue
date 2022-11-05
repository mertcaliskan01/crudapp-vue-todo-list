<template>
  <div class="submit-form card fadeIn mt-5 p-5">
    <div v-if="!submitted">
      <Form @submit="saveTask" :validation-schema="schema">
        <div class="form-group">
          <label for="title">New Task</label>
          <Field name="title" type="text" class="form-control" />
          <ErrorMessage name="title" class="error-feedback text-danger" />
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <Field name="description" type="password" class="form-control" />
          <ErrorMessage name="description" class="error-feedback text-danger" />
        </div>

        <div class="form-group">
          <button
            class="btn btn-primary btn-block justify-content-end"
            :disabled="loading"
          >
            <span
              v-show="loading"
              class="spinner-border spinner-border-sm"
            ></span>
            <span>Login</span>
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
      <h4>{{ successMessage }}</h4>

      <button class="btn btn-success" @click="newTask">New Task</button>
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
        (error) => {
          this.loading = false;
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
    },
    newTask() {
      this.submitted = false;
    },
  },
};
</script>


<style scoped>
</style>