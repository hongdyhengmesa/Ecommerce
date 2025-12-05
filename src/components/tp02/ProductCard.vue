<template>
  <div
    class="category-card group flex flex-col items-center border border-gray-200 shadow-md rounded-2xl overflow-hidden transform hover:scale-[1.02] hover:shadow-xl transition-all duration-300 cursor-pointer bg-white hover:bg-gray-50"
    :style="{ backgroundColor: color }"
    @click="handleCategoryClick"
  >
    <div class="w-full aspect-square p-4 flex items-center justify-center bg-white">
      <img
        :src="effectiveImageUrl"
        :alt="name"
        class="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
        @error="handleImageError"
      />
    </div>

    <div class="flex flex-col items-center justify-center p-4 text-center w-full bg-white bg-opacity-90">
      <h3 class="text-lg font-semibold text-gray-900 line-clamp-2">
        {{ name }}
      </h3>

      <p class="text-gray-600 font-medium text-sm mt-2">{{ formattedProductCount }} items</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CategoryComponent',
  props: {
    name: {
      type: String,
      required: true,
    },
    productCount: {
      type: [String, Number],
      required: true,
    },
    color: {
      type: String,
      default: '#FFFFFF',
    },
    image: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      imageError: false,
    }
  },
  computed: {
    effectiveImageUrl(): string {
      if (this.imageError || !this.image) {
        return 'https://via.placeholder.com/300x300?text=No+Image'
      }

      if (this.image.startsWith('http') || this.image.includes('placeholder')) {
        return this.image
      }

      // Handle relative paths - you might want to adjust this based on your setup
      return this.image
    },
    
    formattedProductCount(): string {
      const count = Number(this.productCount)
      return isNaN(count) ? '0' : count.toLocaleString()
    }
  },
  methods: {
    handleCategoryClick() {
      // You can replace this with actual navigation or emit an event
      alert(`You clicked on ${this.name} category with ${this.formattedProductCount} items!`)
    },

    handleImageError() {
      console.warn('Image failed to load:', this.image)
      this.imageError = true
    },
  },
})
</script>

<style scoped>
/* Add line-clamp utility if not already in your Tailwind config */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>