import { ref } from 'vue'
import axios from 'axios'

interface Category {
  id?: number
  name: string
  url: string
  productCount: number
  color: string
  image: string
  group: string
}


export function useCategories() {

  const categories = ref<Category[]>([])

  const fetchProducts = async () => {
    try {
      const response = await axios.get<Category[]>('http://localhost:3000/api/categories')
      categories.value = response.data
    } catch (error) {
      console.error('Error fetching products:', error)
    }
  }

  return {
    categories,
    fetchProducts,
  }
}
