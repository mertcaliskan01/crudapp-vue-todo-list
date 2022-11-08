<template>
  <div class="container-fluid fadeInDown">
    <div class="container py-5">
      <div class="card bg-dark text-white" style="border-radius: 1rem">
        <div class="card-body p-5 text-center">
          <h3>
                <strong>{{ content }}</strong>
              </h3>
        </div>
      </div>
    </div>
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