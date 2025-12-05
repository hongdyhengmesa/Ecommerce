<script setup lang="ts">
import ShopButton from '../components/shopButton.vue';
</script>
<template>
    <ShopButton @click="$emit('click')">
        <slot>Shop Now</slot>
    </ShopButton>
</template>
