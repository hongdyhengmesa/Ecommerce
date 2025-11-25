<!-- src/views/Home.vue -->
<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-gray-800 mb-8">Our Products</h1>

    <!-- Promotions Section -->
    <div class="mb-12" v-if="promotions.length > 0">
      <h2 class="text-2xl font-semibold text-gray-700 mb-6">Special Offers</h2>
      <div class="grid grid-cols-1 gap-6">
        <ProductPromotion
          v-for="promotion in promotions"
          :key="promotion.id"
          :title="promotion.title"
          :image="promotion.image"
          :color="promotion.color"
          :button-color="promotion.buttonColor"
          :url="promotion.url"
        />
      </div>
    </div>

    <!-- Categories Section -->
    <div v-if="categories.length > 0">
      <h2 class="text-2xl font-semibold text-gray-700 mb-6">Categories</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <ProductCard
          v-for="category in categories"
          :key="category.id"
          :name="category.name"
          :image="category.image"
          :product-count="category.productCount"
          :color="category.color"
        />
      </div>
    </div>

    <!-- Empty State -->
    <div v-if="categories.length === 0 && promotions.length === 0" class="text-center py-12">
      <p class="text-gray-500 text-lg">No data available</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import ProductCard from '../components/ProductCard.vue'
import ProductPromotion from '../components/PromotionProduct.vue'

interface Category {
  id: number
  name: string
  image: string
  productCount: number
  color?: string
}

interface Promotion {
  id: number
  title: string
  image: string
  color?: string
  buttonColor?: string
  url?: string
}

export default defineComponent({
  name: 'HomePage',
  components: {
    ProductCard,
    ProductPromotion,
  },
  props: {
    categories: {
      type: Array as PropType<Category[]>,
      default: () => [],
    },
    promotions: {
      type: Array as PropType<Promotion[]>,
      default: () => [],
    },
  },
})
</script>
