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
                <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                <p class="text-white-50 mb-5">
                  Please enter your login and password!
                </p>
                <div>
                  <Form @submit="handleLogin" :validation-schema="schema">
                    <div class="form-group">
                      <label for="email">Email</label>
                      <Field name="email" type="text" class="form-control" />
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
                        <span>Login</span>
                      </button>
                    </div>

                    <div class="form-group">
                      <div
                        v-if="message"
                        class="alert alert-danger"
                        role="alert"
                      >
                        {{ message }}
                      </div>
                    </div>
                  </Form>
                </div>
              </div>

              <div>
                <p class="mb-0">
                  <router-link :to="'/register'" class="text-white-50 fw-bold"
                    >Don't have an account?</router-link
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
  name: "Login",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      email: yup.string().required("Email is required!"),
      password: yup.string().required("Password is required!"),
    });

    return {
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
  created() {
    if (this.loggedIn) {
      this.$router.push("/profile");
    }
  },
  methods: {
    handleLogin(user) {
      this.loading = true;

      this.$store.dispatch("auth/login", user).then(
        () => {
          this.$router.push("/profile");
        },
        () => {
          this.loading = false;
          this.message = "Your account or password is incorrect.";
        }
      );
    },
  },
};
</script>
