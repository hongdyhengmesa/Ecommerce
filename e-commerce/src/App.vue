<script setup lang="ts">
import { RouterView } from 'vue-router'
import FooterPages from './layouts/FooterPages.vue'
import HeaderPages from './layouts/HeaderPages.vue'
import NavCategory from './layouts/NavCategory.vue'
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// @ = src

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite()
})
</script>

<template>
  <div>
    <HeaderPages />
    <NavCategory />
    <br>


    <main class="flex justify-center items-center">
      <RouterView />
    </main>
    <br>
    <FooterPages />
  </div>
</template>
