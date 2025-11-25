<template>
  <div id="app" class="min-h-screen bg-gray-50 p-6 font-sans">
    <!-- Loading State -->
    <div v-if="loading" class="flex items-center justify-center min-h-screen">
      <div class="text-center">
        <p class="text-blue-500 text-lg animate-pulse mb-4">Loading data from backend...</p>
        <div
          class="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"
        ></div>
      </div>
    </div>

    <!-- Main Content -->
    <div v-else class="container mx-auto max-w-7xl">
      <!-- Promotions Section -->
      <section class="mb-16">
        <h2 class="text-4xl font-bold text-gray-800 mb-10 text-center">Special Promotions</h2>

        <div class="grid grid-cols-1 gap-8">
          <PromotionComponent
            v-for="promotion in promotions"
            :key="promotion.id"
            :title="promotion.title"
            :color="promotion.color"
            :image="promotion.image"
            :button-color="promotion.buttonColor"
            :url="promotion.url"
            @shop-now="shopNow"
          />
        </div>
      </section>

      <!-- Categories Section -->
      <section>
        <h2 class="text-4xl font-bold text-gray-800 mb-10 text-center">Product Categories</h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <CategoryComponent
            v-for="category in categories"
            :key="category.id"
            :name="category.name"
            :product-count="category.productCount"
            :color="category.color"
            :image="category.image"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'
import CategoryComponent from './components/ProductCard.vue'
import PromotionComponent from './components/PromotionProduct.vue'

interface Promotion {
  id: number
  title: string
  color: string
  image: string
  buttonColor: string
  url: string
}

interface Category {
  id: number
  name: string
  productCount: number
  color: string
  image: string
}

export default defineComponent({
  name: 'App',
  components: {
    CategoryComponent,
    PromotionComponent,
  },
  data() {
    return {
      categories: [] as Category[],
      promotions: [] as Promotion[],
      loading: false,
    }
  },
  methods: {
    shopNow(promotion: Promotion) {
      alert("Let's shop: " + promotion.title)
    },

    async fetchCategories() {
      try {
        const response = await axios.get('http://localhost:3000/api/categories')
        this.categories = response.data
      } catch (error) {
        console.error('Error fetching categories:', error)
        this.categories = this.getDefaultCategories()
      }
    },

    async fetchPromotions() {
      try {
        const response = await axios.get('http://localhost:3000/api/promotions')
        this.promotions = response.data
      } catch (error) {
        console.error('Error fetching promotions:', error)
        this.promotions = this.getDefaultPromotions()
      }
    },

    getDefaultCategories(): Category[] {
      return [
        {
          id: 1,
          name: 'Peach',
          productCount: 17,
          color: '#FEFBE8',
          image: '/src/img/card1.png',
        },
        {
          id: 2,
          name: 'Red Apple',
          productCount: 68,
          color: '#FFF0E9',
          image: '/src/img/card2.png',
        },
        {
          id: 3,
          name: 'Snack',
          productCount: 34,
          color: '#FEF4EB',
          image: '/src/img/card3.png',
        },
        {
          id: 4,
          name: 'Vegetables',
          productCount: 25,
          color: '#F0F8FF',
          image: '/src/img/card4.png',
        },
      ]
    },

    getDefaultPromotions(): Promotion[] {
      return [
        {
          id: 1,
          title: 'Everyday Fresh and Clean with Our Products',
          color: '#F0E9D7',
          image: '/src/img/big-card1.jpg',
          buttonColor: '#42B678',
          url: '/promotions/1',
        },
        {
          id: 2,
          title: 'Make your Breakfast Healthy and Easy',
          color: '#F2E8E9',
          image: '/src/img/big-card2.png',
          buttonColor: '#42B678',
          url: '/promotions/2',
        },
        {
          id: 3,
          title: 'The best Organic Products Online',
          color: '#E6EAF3',
          image: '/src/img/big-card3.jpg',
          buttonColor: '#FBC040',
          url: '/promotions/3',
        },
      ]
    },
  },
  async mounted() {
    this.loading = true
    try {
      await Promise.all([this.fetchCategories(), this.fetchPromotions()])
    } catch (error) {
      console.error('Error loading data:', error)
    } finally {
      this.loading = false
    }
  },
})
</script>