<template>
  <div class="container mt-5 p-5 fadeIn main-content">
    <header >
      <h3>
        <strong>Welcome {{currentUser.first_name}}</strong>
      </h3>
    </header>
    <p>
      <strong>Name:</strong>
      {{currentUser.first_name}} {{currentUser.last_name}}
    </p>
    <p>
      <strong>Email:</strong>
      {{currentUser.email}}
    </p>
    <p>
      <strong>Token:</strong>
      {{currentUser.token.substring(0, 10)}} ... {{currentUser.token.substr(currentUser.token.length - 10)}}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }
  }
};
</script>