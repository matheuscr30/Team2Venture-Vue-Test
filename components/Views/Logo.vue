<template>
  <div class="logo-container">
    <Round :from="0" :to="100" class="logo-circle" />
    <i class="material-icons logo-icon">south_east</i>
    <span class="logo-title">ACME</span>
  </div>
</template>

<script>
import Round from '~/components/Helpers/Round'

export default {
  name: 'Logo',
  components: { Round },
}
</script>

<style scoped>
.logo-container {
  display: flex;
  cursor: pointer;
  height: min-content;
}

.logo-title {
  font-weight: 600;
}

.logo-circle {
  margin-top: -11px;
}

.logo-icon {
  padding-top: 0.8px;
  margin-left: 7px;
  margin-right: -2px;
  font-size: 18px;
}
</style>
