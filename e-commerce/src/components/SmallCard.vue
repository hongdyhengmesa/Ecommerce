<template>
    <div class="container-card" :style="{backgroundColor: bgcolor}">
        <div class="content-card">
            <img :src="image" class="card-logo" alt="">
            <div class="body-card">
                <h3>{{ title }}</h3>
                <p>{{ desc }}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    export default{
        name : 'SmallCard',
        props : {
            title : {
                type : String,
                required : true
            },
            desc : {
                type : String,
                required : true
            },
            image : {
                type : String,
                required : true
            },
            bgcolor : {
                type : String,
                required : true
            }
        }
    }
</script>

<style scoped>
    *{
        padding: 0;
        margin : 0;
        box-sizing: border-box;
    }

    .container-card{
        width: 100%;
        height: 100%;
    }

    .container-card{
        width: 136px;
        height: 185px;
        top: -113px;
        left: 33px;
        border: 1px solid #E2E2E2;
        border-radius: 8px;
        transition: transform 0.4s;
        cursor: pointer;
    }

    .container-card:hover{
        transform: scale(1.1);
        box-shadow: 0px 4px 10px rgb(121, 131, 121);
        border: 2px solid rgb(178, 174, 174);
    }

    .container-card .card-logo{
        width: 100px;
        height: 100px;
        margin-left: 10px;
        margin-top: 10px;
    }

    h3{
        text-align: center;
        font-weight: 700;
        font-size: 12px;
    }

    p{
        text-align: center;
        font-size: 12px;
        font-weight: 500;
    }


</style>