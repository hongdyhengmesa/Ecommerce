<template>
  <div class="w-full h-14 shadow-sm flex items-center justify-between px-4 space-x-4 bg-white">
    <!-- Left slot -->
    <div class="text-gray-800 text-lg flex items-center space-x-2">
      <slot name="left">
        <!-- Default content if no left slot provided -->
        <component v-if="typeof NameMenu !== 'string'" :is="NameMenu" />
        <h2 v-else class="font-semibold">{{ NameMenu }}</h2>
      </slot>
    </div>

    <!-- Center slot -->
    <div class="flex justify-between space-x-4 gap-6 list-none">
      <slot name="right">
        <!-- Default content if no right slot provided -->
        <li
          v-for="item in items"
          :key="item"
          @click="handleItemClick(item)"
          :class="[
            'cursor-pointer transform-colors duration-200 py-2 px-1',
            activeItem === item
              ? 'font-bold border-b-2 border-green-600 text-green-600'
              : 'text-gray-600 hover:text-gray-900',
          ]"
        >
          {{ item }}
        </li>
      </slot>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'MenuBar',
  props: {
    NameMenu: {
      type: [String, Object],
      default: '',
    },
    items: {
      type: Array as () => string[],
      default: () => [],
    },
    activeColor: {
      type: String,
      default: '#24AD37',
    },
  },
  emits: ['item-selected'],
  setup(props, { emit }) {
    const activeItem = ref(props.items[0] || '')

    const handleItemClick = (item: string) => {
      activeItem.value = item
      emit('item-selected', item)
    }

    return {
      activeItem,
      handleItemClick,
    }
  },
})
</script>
