<!-- Please remove this file from your project -->
<template>
  <div class="row">
    <div class="sidebar col">
      <div class="chip">
        <img src="../assets/logo.png" alt="Person" />
        Superpeer
      </div>

      <div class="chip-card">
        <img src="../assets/avatar/avatar_01.png" alt="Person" />
        Jane Doe
      </div>

      <a class="active"><i class="fa fa-fw fa-phone"></i> Home</a>
      <a><i class="fa fa-fw fa-calendar"></i> Streams</a>
      <a><i class="fa fa-fw fa-play"></i> Series</a>
      <a><i class="fa fa-fw fa-user"></i> Subscriptions</a>
      <a><i class="fa fa-fw fa-newspaper-o"></i> Messages</a>

      <h5>ACCOUNT</h5>
      <a><i class="fa fa-fw fa-home"></i> Profile</a>
      <a><i class="fa fa-fw fa-home"></i> Availability</a>
      <a><i class="fa fa-fw fa-home"></i> Payout</a>
      <a><i class="fa fa-fw fa-home"></i> Calendar</a>
      <a><i class="fa fa-fw fa-home"></i> Notifications</a>
      <a><i class="fa fa-fw fa-home"></i> Discount codes</a>
      <a><i class="fa fa-fw fa-home"></i> Payment</a>
      <a><i class="fa fa-fw fa-home"></i> Settings</a>

      <h5>SUPPORTS</h5>
      <a class="#faq">FAQs</a>
      <a class="#new">What's New</a>
      <a class="#feedback">Give Feedback</a>
      <a class="#logout">Logout</a>
    </div>

    <div class="content col-md-10">
      <section class="page-contain">
        <div class="data-card">
          <h3>Todo Title</h3>
          <h4>Todo Description</h4>
          <p>Aenean lacinia bibendum nulla sed consectetur.</p>
          <span class="link-text">
            View All Providers
            <svg
              width="25"
              height="16"
              viewBox="0 0 25 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.8631 0.929124L24.2271 7.29308C24.6176 7.68361 24.6176 8.31677 24.2271 8.7073L17.8631 15.0713C17.4726 15.4618 16.8394 15.4618 16.4489 15.0713C16.0584 14.6807 16.0584 14.0476 16.4489 13.657L21.1058 9.00019H0.47998V7.00019H21.1058L16.4489 2.34334C16.0584 1.95281 16.0584 1.31965 16.4489 0.929124C16.8394 0.538599 17.4726 0.538599 17.8631 0.929124Z"
                fill="#753BBD"
              />
            </svg>
          </span>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "NuxtTutorial",
};
</script>
