<template>
  <div class="w-60 bg-white rounded-2xl border shadow-sm p-4 hover:shadow-lg transition">
    <div class="relative flex justify-center mb-4">
      <div
        v-if="promotionNumber"
        class="absolute top-2 left-0 text-white text-xs font-semibold px-2 py-1 rounded-r-4xl"
        :style="{ backgroundColor: bgpromotion || '#FF6F61' }"
      >
        {{ promotionNumber }}
      </div>
      <img :src="poduectsaleImage" alt="" class="w-40 h-40 object-contain" />
    </div>
    <p class="text-xs text-gray-400 mb-1">{{ brand ?? 'Hodofoods' }}</p>
    <p class="text-sm font-semibold text-gray-800 leading-snug mb-2">{{ decriptionfood }}</p>
    <div class="flex items-center mb-2 space-x-1">
      <!-- full stars ⭐ -->
      <svg
        v-for="n in getStars(rating).full"
        :key="'full-' + n"
        class="w-4 h-4 text-yellow-400"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.286 3.974c.3.921-.755 1.688-1.54 1.118l-3.39-2.462a1 1 0 00-1.175 0l-3.39 2.462c-.784.57-1.838-.197-1.539-1.118l1.285-3.974a1 1 0 00-.364-1.118L2.34 9.401c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.951-.69l1.286-3.974z"
        />
      </svg>

      <!-- half star ⭐½ -->
      <svg
        v-if="getStars(rating).half"
        class="w-4 h-4 text-yellow-400"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <defs>
          <linearGradient id="halfGrad">
            <stop offset="50%" stop-color="currentColor" />
            <stop offset="50%" stop-color="#ddd" />
          </linearGradient>
        </defs>
        <path
          fill="url(#halfGrad)"
          d="M12 2l2.39 7.26h7.63l-6.18 4.49 2.39 7.26L12 16.52l-6.23 4.49 2.39-7.26-6.18-4.49h7.63z"
        />
      </svg>

      <!-- empty stars ☆ -->
      <svg
        v-for="n in getStars(rating).empty"
        :key="'empty-' + n"
        class="w-4 h-4 text-gray-300"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974..." />
      </svg>

      <!-- rating number -->
      <span class="text-sm text-gray-700 ml-1">{{ rating }}</span>
    </div>

    <div class="text-xs text-gray-500 mb-3">{{ weightProduct }}</div>
    <div class="w-full flex items-center justify-between">
      <div>
        <span class="text-lg font-bold text-green-600">${{ price }}</span>
        <span class="text-xs text-gray-400 line-through ml-2">${{ originalPrice }}</span>
      </div>
      <div>
        <div class="flex items-center border border-gray-300 rounded-lg">
          <button
            v-if="!isQtyVisible"
            @click="addFirstTimes"
            class="bg-green-100 text-green-600 px-4 py-1 rounded-lg text-sm font-medium hover:bg-green-200 transition"
          >
            Add +
          </button>

          <input
            v-else
            type="number"
            min="1"
            v-model.number="qty"
            @change="handleQtyChange"
            class="w-20 text-center border-x border-gray-300 focus:outline-none"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ProductSale',
  props: {
    poduectsaleImage: String,
    promotionNumber: [String, Number],
    brand: String,
    decriptionfood: String,
    weightProduct: String,
    price: String,
    originalPrice: String,
    bgpromotion: String,
  },
  data() {
    return {
      isQtyVisible: false,
      qty: 1,
    }
  },
  methods: {
    addFirstTimes() {
      this.isQtyVisible = true
      this.handleQtyChange()
    },
    handleQtyChange() {
      alert(`Quantity changed to: ${this.qty}`)
      this.$emit('qty-changed', this.qty)
    },
  },
  computed: {
    rating(): number {
      // For demonstration, returning a fixed rating. Replace with actual data as needed.
      return 4.5
    },
    getStars() {
      return (rating: number) => {
        const full = Math.floor(rating)
        const half = rating % 1 >= 0.5 ? 1 : 0
        const empty = 5 - full - half
        return { full: Array(full).fill(0), half, empty: Array(empty).fill(0) }
      }
    },
  },
}
</script>
