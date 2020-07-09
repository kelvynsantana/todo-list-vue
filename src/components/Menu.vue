<template>
  <div class="container grid-lg">
    <header class="navbar">
      <section class="navbar-section">
        <router-link to="/" class="btn btn-link">Home</router-link>
        <router-link to="/kanbam" class="btn btn-link">Kanbam</router-link>
      </section>
      <section class="navbar-center">
        <img class="img-responsive logo" src="@/assets/logo.svg" alt="Logo" />
      </section>
      <section class="navbar-section">
        <a href="http://twitter.com/okelvynsantana" class="btn btn-link">Twitter</a>
        <a href="http://github.com/kelvynsantana" class="btn btn-link">Github</a>
      </section>
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.logo {
  max-width: 150px;
}
</style>
