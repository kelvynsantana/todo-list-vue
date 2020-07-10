<template>
  <div class="container grid-lg">
    <header class="navbar">
      <section class="navbar-section">
        <router-link to="/" class="btn btn-link">List View</router-link>
        <router-link to="/kanbam" class="btn btn-link">Kanbam View</router-link>
      </section>
      <section class="navbar-center">
        <router-link to="/" class="btn btn-link">
          <img class="img-responsive logo" src="@/assets/logo.svg" alt="Logo" />
        </router-link>
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
body {
  height: 50px;
}
.logo {
  max-width: 150px;
}
</style>
