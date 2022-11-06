<template>
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-8 col-lg-6 col-xl-4">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          class="img-fluid"
          alt="Sample image"
        />
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1 wrapper fadeInDown">
        <div class="container py-5 h-100">
          <div class="card bg-dark text-white" style="border-radius: 1rem">
            <div class="card-body p-5 text-center">
              <div class="mb-md-5 mt-md-4 pb-5">
                <h2 class="fw-bold mb-2 text-uppercase mb-5">Sign Up</h2>
                <div>
                  <Form @submit="handleRegister" :validation-schema="schema">
                    <div v-if="!successful">
                      <div class="form-group">
                        <label for="first_name">Name</label>
                        <Field
                          name="first_name"
                          type="text"
                          class="form-control"
                        />
                        <ErrorMessage
                          name="first_name"
                          class="error-feedback text-danger"
                        />
                      </div>
                      <div class="form-group">
                        <label for="last_name">Surname</label>
                        <Field
                          name="last_name"
                          type="text"
                          class="form-control"
                        />
                        <ErrorMessage
                          name="last_name"
                          class="error-feedback text-danger"
                        />
                      </div>
                      <div class="form-group">
                        <label for="email">Email</label>
                        <Field name="email" type="email" class="form-control" />
                        <ErrorMessage
                          name="email"
                          class="error-feedback text-danger"
                        />
                      </div>
                      <div class="form-group">
                        <label for="password">Password</label>
                        <Field
                          name="password"
                          type="password"
                          class="form-control"
                        />
                        <ErrorMessage
                          name="password"
                          class="error-feedback text-danger"
                        />
                      </div>

                      <div class="form-group">
                        <button
                          class="btn btn-primary btn-block"
                          :disabled="loading"
                        >
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
              </div>
              <div>
                <p class="mb-0">
                  <router-link :to="'/login'" class="text-white-50 fw-bold"
                    >Already have an account?</router-link
                  >
                </p>
              </div>
            </div>
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
        (error) => {
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          this.successful = false;
          this.loading = false;
        }
      );
    },
  },
};
</script>
