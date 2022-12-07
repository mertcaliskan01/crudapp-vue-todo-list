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
          <h3>Login</h3>
          <p>Please enter your email and password!</p>
          <div>
            <Form @submit="handleLogin" :validation-schema="schema">
              <div class="form-group">
                <label for="email">Email</label>
                <Field name="email" type="text" class="form-control" />
                <ErrorMessage name="email" class="error-feedback text-danger" />
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <Field name="password" type="password" class="form-control" />
                <ErrorMessage
                  name="password"
                  class="error-feedback text-danger"
                />
              </div>

              <div class="form-group">
                <button class="btn btn-primary btn-block" :disabled="loading">
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

          <div>
            <p>
              <router-link :to="'/register'"
                >Don't have an account?</router-link
              >
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
  name: "Login",
  components: {
    Form,
    Field,
    ErrorMessage,
    "admin-section": require("../AdminInfo.vue").default,
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
      this.$router.push("/tasks");
    }
  },
  methods: {
    handleLogin(user) {
      this.loading = true;

      this.$store.dispatch("auth/login", user).then(
        () => {
          this.$router.push("/tasks");
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
