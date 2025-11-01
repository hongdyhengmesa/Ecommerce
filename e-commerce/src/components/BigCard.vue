<template>
    <div class="bigcard-container" :style="{backgroundColor: bigcolor}">
        <div class="main-big">
            <div class="title-left">
                <h2>{{ titlebig }}</h2>
                <button class="big-btn" :style="{backgroundColor: btncolor}">{{ button }} →</button>
            </div>
            <div class="img-right">
                <img :src="bigimg" class="big-img" alt="">
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    export default{
        name : 'BigCard',
        props :{
            titlebig :{
                type : String,
                required : true
            },
            button :{
                type : String,
                requeired : true
            },
            bigcolor :{
                type : String,
                requeired : true
            },
            bigimg :{
                type: String,
                requeired: true
            },
            btncolor :{
                type : String,
                requeired : true
            }
        }
    }
</script>

<style scoped>
    .bigcard-container{
        width: 100%;
        height: 100vh;
    }

    .main-big{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .bigcard-container{
        width: 512px;
        height: 300px;
        border-radius: 10px;
        transition: transform 0.4s;
    }

    .bigcard-container:hover{
        transform: scale(1.1);
        border: 1px solid gray;
        box-shadow: 3px 0px 3px 0px rgb(122, 119, 119);
    }

    .bigcard-container .big-img{
        width: 204px ;
        height: 216px;
        margin: 70px 40px 20px 10px;
    }

    .bigcard-container .big-btn{
        width: 110px;
        height: 32px;
        border: none;
        color: white;
        font-size: 15px;
        font-weight: 600;
        border-radius: 5px;
        margin-left: 40px;
        margin-top: 10px;
    }

    h2{
        margin-left: 40px;
        font-size: 16px;
        font-weight: 600;
    }


</style>