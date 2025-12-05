<template>
  <div class="relative">
    <button
      :id="`mega-menu-${Menu.toLowerCase().replace(/\s+/g, '-')}-button`"
      @click="toggleDropdown"
      class="flex items-center justify-between bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200"
    >
      <span class="flex items-center">
        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        {{ Menu }}
      </span>
      <svg
        class="w-4 h-4 ms-1.5 transition-transform duration-200"
        :class="{ 'rotate-180': isDropdownOpen }"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m19 9-7 7-7-7"
        />
      </svg>
    </button>

    <div
      v-if="isDropdownOpen"
      :id="`mega-menu-${Menu.toLowerCase().replace(/\s+/g, '-')}-dropdown`"
      class="absolute top-full bg-gray-200 left-0 z-10 grid w-sm grid-cols-2 text-sm bg-neutral-primary-soft rounded-xl shadow-2xs shadow-gray-50 md:grid-cols-3"
    >
      <div class="p-4 pb-0 text-heading md:pb-4 border-light">
        <ul
          class="space-y-3 font-normal"
          :aria-labelledby="`mega-menu-${Menu.toLowerCase().replace(/\s+/g, '-')}-button`"
        >
          <li v-for="item in ItemsInMenu" :key="item.NameInMenu">
            <a
              :href="item.Link"
              @click="handleItemClick(item)"
              class="inline-flex items-center text-body hover:text-fg-brand transition-colors duration-200"
            >
              <span v-if="item.icon" class="w-4 h-4 me-1.5" v-html="item.icon"></span>
              {{ item.NameInMenu }}
            </a>
          </li>
        </ul>
      </div>

      <div
        v-for="(column, columnIndex) in displayColumns"
        :key="columnIndex"
        class="p-4 pb-0 md:pb-4 border-light last:border-r-0"
      >
        <h4
          v-if="column.title"
          class="font-semibold text-heading mb-3 text-xs uppercase tracking-wide"
        >
          {{ column.title }}
        </h4>
        <ul class="space-y-3 font-normal">
          <li v-for="item in column.items" :key="item.name">
            <a
              :href="item.link"
              @click="handleItemClick(item)"
              class="inline-flex items-center text-body hover:text-fg-brand transition-colors duration-200"
            >
              <svg
                v-if="item.icon"
                class="w-4 h-4 me-1.5"
                aria-hidden="true"
                fill="none"
                viewBox="0 0 24 24"
              >
                <g v-html="item.icon"></g>
              </svg>
              {{ item.name }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, onBeforeUnmount } from 'vue'

interface MenuItem {
  NameInMenu: string
  Link: string
  icon?: string
}

interface ColumnItem {
  name: string
  link: string
  icon?: string
}

interface Column {
  title?: string
  items: ColumnItem[]
}

export default defineComponent({
  name: 'MenuDropDown',
  props: {
    Menu: {
      type: String,
      required: true,
    },
    ItemsInMenu: {
      type: Array as () => MenuItem[],
      required: true,
    },
    Columns: {
      type: Array as () => Column[],
      required: true,
    },
  },
  setup(props) {
    const isDropdownOpen = ref(false)

    const toggleDropdown = (event: MouseEvent) => {
      event.stopPropagation() // Prevent the click from immediately closing the dropdown
      isDropdownOpen.value = !isDropdownOpen.value
    }

    const handleItemClick = (item: MenuItem | ColumnItem) => {
      isDropdownOpen.value = false
      console.log('Item clicked:', item)
    }

    const displayColumns = computed(() => {
      return props.Columns
    })

    const handleClickOutside = (event: MouseEvent) => {
      const dropdownButton = document.getElementById(
        `mega-menu-${props.Menu.toLowerCase().replace(/\s+/g, '-')}-button`,
      )
      const dropdownMenu = document.getElementById(
        `mega-menu-${props.Menu.toLowerCase().replace(/\s+/g, '-')}-dropdown`,
      )

      // Check if click is outside both button and dropdown
      if (
        dropdownButton &&
        !dropdownButton.contains(event.target as Node) &&
        dropdownMenu &&
        !dropdownMenu.contains(event.target as Node)
      ) {
        isDropdownOpen.value = false
      }
    }

    onMounted(() => {
      document.addEventListener('click', handleClickOutside)
    })

    onBeforeUnmount(() => {
      document.removeEventListener('click', handleClickOutside)
    })

    return {
      isDropdownOpen,
      toggleDropdown,
      handleItemClick,
      displayColumns,
    }
  },
})
</script>

<style scoped>
.rotate-180 {
  transform: rotate(180deg);
}
</style>
