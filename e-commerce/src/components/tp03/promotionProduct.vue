<template>
    <div class="flex justify-between items-center rounded-2xl p-6 w-full max-w-3xl mx-auto hover:scale-105 ease-in-out duration-300 cursor-pointer transition"
        :style="{ backgroundColor: bgpromotionColor }">
        <div>
            <h2 class="text-2xl font-semibold text-gray-800 mb-4 leading-tight">{{ productTitle }}</h2>
            <shopButton :style="{backgroundColor: bgbtn}" @click="$emit('shop-click')">{{ buttonText ?? 'Shop Now' }}</shopButton>
        </div>
        <img :src="productImage" alt="Promotion Product" class="w-40 h-40 object-contain"/>
    </div>
</template>

<script lang="ts">
import shopButton from './shopButton.vue';

export default{
    name: "PromotionProduct",
    components: { shopButton },
    props: { productImage: String,
             productTitle: String,
             buttonText: String,
             bgbtn: { type: String, default: "#24AD37"},
             bgpromotionColor: { type: String, default: "#F0E9D7"},
        },
    emits: ['shop-click'],
    methods: {
        handleShopClick() {
            this.$emit('shop-click');
        }
    }
};
</script>
