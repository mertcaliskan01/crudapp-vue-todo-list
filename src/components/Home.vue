<template>
  <div class="container mt-5 p-5 fadeIn main-content">
    <header>
      <h3>{{ content }}</h3>
    </header>
  </div>
</template>

<script>

export default {
  name: "Home",
  data() {
    return {
      content: "Home Page",
    };
  },
  mounted() {
  },
};
</script>