<script lang="ts" setup>
import { useRoute } from 'vue-router/auto'

const route = useRoute()
</script>

<template>
  <header>
    <div class="wrapper">
      <mark>current page name is: {{ route.name }}</mark>
      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </div>
  </header>
  <router-view></router-view>
</template>
