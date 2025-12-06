<script setup lang="ts">
import { onMounted } from 'vue'
import PromotionProduct from '../components/tp02/PromotionProduct.vue'
import ProductCard from '../components/tp02/ProductCard.vue'
import { handleCategoryChange, useListMenu } from '../stores/listMenu'
const { categories, promotions, products, fetchAllData } = useListMenu()

const API_BASE_URL = 'http://localhost:3000'
// const getImageUrl = (imagePath: string | undefined) => {
//   if (!imagePath) {
//     return 'https://via.placeholder.com/300x200?text=No+Image'
//   }

//   if (imagePath && imagePath.startsWith('http')) {
//     return imagePath
//   }
//   return `${API_BASE_URL}${imagePath.startsWith('/') ? '' : '/'}${imagePath}`
// }
const getImageUrl = (imagePath: string | undefined) => {
  if (!imagePath) {
    return 'https://via.placeholder.com/300x200?text=No+Image'
  }

  let cleanPath = imagePath
  if (typeof imagePath === 'string' && imagePath.startsWith('[')) {
    cleanPath = JSON.parse(imagePath)[0]
  }

  if (cleanPath.startsWith('http')) {
    return cleanPath
  }

  return `${API_BASE_URL}${cleanPath.startsWith('/') ? '' : '/'}${cleanPath}`
}
onMounted(async () => {
  await fetchAllData()
  console.log('Categories:', categories.value)
  console.log('Promotions:', promotions.value)
  console.log('Products:', products.value)
  console.log('Data fetching completed.')
})
</script>

<template>
  <div class="w-full min-h-screen pt-8 pb-8 pr-12 pl-12 rounded-2xl">
    <section class="relative bg-amber-200 py-20 rounded-2xl overflow-hidden">
      <div class="container mx-auto px-4 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Left Side - Content -->
          <div class="text-gray-700">
            <h1 class="text-6xl lg:text-5xl font-bold mb-4 leading-tight">
              Don't miss amazing<br />
              <span>grocery deals</span>
            </h1>

            <p class="text-lg text-gray-500 mb-8">Sign up for the daily newsletter</p>

            <!-- Newsletter Form -->
            <div class="max-w-md pt-6">
              <div class="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  class="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-[#FFB300] text-gray-900 placeholder-gray-500"
                />
                <button
                  class="px-6 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-[#FFC233] transition-colors duration-200 shadow-lg whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <!-- Right Side - Images -->
          <div class="relative">
            <!-- Main Image Container -->
            <div class="relative">
              <img
                src="https://via.placeholder.com/600x400?text=Fresh+Groceries"
                alt="Fresh Grocery Basket"
                class="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />

              
            </div>

            <!-- Small Floating Image -->
          </div>
        </div>
      </div>
      <div class="absolute -bottom-6 -left-6">
        <img
          src="https://via.placeholder.com/400x300?text=Background"
          alt="Fresh Vegetables"
          class="w-full h-full object-cover rounded-2xl shadow-lg"
        />
      </div>
    </section>

    <section class="w-full mx-auto p-6">
      <div class="pt-6 mb-4">
        <MenuBAR
          NameMenu="Featured Categories"
          :items="[
            'All',
            'Milks & Dairies',
            'Coffes & Teas',
            'Pet Foods',
            'Meats',
            'Vegetables',
            'Fruits',
          ]"
          activeItem="text-green-600"
          @item-selected="handleCategoryChange"
        />
      </div>
      <div>
        <div class="grid grid-cols-10 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-6 p-6">
          <ProductCard
            v-for="category in categories"
            :key="category.id || category.name"
            :name="category.name"
            :productCount="category.productCount"
            :color="category.color"
            :image="getImageUrl(category.image)"
          />
        </div>
      </div>
    </section>

    <section class="w-full mx-auto p-6">
      <div class="mt-6 flex justify-center items-center w-full">
        <div class="px-4 py-2 transition flex items-center justify-between gap-6">
          <PromotionProduct
            v-for="promotion in promotions"
            :key="promotion.id || promotion.title"
            :title="promotion.title"
            :image="getImageUrl(promotion.image)"
            :color="promotion.color"
            :buttonColor="promotion.buttonColor"
          />
        </div>
      </div>
    </section>

    <section class="w-full mx-auto p-6">
      <div class="mx-auto pt-6 mb-4">
        <MenuBAR
          NameMenu="Popular Products"
          :items="[
            'All',
            'Milks & Dairies',
            'Coffes & Teas',
            'Pet Foods',
            'Meats',
            'Vegetables',
            'Fruits',
          ]"
          activeItem="text-green-600"
          @item-selected="handleCategoryChange"
        />
        <div class="pt-6 grid grid-cols-5 gap-4">
          <ProductSale
            v-for="product in products"
            :key="product.id || product.name"
            :poduectsaleImage="getImageUrl(product.image)"
            :promotionNumber="product.rating"
            :decriptionfood="product.name"
            :rating="product.rating"
            :weightProduct="product.size"
            :price="product.price"
            :originalPrice="product.promotionAsPercentage"
            :bgpromotion="product.bgpromotionColor"
          />
        </div>
      </div>
    </section>
  </div>
</template>
