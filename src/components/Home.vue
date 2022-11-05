<template>
  <div class="container fadeIn">
    <header class="jumbotron">
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