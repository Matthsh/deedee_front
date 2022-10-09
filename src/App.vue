<script setup lang="ts">
    import { RouterView } from 'vue-router';
    import Navbar from './components/Navbar.vue';
    import { plugin, defaultConfig } from '@formkit/vue'
    import { generateClasses } from '@formkit/themes'
</script>

<template>
    <Navbar/> <!-- botei nav aqui pq ai ela já fica pra todas as páginas -->
    <RouterView/>
</template>

<style scoped>

</style>
