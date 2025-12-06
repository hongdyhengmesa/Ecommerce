import { ref } from 'vue'
import axios from 'axios'


interface Promotion {
    id: number;
    title: string;
    color: string;
    image: string;
    url: string;
    buttonText: string;
    buttonColor: string;
}

export function usePromotions() {

  const promotions = ref<Promotion[]>([])

  const fetchPromotions = async () => {
    try {
      const response = await axios.get<Promotion[]>('http://localhost:3000/api/promotions')
      promotions.value = response.data
    } catch (error) {
      console.error('Error fetching promotions:', error)
    }
  }

  return {
    promotions,
    fetchPromotions,
  }
}
