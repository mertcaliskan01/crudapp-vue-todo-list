<template>
  <div class="data-card">
    <div class="card-body chip-card-vertical">
      <img src="./../assets/avatar/avatar_01.png" alt="Person" />
      <strong>{{ currentUser.first_name }} {{ currentUser.last_name }}</strong>
      <p>Software Developer</p>
      <p>
        <strong>Email:</strong>
        {{ currentUser.email }}
      </p>
      <p>
        <strong>Token:</strong>
        {{ currentUser.token.substring(0, 10) }} ...
        {{ currentUser.token.substr(currentUser.token.length - 10) }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
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