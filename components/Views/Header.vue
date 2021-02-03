<template>
  <div class="navbar">
    <div class="navbar-item">
      <Logo />
    </div>
    <div class="navbar-item">
      <a href="#">Login</a>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Views/Logo.vue'

export default {
  name: 'Header',
  components: { Logo },
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  padding: 25px 40px 15px 40px;
  border-bottom-color: #29394a;
  border-bottom-style: solid;
  border-bottom-width: 3.5px;
}

.navbar-item {
  display: flex;
  font-weight: 500;
  color: #29394a;
}
</style>
