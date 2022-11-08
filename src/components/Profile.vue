<template>
  <div class="container-fluid fadeInDown">
    <div class="container py-5">
      <div class="card bg-dark text-white" style="border-radius: 1rem">
        <div class="card-body p-5 text-center">
          <div>
            <header>
              <h3>
                <strong>{{ currentUser.first_name }} {{ currentUser.last_name }}</strong>
              </h3>
            </header>
            <p class="mt-4">
              <strong>Email:</strong>
              {{ currentUser.email }}
            </p>
            <p class="mt-4">
              <strong>Token:</strong>
              {{ currentUser.token.substring(0, 10) }} ...
              {{ currentUser.token.substr(currentUser.token.length - 10) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push("/login");
    }
  },
};
</script>