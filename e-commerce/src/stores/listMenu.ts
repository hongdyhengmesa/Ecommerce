// import { ref } from 'vue'
import { computed } from 'vue'

import axios from 'axios'

import { defineStore } from 'pinia'
// import { mapState } from 'pinia'

interface Category {
  id?: number
  name: string
  url: string
  productCount: number
  color: string
  image: string
  group: string
}
interface Promotion {
  id: number
  title: string
  color: string
  image: string
  url: string
  buttonText: string
  buttonColor: string
}

interface Product {
  id: number
  name: string
  rating: number
  size: string
  image: string
  price: string
  promotionAsPercentage: string
  categoryId: number
  instock: number
  countSold: number
  group: string
  isPopular?: boolean
  bgpromotionColor: string
}
export const userProductsStore = defineStore('products', {
  state: () => ({
    groups: [] as string[],
    promotions: [] as Promotion[],
    categories: [] as Category[],
    products: [] as Product[],
  }),
  getters: {
    getCategoriesByGroup: (state) => {
      return (groupName: string) =>
        state.categories.find((category) => category.group === groupName)
    },
    getProductsByGroup: (state) => {
      return (groupName: string) => state.products.filter((product) => product.group === groupName)
    },
    getProductsByCategory: (state) => {
      return (categoryId: number) => {
        // Add a check to ensure products exists and is an array
        // if (!state.products || !Array.isArray(state.products)) {
        //     return [];
        // }
        return state.products.filter((product) => product.categoryId === categoryId)
      }
    },
    getPopularProducts: (state) => {
      return (isPopular: boolean) => {
        return state.products
          .filter((product) => product.isPopular === isPopular)
          .slice()
          .sort((a, b) => b.countSold - a.countSold)
          .slice(0, 10)
      }
    },
  },
  actions: {
    async fetchAllData() {
      try {
        const [groupsResponse, promotionsResponse, categoriesResponse, productsResponse] =
          await Promise.all([
            axios.get('http://localhost:3000/api/groups'),
            axios.get('http://localhost:3000/api/promotions'),
            axios.get('http://localhost:3000/api/categories'),
            axios.get('http://localhost:3000/api/products'),
          ])

        this.groups = groupsResponse.data
        this.promotions = promotionsResponse.data
        this.categories = categoriesResponse.data
        this.products = productsResponse.data

        console.log('Store data loaded:', {
          groups: this.groups.length,
          promotions: this.promotions.length,
          categories: this.categories.length,
          products: this.products.length,
        })
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    },
  },
})

export const useListMenu = () => {
  const store = userProductsStore()
  return {
    categories: computed(() => store.categories),
    promotions: computed(() => store.promotions),
    products: computed(() => store.products),
    fetchAllData: store.fetchAllData,
  }
}
export const handleCategoryChange = (selectedItem: string) => {
  console.log('Selected category:', selectedItem)
}
