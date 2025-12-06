<template>
  <div
    class="promotion-card group flex flex-col md:flex-row justify-between items-center rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 gap-6 md:gap-8 border border-gray-200 min-h-[280px] overflow-hidden"
    :style="{ backgroundColor: color }"
  >
    <!-- Text Content -->
    <div class="w-full md:w-1/2 space-y-6 text-center md:text-left flex flex-col justify-center">
      <h2 class="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
        {{ title }}
      </h2>

      <button
        class="px-8 py-3.5 text-white rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg font-semibold w-fit mx-auto md:mx-0 flex items-center gap-2 group/btn"
        :style="{ backgroundColor: buttonColor }"
        @click="handleShopNow"
      >
        Shop Now 
        <i class="pi pi-arrow-right transition-transform duration-300 group-hover/btn:translate-x-1"></i>
      </button>
    </div>

    <!-- Promo Image -->
    <div class="w-full md:w-1/2 flex justify-center">
      <img
        :src="effectiveImageUrl"
        :alt="title"
        class="max-h-60 md:max-h-72 object-contain rounded-lg transition-transform duration-500 group-hover:scale-110"
        @error="handleImageError"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface ShopNowData {
  title: string
  url: string
  buttonColor: string
}

export default defineComponent({
  name: 'PromotionComponent',
  props: {
    title: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: '#FFFFFF'
    },
    image: {
      type: String,
      required: true
    },
    buttonColor: {
      type: String,
      default: '#42B678'
    },
    url: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      imageError: false
    }
  },
  computed: {
    effectiveImageUrl(): string {
      if (this.imageError || !this.image) {
        return 'https://via.placeholder.com/400x300/FFFFFF/374151?text=Promotion+Image'
      }

      if (this.image.startsWith('http') || this.image.includes('placeholder')) {
        return this.image
      }

      return this.image
    }
  },
  methods: {
    handleShopNow() {
      const shopNowData: ShopNowData = {
        title: this.title,
        url: this.url,
        buttonColor: this.buttonColor
      }
      this.$emit('shop-now', shopNowData)
    },

    handleImageError() {
      console.warn('Promotion image failed to load:', this.image)
      this.imageError = true
    }
  },
  emits: ['shop-now']
})
</script>