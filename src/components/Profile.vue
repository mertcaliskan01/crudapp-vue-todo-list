<template>
  <div class="content">
    <div class="chip">
      <img src="../assets/logo.png" alt="Person" />
      Mtcn
    </div>

    <div id="custom-flex" class="container">
      <user-section />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    "user-section": require("./User.vue").default,
  },
};
</script>