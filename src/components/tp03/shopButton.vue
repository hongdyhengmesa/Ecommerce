<template>
    <button class="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition flex items-center gap-2">
        <slot></slot>
    </button>
</template>


<script lang="ts">
export default {
  name: "shopButton",
};
</script>
