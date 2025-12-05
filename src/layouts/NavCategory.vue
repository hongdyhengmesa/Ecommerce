<template>
  <div class="w-full border-t border-b border-gray-200">
    <div class="flex items-center justify-between h-14">
      <div class="gap-8 flex items-center pl-12">
        <div>
          <ButtonDropdown
            Menu="All Categories"
            :ItemsInMenu="[
              { NameInMenu: 'Milks & Dairies', Link: '#' },
              { NameInMenu: 'Coffes & Teas', Link: '#' },
              { NameInMenu: 'Pet Foods', Link: '#' },
              { NameInMenu: 'Meats', Link: '#' },
              { NameInMenu: 'Vegetables', Link: '#' },
              { NameInMenu: 'Fruits', Link: '#' },
            ]"
            :Columns="[
              {
                title: 'Beverages',
                items: [
                  { name: 'Coffee & Tea', link: '#' },
                  { name: 'Fruit Juices', link: '#' },
                  { name: 'Soft Drinks', link: '#' },
                  { name: 'Water', link: '#' },
                ],
              },
              {
                title: 'Food',
                items: [
                  { name: 'Fresh Meat', link: '#' },
                  { name: 'Vegetables', link: '#' },
                  { name: 'Fruits', link: '#' },
                  { name: 'Milk & Cream', link: '#' },
                ],
              },
              {
                title: 'Health',
                items: [
                  { name: 'Vitamins', link: '#' },
                  { name: 'Supplements', link: '#' },
                  { name: 'Protein', link: '#' },
                  { name: 'Wellness', link: '#' },
                ],
              },
            ]"
          />
        </div>
        <div>
          <nav class="flex items-center gap-6 space-x-6 text-gray-700 font-medium">
            <a itemid="1" class="flex gap-1" href="#">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1579_722)">
                  <path
                    d="M13.6667 3.39331C12.6667 2.54581 11.6367 1.66664 10.5942 0.627476L10 0.0374756L9.41669 0.628309C7.54002 2.50998 6.65335 5.39914 6.26835 7.13247C5.97366 6.67573 5.75499 6.17422 5.62085 5.64747L5.26835 4.28664L4.24336 5.24998C2.44752 6.93581 1.25002 8.60831 1.25002 11.2866C1.23325 13.2185 1.86245 15.1006 3.0377 16.634C4.21294 18.1674 5.86684 19.2641 7.73669 19.75C8.30008 19.887 8.87511 19.9707 9.45419 20C9.63525 20.0229 9.81752 20.0348 10 20.0358C10.0959 20.0358 10.1892 20.0275 10.2825 20.0216C12.5526 19.9534 14.7068 19.0031 16.2877 17.3725C17.8687 15.7419 18.7519 13.5595 18.75 11.2883C18.75 7.70997 16.3942 5.70997 13.6667 3.39331ZM10.1667 18.355C10.0834 18.355 10 18.3633 9.91169 18.3625C9.16162 18.3396 8.44984 18.0259 7.92674 17.4879C7.40363 16.9499 7.11017 16.2296 7.10835 15.4791C7.10835 14.4225 7.67502 13.8958 8.95752 12.8041C9.28085 12.5291 9.63252 12.23 10.0025 11.8875C10.3267 12.1816 10.6417 12.4483 10.9325 12.6958C12.2209 13.7891 12.8934 14.41 12.8934 15.4766C12.892 16.2137 12.6088 16.9224 12.1019 17.4575C11.595 17.9927 10.9026 18.3137 10.1667 18.355ZM14.35 16.8791L14.3334 16.8908C14.4829 16.4352 14.5594 15.9587 14.56 15.4791C14.56 13.5916 13.3217 12.54 12.0117 11.4275C11.5475 11.0341 11.0684 10.6275 10.59 10.1491L10 9.55997L9.41085 10.1491C8.87085 10.6883 8.34252 11.1383 7.87669 11.535C6.57002 12.6466 5.44085 13.6075 5.44085 15.4791C5.44263 15.9793 5.5271 16.4757 5.69085 16.9483C4.8234 16.2822 4.12166 15.4246 3.64043 14.4425C3.1592 13.4604 2.9115 12.3803 2.91669 11.2866C2.90298 9.82432 3.46897 8.41608 4.49085 7.36997C4.66687 7.72708 4.87554 8.06714 5.11419 8.38581C5.28849 8.62101 5.52781 8.80007 5.80264 8.9009C6.07747 9.00175 6.3758 9.01996 6.66085 8.95331C6.95084 8.88875 7.2161 8.74203 7.42492 8.5307C7.63373 8.31938 7.77727 8.05238 7.83835 7.76164C8.18729 5.84635 8.94195 4.02787 10.0517 2.42831C10.9309 3.26164 11.8017 3.99914 12.5875 4.66664C15.1975 6.88331 17.0875 8.48497 17.0875 11.2916C17.0896 12.3705 16.8437 13.4354 16.3689 14.4042C15.8941 15.373 15.2031 16.2198 14.3492 16.8791H14.35Z"
                    fill="#3BB77E"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1579_722">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Hot Deals
            </a>
            <a itemid="2" href="">Home</a>
            <a itemid="3">
              <MenuDropDown
                Menu="Food"
                :ItemsInMenu="[
                  { NameInMenu: 'Shop Grid', Link: '#' },
                  { NameInMenu: 'Shop List', Link: '#' },
                  { NameInMenu: 'Product Details', Link: '#' },
                  { NameInMenu: 'Checkout', Link: '#' },
                ]"
                :Columns="[]"
              />
            </a>
            <a itemid="4">
              <MenuDropDown
                Menu="Vegetables"
                :ItemsInMenu="[
                  { NameInMenu: 'About Us', Link: '#' },
                  { NameInMenu: 'Contact Us', Link: '#' },
                  { NameInMenu: 'FAQs', Link: '#' },
                  { NameInMenu: 'Privacy Policy', Link: '#' },
                ]"
                :Columns="[]"
              />
            </a>
            <a itemid="5" href="">Drinks</a>
            <a itemid="6" href="">Cookies</a>
            <a itemid="7">
              <MenuDropDown
                Menu="Meat & Seafood"
                :ItemsInMenu="[
                  { NameInMenu: 'Blog Grid', Link: '#' },
                  { NameInMenu: 'Blog List', Link: '#' },
                  { NameInMenu: 'Blog Details', Link: '#' },
                ]"
                :Columns="[]"
              />
            </a>
            <a itemid="8" href="">Bakery</a>
          </nav>
        </div>
      </div>
      <div class="pr-12">
        <div class="flex items-center">
          <div class="flex items-center gap-2 space-x-3">
            <!-- Phone Icon -->
            <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M31.5 18.636V16.5C31.5 12.9196 30.0777 9.4858 27.5459 6.95406C25.0142 4.42232 21.5804 3 18 3C14.4196 3 10.9858 4.42232 8.45404 6.95406C5.9223 9.4858 4.49999 12.9196 4.49999 16.5V18.636C2.92673 19.3287 1.63919 20.5409 0.852919 22.0696C0.0666509 23.5983 -0.170622 25.3506 0.180823 27.0334C0.532268 28.7161 1.4511 30.227 2.78349 31.3132C4.11589 32.3994 5.78097 32.9949 7.49999 33H10.5V18H7.49999V16.5C7.49999 13.7152 8.60623 11.0445 10.5754 9.07538C12.5445 7.10625 15.2152 6 18 6C20.7848 6 23.4555 7.10625 25.4246 9.07538C27.3937 11.0445 28.5 13.7152 28.5 16.5V18H25.5V30H19.5V33H28.5C30.219 32.9949 31.8841 32.3994 33.2165 31.3132C34.5489 30.227 35.4677 28.7161 35.8191 27.0334C36.1706 25.3506 35.9333 23.5983 35.1471 22.0696C34.3608 20.5409 33.0732 19.3287 31.5 18.636ZM7.49999 30C6.30651 30 5.16192 29.5259 4.31801 28.682C3.47409 27.8381 2.99999 26.6935 2.99999 25.5C2.99999 24.3065 3.47409 23.1619 4.31801 22.318C5.16192 21.4741 6.30651 21 7.49999 21V30ZM28.5 30V21C29.6935 21 30.8381 21.4741 31.682 22.318C32.5259 23.1619 33 24.3065 33 25.5C33 26.6935 32.5259 27.8381 31.682 28.682C30.8381 29.5259 29.6935 30 28.5 30Z"
                  fill="#253D4E"
                />
              </svg>
            </div>

            <!-- Phone Number and Text -->
            <div class="flex flex-col">
              <span class="text-lg font-bold text-green-600 leading-tight">0 999 777 888</span>
              <span class="text-xs text-gray-500 leading-tight">24/7 Support Center</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import ButtonDropdown from '../components/buttonDropdown.vue'
import MenuDropDown from '../components/MenuDropDown.vue'
export default defineComponent({
  name: 'NavCategory',
  components: {
    ButtonDropdown,
    MenuDropDown,
  },
})
</script>
