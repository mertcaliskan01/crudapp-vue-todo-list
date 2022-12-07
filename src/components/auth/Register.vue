<template>
  <div class="content">
    <div class="chip">
      <img src="../../assets/logo.png" alt="Person" />
      Mtcn
    </div>
    <div id="custom-flex" class="container">
      <admin-section />
      <div class="data-card">
        <div class="card-body">
          <h3>Sign Up</h3>
          <div>
            <Form @submit="handleRegister" :validation-schema="schema">
              <div v-if="!successful">
                <div class="form-group">
                  <label for="email">Email</label>
                  <Field name="email" type="email" class="form-control" />
                  <ErrorMessage
                    name="email"
                    class="error-feedback text-danger"
                  />
                </div>
                <div class="space-between">
                  <div class="form-group">
                    <label for="first_name">First Name</label>
                    <Field name="first_name" type="text" class="form-control" />
                    <ErrorMessage
                      name="first_name"
                      class="error-feedback text-danger"
                    />
                  </div>
                  <div class="form-group">
                    <label for="last_name">Last Name</label>
                    <Field name="last_name" type="text" class="form-control" />
                    <ErrorMessage
                      name="last_name"
                      class="error-feedback text-danger"
                    />
                  </div>
                </div>

                <div class="form-group">
                  <label for="password">Password</label>
                  <Field name="password" type="password" class="form-control" />
                  <ErrorMessage
                    name="password"
                    class="error-feedback text-danger"
                  />
                </div>

                <div class="form-group mt-2">
                  <button class="btn btn-primary btn-block" :disabled="loading">
                    <span
                      v-show="loading"
                      class="spinner-border spinner-border-sm"
                    ></span>
                    Sign Up
                  </button>
                </div>
              </div>
            </Form>

            <div
              v-if="message"
              class="alert"
              :class="successful ? 'alert-success' : 'alert-danger'"
            >
              {{ message }}
            </div>
          </div>
          <div>
            <p>
              <router-link :to="'/login'">Already have an account?</router-link>
            </p>
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
  name: "Register",
  components: {
    Form,
    Field,
    ErrorMessage,
    "admin-section": require("../AdminInfo.vue").default,
  },
  data() {
    const schema = yup.object().shape({
      first_name: yup
        .string()
        .required("Username is required!")
        .min(3, "Must be at least 3 characters!")
        .max(20, "Must be maximum 20 characters!"),
      last_name: yup
        .string()
        .required("Surname is required!")
        .min(3, "Must be at least 3 characters!")
        .max(20, "Must be maximum 20 characters!"),
      email: yup
        .string()
        .required("Email is required!")
        .email("Email is invalid!")
        .max(50, "Must be maximum 50 characters!"),
      password: yup
        .string()
        .required("Password is required!")
        .min(6, "Must be at least 6 characters!")
        .max(40, "Must be maximum 40 characters!"),
    });

    return {
      successful: false,
      loading: false,
      message: "",
      schema,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push("/profile");
    }
  },
  methods: {
    handleRegister(user) {
      this.message = "";
      this.successful = false;
      this.loading = true;

      this.$store.dispatch("auth/register", user).then(
        () => {
          this.message = "Success";
          this.successful = true;
          this.loading = false;
        },
        () => {
          this.loading = false;
          this.message = "An error occurred please try again later";
        }
      );
    },
  },
};
</script>
