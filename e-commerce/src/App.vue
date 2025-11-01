<template>

    <div class="card-design">

      <div class="tamplate-card">
        <div v-for="(product, index) in products" :key="index">
            <SmallCard  :title="product.title" :desc="product.desc" :image="product.image" :bgcolor="product.bgcolor"/>
        </div>
      </div>

    <div class="big-template">
      <div v-for="(bigproduct,index) in bigproducts" :key="index">
        <BigCard :titlebig="bigproduct.titlebig" :button="bigproduct.button" :bigcolor="bigproduct.bigcolor" :bigimg="bigproduct.bigimg" :btncolor="bigproduct.btncolor"/>
      </div>
    </div>

    </div>

</template>

<script lang="ts">
import { reactive } from 'vue';
import SmallCard from './components/SmallCard.vue';
import BigCard from './components/BigCard.vue';


    export default{
        components: { SmallCard, BigCard },
        name : 'app',
        data(){
          return{
            products : reactive([
              {
                id : 1,
                title: "Cake & Milk",
                desc : "14items",
                image : "./src/img/card1.png",
                bgcolor : '#F2FCE4'
              },
              {
                id : 2,
                title: "Orange",
                desc : "17items",
                image : "./src/img/card2.png",
                bgcolor : '#FFFCEB'
              },
              {
                id : 3,
                title: "Orginic Kiwi",
                desc : "21items",
                image : "./src/img/card3.png",
                bgcolor : '#ECFFEC'
              },
              {
                id : 4,
                title: "Peach",
                desc : "17items",
                image : "./src/img/card4.png",
                bgcolor : '#FEEFEA'
              },
              {
                id :5,
                title: "Headphone",
                desc : "33items ",
                image : "./src/img/card5.png",
                bgcolor : '#FFF3EB'
              },
              {
                id : 6,
                title: "Vegetables",
                desc : "65items",
                image : "./src/img/card6.png",
                bgcolor : '#FFF3FF'
              },
              {
                id : 7,
                title: "Black plum",
                desc : "25items",
                image : "./src/img/card7.png",
                bgcolor : '#F2FCE4'
              },
              {
                id: 8,
                title: "Red Apple",
                desc : "68items",
                image : "./src/img/card8.png",
                bgcolor : '#FFFCEB'
              },
              {
                id : 9,
                title: "Cake & Milk",
                desc : "54items",
                image : "./src/img/card9.png",
                bgcolor : '#F2FCE4'
              },
              {
                id : 10,
                title: "Snack",
                desc : "34items",
                image : "./src/img/card10.png",
                bgcolor : '#FFF3FF'
              }
            ]),
            bigproducts : reactive([
            {
              id : 1,
              titlebig : "Everyday Free & Clean with Our Products ",
              button : "Shop Now",
              bigimg : "./src/img/big-card3.jpg",
              btncolor: '#3BB77E',
              bigcolor: '#F0E8D5'
            },
            {
              id : 2,
              titlebig : "Make your Breakfast Healthy and Easy",
              button : "Shop Now",
              bigimg : "./src/img/big-card2.png",
              btncolor: '#3BB77E',
              bigcolor: '#F3E8E8'
            },
            {
              id : 3,
              titlebig : "The best Organic Products Online",
              button : "Shop Now",
              bigimg : "./src/img/big-card1.jpg",
              btncolor: '#FDC040',
              bigcolor: '#E7EAF3'
            },
          ])
          }
        },
    }
</script>

<style scoped>
    body{
      width: 100%;
      height: 100vh;
    }
    .tamplate-card{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        margin-bottom: 30px;
    }

    .big-template{
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 300px;
      margin-right: 300px;
      gap: 30px;
    }
</style>
