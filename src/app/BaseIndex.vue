<script setup lang="ts">
  import BaseHeader from '../shared/header/BaseHeader.vue'
  import BaseSidebar from '../shared/sidebar/BaseSidebar.vue'
</script>

<template>
  <BaseHeader />

  <div>
    <BaseSidebar />

    <RouterView />
  </div>
</template>

<style scoped></style>
